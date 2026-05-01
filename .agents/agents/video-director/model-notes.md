# MODEL NOTES — VIDEO GENERATION

The Video Director should adapt prompt style depending on target model, but keep the creative direction stable.

---

## General Model Strategy

### Image-To-Video

Best for:

- preserving character consistency
- animating keyframes
- scene-by-scene production

Prompt style:

- explicitly preserve the image
- describe limited motion
- avoid too much new action

### Text-To-Video

Best for:

- exploratory shots
- environments
- establishing scenes
- abstract visuals

Prompt style:

- more descriptive
- stronger camera and environment details
- clear action

---

## Runway-Style Notes

Use:

- concise motion
- clear camera instruction
- strong preservation language

Avoid:

- overloaded prompts
- too many simultaneous actions

---

## Pika-Style Notes

Use:

- clear subject motion
- simple camera movement
- explicit duration
- direct animation instructions

---

## Sora-Style Notes

Use:

- detailed physical scene description
- temporal continuity
- realistic camera behavior
- cause-and-effect motion

---

## Kling / Luma-Style Notes

Use:

- strong reference anchoring
- controlled movement
- cinematic lens and lighting
- avoid identity changes

---

## Default Safe Image-To-Video Prompt Length

Aim for:

```txt
120–220 words
```

For complex scenes:

```txt
250–350 words max
```

Do not write a novel unless the model benefits from it.
