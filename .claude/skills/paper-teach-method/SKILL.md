---
name: paper-teach-method
description: Teach how to write the Methodology section of a CS research paper. Use when user wants to learn Methodology structure before writing.
license: MIT
metadata:
  author: claude-paper-skills
  version: "1.0"
---

You are teaching how to write the **Methodology** section. The key principle here is **reproducibility**: a reader must be able to re-implement your system from this section alone.

**Teaching mode only** — recommend `/paper:write method` at the end.

---

## The Reproducibility Principle

```
TEST: "Nếu một researcher khác đọc section này,
       họ có thể tự implement lại hệ thống của bạn không?"

  YES → Section đạt yêu cầu ✓
  NO  → Cần thêm detail ✗
```

Đây là tiêu chí quan trọng nhất. Methodology không phải để "giải thích ý tưởng" — mà để người khác có thể tái tạo lại kết quả của bạn.

---

## Structure to Teach

```
METHODOLOGY = 3 LAYERS
════════════════════════════════════════════════════════

  Layer 1: SYSTEM OVERVIEW          (~1 đoạn + diagram)
  ┌─────────────────────────────────────────────┐
  │ Big picture: system/pipeline tổng quan      │
  │ Input → Processing → Output                 │
  │ PHẢI có diagram                             │
  └─────────────────────────────────────────────┘
           │
           ▼
  Layer 2: COMPONENT DESCRIPTION    (1 subsection mỗi component)
  ┌─────────────────────────────────────────────┐
  │ Mô tả chi tiết từng component/module        │
  │ Có thể có pseudocode hoặc formula           │
  └─────────────────────────────────────────────┘
           │
           ▼
  Layer 3: ALGORITHM / FORMULA      (nếu có)
  ┌─────────────────────────────────────────────┐
  │ Pseudocode, math formula, hoặc workflow     │
  │ Numbered steps, không để mơ hồ             │
  └─────────────────────────────────────────────┘
```

---

## Teach Each Layer with Phishing Example

### Layer 1: System Overview

**Nguyên tắc**: Vẽ/mô tả pipeline tổng quan TRƯỚC khi đi vào detail.

**Ví dụ từ phishing paper:**
```
INPUT           PROCESSING                OUTPUT
(URL string) → [Feature Extraction]  → (48 features)
              → [Random Forest]       → (phishing/legit)
              → [Confidence Score]    → (0.0 - 1.0)
```

**Mô tả bằng text:**
> "Figure 1 illustrates the architecture of PhishGuard. Given a URL as input, the system performs three sequential steps: (1) feature extraction, where 48 URL-based features are computed; (2) classification, where a trained Random Forest model predicts the probability of phishing; and (3) decision, where URLs with confidence > 0.5 are flagged as phishing."

**Lỗi phổ biến**: Nhảy thẳng vào detail mà không có overview → reviewer bị confused.

---

### Layer 2: Component Description

**Nguyên tắc**: Mỗi component có 1 subsection với tên rõ ràng.

**Ví dụ từ phishing paper — Feature Extraction component:**

*3.1 Feature Extraction*

> "We extract 48 features from each URL, grouped into four categories:
> 
> **URL-based features (18 features):** URL length, number of dots, presence of IP address, use of URL shortening services...
> 
> **Domain-based features (12 features):** Domain age (queried via WHOIS), Alexa rank, number of subdomains...
> 
> **HTML-based features (10 features):** Number of external links, presence of login forms...
> 
> **JavaScript-based features (8 features):** Number of pop-up events, use of eval()..."

**Checkpoint**: Hệ thống của bạn có bao nhiêu components/modules chính?

---

### Layer 3: Algorithm

**Nguyên tắc**: Nếu có algorithm đặc biệt, viết pseudocode. Nếu dùng existing algorithm (Random Forest, LSTM...), cite paper gốc và mô tả configuration.

**Ví dụ từ phishing paper — dùng existing algorithm:**
> "We employ a Random Forest classifier [ref] with the following configuration: number of trees n=100, maximum depth=10, minimum samples per leaf=5. These hyperparameters were selected via 5-fold cross-validation on the training set."

**Khi nào cần pseudocode**: Khi bạn có algorithm tự thiết kế hoặc modification quan trọng với algorithm có sẵn.

---

## Common Mistakes

| Mistake | Fix |
|---------|-----|
| Không có overview diagram | Vẽ box-and-arrow diagram cho pipeline |
| Mô tả quá vague ("we use ML") | Nêu cụ thể: model, parameters, tại sao chọn model đó |
| Thiếu số liệu cụ thể | Thêm: số features, số layers, hyperparameters |
| Không mention "tại sao chọn method này" | Thêm 1 câu justification cho mỗi key decision |

---

## Closing

> "Bạn đã hiểu cấu trúc Methodology rồi: overview → components → algorithm details, với reproducibility là tiêu chí tối thượng. Dùng `/paper:write method` để viết draft nhé!"
