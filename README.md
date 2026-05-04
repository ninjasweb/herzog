# HERZOG

**AI Film Director System · Multi-Agent Studio**

HERZOG is a Markdown-driven, multi-agent AI film director. It orchestrates a team of specialized agents to take a project from raw idea to finished film:

```text
idea → script → storyboard → images → video → final cut
```

There is no application runtime. The repo is a structured set of agent definitions, skills, and project artifacts that Claude Code (and compatible tools) load to drive the pipeline.

---

## 🎬 Core Philosophy

- **Systems, not prompts** — every stage is a contract, not a one-shot instruction.
- **Delegate to specialists** — each agent owns a single craft (idea, script, character, image, video).
- **Consistency is non-negotiable** — visual + narrative continuity is enforced across the whole pipeline.
- **Iterate until cinematic** — drafts are artifacts, not endpoints.

---

## 🧩 Architecture

```text
herzog/
├── .agents/
│   ├── agents/      # specialist agents (one folder each, AGENT.md entrypoint)
│   └── skills/      # reusable skills (SKILL.md entrypoint, Anthropic skill format)
├── projects/        # production work — one folder per project
└── scripts/         # validation + listing utilities
```

### Agents

| Agent | Role |
| --- | --- |
| `herzog-director` | Central orchestrator. Routes any creative request through the pipeline. |
| `idea-strategist` | Turns raw input into a structured creative brief. |
| `scriptwriter` | Brief → script, scenes, beats, dialogue. |
| `character-designer` | Locks character identity, wardrobe, expression, continuity. |
| `image-director` | Visual system, style frames, image prompts. |
| `video-director` | Shot list, scene folders, motion + camera direction, video prompts. |
| `qa-continuity` | Continuity supervisor. Audits the whole pipeline, scores 0–100, returns a fix queue with owners. Final gate before delivery. |

### Skills

| Skill | Purpose |
| --- | --- |
| `character-design-sheet` | Generates consistent character model sheets from references or scratch. |
| `create-agentsmd` | Bootstraps a new `AGENTS.md` for a repository. |
| `skill-creator` | Authors, validates, and benchmarks new skills. |

---

## 📁 Project Layout

Every production lives under `projects/<slug>/`:

```text
projects/<project-slug>/
├── README.md          # title, status, source idea, agents used, output index
├── references/        # source notes, reference images, brand guidelines
├── outputs/           # numbered Markdown artifacts, one per agent run
│   ├── 00-herzog-director.md
│   ├── 01-idea-strategist.md
│   ├── 02-scriptwriter.md
│   ├── 03-character-designer.md
│   ├── 04-image-director.md
│   ├── 05-video-director.md
│   └── 06-qa-continuity.md
└── scenes/            # video projects only
    └── scene-001/
        ├── scene.md
        ├── reference.png      # visual anchor (when present)
        ├── image-prompt.md
        └── video-prompt.md
```

When a `reference.png` is present in a scene folder, the video-director treats it as the strict visual anchor — no redesigning the scene around invented visuals.

---

## ⚙️ How it Works

1. **Input** — feed HERZOG an idea, brief, image, or rough concept.
2. **Interpret** — `herzog-director` reads the request and selects the pipeline stages.
3. **Delegate** — specialized agents run in order, each producing a durable Markdown artifact under `projects/<slug>/outputs/`.
4. **Enforce** — outputs are checked for visual + narrative consistency before advancing.
5. **Deliver** — the project README links every artifact in the Output Index.

---

## 🛠️ Commands

Node 20.20.0 (`.nvmrc`) is only used for validation scripts.

```sh
npm run validate          # alias for validate:skills
npm run validate:skills   # validates every skill in .agents/skills/
npm run list:agents       # enumerates files under .agents/agents/
npm run list:projects     # enumerates files under projects/
```

Validate a single skill directly (faster than the full sweep):

```sh
python3 .agents/skills/skill-creator/scripts/quick_validate.py .agents/skills/<skill-name>
```

---

## 📐 Conventions

- All agent outputs are persisted as Markdown files under `projects/<slug>/outputs/` — never just left in chat.
- `kebab-case` for skill names, agent names, project slugs, and prompt template filenames.
- Conventional Commits: `feat:`, `fix:`, `docs:`, etc.
- Prefer ASCII unless a file is already non-ASCII for a clear reason.

See [`CLAUDE.md`](./CLAUDE.md) for the full set of rules used by Claude Code when working in this repo.

---

## 🚀 Vision

A repeatable, agent-driven production system for AI-generated films and scalable cinematic content — where consistency, style, and narrative discipline are built into the pipeline, not bolted on after.
