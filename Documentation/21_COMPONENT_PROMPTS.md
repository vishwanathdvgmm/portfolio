# Component Prompts

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

1. Purpose
2. Usage Guidelines
3. General Component Prompt
4. Layout Component Prompt
5. Navigation Component Prompt
6. Hero Section Prompt
7. About Section Prompt
8. Skills Section Prompt
9. Projects Section Prompt
10. Timeline Section Prompt
11. Contact Section Prompt
12. UI Component Prompt
13. Form Component Prompt
14. Three.js Component Prompt
15. Review Prompt
16. Prompt Customization
17. Best Practices

---

# 1. Purpose

This document contains reusable prompts for generating production-quality components using AI coding assistants.

Each prompt is designed to produce code that aligns with the Engineering Knowledge Base (EKB), ensuring consistency in architecture, design, accessibility, and performance.

Rather than writing a new prompt for every component, developers can reuse and customize these templates.

---

# 2. Usage Guidelines

Before using any prompt:

- Clearly define the component's purpose.
- Specify required props.
- Mention any animations.
- Include responsiveness requirements.
- State accessibility expectations.
- Mention performance constraints.

Whenever possible, include links to the relevant EKB documents for additional context.

---

# 3. General Component Prompt

Use this prompt for standard React components.

```text
Create a production-ready React component for my 3D portfolio.

Requirements:

- Next.js App Router
- TypeScript
- Functional component
- Tailwind CSS
- Follow the project's Design System
- Follow the Component Architecture document
- Responsive design
- Accessible (WCAG 2.2 AA)
- Strong typing
- No unnecessary dependencies
- Modular and reusable
- Clean folder structure
- Explain major implementation decisions
- Include performance considerations
```

Use this as the default prompt for most UI components.

---

# 4. Layout Component Prompt

Use for layout-related components.

Examples

- Page Layout
- Container
- Section Wrapper
- Grid
- Footer
- Header

```text
Create a reusable layout component for the portfolio.

Requirements:

- Responsive layout
- Consistent spacing
- Uses the project's Design System
- Works with all screen sizes
- Supports nested children
- Optimized for maintainability
- Fully typed
- Accessible
```

---

# 5. Navigation Component Prompt

Use for navigation systems.

Examples

- Navbar
- Sidebar
- Mobile Navigation
- Floating Navigation

```text
Create a production-ready navigation component.

Requirements:

- Responsive
- Keyboard accessible
- Smooth active state transitions
- Mobile menu support
- Scroll-aware navigation
- Semantic HTML
- Accessible labels
- Strong TypeScript typing
- Optimized rendering
```

Navigation should remain responsive and accessible on all devices.

---

# 6. Hero Section Prompt

Use for the landing section.

```text
Create the Hero section for a premium cinematic portfolio.

Requirements:

- Responsive layout
- Modern typography
- Call-to-action buttons
- Animated entrance
- Supports a Three.js background
- Minimal design
- Strong visual hierarchy
- Accessible content
- Performance optimized
```

The Hero section should establish the visual identity of the portfolio.

---

# 7. About Section Prompt

```text
Create an About section.

Requirements:

- Responsive layout
- Professional biography
- Skills overview
- Timeline support
- Smooth animations
- Accessible structure
- Modular implementation
- Strong TypeScript typing
```

The About section should balance personality with professionalism.

---

# 8. Skills Section Prompt

```text
Create an interactive Skills section.

Requirements:

- Categorized skills
- Responsive cards
- Smooth hover animations
- Keyboard accessibility
- Dynamic rendering
- Optimized performance
- Reusable components
```

The design should communicate technical proficiency without excessive visual complexity.

---

# 9. Projects Section Prompt

```text
Create a Projects showcase.

Requirements:

- Responsive grid
- Project cards
- Filtering support
- Smooth animations
- Image optimization
- Accessible interactions
- Reusable project card component
- Lazy loading
```

Projects should be presented clearly while maintaining the premium visual style.

---

# 10. Timeline Section Prompt

```text
Create a professional timeline component.

Requirements:

- Responsive layout
- Vertical timeline
- Animated milestones
- Accessible navigation
- Reusable timeline items
- Optimized rendering
- Strong typing
```

The timeline should clearly communicate career and project progression.

---

# 11. Contact Section Prompt

```text
Create a Contact section.

Requirements:

- Contact form
- Client-side validation
- Accessible labels
- Responsive layout
- Error handling
- Success feedback
- Strong typing
- Optimized performance
```

The contact experience should be simple, intuitive, and reliable.

---

# 12. UI Component Prompt

Use for reusable interface elements.

Examples

- Button
- Card
- Modal
- Badge
- Tooltip
- Accordion
- Tabs

```text
Create a reusable UI component.

Requirements:

- TypeScript
- Tailwind CSS
- Accessible
- Theme support
- Responsive
- Configurable through props
- Reusable
- Well documented
- Performance optimized
```

These components should serve as the foundation of the design system.

---

# 13. Form Component Prompt

```text
Create a reusable form component.

Requirements:

- React Hook Form
- Validation
- Accessible labels
- Error messages
- Responsive design
- Strong typing
- Reusable inputs
- Performance optimized
```

Form components should prioritize usability and accessibility.

---

# 14. Three.js Component Prompt

Use for components that render within the 3D scene.

```text
Create a reusable React Three Fiber component.

Requirements:

- TypeScript
- React Three Fiber
- Three.js best practices
- Reusable materials
- Optimized geometries
- Proper cleanup
- Modular architecture
- Performance optimized
- Strong typing
```

The component should integrate seamlessly into the existing Three.js architecture.

---

# 15. Review Prompt

Use this prompt after AI generates a component.

```text
Review the generated component as a Senior Frontend Engineer.

Verify:

- Architecture
- Maintainability
- Performance
- Accessibility
- Responsiveness
- Type Safety
- React Best Practices
- Three.js Best Practices (if applicable)
- Code Quality
- Production Readiness

Identify weaknesses and propose concrete improvements.
```

This prompt helps maintain consistent engineering quality across the project.

---

# 16. Prompt Customization

Developers are encouraged to extend the prompts with project-specific requirements.

Examples include:

- Animation behavior
- Design references
- Performance budgets
- Accessibility requirements
- Mobile-first layouts
- API integrations
- Theme support
- Loading states
- Error handling
- Internationalization

The more context provided, the more accurate and useful the AI-generated output will be.

---

# 17. Best Practices

When working with AI-generated components:

- Use the Master AI Prompt as the system prompt.
- Reference the relevant EKB documents.
- Keep prompts focused on a single objective.
- Specify constraints explicitly.
- Request explanations for architectural decisions.
- Review generated code before integration.
- Test generated components thoroughly.
- Refactor where necessary to maintain consistency.

AI should accelerate development, but engineering judgment remains responsible for final implementation quality.

---

# Component Prompts Summary

This document provides a library of reusable prompts for generating high-quality React, Next.js, and React Three Fiber components.

By standardizing prompts for common component types and enforcing alignment with the Engineering Knowledge Base, developers can achieve consistent, maintainable, performant, and accessible implementations throughout the portfolio.

---

# End of Document

Version: 1.0

Status: Approved
