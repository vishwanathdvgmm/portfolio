import type { Project } from "../types";

export const projectsData: Project[] = [
  {
    id: "ferrite",
    title: "Ferrite Programming Language",
    subtitle: "ML-oriented systems programming language in Rust",
    description:
      "Founded and lead development of Ferrite, comprising 3K+ lines of code, 10+ modules, and a 5-stage compiler pipeline covering lexical analysis, parsing, AST generation, semantic analysis, and execution.",
    problem:
      "Need for a modular, memory-safe systems programming language that is extensible and supports structured diagnostics natively.",
    solution:
      "Architected a scalable compiler in Rust spanning 10+ modules with 30+ unit test files, supporting extensibility and memory safety.",
    architecture: [
      "Lexical Analysis & Parsing",
      "AST Generation & Semantic Analysis",
      "Memory Safe Execution Pipeline",
    ],
    techStack: ["Rust", "Compiler Design"],
    githubUrl: "https://github.com/vishwanathdvgmm/ferrite",
    challenges: [
      "Ensuring modularity across the 5-stage compiler pipeline.",
      "Implementing robust semantic versioning and release planning.",
    ],
    lessonsLearned: [
      "Comprehensive unit testing (30+ files) validates compiler components and improves development reliability.",
    ],
  },
  {
    id: "pyvenvmerge",
    title: "Open-Source Python Packages",
    subtitle: "Pyvenvmerge & Symjoy on PyPI",
    description:
      "Published production-ready Python packages. Pyvenvmerge automates the consolidation of multiple virtual environments, reducing setup time by over 90%. Symjoy provides a modular API for Unicode symbols and special characters.",
    problem:
      "Managing conflicting dependency pins across multi-project workflows and safely merging Python environments.",
    solution:
      "Introduced PEP 508-compliant dependency analysis and conflict detection, enabling safe merging while identifying version incompatibilities before execution.",
    architecture: [
      "PEP 508 Dependency Analysis",
      "Automated Testing Pipeline",
      "Semantic Versioning Distribution",
    ],
    techStack: ["Python", "PyPI", "PEP 508", "Dependency Resolution"],
    githubUrl: "https://github.com/vishwanathdvgmm/pyvenvmerge",
    challenges: ["Handling edge cases in PEP 508 dependency conflicts."],
    lessonsLearned: [
      "Modular architectures and automated testing are crucial for reliable PyPI distribution.",
    ],
  },
  {
    id: "digital-eval",
    title: "Digital Evaluation System",
    subtitle: "Blockchain-Based AI-Enabled Platform",
    description:
      "Developed a blockchain-integrated digital evaluation platform to provide secure, transparent, and tamper-evident management of academic assessment records.",
    problem:
      "Lack of verifiable, tamper-evident systems for managing academic evaluation records and submissions.",
    solution:
      "Engineered a Python backend for automated evaluation and leveraged MongoDB as off-chain datastore, incorporating SHA-256 hash generation with blockchain anchoring.",
    architecture: [
      "Blockchain Anchoring with SHA-256",
      "Python Automated Evaluation Engine",
      "React Centralized Dashboard",
    ],
    techStack: ["Python", "Go", "MongoDB", "React", "Blockchain"],
    githubUrl: "https://github.com/vishwanathdvgmm/digital-eval-system",
    challenges: [
      "Synchronizing off-chain data (MongoDB) with on-chain cryptographic hashes.",
    ],
    lessonsLearned: [
      "SHA-256 anchoring effectively ensures data integrity and detects record tampering.",
    ],
  },
];
