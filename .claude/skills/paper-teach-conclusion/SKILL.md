---
name: paper-teach-conclusion
description: Teach how to write the Conclusion section of a CS research paper. Use when user wants to learn Conclusion structure before writing.
license: MIT
metadata:
  author: claude-paper-skills
  version: "1.0"
---

You are teaching how to write the **Conclusion** section. This is one of the shorter sections but often written poorly — either too brief or copy-pasting the abstract. Teach the correct 3-part structure.

**Teaching mode only** — recommend `/paper:write conclusion` at the end.

---

## The Core Mistake to Fix

```
❌ WRONG                            ✅ RIGHT
════════════════════════════════════════════════════════

Conclusion = Copy-paste abstract    Conclusion = New angle on the same story

  "In this paper, we proposed X.      "We have demonstrated that X
   We achieved 97.4% F1. In           addresses the key limitation
   conclusion, our method is          of prior work — specifically,
   good."                             the inability to detect novel
                                      phishing sites in real-time.
  → Boring. Reviewer skips it.        Our ablation study reveals
                                      that URL features are the
                                      most critical component,
                                      suggesting promising future
                                      directions in feature engineering."

                                      → Adds value. Reviewer appreciates it.
```

---

## Structure to Teach

```
CONCLUSION = 3 PARTS
════════════════════════════════════════════════════════

  Part 1: SUMMARY (~2-3 câu)
  ┌─────────────────────────────────────────────┐
  │ Nhắc lại contributions — nhưng KHÁC với    │
  │ abstract. Nhấn mạnh what was proven,        │
  │ not just what was proposed.                 │
  └─────────────────────────────────────────────┘
           │
           ▼
  Part 2: LIMITATIONS (~2-3 câu)
  ┌─────────────────────────────────────────────┐
  │ Trung thực về những gì CHƯA được giải quyết│
  │ Không phòng thủ — reviewer tôn trọng       │
  │ sự trung thực hơn là bỏ qua limitations    │
  └─────────────────────────────────────────────┘
           │
           ▼
  Part 3: FUTURE WORK (~2-3 câu)
  ┌─────────────────────────────────────────────┐
  │ CỤ THỂ — không phải "there are many        │
  │ directions for future work"                 │
  │ Ideally, stem từ limitations               │
  └─────────────────────────────────────────────┘
```

---

## Teach Each Part with Phishing Example

### Part 1: Summary

**Nguyên tắc**: Không copy-paste. Viết từ góc nhìn "nhìn lại" — what did we prove, not just what did we do.

**Template:**
> "In this paper, we have [proven/demonstrated/shown] that [claim] by [method]. [Key result in 1 sentence]."

**Ví dụ từ phishing paper:**
> "In this paper, we have demonstrated that ML-based phishing detection using URL features can substantially outperform traditional blacklist approaches, achieving 97.4% F1-score on a dataset of 30,000 URLs. Our proposed system, PhishGuard, addresses the critical real-time detection gap identified in prior work by classifying URLs in under 50 milliseconds without relying on external database queries."

---

### Part 2: Limitations

**Nguyên tắc**: Trung thực và cụ thể. Reviewer sẽ tự tìm ra hạn chế — tốt hơn là bạn nêu trước.

**Ví dụ từ phishing paper:**
> "Our study has several limitations. First, our dataset focuses on English-language phishing URLs; performance on Vietnamese or multilingual phishing campaigns remains untested. Second, PhishGuard relies solely on URL-based and HTML features and does not analyze visual similarity between phishing pages and legitimate ones. Third, our evaluation uses a static dataset; the model's ability to generalize to evolving phishing techniques over time requires further study."

**Lỗi phổ biến**: 
- ❌ "Our method has some limitations but they are minor" (vague, defensive)
- ✅ Nêu rõ 2-3 limitations cụ thể

---

### Part 3: Future Work

**Nguyên tắc**: Gợi ý directions cụ thể, ideally là solutions cho limitations vừa nêu.

**Ví dụ từ phishing paper:**
> "Future work will explore three directions. First, we plan to extend our dataset to include multilingual phishing URLs to improve cross-lingual generalization. Second, integrating visual similarity analysis using computer vision techniques could improve detection of visually-deceptive phishing pages. Third, we plan to develop an online learning variant of PhishGuard that continuously adapts to new phishing patterns without full model retraining."

**Pattern hay dùng**: Mỗi future direction tương ứng với 1 limitation đã nêu. Shows coherence.

---

## Common Mistakes Summary

| Mistake | Fix |
|---------|-----|
| Copy-paste từ abstract | Viết lại từ góc nhìn "what was proven" |
| Không có limitations | Nêu 2-3 limitations cụ thể — shows intellectual honesty |
| Future work quá vague | Mỗi direction phải actionable và cụ thể |
| Conclusion quá dài | 1-2 trang là đủ, không cần lặp lại toàn bộ paper |

---

## Closing

> "Bạn đã hiểu cấu trúc Conclusion rồi: Summary (new angle) → Limitations (honest) → Future Work (specific). Dùng `/paper:write conclusion` để viết draft nhé!"
