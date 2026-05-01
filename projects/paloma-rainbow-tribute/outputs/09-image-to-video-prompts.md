# IMAGE-TO-VIDEO PROMPTS OUTPUT

## 1. Objective

Create image-to-video prompts for the four existing scene images in `projects/paloma-rainbow-tribute/scenes/`, following the active script:

```text
Healthy memory -> joyful movement -> rainbow ascent -> peaceful reunion.
```

These prompts are designed for tools like Runway, Kling, Pika, Luma, or Sora using each still image as the visual reference/source frame.

## 2. Source Images Reviewed

- `projects/paloma-rainbow-tribute/scenes/p1.png`: Paloma standing happy in a golden meadow, close portrait, pink bows, pink collar, name tag, pineapple toy nearby.
- `projects/paloma-rainbow-tribute/scenes/p2.png`: Paloma running toward camera through golden grass, carrying the pineapple toy.
- `projects/paloma-rainbow-tribute/scenes/p3.png`: Paloma from behind running up a rainbow bridge toward luminous clouds, carrying the pineapple toy.
- `projects/paloma-rainbow-tribute/scenes/p4.png`: Paloma from behind reaching a warm cloud reunion scene with family figures and other pets.

## 3. Global Consistency Rules

Use these rules for every scene:

```text
Keep the exact dog identity from the source image: small white French poodle, curly white fur, fluffy rounded ears with pink bows, pink collar and Paloma name tag when visible, dark expressive eyes when visible, small black nose when visible, joyful healthy energy. Preserve the pineapple toy in scenes where it appears. Maintain warm golden cinematic lighting, soft depth of field, gentle emotional tone, realistic fur motion, no change of breed, no change of outfit, no added sadness or illness.
```

## 4. Universal Negative Prompt

```text
do not change the dog's breed, do not change fur color, do not remove pink bows, do not remove collar or name tag when visible, do not deform face, no extra legs, no extra tails, no distorted paws, no sick dog, no injured dog, no crying, no cemetery, no grave, no horror, no scary ghost, no harsh dark mood, no aggressive animals, no cartoon style, no plastic fur, no flickering identity, no changing toy shape, no unreadable name tag, no melting clouds, no warped humans, no uncanny faces
```

## 5. Scene 1 Prompt: Opening Memory

### Source

`projects/paloma-rainbow-tribute/scenes/p1.png`

### Duration

3 seconds

### Image-To-Video Prompt

```text
Animate this still image as a realistic cinematic opening memory. Paloma, the small white French poodle, stands happily in the golden meadow at sunrise. Keep her exact face, curly white fur, fluffy ears with pink bows, pink collar, Paloma name tag, and the yellow pineapple toy beside her. Add only subtle natural motion: gentle breeze through her fur and ears, grass moving softly, warm sunlight flickering slightly through the field, tiny dust or pollen particles drifting in the backlight. Paloma gives a small happy head tilt and breathes naturally, with a soft joyful open-mouth expression. Camera slowly pushes in by a few centimeters, shallow depth of field, warm film look, peaceful and hopeful.
```

### Camera Direction

```text
Very slow cinematic push-in, stable frame, no sudden zoom, no reframing away from Paloma's face.
```

### Motion Limits

```text
Keep Paloma mostly in place. Do not make her walk or run yet. Do not change the toy position significantly.
```

## 6. Scene 2 Prompt: Joyful Run

### Source

`projects/paloma-rainbow-tribute/scenes/p2.png`

### Duration

4 seconds

### Image-To-Video Prompt

```text
Animate this still image into a joyful realistic run. Paloma runs toward the camera through golden grass, carrying the yellow pineapple toy in her mouth. Preserve her exact white curly fur, pink bows, pink collar, Paloma name tag, dark eyes, and happy healthy expression. Her ears bounce naturally, front paws move forward in a small lively run cycle, grass bends and brushes around her legs, warm sunrise light glows behind her. The pineapple toy should stay gently held in her mouth without changing shape. Camera tracks backward low to the ground, matching her pace, with soft cinematic motion blur and shallow depth of field. The feeling is alive, playful, tender, and hopeful.
```

### Camera Direction

```text
Low backward tracking shot, same frontal composition, slight handheld warmth, keep Paloma centered.
```

### Motion Limits

```text
Do not overextend the legs or deform paws. Do not make the toy float. Do not change Paloma's face or bows.
```

## 7. Scene 3 Prompt: Rainbow Ascent

### Source

`projects/paloma-rainbow-tribute/scenes/p3.png`

### Duration

4 seconds

### Image-To-Video Prompt

```text
Animate this still image as Paloma running up the rainbow bridge toward luminous clouds. Keep the exact back view of Paloma: small white French poodle, curly white fur, fluffy ears with pink bows, pink collar, carrying the yellow pineapple toy. Her hind legs and front legs move in a natural gentle run cycle, tail and ears bounce softly, fur catches the golden backlight. The rainbow path glows subtly beneath her paws, clouds drift slowly, warm sunlight blooms ahead without overexposing her body. Camera follows behind at low height, moving forward smoothly with her, maintaining the same centered composition and hopeful cinematic tone. Magical realism should feel elegant and peaceful, not exaggerated.
```

### Camera Direction

```text
Smooth low follow shot from behind, slow forward drift, slight upward path movement toward the light.
```

### Motion Limits

```text
Do not make Paloma fly. Do not change the rainbow into stairs or a road. Do not remove the pineapple toy. Avoid flickering fur or distorted paws.
```

## 8. Scene 4 Prompt: Peaceful Reunion

### Source

`projects/paloma-rainbow-tribute/scenes/p4.png`

### Duration

4 seconds

### Image-To-Video Prompt

```text
Animate this still image as a peaceful emotional reunion in warm clouds. Paloma, seen from behind, walks forward gently through soft luminous clouds toward the welcoming family figure and other beloved pets. Preserve Paloma's exact white curly fur, fluffy ears with pink bows, pink collar, healthy body, and small joyful posture. The woman in front opens her arms slightly with a warm smile, the surrounding pets make subtle happy movements, and the background family figures remain soft and respectful. Clouds drift slowly around their feet, golden light breathes gently through the scene, and Paloma takes a few small steps forward. Keep the tone tender, hopeful, and psychologically comforting rather than religious or dramatic. No wings, no halos, no religious symbols.
```

### Camera Direction

```text
Slow forward dolly behind Paloma, keeping her centered as she approaches the open arms. Minimal parallax in clouds and background.
```

### Motion Limits

```text
Keep human faces stable and natural. Do not warp the surrounding pets. Do not add new animals or people. Do not turn the scene into a religious heaven image.
```

## 9. Editing Notes

Use the clips in this order:

```text
p1: 00:00-00:03
p2: 00:03-00:07
p3: 00:07-00:11
p4: 00:11-00:15
```

Recommended transitions:

- `p1 -> p2`: soft cut on Paloma's happy expression.
- `p2 -> p3`: match motion from running forward to running away/upward.
- `p3 -> p4`: bright cloud dissolve or warm light bloom.

## 10. Voiceover Fit

The recommended voiceover from `05-voiceover.md` can sit across the full sequence:

```text
Cuando alguien que amamos se va,
el amor no desaparece.
Aprende a vivir en otro lugar:
en la memoria,
en la calma,
y en todo lo que nos enseno a sentir.
Corre libre, Paloma.
```

## 11. Project Artifact

`projects/paloma-rainbow-tribute/outputs/09-image-to-video-prompts.md`
