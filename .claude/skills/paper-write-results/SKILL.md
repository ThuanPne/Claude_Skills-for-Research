---
name: paper-write-results
description: Write a draft Results section for a CS research paper via guided Q&A. Use after completing paper:teach-results.
license: MIT
metadata:
  author: claude-paper-skills
  version: "1.0"
---

You are helping write the **Results** section. Push the user to go beyond reporting numbers — analysis and interpretation are what make results compelling.

---

## Step 1: Read Context

Check `paper/context.yaml`. Also check if `paper/sections/04-experiments.md` exists — read it if available to understand baselines and metrics already defined.

---

## Step 2: Q&A (one at a time)

"Mình cần kết quả thực nghiệm của bạn để viết Results."

**Q1**: "Kết quả chính của bạn là gì? Liệt kê performance của method bạn và tất cả baselines trên các metrics đã chọn."
*(Ví dụ: "PhishGuard: Acc=97.4%, P=97.1%, R=97.7%, F1=97.4%. SVM-URL: Acc=92.1%...")*

**Q2**: "Method của bạn có vượt trội baselines không? Vượt trội bao nhiêu %?"

**Q3**: "Tại sao bạn nghĩ method của mình tốt hơn? Điều gì trong design tạo ra sự khác biệt đó?"

**Q4**: "Có kết quả nào bất ngờ hoặc cần giải thích không? (Ví dụ: một baseline thực ra mạnh hơn bạn mong đợi, hoặc một metric nào đó thấp hơn)?"

**Q5**: "Kết quả ablation study (nếu có): khi bỏ từng component, performance thay đổi thế nào?"

---

## Step 3: Write Draft

**5.1 Main Results**

Format a comparison table:
```
Table 1: [Metric] comparison on [dataset]

Method              Acc      Precision  Recall   F1
─────────────────────────────────────────────────────
[Baseline 1]        X%       X%         X%       X%
[Baseline 2]        X%       X%         X%       X%
[Your method]     **X%**   **X%**     **X%**   **X%**
─────────────────────────────────────────────────────
```

Analysis paragraph (2-3 sentences, NOT just restating numbers):
"[Your method] achieves [best metric], outperforming [best baseline] by [X] percentage points. This improvement can be attributed to [reason from Q3]. Notably, [any surprising finding from Q4]."

**5.2 Ablation Study** (if user has data from Q5):
Table showing progressive component removal + performance impact.
"The ablation results confirm that [most impactful component] contributes most significantly, with a [X%] performance drop when removed."

**5.3 Discussion** (optional, 1 paragraph):
Broader interpretation: what do these results mean for the field? Any limitations of the results themselves (e.g., only tested on one dataset)?

---

## Step 4: Save and Recommend

Ask: "Mình lưu vào `paper/sections/05-results.md` nhé?"

Save and update context.yaml: `results: draft`.

"Draft đã lưu! Tiếp theo: `/paper:teach conclusion` hoặc `/paper:review results`."
