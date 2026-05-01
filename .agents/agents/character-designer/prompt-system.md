# Character Prompt System

This file defines reusable prompt blocks created by the Character Designer.

---

## 1. Base Character Prompt

Use this as the identity anchor.

```text
[CHARACTER NAME], a [SPECIES/TYPE] [ROLE], [AGE RANGE], with [FACE STRUCTURE], [EYES], [HAIR/FUR/SKIN], [BODY PROPORTIONS], wearing [OUTFIT], carrying/using [SIGNATURE PROP], [PERSONALITY EXPRESSION], [STYLE], [MATERIAL/TEXTURE], [COLOR PALETTE], consistent character identity
```

---

## 2. Expanded Character Prompt

Use when detail is needed.

```text
Create [CHARACTER NAME], a [SPECIES/TYPE] who works as [ROLE].

Personality:
[PERSONALITY], [ENERGY], [EMOTIONAL TONE], motivated by [CORE MOTIVATION].

Visual identity:
[FACE STRUCTURE], [EYE STYLE], [BROWS], [NOSE], [MOUTH], [HAIR/FUR/SKIN/TEXTURE], [BODY PROPORTIONS], [SILHOUETTE].

Outfit:
[MAIN GARMENT], [SECONDARY GARMENT], [FOOTWEAR], [ACCESSORIES], [MATERIALS], [COLOR RULES].

Signature prop:
[PROP], used for [PURPOSE].

Style:
[VISUAL STYLE], [RENDERING STYLE], [LIGHTING], [CAMERA LANGUAGE], [BACKGROUND RULES].

The character must remain visually consistent across all future images and videos.
```

---

## 3. Expression Prompt Template

```text
Generate [CHARACTER NAME] showing [EXPRESSION].

Keep identical:
- face structure
- proportions
- outfit
- colors
- material texture
- hairstyle/fur/body design
- signature prop if visible

Expression details:
[HOW EYES CHANGE], [HOW BROWS CHANGE], [HOW MOUTH CHANGES], [HEAD TILT], [BODY LANGUAGE].

Same visual style: [STYLE LOCK].
```

---

## 4. Action Pose Prompt Template

```text
Generate [CHARACTER NAME] in an action pose: [ACTION].

Keep identical:
- face structure
- body proportions
- silhouette
- outfit
- colors
- signature prop
- material texture

Pose details:
[POSTURE], [GESTURE], [MOVEMENT], [WEIGHT], [EMOTION].

Clean composition, readable silhouette, same visual style: [STYLE LOCK].
```

---

## 5. Scene Prompt Template

```text
Place [CHARACTER NAME] in [SCENE/LOCATION].

Character must remain identical:
[BASE CHARACTER PROMPT]

Scene:
[ENVIRONMENT], [TIME OF DAY], [LIGHTING], [MOOD], [CAMERA], [ACTION].

Do not redesign the character. Do not change outfit, proportions, face, or color palette.
```

---

## 6. Character Sheet Handoff Prompt

Use this when handing off to Image Director.

```text
HERZOG handoff to Image Director:

Create the final prompt for a professional Character Design Sheet using the `character-design-sheet` skill.

Character:
[CHARACTER DNA]

Base prompt:
[BASE CHARACTER PROMPT]

Include:
- main hero character
- expressions
- action poses
- key details
- metadata
- color palette
- material/style rules
- environment fit
- behavior system
- camera language
- voice/audio profile
- reusable prompt blocks

Do not include 360 turnaround views.
```

---

## 7. Negative Prompt

```text
inconsistent character, different face, different body, different proportions, changed outfit, changed colors, random accessories, style drift, unreadable silhouette, distorted anatomy, extra limbs, unrelated character, overcomplicated background
```
