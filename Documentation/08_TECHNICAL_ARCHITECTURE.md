# Technical Architecture

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
2. Architecture Vision
3. Engineering Principles
4. Technology Stack
5. High-Level Architecture
6. Application Layers
7. Directory Structure
8. Application Flow
9. Rendering Pipeline
10. Scene Architecture
11. Camera Architecture
12. State Management
13. Asset Pipeline
14. Data Layer
15. Component Architecture
16. Performance Architecture
17. Animation Architecture
18. Event System
19. Error Handling
20. Logging Strategy
21. Build Pipeline
22. Deployment Architecture
23. Security
24. Scalability
25. Future Architecture

---

# 1. Introduction

This document defines the complete engineering architecture of the portfolio.

The architecture prioritizes:

- Scalability
- Maintainability
- Performance
- Modularity
- Testability
- Readability

The codebase should resemble a production SaaS application rather than a demo
project.

---

# 2. Architecture Vision

The portfolio should be built as a layered application where every subsystem
has a single responsibility.

Business logic, rendering, animation, and presentation should remain completely
decoupled.

---

## Architecture Goals

- Highly modular
- Feature-driven
- Easy to extend
- Low coupling
- High cohesion
- Strict TypeScript
- Reusable components
- Predictable state

---

# 3. Engineering Principles

## Single Responsibility Principle

Every file should have one clear responsibility.

---

## Composition over Inheritance

Components should be composed.

Never build large inheritance trees.

---

## Separation of Concerns

Keep separate:

- UI
- Animation
- Rendering
- State
- Utilities
- Data

---

## Declarative Programming

React components remain declarative.

Imperative code belongs only inside Three.js controllers or animation systems.

---

## Performance First

Every architectural decision should consider runtime cost.

---

# 4. Technology Stack

## Framework

Next.js (App Router)

---

## Language

TypeScript

Strict Mode Enabled

---

## UI

React 19+

Tailwind CSS

shadcn/ui (selective use)

Lucide Icons

---

## 3D

Three.js

React Three Fiber

@react-three/drei

@react-three/postprocessing

---

## Animation

GSAP

Framer Motion

React Spring (optional)

---

## State

Zustand

React Context (limited)

---

## Validation

Zod

---

## Forms

React Hook Form

---

## Asset Optimization

Draco

Meshopt

KTX2

GLTF

---

## Deployment

Vercel

---

# 5. High-Level Architecture

```
Browser
        │
        ▼
Next.js Application
        │
        ▼
Presentation Layer
        │
        ▼
Interaction Layer
        │
        ▼
Scene Layer
        │
        ▼
Rendering Layer
        │
        ▼
Three.js Engine
        │
        ▼
GPU
```

---

# 6. Application Layers

## Layer 1

Presentation

Responsibilities

UI

Typography

Buttons

Cards

Layout

Forms

Navigation

---

## Layer 2

Interaction

Handles

Mouse

Touch

Keyboard

Hover

Click

Scroll

---

## Layer 3

Application

Business logic

Routing

Configuration

Feature flags

---

## Layer 4

Scene

3D world

Camera

Lighting

Objects

Materials

---

## Layer 5

Rendering

Three.js

Shaders

GPU

Post Processing

---

# 7. Directory Structure

```
portfolio/

├── app/
│
├── assets/
│
├── components/
│   ├── common/
│   ├── hero/
│   ├── about/
│   ├── skills/
│   ├── projects/
│   ├── timeline/
│   ├── achievements/
│   ├── contact/
│   └── ui/
│
├── scene/
│   ├── camera/
│   ├── lights/
│   ├── environments/
│   ├── effects/
│   ├── controllers/
│   ├── shaders/
│   ├── objects/
│   └── physics/
│
├── hooks/
│
├── lib/
│
├── services/
│
├── store/
│
├── types/
│
├── config/
│
├── utils/
│
├── styles/
│
├── data/
│
├── public/
│
└── tests/
```

---

# 8. Application Flow

```
Browser
    ↓
Next.js
    ↓
Root Layout
    ↓
Providers
    ↓
Canvas
    ↓
World
    ↓
Scene Manager
    ↓
Current Scene
    ↓
Components
    ↓
Animations
    ↓
Rendering
```

---

# 9. Rendering Pipeline

```
Canvas
    ↓
Camera
    ↓
Lights
    ↓
Environment
    ↓
Objects
    ↓
Materials
    ↓
Shaders
    ↓
Post Processing
    ↓
Frame Render
    ↓
Display
```

---

Render Order

Background

↓

Environment

↓

Scene Objects

↓

Particles

↓

UI Objects

↓

Post Processing

---

# 10. Scene Architecture

Each scene is isolated.

```
HeroScene

AboutScene

SkillsScene

ProjectsScene

TimelineScene

AchievementsScene

ContactScene
```

Each scene contains

```
Scene

├── Objects
├── Lights
├── Animations
├── UI Overlay
└── Controller
```

Scenes should never directly manipulate one another.

---

# 11. Camera Architecture

```
Camera Controller

│
├── Scroll Controller
├── Mouse Controller
├── Transition Controller
├── Focus Controller
└── Debug Controller
```

Responsibilities

Camera Position

Rotation

Zoom

Interpolation

Collision

Target

---

# 12. State Management

Use Zustand.

Stores

```
UIStore

SceneStore

CameraStore

ProjectStore

SettingsStore

AnimationStore
```

Rules

Global state only.

Local UI state remains inside components.

---

# 13. Asset Pipeline

Asset Types

```
Models

Textures

HDRIs

Videos

Fonts

Icons

Audio
```

Pipeline

```
Source
    ↓
Optimization
    ↓
Compression
    ↓
Versioning
    ↓
Caching
    ↓
Lazy Loading
    ↓
Rendering
```

Models

GLB

Draco

Meshopt

---

Textures

KTX2

WebP

AVIF

---

# 14. Data Layer

Portfolio content should never be hardcoded.

```
data/

about.ts

skills.ts

projects.ts

timeline.ts

achievements.ts

socials.ts
```

Every page consumes structured data.

Future CMS migration becomes trivial.

---

# 15. Component Architecture

```
UI
    ↓
Feature
    ↓
Composite
    ↓
Page
    ↓
Scene
```

Example

```
Button
    ↓
ProjectCard
    ↓
ProjectsGrid
    ↓
ProjectsSection
    ↓
ProjectsScene
```

Rules

Reusable

Pure

Composable

Typed

Accessible

---

# 16. Performance Architecture

Strategies

Lazy Loading

Dynamic Imports

Code Splitting

Memoization

Suspense

LOD

Instancing

Frustum Culling

Texture Compression

Shader Optimization

---

Target

60 FPS

---

Avoid

Large rerenders

Expensive React trees

Frequent allocations

Heavy effects

---

# 17. Animation Architecture

Animation Layers

```
Global
    ↓
Scene
    ↓
Component
    ↓
Interaction
```

GSAP

Camera

Large transitions

---

Framer Motion

UI

Buttons

Cards

Modals

---

React Three Fiber

Object animations

Frame updates

---

# 18. Event System

```
Mouse
    ↓
Event Manager
    ↓
Interaction Controller
    ↓
Scene Controller
    ↓
Animation
    ↓
Render
```

Supported Events

Hover

Click

Touch

Scroll

Resize

Keyboard

Focus

Blur

Visibility Change

---

# 19. Error Handling

Global Error Boundary

Required

---

Scene Failure

Fallback Scene

---

Model Loading

Fallback Model

---

Texture Loading

Placeholder

---

WebGL Failure

Static Portfolio

---

Missing Data

Graceful Empty State

---

# 20. Logging Strategy

Development

Console

Debug UI

Performance Overlay

---

Production

No debug logs

Only errors

Analytics events

---

Optional

Sentry

---

# 21. Build Pipeline

```
Developer
    ↓
Git
    ↓
GitHub
    ↓
CI
    ↓
Type Check
    ↓
Lint
    ↓
Unit Tests
    ↓
Build
    ↓
Optimization
    ↓
Deploy Preview
    ↓
Production
```

---

Required Checks

TypeScript

ESLint

Prettier

Build

Lighthouse

---

# 22. Deployment Architecture

```
GitHub
    ↓
Vercel
    ↓
CDN
    ↓
Edge Network
    ↓
User
```

Features

Automatic Deployments

Preview Deployments

Image Optimization

Edge Caching

Compression

---

# 23. Security

HTTPS

Required

---

Content Security Policy

Enabled

---

Headers

Strict

---

Dependencies

Regular updates

---

Secrets

Environment Variables

---

No client-side secrets

---

# 24. Scalability

Architecture should support

Unlimited projects

Unlimited skills

Unlimited timeline entries

Multiple themes

Localization

CMS

Blog

Authentication

Analytics

AI Assistant

Without major restructuring.

---

# 25. Future Architecture

Future Modules

```
AI Assistant

Voice Interface

CMS

Admin Dashboard

Blog

Analytics Dashboard

GitHub Integration

Live Project Metrics

Newsletter

Open API
```

Each future module should plug into the existing architecture without modifying
core systems.

---

# Architecture Principles Summary

Every architectural decision must satisfy:

✓ Modular

✓ Reusable

✓ Performant

✓ Testable

✓ Typed

✓ Scalable

✓ Accessible

✓ Maintainable

✓ Production Ready

✓ AI-Friendly

---

# Architecture Flow Summary

```
Next.js
    ↓
Providers
    ↓
Canvas
    ↓
World
    ↓
Scene Manager
    ↓
Scene
    ↓
Objects
    ↓
Animation
    ↓
Render
    ↓
GPU
    ↓
Display
```

The portfolio should feel like a professionally engineered interactive
application—not a collection of React components.

Every system should have a clear responsibility, clean boundaries, and minimal
dependencies.

---

# End of Document

Version: 1.0

Status: Approved
