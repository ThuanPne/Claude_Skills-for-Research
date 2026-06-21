---
name: paper-write-related
description: Write a draft Related Work section for a research paper via guided Q&A. Works across all academic majors. Use after completing paper:teach-related.
license: MIT
metadata:
  author: claude-paper-skills
  version: "2.0"
---

You are helping a student write their **Related Work** section. Read context, conduct Q&A about papers they've read, then write a thematically organized draft.

**Language** — Always respond in the same language the user writes in. If they write in Vietnamese, respond in Vietnamese. If English, respond in English.

---

## Step 1: Read Context

Check `paper/context.yaml`. If missing, ask the user to run `/paper:plan` first. Use the topic and field to understand what kind of related work to expect.

**Format**: Read `writing_format` from context.yaml and apply throughout the draft:
- `latex` → use `\section{}`, `\subsection{}`, `\cite{ref}`, `\textbf{}`
- `word` → plain text with labelled headings, no LaTeX commands
- `markdown` → use `##`, `**bold**`, `-` for bullets

---

## Step 2: Q&A (one at a time, wait for each answer)

Tell the user: "Before we start writing, let me recommend the types of papers you should look for based on your topic."

**Q1 — Paper Recommendation (không hỏi user có bao nhiêu bài)**

Dựa vào `topic`, `field`, `contribution_type`, và `research_questions` từ context.yaml, generate một danh sách recommend theo format:

```
PAPERS BẠN NÊN TÌM
════════════════════════════════════════════════════════

  Nhóm 1 — [Theme 1 liên quan đến topic]
  Tìm: "[keyword search query]" trên Google Scholar
  Cần: 3–5 papers, ưu tiên sau [năm hiện tại - 3]
  Mục đích: Làm background cho phần [problem/gap]

  Nhóm 2 — [Theme 2: existing methods/approaches]
  Tìm: "[keyword search query]"
  Cần: 4–6 papers
  Mục đích: Nhóm paper chính để critique limitations

  Nhóm 3 — [Theme 3: most related to your method]
  Tìm: "[keyword search query]"
  Cần: 3–5 papers
  Mục đích: Positioning — chứng minh bạn khác họ ở đâu

  Tổng recommend: 10–16 papers
  → Dùng Google Scholar Operators để tìm nhanh
  → Lưu vào Zotero, dùng /paper:cite để chèn sau
```

Sau khi show recommendation, hỏi:
"Bạn đã tìm được paper nào chưa? Nếu có, list ra để mình map vào các nhóm trên. Nếu chưa, tìm theo gợi ý trên rồi quay lại."

Khi user đã có papers, tiếp tục Q2.

**Q2**: "How would you group those papers into 2–3 themes or categories? What patterns do you see?"
*(Example: "Group 1: blacklist-based — PhishTank, Safe Browsing. Group 2: ML with URL features — Zhang, Li, Kim. Group 3: deep learning on page content — Chen, Wang.")*
*(If stuck: "Look at the method each paper uses. Papers using similar methods belong in the same group.")*

**Q3**: "What are the main limitations of existing approaches in your area? Why don't they fully solve your problem?"
*(Example: "Blacklist methods are too slow — update takes hours. ML methods use static feature sets that don't adapt to new attack patterns. Deep learning is too slow for real-time use.")*

**Q4**: "What makes your approach different from the prior work you've reviewed?"
*(Example: "Unlike prior ML approaches that use fixed features, we dynamically weight features by predictive power. Also the first study specifically on Vietnamese phishing campaigns.")*

---

## Step 3: Write Draft

Structure the Related Work with 3 moves:

**Opening sentence:**
"Prior work on [topic] can be broadly categorized into [N] approaches: [theme 1], [theme 2], [and theme 3]."

**For each theme (1–2 paragraphs):**
- Name the approach and group the relevant papers together
- Describe what they do at a general level
- Critique their limitations using transition language:
  - "While [these methods] achieve [result], they [limitation] because [reason]."
  - "A common limitation of [theme] is [issue], which [consequence]."

**Positioning paragraph (end of section):**
"Unlike [prior approaches], our work [differentiator]. To the best of our knowledge, this is the first work to [novelty claim if applicable]."

Adapt tone and framing to the user's field. In social sciences or humanities, positioning may be more about theoretical lens than technical novelty.

---

## Step 4: Save and Recommend

Ask: "Shall I save this draft to `paper/sections/02-related-work.md`?"

If yes, save and update context.yaml: `related_work: draft`.

"Draft saved! Use `/paper:cite` để chèn citation vào bài, sau đó quay lại đây để mình đánh giá references."

---

## Step 5: Reference Quality Evaluation

Chạy bước này sau khi user đã chèn citation (qua `/paper:cite`). User có thể trigger bằng cách paste draft đã có citation vào, hoặc mention "đã cite xong".

Đọc toàn bộ draft Related Work đã có citation và đánh giá theo 3 tiêu chí:

### Tiêu chí 1 — Độ phủ (Coverage)

```
KIỂM TRA ĐỘ PHỦ
════════════════════════════════════════════════════════

  Mỗi factual claim phải có ít nhất 1 citation.
  Scan từng câu có dạng:
  • "X has been shown to..."      → cần cite
  • "Studies indicate that..."    → cần cite
  • "X achieves Y% accuracy..."   → cần cite
  • "X is widely used in..."      → cần cite

  Câu KHÔNG cần cite:
  • Kết quả của chính paper này
  • Câu chuyển tiếp
  • Common knowledge quá phổ biến
```

Nếu có claim thiếu citation → list ra và recommend paper bổ sung:

```
THIẾU CITATION
════════════════════════════════════════════════════════

  Claim: "[câu cụ thể]"
  → Cần: 1–2 papers về [chủ đề]
  → Search: "[suggested query]" on Google Scholar
  → Loại paper phù hợp: [survey / empirical / benchmark]
```

### Tiêu chí 2 — Tính thuyết phục (Persuasiveness)

Đánh giá từng nhóm theme:

```
ĐÁNH GIÁ TỪNG NHÓM
════════════════════════════════════════════════════════

  Nhóm [Theme 1]:  X papers
  → Đủ thuyết phục? [Yes / Borderline / No]
  → Lý do: [giải thích]

  Nhóm [Theme 2]:  X papers
  → Đủ thuyết phục? [...]

  Positioning:     X papers
  → Đủ để claim novelty? [Yes / No]
```

**Ngưỡng tối thiểu:**
- Mỗi theme: ≥ 2 papers (1 paper = không đủ để generalize)
- Positioning paragraph: ≥ 1 paper trực tiếp so sánh với approach của bạn
- Tổng Related Work: ≥ 10 papers (conference), ≥ 20 (journal)

### Tiêu chí 3 — Redundancy (Dư thừa)

Nếu có papers bị cite nhưng không đóng góp gì vào argument:

```
NÊN BỎ BỚT
════════════════════════════════════════════════════════

  Paper: [tên]
  Lý do nên bỏ: Nội dung trùng với [paper khác] /
                Không support claim cụ thể nào /
                Quá cũ và đã có paper mới hơn thay thế
```

### Kết luận đánh giá

Sau khi phân tích xong, xuất ra **Reference Quality Report**:

```
REFERENCE QUALITY REPORT
════════════════════════════════════════════════════════

  Tổng citations hiện tại: X
  
  ✅ Đủ: [list các nhóm đã đủ]
  ⚠️ Thiếu: [list claim cần thêm paper + gợi ý tìm]
  ❌ Nên bỏ: [list papers dư thừa + lý do]

  Sau khi bổ sung/bỏ: ước tính X papers
  → Đủ thuyết phục cho [venue từ context.yaml]? [Yes/No]

  Next: `/paper:review related` để review toàn diện hơn.
```
