"use client";

import React from "react";
import { ProjectsObject } from "../objects/ProjectsObject";
import { ProjectParticles } from "../objects/ProjectParticles";

export function ProjectsScene() {
  return (
    <group position={[-2.5, -2.5, -325]}>
      <ProjectsObject />
      <ProjectParticles />
    </group>
  );
}
