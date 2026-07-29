# Three.js Architecture

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
2. Three.js Philosophy
3. Architecture Goals
4. Technology Stack
5. High-Level Architecture
6. Rendering Pipeline
7. Scene Graph Architecture
8. React Three Fiber Integration
9. Camera System
10. Lighting System
11. Material System
12. Shader Architecture
13. Animation Architecture
14. Interaction System
15. Post Processing Pipeline
16. Performance Optimization
17. Memory Management
18. Debugging & Development Tools
19. Best Practices
20. Future Expansion

---

# 1. Introduction

This document defines the architecture of the 3D engine powering the portfolio.

The website is not a collection of independent animations. Instead, it is treated as a continuously rendered virtual world where scrolling, user interaction, UI, animations, and application state work together to create a seamless experience.

The architecture emphasizes:

- High performance
- Scalability
- Maintainability
- Predictable rendering
- Modular design

---

# 2. Three.js Philosophy

The Three.js layer is responsible only for rendering and interaction within the 3D world.

Business logic, application state, routing, and UI remain outside the rendering engine.

Core principles:

- Separation of concerns
- Declarative scene construction
- GPU-first rendering
- Minimal CPU workload
- Reusable components
- Deterministic rendering

The rendering engine should remain independent from application-specific logic.

---

# 3. Architecture Goals

The Three.js architecture must provide:

- Stable 60 FPS
- Modular scene organization
- Smooth scroll-based navigation
- High visual quality
- Efficient asset management
- Easy debugging
- Responsive rendering
- Device adaptability
- Future extensibility

---

# 4. Technology Stack

| Layer                  | Technology         |
| ---------------------- | ------------------ |
| Renderer               | Three.js           |
| React Integration      | React Three Fiber  |
| Helper Utilities       | Drei               |
| Animation              | GSAP               |
| Scroll Synchronization | GSAP ScrollTrigger |
| Physics (Future)       | Rapier             |
| Asset Loading          | GLTFLoader         |
| Texture Compression    | KTX2               |
| HDR Environment        | RGBELoader         |

---

# 5. High-Level Architecture

```
Application

↓

React

↓

React Three Fiber

↓

Three.js Scene

↓

Renderer

↓

WebGL

↓

GPU

↓

Display
```

### Responsibilities

**React**

- UI
- Routing
- State
- Layout

**React Three Fiber**

- Scene composition
- Lifecycle
- Rendering synchronization

**Three.js**

- Rendering
- Camera
- Lighting
- Materials
- Geometry
- GPU communication

---

# 6. Rendering Pipeline

Each rendered frame follows a deterministic sequence.

```
Input

↓

State Update

↓

Animation Update

↓

Camera Update

↓

Scene Update

↓

Lighting Update

↓

Material Update

↓

Post Processing

↓

GPU Rendering

↓

Frame Presentation
```

Rendering occurs inside the browser animation loop.

Target frame time:

```
16.67 ms
```

Target frame rate:

```
60 FPS
```

---

# 7. Scene Graph Architecture

The entire portfolio exists inside a single scene graph.

```
World

├── Hero

├── About

├── Skills

├── Projects

├── Timeline

├── Achievements

├── Contact

├── Environment

├── Lighting

├── Particles
```

Each section owns its own objects and animations.

Rules:

- No circular dependencies
- Independent modules
- Stable hierarchy
- Shared world environment

---

# 8. React Three Fiber Integration

React Three Fiber provides declarative rendering.

Example hierarchy:

```
<Canvas>

↓

<Experience>

↓

<World>

↓

<Hero />

<Projects />

<Contact />
```

Responsibilities:

- Scene composition
- Object lifecycle
- Resource cleanup
- React integration
- Event propagation

Business logic should never be embedded directly into mesh components.

---

# 9. Camera System

The camera acts as the user's viewpoint.

Responsibilities:

- Scroll progression
- Position interpolation
- Target tracking
- Mouse parallax
- Smooth transitions

Pipeline:

```
Scroll

↓

Camera Controller

↓

Interpolation

↓

Projection Matrix

↓

Render
```

The camera should never teleport between sections.

---

# 10. Lighting System

Lighting defines the mood and readability of the world.

Lighting types:

- Ambient Light
- Directional Light
- Environment Light
- Point Lights
- Spot Lights (minimal)

Recommended configuration:

```
Environment HDRI

↓

Ambient

↓

Directional

↓

Accent Lights

↓

Bloom
```

Lighting changes gradually during navigation.

---

# 11. Material System

Supported materials include:

- Glass
- Metal
- Matte
- Emissive
- Transparent
- Holographic

Guidelines:

- Prefer physically based rendering (PBR)
- Share material instances
- Reuse textures
- Minimize transparency

Material lifecycle:

```
Definition

↓

Texture Assignment

↓

GPU Upload

↓

Rendering
```

---

# 12. Shader Architecture

Custom shaders should be used only when standard materials cannot achieve the desired effect.

Potential shader use cases:

- Holograms
- Gradient lighting
- Animated backgrounds
- Energy effects
- Distortion
- Glow

Pipeline:

```
Shader Source

↓

Compilation

↓

Uniform Binding

↓

GPU Execution
```

Shaders should remain modular and reusable.

---

# 13. Animation Architecture

Animation is driven primarily by GSAP.

Categories:

- Scroll animations
- Camera transitions
- Object movement
- Hover interactions
- Entrance animations
- Idle animations

Animation flow:

```
Scroll

↓

GSAP Timeline

↓

Object Transform

↓

Render
```

Animations should never block rendering.

---

# 14. Interaction System

Supported interactions:

- Hover
- Click
- Pointer movement
- Scroll
- Keyboard shortcuts

Interaction pipeline:

```
Pointer Event

↓

Raycaster

↓

Intersection

↓

Interaction Manager

↓

Animation

↓

State Update
```

Raycasting should only occur for interactive objects.

---

# 15. Post Processing Pipeline

Rendering sequence:

```
Scene

↓

Bloom

↓

Ambient Occlusion

↓

Tone Mapping

↓

Color Correction

↓

FXAA

↓

Final Frame
```

Optional effects:

- Vignette
- Subtle Noise

Avoid:

- Heavy motion blur
- Excessive chromatic aberration
- Overly aggressive bloom

---

# 16. Performance Optimization

### CPU

- Memoize components
- Stable references
- Efficient state updates
- Lazy loading

### GPU

- Instancing
- Shared geometries
- Shared materials
- Frustum culling
- Compressed textures

### Rendering

- Dynamic imports
- Suspense
- Asset streaming
- Efficient shaders

Target metrics:

- 60 FPS desktop
- 30–60 FPS mobile

---

# 17. Memory Management

Resources requiring disposal:

- Geometries
- Materials
- Textures
- Render targets
- Framebuffers
- Event listeners

Lifecycle:

```
Load

↓

GPU Upload

↓

Runtime

↓

Dispose
```

Memory leaks are unacceptable.

---

# 18. Debugging & Development Tools

Development mode should include:

- FPS Monitor
- Draw Call Counter
- Camera Helper
- Light Helpers
- Grid Helper
- Wireframe Mode
- Bounding Boxes
- Scene Graph Inspector

These tools must be excluded from production builds.

---

# 19. Best Practices

Follow these engineering principles:

- One responsibility per component
- Reuse geometries
- Reuse materials
- Keep shaders modular
- Separate UI and rendering logic
- Avoid deep scene hierarchies
- Dispose resources correctly
- Profile performance regularly
- Prefer composition over inheritance
- Build reusable abstractions

---

# 20. Future Expansion

The architecture should support future enhancements without significant redesign.

Potential additions:

- WebGPU renderer
- WebXR support
- GPU particle systems
- Dynamic reflections
- Volumetric lighting
- AI-driven scene generation
- Procedural environments
- Real-time collaboration

The system should remain modular so new rendering technologies can be integrated with minimal impact on the existing architecture.

---

# Three.js Architecture Summary

The Three.js layer serves as the rendering engine of the portfolio, transforming application state into a visually rich, interactive 3D environment.

By combining React Three Fiber, Three.js, GSAP, and modern WebGL techniques, the architecture delivers a scalable, maintainable, and high-performance foundation capable of supporting immersive user experiences while remaining adaptable to future technologies such as WebGPU and WebXR.

---

# End of Document

Version: 1.0

Status: Approved

Next Document:
11_COMPONENT_ARCHITECTURE.md
