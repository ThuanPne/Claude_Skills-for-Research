# 4. Experiments

## 4.1 Dataset

We construct a balanced dataset of 30,000 URLs from two publicly available sources:

- **Phishing URLs (15,000):** Collected from PhishTank [4], a community-curated database of verified phishing URLs. We sample URLs reported between January and June 2023, excluding duplicates and URLs that were no longer accessible at collection time.
- **Legitimate URLs (15,000):** Randomly sampled from the Alexa Top 1 Million list [12], a widely used reference for high-traffic legitimate websites. We exclude URLs that returned HTTP errors during feature extraction.

The dataset is split into training (80%), validation (10%), and test (10%) sets, resulting in 24,000, 3,000, and 3,000 samples respectively. The 50/50 class balance is maintained across all splits. Feature extraction is performed at collection time; HTML and JS features that could not be retrieved due to network errors are set to 0.

## 4.2 Baselines

We compare PhishGuard against three baselines:

1. **PhishTank Blacklist:** Queries the PhishTank API for each URL. Returns "phishing" if the URL appears in the database, "legitimate" otherwise. Represents traditional blacklist-based detection.

2. **SVM-URL [7]:** A Support Vector Machine with RBF kernel trained on the same 48 features as PhishGuard. Represents a competitive ML baseline using the same feature set, isolating the contribution of the classifier choice.

3. **PhishGuard-NoWeight:** Our Random Forest model trained without feature importance weighting — all 48 features are treated equally. This ablation baseline isolates the contribution of our feature selection mechanism.

## 4.3 Evaluation Metrics

We evaluate all methods using four standard binary classification metrics:

- **Accuracy:** Overall fraction of correctly classified URLs.
- **Precision:** Fraction of URLs classified as phishing that are truly phishing. High precision minimizes false alarms (blocking legitimate sites).
- **Recall:** Fraction of actual phishing URLs that are correctly detected. High recall minimizes missed attacks.
- **F1-score:** Harmonic mean of Precision and Recall. This is our **primary metric**, as it balances the cost of both error types.

## 4.4 Implementation Details

All experiments are conducted on a machine with Intel Core i7-12700H CPU (16 cores) and 16 GB RAM. No GPU is required. PhishGuard is implemented in Python 3.10 using scikit-learn 1.2.0 [13] for the Random Forest classifier and BeautifulSoup 4.12 for HTML parsing. Feature extraction is parallelized across 8 CPU cores using Python's `multiprocessing` module. Training the final Random Forest model takes approximately 3 minutes. Inference on a single URL takes an average of 42 milliseconds, well within real-time requirements.
