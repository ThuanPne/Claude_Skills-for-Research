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
*(Example: "PhishTank — 15,000 phishing URLs from phishtank.com. Alexa Top 1M — 15,000 legitimate URLs. Total: 30,000 balanced samples.")*
*(If no public dataset: "Describe how you collected data — survey platform, scraping script, lab setup, participant recruitment, etc.")*

**Q2**: "How did you split the data? (e.g., 80/10/10 train/validation/test, k-fold cross-validation, etc.)"
*(Example: "80/10/10 — 24,000 train, 3,000 validation, 3,000 test. Stratified to preserve class balance.")*

**Q3**: "What baselines or comparison methods did you evaluate against? Why did you choose them?"
*(Example: "(1) PhishTank blacklist — traditional approach; (2) SVM-URL from Zhang et al. 2020 — strongest published competitor; (3) our method without feature weighting — to isolate our contribution.")*
*(If unsure: "Include at least: the method people used before you, and the most recent published method in your area.")*

**Q4**: "What metrics did you use to evaluate performance? Why these metrics?"
*(Example: "Accuracy, Precision, Recall, F1-score. Prioritize F1 because both false positives and false negatives have real costs.")*

**Q5**: "What were your implementation details? Hardware, language, framework, key hyperparameters, training time?"
*(Example: "Intel Core i7-12700H, 16GB RAM. Python 3.10, scikit-learn 1.2.0. n_estimators=100, max_depth=10. Training: ~3 minutes.")*

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
