"use client";

import React, { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export function HeroParticles() {
  const count = 300;
  const pointsRef = useRef<THREE.Points>(null);

  // Custom tracking for particle velocity and base positions
  const basePositions = useRef<Float32Array>(new Float32Array(count * 3));
  const velocities = useRef<Float32Array>(new Float32Array(count * 3));

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const color = new THREE.Color();

    for (let i = 0; i < count; i++) {
      // Create a cylinder/tube distribution around the Z-axis
      const r = 2 + Math.random() * 8; // radius between 2 and 10
      const theta = Math.random() * Math.PI * 2;
      const z = (Math.random() - 0.5) * 20; // Spread along Z

      const px = Math.cos(theta) * r;
      const py = Math.sin(theta) * r;
      const pz = z;

      pos[i * 3] = px;
      pos[i * 3 + 1] = py;
      pos[i * 3 + 2] = pz;

      basePositions.current[i * 3] = px;
      basePositions.current[i * 3 + 1] = py;
      basePositions.current[i * 3 + 2] = pz;

      // Cyan to deep blue mix
      color.setHex(Math.random() > 0.5 ? 0x00e5ff : 0x0044ff);
      col[i * 3] = color.r;
      col[i * 3 + 1] = color.g;
      col[i * 3 + 2] = color.b;
    }
    return [pos, col];
  }, []);

  useFrame((state, delta) => {
    if (!pointsRef.current) return;
    const posAttribute = pointsRef.current.geometry.attributes.position;
    const posArray = posAttribute.array as Float32Array;

    // Convert mouse (NDC) to rough world coordinates at z=0 plane
    const mouseX = (state.pointer.x * (state as any).viewport.width) / 2;
    const mouseY = (state.pointer.y * (state as any).viewport.height) / 2;

    for (let i = 0; i < count; i++) {
      const idx = i * 3;

      // Current positions
      let px = posArray[idx];
      let py = posArray[idx + 1];
      let pz = posArray[idx + 2];

      // Base positions to return to
      const bx = basePositions.current[idx];
      const by = basePositions.current[idx + 1];

      // Drift forward (Z axis)
      pz += delta * 2;
      if (pz > 10) pz -= 20; // Loop back
      basePositions.current[idx + 2] = pz; // Update base Z

      // Calculate distance to mouse
      const dx = px - mouseX;
      const dy = py - mouseY;
      const dist = Math.sqrt(dx * dx + dy * dy);

      // Repel force
      if (dist < 4) {
        const force = (4 - dist) * 0.5;
        const angle = Math.atan2(dy, dx);
        velocities.current[idx] += Math.cos(angle) * force * delta;
        velocities.current[idx + 1] += Math.sin(angle) * force * delta;
      }

      // Spring back to base position
      velocities.current[idx] += (bx - px) * 0.05;
      velocities.current[idx + 1] += (by - py) * 0.05;

      // Apply damping
      velocities.current[idx] *= 0.9;
      velocities.current[idx + 1] *= 0.9;

      // Apply velocity
      px += velocities.current[idx];
      py += velocities.current[idx + 1];

      posArray[idx] = px;
      posArray[idx + 1] = py;
      posArray[idx + 2] = pz;
    }

    posAttribute.needsUpdate = true;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.08}
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}
