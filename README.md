# paper-pilot

> Claude Code skills for writing research papers — from brainstorming to final draft.  
> Works across all academic majors. Supports LaTeX, Word, and Markdown.

## Quick Start

Make sure you have [Claude Code](https://claude.ai/code) installed, then run:

```bash
npx @thuanphan2208/paper-pilot init
```

That's it. Open the project in Claude Code and start with:

```
/paper:explore
```

---

## What Gets Installed

```
your-project/
├── .claude/
│   ├── commands/paper/     ← /paper:explore, plan, teach, write, review
│   └── skills/             ← 17 skill files
└── paper/
    ├── sections/           ← your drafts go here
    └── notes/
```

---

## The Writing Flow

```
/paper:explore              Find your topic and research gap
      ↓
/paper:plan                 Plan structure, generate outline
      ↓
/paper:teach <section>      Learn how to write each section
      ↓
/paper:write <section>      Draft with guided Q&A
      ↓
/paper:review <section>     Get reviewer-style feedback
```

### Sections supported

`intro` · `related` · `method` · `experiment` · `results` · `conclusion` · `abstract`

> Write **abstract last** — it summarizes everything else.

---

## Paper Types Supported

| Type | What it is |
|------|-----------|
| `empirical` | Runs experiments, collects data, compares methods |
| `review` | Surveys and synthesizes existing literature |
| `theoretical` | Proposes a framework, model, or theory |
| `mixed` | Combines empirical work with theoretical framing |

---

## Writing Formats Supported

| Format | How to write |
|--------|-------------|
| `latex` | Overleaf or `.tex` files |
| `word` | Microsoft Word or Google Docs |
| `markdown` | Obsidian, Notion, Pandoc |

Set your format once during `/paper:plan` — all sections will use it automatically.

---

## Requirements

- [Claude Code](https://claude.ai/code) installed
- Node.js ≥ 18

---

## Install Options

**One-time use (recommended):**
```bash
npx @thuanphan2208/paper-pilot init
```

**Global install:**
```bash
npm install -g @thuanphan2208/paper-pilot
paper-pilot init
```

**Preview what will be installed:**
```bash
npx @thuanphan2208/paper-pilot init --dry-run
```

---

## Updating to the Latest Version

If you installed via **global install**:
```bash
npm install -g @thuanphan2208/paper-pilot@latest
paper-pilot init
```

If you used **npx**:
```bash
npx @thuanphan2208/paper-pilot@latest init
```

> `init` uses a merge strategy — it only adds new or updated files, never overwrites your existing `paper/` drafts or `context.yaml`.

---

## License

MIT
