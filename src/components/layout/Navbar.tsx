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

    // drei's ScrollControls creates a specific DOM structure:
    // A fixed-position wrapper div > a scrollable div (with overflow: auto/scroll)
    // > a tall "virtual page" div > the actual HTML content
    //
    // We need to find the scrollable div and calculate where each section
    // sits relative to the total scrollable height.

    const element = document.getElementById(id);
    if (!element) return;

    // Strategy: Find drei's scroll container.
    // It's the div that has a very tall child (the "virtual pages" div).
    // We look for divs whose scrollHeight is much larger than their clientHeight.
    const allDivs = document.querySelectorAll("div");
    let scrollContainer: HTMLElement | null = null;

    for (const div of allDivs) {
      const style = window.getComputedStyle(div);
      const isScrollable =
        style.overflow === "auto" ||
        style.overflow === "scroll" ||
        style.overflowY === "auto" ||
        style.overflowY === "scroll";

      if (isScrollable && div.scrollHeight > div.clientHeight * 1.5) {
        scrollContainer = div;
        break;
      }
    }

    if (!scrollContainer) return;

    // The HTML content inside drei is wrapped in a div with pointer-events-auto.
    // Each section has an id. We need to find the section's offset
    // relative to the pointer-events-auto container, then map that
    // to the scroll container's scroll range.
    const htmlWrapper = document.querySelector(
      ".pointer-events-auto",
    ) as HTMLElement;
    if (!htmlWrapper) return;

    // Get the section's position relative to the HTML wrapper
    const wrapperRect = htmlWrapper.getBoundingClientRect();
    const elementRect = element.getBoundingClientRect();

    // The visual offset of the element from the top of the wrapper
    const offsetInWrapper = elementRect.top - wrapperRect.top;

    // The total height of the wrapper (all sections combined)
    const totalWrapperHeight = htmlWrapper.scrollHeight;

    // The fraction through the content this section is at
    const fraction = offsetInWrapper / totalWrapperHeight;

    // Map this fraction to the scroll container's scrollable range
    const maxScroll =
      scrollContainer.scrollHeight - scrollContainer.clientHeight;
    const targetScroll = fraction * maxScroll + scrollContainer.scrollTop;

    scrollContainer.scrollTo({ top: targetScroll, behavior: "smooth" });

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
