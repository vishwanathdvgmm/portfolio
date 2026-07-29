# Design System

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
2. Design Philosophy
3. Design Principles
4. Brand Identity
5. Color System
6. Typography
7. Grid System
8. Layout System
9. Spacing System
10. Border Radius
11. Elevation
12. Glassmorphism
13. Iconography
14. Buttons
15. Cards
16. Forms
17. Navigation
18. Badges
19. Modals
20. Tooltips
21. Loaders
22. Shadows
23. Background System
24. Lighting System
25. Responsive Design
26. Accessibility
27. Design Tokens
28. Component Consistency Rules
29. Do's & Don'ts

---

# 1. Introduction

The Design System defines every visual rule used throughout the portfolio.

Its purpose is to ensure consistency, scalability, accessibility, and maintainability.

Every screen, component, animation, and interaction must follow this document.

---

# 2. Design Philosophy

The design language should communicate:

- Engineering
- Precision
- Intelligence
- Innovation
- Elegance
- Premium Quality

The visual identity should resemble an advanced AI Operating System rather than a traditional portfolio.

---

## Keywords

- Minimal
- Futuristic
- Professional
- Premium
- Immersive
- Cinematic
- Glass
- Holographic
- Technical

---

# 3. Design Principles

## Principle 1

Minimalism over decoration.

---

## Principle 2

Motion supports communication.

---

## Principle 3

Whitespace improves readability.

---

## Principle 4

Depth should guide attention.

---

## Principle 5

Consistency beats creativity.

---

## Principle 6

Accessibility is mandatory.

---

# 4. Brand Identity

## Brand Personality

Calm

Intelligent

Technical

Modern

Confident

Professional

---

## Visual Theme

Advanced AI Laboratory

Glass Interfaces

Floating Objects

Neural Networks

Holographic Displays

Soft Lighting

Infinite Space

---

# 5. Color System

## Primary

```css
#00E5FF
```

Purpose

Primary actions

Links

Highlights

Interactive objects

---

## Secondary

```css
#4F46E5
```

Purpose

Supporting highlights

Buttons

Background accents

---

## Accent

```css
#A855F7
```

Purpose

Animations

Glow

Special interactions

---

## Success

```css
#22C55E
```

---

## Warning

```css
#FACC15
```

---

## Error

```css
#EF4444
```

---

## Background

Primary

```css
#050816
```

---

Secondary

```css
#0B1021
```

---

Surface

```css
#111827
```

---

Glass Surface

```css
rgba(255,255,255,0.06)
```

---

Glass Border

```css
rgba(255,255,255,0.12)
```

---

Text Primary

```css
#FFFFFF
```

---

Text Secondary

```css
#C5C8D4
```

---

Text Muted

```css
#7A7F90
```

---

# 6. Typography

## Font Families

Primary

```text
Space Grotesk
```

---

Secondary

```text
Inter
```

---

Monospace

```text
JetBrains Mono
```

---

## Font Sizes

Display

64px

---

Heading 1

48px

---

Heading 2

36px

---

Heading 3

30px

---

Heading 4

24px

---

Body Large

20px

---

Body

18px

---

Small

16px

---

Caption

14px

---

Code

15px

---

## Font Weight

Light

300

---

Regular

400

---

Medium

500

---

Semi Bold

600

---

Bold

700

---

# 7. Grid System

Desktop

12 Columns

---

Tablet

8 Columns

---

Mobile

4 Columns

---

Maximum Width

1440px

---

Content Width

1200px

---

# 8. Layout System

Section Padding

```text
Top

120px

Bottom

120px
```

---

Container Padding

Desktop

64px

---

Tablet

40px

---

Mobile

24px

---

Vertical Rhythm

32px

---

# 9. Spacing System

```text
4
8
12
16
20
24
32
40
48
64
80
96
120
160
```

Only these spacing values may be used.

---

# 10. Border Radius

Small

8px

---

Medium

16px

---

Large

24px

---

Extra Large

32px

---

Circular

999px

---

# 11. Elevation

Level 1

Cards

---

Level 2

Dialogs

---

Level 3

Navigation

---

Level 4

Floating Panels

---

Level 5

Hero Elements

---

# 12. Glassmorphism

Opacity

6%

---

Blur

20px

---

Border

1px

---

Border Color

White 12%

---

Reflection

Enabled

---

Shadow

Soft

---

All floating UI must use this style.

---

# 13. Iconography

Library

Lucide

---

Size

20px

24px

32px

---

Stroke Width

2

---

Icons must never use filled variants.

---

# 14. Buttons

## Primary

Filled

Gradient

Glow

Rounded

---

Hover

Scale

1.03

Glow

Increase

---

Pressed

Scale

0.98

---

## Secondary

Glass

Transparent

Border

---

## Ghost

Transparent

Text only

---

Button Height

48px

---

Minimum Width

140px

---

# 15. Cards

Cards are the primary content containers.

Types

Project Card

Skill Card

Achievement Card

Info Card

Timeline Card

Glass Card

---

Card Padding

24px

---

Radius

24px

---

Hover

Lift

Glow

Border Brightness

Increase

---

# 16. Forms

Rounded

16px

---

Glass background

---

Input Height

52px

---

Focus

Blue Glow

---

Labels

Always visible

---

Validation

Inline

---

# 17. Navigation

Transparent

Sticky

Blur

Glass

---

Height

72px

---

Logo

Left

---

Links

Center

---

CTA

Right

---

Active Link

Underline

Glow

---

# 18. Badges

Rounded Pill

---

Height

32px

---

Padding

16px

---

Variants

Primary

Secondary

Success

Warning

Error

---

# 19. Modals

Glass

Blur

Dark Overlay

---

Animation

Fade

Scale

---

Radius

24px

---

Maximum Width

900px

---

# 20. Tooltips

Delay

200ms

---

Fade

150ms

---

Background

Dark

---

Radius

8px

---

Arrow

Optional

---

# 21. Loaders

Boot Sequence

---

Progress Ring

---

Typing Cursor

---

Pulse Dots

---

Skeleton

Glass

---

Loading must always communicate progress.

---

# 22. Shadows

Small

Soft

---

Medium

Layered

---

Large

Hero Only

---

No harsh shadows.

---

# 23. Background System

Primary

Gradient

---

Animated Grid

---

Particles

---

Stars

---

Neural Network

---

Fog

---

Background must remain subtle.

---

# 24. Lighting System

Ambient

Soft Blue

---

Directional

White

---

Accent

Cyan

---

Bloom

Enabled

---

Volumetric

Light

---

Reflections

Subtle

---

# 25. Responsive Design

Desktop

Full Experience

---

Tablet

Reduced Particles

---

Mobile

Reduced Lighting

Reduced Objects

Optimized Layout

---

No content should disappear.

---

# 26. Accessibility

Contrast

WCAG AA

---

Keyboard

Full Support

---

Focus Ring

Visible

---

Reduced Motion

Supported

---

ARIA

Required

---

# 27. Design Tokens

## Colors

```css
--color-primary
--color-secondary
--color-accent
--color-success
--color-warning
--color-error
--color-bg
--color-surface
--color-glass
--color-text
--color-muted
```

---

## Radius

```css
--radius-sm
--radius-md
--radius-lg
--radius-xl
--radius-full
```

---

## Spacing

```css
--space-1
--space-2
--space-3
...
--space-12
```

---

## Typography

```css
--font-heading
--font-body
--font-code

--text-display
--text-h1
--text-h2
--text-body
```

---

## Shadows

```css
--shadow-sm
--shadow-md
--shadow-lg
```

---

## Blur

```css
--blur-glass
--blur-heavy
```

---

## Animation

```css
--duration-fast
--duration-normal
--duration-slow

--ease-default
--ease-smooth
--ease-emphasized
```

---

# 28. Component Consistency Rules

Every component must:

- Use the design tokens.
- Follow spacing rules.
- Use approved typography.
- Use approved colors.
- Use approved border radius.
- Include hover states.
- Include focus states.
- Support dark mode.
- Support keyboard navigation.
- Support responsive layouts.

No component may define its own design language.

---

# 29. Do's & Don'ts

## Do

- Use generous whitespace.
- Use smooth animations.
- Keep hierarchy clear.
- Prioritize readability.
- Reuse existing components.
- Maintain consistent spacing.
- Keep lighting subtle.
- Use glass surfaces consistently.

---

## Don't

- Mix multiple visual styles.
- Use random colors.
- Overuse glow effects.
- Create inconsistent button styles.
- Add unnecessary animations.
- Use hard shadows.
- Crowd the interface.
- Break the spacing system.
- Introduce new typography without updating the design system.

---

# Design Language Summary

The visual identity should resemble a futuristic AI workstation.

Everything should feel:

- Clean
- Premium
- Intelligent
- Engineered
- Interactive
- Cinematic

The user should immediately recognize that every visual decision has been made intentionally.

---

# End of Document

Version: 1.0

Status: Approved
