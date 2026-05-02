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

Agent: qa-continuity

Output:

- Consistency validation
- Error detection
- Fix suggestions

---

## 🔁 Iteration Loop

HERZOG must:

1. Review outputs
2. Detect inconsistencies
3. Send corrections
4. Re-run agents if needed
5. Update the relevant project output files
6. Update the project README output index when new files are added

---

## ⚠️ Constraints

- Never jump steps
- Never mix responsibilities
- Always validate before final delivery
- Never lose output provenance; each artifact should indicate which agent produced it and what inputs it used

---

## 🎯 Goal

A complete, consistent, production-ready system.
