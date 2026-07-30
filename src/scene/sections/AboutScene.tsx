"use client";

import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { DNAObject } from "../objects/DNAObject";
import { AboutParticles } from "../objects/AboutParticles";

export function AboutScene() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (groupRef.current) {
      // Very slow global rotation for the entire scene
      groupRef.current.rotation.y += 0.001;
    }
  });

  return (
    <group position={[0, 0, -120]}>
      {/* 3D Elements for About Section */}
      <group ref={groupRef}>
        <DNAObject />
        <AboutParticles />
      </group>
    </group>
  );
}
