# Video Director Agent — PRO v3

This is the HERZOG AI Studio video direction agent.

It converts:

```txt
script + shotlist + image prompts + scene reference images
```

into:

```txt
video prompts + camera motion + subject motion + environment motion + transitions + continuity anchors
```

## Key Feature

The agent can work from scene folders:

```txt
projects/my-video/scenes/scene-001/reference.png
```

It treats the image as the visual source of truth and generates a motion prompt based on what is actually visible in the frame.

## Included

- AGENT.md
- Image reference ingestion system
- Motion system
- Camera movement system
- Scene animation system
- Transitions
- Prompt templates
- Negative prompts
- Model notes
- Continuity rules
- Formats
- Schemas
- Examples
