---
# 📄 `orchestration.md`
# 🎬 HERZOG ORCHESTRATION SYSTEM

This file defines how HERZOG coordinates agents.
---

## 🧩 Pipeline Stages

### 0. PROJECT SETUP

Agent: herzog-director

Output:

- Project directory under `projects/<project-slug>/`
- Project README
- References folder
- Outputs folder

Rules:

- Create or reuse a project before downstream agents produce final work.
- Store every agent output as a durable Markdown file.
- Keep filenames numbered in pipeline order.
- Link saved outputs from the project README.
- Final chat responses must point to saved project files.

### 1. IDEA STAGE

Agent: idea-strategist

Output:

- Refined concept
- Creative direction
- Hooks

---

### 2. SCRIPT STAGE

Agent: scriptwriter

Output:

- Narrative
- Dialogue
- Structure

---

### 3. VISUAL STAGE

Agents:

- storyboard-artist
- character-designer

Output:

- Shotlist
- Visual identity
- Character system

---

### 4. GENERATION STAGE

Agents:

- image-director
- video-director

Output:

- Image prompts
- Video prompts

---

### 5. CINEMATIC CONTROL

Agents:

- lighting-director
- wardrobe-stylist
- vfx-supervisor

Output:

- Lighting setup
- Styling consistency
- Effects

---

### 6. AUDIO STAGE

Agent: sound-designer

Output:

- Sound effects
- Music direction
- Voice tone

---

### 7. EDITING STAGE

Agent: editor

Output:

- Timeline structure
- Cuts
- Rhythm

---

### 8. QA STAGE

Agent: qa-continuity (folder: `.agents/agents/qa-continuity/`)

Inputs (whichever exist for the project):

- `brief.md`, `script.md`, `shotlist.md`
- `character-bible.md`, `visual-bible.md`, `style-lock.md`
- `scenes/scene-NNN/reference.png`
- `scenes/scene-NNN/image-prompt.md`
- `scenes/scene-NNN/video-prompt.md`
- rendered takes and final edit notes when available

Audit domains: narrative, character identity, wardrobe, props, location, spatial, lighting, color palette, camera, motion, editing rhythm, audio, AI-generation risk, technical delivery.

Severity ladder: `BLOCKER` → `MAJOR` → `MEDIUM` → `MINOR` → `PASS`.

Continuity score: 0–100 (≥ 81 = production ready, ≥ 91 = cinema-level).

Output:

- `outputs/06-qa-continuity.md` containing the full **QA CONTINUITY REPORT — CINEMA PRO** (project status, score, scene-by-scene audit, cross-scene continuity, character lock, visual bible audit, motion audit, prompt risk, fix queue, final decision).
- Decision state: `PASS` / `PASS WITH FIXES` / `REWORK REQUIRED` / `BLOCKED`.
- Prioritized fix queue, each item assigned to an owning agent (`scriptwriter`, `character-designer`, `image-director`, `video-director`, `editor`, `sound-designer`, `lighting-director`, `vfx-supervisor`, or `HERZOG`).

---

## 🔁 Iteration Loop

`qa-continuity` drives the loop. HERZOG must:

1. Run `qa-continuity` against the assembled artifacts.
2. Read the report's decision state and fix queue.
3. If `PASS` or `PASS WITH FIXES`, apply trivial fixes inline and proceed to delivery.
4. If `REWORK REQUIRED` or `BLOCKED`, dispatch each fix to the owning agent listed in the report.
5. Re-run only the affected agents — never the whole pipeline.
6. Update the relevant project output files and overwrite `06-qa-continuity.md` with the new audit.
7. Update the project README output index when new files are added.
8. Repeat until the report returns `PASS` or `PASS WITH FIXES` with no `BLOCKER`/`MAJOR` items.

---

## ⚠️ Constraints

- Never jump steps
- Never mix responsibilities
- Always validate before final delivery
- Never lose output provenance; each artifact should indicate which agent produced it and what inputs it used

---

## 🎯 Goal

A complete, consistent, production-ready system.
