# Repository Guidelines

## Project Structure & Module Organization

This repository defines HERZOG, a modular AI film director and multi-agent studio system. The root currently contains high-level project metadata:

- `README.md` describes the project vision and architecture.
- `skills-lock.json` records installed skill sources and hashes.
- `.agents/skills/` contains local agent skills.
- `.agents/skills/<skill-name>/SKILL.md` is the main instruction file for each skill.
- `.agents/skills/<skill-name>/prompts/` stores reusable prompt templates.
- `.agents/skills/<skill-name>/scripts/`, `references/`, `assets/`, and `agents/` hold optional bundled resources.
- `projects/<project-slug>/` stores production work created by HERZOG.
- `projects/<project-slug>/outputs/` stores numbered agent outputs as Markdown artifacts.
- `projects/<project-slug>/references/` stores source notes, reference image descriptions, and other inputs.

Keep each skill self-contained. Add new reusable material inside that skill directory instead of scattering files at the repository root.

## Build, Test, and Development Commands

There is no application build system configured yet. Use lightweight validation commands while editing:

```sh
find .agents -maxdepth 6 -type f | sort
```

Lists skill files and helps verify expected structure.

```sh
python .agents/skills/skill-creator/scripts/quick_validate.py .agents/skills/<skill-name>
```

Validates a skill when working with the bundled `skill-creator` tooling.

```sh
git status --short
```

Checks intended changes before committing.

## Coding Style & Naming Conventions

Use Markdown for contributor-facing instructions and prompt templates. Keep headings descriptive, examples concrete, and instructions actionable. Skill directories should use kebab-case, for example `character-design-sheet`. Required skill entrypoints are named `SKILL.md`. Prompt templates should also use kebab-case, for example `negative-prompt-template.md`.

Prefer ASCII text unless a file already uses non-ASCII content for a clear reason. Keep prompt templates readable with headings, lists, and fenced `text` blocks.

## Testing Guidelines

No formal test suite or coverage target exists yet. For skill changes, validate structure with `quick_validate.py` when available, then manually inspect rendered Markdown and run representative prompts through the intended agent workflow. Name future evals by behavior, not sequence, for example `reference-identity-preservation`.

## Commit & Pull Request Guidelines

This repository has no commit history yet, so use a simple Conventional Commits style going forward: `feat: add character prompt template`, `docs: update skill guide`, or `fix: clarify negative prompt`.

Pull requests should include a short summary, changed skill paths, validation performed, and before/after examples for prompt behavior when relevant. Include screenshots only for visual assets or rendered review pages.

## Agent-Specific Instructions

Do not commit `.DS_Store` files. When modifying installed or locked skills, update `skills-lock.json` only when the skill source or lock metadata intentionally changes.

HERZOG project outputs should not live only in chat. When an agent produces production material, save it under `projects/<project-slug>/outputs/` and update the project README with links to the generated artifacts.
