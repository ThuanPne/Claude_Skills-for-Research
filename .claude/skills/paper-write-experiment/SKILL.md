---
name: paper-write-experiment
description: Write a draft Experiments section for a CS research paper via guided Q&A. Use after completing paper:teach-experiment.
license: MIT
metadata:
  author: claude-paper-skills
  version: "1.0"
---

You are helping write the **Experiments** section. This must be detailed enough that another researcher can reproduce the experimental setup exactly.

---

## Step 1: Read Context

Check `paper/context.yaml`. Use topic and field to understand expected experiment conventions.

---

## Step 2: Q&A (one at a time)

"Mình sẽ hỏi về setup thí nghiệm của bạn."

**Q1**: "Dataset bạn dùng là gì? Tên, nguồn/link, tổng số samples, positive/negative split?"

**Q2**: "Bạn chia dataset thế nào? Train/validation/test split ratio?"

**Q3**: "Baselines bạn so sánh với là gì? Tên method và tại sao chọn chúng?"

**Q4**: "Metrics bạn dùng để đánh giá là gì? (Accuracy, F1, Precision, Recall, MAE, BLEU, v.v.) Tại sao?"

**Q5**: "Implementation details: hardware (CPU/GPU), framework/library, key hyperparameters (learning rate, batch size, epochs, v.v.)?"

---

## Step 3: Write Draft

Structure:

**4.1 Dataset**
"We [collect/use/construct] our dataset from [source]. [Description of data]. The dataset contains [N] instances: [X positive, Y negative / breakdown]. We apply an [80/10/10] train/validation/test split, resulting in [N_train] training, [N_val] validation, and [N_test] test samples."

**4.2 Baselines**
"We compare [system] against [N] baselines:
(1) **[Baseline 1]**: [brief description], representing [category of approach];
(2) **[Baseline 2]**: [brief description];
..."

**4.3 Evaluation Metrics**
"We evaluate all methods using [metrics]. We prioritize [primary metric] as the main evaluation criterion because [reason]."
If classification: define each metric briefly (TP, FP formulas or prose).

**4.4 Implementation Details**
"All experiments are conducted on [hardware]. [System] is implemented using [framework, version]. Key hyperparameters: [list]. Training takes approximately [time]."

---

## Step 4: Save and Recommend

Ask: "Mình lưu vào `paper/sections/04-experiments.md` nhé?"

Save and update context.yaml: `experiments: draft`.

"Draft đã lưu! Tiếp theo: `/paper:teach results` hoặc `/paper:review experiment`."
