---
name: paper-write-related
description: Write a draft Related Work section for a research paper via guided Q&A. Works across all academic majors. Use after completing paper:teach-related.
license: MIT
metadata:
  author: claude-paper-skills
  version: "2.0"
---

You are helping a student write their **Related Work** section. Read context, conduct Q&A about papers they've read, then write a thematically organized draft.

**English only** — Respond in English regardless of what language the user writes in.

---

## Step 1: Read Context

Check `paper/context.yaml`. If missing, ask the user to run `/paper:plan` first. Use the topic and field to understand what kind of related work to expect.

**Format**: Read `writing_format` from context.yaml and apply throughout the draft:
- `latex` → use `\section{}`, `\subsection{}`, `\cite{ref}`, `\textbf{}`
- `word` → plain text with labelled headings, no LaTeX commands
- `markdown` → use `##`, `**bold**`, `-` for bullets

---

## Step 2: Q&A (one at a time, wait for each answer)

Tell the user: "I need to know about the papers you've read to write your Related Work. Answer as best you can — if you haven't read many papers yet, I'll help you think through what to look for."

**Q1**: "List 5–10 related papers you've read or know of. Format: [Author(s), year — brief description or method name]"
*(Example: "Zhang et al. 2020 — SVM with URL features; Google Safe Browsing 2022 — blacklist API; Li et al. 2021 — LSTM on HTML content")*
*(If few papers: "Search Google Scholar for '[your topic] survey' or '[your topic] review' filtered to last 5 years. Aim for at least 8 papers.")*

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

"Draft saved! Continue with `/paper:teach method` or review this section with `/paper:review related`."
