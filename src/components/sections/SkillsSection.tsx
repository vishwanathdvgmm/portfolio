"use client";

import React, { useRef } from "react";
import { Wrench, Cpu, Database, Globe } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useUIStore } from "../../store/uiStore";

gsap.registerPlugin(ScrollTrigger);

const skillCategories = [
  {
    title: "AI & Machine Learning",
    icon: Cpu,
    color: "text-brand-cyan",
    skills: [
      "Machine Learning",
      "Natural Language Processing (NLP)",
      "LLM Integration",
    ],
  },
  {
    title: "Systems & Languages",
    icon: Database,
    color: "text-brand-indigo",
    skills: [
      "Python",
      "Rust",
      "SQL",
      "Compiler Design",
      "Lexer/Parser",
      "CLI Tooling",
    ],
  },
  {
    title: "Backend & DevOps",
    icon: Wrench,
    color: "text-brand-purple",
    skills: [
      "REST API Design",
      "MongoDB",
      "PostgreSQL",
      "Docker",
      "Linux",
      "PyPI",
      "GitHub",
    ],
  },
  {
    title: "Frontend & Web",
    icon: Globe,
    color: "text-white",
    skills: ["React", "HTML", "CSS", "Tailwind"],
  },
];

export function SkillsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const setActiveSection = useUIStore((state) => state.setActiveSection);

  useGSAP(
    () => {
      const tl = gsap.timeline({ paused: true });

      // Reveal heading
      tl.fromTo(
        ".skills-heading",
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 0.6, ease: "back.out(1.5)" },
      );

      // Elastic stagger for the skill category cards
      tl.fromTo(
        ".skill-card",
        { opacity: 0, scale: 0.5, y: 100, rotationZ: -5 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          rotationZ: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "elastic.out(1, 0.5)",
        },
        "-=0.2",
      );

      // Stagger for individual skill tags inside the cards
      tl.fromTo(
        ".skill-tag",
        { opacity: 0, x: -20 },
        { opacity: 1, x: 0, duration: 0.4, stagger: 0.02, ease: "power2.out" },
        "-=0.6",
      );

      let hasPlayed = false;
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            setActiveSection("skills");
            if (!hasPlayed) {
              tl.play();
              hasPlayed = true;
            }
          }
        },
        { threshold: 0.3 },
      );

      if (sectionRef.current) {
        observer.observe(sectionRef.current);
      }

      return () => observer.disconnect();
    },
    { scope: sectionRef },
  );

  return (
    <section
      id="skills"
      className="relative z-10 min-h-screen py-24 px-6 perspective-1000"
      ref={sectionRef}
    >
      <div className="max-w-6xl mx-auto space-y-16">
        <div className="text-center space-y-4 skills-heading">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-card border border-brand-cyan/40 text-brand-cyan text-xs font-mono">
            <Wrench className="w-3.5 h-3.5" />
            <span>Technical Breadth</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-heading font-extrabold text-white">
            Skills & <span className="text-gradient">Capabilities</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((cat, idx) => {
            const Icon = cat.icon;

            // Alternate tilt directions based on index to make it feel organic
            const tiltX = idx % 2 === 0 ? 5 : -5;
            const tiltY = idx < 2 ? -5 : 5;

            return (
              <div
                key={cat.title}
                className="skill-card group relative glass-card rounded-2xl p-8 border border-glass-border space-y-6 transition-all duration-300 hover:border-brand-cyan/50 hover:shadow-glow"
                style={{
                  transformStyle: "preserve-3d",
                  transform: `rotateX(calc(var(--mouse-y, 0) * ${tiltX}deg)) rotateY(calc(var(--mouse-x, 0) * ${tiltY}deg))`,
                }}
                onMouseEnter={() => {
                  // Custom event to signal the 3D scene to speed up
                  window.dispatchEvent(
                    new CustomEvent("skill-hover", {
                      detail: { category: cat.title, isHovering: true },
                    }),
                  );
                }}
                onMouseLeave={() => {
                  window.dispatchEvent(
                    new CustomEvent("skill-hover", {
                      detail: { category: cat.title, isHovering: false },
                    }),
                  );
                }}
              >
                {/* 3D floating icon layer */}
                <div
                  className="absolute top-8 right-8 opacity-10 blur-xl transition-all duration-500 group-hover:opacity-40 group-hover:blur-md"
                  style={{ transform: "translateZ(50px)" }}
                >
                  <Icon className={`w-32 h-32 ${cat.color}`} />
                </div>

                <div
                  className="relative z-10 flex items-center gap-3"
                  style={{ transform: "translateZ(30px)" }}
                >
                  <Icon className={`w-6 h-6 ${cat.color}`} />
                  <h3 className="text-xl font-heading font-bold text-white group-hover:text-brand-cyan transition-colors">
                    {cat.title}
                  </h3>
                </div>

                <div
                  className="relative z-10 flex flex-wrap gap-2"
                  style={{ transform: "translateZ(40px)" }}
                >
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="skill-tag text-xs font-mono px-3 py-1.5 rounded-lg glass-card border border-glass-border text-text-secondary hover:text-white transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
