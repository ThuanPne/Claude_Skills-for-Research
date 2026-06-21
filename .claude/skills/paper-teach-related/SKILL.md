---
name: paper-teach-related
description: Teach how to write the Related Work section of a CS research paper. Use when user wants to learn Related Work structure before writing.
license: MIT
metadata:
  author: claude-paper-skills
  version: "1.0"
---

You are teaching a first-time student researcher how to write the **Related Work** section. This section is often misunderstood — beginners write it as a list of paper summaries. Teach the correct approach: thematic grouping + positioning.

**Teaching mode only** — recommend `/paper:write related` at the end.

---

## The Core Misconception to Fix

```
❌ WRONG (what beginners do)        ✅ RIGHT (what reviewers expect)
════════════════════════════════════════════════════════════════════

"Smith et al. [1] proposed X.       "Blacklist-based approaches [1,2,3]
 It does A, B, C."                   detect phishing using known URL
                                     databases. While effective for
"Jones et al. [2] proposed Y.        known attacks, these methods
 It does D, E, F."                   suffer from update delays of
                                     4-8 hours [4], leaving users
"Kim et al. [3] proposed Z..."       vulnerable to fresh attacks.
                                     
 → Just summarizing, no analysis     → Groups papers by theme,
                                       analyzes limitations together
```

---

## Structure to Teach

```
RELATED WORK = 3 MOVES
════════════════════════════════════════════════════════

  Move 1: THEME GROUPING
  ┌─────────────────────────────────────────────┐
  │ Group papers into 2-4 themes/categories     │
  │ Each theme = 1 subsection (optional) or     │
  │ 1-2 paragraphs                              │
  └─────────────────────────────────────────────┘
           │
           ▼
  Move 2: CRITICAL ANALYSIS
  ┌─────────────────────────────────────────────┐
  │ For each theme: what are the limitations?   │
  │ Don't just describe — evaluate!             │
  └─────────────────────────────────────────────┘
           │
           ▼
  Move 3: POSITIONING
  ┌─────────────────────────────────────────────┐
  │ Last paragraph: "Unlike prior work, our     │
  │ approach..."                                │
  │ Show WHERE your paper fits in the landscape │
  └─────────────────────────────────────────────┘
```

---

## Teach Each Move with Phishing Example

### Move 1: Theme Grouping

**Nguyên tắc**: Đọc 10 papers → tìm pattern → nhóm thành 2-4 themes.

**Ví dụ từ phishing paper:**

Theme nhóm:
- **Blacklist-based approaches** [PhishTank, Google Safe Browsing, ref3]
- **ML-based approaches using URL features** [ref4, ref5, ref6]
- **Deep learning approaches** [LSTM-based ref7, CNN-based ref8]

**Cách viết:**
> "Prior work on phishing detection can be broadly categorized into three approaches: blacklist-based methods, machine learning approaches using URL features, and deep learning methods."

**Checkpoint**: Bạn đã đọc bao nhiêu papers? Thử nhóm chúng thành 2-3 themes.

---

### Move 2: Critical Analysis

**Nguyên tắc**: Mỗi theme cần 1 câu về limitation. Đây là cách "justify" research của bạn.

**Useful sentence patterns:**
- "While [method] achieves [result], it [limitation]."
- "These approaches, however, [limitation] because [reason]."
- "A common limitation of [theme] is [issue]."

**Ví dụ từ phishing paper:**
> "Blacklist-based methods [1,2,3] offer high precision for known phishing sites but suffer from significant detection delays. Since phishing sites are added to blacklists only after manual verification, newly created sites can remain undetected for hours [4]. Machine learning approaches [5,6] address this by extracting URL features, but rely on static feature sets that may not generalize to novel attack patterns."

---

### Move 3: Positioning (Crucial!)

**Nguyên tắc**: Cuối Related Work, phải có 1-2 câu nói rõ bài của mình KHÁC với prior work ở chỗ nào.

**Template:**
> "Unlike [previous approaches], our work [what makes it different]. To the best of our knowledge, this is the first work to [novelty claim]."

**Ví dụ từ phishing paper:**
> "Unlike prior ML-based approaches that use fixed feature sets, our system dynamically weights features based on their predictive power using a trained Random Forest model. To the best of our knowledge, this is the first study to systematically evaluate URL features specifically on Vietnamese phishing campaigns."

**Lỗi phổ biến**: Quên viết positioning → reviewer không biết novelty của paper là gì.

---

## How Many Papers to Cite?

```
Paper type          Min papers    Recommended
────────────────────────────────────────────
Conference paper    10-15         15-25
Journal paper       20-30         30-50
Survey paper        50+           80-100+

Beginner's first paper → aim for 15-20 papers
```

---

## Closing

> "Bạn đã hiểu cấu trúc Related Work rồi: group by theme → analyze limitations → position your work. Dùng `/paper:write related` để viết draft nhé!"
