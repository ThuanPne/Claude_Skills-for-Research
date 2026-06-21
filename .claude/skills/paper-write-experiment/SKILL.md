---
name: paper-write-experiment
description: Write a draft Experiments section for a research paper via guided Q&A. Applies to empirical and mixed papers across all majors. Use after completing paper:teach-experiment.
license: MIT
metadata:
  author: claude-paper-skills
  version: "2.0"
---

You are helping a student write their **Experiments** section. This section must be detailed enough that another researcher can reproduce the experimental setup exactly.

**English only** — Respond in English regardless of what language the user writes in.

---

## Step 1: Read Context

Check `paper/context.yaml`. If missing, ask the user to run `/paper:plan` first. Use the topic, field, and paper_type.

**Format**: Read `writing_format` from context.yaml and apply throughout the draft:
- `latex` → use `\section{}`, `\subsection{}`, `\cite{ref}`, tables in `tabular` environment
- `word` → plain text with labelled headings, no LaTeX commands
- `markdown` → use `##`, tables in Markdown pipe syntax

- If **empirical or mixed** → proceed with this skill.
- If **review or theoretical** → inform the user: "This skill is designed for empirical papers. For your paper type, this section may be a 'Case Study', 'Validation', or 'Illustrative Example' instead. Would you like me to adapt the Q&A for that?"

---

## Step 2: Q&A (one at a time, wait for each answer)

Tell the user: "I'll ask about your experimental setup so I can write this section."

**Q1**: "What dataset or data did you use? Give me: the name, source or link, total size, and any class or category breakdown."

**Q2**: "How did you split the data? (e.g., 80/10/10 train/validation/test, k-fold cross-validation, etc.)"

**Q3**: "What baselines or comparison methods did you evaluate against? Why did you choose them?"

**Q4**: "What metrics did you use to evaluate performance? (e.g., Accuracy, F1-score, MAE, BLEU, AUC, Likert scale) Why these metrics?"

**Q5**: "What were your implementation details? Hardware, programming language, framework or library, key hyperparameters, and approximate training/processing time?"

---

## Step 3: Write Draft

Adapt section headings and framing to the user's field. The core structure is:

**[Section N].1 Dataset**
"We [collect/use/construct] our dataset from [source]. [Description of data type and content]. The dataset contains [N] instances [breakdown if applicable]. We apply [split ratio], resulting in [N_train] training, [N_val] validation, and [N_test] test samples."

**[Section N].2 Baselines**
"We compare [system/method] against [N] baselines:
(1) **[Baseline 1]**: [brief description], representing [approach category];
(2) **[Baseline 2]**: [brief description];
..."

**[Section N].3 Evaluation Metrics**
"We evaluate all methods using [metrics]. We prioritize [primary metric] as the main criterion because [reason]."

For classification: briefly define each metric (prose or formula).
For other tasks: explain why each metric is appropriate for the task.

**[Section N].4 Implementation Details**
"All experiments are conducted on [hardware]. [System] is implemented using [language/framework, version]. Key hyperparameters: [list]. [Training/processing] takes approximately [time]. [Code/data available at URL if applicable]."

---

## Step 4: Save and Recommend

Ask: "Shall I save this draft to `paper/sections/04-experiments.md`?"

Save and update context.yaml: `experiments: draft`.

"Draft saved! Continue with `/paper:teach results` or review this section with `/paper:review experiment`."
