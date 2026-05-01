# IMAGE DIRECTOR OUTPUT

## 1. Visual Objective

Create realistic cinematic prompts for a 15-second memorial video honoring Paloma, preserving her identity as a small white French poodle while presenting her as healthy, happy, and peacefully reunited with loved ones.

## 2. Style Lock

Realistic film look, warm golden sunrise, soft pastel sky, natural rainbow bridge, luminous clouds, gentle magical realism, shallow depth of field, detailed natural fur, tender hopeful atmosphere.

## 3. Prompt Mode

Scene keyframe and image-to-video source prompt.

## 4. Final Prompt

```text
A realistic cinematic memorial video honoring Paloma, a small white French poodle with curly white fur, soft fluffy ears, dark expressive eyes, small black nose, joyful open-mouth smile, healthy and full of life. Paloma runs happily through a glowing golden meadow at sunrise, her curly fur moving gently in the breeze. A soft natural rainbow bridge appears ahead, rising into luminous pastel clouds. She runs toward the rainbow with excitement and peace, surrounded by warm golden light, subtle floating light particles, soft depth of field, emotional cinematic camera movement, realistic fur detail, tender hopeful atmosphere. At the end, Paloma reaches the clouds and joins other beloved dogs and warm family silhouettes, softly glowing, peaceful and welcoming. Heartwarming, magical realism, elegant film look, no sadness, no darkness, no cemetery, no illness.
```

## 5. Scene Prompts

```text
Scene 1, 0-3 seconds:
Realistic cinematic close-up of Paloma, a small white French poodle with curly white fur, soft fluffy ears, dark eyes and a joyful open-mouth smile, standing healthy and happy in a golden meadow at sunrise. Warm backlight, soft lens flare, shallow depth of field, peaceful emotional film look.

Scene 2, 3-7 seconds:
Paloma runs joyfully through tall golden grass, small white French poodle, curly fur bouncing naturally, ears moving with the wind, energetic and healthy. Low tracking camera, cinematic realism, warm sunlight, soft particles of light, hopeful atmosphere.

Scene 3, 7-11 seconds:
A natural rainbow bridge rises from the meadow into luminous pastel clouds. Paloma runs up the rainbow, happy and free, realistic fur, elegant cinematic camera following from behind, soft golden sky, magical realism, peaceful and beautiful.

Scene 4, 11-15 seconds:
Paloma arrives on soft glowing clouds, greeted by other beloved dogs and gentle family silhouettes made of warm light. She turns toward the camera with a joyful peaceful expression. Realistic cinematic style, heavenly but natural, tender emotional ending, warm pastel clouds, golden sunlight.
```

## 6. Negative Prompt

```text
sick dog, injured dog, sadness, crying, cemetery, grave, dark sky, storm, horror, scary, distorted face, extra legs, bad anatomy, aggressive animals, low quality, blurry, plastic fur, cartoon, unrealistic proportions, deformed eyes, harsh shadows
```

## 7. Consistency Anchors

```text
small white French poodle, curly white coat, fluffy rounded ears, dark expressive eyes, small black nose, joyful open-mouth smile, gentle face, healthy body, soft elegant posture
```

## 8. Technical Notes

Use the provided reference image for Paloma likeness. Generate the first meadow keyframe as a still image before animation. Recommended aspect ratio: 16:9 for cinematic presentation or 9:16 for Reels/TikTok.

## 9. Handoff To Video Director

Use the strongest still keyframe of Paloma as the image-to-video source. Animate in four short shots rather than one continuous generation if identity drift appears.

## 10. Project Artifact

`projects/paloma-rainbow-tribute/outputs/04-image-director.md`
