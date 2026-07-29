"use client";

import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export function SkillsScene() {
  const groupRef = useRef<THREE.Group>(null);

  const speedRef = useRef(0.002);
  const targetSpeedRef = useRef(0.002);

  React.useEffect(() => {
    const handleHover = (e: Event) => {
      const customEvent = e as CustomEvent<{
        category: string;
        isHovering: boolean;
      }>;
      targetSpeedRef.current = customEvent.detail.isHovering ? 0.02 : 0.002;
    };
    window.addEventListener("skill-hover", handleHover);
    return () => window.removeEventListener("skill-hover", handleHover);
  }, []);

  useFrame(() => {
    if (groupRef.current) {
      // Lerp the speed for smooth acceleration/deceleration
      speedRef.current = THREE.MathUtils.lerp(
        speedRef.current,
        targetSpeedRef.current,
        0.05,
      );
      groupRef.current.rotation.y += speedRef.current;
    }
  });

  return (
    <group position={[0, 0, -200]}>
      {/* 3D Technology Galaxy */}
      <group ref={groupRef} position={[-3, 0, -8]}>
        {/* Central Core */}
        <mesh>
          <sphereGeometry args={[1, 32, 32]} />
          <meshBasicMaterial color="#a855f7" wireframe />
        </mesh>

        {/* Orbital nodes */}
        {Array.from({ length: 12 }).map((_, i) => (
          <mesh
            key={i}
            position={[
              Math.cos((i / 12) * Math.PI * 2) * 4,
              Math.sin((i / 12) * Math.PI * 2) * 2,
              Math.sin((i / 12) * Math.PI * 2) * 4,
            ]}
          >
            <sphereGeometry args={[0.2, 16, 16]} />
            <meshStandardMaterial
              color="#06b6d4"
              emissive="#06b6d4"
              emissiveIntensity={0.5}
            />
          </mesh>
        ))}
      </group>
    </group>
  );
}
