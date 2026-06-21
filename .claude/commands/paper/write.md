---
name: "Paper: Write"
description: "Write a draft of a specific paper section via guided Q&A. Usage: /paper:write <section>"
category: Research
tags: [research, paper, write, draft]
---

Dispatch to the correct write skill based on the section argument:

- `intro` or `introduction` → use `paper-write-intro` skill
- `related` or `related-work` → use `paper-write-related` skill
- `method` or `methodology` → use `paper-write-method` skill
- `experiment` or `experiments` → use `paper-write-experiment` skill
- `results` → use `paper-write-results` skill
- `conclusion` → use `paper-write-conclusion` skill
- `abstract` → use `paper-write-abstract` skill

If no argument provided, check `paper/context.yaml` for `sections_status` and suggest the first `not-started` section.

If user hasn't used the corresponding teach skill yet, gently remind: "Tip: Dùng `/paper:teach <section>` trước để hiểu cấu trúc section này sẽ giúp bạn trả lời câu hỏi dễ hơn."

ARGUMENTS: {{args}}
