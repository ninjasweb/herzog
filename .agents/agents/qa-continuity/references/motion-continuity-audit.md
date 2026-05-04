# MOTION CONTINUITY AUDIT

Checks whether generated video motion supports the shot.

## Motion Fields

Audit per shot:
Camera motion:
Subject motion:
Environment motion:
Lighting motion:
Transition motion:
Motion intensity:
Duration:

## Motion Intensity Scale

0 = still
1 = micro
2 = subtle
3 = moderate
4 = energetic
5 = aggressive

Most image-to-video character scenes should stay between 1-3.

## Motion Red Flags

Flag if:
- camera motion is too aggressive
- subject movement contradicts pose
- image-to-video prompt asks for impossible action
- face is asked to animate too much
- hands perform complex actions without support
- environment adds elements not in reference
- motion hides continuity issues

## Motion Fixes

Use:
- Reduce camera movement from orbit to slow push-in.
- Replace walking with subtle posture shift.
- Replace complex hand action with minimal object interaction.
- Keep face stable; animate only eyes and breathing.
