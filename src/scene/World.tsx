"use client";

import React from "react";
import { Scroll } from "@react-three/drei";
import { SceneLighting } from "./lights/SceneLighting";
import { BackgroundParticles } from "./environments/BackgroundParticles";
import { CameraController } from "./controllers/CameraController";

import { HeroScene } from "./sections/HeroScene";
import { AboutScene } from "./sections/AboutScene";
import { SkillsScene } from "./sections/SkillsScene";
import { ProjectsScene } from "./sections/ProjectsScene";
import { TimelineScene } from "./sections/TimelineScene";
import { ContactScene } from "./sections/ContactScene";

import { HeroSection } from "../components/sections/HeroSection";
import { AboutSection } from "../components/sections/AboutSection";
import { SkillsSection } from "../components/sections/SkillsSection";
import { ProjectsSection } from "../components/sections/ProjectsSection";
import { TimelineSection } from "../components/sections/TimelineSection";
import { ContactSection } from "../components/sections/ContactSection";

import { Footer } from "../components/layout/Footer";

export function World() {
  return (
    <>
      <fog attach="fog" args={["#020617", 20, 150]} />
      <CameraController />
      <SceneLighting />
      <BackgroundParticles count={1500} />

      {/* 3D World Scenes distributed along the Z-axis */}
      <HeroScene />
      <AboutScene />
      <SkillsScene />
      <ProjectsScene />
      <TimelineScene />
      <ContactScene />

      {/* Unified HTML Scroll Overlay */}
      {/* This renders all DOM sections natively. ScrollControls syncs the DOM scroll with the 3D camera. */}
      <Scroll html>
        <div className="w-screen pointer-events-auto">
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <TimelineSection />
          <ContactSection />
          <Footer />
        </div>
      </Scroll>
    </>
  );
}
