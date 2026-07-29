"use client";

import React, { useRef } from "react";
import { ArrowRight, Download, Mail, Sparkles } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useUIStore } from "../../store/uiStore";

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const setActiveSection = useUIStore((state) => state.setActiveSection);

  // Custom hook to handle GSAP animations
  useGSAP(
    () => {
      const tl = gsap.timeline();

      // Fade in the badge first
      tl.fromTo(
        ".hero-badge",
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
      );

      // Stagger the characters of the main title (Anime.js style explode-in)
      tl.fromTo(
        ".char-anim",
        { opacity: 0, scale: 0.5, y: 50, rotationX: 90 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          rotationX: 0,
          duration: 0.8,
          stagger: 0.04,
          ease: "back.out(1.7)",
        },
        "-=0.4",
      );

      // Stagger the subtitle and description
      tl.fromTo(
        ".hero-text",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: "power2.out" },
        "-=0.4",
      );

      // Bounce in the buttons
      tl.fromTo(
        ".hero-btn",
        { opacity: 0, scale: 0.8, y: 20 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.1,
          ease: "back.out(2)",
        },
        "-=0.2",
      );

      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            setActiveSection("hero");
          }
        },
        { threshold: 0.3 },
      );

      if (containerRef.current) {
        observer.observe(containerRef.current);
      }

      return () => observer.disconnect();
    },
    { scope: containerRef },
  );

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    const scrollContainer = document.querySelector(
      'div[style*="overflow: auto"]',
    );
    if (element && scrollContainer) {
      scrollContainer.scrollTo({ top: element.offsetTop, behavior: "smooth" });
    }
  };

  // Utility to wrap characters in spans for GSAP staggering
  const splitText = (text: string, isGradient = false) => {
    return text.split("").map((char, i) => (
      <span
        key={i}
        className={`char-anim inline-block ${char === " " ? "w-4" : ""} ${isGradient ? "text-gradient" : ""}`}
      >
        {char}
      </span>
    ));
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex items-center justify-center px-6 pt-24 pb-12 z-10 overflow-hidden"
      ref={containerRef}
    >
      {/* Decorative background geometry responding to mouse */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          transform:
            "translate(calc(var(--mouse-x, 0) * -30px), calc(var(--mouse-y, 0) * -30px))",
        }}
      >
        <div className="absolute top-1/4 left-1/4 w-64 h-64 border border-brand-cyan/20 rounded-full mix-blend-screen" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 border border-brand-purple/20 rounded-full mix-blend-screen" />
      </div>

      <div
        className="max-w-4xl mx-auto text-center space-y-8"
        style={{
          transform:
            "translate(calc(var(--mouse-x, 0) * 10px), calc(var(--mouse-y, 0) * 10px))",
        }}
      >
        {/* Sub-badge */}
        <div className="hero-badge inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card border border-brand-cyan/30 text-brand-cyan text-xs font-mono tracking-wide shadow-glow">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Engineering Knowledge Base — System Active</span>
        </div>

        {/* Main Title (Anime.js staggered style) */}
        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-heading font-extrabold tracking-tight text-white leading-tight perspective-1000">
          <div className="overflow-hidden">
            {splitText("Vishwanath ")}
            {splitText("M M", true)}
          </div>
        </h1>

        {/* Subtitle */}
        <p className="hero-text text-xl sm:text-2xl font-body font-medium text-text-secondary max-w-2xl mx-auto">
          Principal AI Engineer & Software Architect
        </p>

        {/* Body Description */}
        <p className="hero-text text-base sm:text-lg font-body text-text-muted max-w-xl mx-auto leading-relaxed">
          Architecting autonomous AI runtime systems, high-performance Rust
          memory engines, and immersive 3D WebGL experiences.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-4 perspective-1000">
          <button
            onClick={() => handleScrollTo("projects")}
            className="hero-btn group relative inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-brand-cyan via-brand-indigo to-brand-purple text-white font-semibold text-sm shadow-glow hover:scale-105 active:scale-95 transition-all duration-200"
            style={{
              transformStyle: "preserve-3d",
              transform:
                "rotateX(calc(var(--mouse-y, 0) * -10deg)) rotateY(calc(var(--mouse-x, 0) * 10deg))",
            }}
          >
            <span>Explore Projects</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={() => handleScrollTo("contact")}
            className="hero-btn inline-flex items-center gap-2 px-6 py-3.5 rounded-full glass-card hover:bg-white/10 text-white font-semibold text-sm border border-glass-border hover:border-brand-cyan/50 hover:scale-105 active:scale-95 transition-all duration-200"
            style={{
              transformStyle: "preserve-3d",
              transform:
                "rotateX(calc(var(--mouse-y, 0) * -10deg)) rotateY(calc(var(--mouse-x, 0) * 10deg))",
            }}
          >
            <Mail className="w-4 h-4 text-brand-cyan" />
            <span>Contact Me</span>
          </button>

          <a
            href="/resume.pdf"
            target="_blank"
            download
            className="hero-btn inline-flex items-center gap-2 px-6 py-3.5 rounded-full glass-card hover:bg-white/10 text-text-secondary hover:text-white font-medium text-sm border border-glass-border hover:scale-105 active:scale-95 transition-all duration-200"
            style={{
              transformStyle: "preserve-3d",
              transform:
                "rotateX(calc(var(--mouse-y, 0) * -10deg)) rotateY(calc(var(--mouse-x, 0) * 10deg))",
            }}
          >
            <Download className="w-4 h-4" />
            <span>Resume</span>
          </a>
        </div>
      </div>
    </section>
  );
}
