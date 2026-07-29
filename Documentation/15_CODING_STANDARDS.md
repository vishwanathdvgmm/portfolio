# Coding Standards

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
2. Coding Philosophy
3. General Principles
4. Project Structure
5. Naming Conventions
6. TypeScript Standards
7. React Standards
8. Next.js Standards
9. React Three Fiber Standards
10. State Management Standards
11. Styling Standards
12. Performance Standards
13. Error Handling
14. Testing Standards
15. Documentation Standards
16. Git Standards
17. Code Review Checklist
18. Best Practices
19. Future Maintenance

---

# 1. Introduction

This document defines the engineering standards for writing, reviewing, and maintaining code throughout the project.

The objective is to ensure that every contributor produces code that is:

- Consistent
- Readable
- Maintainable
- Testable
- Performant
- Scalable

Coding standards take precedence over personal coding preferences.

---

# 2. Coding Philosophy

Code is written for humans first and computers second.

The primary goals are:

- Clarity
- Simplicity
- Predictability
- Reusability
- Maintainability

Good code should require minimal explanation.

---

## Engineering Principles

- Keep It Simple (KISS)
- Don't Repeat Yourself (DRY)
- Single Responsibility Principle
- Composition over Inheritance
- Explicit over Implicit
- Prefer Readability over Cleverness

---

# 3. General Principles

Every piece of code should:

- Solve one problem.
- Be strongly typed.
- Avoid duplication.
- Handle failures gracefully.
- Follow existing project patterns.
- Be easy to modify.

Avoid:

- Magic values
- Deep nesting
- Long functions
- Dead code
- Premature optimization

---

# 4. Project Structure

Organize code by responsibility.

```
src/
├── app/
├── components/
├── features/
├── hooks/
├── lib/
├── store/
├── styles/
├── data/
├── types/
├── utils/
└── assets/
```

Every directory should have a clear purpose.

---

# 5. Naming Conventions

## Components

PascalCase

```
HeroSection

ProjectCard

NavigationBar
```

---

## Hooks

camelCase beginning with `use`

```
useTheme()

useProjects()

useScrollProgress()
```

---

## Variables

camelCase

```
projectList

currentTheme

scrollProgress
```

---

## Constants

UPPER_SNAKE_CASE

```
MAX_PROJECTS

DEFAULT_THEME

ANIMATION_DURATION
```

---

## Types

PascalCase

```
Project

Theme

Skill

TimelineEntry
```

---

## Files

Use descriptive names.

```
ProjectCard.tsx

HeroScene.tsx

Button.tsx

theme.ts
```

Avoid abbreviations unless universally understood.

---

# 6. TypeScript Standards

Always enable strict mode.

Rules

- Avoid `any`
- Prefer interfaces for public APIs
- Use type aliases where appropriate
- Export shared types
- Keep types close to their usage

Preferred

```ts
interface Project {
  id: string;
  title: string;
  description: string;
}
```

Avoid

```ts
const project: any = {};
```

---

# 7. React Standards

Components should:

- Have one responsibility
- Be functional components
- Be typed
- Be reusable
- Be composable

Preferred

```tsx
function ProjectCard(props: ProjectCardProps) {
    return ...
}
```

Avoid

- Class components
- Large monolithic components
- Inline business logic

---

# 8. Next.js Standards

Use the App Router.

Recommendations

- Server Components by default
- Client Components only when required
- Dynamic imports for heavy modules
- Route-based code splitting
- Metadata API for SEO

Keep routing declarative and predictable.

---

# 9. React Three Fiber Standards

Guidelines

- One component per logical object
- Dispose resources correctly
- Reuse geometries
- Reuse materials
- Avoid unnecessary `useFrame` hooks
- Separate scene logic from UI logic

Preferred hierarchy

```
World

↓

HeroScene

↓

HeroCore
```

---

# 10. State Management Standards

Use Zustand for shared state.

Rules

- One domain per store
- Explicit actions
- Immutable updates
- Selector-based subscriptions
- No duplicate state

Avoid

```ts
const store = useStore();
```

Prefer

```ts
const theme = useSettingsStore((state) => state.theme);
```

---

# 11. Styling Standards

Use Tailwind CSS.

Guidelines

- Utility-first styling
- Reusable component variants
- Consistent spacing
- Responsive utilities
- CSS variables for design tokens

Avoid

- Inline styles
- Excessive custom CSS
- Duplicate utility combinations

---

# 12. Performance Standards

Always consider rendering cost.

Recommendations

- Memoize expensive calculations
- Lazy load heavy components
- Dynamic imports
- Stable object references
- Efficient asset loading

Performance should never be sacrificed for unnecessary visual complexity.

---

# 13. Error Handling

Handle failures explicitly.

Examples

- Asset loading errors
- API failures
- Invalid input
- Missing data

Guidelines

- Provide useful fallback UI
- Log meaningful errors
- Avoid silent failures
- Never expose internal implementation details to users

---

# 14. Testing Standards

Every feature should be testable.

Minimum coverage

- Components
- Hooks
- Utilities
- Stores

Recommended tools

- Vitest
- React Testing Library
- Playwright

Tests should verify behavior rather than implementation details.

---

# 15. Documentation Standards

Every public module should include:

- Purpose
- Responsibilities
- Public API
- Dependencies
- Usage examples (where beneficial)

Complex algorithms should include explanatory comments.

Avoid unnecessary comments that simply repeat the code.

---

# 16. Git Standards

Branch naming

```
feature/hero-section

feature/projects

fix/navigation

refactor/state-management

docs/component-architecture
```

Commit message format

```
feat: add hero scene

fix: resolve camera jitter

refactor: simplify project store

docs: update roadmap
```

Keep commits focused on a single logical change.

---

# 17. Code Review Checklist

Before merging, verify:

✓ Code follows naming conventions

✓ Types are complete

✓ No unnecessary complexity

✓ Components are reusable

✓ Accessibility is maintained

✓ Performance impact is acceptable

✓ Tests pass

✓ Documentation is updated

✓ No console logs remain

✓ No unused imports

---

# 18. Best Practices

Every engineer should strive to write code that is:

✓ Readable

✓ Predictable

✓ Reusable

✓ Typed

✓ Tested

✓ Accessible

✓ Performant

✓ Documented

✓ Modular

✓ Easy to maintain

Consistency is more valuable than personal preference.

---

# 19. Future Maintenance

As the project evolves:

- Refactor incrementally.
- Remove obsolete code.
- Update documentation alongside code changes.
- Review dependencies regularly.
- Keep coding standards aligned with modern best practices.

Engineering quality should improve over time rather than degrade.

---

# Coding Standards Summary

The Coding Standards establish a consistent engineering foundation for the project.

By enforcing clear naming conventions, strong typing, modular architecture, disciplined state management, and rigorous review practices, the codebase remains maintainable, scalable, and approachable for both current and future contributors.

These standards should be treated as mandatory engineering guidelines rather than optional recommendations.

---

# End of Document

Version: 1.0

Status: Approved
