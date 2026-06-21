---
name: paper-teach-results
description: Teach how to write the Results section of a CS research paper. Use when user wants to learn Results structure before writing.
license: MIT
metadata:
  author: claude-paper-skills
  version: "1.0"
---

You are teaching how to write the **Results** section. Most beginners just paste numbers — teach them to tell a story with data.

**Teaching mode only** — recommend `/paper:write results` at the end.

---

## Structure to Teach

```
RESULTS = 3 PARTS
════════════════════════════════════════════════════════

  Part 1: MAIN RESULTS TABLE        (comparison với baselines)
  ┌─────────────────────────────────────────────┐
  │ Bảng so sánh tất cả methods                │
  │ Bold số tốt nhất                            │
  │ 1-2 đoạn phân tích                         │
  └─────────────────────────────────────────────┘
           │
           ▼
  Part 2: ANALYSIS & DISCUSSION     (tại sao kết quả như vậy?)
  ┌─────────────────────────────────────────────┐
  │ Không chỉ đọc lại số                        │
  │ Phải giải thích: tại sao method mình tốt?   │
  │ Kết quả nào bất ngờ? Tại sao?              │
  └─────────────────────────────────────────────┘
           │
           ▼
  Part 3: ABLATION STUDY            (từng component đóng góp gì?)
  ┌─────────────────────────────────────────────┐
  │ Remove/disable từng component               │
  │ Đo xem performance drop bao nhiêu?          │
  │ Chứng minh mỗi phần đều cần thiết           │
  └─────────────────────────────────────────────┘
```

---

## Teach Each Part with Phishing Example

### Part 1: Main Results Table

**Nguyên tắc**: Table phải có: method names, metrics, highlight best result.

**Ví dụ từ phishing paper:**

```
Table 1: Comparison of phishing detection methods

Method              Accuracy   Precision  Recall   F1-score
─────────────────────────────────────────────────────────────
PhishTank Blacklist  78.3%      91.2%     65.4%    76.2%
SVM-URL [ref]        92.1%      91.8%     92.4%    92.1%
PhishGuard-NoWeight  94.3%      93.7%     94.9%    94.3%
PhishGuard (ours)  **97.4%**  **97.1%** **97.7%** **97.4%**
─────────────────────────────────────────────────────────────
Bold = best result
```

**Cách viết text cho table:**
> "Table 1 presents the performance comparison of all methods. PhishGuard achieves the highest F1-score of 97.4%, outperforming the best baseline SVM-URL by 5.3 percentage points. The blacklist-based method shows the lowest recall (65.4%), confirming its inability to detect novel phishing sites."

**Lỗi phổ biến**: 
- ❌ Chỉ nói "method của chúng tôi tốt nhất" mà không nêu cụ thể bao nhiêu %
- ✅ So sánh tường minh với số liệu: "outperforming X by Y%"

---

### Part 2: Analysis & Discussion

**Nguyên tắc**: "Why" quan trọng hơn "what". Đừng chỉ đọc lại số.

**3 loại analysis cần viết:**

**1. Tại sao method của mình tốt hơn:**
> "The superiority of PhishGuard over SVM-URL can be attributed to its feature weighting mechanism, which assigns higher importance to features that show strong discriminative power (e.g., URL length, presence of '@' symbol) and downweights noisy features."

**2. Tại sao baseline yếu:**
> "The blacklist approach's low recall (65.4%) confirms our hypothesis: phishing sites created within 24 hours of data collection are systematically missed by static blacklists."

**3. Kết quả bất ngờ nếu có:**
> "Interestingly, PhishGuard-NoWeight performs significantly better than SVM-URL despite using the same features, suggesting that Random Forest's ensemble nature provides robustness even without explicit feature weighting."

---

### Part 3: Ablation Study

**Ablation Study là gì?** Tắt/xóa từng component của method, đo xem performance thay đổi bao nhiêu. Mục tiêu: chứng minh mỗi component đều đóng góp.

**Ví dụ từ phishing paper:**

```
Table 2: Ablation study

Configuration               F1-score   Δ vs Full
──────────────────────────────────────────────────
PhishGuard (full)            97.4%      —
  w/o URL features           89.2%    -8.2%
  w/o Domain features        94.1%    -3.3%
  w/o HTML features          96.2%    -1.2%
  w/o feature weighting      94.3%    -3.1%
──────────────────────────────────────────────────
```

**Nhận xét:** "URL features contribute most significantly (8.2% drop when removed), while HTML features have the smallest impact (1.2% drop). This suggests future work could focus on improving URL-based feature engineering."

**Tại sao reviewer expect ablation study?** Vì nếu không có, reviewer không biết liệu từng component có thực sự cần thiết không.

---

## Closing

> "Bạn đã hiểu cấu trúc Results rồi: Main Table → Analysis → Ablation Study. Dùng `/paper:write results` để viết draft nhé!"
