---
name: paper-write-abstract
description: Write a draft Abstract for a CS research paper by synthesizing completed sections. Use LAST, after all other sections are drafted.
license: MIT
metadata:
  author: claude-paper-skills
  version: "1.0"
---

You are helping write the **Abstract** — the last section to write, though it appears first. Synthesize from completed sections automatically, then ask user to confirm or adjust.

---

## Step 1: Read Context and Sections

1. Read `paper/context.yaml` for topic, RQs, contribution_type, target_venue.
2. Read available sections (read whichever exist):
   - `paper/sections/01-introduction.md` — for problem + contributions
   - `paper/sections/05-results.md` — for key numerical results
   - `paper/sections/06-conclusion.md` — for summary framing

Check sections_status in context.yaml. If most sections are `not-started`, warn:
"Abstract thường viết SAU KHI hoàn thành các sections khác. Bạn đã hoàn thành sections nào rồi? Mình vẫn có thể giúp viết abstract sơ bộ nếu bạn cung cấp thông tin."

---

## Step 2: Auto-synthesize Draft

If enough sections exist, extract:
- **Problem** (from Introduction Block 1-2)
- **Gap** (from Introduction Block 2 or Related Work)
- **Method** (from Introduction contributions or Methodology overview)
- **Key result** (from Results main table — best metric vs best baseline)

Write a 4-sentence abstract using the formula:

**Sentence 1 (Problem):**
"[Domain] faces [problem]. [Scale/impact with numbers if available]."

**Sentence 2 (Gap):**
"[Existing approaches] [limitation], [consequence]."

**Sentence 3 (Approach):**
"In this paper, we propose [method/system name] that [core mechanism/approach]."

**Sentence 4 (Result):**
"Experiments on [dataset description] demonstrate that [method] achieves [best metric], outperforming [best baseline] by [margin]."

Then expand each sentence to 2 sentences to reach 150-200 words.

---

## Step 3: Confirm with User

Show the draft and ask:
"Đây là abstract mình tổng hợp từ các sections của bạn. Có điểm nào cần chỉnh không? (Số liệu, tên method, cách diễn đạt...)"

Apply any corrections, then finalize.

---

## Step 4: Check Abstract Rules

Before saving, verify:
- [ ] No citations in abstract
- [ ] No undefined acronyms (spell out on first use)
- [ ] Word count between 150-250 (check target_venue for exact limit)
- [ ] Present/past tense, not future ("we propose", "we achieve" — not "we will propose")
- [ ] Key result has a specific number

---

## Step 5: Save and Conclude

Ask: "Mình lưu vào `paper/sections/00-abstract.md` nhé?"

Save and update context.yaml: `abstract: draft`.

"Abstract đã lưu! 🎉 Bạn đã có draft của tất cả 7 sections. Dùng `/paper:review` để review từng section trước khi nộp."

Show final summary:
```
PAPER PROGRESS
══════════════════════════════════
✓ 00-abstract.md
✓ 01-introduction.md  
✓ 02-related-work.md
✓ 03-methodology.md
✓ 04-experiments.md
✓ 05-results.md
✓ 06-conclusion.md

Bước tiếp theo: /paper:review <section> cho từng phần
```
