# IMAGE REFERENCE INGESTION — PRO

This file defines how the Video Director reads scene folders and generates prompts from reference images.

---

## Purpose

Reference images are not decorative.

They are the visual source of truth for image-to-video generation.

The Video Director must analyze each reference image and generate motion that preserves the image.

---

## Scene Folder Convention

```txt
projects/[project-name]/scenes/scene-001/
├── reference.png
├── scene.md
├── image-prompt.md
└── video-prompt.md
```

Optional:

```txt
reference-main.png
reference-alt-01.png
reference-alt-02.png
mask-subject.png
mask-background.png
notes.md
rendered-output.mp4
```

---

## Required Reading Order

### 1. Scene Text

Read:

```txt
scene.md
```

Extract:

- scene intention
- story beat
- emotional beat
- subject action
- required duration
- continuity notes

### 2. Image Prompt

Read:

```txt
image-prompt.md
```

Extract:

- original visual intention
- character anchors
- style lock
- camera and lighting plan

### 3. Reference Image

Inspect:

```txt
reference.png
```

Extract actual visual facts.

If written text and image conflict, prioritize the image unless HERZOG says otherwise.

---

## Visual Extraction Checklist

Analyze the image in these layers:

### Subject

```txt
Who/what is the main subject?
Where is the subject placed?
What is the pose?
What is the expression?
What is the silhouette?
What is identity-critical?
```

### Wardrobe / Character

```txt
What is the outfit?
What colors are visible?
What accessories are present?
What facial features must be preserved?
What body proportions must remain identical?
```

### Camera

```txt
Shot size:
Angle:
Lens feeling:
Depth of field:
Subject distance:
Composition:
```

### Lighting

```txt
Key light direction:
Fill level:
Rim light:
Practical lights:
Color temperature:
Contrast level:
```

### Environment

```txt
Location:
Foreground:
Background:
Props:
Weather/atmosphere:
Surface materials:
```

### Motion Opportunities

```txt
What can move naturally?
What should stay still?
What movement supports the story?
What movement could break the image?
```

---

## Prompt Generation Template

```txt
Using the provided scene reference image as the strict visual anchor, animate this exact frame into a [DURATION]-second cinematic video shot.

Preserve:
- same character identity
- same face structure
- same body proportions
- same wardrobe
- same props
- same environment
- same composition
- same lighting
- same color palette
- same depth of field

Camera motion:
[CAMERA MOTION]

Subject motion:
[SUBJECT MOTION]

Environment motion:
[ENVIRONMENT MOTION]

Lighting motion:
[LIGHT MOTION]

Mood:
[MOOD]

Do not redesign the scene. Do not add new objects. Do not change the character. Do not change clothing. Do not alter the face.
```

---

## Image-To-Video Output

For each scene, produce:

```txt
Scene ID:
Reference Image:
Visual Analysis:
Narrative Goal:
Video Prompt:
Negative Prompt:
Camera Motion:
Subject Motion:
Environment Motion:
Lighting Motion:
Duration:
Transition In:
Transition Out:
Continuity Anchors:
QA Risks:
```

---

## Motion Safety Based On Image Type

### Portrait / Character Close-Up

Use:

- micro push-in
- subtle breathing
- eye movement
- slight head turn
- hair/fabric motion
- soft background parallax

Avoid:

- large facial deformation
- fast camera orbit
- mouth movement unless required
- changing expression drastically

### Full Body Character

Use:

- small posture shift
- hand movement
- clothing movement
- slow dolly
- environment motion

Avoid:

- changing outfit
- exaggerated walking unless image supports it
- limb distortion

### Environment Shot

Use:

- parallax
- drifting fog
- rain
- moving light
- slow camera pan

Avoid:

- new buildings
- random characters
- changing architecture

### Product / Object

Use:

- controlled camera orbit
- light sweep
- reflection movement
- small object vibration only if motivated

Avoid:

- changing product shape
- changing label
- bending geometry
