"use client";

import React from "react";
import { useUIStore } from "../../store/uiStore";
import type { SectionId } from "../../types";
import { Terminal, Menu, X, Github, Linkedin } from "lucide-react";

const navItems: { id: SectionId; label: string }[] = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "timeline", label: "Timeline" },
  { id: "contact", label: "Contact" },
];

export function Navbar() {
  const { activeSection, setActiveSection, isMenuOpen, toggleMenu } =
    useUIStore();

  const handleNavClick = (id: SectionId) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    // Find the hidden scroll container created by @react-three/drei ScrollControls
    const scrollContainer = document.querySelector(
      'div[style*="overflow: auto"]',
    );

    if (element && scrollContainer) {
      // We subtract any existing transform from the bounding rect, or just use offsetTop.
      // Since <Scroll html> uses transform to move it, we should use offsetTop if it's the direct child.
      let offsetTop = element.offsetTop;
      let current = element.offsetParent as HTMLElement;
      while (current && current.style.transform === "") {
        offsetTop += current.offsetTop;
        current = current.offsetParent as HTMLElement;
      }

      scrollContainer.scrollTo({ top: element.offsetTop, behavior: "smooth" });
    }
    if (isMenuOpen) {
      toggleMenu();
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-all duration-300">
      <nav className="max-w-7xl mx-auto flex items-center justify-between glass-card px-6 py-3 rounded-full border border-glass-border shadow-glass">
        {/* Brand Logo */}
        <button
          onClick={() => handleNavClick("hero")}
          className="flex items-center gap-2 font-heading font-bold text-lg text-text-primary hover:text-brand-cyan transition-colors"
          aria-label="Vishwanath M M — Home"
        >
          <Terminal className="w-5 h-5 text-brand-cyan" />
          <span className="tracking-tight">Vishwanath.dev</span>
        </button>

        {/* Desktop Nav Items */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`relative px-4 py-1.5 text-sm font-medium rounded-full transition-all duration-200 ${
                  isActive
                    ? "text-brand-cyan bg-brand-cyan/10 font-semibold"
                    : "text-text-secondary hover:text-text-primary hover:bg-white/5"
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-brand-cyan shadow-glow" />
                )}
              </button>
            );
          })}
        </div>

        {/* Action Links */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://github.com/vishwanathdvgmm"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full text-text-secondary hover:text-brand-cyan hover:bg-white/5 transition-colors"
            aria-label="GitHub Profile"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href="https://linkedin.com/in/vishwanathmm"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full text-text-secondary hover:text-brand-cyan hover:bg-white/5 transition-colors"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-4 h-4" />
          </a>
        </div>

        {/* Mobile Toggle Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 text-text-secondary hover:text-text-primary focus:outline-none"
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
        >
          {isMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </nav>

      {/* Mobile Drawer Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden mt-3 max-w-7xl mx-auto glass-card rounded-2xl p-6 flex flex-col gap-4 border border-glass-border animate-in fade-in slide-in-from-top-4 duration-200">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`text-left text-base font-medium py-2 px-3 rounded-lg transition-colors ${
                activeSection === item.id
                  ? "text-brand-cyan bg-brand-cyan/10 font-bold"
                  : "text-text-secondary hover:text-text-primary"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
