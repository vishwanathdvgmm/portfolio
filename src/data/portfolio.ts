/**
 * Central portfolio data — generated from Vishwanath M M's resume.
 * Every fact on the site comes from this file. Update it here and the whole site follows.
 * Nothing here should be added unless it appears on the resume.
 */

export type Palette = { from: string; via: string; to: string; accent: string };

const base = import.meta.env.BASE_URL;

export const profile = {
  fullName: 'Vishwanath M M',
  displayName: 'Vishwanath M M',
  firstName: 'VISHWANATH',
  seriesTag: 'THE SERIES',
  /** Fictional studio card shown at the very start of the opening sequence. */
  originalLabel: 'A VISHWANATH ORIGINAL',
  role: 'AI/ML & Systems Software Developer',
  tagline: ['AI / ML', 'Systems Programming', 'Software Engineering'],
  intro:
    'AI and Machine Learning undergraduate with hands-on experience in software engineering, backend development, systems programming, automation testing, and open-source software. Founder and Lead Developer of Ferrite, a Rust-based systems programming language, and maintainer of Python packages published on PyPI.',
  location: 'Davangere, Karnataka, India',
  email: 'vishwanathdvgmm@gmail.com',
  links: {
    linkedin: 'https://linkedin.com/in/vishwanathmm',
    github: 'https://github.com/vishwanathdvgmm',
  },
  resumePdf: `${base}assets/Vishwanath_M_M_Resume.pdf`,
  portrait: {
    src: `${base}assets/portrait-720.webp`,
    srcSet: `${base}assets/portrait-420.webp 420w, ${base}assets/portrait-720.webp 720w, ${base}assets/portrait-1100.webp 1100w`,
    alt: 'Portrait of Vishwanath M M',
  },
  interests: ['Compiler Design', 'Systems Programming', 'Machine Learning'],
};

export const education = [
  {
    school: 'Bapuji Institute of Engineering and Technology',
    place: 'Davangere',
    degree: 'Bachelor of Engineering — Artificial Intelligence & Machine Learning',
    period: '2023 – Present',
    score: 'CGPA 7.94 / 10.0',
  },
  {
    school: 'Karnataka State Board',
    place: 'Karnataka',
    degree: 'Class 12 (Pre-University)',
    period: '2023',
    score: '85.16%',
  },
  {
    school: 'Central Board of Secondary Education',
    place: 'India',
    degree: 'Class 10 (SSLC)',
    period: '2021',
    score: '73.33%',
  },
];

export const experience = [
  {
    company: 'Ferrite Programming Language',
    role: 'Founder & Lead Developer',
    place: 'Open Source',
    period: '2025 – Present',
    points: [
      'Architected and developed Ferrite, a statically typed, ahead-of-time compiled systems programming language written in Rust and designed for machine-learning workflows and tensor manipulation.',
      'Built a five-stage compiler pipeline covering lexing, parsing, semantic analysis, intermediate-representation generation, and native compilation backed by LLVM.',
      'Developed a developer ecosystem including a VS Code extension, standard library, browser-based JavaScript playground, and GitHub Actions CI/CD.',
    ],
  },
];

export type Metric = { value: string; label: string };

export type Project = {
  id: string;
  title: string;
  year: string;
  genre: string;
  logline: string;
  stack: string[];
  build: string[];
  features: string[];
  metrics: Metric[];
  /** Omit when the repository isn't public — the GitHub button is hidden instead of linking to a 404. */
  github?: string;
  palette: Palette;
  motif: 'shield' | 'flow' | 'tenants';
};

export const projects: Project[] = [
  {
    id: 'ferrite',
    title: 'Ferrite Programming Language',
    year: '2025–Present',
    genre: 'Systems Programming • Compiler Design',
    logline: 'A statically typed, ahead-of-time compiled systems programming language written in Rust, designed for machine-learning workflows and tensor manipulation.',
    stack: ['Rust', 'LLVM', 'Compiler Design', 'GitHub Actions'],
    build: [
      'Built a five-stage compiler pipeline covering lexing, parsing, semantic analysis, intermediate-representation generation, and native compilation backed by LLVM.',
      'Implemented a recursive descent parser, multi-pass type checker, expression-oriented architecture, scoped control flow, and native dynamic collections with scope-based RAII memory management.',
      'Created a VS Code extension, standard library, browser-based JavaScript playground, and automated testing and documentation deployment workflows.',
    ],
    features: [
      'Five-stage compiler pipeline',
      'Recursive descent parser and multi-pass type checker',
      'LLVM-backed native compilation',
      'Native List<T> and Map<K, V> collections',
      'VS Code extension and browser-based playground',
      'GitHub Actions CI/CD and automated documentation deployment',
    ],
    metrics: [
      { value: '5', label: 'compiler stages' },
      { value: 'Rust', label: 'implementation language' },
      { value: 'LLVM', label: 'native compilation backend' },
    ],
    github: 'https://github.com/vishwanathdvgmm/ferrite',
    palette: { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' },
    motif: 'flow',
  },
  {
    id: 'pyvenvmerge-symjoy',
    title: 'Open-Source Python Packages',
    year: '2024–2026',
    genre: 'Python • Developer Tools • PyPI',
    logline: 'Two published Python packages focused on virtual-environment management and searchable Unicode symbols.',
    stack: ['Python', 'PyPI', 'PEP 508', 'CLI Development', 'Automated Testing'],
    build: [
      'Built Pyvenvmerge, a CLI utility for merging Python virtual environments through dependency reconstruction, PEP 508 parsing, conflict resolution, dependency analysis, and semantic validation.',
      'Added dry-run diagnostics, JSON reporting, lockfile export, deterministic rebuilding, automated testing, and semantic versioning to Pyvenvmerge.',
      'Developed Symjoy, a JSON-driven Unicode-symbol library with indexed search, aliases, token-based retrieval, deterministic ranking, multi-token queries, semantic grouping, and category APIs.',
    ],
    features: [
      'Python virtual-environment merging',
      'Dependency conflict analysis and validation',
      'Dry-run diagnostics and JSON reporting',
      'Unicode symbols, emojis, arrows, and mathematical operators',
      'Indexed search with aliases and token-based retrieval',
      'Automated tests and GitHub Actions CI',
    ],
    metrics: [
      { value: '2', label: 'published Python packages' },
      { value: 'PyPI', label: 'package distribution' },
      { value: 'v1.0.0', label: 'Pyvenvmerge stable release' },
    ],
    github: 'https://github.com/vishwanathdvgmm/pyvenvmerge',
    palette: { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' },
    motif: 'tenants',
  },
  {
    id: 'software-intelligence-platform',
    title: 'Software Intelligence Platform',
    year: '2026–Present',
    genre: 'Research • Adaptive RAG • Software Intelligence',
    logline: 'A research project exploring adaptive retrieval and version-aware software knowledge systems.',
    stack: ['Python', 'RAG', 'BM25S', 'Qdrant', 'PostgreSQL', 'FastAPI', 'React', 'TypeScript', 'Tauri'],
    build: [
      'Designing an adaptive RAG architecture that analyzes query intent and complexity to select retrieval strategies, combining semantic search, BM25S lexical retrieval, and version-aware metadata filtering.',
      'Researching Reciprocal Rank Fusion, cross-encoder reranking, context optimization, evidence gating, and bounded retrieval retry and reformulation.',
      'Architecting software-specific Experts from documentation, release notes, GitHub, community knowledge, and other software sources, with evaluation against traditional RAG baselines.',
    ],
    features: [
      'Intent- and complexity-aware retrieval strategy selection',
      'Hybrid semantic and lexical search',
      'Version-aware metadata filtering',
      'RRF and cross-encoder reranking research',
      'Grounded generation and retrieval evaluation',
    ],
    metrics: [
      { value: 'Hybrid', label: 'retrieval approach' },
      { value: 'Version-aware', label: 'software knowledge' },
      { value: 'RAG', label: 'research focus' },
    ],
    palette: { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' },
    motif: 'flow',
  },
  {
    id: 'digital-evaluation-system',
    title: 'Blockchain-Based AI-Enabled Digital Evaluation System',
    year: '2025',
    genre: 'Academic Project • AI • Blockchain',
    logline: 'A microservices-based digital evaluation platform combining AI-assisted grading workflows with tamper-evident records.',
    stack: ['Go', 'Python', 'FastAPI', 'PostgreSQL', 'React', 'BoltDB', 'IPFS', 'Google GenAI'],
    build: [
      'Architected a microservices-based evaluation platform with a Go core and Python AI microservice for end-to-end grading workflows.',
      'Integrated OpenCV, PyMuPDF, and Google GenAI for script metadata extraction and grading-accuracy validation.',
      'Implemented a SHA-256-anchored blockchain transaction chain using BoltDB, PostgreSQL-backed relational records, IPFS storage, and a role-based React interface.',
    ],
    features: [
      'AI-assisted script metadata extraction',
      'Tamper-evident transaction records using SHA-256 anchoring',
      'PostgreSQL relational data storage',
      'IPFS storage for evaluation PDF artifacts',
      'Role-based access control for five user personas',
    ],
    metrics: [
      { value: '5', label: 'user personas supported' },
      { value: 'SHA-256', label: 'transaction anchoring' },
      { value: 'IPFS', label: 'decentralized artifact storage' },
    ],
    github: 'https://github.com/vishwanathdvgmm/digital-eval-system',
    palette: { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' },
    motif: 'shield',
  },
];

export type Achievement = {
  id: string;
  title: string;
  org: string;
  detail: string;
  laurel: string;
  link?: string;
};

export const achievements: Achievement[] = [
  {
    id: 'ferrite',
    title: 'Founder & Lead Developer',
    org: 'Ferrite Programming Language',
    detail: 'Created a Rust-based, statically typed systems programming language with an LLVM-backed compiler pipeline and developer tooling.',
    laurel: 'Systems Programming',
    link: 'https://github.com/vishwanathdvgmm/ferrite',
  },
  {
    id: 'open-source',
    title: 'Published Python Packages',
    org: 'PyPI',
    detail: 'Developed and published Pyvenvmerge and Symjoy with automated testing, semantic versioning, and package distribution.',
    laurel: 'Open Source',
  },
  {
    id: 'software-intelligence',
    title: 'Software Intelligence Platform',
    org: 'Research Project',
    detail: 'Designing adaptive retrieval and version-aware software knowledge systems using hybrid search and reranking research.',
    laurel: 'RAG Research',
  },
  {
    id: 'digital-evaluation',
    title: 'AI-Enabled Digital Evaluation System',
    org: 'Academic Project',
    detail: 'Built a microservices-based evaluation platform combining AI-assisted document processing, blockchain anchoring, and IPFS.',
    laurel: 'Academic Project',
    link: 'https://github.com/vishwanathdvgmm/digital-eval-system',
  },
];

export type Certification = { issuer: string; name: string; link: string };

export const certifications: Certification[] = [
  { issuer: 'The Hashgraph Association', name: 'Hashgraph Developer Course', link: '' },
  { issuer: 'MongoDB', name: 'Building AI-Powered Search with MongoDB Vector Search', link: '' },
  { issuer: 'Acmegrade', name: 'Artificial Intelligence Training', link: '' },
];

export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };

export const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    title: 'Programming Languages',
    subtitle: 'Building across application and systems layers',
    skills: [
      { name: 'Python', mono: 'Py' },
      { name: 'Rust', mono: 'Rs' },
      { name: 'SQL', mono: 'Sq' },
      { name: 'Go', mono: 'Go' },
    ],
  },
  {
    id: 'testing',
    title: 'Software Testing',
    subtitle: 'Automation and validation',
    skills: [
      { name: 'Selenium WebDriver', mono: 'Se' },
      { name: 'Test Automation', mono: 'Ta' },
      { name: 'Automated Test Scripts', mono: 'At' },
      { name: 'API Testing', mono: 'Ap' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend & APIs',
    subtitle: 'Services and interfaces',
    skills: [
      { name: 'REST APIs', mono: 'Ap' },
      { name: 'Backend Development', mono: 'Be' },
      { name: 'FastAPI', mono: 'Fa' },
    ],
  },
  {
    id: 'databases',
    title: 'Databases',
    subtitle: 'Structured and document data',
    skills: [
      { name: 'PostgreSQL', mono: 'Pg' },
      { name: 'MongoDB', mono: 'Mg' },
      { name: 'SQL', mono: 'Sq' },
      { name: 'Qdrant', mono: 'Qd' },
    ],
  },
  {
    id: 'systems',
    title: 'Systems & Compilers',
    subtitle: 'Language tooling and runtime foundations',
    skills: [
      { name: 'Compiler Design', mono: 'Cd' },
      { name: 'Lexer / Parser', mono: 'Lp' },
      { name: 'LLVM', mono: 'Ll' },
      { name: 'CLI Tooling', mono: 'Cl' },
      { name: 'Systems Programming', mono: 'Sp' },
    ],
  },
  {
    id: 'ai',
    title: 'AI / ML',
    subtitle: 'Retrieval, language models and intelligence',
    skills: [
      { name: 'Machine Learning', mono: 'Ml' },
      { name: 'Natural Language Processing', mono: 'Np' },
      { name: 'LLM Integration', mono: 'Ll' },
      { name: 'RAG', mono: 'Rg' },
    ],
  },
  {
    id: 'web-devops',
    title: 'Web & DevOps',
    subtitle: 'Developer workflows and delivery',
    skills: [
      { name: 'HTML', mono: 'Ht' },
      { name: 'CSS', mono: 'Cs' },
      { name: 'React', mono: 'Re' },
      { name: 'Git / GitHub', mono: 'Gt' },
      { name: 'Docker', mono: 'Dk' },
      { name: 'Linux', mono: 'Ln' },
      { name: 'PyPI', mono: 'Py' },
    ],
  },
];

/**
 * Factual cross-references shown when a skill card is hovered/tapped:
 * where the skill appears in the projects, certifications or achievements on the resume.
 */
export const skillEvidence: Record<string, string[]> = {
  Python: ['Pyvenvmerge', 'Symjoy', 'Software Intelligence Platform', 'Digital Evaluation System'],
  Rust: ['Ferrite Programming Language'],
  SQL: ['Digital Evaluation System', 'PostgreSQL'],
  Go: ['Blockchain-Based AI-Enabled Digital Evaluation System'],
  'Selenium WebDriver': ['Technical skills listed on resume'],
  'Test Automation': ['Pyvenvmerge', 'Symjoy', 'Ferrite CI/CD'],
  'Automated Test Scripts': ['Pyvenvmerge', 'Symjoy', 'Ferrite CI/CD'],
  'API Testing': ['REST APIs', 'Backend Development'],
  'REST APIs': ['Software Intelligence Platform', 'Digital Evaluation System'],
  'Backend Development': ['Software Intelligence Platform', 'Digital Evaluation System'],
  FastAPI: ['Software Intelligence Platform', 'Digital Evaluation System'],
  PostgreSQL: ['Software Intelligence Platform', 'Digital Evaluation System'],
  MongoDB: ['Building AI-Powered Search with MongoDB Vector Search'],
  Qdrant: ['Software Intelligence Platform'],
  'Compiler Design': ['Ferrite Programming Language'],
  'Lexer / Parser': ['Ferrite Programming Language'],
  LLVM: ['Ferrite Programming Language'],
  'CLI Tooling': ['Pyvenvmerge', 'Ferrite Programming Language'],
  'Systems Programming': ['Ferrite Programming Language'],
  'Machine Learning': ['B.E. Artificial Intelligence & Machine Learning', 'Software Intelligence Platform'],
  'Natural Language Processing': ['Professional Summary'],
  'LLM Integration': ['Digital Evaluation System', 'Software Intelligence Platform'],
  RAG: ['Software Intelligence Platform'],
  HTML: ['Technical skills listed on resume'],
  CSS: ['Technical skills listed on resume'],
  React: ['Software Intelligence Platform', 'Digital Evaluation System'],
  'Git / GitHub': ['Ferrite Programming Language', 'Pyvenvmerge', 'Symjoy'],
  Docker: ['Technical skills listed on resume'],
  Linux: ['Technical skills listed on resume'],
  PyPI: ['Pyvenvmerge', 'Symjoy'],
};

export type Episode = {
  code: string;
  title: string;
  description: string;
  tags: string[];
  runtime: string;
  palette: Palette;
};

export type Season = {
  number: number;
  title: string;
  period: string;
  synopsis: string;
  episodes: Episode[];
};

const crimson: Palette = { from: '#24060b', via: '#6e0d1d', to: '#09070a', accent: '#ff3d5a' };
const amber: Palette = { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' };
const ocean: Palette = { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' };
const violet: Palette = { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' };
const jade: Palette = { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' };

export const seasons: Season[] = [
  {
    number: 1,
    title: 'The Foundation',
    period: '2021 – 2023',
    synopsis: 'Secondary and pre-university education before beginning an engineering degree.',
    episodes: [
      {
        code: 'S01 E01',
        title: 'Class 10',
        description: 'Completed SSLC under the Central Board of Secondary Education with 73.33%.',
        tags: ['CBSE', 'SSLC'],
        runtime: '2021',
        palette: amber,
      },
      {
        code: 'S01 E02',
        title: 'Pre-University',
        description: 'Completed Class 12 under the Karnataka State Board with 85.16%.',
        tags: ['Karnataka State Board', 'Pre-University'],
        runtime: '2023',
        palette: ocean,
      },
    ],
  },
  {
    number: 2,
    title: 'AI & Machine Learning',
    period: '2023 – Present',
    synopsis: 'Pursuing a Bachelor of Engineering in Artificial Intelligence and Machine Learning at BIET, Davangere.',
    episodes: [
      {
        code: 'S02 E01',
        title: 'The Engineer',
        description: 'B.E. in Artificial Intelligence & Machine Learning at Bapuji Institute of Engineering and Technology, with a CGPA of 7.94/10.0.',
        tags: ['B.E.', 'AI & ML', 'CGPA 7.94'],
        runtime: '2023 – Present',
        palette: violet,
      },
      {
        code: 'S02 E02',
        title: 'The AI Researcher',
        description: 'Exploring adaptive retrieval, hybrid search, reranking, and software-specific knowledge systems through the Software Intelligence Platform research project.',
        tags: ['RAG', 'Hybrid Search', 'Software Intelligence'],
        runtime: '2026 – Present',
        palette: jade,
      },
    ],
  },
  {
    number: 3,
    title: 'Open-Source Engineering',
    period: '2024 – Present',
    synopsis: 'Building reusable developer tools and a systems programming language.',
    episodes: [
      {
        code: 'S03 E01',
        title: 'The Package Maintainer',
        description: 'Developed Pyvenvmerge and Symjoy, Python packages distributed through PyPI with automated testing and semantic versioning.',
        tags: ['Python', 'PyPI', 'Open Source'],
        runtime: '2024 – 2026',
        palette: amber,
      },
      {
        code: 'S03 E02',
        title: 'The Language Architect',
        description: 'Founded Ferrite, a statically typed, ahead-of-time compiled systems programming language written in Rust and backed by LLVM.',
        tags: ['Rust', 'Compiler Design', 'LLVM'],
        runtime: '2025 – Present',
        palette: ocean,
      },
    ],
  },
  {
    number: 4,
    title: 'Applied AI & Systems',
    period: '2025 – Present',
    synopsis: 'Combining AI, backend services, data integrity, and software infrastructure in research and academic projects.',
    episodes: [
      {
        code: 'S04 E01',
        title: 'The Evaluation System',
        description: 'Built an academic digital evaluation platform combining Go, Python, AI-assisted document processing, blockchain anchoring, and IPFS.',
        tags: ['Go', 'FastAPI', 'Google GenAI', 'IPFS'],
        runtime: '2025',
        palette: crimson,
      },
      {
        code: 'S04 E02',
        title: 'The Software Intelligence Platform',
        description: 'Designing adaptive RAG and version-aware software knowledge retrieval with hybrid search and reranking research.',
        tags: ['RAG', 'BM25S', 'Qdrant', 'FastAPI'],
        runtime: '2026 – Present',
        palette: violet,
      },
    ],
  },
  {
    number: 5,
    title: 'What’s Next',
    period: 'Now building',
    synopsis: 'Continuing to develop software systems, developer tools, and AI-driven retrieval technologies.',
    episodes: [
      {
        code: 'S05 E01',
        title: 'The Next Chapter',
        description: 'Deepening work in systems programming, compiler engineering, software intelligence, and machine learning.',
        tags: ['Systems Programming', 'Compiler Design', 'Machine Learning'],
        runtime: 'In progress',
        palette: jade,
      },
    ],
  },
];

export type TopPick = { label: string; title: string; detail: string; palette: Palette };

export const topPicks: TopPick[] = [
  { label: 'Signature project', title: 'Ferrite', detail: 'Rust-based systems programming language • LLVM-backed compiler', palette: ocean },
  { label: 'Open-source tools', title: 'Pyvenvmerge & Symjoy', detail: 'Python packages published on PyPI', palette: amber },
  { label: 'Research focus', title: 'Software Intelligence Platform', detail: 'Adaptive RAG • Hybrid retrieval • Reranking', palette: violet },
  { label: 'Academic project', title: 'Digital Evaluation System', detail: 'AI-enabled workflows • Blockchain • IPFS', palette: jade },
  { label: 'Core language', title: 'Python', detail: 'Backend development, automation, and AI projects', palette: crimson },
  { label: 'Systems language', title: 'Rust', detail: 'Ferrite compiler and systems programming', palette: ocean },
  { label: 'AI focus', title: 'Machine Learning', detail: 'NLP, LLM integration, and RAG research', palette: violet },
  { label: 'Developer tools', title: 'CLI & Compiler Tooling', detail: 'Dependency validation, parsing, and native compilation', palette: amber },
  { label: 'Data layer', title: 'PostgreSQL & MongoDB', detail: 'Databases and vector-search learning', palette: jade },
  { label: 'Current mission', title: 'Software Intelligence', detail: 'Building grounded, version-aware software knowledge systems', palette: crimson },
];

/** Slides for the "▶ Play Intro" cinematic sequence. */
export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };

export const introSlides: IntroSlide[] = [
  {
    kicker: 'Education',
    title: 'B.E. · AI & ML',
    lines: ['Bapuji Institute of Engineering and Technology, Davangere', '2023 – Present'],
    chips: ['CGPA 7.94 / 10.0'],
  },
  {
    kicker: 'Engineering',
    title: 'Systems & Software',
    lines: ['Python, Rust, SQL, Go', 'Compiler design · Backend APIs · Automation testing'],
    chips: ['Python', 'Rust', 'LLVM', 'REST APIs'],
  },
  {
    kicker: 'Open Source',
    title: 'Tools for Developers',
    lines: ['Pyvenvmerge — Python virtual-environment merging', 'Symjoy — searchable Unicode symbols library', 'Published on PyPI with automated testing'],
  },
  {
    kicker: 'Signature Project',
    title: 'Ferrite',
    lines: ['A statically typed, ahead-of-time compiled systems language', 'Five-stage compiler pipeline backed by LLVM', 'VS Code extension · Standard library · Browser playground'],
  },
  {
    kicker: 'Research',
    title: 'Software Intelligence Platform',
    lines: ['Adaptive RAG and hybrid retrieval', 'BM25S · Qdrant · PostgreSQL · Cross-encoder reranking'],
  },
  {
    kicker: 'Academic Project',
    title: 'Digital Evaluation System',
    lines: ['Go · Python FastAPI · PostgreSQL · React', 'AI-assisted evaluation · Blockchain anchoring · IPFS'],
  },
  {
    kicker: 'Certified',
    title: 'Training & Certifications',
    lines: ['Hashgraph Developer Course — The Hashgraph Association', 'MongoDB Vector Search · Artificial Intelligence Training'],
  },
];

export type ProfileId = 'vishwanath' | 'recruiter' | 'developer' | 'creative';
export type SectionId = 'about' | 'journey' | 'originals' | 'picks' | 'skills' | 'moments' | 'story';

export const viewerProfiles: {
  id: ProfileId;
  name: string;
  blurb: string;
  color: string;
  order: SectionId[];
}[] = [
  {
    id: 'vishwanath',
    name: 'Vishwanath',
    blurb: 'The full series, in order',
    color: '#e5132b',
    order: ['about', 'journey', 'originals', 'picks', 'skills', 'moments', 'story'],
  },
  {
    id: 'recruiter',
    name: 'Recruiter',
    blurb: 'Resume, achievements & skills first',
    color: '#4cc9ff',
    order: ['story', 'moments', 'skills', 'originals', 'about', 'journey', 'picks'],
  },
  {
    id: 'developer',
    name: 'Developer',
    blurb: 'Projects, stack & GitHub first',
    color: '#46e3a8',
    order: ['originals', 'skills', 'journey', 'moments', 'about', 'picks', 'story'],
  },
  {
    id: 'creative',
    name: 'Creative',
    blurb: 'The story arc & highlights first',
    color: '#ffb547',
    order: ['journey', 'picks', 'originals', 'moments', 'about', 'skills', 'story'],
  },
];

export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
  about: { nav: 'About', card: 'About Me', meta: 'The Pilot • Education & training', palette: violet },
  journey: { nav: 'Journey', card: 'My Journey', meta: `${seasons.length} Seasons • ${seasons.reduce((n, s) => n + s.episodes.length, 0)} Episodes`, palette: amber },
  originals: { nav: 'Originals', card: 'My Projects', meta: `${projects.length} Originals • 2026`, palette: crimson },
  picks: { nav: 'Top Picks', card: 'Top Picks', meta: 'Top 10 from the resume', palette: jade },
  skills: { nav: 'Skills', card: 'My Skills', meta: `${skillCategories.length} Categories`, palette: ocean },
  moments: { nav: 'Moments', card: 'My Achievements', meta: `${achievements.length} Moments • ${certifications.length} Certifications`, palette: crimson },
  story: { nav: 'Resume', card: 'The Full Story', meta: 'Resume • View & download', palette: violet },
};
