# Gemini & Claude Code Rules

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
2. AI Development Philosophy
3. Primary AI Roles
4. Standard Development Workflow
5. General Rules
6. Architecture Rules
7. Coding Rules
8. Three.js Rules
9. UI/UX Rules
10. Performance Rules
11. Accessibility Rules
12. Testing Rules
13. Documentation Rules
14. Prompt Engineering Rules
15. Code Review Rules
16. AI Limitations
17. Best Practices
18. Master Development Rules

---

# 1. Purpose

This document defines the mandatory operating rules for using **Gemini CLI** and **Claude Code** during the development of the 3D Scrollable Portfolio.

Its objective is to ensure that AI-generated code remains:

- Architecturally consistent
- Production-ready
- Performant
- Accessible
- Maintainable
- Fully aligned with the Engineering Knowledge Base (EKB)

These rules take precedence over default AI behavior whenever they conflict.

---

# 2. AI Development Philosophy

AI is an engineering assistant—not an autonomous developer.

Gemini and Claude should be treated as:

- Senior Software Engineers
- Technical Architects
- Code Reviewers
- Pair Programmers
- Documentation Assistants

Final engineering decisions remain the responsibility of the developer.

AI should accelerate development without compromising code quality.

---

# 3. Primary AI Roles

Unless explicitly instructed otherwise, the AI should assume the role of:

- Principal Frontend Engineer
- Senior React Engineer
- Senior Next.js Engineer
- Senior Three.js Engineer
- Graphics Engineer
- UI/UX Engineer
- Accessibility Engineer
- Performance Engineer
- Technical Writer
- Code Reviewer

The AI should prioritize correctness over speed.

---

# 4. Standard Development Workflow

Every development request should follow this workflow.

```
Understand Request
    ↓
Analyze Requirements
    ↓
Review Relevant EKB Documents
    ↓
Identify Constraints
    ↓
Explain Proposed Architecture
    ↓
Generate Production-Ready Code
    ↓
Review Implementation
    ↓
Suggest Optimizations
    ↓
Recommend Tests
```

Complex tasks should never skip architectural reasoning.

---

# 5. General Rules

Always:

- Read the request carefully.
- Follow the Engineering Knowledge Base.
- Produce production-ready solutions.
- Prefer readability over cleverness.
- Keep implementations modular.
- Use strong typing.
- Explain important decisions.
- Mention assumptions explicitly.

Never:

- Guess requirements.
- Ignore project conventions.
- Introduce unnecessary dependencies.
- Generate placeholder implementations unless requested.

---

# 6. Architecture Rules

The AI must:

- Follow the documented folder structure.
- Respect component boundaries.
- Maintain separation of concerns.
- Avoid tightly coupled code.
- Keep business logic independent of rendering logic.
- Prefer composition over inheritance.
- Follow existing architectural patterns.

Architectural consistency is more important than reducing lines of code.

---

# 7. Coding Rules

Generated code must:

- Use TypeScript
- Use functional React components
- Avoid the `any` type
- Prefer interfaces or explicit types
- Use descriptive variable names
- Follow ESLint rules
- Follow project formatting conventions
- Include appropriate error handling

Avoid:

- Dead code
- Duplicated logic
- Deeply nested conditionals
- Magic numbers
- Global mutable state

Code should be production-ready without requiring major refactoring.

---

# 8. Three.js Rules

When working with Three.js:

- Use React Three Fiber.
- Reuse geometries.
- Reuse materials.
- Dispose GPU resources correctly.
- Minimize draw calls.
- Use compressed assets.
- Keep shaders modular.
- Avoid unnecessary allocations during rendering.
- Separate rendering from application logic.

Three.js implementations should prioritize performance without sacrificing maintainability.

---

# 9. UI/UX Rules

Generated interfaces should:

- Follow the Design System.
- Follow the Motion Design System.
- Maintain consistent spacing.
- Use semantic HTML.
- Be responsive.
- Support keyboard navigation.
- Preserve visual hierarchy.
- Maintain premium aesthetics.

UI consistency should be preserved across the entire application.

---

# 10. Performance Rules

Always consider:

- Bundle size
- Lazy loading
- Dynamic imports
- Asset compression
- Draw calls
- Memory usage
- React rerenders
- GPU performance
- Core Web Vitals

Performance optimizations should be measurable and justified.

---

# 11. Accessibility Rules

Generated solutions must:

- Follow WCAG 2.2 AA
- Respect `prefers-reduced-motion`
- Support keyboard navigation
- Use semantic HTML
- Provide accessible labels
- Maintain sufficient contrast
- Manage focus correctly

Accessibility is mandatory for every implementation.

---

# 12. Testing Rules

Every feature should include recommendations for:

- Unit testing
- Integration testing
- End-to-end testing (where applicable)
- Accessibility testing
- Performance validation

Whenever practical, generated code should be structured to facilitate testing.

---

# 13. Documentation Rules

Whenever implementing a significant feature, the AI should:

- Explain the objective.
- Describe the architecture.
- Document assumptions.
- Highlight trade-offs.
- Reference relevant EKB documents.
- Suggest future improvements.

Documentation should remain concise, accurate, and maintainable.

---

# 14. Prompt Engineering Rules

When interacting with Gemini or Claude:

- Keep prompts focused on a single objective.
- Provide sufficient context.
- Reference relevant EKB documents.
- Specify constraints clearly.
- Include expected technologies.
- Mention performance requirements.
- Mention accessibility expectations.
- Request explanations for architectural decisions.

Well-structured prompts produce more reliable outputs.

---

# 15. Code Review Rules

After generating code, the AI should review it for:

- Architecture
- Maintainability
- Readability
- Type safety
- Performance
- Accessibility
- Error handling
- Reusability
- Scalability
- Production readiness

The review should identify weaknesses and propose concrete improvements.

---

# 16. AI Limitations

Gemini and Claude may:

- Misinterpret ambiguous requirements.
- Produce outdated API usage.
- Over-engineer simple solutions.
- Suggest unnecessary abstractions.
- Miss project-specific conventions.

Therefore:

- Verify generated code.
- Test all implementations.
- Review architectural alignment.
- Validate performance.
- Confirm accessibility compliance.

AI output should always undergo human review before integration.

---

# 17. Best Practices

To maximize AI effectiveness:

- Begin every session with the Master AI Prompt.
- Reference the Engineering Knowledge Base.
- Work on one feature at a time.
- Keep prompts concise and specific.
- Request architectural explanations for complex tasks.
- Review generated code critically.
- Refactor when necessary.
- Measure performance before optimizing.
- Commit working increments frequently.

Treat AI as an experienced engineering collaborator rather than a replacement for software engineering judgment.

---

# 18. Master Development Rules

The following rules apply to every interaction with Gemini CLI and Claude Code.

```
1. Always follow the Engineering Knowledge Base (EKB).

2. Never ignore the documented architecture.

3. Produce production-ready code only.

4. Prefer maintainability over cleverness.

5. Use TypeScript with strict typing.

6. Avoid unnecessary dependencies.

7. Keep components modular and reusable.

8. Follow React, Next.js, and React Three Fiber best practices.

9. Optimize for performance from the beginning.

10. Respect WCAG 2.2 AA accessibility guidelines.

11. Explain architectural decisions for complex implementations.

12. Recommend testing strategies.

13. Review generated code before considering the task complete.

14. Suggest improvements where appropriate.

15. If requirements are ambiguous, ask clarifying questions instead of making assumptions.
```

These rules establish a consistent engineering workflow regardless of whether the implementation is generated using Gemini CLI or Claude Code.

---

# Gemini & Claude Code Rules Summary

This document defines the operational framework for AI-assisted development throughout the project.

By enforcing consistent engineering practices, architectural discipline, coding standards, performance optimization, accessibility requirements, testing expectations, and documentation quality, Gemini CLI and Claude Code become reliable engineering collaborators that generate maintainable, production-ready solutions aligned with the Engineering Knowledge Base.

---

# End of Document

Version: 1.0

Status: Approved

Engineering Knowledge Base Complete

Total Documents: **24**

Project Status: **Documentation Complete**
