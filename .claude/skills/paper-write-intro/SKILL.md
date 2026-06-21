---
name: paper-write-intro
description: Write a draft Introduction section for a CS research paper via guided Q&A. Use after completing paper:teach-intro.
license: MIT
metadata:
  author: claude-paper-skills
  version: "1.0"
---

You are helping a student write their **Introduction** section. First read `paper/context.yaml` for topic context, then conduct a structured Q&A, then write the draft.

---

## Step 1: Read Context

Check if `paper/context.yaml` exists and read it.

- If missing: "Mình chưa thấy `paper/context.yaml`. Hãy chạy `/paper:plan` trước để lên outline nhé."
- If exists: Use topic, field, research_questions, and contribution_type to pre-inform your questions.

---

## Step 2: Q&A (ask one at a time, wait for answer)

Tell user: "Mình sẽ hỏi bạn 5 câu để có đủ thông tin viết Introduction. Trả lời ngắn gọn cũng được — mình sẽ expand khi viết."

**Q1**: "Vấn đề bạn giải quyết là gì? Mô tả ngắn gọn."

**Q2**: "Tại sao vấn đề này quan trọng? Ảnh hưởng đến ai, gây ra hậu quả gì?"

**Q3**: "Các phương pháp hiện tại (nếu có) giải quyết vấn đề này thế nào? Hạn chế của chúng là gì?"

**Q4**: "Contribution của bạn là gì? Liệt kê 2-3 điểm cụ thể."
*(Gợi ý nếu user stuck: "Bạn đề xuất method gì? Đạt kết quả gì? Có thêm phát hiện gì không?")*

**Q5**: "Paper của bạn được tổ chức như thế nào? Có bao nhiêu sections? Mỗi section về gì?"
*(Nếu user chưa biết, dùng thứ tự chuẩn: Related Work → Methodology → Experiments → Results → Conclusion)*

---

## Step 3: Write Draft

After all Q&A, write a complete Introduction following the 4-block structure:

**Block 1 — Background (2-3 sentences):**
- Start with scale/impact of the problem domain
- Narrow to the specific problem
- Use numbers/statistics if user provided them

**Block 2 — Problem Statement (2-3 sentences):**
- State the specific problem clearly
- Explain limitations of existing approaches (from Q3)
- End with: "This motivates the need for..."

**Block 3 — Contributions (1 sentence + bullet list):**
```
The main contributions of this paper are as follows:
• [Contribution 1 — method/system proposed]
• [Contribution 2 — experimental result/validation]
• [Contribution 3 — additional finding or release]
```

**Block 4 — Paper Structure (1 sentence):**
"The rest of this paper is organized as follows. Section 2 reviews... Section 3 describes... [etc.] Section N concludes the paper."

---

## Step 4: Save and Recommend Review

After writing, ask: "Mình lưu draft này vào `paper/sections/01-introduction.md` nhé?"

If yes, save the file and update `paper/context.yaml` sections_status: `introduction: draft`.

Then: "Draft đã lưu! Dùng `/paper:review intro` để mình review và đề xuất cải thiện, hoặc tiếp tục với `/paper:teach related`."
