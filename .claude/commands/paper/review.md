---
name: "Paper: Review"
description: "Review any section of your paper and get structured feedback. Usage: /paper:review <section>"
category: Research
tags: [research, paper, review, feedback]
---

Use the `paper-review` skill.

The skill will read the specified section from `paper/sections/`, provide structured feedback with specific quotes and fixes, then offer to apply improvements directly.

If no section argument provided, check `paper/context.yaml` sections_status and suggest reviewing the first `draft` section.

ARGUMENTS: {{args}}
