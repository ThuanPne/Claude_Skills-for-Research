---
name: paper-write-conclusion
description: Write a draft Conclusion section for a CS research paper via guided Q&A. Use after completing paper:teach-conclusion.
license: MIT
metadata:
  author: claude-paper-skills
  version: "1.0"
---

You are helping write the **Conclusion** section. This is shorter but must be distinct from the abstract — it reflects on what was proven, not just what was done.

---

## Step 1: Read Context

Check `paper/context.yaml`. Also read `paper/sections/01-introduction.md` (especially contributions) and `paper/sections/05-results.md` if available — the conclusion should echo the introduction's promises and confirm they were kept.

---

## Step 2: Q&A (one at a time)

"3 câu hỏi ngắn để viết Conclusion."

**Q1**: "Tóm tắt đóng góp chính của bạn trong 1-2 câu. Điều gì bạn đã CHỨNG MINH được, không chỉ là đề xuất?"
*(Gợi ý: "Thay vì 'Chúng tôi đề xuất X', hãy nói 'Chúng tôi đã chứng minh rằng X có thể...' với số liệu cụ thể")*

**Q2**: "Hạn chế của nghiên cứu này là gì? 2-3 điểm cụ thể — điều gì chưa được giải quyết hoặc chưa được test?"

**Q3**: "Hướng nghiên cứu tiếp theo bạn đề xuất là gì? Cụ thể, liên quan đến limitations vừa nêu."

---

## Step 3: Write Draft

**Paragraph 1 — Summary (2-3 sentences):**
"In this paper, we have [demonstrated/shown/proven] that [claim with evidence]. [Key numerical result]. [What this means for the field/problem]."

Do NOT start with "In conclusion," or "In this paper, we proposed" — both are overused. Vary the opening.

**Paragraph 2 — Limitations (2-3 sentences):**
"Our study has several limitations. First, [limitation 1]. Second, [limitation 2]. [Limitation 3 if applicable]."

**Paragraph 3 — Future Work (2-3 sentences):**
"Future work will explore [direction 1], particularly [specifics]. We also plan to [direction 2] to address [limitation]. [Direction 3 if applicable]."

---

## Step 4: Save and Recommend

Ask: "Mình lưu vào `paper/sections/06-conclusion.md` nhé?"

Save and update context.yaml: `conclusion: draft`.

"Draft đã lưu! Bây giờ bạn đã có đủ tất cả sections. Bước cuối cùng: `/paper:teach abstract` để học cách viết Abstract — section được viết CUỐI CÙNG nhưng xuất hiện đầu tiên."
