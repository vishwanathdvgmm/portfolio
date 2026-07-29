"use client";

import React, { useRef } from "react";
import { projectsData } from "../../data/projects";
import { useUIStore } from "../../store/uiStore";
import { Github, Cpu } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function ProjectsSection() {
  const { setSelectedProjectId } = useUIStore();
  const sectionRef = useRef<HTMLElement>(null);
  const setActiveSection = useUIStore((state) => state.setActiveSection);

  useGSAP(
    () => {
      const tl = gsap.timeline({ paused: true });

      // Reveal heading
      tl.fromTo(
        ".projects-heading",
        { opacity: 0, y: -30 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
      );

      // Holographic entrance for project cards (skew + blur)
      tl.fromTo(
        ".project-card",
        { opacity: 0, scale: 0.9, y: 50, skewX: 10, filter: "blur(10px)" },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          skewX: 0,
          filter: "blur(0px)",
          duration: 0.8,
          stagger: 0.15,
          ease: "power4.out",
        },
        "-=0.2",
      );

      let hasPlayed = false;
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            setActiveSection("projects");
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
      id="projects"
      className="relative z-10 min-h-screen py-24 px-6 perspective-1000"
      ref={sectionRef}
    >
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center space-y-4 max-w-2xl mx-auto projects-heading">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-card border border-brand-indigo/40 text-brand-indigo text-xs font-mono">
            <Cpu className="w-3.5 h-3.5" />
            <span>Featured Engineering Work</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-heading font-extrabold text-white">
            Projects <span className="text-gradient">Laboratory</span>
          </h2>
          <p className="text-text-muted text-base font-body">
            Deep-dive technical implementations across autonomous AI, system
            engines, and mathematical solvers.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, idx) => (
            <div
              key={project.id}
              onClick={() => setSelectedProjectId(project.id)}
              className="project-card group relative cursor-pointer glass-card rounded-2xl p-6 border border-glass-border hover:border-brand-cyan/50 hover:shadow-glow transition-all duration-300 flex flex-col justify-between"
              style={{
                transformStyle: "preserve-3d",
                // Subtle floating animation using modulo arithmetic to offset each card
                animation: `float ${3 + (idx % 2)}s ease-in-out infinite alternate`,
              }}
              onMouseEnter={() => {
                // Remove float animation on hover and snap to mouse parallax
                document.documentElement.style.setProperty(
                  `--hover-${project.id}`,
                  "1",
                );
              }}
              onMouseLeave={() => {
                document.documentElement.style.setProperty(
                  `--hover-${project.id}`,
                  "0",
                );
              }}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-brand-cyan px-2.5 py-1 rounded-md bg-brand-cyan/10">
                    {project.id.toUpperCase()}
                  </span>
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="text-text-muted hover:text-white transition-colors"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                </div>

                <h3 className="text-2xl font-heading font-bold text-white group-hover:text-brand-cyan transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs font-mono text-text-secondary">
                  {project.subtitle}
                </p>
                <p className="text-sm font-body text-text-muted line-clamp-3 leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="pt-6 space-y-4">
                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] font-mono text-text-secondary px-2 py-0.5 rounded bg-white/5 border border-white/10 group-hover:border-brand-cyan/30 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes float {
          0% { transform: translateY(0px); }
          100% { transform: translateY(-10px); }
        }
      `,
        }}
      />
    </section>
  );
}
