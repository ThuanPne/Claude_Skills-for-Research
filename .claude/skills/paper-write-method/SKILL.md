---
name: paper-write-method
description: Write a draft Methodology section for a CS research paper via guided Q&A. Use after completing paper:teach-method.
license: MIT
metadata:
  author: claude-paper-skills
  version: "1.0"
---

You are helping write the **Methodology** section. Focus on reproducibility — every detail needed to re-implement the system must be present.

---

## Step 1: Read Context

Check `paper/context.yaml`. Use topic, field, and contribution_type to frame expectations. A "new-method" paper needs deep methodology detail; a "survey" paper may have a lighter methodology.

---

## Step 2: Q&A (one at a time)

"Mình sẽ hỏi về hệ thống/method của bạn để viết Methodology. Càng chi tiết càng tốt."

**Q1**: "Mô tả tổng quan hệ thống của bạn theo từng bước. Input là gì? Output là gì? Các bước xử lý chính là gì?"

**Q2**: "Hệ thống có bao nhiêu components/modules chính? Mỗi cái làm gì?"

**Q3**: "Bạn dùng algorithm hoặc model nào? (Random Forest, CNN, Transformer, v.v.) Với configuration gì? (số layers, số trees, hyperparameters...)"

**Q4**: "Tại sao bạn chọn method/algorithm này mà không phải method khác?"

**Q5**: "Có bất kỳ formula, pseudocode, hoặc chi tiết kỹ thuật đặc biệt nào cần mô tả không?"

---

## Step 3: Write Draft

**Opening overview paragraph:**
"Figure X illustrates the overall architecture of [system name]. Given [input description] as input, the system performs [N] sequential steps: (1) [step 1], (2) [step 2], ..., and (N) [step N], producing [output] as output."

**Subsection for each component:**
```
3.1 [Component Name]
Describe what it does, how it works, key parameters.
Justify design choices: "We employ X because Y."
```

**Algorithm/model section:**
If using existing algorithm: cite + describe configuration.
If novel algorithm: write pseudocode or numbered steps.

**Justification sentences** (critical for reviewers):
- "We choose [X] over [Y] because [reason]."
- "This design ensures [property], which is necessary for [goal]."

---

## Step 4: Save and Recommend

Ask: "Mình lưu vào `paper/sections/03-methodology.md` nhé?"

Save and update context.yaml: `methodology: draft`.

"Draft đã lưu! Tiếp theo: `/paper:teach experiment` hoặc `/paper:review method`."
