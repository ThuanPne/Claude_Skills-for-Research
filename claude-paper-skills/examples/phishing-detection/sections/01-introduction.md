# 1. Introduction

Phishing attacks have emerged as one of the most prevalent and damaging forms of cybercrime, with over 1.35 million unique phishing sites detected globally in 2022 alone [1]. These attacks deceive users into revealing sensitive information — such as passwords and credit card numbers — by impersonating legitimate websites. The financial consequences are severe: the FBI Internet Crime Report 2022 estimates that phishing-related losses exceeded $52 million in the United States alone [2]. Despite widespread security education campaigns, phishing attacks continue to succeed at alarming rates because they exploit human trust rather than technical vulnerabilities.

Traditional anti-phishing defenses rely primarily on blacklists maintained by organizations such as PhishTank and Google Safe Browsing. However, these approaches suffer from a fundamental limitation: newly created phishing sites can remain undetected for hours or days before being added to blacklists. Given that the average lifespan of a phishing site is only 4 to 8 hours [3], this detection delay renders blacklist-based approaches ineffective against fresh attacks. A faster, content-agnostic detection mechanism is needed — one that can identify phishing sites at the moment of access without relying on pre-compiled databases.

The main contributions of this paper are as follows:
- We propose **PhishGuard**, a real-time phishing detection system that extracts 48 URL-based features and employs a Random Forest classifier to identify phishing sites without querying external blacklists.
- We conduct extensive experiments on a balanced dataset of 30,000 URLs sourced from PhishTank (phishing) and the Alexa Top 1 Million list (legitimate), achieving **97.4% F1-score** and outperforming the best baseline by 5.3 percentage points.
- We identify and rank the top URL features most predictive of phishing behavior, providing interpretable insights for future feature engineering research.

The rest of this paper is organized as follows. Section 2 reviews related work on phishing detection approaches. Section 3 describes the architecture and components of PhishGuard. Section 4 presents our experimental setup, including dataset, baselines, and evaluation metrics. Section 5 reports and analyzes experimental results. Section 6 concludes the paper and outlines future work.
