---
name: paper-teach-abstract
description: Teach how to write the Abstract of a CS research paper. Use when user wants to learn Abstract structure before writing. Abstract should be written LAST.
license: MIT
metadata:
  author: claude-paper-skills
  version: "1.0"
---

You are teaching how to write the **Abstract**. Start by explaining a fact that surprises most beginners: **Abstract is written last, even though it appears first.**

**Teaching mode only** — recommend `/paper:write abstract` at the end.

---

## The First Thing to Teach: Why Write Abstract Last?

```
ORDER IN PAPER      ≠       ORDER OF WRITING
════════════════════════════════════════════════

  Abstract ← appears first    Written LAST ✓

  Why? Because abstract summarizes the ENTIRE paper.
  You can't summarize what you haven't written yet.

  Abstract = 250 words that must answer:
  • What problem? (1 sentence)
  • Why care? (1 sentence)  
  • What did you do? (1-2 sentences)
  • What did you find? (1-2 sentences)
  • So what? / Impact (1 sentence)
```

---

## The 4-Sentence Formula

Teach this formula — it works for almost any CS paper:

```
Sentence 1: PROBLEM
"[Domain] faces [problem]. [Scale/impact of problem]."

Sentence 2: GAP / MOTIVATION  
"Existing approaches [limitation], which [consequence]."

Sentence 3: OUR APPROACH
"In this paper, we propose [method] that [what it does]."

Sentence 4: KEY RESULT
"Experiments on [dataset] demonstrate that our method 
 achieves [metric], outperforming [baseline] by [X]."
```

---

## Teach with Phishing Example

**Sentence 1 — Problem:**
> "Phishing attacks have emerged as one of the most prevalent cyber threats, causing billions of dollars in annual financial losses worldwide."

**Sentence 2 — Gap:**
> "Traditional blacklist-based detection methods suffer from significant delays, leaving users vulnerable to newly created phishing sites for hours before detection."

**Sentence 3 — Our Approach:**
> "In this paper, we propose PhishGuard, a real-time phishing detection system that extracts 48 URL-based features and employs a Random Forest classifier to identify phishing sites without relying on external blacklists."

**Sentence 4 — Key Result:**
> "Extensive experiments on a balanced dataset of 30,000 URLs demonstrate that PhishGuard achieves 97.4% F1-score, outperforming the best baseline method by 5.3 percentage points, while maintaining a classification latency of under 50 milliseconds."

**Combined abstract:**
> "Phishing attacks have emerged as one of the most prevalent cyber threats, causing billions of dollars in annual financial losses worldwide. Traditional blacklist-based detection methods suffer from significant delays, leaving users vulnerable to newly created phishing sites for hours before detection. In this paper, we propose PhishGuard, a real-time phishing detection system that extracts 48 URL-based features and employs a Random Forest classifier to identify phishing sites without relying on external blacklists. Extensive experiments on a balanced dataset of 30,000 URLs demonstrate that PhishGuard achieves 97.4% F1-score, outperforming the best baseline method by 5.3 percentage points, while maintaining a classification latency of under 50 milliseconds."

**Word count**: ~120 words. Target for most venues: 150-250 words. Can expand each sentence into 1-2 sentences.

---

## What Must NOT Be in Abstract

- Citations (no [ref] in abstract)
- Undefined acronyms (spell out on first use)
- Figures or tables
- "In this study, we will..." (present/past tense, not future)
- Vague claims without numbers ("significant improvement")

---

## Venue-Specific Length

```
Venue type              Abstract length
─────────────────────────────────────────
IEEE conference         150-200 words
ACM conference          150-250 words
Springer LNCS           150-250 words
Journal (IEEE, Elsevier) 200-300 words
Vietnamese conference   150-200 words
```

---

## Closing

> "Bạn đã hiểu cách viết Abstract rồi — 4 sentences: Problem → Gap → Approach → Result. Quan trọng nhất: hãy viết nó SAU KHI hoàn thành tất cả sections khác. Dùng `/paper:write abstract` và mình sẽ tự động đọc các sections bạn đã viết để tổng hợp nhé!"
