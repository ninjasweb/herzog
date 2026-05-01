# VIDEO PROMPT TEMPLATES — PRO

Use these templates depending on generation mode.

---

## 1. Image-To-Video Template

```txt
Using the provided reference image as the strict visual anchor, animate this exact frame into a [DURATION]-second cinematic video shot.

Preserve exactly:
- character identity
- face structure
- body proportions
- wardrobe
- props
- environment
- composition
- lighting
- color palette
- camera angle
- depth of field

Video objective:
[OBJECTIVE]

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

Continuity:
[CONTINUITY ANCHORS]

Do not redesign the scene. Do not add new objects. Do not change the subject, clothing, face, or environment.
```

---

## 2. Text-To-Video Template

```txt
Create a [DURATION]-second cinematic video shot of [SUBJECT] in [ENVIRONMENT].

Action:
[ACTION]

Camera:
[LENS FEEL], [SHOT SIZE], [ANGLE], [CAMERA MOTION]

Lighting:
[LIGHTING SETUP]

Environment:
[LOCATION], [ATMOSPHERE], [BACKGROUND MOTION]

Style:
[STYLE LOCK], [COLOR PALETTE], [TEXTURE]

Mood:
[EMOTION]

Continuity:
[CHARACTER / STYLE ANCHORS]
```

---

## 3. Shot Extension Template

```txt
Extend the existing shot naturally for [DURATION] seconds.

Preserve:
- same subject
- same framing
- same lighting
- same environment
- same motion direction

Continue:
[ONGOING ACTION]

Add only subtle continuation:
[DETAILS]

Do not introduce new events or redesign the scene.
```

---

## 4. Loop Template

```txt
Create a seamless looping [DURATION]-second shot.

Motion:
[REPEATING MOTION]

Loop constraint:
The first and last frame must feel visually continuous.

Preserve:
[ANCHORS]

Avoid:
sudden jumps, new objects, changing lighting direction, changing character pose drastically.
```

---

## 5. Transition Prompt Template

```txt
Create a transition shot connecting [SHOT A] to [SHOT B].

Visual bridge:
[OBJECT / LIGHT / MOTION / SHAPE]

Camera movement:
[TRANSITION CAMERA]

Duration:
[DURATION]

Transition logic:
[HOW IT CONNECTS]

Preserve style lock:
[STYLE]
```
