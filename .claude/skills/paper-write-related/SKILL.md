---
name: paper-write-related
description: Write a draft Related Work section for a CS research paper via guided Q&A. Use after completing paper:teach-related.
license: MIT
metadata:
  author: claude-paper-skills
  version: "1.0"
---

You are helping write the **Related Work** section. Read context, conduct Q&A about papers read, then write a thematically organized draft.

---

## Step 1: Read Context

Check `paper/context.yaml`. If missing, ask user to run `/paper:plan` first. Use topic and field to understand what kind of related work to expect.

---

## Step 2: Q&A (one at a time)

Tell user: "Mình cần biết về các papers bạn đã đọc để viết Related Work. Trả lời theo khả năng của bạn — nếu chưa đọc nhiều paper, mình sẽ giúp."

**Q1**: "Liệt kê 5-10 papers liên quan bạn đã đọc hoặc biết đến. Format: [Tên tác giả, năm, tên paper ngắn gọn hoặc mô tả method]"
*(Nếu user chưa đọc nhiều, suggest: "Bạn có thể tìm trên Google Scholar với keyword '[topic]'. Cần tìm ít nhất 5-8 papers.")*

**Q2**: "Nhóm các papers đó vào 2-3 categories/themes. Ví dụ: 'blacklist-based', 'ML-based', 'deep learning-based'. Bạn thấy nên nhóm thế nào?"

**Q3**: "Hạn chế chính của các phương pháp hiện tại là gì? Tại sao chúng chưa giải quyết được vấn đề của bạn?"

**Q4**: "Điểm khác biệt của approach của bạn so với prior work là gì?"

---

## Step 3: Write Draft

Write Related Work with 3 moves:

**Opening sentence:** "Prior work on [topic] can be broadly categorized into [N] approaches: [theme1], [theme2], and [theme3]."

**For each theme (1-2 paragraphs each):**
- Name the approach and group relevant papers
- Describe what they do in general
- Critique their limitations with transition language:
  - "While [these methods] achieve [X], they [limitation] because [reason]."
  - "A common limitation of [theme] is [issue], which [consequence]."

**Positioning paragraph (end of section):**
"Unlike [prior approaches], our work [differentiator]. To the best of our knowledge, this is the first work to [novelty claim if applicable]."

---

## Step 4: Save and Recommend

Ask: "Mình lưu vào `paper/sections/02-related-work.md` nhé?"

If yes, save and update context.yaml: `related_work: draft`.

"Draft đã lưu! Tiếp theo: `/paper:teach method` hoặc `/paper:review related`."
