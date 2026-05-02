# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

HERZOG is a Markdown-driven multi-agent AI film director system. There is no application runtime — the repo is a structured set of agent definitions, skills, and project artifacts that other tools (Claude Code, Claude Desktop, etc.) load to orchestrate idea → script → storyboard → image → video → final-cut pipelines. Node 20.20.0 (`.nvmrc`) is only used to run validation scripts.

## Common Commands

```sh
npm run validate          # alias for validate:skills
npm run validate:skills   # runs scripts/validate-skills.mjs, which shells out to .agents/skills/skill-creator/scripts/quick_validate.py for every skill in .agents/skills/
npm run list:agents       # enumerates files under .agents/agents/
npm run list:projects     # enumerates files under projects/
```

Validate a single skill directly (faster than the full sweep):

```sh
python3 .agents/skills/skill-creator/scripts/quick_validate.py .agents/skills/<skill-name>
```

## Architecture

Three top-level concerns, each with strict file conventions:

### `.agents/agents/<agent-name>/`
Each agent is a directory with an `AGENT.md` entrypoint that begins with YAML frontmatter (`name`, `description`). The frontmatter `description` is what the orchestrator reads to decide when to route to that agent. `AGENT.md` is the only Markdown file at the agent root — every other supporting `.md` lives under `references/` (e.g. `references/routing-rules.md`, `references/orchestration.md`, `references/motion-system.md`, `references/formats/*.md`). JSON schemas remain in their own `schemas/` folder. All of these are loaded as context for that agent only — they are not globally shared.

`herzog-director` is the orchestrator. Its `AGENT.md` + `references/orchestration.md` + `references/routing-rules.md` define the canonical pipeline stages (idea → script → visual → generation → cinematic control → audio → editing → QA) and which agents to invoke for each request type. Treat that as the source of truth when wiring new agents into the flow — don't invent a parallel routing scheme.

### `.agents/skills/<skill-name>/`
Skills follow Anthropic's skill format: a `SKILL.md` entrypoint plus optional `prompts/`, `scripts/`, `references/`, `assets/`, `agents/`. Skills must be self-contained — never scatter skill files at the repo root. Skill directories use kebab-case.

`skills-lock.json` records the source repo, path, and content hash for each installed skill (currently `create-agentsmd` and `skill-creator`). Only edit it when the skill source or lock metadata genuinely changes — don't bump hashes to silence a diff.

### `projects/<project-slug>/`
Where production work lives. Required layout:

```
projects/<project-slug>/
├── README.md          # title, status, source idea, selected agents, output index, next step
├── references/        # source notes, reference image descriptions, brand notes
├── outputs/           # numbered Markdown artifacts, one per agent run
└── scenes/            # only for video projects — see scene-folder convention below
    └── scene-001/
        ├── scene.md
        ├── reference.png      # optional but acts as the visual anchor when present
        ├── image-prompt.md
        └── video-prompt.md
```

Output files in `outputs/` are numbered in pipeline order and named after the agent that produced them: `00-herzog-director.md`, `01-idea-strategist.md`, `02-scriptwriter.md`, `03-character-designer.md`, `04-image-director.md`, etc. Project `README.md` must list every output as a markdown link (the "Output Index"). When you add a new artifact, update the index.

Scene folders are governed by `.agents/agents/video-director/references/scene-folder-standard.md` and the `scenes/scene-NNN/` schema in `.agents/agents/video-director/schemas/`. If a scene contains a reference image, the video-director treats it as the strict visual anchor — do not redesign or invent a new scene around it.

## Conventions

- Persist agent outputs as durable Markdown files under `projects/<slug>/outputs/`, not just in chat. Final responses should link to the saved artifacts.
- Use kebab-case for skill names, agent names, project slugs, and prompt template filenames.
- Prefer ASCII unless a file is already non-ASCII for a clear reason.
- Never commit `.DS_Store` (already in `.gitignore` but they recur on macOS).
- Conventional Commits: `feat:`, `fix:`, `docs:`, etc.
