# Abstract

Phishing attacks have become one of the most widespread cyber threats, causing billions of dollars in annual losses and compromising millions of user accounts worldwide. Traditional blacklist-based detection systems fail to identify newly created phishing sites within their critical 4–8 hour active window, leaving users unprotected against fresh attacks. In this paper, we propose **PhishGuard**, a real-time phishing detection system that extracts 48 URL-based features — covering lexical, domain, HTML, and JavaScript characteristics — and employs a Random Forest classifier to identify phishing sites without relying on external blacklist queries. Extensive experiments on a balanced dataset of 30,000 URLs from PhishTank and the Alexa Top 1 Million list demonstrate that PhishGuard achieves **97.4% F1-score**, outperforming the best baseline method by 5.3 percentage points while maintaining a classification latency of under 50 milliseconds. An ablation study further reveals that URL lexical features are the strongest predictors of phishing behavior, contributing an 8.2% F1 improvement over domain and content features alone.

---
*Word count: 148 words*
