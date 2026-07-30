"use client";

import React, { useRef } from "react";
import { History, GitCommit } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useUIStore } from "../../store/uiStore";

gsap.registerPlugin(ScrollTrigger);

const milestones = [
  {
    year: "2026",
    title: "Advanced AI & Vector Search Specialization",
    description:
      "Completed certifications in AI-Powered Search with MongoDB Vector Search and extensive Artificial Intelligence Training from Acmegrade.",
  },
  {
    year: "2025",
    title: "Founder & Lead Developer — Ferrite",
    description:
      "Founded Ferrite, an ML-oriented systems programming language written in Rust. Architected a 5-stage modular compiler pipeline spanning 3K+ lines of code.",
  },
  {
    year: "2024",
    title: "Open-Source Python Maintainer (PyPI)",
    description:
      "Published production-ready Python packages (pyvenvmerge, symjoy) automating dependency resolution and providing modular APIs, distributed on PyPI.",
  },
  {
    year: "2023",
    title: "B.E. in Artificial Intelligence & Machine Learning",
    description:
      "Started engineering degree at Bapuji Institute of Engineering and Technology, focusing on machine learning, systems architecture, and core computer science.",
  },
];

export function TimelineSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const lineRef = useRef<SVGPathElement>(null);
  const setActiveSection = useUIStore((state) => state.setActiveSection);

  useGSAP(
    () => {
      // Create GSAP timelines
      const headingTl = gsap.timeline({ paused: true });
      headingTl.fromTo(
        ".timeline-heading",
        { opacity: 0, y: -30 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
      );

      const trackTl = gsap.timeline({ paused: true });
      if (lineRef.current) {
        const length = lineRef.current.getTotalLength();
        gsap.set(lineRef.current, {
          strokeDasharray: length,
          strokeDashoffset: length,
        });

        trackTl.to(lineRef.current, {
          strokeDashoffset: 0,
          duration: 1.5,
          ease: "power2.inOut",
        });
      }

      gsap.utils.toArray<HTMLElement>(".timeline-item").forEach((item, i) => {
        trackTl.fromTo(
          item,
          { opacity: 0, x: 50, filter: "blur(5px)" },
          {
            opacity: 1,
            x: 0,
            filter: "blur(0px)",
            duration: 0.6,
            ease: "power4.out",
          },
          i * 0.2,
        );

        const node = item.querySelector(".timeline-node");
        trackTl.fromTo(
          node,
          { scale: 0, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.4,
            ease: "back.out(2)",
          },
          i * 0.2,
        );
      });

      let hasPlayed = false;
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            setActiveSection("timeline");
            if (!hasPlayed) {
              headingTl.play();
              trackTl.play();
              hasPlayed = true;
              window.dispatchEvent(new CustomEvent("timeline-enter"));
            }
          }
        },
        { threshold: 0.1 },
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
      id="timeline"
      className="relative z-10 min-h-screen py-24 px-6 perspective-1000"
      ref={sectionRef}
    >
      <div className="max-w-4xl mx-auto space-y-16">
        <div className="text-center space-y-4 timeline-heading">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-card border border-brand-indigo/40 text-brand-indigo text-xs font-mono">
            <History className="w-3.5 h-3.5" />
            <span>Growth Milestone</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-heading font-extrabold text-white">
            Career <span className="text-gradient">Timeline</span>
          </h2>
        </div>

        <div className="relative ml-4 sm:ml-32 space-y-12 timeline-track pb-12">
          {/* Animated SVG Line */}
          <svg
            className="absolute left-[-1px] top-4 w-1 h-full"
            preserveAspectRatio="none"
          >
            <path
              ref={lineRef}
              d="M0 0 L0 10000"
              stroke="url(#timeline-gradient)"
              strokeWidth="2"
              fill="none"
            />
            <defs>
              <linearGradient
                id="timeline-gradient"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop offset="0%" stopColor="#00e5ff" />
                <stop offset="50%" stopColor="#4f46e5" />
                <stop offset="100%" stopColor="#a855f7" />
              </linearGradient>
            </defs>
          </svg>

          {milestones.map((item, idx) => (
            <div
              key={idx}
              className="timeline-item relative pl-8 sm:pl-12 group"
              onMouseEnter={() => {
                window.dispatchEvent(
                  new CustomEvent("timeline-hover", {
                    detail: { index: idx, isHovering: true },
                  }),
                );
              }}
              onMouseLeave={() => {
                window.dispatchEvent(
                  new CustomEvent("timeline-hover", {
                    detail: { index: idx, isHovering: false },
                  }),
                );
              }}
            >
              <span className="timeline-node absolute -left-[11px] top-1 w-6 h-6 rounded-full glass-card border border-brand-cyan flex items-center justify-center text-brand-cyan bg-bg-primary z-10 shadow-[0_0_15px_rgba(0,229,255,0.5)]">
                <GitCommit className="w-3.5 h-3.5" />
              </span>

              <div
                className="glass-card rounded-2xl p-6 border border-glass-border space-y-2 hover:border-brand-cyan/40 hover:shadow-glow transition-all duration-300"
                style={{
                  transformStyle: "preserve-3d",
                  transform:
                    "rotateX(calc(var(--mouse-y, 0) * 2deg)) rotateY(calc(var(--mouse-x, 0) * -2deg))",
                }}
              >
                <span className="text-xs font-mono text-brand-cyan font-bold">
                  {item.year}
                </span>
                <h3 className="text-xl font-heading font-bold text-white group-hover:text-brand-cyan transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm font-body text-text-muted">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
