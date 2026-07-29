# Animation Prompts

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
3. General Animation Prompt
4. Scroll Animation Prompt
5. Hero Animation Prompt
6. Section Transition Prompt
7. Camera Animation Prompt
8. Object Animation Prompt
9. UI Animation Prompt
10. Hover Interaction Prompt
11. Loading Animation Prompt
12. Page Transition Prompt
13. Performance Optimization Prompt
14. Animation Review Prompt
15. Prompt Customization
16. Best Practices
17. Animation Prompt Library Summary

---

# 1. Purpose

This document provides reusable AI prompts for creating production-quality animations throughout the portfolio.

These prompts ensure that all generated animations follow the project's Motion Design System, Three.js Architecture, Performance Guide, and Accessibility Guide.

The objective is to produce animations that are cinematic, smooth, performant, and consistent with the portfolio's visual identity.

---

# 2. Usage Guidelines

Before requesting an animation, clearly define:

- Animation objective
- Trigger event
- Target component
- Duration
- Easing style
- Performance constraints
- Accessibility requirements
- Responsive behavior

Animations should always support the overall user experience rather than distract from it.

---

# 3. General Animation Prompt

Use this prompt for most animation requests.

```text
Create a production-ready animation for my premium 3D portfolio.

Requirements:

- GSAP preferred for DOM animations
- React Three Fiber for 3D animations
- Smooth 60 FPS
- Motion Design System compliant
- Responsive
- Respect prefers-reduced-motion
- Modular implementation
- Performance optimized
- Explain implementation decisions
```

This prompt serves as the foundation for all animation requests.

---

# 4. Scroll Animation Prompt

Use for scroll-driven experiences.

```text
Create a scroll-driven animation.

Requirements:

- Smooth interpolation
- Scroll-triggered timeline
- No scroll jank
- Mobile compatible
- Optimized rendering
- Supports reduced motion
- Modular implementation
```

Suitable for:

- Section reveals
- Camera movement
- Progress indicators
- Object transformations
- Background effects

---

# 5. Hero Animation Prompt

Use for the landing experience.

```text
Create a cinematic Hero animation.

Requirements:

- Premium appearance
- Smooth entrance
- Animated typography
- Camera movement
- Layered animations
- Responsive
- Optimized performance
- Minimal visual clutter
```

The Hero animation should create a memorable first impression without delaying user interaction.

---

# 6. Section Transition Prompt

Use when transitioning between major sections.

```text
Create smooth transitions between portfolio sections.

Requirements:

- Natural movement
- Camera continuity
- Maintain visual context
- Responsive
- Accessible
- GSAP timeline
- Performance optimized
```

Transitions should guide users naturally through the portfolio.

---

# 7. Camera Animation Prompt

Use for Three.js camera movement.

```text
Create a cinematic camera animation.

Requirements:

- React Three Fiber
- GSAP timeline
- Smooth interpolation
- Stable frame rate
- Natural acceleration
- No abrupt movements
- Modular implementation
```

Examples:

- Camera fly-through
- Orbit movement
- Focus transitions
- Zoom sequences
- Scene navigation

Camera movement should feel deliberate and controlled.

---

# 8. Object Animation Prompt

Use for 3D object motion.

```text
Create an animation for a Three.js object.

Requirements:

- Reusable animation logic
- Smooth interpolation
- Efficient updates
- GPU-friendly
- Proper cleanup
- Optimized rendering
```

Examples:

- Rotation
- Floating
- Scaling
- Position changes
- Material transitions

Avoid excessive or distracting object movement.

---

# 9. UI Animation Prompt

Use for interface animations.

Examples

- Buttons
- Cards
- Modals
- Navigation
- Tooltips
- Accordions

```text
Create a reusable UI animation.

Requirements:

- GSAP or CSS transitions
- Responsive
- Accessible
- Fast interactions
- Minimal layout shift
- Consistent timing
- Motion Design System compliant
```

UI animations should provide feedback rather than visual distraction.

---

# 10. Hover Interaction Prompt

Use for hover-based interactions.

```text
Create an accessible hover interaction.

Requirements:

- Smooth transition
- Keyboard equivalent
- Responsive
- Performance optimized
- No excessive scaling
- Consistent timing
```

Suitable for:

- Buttons
- Cards
- Icons
- Navigation
- Project previews

Hover effects should remain subtle and predictable.

---

# 11. Loading Animation Prompt

Use during asset loading.

```text
Create a premium loading animation.

Requirements:

- Minimal design
- Smooth looping
- Lightweight
- Responsive
- Supports reduced motion
- Indicates loading progress when possible
```

Loading animations should reassure users without increasing perceived load time.

---

# 12. Page Transition Prompt

Use when navigating between pages or routes.

```text
Create a smooth page transition.

Requirements:

- Preserve visual continuity
- Fast execution
- Responsive
- Accessible
- Minimal layout shift
- Performance optimized
```

Transitions should enhance navigation without delaying content.

---

# 13. Performance Optimization Prompt

Use to review or improve animation performance.

```text
Review the animation system.

Identify:

- Dropped frames
- Layout thrashing
- Excessive rerenders
- GPU bottlenecks
- Memory leaks
- Unnecessary timelines

Recommend improvements while preserving visual quality.
```

Optimization should be based on measurable performance metrics.

---

# 14. Animation Review Prompt

Use after generating animations.

```text
Review this animation as a Senior Motion Engineer.

Evaluate:

- Smoothness
- Motion Design consistency
- GSAP best practices
- Three.js best practices
- Accessibility
- Performance
- Maintainability
- Code quality

Provide specific improvements for production readiness.
```

Every significant animation should undergo review before integration.

---

# 15. Prompt Customization

Extend prompts with project-specific details such as:

- Animation duration
- Delay sequences
- Scroll progress mapping
- Camera paths
- Physics-inspired motion
- Easing preferences
- Responsive adaptations
- Design references
- Scene-specific behaviors

Providing additional context results in more accurate AI-generated animations.

---

# 16. Best Practices

When generating animations:

- Begin with the Master AI Prompt.
- Reference the Motion Design System.
- Follow the Three.js Architecture document.
- Respect performance budgets.
- Respect reduced-motion preferences.
- Keep animations purposeful.
- Reuse timelines where appropriate.
- Dispose of animation resources correctly.
- Test across desktop and mobile devices.
- Measure performance using profiling tools.

Animations should enhance usability and storytelling rather than compete with content.

---

# 17. Animation Prompt Library Summary

This document establishes a standardized collection of prompts for generating high-quality animations across the portfolio.

By aligning AI-generated animations with the Motion Design System, Three.js Architecture, Performance Guide, and Accessibility Guide, the project maintains a consistent cinematic experience while ensuring performance, maintainability, and accessibility remain uncompromised.

---

# End of Document

Version: 1.0

Status: Approved
