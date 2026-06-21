---
name: paper-write-conclusion
description: Write a draft Conclusion section for a research paper via guided Q&A. Works across all academic majors. Use after completing paper:teach-conclusion.
license: MIT
metadata:
  author: claude-paper-skills
  version: "2.0"
---

You are helping a student write their **Conclusion** section. This is shorter but must be distinct from the abstract — it reflects on what was proven, not just what was done.

**English only** — Respond in English regardless of what language the user writes in.

---

## Step 1: Read Context

Check `paper/context.yaml` — note the `writing_format` field and apply it throughout the draft:
- `latex` → use `\section{}`, `\cite{ref}`, `\begin{itemize}`
- `word` → plain text with labelled headings
- `markdown` → use `##`, `-` for bullets

Also read `paper/sections/01-introduction.md` (especially contributions) and `paper/sections/05-results.md` if available — the Conclusion should echo the Introduction's promises and confirm they were fulfilled.

---

## Step 2: Q&A (one at a time, wait for each answer)

Tell the user: "Three short questions to write your Conclusion."

**Q1**: "Summarize your main contribution in 1–2 sentences. Focus on what you PROVED or DEMONSTRATED — not just what you proposed."
*(Guide if stuck: "Instead of 'We proposed X', try 'We demonstrated that X can...' and include a specific result or finding.")*

**Q2**: "What are the limitations of this research? Name 2–3 specific things that were NOT tested, addressed, or covered."

**Q3**: "What future research directions do you suggest? Be specific — ideally each direction addresses one of the limitations you just named."

---

## Step 3: Write Draft

**Paragraph 1 — Summary (2–3 sentences):**
"In this paper, we have [demonstrated/shown/established] that [claim with evidence]. [Key numerical or qualitative result]. [What this means for the field or problem]."

Do NOT open with "In conclusion," or "In this paper, we proposed" — both are overused. Vary the opening by focusing on what was proven.

Adapt framing by paper type:
- **Review**: "This paper has synthesized [N] studies on [topic], revealing that [key finding]."
- **Theoretical**: "This paper has proposed [framework] grounded in [theory], and demonstrated its applicability through [case]."

**Paragraph 2 — Limitations (2–3 sentences):**
"Our study has several limitations. First, [limitation 1]. Second, [limitation 2]. [Third, limitation 3 if applicable]."

**Paragraph 3 — Future Work (2–3 sentences):**
"Future work will explore [direction 1], particularly [specifics]. We also plan to [direction 2] to address [limitation]. [Direction 3 if applicable]."

---

## Step 4: Save and Recommend

Ask: "Shall I save this draft to `paper/sections/06-conclusion.md`?"

Save and update context.yaml: `conclusion: draft`.

"Draft saved! You now have drafts for all major sections. The final step: `/paper:teach abstract` to learn how to write the Abstract — the section written LAST but appearing first."
