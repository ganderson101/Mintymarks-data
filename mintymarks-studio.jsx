import React, { useState, useMemo, useRef, useCallback } from "react";

// ============================================================================
// MintyMarks Content Studio
// A mobile-first tool to analyse and expand the questions/explanations/resources
// data files. Runs entirely in-browser. No server, no copy-paste.
// ============================================================================

// ---- Parsing helpers -------------------------------------------------------
// The data files are JS modules: `export const QUESTIONS = [ ... ];`
// We extract the array/object literal and parse it. Because the files use
// valid JSON-ish object literals with double-quoted keys, JSON.parse works for
// questions. Explanations/resources use unquoted keys + backticks, so we fall
// back to a sandboxed Function eval for those.

function extractLiteral(text, exportName) {
  const idx = text.indexOf(`export const ${exportName}`);
  if (idx === -1) return null;
  const eq = text.indexOf("=", idx);
  if (eq === -1) return null;
  // Find the start of the literal (first [ or { after =)
  let start = eq + 1;
  while (start < text.length && /\s/.test(text[start])) start++;
  const open = text[start];
  const close = open === "[" ? "]" : open === "{" ? "}" : null;
  if (!close) return null;
  // Walk forward respecting strings/templates to find the matching close.
  let depth = 0;
  let i = start;
  let inStr = null; // ' " `
  let prev = "";
  for (; i < text.length; i++) {
    const c = text[i];
    if (inStr) {
      if (c === inStr && prev !== "\\") inStr = null;
    } else {
      if (c === '"' || c === "'" || c === "`") inStr = c;
      else if (c === "[" || c === "{") depth++;
      else if (c === "]" || c === "}") {
        depth--;
        if (depth === 0) {
          return text.slice(start, i + 1);
        }
      }
    }
    prev = c;
  }
  return null;
}

function parseQuestions(text) {
  const lit = extractLiteral(text, "QUESTIONS");
  if (!lit) throw new Error("Could not find `export const QUESTIONS = [...]`");
  try {
    return JSON.parse(lit);
  } catch (e) {
    // Fallback: eval in sandbox (handles trailing commas, unquoted keys)
    // eslint-disable-next-line no-new-func
    return Function(`"use strict"; return (${lit});`)();
  }
}

function parseObjectModule(text, exportName) {
  const lit = extractLiteral(text, exportName);
  if (!lit) return null;
  // eslint-disable-next-line no-new-func
  return Function(`"use strict"; return (${lit});`)();
}

// ---- ID helpers ------------------------------------------------------------
function maxIdNumberForPrefix(questions, prefix) {
  let max = 0;
  for (const q of questions) {
    if (typeof q.id === "string" && q.id.startsWith(prefix)) {
      const m = q.id.match(/(\d+)\s*$/);
      if (m) max = Math.max(max, parseInt(m[1], 10));
    }
  }
  return max;
}

function pad(n, width) {
  const s = String(n);
  return s.length >= width ? s : "0".repeat(width - s.length) + s;
}

// Build a deterministic id stem from level + category, mirroring existing style
// e.g. ks2 + "Number & place value" -> ks2_npv  (we can't perfectly reproduce
// the original abbreviations, so we let the user confirm/override the stem).
function defaultStem(level, category) {
  const words = category
    .toLowerCase()
    .replace(/[^a-z0-9 ]/g, " ")
    .split(/\s+/)
    .filter(Boolean);
  const abbr = words.map((w) => w[0]).join("").slice(0, 4) || "x";
  return `${level}_${abbr}`;
}

// ---- Stats -----------------------------------------------------------------
function buildStats(questions) {
  const byLevel = {};
  const byLevelSubject = {};
  const cells = {}; // level|subject|category -> {count, byDiff:{}, hasExplanation, hasWorkings, stems:Set}
  for (const q of questions) {
    const level = q.level ?? "(none)";
    const subject = q.subject ?? "(none)";
    const category = q.category ?? "(none)";
    byLevel[level] = (byLevel[level] || 0) + 1;
    const ls = `${level} / ${subject}`;
    byLevelSubject[ls] = (byLevelSubject[ls] || 0) + 1;
    const key = `${level}|||${subject}|||${category}`;
    if (!cells[key]) {
      cells[key] = {
        level,
        subject,
        category,
        count: 0,
        byDiff: {},
        withExplanation: 0,
        withWorkings: 0,
        stems: new Set(),
      };
    }
    const cell = cells[key];
    cell.count++;
    const d = q.difficulty ?? "?";
    cell.byDiff[d] = (cell.byDiff[d] || 0) + 1;
    if (q.explanation) cell.withExplanation++;
    if (q.workings || q.solution) cell.withWorkings++;
    if (typeof q.id === "string") {
      const stem = q.id.replace(/_?\d+\s*$/, "");
      cell.stems.add(stem);
    }
  }
  return { byLevel, byLevelSubject, cells };
}

// ---- Duplicate detection ---------------------------------------------------
function findDuplicates(questions) {
  const byText = {};
  const byId = {};
  const dupTexts = [];
  const dupIds = [];
  for (const q of questions) {
    const t = (q.text || "").trim().toLowerCase();
    if (t) {
      byText[t] = (byText[t] || 0) + 1;
    }
    if (q.id) {
      if (byId[q.id]) dupIds.push(q.id);
      byId[q.id] = true;
    }
  }
  for (const [t, n] of Object.entries(byText)) {
    if (n > 1) dupTexts.push({ text: t, count: n });
  }
  return { dupTexts, dupIds };
}

// ---- Anthropic API ---------------------------------------------------------
async function callClaude(prompt, { maxTokens = 4096 } = {}) {
  const res = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      model: "claude-sonnet-4-20250514",
      max_tokens: maxTokens,
      messages: [{ role: "user", content: prompt }],
    }),
  });
  if (!res.ok) {
    const txt = await res.text();
    throw new Error(`API ${res.status}: ${txt.slice(0, 300)}`);
  }
  const data = await res.json();
  return (data.content || [])
    .map((b) => (b.type === "text" ? b.text : ""))
    .filter(Boolean)
    .join("\n");
}

function stripFences(s) {
  return s
    .replace(/^[\s\S]*?```(?:json)?\s*/m, (m) => (m.includes("```") ? "" : m))
    .replace(/```[\s\S]*$/m, "")
    .trim();
}

function extractJsonArray(s) {
  // Be tolerant: find first [ and last ] and parse between.
  let t = s.trim();
  if (t.startsWith("```")) t = stripFences(t);
  const first = t.indexOf("[");
  const last = t.lastIndexOf("]");
  if (first === -1 || last === -1) throw new Error("No JSON array found in model output");
  const slice = t.slice(first, last + 1);
  return JSON.parse(slice);
}

function extractJsonObject(s) {
  let t = s.trim();
  if (t.startsWith("```")) t = stripFences(t);
  const first = t.indexOf("{");
  const last = t.lastIndexOf("}");
  if (first === -1 || last === -1) throw new Error("No JSON object found in model output");
  return JSON.parse(t.slice(first, last + 1));
}

// ---- Serialisation (output files) -----------------------------------------
function serialiseQuestionsAppend(newQuestions) {
  // One question per line, matching the existing file's compact style.
  const lines = newQuestions.map((q) => "  " + JSON.stringify(q) + ",");
  return lines.join("\n");
}

// ============================================================================
// UI
// ============================================================================

const styles = {
  app: {
    fontFamily: "'Georgia', 'Iowan Old Style', serif",
    background: "#0f1410",
    color: "#e8efe6",
    minHeight: "100vh",
    margin: 0,
    padding: "0 0 64px",
  },
};

const MINT = "#6fe3b0";
const MINT_DIM = "#3a8f6a";
const INK = "#0f1410";
const PANEL = "#16201a";
const PANEL2 = "#1d2a22";
const BORDER = "#2a3a30";
const WARN = "#e3b86f";
const DANGER = "#e36f8f";

function Tag({ children, color = MINT }) {
  return (
    <span
      style={{
        display: "inline-block",
        fontSize: 11,
        fontFamily: "ui-monospace, monospace",
        background: "rgba(111,227,176,0.12)",
        color,
        border: `1px solid ${color}44`,
        borderRadius: 6,
        padding: "1px 7px",
        marginRight: 6,
        marginBottom: 4,
      }}
    >
      {children}
    </span>
  );
}

function Btn({ children, onClick, kind = "primary", disabled, style }) {
  const base = {
    fontFamily: "ui-monospace, monospace",
    fontSize: 14,
    fontWeight: 600,
    borderRadius: 10,
    padding: "12px 16px",
    border: "none",
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.45 : 1,
    transition: "transform 0.08s ease",
    width: "100%",
    ...style,
  };
  const kinds = {
    primary: { background: MINT, color: INK },
    ghost: { background: "transparent", color: MINT, border: `1px solid ${MINT_DIM}` },
    dark: { background: PANEL2, color: "#e8efe6", border: `1px solid ${BORDER}` },
  };
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{ ...base, ...kinds[kind] }}
      onTouchStart={(e) => (e.currentTarget.style.transform = "scale(0.98)")}
      onTouchEnd={(e) => (e.currentTarget.style.transform = "scale(1)")}
    >
      {children}
    </button>
  );
}

function Section({ title, children, right }) {
  return (
    <div style={{ marginBottom: 18 }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 10,
        }}
      >
        <h2
          style={{
            fontSize: 13,
            letterSpacing: 2,
            textTransform: "uppercase",
            color: MINT,
            margin: 0,
            fontFamily: "ui-monospace, monospace",
          }}
        >
          {title}
        </h2>
        {right}
      </div>
      {children}
    </div>
  );
}

function download(filename, text) {
  const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

export default function App() {
  const [tab, setTab] = useState("load");
  const [questions, setQuestions] = useState(null);
  const [explanations, setExplanations] = useState(null);
  const [resources, setResources] = useState(null);
  const [loadMsg, setLoadMsg] = useState("");
  const [error, setError] = useState("");

  const fileRef = useRef(null);

  const stats = useMemo(() => (questions ? buildStats(questions) : null), [questions]);
  const dupes = useMemo(() => (questions ? findDuplicates(questions) : null), [questions]);

  const handleFiles = useCallback(async (fileList) => {
    setError("");
    setLoadMsg("Reading files…");
    const files = Array.from(fileList);
    let loadedQ = 0;
    for (const f of files) {
      const text = await f.text();
      const name = f.name.toLowerCase();
      try {
        if (name.includes("question") || text.includes("export const QUESTIONS")) {
          const parsed = parseQuestions(text);
          setQuestions(parsed);
          loadedQ = parsed.length;
        } else if (name.includes("explanation") || text.includes("export const EXPLANATIONS")) {
          setExplanations(parseObjectModule(text, "EXPLANATIONS"));
        } else if (name.includes("resource") || text.includes("export const RESOURCES")) {
          setResources(parseObjectModule(text, "RESOURCES"));
        }
      } catch (e) {
        setError(`Failed to parse ${f.name}: ${e.message}`);
      }
    }
    setLoadMsg(
      loadedQ
        ? `Loaded ${loadedQ.toLocaleString()} questions${files.length > 1 ? " (+ other files)" : ""}.`
        : "Files read. Check that question file matched."
    );
    if (loadedQ) setTab("analyse");
  }, []);

  return (
    <div style={styles.app}>
      {/* Header */}
      <div
        style={{
          padding: "22px 18px 14px",
          borderBottom: `1px solid ${BORDER}`,
          background: `linear-gradient(180deg, #18241d, ${INK})`,
          position: "sticky",
          top: 0,
          zIndex: 10,
        }}
      >
        <div style={{ fontSize: 22, fontWeight: 700, letterSpacing: 0.5 }}>
          MintyMarks <span style={{ color: MINT }}>Studio</span>
        </div>
        <div style={{ fontSize: 12, color: "#8aa595", marginTop: 2 }}>
          Content analysis & generation — mobile workflow
        </div>
      </div>

      {/* Tabs */}
      <div
        style={{
          display: "flex",
          gap: 6,
          padding: "12px 14px",
          overflowX: "auto",
          borderBottom: `1px solid ${BORDER}`,
        }}
      >
        {[
          ["load", "Load"],
          ["analyse", "Gaps"],
          ["generate", "Generate Qs"],
          ["enrich", "Explain / Workings"],
          ["subject", "New Subject"],
          ["dupes", "Health"],
        ].map(([k, label]) => (
          <button
            key={k}
            onClick={() => setTab(k)}
            style={{
              flex: "0 0 auto",
              fontFamily: "ui-monospace, monospace",
              fontSize: 12,
              fontWeight: 600,
              padding: "8px 12px",
              borderRadius: 8,
              border: `1px solid ${tab === k ? MINT : BORDER}`,
              background: tab === k ? "rgba(111,227,176,0.14)" : "transparent",
              color: tab === k ? MINT : "#8aa595",
              whiteSpace: "nowrap",
            }}
          >
            {label}
          </button>
        ))}
      </div>

      <div style={{ padding: 16, maxWidth: 720, margin: "0 auto" }}>
        {error && (
          <div
            style={{
              background: "rgba(227,111,143,0.12)",
              border: `1px solid ${DANGER}55`,
              color: DANGER,
              padding: 12,
              borderRadius: 10,
              marginBottom: 14,
              fontSize: 13,
              fontFamily: "ui-monospace, monospace",
            }}
          >
            {error}
          </div>
        )}

        {tab === "load" && (
          <LoadTab
            fileRef={fileRef}
            handleFiles={handleFiles}
            loadMsg={loadMsg}
            questions={questions}
            explanations={explanations}
            resources={resources}
          />
        )}
        {tab === "analyse" && <AnalyseTab stats={stats} questions={questions} />}
        {tab === "generate" && (
          <GenerateTab
            stats={stats}
            questions={questions}
            explanations={explanations}
          />
        )}
        {tab === "enrich" && <EnrichTab questions={questions} />}
        {tab === "subject" && <SubjectTab questions={questions} />}
        {tab === "dupes" && <DupesTab dupes={dupes} questions={questions} />}
      </div>
    </div>
  );
}

// ---- Load tab --------------------------------------------------------------
function LoadTab({ fileRef, handleFiles, loadMsg, questions, explanations, resources }) {
  return (
    <div>
      <Section title="Load your data files">
        <div
          style={{
            border: `2px dashed ${BORDER}`,
            borderRadius: 14,
            padding: 24,
            textAlign: "center",
            background: PANEL,
          }}
        >
          <div style={{ fontSize: 14, color: "#b9d0c3", marginBottom: 14, lineHeight: 1.5 }}>
            Upload <b>questions.js</b>, <b>explanations.js</b> and{" "}
            <b>resources.js</b> straight from your phone. You can select all
            three at once.
          </div>
          <input
            ref={fileRef}
            type="file"
            accept=".js,.txt,.json"
            multiple
            style={{ display: "none" }}
            onChange={(e) => e.target.files && handleFiles(e.target.files)}
          />
          <Btn onClick={() => fileRef.current && fileRef.current.click()}>
            Choose files
          </Btn>
        </div>
        {loadMsg && (
          <div style={{ marginTop: 12, fontSize: 13, color: MINT, fontFamily: "ui-monospace, monospace" }}>
            {loadMsg}
          </div>
        )}
      </Section>

      <Section title="Status">
        <StatusRow label="questions.js" ok={!!questions} detail={questions ? `${questions.length.toLocaleString()} questions` : "not loaded"} />
        <StatusRow label="explanations.js" ok={!!explanations} detail={explanations ? "loaded" : "optional"} />
        <StatusRow label="resources.js" ok={!!resources} detail={resources ? "loaded" : "optional"} />
      </Section>

      <div style={{ fontSize: 12, color: "#6f8a7c", lineHeight: 1.6, marginTop: 8 }}>
        Everything runs in your browser. Nothing is uploaded to a server during
        analysis. The Anthropic API is only called when you actually generate
        content (Generate / Enrich / New Subject tabs).
      </div>
    </div>
  );
}

function StatusRow({ label, ok, detail }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px 14px",
        background: PANEL,
        border: `1px solid ${BORDER}`,
        borderRadius: 10,
        marginBottom: 8,
      }}
    >
      <span style={{ fontFamily: "ui-monospace, monospace", fontSize: 13 }}>
        <span style={{ color: ok ? MINT : "#6f8a7c", marginRight: 8 }}>{ok ? "●" : "○"}</span>
        {label}
      </span>
      <span style={{ fontSize: 12, color: "#8aa595" }}>{detail}</span>
    </div>
  );
}

// ---- Analyse tab -----------------------------------------------------------
function AnalyseTab({ stats, questions }) {
  if (!stats) return <Empty msg="Load questions.js first (Load tab)." />;

  const cellList = Object.values(stats.cells).sort((a, b) => a.count - b.count);
  const total = questions.length;
  const counts = cellList.map((c) => c.count);
  const median = counts.length ? counts[Math.floor(counts.length / 2)] : 0;
  const thinThreshold = Math.max(20, Math.round(median * 0.4));

  return (
    <div>
      <Section title="Overview">
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 12 }}>
          <Stat big={total.toLocaleString()} label="total questions" />
          <Stat big={Object.keys(stats.cells).length} label="topic cells" />
          <Stat big={Object.keys(stats.byLevel).length} label="levels" />
        </div>
        <div style={{ marginBottom: 6, fontSize: 12, color: "#8aa595" }}>By level / subject</div>
        {Object.entries(stats.byLevelSubject)
          .sort((a, b) => b[1] - a[1])
          .map(([k, v]) => (
            <BarRow key={k} label={k} value={v} max={Math.max(...Object.values(stats.byLevelSubject))} />
          ))}
      </Section>

      <Section title={`Thinnest topics (under ${thinThreshold})`}>
        <div style={{ fontSize: 12, color: "#8aa595", marginBottom: 10 }}>
          Ranked by question count. These are your priority gaps. Difficulty
          spread shown as d1/d2/d3…
        </div>
        {cellList.slice(0, 25).map((c) => {
          const thin = c.count < thinThreshold;
          return (
            <div
              key={`${c.level}|${c.subject}|${c.category}`}
              style={{
                background: PANEL,
                border: `1px solid ${thin ? WARN + "55" : BORDER}`,
                borderRadius: 10,
                padding: 12,
                marginBottom: 8,
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                <div style={{ fontSize: 14, fontWeight: 600 }}>{c.category}</div>
                <div
                  style={{
                    fontFamily: "ui-monospace, monospace",
                    fontSize: 16,
                    color: thin ? WARN : MINT,
                    fontWeight: 700,
                  }}
                >
                  {c.count}
                </div>
              </div>
              <div style={{ marginTop: 6 }}>
                <Tag>{c.level}</Tag>
                <Tag color="#8ab0e3">{c.subject}</Tag>
                {Object.entries(c.byDiff)
                  .sort()
                  .map(([d, n]) => (
                    <Tag key={d} color="#b99ae3">
                      d{d}:{n}
                    </Tag>
                  ))}
              </div>
              {c.withExplanation < c.count && (
                <div style={{ fontSize: 11, color: "#8aa595", marginTop: 6 }}>
                  {c.withExplanation}/{c.count} have per-question explanation
                </div>
              )}
            </div>
          );
        })}
      </Section>
    </div>
  );
}

function Stat({ big, label }) {
  return (
    <div
      style={{
        flex: "1 1 30%",
        minWidth: 90,
        background: PANEL,
        border: `1px solid ${BORDER}`,
        borderRadius: 12,
        padding: "12px 14px",
      }}
    >
      <div style={{ fontSize: 24, fontWeight: 700, color: MINT, fontFamily: "ui-monospace, monospace" }}>{big}</div>
      <div style={{ fontSize: 11, color: "#8aa595", marginTop: 2 }}>{label}</div>
    </div>
  );
}

function BarRow({ label, value, max }) {
  const pct = max ? Math.round((value / max) * 100) : 0;
  return (
    <div style={{ marginBottom: 7 }}>
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12, marginBottom: 3 }}>
        <span style={{ color: "#cfe0d6" }}>{label}</span>
        <span style={{ fontFamily: "ui-monospace, monospace", color: "#8aa595" }}>{value.toLocaleString()}</span>
      </div>
      <div style={{ height: 7, background: PANEL2, borderRadius: 4, overflow: "hidden" }}>
        <div style={{ width: `${pct}%`, height: "100%", background: MINT, opacity: 0.7 }} />
      </div>
    </div>
  );
}

// ---- Generate tab ----------------------------------------------------------
function GenerateTab({ stats, questions }) {
  const [sel, setSel] = useState(null); // cell key
  const [count, setCount] = useState(25);
  const [difficulty, setDifficulty] = useState("mixed");
  const [stem, setStem] = useState("");
  const [startNum, setStartNum] = useState(1);
  const [running, setRunning] = useState(false);
  const [progress, setProgress] = useState("");
  const [output, setOutput] = useState(null);
  const [genError, setGenError] = useState("");

  if (!stats) return <Empty msg="Load questions.js first (Load tab)." />;

  const cellList = Object.values(stats.cells).sort((a, b) => a.count - b.count);
  const selectedCell = sel ? stats.cells[sel] : null;

  function onSelect(key) {
    setSel(key);
    const cell = stats.cells[key];
    const guessStem =
      cell.stems.size === 1 ? Array.from(cell.stems)[0] : defaultStem(cell.level, cell.category);
    setStem(guessStem);
    setStartNum(maxIdNumberForPrefix(questions, guessStem) + 1);
    setOutput(null);
    setGenError("");
  }

  async function generate() {
    if (!selectedCell) return;
    setRunning(true);
    setGenError("");
    setOutput(null);
    try {
      // Sample up to 6 existing questions from this exact cell as style anchors.
      const samples = questions
        .filter(
          (q) =>
            q.level === selectedCell.level &&
            q.subject === selectedCell.subject &&
            q.category === selectedCell.category
        )
        .slice(0, 6);

      const all = [];
      const batchSize = 15;
      let made = 0;
      let num = startNum;
      while (made < count) {
        const want = Math.min(batchSize, count - made);
        setProgress(`Generating ${made + 1}–${made + want} of ${count}…`);
        const prompt = buildQuestionPrompt({
          level: selectedCell.level,
          subject: selectedCell.subject,
          category: selectedCell.category,
          difficulty,
          want,
          stem,
          startNum: num,
          samples,
        });
        const raw = await callClaude(prompt, { maxTokens: 4096 });
        const arr = extractJsonArray(raw);
        for (const q of arr) {
          all.push(q);
        }
        made += arr.length;
        num = startNum + made;
        if (arr.length === 0) break; // safety
      }

      // Dedupe against existing + within batch
      const existingTexts = new Set(questions.map((q) => (q.text || "").trim().toLowerCase()));
      const seen = new Set();
      const clean = [];
      let dupCount = 0;
      for (const q of all) {
        const t = (q.text || "").trim().toLowerCase();
        if (existingTexts.has(t) || seen.has(t)) {
          dupCount++;
          continue;
        }
        seen.add(t);
        clean.push(q);
      }
      // Renumber ids sequentially & guarantee uniqueness
      const existingIds = new Set(questions.map((q) => q.id));
      let n = startNum;
      for (const q of clean) {
        let id = `${stem}_${pad(n, 4)}`;
        while (existingIds.has(id)) {
          n++;
          id = `${stem}_${pad(n, 4)}`;
        }
        q.id = id;
        q.level = selectedCell.level;
        q.subject = selectedCell.subject;
        q.category = selectedCell.category;
        existingIds.add(id);
        n++;
      }

      setOutput({ questions: clean, dupCount });
      setProgress("");
    } catch (e) {
      setGenError(e.message);
    } finally {
      setRunning(false);
    }
  }

  return (
    <div>
      <Section title="1 · Pick a topic to expand">
        <div style={{ maxHeight: 220, overflowY: "auto", borderRadius: 10, border: `1px solid ${BORDER}` }}>
          {cellList.map((c) => {
            const key = `${c.level}|||${c.subject}|||${c.category}`;
            const active = sel === key;
            return (
              <button
                key={key}
                onClick={() => onSelect(key)}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                  textAlign: "left",
                  padding: "10px 12px",
                  background: active ? "rgba(111,227,176,0.14)" : "transparent",
                  border: "none",
                  borderBottom: `1px solid ${BORDER}`,
                  color: "#e8efe6",
                  fontSize: 13,
                  cursor: "pointer",
                }}
              >
                <span>
                  <span style={{ color: "#8aa595", fontFamily: "ui-monospace, monospace", fontSize: 11 }}>
                    {c.level}/{c.subject}
                  </span>
                  <br />
                  {c.category}
                </span>
                <span style={{ fontFamily: "ui-monospace, monospace", color: active ? MINT : "#8aa595" }}>
                  {c.count}
                </span>
              </button>
            );
          })}
        </div>
      </Section>

      {selectedCell && (
        <Section title="2 · Configure">
          <Field label="How many questions">
            <NumStepper value={count} setValue={setCount} min={5} max={200} step={5} />
          </Field>
          <Field label="Difficulty">
            <Segmented
              options={["mixed", "1", "2", "3", "4"]}
              value={difficulty}
              onChange={setDifficulty}
            />
          </Field>
          <Field label="ID stem (auto-detected from existing IDs)">
            <input
              value={stem}
              onChange={(e) => setStem(e.target.value)}
              style={inputStyle}
            />
          </Field>
          <Field label="Start numbering at">
            <NumStepper value={startNum} setValue={setStartNum} min={1} max={99999} step={1} />
          </Field>
          <div style={{ fontSize: 11, color: "#8aa595", marginBottom: 12 }}>
            New IDs will look like <code style={{ color: MINT }}>{stem}_{pad(startNum, 4)}</code>. Start
            number is auto-set just past your current max for this stem, so no
            collisions with existing questions.
          </div>
          <Btn onClick={generate} disabled={running}>
            {running ? progress || "Generating…" : `Generate ${count} questions`}
          </Btn>
        </Section>
      )}

      {genError && (
        <div style={{ color: DANGER, fontSize: 13, marginTop: 10, fontFamily: "ui-monospace, monospace" }}>
          {genError}
        </div>
      )}

      {output && (
        <Section
          title={`3 · Output — ${output.questions.length} questions`}
          right={
            output.dupCount ? (
              <span style={{ fontSize: 11, color: WARN }}>{output.dupCount} dupes removed</span>
            ) : null
          }
        >
          <PreviewQuestions questions={output.questions.slice(0, 4)} />
          <div style={{ marginBottom: 8 }}>
            <Btn
              onClick={() =>
                download(
                  `new_questions_${selectedCell.level}_${selectedCell.subject}_${Date.now()}.js`,
                  fileHeaderForAppend(selectedCell) + serialiseQuestionsAppend(output.questions) + "\n"
                )
              }
            >
              ⬇ Download .js (append block)
            </Btn>
          </div>
          <Btn
            kind="ghost"
            onClick={() => {
              navigator.clipboard &&
                navigator.clipboard.writeText(serialiseQuestionsAppend(output.questions));
            }}
          >
            Copy to clipboard
          </Btn>
          <div style={{ fontSize: 11, color: "#8aa595", marginTop: 10, lineHeight: 1.6 }}>
            The download is a ready-to-paste block: open questions.js in GitHub,
            and insert these lines just before the closing <code>{"];"}</code>.
            IDs and schema already match.
          </div>
        </Section>
      )}
    </div>
  );
}

function fileHeaderForAppend(cell) {
  return `// === APPEND TO questions.js (before the closing "];") ===\n// ${cell.level} / ${cell.subject} / ${cell.category}\n// Generated by MintyMarks Studio\n`;
}

// ---- Enrich tab (per-question explanations + workings) ---------------------
function EnrichTab({ questions }) {
  const [mode, setMode] = useState("explanation"); // explanation | workings
  const [scope, setScope] = useState(null);
  const [running, setRunning] = useState(false);
  const [progress, setProgress] = useState("");
  const [output, setOutput] = useState(null);
  const [err, setErr] = useState("");

  const stats = useMemo(() => (questions ? buildStats(questions) : null), [questions]);
  if (!stats) return <Empty msg="Load questions.js first (Load tab)." />;

  const cellList = Object.values(stats.cells).sort((a, b) => a.count - b.count);

  async function run() {
    if (!scope) return;
    setRunning(true);
    setErr("");
    setOutput(null);
    try {
      const [level, subject, category] = scope.split("|||");
      const targets = questions.filter(
        (q) =>
          q.level === level &&
          q.subject === subject &&
          q.category === category &&
          (mode === "explanation" ? !q.explanation : !(q.workings || q.solution))
      );
      const enriched = [];
      const batchSize = 12;
      for (let i = 0; i < targets.length; i += batchSize) {
        const batch = targets.slice(i, i + batchSize);
        setProgress(`Enriching ${i + 1}–${Math.min(i + batchSize, targets.length)} of ${targets.length}…`);
        const prompt =
          mode === "explanation"
            ? buildExplanationPrompt(batch)
            : buildWorkingsPrompt(batch);
        const raw = await callClaude(prompt, { maxTokens: 4096 });
        const arr = extractJsonArray(raw);
        for (const item of arr) enriched.push(item);
      }
      setOutput({ items: enriched, field: mode === "explanation" ? "explanation" : "workings" });
      setProgress("");
    } catch (e) {
      setErr(e.message);
    } finally {
      setRunning(false);
    }
  }

  return (
    <div>
      <Section title="Add per-question content">
        <div style={{ fontSize: 12, color: "#8aa595", marginBottom: 12, lineHeight: 1.6 }}>
          Adds a new field to each question. <b>Explanation</b> = a short
          plain-language reason for the answer. <b>Workings</b> = step-by-step
          calculation leading to the correct option (great for maths). Output is
          a patch file keyed by question <code>id</code> so you can merge it
          safely at your desktop.
        </div>
        <Field label="What to add">
          <Segmented
            options={["explanation", "workings"]}
            value={mode}
            onChange={setMode}
          />
        </Field>
        <Field label="Topic to enrich">
          <select
            value={scope || ""}
            onChange={(e) => setScope(e.target.value)}
            style={{ ...inputStyle, appearance: "auto" }}
          >
            <option value="">Select a topic…</option>
            {cellList.map((c) => {
              const key = `${c.level}|||${c.subject}|||${c.category}`;
              const missing =
                mode === "explanation" ? c.count - c.withExplanation : c.count - c.withWorkings;
              return (
                <option key={key} value={key}>
                  {c.level}/{c.subject} — {c.category} ({missing} missing)
                </option>
              );
            })}
          </select>
        </Field>
        <Btn onClick={run} disabled={running || !scope}>
          {running ? progress || "Working…" : "Generate patch"}
        </Btn>
      </Section>

      {err && (
        <div style={{ color: DANGER, fontSize: 13, fontFamily: "ui-monospace, monospace" }}>{err}</div>
      )}

      {output && (
        <Section title={`Patch — ${output.items.length} entries`}>
          <div
            style={{
              background: PANEL,
              border: `1px solid ${BORDER}`,
              borderRadius: 10,
              padding: 12,
              fontFamily: "ui-monospace, monospace",
              fontSize: 11,
              maxHeight: 200,
              overflow: "auto",
              marginBottom: 10,
              whiteSpace: "pre-wrap",
            }}
          >
            {JSON.stringify(output.items.slice(0, 3), null, 2)}
          </div>
          <Btn
            onClick={() =>
              download(
                `patch_${output.field}_${Date.now()}.json`,
                JSON.stringify(output.items, null, 2)
              )
            }
          >
            ⬇ Download patch (.json)
          </Btn>
          <div style={{ fontSize: 11, color: "#8aa595", marginTop: 10, lineHeight: 1.6 }}>
            Each entry is{" "}
            <code style={{ color: MINT }}>{`{ id, ${output.field} }`}</code>.
            At your desktop, run a tiny merge script (I can give you one) that
            loops over the patch and writes the field onto the matching question
            by id. Non-destructive.
          </div>
        </Section>
      )}
    </div>
  );
}

// ---- New subject tab -------------------------------------------------------
function SubjectTab({ questions }) {
  const [subject, setSubject] = useState("");
  const [level, setLevel] = useState("gcse");
  const [categories, setCategories] = useState("");
  const [perCat, setPerCat] = useState(15);
  const [running, setRunning] = useState(false);
  const [progress, setProgress] = useState("");
  const [output, setOutput] = useState(null);
  const [err, setErr] = useState("");

  const levels = useMemo(() => {
    if (!questions) return ["ks2", "ks3", "gcse", "alevel"];
    return Array.from(new Set(questions.map((q) => q.level))).filter(Boolean);
  }, [questions]);

  async function run() {
    setRunning(true);
    setErr("");
    setOutput(null);
    try {
      const cats = categories
        .split("\n")
        .map((s) => s.trim())
        .filter(Boolean);
      if (!subject || cats.length === 0) {
        throw new Error("Enter a subject name and at least one category (one per line).");
      }
      const sampleStyle = questions ? questions.slice(0, 3) : [];
      const allQs = [];
      const allExpl = {};
      for (const cat of cats) {
        setProgress(`Generating ${cat}…`);
        const stem = defaultStem(level, cat) + "_" + subject.toLowerCase().replace(/[^a-z0-9]/g, "").slice(0, 4);
        const prompt = buildNewSubjectPrompt({
          subject,
          level,
          category: cat,
          want: perCat,
          stem,
          sampleStyle,
        });
        const raw = await callClaude(prompt, { maxTokens: 4096 });
        const parsed = extractJsonObject(raw);
        if (parsed.questions) {
          let n = 1;
          for (const q of parsed.questions) {
            q.id = `${stem}_${pad(n++, 4)}`;
            q.level = level;
            q.subject = subject;
            q.category = cat;
            allQs.push(q);
          }
        }
        if (parsed.explanation) {
          allExpl[cat] = parsed.explanation;
        }
      }
      setOutput({ questions: allQs, explanations: { [level]: allExpl }, subject, level });
      setProgress("");
    } catch (e) {
      setErr(e.message);
    } finally {
      setRunning(false);
    }
  }

  return (
    <div>
      <Section title="Scaffold a new subject">
        <div style={{ fontSize: 12, color: "#8aa595", marginBottom: 12, lineHeight: 1.6 }}>
          Creates questions <i>and</i> matching category explanations for a brand
          new subject, in your existing schema and house style. You provide the
          subject and the topic categories; it does the rest.
        </div>
        <Field label="Subject name (e.g. chemistry, biology)">
          <input value={subject} onChange={(e) => setSubject(e.target.value)} style={inputStyle} placeholder="chemistry" />
        </Field>
        <Field label="Level">
          <Segmented options={levels} value={level} onChange={setLevel} />
        </Field>
        <Field label="Categories — one per line">
          <textarea
            value={categories}
            onChange={(e) => setCategories(e.target.value)}
            style={{ ...inputStyle, minHeight: 90, resize: "vertical" }}
            placeholder={"Atomic structure\nThe periodic table\nChemical bonding"}
          />
        </Field>
        <Field label="Questions per category">
          <NumStepper value={perCat} setValue={setPerCat} min={5} max={50} step={5} />
        </Field>
        <Btn onClick={run} disabled={running}>
          {running ? progress || "Generating…" : "Generate subject pack"}
        </Btn>
      </Section>

      {err && <div style={{ color: DANGER, fontSize: 13, fontFamily: "ui-monospace, monospace" }}>{err}</div>}

      {output && (
        <Section title={`Output — ${output.questions.length} questions`}>
          <PreviewQuestions questions={output.questions.slice(0, 3)} />
          <div style={{ marginBottom: 8 }}>
            <Btn
              onClick={() =>
                download(
                  `subject_${output.subject}_questions_${Date.now()}.js`,
                  `// New subject: ${output.subject} (${output.level})\n// Append to questions.js before the closing "];"\n` +
                    serialiseQuestionsAppend(output.questions) +
                    "\n"
                )
              }
            >
              ⬇ Download questions block
            </Btn>
          </div>
          <Btn
            kind="ghost"
            onClick={() =>
              download(
                `subject_${output.subject}_explanations_${Date.now()}.json`,
                JSON.stringify(output.explanations, null, 2)
              )
            }
          >
            ⬇ Download explanations patch
          </Btn>
        </Section>
      )}
    </div>
  );
}

// ---- Health / dupes tab ----------------------------------------------------
function DupesTab({ dupes, questions }) {
  if (!questions) return <Empty msg="Load questions.js first (Load tab)." />;
  return (
    <div>
      <Section title="Data health">
        <div style={{ display: "flex", gap: 8, marginBottom: 14 }}>
          <Stat big={dupes.dupIds.length} label="duplicate IDs" />
          <Stat big={dupes.dupTexts.length} label="duplicate texts" />
        </div>
        {dupes.dupIds.length > 0 && (
          <div style={{ marginBottom: 14 }}>
            <div style={{ fontSize: 12, color: DANGER, marginBottom: 6 }}>Duplicate IDs (must fix):</div>
            {dupes.dupIds.slice(0, 20).map((id) => (
              <Tag key={id} color={DANGER}>{id}</Tag>
            ))}
          </div>
        )}
        {dupes.dupTexts.length > 0 ? (
          <div>
            <div style={{ fontSize: 12, color: WARN, marginBottom: 6 }}>
              Repeated question text (first 15):
            </div>
            {dupes.dupTexts.slice(0, 15).map((d, i) => (
              <div
                key={i}
                style={{
                  fontSize: 12,
                  color: "#cfe0d6",
                  padding: "6px 10px",
                  background: PANEL,
                  border: `1px solid ${BORDER}`,
                  borderRadius: 8,
                  marginBottom: 6,
                }}
              >
                <span style={{ color: WARN, fontFamily: "ui-monospace, monospace" }}>×{d.count}</span>{" "}
                {d.text.slice(0, 80)}
              </div>
            ))}
          </div>
        ) : (
          <div style={{ fontSize: 13, color: MINT }}>No duplicate question text found. 👍</div>
        )}
      </Section>
    </div>
  );
}

// ---- shared small components ----------------------------------------------
function Empty({ msg }) {
  return (
    <div
      style={{
        textAlign: "center",
        padding: 40,
        color: "#6f8a7c",
        fontSize: 14,
        border: `1px dashed ${BORDER}`,
        borderRadius: 12,
      }}
    >
      {msg}
    </div>
  );
}

function Field({ label, children }) {
  return (
    <div style={{ marginBottom: 14 }}>
      <div style={{ fontSize: 12, color: "#8aa595", marginBottom: 6 }}>{label}</div>
      {children}
    </div>
  );
}

const inputStyle = {
  width: "100%",
  boxSizing: "border-box",
  background: PANEL,
  border: `1px solid ${BORDER}`,
  borderRadius: 10,
  padding: "11px 12px",
  color: "#e8efe6",
  fontSize: 14,
  fontFamily: "ui-monospace, monospace",
};

function NumStepper({ value, setValue, min, max, step }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
      <button
        onClick={() => setValue(Math.max(min, value - step))}
        style={stepBtn}
      >
        −
      </button>
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(Math.max(min, Math.min(max, parseInt(e.target.value || "0", 10))))}
        style={{ ...inputStyle, textAlign: "center", flex: 1 }}
      />
      <button
        onClick={() => setValue(Math.min(max, value + step))}
        style={stepBtn}
      >
        +
      </button>
    </div>
  );
}

const stepBtn = {
  width: 44,
  height: 44,
  borderRadius: 10,
  border: `1px solid ${BORDER}`,
  background: PANEL2,
  color: MINT,
  fontSize: 20,
  cursor: "pointer",
};

function Segmented({ options, value, onChange }) {
  return (
    <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
      {options.map((o) => (
        <button
          key={o}
          onClick={() => onChange(o)}
          style={{
            flex: "1 1 auto",
            padding: "10px 8px",
            borderRadius: 9,
            border: `1px solid ${value === o ? MINT : BORDER}`,
            background: value === o ? "rgba(111,227,176,0.14)" : "transparent",
            color: value === o ? MINT : "#8aa595",
            fontSize: 13,
            fontFamily: "ui-monospace, monospace",
            cursor: "pointer",
          }}
        >
          {o}
        </button>
      ))}
    </div>
  );
}

function PreviewQuestions({ questions }) {
  return (
    <div style={{ marginBottom: 12 }}>
      {questions.map((q, i) => (
        <div
          key={i}
          style={{
            background: PANEL,
            border: `1px solid ${BORDER}`,
            borderRadius: 10,
            padding: 12,
            marginBottom: 8,
            fontSize: 13,
          }}
        >
          <div style={{ fontFamily: "ui-monospace, monospace", fontSize: 10, color: "#6f8a7c" }}>{q.id}</div>
          <div style={{ margin: "4px 0 8px", color: "#e8efe6" }}>{q.text}</div>
          {q.options &&
            Object.entries(q.options).map(([k, v]) => (
              <div
                key={k}
                style={{
                  fontSize: 12,
                  color: k === q.correct ? MINT : "#8aa595",
                  fontFamily: "ui-monospace, monospace",
                }}
              >
                {k === q.correct ? "✓" : " "} {k}: {v}
              </div>
            ))}
          {q.workings && (
            <div style={{ fontSize: 12, color: "#b9d0c3", marginTop: 6, fontStyle: "italic" }}>
              {q.workings}
            </div>
          )}
          {q.explanation && (
            <div style={{ fontSize: 12, color: "#b9d0c3", marginTop: 6 }}>{q.explanation}</div>
          )}
        </div>
      ))}
    </div>
  );
}

// ---- Prompt builders -------------------------------------------------------
function buildQuestionPrompt({ level, subject, category, difficulty, want, stem, startNum, samples }) {
  const diffInstruction =
    difficulty === "mixed"
      ? "Vary difficulty across the set (integers 1-4, weighted toward the level's norm)."
      : `Every question must have difficulty exactly ${difficulty}.`;
  return `You are generating multiple-choice education questions for a UK curriculum app.

Match THIS EXACT schema and house style. Here are real existing examples from the same level/subject/category:
${JSON.stringify(samples, null, 2)}

Generate ${want} NEW questions for:
- level: "${level}"
- subject: "${subject}"
- category: "${category}"

Rules:
- Output ONLY a JSON array, no prose, no markdown fences.
- Each object: {"id","level","subject","category","text","options":{"A","B","C","D"},"correct","difficulty"}
- id format: "${stem}_NNNN" starting at ${pad(startNum, 4)} and incrementing.
- "correct" is the KEY ("A"/"B"/"C"/"D") of the right option. Distribute the correct key fairly evenly.
- ${diffInstruction}
- Distractors must be plausible and reflect common misconceptions, not random.
- Do NOT duplicate the example questions. Vary the numbers/scenarios.
- All maths must be correct. Verify each answer.

Return the JSON array now.`;
}

function buildExplanationPrompt(batch) {
  const slim = batch.map((q) => ({
    id: q.id,
    text: q.text,
    options: q.options,
    correct: q.correct,
  }));
  return `For each question below, write a concise one or two sentence explanation of WHY the correct answer is correct, pitched at the student level. Plain language, no jargon.

Questions:
${JSON.stringify(slim, null, 2)}

Output ONLY a JSON array of objects: {"id": "<id>", "explanation": "<text>"}.
No markdown, no prose outside the JSON. Keep each explanation under 40 words.`;
}

function buildWorkingsPrompt(batch) {
  const slim = batch.map((q) => ({
    id: q.id,
    text: q.text,
    options: q.options,
    correct: q.correct,
  }));
  return `For each question, write the step-by-step working that leads to the correct answer. This is for a "show me the calculation" feature, so show the actual arithmetic/method clearly, line by line, using \\n between steps.

Questions:
${JSON.stringify(slim, null, 2)}

Output ONLY a JSON array of objects: {"id": "<id>", "workings": "<steps with \\n between them>"}.
No markdown fences, no prose outside the JSON. Be mathematically precise; verify the final answer matches the marked correct option.`;
}

function buildNewSubjectPrompt({ subject, level, category, want, stem, sampleStyle }) {
  return `You are creating content for a UK curriculum education app. Study the house style of these existing questions (different subject, same format):
${JSON.stringify(sampleStyle, null, 2)}

Create content for a NEW subject.
- level: "${level}"
- subject: "${subject}"
- category: "${category}"

Produce a JSON object with two keys:
1. "questions": an array of ${want} multiple-choice questions, each {"text","options":{"A","B","C","D"},"correct","difficulty","explanation"}. Include a short per-question "explanation" (under 40 words). Vary difficulty 1-4 appropriately for ${level}. Distribute correct keys evenly. Distractors must reflect real misconceptions.
2. "explanation": a category-level teaching object {"title","keyIdea","body","workedExample":{"problem","solution"},"commonMistakes":[...],"keyFacts":[...]} matching this structure exactly. Body ~250-350 words.

Output ONLY the JSON object. No markdown fences. All facts must be accurate and curriculum-appropriate.`;
}
