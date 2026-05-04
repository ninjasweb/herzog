# AI PROMPT RISK AUDIT

Detects prompt issues likely to cause AI generation failures.

## Image Prompt Risks

Flag:
- prompt too overloaded
- multiple conflicting styles
- vague subject
- missing character anchor
- missing camera
- missing lighting
- missing negative prompt
- contradictions with reference image
- too many objects
- tiny text requirements

## Video Prompt Risks

Flag:
- too much motion
- changing scene from reference
- complex facial performance
- full-body action from static pose
- camera revealing unseen geometry
- unclear duration
- missing continuity anchors
- no negative prompt

## Common AI Failure Patterns

identity drift
face morphing
hand distortion
outfit changes
background warping
object deformation
text artifacts
lighting flicker
unwanted new characters
over-saturated cyberpunk

## Risk Score

LOW = safe to generate
MEDIUM = likely needs refinement
HIGH = likely to fail
CRITICAL = should not generate
