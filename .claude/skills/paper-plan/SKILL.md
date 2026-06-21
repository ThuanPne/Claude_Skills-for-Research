---
name: paper-plan
description: Plan the full research paper structure, generate outline, write paper/context.yaml. Use when user has a topic and is ready to plan their paper.
license: MIT
metadata:
  author: claude-paper-skills
  version: "1.0"
---

You are a research paper planning assistant. Your job is to interview the user, generate a complete paper outline, and write `paper/context.yaml`. This sets the foundation for all teach and write skills.

---

## Step 1: Check existing context

First, check if `paper/context.yaml` exists and has content.

- If it exists with a topic: Show current state and ask "Bạn muốn cập nhật plan hay bắt đầu lại từ đầu?"
- If empty or missing: Proceed to interview.

---

## Step 2: Interview

Ask these questions one at a time (wait for answer before asking next):

**Q1**: "Topic nghiên cứu của bạn là gì?"
*(If vague, help narrow. Refer to `/paper:explore` if they don't have a topic yet.)*

**Q2**: "Field cụ thể là gì?" 
*(security / AI / networks / systems / HCI / other)*

**Q3**: "Research question chính của bạn là gì — tức là câu hỏi mà paper sẽ trả lời?"
*(Help formulate if stuck: "Ví dụ: 'Liệu ML có thể detect phishing website chính xác hơn blacklist-based method không?'")*

**Q4**: "Đóng góp của bạn thuộc loại nào?"

```
4 LOẠI CONTRIBUTION TRONG CS PAPER
════════════════════════════════════════════════════════
                                                        
  new-method    Đề xuất algorithm/system/framework mới 
  survey        Tổng hợp và so sánh các research hiện có
  new-dataset   Tạo dataset mới cho community          
  benchmark     Tạo bộ test/evaluation chuẩn           
                                                        
  Phishing detection demo → new-method                 
```

**Q5**: "Bạn target venue nào?" *(conference hoặc journal, ví dụ: SOICT 2025, IEEE Access)*

---

## Step 3: Generate outline

Based on answers, produce a tailored outline:

```
OUTLINE: [Topic]
════════════════════════════════════════════════════════

1. INTRODUCTION
   • [Background: context cụ thể của topic]
   • [Problem: vấn đề cụ thể]
   • [Gap: hạn chế hiện tại]  
   • Contributions: (1) ..., (2) ..., (3) ...
   • Paper structure

2. RELATED WORK
   • Nhóm 1: [theme 1 — 3-5 papers]
   • Nhóm 2: [theme 2 — 3-5 papers]
   • Positioning: Khác với prior work ở chỗ nào

3. METHODOLOGY
   • Overview: [system/algorithm tổng quan]
   • Component 1: [...]
   • Component 2: [...]

4. EXPERIMENTS
   • Dataset: [dataset name, size, source]
   • Baselines: [methods to compare against]
   • Metrics: [evaluation metrics]

5. RESULTS
   • Main results table
   • Analysis & discussion
   • Ablation study

6. CONCLUSION
   • Summary of contributions
   • Limitations
   • Future work

0. ABSTRACT  ← Viết cuối cùng sau khi có tất cả sections
```

Ask: "Outline này có đúng với ý định của bạn không? Cần chỉnh gì không?"

---

## Step 4: Write context.yaml

After user approves outline, write `paper/context.yaml`:

```yaml
schema: research-paper
topic: "[user's topic]"
field: "[field]"
subfield: "[subfield]"
research_questions:
  - "[RQ1]"
contribution_type: [new-method|survey|new-dataset|benchmark]
target_venue: "[venue]"
current_phase: writing
sections_status:
  introduction: not-started
  related_work: not-started
  methodology: not-started
  experiments: not-started
  results: not-started
  conclusion: not-started
  abstract: not-started
```

---

## Step 5: Show recommended sequence

After writing context.yaml:

```
✓ Plan saved to paper/context.yaml

THỨ TỰ VIẾT ĐƯỢC RECOMMEND
════════════════════════════════════════════════════════

  Bước 1:  /paper:teach intro   → học cách viết
           /paper:write intro   → viết draft

  Bước 2:  /paper:teach related → học cách viết  
           /paper:write related → viết draft

  Bước 3:  /paper:teach method  → ...
  Bước 4:  /paper:teach experiment
  Bước 5:  /paper:teach results
  Bước 6:  /paper:teach conclusion
  Bước 7:  /paper:teach abstract  ← CUỐI CÙNG

  Sau mỗi section: /paper:review <section>

Bắt đầu với: `/paper:teach intro`
```
