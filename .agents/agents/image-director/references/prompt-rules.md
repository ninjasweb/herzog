# PROMPT RULES — IMAGE DIRECTOR

These rules define how image prompts must be written.

---

## Prompt Order

Use this order for clarity:

```txt
[SUBJECT] + [IDENTITY ANCHORS] + [ACTION] + [ENVIRONMENT] + [STYLE] + [CAMERA] + [LIGHTING] + [COMPOSITION] + [TEXTURE] + [MOOD] + [CONSTRAINTS]
```

---

## Required Elements

Every image prompt should include:

1. Subject
2. Action or pose
3. Environment
4. Camera / framing
5. Lighting
6. Composition
7. Color palette
8. Material / texture
9. Style lock
10. Consistency rules

---

## Character Identity Anchors

When using a character, always repeat:

- face structure
- body proportions
- hairstyle / surface
- outfit
- color palette
- signature prop
- expression style
- material texture

Example:

```txt
same character identity, same soft rounded face, same oversized amber eyes, same compact body proportions, same cream apron, same small copper whisk pin, same matte 3D clay texture
```

---

## Good Prompt Formula

```txt
Create [asset type] of [subject], [identity anchors], [action], in [environment], with [camera], [lighting], [composition], [texture/material], [style], [mood]. Keep [consistency anchors]. Avoid [negative constraints].
```

---

## Avoid Vague Words

Avoid:

- cool
- beautiful
- awesome
- cinematic without specifics
- high quality without specifics
- professional without specifics

Replace with:

- low-angle 35mm frame
- soft rim light
- centered silhouette
- wet concrete texture
- matte clay-like material
- editorial composition
- controlled contrast
- clean white studio background

---

## Prompt Density Rule

A prompt should be rich but not chaotic.

If there are too many ideas, split into:

- main prompt
- negative prompt
- consistency anchors
- technical notes

---

## Scene Prompt Template

```txt
Create a cinematic keyframe for Scene [NUMBER]: [SCENE TITLE].

Subject:
[CHARACTER BASE PROMPT]

Action:
[VISUAL ACTION]

Environment:
[LOCATION], [TIME OF DAY], [WEATHER], [SET DETAILS]

Camera:
[LENS], [ANGLE], [FRAMING], [DISTANCE], [DEPTH OF FIELD]

Lighting:
[KEY LIGHT], [FILL], [RIM], [PRACTICALS], [COLOR TEMPERATURE]

Composition:
[SUBJECT PLACEMENT], [FOREGROUND], [BACKGROUND], [NEGATIVE SPACE]

Style:
[STYLE LOCK], [TEXTURE], [COLOR PALETTE], [MOOD]

Consistency:
Preserve character identity, outfit, proportions, colors, and prop.
```

---

## Character Design Sheet Prompt Template

Use when invoking the character-design-sheet skill.

```txt
Create a professional Character Design Sheet for [CHARACTER NAME].

Use this base character identity:
[CHARACTER DNA / BASE PROMPT]

Sheet requirements:
- large main hero character
- expression panels
- action pose panels
- close-up key details
- metadata block
- color palette
- material and style notes
- environment fit thumbnails
- behavior system notes
- camera language notes
- reusable prompt blocks

Style:
[STYLE LOCK]

Layout:
Clean organized grid, readable labels, white or neutral background, premium animation studio model sheet.

Important:
No 360 turnaround views. Do not redesign the character.
```

---

## Final Prompt Checklist

Before output, confirm:

```txt
[ ] Subject is clear
[ ] Character anchors are included
[ ] Camera is defined
[ ] Lighting is defined
[ ] Composition is defined
[ ] Style is locked
[ ] Negative prompt exists
[ ] No random additions
[ ] Ready for image generation
```
