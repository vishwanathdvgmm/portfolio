"use client";

import React, { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Mail, Check, Copy, Send, Terminal } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useUIStore } from "../../store/uiStore";

gsap.registerPlugin(ScrollTrigger);

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const setActiveSection = useUIStore((state) => state.setActiveSection);

  useGSAP(
    () => {
      const tl = gsap.timeline({ paused: true });

      // Reveal heading
      tl.fromTo(
        ".contact-heading",
        { opacity: 0, y: 30, rotationX: 45 },
        {
          opacity: 1,
          y: 0,
          rotationX: 0,
          duration: 0.8,
          ease: "back.out(1.5)",
        },
      );

      // Stagger contact cards
      tl.fromTo(
        ".contact-card",
        { opacity: 0, scale: 0.9, y: 50 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.15,
          ease: "power3.out",
        },
        "-=0.4",
      );

      let hasPlayed = false;
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            setActiveSection("contact");
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

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("vishwanathdvgmm@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const onSubmit = async (data: ContactFormData) => {
    const subject = encodeURIComponent(
      `Portfolio Contact: Message from ${data.name}`,
    );
    const body = encodeURIComponent(
      `Name: ${data.name}\nEmail: ${data.email}\n\nMessage:\n${data.message}`,
    );
    window.location.href = `mailto:vishwanathdvgmm@gmail.com?subject=${subject}&body=${body}`;

    setSubmitted(true);
    reset();
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section
      id="contact"
      className="relative z-10 min-h-screen py-24 px-6 perspective-1000"
      ref={sectionRef}
    >
      <div className="max-w-4xl mx-auto space-y-16">
        <div className="text-center space-y-4 contact-heading">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-card border border-brand-cyan/40 text-brand-cyan text-xs font-mono">
            <Terminal className="w-3.5 h-3.5" />
            <span>Initiate Contact Terminal</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-heading font-extrabold text-white">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-text-muted text-base font-body max-w-lg mx-auto">
            Available for software architecture, AI engineering collaborations,
            research, and technical consulting.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Direct Info */}
          <div
            className="contact-card glass-card rounded-2xl p-8 border border-glass-border space-y-6 flex flex-col justify-between hover:border-brand-cyan/30 transition-all duration-300"
            style={{
              transformStyle: "preserve-3d",
              transform:
                "rotateX(calc(var(--mouse-y, 0) * 3deg)) rotateY(calc(var(--mouse-x, 0) * -3deg))",
            }}
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-heading font-bold text-white">
                Direct Terminal
              </h3>
              <p className="text-sm font-body text-text-muted">
                Copy my direct email address or reach out via professional
                platforms.
              </p>
            </div>

            <div className="space-y-3">
              <button
                onClick={handleCopyEmail}
                className="w-full flex items-center justify-between p-4 rounded-xl glass-card border border-glass-border hover:border-brand-cyan/50 text-left transition-all"
              >
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-brand-cyan" />
                  <span className="text-xs font-mono text-white">
                    vishwanathdvgmm@gmail.com
                  </span>
                </div>
                {copied ? (
                  <Check className="w-4 h-4 text-green-400" />
                ) : (
                  <Copy className="w-4 h-4 text-text-muted" />
                )}
              </button>
            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="contact-card glass-card rounded-2xl p-8 border border-glass-border space-y-5 hover:border-brand-indigo/30 transition-all duration-300"
            style={{
              transformStyle: "preserve-3d",
              transform:
                "rotateX(calc(var(--mouse-y, 0) * -3deg)) rotateY(calc(var(--mouse-x, 0) * 3deg))",
            }}
            onMouseEnter={() => {
              window.dispatchEvent(
                new CustomEvent("contact-hover", {
                  detail: { isHovering: true },
                }),
              );
            }}
            onMouseLeave={() => {
              window.dispatchEvent(
                new CustomEvent("contact-hover", {
                  detail: { isHovering: false },
                }),
              );
            }}
          >
            {submitted && (
              <div className="p-3 rounded-lg bg-green-500/10 border border-green-500/30 text-green-400 text-xs font-mono text-center">
                Message transmitted successfully!
              </div>
            )}

            <div className="space-y-1">
              <label className="text-xs font-mono text-text-secondary">
                Name
              </label>
              <input
                {...register("name")}
                placeholder="Your Name"
                className="w-full h-11 px-4 rounded-xl bg-white/5 border border-glass-border text-white text-sm focus:outline-none focus:border-brand-cyan transition-colors"
              />
              {errors.name && (
                <p className="text-[11px] text-red-400 font-mono">
                  {errors.name.message}
                </p>
              )}
            </div>

            <div className="space-y-1">
              <label className="text-xs font-mono text-text-secondary">
                Email
              </label>
              <input
                {...register("email")}
                type="email"
                placeholder="your.email@domain.com"
                className="w-full h-11 px-4 rounded-xl bg-white/5 border border-glass-border text-white text-sm focus:outline-none focus:border-brand-cyan transition-colors"
              />
              {errors.email && (
                <p className="text-[11px] text-red-400 font-mono">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div className="space-y-1">
              <label className="text-xs font-mono text-text-secondary">
                Message
              </label>
              <textarea
                {...register("message")}
                rows={4}
                placeholder="Type your message..."
                className="w-full p-4 rounded-xl bg-white/5 border border-glass-border text-white text-sm focus:outline-none focus:border-brand-cyan transition-colors resize-none"
              />
              {errors.message && (
                <p className="text-[11px] text-red-400 font-mono">
                  {errors.message.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full h-12 rounded-xl bg-gradient-to-r from-brand-cyan to-brand-indigo text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-glow hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50"
            >
              <Send className="w-4 h-4" />
              <span>Send Message</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
