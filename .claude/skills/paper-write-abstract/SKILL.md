---
name: paper-write-abstract
description: Write a draft Abstract for a research paper by synthesizing completed sections. Works across all academic majors. Use LAST, after all other sections are drafted.
license: MIT
metadata:
  author: claude-paper-skills
  version: "2.0"
---

You are helping a student write their **Abstract** — the last section to write, though it appears first. Synthesize from completed sections automatically, adapt the formula to paper type, then confirm with the user.

**English only** — Respond in English regardless of what language the user writes in.

---

## Step 1: Read Context and Completed Sections

1. Read `paper/context.yaml` for topic, research_questions, paper_type, contribution_type, target_venue, and `writing_format`. Apply the format throughout the draft:
   - `latex` → no special commands needed for abstract body, but wrap in `\begin{abstract}...\end{abstract}` if requested
   - `word` / `markdown` → plain paragraph, no markup needed
2. Read whichever sections exist:
   - `paper/sections/01-introduction.md` — for problem + contributions
   - `paper/sections/05-results.md` — for key numerical results
   - `paper/sections/06-conclusion.md` — for summary framing

Check sections_status in context.yaml. If most sections are `not-started`, warn:
"The Abstract is usually written after all other sections are complete. Which sections have you drafted so far? I can still help write a preliminary abstract if you provide the key information."

---

## Step 2: Auto-Synthesize Draft

Select the formula based on paper_type from context.yaml:

### For empirical / new-method:

Extract:
- **Problem** (from Introduction Block 1–2)
- **Gap** (from Introduction Block 2 or Related Work)
- **Method** (from Introduction contributions or Methodology overview)
- **Key result** (from Results — best metric vs. best baseline)

Draft:

**Sentence 1 (Problem):** "[Domain] faces [problem]. [Scale or impact]."

**Sentence 2 (Gap):** "[Existing approaches] [limitation], [consequence]."

**Sentence 3 (Approach):** "In this paper, we propose [method/system] that [core mechanism]."

**Sentence 4 (Result):** "Experiments on [dataset] demonstrate that [method] achieves [metric], outperforming [baseline] by [margin]."

Expand each sentence to 2 sentences to reach 150–200 words.

---

### For review:

**Sentence 1 (Topic + motivation):** "[Topic] is an important area because [reason]."

**Sentence 2 (Gap in existing reviews):** "Despite growing interest, [no comprehensive synthesis exists / existing reviews are limited by X]."

**Sentence 3 (What this review does):** "This paper presents a systematic review of [N] studies on [topic], covering [scope / date range]."

**Sentence 4 (Key findings):** "Our analysis reveals [key finding] and identifies [open challenge or gap] as a priority for future research."

---

### For theoretical:

**Sentence 1 (Problem):** "[Domain] lacks [a framework / model / theory] for [problem]."

**Sentence 2 (Gap):** "Existing work [limitation], leaving [consequence] unaddressed."

**Sentence 3 (Contribution):** "This paper proposes [framework name], a [description] grounded in [theory/principles]."

**Sentence 4 (Validation + implication):** "We demonstrate the framework's applicability through [case/example] and discuss implications for [theory / practice / policy]."

---

## Step 3: Confirm with User

Show the draft and ask:
"This is the abstract I synthesized from your sections. Does anything need adjusting? (Numbers, method name, wording, emphasis...)"

Apply any corrections, then finalize.

---

## Step 4: Check Abstract Rules

Before saving, verify:
- [ ] No citations — no [ref] tags
- [ ] No undefined acronyms — spell out on first use
- [ ] Word count within venue limit (check target_venue in context.yaml)
- [ ] Present or past tense, not future ("we propose", "we demonstrate" — not "we will propose")
- [ ] Key result includes a specific number (not "significantly improved")

---

## Step 5: Save and Conclude

Ask: "Shall I save this to `paper/sections/00-abstract.md`?"

Save and update context.yaml: `abstract: draft`.

"Abstract saved! You now have drafts for all sections. Use `/paper:review <section>` to review and refine each section before submission."

Show final summary:
```
PAPER PROGRESS
══════════════════════════════════════
✓ 00-abstract.md
✓ 01-introduction.md
✓ 02-related-work.md
✓ 03-methodology.md
✓ 04-experiments.md
✓ 05-results.md
✓ 06-conclusion.md

Next step: /paper:review <section> for each section
```
