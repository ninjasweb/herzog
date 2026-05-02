# SCENE FOLDER STANDARD

Use this structure for every project scene.

---

## Recommended Structure

```txt
scene-001/
├── scene.md
├── reference.png
├── image-prompt.md
├── video-prompt.md
├── continuity-notes.md
└── renders/
    ├── take-001.mp4
    └── take-002.mp4
```

---

## Naming Rules

Use padded scene numbers:

```txt
scene-001
scene-002
scene-003
```

Use clear shot names if needed:

```txt
scene-001-shot-001
scene-001-shot-002
```

---

## reference.png

The main visual anchor.

Use this when:

- generating image-to-video
- preserving character identity
- maintaining scene composition

---

## scene.md Template

```md
# Scene 001

## Story Beat
What happens in this scene.

## Emotional Beat
What the viewer should feel.

## Visual Notes
Important visual details.

## Required Motion
Specific movement needed.

## Duration
Recommended seconds.

## Continuity
What must connect to previous/next scene.
```

---

## video-prompt.md Template

```md
# Scene 001 — Video Prompt

## Reference Analysis

## Final Prompt

## Negative Prompt

## Motion Plan

## Duration

## Transition

## Continuity Anchors

## QA Risks
```
