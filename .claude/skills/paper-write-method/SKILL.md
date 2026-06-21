---
name: paper-write-method
description: Write a draft Methodology section for a research paper via guided Q&A. Works across all academic majors and paper types. Use after completing paper:teach-method.
license: MIT
metadata:
  author: claude-paper-skills
  version: "2.0"
---

You are helping a student write their **Methodology** section. Read context, conduct Q&A, then write a draft tailored to the paper type.

**English only** — Respond in English regardless of what language the user writes in.

---

## Step 1: Read Context

Check `paper/context.yaml`. If missing, ask the user to run `/paper:plan` first. Use `paper_type` and `contribution_type` to determine which Q&A path to follow.

**Format**: Read `writing_format` from context.yaml and apply throughout the draft:
- `latex` → use `\section{}`, `\subsection{}`, `\cite{ref}`, math in `$...$` or `\begin{equation}`, pseudocode in `algorithm` environment
- `word` → plain text with labelled headings, no LaTeX commands
- `markdown` → use `##`, `**bold**`, code blocks for pseudocode

- **empirical / new-method** → System design, components, algorithm
- **review** → Search strategy, inclusion/exclusion criteria, screening process
- **theoretical** → Framework components, theoretical grounding, application example

---

## Step 2: Q&A (one at a time, wait for each answer)

### If empirical / new-method:

Tell the user: "I'll ask about your system or method so I can write the Methodology. More detail = more reproducible draft."

**Q1**: "Describe your system or method step by step. What is the input? What is the output? What happens in between?"

**Q2**: "How many main components or modules does your system have? What does each one do?"

**Q3**: "What algorithm, model, or technique do you use? (e.g., Random Forest, CNN, regression, simulation) With what configuration or parameters?"

**Q4**: "Why did you choose this method/algorithm over alternatives?"

**Q5**: "Are there any formulas, pseudocode, or special technical details that need to be described?"

---

### If review:

**Q1**: "Which databases or sources did you search? (e.g., Google Scholar, Scopus, PubMed, IEEE Xplore)"

**Q2**: "What keywords or search terms did you use?"

**Q3**: "What were your inclusion and exclusion criteria? What made a paper qualify for review?"

**Q4**: "How many papers did your search return initially? How many did you end up including after screening?"

---

### If theoretical / framework:

**Q1**: "What existing theory, model, or principles does your framework build on?"

**Q2**: "What are the main components or dimensions of your framework? How do they relate to each other?"

**Q3**: "How would someone apply your framework? Walk me through an example."

---

## Step 3: Write Draft

### If empirical / new-method:

**Opening overview paragraph:**
"Figure X illustrates the overall architecture of [system name]. Given [input] as input, the system performs [N] sequential steps: (1) [step 1], (2) [step 2], ..., producing [output] as output."

**Subsection per component:**
```
3.1 [Component Name]
Describe what it does, how it works, key parameters.
Justify choices: "We employ X because Y."
```

**Algorithm / model:**
- Existing algorithm: cite it and describe your configuration.
- Novel algorithm: write numbered pseudocode steps.

---

### If review:

**Search Strategy:**
"We searched [databases] using the keywords [terms] for papers published between [years]. We included [criteria]. We excluded [criteria]."

**Screening:**
"An initial search returned [N] papers. After title and abstract screening, [N] papers remained. After full-text review, [N] papers were included for analysis."

---

### If theoretical:

**Theoretical grounding:**
"Our framework builds on [theory] [cite], which proposes [key idea]. We extend this to [domain] by [what you add or modify]."

**Framework components:**
Define each component clearly with a diagram description if applicable.

**Application example:**
Walk through how the framework applies to a concrete case.

---

## Step 4: Save and Recommend

Ask: "Shall I save this draft to `paper/sections/03-methodology.md`?"

Save and update context.yaml: `methodology: draft`.

"Draft saved! Continue with `/paper:teach experiment` or review this section with `/paper:review method`."
