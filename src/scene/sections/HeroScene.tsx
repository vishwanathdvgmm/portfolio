"use client";

import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { HeroObject } from "../objects/HeroObject";
import { HeroParticles } from "../objects/HeroParticles";

export function HeroScene() {
  const groupRef = useRef<THREE.Group>(null);

  // Keep track of target rotation for smooth interpolation
  const targetRotation = useRef({ x: 0, y: 0 });

  useFrame((state) => {
    if (groupRef.current) {
      // Gentle floating animation
      groupRef.current.position.y =
        Math.sin(state.clock.elapsedTime * 0.5) * 0.5;

      // Pointer-driven rotation (parallax effect)
      targetRotation.current.x = (state.pointer.y * Math.PI) / 8;
      targetRotation.current.y = (state.pointer.x * Math.PI) / 8;

      // Smooth interpolation using lerp
      groupRef.current.rotation.x = THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        targetRotation.current.x,
        0.05,
      );
      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        targetRotation.current.y,
        0.05,
      );
    }
  });

  return (
    <group position={[0, 0, 0]}>
      {/* 3D Elements */}
      <group ref={groupRef}>
        <HeroObject />
        <HeroParticles />
      </group>
    </group>
  );
}
