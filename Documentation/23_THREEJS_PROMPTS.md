# Three.js Prompts

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
3. General Three.js Prompt
4. Scene Creation Prompt
5. Camera Prompt
6. Lighting Prompt
7. Material Prompt
8. Shader Prompt
9. Model Loading Prompt
10. Animation Prompt
11. Post Processing Prompt
12. Performance Optimization Prompt
13. Debugging Prompt
14. Code Review Prompt
15. Prompt Customization
16. Best Practices
17. Three.js Prompt Library Summary

---

# 1. Purpose

This document provides a standardized collection of reusable AI prompts for developing Three.js and React Three Fiber features within the portfolio.

These prompts ensure that all generated code aligns with the project's:

- Three.js Architecture
- Component Architecture
- Performance Guide
- Motion Design System
- Coding Standards
- Accessibility Guide

The objective is to generate production-ready, performant, maintainable, and scalable 3D implementations.

---

# 2. Usage Guidelines

Before requesting any Three.js implementation, specify:

- Objective
- Scene requirements
- Visual style
- Performance targets
- Expected interactions
- Asset requirements
- Animation requirements
- Mobile support
- Accessibility considerations

Always include sufficient context to allow the AI to make appropriate architectural decisions.

---

# 3. General Three.js Prompt

Use this prompt for most Three.js implementation requests.

```text
Act as a Senior Three.js Engineer and React Three Fiber specialist.

Create a production-ready implementation for my premium cinematic portfolio.

Requirements:

- React Three Fiber
- TypeScript
- Modular architecture
- Performance optimized
- Reusable components
- Proper cleanup
- Follow the Three.js Architecture document
- Follow the Performance Guide
- Explain architectural decisions
```

This should be the default prompt for general Three.js development.

---

# 4. Scene Creation Prompt

Use for creating complete 3D scenes.

```text
Create a reusable Three.js scene.

Requirements:

- React Three Fiber
- Modular scene composition
- Configurable lighting
- Camera support
- Responsive behavior
- Performance optimized
- Clean component hierarchy
- Production ready
```

Typical use cases include:

- Hero Scene
- About Scene
- Projects Scene
- Skills Scene
- Contact Scene

Scenes should remain modular and independently maintainable.

---

# 5. Camera Prompt

Use when implementing camera systems.

```text
Create a reusable cinematic camera system.

Requirements:

- Smooth interpolation
- GSAP support
- Scroll-driven movement
- Orbit support (if required)
- Mobile compatible
- Stable frame rate
- React Three Fiber
- TypeScript
```

The camera should feel cinematic while maintaining user comfort.

---

# 6. Lighting Prompt

Use for lighting systems.

```text
Create a professional lighting setup.

Requirements:

- Physically realistic lighting
- Soft shadows
- Ambient lighting
- Directional lighting
- Configurable intensity
- Performance optimized
- Modular implementation
```

Lighting should reinforce the portfolio's premium visual identity without excessive GPU cost.

---

# 7. Material Prompt

Use for reusable materials.

```text
Create reusable Three.js materials.

Requirements:

- Shared material instances
- Physically based rendering (PBR)
- Configurable parameters
- Performance optimized
- TypeScript
- Easy reuse
```

Material systems should minimize duplication and simplify maintenance.

---

# 8. Shader Prompt

Use when custom shaders are required.

```text
Create a custom GLSL shader.

Requirements:

- Modular shader architecture
- Reusable uniforms
- Well-documented code
- Performance optimized
- Compatible with React Three Fiber
- Production ready
```

Examples include:

- Gradient effects
- Dissolve effects
- Water
- Glow
- Noise
- Distortion

Shaders should remain readable and reusable.

---

# 9. Model Loading Prompt

Use when loading 3D assets.

```text
Create a reusable model loader.

Requirements:

- GLTF/GLB support
- Draco compression
- Suspense integration
- Proper cleanup
- Error handling
- Loading fallback
- Asset caching
- TypeScript
```

Model loading should be efficient and resilient to loading failures.

---

# 10. Animation Prompt

Use for Three.js object animations.

```text
Create a reusable object animation.

Requirements:

- React Three Fiber
- GSAP or frame-based animation
- Smooth interpolation
- Proper cleanup
- Performance optimized
- Configurable parameters
```

Examples include:

- Floating
- Rotation
- Camera focus
- Scale transitions
- Scene transitions

Animations should remain smooth across supported devices.

---

# 11. Post Processing Prompt

Use when implementing visual effects.

```text
Create a reusable post-processing pipeline.

Requirements:

- Modular effects
- Performance optimized
- Mobile compatible
- Configurable quality
- React Three Fiber
- Proper cleanup
```

Possible effects:

- Bloom
- Depth of Field
- Ambient Occlusion
- Tone Mapping
- Color Grading
- Vignette

Post-processing should enhance visual quality without excessive GPU overhead.

---

# 12. Performance Optimization Prompt

Use when improving existing Three.js implementations.

```text
Review this Three.js implementation.

Identify:

- High draw calls
- Geometry duplication
- Material duplication
- Memory leaks
- Expensive shaders
- Large textures
- Unnecessary rerenders
- CPU bottlenecks
- GPU bottlenecks

Recommend production-ready optimizations.
```

Performance recommendations should be measurable and aligned with the Performance Guide.

---

# 13. Debugging Prompt

Use when diagnosing rendering or interaction issues.

```text
Act as a Senior Three.js Engineer.

Analyze the provided implementation.

Identify:

- Rendering issues
- Camera issues
- Lighting problems
- Material problems
- Animation bugs
- Memory leaks
- Performance bottlenecks
- React integration issues

Explain the root cause before proposing a solution.
```

The debugging process should prioritize identifying underlying architectural issues rather than only addressing visible symptoms.

---

# 14. Code Review Prompt

Use after AI generates Three.js code.

```text
Review this Three.js implementation as a Principal Graphics Engineer.

Evaluate:

- Architecture
- Performance
- Readability
- Type safety
- Resource management
- Scene organization
- React Three Fiber best practices
- Accessibility
- Scalability
- Production readiness

List all weaknesses and recommend improvements.
```

Every significant Three.js implementation should undergo review before integration.

---

# 15. Prompt Customization

Developers may extend prompts with project-specific requirements such as:

- Camera paths
- HDR environments
- Lighting references
- Shader references
- Animation timing
- Physics integration
- Interaction models
- Device-specific quality settings
- Scene transitions
- Asset constraints

Providing explicit requirements leads to more accurate AI-generated implementations.

---

# 16. Best Practices

When generating Three.js code:

- Start with the Master AI Prompt.
- Reference the Three.js Architecture document.
- Follow the Component Architecture.
- Respect the Performance Guide.
- Use reusable geometries and materials.
- Dispose of all GPU resources correctly.
- Keep components modular.
- Profile performance before optimizing.
- Test on desktop and mobile hardware.
- Prefer maintainable solutions over clever implementations.

Three.js code should prioritize long-term maintainability alongside visual quality.

---

# 17. Three.js Prompt Library Summary

This document establishes a standardized library of prompts for developing Three.js and React Three Fiber features within the portfolio.

By following these prompts, AI-generated implementations remain consistent with the project's architecture, performance goals, and visual standards while promoting reusable, maintainable, and production-ready 3D code.

---

# End of Document

Version: 1.0

Status: Approved
