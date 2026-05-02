# EXAMPLE QA REPORT

## Project Status

Status: PASS WITH FIXES
Global Score: 78
Decision: Revise prompts before video generation.

## Scene 003

Status: REWORK REQUIRED
Score: 58
Severity: MAJOR

### Issue 1

Issue:
The video prompt asks for a 180-degree orbit around the DJ, but the reference image only defines the front view.

Severity:
MAJOR

Evidence:
Scene 003 reference image is a front-facing medium shot. Video prompt requests full orbit.

Why it matters:
The model will invent unseen character details and may change the outfit/face.

Fix:
Replace camera motion with a subtle 8-10 degree push-orbit or slow push-in.

Owner:
video-director

### Issue 2

Issue:
Prompt introduces holographic billboards not present in reference image.

Severity:
MEDIUM

Evidence:
Reference image shows wet street and practical lights only.

Fix:
Remove holographic billboards. Use existing practical light flicker and wet reflection motion.

Owner:
video-director
