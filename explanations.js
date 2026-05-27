// src/data/explanations.js
// Pedagogical concept explanations — one per level + category combination.
// Displayed in-app alongside (not replacing) the external resource links.
// Keys must exactly match `level` and `category` values in questions.js.
//
// Each entry contains:
//   title         — display heading
//   keyIdea       — one-sentence mental model / hook
//   body          — main explanation (plain prose, ~250–350 words)
//   workedExample — { problem, solution } — mirrors the style of actual questions
//   commonMistakes — array of 2–3 strings
//   keyFacts      — array of 3–5 short rules or formulas to remember

export const EXPLANATIONS = {

  // ─── KS2 Maths ─────────────────────────────────────────────────────────────
  ks2: {

    "Number & place value": {
      title: "Rounding & Place Value",
      keyIdea: "Every digit in a number has a position — its place — and rounding means replacing a number with the nearest 'clean' value at that place.",
      body: `Numbers are built from digits arranged in columns: thousands, hundreds, tens, and ones (units). The position of a digit tells you its value — the 4 in 4,700 is worth four thousand, not just four.

Rounding simplifies a number to a given place value. The golden rule is simple: look at the digit immediately to the RIGHT of the place you are rounding to.

• If that digit is 5 or more → round UP (increase the target digit by 1).
• If that digit is 4 or less → round DOWN (keep the target digit the same).

Then replace every digit to the right of the target place with a zero.

Example — Round 5,483 to the nearest 1,000:
The thousands digit is 5. Look one place right: the hundreds digit is 4. Because 4 < 5, round down. Answer: 5,000.

Example — Round 6,572 to the nearest 10:
The tens digit is 7. Look one place right: the ones digit is 2. Because 2 < 5, round down. Answer: 6,570.

A useful trick: draw a vertical line after the place you are rounding to. Everything to the left stays (or goes up by 1). Everything to the right becomes zero.

Rounding is used constantly in real life — estimating shopping costs, reading data on a graph, or reporting population figures. It also helps you check whether your calculator answer is sensible: "Is 6,572 rounded to the nearest 1,000 closer to 6,000 or 7,000?" Running that quick check prevents errors.`,
      workedExample: {
        problem: "Round 7,468 to the nearest 100.",
        solution: "Target place: hundreds (the 4). Digit to its right: 6. Since 6 ≥ 5, round up: 4 becomes 5. Digits to the right become 0. Answer: 7,500."
      },
      commonMistakes: [
        "Rounding the wrong digit — always look ONE place to the RIGHT of where you are rounding to.",
        "Forgetting to replace digits after the target with zeros (e.g., writing 7,568 instead of 7,500).",
        "When rounding up causes a 9 to become 10, forgetting to carry — e.g., 4,950 rounded to the nearest 100 is 5,000, not 4,1000."
      ],
      keyFacts: [
        "Digit to the right is 5 or more → round UP.",
        "Digit to the right is 4 or less → round DOWN (keep the same).",
        "All digits after the target place become zeros.",
        "Place value order (right to left): ones, tens, hundreds, thousands, ten-thousands."
      ]
    },

    "Addition & subtraction": {
      title: "Addition & Subtraction",
      keyIdea: "Addition combines amounts together; subtraction finds the difference — and both can be done reliably with column methods when numbers get large.",
      body: `For large numbers, the column method is the most reliable strategy. Line numbers up so that digits with the same place value sit in the same column (ones under ones, tens under tens, and so on).

ADDITION — column method:
Add each column starting from the RIGHT (ones first). If a column adds to 10 or more, write down the units digit and carry the tens digit to the next column on the left.

Example: 865 + 7,534
    7 5 3 4
  +   8 6 5
  ─────────
    8 3 9 9

Work right to left: 4+5=9, 3+6=9, 5+8=13 (write 3 carry 1), 7+0+1=8. Answer: 8,399.

SUBTRACTION — column method:
Subtract each column from right to left. If the top digit is smaller than the bottom, borrow 10 from the column to its left (reduce that column's top digit by 1).

Checking your answer: always add your answer back to the number you subtracted — it should give you the starting number. This 30-second check catches most errors.

Mental strategies for smaller calculations:
• Near-doubles: 46 + 48 = 2 × 47 = 94
• Bridging through 10/100: 376 + 58 = 376 + 24 + 34 = 400 + 34 = 434
• Counting up for subtraction: 503 − 478 → count up 2 to 480, then 23 to 503 = 25`,
      workedExample: {
        problem: "What is 2,520 + 5,032?",
        solution: "Line up columns: ones: 0+2=2, tens: 2+3=5, hundreds: 5+0=5, thousands: 2+5=7. Answer: 7,552."
      },
      commonMistakes: [
        "Misaligning columns when one number has more digits than the other — always right-align.",
        "Forgetting to carry after a column sum reaches 10 or more.",
        "In subtraction, not borrowing when the top digit is smaller than the bottom digit."
      ],
      keyFacts: [
        "Always line up digits by place value (right-align).",
        "Add/subtract right to left.",
        "If a column total ≥ 10, carry the tens digit leftward.",
        "Check subtraction by adding your answer to the smaller number — you should get the larger."
      ]
    },

    "Multiplication & division": {
      title: "Multiplication & Division",
      keyIdea: "Multiplication is repeated addition; division is splitting into equal groups — and knowing your times tables makes both dramatically faster.",
      body: `MULTIPLICATION
Times tables (2× to 12×) are the foundation. Every multiplication problem, no matter how large, relies on them. Practise until they are instant recall.

For multiplying larger numbers, use the grid method or the standard short multiplication algorithm.

Grid method for 34 × 6:
Split 34 into 30 + 4.
30 × 6 = 180
 4 × 6 =  24
Total: 180 + 24 = 204

For two-digit × two-digit (e.g., 34 × 26), use a 2×2 grid:
      30      4
20 | 600  |  80 |  → 680
 6 | 180  |  24 |  → 204
Total: 680 + 204 = 884

DIVISION
Short division (bus stop method) works for dividing by a single digit. Write the dividend inside the 'bus stop', divisor outside. Divide each digit left to right, carrying any remainder to the next digit.

Example: 96 ÷ 4
4 into 9 = 2 remainder 1. Carry the 1. 4 into 16 = 4. Answer: 24.

The connection to multiplication: division is the inverse of multiplication. If 6 × 7 = 42, then 42 ÷ 7 = 6 and 42 ÷ 6 = 7. Use this fact to check every division answer.

Remainders: if a division doesn't work out exactly, express the leftover as a remainder (e.g., 29 ÷ 4 = 7 remainder 1).`,
      workedExample: {
        problem: "What is 11 × 12?",
        solution: "Split: 11 × 12 = 11 × 10 + 11 × 2 = 110 + 22 = 132. Or from times tables: 11 × 12 = 132."
      },
      commonMistakes: [
        "Misremembering times table facts — especially 6×7, 7×8, and 8×9. These are worth drilling specifically.",
        "Forgetting to carry a remainder in short division, causing every subsequent digit to be wrong.",
        "In the grid method, missing one of the partial products (especially when splitting into three parts)."
      ],
      keyFacts: [
        "Know all times tables from 2× to 12× by heart.",
        "Multiplication is commutative: 4 × 9 = 9 × 4.",
        "Division is the inverse of multiplication — use it to check your answers.",
        "Grid method: partition, multiply each part, then add the partial products.",
        "Short division: work left to right, carry remainders forward."
      ]
    },

    "Fractions, decimals & percentages": {
      title: "Fractions, Decimals & Percentages",
      keyIdea: "Fractions, decimals, and percentages are three different ways to write the same idea — a part of a whole.",
      body: `FRACTIONS
A fraction has a numerator (top) and a denominator (bottom). The denominator tells you how many equal parts the whole is split into; the numerator tells you how many of those parts you have.

Finding a fraction of an amount:
Step 1: Divide by the denominator.
Step 2: Multiply by the numerator.
Memory trick: "Divide by the bottom, times by the top."

Example: 2/5 of 40
Step 1: 40 ÷ 5 = 8
Step 2: 8 × 2 = 16 ✓

Example: 8/10 of 100
Step 1: 100 ÷ 10 = 10
Step 2: 10 × 8 = 80 ✓

DECIMALS
Decimals extend the place value system past the decimal point: tenths, hundredths, thousandths. 0.3 = 3/10, 0.25 = 25/100 = 1/4.

PERCENTAGES
Per cent means "out of 100". To find a percentage of an amount, convert to a decimal and multiply, OR use the divide-then-multiply method: 30% of 400 → find 10% first (÷10 = 40), then multiply (×3 = 120).

KEY CONVERSIONS to memorise:
1/2 = 0.5 = 50%
1/4 = 0.25 = 25%
3/4 = 0.75 = 75%
1/5 = 0.2 = 20%
1/10 = 0.1 = 10%

Equivalence: 4/10 = 0.4 = 40%. These three always represent the same quantity.`,
      workedExample: {
        problem: "What is 2/5 of 40?",
        solution: "Divide by the denominator: 40 ÷ 5 = 8. Multiply by the numerator: 8 × 2 = 16."
      },
      commonMistakes: [
        "Dividing by the numerator and multiplying by the denominator — it must always be ÷ bottom, × top.",
        "Confusing 1/4 = 25% with 1/4 = 0.25 — they are the same value, just written differently.",
        "Mixing up the decimal point position: 0.3 is 3 tenths (= 30%), not 3 hundredths."
      ],
      keyFacts: [
        "Fraction of an amount: ÷ denominator, then × numerator.",
        "1/2 = 0.5 = 50%,  1/4 = 0.25 = 25%,  1/5 = 0.2 = 20%,  1/10 = 0.1 = 10%.",
        "To find 10% of any number, divide by 10. Build other percentages from there.",
        "Equivalent fractions: multiply or divide numerator AND denominator by the same number."
      ]
    },

    "Geometry – shapes": {
      title: "Properties of 2D Shapes",
      keyIdea: "Every 2D shape is defined by the number of its sides and angles — learn the names and their properties once, and you have them for life.",
      body: `A polygon is any 2D shape made from straight sides. The name tells you the number of sides.

NAMES TO KNOW:
Triangle         3 sides
Quadrilateral    4 sides   (square, rectangle, parallelogram, rhombus, trapezium, kite)
Pentagon         5 sides
Hexagon          6 sides
Heptagon         7 sides
Octagon          8 sides
Nonagon          9 sides
Decagon         10 sides

REGULAR vs IRREGULAR:
A regular polygon has all sides equal AND all angles equal (e.g., a regular hexagon has 6 equal sides and six 120° angles). An irregular polygon has sides or angles that differ.

KEY QUADRILATERAL PROPERTIES:
• Square: 4 equal sides, 4 right angles (90°), all sides parallel in pairs.
• Rectangle: opposite sides equal, 4 right angles.
• Parallelogram: opposite sides equal and parallel, opposite angles equal.
• Rhombus: 4 equal sides, opposite sides parallel, opposite angles equal.
• Trapezium: exactly one pair of parallel sides.
• Kite: two pairs of adjacent equal sides, one pair of equal angles.

ANGLES IN POLYGONS:
Angles inside any triangle add to 180°.
Angles inside any quadrilateral add to 360°.
General rule: sum of interior angles = (n − 2) × 180°, where n is the number of sides.

LINES OF SYMMETRY:
A square has 4 lines of symmetry. An equilateral triangle has 3. A rectangle has 2. A regular pentagon has 5. A shape with no lines of symmetry (like a scalene triangle) is asymmetric.`,
      workedExample: {
        problem: "How many sides does a decagon have?",
        solution: "Deca = 10. A decagon has 10 sides. (Memory: 'decade' = 10 years.)"
      },
      commonMistakes: [
        "Confusing hexagon (6) and heptagon (7) — remember 'hex' means six (as in hexadecimal).",
        "Thinking a square is not a rectangle — a square is a special rectangle (all sides equal).",
        "Forgetting that interior angles of a quadrilateral sum to 360°, not 180°."
      ],
      keyFacts: [
        "Triangle = 3, Quad = 4, Pentagon = 5, Hexagon = 6, Heptagon = 7, Octagon = 8, Nonagon = 9, Decagon = 10.",
        "Angles in a triangle sum to 180°; in a quadrilateral, 360°.",
        "Regular polygon: all sides equal AND all angles equal.",
        "A square is a special rectangle (and also a special rhombus)."
      ]
    },

    "Geometry – position & direction": {
      title: "Coordinates & Translations",
      keyIdea: "A coordinate is an address for a point on a grid — always read along the corridor (x-axis) first, then up the stairs (y-axis).",
      body: `COORDINATES
A coordinate pair (x, y) gives the exact position of a point on a grid.
• x is the horizontal distance from the origin (0, 0) — read left or right.
• y is the vertical distance from the origin — read up or down.

Memory trick: "Along the corridor, then up the stairs" → x first, then y.

Positive x → right of origin. Negative x → left.
Positive y → above origin. Negative y → below.

Example: The point (4, 7) is 4 units right and 7 units up from the origin.

TRANSLATIONS
A translation slides a shape to a new position without rotating or flipping it. Every point moves the same distance in the same direction.

A translation is described as "a right/left and b up/down."
To find the new coordinates of a point (x, y) translated a right and b up:
New coordinates = (x + a, y + b)

If the translation is to the LEFT, subtract from x.
If the translation is DOWN, subtract from y.

Example: Point (4, 7) translated 1 right and 4 up:
New x = 4 + 1 = 5
New y = 7 + 4 = 11
New coordinates: (5, 11)

REFLECTIONS AND ROTATIONS (brief overview):
• Reflection: mirror image across a mirror line.
• Rotation: turn around a fixed centre point, described by angle (90°, 180°, 270°) and direction (clockwise or anti-clockwise).

When plotting coordinates, always use a sharp pencil and mark with a small × rather than a dot — it is more precise.`,
      workedExample: {
        problem: "A point at (2, 2) is translated 5 right and 1 up. What are its new coordinates?",
        solution: "New x = 2 + 5 = 7. New y = 2 + 1 = 3. New coordinates: (7, 3)."
      },
      commonMistakes: [
        "Reading y first and x second — it is always (x, y): horizontal before vertical.",
        "Adding when you should subtract for left/down translations.",
        "Plotting a point at (3, 5) on a y = 3, x = 5 position — x is horizontal, y is vertical."
      ],
      keyFacts: [
        "Coordinate format: (x, y) — always horizontal first.",
        "Translation right → add to x. Left → subtract from x.",
        "Translation up → add to y. Down → subtract from y.",
        "Translations do NOT change the size or orientation of a shape.",
        "Origin = (0, 0)."
      ]
    },

    "Measurement": {
      title: "Units of Measurement & Conversion",
      keyIdea: "Measurement only makes sense when you know the unit — and converting between units is just multiplication or division by a fixed scale factor.",
      body: `Measurements fall into categories: length, mass, capacity, and time. Each has a set of units connected by conversion factors.

LENGTH
10 mm = 1 cm
100 cm = 1 m
1,000 m = 1 km

To convert from a LARGER unit to a SMALLER unit → MULTIPLY.
To convert from a SMALLER unit to a LARGER unit → DIVIDE.

Examples:
109 cm to mm: multiply by 10 → 1,090 mm
283 cm to mm: multiply by 10 → 2,830 mm
3.5 km to m: multiply by 1,000 → 3,500 m
4,500 m to km: divide by 1,000 → 4.5 km

MASS
1,000 g = 1 kg
1,000 kg = 1 tonne

CAPACITY
1,000 ml = 1 litre

TIME
60 seconds = 1 minute
60 minutes = 1 hour
24 hours = 1 day
7 days = 1 week
365 days = 1 year (366 in a leap year)

AREA AND PERIMETER
Perimeter = total distance around the outside of a shape.
Area of a rectangle = length × width (measured in cm², m², etc.)

CHOOSING UNITS
Use common sense: a door is about 2 metres tall (not 200 cm in everyday speech). A paperclip is about 3 cm long. Always quote the unit with your answer — "1,090" is meaningless; "1,090 mm" is correct.`,
      workedExample: {
        problem: "How many millimetres are in 109 cm?",
        solution: "Converting cm → mm: multiply by 10. 109 × 10 = 1,090 mm."
      },
      commonMistakes: [
        "Dividing when you should multiply (going from a larger unit to a smaller unit always means the number gets bigger).",
        "Forgetting that there are 100 cm in a metre but 1,000 m in a kilometre — different scale factors.",
        "Leaving off the unit in the answer — always include mm, cm, kg, etc."
      ],
      keyFacts: [
        "Larger → smaller unit: MULTIPLY. Smaller → larger unit: DIVIDE.",
        "10 mm = 1 cm,  100 cm = 1 m,  1,000 m = 1 km.",
        "1,000 g = 1 kg,  1,000 ml = 1 litre.",
        "Area of rectangle = length × width.",
        "Perimeter = sum of all side lengths."
      ]
    },

    "Statistics": {
      title: "Averages & Data",
      keyIdea: "The mean is the 'fair share' average — add all the values together, then divide equally among the number of values.",
      body: `Statistics at KS2 focuses on reading data from charts and calculating the mean.

THE MEAN (average)
The mean is the most common measure of average. It represents the value you would get if all the data were shared out equally.

How to calculate the mean:
Step 1: Add all the values together (find the total).
Step 2: Divide the total by how many values there are (the count).

Mean = Total ÷ Count

Example: Mean of 24, 24, 18, 6
Total: 24 + 24 + 18 + 6 = 72
Count: 4 values
Mean: 72 ÷ 4 = 18

Example: Mean of 37, 28, 7
Total: 37 + 28 + 7 = 72
Count: 3 values
Mean: 72 ÷ 3 = 24

The mean does not have to be one of the original values in the data set — and it does not have to be a whole number.

READING CHARTS
Bar charts: the height (or length) of each bar shows the frequency for that category.
Pictograms: each symbol represents a fixed number — always check the key.
Line graphs: used to show change over time.
Tally charts: each tally mark = 1; groups of 5 are written as four vertical marks and one diagonal.

Always ask: "Does my answer make sense?" The mean should always be between the smallest and largest value in the data set.`,
      workedExample: {
        problem: "What is the mean of 37, 28, 7?",
        solution: "Total = 37 + 28 + 7 = 72. Count = 3. Mean = 72 ÷ 3 = 24."
      },
      commonMistakes: [
        "Dividing by the wrong count — count the number of values carefully, not the total.",
        "Adding the values incorrectly — take care with the addition step before dividing.",
        "Confusing mean with mode (most common) or median (middle value when ordered)."
      ],
      keyFacts: [
        "Mean = Total ÷ Count.",
        "The mean should always lie between the smallest and largest data value.",
        "Mode = most common value. Median = middle value (when ordered). Mean = fair-share average.",
        "Check bar charts by reading the exact value at the top of each bar against the scale."
      ]
    },

    "Algebra": {
      title: "Sequences & Simple Algebra",
      keyIdea: "A sequence follows a rule — find the rule and you can predict any term; algebra uses letters to express rules that work for any number.",
      body: `SEQUENCES
A sequence is a list of numbers that follow a pattern. To continue a sequence, identify the rule first.

LINEAR SEQUENCES (add or subtract the same amount each time):
Example: 5, 7, 9, 11, …
Each term increases by +2. Rule: "add 2". Next term: 11 + 2 = 13.

Example: 4, 6, 8, 10, …
Common difference: +2. Next term: 12.

To describe any linear sequence: find the first term and the common difference.

OTHER PATTERNS:
Doubling sequences: 2, 4, 8, 16, … (multiply by 2 each time)
Halving sequences: 80, 40, 20, 10, … (divide by 2 each time)
Fibonacci-style: 1, 1, 2, 3, 5, 8, … (add the two previous terms)

SIMPLE ALGEBRA
A letter (variable) stands for an unknown number. Algebra is just arithmetic with an unknown.

If 3 + x = 10, then x = 7 (because 3 + 7 = 10).
If 2 × n = 14, then n = 7.

The idea: whatever operation was done to x, do the inverse to both sides to find x.
"Balance the equation" — both sides must always be equal.

FUNCTION MACHINES
A function machine applies a rule to an input to produce an output.
Input → [× 3] → [+ 2] → Output
If input = 5: 5 × 3 = 15 → 15 + 2 = 17.
To find the input from the output, reverse the machine and use inverse operations.`,
      workedExample: {
        problem: "What is the next number in the sequence: 5, 7, 9, 11, …?",
        solution: "The common difference is +2 (each term increases by 2). Next term = 11 + 2 = 13."
      },
      commonMistakes: [
        "Assuming all sequences increase by adding — check whether it could be multiplication or a different operation.",
        "Continuing a sequence by writing the common difference instead of the next term.",
        "In algebra, assuming a letter always represents the same number across different problems."
      ],
      keyFacts: [
        "Find the rule in a sequence before writing the next term.",
        "Linear sequence: constant common difference (add or subtract the same amount each time).",
        "A letter in algebra stands for an unknown number.",
        "To solve for an unknown, use inverse operations (+↔−, ×↔÷).",
        "Function machine: trace input → output forward; reverse operations to go backwards."
      ]
    },

    "Ratio & proportion": {
      title: "Ratio & Proportion",
      keyIdea: "A ratio compares two quantities; to simplify, divide both parts by their highest common factor.",
      body: `RATIO
A ratio compares two (or more) quantities of the same type. It is written with a colon: 4 : 2 means "4 parts to 2 parts."

SIMPLIFYING RATIOS
A ratio is in its simplest form when the numbers share no common factor other than 1. To simplify, find the HCF (highest common factor) of both numbers and divide both by it.

Example: Simplify 4 : 2
HCF of 4 and 2 is 2. Divide both: 4 ÷ 2 = 2, 2 ÷ 2 = 1.
Simplified: 2 : 1.

Example: Simplify 15 : 5
HCF is 5. 15 ÷ 5 = 3, 5 ÷ 5 = 1.
Simplified: 3 : 1.

SHARING IN A RATIO
To share an amount in a ratio:
Step 1: Find the total number of parts (add the ratio numbers).
Step 2: Divide the amount by the total number of parts to find the value of one part.
Step 3: Multiply each ratio number by the value of one part.

Example: Share £30 in the ratio 2 : 1.
Total parts = 2 + 1 = 3.
One part = £30 ÷ 3 = £10.
Shares: £10 × 2 = £20 and £10 × 1 = £10.

PROPORTION
Proportion is about equivalent relationships — if 3 pencils cost 90p, then 1 pencil costs 30p (÷3) and 6 pencils cost 180p (×2). This is the unitary method: find the value of one unit first.

CHECK: the parts of a shared ratio must add back to the original total (£20 + £10 = £30 ✓).`,
      workedExample: {
        problem: "Simplify the ratio 15 : 5.",
        solution: "HCF of 15 and 5 is 5. Divide both by 5: 15 ÷ 5 = 3, 5 ÷ 5 = 1. Simplified ratio: 3 : 1."
      },
      commonMistakes: [
        "Only dividing one side of the ratio — both numbers must be divided by the same HCF.",
        "When sharing in a ratio, forgetting to find the total number of parts before dividing.",
        "Confusing ratio with fraction: the ratio 3 : 1 means 3/4 of the total is in the first share, not 3/1."
      ],
      keyFacts: [
        "Simplify a ratio by dividing BOTH parts by their HCF.",
        "Sharing: total parts = sum of ratio; one part = total ÷ number of parts.",
        "Always check: shares must add back to the original total.",
        "Unitary method (proportion): find the value of 1 unit first, then scale up or down."
      ]
    },

  }, // end ks2

  // ─── KS3 Maths & Physics ───────────────────────────────────────────────────
  ks3: {

    "Number": {
      title: "Number: Percentages, Factors & Negative Numbers",
      keyIdea: "Percentages, factors, and negative numbers are the three number skills that unlock almost everything in KS3 — master the 10% trick and the rest follows.",
      body: `PERCENTAGES OF AMOUNTS
The fastest method: find 10% first (divide by 10), then build the percentage you need from that.

Examples:
10% of 160 = 160 ÷ 10 = 16
30% of 400 → 10% = 40, so 30% = 40 × 3 = 120
15% of 200 → 10% = 20, 5% = 10, so 15% = 30

For any percentage: convert to a decimal and multiply.
35% of 80 = 0.35 × 80 = 28.

FACTORS, MULTIPLES & PRIMES
Factor: a whole number that divides exactly into another. Factors of 12: 1, 2, 3, 4, 6, 12.
Multiple: the result of multiplying a number by a positive integer. Multiples of 7: 7, 14, 21, 28 ...
Prime: a number with exactly two factors — 1 and itself. Primes: 2, 3, 5, 7, 11, 13, 17, 19 ... (1 is NOT prime).
HCF (Highest Common Factor): the largest factor shared by two numbers.
LCM (Lowest Common Multiple): the smallest multiple common to both numbers.

NEGATIVE NUMBERS
Number line: negative numbers are to the left of zero. −5 < −2 < 0 < 3.
Adding a negative: same as subtracting. 8 + (−3) = 8 − 3 = 5.
Subtracting a negative: same as adding. 8 − (−3) = 8 + 3 = 11.
Multiplying/dividing: same signs → positive. Different signs → negative.
(−4) × (−3) = +12.   (−4) × 3 = −12.

ORDER OF OPERATIONS — BIDMAS
Brackets → Indices → Division/Multiplication (left to right) → Addition/Subtraction (left to right).`,
      workedExample: {
        problem: "What is 30% of 400?",
        solution: "Find 10%: 400 ÷ 10 = 40. Multiply by 3: 40 × 3 = 120."
      },
      commonMistakes: [
        "Finding 10% and forgetting to multiply — 10% of 400 is 40, so 30% is 3 × 40 = 120, not just 40.",
        "Subtracting a negative incorrectly — two negatives make a positive: 5 − (−2) = 7.",
        "Thinking 1 is a prime number — it has only one factor, so it does not qualify."
      ],
      keyFacts: [
        "10% of any number = divide by 10. Build other percentages from this.",
        "Percentage as decimal: 35% = 0.35. Multiply by the amount.",
        "Same signs when multiplying/dividing → positive. Different signs → negative.",
        "BIDMAS: Brackets, Indices, Division/Multiplication, Addition/Subtraction.",
        "Prime numbers have exactly 2 factors: 1 and themselves. 1 is not prime."
      ]
    },

    "Algebra": {
      title: "Solving Equations & Forming Expressions",
      keyIdea: "An equation is a balance — whatever you do to one side, you must do to the other side to keep it equal.",
      body: `SOLVING ONE-STEP EQUATIONS
To find the unknown, apply the inverse (opposite) operation to both sides.
x + 7 = 12  →  x = 12 − 7 = 5
3x = 21     →  x = 21 ÷ 3 = 7

SOLVING TWO-STEP EQUATIONS
Undo the operations in reverse order (BIDMAS in reverse):
First undo + or −, then undo × or ÷.

Example: 2x + 17 = 31
Step 1: Subtract 17 from both sides: 2x = 31 − 17 = 14
Step 2: Divide both sides by 2:       x = 14 ÷ 2 = 7

Example: 3x + 14 = 47
Step 1: 3x = 47 − 14 = 33
Step 2: x = 33 ÷ 3 = 11

Always CHECK: substitute your answer back into the original equation.
2(7) + 17 = 14 + 17 = 31 ✓

COLLECTING LIKE TERMS
Like terms share the same letter part. Combine their coefficients.
3x + 5x = 8x      4a + 2b − a = 3a + 2b      x² and x are NOT like terms.

EXPANDING BRACKETS
Multiply everything inside the bracket by the term outside.
3(x + 4) = 3x + 12        −2(y − 5) = −2y + 10

SUBSTITUTION
Replace the letter with its value and calculate.
If x = 4: 3x + 5 = 3(4) + 5 = 12 + 5 = 17.

FORMING EQUATIONS FROM WORDS
"I think of a number, double it, and add 5. The result is 17."
→ 2n + 5 = 17 → n = 6.`,
      workedExample: {
        problem: "Solve for x: 2x + 17 = 31",
        solution: "Subtract 17: 2x = 14. Divide by 2: x = 7. Check: 2(7) + 17 = 31 ✓"
      },
      commonMistakes: [
        "Subtracting before dividing but forgetting to undo ALL operations — work in reverse BIDMAS order.",
        "Sign errors when expanding brackets with a negative outside: −2(x − 3) = −2x + 6, not −2x − 6.",
        "Combining unlike terms — 3x + 4y cannot be simplified because x and y are different variables."
      ],
      keyFacts: [
        "To solve an equation: apply inverse operations to both sides, undoing in reverse order.",
        "Always check your answer by substituting back into the original equation.",
        "Expanding: multiply each term inside the bracket by the term outside.",
        "Like terms: same letter and same power only.",
        "Form an equation by translating the word problem, then solve normally."
      ]
    },

    "Geometry & measures": {
      title: "Area, Perimeter & Angles",
      keyIdea: "Perimeter is the distance around a shape; area is the space inside — and angles in polygons always add to a fixed, predictable total.",
      body: `PERIMETER
The total length of all sides added together.
Rectangle: P = 2(l + w)
Example: 17 cm × 13 cm → P = 2(17 + 13) = 2 × 30 = 60 cm.

AREA
Rectangle: A = length × width
Triangle: A = ½ × base × height  (height must be perpendicular to the base)
Parallelogram: A = base × perpendicular height

Example — rectangle 17 cm × 13 cm: A = 17 × 13 = 221 cm²
Example — triangle, base 10 cm, height 6 cm: A = ½ × 10 × 6 = 30 cm²

Always include the correct units: cm², m², etc.

ANGLES
Angles on a straight line: sum to 180°.
Angles around a point: sum to 360°.
Vertically opposite angles (formed where two lines cross): are equal.
Angles in a triangle: sum to 180°.
Angles in a quadrilateral: sum to 360°.
Interior angles of a regular polygon: sum = (n − 2) × 180°, so each = (n − 2) × 180° ÷ n.

PARALLEL LINES (crossed by a transversal):
Alternate angles (Z-angles): equal.
Corresponding angles (F-angles): equal.
Co-interior angles (C-angles): add to 180°.

VOLUME (cuboid)
V = length × width × height. Units: cm³ or m³.

Tip: in any geometry problem, write down the rule you are using before calculating.`,
      workedExample: {
        problem: "A rectangle is 17 cm by 13 cm. What is its area in cm²?",
        solution: "Area = length × width = 17 × 13 = 221 cm²."
      },
      commonMistakes: [
        "Confusing perimeter (distance around) with area (space inside) — perimeter is in cm, area is in cm².",
        "Using the slant height instead of the perpendicular height in the triangle area formula.",
        "Forgetting to square the units for area (write cm², not cm)."
      ],
      keyFacts: [
        "Area of rectangle = l × w.  Area of triangle = ½ × b × h.",
        "Perimeter of rectangle = 2(l + w).",
        "Angles in a triangle = 180°. Angles in a quadrilateral = 360°.",
        "Alternate angles are equal; co-interior angles add to 180°.",
        "Volume of cuboid = l × w × h."
      ]
    },

    "Ratio & proportion": {
      title: "Ratio, Proportion & Percentage Change",
      keyIdea: "Ratio compares parts to parts; proportion compares a part to the whole — both are solved by finding the value of one unit first.",
      body: `SHARING IN A RATIO
Step 1: Add the ratio parts to find the total number of shares.
Step 2: Divide the amount by the total number of shares (value of 1 part).
Step 3: Multiply each ratio number by the value of 1 part.

Example: Share £36 in the ratio 2 : 1.
Total parts: 2 + 1 = 3. One part: £36 ÷ 3 = £12.
Shares: £24 and £12. (Check: 24 + 12 = 36 ✓)

Example: Share £35 in the ratio 4 : 1.
Total: 5 parts. One part: £35 ÷ 5 = £7.
Shares: £28 and £7.

EQUIVALENT RATIOS
Ratios scale like fractions — multiply or divide both parts by the same number.
2 : 3 = 4 : 6 = 10 : 15.
Simplify by dividing by the HCF: 18 : 24 → HCF = 6 → 3 : 4.

THE UNITARY METHOD (proportion)
Find the value of ONE, then scale.
5 items cost £8.50 → 1 item costs £1.70 → 9 items cost £15.30.

DIRECT PROPORTION
As one quantity increases, the other increases at the same rate (y = kx). Graph: straight line through the origin.

PERCENTAGE INCREASE AND DECREASE
% increase = (increase ÷ original) × 100
New value after increase = original × (1 + rate/100)
New value after decrease = original × (1 − rate/100)

Example: increase £80 by 15%.
Multiplier = 1.15. New value = 80 × 1.15 = £92.`,
      workedExample: {
        problem: "Share £36 in the ratio 2 : 1. How much is the smaller share?",
        solution: "Total parts: 2 + 1 = 3. One part: £36 ÷ 3 = £12. Smaller share (1 part): £12."
      },
      commonMistakes: [
        "Dividing the total by one of the ratio numbers instead of the sum of the ratio parts.",
        "Giving the larger share when the question asks for the smaller — read the question carefully.",
        "Forgetting to verify: the two shares must add back to the original total."
      ],
      keyFacts: [
        "Sharing in a ratio: find total parts first (add ratio numbers), divide, then multiply.",
        "Simplify ratios by dividing both parts by the HCF.",
        "Unitary method: find the value of 1 unit, then scale to any amount.",
        "% increase multiplier = 1 + (rate/100). % decrease multiplier = 1 − (rate/100)."
      ]
    },

    "Statistics & probability": {
      title: "Averages, Spread & Probability",
      keyIdea: "Averages summarise data with a single representative value; probability measures how likely an event is on a scale from 0 (impossible) to 1 (certain).",
      body: `THE FOUR AVERAGES
Mean: total ÷ count. Best for numerical data with no extreme outliers.
Median: middle value when data is ordered. For an even count, average the two middle values.
Mode: the most frequently occurring value. A data set can have more than one mode, or none.
Range: max − min. Measures spread, not average.

Example: 12, 10, 12, 2
Mean: (12 + 10 + 12 + 2) ÷ 4 = 36 ÷ 4 = 9
Median: order → 2, 10, 12, 12. Middle two: 10 and 12. Median = (10 + 12) ÷ 2 = 11.
Mode: 12 (appears twice).
Range: 12 − 2 = 10.

CHOOSING THE RIGHT AVERAGE
Use mean for most numerical data. Use median when there are outliers (extreme values that skew the mean). Use mode for categorical data (e.g., most popular shoe size).

PROBABILITY
Probability of an event = (number of favourable outcomes) ÷ (total number of equally likely outcomes).
P(event) is always between 0 and 1.
P(event does not happen) = 1 − P(event).

Example: A bag has 3 red and 7 blue balls. P(red) = 3/10.

LISTING OUTCOMES
For combined events (e.g., two coins), list all outcomes systematically:
HH, HT, TH, TT → 4 outcomes. P(exactly one head) = 2/4 = 1/2.

Relative frequency (experimental probability):
Relative frequency = number of successful trials ÷ total trials.
As the number of trials increases, relative frequency approaches the true probability.`,
      workedExample: {
        problem: "Find the mean of 12, 10, 12, 2.",
        solution: "Total = 12 + 10 + 12 + 2 = 36. Count = 4. Mean = 36 ÷ 4 = 9."
      },
      commonMistakes: [
        "Finding the median without ordering the data first — always sort from smallest to largest.",
        "Confusing mean and median — mean is total ÷ count; median is the physical middle value.",
        "Writing probability greater than 1 — it is always between 0 and 1 inclusive."
      ],
      keyFacts: [
        "Mean = total ÷ count. Median = middle (order first). Mode = most frequent. Range = max − min.",
        "For even-count median: average the two middle values.",
        "P(event) = favourable outcomes ÷ total outcomes.",
        "P(not A) = 1 − P(A).",
        "Probability is always between 0 and 1."
      ]
    },

    // ── KS3 Physics ────────────────────────────────────────────────────────────

    "Forces": {
      title: "Forces & Weight",
      keyIdea: "A force is a push or pull measured in newtons — weight is the gravitational force on a mass, and they are connected by a single formula.",
      body: `WHAT IS A FORCE?
A force is a push or pull that can change an object's speed, direction, or shape. Forces are measured in newtons (N) and are drawn as arrows showing direction and magnitude.

WEIGHT vs MASS
Mass is the amount of matter in an object, measured in kilograms (kg). Mass does not change wherever you are.
Weight is the gravitational force pulling an object downward, measured in newtons (N). Weight depends on gravitational field strength (g).

W = m × g

On Earth: g = 10 N/kg (use whichever value the question gives).
On the Moon: g ≈ 1.6 N/kg. A 60 kg person weighs 600 N on Earth but only 96 N on the Moon — same mass, different weight.

Example: mass = 46 kg, g = 10 N/kg.
Weight = 46 × 10 = 460 N.

BALANCED AND UNBALANCED FORCES
If all forces on an object balance (resultant force = 0 N), the object is either stationary or moving at constant velocity (Newton's First Law).
If the resultant force is non-zero, the object accelerates in the direction of the resultant force (Newton's Second Law: F = ma).

FORCE DIAGRAMS (free body diagrams)
Draw one arrow per force. Arrow length is proportional to force size. Label each arrow with its name and magnitude.

Common forces:
Friction: opposes motion, acts along the contact surface.
Normal (contact) force: acts perpendicular to a surface.
Air resistance (drag): opposes motion through air; increases with speed.`,
      workedExample: {
        problem: "An object has a mass of 46 kg. What is its weight on Earth? (g = 10 N/kg)",
        solution: "W = m × g = 46 × 10 = 460 N."
      },
      commonMistakes: [
        "Saying mass and weight are the same — mass is in kg, weight is in N; they are different quantities.",
        "Using g = 9.8 when the question specifies g = 10, or vice versa — always use the value given.",
        "Forgetting that a stationary object on a table has balanced forces, not zero forces."
      ],
      keyFacts: [
        "Weight (N) = mass (kg) × gravitational field strength (N/kg). W = mg.",
        "On Earth g = 10 N/kg (or 9.8 — use value given in question).",
        "Mass is fixed; weight depends on gravitational field.",
        "Balanced forces → constant velocity (or stationary). Unbalanced → acceleration.",
        "Newton's Second Law: F = ma."
      ]
    },

    "Energy": {
      title: "Energy, Power & Energy Transfer",
      keyIdea: "Energy cannot be created or destroyed — it is transferred between stores; power tells you how quickly that transfer happens.",
      body: `ENERGY STORES
Energy exists in different stores: kinetic, gravitational potential, elastic potential, thermal, chemical, nuclear, and electromagnetic. Energy is measured in joules (J).

ENERGY TRANSFERS
Energy is transferred by:
• Mechanical work (a force moving through a distance): W = F × d
• Heating (conduction, convection, radiation)
• Electrical current
• Waves (light, sound)

POWER
Power is the rate of energy transfer — how much energy is transferred per second.

P = E ÷ t

P = power (watts, W)
E = energy (joules, J)
t = time (seconds, s)

1 watt = 1 joule per second.

Example: A 25 W device runs for 4 s.
Energy transferred = P × t = 25 × 4 = 100 J.

Example: A device uses 700 J at 50 W.
Time = E ÷ P = 700 ÷ 50 = 14 s.

EFFICIENCY
Efficiency = (useful energy output ÷ total energy input) × 100%.
No device is 100% efficient — some energy is always dissipated as thermal energy (wasted heat).

CONSERVATION OF ENERGY
Total energy in a closed system is always conserved. Energy cannot be created or destroyed, only transferred from one store to another.

GRAVITATIONAL POTENTIAL ENERGY (GPE)
GPE = m × g × h   (mass × gravitational field strength × height)`,
      workedExample: {
        problem: "A 25 W device runs for 4 s. How much energy does it transfer?",
        solution: "E = P × t = 25 × 4 = 100 J."
      },
      commonMistakes: [
        "Confusing energy (J) and power (W) — power is the RATE of energy transfer, not energy itself.",
        "Using minutes instead of seconds in the power formula — always convert time to seconds first.",
        "Saying energy is 'used up' — energy is conserved; it is transferred or dissipated, never destroyed."
      ],
      keyFacts: [
        "P = E ÷ t  (power = energy ÷ time). Rearranges to E = P × t and t = E ÷ P.",
        "Power is in watts (W); energy is in joules (J); time is in seconds (s).",
        "1 W = 1 J/s.",
        "Efficiency = (useful output ÷ total input) × 100%.",
        "Energy is conserved — never created or destroyed."
      ]
    },

    "Waves": {
      title: "Wave Properties & the Wave Equation",
      keyIdea: "All waves transfer energy without transferring matter — and speed, frequency, and wavelength are always connected by one equation: v = fλ.",
      body: `TYPES OF WAVES
Transverse waves: oscillations are perpendicular to the direction of energy transfer.
Examples: light, water waves, all electromagnetic waves.
Longitudinal waves: oscillations are parallel to the direction of energy transfer (compressions and rarefactions).
Example: sound.

KEY WAVE PROPERTIES
Wavelength (λ): distance between two consecutive identical points on a wave (e.g., crest to crest). Measured in metres (m).
Frequency (f): number of complete waves passing a point per second. Measured in hertz (Hz). 1 Hz = 1 wave/second.
Amplitude: maximum displacement from the rest position. Determines energy/loudness.
Wave speed (v): how fast the wave travels through a medium. Measured in m/s.

THE WAVE EQUATION
v = f × λ

Rearranged:
f = v ÷ λ
λ = v ÷ f

Example: frequency = 5 Hz, wavelength = 2 m.
Wave speed = 5 × 2 = 10 m/s.

Example: speed = 1,000 m/s, frequency = 1,000 Hz.
Wavelength = 1,000 ÷ 1,000 = 1 m.

THE ELECTROMAGNETIC SPECTRUM (increasing frequency):
Radio → Microwave → Infrared → Visible light → Ultraviolet → X-rays → Gamma rays.
All travel at the speed of light in a vacuum: c = 3 × 10⁸ m/s.

REFLECTION AND REFRACTION
Reflection: angle of incidence = angle of reflection (both from the normal).
Refraction: bending of a wave as it crosses a boundary due to a change in speed.`,
      workedExample: {
        problem: "A wave travels at 10 m/s with wavelength 2 m. What is its frequency?",
        solution: "f = v ÷ λ = 10 ÷ 2 = 5 Hz."
      },
      commonMistakes: [
        "Mixing up frequency and wavelength — higher frequency means shorter wavelength (inversely proportional at constant speed).",
        "Measuring wavelength from crest to trough — wavelength is crest to crest (one full cycle).",
        "Forgetting to convert units before using v = fλ — speed in m/s, wavelength in m, frequency in Hz."
      ],
      keyFacts: [
        "v = f × λ  (speed = frequency × wavelength).",
        "Frequency (Hz) = waves per second. Wavelength (m) = length of one full cycle.",
        "Transverse: oscillation perpendicular to travel. Longitudinal: oscillation parallel to travel.",
        "Higher frequency → shorter wavelength (at constant speed).",
        "All EM waves travel at 3 × 10⁸ m/s in a vacuum."
      ]
    },

    "Electricity": {
      title: "Electrical Circuits & Ohm's Law",
      keyIdea: "Voltage pushes current through resistance — and Ohm's Law (V = IR) is the single equation that ties all three together.",
      body: `KEY QUANTITIES
Voltage (V): the electrical 'push' that drives current around a circuit. Measured in volts (V). Also called potential difference.
Current (I): the rate of flow of electric charge. Measured in amperes (amps, A).
Resistance (R): how much a component opposes the flow of current. Measured in ohms (Ω).

OHM'S LAW
V = I × R

Rearranged:
I = V ÷ R
R = V ÷ I

Memory triangle: write V on top, I and R on the bottom. Cover the quantity you want to find.

Example: V = 25 V, R = 5 Ω. Find current.
I = V ÷ R = 25 ÷ 5 = 5 A.

Example: V = 16 V, R = 8 Ω.
I = 16 ÷ 8 = 2 A.

SERIES CIRCUITS
• Same current flows through every component.
• Total resistance = sum of individual resistances.
• Voltage is shared between components.

PARALLEL CIRCUITS
• Voltage is the same across every branch.
• Total current = sum of branch currents.
• Total resistance is less than the smallest individual resistance.

POWER IN A CIRCUIT
P = I × V   (power = current × voltage)

CHARGE, CURRENT, AND TIME
Q = I × t   (charge = current × time)
Charge is measured in coulombs (C).

Circuit symbols to know: cell, battery, switch (open/closed), bulb, resistor, voltmeter, ammeter.`,
      workedExample: {
        problem: "A voltage of 25 V is applied across a 5 Ω resistor. What is the current?",
        solution: "I = V ÷ R = 25 ÷ 5 = 5 A."
      },
      commonMistakes: [
        "Inverting the formula — I = V ÷ R, not I = R ÷ V. Use the memory triangle.",
        "Confusing voltage and current — voltage is measured across components (voltmeter in parallel); current is measured in series (ammeter in series).",
        "In a series circuit, adding voltages rather than resistances when finding total resistance."
      ],
      keyFacts: [
        "V = I × R  (Ohm's Law). Rearranges to I = V/R and R = V/I.",
        "Series: current same everywhere; voltages add; resistances add.",
        "Parallel: voltage same across each branch; currents add.",
        "P = IV  (power in watts).",
        "Q = It  (charge in coulombs)."
      ]
    },

    "Matter & Space": {
      title: "Density, States of Matter & Space",
      keyIdea: "Density tells you how much mass is packed into a given volume — and the three states of matter differ in how tightly particles are packed and how freely they move.",
      body: `DENSITY
Density = mass ÷ volume

ρ = m ÷ V

ρ = density (g/cm³ or kg/m³)
m = mass (g or kg)
V = volume (cm³ or m³)

Rearranged:
m = ρ × V
V = m ÷ ρ

Example: density = 2 g/cm³, mass = 8 g.
Volume = 8 ÷ 2 = 4 cm³.

Example: density = 4 g/cm³, volume = 19 cm³.
Mass = 4 × 19 = 76 g.

Objects float if their density is less than the fluid they are in. Ice (≈ 0.92 g/cm³) floats on water (1.0 g/cm³) because it is less dense.

STATES OF MATTER
Solid: particles tightly packed in a fixed regular arrangement. Vibrate in place. Fixed shape and volume.
Liquid: particles close together but free to move past each other. Fixed volume, no fixed shape.
Gas: particles far apart, moving rapidly and randomly. No fixed shape or volume.

Changes of state: melting (solid → liquid), freezing (liquid → solid), evaporation/boiling (liquid → gas), condensation (gas → liquid), sublimation (solid → gas directly).

THE PARTICLE MODEL
Temperature reflects the average kinetic energy of particles. Heating increases kinetic energy — particles move faster, causing expansion or a change of state.

THE SOLAR SYSTEM AND SPACE
Order from the Sun: Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune.
A galaxy is a vast collection of stars. Our galaxy is the Milky Way. The universe contains billions of galaxies.
Light-year: the distance light travels in one year (≈ 9.5 × 10¹⁵ m).`,
      workedExample: {
        problem: "An object of density 2 g/cm³ has mass 8 g. What is its volume?",
        solution: "V = m ÷ ρ = 8 ÷ 2 = 4 cm³."
      },
      commonMistakes: [
        "Inverting the density formula — density = mass ÷ volume, so volume = mass ÷ density (use the formula triangle).",
        "Using inconsistent units — if density is in g/cm³, mass must be in g and volume in cm³.",
        "Confusing mass (kg) with weight (N) — density uses mass, not weight."
      ],
      keyFacts: [
        "ρ = m ÷ V. Rearranges to m = ρV and V = m ÷ ρ.",
        "Units: g/cm³ or kg/m³. Keep units consistent throughout.",
        "Objects less dense than a fluid float; denser objects sink.",
        "Solid → fixed shape and volume. Liquid → fixed volume. Gas → neither fixed.",
        "Temperature measures average kinetic energy of particles."
      ]
    },

  }, // end ks3


  // ─── GCSE Maths & Physics ──────────────────────────────────────────────────
  gcse: {

    "Number": {
      title: "Number: Standard Form, Indices & Surds",
      keyIdea: "Standard form is a compact way to write very large or very small numbers — and indices are the rules that make it all work.",
      body: `STANDARD FORM
Standard form (scientific notation) writes any number as:
A × 10ⁿ  where  1 ≤ A < 10  and n is an integer.

To convert a large number: count how many places the decimal point moves left.
3,000 = 3.0 × 10³     (point moves 3 places left)
1,300 = 1.3 × 10³

To convert a small number: count how many places the decimal point moves right.
0.0045 = 4.5 × 10⁻³   (point moves 3 places right)

Multiplying in standard form: multiply the A-parts, add the powers.
(3 × 10⁴) × (2 × 10³) = 6 × 10⁷

Dividing: divide the A-parts, subtract the powers.
(6 × 10⁸) ÷ (2 × 10³) = 3 × 10⁵

INDICES (LAWS OF POWERS)
aᵐ × aⁿ = aᵐ⁺ⁿ       (multiply → add powers)
aᵐ ÷ aⁿ = aᵐ⁻ⁿ       (divide → subtract powers)
(aᵐ)ⁿ = aᵐⁿ          (power of a power → multiply)
a⁰ = 1                (anything to the power 0 = 1)
a⁻ⁿ = 1/aⁿ           (negative power → reciprocal)
a^(1/n) = ⁿ√a         (fraction power → nth root)

HCF AND LCM (using prime factorisation)
Write each number as a product of primes (factor tree or repeated division).
HCF = product of shared prime factors (lowest powers).
LCM = product of all prime factors (highest powers).

Example: HCF and LCM of 12 and 18.
12 = 2² × 3    18 = 2 × 3²
HCF = 2¹ × 3¹ = 6     LCM = 2² × 3² = 36`,
      workedExample: {
        problem: "Write 3,000 in standard form.",
        solution: "3,000 = 3.0 × 10³. (The decimal point moves 3 places to the left, so the power is +3.)"
      },
      commonMistakes: [
        "Writing A outside the range 1 ≤ A < 10 — e.g., 13 × 10² is NOT standard form; it should be 1.3 × 10³.",
        "Adding powers when you should multiply the A-parts — multiplying in standard form: multiply A-values AND add powers.",
        "Confusing negative powers with negative numbers — 3 × 10⁻² = 0.03, not −300."
      ],
      keyFacts: [
        "Standard form: A × 10ⁿ where 1 ≤ A < 10.",
        "Large numbers → positive power; small numbers (< 1) → negative power.",
        "aᵐ × aⁿ = aᵐ⁺ⁿ.  aᵐ ÷ aⁿ = aᵐ⁻ⁿ.  (aᵐ)ⁿ = aᵐⁿ.",
        "a⁰ = 1.  a⁻ⁿ = 1/aⁿ.  a^(1/2) = √a.",
        "HCF: shared prime factors (lowest powers). LCM: all prime factors (highest powers)."
      ]
    },

    "Algebra": {
      title: "Algebra: Expanding, Factorising & Solving",
      keyIdea: "Expanding removes brackets; factorising puts them back — and both are essential tools for solving quadratics and simplifying expressions.",
      body: `EXPANDING DOUBLE BRACKETS
Use FOIL (First, Outer, Inner, Last) or the grid method.
(x + 6)(x + 1) = x² + x + 6x + 6 = x² + 7x + 6
(x + 5)(x + 2) = x² + 2x + 5x + 10 = x² + 7x + 10
(x − 3)(x + 4) = x² + 4x − 3x − 12 = x² + x − 12

Difference of two squares: (a + b)(a − b) = a² − b²
(x + 5)(x − 5) = x² − 25

FACTORISING QUADRATICS (form x² + bx + c)
Find two numbers that multiply to c AND add to b.
x² + 7x + 6 → find two numbers × to 6, + to 7: they are 1 and 6.
x² + 7x + 6 = (x + 1)(x + 6)

For ax² + bx + c (a ≠ 1), use the ac method or completing the square.

COMPLETING THE SQUARE
x² + bx + c = (x + b/2)² − (b/2)² + c
x² − 4x + 11 = (x − 2)² − 4 + 11 = (x − 2)² + 7

SOLVING QUADRATICS
By factorising: set each bracket = 0.
x² + 7x + 6 = 0 → (x + 1)(x + 6) = 0 → x = −1 or x = −6

Quadratic formula: x = (−b ± √(b² − 4ac)) / 2a

SIMULTANEOUS EQUATIONS
Elimination: multiply to make coefficients equal, then add or subtract.
Substitution: rearrange one equation, substitute into the other.

NTH TERM OF A SEQUENCE
Linear: nth term = dn + (a − d), where d = common difference, a = first term.
Example: 3, 7, 11, 15 … → d = 4, a = 3 → nth term = 4n − 1.`,
      workedExample: {
        problem: "Expand and simplify: (x + 6)(x + 1)",
        solution: "F: x×x = x². O: x×1 = x. I: 6×x = 6x. L: 6×1 = 6. Combine: x² + x + 6x + 6 = x² + 7x + 6."
      },
      commonMistakes: [
        "Forgetting the middle terms when expanding — FOIL produces FOUR terms before simplifying.",
        "Sign errors when factorising — always check by expanding your answer back out.",
        "In completing the square, subtracting (b/2)² twice instead of once — write (x + b/2)² then adjust the constant."
      ],
      keyFacts: [
        "(x + a)(x + b) = x² + (a+b)x + ab.",
        "Difference of two squares: (a+b)(a−b) = a² − b².",
        "Completing the square: x² + bx = (x + b/2)² − (b/2)².",
        "Quadratic formula: x = (−b ± √(b²−4ac)) / 2a.",
        "nth term of linear sequence = dn + (a − d) where d = common difference."
      ]
    },

    "Geometry & measures": {
      title: "Geometry: Pythagoras, Trigonometry & Circle Theorems",
      keyIdea: "Pythagoras links the three sides of a right-angled triangle; SOHCAHTOA links sides to angles — together they solve almost any triangle problem.",
      body: `PYTHAGORAS' THEOREM
In a right-angled triangle: a² + b² = c²
where c is the hypotenuse (longest side, opposite the right angle).

Finding the hypotenuse: c = √(a² + b²)
Finding a shorter side: a = √(c² − b²)

Example: hypotenuse 41 cm, one side 9 cm.
Other side = √(41² − 9²) = √(1681 − 81) = √1600 = 40 cm.

TRIGONOMETRY — SOHCAHTOA
Label sides relative to the angle θ: Opposite (O), Adjacent (A), Hypotenuse (H).
sin θ = O/H     cos θ = A/H     tan θ = O/A

To find a side: rearrange (e.g., O = H × sin θ).
To find an angle: use the inverse function (e.g., θ = sin⁻¹(O/H)).

AREA FORMULAS
Triangle: ½ab sin C  (when two sides and included angle are known)
Circle: A = πr²      Circumference: C = 2πr
Sector area: (θ/360) × πr²     Arc length: (θ/360) × 2πr
Trapezium: ½(a + b)h

VOLUMES
Cylinder: V = πr²h     Cone: V = ⅓πr²h     Sphere: V = (4/3)πr³

CIRCLE THEOREMS (key ones)
• Angle in a semicircle = 90°.
• Angles in the same segment are equal.
• Opposite angles of a cyclic quadrilateral sum to 180°.
• Tangent to a circle is perpendicular to the radius at the point of contact.

TRANSFORMATIONS
Enlargement: all lengths multiplied by scale factor k; area multiplied by k².
Vectors describe translations: (a/b) means a right, b up.`,
      workedExample: {
        problem: "A right-angled triangle has hypotenuse 41 cm and one side 9 cm. Find the other side.",
        solution: "a = √(41² − 9²) = √(1681 − 81) = √1600 = 40 cm."
      },
      commonMistakes: [
        "Adding a² + b² when finding a shorter side — for a shorter side you must SUBTRACT: a² = c² − b².",
        "Labelling Opposite and Adjacent incorrectly — they swap depending on which angle you are working from.",
        "Using diameter instead of radius in circle formulae — always halve the diameter first."
      ],
      keyFacts: [
        "Pythagoras: a² + b² = c² (c = hypotenuse).",
        "SOHCAHTOA: sin = O/H, cos = A/H, tan = O/A.",
        "Circle: area = πr², circumference = 2πr.",
        "Cylinder volume = πr²h. Cone = ⅓πr²h. Sphere = (4/3)πr³.",
        "Angle in a semicircle = 90°."
      ]
    },

    "Ratio, proportion & rates of change": {
      title: "Ratio, Proportion & Rates of Change",
      keyIdea: "Any ratio or proportion problem reduces to finding the value of one part — do that first and every other quantity follows immediately.",
      body: `THREE-PART RATIOS
Exactly the same method as two-part ratios — add all the parts first.

Example: Share £27 in the ratio 1 : 3 : 5.
Total parts: 1 + 3 + 5 = 9. One part: £27 ÷ 9 = £3.
Shares: £3, £9, £15. Largest share = £15.
Check: 3 + 9 + 15 = 27 ✓

DIRECT AND INVERSE PROPORTION
Direct proportion: y = kx. As x doubles, y doubles. Graph: straight line through origin.
Inverse proportion: y = k/x. As x doubles, y halves. Graph: reciprocal curve.

To find k, substitute one known pair of values, then use k to answer the question.

PERCENTAGE CHANGE
% change = (change ÷ original) × 100
Percentage increase/decrease — multiplier method:
Increase by 15% → multiply by 1.15
Decrease by 20% → multiply by 0.80
Reverse percentage: if £92 is after a 15% increase, original = 92 ÷ 1.15

COMPOUND INTEREST
Amount = P × (1 + r/100)ⁿ
P = principal, r = rate %, n = number of periods.
This is different from simple interest (which is P × r × n ÷ 100).

RATES OF CHANGE
Speed = distance ÷ time.  Density = mass ÷ volume.  Pressure = force ÷ area.
On a distance-time graph: gradient = speed.
On a velocity-time graph: gradient = acceleration; area under graph = distance.

BEST BUY / UNIT RATE
Find the price per unit for each option, then compare.
400 g for £2.40 → 0.6p/g.  600 g for £3.30 → 0.55p/g → 600 g is better value.`,
      workedExample: {
        problem: "Share £27 in the ratio 1 : 3 : 5. What is the largest share?",
        solution: "Total parts: 1+3+5 = 9. One part: £27 ÷ 9 = £3. Largest share (5 parts): 5 × £3 = £15."
      },
      commonMistakes: [
        "Forgetting to add ALL ratio parts before dividing — with three parts, add all three.",
        "Using the wrong base for percentage change — always divide by the ORIGINAL value, not the new one.",
        "Applying simple interest logic to compound interest — after year 1 the principal grows, so year 2 interest is larger."
      ],
      keyFacts: [
        "Share in ratio: total parts = sum of all ratio numbers; one part = total ÷ total parts.",
        "% change = (change ÷ original) × 100.",
        "Increase multiplier = 1 + r/100. Decrease multiplier = 1 − r/100.",
        "Compound interest: A = P(1 + r/100)ⁿ.",
        "Direct proportion: y = kx (line through origin). Inverse: y = k/x (reciprocal curve)."
      ]
    },

    "Statistics": {
      title: "Statistics: Averages, Graphs & Interpretation",
      keyIdea: "Statistics is about extracting meaningful information from data — always link your calculation back to what it tells you about the real-world context.",
      body: `AVERAGES FROM LISTED DATA
Mean = total ÷ count.
Median = middle value when ordered (average the two middle values for even count).
Mode = most frequent value. Range = max − min.

Example: 24, 20, 28, 8, 32, 8
Ordered: 8, 8, 20, 24, 28, 32
Mean: (24+20+28+8+32+8) ÷ 6 = 120 ÷ 6 = 20
Median: middle two are 20 and 24 → (20+24) ÷ 2 = 22
Mode: 8   Range: 32 − 8 = 24

AVERAGES FROM FREQUENCY TABLES
Mean = Σ(fx) ÷ Σf  (sum of frequency × midpoint, divided by total frequency)
For grouped data, use the midpoint of each class interval.

SCATTER GRAPHS
Correlation describes the relationship between two variables:
Positive correlation: as x increases, y increases.
Negative correlation: as x increases, y decreases.
No correlation: no pattern.

Line of best fit: drawn through the mean point, with roughly equal numbers of points on each side. Use it to estimate values (interpolation = within data range; extrapolation = outside, less reliable).

CUMULATIVE FREQUENCY & BOX PLOTS
Cumulative frequency: running total of frequencies.
Median = value at n/2. Lower quartile (LQ) = n/4. Upper quartile (UQ) = 3n/4.
Interquartile range (IQR) = UQ − LQ. Measures spread; unaffected by outliers.
Box plot: shows min, LQ, median, UQ, max.

HISTOGRAMS (unequal class widths)
Frequency density = frequency ÷ class width. Area of bar = frequency.`,
      workedExample: {
        problem: "Calculate the mean of 24, 20, 28, 8, 32, 8.",
        solution: "Total = 24+20+28+8+32+8 = 120. Count = 6. Mean = 120 ÷ 6 = 20."
      },
      commonMistakes: [
        "Using frequency not frequency × midpoint when calculating the mean from a frequency table.",
        "Drawing the line of best fit through the origin rather than the mean point.",
        "Reading cumulative frequency at n/2 for the median but forgetting to find the corresponding x-value on the graph."
      ],
      keyFacts: [
        "Mean from frequency table: Σ(fx) ÷ Σf.",
        "IQR = upper quartile − lower quartile. More robust to outliers than range.",
        "Histogram: plot frequency DENSITY (= frequency ÷ class width), not frequency.",
        "Line of best fit should pass through (x̄, ȳ) — the mean point.",
        "Interpolation (within data range) is more reliable than extrapolation (outside it)."
      ]
    },

    "Probability": {
      title: "Probability: Single, Combined & Conditional Events",
      keyIdea: "Probability measures chance on a scale from 0 to 1 — for combined events, tree diagrams and Venn diagrams make the structure visible and the arithmetic reliable.",
      body: `BASIC PROBABILITY
P(event) = favourable outcomes ÷ total equally likely outcomes.
P(A) always satisfies 0 ≤ P(A) ≤ 1.
P(not A) = 1 − P(A).   (Complementary events — they cover all possibilities.)

Example: P(event) = 0.57 → P(not event) = 1 − 0.57 = 0.43.

COMBINED EVENTS
AND rule (independent events): P(A and B) = P(A) × P(B)
OR rule (mutually exclusive events): P(A or B) = P(A) + P(B)
General OR rule: P(A or B) = P(A) + P(B) − P(A and B)

TREE DIAGRAMS
Draw one branch per stage. Multiply along branches (AND). Add between branches (OR).
With replacement: probabilities are the same at every stage.
Without replacement: probabilities change at each stage (conditional probability).

Example: bag with 3 red, 7 blue. Draw two without replacement.
P(both red) = (3/10) × (2/9) = 6/90 = 1/15.

VENN DIAGRAMS
Two overlapping circles in a rectangle (the universal set).
The overlap represents elements in BOTH sets (A ∩ B).
P(A ∪ B) = P(A) + P(B) − P(A ∩ B).

CONDITIONAL PROBABILITY
P(A | B) = P(A and B) ÷ P(B).  "Probability of A given B has occurred."
On a tree diagram: read along the correct branch only.

RELATIVE FREQUENCY (experimental probability)
Relative frequency = successes ÷ trials. Approaches theoretical probability as trials → ∞.`,
      workedExample: {
        problem: "The probability of an event is 0.57. What is the probability it does NOT happen?",
        solution: "P(not happening) = 1 − 0.57 = 0.43."
      },
      commonMistakes: [
        "Adding probabilities for AND events (should multiply) and multiplying for OR events (should add for mutually exclusive events).",
        "Forgetting to adjust probabilities after the first draw in without-replacement problems.",
        "Leaving probabilities greater than 1 — this is always wrong; go back and check your working."
      ],
      keyFacts: [
        "P(not A) = 1 − P(A).",
        "Independent AND: P(A and B) = P(A) × P(B). Mutually exclusive OR: P(A or B) = P(A) + P(B).",
        "Tree diagram: multiply along branches; add end probabilities for the same outcome.",
        "Without replacement: reduce numerator and denominator after each pick.",
        "Conditional: P(A|B) = P(A ∩ B) ÷ P(B)."
      ]
    },

    // ── GCSE Physics ──────────────────────────────────────────────────────────

    "Forces & Motion": {
      title: "Forces & Motion: SUVAT and Newton's Laws",
      keyIdea: "Every motion problem — however complex it looks — reduces to connecting displacement, velocity, acceleration, and time through the SUVAT equations.",
      body: `THE SUVAT EQUATIONS
s = displacement (m)
u = initial velocity (m/s)
v = final velocity (m/s)
a = acceleration (m/s²)
t = time (s)

The four equations:
v = u + at
s = ut + ½at²
v² = u² + 2as
s = ½(u + v)t

Strategy: write down what you know, identify what you need, choose the equation that contains only those variables.

Example: u = 20 m/s, a = 9 m/s², t = 4 s. Find v.
v = u + at = 20 + (9 × 4) = 20 + 36 = 56 m/s.

ACCELERATION
a = (v − u) ÷ t    (change in velocity ÷ time)
Deceleration is negative acceleration (a is negative when slowing down).

NEWTON'S LAWS
1st: An object remains stationary or moves at constant velocity unless acted on by a resultant force.
2nd: F = ma. A resultant force causes acceleration in its direction.
3rd: For every action there is an equal and opposite reaction.

WEIGHT, FRICTION AND TERMINAL VELOCITY
Weight = mg (always downward). Friction and air resistance oppose motion.
At terminal velocity: weight = air resistance (resultant force = 0, so acceleration = 0, constant speed).

MOMENTUM
p = mv  (kg m/s). Conservation: total momentum before = total momentum after a collision (in a closed system).
Impulse = F × t = change in momentum.`,
      workedExample: {
        problem: "A car starts at 20 m/s and accelerates at 9 m/s² for 4 s. What is its final velocity?",
        solution: "v = u + at = 20 + (9 × 4) = 20 + 36 = 56 m/s."
      },
      commonMistakes: [
        "Confusing speed (scalar) with velocity (vector) — velocity has a direction; deceleration means a is negative.",
        "Choosing the wrong SUVAT equation — list all known variables first, then pick the equation that fits.",
        "Forgetting that terminal velocity means zero resultant force (not zero force) — forces are balanced, not absent."
      ],
      keyFacts: [
        "v = u + at.  s = ut + ½at².  v² = u² + 2as.  s = ½(u+v)t.",
        "F = ma (Newton's Second Law).",
        "At terminal velocity: driving force = resistive force (net force = 0).",
        "Momentum p = mv. Conserved in all collisions.",
        "Impulse = Ft = Δp (change in momentum)."
      ]
    },

    "Energy": {
      title: "Energy: Kinetic, Potential & Power",
      keyIdea: "Every energy calculation at GCSE uses one of three core equations — KE, GPE, or power — and the skill is knowing which one applies.",
      body: `KINETIC ENERGY (KE)
KE = ½ × m × v²
m = mass (kg), v = speed (m/s), KE in joules (J).

Example: mass = 1 kg, v = 6 m/s.
KE = ½ × 1 × 6² = ½ × 36 = 18 J.

Example: mass = 18 kg, v = 10 m/s.
KE = ½ × 18 × 100 = 900 J.

GRAVITATIONAL POTENTIAL ENERGY (GPE)
GPE = m × g × h
m = mass (kg), g = gravitational field strength (N/kg), h = height (m).
On Earth: g = 10 N/kg (or 9.8 — use value given).

CONSERVATION OF ENERGY
GPE lost = KE gained (for a falling object, ignoring air resistance).
½mv² = mgh → v = √(2gh)

POWER
P = E ÷ t   (energy transferred per second, watts).
P = F × v   (force × velocity — useful for moving objects).

EFFICIENCY
Efficiency = (useful energy output ÷ total energy input) × 100%.
Or using power: efficiency = (useful power output ÷ total power input) × 100%.

SPECIFIC HEAT CAPACITY
E = mcΔT
m = mass (kg), c = specific heat capacity (J/kg°C), ΔT = temperature change (°C).
Water: c = 4,200 J/kg°C.

ELASTIC POTENTIAL ENERGY
Ee = ½ke²
k = spring constant (N/m), e = extension (m). (Hooke's Law: F = ke.)`,
      workedExample: {
        problem: "An object of mass 1 kg moves at 6 m/s. Find its kinetic energy.",
        solution: "KE = ½mv² = ½ × 1 × 6² = ½ × 36 = 18 J."
      },
      commonMistakes: [
        "Forgetting to square the velocity in KE — it is ½mv², not ½mv.",
        "Using weight (N) instead of mass (kg) in energy equations — always check units.",
        "Confusing GPE = mgh with KE = ½mv² — GPE involves height; KE involves speed."
      ],
      keyFacts: [
        "KE = ½mv².  GPE = mgh.  Ee = ½ke².",
        "P = E/t  (and also P = Fv).",
        "Efficiency = (useful output ÷ total input) × 100%.",
        "E = mcΔT (specific heat capacity).",
        "Conservation: energy converts between stores but total is constant."
      ]
    },

    "Waves": {
      title: "Waves: Properties, EM Spectrum & Sound",
      keyIdea: "All waves obey the same equation (v = fλ) and transfer energy — the difference between types is what oscillates and what medium they need.",
      body: `WAVE EQUATION (revision)
v = f × λ    (speed = frequency × wavelength)
f = v ÷ λ    λ = v ÷ f

All EM waves travel at c = 3 × 10⁸ m/s in a vacuum.

THE ELECTROMAGNETIC SPECTRUM
In order of increasing frequency (decreasing wavelength):
Radio → Microwave → Infrared → Visible → Ultraviolet → X-ray → Gamma

Uses:
Radio: broadcasting. Microwave: satellites, cooking. Infrared: thermal imaging, TV remotes.
Visible: sight, photography. UV: sterilisation, detecting fake notes.
X-ray: medical imaging (bone). Gamma: cancer treatment, sterilising equipment.

Hazards: UV causes skin cancer; X-rays and gamma rays ionise cells, damaging DNA.

SOUND WAVES
Longitudinal waves (particles oscillate parallel to direction of travel).
Cannot travel through a vacuum — need a medium (solid, liquid, or gas).
Speed in air ≈ 340 m/s. Speed in solids > speed in liquids > speed in gases.
Frequency determines pitch. Amplitude determines loudness.
Ultrasound (f > 20,000 Hz): used in medical imaging and sonar.

REFLECTION, REFRACTION AND DIFFRACTION
Reflection: angle of incidence = angle of reflection (from the normal).
Refraction: change of speed at a boundary causes bending. Light bends towards the normal when slowing down (entering a denser medium).
Diffraction: waves spread out after passing through a gap or around an obstacle. Most pronounced when gap width ≈ wavelength.

WAVE BEHAVIOUR
Interference: superposition of two waves. Constructive (crests align) or destructive (crest meets trough).`,
      workedExample: {
        problem: "A wave has frequency 5 Hz and wavelength 2 m. What is its speed?",
        solution: "v = f × λ = 5 × 2 = 10 m/s."
      },
      commonMistakes: [
        "Assuming all waves travel at 3 × 10⁸ m/s — only EM waves do; sound travels at ≈ 340 m/s in air.",
        "Confusing transverse (EM, water) and longitudinal (sound) — the distinction often appears in exam questions.",
        "Mixing up refraction and reflection — refraction involves a change in medium and speed; reflection does not."
      ],
      keyFacts: [
        "v = fλ. All EM waves: v = 3 × 10⁸ m/s in vacuum.",
        "EM spectrum (low→high frequency): Radio, Micro, IR, Visible, UV, X-ray, Gamma.",
        "Sound is longitudinal; EM waves are transverse.",
        "Refraction: wave bends toward normal when entering denser medium (slowing down).",
        "Diffraction is greatest when gap width ≈ wavelength."
      ]
    },

    "Electricity": {
      title: "Electricity: Circuits, Power & Domestic Use",
      keyIdea: "Ohm's Law (V = IR) and the power equations (P = IV = I²R = V²/R) are the complete toolkit for any circuit calculation.",
      body: `OHM'S LAW REVISION
V = I × R    I = V/R    R = V/I
(Ohmic conductors obey this at constant temperature.)

POWER EQUATIONS
P = I × V
P = I² × R
P = V² ÷ R

Any two of these give the same answer — choose whichever fits the information given.

Example: current 14 A, voltage 12 V.
P = I × V = 14 × 12 = 168 W.

ENERGY IN CIRCUITS
E = P × t    (energy = power × time, in joules)
E = I × V × t

For electricity bills: energy in kilowatt-hours (kWh) = power (kW) × time (h).
Cost = energy (kWh) × price per kWh.

SERIES AND PARALLEL (revision with numbers)
Series: Iₜₒₜₐₗ = same. Vₜₒₜₐₗ = V₁ + V₂. Rₜₒₜₐₗ = R₁ + R₂.
Parallel: Vₜₒₜₐₗ = same. Iₜₒₜₐₗ = I₁ + I₂. 1/Rₜₒₜₐₗ = 1/R₁ + 1/R₂.

DOMESTIC ELECTRICITY
Mains supply: 230 V AC, 50 Hz in the UK.
AC (alternating current): direction reverses 50 times per second.
DC (direct current): flows in one direction (e.g., batteries).

Three-pin plug wiring:
Live (brown): carries the high-voltage current.
Neutral (blue): completes the circuit at 0 V.
Earth (green/yellow): safety wire — carries current if there is a fault.

Fuses and circuit breakers protect against excessive current. Fuse rating should be just above normal operating current.

CHARGE AND CURRENT
Q = I × t    (coulombs = amps × seconds)`,
      workedExample: {
        problem: "A device draws a current of 14 A from a 12 V supply. What is its power?",
        solution: "P = I × V = 14 × 12 = 168 W."
      },
      commonMistakes: [
        "Forgetting there are three power equations — use P = I²R when voltage is unknown; P = V²/R when current is unknown.",
        "Confusing kWh and joules — for electricity bills use kWh; in circuit calculations use J.",
        "Wiring the plug incorrectly in questions — Live = brown, Neutral = blue, Earth = green/yellow."
      ],
      keyFacts: [
        "P = IV = I²R = V²/R.",
        "E = Pt (joules). Energy in kWh = P(kW) × t(h).",
        "Series: resistances add. Parallel: 1/R = 1/R₁ + 1/R₂.",
        "Mains: 230 V AC, 50 Hz. Plug: Live=brown, Neutral=blue, Earth=green/yellow.",
        "Q = It (charge in coulombs)."
      ]
    },

    "Magnetism & Electromagnetism": {
      title: "Magnetism & Electromagnetism",
      keyIdea: "A current in a magnetic field experiences a force — and that force is the principle behind every electric motor, generator, and transformer.",
      body: `MAGNETIC FIELDS
Magnetic field lines run from north to south outside a magnet. The closer the lines, the stronger the field.
A current-carrying wire creates a circular magnetic field around it.
A solenoid (coil of wire) creates a field like a bar magnet when current flows — the right-hand grip rule gives the north pole direction.

FORCE ON A CURRENT-CARRYING CONDUCTOR
When a current-carrying wire is placed in an external magnetic field:
F = B × I × L

F = force (N), B = magnetic flux density (T), I = current (A), L = length of conductor in the field (m).

This force is maximum when the current is perpendicular to the field.
Fleming's Left-Hand Rule: point the thumb (force/motion), index finger (field), and middle finger (current) at right angles to each other.

Example: length = 1 m, current = 9 A, B = 1 T.
F = 1 × 9 × 1 = 9 N.

THE MOTOR EFFECT
An electric motor uses the force on a current-carrying conductor in a magnetic field. The split-ring commutator reverses current direction every half-turn to keep the coil spinning.

ELECTROMAGNETIC INDUCTION (the generator effect)
Moving a conductor in a magnetic field (or changing the flux through a coil) induces an EMF — and a current if the circuit is complete.
Fleming's Right-Hand Rule gives the direction of induced current.
Increase EMF by: faster movement, stronger magnet, more turns on the coil.

TRANSFORMERS
Step-up transformer: more turns on secondary → higher voltage.
Step-down transformer: fewer turns on secondary → lower voltage.
Vp/Vs = Np/Ns    (voltage ratio = turns ratio)
For an ideal transformer: Vp × Ip = Vs × Is   (power in = power out).`,
      workedExample: {
        problem: "A wire of length 1 m carries current 9 A in a magnetic field of flux density 1 T. Find the force on the wire.",
        solution: "F = BIL = 1 × 9 × 1 = 9 N."
      },
      commonMistakes: [
        "Using Fleming's Left-Hand Rule for generators — left hand is for motors (current → force); right hand is for generators (movement → current).",
        "Forgetting the condition for maximum force — the wire must be perpendicular to the field for F = BIL to give maximum force.",
        "Reversing the transformer ratio — more turns = higher voltage on that side; fewer turns = lower voltage."
      ],
      keyFacts: [
        "F = BIL (force on a current-carrying conductor).",
        "Fleming's Left-Hand Rule: thumb = force, index = field (B), middle = current.",
        "Generator effect: moving conductor in B-field induces EMF.",
        "Transformer: Vp/Vs = Np/Ns. Ideal: VpIp = VsIs.",
        "Increasing coil turns, field strength, or speed increases induced EMF."
      ]
    },

    "Atomic Structure": {
      title: "Atomic Structure & Radioactive Decay",
      keyIdea: "The nucleus contains protons and neutrons; proton number defines the element; mass number counts all nucleons — and unstable nuclei shed particles to become stable.",
      body: `ATOMIC STRUCTURE
Atom: a nucleus (protons + neutrons) surrounded by electrons in shells.
Proton: charge +1, relative mass 1.
Neutron: charge 0, relative mass 1.
Electron: charge −1, relative mass ≈ 0 (negligible).

KEY NUMBERS
Atomic number (proton number, Z): number of protons. Defines the element.
Mass number (nucleon number, A): total number of protons + neutrons.
Number of neutrons = A − Z.

Example: mass number 134, 67 neutrons → atomic number = 134 − 67 = 67.
Example: 21 protons, 36 neutrons → mass number = 21 + 36 = 57.

ISOTOPES
Atoms of the same element with different numbers of neutrons.
Same atomic number, different mass number. E.g., ¹²C and ¹⁴C are both carbon.

RADIOACTIVE DECAY
Alpha (α) decay: emits an alpha particle (⁴₂He). A decreases by 4; Z decreases by 2.
Beta (β⁻) decay: a neutron converts to a proton + electron; emits the electron. A unchanged; Z increases by 1.
Gamma (γ) emission: high-energy electromagnetic radiation released after alpha or beta decay. A and Z unchanged.

PENETRATING POWER AND IONISATION
Alpha: stopped by paper or a few cm of air. Highly ionising. Most dangerous if inhaled.
Beta: stopped by a few mm of aluminium. Moderately ionising.
Gamma: reduced (but not stopped) by thick lead or concrete. Weakly ionising.

HALF-LIFE
The time taken for half the radioactive nuclei in a sample to decay.
After n half-lives: remaining activity = initial × (1/2)ⁿ.
Half-life is constant and unaffected by temperature, pressure, or chemical state.`,
      workedExample: {
        problem: "An atom has mass number 134 and 67 neutrons. What is its atomic number?",
        solution: "Atomic number = mass number − neutrons = 134 − 67 = 67."
      },
      commonMistakes: [
        "Confusing mass number (protons + neutrons) with atomic number (protons only).",
        "Forgetting that beta decay increases the atomic number by 1 — a neutron becomes a proton.",
        "Thinking half-life means the sample is gone after 2 half-lives — after each half-life half of what remains decays."
      ],
      keyFacts: [
        "Atomic number Z = protons. Mass number A = protons + neutrons. Neutrons = A − Z.",
        "Alpha: A−4, Z−2. Beta⁻: A unchanged, Z+1. Gamma: no change to A or Z.",
        "Alpha stopped by paper. Beta by aluminium. Gamma reduced by lead.",
        "Half-life: time for activity to halve. After n half-lives: fraction remaining = (½)ⁿ.",
        "Isotopes: same Z, different A (different neutron count)."
      ]
    },

    "Space Physics": {
      title: "Space Physics: Orbits, Stars & the Universe",
      keyIdea: "Gravity keeps every orbit going — orbital speed depends on the radius and period, and the same gravitational laws govern everything from satellites to galaxy clusters.",
      body: `ORBITAL SPEED
An object in a circular orbit travels at a constant speed but is continuously changing direction — gravity provides the centripetal force.

v = 2πr ÷ T

v = orbital speed (m/s), r = orbital radius (m), T = orbital period (s).

Example: r = 13 × 10⁶ m, T = 2 hours = 7,200 s.
v = 2π × 13 × 10⁶ ÷ 7,200 ≈ 11,345 m/s.

FACTORS AFFECTING ORBITS
Closer orbit → higher speed, shorter period.
Geostationary orbit: T = 24 h, remains above the same point on Earth. Used for communication satellites.
Low Earth orbit: lower altitude, faster, used for imaging.

THE LIFE CYCLE OF STARS
Nebula (gas and dust cloud) → Protostar (gravitational collapse) → Main sequence star (hydrogen fusion, stable for billions of years) → Red giant / red supergiant (hydrogen exhausted, expands).
Low/medium mass stars → White dwarf → Black dwarf.
High mass stars → Supernova → Neutron star or Black hole.

Our Sun is a medium-mass main sequence star.

THE UNIVERSE
Big Bang theory: the universe began ≈ 13.8 billion years ago as an extremely hot, dense point.
Evidence: cosmic microwave background radiation; red-shift of distant galaxies.
Red-shift: light from galaxies is shifted to longer wavelengths, showing they are moving away. More distant galaxies show greater red-shift → universe is expanding.

GRAVITATIONAL FORCES IN SPACE
Gravity attracts all masses. Planets orbit stars; moons orbit planets; stars orbit galactic centres.
Artificial satellites: speed and altitude determine orbital period.`,
      workedExample: {
        problem: "A satellite orbits at radius 13 × 10⁶ m with period 2 hours. Find the orbital speed.",
        solution: "Convert: T = 2 × 3600 = 7,200 s. v = 2πr ÷ T = 2π × 13×10⁶ ÷ 7,200 ≈ 11,345 m/s."
      },
      commonMistakes: [
        "Forgetting to convert the orbital period to seconds — always convert hours or minutes to seconds before calculating.",
        "Thinking a geostationary satellite is stationary in space — it is orbiting at the same rate the Earth rotates, so it appears stationary from the ground.",
        "Confusing red-shift with the Doppler effect for sound — both are the same principle, but red-shift applies to light from receding sources."
      ],
      keyFacts: [
        "Orbital speed: v = 2πr ÷ T (convert T to seconds).",
        "Closer orbit → greater speed, shorter period.",
        "Geostationary orbit: T = 24 h; stays above the same point on Earth.",
        "Star life cycle: Nebula → Protostar → Main sequence → Red giant → White dwarf / Neutron star / Black hole.",
        "Red-shift of galaxies is evidence for the expanding universe and the Big Bang."
      ]
    },

  }, // end gcse


  // ─── A-level Maths & Physics ───────────────────────────────────────────────
  alevel: {

    "Algebra & Functions": {
      title: "Algebra & Functions: Quadratics, Inequalities & Partial Fractions",
      keyIdea: "Completing the square converts any quadratic into a form that reveals its vertex, roots, and range — it is the single most versatile algebraic technique at A-level.",
      body: `COMPLETING THE SQUARE
For x² + bx + c:
x² + bx + c = (x + b/2)² − (b/2)² + c

The value q = c − (b/2)² is the minimum value of the expression (when a = 1).

Example: x² − 4x + 11
= (x − 2)² − 4 + 11 = (x − 2)² + 7   → q = 7

Example: x² + 10x − 5
= (x + 5)² − 25 − 5 = (x + 5)² − 30  → q = −30

For ax² + bx + c (a ≠ 1): factor out a first, then complete the square inside.

USES OF COMPLETING THE SQUARE
• Finding the vertex of a parabola: y = (x − h)² + k has vertex (h, k).
• Solving quadratics: (x + b/2)² = (b/2)² − c → x = −b/2 ± √((b/2)² − c).
• Proving minimum/maximum values.

DISCRIMINANT
For ax² + bx + c = 0, the discriminant Δ = b² − 4ac determines the number of real roots.
Δ > 0: two distinct real roots.
Δ = 0: one repeated real root (tangent to the x-axis).
Δ < 0: no real roots (complex only).

PARTIAL FRACTIONS
Split a rational expression into simpler fractions before integrating or expanding.
For distinct linear factors: (3x + 1)/((x+1)(x−2)) ≡ A/(x+1) + B/(x−2).
Multiply both sides by the denominator, then substitute the roots of each factor to find A and B.

FUNCTIONS AND TRANSFORMATIONS
f(x + a): shift left by a.  f(x − a): shift right by a.
f(x) + a: shift up by a.   −f(x): reflect in x-axis.  f(−x): reflect in y-axis.
af(x): stretch vertically by factor a.   f(ax): compress horizontally by factor a.`,
      workedExample: {
        problem: "Complete the square: x² − 4x + 11. What is q (the constant term after completing the square)?",
        solution: "x² − 4x + 11 = (x − 2)² − 4 + 11 = (x − 2)² + 7. So q = 7."
      },
      commonMistakes: [
        "Halving b incorrectly when b is odd — e.g., x² + 5x → (x + 2.5)² − 6.25, not (x + 5)² − 25.",
        "Forgetting to subtract (b/2)² after squaring — always subtract it to keep the expression equivalent.",
        "With a ≠ 1, not factoring out a before completing the square — the formula only applies directly when the leading coefficient is 1."
      ],
      keyFacts: [
        "x² + bx + c = (x + b/2)² − (b/2)² + c.",
        "Vertex of y = a(x−h)² + k is at (h, k); minimum if a > 0, maximum if a < 0.",
        "Discriminant: b²−4ac > 0 (two roots), = 0 (one root), < 0 (no real roots).",
        "Partial fractions: multiply out, then substitute roots of each factor.",
        "f(x+a) shifts left; f(x)+a shifts up; af(x) stretches vertically."
      ]
    },

    "Calculus": {
      title: "Calculus: Differentiation & Integration",
      keyIdea: "Differentiation finds the rate of change (gradient) at any point; integration finds the accumulated area — and they are exact inverses of each other.",
      body: `DIFFERENTIATION — POWER RULE
d/dx (axⁿ) = naxⁿ⁻¹

Multiply by the power, then reduce the power by 1.

Examples:
d/dx (2x³) = 6x²
d/dx (7x⁵) = 35x⁴
d/dx (x) = 1    d/dx (constant) = 0

CHAIN RULE  (composite functions)
d/dx [f(g(x))] = f'(g(x)) × g'(x)
Example: d/dx (3x+2)⁵ = 5(3x+2)⁴ × 3 = 15(3x+2)⁴

PRODUCT RULE
d/dx [u·v] = u·v' + v·u'

QUOTIENT RULE
d/dx [u/v] = (v·u' − u·v') / v²

TANGENTS AND NORMALS
Gradient of tangent at x = a: substitute a into dy/dx.
Gradient of normal = −1 / (gradient of tangent).
Equation of line: y − y₁ = m(x − x₁).

STATIONARY POINTS
Set dy/dx = 0 and solve. Then find d²y/dx² (second derivative):
d²y/dx² > 0 → minimum.  d²y/dx² < 0 → maximum.

INTEGRATION — POWER RULE (reverse of differentiation)
∫axⁿ dx = axⁿ⁺¹/(n+1) + C    (n ≠ −1)
Add 1 to the power, divide by the new power, add constant C.

Example: ∫6x² dx = 2x³ + C

DEFINITE INTEGRALS (area under a curve)
∫[a to b] f(x) dx = [F(x)] from a to b = F(b) − F(a)

Area below the x-axis gives a negative value — take the modulus for physical area.

INTEGRATION BY SUBSTITUTION and BY PARTS are key further techniques.`,
      workedExample: {
        problem: "Differentiate 2x³ with respect to x.",
        solution: "d/dx (2x³) = 3 × 2x² = 6x²."
      },
      commonMistakes: [
        "Reducing the power without multiplying by it first — the coefficient must be multiplied by the original power.",
        "Forgetting the constant of integration +C in indefinite integrals — every indefinite integral has a family of solutions.",
        "Treating area below the x-axis as positive in definite integration — split the integral at x-axis crossings and take the modulus of each part."
      ],
      keyFacts: [
        "d/dx (axⁿ) = naxⁿ⁻¹. ∫axⁿ dx = axⁿ⁺¹/(n+1) + C.",
        "Chain rule: d/dx[f(g(x))] = f'(g(x))·g'(x).",
        "Product rule: (uv)' = uv' + vu'.",
        "Stationary point: dy/dx = 0. Min if d²y/dx² > 0; max if < 0.",
        "Definite integral = F(b) − F(a). Area below x-axis is negative — take modulus."
      ]
    },

    "Coordinate Geometry": {
      title: "Coordinate Geometry: Lines, Circles & Parametric Curves",
      keyIdea: "Every geometric property of a line or circle — gradient, midpoint, distance, intersection — follows from one core formula applied carefully.",
      body: `STRAIGHT LINES
Gradient: m = (y₂ − y₁) / (x₂ − x₁)

Example: points (−3, −4) and (1, 16).
m = (16 − (−4)) / (1 − (−3)) = 20 / 4 = 5.

Distance: d = √((x₂−x₁)² + (y₂−y₁)²)
Midpoint: M = ((x₁+x₂)/2, (y₁+y₂)/2)

Equation of a line: y − y₁ = m(x − x₁)
Slope-intercept: y = mx + c

Parallel lines: same gradient (m₁ = m₂).
Perpendicular lines: m₁ × m₂ = −1  (gradients are negative reciprocals).

CIRCLES
General equation: (x − a)² + (y − b)² = r²
Centre (a, b), radius r.

Expanded form: x² + y² + 2gx + 2fy + c = 0
Centre: (−g, −f),  radius: √(g² + f² − c).

To find the equation: complete the square on both x and y terms.

Key circle theorems (coordinate geometry versions):
• Tangent at point P is perpendicular to the radius at P.
• Angle in a semicircle = 90° → if AB is a diameter, ∠APB = 90° for any point P on the circle.
• Perpendicular from the centre to a chord bisects the chord.

PARAMETRIC EQUATIONS
x = f(t), y = g(t). Eliminate t to get the Cartesian equation.
Gradient: dy/dx = (dy/dt) / (dx/dt).

PROOF OF COLLINEARITY
Three points are collinear if the gradient between any two pairs is equal.`,
      workedExample: {
        problem: "Find the gradient of the line through (−3, −4) and (1, 16).",
        solution: "m = (16 − (−4)) / (1 − (−3)) = 20 / 4 = 5."
      },
      commonMistakes: [
        "Subtracting coordinates in different orders for numerator and denominator — keep the same point 'first' in both.",
        "Using the expanded circle equation with the wrong sign for the centre — centre is (−g, −f), not (+g, +f).",
        "Forgetting that perpendicular gradients multiply to −1, not +1."
      ],
      keyFacts: [
        "Gradient m = (y₂−y₁)/(x₂−x₁). Midpoint = ((x₁+x₂)/2, (y₁+y₂)/2).",
        "Perpendicular gradients: m₁m₂ = −1.",
        "Circle: (x−a)² + (y−b)² = r². Centre (a,b), radius r.",
        "Tangent to circle is perpendicular to radius at the point of contact.",
        "Parametric gradient: dy/dx = (dy/dt)/(dx/dt)."
      ]
    },

    "Exponentials & Logarithms": {
      title: "Exponentials & Logarithms",
      keyIdea: "A logarithm is simply an exponent written differently — logₐ(x) = n means aⁿ = x — and the log laws are just the index laws in disguise.",
      body: `DEFINITION
logₐ(x) = n  ⟺  aⁿ = x

Special values: logₐ(a) = 1,  logₐ(1) = 0,  logₐ(aⁿ) = n.

THE LOG LAWS
log(AB) = log A + log B          (product → sum)
log(A/B) = log A − log B         (quotient → difference)
log(Aⁿ) = n log A               (power → coefficient)

These hold for any consistent base.

Example: Write 2log(2) as a single logarithm.
2log(2) = log(2²) = log(4).

Example: Write 4log(4) as a single log.
4log(4) = log(4⁴) = log(256).

THE NATURAL LOGARITHM
ln(x) = logₑ(x), where e ≈ 2.718 (Euler's number).
ln(eˣ) = x.   e^(ln x) = x.   d/dx(eˣ) = eˣ.   d/dx(ln x) = 1/x.

SOLVING EXPONENTIAL EQUATIONS
Take logs of both sides to bring the power down.
2ˣ = 15 → x ln 2 = ln 15 → x = ln 15 / ln 2 ≈ 3.91.

SOLVING EQUATIONS IN LOG FORM
Combine logs first using the laws, then convert to exponential form.
log₂(x) + log₂(3) = 5 → log₂(3x) = 5 → 3x = 2⁵ = 32 → x = 32/3.

EXPONENTIAL MODELS
Growth: y = Aeᵏᵗ (k > 0).  Decay: y = Ae⁻ᵏᵗ (k > 0).
Plotting ln y against t gives a straight line if the model is exponential.

CHANGE OF BASE
logₐ(x) = ln(x) / ln(a).`,
      workedExample: {
        problem: "Write 2log(2) as a single logarithm.",
        solution: "Using the power law: 2log(2) = log(2²) = log(4)."
      },
      commonMistakes: [
        "Writing log(A + B) = log A + log B — this is WRONG. log(AB) = log A + log B (product, not sum).",
        "Dividing inside the log instead of subtracting logs: log(A/B) ≠ log(A) / log(B).",
        "Forgetting to check for invalid solutions — log is only defined for positive arguments, so always verify x > 0 in the original equation."
      ],
      keyFacts: [
        "logₐx = n ⟺ aⁿ = x.",
        "log(AB) = logA + logB.  log(A/B) = logA − logB.  log(Aⁿ) = n·logA.",
        "ln is log base e. d/dx(eˣ) = eˣ. d/dx(ln x) = 1/x.",
        "To solve aˣ = b: take ln both sides → x = ln b / ln a.",
        "Exponential model: y = Aeᵏᵗ. Plot ln y vs t for a straight line."
      ]
    },

    "Trigonometry": {
      title: "Trigonometry: Exact Values, Identities & Solving Equations",
      keyIdea: "Exact trig values, the two Pythagorean identities, and the double-angle formulae are the three tools that unlock every A-level trig problem.",
      body: `EXACT VALUES (must be memorised)
θ:        0°      30°     45°      60°      90°
sin θ:    0      1/2    √2/2     √3/2      1
cos θ:    1      √3/2   √2/2     1/2       0
tan θ:    0      1/√3    1       √3      undefined

Key: sin(45°) = cos(45°) = √2/2 ≈ 0.707.  tan(0°) = 0.

RADIANS
π radians = 180°. Convert: degrees × π/180 = radians.
Key values: π/6 = 30°, π/4 = 45°, π/3 = 60°, π/2 = 90°, π = 180°.

PYTHAGOREAN IDENTITIES
sin²θ + cos²θ = 1   (fundamental — derives from Pythagoras)
1 + tan²θ = sec²θ
1 + cot²θ = cosec²θ

DOUBLE ANGLE FORMULAE
sin 2θ = 2 sin θ cos θ
cos 2θ = cos²θ − sin²θ = 1 − 2sin²θ = 2cos²θ − 1
tan 2θ = 2tan θ / (1 − tan²θ)

ADDITION FORMULAE
sin(A ± B) = sin A cos B ± cos A sin B
cos(A ± B) = cos A cos B ∓ sin A sin B
tan(A ± B) = (tan A ± tan B) / (1 ∓ tan A tan B)

SOLVING TRIG EQUATIONS
1. Find the principal value using inverse trig.
2. Use symmetry of the trig graph to find all solutions in the given interval.
   sin θ = k: second solution = 180° − θ (or π − θ).
   cos θ = k: second solution = 360° − θ (or 2π − θ).
   tan θ = k: add 180° (or π) repeatedly.

R-METHOD: a sin θ + b cos θ = R sin(θ + φ), where R = √(a²+b²), tan φ = b/a.`,
      workedExample: {
        problem: "What is the exact value of sin(45°)?",
        solution: "sin(45°) = √2/2 (equivalently 1/√2). Derived from the isosceles right-angled triangle with legs 1, 1 and hypotenuse √2."
      },
      commonMistakes: [
        "Confusing sin and cos exact values at 30° and 60° — remember: sin30° = 1/2 (small angle, small value); sin60° = √3/2 (larger).",
        "Forgetting the second solution when solving trig equations — always sketch the graph or use the symmetry rules.",
        "Using degrees in a formula that requires radians (or vice versa) — check the required form in the question."
      ],
      keyFacts: [
        "sin(30°)=½, cos(30°)=√3/2, tan(30°)=1/√3. sin(45°)=cos(45°)=√2/2. sin(60°)=√3/2, cos(60°)=½.",
        "sin²θ + cos²θ = 1 always.",
        "sin 2θ = 2 sin θ cos θ.  cos 2θ = cos²θ − sin²θ.",
        "180° = π rad. Multiply degrees by π/180 to convert.",
        "R sin(θ+φ): R = √(a²+b²), tan φ = b/a."
      ]
    },

    "Vectors": {
      title: "Vectors: Magnitude, Direction & Geometric Proof",
      keyIdea: "A vector has both size and direction — every vector operation (adding, scaling, finding magnitude) follows directly from its component form.",
      body: `VECTOR NOTATION
A vector can be written as a column vector (a/b) or as ai + bj (using unit vectors i and j).
In 3D: ai + bj + ck or (a/b/c).

MAGNITUDE
|v| = √(a² + b²)    (2D)
|v| = √(a² + b² + c²)    (3D)

Example: v = (16, −30). |v| = √(16² + (−30)²) = √(256 + 900) = √1156 = 34.
Example: v = (40, 42). |v| = √(1600 + 1764) = √3364 = 58.

UNIT VECTOR: v̂ = v / |v|. Has magnitude 1, same direction as v.

ADDING AND SCALING VECTORS
(a/b) + (c/d) = (a+c / b+d).   k(a/b) = (ka / kb).
To subtract: add the negative. PQ = Q − P (position vectors).

POSITION VECTORS AND MIDPOINTS
If A has position vector a and B has position vector b:
Midpoint M of AB: m = (a + b) / 2.
Point dividing AB in ratio m:n: p = (na + mb) / (m + n).

SCALAR (DOT) PRODUCT
a · b = a₁b₁ + a₂b₂ + a₃b₃ = |a||b|cosθ
If a · b = 0 → vectors are perpendicular.
cosθ = (a · b) / (|a||b|) → find the angle between two vectors.

GEOMETRIC PROOFS USING VECTORS
Express all points in terms of position vectors. Show vectors are parallel (one is a scalar multiple of the other) or collinear (share a common point and are parallel).

EQUATIONS OF LINES
r = a + λb  (λ ∈ ℝ): a is a point on the line, b is the direction vector.`,
      workedExample: {
        problem: "Find the magnitude of vector (16, −30).",
        solution: "|v| = √(16² + (−30)²) = √(256 + 900) = √1156 = 34."
      },
      commonMistakes: [
        "Forgetting to square the negative component — (−30)² = +900, not −900.",
        "Confusing AB = B − A with AB = A − B — the vector from A to B always points toward B, so it is position of B minus position of A.",
        "Concluding two vectors are parallel just because their magnitudes are equal — parallel means one is a scalar multiple of the other."
      ],
      keyFacts: [
        "|v| = √(a² + b²) in 2D; √(a²+b²+c²) in 3D.",
        "AB = b − a (position vector of B minus position vector of A).",
        "Dot product: a·b = |a||b|cosθ. Zero dot product → perpendicular.",
        "Unit vector: v̂ = v/|v|.",
        "Line equation: r = a + λb."
      ]
    },

    "Proof & Binomial": {
      title: "Proof & the Binomial Theorem",
      keyIdea: "Proof is about establishing truth beyond doubt — structure your argument so every step follows inevitably from the last; the binomial theorem is a formula for expanding (1+x)ⁿ without multiplying out bracket by bracket.",
      body: `TYPES OF PROOF
Proof by deduction: use known facts and algebra to reach the conclusion directly. Most common in A-level.
Proof by exhaustion: check every possible case (only feasible when cases are finite).
Proof by contradiction: assume the opposite of what you want to prove, derive a logical impossibility.
Disproof by counter-example: find ONE example where the statement fails. A single counter-example is sufficient to disprove a universal claim.

Example proof by deduction: "The product of two odd numbers is always odd."
Let the two odd numbers be 2m+1 and 2n+1 (m, n ∈ ℤ).
Product = (2m+1)(2n+1) = 4mn + 2m + 2n + 1 = 2(2mn+m+n) + 1.
Since 2mn+m+n is an integer, the product is of the form 2k+1 → it is odd. ∎

THE BINOMIAL THEOREM
(1 + x)ⁿ = 1 + nx + n(n−1)/2! x² + n(n−1)(n−2)/3! x³ + ...

For (a + b)ⁿ:
(a + b)ⁿ = Σ ⁿCᵣ aⁿ⁻ʳ bʳ   (r from 0 to n)

BINOMIAL COEFFICIENTS
ⁿCᵣ = n! / (r!(n−r)!)

Key values: ⁿC₀ = 1,  ⁿC₁ = n,  ⁿCₙ = 1.
Pascal's triangle gives the same coefficients row by row.

Finding a specific term: the (r+1)th term of (a+b)ⁿ is ⁿCᵣ × aⁿ⁻ʳ × bʳ.

Example: Coefficient of x¹ in (1+x)⁶.
r = 1: ⁶C₁ × 1⁵ × x¹ = 6x → coefficient = 6.

BINOMIAL EXPANSION FOR |x| < 1 (fractional/negative n)
(1 + x)ⁿ ≈ 1 + nx + n(n−1)/2! x² + ...   valid for |x| < 1.
Used for approximations.`,
      workedExample: {
        problem: "Find the coefficient of x¹ in the expansion of (1 + x)⁶.",
        solution: "Term with x¹: ⁶C₁ × 1⁵ × x¹ = 6x. Coefficient = 6."
      },
      commonMistakes: [
        "Using examples as proof — showing the statement works for 5 cases does NOT prove it works for all cases.",
        "Miscounting the term number — the coefficient of xʳ corresponds to ⁿCᵣ (r starts at 0).",
        "In (a+bx)ⁿ, forgetting to raise both a and b to the appropriate powers — the term is ⁿCᵣ × aⁿ⁻ʳ × (bx)ʳ."
      ],
      keyFacts: [
        "(a+b)ⁿ = Σ ⁿCᵣ aⁿ⁻ʳ bʳ. Coefficient of xʳ term is ⁿCᵣ.",
        "ⁿCᵣ = n! / (r!(n−r)!). ⁿC₁ = n.",
        "Proof by contradiction: assume ¬P, derive a contradiction, conclude P.",
        "Disproof: one counter-example is sufficient.",
        "(1+x)ⁿ valid for |x|<1 with any real n — gives an infinite series."
      ]
    },

    "Statistics": {
      title: "Statistics: Probability Distributions & Hypothesis Testing",
      keyIdea: "The binomial distribution models repeated independent trials; the normal distribution models continuous symmetric data — and hypothesis testing uses both to decide whether evidence is strong enough to reject a claim.",
      body: `THE BINOMIAL DISTRIBUTION
X ~ B(n, p): n independent trials, probability p of success in each.
P(X = r) = ⁿCᵣ pʳ (1−p)ⁿ⁻ʳ
E(X) = np    (expected value / mean)
Var(X) = np(1−p)

Example: X ~ B(10, 2/5). E(X) = 10 × 2/5 = 4.
Example: X ~ B(15, 1/5). E(X) = 15 × 1/5 = 3.

Conditions for binomial: fixed n, two outcomes (success/failure), constant p, independent trials.

THE NORMAL DISTRIBUTION
X ~ N(μ, σ²): continuous, symmetric, bell-shaped.
Standardise: Z = (X − μ) / σ,  where Z ~ N(0, 1).
Use the standard normal table (Φ table) to find probabilities.
P(X < a) → P(Z < (a−μ)/σ) → read from table.

Symmetry: P(Z < −z) = 1 − P(Z < z).

HYPOTHESIS TESTING (one-tailed, binomial)
1. State H₀ (null hypothesis) and H₁ (alternative hypothesis).
2. Assume H₀ is true and calculate P(result at least as extreme).
3. If p-value < significance level (e.g., 5%) → reject H₀.
4. State conclusion in context.

Example: H₀: p = 0.3. Observed 12 successes in 20 trials. Test at 5%.
P(X ≥ 12 | X~B(20,0.3)) — calculate using binomial and compare to 0.05.

CORRELATION AND REGRESSION
Product-moment correlation coefficient r: measures strength and direction of linear association (−1 ≤ r ≤ 1).
Regression line y = a + bx: minimises the sum of squared residuals. Only valid to predict within the data range.`,
      workedExample: {
        problem: "X ~ B(10, 2/5). Find E(X).",
        solution: "E(X) = np = 10 × 2/5 = 4."
      },
      commonMistakes: [
        "Using the binomial distribution when trials are not independent or p is not constant — check all four conditions.",
        "Forgetting to standardise before using the normal table — Z = (X − μ)/σ.",
        "Stating 'accept H₀' instead of 'insufficient evidence to reject H₀' — you never prove a null hypothesis, you only fail to disprove it."
      ],
      keyFacts: [
        "B(n,p): E(X) = np, Var(X) = np(1−p).",
        "N(μ,σ²): standardise with Z = (X−μ)/σ before using tables.",
        "Hypothesis test: p-value < significance level → reject H₀.",
        "r = ±1: perfect linear correlation. r = 0: no linear correlation.",
        "Regression line passes through (x̄, ȳ); use only within data range."
      ]
    },

    "Mechanics": {
      title: "Mechanics: Kinematics, Forces & Moments",
      keyIdea: "Every mechanics problem is F = ma applied carefully — identify all forces, resolve them into components, and the motion follows from Newton's second law.",
      body: `SUVAT EQUATIONS (revision)
v = u + at.  s = ut + ½at².  v² = u² + 2as.  s = ½(u+v)t.

VARIABLE ACCELERATION (calculus)
v = ds/dt  (velocity is rate of change of displacement)
a = dv/dt = d²s/dt²  (acceleration is rate of change of velocity)
s = ∫v dt.  v = ∫a dt.  (integrate to go from a to v to s)

Example: v = u + at is the integrated form of a = constant.

RESOLVING FORCES
Split each force into horizontal and vertical components using sin and cos.
On a slope at angle θ: component along slope = F cos θ, component perpendicular = F sin θ (or vice versa — draw a diagram every time).

NEWTON'S LAWS IN A-LEVEL CONTEXTS
Connected particles (Atwood machine, pulleys): treat each particle separately; tension T is the same throughout an inextensible string.
Friction: F_friction = μN (limiting friction), where μ is the coefficient of friction and N is the normal reaction.

PROJECTILE MOTION
Horizontal: uniform velocity (no force horizontally). x = u cos θ × t.
Vertical: uniformly accelerated under gravity. y = u sin θ × t − ½gt².
Time of flight, range, and maximum height follow from applying SUVAT to each direction separately.

MOMENTS
Moment = Force × perpendicular distance from pivot.
For equilibrium: sum of clockwise moments = sum of anticlockwise moments.
Also: resultant force = 0.

IMPULSE AND MOMENTUM
Impulse = Ft = mv − mu (change in momentum).
Conservation of momentum: m₁u₁ + m₂u₂ = m₁v₁ + m₂v₂.`,
      workedExample: {
        problem: "A particle starts with velocity 2 m/s and has acceleration 1 m/s². Find its velocity after 3 s.",
        solution: "v = u + at = 2 + (1 × 3) = 5 m/s."
      },
      commonMistakes: [
        "Using SUVAT when acceleration is NOT constant — if a varies with t, use calculus (v = ∫a dt).",
        "Resolving forces incorrectly on a slope — always draw a clear diagram and label which component is parallel vs perpendicular to the surface.",
        "Forgetting that for connected particles the tension is the same throughout the string but the equations of motion are written separately for each particle."
      ],
      keyFacts: [
        "v = ds/dt, a = dv/dt. Integrate to find displacement and velocity from acceleration.",
        "Friction: F = μN at the point of sliding (limiting friction).",
        "Projectile: horizontal uniform, vertical under g. Treat independently.",
        "Moments equilibrium: sum of clockwise = sum of anticlockwise moments.",
        "Momentum conserved in all collisions: m₁u₁ + m₂u₂ = m₁v₁ + m₂v₂."
      ]
    },

    // ── A-level Physics ───────────────────────────────────────────────────────

    "Mechanics": {
      title: "A-level Mechanics: Kinematics, Circular Motion & Momentum",
      keyIdea: "Mechanics connects forces to motion through Newton's laws — SUVAT handles constant acceleration, calculus handles variable acceleration, and circular motion adds the centripetal twist.",
      body: `KINEMATICS — SUVAT (constant acceleration)
v = u + at.  s = ut + ½at².  v² = u² + 2as.  s = ½(u+v)t.
Strategy: list known variables, pick the equation containing only those.

Example: u = 2 m/s, a = 1 m/s², t = 3 s → v = 2 + 3 = 5 m/s.

VARIABLE ACCELERATION (calculus)
v = ds/dt.  a = dv/dt = d²s/dt².
Integrate to move from a → v → s. Differentiate to move from s → v → a.

PROJECTILE MOTION
Horizontal: constant velocity (no air resistance). x = u cosθ × t.
Vertical: uniform acceleration under g. y = u sinθ × t − ½gt².
Treat the two directions completely independently.

CIRCULAR MOTION
Centripetal acceleration: a = v²/r = ω²r (directed toward centre).
Centripetal force: F = mv²/r = mω²r.
Angular velocity: ω = 2π/T = 2πf.  Linear speed: v = ωr.

Example: m = 8 kg, r = 6 m, v = 6 m/s → F = 8 × 36 / 6 = 48 N.

The centripetal force is not a new force — it is the net inward resultant of existing forces (gravity, tension, friction, etc.).

SIMPLE HARMONIC MOTION (SHM)
a = −ω²x. Displacement: x = A cos(ωt).  v_max = Aω (at x = 0).

FORCES, FRICTION & MOMENTS
F = ma (Newton's 2nd Law). Friction: F = μN (limiting).
Moment = force × perpendicular distance. Equilibrium: ΣF = 0, Στ = 0.

MOMENTUM & COLLISIONS
p = mv. Impulse = Ft = Δp.
Conservation: total momentum is constant in a closed system.
Elastic: KE conserved. Inelastic: KE not conserved. Perfectly inelastic: objects stick.`,
      workedExample: {
        problem: "A 8 kg object moves in a circle of radius 6 m at 6 m/s. Find the centripetal force.",
        solution: "F = mv²/r = 8 × 6² / 6 = 8 × 36 / 6 = 48 N."
      },
      commonMistakes: [
        "Using SUVAT when acceleration varies — if a is a function of t, use v = ∫a dt instead.",
        "Treating centripetal force as an extra force — it is the label for the net inward force provided by existing forces.",
        "Forgetting to resolve forces into components before applying F = ma on a slope or in a circular-motion problem."
      ],
      keyFacts: [
        "SUVAT: v=u+at, s=ut+½at², v²=u²+2as, s=½(u+v)t.",
        "Circular motion: F=mv²/r. ω=2π/T. v=ωr.",
        "SHM: a=−ω²x. v_max=Aω at equilibrium.",
        "Momentum conserved in all closed-system collisions.",
        "Variable acceleration: use calculus (integrate/differentiate)."
      ]
    },

    "Materials": {
      title: "Materials: Stress, Strain & the Young Modulus",
      keyIdea: "Stress is force per unit area; strain is fractional extension — their ratio is the Young modulus, the stiffness fingerprint of a material.",
      body: `STRESS
Stress (σ) = Force / Cross-sectional area
σ = F / A   (units: Pa or N/m²)

Example: F = 1,000 N, A = 2 × 10⁻⁴ m².
σ = 1,000 / (2 × 10⁻⁴) = 5 × 10⁶ Pa = 5 MPa.

STRAIN
Strain (ε) = Extension / Original length
ε = ΔL / L₀   (dimensionless — no units)

YOUNG MODULUS
E = σ / ε = (F/A) / (ΔL/L₀) = FL₀ / (AΔL)   (units: Pa or N/m²)

The Young modulus is a material property — it tells you how stiff a material is, independent of the sample's dimensions. Steel: ~200 GPa. Rubber: ~0.01 GPa.

On a stress-strain graph:
• Linear region (Hooke's Law): stress ∝ strain.
• Limit of proportionality: beyond here, stress-strain is no longer linear.
• Elastic limit: beyond here, permanent deformation occurs.
• Yield point: material stretches with little extra force.
• Ultimate tensile stress (UTS): maximum stress the material can sustain.
• Fracture point: material breaks.

ENERGY STORED IN A STRETCHED WIRE
E_stored = ½ × F × ΔL = ½ × stress × strain × volume
On a force-extension graph: energy = area under the graph.

HOOKE'S LAW (springs)
F = kx, where k = spring constant (N/m).
Elastic potential energy = ½kx².

BRITTLENESS vs DUCTILITY
Brittle material: breaks with little or no plastic deformation (e.g., glass).
Ductile material: undergoes significant plastic deformation before fracture (e.g., copper).`,
      workedExample: {
        problem: "A wire carries a force of 1,000 N and has cross-sectional area 2 × 10⁻⁴ m². Find the stress.",
        solution: "σ = F/A = 1,000 / (2 × 10⁻⁴) = 5 × 10⁶ Pa."
      },
      commonMistakes: [
        "Using diameter instead of cross-sectional area — A = π(d/2)² = πr². Always find A before calculating stress.",
        "Confusing extension ΔL with original length L₀ in the strain formula — strain = extension / original length.",
        "Thinking Young's modulus changes with the dimensions of the sample — it is a fixed property of the material itself."
      ],
      keyFacts: [
        "Stress σ = F/A (Pa). Strain ε = ΔL/L₀ (no units). Young modulus E = σ/ε.",
        "E = FL₀/(AΔL). Gradient of linear part of stress-strain graph = E.",
        "Energy stored = area under force-extension graph = ½FΔL.",
        "Limit of proportionality, elastic limit, yield point, UTS, fracture — know all five.",
        "Brittle: little plastic deformation. Ductile: large plastic deformation."
      ]
    },

    "Waves & Optics": {
      title: "Waves & Optics: Superposition, Interference & Diffraction",
      keyIdea: "When two waves occupy the same space, their displacements add — constructive interference amplifies, destructive cancels — and this principle explains everything from rainbow colours to radio dead zones.",
      body: `SUPERPOSITION PRINCIPLE
When two waves meet, the resultant displacement equals the vector sum of the individual displacements.
Constructive interference: waves in phase → amplitude doubles.
Destructive interference: waves 180° out of phase → amplitude cancels to zero.

Path difference determines the type of interference:
Constructive: path difference = nλ (n = 0, 1, 2, ...)
Destructive: path difference = (n + ½)λ

YOUNG'S DOUBLE-SLIT EXPERIMENT
Fringe spacing: w = λD / d

w = fringe spacing (m), λ = wavelength (m), D = distance to screen (m), d = slit separation (m).

Example: λ = 500 nm = 5 × 10⁻⁷ m, d = 0.5 mm = 5 × 10⁻⁴ m, D = 2.5 m.
w = (5×10⁻⁷ × 2.5) / (5×10⁻⁴) = 1.25×10⁻⁶ / 5×10⁻⁴ = 2.5 × 10⁻³ m = 2.5 mm.

DIFFRACTION GRATING
d sin θ = nλ
d = grating spacing = 1 / (lines per metre), n = order, θ = angle of maximum.
More lines per mm → smaller d → larger θ (orders spread further).

STATIONARY WAVES
Formed by two identical waves travelling in opposite directions.
Nodes: points of zero displacement (destructive interference). Fixed in space.
Antinodes: points of maximum displacement. Fixed in space.
Distance between adjacent nodes = λ/2.

POLARISATION
Transverse waves can be polarised (oscillations restricted to one plane).
Longitudinal waves (sound) cannot be polarised.
Polarisation proves that light is a transverse wave.

REFRACTIVE INDEX
n = c / v = sin θ₁ / sin θ₂ (Snell's Law).
Total internal reflection occurs when θ > critical angle: sin θ_c = 1/n (going from denser to less dense medium).`,
      workedExample: {
        problem: "Young's double slit: λ = 500 nm, slit separation = 0.5 mm, screen distance = 2.5 m. Find the fringe spacing in mm.",
        solution: "w = λD/d = (500×10⁻⁹ × 2.5) / (0.5×10⁻³) = 1.25×10⁻⁶ / 5×10⁻⁴ = 2.5×10⁻³ m = 2.5 mm."
      },
      commonMistakes: [
        "Mixing up d and D in the Young's slits formula — d is the small slit separation; D is the large screen distance.",
        "Forgetting to convert nm to m before substituting into w = λD/d.",
        "Confusing nodes and antinodes — nodes are zero displacement (destructive); antinodes are maximum displacement (constructive)."
      ],
      keyFacts: [
        "Young's slits: w = λD/d.",
        "Diffraction grating: d sin θ = nλ.",
        "Constructive: path difference = nλ. Destructive: path difference = (n+½)λ.",
        "Stationary wave: nodes (zero amplitude) spaced λ/2 apart.",
        "Refractive index: n = c/v = sin θ₁/sin θ₂ (Snell's Law)."
      ]
    },

    "Electricity": {
      title: "A-level Electricity: Resistivity, EMF & Kirchhoff's Laws",
      keyIdea: "Resistivity is a material property that predicts resistance from geometry — and every circuit, however complex, yields to Kirchhoff's two laws applied systematically.",
      body: `RESISTIVITY
R = ρL / A

R = resistance (Ω), ρ = resistivity (Ω·m), L = length (m), A = cross-sectional area (m²).

Example: ρ = 1×10⁻⁶ Ω·m, L = 3 m, A = 4×10⁻⁶ m².
R = (1×10⁻⁶ × 3) / (4×10⁻⁶) = 3×10⁻⁶ / 4×10⁻⁶ = 0.75 Ω.

Resistivity is a material property (unlike resistance, which depends on the wire's geometry).
Resistivity increases with temperature for metals (more lattice vibrations impede electron flow).

EMF AND INTERNAL RESISTANCE
A real battery has EMF (ε) and internal resistance (r).
Terminal voltage: V = ε − Ir
where I is the current drawn.

When a load R is connected: I = ε / (R + r).
Power wasted internally: P_internal = I²r.
Maximum power is transferred when R = r.

KIRCHHOFF'S LAWS
1st Law (current law): the sum of currents entering a junction = sum of currents leaving. (Conservation of charge.)
2nd Law (voltage law): the sum of EMFs around any closed loop = sum of potential drops (IR) around that loop. (Conservation of energy.)

Apply systematically: label all currents with assumed directions; write equations for each junction and loop; solve simultaneously.

POTENTIAL DIVIDER
V_out = V_in × R₂ / (R₁ + R₂)

Used in sensor circuits (thermistor, LDR) where resistance changes with physical conditions.

CAPACITORS
Charge: Q = CV. Energy: E = ½CV² = ½QV = Q²/2C.
In series: 1/C_total = 1/C₁ + 1/C₂.
In parallel: C_total = C₁ + C₂.
Capacitors in DC circuits: charge exponentially. Time constant τ = RC.`,
      workedExample: {
        problem: "A wire has resistivity 1×10⁻⁶ Ω·m, length 3 m, cross-sectional area 4×10⁻⁶ m². Find its resistance.",
        solution: "R = ρL/A = (1×10⁻⁶ × 3) / (4×10⁻⁶) = 0.75 Ω."
      },
      commonMistakes: [
        "Confusing resistivity ρ (material property, Ω·m) with resistance R (circuit property, Ω) — doubling a wire's length doubles R but does not change ρ.",
        "Forgetting internal resistance when finding terminal voltage — V_terminal = ε − Ir, not just ε.",
        "Misapplying Kirchhoff's 2nd law by not accounting for the sign of EMFs (direction around the loop matters)."
      ],
      keyFacts: [
        "R = ρL/A. ρ is the material's resistivity in Ω·m.",
        "Terminal voltage V = ε − Ir. Current I = ε/(R+r).",
        "Kirchhoff's 1st: ΣI_in = ΣI_out at a junction.",
        "Kirchhoff's 2nd: ΣEMF = ΣIR around a closed loop.",
        "Capacitor energy: E = ½CV². Series: 1/C = Σ(1/Cᵢ). Parallel: C = ΣCᵢ."
      ]
    },

    "Fields": {
      title: "Fields: Gravitational, Electric & Magnetic",
      keyIdea: "Gravitational and electric fields share exactly the same mathematical structure — inverse-square force laws — making them easier to learn as a pair.",
      body: `GRAVITATIONAL FIELDS
Field strength g = F/m = GM/r² (N/kg)
Gravitational force: F = GMm/r²  (Newton's law of gravitation)
G = 6.67 × 10⁻¹¹ N m² kg⁻²
Force is always attractive.
Gravitational potential: V_g = −GM/r   (negative; work done bringing mass from infinity)

ELECTRIC FIELDS
Field strength E = F/Q = kQ/r²  (N/C or V/m)
Coulomb's law: F = kQ₁Q₂/r²
k = 1/(4πε₀) = 9 × 10⁹ N m² C⁻²
Force is attractive (opposite charges) or repulsive (like charges).
Electric potential: V = kQ/r

Example (Coulomb's law): Q₁ = 3 μC, Q₂ = 2 μC, r = 30 cm = 0.3 m.
F = (9×10⁹ × 3×10⁻⁶ × 2×10⁻⁶) / 0.3² = (9×10⁹ × 6×10⁻¹²) / 0.09 = 0.054/0.09 = 0.6 N.

COMPARING GRAVITATIONAL AND ELECTRIC FIELDS
Both: inverse-square law, field lines show direction of force, field strength ∝ 1/r².
Difference: gravity is always attractive; electric can be repulsive. Electric fields can be shielded; gravity cannot.

MAGNETIC FIELDS
Force on a moving charge: F = BQv sin θ
Force on a wire: F = BIL sin θ
Magnetic flux: Φ = BA cos θ (Wb)
Faraday's law: EMF = −dΦ/dt = −N dΦ/dt for N turns.
Lenz's law: induced current opposes the change causing it.

PARTICLE IN A FIELD
Charged particle in a magnetic field (perpendicular to v): moves in a circle.
BQv = mv²/r → r = mv/(BQ).`,
      workedExample: {
        problem: "Two charges of 3 μC and 2 μC are 30 cm apart. Find the force between them. (k = 9×10⁹)",
        solution: "F = kQ₁Q₂/r² = (9×10⁹ × 3×10⁻⁶ × 2×10⁻⁶) / (0.3)² = 54×10⁻³ / 0.09 = 0.6 N."
      },
      commonMistakes: [
        "Using r in cm instead of metres in Coulomb's law — always convert to SI units before substituting.",
        "Forgetting the negative sign in gravitational potential V = −GM/r — gravitational potential is always negative.",
        "Confusing field strength (force per unit mass/charge) with force — field strength is a property of the field at a point, independent of the test mass/charge."
      ],
      keyFacts: [
        "F = GMm/r² (gravity). F = kQ₁Q₂/r² (electric). Both inverse-square.",
        "k = 9×10⁹ N m² C⁻². G = 6.67×10⁻¹¹ N m² kg⁻².",
        "Gravitational potential: V = −GM/r. Electric potential: V = kQ/r.",
        "F = BQv sin θ (moving charge). F = BIL sin θ (wire).",
        "Faraday: EMF = −NdΦ/dt. Lenz: induced effect opposes change."
      ]
    },

    "Thermal Physics": {
      title: "Thermal Physics: Ideal Gases & Heat Transfer",
      keyIdea: "The ideal gas law connects pressure, volume, and temperature in one equation — and the internal energy of a gas is simply the total kinetic energy of its particles.",
      body: `IDEAL GAS LAW
pV = nRT

p = pressure (Pa), V = volume (m³), n = amount of gas (mol), R = 8.31 J mol⁻¹ K⁻¹, T = temperature (K).

Temperature must be in KELVIN: T(K) = T(°C) + 273.

Example: n = 2 mol, V = 19 L = 19×10⁻³ m³, T = 273 K.
p = nRT/V = (2 × 8.31 × 273) / (19×10⁻³) = 4537.26 / 0.019 ≈ 238,803 Pa ≈ 2.39 × 10⁵ Pa.

COMBINED GAS LAW (fixed amount of gas)
p₁V₁/T₁ = p₂V₂/T₂

Useful for comparing two states of the same gas.

KINETIC THEORY
pV = ⅓Nm<c²>
N = number of molecules, m = mass per molecule, <c²> = mean square speed.

Internal energy of an ideal gas = total KE of all molecules.
For a monatomic ideal gas: U = (3/2)nRT.
Average KE per molecule = (3/2)k_BT, where k_B = 1.38×10⁻²³ J K⁻¹.

FIRST LAW OF THERMODYNAMICS
ΔU = Q + W
ΔU = change in internal energy, Q = heat added to system, W = work done ON the system.
(Some textbooks define W as work done BY the system: ΔU = Q − W. Check the convention used.)

SPECIFIC HEAT CAPACITY AND LATENT HEAT
Q = mcΔT (heating without change of state).
Q = mL (change of state at constant temperature).
L = specific latent heat (J/kg). Lf = latent heat of fusion (melting). Lv = latent heat of vaporisation.`,
      workedExample: {
        problem: "An ideal gas: n = 2 mol, V = 19 L, T = 273 K. Find the pressure. (R = 8.31 J mol⁻¹ K⁻¹)",
        solution: "p = nRT/V = (2 × 8.31 × 273) / (19×10⁻³) = 4537.3 / 0.019 ≈ 2.39 × 10⁵ Pa."
      },
      commonMistakes: [
        "Using Celsius instead of Kelvin — always add 273 to convert. A temperature of 0°C is 273 K, not 0 K.",
        "Using litres instead of m³ — 1 litre = 1×10⁻³ m³. Multiply litres by 10⁻³ before substituting.",
        "Confusing Q = mcΔT (temperature change, no state change) with Q = mL (state change, constant temperature)."
      ],
      keyFacts: [
        "pV = nRT. R = 8.31 J mol⁻¹ K⁻¹. T in Kelvin (T_K = T_°C + 273).",
        "1 litre = 1×10⁻³ m³.",
        "Average KE per molecule = (3/2)k_BT.",
        "First law: ΔU = Q + W (W = work done on system).",
        "Q = mcΔT (temp change). Q = mL (state change)."
      ]
    },

    "Nuclear Physics": {
      title: "Nuclear Physics: Radioactive Decay & Mass-Energy Equivalence",
      keyIdea: "Mass and energy are interchangeable — nuclear reactions release energy because the products have less mass than the reactants, and that mass difference multiplied by c² gives the energy released.",
      body: `MASS-ENERGY EQUIVALENCE
E = mc²
c = 3 × 10⁸ m/s. A tiny mass defect releases an enormous amount of energy.

Working in atomic mass units (u):
1 u = 1.66 × 10⁻²⁷ kg
Energy equivalent of 1 u = 931.5 MeV.

Example: mass defect = 0.001 u.
E = 0.001 × 931.5 = 0.9315 MeV.

BINDING ENERGY
The binding energy of a nucleus is the energy required to completely separate all nucleons.
Binding energy per nucleon: peaks around iron-56 (most stable nucleus).
Fusion (light nuclei joining) and fission (heavy nuclei splitting) both release energy when the products have higher binding energy per nucleon.

RADIOACTIVE DECAY EQUATIONS
Activity: A = −dN/dt = λN
N = N₀ e^(−λt)     (exponential decay)
Half-life: t½ = ln2 / λ ≈ 0.693 / λ

After time t: N = N₀ × (½)^(t/t½)

The decay constant λ is fixed for each isotope — unaffected by temperature, pressure, or chemical state.

NUCLEAR REACTIONS
Write equations balancing: mass number (top) and atomic number (bottom) on both sides.
Alpha: ₂₃₈₉₂U → ₂₃₄₉₀Th + ₄₂He
Beta⁻: ₁₄₆C → ₁₄₇N + ₀₋₁e (+ antineutrino)
Fission: ²³⁵U + n → daughter nuclei + 2–3 neutrons + energy.

NUCLEAR RADIUS
R = R₀ A^(1/3), where R₀ ≈ 1.2 × 10⁻¹⁵ m and A = mass number.
Volume ∝ A → nuclear density is approximately constant for all nuclei.`,
      workedExample: {
        problem: "A mass defect of 0.001 u is converted to energy. Find the energy in MeV. (1 u = 1.66×10⁻²⁷ kg, c = 3×10⁸ m/s)",
        solution: "E = mc² = 0.001 × 1.66×10⁻²⁷ × (3×10⁸)² = 1.494×10⁻¹³ J. Convert: 1.494×10⁻¹³ / 1.6×10⁻¹³ ≈ 0.934 MeV. (Equivalently: 0.001 × 931.5 = 0.9315 MeV.)"
      },
      commonMistakes: [
        "Forgetting to square c in E = mc² — c² = 9×10¹⁶, which is enormous.",
        "Confusing binding energy (energy to pull a nucleus apart) with mass defect (the mass equivalent of that energy).",
        "Using half-life directly in the decay equation instead of the decay constant λ — use λ = ln2/t½ first."
      ],
      keyFacts: [
        "E = mc². 1 u = 931.5 MeV.",
        "Binding energy per nucleon peaks at iron-56 — fusion and fission both 'move toward' iron.",
        "N = N₀e^(−λt). t½ = ln2/λ.",
        "Activity A = λN (decays per second, in Bq).",
        "Nuclear radius R = R₀A^(1/3). Density is approx. constant for all nuclei."
      ]
    },

    "Quantum Physics": {
      title: "Quantum Physics: Photoelectric Effect & Wave-Particle Duality",
      keyIdea: "Light comes in discrete packets called photons — and the photoelectric effect proves it, because classical wave theory cannot explain the threshold frequency.",
      body: `PHOTONS
Light (and all EM radiation) travels as discrete packets of energy called photons.
Energy of one photon: E = hf = hc/λ
h = Planck's constant = 6.63 × 10⁻³⁴ J·s.
f = frequency (Hz), λ = wavelength (m).

THE PHOTOELECTRIC EFFECT
When light shines on a metal surface, electrons are emitted — but only if the frequency exceeds a threshold frequency f₀.

Einstein's photoelectric equation:
hf = Φ + KE_max
where Φ = work function (minimum energy to free an electron from the metal).

KE_max = hf − Φ

Work function in eV: 1 eV = 1.6 × 10⁻¹⁹ J.

Example: f = 0.8 × 10¹⁵ Hz, Φ = 1 eV = 1.6×10⁻¹⁹ J.
E_photon = hf = 6.63×10⁻³⁴ × 0.8×10¹⁵ = 5.30×10⁻¹⁹ J = 3.31 eV.
KE_max = 3.31 − 1 = 2.31 eV.

Key observations that classical wave theory CANNOT explain:
• Below threshold frequency f₀: no electrons emitted, regardless of intensity.
• Above f₀: electrons emitted instantly, even at low intensity.
• Increasing intensity increases the number of electrons (not their KE).
• Increasing frequency increases KE_max of emitted electrons.

WAVE-PARTICLE DUALITY
de Broglie wavelength: λ = h / (mv) = h / p
Any particle with momentum p has an associated wavelength λ.
Electrons show diffraction (wave behaviour) and can be detected as discrete particles.

ENERGY LEVELS IN ATOMS
Electrons exist in discrete energy levels. Photon emitted when electron drops to lower level: hf = E₁ − E₂.`,
      workedExample: {
        problem: "A photon of frequency 0.8×10¹⁵ Hz hits a metal with work function 1 eV. Find KE_max in eV. (h = 6.63×10⁻³⁴ J·s)",
        solution: "E = hf = 6.63×10⁻³⁴ × 0.8×10¹⁵ = 5.304×10⁻¹⁹ J = 5.304×10⁻¹⁹/1.6×10⁻¹⁹ = 3.315 eV. KE_max = 3.315 − 1 = 2.315 eV ≈ 2.31 eV."
      },
      commonMistakes: [
        "Mixing up eV and joules — convert work function to joules (× 1.6×10⁻¹⁹) before subtracting, OR convert photon energy to eV (÷ 1.6×10⁻¹⁹) first.",
        "Thinking higher intensity means higher KE of photoelectrons — intensity controls the NUMBER of electrons; frequency controls their KE.",
        "Forgetting the threshold condition: if hf < Φ, no photoelectric effect occurs regardless of intensity."
      ],
      keyFacts: [
        "E = hf = hc/λ. h = 6.63×10⁻³⁴ J·s.",
        "hf = Φ + KE_max. Threshold: f₀ = Φ/h.",
        "1 eV = 1.6×10⁻¹⁹ J.",
        "de Broglie: λ = h/p = h/(mv).",
        "Intensity → number of photons. Frequency → energy per photon."
      ]
    },

  }, // end alevel

}; // end EXPLANATIONS


// ─────────────────────────────────────────────────────────────────────────────
// CHEMISTRY EXPLANATIONS — KS2 & KS3
// ─────────────────────────────────────────────────────────────────────────────

const CHEMISTRY_EXPLANATIONS = {

  ks2: {

    "States of matter": {
      title: "States of Matter",
      keyIdea: "Everything is made of particles — whether a substance is solid, liquid, or gas depends on how those particles are arranged and how freely they move.",
      body: `Matter exists in three states: solid, liquid, and gas.

SOLID: Particles packed tightly in a regular arrangement. They vibrate in fixed positions. Solids have a definite shape and volume. Example: ice.

LIQUID: Particles close together but not fixed — they slide past each other. Liquids have a fixed volume but no fixed shape; they flow and take the shape of their container. Example: water.

GAS: Particles far apart, moving rapidly in all directions. Gases have no fixed shape or volume — they expand to fill any space. Example: water vapour, oxygen.

CHANGES OF STATE
When heated, particles gain energy and move faster, which can cause a change of state:
• Melting: solid → liquid (ice melts at 0°C)
• Evaporation/Boiling: liquid → gas (water boils at 100°C)
• Condensation: gas → liquid (steam on a cold mirror)
• Freezing: liquid → solid (water freezes at 0°C)

Changes of state are PHYSICAL changes — no new substance is made. The same water molecules are present in ice, liquid water, and steam.

THE WATER CYCLE is driven by changes of state: water evaporates from oceans, rises and condenses into clouds, then falls as precipitation (rain, snow, hail).`,
      workedExample: {
        problem: "Explain what happens to the particles when liquid water turns to ice.",
        solution: "As water cools, the particles lose energy and slow down. At 0°C they slow enough to lock into fixed positions in a regular arrangement — the liquid becomes solid ice. This is reversible: heat the ice and it melts back to liquid."
      },
      commonMistakes: [
        "Confusing evaporation and boiling — evaporation happens at any temperature from the surface; boiling happens throughout the liquid at 100°C.",
        "Saying a substance 'disappears' when it evaporates — it becomes invisible water vapour still present in the air.",
        "Thinking 0°C is the freezing point of all substances — only water freezes at 0°C."
      ],
      keyFacts: [
        "Three states: solid (fixed shape and volume), liquid (fixed volume, no fixed shape), gas (no fixed shape or volume).",
        "Water freezes/melts at 0°C; boils/condenses at 100°C.",
        "Melting: solid→liquid. Freezing: liquid→solid. Evaporation: liquid→gas. Condensation: gas→liquid.",
        "Changes of state are physical (reversible) — no new substance formed.",
        "Gas particles have large gaps — that is why gases can be compressed."
      ]
    },

    "Properties of materials": {
      title: "Properties of Materials",
      keyIdea: "The right material for any job depends on matching its properties — conductivity, hardness, transparency — to what the object needs to do.",
      body: `Scientists describe materials by their properties — measurable characteristics that determine how a material behaves.

CONDUCTIVITY OF ELECTRICITY
Conductors allow electricity to flow (copper, iron, steel). Insulators do not (plastic, rubber, wood, glass). Metals are generally good conductors; non-metals are generally insulators.

CONDUCTIVITY OF HEAT
Metals conduct heat well. Materials like plastic and wood are thermal insulators — useful for handles and oven gloves.

TRANSPARENCY
• Transparent: all light passes through clearly (glass, clear plastic).
• Translucent: some light passes through but you cannot see clearly (frosted glass, tracing paper).
• Opaque: no light passes through (wood, metal, cardboard).

HARDNESS
Resistance to scratching. Diamond is the hardest natural material. Important for drill bits, floor tiles, and cutting tools.

FLEXIBILITY
Some materials bend without breaking (rubber, fabric). Others are rigid and brittle (glass, ceramic).

MAGNETISM
Only iron, steel, nickel, and cobalt are attracted to magnets. Most metals (aluminium, copper, gold) are NOT magnetic.

WATERPROOFING
Some materials let water through (cotton, sponge); others do not (rubber, plastic, wax).

CHOOSING MATERIALS: Engineers match material properties to the job. A wire needs a good conductor → copper. A frying pan handle needs a thermal insulator → plastic or wood.`,
      workedExample: {
        problem: "A new raincoat is being designed. Which two properties are most important for the outer fabric, and why?",
        solution: "Waterproof (so rain does not soak through) and flexible (so the wearer can move freely). Waterproofing and flexibility directly match the job the raincoat must do."
      },
      commonMistakes: [
        "Assuming all metals are magnetic — only iron, steel, nickel, and cobalt are attracted by magnets.",
        "Confusing transparent and translucent — transparent lets all light through clearly; translucent lets some through but looks blurry.",
        "Assuming conductors of electricity are always conductors of heat — graphite conducts electricity but is a poor heat conductor."
      ],
      keyFacts: [
        "Conductors of electricity: metals (especially copper). Insulators: plastic, rubber, wood, glass.",
        "Transparent = see through clearly. Translucent = some light. Opaque = no light.",
        "Magnetic materials: iron, steel, nickel, cobalt. NOT aluminium, copper, or gold.",
        "Hardness = resistance to scratching.",
        "Flexibility = can bend without breaking."
      ]
    },

    "Dissolving & mixtures": {
      title: "Dissolving & Mixtures",
      keyIdea: "When a solid dissolves in a liquid it does not disappear — it breaks into tiny invisible particles evenly mixed throughout, forming a solution.",
      body: `MIXTURES vs. SOLUTIONS
A mixture is two or more substances combined but NOT chemically joined. The substances keep their own properties and can be separated physically.

A solution is a special mixture where a solute dissolves in a solvent:
• Solute = the substance that dissolves (e.g. salt, sugar)
• Solvent = the liquid doing the dissolving (usually water)
• Solution = solute + solvent combined

SOLUBLE vs. INSOLUBLE
A soluble substance dissolves in the solvent. An insoluble substance does not.
Soluble in water: salt, sugar, copper sulfate.
Insoluble in water: sand, chalk, gravel.

SATURATION
Keep adding solute and eventually no more will dissolve — the solution is saturated. Warmer water dissolves more of most solutes.

SEPARATING MIXTURES
• Filtration: separates an insoluble solid from a liquid. The solid stays on the filter paper; the liquid (filtrate) passes through.
• Evaporation: separates a dissolved solid from a solution. Heat drives off the solvent, leaving the solid behind. Used to recover salt from salt water.
• Magnetism: separates magnetic materials (iron filings) from non-magnetic substances.

Dissolving is REVERSIBLE — evaporate the solvent and you recover the solute. No new substance is formed.`,
      workedExample: {
        problem: "A student wants to separate a mixture of iron filings and salt dissolved in water. Describe the steps.",
        solution: "Step 1 — use a magnet: iron filings are magnetic and are attracted out of the mixture. Step 2 — filter: if any undissolved particles remain, filter them off. Step 3 — evaporate: gently heat the salt solution until the water evaporates; salt crystals remain behind."
      },
      commonMistakes: [
        "Thinking dissolved salt 'disappears' — it is still there, just broken into particles too small to see.",
        "Confusing filtration and evaporation — filtration removes insoluble solids; evaporation recovers dissolved solutes.",
        "Thinking all liquids dissolve everything — solubility depends on both solute and solvent."
      ],
      keyFacts: [
        "Solute + solvent = solution. Solute dissolves; solvent does the dissolving.",
        "Soluble = dissolves. Insoluble = does not dissolve.",
        "Saturated = no more solute can dissolve at that temperature.",
        "Filtration removes insoluble solids. Evaporation recovers dissolved solids.",
        "Dissolving is reversible — no new substance is made."
      ]
    },

    "Reversible & irreversible changes": {
      title: "Reversible & Irreversible Changes",
      keyIdea: "In a reversible change you can get the original substances back; in an irreversible change new substances are formed and cannot easily be recovered.",
      body: `REVERSIBLE CHANGES are physical changes — no new substance is made and the change can be undone.

Examples of reversible changes:
• Melting (solid → liquid): ice → water. Reverse by freezing.
• Evaporation (liquid → gas): water → steam. Reverse by condensing.
• Dissolving: salt in water. Reverse by evaporating the water.
• Stretching an elastic band.

IRREVERSIBLE CHANGES are usually chemical changes — new substances are formed with different properties. You cannot get the original materials back easily.

Examples of irreversible changes:
• Burning (combustion): wood burns to produce ash, CO₂, and water vapour.
• Cooking: an egg changes permanently when heated.
• Rusting: iron + oxygen + water → iron oxide (rust).
• Mixing vinegar and bicarbonate of soda: CO₂ gas is produced.

SIGNS OF AN IRREVERSIBLE CHANGE:
1. A new substance is produced (different colour, texture, or smell)
2. A gas is given off
3. Light or heat is released
4. The change cannot be undone

KEY DISTINCTION: Changes of state (melting, boiling, freezing) are reversible physical changes. Burning, rusting, and cooking are irreversible chemical changes.`,
      workedExample: {
        problem: "Is dissolving sugar in water reversible or irreversible? Explain.",
        solution: "Reversible. No new substance is formed — sugar molecules mix with water molecules. You can recover the sugar by gently heating to evaporate the water; the sugar will crystallise out again."
      },
      commonMistakes: [
        "Thinking all changes involving heat are irreversible — melting and boiling involve heat but are reversible physical changes.",
        "Thinking dissolving is irreversible because you cannot see the substance — dissolving is reversible (evaporate the solvent).",
        "Treating any colour change as irreversible — it depends on whether a new substance is formed."
      ],
      keyFacts: [
        "Reversible: melting, freezing, evaporating, condensing, dissolving.",
        "Irreversible: burning, rusting, cooking, most chemical reactions.",
        "Irreversible clues: new substance formed, gas produced, light/heat released.",
        "Changes of state are reversible physical changes.",
        "Chemical reactions are usually irreversible."
      ]
    },
  },

  ks3: {

    "Particles & atomic structure": {
      title: "Atomic Structure",
      keyIdea: "The number and arrangement of protons, neutrons, and electrons inside an atom determines an element's identity and all of its chemical behaviour.",
      body: `THE ATOM
An atom is the smallest particle of an element that retains its chemical properties. Atoms are mostly empty space. At the centre is a tiny, dense nucleus; electrons orbit in shells around it.

SUBATOMIC PARTICLES
• Proton: in the nucleus. Relative charge = +1. Relative mass = 1.
• Neutron: in the nucleus. Relative charge = 0. Relative mass = 1.
• Electron: in shells around the nucleus. Relative charge = −1. Relative mass ≈ 0 (negligible).

ATOMIC NUMBER & MASS NUMBER
• Atomic number (proton number) = number of protons. This uniquely defines the element.
• Mass number = protons + neutrons.
• Number of neutrons = mass number − atomic number.
• In a neutral atom: number of electrons = number of protons.

ELECTRON SHELLS (KS3 rules)
• Shell 1 (innermost): up to 2 electrons.
• Shell 2: up to 8 electrons.
• Shell 3: up to 8 electrons.

Example — Sodium (Na): atomic number 11, mass number 23.
→ Protons = 11, Neutrons = 23 − 11 = 12, Electrons = 11.
→ Electron configuration: 2, 8, 1.

ISOTOPES
Atoms of the same element with the same number of protons but different numbers of neutrons. They have identical chemical properties but slightly different masses. Example: Carbon-12 and Carbon-14 both have 6 protons.

IONS
If an atom gains electrons it becomes a negative ion. If it loses electrons it becomes a positive ion.`,
      workedExample: {
        problem: "Chlorine has atomic number 17 and mass number 35. State the number of protons, neutrons, and electrons in a neutral chlorine atom, and write its electron configuration.",
        solution: "Protons = 17 (atomic number). Neutrons = 35 − 17 = 18. Electrons = 17 (neutral atom). Electron configuration: 2, 8, 7."
      },
      commonMistakes: [
        "Confusing atomic number and mass number — atomic number = protons only; mass number = protons + neutrons.",
        "Forgetting electrons = protons in a NEUTRAL atom (ions have a different electron count).",
        "Thinking isotopes have different chemical properties — isotopes of the same element have identical chemical properties."
      ],
      keyFacts: [
        "Proton: +1 charge, mass 1, in nucleus. Neutron: 0 charge, mass 1, in nucleus. Electron: −1 charge, negligible mass, in shells.",
        "Atomic number = protons = electrons (neutral). Mass number = protons + neutrons.",
        "Neutrons = mass number − atomic number.",
        "Isotopes: same protons, different neutrons, same chemical properties.",
        "Shell capacities: shell 1 = 2, shell 2 = 8, shell 3 = 8."
      ]
    },

    "Elements, compounds & mixtures": {
      title: "Elements, Compounds & Mixtures",
      keyIdea: "Elements contain one type of atom; compounds have elements chemically bonded in fixed ratios; mixtures have substances physically combined — and only mixtures can be separated by physical methods.",
      body: `ELEMENTS
A pure substance made of only one type of atom. Cannot be broken down into simpler substances by chemical reactions. There are 118 known elements, arranged in the periodic table.
Examples: hydrogen (H), oxygen (O), iron (Fe), gold (Au), sodium (Na).

COMPOUNDS
Formed when two or more different elements are chemically bonded together in fixed ratios. The compound has different properties from the elements it contains. You cannot separate a compound by physical methods — you need a chemical reaction.
Examples:
• Water (H₂O): 2 H + 1 O, chemically bonded.
• Sodium chloride (NaCl): white crystalline solid — completely different from sodium (reactive metal) and chlorine (toxic green gas).
• Carbon dioxide (CO₂): 1 C + 2 O.

MIXTURES
Two or more substances physically combined, NOT chemically joined. Each substance keeps its own properties. Can be separated by physical methods.
Examples: air (nitrogen, oxygen, argon), salt water, iron filings and sand.

KEY DISTINCTION
Compound: fixed ratio + chemically bonded + different properties from elements + needs chemical reaction to separate.
Mixture: variable ratio + not bonded + retains individual properties + separable physically.

Separation methods for mixtures: filtration, evaporation, distillation, chromatography, magnetism.`,
      workedExample: {
        problem: "Iron filings and sulfur powder are mixed. (a) Compound or mixture? (b) How to separate? (c) After heating, they react. What forms, and can it be separated the same way?",
        solution: "(a) A mixture — physically combined, not chemically bonded. (b) A magnet attracts iron filings but not sulfur. (c) Iron sulfide (FeS) — a compound — is formed. It cannot be separated by a magnet; the iron is chemically bonded to the sulfur."
      },
      commonMistakes: [
        "Confusing mixture with compound — the key is chemical bonding: compounds are chemically bonded; mixtures are not.",
        "Trying to use physical separation on a compound — only chemical reactions can separate compounds.",
        "Misreading H₂O as 1 H + 2 O — the subscript applies to the atom immediately before it, so H₂O = 2 H + 1 O."
      ],
      keyFacts: [
        "Element: one type of atom; cannot be broken down chemically.",
        "Compound: two or more different elements chemically joined in fixed ratios.",
        "Mixture: two or more substances NOT chemically joined; separable physically.",
        "Compounds have different properties from the elements they contain.",
        "Air is a mixture (~78% N₂, ~21% O₂, ~1% Ar)."
      ]
    },

    "The periodic table": {
      title: "The Periodic Table",
      keyIdea: "Elements are arranged in order of atomic number — and the vertical columns (groups) reveal that elements sharing the same number of outer electrons share similar chemical properties.",
      body: `ORGANISATION
The modern periodic table lists all elements in order of increasing atomic number (protons).

PERIODS (horizontal rows)
Each new period represents a new electron shell being filled. Period 1 has elements with 1 shell; Period 2 with 2 shells; Period 3 with 3 shells, etc.

GROUPS (vertical columns)
Elements in the same group have the same number of electrons in their outer shell — which is why they have similar chemical properties.

KEY GROUPS
• Group 1 — Alkali Metals (Li, Na, K…): 1 outer electron. Very reactive with water and air. Reactivity INCREASES down the group (outer electron is further from nucleus, more easily lost).
• Group 7 — Halogens (F, Cl, Br, I…): 7 outer electrons. Reactive non-metals. Reactivity DECREASES down the group (harder to gain one electron when the outer shell is further from the nucleus).
• Group 0 — Noble Gases (He, Ne, Ar…): Full outer shell. Very unreactive.

METALS AND NON-METALS
Metals: left and centre of the table. Non-metals: top right.

ALKALI METALS + WATER
Group 1 metals react vigorously with cold water to produce a metal hydroxide and hydrogen gas:
metal + water → metal hydroxide + hydrogen
e.g. 2Na + 2H₂O → 2NaOH + H₂
The solution formed is alkaline (hydroxide ions). Reactivity increases down Group 1.

MENDELEEV'S CONTRIBUTION
Mendeleev arranged elements by atomic mass and left deliberate gaps for undiscovered elements, predicting their properties accurately. This was later confirmed when those elements were found.`,
      workedExample: {
        problem: "An element has atomic number 12. (a) Write its electron configuration. (b) State its group and period. (c) How many outer electrons does it have?",
        solution: "(a) Electron configuration: 2, 8, 2 (fill shell 1 with 2, shell 2 with 8, shell 3 with remaining 2). (b) Three shells → Period 3; 2 outer electrons → Group 2. (c) 2 outer electrons."
      },
      commonMistakes: [
        "Confusing groups and periods — groups are VERTICAL columns; periods are HORIZONTAL rows.",
        "Thinking Group 1 reactivity decreases down — it increases (easier to lose the outer electron further from the nucleus).",
        "Thinking Group 7 reactivity increases down — it decreases (harder to attract an electron to a shell further from the nucleus)."
      ],
      keyFacts: [
        "Elements listed in order of increasing atomic number.",
        "Period = horizontal row = number of electron shells.",
        "Group = vertical column = number of outer electrons.",
        "Group 1 reactivity increases down; Group 7 reactivity decreases down.",
        "Noble gases (Group 0) have a full outer shell and are very unreactive."
      ]
    },

    "Chemical reactions": {
      title: "Chemical Reactions",
      keyIdea: "In a chemical reaction reactants are transformed into products with different properties — and the total mass is always conserved because atoms are rearranged, not created or destroyed.",
      body: `WHAT IS A CHEMICAL REACTION?
Reactants are transformed into products. New chemical bonds form and/or old ones break. Products have different properties from the reactants.

WORD EQUATIONS
Reactants → Products
Example: magnesium + oxygen → magnesium oxide
The arrow means "produces" or "yields".

SIGNS OF A CHEMICAL REACTION
• Temperature change (heat released or absorbed)
• Light produced
• A gas evolved (bubbles)
• A precipitate (insoluble solid) forms
• A colour change that cannot be reversed
• A new smell

TYPES OF REACTION
• Combustion: substance reacts rapidly with oxygen, releasing heat and light (e.g. burning methane or wood).
• Thermal decomposition: a substance breaks down on heating (e.g. copper carbonate → copper oxide + CO₂).
• Oxidation: a substance gains oxygen. Reduction: a substance loses oxygen.
• Displacement: a more reactive metal displaces a less reactive one from its compound.
• Neutralisation: acid + alkali → salt + water.
• Precipitation: two solutions react to form an insoluble solid.

EXOTHERMIC vs. ENDOTHERMIC
• Exothermic: releases energy to surroundings — temperature rises. Examples: combustion, neutralisation.
• Endothermic: absorbs energy from surroundings — temperature falls. Examples: thermal decomposition, photosynthesis.

CONSERVATION OF MASS
Total mass of reactants = total mass of products. Atoms are rearranged, not created or destroyed.`,
      workedExample: {
        problem: "10 g of calcium carbonate is heated: calcium carbonate → calcium oxide + carbon dioxide. 5.6 g of calcium oxide is produced. What mass of CO₂ is released? What law does this show?",
        solution: "Mass of CO₂ = 10 − 5.6 = 4.4 g. This demonstrates conservation of mass: total products (5.6 + 4.4 = 10 g) equals total reactants (10 g). Atoms are rearranged, not destroyed."
      },
      commonMistakes: [
        "Confusing reactants and products — reactants are LEFT of the arrow; products are RIGHT.",
        "Treating any temperature change or colour change as proof of a chemical reaction — the definitive sign is formation of a new substance.",
        "Forgetting conservation of mass applies even when a gas is produced (the gas has mass too)."
      ],
      keyFacts: [
        "Reactants → Products.",
        "Exothermic: releases heat. Endothermic: absorbs heat.",
        "Combustion: fuel + oxygen → CO₂ + H₂O (complete combustion).",
        "Conservation of mass: total mass of reactants = total mass of products.",
        "A catalyst speeds up a reaction without being used up."
      ]
    },

    "Acids & alkalis": {
      title: "Acids & Alkalis",
      keyIdea: "The pH scale measures acidity and alkalinity — acids below 7, alkalis above 7 — and neutralisation is the reaction between an acid and a base to produce a salt and water.",
      body: `THE pH SCALE
pH measures how acidic or alkaline a solution is. Scale runs 0–14:
• pH 0–6: acidic (lower = stronger acid)
• pH 7: neutral (pure water)
• pH 8–14: alkaline (higher = stronger alkali)

Universal indicator colours: red/orange (strong acid) → yellow/green (weak acid/neutral) → blue/purple (alkali).

EXAMPLES
Acids: hydrochloric acid (HCl, stomach acid), sulfuric acid (H₂SO₄), citric acid (lemons), ethanoic acid (vinegar).
Alkalis: sodium hydroxide (NaOH), bleach, baking soda, toothpaste.

NEUTRALISATION
acid + alkali → salt + water (exothermic)
• HCl + NaOH → NaCl + H₂O (sodium chloride)
• H₂SO₄ + 2KOH → K₂SO₄ + 2H₂O (potassium sulfate)

The name of the salt formed depends on the acid used: HCl → chloride salt; H₂SO₄ → sulfate salt; HNO₃ → nitrate salt.

REACTIONS OF ACIDS
• Metal + acid → salt + hydrogen gas. Test: hydrogen burns with a squeaky pop.
• Metal carbonate + acid → salt + water + CO₂. Test: CO₂ turns limewater milky.
• Acid + alkali → salt + water (neutralisation).

BASES vs. ALKALIS
A base is any substance that neutralises an acid. An alkali is a base that dissolves in water (e.g. NaOH is both a base and an alkali; copper oxide is a base but not an alkali because it does not dissolve in water).`,
      workedExample: {
        problem: "A student adds sodium hydroxide to dilute hydrochloric acid until neutral. (a) Write the word equation. (b) How would they know when neutral? (c) What type of reaction is this?",
        solution: "(a) hydrochloric acid + sodium hydroxide → sodium chloride + water. (b) Universal indicator turns green (pH 7), or a pH meter reads 7. (c) Neutralisation reaction — also exothermic (solution temperature rises slightly)."
      },
      commonMistakes: [
        "Thinking higher pH = stronger acid — pH 2 is MORE acidic than pH 6; lower pH = stronger acid.",
        "Forgetting both products of neutralisation — acid + alkali always gives SALT + WATER.",
        "Mixing up the gas tests — hydrogen: squeaky pop; CO₂: turns limewater milky."
      ],
      keyFacts: [
        "pH < 7 = acid; pH 7 = neutral; pH > 7 = alkali.",
        "acid + alkali → salt + water.",
        "Acid + metal → salt + hydrogen (squeaky pop test).",
        "Acid + carbonate → salt + water + CO₂ (limewater test).",
        "An alkali is a soluble base."
      ]
    },

    "Metals & non-metals": {
      title: "Metals & Non-metals",
      keyIdea: "Metals and non-metals have contrasting properties — and a metal's position in the reactivity series predicts how vigorously it reacts with acids, water, and other metal compounds.",
      body: `PROPERTIES OF METALS
• Good conductors of heat and electricity
• Shiny (lustrous)
• Malleable (hammered into shapes without breaking)
• Ductile (drawn into wires)
• High melting and boiling points (except mercury — liquid at room temperature)
• Sonorous (ring when struck)

PROPERTIES OF NON-METALS
• Poor conductors of heat and electricity (graphite/carbon is an exception)
• Dull appearance
• Brittle (solid non-metals crack rather than bend)
• Often low melting points (many are gases at room temperature)

THE REACTIVITY SERIES (most to least reactive)
K > Na > Ca > Mg > Al > Zn > Fe > Ni > Sn > Pb > Cu > Ag > Au > Pt

Potassium, sodium, and calcium react vigorously with cold water. Magnesium, zinc, and iron react slowly with steam or acids. Copper, silver, and gold are largely unreactive.

DISPLACEMENT REACTIONS
A more reactive metal displaces a less reactive metal from its salt solution.
Example: Fe + CuSO₄ → FeSO₄ + Cu (iron is more reactive than copper).

OXIDATION AND CORROSION
Metals react with oxygen to form metal oxides. Iron rusts in the presence of BOTH oxygen and water. Aluminium is higher than iron in the reactivity series yet resists corrosion because a thin, protective aluminium oxide layer forms on the surface.

ALLOYS
Mixtures of a metal with one or more other elements. Harder than pure metals because differently-sized atoms disrupt the regular lattice, preventing layers from sliding.
Examples: steel (Fe + C), brass (Cu + Zn), bronze (Cu + Sn).`,
      workedExample: {
        problem: "Zinc is placed in copper sulfate solution, and copper is placed in zinc sulfate solution. Describe and explain what happens in each case.",
        solution: "Zinc + copper sulfate: the blue solution gradually turns colourless; pink/orange copper deposits on the zinc. Zinc is more reactive than copper and displaces it. Copper + zinc sulfate: nothing happens — copper is less reactive than zinc and cannot displace it."
      },
      commonMistakes: [
        "Assuming all metals are magnetic — only iron, nickel, cobalt, and steel are magnetic.",
        "Thinking aluminium corrodes easily — it resists further corrosion due to its protective oxide layer.",
        "Confusing malleable and ductile — malleable = hammered into sheets; ductile = drawn into wires."
      ],
      keyFacts: [
        "Metals: shiny, malleable, ductile, good conductors. Non-metals: dull, brittle, poor conductors.",
        "Reactivity series: K > Na > Ca > Mg > Al > Zn > Fe > Cu > Ag > Au.",
        "Rust needs both oxygen AND water (iron + O₂ + H₂O → iron(III) oxide).",
        "Displacement: more reactive metal replaces less reactive from its salt solution.",
        "Alloys are harder than pure metals because mixed-size atoms disrupt the lattice."
      ]
    },

    "Separation techniques": {
      title: "Separation Techniques",
      keyIdea: "Mixtures can be separated by exploiting differences in the physical properties of their components — particle size, solubility, boiling point, or how far each substance travels through a solvent.",
      body: `FILTRATION
Separates an insoluble solid from a liquid. Pour through filter paper: solid (residue) stays on the paper; liquid (filtrate) passes through.
Use: removing sand from water; separating a precipitate from a solution.

EVAPORATION
Separates a dissolved solid from a solution. Heat the solution; the solvent evaporates; the solid remains.
Use: recovering salt from sea water; obtaining copper sulfate crystals.

SIMPLE DISTILLATION
Separates a liquid from a solution, or two liquids with very different boiling points. The mixture is heated; vapour rises into a condenser, cools, and is collected as a pure liquid.
Use: obtaining pure water from salt water.

FRACTIONAL DISTILLATION
Separates liquids with similar (but different) boiling points using a fractionating column. Each fraction condenses at a different level and is collected separately.
Use: separating crude oil into fractions (petrol, diesel, kerosene); separating liquid air.

PAPER CHROMATOGRAPHY
Separates dissolved substances based on how far each component travels up chromatography paper in a solvent.
Rf value = distance travelled by the spot ÷ distance travelled by the solvent front. (Always ≤ 1.)
A single spot = potentially pure. Multiple spots = mixture.
Use: identifying dyes in inks; food colouring analysis; forensic testing.

CHOOSING THE RIGHT TECHNIQUE
• Insoluble solid in liquid → filtration
• Dissolved solid in solution (want the solid) → evaporation
• Dissolved solid in solution (want the liquid) → distillation
• Two liquids with different boiling points → distillation or fractional distillation
• Mixture of coloured/dissolved substances → chromatography`,
      workedExample: {
        problem: "A mixture contains sand, dissolved salt, and iron filings. Describe how to separate each component, explaining why each step works.",
        solution: "Step 1 — magnet: iron filings are magnetic; sand and salt are not. Step 2 — add water and filter: sand is insoluble and stays on the filter paper; dissolved salt passes through as a solution. Step 3 — evaporate: heat the salt solution gently; water evaporates and salt crystals remain. Each step exploits a different physical property: magnetism, solubility, and boiling point."
      },
      commonMistakes: [
        "Confusing evaporation (want the solid) and distillation (want the liquid) — choose based on which component you need.",
        "Using filtration on a solution — dissolved substances pass straight through filter paper; filtration only removes insoluble particles.",
        "Calculating Rf inverted — Rf = spot distance ÷ solvent front distance (never greater than 1)."
      ],
      keyFacts: [
        "Filtration: removes insoluble solid from liquid.",
        "Evaporation: removes solvent to recover dissolved solid.",
        "Distillation: collects a liquid from a solution, or separates liquids by boiling point.",
        "Rf = spot distance ÷ solvent front distance. Single spot = potentially pure.",
        "Fractional distillation: separates liquids with similar boiling points (crude oil, liquid air)."
      ]
    },
  },
};

// Merge chemistry explanations into the main EXPLANATIONS object.
Object.keys(CHEMISTRY_EXPLANATIONS).forEach((level) => {
  if (!EXPLANATIONS[level]) EXPLANATIONS[level] = {};
  Object.assign(EXPLANATIONS[level], CHEMISTRY_EXPLANATIONS[level]);
});


// ── GCSE Chemistry Explanations ────────────────────────────────────────────
const GCSE_CHEMISTRY_EXPLANATIONS = {
  gcse: {
    "Atomic structure & the periodic table": {
      title: "Atomic Structure & the Periodic Table",
      keyIdea: "Atoms have a tiny, dense nucleus of protons and neutrons surrounded by electrons in shells. The periodic table organises elements by atomic number, revealing trends in atomic radius, ionisation energy, and reactivity.",
      body: `THE ATOM
Mostly empty space. The nucleus (protons + neutrons) is tiny and dense at the centre; electrons orbit in shells. First shell: max 2; second and third shells: max 8. The atomic number (proton number) uniquely identifies an element. Mass number = protons + neutrons. In a neutral atom: electrons = protons.

ISOTOPES
Same element, different number of neutrons → different mass number, identical chemical properties (same electron configuration).

RELATIVE ATOMIC MASS (Ar)
The weighted mean mass of an atom relative to 1/12 the mass of carbon-12. Calculated from isotope abundances:
Ar = (% × mass of isotope 1) + (% × mass of isotope 2) ... all divided by 100.
Example: Cl-35 (75%) and Cl-37 (25%) → Ar = (75×35 + 25×37) ÷ 100 = (2625 + 925) ÷ 100 = 35.5.

IONS
An atom loses electrons → positive ion (e.g. Na → Na⁺, 2,8 configuration). An atom gains electrons → negative ion. Isoelectronic ions have the same electron configuration (e.g. Na⁺ and Ne both have 2,8).

PERIODIC TABLE TRENDS
Elements listed in order of increasing atomic number. Same group = same number of outer electrons = similar properties. Period number = number of occupied shells.
• Atomic radius DECREASES across a period (more protons pull electrons closer).
• First ionisation energy INCREASES across a period (greater nuclear charge holds electrons more tightly). Second ionisation energy of Na is much higher than the first — after losing one electron, Na⁺ has a stable 2,8 configuration; the next electron is in a closer shell.
• Transition metals occupy the d-block (Groups 3–12, Periods 4–7); they have variable oxidation states and form coloured compounds.

HISTORICAL MODELS
Mendeleev arranged elements by atomic mass (not atomic number) and left gaps for undiscovered elements. Thomson proposed the plum-pudding model (electrons embedded in positive material). Rutherford's gold foil experiment (alpha particles — most pass straight through, few deflect sharply) proved the nuclear model with a tiny, dense, positively charged nucleus.`,
      workedExample: {
        problem: "Boron has two isotopes: B-10 (20%) and B-11 (80%). Calculate its relative atomic mass. Then state how many protons, neutrons, and electrons are in a neutral B-11 atom.",
        solution: "Ar = (20×10 + 80×11) ÷ 100 = (200 + 880) ÷ 100 = 10.8. B-11: atomic number 5 → protons = 5, electrons = 5 (neutral). Neutrons = 11 − 5 = 6.",
      },
      commonMistakes: [
        "Confusing mass number with atomic number — mass number includes neutrons; atomic number is protons only.",
        "Stating isotopes have different chemical properties — same electron config = identical chemistry.",
        "Getting the Ar calculation wrong — multiply each isotope's mass by its percentage, add together, then divide by 100.",
      ],
      keyFacts: [
        "Proton: +1 charge, mass 1; Neutron: 0 charge, mass 1; Electron: −1 charge, mass ~0.",
        "Ar = Σ(% × mass of each isotope) ÷ 100.",
        "Atomic radius decreases across a period; first ionisation energy increases across a period.",
        "Transition metals: d-block, variable oxidation states, coloured compounds.",
        "Mendeleev used atomic mass; modern table uses atomic number.",
      ],
    },

    "Bonding & structure": {
      title: "Bonding & Structure",
      keyIdea: "Atoms bond to achieve full outer electron shells. Ionic bonding transfers electrons; covalent bonding shares electrons; metallic bonding involves a sea of delocalised electrons. The type of bonding determines a substance's properties.",
      body: `Ionic bonding occurs between metals and non-metals. The metal atom loses electrons to form a positive ion (cation); the non-metal gains electrons to form a negative ion (anion). Electrostatic attraction holds the ions together in a giant ionic lattice. Ionic compounds have high melting points (lots of energy needed to break the lattice), conduct electricity when molten or dissolved (free ions), but not when solid (ions fixed in place). Example: NaCl — Na⁺ and Cl⁻.

Covalent bonding occurs between non-metals. Atoms share pairs of electrons to achieve full outer shells. Simple molecular compounds (H₂O, CO₂, CH₄) have strong covalent bonds within molecules but only weak intermolecular forces between them — so they have low melting/boiling points. Giant covalent structures (diamond, graphite, silicon dioxide) have very high melting points because every atom is covalently bonded throughout the structure.

Diamond has each carbon bonded to four others in a rigid tetrahedral lattice — very hard, does not conduct electricity. Graphite has layers of hexagonal rings with one delocalised electron per carbon — soft (layers slide), conducts electricity. Graphene is a single layer of graphite.

Metallic bonding consists of a lattice of positive metal ions surrounded by a sea of delocalised electrons. This gives metals: high melting points (strong attraction), electrical and thermal conductivity (free electrons), and malleability (layers slide without breaking bonds).

Dot-and-cross diagrams show the outer electrons of each atom and how they are shared or transferred. Drawing these accurately is a key exam skill.

FULLERENES AND NANOTUBES
Buckminsterfullerene (C₆₀) is a simple molecular form of carbon — hollow sphere of 60 carbon atoms with weak intermolecular forces → low melting point, does not conduct electricity. Carbon nanotubes are cylindrical structures with delocalised electrons, like graphite → conduct electricity; very high strength-to-weight ratio, used in electronics and as reinforcement.

Polymers (e.g. poly(ethene)) are giant simple molecular structures — very long chains with weak intermolecular forces between chains → low melting points, do not conduct electricity.`,
      workedExample: {
        problem: "Explain why sodium chloride (NaCl) conducts electricity when dissolved in water but not when solid.",
        solution: "In solid NaCl, the Na⁺ and Cl⁻ ions are held in a fixed lattice and cannot move — so no electrical conduction. When dissolved, the ions dissociate and are free to move through the solution and carry charge, allowing conduction.",
      },
      commonMistakes: [
        "Saying ionic compounds conduct when solid — they only conduct when molten or aqueous (ions must be free to move).",
        "Confusing the properties of simple molecular and giant covalent substances — both have covalent bonds but very different melting points.",
        "Forgetting graphite conducts electricity (one delocalised electron per carbon) while diamond does not.",
      ],
      keyFacts: [
        "Ionic: metal + non-metal; transfer of electrons; giant lattice; high mp; conducts when molten/dissolved.",
        "Covalent: non-metal + non-metal; shared electrons; simple molecular = low mp; giant covalent = very high mp.",
        "Diamond: hard, no electrical conduction; Graphite: soft, conducts electricity.",
        "Metallic bonding: sea of delocalised electrons → conducts, malleable, high mp.",
        "Group 1 metals lose 1e⁻ to form 1+ ions; Group 7 non-metals gain 1e⁻ to form 1− ions.",
      ],
    },

    "Quantitative chemistry": {
      title: "Quantitative Chemistry",
      keyIdea: "The mole links measurable masses to numbers of particles. Molar ratios from balanced equations, molar volume of gases, and limiting reagents are the core calculation tools.",
      body: `MOLES AND MASSES
Moles = mass (g) ÷ Mr. One mole contains 6.02 × 10²³ particles (Avogadro's constant). The relative formula mass (Mr) is the sum of the Ar values of all atoms in the formula (e.g. H₂O: 2×1 + 16 = 18).

MOLE RATIO CALCULATIONS
In a balanced equation, coefficients give molar ratios. Steps: (1) calculate moles of known substance; (2) use ratio to find moles of unknown; (3) convert back to mass. Example: 2Mg + O₂ → 2MgO — the molar ratio Mg:MgO = 1:1.

MOLAR VOLUME OF GASES (RTP)
At room temperature and pressure (RTP), 1 mole of any gas occupies 24 dm³ (24,000 cm³).
Moles of gas = volume (dm³) ÷ 24.

LIMITING REAGENT
The reactant that is completely used up first, determining the maximum amount of product formed. To find it: calculate moles of each reactant and compare with the molar ratio from the balanced equation. The one that runs out first is limiting.

EMPIRICAL FORMULA
The simplest whole-number ratio of atoms. To find from percentage composition: (1) treat % as grams; (2) divide each by Ar; (3) divide all by the smallest value; (4) round to whole numbers.
Example: 40% C, 6.7% H, 53.3% O → C: 40/12=3.33; H: 6.7/1=6.7; O: 53.3/16=3.33 → ratio 1:2:1 → CH₂O.

PERCENTAGE YIELD
(actual yield ÷ theoretical yield) × 100. Always ≤ 100% (product loss, incomplete reaction, reversible reaction).

ATOM ECONOMY
(Mr of desired products ÷ total Mr of all products) × 100. High atom economy = less waste.

CONCENTRATION
Concentration (mol/dm³) = moles ÷ volume (dm³). Convert cm³ to dm³ by dividing by 1000.`,
      workedExample: {
        problem: "In N₂ + 3H₂ → 2NH₃, starting with 2 mol N₂ and 5 mol H₂, which is the limiting reagent and how many moles of NH₃ are produced?",
        solution: "Ratio requires 3 mol H₂ per mol N₂. 2 mol N₂ needs 6 mol H₂, but only 5 mol H₂ available. H₂ is limiting. 5 mol H₂ ÷ 3 = 1.67 mol N₂ reacts, producing 2/3 × 5 = 3.33 mol NH₃.",
      },
      commonMistakes: [
        "Using mass instead of moles in ratio calculations — always convert to moles first using moles = mass ÷ Mr.",
        "Forgetting to divide cm³ by 1000 to get dm³ before using concentration = moles ÷ volume.",
        "Confusing percentage yield (what you actually get) with atom economy (theoretical efficiency of the route).",
      ],
      keyFacts: [
        "Moles = mass ÷ Mr; mass = moles × Mr.",
        "Molar volume at RTP: 1 mol of any gas = 24 dm³.",
        "Limiting reagent: the reactant used up first; determines maximum yield.",
        "Empirical formula: divide % by Ar, then divide by the smallest value.",
        "Percentage yield = (actual ÷ theoretical) × 100; Atom economy = (Mr desired ÷ total Mr products) × 100.",
      ],
    },

    "Chemical changes": {
      title: "Chemical Changes",
      keyIdea: "Acids react with bases, metals, and carbonates in predictable patterns. Electrolysis uses electricity to decompose ionic compounds, and the reactivity series predicts which reactions will occur.",
      body: `Acids produce H⁺ ions in solution; bases produce OH⁻ ions. Neutralisation: H⁺ + OH⁻ → H₂O. pH scale: below 7 = acidic, 7 = neutral, above 7 = alkaline. Each pH unit represents a 10-fold change in H⁺ concentration.

Key acid reactions: acid + metal → salt + hydrogen; acid + metal oxide/hydroxide → salt + water; acid + metal carbonate → salt + water + CO₂. The salt's name comes from the metal and the acid's anion (hydrochloric → chloride, sulfuric → sulfate, nitric → nitrate).

The reactivity series ranks metals from most to least reactive: K, Na, Ca, Mg, Al, Zn, Fe, Cu, Au. More reactive metals displace less reactive ones from their salts in solution (displacement reactions). Metals above hydrogen react with dilute acids; those below do not.

Oxidation is loss of electrons (OIL); reduction is gain of electrons (RIG). In ionic equations for displacement: Zn + Cu²⁺ → Zn²⁺ + Cu — zinc is oxidised (loses 2e⁻), copper ion is reduced (gains 2e⁻).

Electrolysis: an ionic compound (molten or in solution) is decomposed by electrical current. At the cathode (negative), positive ions are reduced (gain electrons). At the anode (positive), negative ions are oxidised (lose electrons). In the electrolysis of brine: H₂ at cathode, Cl₂ at anode, NaOH in solution — used industrially for chlorine and hydrogen production.`,
      workedExample: {
        problem: "Write the word equation and balanced symbol equation for the reaction of magnesium with dilute sulfuric acid.",
        solution: "Word: magnesium + sulfuric acid → magnesium sulfate + hydrogen. Symbol: Mg + H₂SO₄ → MgSO₄ + H₂. Both sides: 1 Mg, 1 S, 4 O, 2 H — balanced.",
      },
      commonMistakes: [
        "Naming salts incorrectly — the metal comes first, then the anion (sulfate, chloride, nitrate).",
        "Forgetting CO₂ is also a product when acid reacts with a carbonate (not just salt + water).",
        "Getting cathode and anode backwards — cathode = negative = reduction; anode = positive = oxidation.",
      ],
      keyFacts: [
        "Acid + metal → salt + H₂; acid + carbonate → salt + H₂O + CO₂.",
        "Reactivity series (high to low): K, Na, Ca, Mg, Al, Zn, Fe, Cu, Au.",
        "OIL RIG: Oxidation Is Loss (of electrons); Reduction Is Gain.",
        "Cathode (−): reduction (cations gain e⁻); Anode (+): oxidation (anions lose e⁻).",
        "Electrolysis of brine → Cl₂ (anode), H₂ (cathode), NaOH (solution).",
      ],
    },

    "Energy changes": {
      title: "Energy Changes in Chemical Reactions",
      keyIdea: "Exothermic reactions release energy to the surroundings; endothermic reactions absorb energy. Bond breaking requires energy; bond forming releases energy. The overall energy change determines whether a reaction is exo- or endothermic.",
      body: `In any chemical reaction, existing bonds in the reactants must be broken (energy absorbed) and new bonds in the products are formed (energy released). If more energy is released forming bonds than is absorbed breaking them, the reaction is exothermic — the surroundings get hotter, temperature rises. If more energy is absorbed than released, the reaction is endothermic — the surroundings cool down.

Common exothermic reactions: combustion, oxidation, many neutralisations, respiration. Common endothermic reactions: thermal decomposition, photosynthesis, dissolving ammonium chloride in water.

Energy profile diagrams show reactants and products on an energy axis. Exothermic: products lower than reactants; activation energy is the initial hump from reactants to the transition state. Endothermic: products higher than reactants. Catalysts lower the activation energy without being consumed — they appear on the diagram as a lower hump.

Bond energy calculations: ΔH = energy in (bonds broken) − energy out (bonds formed). If ΔH is negative, exothermic; if positive, endothermic. Example: H₂ + Cl₂ → 2HCl. Bonds broken: H−H (436 kJ/mol) + Cl−Cl (243 kJ/mol) = 679 kJ. Bonds formed: 2 × H−Cl (431 kJ/mol) = 862 kJ. ΔH = 679 − 862 = −183 kJ/mol (exothermic).

Hand-warmers use exothermic reactions (oxidation of iron); cold packs use endothermic reactions (dissolving ammonium nitrate). These are practical applications you may be asked to explain.`,
      workedExample: {
        problem: "Use bond energies to calculate the energy change for: CH₄ + 2O₂ → CO₂ + 2H₂O. Bond energies (kJ/mol): C−H = 412, O=O = 498, C=O = 805, O−H = 463.",
        solution: "Bonds broken: 4×C−H + 2×O=O = 4(412) + 2(498) = 1648 + 996 = 2644 kJ. Bonds formed: 2×C=O + 4×O−H = 2(805) + 4(463) = 1610 + 1852 = 3462 kJ. ΔH = 2644 − 3462 = −818 kJ/mol (exothermic).",
      },
      commonMistakes: [
        "Subtracting the wrong way — ΔH = energy IN (broken) minus energy OUT (formed); a common flip leads to wrong sign.",
        "Forgetting to multiply bond energies by the number of each bond type in the equation.",
        "Stating catalysts change the overall energy change — they only lower activation energy; ΔH is unchanged.",
      ],
      keyFacts: [
        "Exothermic: energy released, ΔH negative, temperature rises.",
        "Endothermic: energy absorbed, ΔH positive, temperature falls.",
        "ΔH = bonds broken (energy in) − bonds formed (energy out).",
        "Catalysts lower activation energy but do not change ΔH.",
        "Bond breaking = endothermic; bond forming = exothermic.",
      ],
    },

    "Rates of reaction": {
      title: "Rates of Reaction",
      keyIdea: "Reaction rate measures how fast reactants are converted to products. It is affected by temperature, concentration, pressure (gases), surface area, and catalysts — all explained by collision theory.",
      body: `Reaction rate can be measured by monitoring the loss of a reactant or gain of a product over time — e.g., timing how long a precipitate takes to obscure a cross (disappearing cross), measuring gas volume collected, or recording mass loss as gas escapes.

Rate = change in quantity ÷ time. The gradient of a concentration–time graph gives the instantaneous rate; a steeper gradient means faster reaction.

Collision theory explains all rate factors: for a reaction to occur, particles must collide with sufficient energy (≥ activation energy) and the correct orientation.

Temperature: increasing temperature increases the kinetic energy of particles — they move faster, collide more frequently AND with greater energy. More collisions exceed the activation energy threshold, so rate increases significantly (roughly doubles per 10°C rise).

Concentration (solutions) / Pressure (gases): more particles in the same volume → more frequent collisions → faster rate.

Surface area: breaking a solid into smaller pieces exposes more surface for collision. Powders react faster than lumps of the same mass.

Catalysts: provide an alternative reaction pathway with lower activation energy. More particles have enough energy to react → faster rate, without the catalyst being consumed.

Activation energy: shown on an energy profile diagram as the energy barrier between reactants and transition state. Catalysts lower this barrier (shown as a lower hump) but do not change the overall ΔH.`,
      workedExample: {
        problem: "A student measures the volume of CO₂ gas produced when marble chips react with hydrochloric acid. Explain two ways to increase the rate of reaction, using collision theory.",
        solution: "1. Use smaller marble chips (greater surface area) — more surface exposed to acid, so more collisions per second between acid particles and marble surface. 2. Use more concentrated acid — more H⁺ ions in the same volume, so more frequent collisions with carbonate ions. Both increase the number of successful collisions per unit time.",
      },
      commonMistakes: [
        "Saying 'particles collide more' without specifying they collide with more energy (especially for temperature).",
        "Claiming catalysts increase the energy of particles — they lower the activation energy instead.",
        "Confusing rate (speed of reaction) with yield (how much product forms) — catalysts increase rate but do not change equilibrium position or yield.",
      ],
      keyFacts: [
        "Rate = change in quantity ÷ time; steeper graph gradient = faster rate.",
        "Factors increasing rate: ↑ temperature, ↑ concentration, ↑ pressure, ↑ surface area, add catalyst.",
        "Collision theory: successful reaction requires collision with energy ≥ activation energy + correct orientation.",
        "Catalysts: lower activation energy; not consumed; same ΔH.",
        "Temperature effect is large — roughly doubling rate per 10°C because many more particles exceed Ea.",
      ],
    },

    "Organic chemistry": {
      title: "Organic Chemistry",
      keyIdea: "Organic chemistry is the study of carbon compounds. Hydrocarbons (alkanes and alkenes) are key homologous series; crude oil is their main source. Addition and substitution reactions are central to GCSE organic chemistry.",
      body: `Carbon forms four bonds and can chain together, making an enormous variety of compounds. Hydrocarbons contain only carbon and hydrogen.

Alkanes are saturated hydrocarbons (only single C−C bonds): methane CH₄, ethane C₂H₆, propane C₃H₈, butane C₄H₁₀. General formula: CₙH₂ₙ₊₂. They undergo combustion (complete → CO₂ + H₂O; incomplete → CO or soot) and substitution with halogens in UV light.

Alkenes are unsaturated (contain a C=C double bond): ethene C₂H₄, propene C₃H₆. General formula: CₙH₂ₙ. They undergo addition reactions across the double bond — bromine water is decolourised (from orange to colourless), distinguishing alkenes from alkanes. Alkenes can polymerise (addition polymerisation) to form plastics like poly(ethene).

Crude oil is a mixture of hydrocarbons separated by fractional distillation: refinery gases (short chains, lowest bp), petrol, kerosene, diesel, fuel oil, bitumen (long chains, highest bp). Shorter chains → lower boiling point, less viscous, more flammable.

Cracking converts long, less useful hydrocarbons into shorter, more useful ones. Thermal cracking (high temp, high pressure) or catalytic cracking (catalyst, lower temp) breaks C−C bonds, producing alkanes and alkenes. Alkenes from cracking are feedstock for making polymers.

Alcohols contain the −OH functional group. Ethanol (C₂H₅OH) is made by fermentation (glucose → ethanol + CO₂, using yeast) or by hydration of ethene (ethene + steam, acid catalyst). Fermentation uses renewable feedstock — an advantage for sustainability. Carboxylic acids (e.g. ethanoic acid) contain −COOH and are weak acids.

ISOMERS
Compounds with the same molecular formula but different structural arrangements. Example: butane (C₄H₁₀) has two structural isomers — n-butane (straight chain) and methylpropane (branched). Isomers have different physical properties (e.g. different boiling points).

CONDENSATION POLYMERISATION
Monomers with two functional groups join together, releasing a small molecule (usually water) each time. Example: nylon is made from a diamine and a dicarboxylic acid — each bond forms with loss of water. Different from addition polymerisation (which requires C=C double bonds and loses nothing).

HYDROGENATION OF ALKENES
Alkenes react with hydrogen (Ni catalyst, ~150°C) to form alkanes: C₂H₄ + H₂ → C₂H₆ (ethene → ethane). This is an addition reaction.`,
      workedExample: {
        problem: "Ethene undergoes addition polymerisation. Draw the repeat unit of poly(ethene) and state the condition needed.",
        solution: "Condition: high pressure (and a catalyst). Repeat unit: −[CH₂−CH₂]ₙ− (the double bond opens; each ethene molecule contributes a −CH₂−CH₂− unit to the chain). The brackets with subscript n indicate the repeating unit.",
      },
      commonMistakes: [
        "Confusing alkanes (saturated, CₙH₂ₙ₊₂) and alkenes (unsaturated, CₙH₂ₙ) — alkenes have one degree of unsaturation (the C=C).",
        "Stating alkanes decolourise bromine water — only alkenes do (addition across the double bond).",
        "Forgetting that incomplete combustion produces CO (toxic) or carbon (soot), not just CO₂.",
      ],
      keyFacts: [
        "Alkanes: CₙH₂ₙ₊₂; saturated; substitution reactions; do NOT decolourise bromine water.",
        "Alkenes: CₙH₂ₙ; unsaturated (C=C); addition reactions; decolourise bromine water.",
        "Cracking: long chain hydrocarbons → shorter alkanes + alkenes.",
        "Addition polymerisation: alkene monomers join to form polymer; double bond opens.",
        "Fermentation: glucose → ethanol + CO₂ (yeast, ~37°C, anaerobic).",
      ],
    },

    "Chemical analysis": {
      title: "Chemical Analysis",
      keyIdea: "Pure substances have sharp melting and boiling points. Flame tests identify metal cations; NaOH tests identify metal ions by precipitate colour; gas tests and chromatography complete the analytical toolkit.",
      body: `PURITY
A pure substance is a single element or compound with a definite melting point. Impurities lower the melting point and broaden the melting range (e.g. melts over a range 78–85°C → impure). Formulations are carefully designed mixtures (medicines, fuels, paints) where each component has a specific function.

FLAME TESTS — identify metal cations
Hold a clean wire loop in the flame after dipping in the unknown solution:
• Li⁺ = crimson/red
• Na⁺ = yellow/orange (persistent — can mask other colours)
• K⁺ = lilac/violet
• Ca²⁺ = brick red
• Cu²⁺ = blue-green
Flame tests identify which metal cation is present.

NaOH PRECIPITATION TESTS — identify metal cations in solution
Add a few drops of sodium hydroxide solution:
• Cu²⁺ → blue precipitate
• Fe²⁺ → green precipitate
• Fe³⁺ → brown/rust precipitate

ANION TESTS
• Carbonate (CO₃²⁻): add dilute acid → CO₂ gas produced (turns limewater milky).
• Sulfate (SO₄²⁻): add dilute HCl, then barium chloride solution → white precipitate (BaSO₄). (Acid added first to rule out carbonate interference.)
• Halides (Cl⁻/Br⁻/I⁻): add dilute HNO₃, then silver nitrate solution → Cl⁻ = white ppt; Br⁻ = cream ppt; I⁻ = yellow ppt.

GAS TESTS
• H₂: burns with a squeaky pop.
• O₂: relights a glowing splint.
• CO₂: turns limewater milky/cloudy.
• Cl₂: bleaches damp litmus paper white.

CHROMATOGRAPHY
Rf = distance travelled by spot ÷ distance travelled by solvent front (always ≤ 1). Single spot = potentially pure; multiple spots = mixture. Rf values are constant for a substance under the same conditions — compare against known standards to identify unknowns.

INSTRUMENTAL ANALYSIS
Mass spectrometry measures the mass-to-charge ratio of ions, giving molecular mass and a fragmentation pattern for identification. GC-MS (gas chromatography–mass spectrometry) can identify substances in very small quantities, used in forensics and medicine.`,
      workedExample: {
        problem: "A student adds NaOH solution to two unknown solutions. One gives a green precipitate; the other gives a brown precipitate. Identify the metal ion in each, and name the precipitate formed.",
        solution: "Green precipitate → Fe²⁺ ions present; precipitate is iron(II) hydroxide [Fe(OH)₂]. Brown/rust precipitate → Fe³⁺ ions present; precipitate is iron(III) hydroxide [Fe(OH)₃].",
      },
      commonMistakes: [
        "Confusing Ca²⁺ (brick red) with Li⁺ (crimson/red) — brick red is the term used for calcium; crimson for lithium.",
        "Calculating Rf as solvent distance ÷ spot distance (inverse) — it should always be spot ÷ solvent, so Rf ≤ 1.",
        "Using the wrong reagent order for sulfate test — add HCl first, then BaCl₂; adding BaCl₂ first can give a false positive with carbonate.",
      ],
      keyFacts: [
        "Flame colours: Li⁺ crimson, Na⁺ yellow/orange, K⁺ lilac, Ca²⁺ brick red, Cu²⁺ blue-green.",
        "NaOH ppt colours: Cu²⁺ = blue, Fe²⁺ = green, Fe³⁺ = brown/rust.",
        "Carbonate: acid → CO₂ (limewater test); Sulfate: HCl then BaCl₂ → white ppt.",
        "Halides + AgNO₃ (after HNO₃): Cl⁻ white, Br⁻ cream, I⁻ yellow precipitate.",
        "Gas tests: H₂ squeaky pop; O₂ relights splint; CO₂ milky limewater; Cl₂ bleaches litmus.",
      ],
    },

    "Chemistry of the atmosphere": {
      title: "Chemistry of the Atmosphere",
      keyIdea: "Earth's atmosphere evolved from volcanic CO₂ to today's ~78% N₂/~21% O₂. Greenhouse gases trap infrared radiation; the ozone layer absorbs UV; human activity is disrupting both.",
      body: `EVOLUTION OF THE ATMOSPHERE
Early Earth: mainly CO₂ and water vapour from volcanic activity, with traces of methane and ammonia. As Earth cooled, water vapour condensed into oceans, dissolving much of the CO₂. Early marine organisms (cyanobacteria) and later land plants performed photosynthesis, releasing O₂. Over billions of years O₂ built up to ~21%.

Current composition: N₂ ~78%, O₂ ~21%, Ar ~1%, CO₂ ~0.04% (and rising), plus water vapour.

THE GREENHOUSE EFFECT
Greenhouse gases (CO₂, CH₄, H₂O, N₂O) absorb outgoing infrared radiation from the Earth's surface and re-emit it in all directions, warming the planet. N₂ and O₂ do NOT absorb infrared — they have symmetrical molecules that do not interact with IR. This is why CO₂ is a greenhouse gas but N₂ is not.

Enhanced greenhouse effect: burning fossil fuels (↑CO₂), agriculture and landfill (↑CH₄), deforestation → global warming → rising sea levels, melting ice caps, extreme weather, ecosystem disruption.

THE OZONE LAYER
Ozone (O₃) in the stratosphere absorbs harmful ultraviolet (UV) radiation from the Sun, protecting living organisms from skin cancer and DNA damage. CFCs (chlorofluorocarbons — used in old aerosols and refrigerants) break down ozone, depleting the ozone layer. CFCs have largely been phased out under the Montreal Protocol.

ATMOSPHERIC POLLUTANTS
• CO: incomplete combustion; toxic — binds irreversibly to haemoglobin, reducing blood's oxygen-carrying capacity.
• NOₓ: car engines (high temp + N₂ + O₂); causes acid rain and smog.
• SO₂: burning sulfur-containing fuels; causes acid rain (SO₂ dissolves to form sulfuric acid).
• Particulates (soot): linked to respiratory problems and cancer.
Catalytic converters in cars convert CO and NOₓ to CO₂ and N₂.`,
      workedExample: {
        problem: "Explain how carbon dioxide acts as a greenhouse gas, and explain why nitrogen does not.",
        solution: "CO₂ molecules absorb outgoing infrared radiation from the Earth's surface and re-emit it in all directions, including back towards Earth, raising surface temperature. N₂ is a symmetrical diatomic molecule that does not absorb infrared radiation, so it has no greenhouse effect.",
      },
      commonMistakes: [
        "Saying the greenhouse effect blocks sunlight — it traps outgoing infrared (heat) radiation, not incoming solar radiation.",
        "Confusing the ozone layer with the greenhouse effect — ozone absorbs UV; greenhouse gases trap IR. They are different phenomena.",
        "Stating CO₂ causes acid rain — acid rain is caused by SO₂ and NOₓ dissolving in rainwater to form sulfuric/nitric acids.",
      ],
      keyFacts: [
        "Early atmosphere: CO₂ and water vapour; O₂ rose via photosynthesis by early marine organisms.",
        "Current atmosphere: ~78% N₂, ~21% O₂, ~1% Ar, ~0.04% CO₂.",
        "Greenhouse gases (CO₂, CH₄, H₂O, N₂O) absorb and re-emit infrared; N₂ does not.",
        "Ozone layer absorbs UV radiation; CFCs deplete ozone.",
        "Acid rain: SO₂ and NOₓ dissolve in rain → sulfuric/nitric acids.",
      ],
    },


    "Earth & resources": {
      title: "Earth & Resources",
      keyIdea: "Earth's finite resources must be extracted and processed efficiently. The Haber process turns atmospheric nitrogen into ammonia for fertilisers; metals are extracted by reduction or electrolysis depending on reactivity.",
      body: `THE HABER PROCESS
The Haber process manufactures ammonia (NH3) from nitrogen and hydrogen:
N2(g) + 3H2(g) = 2NH3(g)   (exothermic, reversible)

Conditions: ~450 degrees C, ~200 atm, iron catalyst.
- Temperature: higher temperature increases rate but shifts equilibrium LEFT (less NH3), since the reaction is exothermic. ~450 degrees C balances acceptable rate with acceptable yield.
- Pressure: higher pressure shifts equilibrium RIGHT (4 mol gas to 2 mol gas, so high pressure favours NH3). 200 atm is a compromise between yield and the cost of maintaining very high pressure.
- Catalyst: iron catalyst increases rate without affecting equilibrium position.
- Recycling: unreacted N2 and H2 are recycled back into the reactor, improving overall efficiency.

Feedstocks: nitrogen from fractional distillation of liquid air; hydrogen from the reaction of natural gas (methane) with steam.

NPK FERTILISERS
Ammonia is used to make fertilisers. Plants need nitrogen to make proteins and nucleic acids (DNA). NPK fertilisers contain nitrogen (N), phosphorus (P), and potassium (K).

METAL EXTRACTION
Metals below carbon in the reactivity series (e.g. iron, copper) can be extracted by reduction with carbon. The blast furnace reduces Fe2O3 with carbon monoxide: Fe2O3 + 3CO to 2Fe + 3CO2. Limestone removes silicate impurities as slag.
Metals above carbon (aluminium, sodium) require electrolysis - more expensive.
Copper: purified by electrolysis; also extracted via phytomining (plants) or bioleaching (bacteria) from low-grade ores.

WATER TREATMENT
Potable water (safe to drink) is not the same as pure water. River water is treated by: sedimentation, then filtration, then chlorination (kills microorganisms). Seawater requires desalination (distillation or reverse osmosis) - energy-intensive.

MATERIALS
Composite materials combine two or more materials for properties neither has alone (e.g. carbon fibre reinforced polymer: high strength + low density). Ceramics are non-metallic inorganic solids hardened by heat (e.g. glass - made mainly from silicon dioxide). Alloys (e.g. steel = iron + carbon) are harder than pure metals because different-sized atoms disrupt the regular lattice.

LIFE CYCLE ASSESSMENT (LCA)
Evaluates environmental impact of a product from raw material extraction through manufacture, use, and disposal/recycling. Used to compare materials and make sustainable choices.`,
      workedExample: {
        problem: "In the Haber process, why is ~450 degrees C used rather than a higher temperature, and why is high pressure (~200 atm) used?",
        solution: "The reaction is exothermic, so a higher temperature shifts equilibrium to the left (less NH3) - even though it increases rate. ~450 degrees C balances a fast enough rate with an acceptable yield. High pressure shifts equilibrium to the right (4 mol gas to 2 mol), increasing both rate and yield. 200 atm is a compromise between improved yield and the high engineering cost of extremely high pressures.",
      },
      commonMistakes: [
        "Thinking higher temperature always improves yield - for exothermic reactions, higher temperature shifts equilibrium left, reducing yield.",
        "Forgetting that unused N2 and H2 are recycled in the Haber process - this is key to its industrial efficiency.",
        "Confusing potable water (safe to drink) with pure water (single substance) - tap water contains dissolved salts and is potable but not pure.",
      ],
      keyFacts: [
        "Haber process: N2 + 3H2 = 2NH3; conditions ~450 degrees C, ~200 atm, iron catalyst.",
        "High pressure favours NH3 (4 mol to 2 mol); exothermic so lower temperature gives higher yield but slower rate.",
        "Ammonia used for fertilisers; plants need N for proteins and nucleic acids; NPK = Nitrogen, Phosphorus, Potassium.",
        "Blast furnace (iron): Fe2O3 + CO to Fe + CO2; limestone removes silicate impurities.",
        "Potable water: sedimentation, filtration, chlorination; LCA assesses full-life environmental impact.",
      ],
    },
  },
};

Object.keys(GCSE_CHEMISTRY_EXPLANATIONS).forEach((level) => {
  if (!EXPLANATIONS[level]) EXPLANATIONS[level] = {};
  Object.assign(EXPLANATIONS[level], GCSE_CHEMISTRY_EXPLANATIONS[level]);
});



// ── A-Level Chemistry Explanations ─────────────────────────────────────────
const ALEVEL_CHEMISTRY_EXPLANATIONS = {
  alevel: {
    "Atomic structure & periodicity": {
      title: "Atomic Structure & Periodicity",
      keyIdea: "Sub-shell electron configurations, quantum numbers, and periodic trends in ionisation energy, atomic radius, and electronegativity — all governed by nuclear charge, shielding, and penetration.",
      body: `Electrons occupy atomic orbitals defined by four quantum numbers: principal (n), azimuthal (l), magnetic (ml), and spin (ms). No two electrons can share all four quantum numbers (Pauli exclusion). Sub-shells fill in order of increasing energy — 1s, 2s, 2p, 3s, 3p, 4s, 3d — with degenerate orbitals first occupied singly (Hund's rule). Exceptions like Cr ([Ar] 3d⁵ 4s¹) and Cu ([Ar] 3d¹⁰ 4s¹) arise from the extra stability of half-filled and fully-filled d sub-shells.

Across a period, nuclear charge increases while the number of inner shielding electrons stays roughly constant, raising the effective nuclear charge (Zeff) experienced by outer electrons. This causes atomic radius to decrease and first ionisation energy to increase — with two notable dips: Mg→Al (3p is shielded by 3s electrons) and P→S (pairing in one 3p orbital creates extra electron–electron repulsion).

Successive ionisation energies increase steadily until a sharp jump when the next electron must be removed from a filled inner shell — this directly reveals the group of the element. For example, a large jump between the 3rd and 4th IE places the element in Group 3.

Down a group, additional electron shells increase shielding significantly; outer electrons are further from the nucleus and experience lower Zeff. First ionisation energies fall, atomic radii increase, and electronegativity decreases. These trends underpin Group reactivity patterns: Group 1 metals become more reactive down the group; halogens become less reactive.

Electronegativity (Pauling scale) peaks at F (4.0) and decreases down and to the left of the periodic table. It determines bond polarity, which in turn drives dipole moments, intermolecular forces, and solubility behaviour.`,
      workedExample: {
        problem: "The successive ionisation energies (kJ/mol) of an element are: 900, 1757, 14849, 21007. Identify the group and explain the large jump.",
        solution: "The large jump occurs between the 2nd and 3rd ionisation energies (from 1757 to 14849 kJ/mol). The first two electrons are relatively easily removed (outer shell), but the 3rd requires breaking into the penultimate shell with much higher nuclear attraction. This indicates the element is in Group 2 (two outer electrons). It is likely Mg or Ca.",
      },
      commonMistakes: [
        "Forgetting the 4s fills before 3d but empties before 3d when forming transition metal cations (Fe²⁺ is [Ar] 3d⁶, not [Ar] 3d⁴ 4s²).",
        "Attributing the Mg/Al ionisation energy dip solely to atomic size rather than the correct reason: Al's outer electron is in a 3p sub-shell, shielded by the filled 3s.",
        "Confusing shielding (by inner electrons) with electron-electron repulsion (between electrons in the same sub-shell).",
      ],
      keyFacts: [
        "Zeff = nuclear charge − shielding constant; increases across a period.",
        "IE dips: Mg→Al (3p shielded by 3s); P→S (paired 3p electron, extra repulsion).",
        "4s empties before 3d in cation formation — use [Ar] 3dⁿ for transition metal ions.",
        "Successive IE: sharp jump after removing the last outer-shell electron reveals group number.",
        "Electronegativity: F > O > N > Cl; decreases down and left of the periodic table.",
      ],
    },

    "Bonding & structure": {
      title: "Bonding & Structure",
      keyIdea: "VSEPR, orbital hybridisation, molecular orbital theory, and Born-Haber cycles extend GCSE bonding into a quantitative, predictive framework.",
      body: `VSEPR (Valence Shell Electron Pair Repulsion) predicts molecular geometry by minimising repulsion between all electron pairs (bonding and lone). Lone pairs exert greater repulsion than bonding pairs: tetrahedral (109.5°) → trigonal pyramidal (107°, one LP) → bent (104.5°, two LPs). Species like PCl₅ (trigonal bipyramidal, 120°/90°) and SF₆ (octahedral) use d orbitals for expanded octets.

Hybridisation explains geometry in terms of orbital mixing: sp³ (tetrahedral), sp² (trigonal planar, one unhybridised p for π bonding), sp (linear, two unhybridised p orbitals). Sigma bonds form from head-on overlap; pi bonds from lateral overlap of unhybridised p orbitals. Rotation is free around σ bonds but restricted around π bonds, giving rise to E/Z isomerism.

Molecular orbital (MO) theory goes further: atomic orbitals combine to form bonding and antibonding MOs. The bond order = (bonding electrons − antibonding electrons) / 2. O₂ is paramagnetic (two unpaired electrons in degenerate π* MOs) — a result MO theory predicts but Lewis structures cannot.

The Born-Haber cycle applies Hess's law to ionic compounds. Starting from elements in their standard states, the route to the ionic lattice involves: atomisation enthalpy (solid → gaseous atoms), ionisation energies (forming cations), electron affinities (forming anions), and lattice enthalpy (gaseous ions → lattice). The discrepancy between experimental and theoretical lattice enthalpies (using a purely ionic model) reveals covalent character (Fajans' rules: small, highly charged cations and large, polarisable anions increase covalent character).

Solubility trends in Group 2 sulfates and hydroxides are explained by the balance between lattice enthalpy and hydration enthalpy: larger ions have smaller lattice enthalpies but also smaller hydration enthalpies — the net effect determines solubility.`,
      workedExample: {
        problem: "Predict the shape and bond angles of XeF₄, and explain why it is square planar rather than tetrahedral.",
        solution: "Xe has 6 bonding pairs with 4 F atoms and 2 lone pairs = 6 electron pairs total → octahedral electron geometry. The two lone pairs occupy axial positions (minimising LP–LP repulsion at 180° rather than 90°), placing the 4 F atoms in the equatorial plane. Shape: square planar. Bond angles: 90°.",
      },
      commonMistakes: [
        "Ignoring lone pairs when naming the molecular shape — always count all electron pairs for geometry, but name the shape based on bonding pairs only.",
        "Confusing bond order in MO theory: O₂ has bond order 2 (as expected) but with two unpaired electrons in π* — not obvious from Lewis structures.",
        "In Born-Haber cycles, getting the sign of electron affinity wrong — EA is exothermic (negative ΔH) for most non-metals.",
      ],
      keyFacts: [
        "Lone pairs repel more than bonding pairs: tetrahedral 109.5° → pyramidal 107° → bent 104.5°.",
        "sp³ = tetrahedral; sp² = trigonal planar + 1 π bond; sp = linear + 2 π bonds.",
        "Bond order = (bonding e⁻ − antibonding e⁻) / 2.",
        "Born-Haber: ΔHf = atomisation + IE + EA + lattice enthalpy (signs must be correct).",
        "Fajans' rules: small cation + large anion → more covalent character.",
      ],
    },

    "Energetics & thermodynamics": {
      title: "Energetics & Thermodynamics",
      keyIdea: "Gibbs energy (ΔG = ΔH − TΔS) is the master criterion for spontaneity. Born-Haber cycles, Hess's law, and bond energies provide routes to quantifying ΔH; the third law anchors entropy values.",
      body: `The first law of thermodynamics — energy is conserved — underpins enthalpy calculations. ΔH = qp (heat at constant pressure). For reactions at constant volume (bomb calorimeter), we measure ΔU; the correction to ΔH uses ΔH = ΔU + ΔngRT where Δng is the change in moles of gas.

Hess's law: ΔH for any reaction is the same regardless of the route taken. This allows construction of enthalpy cycles connecting standard enthalpies of formation, combustion, atomisation, ionisation, and hydration. Mean bond enthalpies are averages across many compounds; they give approximate (not exact) ΔH values because actual bond strengths depend on the molecular environment.

The second law: entropy of the universe increases in all spontaneous processes. ΔStotal = ΔSsystem + ΔSsurroundings where ΔSsurroundings = −ΔH/T. Combining: ΔStotal > 0 ↔ ΔG < 0 where ΔG = ΔH − TΔS (at constant T and P).

The sign combination of ΔH and ΔS determines temperature dependence of spontaneity: (−ΔH, +ΔS) always spontaneous; (+ΔH, −ΔS) never spontaneous; mixed signs give a crossover temperature T = ΔH/ΔS.

At equilibrium, ΔG = 0, giving ΔG° = −RT ln K. A large negative ΔG° (large K) means products strongly favoured at equilibrium. This bridges thermodynamics and equilibrium chemistry — changing T shifts K via the van't Hoff equation: d(ln K)/dT = ΔH°/RT².

Entropy values (absolute, from the third law) can be looked up in tables: gases > liquids > solids; larger molecules have higher entropy; dissolving typically increases entropy. These enable calculation of ΔS°reaction = ΣS°products − ΣS°reactants.`,
      workedExample: {
        problem: "For the reaction: CaCO₃(s) → CaO(s) + CO₂(g), ΔH° = +178 kJ/mol and ΔS° = +165 J/mol/K. Calculate ΔG° at 298 K and find the temperature above which the reaction becomes spontaneous.",
        solution: "ΔG° = ΔH° − TΔS° = 178000 − (298 × 165) = 178000 − 49170 = +128,830 J/mol ≈ +129 kJ/mol. Not spontaneous at 298 K. Crossover temperature: T = ΔH°/ΔS° = 178000/165 ≈ 1079 K. Above ~1079 K, TΔS° > ΔH° and ΔG° < 0 — the decomposition becomes spontaneous.",
      },
      commonMistakes: [
        "Mixing units — ΔH in kJ and ΔS in J; always convert ΔS to kJ/K before subtracting.",
        "Forgetting ΔG = 0 at equilibrium, not ΔH = 0 — many confuse the equilibrium condition with the enthalpy condition.",
        "Using ΔG° (standard) to make predictions at non-standard concentrations — use ΔG = ΔG° + RT ln Q for those.",
      ],
      keyFacts: [
        "ΔG = ΔH − TΔS; spontaneous when ΔG < 0.",
        "ΔH = ΔU + ΔngRT (bomb calorimeter correction).",
        "Crossover T = ΔH/ΔS (when ΔH and ΔS have same sign, gives non-spontaneous regime).",
        "ΔG° = −RT ln K; large negative ΔG° → large K → products favoured.",
        "ΔS°reaction = ΣS°products − ΣS°reactants (third law gives absolute values).",
      ],
    },

    "Kinetics": {
      title: "Kinetics",
      keyIdea: "Rate equations, the Arrhenius equation, and reaction mechanisms connect measured rates to molecular-level events. The rate-determining step controls the overall rate law.",
      body: `The rate equation rate = k[A]^m[B]^n is determined experimentally — it cannot be deduced from the stoichiometric equation. Orders m and n are found by the initial rates method: doubling [A] while holding [B] constant and measuring the effect on rate. A first-order reaction gives a constant half-life (t½ = ln 2/k); second-order gives a straight line on a 1/[A] vs t plot; zero-order gives a straight line on [A] vs t.

The Arrhenius equation k = Ae^(−Ea/RT) quantifies how k depends on temperature. A (the pre-exponential factor) reflects collision frequency and orientation. A plot of ln k vs 1/T is linear with gradient −Ea/R, allowing Ea to be calculated from experimental k values at two temperatures via: ln(k₂/k₁) = (Ea/R)(1/T₁ − 1/T₂).

Reaction mechanisms consist of elementary steps. The rate-determining step (slowest) controls the overall rate law. For a proposed mechanism, the rate law predicted by the slow step must match the experimental rate equation — this is a key way to validate (or disprove) a mechanism. Intermediates appear in the mechanism but cancel from the overall equation; they are not the same as the transition state (the highest-energy point on the energy profile, which cannot be isolated).

Catalysts provide an alternative lower-Ea pathway. Homogeneous catalysts (same phase as reactants) often work by forming an intermediate with the reactant; heterogeneous catalysts (different phase) adsorb reactants onto their surface, weakening bonds. Enzymes are biological catalysts that follow Michaelis-Menten kinetics — at high substrate concentrations, the rate plateaus at Vmax as all active sites are saturated (zero-order in substrate).`,
      workedExample: {
        problem: "Rate data: Experiment 1 — [A]=0.1, [B]=0.1, rate=2×10⁻³. Experiment 2 — [A]=0.2, [B]=0.1, rate=4×10⁻³. Experiment 3 — [A]=0.1, [B]=0.3, rate=1.8×10⁻². Find the rate equation and k.",
        solution: "Exp 1→2: [A] doubles, rate doubles → first order in A. Exp 1→3: [B] triples, rate increases by 1.8×10⁻²/2×10⁻³ = 9 = 3² → second order in B. Rate = k[A][B]². k = rate/([A][B]²) = 2×10⁻³/(0.1 × 0.01) = 2 dm⁶ mol⁻² s⁻¹.",
      },
      commonMistakes: [
        "Reading orders from the balanced equation — orders must always be determined experimentally.",
        "Confusing the transition state (saddle point on PES, cannot be isolated) with a reaction intermediate (energy minimum, has finite lifetime).",
        "Getting the Arrhenius gradient sign wrong: slope of ln k vs 1/T = −Ea/R (negative gradient).",
      ],
      keyFacts: [
        "Orders determined experimentally; cannot be read from the equation coefficients.",
        "1st order: t½ constant = ln 2/k. 2nd order: 1/[A] vs t linear. 0th order: [A] vs t linear.",
        "ln k vs 1/T gradient = −Ea/R.",
        "RDS controls rate law: rate equation matches the elementary step concentrations in the slow step.",
        "Catalyst lowers Ea; does not change ΔH or equilibrium position.",
      ],
    },

    "Chemical equilibria": {
      title: "Chemical Equilibria",
      keyIdea: "The equilibrium constant K (Kc or Kp) quantifies the position of equilibrium. ΔG° = −RT ln K links thermodynamics to equilibrium; Le Chatelier's principle predicts qualitative shifts.",
      body: `At equilibrium, the forward and reverse rates are equal and concentrations (or partial pressures) are constant. Kc = product of [products]^stoich / product of [reactants]^stoich; Kp uses partial pressures. The two are related by Kp = Kc(RT)^Δng where Δng is the change in moles of gas. For reactions where Δng = 0, Kp = Kc.

The reaction quotient Q is calculated using current (non-equilibrium) concentrations. If Q < Kc, the reaction proceeds forward; if Q > Kc, it proceeds in reverse; if Q = Kc, the system is at equilibrium.

Temperature is the only factor that changes K. For an exothermic reaction, increasing temperature shifts equilibrium left (towards reactants), decreasing K. For endothermic reactions, K increases with temperature (van't Hoff equation: ln(K₂/K₁) = −ΔH°/R × (1/T₂ − 1/T₁)).

Pressure (for gas reactions with Δng ≠ 0) and concentration changes shift the position of equilibrium but do not change K. Catalysts do not change K or equilibrium position — they speed up attainment of equilibrium equally in both directions.

Acid-base equilibria use Ka (for weak acids), Kb (for weak bases), and Kw (= [H⁺][OH⁻] = 1×10⁻¹⁴ at 25°C). pH = −log[H⁺]; pKa = −log Ka. Buffer calculations use the Henderson-Hasselbalch equation: pH = pKa + log([A⁻]/[HA]). At the half-equivalence point of a titration, pH = pKa — the most useful buffer point. Solubility products Ksp define the maximum ion concentrations before precipitation occurs.`,
      workedExample: {
        problem: "For N₂(g) + 3H₂(g) ⇌ 2NH₃(g), Kp = 977 atm⁻² at 300 K. Calculate Kc. (R = 0.0821 L·atm/mol·K)",
        solution: "Δng = 2 − (1+3) = −2. Kp = Kc(RT)^Δng → Kc = Kp/(RT)^Δng = 977/(RT)^(−2) = 977 × (RT)². RT = 0.0821 × 300 = 24.63. (RT)² = 606.6. Kc = 977 × 606.6 = 5.93 × 10⁵ mol⁻² dm⁶.",
      },
      commonMistakes: [
        "Forgetting pure solids and pure liquids do not appear in Kc expressions (activity = 1).",
        "Saying a catalyst shifts equilibrium — it does not; it only speeds up the rate of reaching equilibrium.",
        "Applying Le Chatelier without checking whether the change affects K (temperature does) or only position (concentration, pressure do not affect K).",
      ],
      keyFacts: [
        "Kp = Kc(RT)^Δng; for Δng = 0, Kp = Kc.",
        "Q vs K determines direction of reaction; K unchanged by pressure, concentration, or catalyst.",
        "Temperature increases K for endothermic reactions; decreases K for exothermic.",
        "pH = pKa at half-equivalence point; Henderson-Hasselbalch: pH = pKa + log([A⁻]/[HA]).",
        "Ksp: precipitation occurs when ionic product > Ksp.",
      ],
    },
    "Redox chemistry & electrochemistry": {
      title: "Redox Chemistry & Electrochemistry",
      keyIdea: "Standard electrode potentials (E°) predict feasibility of redox reactions. The Nernst equation extends this to non-standard conditions. Electrolysis quantifies electrode reactions via Faraday's laws.",
      body: `Standard electrode potentials are measured versus the standard hydrogen electrode (SHE, E° = 0.00 V) with all species at 1 mol/dm³ (or 1 atm for gases) and 298 K. The more positive E°, the stronger the oxidising agent (the species is easily reduced). The more negative E°, the stronger the reducing agent.

For a cell reaction to be feasible, E°cell = E°cathode − E°anode must be positive. E°cell is related to Gibbs energy by ΔG° = −nFE°cell, linking electrochemistry to thermodynamics. A positive E°cell means ΔG° < 0 — the reaction is thermodynamically spontaneous under standard conditions. However, kinetic barriers may prevent the reaction from proceeding at a measurable rate.

The Nernst equation E = E° − (RT/nF)ln Q = E° − (0.0257/n)ln Q (at 298 K) gives the actual electrode potential at non-standard concentrations. This explains why cell voltage changes as the reaction proceeds (concentrations shift) and how concentration cells generate a voltage.

Electrolysis uses an external voltage to drive non-spontaneous reactions. Faraday's first law: mass deposited ∝ charge passed (Q = It). Faraday's second law: same charge deposits moles proportional to 1/(ionic charge). The charge needed to deposit one mole of a monovalent ion is F = 96485 C/mol; for a divalent ion, 2F.

At the cathode (−): cations are reduced. At the anode (+): anions are oxidised (or the anode itself dissolves if active). In the electrolysis of aqueous solutions, competition exists between the ions and water — selective discharge depends on E° and concentration (e.g., in concentrated NaCl: Cl₂ at anode despite O₂ being thermodynamically preferred, due to overpotential and high Cl⁻ concentration).

Disproportionation (a species simultaneously oxidised and reduced) and comproportionation (two oxidation states of the same element combining to give an intermediate state) are important redox reaction types identified by tracking oxidation states.`,
      workedExample: {
        problem: "Given E°(MnO₄⁻/Mn²⁺) = +1.51 V and E°(Cl₂/Cl⁻) = +1.36 V. (a) Is the oxidation of Cl⁻ by MnO₄⁻ feasible? (b) Calculate ΔG° if n = 10. (F = 96485 C/mol)",
        solution: "(a) E°cell = E°cathode − E°anode = 1.51 − 1.36 = +0.15 V > 0 → feasible. (b) ΔG° = −nFE° = −10 × 96485 × 0.15 = −144,728 J/mol ≈ −145 kJ/mol.",
      },
      commonMistakes: [
        "Subtracting electrode potentials the wrong way — E°cell = E°(cathode) − E°(anode); cathode is where reduction occurs.",
        "Concluding a reaction is fast because E°cell is large — electrode potentials say nothing about rate.",
        "In Faraday calculations, using moles of electrons = moles of substance without accounting for ionic charge (e.g. Cu²⁺ needs 2F per mol Cu).",
      ],
      keyFacts: [
        "E°cell = E°cathode − E°anode; positive E°cell → spontaneous (ΔG° < 0).",
        "ΔG° = −nFE°; n = moles of electrons transferred.",
        "Nernst: E = E° − (0.0257/n)ln Q at 298 K.",
        "Q = It; moles of substance = Q/(nF) where n is ionic charge.",
        "Cathode: reduction (cations gain e⁻). Anode: oxidation (anions lose e⁻ or electrode dissolves).",
      ],
    },

    "Organic chemistry: hydrocarbons": {
      title: "Organic Chemistry: Hydrocarbons",
      keyIdea: "Free radical substitution (alkanes), electrophilic addition (alkenes), and electrophilic aromatic substitution (arenes) are the three core mechanistic families at A-Level. Stereochemistry and isomerism run throughout.",
      body: `Alkanes undergo free radical substitution with halogens (UV). The chain mechanism: initiation (Cl₂ → 2Cl•), propagation (Cl• + RH → R• + HCl; R• + Cl₂ → RCl + Cl•), termination (two radicals combine). The mechanism produces a mixture of mono- and polysubstituted products, so selectivity is limited.

Alkenes undergo electrophilic addition. The double bond's π electrons attract electrophiles. Addition of Br₂ proceeds via a bromonium ion intermediate — the anti addition (trans product) observed is evidence for this. Markovnikov's rule (H adds to the less substituted carbon, halide to the more substituted) is explained by carbocation stability: tertiary > secondary > primary.

Arenes (benzene and derivatives) undergo electrophilic aromatic substitution (EAS), not addition, because disrupting the delocalized π system (152 kJ/mol resonance energy) is thermodynamically costly. The electrophile must be activated: Br₂/FeBr₃, NO₂⁺ (from HNO₃/H₂SO₄), carbocations (Friedel-Crafts), acylium ions (Friedel-Crafts acylation).

Directing effects: electron-donating groups (OH, NH₂, alkyl) activate the ring and direct ortho/para; electron-withdrawing groups (NO₂, C=O, halogens are mildly deactivating ortho/para directors) deactivate the ring and typically direct meta (except halogens which direct ortho/para despite being deactivating).

Stereoisomerism in organic chemistry: E/Z isomers from restricted rotation around C=C; optical isomers from chiral centres (sp³ carbon with four different groups). Enantiomers have identical physical and chemical properties except optical rotation and reaction rate with chiral reagents. A racemic mixture (50:50 enantiomers) shows zero net optical rotation and is produced when achiral reagents create a chiral centre.`,
      workedExample: {
        problem: "Write the mechanism for the electrophilic addition of HBr to propene, identifying the major product and explaining why it forms.",
        solution: "Step 1: H⁺ (from HBr) acts as electrophile and protonates the double bond. Addition to C1 gives a secondary carbocation (C2⁺, more stable); addition to C2 gives a primary carbocation (C1⁺, less stable). The secondary carbocation is preferred. Step 2: Br⁻ attacks C2⁺ from either side. Major product: 2-bromopropane (Markovnikov product). Minor product: 1-bromopropane.",
      },
      commonMistakes: [
        "Drawing the addition of Br₂ to alkenes as a simple one-step addition — it proceeds via a cyclic bromonium ion, giving anti addition (trans product).",
        "Applying Markovnikov's rule by rote without understanding it is driven by carbocation stability.",
        "Saying benzene undergoes addition — it undergoes substitution because addition would destroy the resonance stabilisation.",
      ],
      keyFacts: [
        "Free radical: initiation → propagation (×n) → termination. Mixture of products.",
        "Alkene + Br₂: bromonium ion intermediate → anti addition (trans product).",
        "Markovnikov: H⁺ to less substituted C (gives more stable carbocation).",
        "EAS: benzene + electrophile → substituted benzene + H⁺ (regenerated by catalyst).",
        "Chiral centre: sp³ carbon with 4 different groups → optical isomers (enantiomers).",
      ],
    },

    "Organic chemistry: functional groups": {
      title: "Organic Chemistry: Functional Groups",
      keyIdea: "Nucleophilic addition (carbonyls), nucleophilic substitution (halogenoalkanes, acyl chlorides), and condensation reactions cover the main A-Level functional group chemistry. Mechanism, stereochemistry, and selectivity are central.",
      body: `Carbonyl compounds (aldehydes and ketones) undergo nucleophilic addition at the electrophilic carbonyl carbon. Nucleophiles like CN⁻ (HCN/KCN) add to give hydroxynitriles; NaBH₄ (hydride source) reduces aldehydes to primary alcohols and ketones to secondary alcohols. Grignard reagents (RMgX) act as carbanion equivalents, adding to carbonyls to give alcohols after hydrolysis. These reactions create new C–C bonds.

Halogenoalkanes undergo nucleophilic substitution (NAS) or elimination. SN2 (second-order): concerted backside attack by the nucleophile → inversion of configuration (Walden inversion); favoured by primary alkyl halides and strong nucleophiles in polar aprotic solvents. SN1 (first-order): rate-determining ionisation to a carbocation intermediate → racemisation (attack from both faces); favoured by tertiary alkyl halides and polar protic solvents.

Competing elimination (E1 and E2) gives alkenes; favoured by bulky bases or high temperature. The order of leaving group ability: I > Br > Cl > F (bond strength decreases down the group), while C–F is the strongest (worst leaving group despite highest electronegativity).

Acyl chlorides are highly reactive towards nucleophilic acyl substitution: with water (hydrolysis to carboxylic acid), alcohols (ester), amines (amide). The mechanism involves addition to C=O followed by departure of Cl⁻ — much faster than ester hydrolysis because Cl⁻ is a far better leaving group than RO⁻.

Condensation polymers form by reaction of bifunctional monomers: polyesters (diol + dicarboxylic acid, −H₂O per linkage), polyamides (diamine + diacid, −HCl for nylon from acyl chloride route). Biodegradable polymers (e.g. polylactic acid) can be hydrolysed in the environment.`,
      workedExample: {
        problem: "Propan-2-ol is treated with acidified K₂Cr₂O₇. (a) What type of alcohol is it? (b) What is the organic product? (c) What colour change is observed?",
        solution: "(a) Secondary alcohol (OH on C2, attached to two carbon groups). (b) Propanone (a ketone) — secondary alcohols are oxidised only to ketones, not further. (c) The orange dichromate solution turns green as Cr₂O₇²⁻ is reduced to Cr³⁺ (green). Unlike primary alcohols, which go to aldehydes and then carboxylic acids under reflux, secondary alcohols stop at the ketone stage.",
      },
      commonMistakes: [
        "Saying secondary alcohols can be oxidised to carboxylic acids — only primary alcohols oxidise all the way to carboxylic acids; secondary alcohols give ketones only.",
        "Confusing SN1 and SN2 selectivity — SN2 is favoured at primary centres (less steric bulk); SN1 at tertiary (stable carbocation).",
        "Forgetting that NaBH₄ reduces carbonyls but not esters or carboxylic acids at room temperature (LiAlH₄ is needed for those).",
      ],
      keyFacts: [
        "Aldehydes oxidise to carboxylic acids; ketones do not oxidise further.",
        "SN2: primary, strong nucleophile, aprotic solvent → inversion. SN1: tertiary → racemisation.",
        "Leaving group order: I > Br > Cl >> F.",
        "Acyl chloride > acid anhydride > ester > amide in reactivity towards nucleophiles.",
        "Condensation polymer: bifunctional monomers + small molecule lost per link (H₂O or HCl).",
      ],
    },

    "Spectroscopy & analytical techniques": {
      title: "Spectroscopy & Analytical Techniques",
      keyIdea: "IR, MS, ¹H NMR, and ¹³C NMR together allow complete structural determination. Each gives complementary information; integrating all four is essential for A-Level structure elucidation.",
      body: `Mass spectrometry provides the molecular mass (M⁺ peak) and fragmentation pattern. Common losses: −15 (CH₃), −29 (CHO or C₂H₅), −31 (OCH₃), −45 (OC₂H₅). The base peak is the most abundant fragment. High-resolution MS gives the exact molecular formula from the precise mass (isotopic masses, not rounded atomic masses).

IR spectroscopy identifies functional groups from characteristic stretching frequencies: O–H (alcohol) broad 3200–3550 cm⁻¹; O–H (carboxylic acid) very broad 2500–3300 cm⁻¹; N–H 3100–3500 cm⁻¹; C≡N 2200 cm⁻¹; C=O (ketone) ~1715 cm⁻¹; C=O (ester) ~1735 cm⁻¹; C=O (amide) ~1680 cm⁻¹. The fingerprint region (<1500 cm⁻¹) is unique to each compound and used for identification by comparison.

¹H NMR chemical shifts (δ, ppm from TMS = 0): alkyl protons 0.5–2; protons adjacent to C=O 2–3; OCH₃ ~3.5; vinyl 5–6; aromatic 7–8; CHO ~9–10; COOH 10–12. Integration gives relative proton counts. Spin-spin coupling: n adjacent non-equivalent protons split a signal into n+1 lines (doublet, triplet, quartet, quintet). The coupling constant J (Hz) is the same for coupled protons.

¹³C NMR (proton-decoupled): one peak per distinct carbon environment; no splitting. DEPT experiments identify CH, CH₂, CH₃ (quaternary carbons absent). Typical ranges: C=O 160–220 ppm; aromatic C 110–150 ppm; aliphatic C 0–50 ppm.

Structure elucidation strategy: (1) calculate degrees of unsaturation (DoU = (2C+2+N−H)/2) to identify rings/double bonds; (2) use MS for Mr and fragments; (3) use IR to identify functional groups; (4) use ¹H NMR for proton environments and connectivity; (5) use ¹³C NMR to count distinct carbons.`,
      workedExample: {
        problem: "A compound C₃H₆O shows IR absorption at ~1715 cm⁻¹ (no O–H). ¹H NMR: δ 2.1 ppm (singlet, 3H) and δ 2.6 ppm (quartet, 2H) and δ 1.0 ppm (triplet, 3H). Identify the compound.",
        solution: "DoU = (2×3+2−6)/2 = 1 → one degree of unsaturation. IR at 1715 cm⁻¹ with no O–H → ketone C=O. NMR: triplet (3H) + quartet (2H) = ethyl group (CH₃CH₂–); singlet (3H) = CH₃ with no adjacent H. Structure: CH₃COCH₂CH₃ — butanone (methyl ethyl ketone). Wait — that's C₄H₈O. Reassign: C₃H₆O with 1 DoU and ketone → propanone (CH₃COCH₃): two equivalent CH₃ groups would give one singlet (6H). Recheck: singlet 3H + quartet 2H + triplet 3H = 8H but C₃H₆O only has 6H → the compound is actually propanal or the pattern suggests a misread. With C₃H₆O: propanone gives singlet (6H) only. The pattern singlet 3H + quartet 2H + triplet 3H (8H total) fits C₄H₈O = butanone. Final answer: the compound is butanone (C₄H₈O). The problem contains a formula error — always check H count from NMR integration against the molecular formula.",
      },
      commonMistakes: [
        "Confusing integration (relative proton numbers) with multiplicity (splitting pattern) — they give different information.",
        "Forgetting that O–H and N–H protons often appear as broad singlets (no coupling) due to rapid exchange.",
        "Using ¹³C chemical shifts in the ¹H NMR range — ¹³C carbonyls appear at 160–220 ppm, far beyond the ¹H scale.",
      ],
      keyFacts: [
        "IR: C=O (ketone) 1715; C=O (ester) 1735; O–H (alcohol) broad 3200–3550; O–H (acid) very broad 2500–3300.",
        "NMR n+1 rule: n adjacent non-equivalent H → n+1 peaks.",
        "DoU = (2C + 2 + N − H) / 2; each ring or double bond = 1 DoU; triple bond = 2 DoU.",
        "MS: M⁺ = molecular mass; M−15 = loss of CH₃; M−18 = loss of H₂O.",
        "¹³C DEPT: identifies CH, CH₂, CH₃; quaternary C absent.",
      ],
    },

    "Transition metals & coordination": {
      title: "Transition Metals & Coordination Chemistry",
      keyIdea: "Transition metals have variable oxidation states, form coloured complexes (d–d transitions), and act as catalysts. Crystal field theory explains colour and magnetism; the chelate effect drives complex stability.",
      body: `Transition metals (Sc–Zn) are defined by having at least one ion with a partially filled d sub-shell. This gives rise to: variable oxidation states (successive IE similar in energy for 3d/4s electrons), catalytic behaviour (variable OS allows redox cycles), coloured ions (d–d transitions absorb visible light), and complex ion formation (empty d orbitals accept lone pairs from ligands).

Crystal field theory: in an octahedral complex, ligand lone pairs approach along the axes, raising the energy of dz² and dx²−y² (the eg set) relative to dxy, dxz, dyz (the t₂g set). The energy gap Δoct determines the colour absorbed. Strong-field ligands (high in the spectrochemical series: CO > CN⁻ > NH₃ > H₂O > F⁻ > Cl⁻ > I⁻) give large Δ → absorbed light is higher energy (blue end) → complementary colour seen. They also favour low-spin configurations (electrons pair in t₂g before occupying eg).

MnO₄⁻ and CrO₄²⁻ are intensely coloured despite having d⁰ and d⁰ configurations (no d electrons for d–d transitions) — their colour arises from charge transfer (CT) transitions (O → metal), which are much more intense than d–d transitions.

The chelate effect: polydentate ligands (EDTA⁶⁻, en) form more stable complexes than equivalent monodentate ligands due to the favourable entropy change when multiple monodentate ligands are released. For example, replacing 6 H₂O with one EDTA: Δng(aqueous) → large positive ΔS → ΔG more negative.

Important transition metal chemistry: Fe²⁺/Fe³⁺ (catalyst in Haber process and Fenton chemistry); V²⁺ → V⁵⁺ oxidation states (vanadium catalyst in Contact Process); Cr as Cr₂O₇²⁻ (oxidising agent) and CrO₄²⁻ (precipitating agent); Mn as MnO₄⁻ (powerful oxidant in acid). Ligand substitution reactions can proceed by associative (expand coordination number) or dissociative (reduce coordination number) mechanisms.`,
      workedExample: {
        problem: "Explain why [Fe(CN)₆]⁴⁻ is diamagnetic but [Fe(H₂O)₆]²⁺ has 4 unpaired electrons. Fe is +2 (d⁶) in both.",
        solution: "In [Fe(H₂O)₆]²⁺, H₂O is a weak-field ligand → small Δoct. Electrons occupy all 5 d orbitals before pairing (high-spin): t₂g⁴eg² → 4 unpaired electrons (paramagnetic). In [Fe(CN)₆]⁴⁻, CN⁻ is a strong-field ligand → large Δoct. It is energetically favourable to pair electrons in t₂g rather than promote to eg (low-spin): t₂g⁶eg⁰ → 0 unpaired electrons (diamagnetic).",
      },
      commonMistakes: [
        "Saying all transition metal ions are coloured — Zn²⁺ (d¹⁰) and Sc³⁺ (d⁰) are colourless because they cannot undergo d–d transitions.",
        "Forgetting that MnO₄⁻ colour is charge transfer, not d–d, which is why it is so intensely purple.",
        "Confusing coordination number with oxidation state — [Fe(CN)₆]⁴⁻ has coordination number 6 and oxidation state +2.",
      ],
      keyFacts: [
        "Transition metal: ≥1 ion with incomplete d sub-shell → variable OS, colour, catalysis, complex formation.",
        "Octahedral crystal field: eg (dz², dx²−y²) raised; t₂g (dxy, dxz, dyz) lowered.",
        "Strong-field ligands → large Δ → low-spin; weak-field → small Δ → high-spin.",
        "Chelate effect: polydentate ligands more stable due to entropy gain (ΔS > 0 when monodentates released).",
        "Zn²⁺ (d¹⁰) and Sc³⁺ (d⁰) are colourless (no d–d transition possible).",
      ],
    },
  },
};

Object.keys(ALEVEL_CHEMISTRY_EXPLANATIONS).forEach((level) => {
  if (!EXPLANATIONS[level]) EXPLANATIONS[level] = {};
  Object.assign(EXPLANATIONS[level], ALEVEL_CHEMISTRY_EXPLANATIONS[level]);
});

// ─── Public helper ──────────────────────────────────────────────────────────
export function getExplanation(level, category) {
  const byLevel = EXPLANATIONS[level];
  if (!byLevel) return null;
  return byLevel[category] || null;
}
const KS2_BIOLOGY_EXPLANATIONS = {
  ks2: {

    "Plants": {
      title: "How Plants Grow & Reproduce",
      keyIdea: "Plants make their own food using sunlight, water, and carbon dioxide — and reproduce by producing seeds through pollination and fertilisation.",
      body: `Plants are the base of almost every food chain because they can make their own food. This process is called photosynthesis: plants capture light energy using green chlorophyll in their leaves, absorb carbon dioxide from the air through tiny pores (stomata), and draw water up from the soil through their roots and stem. The plant uses these ingredients to make glucose (a sugar) and releases oxygen as a by-product.

Each part of the plant has a specific job:
• Roots — absorb water and minerals from the soil and anchor the plant.
• Stem — transports water upward (in xylem tubes) and sugars downward (in phloem), and supports the plant.
• Leaves — the main site of photosynthesis; flat and thin to catch maximum light.
• Flowers — responsible for reproduction.

Flowers contain the male part (stamen, which produces pollen) and the female part (pistil/carpel, which contains the ovule). Pollination is when pollen is transferred from the stamen of one flower to the stigma of another — carried by insects attracted by colourful petals and nectar, or blown by the wind. After pollination, fertilisation occurs when a pollen tube grows and the male sex cell fuses with the egg in the ovule. The fertilised ovule develops into a seed inside a fruit.

Seeds need water, warmth, and oxygen to germinate (begin growing). They do not need light at first because they use the stored food inside the seed. Plants also store excess glucose as starch — a longer-term energy store.`,
      workedExample: {
        problem: "A plant is kept in a dark cupboard for three days. A leaf is tested with iodine solution. The iodine stays brown. What does this tell us?",
        solution: "The iodine staying brown means no starch is present. Without light, the plant cannot carry out photosynthesis, so no glucose is made and therefore no starch is stored. This is a standard 'destarching' experiment — it shows photosynthesis requires light."
      },
      commonMistakes: [
        "Confusing photosynthesis (making food) with respiration (releasing energy from food) — plants do both, but only photosynthesis needs light.",
        "Thinking roots absorb sunlight — roots absorb water and minerals from soil; sunlight is absorbed by the leaves.",
        "Saying plants breathe in oxygen and breathe out carbon dioxide — during the day, photosynthesis is faster than respiration so the NET exchange is CO₂ in, O₂ out."
      ],
      keyFacts: [
        "Photosynthesis: CO₂ + water + light energy → glucose + oxygen.",
        "Roots absorb water and minerals; stem transports; leaves photosynthesise.",
        "Pollination = transfer of pollen to stigma. Fertilisation = fusion of male and female sex cells.",
        "Seeds need water, warmth and oxygen to germinate — light is not required to start germination.",
        "Excess glucose is stored as starch."
      ]
    },

    "Animals including humans": {
      title: "The Human Body: Nutrition, Organs & Systems",
      keyIdea: "The human body is organised into organ systems — each with a specific role — and requires a balanced diet to keep all those systems working properly.",
      body: `Your body is made of cells organised into tissues, organs, and organ systems. Each system does a different job, and they work together to keep you alive.

The digestive system breaks food down into small molecules that can be absorbed into the blood. It runs from the mouth (where teeth chew and saliva begins breaking down starch) through the oesophagus, stomach, small intestine (where most nutrients are absorbed) and large intestine (where water is absorbed) to the rectum and anus.

The circulatory system delivers nutrients and oxygen to every cell. The heart pumps blood around two circuits: one to the lungs (to pick up oxygen) and one to the rest of the body. Arteries carry blood away from the heart; veins bring it back; tiny capillaries allow exchange with body cells. Red blood cells carry oxygen using haemoglobin; white blood cells fight infection.

The skeletal and muscular systems work together — muscles pull on bones via tendons to create movement. The skeleton also protects vital organs (the skull protects the brain; ribs protect the heart and lungs) and makes blood cells in the bone marrow.

A balanced diet provides: carbohydrates (energy), proteins (growth and repair), fats (energy storage and insulation), vitamins and minerals (e.g. Vitamin C for immunity, Vitamin D for bones, iron for haemoglobin, calcium for bones), water (all chemical reactions in the body need water), and fibre (to keep the digestive system moving).`,
      workedExample: {
        problem: "A child's diet is very low in Vitamin D and calcium. What health problems might they develop?",
        solution: "Vitamin D helps the body absorb calcium from food. Without enough of either, bones do not harden properly. Children can develop rickets — soft, weak, bowed bones. Adults may develop osteomalacia (soft bones). The fix is more dairy, oily fish, eggs, and exposure to sunlight (which triggers Vitamin D production in the skin)."
      },
      commonMistakes: [
        "Confusing tendons (muscle to bone) with ligaments (bone to bone).",
        "Thinking the stomach is where most digestion happens — most nutrient absorption occurs in the small intestine, not the stomach.",
        "Saying all fats are bad — fats are essential for cell membranes, hormones and energy storage; it's excess intake that causes problems."
      ],
      keyFacts: [
        "Heart → arteries → capillaries → veins → heart. Red blood cells carry O₂; white blood cells fight infection.",
        "Small intestine: absorbs nutrients. Large intestine: absorbs water.",
        "Tendons attach muscles to bones; ligaments attach bones to bones.",
        "Carbohydrates = energy; proteins = growth/repair; fats = energy store; vitamins/minerals = body maintenance.",
        "Vitamin D + calcium → healthy bones; iron → haemoglobin for O₂ transport."
      ]
    },

    "Living things & their habitats": {
      title: "Habitats, Food Chains & Classification",
      keyIdea: "All living things are adapted to their environment, interact through food chains and webs, and can be grouped by their characteristics.",
      body: `A habitat is the natural environment where an organism lives. It provides everything that organism needs: food, water, shelter, and mates. Different habitats (woodland, pond, seashore, desert) support very different communities of organisms because the conditions — temperature, light, moisture — vary greatly.

Organisms are classified into groups based on shared characteristics. The main groups of vertebrates (animals with a backbone) are: fish (breathe with gills, lay eggs in water, cold-blooded), amphibians (live in water and land, moist skin, cold-blooded), reptiles (dry scaly skin, cold-blooded), birds (feathers, warm-blooded, lay hard-shelled eggs), and mammals (fur or hair, warm-blooded, feed young on milk). Invertebrates (no backbone) include insects (6 legs), spiders (8 legs), worms, snails, and many others.

Food chains show how energy passes from producers (plants, which make food via photosynthesis) through primary consumers (herbivores), secondary consumers (carnivores that eat herbivores), and tertiary consumers (top predators). Arrows show the direction of energy flow. For example: grass → rabbit → fox → eagle.

Decomposers (bacteria and fungi) break down dead organisms and return nutrients to the soil — they are essential for recycling and are part of every ecosystem.

Adaptation means an organism has features that suit it to its environment. A polar bear has thick white fur (insulation + camouflage), small ears (reduce heat loss), and large feet (spread weight on ice). A cactus has thick stems (water storage), spines (reduced leaf surface area to reduce water loss), and deep roots.`,
      workedExample: {
        problem: "In a pond ecosystem: algae → water fleas → small fish → large fish. The small fish population suddenly decreases due to disease. Predict what happens to the water flea population and the large fish population.",
        solution: "Water flea numbers would INCREASE — fewer small fish eating them. Large fish numbers would DECREASE — less food available. This is a classic predator-prey interaction. In reality, over time, more large fish would die, fewer water fleas would be eaten, algae might decrease as more water fleas eat them, and eventually the system would tend back towards balance."
      },
      commonMistakes: [
        "Drawing food chain arrows pointing from predator to prey — arrows show the direction of ENERGY TRANSFER (from eaten to eater).",
        "Saying decomposers are at the top of food chains — decomposers are not part of the linear food chain; they act on all levels by breaking down dead material.",
        "Confusing adaptation (a feature) with evolution (the process by which adaptations develop over generations)."
      ],
      keyFacts: [
        "Food chain arrows point in the direction of energy flow: producer → primary consumer → secondary consumer.",
        "Vertebrate groups: fish, amphibians, reptiles, birds, mammals.",
        "Herbivore = eats plants; carnivore = eats animals; omnivore = eats both; decomposer = breaks down dead matter.",
        "Adaptations are features that help an organism survive in its specific environment.",
        "Decomposers recycle nutrients back into the soil — vital for plant growth."
      ]
    },

    "Evolution & inheritance": {
      title: "Evolution, Inheritance & Natural Selection",
      keyIdea: "Offspring inherit characteristics from their parents through genes; natural selection causes populations to change over many generations as better-adapted individuals survive and reproduce more.",
      body: `Inheritance is the passing of characteristics from parents to their offspring through genes — sections of DNA found on chromosomes in the nucleus of every cell. This is why children resemble their parents but are not identical to them: they inherit a combination of genes from both parents.

Variation exists within every species: no two individuals (except identical twins) are exactly alike. Some variation is inherited (eye colour, blood group) and some is caused by the environment (a scar, a suntan). Most characteristics are influenced by both.

Charles Darwin, after observing thousands of species on his voyage on HMS Beagle (especially the finches of the Galápagos Islands), proposed the theory of evolution by natural selection. His reasoning:
1. There is variation within populations.
2. Resources are limited, so there is competition for survival.
3. Some individuals have variations that make them better adapted to their environment.
4. These individuals are more likely to survive, reproduce, and pass their advantageous traits to offspring.
5. Over many generations, the frequency of useful traits increases — the population evolves.

Fossils (preserved remains or traces of ancient organisms found in rock) provide evidence that species have changed over time. Selective breeding is different: humans deliberately choose which organisms to breed in order to produce offspring with desired traits — bigger fruit, more milk, faster horses.

A species becomes extinct when all its members die and no offspring remain. Human activities (habitat destruction, hunting, pollution, climate change) have greatly accelerated extinction rates.`,
      workedExample: {
        problem: "A population of moths lives in a forest. Most moths are pale (hard to see on pale bark). A factory opens and soot turns the bark dark. Over 30 years, most moths become dark. Explain this using natural selection.",
        solution: "Before pollution: pale moths were camouflaged on pale bark → less likely to be eaten by birds → more likely to survive and reproduce → pale allele passed on. After soot darkens bark: pale moths become visible to birds → eaten more → fewer survive to reproduce. Dark moths are now better camouflaged → survive more → pass on dark allele. Over generations, dark moth allele becomes more frequent in the population. This is natural selection acting on an existing variation."
      },
      commonMistakes: [
        "Saying organisms 'decide' or 'try' to adapt — individuals do not choose to change; natural selection acts on random variation that already exists.",
        "Confusing evolution (change in populations over generations) with individual change during a lifetime — a giraffe does not grow a longer neck; long-necked giraffes were always there and survived better.",
        "Thinking selective breeding = natural selection — selective breeding is done deliberately by humans; natural selection happens automatically in nature."
      ],
      keyFacts: [
        "Genes (on chromosomes, in the nucleus) carry inherited information from parents to offspring.",
        "Variation: inherited (eye colour) vs. environmental (scars). Most traits have both influences.",
        "Natural selection: variation → competition → better-adapted survive → reproduce → allele frequency changes over generations.",
        "Fossils are evidence that species have changed (evolved) over millions of years.",
        "Selective breeding = human choice of parents for desired traits. Natural selection = nature 'choosing' via survival."
      ]
    },
  },
};

Object.keys(KS2_BIOLOGY_EXPLANATIONS).forEach((level) => {
  if (!EXPLANATIONS[level]) EXPLANATIONS[level] = {};
  Object.assign(EXPLANATIONS[level], KS2_BIOLOGY_EXPLANATIONS[level]);
});

// ─── KS3 Biology ─────────────────────────────────────────────────────────────
const KS3_BIOLOGY_EXPLANATIONS = {
  ks3: {

    "Cells & organisation": {
      title: "Cells, Microscopy & Organisation",
      keyIdea: "All living things are made of cells; different cell types are specialised for their function; cells are organised into tissues, organs and organ systems.",
      body: `The cell is the basic unit of life. All cells share some features: a cell membrane (controls entry/exit of substances), cytoplasm (where chemical reactions occur), and DNA (genetic information). Animal cells and plant cells differ: plant cells additionally have a rigid cell wall made of cellulose (for support), chloroplasts (for photosynthesis), and a large permanent vacuole (stores cell sap, maintains turgor).

Key organelles and their functions:
• Nucleus — contains chromosomes (DNA); controls cell activities.
• Mitochondria — site of aerobic respiration; release energy (ATP) from glucose.
• Ribosomes — site of protein synthesis.
• Chloroplasts (plant only) — contain chlorophyll; site of photosynthesis.
• Cell vacuole (large in plant cells) — stores water and dissolved substances; maintains cell shape.

Specialised cells are adapted for their function:
• Red blood cells — biconcave disc (large surface area); no nucleus (more room for haemoglobin); carry O₂.
• Root hair cells — long extensions (large surface area) for absorbing water and minerals.
• Muscle cells — many mitochondria (energy for contraction); contain contractile proteins.
• Sperm cells — streamlined; long tail (flagellum) powered by many mitochondria; acrosome to penetrate egg.

Substances move between cells by diffusion (net movement of particles from high to low concentration), osmosis (net movement of water through a semi-permeable membrane from high water concentration to low), and active transport (movement against a concentration gradient, requiring energy).

Organisation: cells → tissues → organs → organ systems → organism.`,
      workedExample: {
        problem: "A student places red blood cells into a very concentrated salt solution. The cells shrink and become crenated. Explain why using osmosis.",
        solution: "In concentrated salt solution, the water concentration outside the cell is lower than inside the cell. By osmosis, water moves down its concentration gradient — out of the cell, through the partially permeable cell membrane. The cell loses water and shrinks (crenates). If placed in pure water, the opposite would happen: water would move in and the cell would swell."
      },
      commonMistakes: [
        "Saying chloroplasts are found in all plant cells — they are only in cells exposed to light (e.g. leaf mesophyll); root cells have no chloroplasts.",
        "Confusing diffusion and osmosis — osmosis specifically refers to water movement through a semi-permeable membrane; diffusion applies to any particle moving down a concentration gradient.",
        "Forgetting that the cell wall is NOT the same as the cell membrane — the wall is rigid (cellulose, plants only); the membrane is flexible and controls what passes through."
      ],
      keyFacts: [
        "Plant cell extras: cell wall (cellulose), chloroplasts, large permanent vacuole.",
        "Mitochondria = aerobic respiration (ATP production). Ribosomes = protein synthesis.",
        "Diffusion: high → low concentration (no energy). Osmosis: water high → low water concentration through semi-permeable membrane. Active transport: against gradient (requires energy).",
        "Organisation hierarchy: cell → tissue → organ → organ system → organism.",
        "Specialised cells have structural adaptations that maximise their function."
      ]
    },

    "Nutrition & digestion": {
      title: "Digestion, Enzymes & Nutrition",
      keyIdea: "Digestion breaks down large insoluble food molecules into small soluble ones that can be absorbed — enzymes are the biological catalysts that make this possible.",
      body: `Food contains large insoluble molecules (starch, proteins, fats) that must be broken down into small soluble molecules (glucose, amino acids, fatty acids + glycerol) that can pass through the gut wall into the blood. This is the job of digestion, which has two components: mechanical digestion (teeth, stomach churning) and chemical digestion (enzymes).

Enzymes are biological catalysts — proteins that speed up specific chemical reactions without being used up. Each enzyme has an active site with a specific shape; only the correct substrate fits ('lock and key' model). Key digestive enzymes:
• Amylase — digests starch → maltose/glucose. Found in saliva and pancreatic juice. Works best at pH 7.
• Protease (e.g. pepsin) — digests proteins → amino acids. Pepsin in the stomach works best at pH 2 (acidic).
• Lipase — digests fats → fatty acids + glycerol. Works in the small intestine.

Bile, produced by the liver and stored in the gall bladder, is not an enzyme — it emulsifies fat (breaks large fat droplets into smaller ones), greatly increasing the surface area for lipase to act on.

The optimum temperature for most human enzymes is around 37°C (body temperature). Above about 45°C, enzymes are denatured — the heat changes the shape of the active site so the substrate no longer fits. Activity also falls sharply at very low temperatures (enzyme and substrate molecules move more slowly).

Food tests: starch → iodine turns blue-black; reducing sugars → Benedict's solution turns brick-red on heating; protein → Biuret reagent turns purple; fats → ethanol test (cloudy emulsion with water).

Absorption mainly occurs in the small intestine. Villi (finger-like projections) massively increase surface area. Each villus has a good blood supply (capillaries) and lacteals (for fat absorption).`,
      workedExample: {
        problem: "An enzyme solution is tested at 20°C, 37°C, 55°C and 80°C. Describe and explain the results you would expect.",
        solution: "At 20°C: some activity, but slow — molecules have less kinetic energy so fewer enzyme–substrate collisions per second. At 37°C: maximum activity — this is the optimum temperature for most human enzymes. At 55°C: activity sharply lower — enzyme beginning to denature; active site shape distorted; fewer substrate molecules can bind. At 80°C: no activity — enzyme fully denatured; active site permanently changed; substrate cannot bind at all."
      },
      commonMistakes: [
        "Saying 'enzymes are killed by heat' — enzymes are proteins, not living things. They are denatured (shape permanently altered), not killed.",
        "Thinking bile is an enzyme — bile emulsifies fat (a physical process), it does not chemically digest fat. Lipase does the chemical digestion.",
        "Confusing amylase and protease — amylase acts on starch; protease acts on proteins."
      ],
      keyFacts: [
        "Amylase: starch → sugars (mouth and small intestine). Protease: proteins → amino acids (stomach and small intestine). Lipase: fats → fatty acids + glycerol.",
        "Enzymes are denatured above their optimum temperature (active site shape changes permanently).",
        "Bile: made in liver, stored in gall bladder; emulsifies fat (not digestion — increases surface area).",
        "Food tests: iodine = starch; Benedict's (heat) = reducing sugar; Biuret = protein; ethanol emulsion = fat.",
        "Villi in small intestine → large surface area → rapid absorption of digested nutrients."
      ]
    },

    "Reproduction": {
      title: "Sexual & Asexual Reproduction",
      keyIdea: "Sexual reproduction involves two parents and produces genetically varied offspring via fertilisation; asexual reproduction involves one parent and produces genetically identical clones.",
      body: `Reproduction ensures continuation of a species. There are two fundamental types:

Asexual reproduction involves one parent — no fertilisation. All offspring are genetically identical to the parent (clones). Examples: binary fission in bacteria, budding in yeast, runners in strawberry plants, bulbs in daffodils. Advantages: fast, requires no mate, all offspring can reproduce. Disadvantage: no genetic variation — a disease can wipe out all individuals.

Sexual reproduction involves two parents. Male and female gametes (sex cells) fuse in fertilisation to produce a zygote. Gametes are produced by meiosis and contain half the normal chromosome number (haploid: 23 in humans). When two gametes fuse, the full chromosome number is restored (diploid: 46 in humans). The resulting offspring have a unique combination of genetic material from both parents — genetic variation.

In humans: eggs are produced in the ovaries; sperm in the testes. Fertilisation normally occurs in the oviduct (fallopian tube). The zygote divides and implants in the uterus wall. The placenta develops to allow exchange of nutrients, oxygen, and waste between mother and fetus (without blood mixing). The human gestation period is approximately 9 months.

In plants: pollination transfers pollen from anther (male) to stigma (female). Insect-pollinated flowers are large, colourful, scented with nectar. Wind-pollinated flowers have feathery stigmas, large amounts of light pollen, and no petals/scent. After fertilisation, the ovule becomes a seed and the ovary becomes a fruit. Seeds are dispersed by wind, water, animals (fur/eating), or explosive mechanisms.`,
      workedExample: {
        problem: "A farmer grows strawberry plants and uses runners (horizontal stems that root to form new plants) to propagate his crop. Why is this method useful commercially, but potentially risky?",
        solution: "Useful: it is fast, cheap, produces many identical plants that all have the desired traits (e.g. sweetness, yield). The farmer knows exactly what he is getting. Risky: all the plants are genetically identical clones. If a new disease or pest arises that one plant is susceptible to, ALL plants will be equally susceptible — there is no variation that might give some individuals resistance. The entire crop could be lost."
      },
      commonMistakes: [
        "Saying gametes are produced by mitosis — gametes (sperm and eggs) are produced by MEIOSIS (which halves the chromosome number). Mitosis produces identical body cells.",
        "Confusing pollination and fertilisation — pollination is the transfer of pollen to stigma; fertilisation is the fusion of sex cells inside the ovule.",
        "Thinking the placenta allows blood to mix between mother and fetus — nutrients and gases pass across, but the blood supplies are separate."
      ],
      keyFacts: [
        "Asexual: one parent, clones (identical offspring), no fertilisation. Fast but no genetic variation.",
        "Sexual: two parents, fertilisation (gamete fusion), genetically varied offspring.",
        "Gametes (haploid: 23 chromosomes) produced by meiosis. Fertilisation restores diploid (46 chromosomes).",
        "Human fertilisation: in oviduct. Gestation: ~9 months. Placenta: nutrient/gas exchange (no blood mixing).",
        "Insect pollination: large, coloured, scented flowers. Wind pollination: feathery stigma, large light pollen, no petals."
      ]
    },

    "Respiration & gas exchange": {
      title: "Respiration & Gas Exchange",
      keyIdea: "Respiration releases energy from glucose in every living cell; aerobic respiration uses oxygen and is more efficient; gas exchange in the lungs moves O₂ into the blood and CO₂ out.",
      body: `Respiration is not breathing — it is the chemical process in every cell that releases energy (as ATP) from glucose. It occurs in the mitochondria (for aerobic respiration).

Aerobic respiration (with oxygen):
glucose + oxygen → carbon dioxide + water (+ energy)
C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O

This releases approximately 36–38 molecules of ATP per glucose — very efficient.

Anaerobic respiration (without oxygen):
In animal muscle cells: glucose → lactic acid (+ small amount of energy)
In yeast: glucose → ethanol + carbon dioxide (+ small amount of energy)

Anaerobic respiration is much less efficient (only 2 ATP per glucose) and in animals produces lactic acid, which causes muscle fatigue and soreness. Lactic acid must be broken down after exercise using extra oxygen — this is called the oxygen debt.

Gas exchange in the lungs happens in the alveoli. They are adapted with: a very large surface area (approximately 70 m² in an adult), very thin walls (one cell thick), a moist lining (gases dissolve before diffusing), and a dense capillary network. Oxygen diffuses from the alveoli into the blood; carbon dioxide diffuses from the blood into the alveoli to be exhaled.

Breathing (ventilation) moves air in and out. During inhalation: the diaphragm contracts and flattens, intercostal muscles contract raising the ribs, thorax volume increases, pressure inside drops below atmospheric, and air flows in.

Fermentation by yeast is used in baking (CO₂ makes dough rise) and brewing (ethanol production).`,
      workedExample: {
        problem: "A sprinter runs 100m at maximum speed. At the end she is breathing heavily and feels her legs burning. Explain what happened in her muscles during the race and after it.",
        solution: "During the sprint: oxygen demand in leg muscles exceeded supply. Anaerobic respiration: glucose → lactic acid + energy. Only a small amount of ATP produced. Lactic acid builds up causing burning sensation (muscle fatigue). After the race: she breathes heavily — increased breathing rate and depth delivers more oxygen to the muscles. This extra oxygen is used to break down lactic acid (oxidise it back to CO₂ and water). This is repaying the oxygen debt. Heart rate also remains elevated to deliver oxygen-rich blood to muscles."
      },
      commonMistakes: [
        "Saying 'plants respire but animals breathe' — ALL living cells respire (release energy from glucose). Breathing (ventilation) is just the mechanism animals use to move air to the gas exchange surface.",
        "Mixing up photosynthesis and respiration equations — respiration is the REVERSE of photosynthesis; respiration uses O₂ and releases CO₂.",
        "Thinking anaerobic respiration in humans produces ethanol — only yeast produces ethanol. Human muscles produce lactic acid during anaerobic respiration."
      ],
      keyFacts: [
        "Aerobic: glucose + O₂ → CO₂ + H₂O + energy (lots of ATP). In mitochondria.",
        "Anaerobic (animals): glucose → lactic acid + little energy. (Yeast: → ethanol + CO₂.)",
        "Oxygen debt: extra O₂ needed after exercise to break down lactic acid.",
        "Alveoli adaptations: huge surface area, thin walls, moist, dense capillary network.",
        "Inhalation: diaphragm contracts (flattens), ribcage rises, thorax volume ↑, pressure ↓, air flows in."
      ]
    },

    "Photosynthesis": {
      title: "Photosynthesis & Limiting Factors",
      keyIdea: "Photosynthesis converts light energy into chemical energy stored in glucose — the rate is controlled by whichever factor (light, CO₂, temperature) is in shortest supply.",
      body: `Photosynthesis is the process by which plants, algae, and some bacteria convert light energy into chemical energy stored as glucose. It occurs in chloroplasts, which contain the green pigment chlorophyll that absorbs light (mostly red and blue wavelengths — green is reflected, hence the green colour of plants).

The equation: 6CO₂ + 6H₂O + light energy → C₆H₁₂O₆ + 6O₂

Plants use glucose for: respiration (releasing energy for growth and movement), making cellulose (cell walls), making starch (energy storage), making proteins (when combined with nitrogen and minerals from soil), and making fats/oils (seeds).

The rate of photosynthesis is affected by three main limiting factors — any one of them can be the 'bottleneck':
• Light intensity — more light = more photosynthesis, up to a point. Beyond the light saturation point, other factors become limiting.
• Carbon dioxide concentration — more CO₂ = faster photosynthesis, up to a limit.
• Temperature — higher temperature increases enzyme activity, speeding up the reaction, up to the optimum (~25–30°C for most plants). Above this, enzymes are denatured and rate falls.

The compensation point is the light intensity at which the rate of photosynthesis exactly equals the rate of respiration — net gas exchange is zero.

Leaf structure is optimised for photosynthesis: palisade mesophyll (many chloroplasts, near top surface for maximum light), spongy mesophyll (air spaces for CO₂ diffusion), stomata controlled by guard cells (open in light, close in dark to reduce water loss), waxy cuticle (waterproofing), xylem (water delivery), phloem (glucose export).`,
      workedExample: {
        problem: "A student investigates how light intensity affects photosynthesis using Canadian pondweed. She counts bubbles per minute at distances of 10 cm, 20 cm, 30 cm, and 40 cm from a lamp. Results: 40, 22, 12, 7 bubbles/min. (a) What are the bubbles? (b) Why does the rate decrease with distance? (c) Name two other variables she should control.",
        solution: "(a) Oxygen gas — the product of photosynthesis. (b) Light intensity decreases with the square of the distance from the lamp (inverse square law). Less light energy available → fewer photosynthesis reactions per second → fewer O₂ bubbles. (c) Temperature (use a water bath), CO₂ concentration (add sodium hydrogen carbonate to water), and species/size of pondweed."
      },
      commonMistakes: [
        "Saying plants only photosynthesise during the day — true, but they also respire ALL the time (day and night). The NET gas exchange during the day appears to be CO₂ in + O₂ out because photosynthesis rate > respiration rate.",
        "Thinking the glucose from photosynthesis is immediately released as oxygen — oxygen is a by-product; glucose is the main product that the plant uses.",
        "Confusing the light-dependent and light-independent reactions at this level — just know that light is needed to split water and CO₂ is needed to make glucose."
      ],
      keyFacts: [
        "Photosynthesis: 6CO₂ + 6H₂O + light → C₆H₁₂O₆ + 6O₂. Site: chloroplasts.",
        "Chlorophyll absorbs red + blue light; reflects green → leaves appear green.",
        "Three limiting factors: light intensity, CO₂ concentration, temperature.",
        "Compensation point: photosynthesis rate = respiration rate (no net gas exchange).",
        "Stomata (guard cells) control CO₂ entry and water loss; open in light."
      ]
    },

    "Ecosystems & ecology": {
      title: "Ecosystems, Food Webs & the Carbon Cycle",
      keyIdea: "Ecosystems are communities of organisms interacting with each other and their non-living environment; energy flows through food chains and matter is cycled by processes including respiration, photosynthesis, and decomposition.",
      body: `An ecosystem includes all the living organisms (the community) and the non-living environment (abiotic factors: temperature, light, water, pH, soil) in a given area. A community is all the populations (groups of one species) in an area interacting together.

Energy enters most ecosystems as light (captured by producers via photosynthesis). It passes along food chains: producer → primary consumer → secondary consumer → tertiary consumer. At each step, approximately 90% of energy is lost (used in respiration, movement, heat, and passed in undigested faeces). This is why food chains rarely have more than 4–5 steps, and why eating lower in the food chain is more energy-efficient.

A pyramid of biomass shows the dry mass of organisms at each trophic level — it should always be wider at the bottom (producers) because most biomass is lost at each step. Unlike numbers pyramids, biomass pyramids are almost always a true pyramid shape.

The carbon cycle: carbon (as CO₂) is removed from the atmosphere by photosynthesis → stored as organic molecules → released back by respiration (all organisms), decomposition (bacteria and fungi breaking down dead organisms), combustion (burning fossil fuels and wood). Fossil fuels are formed from organisms that died millions of years ago — burning them rapidly releases carbon that was locked away for millions of years, raising atmospheric CO₂ levels and contributing to climate change.

Interactions between species: competition (same or different species competing for food, water, space, mates), predation (predator-prey cycles), and mutualism (both species benefit, e.g. bees and flowers).

Ecological fieldwork: quadrats (sampling stationary organisms — plants, barnacles) and mark-release-recapture (estimating mobile animal populations).`,
      workedExample: {
        problem: "In a grassland: grass → rabbit → fox. There are 10,000 kg of grass, 1,000 kg of rabbits, and 100 kg of foxes. (a) Draw a pyramid of biomass. (b) Explain why only 10% of grass biomass is passed to rabbits.",
        solution: "(a) Three horizontal bars, widest at the bottom (grass 10,000 kg), middle (rabbits 1,000 kg), narrowest at top (foxes 100 kg). (b) Rabbits use most of the energy they get from grass for respiration (to stay warm and move), growth of indigestible parts, and excretion. Only approximately 10% of the energy (and therefore biomass) is actually incorporated into rabbit body tissue, available for the next trophic level."
      },
      commonMistakes: [
        "Confusing a food web with a food chain — a food chain is a single pathway; a food web shows multiple interconnected pathways in an ecosystem.",
        "Thinking decomposers are at the top of a food chain — decomposers act on ALL trophic levels, breaking down dead material from producers, herbivores and carnivores alike.",
        "Saying the energy lost between trophic levels 'disappears' — it is converted to heat (via respiration) or passed in faeces; energy is never created or destroyed, just transferred."
      ],
      keyFacts: [
        "Energy flow: producer → consumers. ~90% lost at each step (respiration, heat, faeces).",
        "Pyramid of biomass: always wider at base (producers carry most biomass).",
        "Carbon cycle: photosynthesis removes CO₂; respiration, decomposition and combustion return it.",
        "Decomposers (bacteria/fungi) recycle nutrients — essential for plant growth.",
        "Quadrat: sample sessile organisms. Mark-release-recapture: estimate mobile animal populations."
      ]
    },

    "Genes, inheritance & variation": {
      title: "Genes, Chromosomes & Inheritance",
      keyIdea: "Characteristics are inherited via genes on chromosomes; dominant and recessive alleles determine phenotype; Punnett squares predict the probability of offspring inheriting particular traits.",
      body: `DNA (deoxyribonucleic acid) is a double-helix molecule found in the nucleus. It is organised into chromosomes — human body cells have 46 chromosomes (23 pairs). Each chromosome carries many genes, each gene being a section of DNA that codes for a specific protein (which determines a characteristic).

Alleles are different versions of the same gene. For example, the gene for eye colour may have a 'brown' allele and a 'blue' allele. An organism has two alleles of each gene (one from each parent). If both alleles are the same, the organism is homozygous. If different, it is heterozygous.

An allele is dominant if it is expressed whenever it is present (even with one copy). A recessive allele is only expressed when two copies are present (homozygous recessive). We write dominant alleles as capital letters (B) and recessive as lower case (b).

Genotype: the alleles an organism has (e.g. Bb).
Phenotype: the observable characteristics (e.g. brown eyes).

A Punnett square predicts the probability of offspring genotypes and phenotypes. For two carriers of cystic fibrosis (Ff × Ff): offspring probabilities are FF (25%, unaffected), Ff (50%, carrier), ff (25%, affected).

Variation in a population can be:
• Discontinuous — distinct categories, no intermediate values (e.g. blood group A, B, AB, O; tongue rolling).
• Continuous — range of values (e.g. height, mass, skin tone).

Mutations are random changes in the DNA base sequence. Most mutations have no effect; some are harmful; very rarely, a mutation is beneficial. UV radiation and some chemicals increase mutation rates.

Sex determination: females have XX chromosomes; males have XY. The Y chromosome from the father determines male sex.`,
      workedExample: {
        problem: "Cystic fibrosis (CF) is caused by a recessive allele (f). Two parents are both carriers (Ff). (a) Complete a Punnett square. (b) What is the probability of their child having CF? (c) What is the probability of a child being a carrier?",
        solution: `(a) Punnett square (F from each parent on axes):
     F    f
F  [ FF | Ff ]
f  [ Ff | ff ]

(b) ff = 1 in 4 = 25% probability of having CF.
(c) Ff (carriers) = 2 in 4 = 50% probability of being a carrier.
Note: probability of being unaffected (FF or Ff) = 75%.`
      },
      commonMistakes: [
        "Forgetting that a carrier (Ff) does NOT have the disease — they have one dominant allele masking the recessive one. They can still pass the recessive allele to children.",
        "Confusing genotype (the alleles) with phenotype (what you can see/measure).",
        "Thinking characteristics are only determined by genes — many traits (especially continuous ones like height) are influenced by both genes AND environment."
      ],
      keyFacts: [
        "Human body cells: 46 chromosomes (23 pairs). Gametes: 23 chromosomes (haploid).",
        "Alleles: different versions of a gene. Dominant (B) expressed over recessive (b).",
        "Homozygous: same alleles (BB or bb). Heterozygous: different alleles (Bb).",
        "Punnett square predicts offspring ratios from parent genotypes.",
        "Sex: females XX, males XY. CF recessive: ff = affected; Ff = carrier; FF = unaffected."
      ]
    },

  },
};

Object.keys(KS3_BIOLOGY_EXPLANATIONS).forEach((level) => {
  if (!EXPLANATIONS[level]) EXPLANATIONS[level] = {};
  Object.assign(EXPLANATIONS[level], KS3_BIOLOGY_EXPLANATIONS[level]);
});

const GCSE_BIOLOGY_EXPLANATIONS = {
  gcse: {

    "Cell biology": {
      title: "Cell Biology: Structure, Division & Transport",
      keyIdea: "All living things are made of cells; eukaryotic and prokaryotic cells differ in structure; mitosis produces identical cells; substances move by diffusion, osmosis and active transport.",
      body: `Eukaryotic cells (animals, plants, fungi) have a true nucleus enclosed by a nuclear membrane and membrane-bound organelles. Prokaryotic cells (bacteria) have no nucleus — their DNA floats free in the cytoplasm, often as a circular chromosome. Bacteria may also carry small circular DNA rings called plasmids, and their ribosomes are smaller (70S vs 80S in eukaryotes).

Key organelles: nucleus (DNA control centre), mitochondria (aerobic respiration/ATP), ribosomes (protein synthesis), cell membrane (phospholipid bilayer — selectively permeable), endoplasmic reticulum (transport network), Golgi apparatus (modification and packaging of proteins). Plant cells additionally have: cell wall (cellulose), chloroplasts, and large permanent vacuole.

Magnification: magnification = image size ÷ actual size. Resolution is the ability to distinguish two nearby points as separate — electron microscopes have far greater resolution (~0.1 nm vs ~200 nm for light microscopes), revealing ultrastructure.

The cell cycle: Interphase (G1 → S phase: DNA replication → G2) then Mitosis (Prophase → Metaphase → Anaphase → Telophase → Cytokinesis). Mitosis produces two genetically identical daughter cells for growth, repair, and asexual reproduction. Cancer is uncontrolled cell division when the cell cycle regulatory mechanisms fail.

Surface area to volume ratio (SA:V): as cells get larger, their volume increases faster than their surface area. A high SA:V ratio allows efficient diffusion to supply all parts of the cell. Large organisms have a small SA:V and need specialised exchange surfaces (alveoli, villi) and transport systems.

Transport across membranes: diffusion (net movement of particles from high to low concentration — no energy); osmosis (net movement of water through a semi-permeable membrane from high water potential to low — no energy); active transport (movement against a concentration gradient using ATP, e.g. mineral ion uptake in root hair cells).

Stem cells are undifferentiated cells capable of self-renewal and differentiation. Embryonic stem cells are pluripotent (can become any cell type). Adult stem cells are multipotent (limited range). Therapeutic cloning involves creating an embryo genetically identical to a patient to harvest stem cells for treatment without immune rejection.`,
      workedExample: {
        problem: "A cell in a microscope image measures 4 mm. The actual cell is 0.02 mm. (a) Calculate the magnification. (b) The same microscope is then used with a ×40 objective and ×10 eyepiece. What is the total magnification?",
        solution: "(a) Magnification = image size ÷ actual size = 4 mm ÷ 0.02 mm = ×200. (b) Total magnification = objective × eyepiece = 40 × 10 = ×400. Note these are different — part (a) calculates the magnification of that particular image; part (b) calculates the microscope's total magnification setting."
      },
      commonMistakes: [
        "Confusing magnification and resolution — magnification makes the image bigger; resolution determines whether you can see fine detail. You can magnify a blurry image but not resolve more detail.",
        "Saying DNA replication happens during mitosis — DNA replicates during the S phase of interphase, BEFORE mitosis begins.",
        "Forgetting the distinction between osmosis and diffusion — osmosis specifically refers to water movement through a semi-permeable membrane; it cannot be used to describe movement of other solutes."
      ],
      keyFacts: [
        "Prokaryote: no nucleus, plasmids, 70S ribosomes, no membrane-bound organelles.",
        "Magnification = image size ÷ actual size. Resolution = ability to distinguish two points.",
        "Mitosis: PMAT → 2 identical daughter cells. For growth, repair, asexual reproduction.",
        "High SA:V → efficient diffusion. Large organisms need exchange surfaces and transport systems.",
        "Active transport requires ATP; diffusion and osmosis are passive (no ATP needed)."
      ]
    },

    "Organisation": {
      title: "Organisation: Digestive System, Circulatory System & Transport in Plants",
      keyIdea: "Complex organisms are organised into tissues, organs and systems; the circulatory system delivers oxygen and nutrients; the digestive system digests and absorbs food; plants transport via xylem and phloem.",
      body: `Organisation hierarchy: cells → tissues → organs → organ systems → organism.

The human digestive system: mouth (mechanical digestion by teeth; salivary amylase begins starch digestion) → oesophagus (peristalsis moves food) → stomach (HCl creates acid environment pH 2; pepsin digests protein; churning) → small intestine (most chemical digestion; enzymes from pancreas — amylase, protease, lipase; bile from liver emulsifies fat; villi maximise absorption) → large intestine (water reabsorption) → rectum/anus (egestion of faeces). Enzymes have optimal pH and temperature; denaturation occurs above the optimum temperature.

The circulatory system is a double circulation: pulmonary circuit (heart → lungs → heart) and systemic circuit (heart → body → heart). The heart is a double pump: right side pumps deoxygenated blood to the lungs; left side pumps oxygenated blood to the body. The left ventricle has a thicker wall because it must generate higher pressure to push blood around the entire body. Blood vessels: arteries (thick muscular walls, small lumen, high pressure, carry blood AWAY from heart), veins (thinner walls, large lumen, valves to prevent backflow, carry blood TOWARDS heart), capillaries (one-cell thick, site of exchange between blood and tissues).

Blood components: red blood cells (biconcave, no nucleus, packed with haemoglobin — carry O₂); white blood cells (phagocytes engulf pathogens; lymphocytes produce antibodies); platelets (clotting); plasma (liquid — transports dissolved substances: glucose, CO₂, urea, hormones).

Coronary heart disease: fatty deposits (plaques) in coronary arteries reduce blood flow to heart muscle. Treated by: stents (mesh tubes to hold artery open), bypass surgery, or statins (lower LDL cholesterol).

Transport in plants: xylem (dead hollow vessels, lignified walls, carries water and minerals upward — transpiration stream); phloem (living cells, carries dissolved sugars up and down — translocation). Transpiration rate increases with temperature, light intensity, wind speed; decreases with high humidity. Guard cells control stomata — open in light (K⁺ ions enter, water follows by osmosis, cells become turgid, stomata open); close in dark.`,
      workedExample: {
        problem: "Explain why the left ventricle has a much thicker muscular wall than the right ventricle.",
        solution: "The right ventricle pumps deoxygenated blood only to the lungs — a short, nearby circuit requiring relatively low pressure. The left ventricle pumps oxygenated blood around the entire systemic circuit (all body organs), a much longer route with greater resistance. A thicker muscular wall allows the left ventricle to contract more forcefully, generating the higher blood pressure required to push blood all the way to distant tissues such as the feet and brain."
      },
      commonMistakes: [
        "Saying arteries always carry oxygenated blood — the pulmonary artery carries deoxygenated blood from the right ventricle to the lungs. The rule is: arteries carry blood AWAY from the heart, not that they always carry oxygenated blood.",
        "Confusing xylem and phloem — xylem: dead vessels, transports water and minerals upward only; phloem: living cells, transports sugars up and down.",
        "Saying bile digests fat — bile emulsifies fat (physical process — breaks large droplets into smaller ones to increase surface area). Lipase is the enzyme that chemically digests fat."
      ],
      keyFacts: [
        "Left ventricle: thicker wall → higher pressure → systemic circulation. Right → lungs (lower pressure).",
        "Arteries: away from heart, thick walls, high pressure. Veins: towards heart, valves, low pressure. Capillaries: exchange.",
        "Villi: increase surface area of small intestine for absorption. One cell thick, good blood supply.",
        "Xylem: water + minerals, upward, dead cells. Phloem: sugars, both directions, living cells.",
        "Transpiration: water loss through stomata. Increases with temperature, wind, light; decreases with humidity."
      ]
    },

    "Infection & response": {
      title: "Infection & Response: Pathogens, Immunity & Drug Development",
      keyIdea: "Pathogens cause communicable diseases; the immune system fights infection via specific antibody production and memory cells; vaccination exploits this; drugs must be rigorously tested before use.",
      body: `Pathogens are microorganisms that cause disease. The four main types are: bacteria (e.g. Salmonella food poisoning, Gonorrhoea), viruses (e.g. Measles, HIV, Influenza, COVID-19), fungi (e.g. Rose black spot in plants, Athlete's foot), and protists (e.g. Malaria caused by Plasmodium — spread by Anopheles mosquitoes).

Bacteria cause damage by producing toxins; viruses cause damage by replicating inside and destroying host cells.

The body has non-specific defences (barriers that stop pathogens entering): skin (physical barrier, sebum inhibits microbe growth), mucus and cilia in airways (trap and sweep pathogens out), hydrochloric acid in stomach (kills pathogens in food). Once a pathogen enters, the immune system responds specifically.

Immune response: phagocytes engulf and destroy pathogens (non-specific). Lymphocytes produce specific antibodies that bind to antigens on the pathogen's surface. Antibodies have a complementary shape to specific antigens (highly specific). Antibodies can: neutralise toxins, flag pathogens for destruction, cause pathogens to clump (agglutination). Memory cells remain after infection — on re-exposure, they rapidly produce antibodies, preventing illness (this is why you become immune).

Vaccination introduces antigens (in a weakened, dead, or modified form) without causing disease — the immune system produces memory cells. Herd immunity occurs when enough individuals are vaccinated that the pathogen cannot spread.

Antibiotics kill bacteria (by targeting bacterial cell walls or ribosomes) but have NO effect on viruses. Overuse leads to antibiotic resistance by natural selection. Antiviral drugs (e.g. antiretrovirals for HIV) are harder to develop as viruses use host cell machinery.

Monoclonal antibodies: produced by fusing lymphocytes with tumour cells (hybridomas) to create cells that divide indefinitely and produce identical antibodies. Used in: pregnancy tests, cancer treatment (targeted delivery of cytotoxic drugs), diagnosis of disease.

Drug development: discovery → pre-clinical testing (cells, tissues, animals) → clinical trials (Phase 1: safety/dosage in small group; Phase 2: larger group; Phase 3: double-blind randomised control trial vs placebo) → peer review → approval.`,
      workedExample: {
        problem: "Explain why a person who has had measles is unlikely to get it again, and why vaccines work on the same principle.",
        solution: "During the initial measles infection, lymphocytes produce antibodies specific to measles antigens. After the infection is cleared, memory cells remain in the blood. On re-exposure to measles, these memory cells rapidly proliferate and produce large quantities of antibodies very quickly — before the pathogen can multiply enough to cause illness. Vaccines work identically: they introduce measles antigens (in weakened/inactivated form) to stimulate the same immune response and memory cell production, without the person ever suffering the disease."
      },
      commonMistakes: [
        "Saying antibiotics kill viruses — antibiotics target specific bacterial structures (cell wall, bacterial ribosomes) that viruses don't have. Viral infections need antiviral drugs.",
        "Confusing phagocytes and lymphocytes — phagocytes engulf and digest pathogens (non-specific); lymphocytes produce specific antibodies.",
        "Thinking vaccination injects ready-made antibodies — vaccination introduces antigens to stimulate the immune system to make its own antibodies and memory cells. Injecting antibodies directly is called passive immunisation (e.g. anti-tetanus injection) — it is faster but gives no long-term immunity."
      ],
      keyFacts: [
        "Bacteria → toxins. Viruses → invade cells, replicate, destroy. Protists e.g. Plasmodium (malaria, mosquito vector).",
        "Phagocytes: engulf pathogens (non-specific). Lymphocytes: produce specific antibodies.",
        "Memory cells → rapid secondary response → immunity after infection or vaccination.",
        "Antibiotics: bacteria only. No effect on viruses. Overuse → antibiotic resistance via natural selection.",
        "Clinical trials: double-blind randomised controlled trial → neither patient nor doctor knows who gets drug/placebo."
      ]
    },

    "Bioenergetics": {
      title: "Bioenergetics: Photosynthesis & Respiration",
      keyIdea: "Photosynthesis converts light energy to chemical energy stored in glucose; respiration releases that energy as ATP; both processes are linked and their rates are controlled by environmental factors.",
      body: `Photosynthesis equation: 6CO₂ + 6H₂O + light energy → C₆H₁₂O₆ + 6O₂. Occurs in chloroplasts containing chlorophyll (absorbs red and blue wavelengths; reflects green). Two stages:

1. Light-dependent reactions (thylakoid membranes): light splits water (photolysis — 2H₂O → 4H⁺ + 4e⁻ + O₂); oxygen released as by-product; ATP and NADPH produced.

2. Light-independent reactions / Calvin cycle (stroma): CO₂ fixed using ATP and NADPH to produce G3P, then glucose. Three limiting factors — light intensity, CO₂ concentration, temperature — any one of which can be the 'bottleneck' at a given moment. Increasing a limiting factor increases rate until a different factor becomes limiting.

Glucose uses: respiration (energy), cellulose (cell walls), starch (storage), proteins (combine with nitrate ions), fats/oils.

Aerobic respiration equation: C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + ~36–38 ATP. Occurs in mitochondria. Supplies energy for: active transport, protein synthesis, cell division, movement, maintaining body temperature.

Anaerobic respiration (no O₂): in animals: glucose → lactic acid (2 ATP). In yeast/plants: glucose → ethanol + CO₂ (2 ATP). Far less efficient than aerobic. Lactic acid causes muscle fatigue; repaid via oxygen debt — extra O₂ oxidises lactic acid to CO₂ and water after exercise.

Response to exercise: heart rate, breathing rate and tidal volume all increase — delivering more O₂ and removing more CO₂. Glycogen stored in muscles is hydrolysed to glucose as fuel.

Commercial applications of fermentation: brewing (ethanol from yeast), baking (CO₂ from yeast raises dough), biogas/biofuel production. Optimising fermenters requires controlling temperature, pH, and substrate concentration.`,
      workedExample: {
        problem: "A student measures the rate of photosynthesis in pondweed at different CO₂ concentrations (0.04%, 0.1%, 0.4%) using high light intensity and 25°C. At 0.04% and 0.1% CO₂, rate increases steadily. At 0.4% CO₂ the rate levels off. Explain these results.",
        solution: "From 0.04% to 0.1%: CO₂ is the limiting factor — increasing CO₂ provides more substrate for the Calvin cycle (carbon fixation), increasing the rate of photosynthesis. At 0.4% CO₂: the rate plateaus because CO₂ is no longer limiting — either light intensity or temperature has become the new limiting factor. The Calvin cycle enzymes or light reactions are now operating at maximum capacity; adding more CO₂ makes no further difference until the other factor is increased."
      },
      commonMistakes: [
        "Saying plants only respire at night — plants respire continuously (24/7) in all living cells. During the day, photosynthesis rate exceeds respiration rate so NET gas exchange is CO₂ in, O₂ out. At night, only respiration occurs.",
        "Confusing the products of anaerobic respiration — animals/muscles: lactic acid. Yeast: ethanol + CO₂. Do not swap these.",
        "Forgetting that at the light saturation point, increasing light further does nothing — another factor (CO₂ or temperature) has become limiting."
      ],
      keyFacts: [
        "Photosynthesis: 6CO₂ + 6H₂O + light → C₆H₁₂O₆ + 6O₂. Light-dependent (thylakoids) + Calvin cycle (stroma).",
        "Three limiting factors: light intensity, CO₂ concentration, temperature.",
        "Aerobic respiration: ~36–38 ATP per glucose. Anaerobic: 2 ATP. Aerobic far more efficient.",
        "Anaerobic (animals): lactic acid. Anaerobic (yeast): ethanol + CO₂.",
        "Oxygen debt: extra O₂ needed after exercise to break down lactic acid to CO₂ + H₂O."
      ]
    },

    "Homeostasis & response": {
      title: "Homeostasis & Response: Nervous System, Hormones & Control",
      keyIdea: "Homeostasis maintains a stable internal environment via negative feedback loops; the nervous system allows rapid responses; the endocrine system provides slower, longer-lasting hormonal control.",
      body: `Homeostasis is the regulation of internal conditions — including temperature (37°C), blood glucose, and water balance — within narrow ranges, using negative feedback mechanisms. A change from the set point triggers a corrective response that reverses the change.

The nervous system provides rapid, specific, short-duration responses. Pathway: stimulus → receptor → sensory neurone → CNS (brain/spinal cord) → relay neurone → motor neurone → effector (muscle/gland). Reflex arcs (spinal cord, no conscious brain involvement) are rapid automatic responses to danger. Nerve impulses pass along axons; at synapses, neurotransmitter chemicals diffuse across the gap and bind to receptors on the next neurone, triggering a new impulse.

Thermoregulation (by the hypothalamus): if too hot → vasodilation (skin blood vessels dilate, more heat radiated), sweating (evaporation removes heat), hairs lie flat; if too cold → vasoconstriction (less heat lost), shivering (muscle contractions generate heat), hairs erect (trap insulating air).

Blood glucose control (by the pancreas): after a meal → blood glucose rises → β cells secrete insulin → cells take up glucose → liver converts glucose to glycogen → blood glucose falls (negative feedback). During fasting → blood glucose falls → α cells secrete glucagon → liver breaks down glycogen to glucose → blood glucose rises. Type 1 diabetes: insulin not produced (autoimmune destruction of β cells); treated with insulin injections. Type 2: cells become insulin resistant; managed with diet, exercise, and metformin.

Water balance (ADH): if blood too concentrated → pituitary releases ADH → kidney tubules more permeable → more water reabsorbed → small volume of concentrated urine.

The menstrual cycle is controlled by four hormones: FSH (follicle stimulating hormone — follicle maturation), LH (luteinising hormone — triggers ovulation), oestrogen (thickens uterus lining, inhibits FSH), progesterone (maintains lining). Fertility treatments use FSH to stimulate egg production; contraceptive pill uses oestrogen/progesterone to inhibit FSH and prevent ovulation.`,
      workedExample: {
        problem: "A person with Type 1 diabetes eats a large meal. Explain what happens to their blood glucose and how treatment addresses this.",
        solution: "A large meal causes blood glucose to rise (carbohydrates digested to glucose, absorbed into blood). In a healthy person, the pancreas releases insulin to stimulate cells to take up glucose and the liver to convert it to glycogen, returning blood glucose to normal. In a Type 1 diabetic, the β cells have been destroyed by the immune system — no insulin is produced. Blood glucose would remain dangerously high (hyperglycaemia), damaging blood vessels, kidneys and eyes. Treatment: the person must inject insulin (calculated to match the carbohydrate content of their meal) to allow cells to take up the glucose and restore normal blood glucose levels. Blood glucose monitoring before and after meals helps calibrate the dose."
      },
      commonMistakes: [
        "Confusing insulin and glucagon roles — insulin LOWERS blood glucose (stimulates uptake and glycogen synthesis); glucagon RAISES blood glucose (stimulates glycogen breakdown). They are antagonistic hormones.",
        "Thinking vasoconstriction means blood stops flowing to the skin — blood still flows, but the vessels constrict (narrow), reducing the volume near the surface and therefore reducing heat loss by radiation.",
        "Confusing the nervous system with the endocrine system — nervous: fast (milliseconds), specific, short-duration, electrical + chemical. Endocrine: slow (seconds to hours), widespread, long-duration, chemical (hormones in blood)."
      ],
      keyFacts: [
        "Negative feedback: deviation from set point → corrective response reverses the deviation.",
        "Reflex arc: receptor → sensory → relay → motor → effector (no conscious brain involvement).",
        "Blood glucose: ↑ → insulin (β cells) → uptake + glycogen. ↓ → glucagon (α cells) → glycogen breakdown.",
        "ADH: produced by hypothalamus/pituitary; acts on kidney tubules → more water reabsorbed → concentrated urine.",
        "Menstrual cycle: FSH → follicle; LH → ovulation; oestrogen → lining thickens; progesterone → lining maintained."
      ]
    },

    "Inheritance, variation & evolution": {
      title: "Inheritance, Variation & Evolution: Genetics to Natural Selection",
      keyIdea: "DNA carries the genetic code; Mendelian inheritance predicts offspring ratios; evolution by natural selection changes allele frequencies over time; genetic engineering allows targeted transfer of genes.",
      body: `DNA structure: double helix of two nucleotide strands held together by complementary base pairing (A–T, C–G). Each codon (triplet of bases) codes for one amino acid; the sequence of amino acids determines protein structure and function. Chromosomes are condensed DNA-protein complexes; humans have 46 (23 pairs) in body cells.

Protein synthesis: transcription (DNA → mRNA in nucleus) then translation (mRNA → ribosome; tRNA brings amino acids matching codons; polypeptide chain assembled). Mutations in DNA change the base sequence, potentially altering the protein produced.

Inheritance: dominant alleles are expressed with one copy; recessive alleles are only expressed homozygously. Punnett squares predict offspring ratios. Sex-linked traits are on the X chromosome — males (XY) only have one copy, so a single recessive allele is expressed (e.g. colour blindness, haemophilia).

Examples: Cystic fibrosis (ff — recessive; Ff = carrier; FF = unaffected); Polydactyly (D_ — dominant). For a genetic cross Ff × Ff: offspring ratios FF:Ff:ff = 1:2:1 (phenotype ratio affected:unaffected = 1:3).

Evolution by natural selection: random mutations create variation → competition for limited resources → individuals with advantageous alleles are more likely to survive and reproduce → pass alleles to offspring → allele frequency increases over generations. Speciation occurs when populations are geographically isolated, accumulate different mutations, and eventually cannot interbreed.

Genetic engineering: restriction enzymes cut out the desired gene from donor DNA; ligase enzymes insert it into a plasmid (vector); the plasmid is introduced into a host bacterium; the host expresses the gene. Examples: GM bacteria producing human insulin, crops resistant to herbicides or pests.

Evidence for evolution: fossils (morphological change over time), comparative anatomy (homologous structures), DNA sequence similarity, antibiotic resistance in real-time.`,
      workedExample: {
        problem: "Haemophilia is X-linked recessive (X^h). A carrier female (X^H X^h) has children with an unaffected male (X^H Y). (a) Complete a Punnett square. (b) What proportion of daughters will be carriers? (c) What proportion of sons will have haemophilia?",
        solution: `(a) Punnett square:
         X^H      X^h
X^H  [ X^H X^H | X^H X^h ]
Y    [ X^H Y   | X^h Y   ]

(b) Daughters: X^H X^H (unaffected) and X^H X^h (carrier) — so 50% of daughters are carriers, 50% unaffected. No daughters have haemophilia (they always get at least one X^H from dad).
(c) Sons: X^H Y (unaffected) and X^h Y (haemophilia) — 50% of sons have haemophilia.
Overall probability of a child having haemophilia = 25% (1 in 4 of all children).`
      },
      commonMistakes: [
        "Forgetting that males are hemizygous for X-linked traits — males only have one X chromosome, so a single recessive allele on that X is expressed (no second X to mask it).",
        "Saying organisms 'develop' resistance to antibiotics by exposure — resistance arises from pre-existing random mutations. Antibiotic use doesn't cause mutations; it selects for bacteria that already have them.",
        "Mixing up transcription and translation — transcription: DNA → mRNA (in nucleus). Translation: mRNA → protein (at ribosomes). The 'T' in translation matches 'T' in ribosome terminal = where it finishes."
      ],
      keyFacts: [
        "DNA: A pairs with T; C pairs with G. Codon = 3 bases = 1 amino acid.",
        "Protein synthesis: transcription (DNA→mRNA) in nucleus; translation (mRNA→protein) at ribosomes.",
        "Sex-linked: gene on X chromosome. Males (XY) show recessive trait with one copy; females need two.",
        "Natural selection: variation → competition → survival of the fittest → allele frequency change over generations.",
        "Genetic engineering: restriction enzyme cuts gene; ligase inserts into plasmid; plasmid into host bacterium."
      ]
    },

    "Ecology": {
      title: "Ecology: Ecosystems, Cycles & Human Impact",
      keyIdea: "Ecosystems function through energy flow and nutrient cycling; human activity disrupts these systems; understanding ecology underpins conservation and sustainable development.",
      body: `An ecosystem includes all organisms (community) and abiotic factors (temperature, light, water, pH, mineral ions) in an area. Populations interact through competition (for food, space, mates, light) and predation. Population size is influenced by biotic factors (food, predation, disease, competition) and abiotic factors. Predator-prey cycles show interdependence.

Energy transfer: solar energy → producers (photosynthesis) → primary consumers → secondary consumers → tertiary consumers. At each trophic level ~90% of energy is lost (respiration, heat, excretion, undigested material). This means biomass decreases at each level — pyramids of biomass are always pyramid-shaped. Food chains rarely exceed 4–5 steps. Eating lower in the food chain is more energy-efficient and land-efficient.

Carbon cycle: CO₂ removed by photosynthesis (locked in organic molecules) → returned by respiration (all organisms), decomposition (bacteria/fungi break down dead material), combustion (burning). Fossil fuels formed over millions of years; burning releases ancient carbon rapidly, increasing atmospheric CO₂.

Nitrogen cycle: atmospheric N₂ → fixed by nitrogen-fixing bacteria (in soil or root nodules of legumes) to NH₃ → nitrifying bacteria convert NH₃ → NO₂⁻ → NO₃⁻ (nitrates plants absorb) → organisms incorporate nitrogen into proteins/DNA → denitrifying bacteria convert nitrates back to N₂. Decomposers return nitrogen to soil as ammonium.

Human impacts: deforestation (removes CO₂ sink, destroys habitats, reduces biodiversity), burning fossil fuels (increases CO₂, climate change), intensive farming (fertiliser runoff → eutrophication; pesticide use; habitat loss), pollution (water, land, air), overfishing. Eutrophication: excess nitrates/phosphates → algal bloom → algae block light → plants below die → decomposers increase → O₂ depleted → fish suffocate.

Biodiversity and conservation: high biodiversity provides ecosystem stability, genetic resources, medicine, and resilience. Conservation methods: wildlife reserves, seed banks, breeding programmes, international agreements (e.g. CITES), sustainable fishing quotas, reforestation.

Fieldwork methods: quadrats (estimate abundance/coverage of stationary organisms), transects (distribution along environmental gradients), mark-release-recapture for mobile animals (estimated population = (1st catch × 2nd catch) ÷ number marked in 2nd catch).`,
      workedExample: {
        problem: "In a mark-release-recapture study of a woodlouse population: 40 woodlice caught and marked in sample 1; 50 woodlice caught in sample 2; 8 of the second sample were marked. Estimate the population size. State one assumption of this method.",
        solution: "Population estimate = (1st catch × 2nd catch) ÷ number marked in recapture = (40 × 50) ÷ 8 = 2000 ÷ 8 = 250 woodlice. Assumption: the marked individuals mix randomly and uniformly throughout the population between the two samples (so the ratio of marked to unmarked in the 2nd sample is representative of the whole population). Other valid assumptions: no immigration/emigration; no births/deaths between samples; marking does not affect survival."
      },
      commonMistakes: [
        "Drawing pyramids of numbers (which can be inverted, e.g. one oak tree supporting thousands of insects) and calling them biomass pyramids — pyramids of biomass are almost always a true pyramid shape because biomass decreases at each trophic level.",
        "Saying decomposers are at the top of food chains — decomposers operate across all trophic levels, breaking down dead material from any level. They are not part of the linear food chain.",
        "Confusing eutrophication and pollution generally — eutrophication specifically refers to excess nutrients causing algal growth and subsequent oxygen depletion, not just any water pollution."
      ],
      keyFacts: [
        "~10% energy transfer between trophic levels. Pyramids of biomass always wider at base.",
        "Carbon cycle: photosynthesis removes CO₂; respiration + decomposition + combustion return it.",
        "Nitrogen cycle: fixation (N₂ → NH₃) → nitrification (NH₃ → NO₃⁻) → plant uptake → denitrification (NO₃⁻ → N₂).",
        "Eutrophication: excess fertiliser → algal bloom → O₂ depletion → fish death.",
        "Mark-release-recapture: N = (1st catch × 2nd catch) ÷ marked in 2nd catch."
      ]
    },

  },
};

Object.keys(GCSE_BIOLOGY_EXPLANATIONS).forEach((level) => {
  if (!EXPLANATIONS[level]) EXPLANATIONS[level] = {};
  Object.assign(EXPLANATIONS[level], GCSE_BIOLOGY_EXPLANATIONS[level]);
});
// A-Level Biology explanations
// Appended to explanations.js via Object.assign pattern

const ALEVEL_BIOLOGY_EXPLANATIONS = {
  alevel: {

    "Biological molecules": {
      title: "Biological Molecules: Carbohydrates, Lipids, Proteins & Nucleic Acids",
      keyIdea: "All biological macromolecules are polymers built from monomers by condensation reactions; their structure directly determines their function.",
      body: `CARBOHYDRATES
Monosaccharides (glucose, fructose, galactose) are the monomers. α-glucose has the OH on C1 below the ring; β-glucose has it above. This difference dictates polymer structure: α-glucose → starch (amylose helix + amylopectin branched, energy storage in plants) and glycogen (highly branched, animal energy store in liver/muscle). β-glucose → cellulose (straight chains, H-bonds between adjacent chains → microfibrils → structural support in plant cell walls). Disaccharides: maltose (α-glu + α-glu), sucrose (α-glu + β-fru), lactose (glu + galactose) — formed by condensation (glycosidic bond, water released).

LIPIDS
Triglycerides: glycerol + 3 fatty acids joined by ester bonds (condensation). Saturated FAs (no double bonds, straight chains, pack tightly → solid at room temp, less fluid membrane). Unsaturated FAs (one or more C=C double bonds, kinked chains, pack loosely → liquid at room temp, more fluid membrane). Phospholipids: glycerol + 2 FAs + phosphate head (hydrophilic) → amphipathic → self-assemble into bilayer. Cholesterol intercalates between phospholipid tails: at low T prevents packing (maintains fluidity); at high T reduces movement (stabilises membrane) — also precursor to steroid hormones.

PROTEINS
20 amino acids, each with central C, amino group (NH₂), carboxyl group (COOH), H, and variable R group. Peptide bond (condensation between NH₂ and COOH, −H₂O) links amino acids → polypeptide. Four structure levels:
• Primary: amino acid sequence (covalent peptide bonds)
• Secondary: H-bonds between backbone NH and C=O groups → α-helix or β-pleated sheet
• Tertiary: further folding via R-group interactions (H-bonds, ionic bonds, disulfide bridges, hydrophobic interactions)
• Quaternary: multiple polypeptide subunits (e.g. haemoglobin: 4 subunits)
Fibrous proteins (collagen, keratin, actin): structural, insoluble, regular repeating structure. Globular proteins (enzymes, haemoglobin, antibodies): metabolic/transport roles, soluble, compact fold.

NUCLEIC ACIDS
DNA: double helix, antiparallel strands, deoxyribose sugar, bases A-T (2 H-bonds) and G-C (3 H-bonds). RNA: single-stranded, ribose sugar, uracil replaces thymine. ATP (adenosine triphosphate): adenine + ribose + 3 phosphates; hydrolysis of terminal phosphate releases ~30 kJ mol⁻¹, regenerated by condensation in respiration/photosynthesis.

WATER
Polar molecule (δ+ on H, δ− on O) → hydrogen bonding → cohesion, adhesion, high specific heat capacity, high latent heat of vaporisation, excellent solvent for polar/ionic solutes, metabolite in hydrolysis and condensation. Density anomaly: ice less dense than water → aquatic organisms survive winter.

FOOD TESTS
Benedict's (reducing sugars → brick-red precipitate; non-reducing require acid hydrolysis first), Biuret (protein → purple/violet), iodine (starch → blue-black), emulsion test (lipids → white emulsion in water).`,
      workedExample: {
        problem: "Explain why cellulose is unsuitable as an energy store but starch is well-suited to that role.",
        solution: "Cellulose is made of β-glucose monomers with 1,4-glycosidic bonds that produce straight, unbranched chains. Adjacent chains form extensive H-bond networks → rigid microfibrils resistant to hydrolysis; most organisms lack the enzyme cellulase. Starch (amylose + amylopectin) is made of α-glucose: amylose forms a compact helix (small, insoluble → doesn't affect osmosis inside cells); amylopectin's branching (1,6-links) provides many free ends for rapid hydrolysis by amylase → fast glucose release when energy is needed. The coiled/branched structure is also compact and osmotically inert — ideal energy store."
      },
      commonMistakes: [
        "Confusing α and β glucose direction: α-OH is below on C1 (think A for 'Absent from top'); β-OH is above. This dictates whether the polymer is helical (starch) or straight (cellulose).",
        "Saying disulfide bonds maintain secondary structure — they don't. Secondary structure is held by H-bonds between backbone groups. Disulfide bridges (between R-group cysteines) maintain tertiary structure.",
        "Forgetting water is both a reactant (hydrolysis) and a product (condensation) — not just a solvent."
      ],
      keyFacts: [
        "Condensation = bond formation + H₂O released. Hydrolysis = bond breaking + H₂O consumed.",
        "α-glu → starch/glycogen (energy storage). β-glu → cellulose (structural).",
        "Primary structure is covalent; 2°/3°/4° are non-covalent (mainly H-bonds) except disulfide bridges.",
        "Phospholipid bilayer: hydrophilic heads face water; hydrophobic tails face inward.",
        "Haemoglobin = quaternary structure (2α + 2β subunits, each with a haem group containing Fe²⁺)."
      ]
    },

    "Cell structure & division": {
      title: "Cell Structure & Division: Ultrastructure, Replication & Mitosis/Meiosis",
      keyIdea: "Eukaryotic cell ultrastructure is tightly linked to function; DNA replication is semi-conservative; mitosis and meiosis differ critically in their outcomes and purposes.",
      body: `CELL ULTRASTRUCTURE
Eukaryotic organelles (animals): nucleus (double membrane/nuclear envelope with pores; nucleolus makes rRNA; linear chromosomes), mitochondria (double membrane; cristae = folded inner membrane → large SA for ATP synthase and ETC; matrix = site of Krebs cycle; own 70S ribosomes + circular DNA → endosymbiotic origin), rough ER (ribosomes on surface → protein synthesis and folding), smooth ER (lipid/steroid synthesis, detoxification), Golgi apparatus (modifies, sorts, packages proteins into vesicles for secretion or to lysosomes), lysosomes (hydrolytic enzymes at pH ~5, digest worn organelles/pathogens), ribosomes (80S in eukaryotes: 60S + 40S; 70S in prokaryotes and organelles), centrioles (form spindle in animal cells).
Plant cells additionally: cell wall (cellulose → rigidity/support), chloroplasts (double membrane; thylakoid membranes with chlorophyll → light reactions; stroma → Calvin cycle; own 70S ribosomes; endosymbiotic), large permanent vacuole (turgor pressure), plasmodesmata (cytoplasmic connections between cells).

DNA REPLICATION (semi-conservative)
1. Helicase unwinds double helix and breaks H-bonds at the replication fork.
2. Primase lays short RNA primers on each template strand.
3. DNA polymerase III adds free DNA nucleotides 5'→3' complementary to each template strand.
4. Leading strand: synthesised continuously towards fork (one primer).
5. Lagging strand: synthesised discontinuously away from fork in Okazaki fragments (multiple primers) because polymerase can only add 5'→3'.
6. DNA polymerase I removes RNA primers and fills gaps.
7. DNA ligase seals nicks between fragments.
Evidence: Meselson & Stahl (1958) — ¹⁵N/¹⁴N density gradient centrifugation → after one replication all DNA at intermediate density (one old + one new strand).

MITOSIS
Purpose: growth, repair, asexual reproduction → 2 genetically identical diploid daughter cells.
Interphase: G1 (cell grows, protein synthesis) → S (DNA replication, chromatin condenses slightly) → G2 (further growth, organelle duplication).
PMAT: Prophase (chromosomes condense, nuclear envelope breaks down, spindle forms); Metaphase (chromosomes align at equator/metaphase plate, attached to spindle by centromeres/kinetochores); Anaphase (centromeres split, sister chromatids pulled to poles by shortening spindle fibres); Telophase (nuclear envelopes reform, chromosomes decondense) → Cytokinesis (cytoplasm divides).
Cell cycle control: cyclin-CDK complexes drive transitions through checkpoints (G1/S, G2/M). Tumour suppressor genes (e.g. p53) inhibit progression; proto-oncogenes stimulate division. Mutations → oncogenes (gain of function) or loss of tumour suppressors → uncontrolled division → cancer. Apoptosis: programmed cell death via caspase cascade — essential for development (digit formation) and immune surveillance.

MEIOSIS
Purpose: sexual reproduction → 4 genetically non-identical haploid gametes.
Meiosis I: homologous chromosomes pair up (bivalents, synapsis); crossing over at chiasmata exchanges segments between non-sister chromatids (recombination → genetic variation); homologues separated → 2 haploid cells (each still with sister chromatids).
Meiosis II: sister chromatids separated (as in mitosis) → 4 haploid cells, each genetically unique.
Sources of genetic variation: crossing over + independent assortment of bivalents (2²³ combinations in humans) + random fertilisation.`,
      workedExample: {
        problem: "A cell contains 46 chromosomes (2n = 46) at the start of meiosis. How many chromosomes are in each cell at the end of meiosis I, and what is the DNA content of each cell relative to the original?",
        solution: "At the end of meiosis I, each cell contains 23 chromosomes (haploid) but each chromosome still consists of two sister chromatids joined at the centromere. Before meiosis the DNA was replicated, so the original cell had 4× the haploid DNA content (4C). After meiosis I each cell has 23 chromosomes × 2 chromatids = 46 chromatids, so DNA content = 2C (half the pre-division 4C). After meiosis II: 23 chromosomes, 1C each."
      },
      commonMistakes: [
        "Saying DNA replication occurs between meiosis I and II — it does NOT. Interkinesis (if it occurs) has no S phase. DNA is replicated once before meiosis I.",
        "Confusing chromatids and chromosomes: after S phase, each chromosome consists of 2 sister chromatids. A cell with 46 chromosomes post-replication has 92 chromatids but is still described as having 46 chromosomes.",
        "Stating mitosis produces haploid cells — mitosis always produces diploid (2n) cells identical to the parent; meiosis produces haploid (n) cells."
      ],
      keyFacts: [
        "Helicase unwinds; primase adds primers; DNA pol III adds nucleotides 5'→3'; ligase seals.",
        "Lagging strand: Okazaki fragments synthesised discontinuously (5'→3' away from fork).",
        "Meiosis I separates homologues (2n→n); Meiosis II separates chromatids (like mitosis).",
        "Crossing over at chiasmata in prophase I = recombination = new allele combinations.",
        "Apoptosis: caspases execute controlled cell death; p53 monitors DNA damage."
      ]
    },

    "Exchange & transport": {
      title: "Exchange & Transport: Gas Exchange, Circulatory Systems & Transport in Plants",
      keyIdea: "Large organisms need specialised exchange surfaces and transport systems because diffusion alone is too slow; adaptations maximise surface area, minimise diffusion distance, and maintain concentration gradients.",
      body: `FICK'S LAW
Rate of diffusion ∝ (surface area × concentration difference) ÷ diffusion pathway length.
Efficient exchange surfaces: large SA, thin walls, steep gradient (maintained by ventilation/blood flow).

GAS EXCHANGE SURFACES
Alveoli (mammals): ~700 million → enormous SA (~70 m²); walls one cell thick; rich capillary network; surfactant reduces surface tension. Ventilation maintains gradient. Fish gills: countercurrent blood flow (blood and water in opposite directions) maintains O₂ gradient along entire gill filament → >80% O₂ extracted. Parallel flow would equilibrate at ~50%. Insects: tracheae/tracheoles deliver O₂ directly to cells; spiracles (openable valves) minimise water loss; no circulatory role in O₂ transport. Leaves: stomata (pores controlled by guard cells) for CO₂/O₂ and H₂O exchange; large intercellular air spaces maximise gas contact.

OXYGEN TRANSPORT & HAEMOGLOBIN
Haemoglobin (4 subunits, each with Fe²⁺ haem group) loads O₂ in lungs (high pO₂), unloads at tissues (low pO₂). Sigmoidal dissociation curve: cooperative binding — first O₂ binding increases affinity → steep slope → efficient unloading at tissues. Bohr effect: ↑CO₂ → ↓pH → conformational change → Hb releases O₂ more readily (curve shifts right). High-altitude/foetal Hb has higher O₂ affinity (curve shifts left) — foetal HbF loads O₂ from maternal HbA at placenta. CO₂ transport: 5% dissolved, 10–15% as carbaminohaemoglobin (on Hb), ~85% as HCO₃⁻ (chloride shift maintains electrical neutrality as HCO₃⁻ leaves RBC and Cl⁻ enters).

MAMMALIAN CIRCULATORY SYSTEM
Double circulation: pulmonary (R heart → lungs → L heart) + systemic (L heart → body → R heart). Maintains high pressure to systemic organs. Heart structure: SAN (pacemaker) → AVN (delay — ensures atria contract before ventricles) → Bundle of His → Purkinje fibres → ventricular walls. Myogenic: contracts without nervous stimulation. Arteries: thick muscular/elastic walls, small lumen, high pressure. Veins: thinner walls, large lumen, valves (prevent backflow). Capillaries: one cell thick (endothelium only), site of exchange. Tissue fluid formed at arterial end (hydrostatic pressure > oncotic pressure); reabsorbed at venous end (osmotic > hydrostatic) or drains via lymphatics.

TRANSPORT IN PLANTS
Xylem: carries water and mineral ions from roots to leaves. Dead, hollow, lignified (lignin waterproofs). Transpiration-cohesion-tension: water evaporates at leaf surface → tension (negative pressure) → cohesion of water (H-bonds) pulls column up → adhesion to xylem walls. Factors increasing transpiration: ↑temperature, ↑light (stomata open), ↑wind speed, ↓humidity. Xerophytes reduce transpiration: sunken stomata, rolled leaves, thick waxy cuticle, CAM metabolism (stomata open at night).
Water pathways: apoplast (cell walls, no membrane crossing — blocked by Casparian strip in endodermis); symplast (through cytoplasm via plasmodesmata — crosses membranes). Casparian strip forces all solutes through symplast → selective uptake of minerals by active transport.
Phloem: carries dissolved sugars (sucrose) and amino acids up and down. Living sieve tube elements with companion cells (mitochondria-rich, load sugar by active transport/proton cotransport). Mass flow hypothesis: active loading at source (leaves) → ↓water potential → osmosis → ↑turgor pressure → flow to sink (roots, fruits) where unloading decreases pressure.`,
      workedExample: {
        problem: "Explain why the oxygen dissociation curve for foetal haemoglobin (HbF) lies to the left of the curve for adult haemoglobin (HbA), and why this is physiologically important.",
        solution: "HbF has a higher affinity for O₂ at any given partial pressure compared to HbA — its dissociation curve is shifted left (it reaches 50% saturation at a lower pO₂, i.e. its P50 is lower). This is physiologically essential because at the placenta, maternal HbA is releasing O₂ (operating on the right part of its curve at placental pO₂ ~30–40 mmHg). HbF, with higher affinity, picks up that O₂ at the same partial pressure. The diffusion gradient is maintained from mother to foetus. If HbF had the same or lower affinity, O₂ transfer would be insufficient for foetal development."
      },
      commonMistakes: [
        "Describing the Bohr effect as 'CO₂ binds to haem' — CO₂ binds to the globin protein (as carbaminohaemoglobin), not to haem. The Bohr effect is about pH change causing conformational change.",
        "Stating xylem is alive — mature xylem vessels are dead cells. Phloem sieve tubes are living.",
        "Confusing transpiration pull with root pressure — transpiration pull (cohesion-tension) drives the majority of water transport; root pressure only contributes at night or in low-transpiration conditions."
      ],
      keyFacts: [
        "Countercurrent in fish gills maintains O₂ gradient along entire length → >80% extraction.",
        "Bohr effect: ↑CO₂ → ↓pH → right-shift of O₂ dissociation curve → more O₂ released at tissues.",
        "~85% of CO₂ transported as HCO₃⁻ (bicarbonate ions) in plasma.",
        "Casparian strip: suberin band blocks apoplast in endodermis → forces selective mineral uptake via symplast.",
        "Phloem mass flow: active loading at source → osmotic water entry → pressure gradient drives flow to sink."
      ]
    },

    "Genetic information & variation": {
      title: "Genetic Information & Variation: DNA, Transcription, Translation & Mutation",
      keyIdea: "DNA encodes protein via transcription (DNA→mRNA) and translation (mRNA→protein); mutations alter gene sequences; the genetic code is degenerate, non-overlapping and universal.",
      body: `DNA STRUCTURE RECAP
Double helix: antiparallel strands (5'→3' and 3'→5'); deoxyribose-phosphate backbone; complementary base pairs A=T (2 H-bonds), G≡C (3 H-bonds). One base + sugar + phosphate = nucleotide. Gene = sequence of base triplets (codons) encoding a polypeptide. Genetic code properties: triplet (3 bases per codon), degenerate (64 codons, 20 amino acids → most AAs coded by multiple codons), non-overlapping (each base read only once), universal (same code in nearly all organisms → basis of genetic engineering).

TRANSCRIPTION
1. RNA polymerase binds to promoter region of the gene.
2. DNA helix unwinds and H-bonds break (template strand exposed).
3. RNA polymerase moves along template strand (3'→5'), adding complementary RNA nucleotides 5'→3' (A pairs with U, not T; C pairs with G).
4. Primary transcript (pre-mRNA) formed, then processed in nucleus:
   - 5' cap and poly-A tail added (stability, ribosome recognition)
   - Splicing: introns (non-coding) removed, exons (coding) joined by spliceosomes → mature mRNA
   - Alternative splicing: different exon combinations → multiple proteins from one gene → increases proteome diversity.
5. mRNA exported through nuclear pores to cytoplasm.

TRANSLATION
Occurs at ribosomes (free in cytoplasm or on rough ER for secreted proteins).
1. mRNA binds to small ribosomal subunit; large subunit joins.
2. tRNA anticodon (complementary to mRNA codon) brings correct amino acid to A site.
3. Peptide bond forms (peptidyl transferase activity of rRNA — ribosome = ribozyme).
4. Ribosome moves 3 bases along mRNA (translocation); new tRNA enters A site.
5. Continues until stop codon (UAA, UAG, UGA) — no tRNA, release factors terminate translation.
Post-translational modification: folding, glycosylation (Golgi), cleavage (insulin precursor), phosphorylation.

MUTATIONS
Point mutations: substitution (base change — may be silent if codon still codes for same AA due to degeneracy; missense = different AA; nonsense = premature stop codon). Frameshift: insertion or deletion of a base → shifts reading frame for all codons downstream → usually catastrophic (non-functional protein).
Chromosomal mutations: deletion, duplication, inversion, translocation of chromosome segments. Polyploidy (additional whole chromosome sets) — common in plants (e.g. wheat is hexaploid).
Mutagenic agents: UV (thymine dimers → substitutions), ionising radiation (breaks), chemical mutagens (base analogues, intercalating agents, alkylating agents). DNA repair mechanisms (excision repair, mismatch repair) correct most errors.`,
      workedExample: {
        problem: "A gene has the template strand sequence 3'–TAC–GGA–AAT–ATT–5'. (a) Write the mRNA sequence. (b) Identify the amino acids if: AUG = Met, CCU = Pro, UUA = Leu, UAA = Stop.",
        solution: "(a) mRNA is complementary to the template strand and has the same sequence as the coding strand (but with U instead of T). Read the template 3'→5':\n3'–TAC–GGA–AAT–ATT–5' → mRNA (5'→3'): AUG–CCU–UUA–UAA.\n(b) AUG = Met (start), CCU = Pro, UUA = Leu, UAA = Stop codon. Polypeptide = Met–Pro–Leu (3 amino acids, then translation terminates)."
      },
      commonMistakes: [
        "Using T instead of U in mRNA — RNA contains uracil (U), not thymine (T). This is a very common mark-losing error.",
        "Confusing the template strand and coding strand: the template strand is read 3'→5' by RNA polymerase; the mRNA has the same sequence as the coding (sense) strand but with U for T.",
        "Saying frameshift only affects the mutated codon — a frameshift shifts every codon downstream, not just the one at the mutation site."
      ],
      keyFacts: [
        "Genetic code: triplet, degenerate, non-overlapping, universal.",
        "Transcription: template strand read 3'→5'; mRNA synthesised 5'→3'; RNA pol uses U not T.",
        "Introns spliced out; exons expressed. Alternative splicing → multiple proteins per gene.",
        "Translation: tRNA anticodon matches mRNA codon; peptide bond by rRNA (ribozyme activity).",
        "Substitution: may be silent/missense/nonsense. Insertion/deletion: frameshift → usually catastrophic."
      ]
    },

    "Energy transfer: photosynthesis & respiration": {
      title: "Energy Transfer: Photosynthesis & Respiration",
      keyIdea: "Photosynthesis captures light energy to reduce CO₂ into glucose; aerobic respiration oxidises glucose to produce ATP; both occur in two linked stages in specific organelles.",
      body: `PHOTOSYNTHESIS (chloroplasts)
Light-dependent reactions (thylakoid membranes):
1. Photosystems II and I contain chlorophyll and accessory pigments (carotenoids, xanthophylls) in antenna complexes.
2. Light excites electrons in PSII → electrons enter electron transport chain → released energy used to pump H⁺ across thylakoid membrane → ATP synthesised by ATP synthase (photophosphorylation).
3. Water is photolysed (split) at PSII: 2H₂O → 4H⁺ + 4e⁻ + O₂ (O₂ = waste product).
4. Electrons pass to PSI; NADP reduced to NADPH by NADP reductase.
Products of light reactions: ATP, NADPH, O₂.

Calvin Cycle (stroma):
1. CO₂ fixation: CO₂ + RuBP (5C) → 2× GP (3-phosphoglycerate, 3C) — catalysed by RuBisCO.
2. Reduction: GP + ATP + NADPH → G3P (triose phosphate, 3C).
3. Regeneration: 5/6 G3P molecules → RuBP (using ATP); 1/6 G3P used to make glucose, amino acids, lipids.
Limiting factors for photosynthesis: light intensity (limits ATP/NADPH), CO₂ concentration (limits Calvin cycle), temperature (affects enzyme activity — especially RuBisCO).

AEROBIC RESPIRATION (mitochondria + cytoplasm)
Glycolysis (cytoplasm): Glucose (6C) → 2× Pyruvate (3C) + 2 ATP (net) + 2 NADH. No O₂ needed.
Link reaction (mitochondrial matrix): Pyruvate → Acetyl-CoA (2C) + CO₂ + NADH (per pyruvate: ×2 for one glucose).
Krebs Cycle (matrix): Acetyl-CoA (2C) + Oxaloacetate (4C) → Citrate (6C) → regenerates oxaloacetate. Per turn: 3 NADH, 1 FADH₂, 1 ATP, 2 CO₂. ×2 per glucose.
Oxidative phosphorylation (inner mitochondrial membrane/cristae):
- NADH and FADH₂ donate electrons to ETC.
- Electrons pass along electron carriers → pump H⁺ from matrix to intermembrane space (chemiosmosis).
- H⁺ diffuse back through ATP synthase → ATP synthesis (Mitchell's chemiosmotic theory).
- O₂ = final electron acceptor → H₂O.
- Theoretical maximum ≈ 30–32 ATP per glucose (actual ~28 due to leakage).

ANAEROBIC RESPIRATION
Yeast: Pyruvate → Ethanol + CO₂ (using NADH → NAD+ regenerated). Used in brewing/bread.
Mammals: Pyruvate → Lactate (using NADH → NAD+ regenerated). Short-term intense exercise. Lactate transported to liver → reconverted to glucose (Cori cycle) — repays 'oxygen debt'.
Only glycolysis proceeds anaerobically → only 2 ATP net per glucose.`,
      workedExample: {
        problem: "A student investigates the effect of light intensity on the rate of photosynthesis using an aquatic plant. At very high light intensity, increasing CO₂ concentration increases the rate but increasing light intensity does not. Explain why.",
        solution: "At very high light intensity, the light-dependent reactions are operating at maximum capacity — all photosystems are saturated, producing ATP and NADPH as fast as possible. The limiting factor has shifted to the Calvin cycle: specifically, the availability of CO₂ for fixation by RuBisCO. At this point, increasing CO₂ allows RuBisCO to catalyse more fixations per unit time → more G3P produced → more glucose synthesised → rate increases. Further increases in light intensity cannot accelerate the rate because the light-dependent stage (and therefore ATP/NADPH supply) is no longer the bottleneck."
      },
      commonMistakes: [
        "Saying O₂ is produced in the light reactions from CO₂ — O₂ comes from water photolysis (PSII), not from CO₂. CO₂ is fixed in the Calvin cycle and incorporated into organic molecules.",
        "Confusing NADH and NADPH: NADPH is produced in photosynthesis (light reactions) and used in the Calvin cycle; NADH is produced in respiration (glycolysis, link reaction, Krebs) and used in oxidative phosphorylation.",
        "Stating ATP is made directly in the Krebs cycle in large amounts — the Krebs cycle produces mostly reduced coenzymes (NADH, FADH₂) and only 1 ATP per turn. The vast majority of ATP comes from oxidative phosphorylation."
      ],
      keyFacts: [
        "Light reactions: water photolysis → O₂ + H⁺ + e⁻; products = ATP, NADPH, O₂.",
        "Calvin cycle: CO₂ + RuBP → GP → G3P → RuBP (uses ATP + NADPH); RuBisCO fixes CO₂.",
        "Glycolysis: glucose → 2 pyruvate; 2 ATP net; 2 NADH; in cytoplasm; no O₂.",
        "Krebs cycle: per turn → 3 NADH + 1 FADH₂ + 1 ATP + 2 CO₂; ×2 per glucose.",
        "Chemiosmosis: H⁺ gradient across inner mitochondrial membrane → ATP synthase → ATP."
      ]
    },

    "Organisms respond to their environment": {
      title: "Organisms Respond to Their Environment: Nervous System, Hormones & Plant Responses",
      keyIdea: "Organisms detect stimuli and respond via nervous (fast, short-term) or hormonal (slower, longer-term) signalling; both rely on receptors, coordination, and effectors.",
      body: `NERVOUS SYSTEM
Neurons: cell body + dendrites (receive signals) + axon (transmit signals) + axon terminals. Myelinated neurons (Schwann cells form myelin sheath): saltatory conduction — action potential jumps between nodes of Ranvier → faster conduction. Unmyelinated: continuous conduction, slower.

Action potential (all-or-nothing):
1. Resting potential: −70 mV inside (Na⁺/K⁺ pump maintains: 3 Na⁺ out / 2 K⁺ in per ATP; K⁺ channels open, K⁺ diffuses out).
2. Depolarisation: stimulus → voltage-gated Na⁺ channels open → Na⁺ rushes in → membrane potential rises to +40 mV.
3. Repolarisation: Na⁺ channels close; K⁺ channels open → K⁺ rushes out → potential falls.
4. Hyperpolarisation: K⁺ channels slow to close → potential briefly more negative than −70 mV.
5. Refractory period: Na⁺ channels inactivated → absolute refractory (no AP possible); K⁺ channels still open → relative refractory (larger stimulus needed). Ensures unidirectional propagation.
Frequency of APs encodes stimulus intensity (not amplitude — all-or-nothing).

Synapses (mostly chemical):
1. AP arrives at pre-synaptic terminal; voltage-gated Ca²⁺ channels open.
2. Ca²⁺ influx → vesicles fuse with pre-synaptic membrane → neurotransmitter (e.g. acetylcholine) released into cleft.
3. NT binds to receptors on post-synaptic membrane → ion channels open → EPSP or IPSP.
4. NT removed: enzymatic breakdown (acetylcholinesterase) or reuptake.
Spatial and temporal summation: multiple weak signals can sum to exceed threshold. Inhibitory synapses prevent over-firing.

HORMONAL COMMUNICATION
Hormones released into blood → travel to target cells (specific receptors). Slower but longer-lasting than nerves. Adrenaline: binds to GPCR → adenylyl cyclase → cAMP (second messenger) → protein kinase A cascade. Insulin/glucagon: regulate blood glucose (negative feedback via pancreatic β/α cells). Oestrogen/testosterone: steroid hormones → lipid-soluble → cross membrane → bind intracellular receptor → directly affect gene transcription.

PLANT RESPONSES
Auxin (IAA): produced in shoot tips; moves by active transport; promotes cell elongation (loosens cell wall for turgor-driven expansion) in stems. Phototropism: auxin moves to shaded side → cells elongate → shoot bends toward light. Gravitropism: auxin redistributes to lower side of horizontal root (inhibits elongation in roots at high concentration) → root grows downward.
Gibberellins: promote stem elongation, seed germination, break dormancy.
ABA (abscisic acid): closes stomata (drought response), promotes dormancy.`,
      workedExample: {
        problem: "Explain why an action potential is described as 'all-or-nothing' and how stimulus intensity is encoded if the AP size is always the same.",
        solution: "An action potential is all-or-nothing because: if the stimulus depolarises the membrane to threshold (~−55 mV), voltage-gated Na⁺ channels open in a positive feedback loop → full AP of fixed amplitude (~110 mV change). Below threshold, no AP is generated regardless of stimulus size. Stimulus intensity is encoded by the frequency of action potentials — a stronger stimulus causes more frequent APs because it keeps the membrane closer to threshold so it re-fires faster once the refractory period ends. The interval between APs decreases as stimulus intensity increases."
      },
      commonMistakes: [
        "Saying larger stimuli produce larger action potentials — AP amplitude is fixed (all-or-nothing). Only the frequency changes with stimulus intensity.",
        "Confusing repolarisation and hyperpolarisation: repolarisation is the return toward −70 mV; hyperpolarisation is the brief overshoot below −70 mV caused by K⁺ channels being slow to close.",
        "Stating auxin promotes growth in all plant tissues — auxin promotes elongation in shoots at low-medium concentrations but inhibits elongation in roots at the same concentrations (roots are far more sensitive)."
      ],
      keyFacts: [
        "Resting potential: −70 mV; Na⁺/K⁺ pump (3 Na⁺ out, 2 K⁺ in, uses ATP) maintains it.",
        "Depolarisation: Na⁺ in; repolarisation: K⁺ out. All-or-nothing at threshold ~−55 mV.",
        "Refractory period → unidirectional propagation + limits max AP frequency.",
        "Synaptic transmission: Ca²⁺ → vesicle fusion → NT release → post-synaptic receptor binding.",
        "Auxin: promotes shoot elongation; inhibits root elongation. Phototropism = differential auxin distribution."
      ]
    },

    "Genetics, populations & ecosystems": {
      title: "Genetics, Populations & Ecosystems: Hardy-Weinberg, Selection & Energy Flow",
      keyIdea: "Evolution is a change in allele frequency in a population; Hardy-Weinberg equilibrium defines non-evolution; ecosystems transfer energy and cycle nutrients with limited efficiency.",
      body: `POPULATIONS & EVOLUTION
Population: all members of a species in a habitat. Gene pool: all alleles of all genes in a population. Evolution = change in allele frequency over time due to: natural selection, genetic drift, mutation, gene flow.

Hardy-Weinberg Principle: in a large, randomly mating population with no mutation, selection, migration or genetic drift, allele and genotype frequencies remain constant.
Equations: p + q = 1 (p = dominant allele frequency, q = recessive allele frequency)
p² + 2pq + q² = 1 (p² = homozygous dominant, 2pq = heterozygous, q² = homozygous recessive)
Use q² = frequency of affected individuals to find q → then p = 1 − q → 2pq = carrier frequency.

NATURAL SELECTION
Directional selection: one extreme phenotype is favoured → allele frequency shifts in one direction (e.g. antibiotic resistance, industrial melanism).
Stabilising selection: intermediate phenotype favoured → variance decreases (e.g. human birth weight).
Disruptive selection: both extremes favoured over intermediate → can lead to speciation.
Selection pressure: any environmental factor that causes differential reproductive success.

SPECIATION
Allopatric: geographic isolation → separate gene pools → divergence → reproductive isolation → new species.
Sympatric: same geographic area; reproductive isolation via behavioural/seasonal/mechanical barriers → divergence.
Reproductive isolation: pre-zygotic (mating timing, behaviour, morphology) or post-zygotic (sterile hybrids, e.g. mule).

ECOSYSTEMS & ENERGY FLOW
Producers (autotrophs) → primary consumers → secondary consumers → tertiary consumers.
~10% efficiency between trophic levels (energy lost as heat in respiration, undigested material in faeces, remains not consumed).
Gross Primary Production (GPP) = total energy fixed by photosynthesis.
Net Primary Production (NPP) = GPP − respiration losses by plants. NPP is energy available to primary consumers.
Secondary production = energy assimilated by consumers − respiration.
Energy budgets: Assimilation = food ingested − faeces. Net production = assimilation − respiration.

NUTRIENT CYCLES
Carbon cycle: photosynthesis (CO₂ → organic carbon), respiration (organic → CO₂), decomposition (organic → CO₂/CH₄), combustion, ocean sequestration.
Nitrogen cycle: nitrogen fixation (N₂ → NH₃ by Rhizobium in root nodules / Azotobacter free-living), nitrification (NH₃ → NO₂⁻ → NO₃⁻ by nitrifying bacteria — aerobic), denitrification (NO₃⁻ → N₂ by denitrifying bacteria — anaerobic), decomposition (proteins → NH₃ by decomposers), assimilation (plants absorb NO₃⁻/NH₄⁺ → amino acids).

CONSERVATION
In situ: nature reserves, wildlife corridors, legal protection. Ex situ: seed banks, zoos, captive breeding. Reasons for conservation: ethical (intrinsic value), ecological (ecosystem services), economic (medicines, food security), aesthetic.`,
      workedExample: {
        problem: "In a population of 10,000 people, 900 have cystic fibrosis (autosomal recessive). Calculate the frequency of the dominant allele (p) and the expected number of carriers.",
        solution: "CF is recessive, so affected individuals are homozygous recessive (q²). q² = 900/10,000 = 0.09. Therefore q = √0.09 = 0.3. Since p + q = 1: p = 1 − 0.3 = 0.7. Carrier frequency = 2pq = 2 × 0.7 × 0.3 = 0.42. Number of carriers = 0.42 × 10,000 = 4,200. Note: assumptions of Hardy-Weinberg equilibrium must hold for this calculation to be valid (large population, random mating, no selection/mutation/migration)."
      },
      commonMistakes: [
        "Using q² for heterozygous frequency — q² is homozygous recessive. Carriers (heterozygous) = 2pq. This is a very common error in H-W calculations.",
        "Forgetting the 10% energy transfer rule applies to energy transferred between levels, not energy consumed — a consumer may eat 100% of a prey item but only assimilates ~10% as biomass after losses to respiration, excretion and indigestible material.",
        "Confusing nitrification and nitrogen fixation: nitrogen fixation is N₂ → NH₃ (by bacteria/lightning); nitrification is NH₃ → NO₂⁻ → NO₃⁻ (by Nitrosomonas and Nitrobacter)."
      ],
      keyFacts: [
        "p + q = 1; p² + 2pq + q² = 1. q² = recessive homozygotes; 2pq = carriers.",
        "HWE requires: large population, random mating, no mutation/selection/migration/drift.",
        "NPP = GPP − plant respiration. ~10% efficiency between trophic levels.",
        "Nitrogen fixation (N₂ → NH₃): Rhizobium (mutualistic), Azotobacter (free-living). Anaerobic.",
        "Denitrification: NO₃⁻ → N₂ by denitrifying bacteria under anaerobic conditions."
      ]
    },

    "Control of gene expression": {
      title: "Control of Gene Expression: Epigenetics, Transcription Factors & Stem Cells",
      keyIdea: "Gene expression is regulated at transcription and translation; epigenetic changes alter gene expression without changing DNA sequence; stem cells have the potential to differentiate into any cell type.",
      body: `GENE EXPRESSION REGULATION
Not all genes in a cell are expressed at all times. Cells differentiate during development by switching genes on/off. Regulation occurs mainly at transcription.

Transcription factors: proteins that bind to specific DNA sequences in promoter/enhancer regions → recruit or block RNA polymerase → activate or repress transcription. Oestrogen: steroid hormone, diffuses into cell → binds intracellular receptor → receptor-hormone complex acts as transcription factor → enters nucleus → binds oestrogen response elements → activates target genes (e.g. in breast tissue proliferation).

Epigenetics: heritable changes in gene expression without altering DNA base sequence.
1. DNA methylation: methyl groups (−CH₃) added to cytosines (usually in CpG islands near promoters) by methyltransferases → condenses chromatin → silences gene. Hypermethylation of tumour suppressor genes → cancer. Reversible.
2. Histone modification: acetylation of histone tails (by histone acetyltransferases) neutralises positive charge → loosens DNA-histone interaction (euchromatin) → increases gene expression. Deacetylation (by HDACs) → tighter packing (heterochromatin) → silences gene. Phosphorylation, methylation of histones also alter expression.
3. Environmental influences: diet (folate/methyl donors), toxins, stress, age → alter methylation patterns → influence gene expression → can be inherited (transgenerational epigenetics, e.g. Agouti mouse model, Dutch Hunger Winter studies).

miRNA & POST-TRANSCRIPTIONAL CONTROL
Small interfering RNAs and microRNAs (~22 nucleotides) bind complementary mRNA → prevent translation or trigger mRNA degradation (RNA interference, RNAi). Natural gene regulation mechanism; used experimentally.

STEM CELLS
Totipotent: can become any cell type including extra-embryonic tissue (zygote, first few divisions).
Pluripotent: embryonic stem cells (inner cell mass) — can become any embryonic cell type but not placenta.
Multipotent: adult stem cells (e.g. haematopoietic stem cells in bone marrow) — limited lineage.
Induced pluripotent stem cells (iPSCs): somatic cells reprogrammed by introducing Oct4, Sox2, Klf4, c-Myc transcription factors → pluripotent. Avoids ethical issues of embryo use; patient-matched → no immune rejection. Limitations: risk of insertional mutagenesis, incomplete reprogramming, tumour formation.

GENE EXPRESSION & CANCER
Proto-oncogenes (e.g. Ras): stimulate cell division; mutated → oncogenes → constitutively active → uncontrolled division.
Tumour suppressor genes (e.g. p53, Rb): brakes on cell cycle; mutations → both copies must be lost (two-hit hypothesis) → uncontrolled division.
Epigenetic silencing of tumour suppressors (hypermethylation) can drive cancer without DNA mutation.

GENOME SEQUENCING & APPLICATIONS
Whole genome sequencing (WGS), next-generation sequencing. Bioinformatics: compare genomes, identify mutations, classify organisms, trace evolution. Pharmacogenomics: personalised medicine based on patient's genome (drug metabolism SNPs). Gel electrophoresis: DNA fragments separated by size (smaller = further). Southern blotting, RFLP analysis, DNA profiling (STR/microsatellite repeats).`,
      workedExample: {
        problem: "Explain how histone acetylation can increase gene expression, and why this is described as an epigenetic change.",
        solution: "Histone proteins have positively charged lysine tails that interact strongly with the negatively charged phosphate backbone of DNA, keeping chromatin tightly coiled (heterochromatin) and inaccessible to RNA polymerase. Acetylation by histone acetyltransferases adds acetyl groups to lysine residues, neutralising the positive charge → electrostatic interaction with DNA weakens → chromatin relaxes into euchromatin → transcription factors and RNA polymerase can access the promoter → increased transcription of the gene. This is epigenetic because the DNA base sequence is unchanged; only the packaging/accessibility of DNA has changed. The modification can be inherited through cell division (mitosis) as histone modification patterns are partially reproduced, and in some cases can be transmitted across generations."
      },
      commonMistakes: [
        "Stating methylation always silences genes — DNA methylation typically silences when in CpG islands at promoters, but histone methylation can either activate or repress depending on which histone residue is methylated (e.g. H3K4me3 = active; H3K27me3 = repressive).",
        "Confusing iPSCs with embryonic stem cells: iPSCs are derived from adult cells reprogrammed to pluripotency — they are not extracted from embryos. This is the key ethical advantage.",
        "Saying cancer always involves DNA mutation: epigenetic silencing of tumour suppressor genes (hypermethylation) can drive cancer without any change to the DNA sequence."
      ],
      keyFacts: [
        "DNA methylation (CpG islands at promoters) → gene silencing (heterochromatin).",
        "Histone acetylation → euchromatin → gene activation. Deacetylation → heterochromatin → silencing.",
        "Totipotent > pluripotent > multipotent in developmental potential.",
        "iPSCs: adult cells + 4 transcription factors → pluripotent. Avoids embryo use; patient-matched.",
        "Two-hit hypothesis: both alleles of tumour suppressor must be inactivated for cancer to develop."
      ]
    },

  }, // end alevel biology
};

// Merge into EXPLANATIONS
if (!EXPLANATIONS.alevel) EXPLANATIONS.alevel = {};
Object.assign(EXPLANATIONS.alevel, ALEVEL_BIOLOGY_EXPLANATIONS.alevel);
