# State Management Architecture

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
2. State Management Philosophy
3. Architecture Goals
4. State Classification
5. State Ownership
6. Store Architecture
7. Application Stores
8. State Flow
9. Local State
10. Global State
11. Derived State
12. Server State
13. State Persistence
14. Custom Hooks
15. Performance Optimization
16. Error Handling
17. Testing Strategy
18. Best Practices
19. Future Expansion

---

# 1. Introduction

This document defines how application state is created, managed, synchronized, persisted, and consumed throughout the portfolio.

A well-defined state architecture ensures:

- Predictable behavior
- Minimal rerenders
- High performance
- Maintainability
- Scalability
- Strong type safety

The portfolio follows a **single source of truth** model where every piece of state has exactly one owner.

---

# 2. State Management Philosophy

Application state should remain:

- Minimal
- Predictable
- Explicit
- Immutable
- Typed
- Observable

Only information that can change during runtime should exist as state.

If a value can be calculated from existing state, it should not be stored.

---

## Core Principles

- Single Source of Truth
- One Owner Per State
- Immutable Updates
- Explicit Actions
- Derived Values over Duplicate State
- Feature Isolation
- Minimal Global State

---

# 3. Architecture Goals

The state management architecture should provide:

- Fine-grained subscriptions
- Predictable updates
- Minimal rendering
- Easy debugging
- Strong typing
- Independent feature stores
- Easy persistence
- Future scalability

---

# 4. State Classification

The application contains four categories of state.

---

## Local State

Owned by an individual component.

Examples

- Form input
- Hover state
- Dropdown visibility
- Tooltip visibility
- Accordion expansion

---

## Global State

Shared between multiple features.

Examples

- Current section
- Theme
- Camera progress
- Navigation
- Performance mode

---

## Derived State

Computed from existing state.

Examples

- Active navigation item
- Scroll percentage
- Current project
- Visible timeline entry

Derived values should never be duplicated.

---

## Server State

Read-only application data.

Examples

- Projects
- Skills
- Timeline
- About
- Achievements

Initially stored as local TypeScript modules.

Future versions may load these from a CMS.

---

# 5. State Ownership

Every state value has exactly one owner.

Example

```
Project Store

↓

Project Grid

↓

Project Card

↓

Project Modal
```

Incorrect

```
Project Grid

Project Card

Navigation

All storing selectedProject
```

Correct

```
Project Store

↓

Subscribers
```

---

# 6. Store Architecture

The application uses **Zustand** for global state management.

```
store/
├── ui.store.ts
├── scene.store.ts
├── project.store.ts
├── settings.store.ts
├── animation.store.ts
├── selectors/
├── middleware/
└── index.ts
```

Each store owns exactly one domain.

Stores should remain independent whenever possible.

---

# 7. Application Stores

## UI Store

Responsible for:

- Navigation
- Global modal
- Command palette
- Loading screen
- Toast notifications

---

## Scene Store

Responsible for:

- Active section
- Scroll progress
- Scene transitions

---

## Project Store

Responsible for:

- Selected project
- Filters
- Search query
- Featured project

---

## Animation Store

Responsible for:

- Animation speed
- Reduced motion
- Active transitions

---

## Settings Store

Responsible for:

- Theme
- Audio
- Performance mode
- Accessibility preferences

---

# 8. State Flow

Every update follows a single direction.

```
User Action
    ↓
Event
    ↓
Store Action
    ↓
State Update
    ↓
Selectors
    ↓
React Components
    ↓
Three.js
    ↓
Rendered Frame
```

State always drives the UI.

The UI never owns shared application data.

---

# 9. Local State

Local state uses React.

Recommended hooks

- useState
- useReducer
- useRef

Suitable examples

- Input values
- Temporary UI state
- Animation flags
- Hover indicators
- Local validation

Avoid promoting local state to global state unnecessarily.

---

# 10. Global State

Global state is shared through Zustand.

Examples

```
Theme

Current Section

Navigation

Performance Mode

Selected Project

Reduced Motion
```

Global state should remain lightweight.

---

# 11. Derived State

Derived state is computed using selectors.

Example

```
Scroll Position

↓

Current Section

↓

Navigation Highlight
```

Never store

```
currentSection

currentSectionTitle
```

One should always be derived.

---

# 12. Server State

Application data remains immutable.

Structure

```
data/

about.ts

projects.ts

skills.ts

timeline.ts

achievements.ts
```

Future evolution

```
CMS
    ↓
REST / GraphQL
    ↓
Caching
    ↓
Store
    ↓
UI
```

---

# 13. State Persistence

Persist only long-lived user preferences.

Persist

- Theme
- Reduced motion
- Performance mode
- Audio preference
- Language (future)

Do not persist

- Hover state
- Modal visibility
- Selected project
- Temporary forms
- Animation state

Storage

```
localStorage
```

---

# 14. Custom Hooks

Stores should be consumed through reusable hooks.

Examples

```
useTheme()

useCurrentSection()

useProjects()

useScrollProgress()

usePerformanceMode()

useReducedMotion()
```

Hooks should hide implementation details from components.

---

# 15. Performance Optimization

Recommendations

- Selector subscriptions
- Memoized derived values
- Independent stores
- Immutable updates
- Flat store structures

Prefer

```ts
const theme = useSettingsStore((state) => state.theme);
```

Avoid

```ts
const settings = useSettingsStore();
```

The objective is minimal rerendering.

---

# 16. Error Handling

Store actions should validate input before modifying state.

Examples

- Invalid project ID
- Missing section
- Invalid theme

Fallback behavior

- Hero section
- Default theme
- First project

State failures should never crash the application.

---

# 17. Testing Strategy

Every store requires:

## Unit Tests

- Initial state
- Actions
- Selectors
- Persistence

---

## Integration Tests

- Store + Components
- Store + Navigation
- Store + Three.js integration

Coverage target

100% of store actions.

---

# 18. Best Practices

Every piece of state should satisfy:

✓ One owner

✓ Strong typing

✓ Immutable updates

✓ Explicit actions

✓ Minimal duplication

✓ Selector-based access

✓ Easy testing

✓ Predictable behavior

✓ Independent responsibility

✓ Minimal rerenders

---

# 19. Future Expansion

Additional stores may include:

```
assistant.store.ts

analytics.store.ts

github.store.ts

blog.store.ts

notification.store.ts

xr.store.ts

cms.store.ts

voice.store.ts
```

Each new store should continue following the established architecture:

- Single responsibility
- Typed interfaces
- Explicit actions
- Selector-based consumption
- Independent testing

---

# State Management Summary

The portfolio adopts a lightweight, predictable, and scalable state management architecture built around Zustand and React.

By separating local, global, derived, and server state, enforcing single ownership, and using selector-based subscriptions, the application minimizes unnecessary rendering while remaining easy to extend and maintain as new features are introduced.

---

# End of Document

Version: 2.0

Status: Approved
