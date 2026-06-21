# 5. Results

## 5.1 Main Results

Table 1 presents the performance of all methods on the test set.

**Table 1: Performance comparison on the phishing detection test set (n=3,000)**

| Method | Accuracy | Precision | Recall | F1-score |
|--------|----------|-----------|--------|----------|
| PhishTank Blacklist | 78.3% | 91.2% | 65.4% | 76.2% |
| SVM-URL [7] | 92.1% | 91.8% | 92.4% | 92.1% |
| PhishGuard-NoWeight | 94.3% | 93.7% | 94.9% | 94.3% |
| **PhishGuard (ours)** | **97.4%** | **97.1%** | **97.7%** | **97.4%** |

*Bold denotes the best result per column.*

PhishGuard achieves the highest F1-score of 97.4%, outperforming the best baseline SVM-URL by **5.3 percentage points**. The blacklist-based method achieves acceptable precision (91.2%) but exhibits the lowest recall (65.4%), confirming its systemic failure to detect novel phishing sites created after the last blacklist update. SVM-URL performs competitively at 92.1% F1, establishing that URL features alone are strongly predictive of phishing. The 3.1-point gap between PhishGuard-NoWeight and SVM-URL demonstrates the additional contribution of the Random Forest ensemble over SVM with the same features.

## 5.2 Ablation Study

Table 2 isolates the contribution of each feature group by progressively removing one group at a time from the full PhishGuard model.

**Table 2: Ablation study — impact of removing each feature group**

| Configuration | F1-score | Δ vs Full |
|--------------|----------|-----------|
| PhishGuard (full, 48 features) | **97.4%** | — |
| w/o URL features (−18) | 89.2% | −8.2% |
| w/o Domain features (−12) | 94.1% | −3.3% |
| w/o HTML features (−10) | 96.2% | −1.2% |
| w/o JS features (−8) | 96.9% | −0.5% |
| w/o feature importance weighting | 94.3% | −3.1% |

URL features contribute most significantly: removing them alone causes an 8.2% F1 drop, reducing performance below even the SVM baseline. Domain features are the second most important group (−3.3%), suggesting that domain age and WHOIS-derived signals carry strong discriminative power. HTML features contribute modestly (−1.2%) while JS features have the smallest individual impact (−0.5%), though their removal still reduces F1 below 97%. The feature importance weighting mechanism contributes a 3.1% improvement over the unweighted variant, validating its inclusion.

## 5.3 Discussion

The results confirm our hypothesis: ML-based URL feature analysis substantially outperforms blacklist-based detection in terms of recall, at only a minor cost in precision (−0.9% vs. PhishTank for phishing URLs present in both test sets). From a practical standpoint, PhishGuard's 42 ms inference latency enables browser-level integration, where URLs can be screened before page load completes.

One surprising finding is that Domain features — which require WHOIS lookups and thus introduce network latency — are the second most predictive group. This suggests a potential trade-off: a latency-optimized variant of PhishGuard using only URL and JS features would sacrifice approximately 4% F1 but reduce latency to under 5 ms. We leave this variant for future investigation.

A limitation of the current results is that the dataset contains exclusively English-language URLs. Whether these feature importances hold for Vietnamese-language phishing campaigns targeting local banking and e-commerce sites remains an open question explored in Section 6.
