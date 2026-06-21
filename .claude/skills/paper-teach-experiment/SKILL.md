---
name: paper-teach-experiment
description: Teach how to design and write the Experiments section of a CS research paper. Use when user wants to learn Experiments structure before writing.
license: MIT
metadata:
  author: claude-paper-skills
  version: "1.0"
---

You are teaching how to write the **Experiments** section. This section answers: "How did you test your method?" A well-designed experiment lets readers trust your results.

**Teaching mode only** — recommend `/paper:write experiment` at the end.

---

## The 4 Essentials of Experiments

```
EXPERIMENTS = 4 PILLARS
════════════════════════════════════════════════════════

  Pillar 1: DATASET
  ┌─────────────────────────────────────────────┐
  │ What data did you use?                      │
  │ Where does it come from?                    │
  │ How big? How split?                         │
  └─────────────────────────────────────────────┘

  Pillar 2: BASELINES  
  ┌─────────────────────────────────────────────┐
  │ What are you comparing against?             │
  │ Why did you choose these baselines?         │
  └─────────────────────────────────────────────┘

  Pillar 3: METRICS
  ┌─────────────────────────────────────────────┐
  │ How do you measure success?                 │
  │ Why these metrics and not others?           │
  └─────────────────────────────────────────────┘

  Pillar 4: IMPLEMENTATION DETAILS
  ┌─────────────────────────────────────────────┐
  │ Hardware, software, hyperparameters         │
  │ Reproducibility details                     │
  └─────────────────────────────────────────────┘
```

---

## Teach Each Pillar with Phishing Example

### Pillar 1: Dataset

**What to include:**
- Tên dataset và nguồn (citation nếu có)
- Kích thước: tổng số samples, positive/negative split
- Train/validation/test split ratio
- Bất kỳ preprocessing nào đã làm

**Ví dụ từ phishing paper:**
> "We construct our dataset using two publicly available sources: (1) PhishTank [ref], from which we collect 15,000 verified phishing URLs, and (2) the Alexa Top 1 Million list [ref], from which we randomly sample 15,000 legitimate URLs, yielding a balanced dataset of 30,000 instances. We apply an 80/10/10 train/validation/test split, resulting in 24,000 training, 3,000 validation, and 3,000 test samples."

**Lỗi phổ biến**: 
- ❌ "Chúng tôi dùng dataset từ internet" (không đủ thông tin)
- ✅ Tên dataset + link/citation + số lượng cụ thể + split ratio

---

### Pillar 2: Baselines

**Nguyên tắc**: Baseline là những method bạn SO SÁNH với. Phải chọn baselines hợp lý — không quá yếu (để "thắng dễ") và không quá mạnh (không liên quan).

**3 loại baseline thường dùng:**
```
Type 1: Rule-based baseline    (traditional approach)
Type 2: Published ML baseline  (strong competitor)
Type 3: Ablation baseline      (your method minus one component)
```

**Ví dụ từ phishing paper:**
> "We compare PhishGuard against three baselines:
> (1) **PhishTank Blacklist**: queries the PhishTank API, representing traditional blacklist-based detection;
> (2) **SVM-URL** [ref]: a support vector machine using the same URL features, representing competitive ML approaches;
> (3) **PhishGuard-NoWeight**: our method without feature weighting, to isolate the contribution of our weighting scheme."

**Checkpoint**: Bạn sẽ so sánh method của mình với gì? Tại sao chọn những baselines đó?

---

### Pillar 3: Metrics

**Nguyên tắc**: Chọn metrics phù hợp với bài toán. Với classification, thường dùng:

```
Accuracy    = (TP+TN) / Total  ← tổng quát
Precision   = TP / (TP+FP)     ← khi FP tốn kém (false alarm)
Recall      = TP / (TP+FN)     ← khi FN nguy hiểm (miss attack)
F1-score    = 2×P×R / (P+R)    ← balance của P và R ← DÙNG NHIỀU NHẤT
```

**Ví dụ từ phishing paper:**
> "We evaluate all methods using Accuracy, Precision, Recall, and F1-score. We prioritize F1-score as the primary metric since our dataset is balanced and both false positives (blocking legitimate sites) and false negatives (missing phishing sites) carry significant costs."

**Lỗi phổ biến**: Chỉ dùng Accuracy khi dataset imbalanced → misleading results.

---

### Pillar 4: Implementation Details

**Nguyên tắc**: Đủ detail để ai đó reproduce được.

**Template:**
> "All experiments are conducted on [hardware]. Our model is implemented using [framework, version]. [Key hyperparameters: learning rate, batch size, epochs...]. Training takes approximately [X] hours/minutes. Source code is available at [URL if applicable]."

**Ví dụ từ phishing paper:**
> "All experiments are conducted on a machine with Intel Core i7-12700H CPU and 16GB RAM. The Random Forest classifier is implemented using scikit-learn 1.2.0 [ref] with Python 3.10. Feature extraction is parallelized across 8 CPU cores. Training the final model takes approximately 3 minutes."

---

## Closing

> "Bạn đã hiểu 4 pillars của Experiments rồi: Dataset → Baselines → Metrics → Implementation Details. Dùng `/paper:write experiment` để viết draft nhé!"
