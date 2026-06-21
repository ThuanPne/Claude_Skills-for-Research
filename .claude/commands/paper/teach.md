---
name: "Paper: Teach"
description: "Learn how to write a specific paper section before drafting it. Usage: /paper:teach <section>"
category: Research
tags: [research, paper, teach, learn]
---

Dispatch to the correct teach skill based on the section argument:

- `intro` or `introduction` → use `paper-teach-intro` skill
- `related` or `related-work` → use `paper-teach-related` skill
- `method` or `methodology` → use `paper-teach-method` skill
- `experiment` or `experiments` → use `paper-teach-experiment` skill
- `results` → use `paper-teach-results` skill
- `conclusion` → use `paper-teach-conclusion` skill
- `abstract` → use `paper-teach-abstract` skill

If no argument provided, ask: "Which section would you like to learn how to write? (intro / related / method / experiment / results / conclusion / abstract)"

ARGUMENTS: {{args}}
