# SCENE ANIMATION — PRO

This file defines how subjects and environments should move.

---

## Subject Motion Library

### Human / Character

Safe movements:

- subtle breathing
- slight head turn
- eyes shifting
- hand adjusting object
- small posture change
- walking if already in walking pose
- hair/fabric movement
- slow turn toward camera

Risky movements:

- complex dance
- long dialogue
- large facial emotion changes
- full body spin
- complex finger movement
- fast running from static image

### Animal / Creature

Safe movements:

- breathing
- blinking
- ear movement
- head tilt
- tail movement
- small paw movement

Risky movements:

- changing fur pattern
- changing size
- fast running
- distorted limbs

### Object / Product

Safe movements:

- slow orbit camera
- light sweep
- reflection shift
- slight rotation if geometry is clear
- floating dust

Risky movements:

- bending logo
- changing label
- deforming object
- changing material

---

## Environment Motion Library

### Rain

```txt
fine rain falling naturally, wet reflections gently rippling on the ground
```

### Fog / Smoke

```txt
thin fog drifting slowly across the background, not covering the subject
```

### Dust

```txt
small dust particles floating through the light beam
```

### Neon / Practical Lights

```txt
background practical lights flicker softly, subtle and realistic
```

### Wind

```txt
light breeze moving fabric and hair slightly
```

### Crowd

```txt
distant out-of-focus silhouettes moving slowly in the background, no new main characters
```

### Water

```txt
surface reflections ripple gently, preserving the original environment
```

---

## Scene Animation Template

```txt
Subject motion:
[MAIN SUBJECT MOVEMENT], subtle and realistic, preserving identity.

Environment motion:
[AMBIENT MOVEMENT], supporting the mood without distracting from the subject.

Light motion:
[LIGHT MOVEMENT], natural and physically plausible.

Locked elements:
[WHAT MUST NOT CHANGE]
```

---

## Character Performance Levels

### Level 1 — Still Presence

- breathing
- blink
- micro expression
- no body movement

Use for:
- portraits
- emotional close-ups
- design consistency

### Level 2 — Controlled Gesture

- small hand movement
- head turn
- subtle posture shift

Use for:
- dialogue-free character beats
- product interaction
- cinematic keyframes

### Level 3 — Action Beat

- walking
- turning
- interacting
- moving through space

Use for:
- narrative movement
- music video shots
- story progression

### Level 4 — Dynamic Performance

- dancing
- running
- fighting
- complex gestures

Use only if:
- reference supports it
- character consistency is less fragile
- scene demands it
