export type SectionId =
  | "hero"
  | "about"
  | "skills"
  | "projects"
  | "timeline"
  | "achievements"
  | "contact";

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  problem: string;
  solution: string;
  architecture: string[];
  techStack: string[];
  githubUrl?: string;
  demoUrl?: string;
  challenges: string[];
  lessonsLearned: string[];
}

export interface Skill {
  id: string;
  name: string;
  category: "ai" | "frontend" | "backend" | "systems" | "tools";
  proficiency: number;
  iconName: string;
}
