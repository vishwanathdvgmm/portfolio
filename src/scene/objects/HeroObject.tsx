"use client";

import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export function HeroObject() {
  const coreRef = useRef<THREE.Mesh>(null);
  const shellRef = useRef<THREE.Mesh>(null);
  const groupRef = useRef<THREE.Group>(null);

  // Physics tracking for "Space Bends" interaction
  const mouseVelocity = useRef({ x: 0, y: 0 });
  const lastMouse = useRef({ x: 0, y: 0 });
  const distortion = useRef({ scaleX: 1, scaleY: 1, scaleZ: 1 });

  useFrame((state, delta) => {
    // 1. Base Rotation
    if (coreRef.current) {
      coreRef.current.rotation.x += delta * 0.15;
      coreRef.current.rotation.y += delta * 0.2;
    }
    if (shellRef.current) {
      shellRef.current.rotation.x -= delta * 0.1;
      shellRef.current.rotation.y -= delta * 0.15;
    }

    // 2. Calculate Mouse Velocity for Space Bends
    const mx = state.pointer.x;
    const my = state.pointer.y;

    // Protection against huge deltas on tab switch
    const safeDelta = Math.min(delta, 0.1);

    const dx = mx - lastMouse.current.x;
    const dy = my - lastMouse.current.y;

    mouseVelocity.current.x = THREE.MathUtils.lerp(
      mouseVelocity.current.x,
      dx / safeDelta,
      0.1,
    );
    mouseVelocity.current.y = THREE.MathUtils.lerp(
      mouseVelocity.current.y,
      dy / safeDelta,
      0.1,
    );

    lastMouse.current.x = mx;
    lastMouse.current.y = my;

    // 3. Apply Space Bends Distortion (Elastic stretch based on velocity)
    const velocityMag = Math.sqrt(
      mouseVelocity.current.x ** 2 + mouseVelocity.current.y ** 2,
    );

    // Stretch along the axis of movement, squash perpendicular
    const targetScaleX = 1 + Math.abs(mouseVelocity.current.x) * 0.05;
    const targetScaleY = 1 + Math.abs(mouseVelocity.current.y) * 0.05;
    const targetScaleZ = 1 - velocityMag * 0.02; // Flatten slightly when moving fast

    distortion.current.scaleX = THREE.MathUtils.lerp(
      distortion.current.scaleX,
      targetScaleX,
      0.1,
    );
    distortion.current.scaleY = THREE.MathUtils.lerp(
      distortion.current.scaleY,
      targetScaleY,
      0.1,
    );
    distortion.current.scaleZ = THREE.MathUtils.lerp(
      distortion.current.scaleZ,
      targetScaleZ,
      0.1,
    );

    if (groupRef.current) {
      // Apply scale constraints to prevent extreme tearing
      const sx = Math.min(Math.max(distortion.current.scaleX, 0.8), 1.5);
      const sy = Math.min(Math.max(distortion.current.scaleY, 0.8), 1.5);
      const sz = Math.min(Math.max(distortion.current.scaleZ, 0.8), 1.2);

      groupRef.current.scale.set(sx, sy, sz);

      // Tilt based on mouse position
      const targetRotX = my * 0.3;
      const targetRotY = mx * 0.3;
      groupRef.current.rotation.x = THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        targetRotX,
        0.05,
      );
      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        targetRotY,
        0.05,
      );
    }
  });

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      {/* Deep Blue / Cyan Point Lights for internal glow */}
      <pointLight
        color="#00e5ff"
        intensity={2}
        distance={10}
        position={[0, 0, 0]}
      />
      <pointLight
        color="#0044ff"
        intensity={4}
        distance={15}
        position={[0, 0, 2]}
      />

      {/* Solid Glowing Core */}
      <mesh ref={coreRef} castShadow receiveShadow>
        <torusKnotGeometry args={[1.8, 0.6, 256, 64]} />
        <meshPhysicalMaterial
          color="#00e5ff"
          emissive="#0044ff"
          emissiveIntensity={0.8}
          roughness={0.1}
          metalness={0.9}
          transmission={0.9}
          thickness={1.5}
          ior={1.5}
          clearcoat={1.0}
          clearcoatRoughness={0.1}
        />
      </mesh>

      {/* Outer Wireframe Shell */}
      <mesh ref={shellRef} scale={1.15}>
        <torusKnotGeometry args={[1.8, 0.6, 128, 32]} />
        <meshBasicMaterial
          color="#00ffff"
          wireframe={true}
          transparent={true}
          opacity={0.15}
          blending={THREE.AdditiveBlending}
        />
      </mesh>
    </group>
  );
}
