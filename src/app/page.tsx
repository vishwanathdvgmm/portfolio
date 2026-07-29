'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import { Navbar } from '../components/layout/Navbar';

// Dynamically import the 3D canvas with SSR disabled —
// R3F depends on browser-only WebGL APIs and cannot run on the server.
const Experience = dynamic(
  () => import('../scene/Experience').then((mod) => mod.Experience),
  { ssr: false }
);

export default function HomePage() {
  return (
    <div className="relative w-screen h-screen bg-bg-primary text-text-primary overflow-hidden selection:bg-brand-cyan/30 selection:text-brand-cyan">
      {/* Sticky Glass Navbar */}
      <Navbar />

      {/* 3D WebGL Canvas Layer - Takes full screen, handles own scrolling via ScrollControls */}
      <Experience />
    </div>
  );
}
