# Motion Design System

> Project: 3D Scrollable Portfolio
>
> Document Version: 1.0
>
> Status: Approved
>
> Owner: Vishwanath M M
>
> Last Updated: July 2026

---

# Table of Contents

1. Introduction
2. Motion Philosophy
3. Motion Principles
4. Motion Hierarchy
5. Motion Categories
6. Timing System
7. Easing System
8. Scroll Motion
9. Camera Motion
10. Object Motion
11. UI Motion
12. Hover Motion
13. Click Motion
14. Section Transitions
15. Loading Motion
16. Lighting Animation
17. Particle Motion
18. Floating Animation
19. Environmental Motion
20. Project Showcase Motion
21. Hero Motion
22. Skills Motion
23. Timeline Motion
24. Achievement Motion
25. Contact Motion
26. Cursor Motion
27. Reduced Motion
28. Motion Performance
29. Motion Consistency Rules
30. Motion Checklist

---

# 1. Introduction

Motion is not decoration.

Motion is the language that guides attention, communicates hierarchy,
reinforces relationships, and creates immersion.

Every animation in the portfolio must have a purpose.

If an animation does not improve understanding or user experience,
it should not exist.

---

# 2. Motion Philosophy

Motion should feel:

- Physical
- Intentional
- Smooth
- Premium
- Predictable
- Elegant

The visitor should never consciously notice animations.

They should simply feel natural.

---

# 3. Motion Principles

## Principle 1

Motion communicates hierarchy.

Important objects move less frequently but receive more emphasis.

---

## Principle 2

Motion follows physics.

Objects possess:

- Weight
- Momentum
- Inertia

Nothing should instantly appear or disappear.

---

## Principle 3

Motion is continuous.

Avoid abrupt starts and stops.

---

## Principle 4

Motion supports storytelling.

The camera leads the user's attention naturally.

---

## Principle 5

Motion never delays interaction.

Animations must never block user input.

---

# 4. Motion Hierarchy

Priority from highest to lowest:

1. Camera
2. Hero Elements
3. Interactive Objects
4. UI Components
5. Background Objects
6. Particles

Only one high-priority motion should dominate the scene at a time.

---

# 5. Motion Categories

## Global Motion

Camera movement

Lighting changes

World transitions

Fog movement

---

## Section Motion

Section reveal

Fade

Scale

Depth

---

## Interactive Motion

Hover

Click

Expand

Collapse

---

## Ambient Motion

Floating

Rotation

Particles

Light pulses

---

## Feedback Motion

Buttons

Forms

Navigation

Success

Error

---

# 6. Timing System

## Instant

75ms

Used for:

- Cursor feedback
- Active states

---

## Fast

150ms

Used for:

- Hover
- Icon animation

---

## Standard

250ms

Used for:

- Buttons
- Cards

---

## Medium

400ms

Used for:

- Panels
- Modals

---

## Slow

700ms

Used for:

- Section transitions

---

## Cinematic

1200–1800ms

Used for:

- Camera transitions
- Hero entrance

---

# 7. Easing System

Default

```text
easeOutCubic
```

---

Hero

```text
easeInOutExpo
```

---

Camera

```text
Power4.inOut
```

---

Hover

```text
easeOutQuad
```

---

Button Press

```text
easeOutBack
```

---

Loading

```text
easeInOutSine
```

---

Never use linear easing.

---

# 8. Scroll Motion

Scroll is the primary interaction.

Rules:

- Continuous
- Smooth
- Frame-independent
- No snap scrolling
- No abrupt acceleration
- No visual discontinuity

Scroll should control:

- Camera position
- Object reveals
- Lighting
- Background transitions
- Content opacity

---

# 9. Camera Motion

The camera is the storyteller.

Users never manipulate it directly.

---

Rules

No sudden rotations

No teleportation

No clipping

Maintain focus

Keep horizon stable

---

Movement

Translate

Rotate subtly

Zoom naturally

Ease between positions

---

Mouse Parallax

Maximum

3°

Never more.

---

# 10. Object Motion

Interactive objects should always feel alive.

Idle Motion

- Floating
- Rotation
- Energy pulse

Hover Motion

- Lift
- Scale
- Glow

Click Motion

- Expand
- Focus
- Rotate slightly

---

# 11. UI Motion

Cards

Fade + Lift

---

Buttons

Scale + Glow

---

Inputs

Glow on focus

---

Navigation

Slide underline

---

Modals

Scale + Fade

---

Tooltips

Fade + Rise

---

Notifications

Slide + Fade

---

# 12. Hover Motion

Hover Duration

150–250ms

---

Cards

TranslateY(-6px)

Scale 1.02

Glow +15%

---

Buttons

Scale 1.03

Glow Increase

---

Icons

Rotate 6°

---

Links

Underline grows left to right

---

Project Cubes

Rotate 5°

---

Skill Planets

Increase emissive intensity

---

# 13. Click Motion

Duration

100–200ms

---

Button

Scale

1.00 → 0.96 → 1.00

---

Cards

Expand

---

Projects

Open with

Fade

Scale

Blur removal

---

Navigation

Camera transition begins immediately

---

# 14. Section Transitions

Every section enters using:

Opacity

0 → 1

TranslateY

40px → 0px

Depth

+Z → Neutral

Duration

800ms

---

Camera always transitions before content.

---

# 15. Loading Motion

Loading Sequence

Logo appears

↓

Energy pulse

↓

Progress indicator

↓

Environment fades in

↓

Camera begins movement

↓

Hero appears

---

Loading should communicate progression.

Never use static loaders.

---

# 16. Lighting Animation

Lighting changes subtly while scrolling.

Rules

Bloom intensity

changes smoothly

Fog density

changes slowly

Ambient color

interpolates

No sudden lighting jumps

---

# 17. Particle Motion

Particles represent environmental energy.

Characteristics

Slow

Random

Lightweight

Continuous

Never distracting

---

Speed

0.1–0.4 units/sec

---

Opacity

Animated

---

Rotation

Very subtle

---

# 18. Floating Animation

Applied to:

Cards

Planets

Panels

Achievements

---

Motion

Vertical sine wave

Amplitude

6–12px

Period

4–8 seconds

---

Rotation

Maximum

2°

---

# 19. Environmental Motion

Stars

Very slow drift

---

Fog

Slow movement

---

Energy lines

Flow continuously

---

Light beams

Pulse gently

---

Background grids

Move minimally

---

# 20. Project Showcase Motion

Project Cube

Idle

Rotate slowly

---

Hover

Scale

Glow

Tilt

---

Click

Cube opens

Panels unfold

Camera zooms

Project details fade in

---

Close

Reverse animation

---

# 21. Hero Motion

Sequence

Boot animation

↓

Logo reveal

↓

Hero title

↓

Subtitle

↓

CTA buttons

↓

Scroll indicator

---

Each element enters independently.

---

Hero title

Fade

Scale

Letter spacing reduction

---

CTA

Slide upward

---

Background

Particles activate gradually

---

# 22. Skills Motion

Skill planets

Orbit slowly

---

Hover

Glow

Scale

Rotation

---

Click

Camera focuses

Skill panel appears

---

Connections

Neural lines animate

---

# 23. Timeline Motion

Timeline lights activate while scrolling.

Milestones

Fade

Rise

Glow

---

Current milestone

Receives emphasis

---

Past milestones

Reduce brightness

---

Future milestones

Remain subtle

---

# 24. Achievement Motion

Achievement crystals

Float

Rotate slowly

Pulse every 5 seconds

---

Hover

Crystal brightens

Information card appears

---

Click

Expand

Statistics animate

---

# 25. Contact Motion

Terminal boots on entry.

Typing animation

↓

Cursor blink

↓

Buttons fade

↓

Contact information appears

---

Buttons

Glow on hover

---

Email Copy

Success pulse

---

# 26. Cursor Motion

Desktop only.

Cursor

Smooth interpolation

---

Hover

Increase size

---

Interactive objects

Magnetic attraction

---

Links

Glow

---

No excessive trailing effects.

---

# 27. Reduced Motion

If user prefers reduced motion:

Disable

- Floating
- Camera interpolation
- Continuous rotations
- Background movement
- Particle drift

Keep

- Fade transitions
- Focus indicators
- Navigation feedback

The portfolio must remain fully functional.

---

# 28. Motion Performance

Target FPS

60

---

Animation Updates

requestAnimationFrame only

---

GPU Accelerated

Required

---

Avoid

Layout thrashing

Expensive filters

Unnecessary repaints

---

Animations should pause when outside the viewport where possible.

---

# 29. Motion Consistency Rules

Every animation must answer:

- What triggered it?
- What is its purpose?
- Does it guide attention?
- Does it reinforce hierarchy?
- Does it match existing motion?
- Can it be simplified?

If any answer is "no", redesign the animation.

---

Consistency Checklist

✓ Same easing

✓ Same durations

✓ Same hover behavior

✓ Same reveal pattern

✓ Same camera philosophy

✓ Same floating behavior

✓ Same glow intensity

✓ Same interaction feedback

✓ Same transition style

---

# 30. Motion Checklist

Before release, verify:

- All animations are smooth.
- Camera movement is cinematic.
- Scroll feels continuous.
- Hover feedback is consistent.
- Buttons respond instantly.
- No animation blocks interaction.
- Motion remains under 60 FPS budget.
- Reduced motion mode works correctly.
- Lighting transitions are seamless.
- Section reveals are synchronized.
- No animation feels repetitive or distracting.
- Motion enhances storytelling instead of replacing it.

---

# Motion Philosophy Summary

The portfolio should move like a living system.

Nothing is static.

Nothing is chaotic.

Every movement has intent.

Visitors should never think:

> "That animation looks cool."

Instead, they should feel:

> "Everything here feels polished, natural, and expertly crafted."

That subtle distinction is what separates a premium interactive experience from an animated website.

---

# End of Document

Version: 1.0

Status: Approved
