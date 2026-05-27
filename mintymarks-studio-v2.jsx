import React, { useState, useMemo, useRef, useCallback } from "react";

/* ============================================================================
   MintyMarks Studio v2  —  zero-API, copy-driven, mobile content workflow
   ----------------------------------------------------------------------------
   Loop:
     1. Load questions/explanations/resources (or start empty)
     2. Analyse gaps
     3. Pick a job  ->  COPY a ready-to-run prompt
     4. Run it in your normal claude.ai chat (uses your Max subscription)
     5. PASTE the reply back here -> validate, dedupe, re-id, MERGE into dataset
     6. COPY / download the clean block; the merged data feeds the next analysis
   No network calls. Everything runs in the browser.
============================================================================ */

// ---- file / text parsing ---------------------------------------------------
function extractLiteral(text, exportName) {
  const idx = text.indexOf(`export const ${exportName}`);
  if (idx === -1) return null;
  const eq = text.indexOf("=", idx);
  if (eq === -1) return null;
  let start = eq + 1;
  while (start < text.length && /\s/.test(text[start])) start++;
  const open = text[start];
  const close = open === "[" ? "]" : open === "{" ? "}" : null;
  if (!close) return null;
  let depth = 0, i = start, inStr = null, prev = "";
  for (; i < text.length; i++) {
    const c = text[i];
    if (inStr) { if (c === inStr && prev !== "\\") inStr = null; }
    else {
      if (c === '"' || c === "'" || c === "`") inStr = c;
      else if (c === "[" || c === "{") depth++;
      else if (c === "]" || c === "}") { depth--; if (depth === 0) return text.slice(start, i + 1); }
    }
    prev = c;
  }
  return null;
}

function parseQuestions(text) {
  const trimmed = text.trim();
  if (trimmed.startsWith("[")) {
    try { return JSON.parse(trimmed); } catch (e) {}
    try { return Function(`"use strict"; return (${trimmed});`)(); } catch (e) {}
  }
  const lit = extractLiteral(text, "QUESTIONS");
  if (!lit) {
    const f = text.indexOf("["), l = text.lastIndexOf("]");
    if (f !== -1 && l !== -1) {
      const slice = text.slice(f, l + 1);
      try { return JSON.parse(slice); } catch (e) {}
      try { return Function(`"use strict"; return (${slice});`)(); } catch (e) {}
    }
    throw new Error("Could not find a questions array");
  }
  try { return JSON.parse(lit); }
  catch (e) { return Function(`"use strict"; return (${lit});`)(); }
}

function parseObjectModule(text, exportName) {
  const trimmed = text.trim();
  if (trimmed.startsWith("{")) {
    try { return JSON.parse(trimmed); } catch (e) {}
    try { return Function(`"use strict"; return (${trimmed});`)(); } catch (e) {}
  }
  const lit = extractLiteral(text, exportName);
  if (!lit) return null;
  try { return JSON.parse(lit); } catch (e) {}
  return Function(`"use strict"; return (${lit});`)();
}

// ---- JSON repair / extraction ----------------------------------------------
function stripFences(s) {
  return s.replace(/^[\s\S]*?```(?:json)?\s*/m, (m) => (m.includes("```") ? "" : m)).replace(/```[\s\S]*$/m, "").trim();
}
function repairJson(s) {
  let t = s.trim();
  if (t.includes("```")) t = stripFences(t);
  const firstArr = t.indexOf("["), lastArr = t.lastIndexOf("]");
  const firstObj = t.indexOf("{"), lastObj = t.lastIndexOf("}");
  if (firstArr !== -1 && (firstObj === -1 || firstArr < firstObj)) t = t.slice(firstArr, lastArr + 1);
  else if (firstObj !== -1) t = t.slice(firstObj, lastObj + 1);
  t = t.replace(/,(\s*[}\]])/g, "$1");
  let result = "", inString = false, escaped = false;
  for (let i = 0; i < t.length; i++) {
    const c = t[i];
    if (escaped) { result += c; escaped = false; continue; }
    if (c === "\\") { result += c; escaped = true; continue; }
    if (c === '"') { inString = !inString; result += c; continue; }
    if (inString) {
      if (c === "\n") { result += "\\n"; continue; }
      if (c === "\r") { result += "\\r"; continue; }
      if (c === "\t") { result += "\\t"; continue; }
    }
    result += c;
  }
  t = result;
  t = t.replace(/\}\s*\{/g, "},{");
  t = t.replace(/\]\s*\[/g, "],[");
  return t;
}
function extractJsonArray(s) {
  let t = s.trim();
  if (t.includes("```")) t = stripFences(t);
  const first = t.indexOf("["), last = t.lastIndexOf("]");
  if (first === -1 || last === -1) throw new Error("No JSON array found in the pasted text");
  const slice = t.slice(first, last + 1);
  try { return JSON.parse(slice); } catch (_) {}
  try { return JSON.parse(repairJson(slice)); } catch (e) { throw new Error(`JSON parse failed even after repair: ${e.message}`); }
}
function extractJsonObject(s) {
  let t = s.trim();
  if (t.includes("```")) t = stripFences(t);
  const first = t.indexOf("{"), last = t.lastIndexOf("}");
  if (first === -1 || last === -1) throw new Error("No JSON object found in the pasted text");
  const slice = t.slice(first, last + 1);
  try { return JSON.parse(slice); } catch (_) {}
  try { return JSON.parse(repairJson(slice)); } catch (e) { throw new Error(`JSON parse failed even after repair: ${e.message}`); }
}

// ---- helpers ----------------------------------------------------------------
function pad(n, width) { const s = String(n); return s.length >= width ? s : "0".repeat(width - s.length) + s; }
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
function defaultStem(level, category) {
  const words = (category || "").toLowerCase().replace(/[^a-z0-9 ]/g, " ").split(/\s+/).filter(Boolean);
  const abbr = words.map((w) => w[0]).join("").slice(0, 4) || "x";
  return `${level}_${abbr}`;
}
function buildStats(questions) {
  const byLevel = {}, byLevelSubject = {}, cells = {};
  for (const q of questions) {
    const level = q.level ?? "(none)", subject = q.subject ?? "(none)", category = q.category ?? "(none)";
    byLevel[level] = (byLevel[level] || 0) + 1;
    const ls = `${level} / ${subject}`;
    byLevelSubject[ls] = (byLevelSubject[ls] || 0) + 1;
    const key = `${level}|||${subject}|||${category}`;
    if (!cells[key]) cells[key] = { level, subject, category, count: 0, byDiff: {}, withExplanation: 0, withWorkings: 0, stems: new Set() };
    const cell = cells[key];
    cell.count++;
    const d = q.difficulty ?? "?";
    cell.byDiff[d] = (cell.byDiff[d] || 0) + 1;
    if (q.explanation) cell.withExplanation++;
    if (q.workings || q.solution) cell.withWorkings++;
    if (typeof q.id === "string") cell.stems.add(q.id.replace(/_?\d+\s*$/, ""));
  }
  return { byLevel, byLevelSubject, cells };
}
function findDuplicates(questions) {
  const byText = {}, byId = {}, dupTexts = [], dupIds = [];
  for (const q of questions) {
    const t = (q.text || "").trim().toLowerCase();
    if (t) byText[t] = (byText[t] || 0) + 1;
    if (q.id) { if (byId[q.id]) dupIds.push(q.id); byId[q.id] = true; }
  }
  for (const [t, n] of Object.entries(byText)) if (n > 1) dupTexts.push({ text: t, count: n });
  return { dupTexts, dupIds };
}
function serialiseQuestionsAppend(qs) { return qs.map((q) => "  " + JSON.stringify(q) + ",").join("\n"); }

// ingest pasted question JSON -> validate, dedupe, re-id, stamp metadata
function ingestQuestions(raw, { existing, level, subject, category, stem, startNum }) {
  const arr = extractJsonArray(raw);
  const report = { received: arr.length, kept: 0, dupRemoved: 0, invalid: 0, reidentified: 0, issues: [] };
  const existingTexts = new Set(existing.map((q) => (q.text || "").trim().toLowerCase()));
  const existingIds = new Set(existing.map((q) => q.id));
  const seen = new Set();
  const clean = [];
  for (const q of arr) {
    if (!q || typeof q.text !== "string" || !q.options || !q.correct) { report.invalid++; report.issues.push("Malformed item skipped (missing text/options/correct)"); continue; }
    if (!Object.keys(q.options).includes(q.correct)) { report.invalid++; report.issues.push(`"${(q.text || "").slice(0, 36)}…" — correct key "${q.correct}" not in options`); continue; }
    const t = (q.text || "").trim().toLowerCase();
    if (existingTexts.has(t) || seen.has(t)) { report.dupRemoved++; continue; }
    seen.add(t); clean.push(q);
  }
  let n = startNum;
  for (const q of clean) {
    let id = `${stem}_${pad(n, 4)}`;
    while (existingIds.has(id)) { n++; id = `${stem}_${pad(n, 4)}`; }
    if (q.id !== id) report.reidentified++;
    q.id = id; if (level) q.level = level; if (subject) q.subject = subject; if (category) q.category = category;
    existingIds.add(id); n++;
  }
  report.kept = clean.length;
  return { clean, report };
}

// merge a patch [{id, <field>}] into questions
function applyPatch(questions, patch, field) {
  const byId = {}; for (const p of patch) if (p && p.id) byId[p.id] = p[field];
  let applied = 0, orphan = 0;
  const seen = new Set(questions.map((q) => q.id));
  for (const id of Object.keys(byId)) if (!seen.has(id)) orphan++;
  const out = questions.map((q) => { if (byId[q.id] !== undefined) { applied++; return { ...q, [field]: byId[q.id] }; } return q; });
  return { out, applied, orphan };
}

function download(filename, text) {
  const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url; a.download = filename;
  document.body.appendChild(a); a.click();
  document.body.removeChild(a);
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

// ---- prompt builders --------------------------------------------------------
function buildQuestionPrompt({ level, subject, category, difficulty, want, stem, startNum, samples }) {
  const diffInstruction = difficulty === "mixed"
    ? "Vary difficulty across the set (integers 1-4, weighted toward this level's norm)."
    : `Every question must have difficulty exactly ${difficulty}.`;
  const sampleBlock = samples.length
    ? `Here are real existing examples — match this schema and house style exactly:\n${JSON.stringify(samples, null, 2)}`
    : `No existing examples for this topic. Use this schema: {"id","level","subject","category","text","options":{"A","B","C","D"},"correct","difficulty"}`;
  return `You are generating multiple-choice education questions for a UK curriculum app.

${sampleBlock}

Generate ${want} NEW questions for:
- level: "${level}"
- subject: "${subject}"
- category: "${category}"

Rules:
- Output ONLY a valid JSON array. No prose, no markdown fences, no trailing commas.
- Each object: {"id","level","subject","category","text","options":{"A","B","C","D"},"correct","difficulty"}
- id format: "${stem}_NNNN" starting at ${pad(startNum, 4)} and incrementing.
- "correct" is the KEY ("A"/"B"/"C"/"D"). Distribute correct keys evenly across A/B/C/D.
- ${diffInstruction}
- Distractors must reflect real misconceptions, not random values.
- Do NOT duplicate the example questions.
- All maths/science must be factually correct. Verify every answer.
- CRITICAL: properly escape quotes in strings. No raw newlines inside strings.

Return the JSON array only.`;
}
function buildExplanationPrompt(batch) {
  const slim = batch.map((q) => ({ id: q.id, text: q.text, options: q.options, correct: q.correct }));
  return `For each question, write a concise 1-2 sentence explanation of WHY the correct answer is correct. Plain language pitched at the student.

Questions:
${JSON.stringify(slim, null, 2)}

Output ONLY a valid JSON array: [{"id":"...","explanation":"..."}]
No markdown, no prose. No trailing commas. Each explanation under 40 words.
CRITICAL: no raw newlines inside string values.`;
}
function buildWorkingsPrompt(batch) {
  const slim = batch.map((q) => ({ id: q.id, text: q.text, options: q.options, correct: q.correct }));
  return `For each question write step-by-step workings leading to the correct answer. Use the literal string \\n between steps (not a real newline).

Questions:
${JSON.stringify(slim, null, 2)}

Output ONLY a valid JSON array: [{"id":"...","workings":"..."}]
No markdown fences. No trailing commas. Verify the final answer matches the correct option.`;
}
function buildResourcePrompt({ level, subject, category, sampleStyle }) {
  const styleBlock = sampleStyle ? `Match this house style for a resource object:\n${JSON.stringify(sampleStyle, null, 2)}` : "";
  return `You are writing a study resource (revision note) for a UK curriculum education app.
${styleBlock}

Write a resource for:
- level: "${level}"
- subject: "${subject}"
- category: "${category}"

Output ONLY a valid JSON object:
{"title","keyIdea","body","workedExample":{"problem","solution"},"commonMistakes":[...],"keyFacts":[...]}
- body ~250-350 words, clear and pitched at the level.
- 3-5 commonMistakes, 3-6 keyFacts.
CRITICAL: valid JSON only. No markdown fences. No trailing commas. Use \\n literally for any newlines inside strings.`;
}

// ---- design tokens ----------------------------------------------------------
const MINT = "#6fe3b0", MINT_DIM = "#3a8f6a", INK = "#0f1410";
const PANEL = "#16201a", PANEL2 = "#1d2a22", BORDER = "#2a3a30";
const WARN = "#e3b86f", DANGER = "#e36f8f", BLUE = "#8ab0e3", PURP = "#b99ae3";

// ---- primitives -------------------------------------------------------------
function Tag({ children, color = MINT }) {
  return <span style={{ display: "inline-block", fontSize: 11, fontFamily: "ui-monospace,monospace", background: "rgba(111,227,176,0.12)", color, border: `1px solid ${color}44`, borderRadius: 6, padding: "1px 7px", marginRight: 6, marginBottom: 4 }}>{children}</span>;
}
function Btn({ children, onClick, kind = "primary", disabled, style }) {
  const base = { fontFamily: "ui-monospace,monospace", fontSize: 14, fontWeight: 600, borderRadius: 10, padding: "12px 16px", border: "none", cursor: disabled ? "not-allowed" : "pointer", opacity: disabled ? 0.45 : 1, transition: "transform 0.08s ease", width: "100%", ...style };
  const kinds = { primary: { background: MINT, color: INK }, ghost: { background: "transparent", color: MINT, border: `1px solid ${MINT_DIM}` }, dark: { background: PANEL2, color: "#e8efe6", border: `1px solid ${BORDER}` } };
  return <button onClick={onClick} disabled={disabled} style={{ ...base, ...kinds[kind] }}
    onTouchStart={(e) => (e.currentTarget.style.transform = "scale(0.98)")}
    onTouchEnd={(e) => (e.currentTarget.style.transform = "scale(1)")}>{children}</button>;
}
// Copy button with built-in "Copied!" feedback — the core UX of this tool
function CopyBtn({ getText, label = "Copy", kind = "primary", style, disabled }) {
  const [done, setDone] = useState(false);
  async function doCopy() {
    const text = typeof getText === "function" ? getText() : getText;
    if (!text) return;
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) await navigator.clipboard.writeText(text);
      else {
        const ta = document.createElement("textarea");
        ta.value = text; ta.style.position = "fixed"; ta.style.opacity = "0";
        document.body.appendChild(ta); ta.focus(); ta.select();
        document.execCommand("copy"); document.body.removeChild(ta);
      }
      setDone(true); setTimeout(() => setDone(false), 1400);
    } catch (e) { setDone(false); }
  }
  return <Btn onClick={doCopy} kind={done ? "primary" : kind} disabled={disabled} style={style}>{done ? "✓ Copied" : label}</Btn>;
}
function Section({ title, children, right }) {
  return <div style={{ marginBottom: 18 }}>
    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10 }}>
      <h2 style={{ fontSize: 13, letterSpacing: 2, textTransform: "uppercase", color: MINT, margin: 0, fontFamily: "ui-monospace,monospace" }}>{title}</h2>
      {right}
    </div>
    {children}
  </div>;
}
function Empty({ msg }) { return <div style={{ textAlign: "center", padding: 40, color: "#6f8a7c", fontSize: 14, border: `1px dashed ${BORDER}`, borderRadius: 12 }}>{msg}</div>; }
function Field({ label, children }) { return <div style={{ marginBottom: 14 }}><div style={{ fontSize: 12, color: "#8aa595", marginBottom: 6 }}>{label}</div>{children}</div>; }
const inputStyle = { width: "100%", boxSizing: "border-box", background: PANEL, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "11px 12px", color: "#e8efe6", fontSize: 14, fontFamily: "ui-monospace,monospace" };
const stepBtn = { width: 44, height: 44, borderRadius: 10, border: `1px solid ${BORDER}`, background: PANEL2, color: MINT, fontSize: 20, cursor: "pointer" };
function NumStepper({ value, setValue, min, max, step }) {
  return <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
    <button onClick={() => setValue(Math.max(min, value - step))} style={stepBtn}>−</button>
    <input type="number" value={value} onChange={(e) => setValue(Math.max(min, Math.min(max, parseInt(e.target.value || "0", 10))))} style={{ ...inputStyle, textAlign: "center", flex: 1 }} />
    <button onClick={() => setValue(Math.min(max, value + step))} style={stepBtn}>+</button>
  </div>;
}
function Segmented({ options, value, onChange }) {
  return <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
    {options.map((o) => <button key={o} onClick={() => onChange(o)} style={{ flex: "1 1 auto", padding: "10px 8px", borderRadius: 9, border: `1px solid ${value === o ? MINT : BORDER}`, background: value === o ? "rgba(111,227,176,0.14)" : "transparent", color: value === o ? MINT : "#8aa595", fontSize: 13, fontFamily: "ui-monospace,monospace", cursor: "pointer" }}>{o}</button>)}
  </div>;
}
function StatusRow({ label, ok, detail }) {
  return <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 14px", background: PANEL, border: `1px solid ${BORDER}`, borderRadius: 10, marginBottom: 8 }}>
    <span style={{ fontFamily: "ui-monospace,monospace", fontSize: 13 }}><span style={{ color: ok ? MINT : "#6f8a7c", marginRight: 8 }}>{ok ? "●" : "○"}</span>{label}</span>
    <span style={{ fontSize: 12, color: "#8aa595" }}>{detail}</span>
  </div>;
}
function Stat({ big, label }) {
  return <div style={{ flex: "1 1 30%", minWidth: 90, background: PANEL, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "12px 14px" }}>
    <div style={{ fontSize: 24, fontWeight: 700, color: MINT, fontFamily: "ui-monospace,monospace" }}>{big}</div>
    <div style={{ fontSize: 11, color: "#8aa595", marginTop: 2 }}>{label}</div>
  </div>;
}
function BarRow({ label, value, max }) {
  const pct = max ? Math.round((value / max) * 100) : 0;
  return <div style={{ marginBottom: 7 }}>
    <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12, marginBottom: 3 }}>
      <span style={{ color: "#cfe0d6" }}>{label}</span>
      <span style={{ fontFamily: "ui-monospace,monospace", color: "#8aa595" }}>{value.toLocaleString()}</span>
    </div>
    <div style={{ height: 7, background: PANEL2, borderRadius: 4, overflow: "hidden" }}><div style={{ width: `${pct}%`, height: "100%", background: MINT, opacity: 0.7 }} /></div>
  </div>;
}
function CodeBox({ text, max = 220 }) {
  return <div style={{ background: PANEL, border: `1px solid ${BORDER}`, borderRadius: 10, padding: 12, fontFamily: "ui-monospace,monospace", fontSize: 11, lineHeight: 1.5, maxHeight: max, overflow: "auto", whiteSpace: "pre-wrap", wordBreak: "break-word", color: "#cfe0d6" }}>{text}</div>;
}
function PasteBox({ value, onChange, placeholder }) {
  return <textarea value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder}
    style={{ ...inputStyle, minHeight: 120, resize: "vertical", fontSize: 12, lineHeight: 1.5 }} />;
}
function PreviewQuestions({ questions }) {
  return <div style={{ marginBottom: 12 }}>
    {questions.map((q, i) => <div key={i} style={{ background: PANEL, border: `1px solid ${BORDER}`, borderRadius: 10, padding: 12, marginBottom: 8, fontSize: 13 }}>
      <div style={{ fontFamily: "ui-monospace,monospace", fontSize: 10, color: "#6f8a7c" }}>{q.id} {q.difficulty != null && <span style={{ color: PURP }}>· d{q.difficulty}</span>}</div>
      <div style={{ margin: "4px 0 8px", color: "#e8efe6" }}>{q.text}</div>
      {q.options && Object.entries(q.options).map(([k, v]) => <div key={k} style={{ fontSize: 12, color: k === q.correct ? MINT : "#8aa595", fontFamily: "ui-monospace,monospace" }}>{k === q.correct ? "✓" : " "} {k}: {v}</div>)}
      {q.explanation && <div style={{ fontSize: 12, color: "#b9d0c3", marginTop: 6 }}>{q.explanation}</div>}
      {q.workings && <div style={{ fontSize: 12, color: "#b9d0c3", marginTop: 6, fontStyle: "italic", whiteSpace: "pre-wrap" }}>{q.workings}</div>}
    </div>)}
  </div>;
}

// ============================================================================
// TABS
// ============================================================================
function LoadTab({ fileRef, handleFiles, loadMsg, questions, explanations, resources, onPasteLoad }) {
  const [pasteVal, setPasteVal] = useState("");
  const [pasteMsg, setPasteMsg] = useState("");
  function loadFromPaste() {
    setPasteMsg("");
    try { const n = onPasteLoad(pasteVal); setPasteMsg(`Loaded ${n.toLocaleString()} questions from pasted text.`); setPasteVal(""); }
    catch (e) { setPasteMsg("ERR: " + e.message); }
  }
  return <div>
    <Section title="Load data — files">
      <div style={{ border: `2px dashed ${BORDER}`, borderRadius: 14, padding: 24, textAlign: "center", background: PANEL }}>
        <div style={{ fontSize: 14, color: "#b9d0c3", marginBottom: 14, lineHeight: 1.5 }}>Upload <b>questions.js</b>, <b>explanations.js</b>, <b>resources.js</b>. Select all at once, or start empty and build from scratch.</div>
        <input ref={fileRef} type="file" accept=".js,.txt,.json" multiple style={{ display: "none" }} onChange={(e) => e.target.files && handleFiles(e.target.files)} />
        <Btn onClick={() => fileRef.current && fileRef.current.click()}>Choose files</Btn>
      </div>
      {loadMsg && <div style={{ marginTop: 12, fontSize: 13, color: MINT, fontFamily: "ui-monospace,monospace" }}>{loadMsg}</div>}
    </Section>
    <Section title="Load data — paste">
      <div style={{ fontSize: 12, color: "#8aa595", marginBottom: 8, lineHeight: 1.5 }}>Or paste a questions array / <code>export const QUESTIONS</code> block directly (handy on mobile if file access is awkward).</div>
      <PasteBox value={pasteVal} onChange={setPasteVal} placeholder='[ {"id":"...","level":"...","subject":"...","category":"...","text":"...","options":{...},"correct":"A","difficulty":1}, ... ]' />
      <div style={{ marginTop: 8 }}><Btn kind="dark" onClick={loadFromPaste} disabled={!pasteVal.trim()}>Load from paste</Btn></div>
      {pasteMsg && <div style={{ marginTop: 8, fontSize: 12, color: pasteMsg.startsWith("ERR") ? DANGER : MINT, fontFamily: "ui-monospace,monospace" }}>{pasteMsg}</div>}
    </Section>
    <Section title="Status">
      <StatusRow label="questions" ok={!!questions} detail={questions ? `${questions.length.toLocaleString()} loaded` : "empty"} />
      <StatusRow label="explanations" ok={!!explanations} detail={explanations ? "loaded" : "optional"} />
      <StatusRow label="resources" ok={!!resources} detail={resources ? "loaded" : "optional"} />
    </Section>
    <div style={{ fontSize: 12, color: "#6f8a7c", lineHeight: 1.6 }}>No network calls. Everything stays in your browser. Generation happens in your normal Claude chat — this tool just builds prompts and ingests the replies.</div>
  </div>;
}

function AnalyseTab({ stats, questions }) {
  if (!stats || !questions || !questions.length) return <Empty msg="Load or build questions first (Load tab)." />;
  const cellList = Object.values(stats.cells).sort((a, b) => a.count - b.count);
  const total = questions.length;
  const counts = cellList.map((c) => c.count);
  const median = counts.length ? counts[Math.floor(counts.length / 2)] : 0;
  const thinThreshold = Math.max(20, Math.round(median * 0.4));
  return <div>
    <Section title="Overview">
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 12 }}>
        <Stat big={total.toLocaleString()} label="total questions" />
        <Stat big={Object.keys(stats.cells).length} label="topic cells" />
        <Stat big={Object.keys(stats.byLevel).length} label="levels" />
      </div>
      <div style={{ marginBottom: 6, fontSize: 12, color: "#8aa595" }}>By level / subject</div>
      {Object.entries(stats.byLevelSubject).sort((a, b) => b[1] - a[1]).map(([k, v]) => <BarRow key={k} label={k} value={v} max={Math.max(...Object.values(stats.byLevelSubject))} />)}
    </Section>
    <Section title={`Thinnest topics (under ${thinThreshold})`}>
      <div style={{ fontSize: 12, color: "#8aa595", marginBottom: 10 }}>Ranked by count. Priority gaps highlighted amber.</div>
      {cellList.slice(0, 30).map((c) => {
        const thin = c.count < thinThreshold;
        return <div key={`${c.level}|${c.subject}|${c.category}`} style={{ background: PANEL, border: `1px solid ${thin ? WARN + "55" : BORDER}`, borderRadius: 10, padding: 12, marginBottom: 8 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
            <div style={{ fontSize: 14, fontWeight: 600 }}>{c.category}</div>
            <div style={{ fontFamily: "ui-monospace,monospace", fontSize: 16, color: thin ? WARN : MINT, fontWeight: 700 }}>{c.count}</div>
          </div>
          <div style={{ marginTop: 6 }}>
            <Tag>{c.level}</Tag><Tag color={BLUE}>{c.subject}</Tag>
            {Object.entries(c.byDiff).sort().map(([d, n]) => <Tag key={d} color={PURP}>d{d}:{n}</Tag>)}
          </div>
          {c.withExplanation < c.count && <div style={{ fontSize: 11, color: "#8aa595", marginTop: 6 }}>{c.withExplanation}/{c.count} have explanations</div>}
        </div>;
      })}
    </Section>
  </div>;
}

// GENERATE: build prompt -> copy -> paste reply -> ingest -> merge
function GenerateTab({ stats, questions, mergeQuestions }) {
  const [sel, setSel] = useState(null);
  const [count, setCount] = useState(15);
  const [difficulty, setDifficulty] = useState("mixed");
  const [stem, setStem] = useState("");
  const [startNum, setStartNum] = useState(1);
  const [prompt, setPrompt] = useState("");
  const [paste, setPaste] = useState("");
  const [output, setOutput] = useState(null);
  const [err, setErr] = useState("");

  if (!stats) return <Empty msg="Load or build questions first (Load tab)." />;
  const cellList = Object.values(stats.cells).sort((a, b) => a.count - b.count);
  const selectedCell = sel ? stats.cells[sel] : null;

  function onSelect(key) {
    setSel(key);
    const cell = stats.cells[key];
    const guessStem = cell.stems.size === 1 ? Array.from(cell.stems)[0] : defaultStem(cell.level, cell.category);
    setStem(guessStem);
    setStartNum(maxIdNumberForPrefix(questions, guessStem) + 1);
    setPrompt(""); setPaste(""); setOutput(null); setErr("");
  }
  function makePrompt() {
    if (!selectedCell) return;
    const samples = questions.filter((q) => q.level === selectedCell.level && q.subject === selectedCell.subject && q.category === selectedCell.category).slice(0, 6);
    setPrompt(buildQuestionPrompt({ level: selectedCell.level, subject: selectedCell.subject, category: selectedCell.category, difficulty, want: count, stem, startNum, samples }));
    setOutput(null); setErr("");
  }
  function ingest() {
    setErr("");
    try {
      const { clean, report } = ingestQuestions(paste, { existing: questions, level: selectedCell.level, subject: selectedCell.subject, category: selectedCell.category, stem, startNum });
      setOutput({ clean, report });
    } catch (e) { setErr(e.message); setOutput(null); }
  }
  function merge() {
    if (!output) return;
    mergeQuestions(output.clean);
    setStartNum((n) => n + output.clean.length);
    setPaste(""); setOutput(null);
    setErr("MERGED ✓ — added to working dataset. Gaps tab now reflects it.");
  }

  return <div>
    <Section title="1 · Pick a topic">
      <div style={{ maxHeight: 220, overflowY: "auto", borderRadius: 10, border: `1px solid ${BORDER}` }}>
        {cellList.length === 0 && <div style={{ padding: 16, fontSize: 13, color: "#6f8a7c" }}>No topics yet — use the New Subject tab to scaffold one.</div>}
        {cellList.map((c) => {
          const key = `${c.level}|||${c.subject}|||${c.category}`;
          const active = sel === key;
          return <button key={key} onClick={() => onSelect(key)} style={{ display: "flex", justifyContent: "space-between", width: "100%", textAlign: "left", padding: "10px 12px", background: active ? "rgba(111,227,176,0.14)" : "transparent", border: "none", borderBottom: `1px solid ${BORDER}`, color: "#e8efe6", fontSize: 13, cursor: "pointer" }}>
            <span><span style={{ color: "#8aa595", fontFamily: "ui-monospace,monospace", fontSize: 11 }}>{c.level}/{c.subject}</span><br />{c.category}</span>
            <span style={{ fontFamily: "ui-monospace,monospace", color: active ? MINT : "#8aa595" }}>{c.count}</span>
          </button>;
        })}
      </div>
    </Section>

    {selectedCell && <>
      <Section title="2 · Configure & build prompt">
        <Field label="How many questions"><NumStepper value={count} setValue={setCount} min={5} max={100} step={5} /></Field>
        <Field label="Difficulty"><Segmented options={["mixed", "1", "2", "3", "4"]} value={difficulty} onChange={setDifficulty} /></Field>
        <Field label="ID stem"><input value={stem} onChange={(e) => setStem(e.target.value)} style={inputStyle} /></Field>
        <Field label="Start numbering at"><NumStepper value={startNum} setValue={setStartNum} min={1} max={99999} step={1} /></Field>
        <div style={{ fontSize: 11, color: "#8aa595", marginBottom: 12 }}>Next ID: <span style={{ color: MINT }}>{stem}_{pad(startNum, 4)}</span></div>
        <Btn kind="dark" onClick={makePrompt}>Build prompt</Btn>
      </Section>

      {prompt && <Section title="3 · Copy prompt → run in Claude chat">
        <CodeBox text={prompt} />
        <div style={{ marginTop: 8 }}><CopyBtn getText={() => prompt} label="Copy prompt" /></div>
        <div style={{ fontSize: 11, color: "#8aa595", marginTop: 8, lineHeight: 1.6 }}>Paste into your normal Claude chat. When it replies with the JSON array, copy the whole reply and paste it below — fences and chatter are fine.</div>
      </Section>}

      {prompt && <Section title="4 · Paste reply → validate & ingest">
        <PasteBox value={paste} onChange={setPaste} placeholder="Paste Claude's reply here (the JSON array, with or without ```json fences / surrounding text)…" />
        <div style={{ marginTop: 8 }}><Btn onClick={ingest} disabled={!paste.trim()}>Validate & ingest</Btn></div>
      </Section>}

      {err && <div style={{ color: err.startsWith("MERGED") ? MINT : DANGER, fontSize: 13, marginBottom: 12, fontFamily: "ui-monospace,monospace" }}>{err}</div>}

      {output && <Section title={`5 · Review — ${output.report.kept} clean`} right={<span style={{ fontSize: 11, color: "#8aa595" }}>{output.report.received} recv · {output.report.dupRemoved} dup · {output.report.invalid} bad</span>}>
        {output.report.issues.length > 0 && <div style={{ background: "rgba(227,184,111,0.1)", border: `1px solid ${WARN}55`, borderRadius: 8, padding: 10, marginBottom: 10, fontSize: 11, color: WARN, fontFamily: "ui-monospace,monospace" }}>{output.report.issues.slice(0, 6).map((s, i) => <div key={i}>• {s}</div>)}</div>}
        <PreviewQuestions questions={output.clean.slice(0, 3)} />
        {output.clean.length > 3 && <div style={{ fontSize: 11, color: "#6f8a7c", marginBottom: 10 }}>+ {output.clean.length - 3} more not shown</div>}
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <Btn onClick={merge} disabled={!output.clean.length}>✓ Merge into dataset ({output.clean.length})</Btn>
          <CopyBtn getText={() => serialiseQuestionsAppend(output.clean)} kind="ghost" label="Copy .js append block" disabled={!output.clean.length} />
          <Btn kind="dark" disabled={!output.clean.length} onClick={() => download(`q_${selectedCell.level}_${selectedCell.subject}_${Date.now()}.js`, `// ${selectedCell.level} / ${selectedCell.subject} / ${selectedCell.category}\n// paste before the closing "];" in questions.js\n` + serialiseQuestionsAppend(output.clean) + "\n")}>⬇ Download .js</Btn>
        </div>
        <div style={{ fontSize: 11, color: "#8aa595", marginTop: 10, lineHeight: 1.6 }}>Merge feeds the working dataset so Gaps + next ID start update live. Copy/download is your durable export — paste before the closing <code>{"];"}</code> in questions.js.</div>
      </Section>}
    </>}
  </div>;
}

// ENRICH: explanations / workings patch, with merge-back
function EnrichTab({ stats, questions, applyEnrichment }) {
  const [mode, setMode] = useState("explanation");
  const [scope, setScope] = useState("");
  const [prompt, setPrompt] = useState("");
  const [paste, setPaste] = useState("");
  const [patch, setPatch] = useState(null);
  const [err, setErr] = useState("");
  if (!stats || !questions || !questions.length) return <Empty msg="Load or build questions first (Load tab)." />;
  const cellList = Object.values(stats.cells).sort((a, b) => a.count - b.count);
  const field = mode === "explanation" ? "explanation" : "workings";

  function targetsFor(scopeKey) {
    const [level, subject, category] = scopeKey.split("|||");
    return questions.filter((q) => q.level === level && q.subject === subject && q.category === category && (mode === "explanation" ? !q.explanation : !(q.workings || q.solution)));
  }
  function makePrompt() {
    setErr(""); setPatch(null);
    if (!scope) return;
    const targets = targetsFor(scope);
    if (!targets.length) { setErr(`Nothing missing ${field} in this topic.`); setPrompt(""); return; }
    const batch = targets.slice(0, 40); // keep prompt sane for one paste
    setPrompt(mode === "explanation" ? buildExplanationPrompt(batch) : buildWorkingsPrompt(batch));
  }
  function ingest() {
    setErr(""); setPatch(null);
    try {
      const arr = extractJsonArray(paste);
      const valid = arr.filter((x) => x && x.id && typeof x[field] === "string");
      if (!valid.length) throw new Error(`No valid {id, ${field}} entries found.`);
      setPatch(valid);
    } catch (e) { setErr(e.message); }
  }
  function merge() {
    if (!patch) return;
    const res = applyEnrichment(patch, field);
    setErr(`MERGED ✓ — ${res.applied} ${field}s applied${res.orphan ? `, ${res.orphan} orphan ids ignored` : ""}.`);
    setPatch(null); setPaste(""); setPrompt("");
  }

  return <div>
    <Section title="1 · What to add">
      <div style={{ fontSize: 12, color: "#8aa595", marginBottom: 12, lineHeight: 1.6 }}><b>Explanation</b> = why the answer is right (short).<br /><b>Workings</b> = step-by-step calculation.</div>
      <Field label="Type"><Segmented options={["explanation", "workings"]} value={mode} onChange={(m) => { setMode(m); setPrompt(""); setPatch(null); setErr(""); }} /></Field>
      <Field label="Topic">
        <select value={scope} onChange={(e) => { setScope(e.target.value); setPrompt(""); setPatch(null); setErr(""); }} style={{ ...inputStyle, appearance: "auto" }}>
          <option value="">Select a topic…</option>
          {cellList.map((c) => {
            const key = `${c.level}|||${c.subject}|||${c.category}`;
            const missing = mode === "explanation" ? c.count - c.withExplanation : c.count - c.withWorkings;
            return <option key={key} value={key}>{c.level}/{c.subject} — {c.category} ({missing} missing)</option>;
          })}
        </select>
      </Field>
      <Btn kind="dark" onClick={makePrompt} disabled={!scope}>Build prompt</Btn>
    </Section>

    {prompt && <Section title="2 · Copy prompt → run in chat">
      <CodeBox text={prompt} />
      <div style={{ marginTop: 8 }}><CopyBtn getText={() => prompt} label="Copy prompt" /></div>
      <div style={{ fontSize: 11, color: "#8aa595", marginTop: 8 }}>Covers up to 40 questions per run. Repeat for more.</div>
    </Section>}

    {prompt && <Section title="3 · Paste reply → ingest">
      <PasteBox value={paste} onChange={setPaste} placeholder='Paste reply: [{"id":"...","explanation":"..."}, ...]' />
      <div style={{ marginTop: 8 }}><Btn onClick={ingest} disabled={!paste.trim()}>Validate patch</Btn></div>
    </Section>}

    {err && <div style={{ color: err.startsWith("MERGED") ? MINT : DANGER, fontSize: 13, marginBottom: 12, fontFamily: "ui-monospace,monospace" }}>{err}</div>}

    {patch && <Section title={`4 · Patch — ${patch.length} entries`}>
      <CodeBox text={JSON.stringify(patch.slice(0, 4), null, 2)} max={200} />
      <div style={{ display: "flex", flexDirection: "column", gap: 8, marginTop: 10 }}>
        <Btn onClick={merge}>✓ Merge {field}s into dataset</Btn>
        <CopyBtn getText={() => JSON.stringify(patch, null, 2)} kind="ghost" label="Copy patch JSON" />
        <Btn kind="dark" onClick={() => download(`patch_${field}_${Date.now()}.json`, JSON.stringify(patch, null, 2))}>⬇ Download patch</Btn>
      </div>
    </Section>}
  </div>;
}

// NEW SUBJECT: per-category question packs + resource objects
function SubjectTab({ questions, levelOptions, mergeQuestions, mergeResources }) {
  const [subject, setSubject] = useState("");
  const [level, setLevel] = useState(levelOptions[0] || "gcse");
  const [category, setCategory] = useState("");
  const [perCat, setPerCat] = useState(15);
  const [stem, setStem] = useState("");
  const [prompt, setPrompt] = useState("");
  const [paste, setPaste] = useState("");
  const [output, setOutput] = useState(null);
  const [err, setErr] = useState("");

  const existing = questions || [];
  function makePrompt() {
    setErr(""); setOutput(null);
    if (!subject.trim() || !category.trim()) { setErr("Enter a subject and a category."); return; }
    const s = (stem.trim() || (defaultStem(level, category) + "_" + subject.toLowerCase().replace(/[^a-z0-9]/g, "").slice(0, 4)));
    setStem(s);
    const sampleStyle = existing.length ? existing.slice(0, 3) : null;
    // ask for questions+resource in one object so it's a single paste
    setPrompt(`You are creating content for a UK curriculum education app.${sampleStyle ? `\nMatch this house style:\n${JSON.stringify(sampleStyle, null, 2)}` : ""}

Create content for:
- level: "${level}"
- subject: "${subject}"
- category: "${category}"

Return ONE valid JSON object with exactly two keys:
1. "questions": array of ${perCat} MCQs, each {"text","options":{"A","B","C","D"},"correct","difficulty","explanation"}
   - per-question explanation under 40 words
   - vary difficulty 1-4, distribute correct keys evenly across A/B/C/D
   - distractors reflect real misconceptions, all answers factually correct
2. "resource": {"title","keyIdea","body","workedExample":{"problem","solution"},"commonMistakes":[...],"keyFacts":[...]}
   - body ~250-350 words

CRITICAL: valid JSON only. No markdown fences. No trailing commas. Use \\n literally for newlines inside strings.`);
  }
  function ingest() {
    setErr(""); setOutput(null);
    try {
      const obj = extractJsonObject(paste);
      const qs = Array.isArray(obj.questions) ? obj.questions : [];
      const { clean, report } = ingestQuestions(JSON.stringify(qs), { existing, level, subject, category, stem, startNum: 1 });
      setOutput({ clean, report, resource: obj.resource || null });
    } catch (e) { setErr(e.message); }
  }
  function merge() {
    if (!output) return;
    mergeQuestions(output.clean);
    if (output.resource) mergeResources(level, subject, category, output.resource);
    setErr(`MERGED ✓ — ${output.clean.length} questions${output.resource ? " + 1 resource" : ""} added.`);
    setOutput(null); setPaste(""); setPrompt("");
  }

  return <div>
    <Section title="1 · Define a new subject / category">
      <Field label="Subject name"><input value={subject} onChange={(e) => setSubject(e.target.value)} style={inputStyle} placeholder="biology" /></Field>
      <Field label="Level"><Segmented options={levelOptions.length ? levelOptions : ["ks2", "ks3", "gcse", "alevel"]} value={level} onChange={setLevel} /></Field>
      <Field label="Category"><input value={category} onChange={(e) => setCategory(e.target.value)} style={inputStyle} placeholder="Cell biology" /></Field>
      <Field label="Questions"><NumStepper value={perCat} setValue={setPerCat} min={5} max={50} step={5} /></Field>
      <Field label="ID stem (optional — auto if blank)"><input value={stem} onChange={(e) => setStem(e.target.value)} style={inputStyle} placeholder="auto" /></Field>
      <Btn kind="dark" onClick={makePrompt}>Build prompt</Btn>
    </Section>

    {prompt && <Section title="2 · Copy prompt → run in chat">
      <CodeBox text={prompt} />
      <div style={{ marginTop: 8 }}><CopyBtn getText={() => prompt} label="Copy prompt" /></div>
    </Section>}

    {prompt && <Section title="3 · Paste reply → ingest">
      <PasteBox value={paste} onChange={setPaste} placeholder='Paste reply: { "questions": [...], "resource": {...} }' />
      <div style={{ marginTop: 8 }}><Btn onClick={ingest} disabled={!paste.trim()}>Validate & ingest</Btn></div>
    </Section>}

    {err && <div style={{ color: err.startsWith("MERGED") ? MINT : DANGER, fontSize: 13, marginBottom: 12, fontFamily: "ui-monospace,monospace" }}>{err}</div>}

    {output && <Section title={`4 · Review — ${output.report.kept} questions${output.resource ? " + resource" : ""}`} right={<span style={{ fontSize: 11, color: "#8aa595" }}>{output.report.dupRemoved} dup · {output.report.invalid} bad</span>}>
      <PreviewQuestions questions={output.clean.slice(0, 3)} />
      {output.resource && <div style={{ background: PANEL, border: `1px solid ${BORDER}`, borderRadius: 10, padding: 12, marginBottom: 10 }}>
        <div style={{ fontSize: 12, color: MINT, fontFamily: "ui-monospace,monospace", marginBottom: 4 }}>RESOURCE · {output.resource.title}</div>
        <div style={{ fontSize: 12, color: "#b9d0c3", lineHeight: 1.5 }}>{(output.resource.keyIdea || output.resource.body || "").slice(0, 160)}…</div>
      </div>}
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        <Btn onClick={merge}>✓ Merge into dataset</Btn>
        <CopyBtn getText={() => serialiseQuestionsAppend(output.clean)} kind="ghost" label="Copy questions block" />
        {output.resource && <CopyBtn getText={() => JSON.stringify({ [level]: { [subject]: { [category]: output.resource } } }, null, 2)} kind="ghost" label="Copy resource JSON" />}
      </div>
    </Section>}
  </div>;
}

function ExportTab({ questions, explanations, resources }) {
  const qText = useMemo(() => questions ? "export const QUESTIONS = [\n" + questions.map((q) => "  " + JSON.stringify(q) + ",").join("\n") + "\n];\n" : "", [questions]);
  const eText = useMemo(() => explanations ? "export const EXPLANATIONS = " + JSON.stringify(explanations, null, 2) + ";\n" : "", [explanations]);
  const rText = useMemo(() => resources ? "export const RESOURCES = " + JSON.stringify(resources, null, 2) + ";\n" : "", [resources]);
  if (!questions || !questions.length) return <Empty msg="Nothing to export yet." />;
  return <div>
    <Section title="Export working dataset">
      <div style={{ fontSize: 12, color: "#8aa595", marginBottom: 12, lineHeight: 1.6 }}>The full in-memory dataset including everything you've merged this session. Download or copy a complete file to replace your source.</div>
      <Stat big={questions.length.toLocaleString()} label="questions in memory" />
    </Section>
    <Section title="questions.js">
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        <CopyBtn getText={() => qText} label="Copy full questions.js" />
        <Btn kind="dark" onClick={() => download(`questions_${Date.now()}.js`, qText)}>⬇ Download questions.js</Btn>
      </div>
    </Section>
    {resources && <Section title="resources.js"><div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      <CopyBtn getText={() => rText} kind="ghost" label="Copy resources.js" />
      <Btn kind="dark" onClick={() => download(`resources_${Date.now()}.js`, rText)}>⬇ Download resources.js</Btn>
    </div></Section>}
    {explanations && <Section title="explanations.js"><div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      <CopyBtn getText={() => eText} kind="ghost" label="Copy explanations.js" />
      <Btn kind="dark" onClick={() => download(`explanations_${Date.now()}.js`, eText)}>⬇ Download explanations.js</Btn>
    </div></Section>}
  </div>;
}

function DupesTab({ dupes, questions }) {
  if (!questions || !questions.length) return <Empty msg="Load or build questions first." />;
  return <div>
    <Section title="Data health">
      <div style={{ display: "flex", gap: 8, marginBottom: 14 }}>
        <Stat big={dupes.dupIds.length} label="duplicate IDs" />
        <Stat big={dupes.dupTexts.length} label="duplicate texts" />
      </div>
      {dupes.dupIds.length > 0 && <div style={{ marginBottom: 14 }}><div style={{ fontSize: 12, color: DANGER, marginBottom: 6 }}>Duplicate IDs:</div>{dupes.dupIds.slice(0, 20).map((id) => <Tag key={id} color={DANGER}>{id}</Tag>)}</div>}
      {dupes.dupTexts.length > 0 ? <div>
        <div style={{ fontSize: 12, color: WARN, marginBottom: 6 }}>Repeated question text (first 15):</div>
        {dupes.dupTexts.slice(0, 15).map((d, i) => <div key={i} style={{ fontSize: 12, color: "#cfe0d6", padding: "6px 10px", background: PANEL, border: `1px solid ${BORDER}`, borderRadius: 8, marginBottom: 6 }}><span style={{ color: WARN, fontFamily: "ui-monospace,monospace" }}>×{d.count}</span> {d.text.slice(0, 80)}</div>)}
      </div> : <div style={{ fontSize: 13, color: MINT }}>No duplicate question text found. 👍</div>}
    </Section>
  </div>;
}

// ============================================================================
// APP ROOT
// ============================================================================
export default function App() {
  const [tab, setTab] = useState("load");
  const [questions, setQuestions] = useState(null);
  const [explanations, setExplanations] = useState(null);
  const [resources, setResources] = useState(null);
  const [loadMsg, setLoadMsg] = useState("");
  const [error, setError] = useState("");
  const fileRef = useRef(null);

  const stats = useMemo(() => (questions && questions.length) ? buildStats(questions) : null, [questions]);
  const dupes = useMemo(() => questions ? findDuplicates(questions) : { dupIds: [], dupTexts: [] }, [questions]);
  const levelOptions = useMemo(() => questions ? Array.from(new Set(questions.map((q) => q.level))).filter(Boolean) : [], [questions]);

  const handleFiles = useCallback(async (fileList) => {
    setError(""); setLoadMsg("Reading files…");
    const files = Array.from(fileList);
    let loadedQ = 0;
    for (const f of files) {
      const text = await f.text();
      const name = f.name.toLowerCase();
      try {
        if (name.includes("question") || text.includes("export const QUESTIONS")) { const parsed = parseQuestions(text); setQuestions(parsed); loadedQ = parsed.length; }
        else if (name.includes("explanation") || text.includes("export const EXPLANATIONS")) setExplanations(parseObjectModule(text, "EXPLANATIONS"));
        else if (name.includes("resource") || text.includes("export const RESOURCES")) setResources(parseObjectModule(text, "RESOURCES"));
      } catch (e) { setError(`Failed to parse ${f.name}: ${e.message}`); }
    }
    setLoadMsg(loadedQ ? `Loaded ${loadedQ.toLocaleString()} questions${files.length > 1 ? " (+ other files)" : ""}.` : "Files read — check the questions file matched.");
    if (loadedQ) setTab("analyse");
  }, []);

  const onPasteLoad = useCallback((text) => {
    const parsed = parseQuestions(text);
    if (!Array.isArray(parsed)) throw new Error("Parsed value is not an array");
    setQuestions(parsed); setError("");
    return parsed.length;
  }, []);

  const mergeQuestions = useCallback((newQs) => { setQuestions((prev) => [...(prev || []), ...newQs]); }, []);
  const applyEnrichment = useCallback((patch, field) => {
    let result = { applied: 0, orphan: 0 };
    setQuestions((prev) => { const r = applyPatch(prev || [], patch, field); result = { applied: r.applied, orphan: r.orphan }; return r.out; });
    return result;
  }, []);
  const mergeResources = useCallback((level, subject, category, resource) => {
    setResources((prev) => {
      const next = { ...(prev || {}) };
      next[level] = { ...(next[level] || {}) };
      next[level][subject] = { ...(next[level][subject] || {}) };
      next[level][subject][category] = resource;
      return next;
    });
  }, []);

  const TABS = [["load", "Load"], ["analyse", "Gaps"], ["generate", "Generate"], ["enrich", "Enrich"], ["subject", "New Subject"], ["export", "Export"], ["dupes", "Health"]];

  return <div style={{ fontFamily: "'Georgia','Iowan Old Style',serif", background: "#0f1410", color: "#e8efe6", minHeight: "100vh", margin: 0, padding: "0 0 64px" }}>
    <div style={{ padding: "22px 18px 14px", borderBottom: `1px solid ${BORDER}`, background: "linear-gradient(180deg,#18241d,#0f1410)", position: "sticky", top: 0, zIndex: 10 }}>
      <div style={{ fontSize: 22, fontWeight: 700 }}>MintyMarks <span style={{ color: MINT }}>Studio</span> <span style={{ fontSize: 12, color: "#6f8a7c", fontFamily: "ui-monospace,monospace" }}>v2 · no-API</span></div>
      <div style={{ fontSize: 12, color: "#8aa595", marginTop: 2 }}>Build prompts · run in your chat · paste replies back · merge live</div>
    </div>
    <div style={{ display: "flex", gap: 6, padding: "12px 14px", overflowX: "auto", borderBottom: `1px solid ${BORDER}` }}>
      {TABS.map(([k, label]) => <button key={k} onClick={() => setTab(k)} style={{ flex: "0 0 auto", fontFamily: "ui-monospace,monospace", fontSize: 12, fontWeight: 600, padding: "8px 12px", borderRadius: 8, border: `1px solid ${tab === k ? MINT : BORDER}`, background: tab === k ? "rgba(111,227,176,0.14)" : "transparent", color: tab === k ? MINT : "#8aa595", whiteSpace: "nowrap", cursor: "pointer" }}>{label}</button>)}
    </div>
    <div style={{ padding: 16, maxWidth: 720, margin: "0 auto" }}>
      {error && <div style={{ background: "rgba(227,111,143,0.12)", border: `1px solid ${DANGER}55`, color: DANGER, padding: 12, borderRadius: 10, marginBottom: 14, fontSize: 13, fontFamily: "ui-monospace,monospace" }}>{error}</div>}
      {tab === "load" && <LoadTab fileRef={fileRef} handleFiles={handleFiles} loadMsg={loadMsg} questions={questions} explanations={explanations} resources={resources} onPasteLoad={onPasteLoad} />}
      {tab === "analyse" && <AnalyseTab stats={stats} questions={questions} />}
      {tab === "generate" && <GenerateTab stats={stats} questions={questions} mergeQuestions={mergeQuestions} />}
      {tab === "enrich" && <EnrichTab stats={stats} questions={questions} applyEnrichment={applyEnrichment} />}
      {tab === "subject" && <SubjectTab questions={questions} levelOptions={levelOptions} mergeQuestions={mergeQuestions} mergeResources={mergeResources} />}
      {tab === "export" && <ExportTab questions={questions} explanations={explanations} resources={resources} />}
      {tab === "dupes" && <DupesTab dupes={dupes} questions={questions} />}
    </div>
  </div>;
}
