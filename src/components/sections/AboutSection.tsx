"use client";

import React, { useRef } from "react";
import { User, Code, Brain } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useUIStore } from "../../store/uiStore";

gsap.registerPlugin(ScrollTrigger);

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const setActiveSection = useUIStore((state) => state.setActiveSection);

  useGSAP(
    () => {
      const tl = gsap.timeline({ paused: true });

      // Reveal heading
      tl.fromTo(
        ".about-heading",
        { opacity: 0, y: 50, rotationX: -45 },
        {
          opacity: 1,
          y: 0,
          rotationX: 0,
          duration: 0.8,
          ease: "back.out(1.5)",
        },
      );

      // Stagger in the cards
      tl.fromTo(
        ".about-card",
        { opacity: 0, scale: 0.9, y: 30 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.15,
          ease: "power2.out",
        },
        "-=0.4",
      );

      let hasPlayed = false;
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            setActiveSection("about");
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
      id="about"
      className="relative z-10 min-h-screen py-24 px-6 overflow-hidden perspective-1000"
      ref={sectionRef}
    >
      <div className="max-w-5xl mx-auto space-y-12 relative z-10">
        <div className="text-center space-y-4 about-heading">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-card border border-brand-purple/40 text-brand-purple text-xs font-mono">
            <User className="w-3.5 h-3.5" />
            <span>Architecture & Vision</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-heading font-extrabold text-white">
            About <span className="text-gradient">Vishwanath</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1 */}
          <div
            className="about-card group relative glass-card rounded-2xl p-8 border border-glass-border overflow-hidden transition-all duration-300 hover:border-brand-cyan/50"
            style={{
              transformStyle: "preserve-3d",
              transform:
                "rotateX(calc(var(--mouse-y, 0) * 5deg)) rotateY(calc(var(--mouse-x, 0) * -5deg))",
            }}
          >
            {/* Interactive Grid Background */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{
                backgroundImage:
                  "radial-gradient(circle at calc(50% + var(--mouse-x, 0) * 50%) calc(50% + var(--mouse-y, 0) * 50%), rgba(0, 229, 255, 0.1) 0%, transparent 50%), linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)",
                backgroundSize: "100% 100%, 20px 20px, 20px 20px",
              }}
            />

            <div className="relative z-10 space-y-4">
              <div className="flex items-center gap-3 text-brand-cyan">
                <Brain className="w-6 h-6" />
                <h3 className="text-xl font-heading font-bold text-white group-hover:text-brand-cyan transition-colors">
                  Professional Summary
                </h3>
              </div>
              <p className="text-sm font-body text-text-muted leading-relaxed">
                AI and Machine Learning undergraduate with hands-on experience
                in software engineering, backend development, systems
                programming, and open-source software. Founder and Lead
                Developer of the Ferrite programming language and maintainer of
                multiple Python packages published on PyPI. Proficient in
                Python, Rust, compiler construction, and scalable software
                architecture.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div
            className="about-card group relative glass-card rounded-2xl p-8 border border-glass-border overflow-hidden transition-all duration-300 hover:border-brand-purple/50"
            style={{
              transformStyle: "preserve-3d",
              transform:
                "rotateX(calc(var(--mouse-y, 0) * -5deg)) rotateY(calc(var(--mouse-x, 0) * 5deg))",
            }}
          >
            {/* Interactive Grid Background */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{
                backgroundImage:
                  "radial-gradient(circle at calc(50% + var(--mouse-x, 0) * -50%) calc(50% + var(--mouse-y, 0) * -50%), rgba(168, 85, 247, 0.1) 0%, transparent 50%), linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)",
                backgroundSize: "100% 100%, 20px 20px, 20px 20px",
              }}
            />

            <div className="relative z-10 space-y-4">
              <div className="flex items-center gap-3 text-brand-purple">
                <Code className="w-6 h-6" />
                <h3 className="text-xl font-heading font-bold text-white group-hover:text-brand-purple transition-colors">
                  Education
                </h3>
              </div>
              <div className="text-sm font-body text-text-muted space-y-3">
                <div>
                  <strong className="text-white">
                    B.E. in Artificial Intelligence & Machine Learning
                  </strong>
                  <p>
                    Bapuji Institute of Engineering and Technology (2023 -
                    Present)
                  </p>
                  <p className="text-brand-cyan/80 text-xs mt-1">
                    CGPA: 7.93 / 10.0
                  </p>
                </div>
                <div className="pt-2 border-t border-white/10">
                  <strong className="text-white">
                    Pre-University (Class 12)
                  </strong>
                  <p>Karnataka State Board (2023)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
