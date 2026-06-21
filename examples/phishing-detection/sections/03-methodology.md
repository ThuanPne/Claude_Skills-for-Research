# 3. Methodology

## 3.1 System Overview

Figure 1 illustrates the overall architecture of PhishGuard. Given a URL string as input, the system performs three sequential processing stages: (1) **Feature Extraction**, where 48 URL-based features are computed from the raw URL string; (2) **Classification**, where a trained Random Forest model assigns a phishing probability score; and (3) **Decision**, where URLs exceeding a threshold of 0.5 are flagged as phishing. The entire pipeline operates without external network queries, enabling classification latencies under 50 milliseconds.

```
[URL String] → [Feature Extraction (48 features)] → [Random Forest] → [Phishing / Legitimate]
                        │
              ┌─────────┴─────────┐
              │                   │
         URL Features       Domain Features
         (18 features)      (12 features)
              │                   │
         HTML Features     JS Features
         (10 features)     (8 features)
```

## 3.2 Feature Extraction

We extract 48 features from each URL, grouped into four categories:

**URL-based features (18 features):** These features are computed directly from the URL string and require no network access. They include URL length, number of dots, number of hyphens, presence of an IP address instead of a domain name, presence of the "@" symbol (used to mislead users), use of URL shortening services (e.g., bit.ly), number of subdomains, depth of the URL path, and presence of suspicious keywords (e.g., "login", "verify", "secure").

**Domain-based features (12 features):** These features characterize the registered domain and are obtained via WHOIS lookup and DNS resolution. They include domain age (newly registered domains are suspicious), time until domain expiration, Alexa traffic rank (legitimate sites tend to rank highly), and whether the domain uses a free hosting provider.

**HTML-based features (10 features):** These features are extracted by fetching and parsing the page HTML. They include the ratio of external links to total links, presence of login forms, use of meta refresh tags (a common phishing technique), and presence of favicon from a different domain.

**JavaScript-based features (8 features):** These features detect suspicious JavaScript behaviors, including use of the `eval()` function, `setTimeout` redirects, pop-up dialog creation, and right-click disable events.

## 3.3 Classification Model

We employ a Random Forest classifier [11] — an ensemble of decision trees trained on bootstrap samples of the training data. Random Forest is chosen over alternatives such as SVM and logistic regression for three reasons: (1) it handles non-linear feature interactions without kernel selection; (2) it provides native feature importance scores, enabling post-hoc interpretability; and (3) it is robust to noisy features, which is important given that some HTML and JS features may be unavailable for certain URLs.

The classifier is configured with the following hyperparameters, selected via 5-fold cross-validation on the training set:
- Number of trees: n = 100
- Maximum tree depth: 10
- Minimum samples per leaf: 5
- Feature sampling ratio per split: √48 ≈ 7 features

The classification threshold is set at 0.5 (equal probability). URLs with predicted phishing probability ≥ 0.5 are classified as phishing.
