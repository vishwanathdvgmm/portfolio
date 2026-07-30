"use client";

import React, { useRef, useMemo, useEffect, useState } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export function ProjectParticles() {
  const pointsRef = useRef<THREE.Points>(null);

  const particleCount = 1000;

  const { positions, velocities, colors } = useMemo(() => {
    const positions = new Float32Array(particleCount * 3);
    const velocities = new Float32Array(particleCount);
    const colors = new Float32Array(particleCount * 3);

    const colorA = new THREE.Color("#ec4899"); // Pink
    const colorB = new THREE.Color("#a855f7"); // Purple

    for (let i = 0; i < particleCount; i++) {
      // Spawn in a wide cylinder around the screens
      const radius = 5 + Math.random() * 20;
      const angle = Math.random() * Math.PI * 2;

      positions[i * 3] = Math.cos(angle) * radius; // x
      positions[i * 3 + 1] = (Math.random() - 0.5) * 40; // y (spread vertically)
      positions[i * 3 + 2] = Math.sin(angle) * radius; // z

      velocities[i] = 0.05 + Math.random() * 0.1; // falling speed

      // Mix colors
      const mixedColor = colorA.clone().lerp(colorB, Math.random());
      colors[i * 3] = mixedColor.r;
      colors[i * 3 + 1] = mixedColor.g;
      colors[i * 3 + 2] = mixedColor.b;
    }

    return { positions, velocities, colors };
  }, []);

  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleHover = (e: Event) => {
      const customEvent = e as CustomEvent<{ isHovering: boolean }>;
      setIsHovering(customEvent.detail.isHovering);
    };

    window.addEventListener("project-hover", handleHover);
    return () => window.removeEventListener("project-hover", handleHover);
  }, []);

  useFrame(() => {
    if (pointsRef.current) {
      const posArray = pointsRef.current.geometry.attributes.position
        .array as Float32Array;

      const speedMultiplier = isHovering ? 5.0 : 1.0;

      for (let i = 0; i < particleCount; i++) {
        // Rain effect: move down
        posArray[i * 3 + 1] -= velocities[i] * speedMultiplier;

        // Reset if it falls too low
        if (posArray[i * 3 + 1] < -20) {
          posArray[i * 3 + 1] = 20;
        }
      }

      pointsRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={particleCount}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.15}
        vertexColors={true}
        transparent={true}
        opacity={0.6}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}
