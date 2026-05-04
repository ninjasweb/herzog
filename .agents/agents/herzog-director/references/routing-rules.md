# 🧠 HERZOG ROUTING RULES

Defines when to use each agent.

---

## 🎯 Based on Request Type

### 🟢 Simple Prompt / Image

Use:

- image-director

---

### 🟡 Character Creation

Use:

- character-designer
- image-director

---

### 🔵 Short Video (TikTok, Reels)

Use:

- scriptwriter
- image-director
- video-director
- sound-designer
- qa-continuity

---

### 🔴 Cinematic Video

Use:

- scriptwriter
- storyboard-artist
- character-designer
- image-director
- video-director
- lighting-director
- vfx-supervisor
- sound-designer
- editor
- qa-continuity

---

### 🟣 Branding / Mascot System

Use:

- character-designer
- image-director
- qa-continuity

---

## ⚖️ Optimization Rules

- Use **minimum viable agents**
- Avoid redundant work
- Prefer clarity over complexity
- `qa-continuity` is the **default final gate** for any multi-agent production — only skip it for a single isolated image with no character or continuity claim

---

## 🧠 Priority Order

1. Narrative clarity
2. Visual consistency
3. Production feasibility
4. Detail refinement

---

## 🚫 Avoid

- Calling all agents
- Mixing responsibilities
- Skipping QA

---

## 🔥 Principle

Right agent, right moment.
