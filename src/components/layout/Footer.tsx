'use client';

import React from 'react';
import { Github, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-glass-border bg-bg-primary/80 backdrop-blur-lg py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-text-muted">
        {/* Copyright */}
        <div className="flex items-center gap-2 font-mono">
          <span>© {new Date().getFullYear()} Vishwanath M M.</span>
          <span className="hidden sm:inline">•</span>
          <span className="hidden sm:inline">Built with Precision & 3D WebGL</span>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/vishwanathdvgmm"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-text-secondary hover:text-brand-cyan transition-colors"
          >
            <Github className="w-4 h-4" />
            <span>GitHub</span>
          </a>
          <a
            href="https://linkedin.com/in/vishwanathmm"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-text-secondary hover:text-brand-cyan transition-colors"
          >
            <Linkedin className="w-4 h-4" />
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
