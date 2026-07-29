# Component Architecture

> Project: 3D Scrollable Portfolio
>
> Document Version: 2.0
>
> Status: Approved
>
> Owner: Vishwanath M M
>
> Last Updated: July 2026

---

# Table of Contents

1. Introduction
2. Component Philosophy
3. Architecture Goals
4. Component Hierarchy
5. Component Classification
6. Folder Structure
7. Component Lifecycle
8. Component Communication
9. Component Composition
10. Primitive Components
11. Shared Components
12. Layout Components
13. Section Components
14. Scene Components
15. Three.js Components
16. Custom Hooks
17. Component Contracts
18. Error Boundaries
19. Performance Guidelines
20. Testing Guidelines
21. Best Practices
22. Future Expansion

---

# 1. Introduction

This document defines the complete React component architecture of the portfolio.

Every visual element, interaction, and section is represented as an independent,
reusable, and composable component.

The architecture is designed to maximize:

- Reusability
- Maintainability
- Readability
- Testability
- Performance
- Scalability

---

# 2. Component Philosophy

Every component must have a single responsibility.

A component should either:

- Display UI
- Manage interaction
- Compose other components
- Render a Three.js object

It should never perform multiple unrelated responsibilities.

---

## Core Principles

- Single Responsibility
- Composition over Configuration
- Explicit APIs
- Stateless whenever possible
- Strong typing
- Accessibility first

---

# 3. Architecture Goals

The component system should:

- Minimize duplication
- Encourage reuse
- Simplify maintenance
- Support future expansion
- Keep rendering predictable
- Keep components independent

---

# 4. Component Hierarchy

```
Application
│
├── Providers
│
├── Layout
│
├── Navigation
│
├── Sections
│
├── Features
│
├── Shared Components
│
└── Primitive Components
```

Dependencies always point downward.

Higher-level components may use lower-level components.

Lower-level components must never depend on higher-level components.

---

# 5. Component Classification

## Level 1 — Primitive Components

Reusable UI building blocks.

Examples

- Button
- Input
- Badge
- Icon
- Avatar
- Spinner
- Divider
- Tooltip

---

## Level 2 — Shared Components

Reusable components built using primitives.

Examples

- GlassCard
- SectionTitle
- GlowButton
- AnimatedHeading
- GradientText
- FloatingPanel
- SkillTag
- LoadingOverlay

---

## Level 3 — Layout Components

Responsible for page structure.

Examples

- Container
- Grid
- Stack
- Flex
- Section
- Footer
- Navbar

---

## Level 4 — Feature Components

Business-specific components.

Examples

- ProjectCard
- SkillPlanet
- TimelineNode
- AchievementCard
- ContactCard

---

## Level 5 — Scene Components

Top-level portfolio sections.

Examples

- HeroScene
- AboutScene
- SkillsScene
- ProjectsScene
- TimelineScene
- AchievementScene
- ContactScene

---

# 6. Folder Structure

```
components/
├── primitives/
│   ├── button/
│   ├── input/
│   ├── badge/
│   ├── icon/
│   ├── spinner/
│   └── tooltip/
│
├── shared/
│
├── layout/
│
├── navigation/
│
├── sections/
│
├── overlays/
│
├── scene/
│
└── providers/
```

Each component owns its own directory.

Example

```
button/
├── Button.tsx
├── Button.types.ts
├── Button.test.tsx
├── Button.module.css
└── index.ts
```

---

# 7. Component Lifecycle

Every component follows this lifecycle.

```
Receive Props
    ↓
Initialize
    ↓
Render
    ↓
Listen for Events
    ↓
Update
    ↓
Cleanup
    ↓
Unmount
```

Cleanup responsibilities include:

- Event listeners
- Animation timelines
- Observers
- Timers
- WebGL resources

---

# 8. Component Communication

Communication occurs through:

- Props
- Callback functions
- Zustand stores
- React Context (limited)
- Custom hooks

Avoid:

- Prop drilling
- Global mutable variables
- Cross-component mutations

---

# 9. Component Composition

Preferred

```tsx
<Card>
  <CardHeader />
  <CardContent />
  <CardFooter />
</Card>
```

Avoid

```tsx
<Card
  title=""
  showHeader
  headerColor=""
  footerPadding=""
  ...
/>
```

Favor composition over excessive props.

---

# 10. Primitive Components

The design system provides reusable primitives.

## Button

Variants

- Primary
- Secondary
- Ghost
- Outline
- Icon
- Destructive

States

- Default
- Hover
- Focus
- Active
- Loading
- Disabled

---

## Input

Types

- Text
- Email
- Password
- Search
- Textarea

---

## Badge

Used for labels and status indicators.

---

## Icon

Lucide-based icon wrapper.

---

## Spinner

Loading indicator.

---

Primitive components contain no business logic.

---

# 11. Shared Components

Examples

- GlassCard
- FloatingCard
- SectionHeader
- AnimatedCounter
- GradientHeading
- ScrollIndicator
- FeatureGrid
- EmptyState
- ErrorState

Shared components remain independent of portfolio content.

---

# 12. Layout Components

Layout components define page structure.

Examples

```
<AppLayout>

<Container>

<Section>

<Grid>

<Stack>

<Footer>

<Navbar>
```

Responsibilities

- Spacing
- Alignment
- Responsive layout
- Structural consistency

---

# 13. Section Components

Each portfolio section is isolated.

```
HeroSection

AboutSection

SkillsSection

ProjectsSection

TimelineSection

AchievementsSection

ContactSection
```

Each section owns:

- Local layout
- Feature composition
- Section animations
- Data presentation

Sections do not directly communicate with each other.

---

# 14. Scene Components

Scene components bridge React and Three.js.

```
HeroScene

↓

HeroSphere

↓

Particles

↓

Lighting

↓

Camera Focus
```

Responsibilities

- Scene composition
- Object placement
- Camera integration
- Environment setup

No business logic should exist inside mesh components.

---

# 15. Three.js Components

Examples

```
World

CameraRig

HeroCore

SkillPlanet

ProjectCube

TimelinePillar

AchievementCrystal

ParticleSystem

Environment

LightingRig
```

Responsibilities

- Meshes
- Materials
- Lights
- Animations
- Geometry

No HTML rendering.

---

# 16. Custom Hooks

Examples

```
useScrollProgress()

useCamera()

useProjects()

useSkills()

useTimeline()

useMediaQuery()

useReducedMotion()

useHover()

useIntersection()

useAnimationTimeline()
```

Guidelines

- One responsibility
- No rendering
- Pure logic
- Reusable
- Typed

---

# 17. Component Contracts

Every public component must define:

- Props
- Events
- Accessibility
- Dependencies
- Side effects

Example

```ts
interface ProjectCardProps {
  project: Project;
  featured?: boolean;
  onOpen(project: Project): void;
}
```

Public APIs should remain stable.

---

# 18. Error Boundaries

Application-level

```
<AppErrorBoundary>
```

Section-level

```
<ProjectsErrorBoundary>
```

Scene-level

```
<SceneErrorBoundary>
```

Fallbacks should preserve application usability.

---

# 19. Performance Guidelines

Use

- React.memo
- useMemo
- useCallback
- Lazy loading
- Dynamic imports

Avoid

- Deep prop chains
- Large component trees
- Anonymous callbacks in loops
- Unnecessary rerenders

Target

Fast reconciliation and minimal rendering work.

---

# 20. Testing Guidelines

Each component should include:

## Unit Tests

- Rendering
- Props
- Events
- Variants

---

## Accessibility Tests

- Keyboard support
- ARIA
- Focus management

---

## Integration Tests

- Store interaction
- Navigation
- Forms

Recommended tools

- Vitest
- React Testing Library
- Playwright

---

# 21. Best Practices

Every component should be:

✓ Small

✓ Typed

✓ Reusable

✓ Accessible

✓ Testable

✓ Predictable

✓ Performance-conscious

✓ Design-system compliant

✓ Properly documented

✓ Easy to replace

---

# 22. Future Expansion

The architecture should accommodate future features without restructuring.

Examples

- AI Assistant
- Blog
- CMS
- GitHub Dashboard
- WebXR
- Theme Engine
- Internationalization
- Analytics

New components must integrate into the existing hierarchy rather than introducing new architectural patterns.

---

# Component Architecture Summary

The component architecture serves as the foundation of the frontend.

By organizing components into clear layers—Primitive, Shared, Layout, Feature, and Scene—the application remains modular, maintainable, and scalable.

Every component should have a single responsibility, expose a clean public API, and integrate seamlessly with the design system, state management, and Three.js rendering pipeline.

---

# End of Document

Version: 2.0

Status: Approved
