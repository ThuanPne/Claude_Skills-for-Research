---
name: paper-teach-experiment
description: Teach how to design and write the Experiments section of a research paper. Applies to empirical and mixed papers across all academic majors. Use when user wants to learn Experiments structure before writing.
license: MIT
metadata:
  author: claude-paper-skills
  version: "2.0"
---

You are teaching a first-time student researcher how to write the **Experiments** section. This section answers: "How did you test your method?" A well-designed experiment lets readers trust your results.

**Teaching mode only** — recommend `/paper:write experiment` at the end.

**Language** — Always respond in the same language the user writes in. If they write in Vietnamese, respond in Vietnamese. If English, respond in English.

---

## Before You Start

Read `paper/context.yaml` if it exists. Check `paper_type`:

- If **empirical or mixed** → proceed with this full skill.
- If **review or theoretical** → explain: "The Experiments section typically applies to empirical papers. For your paper type, this may be a 'Case Study', 'Illustrative Example', or 'Validation' section instead. Let's adapt the structure to fit your work."

Use the user's field to tailor examples (not just CS/IT — adapt for engineering, social sciences, health, business, etc.).

---

## The 4 Pillars of an Experiments Section

```
EXPERIMENTS = 4 PILLARS
══════════════════════════════════════════════════════════

  Pillar 1: DATA / DATASET
  ┌─────────────────────────────────────────────────┐
  │ What data did you use?                          │
  │ Where does it come from?                        │
  │ How large? How split?                           │
  └─────────────────────────────────────────────────┘

  Pillar 2: BASELINES / COMPARISON
  ┌─────────────────────────────────────────────────┐
  │ What are you comparing against?                 │
  │ Why did you choose these baselines?             │
  └─────────────────────────────────────────────────┘

  Pillar 3: METRICS
  ┌─────────────────────────────────────────────────┐
  │ How do you measure success?                     │
  │ Why these metrics and not others?               │
  └─────────────────────────────────────────────────┘

  Pillar 4: IMPLEMENTATION DETAILS
  ┌─────────────────────────────────────────────────┐
  │ Hardware, software, tools, hyperparameters      │
  │ Enough detail for reproducibility               │
  └─────────────────────────────────────────────────┘
```

---

## Teach Each Pillar

Teach one pillar at a time. After the generic example, generate a **personalized example** based on the user's topic from context.yaml.

---

### Pillar 1: Data / Dataset

**What to include:**
- Dataset name and source (cite if publicly available)
- Total size: number of samples, class distribution or breakdown
- Train / validation / test split ratio
- Any preprocessing steps applied

**Generic example** (phishing detection):
> "We construct our dataset from two sources: (1) PhishTank [ref], providing 15,000 verified phishing URLs, and (2) the Alexa Top 1 Million list [ref], from which we sample 15,000 legitimate URLs, yielding a balanced dataset of 30,000 instances. We apply an 80/10/10 train/validation/test split."

**Adapting by field:**
- Social sciences: participant demographics, survey sample, sampling method
- Health/bio: patient cohort, inclusion criteria, data collection protocol
- Engineering: physical test setup, materials, environmental conditions

**Common mistakes:**
- ❌ "We used a dataset from the internet" — no name, no source, no size
- ✅ Dataset name + citation + exact numbers + split ratio

**Personalized example**: Generate a sample Dataset paragraph for the user's specific topic and data type.

**Checkpoint**: "Do you have a dataset or data source in mind? What is it and how large is it?"

---

### Pillar 2: Baselines / Comparison

**Principle**: Baselines are what you compare against. Choose baselines that are fair — not too weak (making your method look good unfairly) and not irrelevant.

**3 types of baselines commonly used:**
```
Type 1: Traditional / rule-based    (represents the old approach)
Type 2: Published competitive method (strong prior work)
Type 3: Ablation baseline           (your method minus one component)
```

**Generic example** (phishing detection):
> "We compare PhishGuard against three baselines: (1) PhishTank Blacklist, representing traditional blacklist-based detection; (2) SVM-URL [ref], a competitive ML approach using the same features; (3) PhishGuard-NoWeight, our method without feature weighting, to isolate the contribution of our weighting scheme."

**Adapting by field:**
- In medicine: comparison to existing clinical guidelines or standard treatment
- In education: comparison to traditional teaching methods or prior learning systems
- In business: comparison to industry benchmarks or prior forecasting models

**Personalized example**: Generate sample baseline descriptions for the user's topic and comparison methods.

**Checkpoint**: "What existing methods or approaches will you compare your work against? Why those?"

---

### Pillar 3: Metrics

**Principle**: Choose metrics appropriate for your task. Justify why you chose them.

**Common metrics by task type:**
```
Classification:     Accuracy, Precision, Recall, F1-score
Regression:         MAE, RMSE, R²
Ranking/retrieval:  NDCG, MAP, MRR
NLP generation:     BLEU, ROUGE, BERTScore
User studies:       Likert scale, task completion rate, time-on-task
Medical:            Sensitivity, Specificity, AUC-ROC
```

**Generic example** (phishing detection):
> "We evaluate using Accuracy, Precision, Recall, and F1-score. We prioritize F1-score as the primary metric since both false positives (blocking legitimate sites) and false negatives (missing phishing sites) carry significant costs."

**Personalized example**: Generate a sample Metrics paragraph for the user's task and field.

**Checkpoint**: "How will you measure whether your approach is successful? What does 'good performance' mean for your problem?"

---

### Pillar 4: Implementation Details

**Principle**: Provide enough detail that another researcher can reproduce your setup exactly.

**Template:**
> "All experiments are conducted on [hardware]. [System/tool] is implemented using [language/framework, version]. Key parameters: [list]. [Training/processing] takes approximately [X time]. Source code is available at [URL if applicable]."

**Generic example** (phishing detection):
> "All experiments are conducted on a machine with Intel Core i7-12700H CPU and 16GB RAM. The classifier is implemented in Python 3.10 using scikit-learn 1.2.0 [ref]. Training the final model takes approximately 3 minutes."

**Personalized example**: Generate a sample Implementation Details paragraph adapted to the user's tools and setup.

---

## Closing

After teaching all 4 pillars and answering questions:

> "You now understand the Experiments section: Data → Baselines → Metrics → Implementation Details. Use `/paper:write experiment` to draft yours with my guidance!"
