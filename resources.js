// src/data/resources.js
// Curated learning resources per level and topic category.
// Covers BBC Bitesize, Corbettmaths, MathsGenie/YesGenie, Khan Academy, Topmarks,
// and Maths is Fun — all free, trusted, and UK-syllabus-aligned.
//
// Used in Results and Dashboard to show clickable links for weak topics.
// Keys must exactly match `category` values in questions.js.
//
// URL verification notes (May 2026):
// - BBC Bitesize topic-level IDs are unstable; subject-level pages used instead.
// - MathsGenie has migrated many topics to yesgenie.com — direct links used.
// - Khan Academy deep sub-paths confirmed working.
// - Corbettmaths primary content moved to corbettmathsprimary.com.

export const RESOURCES = {
  // ─── KS2 (Years 3–6) ───────────────────────────────────────────────────────
  ks2: {
    "Number & place value": [
      {
        title: "BBC Bitesize – KS2 Maths",
        url: "https://www.bbc.co.uk/bitesize/subjects/z826n39",
        type: "article",
      },
      {
        title: "Corbettmaths Primary – Videos & Worksheets",
        url: "https://corbettmathsprimary.com/content/",
        type: "video",
      },
      {
        title: "Khan Academy – Place Value (Year 4–5 level)",
        url: "https://www.khanacademy.org/math/cc-fourth-grade-math/imp-place-value",
        type: "interactive",
      },
      {
        title: "Maths is Fun – Place Value",
        url: "https://www.mathsisfun.com/place-value.html",
        type: "article",
      },
      {
        title: "Topmarks – Number & Place Value Games",
        url: "https://www.topmarks.co.uk/maths-games/7-11-years/place-value",
        type: "interactive",
      },
    ],

    "Addition & subtraction": [
      {
        title: "BBC Bitesize – KS2 Maths",
        url: "https://www.bbc.co.uk/bitesize/subjects/z826n39",
        type: "article",
      },
      {
        title: "Corbettmaths Primary – Videos & Worksheets",
        url: "https://corbettmathsprimary.com/content/",
        type: "video",
      },
      {
        title: "Khan Academy – Addition & Subtraction",
        url: "https://www.khanacademy.org/math/arithmetic/arith-review-add-subtract",
        type: "interactive",
      },
      {
        title: "Topmarks – Addition & Subtraction Games (7–11)",
        url: "https://www.topmarks.co.uk/maths-games/7-11-years/addition-and-subtraction",
        type: "interactive",
      },
      {
        title: "Maths is Fun – Adding",
        url: "https://www.mathsisfun.com/numbers/addition.html",
        type: "article",
      },
    ],

    "Multiplication & division": [
      {
        title: "BBC Bitesize – KS2 Maths",
        url: "https://www.bbc.co.uk/bitesize/subjects/z826n39",
        type: "article",
      },
      {
        title: "Corbettmaths Primary – Videos & Worksheets",
        url: "https://corbettmathsprimary.com/content/",
        type: "video",
      },
      {
        title: "Khan Academy – Multiplication & Division",
        url: "https://www.khanacademy.org/math/arithmetic/arith-review-multiply-divide",
        type: "interactive",
      },
      {
        title: "Topmarks – Multiplication & Division Games (7–11)",
        url: "https://www.topmarks.co.uk/maths-games/7-11-years/multiplication-and-division",
        type: "interactive",
      },
      {
        title: "Maths is Fun – Times Tables",
        url: "https://www.mathsisfun.com/tables.html",
        type: "article",
      },
    ],

    "Fractions, decimals & percentages": [
      {
        title: "BBC Bitesize – KS2 Maths",
        url: "https://www.bbc.co.uk/bitesize/subjects/z826n39",
        type: "article",
      },
      {
        title: "Corbettmaths Primary – Videos & Worksheets",
        url: "https://corbettmathsprimary.com/content/",
        type: "video",
      },
      {
        title: "Khan Academy – Fractions",
        url: "https://www.khanacademy.org/math/arithmetic/fraction-arithmetic",
        type: "interactive",
      },
      {
        title: "Maths is Fun – Fractions",
        url: "https://www.mathsisfun.com/fractions.html",
        type: "article",
      },
      {
        title: "Topmarks – Fractions & Decimals Games (7–11)",
        url: "https://www.topmarks.co.uk/maths-games/7-11-years/fractions-and-decimals",
        type: "interactive",
      },
    ],

    "Geometry – shapes": [
      {
        title: "BBC Bitesize – KS2 Maths",
        url: "https://www.bbc.co.uk/bitesize/subjects/z826n39",
        type: "article",
      },
      {
        title: "Corbettmaths Primary – Videos & Worksheets",
        url: "https://corbettmathsprimary.com/content/",
        type: "video",
      },
      {
        title: "Khan Academy – Basic Geometry",
        url: "https://www.khanacademy.org/math/basic-geo",
        type: "interactive",
      },
      {
        title: "Topmarks – Geometry Games (7–11)",
        url: "https://www.topmarks.co.uk/maths-games/7-11-years/geometry",
        type: "interactive",
      },
      {
        title: "Maths is Fun – Geometry",
        url: "https://www.mathsisfun.com/geometry/",
        type: "article",
      },
    ],

    "Geometry – position & direction": [
      {
        title: "BBC Bitesize – KS2 Maths",
        url: "https://www.bbc.co.uk/bitesize/subjects/z826n39",
        type: "article",
      },
      {
        title: "Corbettmaths Primary – Videos & Worksheets",
        url: "https://corbettmathsprimary.com/content/",
        type: "video",
      },
      {
        title: "Topmarks – Geometry & Coordinates Games (7–11)",
        url: "https://www.topmarks.co.uk/maths-games/7-11-years/geometry",
        type: "interactive",
      },
      {
        title: "Maths is Fun – Cartesian Coordinates",
        url: "https://www.mathsisfun.com/data/cartesian-coordinates.html",
        type: "article",
      },
    ],

    "Measurement": [
      {
        title: "BBC Bitesize – KS2 Maths",
        url: "https://www.bbc.co.uk/bitesize/subjects/z826n39",
        type: "article",
      },
      {
        title: "Corbettmaths Primary – Videos & Worksheets",
        url: "https://corbettmathsprimary.com/content/",
        type: "video",
      },
      {
        title: "Khan Academy – Measurement & Data",
        url: "https://www.khanacademy.org/math/cc-fourth-grade-math/imp-measurement-and-data",
        type: "interactive",
      },
      {
        title: "Topmarks – Measures Games (7–11)",
        url: "https://www.topmarks.co.uk/maths-games/7-11-years/measures",
        type: "interactive",
      },
      {
        title: "Maths is Fun – Measurement",
        url: "https://www.mathsisfun.com/measure/",
        type: "article",
      },
    ],

    "Statistics": [
      {
        title: "BBC Bitesize – KS2 Maths",
        url: "https://www.bbc.co.uk/bitesize/subjects/z826n39",
        type: "article",
      },
      {
        title: "Corbettmaths Primary – Videos & Worksheets",
        url: "https://corbettmathsprimary.com/content/",
        type: "video",
      },
      {
        title: "Khan Academy – Data & Statistics (Primary level)",
        url: "https://www.khanacademy.org/math/cc-sixth-grade-math/cc-6th-data-statistics",
        type: "interactive",
      },
      {
        title: "Topmarks – Data Handling Games (7–11)",
        url: "https://www.topmarks.co.uk/maths-games/7-11-years/data-handling",
        type: "interactive",
      },
      {
        title: "Maths is Fun – Data",
        url: "https://www.mathsisfun.com/data/",
        type: "article",
      },
    ],

    "Algebra": [
      {
        title: "BBC Bitesize – KS2 Maths",
        url: "https://www.bbc.co.uk/bitesize/subjects/z826n39",
        type: "article",
      },
      {
        title: "Corbettmaths Primary – Videos & Worksheets",
        url: "https://corbettmathsprimary.com/content/",
        type: "video",
      },
      {
        title: "Khan Academy – Algebra Basics",
        url: "https://www.khanacademy.org/math/algebra-basics",
        type: "interactive",
      },
      {
        title: "Maths is Fun – Introduction to Algebra",
        url: "https://www.mathsisfun.com/algebra/introduction.html",
        type: "article",
      },
    ],

    "Ratio & proportion": [
      {
        title: "BBC Bitesize – KS2 Maths",
        url: "https://www.bbc.co.uk/bitesize/subjects/z826n39",
        type: "article",
      },
      {
        title: "Corbettmaths Primary – Videos & Worksheets",
        url: "https://corbettmathsprimary.com/content/",
        type: "video",
      },
      {
        title: "Khan Academy – Ratios & Proportions",
        url: "https://www.khanacademy.org/math/pre-algebra/pre-algebra-ratios-rates",
        type: "interactive",
      },
      {
        title: "Maths is Fun – Ratios",
        url: "https://www.mathsisfun.com/numbers/ratio.html",
        type: "article",
      },
    ],
  },

  // ─── KS3 (Years 7–9) ───────────────────────────────────────────────────────
  ks3: {
    "Number": [
      {
        title: "BBC Bitesize – KS3 Maths",
        url: "https://www.bbc.co.uk/bitesize/subjects/zqhs34j",
        type: "article",
      },
      {
        title: "Corbettmaths – Videos & Worksheets",
        url: "https://corbettmaths.com/contents/",
        type: "video",
      },
      {
        title: "YesGenie – Place Value (Videos & Exam Questions)",
        url: "https://yesgenie.com/gcse/maths/edexcel/grade-1-1-6-place-value",
        type: "article",
      },
      {
        title: "Khan Academy – Arithmetic & Pre-Algebra",
        url: "https://www.khanacademy.org/math/arithmetic",
        type: "interactive",
      },
      {
        title: "Maths is Fun – Numbers",
        url: "https://www.mathsisfun.com/numbers/",
        type: "article",
      },
    ],

    "Algebra": [
      {
        title: "BBC Bitesize – KS3 Maths",
        url: "https://www.bbc.co.uk/bitesize/subjects/zqhs34j",
        type: "article",
      },
      {
        title: "Corbettmaths – Videos & Worksheets",
        url: "https://corbettmaths.com/contents/",
        type: "video",
      },
      {
        title: "MathsGenie – Simplifying Algebra",
        url: "https://www.mathsgenie.co.uk/simplifyingalgebra.php",
        type: "article",
      },
      {
        title: "YesGenie – Solving Equations",
        url: "https://yesgenie.com/gcse/maths/edexcel/grade-3-3-14-solving-equations",
        type: "article",
      },
      {
        title: "Khan Academy – Algebra",
        url: "https://www.khanacademy.org/math/algebra",
        type: "interactive",
      },
      {
        title: "Maths is Fun – Algebra",
        url: "https://www.mathsisfun.com/algebra/",
        type: "article",
      },
    ],

    "Geometry & measures": [
      {
        title: "BBC Bitesize – KS3 Maths",
        url: "https://www.bbc.co.uk/bitesize/subjects/zqhs34j",
        type: "article",
      },
      {
        title: "Corbettmaths – Videos & Worksheets",
        url: "https://corbettmaths.com/contents/",
        type: "video",
      },
      {
        title: "YesGenie – Area & Perimeter",
        url: "https://yesgenie.com/gcse/maths/edexcel/grade-2-2-11-area-and-perimeter",
        type: "article",
      },
      {
        title: "YesGenie – Angles",
        url: "https://yesgenie.com/gcse/maths/edexcel/grade-2-2-10-angles",
        type: "article",
      },
      {
        title: "Khan Academy – Basic Geometry",
        url: "https://www.khanacademy.org/math/basic-geo",
        type: "interactive",
      },
      {
        title: "Maths is Fun – Geometry",
        url: "https://www.mathsisfun.com/geometry/",
        type: "article",
      },
    ],

    "Ratio & proportion": [
      {
        title: "BBC Bitesize – KS3 Maths",
        url: "https://www.bbc.co.uk/bitesize/subjects/zqhs34j",
        type: "article",
      },
      {
        title: "Corbettmaths – Videos & Worksheets",
        url: "https://corbettmaths.com/contents/",
        type: "video",
      },
      {
        title: "YesGenie – Ratio",
        url: "https://yesgenie.com/gcse/maths/edexcel/grade-3-3-5-ratio",
        type: "article",
      },
      {
        title: "YesGenie – Percentages",
        url: "https://yesgenie.com/gcse/maths/edexcel/grade-3-3-7-percentages",
        type: "article",
      },
      {
        title: "Khan Academy – Ratios & Proportions",
        url: "https://www.khanacademy.org/math/pre-algebra/pre-algebra-ratios-rates",
        type: "interactive",
      },
      {
        title: "Maths is Fun – Ratio",
        url: "https://www.mathsisfun.com/numbers/ratio.html",
        type: "article",
      },
    ],

    "Statistics & probability": [
      {
        title: "BBC Bitesize – KS3 Maths",
        url: "https://www.bbc.co.uk/bitesize/subjects/zqhs34j",
        type: "article",
      },
      {
        title: "Corbettmaths – Videos & Worksheets",
        url: "https://corbettmaths.com/contents/",
        type: "video",
      },
      {
        title: "MathsGenie – Averages (Mean, Median, Mode)",
        url: "https://www.mathsgenie.co.uk/averages.php",
        type: "article",
      },
      {
        title: "YesGenie – Probability",
        url: "https://yesgenie.com/gcse/maths/edexcel/grade-2-2-12-probability",
        type: "article",
      },
      {
        title: "Khan Academy – Statistics & Probability",
        url: "https://www.khanacademy.org/math/statistics-probability",
        type: "interactive",
      },
      {
        title: "Maths is Fun – Data",
        url: "https://www.mathsisfun.com/data/",
        type: "article",
      },
    ],
  },

  // ─── GCSE (Edexcel / AQA) ──────────────────────────────────────────────────
  gcse: {
    "Number": [
      {
        title: "BBC Bitesize – GCSE Maths",
        url: "https://www.bbc.co.uk/bitesize/subjects/z38pycw",
        type: "article",
      },
      {
        title: "Corbettmaths – Videos & Practice Papers",
        url: "https://corbettmaths.com/contents/",
        type: "video",
      },
      {
        title: "YesGenie – Place Value & Rounding",
        url: "https://yesgenie.com/gcse/maths/edexcel/grade-1-1-6-place-value",
        type: "article",
      },
      {
        title: "YesGenie – Indices",
        url: "https://yesgenie.com/gcse/maths/edexcel/grade-4-4-2-indices",
        type: "article",
      },
      {
        title: "YesGenie – Standard Form",
        url: "https://yesgenie.com/gcse/maths/edexcel/grade-5-5-4-standard-form",
        type: "article",
      },
      {
        title: "Khan Academy – Arithmetic",
        url: "https://www.khanacademy.org/math/arithmetic",
        type: "interactive",
      },
      {
        title: "Maths is Fun – Numbers",
        url: "https://www.mathsisfun.com/numbers/",
        type: "article",
      },
    ],

    "Algebra": [
      {
        title: "BBC Bitesize – GCSE Maths",
        url: "https://www.bbc.co.uk/bitesize/subjects/z38pycw",
        type: "article",
      },
      {
        title: "Corbettmaths – Videos & Practice Papers",
        url: "https://corbettmaths.com/contents/",
        type: "video",
      },
      {
        title: "MathsGenie – Simplifying Algebra",
        url: "https://www.mathsgenie.co.uk/simplifyingalgebra.php",
        type: "article",
      },
      {
        title: "YesGenie – Solving Equations",
        url: "https://yesgenie.com/gcse/maths/edexcel/grade-3-3-14-solving-equations",
        type: "article",
      },
      {
        title: "MathsGenie – Expanding & Factorising",
        url: "https://www.mathsgenie.co.uk/expanding-and-factorising.php",
        type: "article",
      },
      {
        title: "YesGenie – Sequences (Nth Term)",
        url: "https://yesgenie.com/gcse/maths/edexcel/grade-4-4-7-sequences-nth-term",
        type: "article",
      },
      {
        title: "Khan Academy – Algebra 1",
        url: "https://www.khanacademy.org/math/algebra",
        type: "interactive",
      },
      {
        title: "Khan Academy – Algebra 2",
        url: "https://www.khanacademy.org/math/algebra2",
        type: "interactive",
      },
      {
        title: "Maths is Fun – Algebra",
        url: "https://www.mathsisfun.com/algebra/",
        type: "article",
      },
    ],

    "Geometry & measures": [
      {
        title: "BBC Bitesize – GCSE Maths",
        url: "https://www.bbc.co.uk/bitesize/subjects/z38pycw",
        type: "article",
      },
      {
        title: "Corbettmaths – Videos & Practice Papers",
        url: "https://corbettmaths.com/contents/",
        type: "video",
      },
      {
        title: "YesGenie – Area & Perimeter",
        url: "https://yesgenie.com/gcse/maths/edexcel/grade-2-2-11-area-and-perimeter",
        type: "article",
      },
      {
        title: "MathsGenie – Pythagoras' Theorem",
        url: "https://www.mathsgenie.co.uk/pythagoras.php",
        type: "article",
      },
      {
        title: "MathsGenie – Transformations",
        url: "https://www.mathsgenie.co.uk/transformations.php",
        type: "article",
      },
      {
        title: "MathsGenie – Trigonometry (SOHCAHTOA)",
        url: "https://www.mathsgenie.co.uk/sohcahtoa.php",
        type: "article",
      },
      {
        title: "Khan Academy – Geometry",
        url: "https://www.khanacademy.org/math/geometry",
        type: "interactive",
      },
      {
        title: "Maths is Fun – Geometry",
        url: "https://www.mathsisfun.com/geometry/",
        type: "article",
      },
    ],

    "Ratio, proportion & rates of change": [
      {
        title: "BBC Bitesize – GCSE Maths",
        url: "https://www.bbc.co.uk/bitesize/subjects/z38pycw",
        type: "article",
      },
      {
        title: "Corbettmaths – Videos & Practice Papers",
        url: "https://corbettmaths.com/contents/",
        type: "video",
      },
      {
        title: "YesGenie – Ratio",
        url: "https://yesgenie.com/gcse/maths/edexcel/grade-3-3-5-ratio",
        type: "article",
      },
      {
        title: "YesGenie – Percentages",
        url: "https://yesgenie.com/gcse/maths/edexcel/grade-3-3-7-percentages",
        type: "article",
      },
      {
        title: "YesGenie – Direct & Inverse Proportion",
        url: "https://yesgenie.com/gcse/maths/edexcel/grade-5-5-2-direct-and-inverse-proportion",
        type: "article",
      },
      {
        title: "Khan Academy – Ratios, Proportions & Percentages",
        url: "https://www.khanacademy.org/math/pre-algebra/pre-algebra-ratios-rates",
        type: "interactive",
      },
      {
        title: "Maths is Fun – Ratios",
        url: "https://www.mathsisfun.com/numbers/ratio.html",
        type: "article",
      },
    ],

    "Statistics": [
      {
        title: "BBC Bitesize – GCSE Maths",
        url: "https://www.bbc.co.uk/bitesize/subjects/z38pycw",
        type: "article",
      },
      {
        title: "Corbettmaths – Videos & Practice Papers",
        url: "https://corbettmaths.com/contents/",
        type: "video",
      },
      {
        title: "MathsGenie – Averages (Mean, Median, Mode, Range)",
        url: "https://www.mathsgenie.co.uk/averages.php",
        type: "article",
      },
      {
        title: "YesGenie – Scatter Graphs",
        url: "https://yesgenie.com/gcse/maths/edexcel/grade-4-4-20-scatter-graphs",
        type: "article",
      },
      {
        title: "YesGenie – Averages from Frequency Tables",
        url: "https://yesgenie.com/gcse/maths/edexcel/grade-4-4-18-averages-from-frequency-tables",
        type: "article",
      },
      {
        title: "Khan Academy – Statistics & Probability",
        url: "https://www.khanacademy.org/math/statistics-probability",
        type: "interactive",
      },
      {
        title: "Maths is Fun – Data",
        url: "https://www.mathsisfun.com/data/",
        type: "article",
      },
    ],

    "Probability": [
      {
        title: "BBC Bitesize – GCSE Maths",
        url: "https://www.bbc.co.uk/bitesize/subjects/z38pycw",
        type: "article",
      },
      {
        title: "Corbettmaths – Videos & Practice Papers",
        url: "https://corbettmaths.com/contents/",
        type: "video",
      },
      {
        title: "YesGenie – Probability",
        url: "https://yesgenie.com/gcse/maths/edexcel/grade-2-2-12-probability",
        type: "article",
      },
      {
        title: "YesGenie – Probability Trees",
        url: "https://yesgenie.com/gcse/maths/edexcel/grade-5-5-22-probability-trees",
        type: "article",
      },
      {
        title: "YesGenie – Venn Diagrams",
        url: "https://yesgenie.com/gcse/maths/edexcel/grade-5-5-23-venn-diagrams",
        type: "article",
      },
      {
        title: "Khan Academy – Probability",
        url: "https://www.khanacademy.org/math/statistics-probability/probability-library",
        type: "interactive",
      },
      {
        title: "Maths is Fun – Probability",
        url: "https://www.mathsisfun.com/data/probability.html",
        type: "article",
      },
    ],
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// CHEMISTRY — KS2 & KS3
// ─────────────────────────────────────────────────────────────────────────────

const CHEMISTRY_RESOURCES = {
  ks2: {
    "States of matter": [
      { title: "BBC Bitesize – States of Matter (KS2 Science)", url: "https://www.bbc.co.uk/bitesize/topics/zkgg87h", type: "article" },
      { title: "Khan Academy – States of Matter", url: "https://www.khanacademy.org/science/chemistry/states-of-matter-and-intermolecular-forces/states-of-matter/v/states-of-matter", type: "video" },
      { title: "BBC Bitesize – Changes of State", url: "https://www.bbc.co.uk/bitesize/topics/zkgg87h/articles/zsg4pg8", type: "article" },
      { title: "Topmarks – Science Games (7–11)", url: "https://www.topmarks.co.uk/science/7-11-years/", type: "interactive" },
    ],
    "Properties of materials": [
      { title: "BBC Bitesize – Properties of Materials (KS2)", url: "https://www.bbc.co.uk/bitesize/topics/z4ssf82", type: "article" },
      { title: "BBC Bitesize – Conductors and Insulators", url: "https://www.bbc.co.uk/bitesize/topics/z4ssf82/articles/zsjxt39", type: "article" },
      { title: "Topmarks – Science Games (7–11)", url: "https://www.topmarks.co.uk/science/7-11-years/", type: "interactive" },
      { title: "Science Kids – Materials Facts", url: "https://www.sciencekids.co.nz/sciencefacts/materials.html", type: "article" },
    ],
    "Dissolving & mixtures": [
      { title: "BBC Bitesize – Dissolving (KS2 Science)", url: "https://www.bbc.co.uk/bitesize/topics/z9r4jxs", type: "article" },
      { title: "BBC Bitesize – Separating Mixtures (KS2)", url: "https://www.bbc.co.uk/bitesize/topics/z9r4jxs/articles/z3wbvk7", type: "article" },
      { title: "Khan Academy – Mixtures and Solutions", url: "https://www.khanacademy.org/science/chemistry/atomic-structure-and-properties/mixtures-pure-substances", type: "video" },
      { title: "Topmarks – Science Games (7–11)", url: "https://www.topmarks.co.uk/science/7-11-years/", type: "interactive" },
    ],
    "Reversible & irreversible changes": [
      { title: "BBC Bitesize – Reversible and Irreversible Changes (KS2)", url: "https://www.bbc.co.uk/bitesize/topics/z9r4jxs/articles/zsgfjhv", type: "article" },
      { title: "BBC Bitesize – Chemical and Physical Changes", url: "https://www.bbc.co.uk/bitesize/topics/z9r4jxs", type: "article" },
      { title: "Topmarks – Science Games (7–11)", url: "https://www.topmarks.co.uk/science/7-11-years/", type: "interactive" },
      { title: "Science Kids – Chemical Reactions Facts", url: "https://www.sciencekids.co.nz/sciencefacts/chemistry/chemicalreactions.html", type: "article" },
    ],
  },

  ks3: {
    "Particles & atomic structure": [
      { title: "BBC Bitesize – Atomic Structure (KS3 Chemistry)", url: "https://www.bbc.co.uk/bitesize/guides/z3s8d2p/revision/1", type: "article" },
      { title: "Khan Academy – Atomic Structure", url: "https://www.khanacademy.org/science/chemistry/electronic-structure-of-atoms", type: "interactive" },
      { title: "BBC Bitesize – Subatomic Particles", url: "https://www.bbc.co.uk/bitesize/topics/z2v39j6/articles/z8ydwxs", type: "article" },
      { title: "Chemguide – Atomic Structure (accessible intro)", url: "https://www.chemguide.co.uk/atoms/structures/atomorbs.html", type: "article" },
    ],
    "Elements, compounds & mixtures": [
      { title: "BBC Bitesize – Elements, Compounds and Mixtures (KS3)", url: "https://www.bbc.co.uk/bitesize/guides/zy9n6yc/revision/1", type: "article" },
      { title: "Khan Academy – Elements and Compounds", url: "https://www.khanacademy.org/science/chemistry/atomic-structure-and-properties/introduction-to-compounds/v/introduction-to-compounds", type: "video" },
      { title: "BBC Bitesize – Pure and Impure Substances", url: "https://www.bbc.co.uk/bitesize/topics/z482ng8/articles/zq96qhv", type: "article" },
      { title: "Educake – KS3 Chemistry Practice", url: "https://www.educake.co.uk", type: "interactive" },
    ],
    "The periodic table": [
      { title: "BBC Bitesize – The Periodic Table (KS3)", url: "https://www.bbc.co.uk/bitesize/guides/z8mfpbk/revision/1", type: "article" },
      { title: "Royal Society of Chemistry – Interactive Periodic Table", url: "https://www.rsc.org/periodic-table/", type: "interactive" },
      { title: "Khan Academy – The Periodic Table", url: "https://www.khanacademy.org/science/chemistry/periodic-table", type: "interactive" },
      { title: "BBC Bitesize – Groups and Periods", url: "https://www.bbc.co.uk/bitesize/guides/z8mfpbk/revision/2", type: "article" },
    ],
    "Chemical reactions": [
      { title: "BBC Bitesize – Chemical Reactions (KS3)", url: "https://www.bbc.co.uk/bitesize/guides/zcqg87h/revision/1", type: "article" },
      { title: "BBC Bitesize – Exothermic and Endothermic Reactions", url: "https://www.bbc.co.uk/bitesize/guides/zcqg87h/revision/3", type: "article" },
      { title: "Khan Academy – Chemical Reactions Introduction", url: "https://www.khanacademy.org/science/chemistry/chemical-reactions-stoichiometry", type: "interactive" },
      { title: "Educake – KS3 Chemistry Practice", url: "https://www.educake.co.uk", type: "interactive" },
    ],
    "Acids & alkalis": [
      { title: "BBC Bitesize – Acids and Alkalis (KS3)", url: "https://www.bbc.co.uk/bitesize/guides/zqxpqhv/revision/1", type: "article" },
      { title: "BBC Bitesize – Neutralisation Reactions", url: "https://www.bbc.co.uk/bitesize/guides/zqxpqhv/revision/3", type: "article" },
      { title: "Khan Academy – Acids, Bases and pH", url: "https://www.khanacademy.org/science/biology/water-acids-and-bases", type: "interactive" },
      { title: "Chemguide – Acids and Bases", url: "https://www.chemguide.co.uk/physical/acidbaseeqia/bases.html", type: "article" },
    ],
    "Metals & non-metals": [
      { title: "BBC Bitesize – Metals and Non-metals (KS3)", url: "https://www.bbc.co.uk/bitesize/guides/z8vqfcw/revision/1", type: "article" },
      { title: "BBC Bitesize – The Reactivity Series", url: "https://www.bbc.co.uk/bitesize/guides/z8vqfcw/revision/3", type: "article" },
      { title: "Khan Academy – Properties of Metals", url: "https://www.khanacademy.org/science/chemistry/periodic-table/copy-of-periodic-table-of-elements/a/metals-metalloids-and-nonmetals", type: "article" },
      { title: "Educake – KS3 Chemistry Practice", url: "https://www.educake.co.uk", type: "interactive" },
    ],
    "Separation techniques": [
      { title: "BBC Bitesize – Separation Techniques (KS3)", url: "https://www.bbc.co.uk/bitesize/guides/z96vbdm/revision/1", type: "article" },
      { title: "BBC Bitesize – Chromatography", url: "https://www.bbc.co.uk/bitesize/guides/z96vbdm/revision/3", type: "article" },
      { title: "Khan Academy – Separating Mixtures", url: "https://www.khanacademy.org/science/chemistry/atomic-structure-and-properties/separation-of-mixtures/v/separating-mixtures", type: "video" },
      { title: "Educake – KS3 Chemistry Practice", url: "https://www.educake.co.uk", type: "interactive" },
    ],
  },
};

// Merge chemistry resources into the main RESOURCES object.
Object.keys(CHEMISTRY_RESOURCES).forEach((level) => {
  if (!RESOURCES[level]) RESOURCES[level] = {};
  Object.assign(RESOURCES[level], CHEMISTRY_RESOURCES[level]);
});


// ── GCSE Chemistry Resources ───────────────────────────────────────────────
const GCSE_CHEMISTRY_RESOURCES = {
  gcse: {
    "Atomic structure & the periodic table": [
      { title: "BBC Bitesize – Atomic Structure & Periodic Table", url: "https://www.bbc.co.uk/bitesize/topics/zxrd2hv", type: "guide" },
      { title: "Cognitoedu – Atomic Structure GCSE", url: "https://cognitoedu.org/home", type: "video" },
      { title: "Freesciencelessons – Atomic Structure", url: "https://www.freesciencelessons.co.uk/", type: "video" },
      { title: "Chemrevise – Atomic Structure Notes", url: "https://chemrevise.org/atomic-structure/", type: "notes" },
    ],
    "Bonding & structure": [
      { title: "BBC Bitesize – Bonding & Structure", url: "https://www.bbc.co.uk/bitesize/topics/zcpyrj6", type: "guide" },
      { title: "Cognitoedu – Chemical Bonding GCSE", url: "https://cognitoedu.org/home", type: "video" },
      { title: "Freesciencelessons – Bonding", url: "https://www.freesciencelessons.co.uk/", type: "video" },
      { title: "Chemrevise – Bonding Notes", url: "https://chemrevise.org/bonding/", type: "notes" },
    ],
    "Quantitative chemistry": [
      { title: "BBC Bitesize – Quantitative Chemistry", url: "https://www.bbc.co.uk/bitesize/topics/z5p4d6f", type: "guide" },
      { title: "Cognitoedu – Moles & Calculations GCSE", url: "https://cognitoedu.org/home", type: "video" },
      { title: "Freesciencelessons – Quantitative Chemistry", url: "https://www.freesciencelessons.co.uk/", type: "video" },
      { title: "Chemrevise – Quantitative Chemistry Notes", url: "https://chemrevise.org/quantitative-chemistry/", type: "notes" },
    ],
    "Chemical changes": [
      { title: "BBC Bitesize – Chemical Changes", url: "https://www.bbc.co.uk/bitesize/topics/z73rnrd", type: "guide" },
      { title: "Cognitoedu – Acids, Bases & Electrolysis GCSE", url: "https://cognitoedu.org/home", type: "video" },
      { title: "Freesciencelessons – Chemical Changes", url: "https://www.freesciencelessons.co.uk/", type: "video" },
      { title: "Chemrevise – Chemical Changes Notes", url: "https://chemrevise.org/chemical-changes/", type: "notes" },
    ],
    "Energy changes": [
      { title: "BBC Bitesize – Energy Changes in Chemistry", url: "https://www.bbc.co.uk/bitesize/topics/z8bn9j6", type: "guide" },
      { title: "Cognitoedu – Exothermic & Endothermic GCSE", url: "https://cognitoedu.org/home", type: "video" },
      { title: "Freesciencelessons – Energy Changes", url: "https://www.freesciencelessons.co.uk/", type: "video" },
      { title: "Chemrevise – Energy Changes Notes", url: "https://chemrevise.org/energy-changes/", type: "notes" },
    ],
    "Rates of reaction": [
      { title: "BBC Bitesize – Rates of Reaction", url: "https://www.bbc.co.uk/bitesize/topics/zsxxsbk", type: "guide" },
      { title: "Cognitoedu – Rates of Reaction GCSE", url: "https://cognitoedu.org/home", type: "video" },
      { title: "Freesciencelessons – Rates of Reaction", url: "https://www.freesciencelessons.co.uk/", type: "video" },
      { title: "Chemrevise – Rates of Reaction Notes", url: "https://chemrevise.org/rates-of-reaction/", type: "notes" },
    ],
    "Organic chemistry": [
      { title: "BBC Bitesize – Organic Chemistry", url: "https://www.bbc.co.uk/bitesize/topics/zsxxsbk", type: "guide" },
      { title: "Cognitoedu – Hydrocarbons & Organic GCSE", url: "https://cognitoedu.org/home", type: "video" },
      { title: "Freesciencelessons – Organic Chemistry", url: "https://www.freesciencelessons.co.uk/", type: "video" },
      { title: "Chemrevise – Organic Chemistry Notes", url: "https://chemrevise.org/organic-chemistry/", type: "notes" },
    ],
    "Chemical analysis": [
      { title: "BBC Bitesize – Chemical Analysis", url: "https://www.bbc.co.uk/bitesize/topics/z9yscqt", type: "guide" },
      { title: "Cognitoedu – Chromatography & Flame Tests GCSE", url: "https://cognitoedu.org/home", type: "video" },
      { title: "Freesciencelessons – Chemical Analysis", url: "https://www.freesciencelessons.co.uk/", type: "video" },
      { title: "Chemrevise – Chemical Analysis Notes", url: "https://chemrevise.org/chemical-analysis/", type: "notes" },
    ],
    "Chemistry of the atmosphere": [
      { title: "BBC Bitesize – Chemistry of the Atmosphere", url: "https://www.bbc.co.uk/bitesize/topics/znyycdm", type: "guide" },
      { title: "Cognitoedu – Atmosphere & Climate GCSE", url: "https://cognitoedu.org/home", type: "video" },
      { title: "Freesciencelessons – Chemistry of the Atmosphere", url: "https://www.freesciencelessons.co.uk/", type: "video" },
      { title: "Chemrevise – Atmosphere Notes", url: "https://chemrevise.org/chemistry-of-the-atmosphere/", type: "notes" },
    ],
    "Earth & resources": [
      { title: "BBC Bitesize – Earth & Resources", url: "https://www.bbc.co.uk/bitesize/topics/z9d3gk7", type: "guide" },
      { title: "Cognitoedu – Earth Resources GCSE", url: "https://cognitoedu.org/home", type: "video" },
      { title: "Freesciencelessons – Using Resources", url: "https://www.freesciencelessons.co.uk/", type: "video" },
      { title: "Chemrevise – Earth & Resources Notes", url: "https://chemrevise.org/using-resources/", type: "notes" },
    ],
  },
};

Object.keys(GCSE_CHEMISTRY_RESOURCES).forEach((level) => {
  if (!RESOURCES[level]) RESOURCES[level] = {};
  Object.assign(RESOURCES[level], GCSE_CHEMISTRY_RESOURCES[level]);
});

// ─── Level-wide fallbacks ───────────────────────────────────────────────────
// Shown when no category-specific resources are found.

// ── A-Level Chemistry Resources ────────────────────────────────────────────
const ALEVEL_CHEMISTRY_RESOURCES = {
  alevel: {
    "Atomic structure & periodicity": [
      { title: "Chemguide – Atomic Structure & Periodicity", url: "https://www.chemguide.co.uk/atoms/properties/atomorbs.html", type: "notes" },
      { title: "RSC – Periodic Table & Trends", url: "https://www.rsc.org/periodic-table", type: "interactive" },
      { title: "Khan Academy – Electron Configurations", url: "https://www.khanacademy.org/science/ap-chemistry/electronic-structure-of-atoms-ap", type: "video" },
      { title: "AQA Chemistry A-Level – Atomic Structure", url: "https://www.aqa.org.uk/subjects/science/as-and-a-level/chemistry-7404-7405", type: "guide" },
    ],
    "Bonding & structure": [
      { title: "Chemguide – Bonding", url: "https://www.chemguide.co.uk/atoms/bonding/bondmenu.html", type: "notes" },
      { title: "Chemguide – Shapes of Molecules (VSEPR)", url: "https://www.chemguide.co.uk/atoms/bonding/shapes.html", type: "notes" },
      { title: "Khan Academy – Chemical Bonding", url: "https://www.khanacademy.org/science/ap-chemistry/chemical-bonding", type: "video" },
      { title: "Chemrevise – Bonding A-Level Notes", url: "https://chemrevise.org/bonding/", type: "notes" },
    ],
    "Energetics & thermodynamics": [
      { title: "Chemguide – Energetics", url: "https://www.chemguide.co.uk/physical/energeticsmenu.html", type: "notes" },
      { title: "Chemguide – Born-Haber Cycles", url: "https://www.chemguide.co.uk/physical/energetics/bornhaber.html", type: "notes" },
      { title: "Khan Academy – Thermodynamics", url: "https://www.khanacademy.org/science/ap-chemistry/thermodynamics-ap", type: "video" },
      { title: "Chemrevise – Energetics & Thermodynamics Notes", url: "https://chemrevise.org/energetics/", type: "notes" },
    ],
    "Kinetics": [
      { title: "Chemguide – Kinetics", url: "https://www.chemguide.co.uk/physical/kineticsmenu.html", type: "notes" },
      { title: "Chemguide – Arrhenius Equation", url: "https://www.chemguide.co.uk/physical/kinetics/arrhenius.html", type: "notes" },
      { title: "Khan Academy – Kinetics", url: "https://www.khanacademy.org/science/ap-chemistry/chemical-kinetics-ap", type: "video" },
      { title: "Chemrevise – Kinetics Notes", url: "https://chemrevise.org/kinetics/", type: "notes" },
    ],
    "Chemical equilibria": [
      { title: "Chemguide – Equilibria", url: "https://www.chemguide.co.uk/physical/equilibriamenu.html", type: "notes" },
      { title: "Chemguide – Kp and Kc", url: "https://www.chemguide.co.uk/physical/equilibria/kc.html", type: "notes" },
      { title: "Khan Academy – Equilibrium", url: "https://www.khanacademy.org/science/ap-chemistry/chemical-equilibrium-ap", type: "video" },
      { title: "Chemrevise – Equilibria Notes", url: "https://chemrevise.org/equilibria/", type: "notes" },
    ],
    "Redox chemistry & electrochemistry": [
      { title: "Chemguide – Redox Chemistry", url: "https://www.chemguide.co.uk/inorganic/redox/menu.html", type: "notes" },
      { title: "Chemguide – Electrode Potentials", url: "https://www.chemguide.co.uk/physical/redoxeqia/introduction.html", type: "notes" },
      { title: "Khan Academy – Electrochemistry", url: "https://www.khanacademy.org/science/ap-chemistry/electrochemistry-ap", type: "video" },
      { title: "Chemrevise – Redox & Electrochemistry Notes", url: "https://chemrevise.org/redox/", type: "notes" },
    ],
    "Organic chemistry: hydrocarbons": [
      { title: "Chemguide – Hydrocarbons", url: "https://www.chemguide.co.uk/organicprops/alkanes/menu.html", type: "notes" },
      { title: "Chemguide – Mechanism: Free Radical Substitution", url: "https://www.chemguide.co.uk/mechanisms/freerad/ch4andcl2.html", type: "notes" },
      { title: "Khan Academy – Organic Chemistry", url: "https://www.khanacademy.org/science/organic-chemistry", type: "video" },
      { title: "Chemrevise – Organic Chemistry Notes", url: "https://chemrevise.org/organic-chemistry/", type: "notes" },
    ],
    "Organic chemistry: functional groups": [
      { title: "Chemguide – Alcohols, Carbonyl Compounds & More", url: "https://www.chemguide.co.uk/organicprops/alcohols/menu.html", type: "notes" },
      { title: "Chemguide – Reaction Mechanisms Overview", url: "https://www.chemguide.co.uk/mechanisms/mechsmenu.html", type: "notes" },
      { title: "Khan Academy – Functional Groups & Reactions", url: "https://www.khanacademy.org/science/organic-chemistry/substitution-elimination-reactions", type: "video" },
      { title: "Chemrevise – Functional Group Reactions Notes", url: "https://chemrevise.org/organic-chemistry/", type: "notes" },
    ],
    "Spectroscopy & analytical techniques": [
      { title: "Chemguide – NMR Spectroscopy", url: "https://www.chemguide.co.uk/analysis/nmr/background.html", type: "notes" },
      { title: "Chemguide – Mass Spectrometry & IR", url: "https://www.chemguide.co.uk/analysis/masspec/howitworks.html", type: "notes" },
      { title: "Khan Academy – Spectroscopy", url: "https://www.khanacademy.org/science/ap-chemistry/structure-of-atoms-ap/spectroscopy-ap", type: "video" },
      { title: "Chemrevise – Spectroscopy & Analysis Notes", url: "https://chemrevise.org/spectroscopy/", type: "notes" },
    ],
    "Transition metals & coordination": [
      { title: "Chemguide – Transition Metals", url: "https://www.chemguide.co.uk/inorganic/transition/menu.html", type: "notes" },
      { title: "Chemguide – Complex Ions & Ligands", url: "https://www.chemguide.co.uk/inorganic/complexions/menu.html", type: "notes" },
      { title: "Khan Academy – Transition Metals", url: "https://www.khanacademy.org/science/ap-chemistry/transition-metals-ap", type: "video" },
      { title: "Chemrevise – Transition Metals Notes", url: "https://chemrevise.org/transition-metals/", type: "notes" },
    ],
  },
};

Object.keys(ALEVEL_CHEMISTRY_RESOURCES).forEach((level) => {
  if (!RESOURCES[level]) RESOURCES[level] = {};
  Object.assign(RESOURCES[level], ALEVEL_CHEMISTRY_RESOURCES[level]);
});

export const FALLBACK_RESOURCES = {
  ks2: [
    { title: "BBC Bitesize KS2 Maths", url: "https://www.bbc.co.uk/bitesize/subjects/z826n39", type: "article" },
    { title: "Corbettmaths Primary – Videos & Worksheets", url: "https://corbettmathsprimary.com/content/", type: "video" },
    { title: "Topmarks Maths Games (Ages 7–11)", url: "https://www.topmarks.co.uk/maths-games/7-11-years/", type: "interactive" },
    { title: "Khan Academy – Primary Maths", url: "https://www.khanacademy.org/math/arithmetic", type: "interactive" },
  ],
  ks3: [
    { title: "BBC Bitesize KS3 Maths", url: "https://www.bbc.co.uk/bitesize/subjects/zqhs34j", type: "article" },
    { title: "Corbettmaths – Videos & Worksheets", url: "https://corbettmaths.com/contents/", type: "video" },
    { title: "MathsGenie – GCSE Revision (covers KS3 topics)", url: "https://www.mathsgenie.co.uk/gcse.html", type: "article" },
    { title: "Khan Academy – Pre-Algebra & Algebra", url: "https://www.khanacademy.org/math/pre-algebra", type: "interactive" },
  ],
  gcse: [
    { title: "BBC Bitesize GCSE Maths", url: "https://www.bbc.co.uk/bitesize/subjects/z38pycw", type: "article" },
    { title: "Corbettmaths GCSE – Videos & Practice Papers", url: "https://corbettmaths.com/contents/", type: "video" },
    { title: "MathsGenie – GCSE Revision", url: "https://www.mathsgenie.co.uk/gcse.html", type: "article" },
    { title: "Khan Academy – Algebra & Geometry", url: "https://www.khanacademy.org/math/algebra-home", type: "interactive" },
  ],
  chemistry_ks2: [
    { title: "BBC Bitesize KS2 Science", url: "https://www.bbc.co.uk/bitesize/subjects/z2pfb9q", type: "article" },
    { title: "Topmarks – Science Games (Ages 7–11)", url: "https://www.topmarks.co.uk/science/7-11-years/", type: "interactive" },
    { title: "Khan Academy – Science", url: "https://www.khanacademy.org/science", type: "interactive" },
  ],
  chemistry_ks3: [
    { title: "BBC Bitesize KS3 Chemistry", url: "https://www.bbc.co.uk/bitesize/subjects/znxtyrd", type: "article" },
    { title: "Educake – KS3 Chemistry Practice", url: "https://www.educake.co.uk", type: "interactive" },
    { title: "Khan Academy – Chemistry", url: "https://www.khanacademy.org/science/chemistry", type: "interactive" },
  ],
};

// ─── Public helpers ─────────────────────────────────────────────────────────
// Icon shown next to each resource link, keyed by resource `type`.
export const TYPE_ICON = {
  article: "📄",
  video: "🎬",
  interactive: "🧩",
};

// Resolve resources for a given level + topic category.
// Order of preference:
//   1. Category-specific links (RESOURCES[level][category])
//   2. Subject-scoped fallback when subject provided (e.g. chemistry_ks3)
//   3. Level-wide fallback links (FALLBACK_RESOURCES[level])
//   4. Empty array (never returns undefined)
export function getResources(level, category, subject) {
  const byLevel = RESOURCES[level] || {};
  const specific = byLevel[category];
  if (specific && specific.length) return specific;
  if (subject && subject !== "maths") {
    const subjectFallback = FALLBACK_RESOURCES[`${subject}_${level}`];
    if (subjectFallback && subjectFallback.length) return subjectFallback;
  }
  return FALLBACK_RESOURCES[level] || [];
}
// BIOLOGY — KS2
// ─────────────────────────────────────────────────────────────────────────────
const BIOLOGY_RESOURCES = {
  ks2: {
    "Plants": [
      { title: "BBC Bitesize – Plants (KS2 Science)", url: "https://www.bbc.co.uk/bitesize/topics/zpxnyrd", type: "article" },
      { title: "BBC Bitesize – Parts of a Flower", url: "https://www.bbc.co.uk/bitesize/topics/z6wwxnb", type: "article" },
      { title: "Khan Academy – Plant Biology", url: "https://www.khanacademy.org/science/biology/plant-biology", type: "video" },
      { title: "Topmarks – Science Games (7–11)", url: "https://www.topmarks.co.uk/science/7-11-years/", type: "interactive" },
      { title: "Science Kids – Plant Facts", url: "https://www.sciencekids.co.nz/sciencefacts/plants.html", type: "article" },
    ],
    "Animals including humans": [
      { title: "BBC Bitesize – Animals including Humans (KS2)", url: "https://www.bbc.co.uk/bitesize/topics/zcyycdm", type: "article" },
      { title: "BBC Bitesize – The Human Body (KS2)", url: "https://www.bbc.co.uk/bitesize/topics/zcyycdm", type: "article" },
      { title: "Khan Academy – Human Biology", url: "https://www.khanacademy.org/science/health-and-medicine", type: "video" },
      { title: "Topmarks – Science Games (7–11)", url: "https://www.topmarks.co.uk/science/7-11-years/", type: "interactive" },
      { title: "Science Kids – Human Body Facts", url: "https://www.sciencekids.co.nz/humanbody.html", type: "article" },
    ],
    "Living things & their habitats": [
      { title: "BBC Bitesize – Living Things and Their Habitats (KS2)", url: "https://www.bbc.co.uk/bitesize/topics/zx882hv", type: "article" },
      { title: "BBC Bitesize – Classification of Living Things (KS2)", url: "https://www.bbc.co.uk/bitesize/topics/zn22pv4", type: "article" },
      { title: "Khan Academy – Ecology", url: "https://www.khanacademy.org/science/biology/ecology", type: "video" },
      { title: "Topmarks – Science Games (7–11)", url: "https://www.topmarks.co.uk/science/7-11-years/", type: "interactive" },
      { title: "Science Kids – Animal Facts", url: "https://www.sciencekids.co.nz/animals.html", type: "article" },
    ],
    "Evolution & inheritance": [
      { title: "BBC Bitesize – Evolution and Inheritance (KS2)", url: "https://www.bbc.co.uk/bitesize/topics/zvhhvcw", type: "article" },
      { title: "BBC Bitesize – Charles Darwin and Evolution (KS2)", url: "https://www.bbc.co.uk/bitesize/topics/zvhhvcw/articles/z9dxhbk", type: "article" },
      { title: "Khan Academy – Natural Selection", url: "https://www.khanacademy.org/science/biology/her/evolution-and-natural-selection/a/natural-selection", type: "article" },
      { title: "Topmarks – Science Games (7–11)", url: "https://www.topmarks.co.uk/science/7-11-years/", type: "interactive" },
      { title: "Science Kids – Evolution Facts", url: "https://www.sciencekids.co.nz/sciencefacts/evolution.html", type: "article" },
    ],
  },

  ks3: {
    "Cells & organisation": [
      { title: "BBC Bitesize – Cells (KS3 Biology)", url: "https://www.bbc.co.uk/bitesize/guides/z9dq6yc/revision/1", type: "article" },
      { title: "BBC Bitesize – Cell Organisation (KS3)", url: "https://www.bbc.co.uk/bitesize/guides/z9dq6yc/revision/3", type: "article" },
      { title: "Khan Academy – Cells", url: "https://www.khanacademy.org/science/biology/structure-of-a-cell", type: "interactive" },
      { title: "Freesciencelessons – Cells & Organisation", url: "https://www.freesciencelessons.co.uk/", type: "video" },
      { title: "Educake – KS3 Biology Practice", url: "https://www.educake.co.uk", type: "interactive" },
    ],
    "Nutrition & digestion": [
      { title: "BBC Bitesize – Nutrition and Digestion (KS3)", url: "https://www.bbc.co.uk/bitesize/guides/zg9d7p3/revision/1", type: "article" },
      { title: "BBC Bitesize – Enzymes in Digestion (KS3)", url: "https://www.bbc.co.uk/bitesize/guides/zg9d7p3/revision/3", type: "article" },
      { title: "Khan Academy – Digestive System", url: "https://www.khanacademy.org/science/health-and-medicine/human-anatomy-and-physiology/gastrointestinal-system-physiology", type: "video" },
      { title: "Freesciencelessons – Nutrition & Digestion", url: "https://www.freesciencelessons.co.uk/", type: "video" },
      { title: "Educake – KS3 Biology Practice", url: "https://www.educake.co.uk", type: "interactive" },
    ],
    "Reproduction": [
      { title: "BBC Bitesize – Reproduction (KS3 Biology)", url: "https://www.bbc.co.uk/bitesize/guides/zt6jr82/revision/1", type: "article" },
      { title: "BBC Bitesize – Plant Reproduction (KS3)", url: "https://www.bbc.co.uk/bitesize/guides/zt6jr82/revision/4", type: "article" },
      { title: "Khan Academy – Reproduction and Cell Division", url: "https://www.khanacademy.org/science/biology/cellular-molecular-biology/meiosis/a/phases-of-meiosis", type: "video" },
      { title: "Freesciencelessons – Reproduction", url: "https://www.freesciencelessons.co.uk/", type: "video" },
      { title: "Educake – KS3 Biology Practice", url: "https://www.educake.co.uk", type: "interactive" },
    ],
    "Respiration & gas exchange": [
      { title: "BBC Bitesize – Respiration (KS3 Biology)", url: "https://www.bbc.co.uk/bitesize/guides/zpqxhyc/revision/1", type: "article" },
      { title: "BBC Bitesize – Gas Exchange (KS3)", url: "https://www.bbc.co.uk/bitesize/guides/zpqxhyc/revision/3", type: "article" },
      { title: "Khan Academy – Cellular Respiration", url: "https://www.khanacademy.org/science/biology/cellular-respiration-and-fermentation", type: "interactive" },
      { title: "Freesciencelessons – Respiration & Gas Exchange", url: "https://www.freesciencelessons.co.uk/", type: "video" },
      { title: "Educake – KS3 Biology Practice", url: "https://www.educake.co.uk", type: "interactive" },
    ],
    "Photosynthesis": [
      { title: "BBC Bitesize – Photosynthesis (KS3 Biology)", url: "https://www.bbc.co.uk/bitesize/guides/zpqxhyc/revision/5", type: "article" },
      { title: "BBC Bitesize – Limiting Factors in Photosynthesis", url: "https://www.bbc.co.uk/bitesize/guides/zpqxhyc/revision/7", type: "article" },
      { title: "Khan Academy – Photosynthesis", url: "https://www.khanacademy.org/science/biology/photosynthesis-in-plants", type: "interactive" },
      { title: "Freesciencelessons – Photosynthesis", url: "https://www.freesciencelessons.co.uk/", type: "video" },
      { title: "Educake – KS3 Biology Practice", url: "https://www.educake.co.uk", type: "interactive" },
    ],
    "Ecosystems & ecology": [
      { title: "BBC Bitesize – Ecosystems (KS3 Biology)", url: "https://www.bbc.co.uk/bitesize/guides/zg9d7p3/revision/6", type: "article" },
      { title: "BBC Bitesize – Food Chains and Food Webs (KS3)", url: "https://www.bbc.co.uk/bitesize/guides/zg9d7p3/revision/7", type: "article" },
      { title: "Khan Academy – Ecology", url: "https://www.khanacademy.org/science/biology/ecology", type: "interactive" },
      { title: "Freesciencelessons – Ecosystems & Ecology", url: "https://www.freesciencelessons.co.uk/", type: "video" },
      { title: "Educake – KS3 Biology Practice", url: "https://www.educake.co.uk", type: "interactive" },
    ],
    "Genes, inheritance & variation": [
      { title: "BBC Bitesize – Inheritance (KS3 Biology)", url: "https://www.bbc.co.uk/bitesize/guides/zb97y4j/revision/1", type: "article" },
      { title: "BBC Bitesize – DNA and Chromosomes (KS3)", url: "https://www.bbc.co.uk/bitesize/guides/zb97y4j/revision/2", type: "article" },
      { title: "Khan Academy – Genetics", url: "https://www.khanacademy.org/science/biology/classical-genetics", type: "interactive" },
      { title: "Freesciencelessons – Genetics & Inheritance", url: "https://www.freesciencelessons.co.uk/", type: "video" },
      { title: "Educake – KS3 Biology Practice", url: "https://www.educake.co.uk", type: "interactive" },
    ],
  },
};

Object.keys(BIOLOGY_RESOURCES).forEach((level) => {
  if (!RESOURCES[level]) RESOURCES[level] = {};
  Object.assign(RESOURCES[level], BIOLOGY_RESOURCES[level]);
});

// Add biology fallback entries to FALLBACK_RESOURCES
// (These are merged below alongside the existing fallback object)
const BIOLOGY_FALLBACKS = {
  biology_ks2: [
    { title: "BBC Bitesize KS2 Science", url: "https://www.bbc.co.uk/bitesize/subjects/z2pfb9q", type: "article" },
    { title: "Topmarks – Science Games (Ages 7–11)", url: "https://www.topmarks.co.uk/science/7-11-years/", type: "interactive" },
    { title: "Khan Academy – Biology", url: "https://www.khanacademy.org/science/biology", type: "interactive" },
    { title: "Science Kids – Science Facts & Experiments", url: "https://www.sciencekids.co.nz/", type: "article" },
  ],
  biology_ks3: [
    { title: "BBC Bitesize KS3 Biology", url: "https://www.bbc.co.uk/bitesize/subjects/z4882hv", type: "article" },
    { title: "Freesciencelessons – KS3/GCSE Biology Videos", url: "https://www.freesciencelessons.co.uk/", type: "video" },
    { title: "Educake – KS3 Biology Practice", url: "https://www.educake.co.uk", type: "interactive" },
    { title: "Khan Academy – Biology", url: "https://www.khanacademy.org/science/biology", type: "interactive" },
  ],
};

Object.assign(FALLBACK_RESOURCES, BIOLOGY_FALLBACKS);

const GCSE_BIOLOGY_RESOURCES = {
  gcse: {
    "Cell biology": [
      { title: "BBC Bitesize – Cell Biology (GCSE Biology)", url: "https://www.bbc.co.uk/bitesize/topics/znyycdm", type: "article" },
      { title: "Freesciencelessons – Cell Biology GCSE Videos", url: "https://www.freesciencelessons.co.uk/gcse-biology/", type: "video" },
      { title: "Cognitoedu – Cell Biology GCSE", url: "https://cognitoedu.org/home", type: "video" },
      { title: "Save My Exams – Cell Biology Revision", url: "https://www.savemyexams.com/gcse/biology/", type: "article" },
      { title: "Khan Academy – Cells", url: "https://www.khanacademy.org/science/biology/structure-of-a-cell", type: "interactive" },
    ],
    "Organisation": [
      { title: "BBC Bitesize – Organisation (GCSE Biology)", url: "https://www.bbc.co.uk/bitesize/topics/z9dq6yc", type: "article" },
      { title: "Freesciencelessons – Organisation GCSE Videos", url: "https://www.freesciencelessons.co.uk/gcse-biology/", type: "video" },
      { title: "Cognitoedu – Organisation GCSE", url: "https://cognitoedu.org/home", type: "video" },
      { title: "Save My Exams – Organisation Revision", url: "https://www.savemyexams.com/gcse/biology/", type: "article" },
      { title: "Khan Academy – Circulatory System", url: "https://www.khanacademy.org/science/health-and-medicine/human-anatomy-and-physiology/circulatory-system-introduction", type: "video" },
    ],
    "Infection & response": [
      { title: "BBC Bitesize – Infection & Response (GCSE Biology)", url: "https://www.bbc.co.uk/bitesize/topics/zvhxpv4", type: "article" },
      { title: "Freesciencelessons – Infection & Response GCSE Videos", url: "https://www.freesciencelessons.co.uk/gcse-biology/", type: "video" },
      { title: "Cognitoedu – Infection & Response GCSE", url: "https://cognitoedu.org/home", type: "video" },
      { title: "Save My Exams – Infection & Response Revision", url: "https://www.savemyexams.com/gcse/biology/", type: "article" },
      { title: "Khan Academy – Immune System", url: "https://www.khanacademy.org/science/health-and-medicine/immunology-and-hematology/immune-system-introduction", type: "video" },
    ],
    "Bioenergetics": [
      { title: "BBC Bitesize – Bioenergetics (GCSE Biology)", url: "https://www.bbc.co.uk/bitesize/topics/zpqxhyc", type: "article" },
      { title: "Freesciencelessons – Bioenergetics GCSE Videos", url: "https://www.freesciencelessons.co.uk/gcse-biology/", type: "video" },
      { title: "Cognitoedu – Bioenergetics GCSE", url: "https://cognitoedu.org/home", type: "video" },
      { title: "Save My Exams – Bioenergetics Revision", url: "https://www.savemyexams.com/gcse/biology/", type: "article" },
      { title: "Khan Academy – Photosynthesis & Cellular Respiration", url: "https://www.khanacademy.org/science/biology/photosynthesis-in-plants", type: "interactive" },
    ],
    "Homeostasis & response": [
      { title: "BBC Bitesize – Homeostasis & Response (GCSE Biology)", url: "https://www.bbc.co.uk/bitesize/topics/zg9d7p3", type: "article" },
      { title: "Freesciencelessons – Homeostasis & Response GCSE Videos", url: "https://www.freesciencelessons.co.uk/gcse-biology/", type: "video" },
      { title: "Cognitoedu – Homeostasis GCSE", url: "https://cognitoedu.org/home", type: "video" },
      { title: "Save My Exams – Homeostasis Revision", url: "https://www.savemyexams.com/gcse/biology/", type: "article" },
      { title: "Khan Academy – Homeostasis", url: "https://www.khanacademy.org/science/health-and-medicine/endocrine-system/endocrine-system-introduction-tutorial/v/homeostasis", type: "video" },
    ],
    "Inheritance, variation & evolution": [
      { title: "BBC Bitesize – Inheritance, Variation & Evolution (GCSE Biology)", url: "https://www.bbc.co.uk/bitesize/topics/zvhxpv4", type: "article" },
      { title: "Freesciencelessons – Genetics GCSE Videos", url: "https://www.freesciencelessons.co.uk/gcse-biology/", type: "video" },
      { title: "Cognitoedu – Inheritance & Evolution GCSE", url: "https://cognitoedu.org/home", type: "video" },
      { title: "Save My Exams – Genetics & Evolution Revision", url: "https://www.savemyexams.com/gcse/biology/", type: "article" },
      { title: "Khan Academy – Classical Genetics", url: "https://www.khanacademy.org/science/biology/classical-genetics", type: "interactive" },
    ],
    "Ecology": [
      { title: "BBC Bitesize – Ecology (GCSE Biology)", url: "https://www.bbc.co.uk/bitesize/topics/zg9d7p3", type: "article" },
      { title: "Freesciencelessons – Ecology GCSE Videos", url: "https://www.freesciencelessons.co.uk/gcse-biology/", type: "video" },
      { title: "Cognitoedu – Ecology GCSE", url: "https://cognitoedu.org/home", type: "video" },
      { title: "Save My Exams – Ecology Revision", url: "https://www.savemyexams.com/gcse/biology/", type: "article" },
      { title: "Khan Academy – Ecology", url: "https://www.khanacademy.org/science/biology/ecology", type: "interactive" },
    ],
  },
};

Object.keys(GCSE_BIOLOGY_RESOURCES).forEach((level) => {
  if (!RESOURCES[level]) RESOURCES[level] = {};
  Object.assign(RESOURCES[level], GCSE_BIOLOGY_RESOURCES[level]);
});

// Add biology_gcse fallback
Object.assign(FALLBACK_RESOURCES, {
  biology_gcse: [
    { title: "BBC Bitesize GCSE Biology", url: "https://www.bbc.co.uk/bitesize/subjects/z4882hv", type: "article" },
    { title: "Freesciencelessons – GCSE Biology Videos", url: "https://www.freesciencelessons.co.uk/gcse-biology/", type: "video" },
    { title: "Cognitoedu – GCSE Biology", url: "https://cognitoedu.org/home", type: "video" },
    { title: "Save My Exams – GCSE Biology", url: "https://www.savemyexams.com/gcse/biology/", type: "article" },
  ],
});

// A-Level Biology resources
// Appended to resources.js

const ALEVEL_BIOLOGY_RESOURCES = {
  alevel: {
    "Biological molecules": [
      { title: "Chemguide – Biological Molecules (A-Level)", url: "https://www.chemguide.co.uk/biochemistry/proteinsintro.html", type: "notes" },
      { title: "Save My Exams – Biological Molecules A-Level", url: "https://www.savemyexams.com/a-level/biology/", type: "article" },
      { title: "Freesciencelessons – A-Level Biology: Biological Molecules", url: "https://www.freesciencelessons.co.uk/a-level-biology/", type: "video" },
      { title: "Khan Academy – Macromolecules", url: "https://www.khanacademy.org/science/biology/macromolecules", type: "interactive" },
      { title: "Cognitoedu – Biological Molecules A-Level", url: "https://cognitoedu.org/home", type: "video" },
    ],
    "Cell structure & division": [
      { title: "Freesciencelessons – A-Level Cell Structure & Division", url: "https://www.freesciencelessons.co.uk/a-level-biology/", type: "video" },
      { title: "Save My Exams – Cell Division A-Level Biology", url: "https://www.savemyexams.com/a-level/biology/", type: "article" },
      { title: "Khan Academy – Cell Division (Mitosis & Meiosis)", url: "https://www.khanacademy.org/science/biology/cellular-molecular-biology/mitosis/a/phases-of-mitosis", type: "interactive" },
      { title: "Cognitoedu – Cell Division A-Level", url: "https://cognitoedu.org/home", type: "video" },
      { title: "Biology Online – DNA Replication", url: "https://www.biologyonline.com/dictionary/dna-replication", type: "article" },
    ],
    "Exchange & transport": [
      { title: "Freesciencelessons – A-Level Exchange & Transport", url: "https://www.freesciencelessons.co.uk/a-level-biology/", type: "video" },
      { title: "Save My Exams – Exchange & Transport A-Level", url: "https://www.savemyexams.com/a-level/biology/", type: "article" },
      { title: "Khan Academy – Circulatory System", url: "https://www.khanacademy.org/science/health-and-medicine/human-anatomy-and-physiology/circulatory-system-introduction/v/circulatory-system-and-the-heart", type: "video" },
      { title: "Cognitoedu – Transport in Plants A-Level", url: "https://cognitoedu.org/home", type: "video" },
      { title: "BBC Bitesize – Haemoglobin & Oxygen Transport (A-Level)", url: "https://www.bbc.co.uk/bitesize/guides/zcgc7p3/revision/1", type: "article" },
    ],
    "Genetic information & variation": [
      { title: "Freesciencelessons – A-Level Genetic Information", url: "https://www.freesciencelessons.co.uk/a-level-biology/", type: "video" },
      { title: "Save My Exams – DNA, Transcription & Translation A-Level", url: "https://www.savemyexams.com/a-level/biology/", type: "article" },
      { title: "Khan Academy – Transcription & Translation", url: "https://www.khanacademy.org/science/ap-biology/gene-expression-and-regulation/translation/a/steps-of-translation", type: "interactive" },
      { title: "Cognitoedu – Protein Synthesis A-Level", url: "https://cognitoedu.org/home", type: "video" },
      { title: "Learn.Genetics – How Genes Are Regulated", url: "https://learn.genetics.utah.edu/content/epigenetics/", type: "interactive" },
    ],
    "Energy transfer: photosynthesis & respiration": [
      { title: "Freesciencelessons – A-Level Photosynthesis & Respiration", url: "https://www.freesciencelessons.co.uk/a-level-biology/", type: "video" },
      { title: "Save My Exams – Photosynthesis & Respiration A-Level", url: "https://www.savemyexams.com/a-level/biology/", type: "article" },
      { title: "Khan Academy – Cellular Respiration", url: "https://www.khanacademy.org/science/ap-biology/cellular-energetics/cellular-respiration-ap/a/steps-of-cellular-respiration", type: "interactive" },
      { title: "Khan Academy – Photosynthesis", url: "https://www.khanacademy.org/science/ap-biology/cellular-energetics/photosynthesis/a/steps-of-photosynthesis", type: "interactive" },
      { title: "Cognitoedu – ATP & Respiration A-Level", url: "https://cognitoedu.org/home", type: "video" },
    ],
    "Organisms respond to their environment": [
      { title: "Freesciencelessons – A-Level Nervous System & Hormones", url: "https://www.freesciencelessons.co.uk/a-level-biology/", type: "video" },
      { title: "Save My Exams – Nervous System A-Level Biology", url: "https://www.savemyexams.com/a-level/biology/", type: "article" },
      { title: "Khan Academy – Neuron Resting Potential", url: "https://www.khanacademy.org/science/ap-biology/cell-communication-and-cell-cycle/signal-transduction/v/signal-transduction-pathways", type: "video" },
      { title: "Cognitoedu – Action Potentials A-Level", url: "https://cognitoedu.org/home", type: "video" },
      { title: "BBC Bitesize – Control of Heart Rate & Breathing", url: "https://www.bbc.co.uk/bitesize/guides/zw9b97h/revision/1", type: "article" },
    ],
    "Genetics, populations & ecosystems": [
      { title: "Freesciencelessons – A-Level Genetics & Ecosystems", url: "https://www.freesciencelessons.co.uk/a-level-biology/", type: "video" },
      { title: "Save My Exams – Hardy-Weinberg & Ecosystems A-Level", url: "https://www.savemyexams.com/a-level/biology/", type: "article" },
      { title: "Khan Academy – Hardy-Weinberg Equilibrium", url: "https://www.khanacademy.org/science/ap-biology/natural-selection/hardy-weinberg-equilibrium/a/hardy-weinberg-equation", type: "interactive" },
      { title: "Khan Academy – Ecology", url: "https://www.khanacademy.org/science/ap-biology/ecology-ap", type: "interactive" },
      { title: "Cognitoedu – Populations & Evolution A-Level", url: "https://cognitoedu.org/home", type: "video" },
    ],
    "Control of gene expression": [
      { title: "Freesciencelessons – A-Level Gene Expression", url: "https://www.freesciencelessons.co.uk/a-level-biology/", type: "video" },
      { title: "Save My Exams – Gene Expression & Epigenetics A-Level", url: "https://www.savemyexams.com/a-level/biology/", type: "article" },
      { title: "Learn.Genetics – Epigenetics", url: "https://learn.genetics.utah.edu/content/epigenetics/", type: "interactive" },
      { title: "Khan Academy – Gene Regulation", url: "https://www.khanacademy.org/science/ap-biology/gene-expression-and-regulation", type: "interactive" },
      { title: "Cognitoedu – Stem Cells & Gene Control A-Level", url: "https://cognitoedu.org/home", type: "video" },
    ],
  },
};

// Merge into RESOURCES
Object.keys(ALEVEL_BIOLOGY_RESOURCES).forEach((level) => {
  if (!RESOURCES[level]) RESOURCES[level] = {};
  Object.assign(RESOURCES[level], ALEVEL_BIOLOGY_RESOURCES[level]);
});

// Add biology_alevel fallback
Object.assign(FALLBACK_RESOURCES, {
  biology_alevel: [
    { title: "Freesciencelessons – A-Level Biology", url: "https://www.freesciencelessons.co.uk/a-level-biology/", type: "video" },
    { title: "Save My Exams – A-Level Biology", url: "https://www.savemyexams.com/a-level/biology/", type: "article" },
    { title: "Cognitoedu – A-Level Biology", url: "https://cognitoedu.org/home", type: "video" },
    { title: "Khan Academy – Biology", url: "https://www.khanacademy.org/science/ap-biology", type: "interactive" },
  ],
});
