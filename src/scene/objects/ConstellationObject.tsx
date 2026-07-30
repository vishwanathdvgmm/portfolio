"use client";

import React, { useRef, useMemo, useEffect, useState } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { Line } from "@react-three/drei";

export function ConstellationObject() {
  const groupRef = useRef<THREE.Group>(null);

  // 4 oversized stars for the milestones
  const milestonePositions = useMemo(
    () => [
      new THREE.Vector3(-8, 4, -4),
      new THREE.Vector3(5, 2, -2),
      new THREE.Vector3(-4, -3, 2),
      new THREE.Vector3(7, -5, 5),
    ],
    [],
  );

  // Background stars
  const backgroundStarCount = 2000;
  const { bgPositions, bgColors } = useMemo(() => {
    const pos = new Float32Array(backgroundStarCount * 3);
    const cols = new Float32Array(backgroundStarCount * 3);
    for (let i = 0; i < backgroundStarCount; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 100;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 100;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 50 - 10;

      const shade = 0.5 + Math.random() * 0.5;
      cols[i * 3] = shade; // r
      cols[i * 3 + 1] = shade; // g
      cols[i * 3 + 2] = 1.0; // b (slight blue tint)
    }
    return { bgPositions: pos, bgColors: cols };
  }, []);

  const [hoveredMilestone, setHoveredMilestone] = useState<number | null>(null);
  const [animationProgress, setAnimationProgress] = useState(0);
  const isAnimating = useRef(false);

  useEffect(() => {
    const handleEnter = () => {
      // Trigger draw animation
      isAnimating.current = true;
      setAnimationProgress(0);
    };

    const handleHover = (e: Event) => {
      const customEvent = e as CustomEvent<{
        index: number;
        isHovering: boolean;
      }>;
      if (customEvent.detail.isHovering) {
        setHoveredMilestone(customEvent.detail.index);
      } else {
        setHoveredMilestone(null);
      }
    };

    window.addEventListener("timeline-enter", handleEnter);
    window.addEventListener("timeline-hover", handleHover);
    return () => {
      window.removeEventListener("timeline-enter", handleEnter);
      window.removeEventListener("timeline-hover", handleHover);
    };
  }, []);

  useFrame((state, delta) => {
    const time = state.clock.elapsedTime;

    if (groupRef.current) {
      // Slow rotation of the whole galaxy
      groupRef.current.rotation.z = Math.sin(time * 0.1) * 0.1;
      groupRef.current.rotation.x = Math.sin(time * 0.15) * 0.05;
    }

    if (isAnimating.current) {
      setAnimationProgress((prev) => {
        const next = prev + delta * 0.5;
        if (next >= 1) {
          isAnimating.current = false;
          return 1;
        }
        return next;
      });
    }
  });

  return (
    <group ref={groupRef}>
      {/* Background Stars */}
      <points>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={backgroundStarCount}
            array={bgPositions}
            itemSize={3}
          />
          <bufferAttribute
            attach="attributes-color"
            count={backgroundStarCount}
            array={bgColors}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.15}
          vertexColors={true}
          transparent={true}
          opacity={0.4}
          sizeAttenuation={true}
        />
      </points>

      {/* Connecting Paths (Constellation Draw) */}
      <Line
        points={milestonePositions}
        color="#00e5ff"
        lineWidth={2}
        dashed={true}
        dashScale={10}
        dashSize={1}
        dashOffset={100 - animationProgress * 100} // Animates from 100 to 0
        transparent={true}
        opacity={0.8}
      />

      {/* Oversized Milestone Stars */}
      {milestonePositions.map((pos, i) => {
        const isHovered = hoveredMilestone === i;
        const scale = isHovered ? 1.5 : 1;

        return (
          <group key={i} position={pos}>
            {/* The Star Core */}
            <mesh scale={[scale, scale, scale]}>
              <sphereGeometry args={[0.5, 32, 32]} />
              <meshBasicMaterial color={isHovered ? "#00e5ff" : "#ffffff"} />
            </mesh>

            {/* The Glow/Lensing Effect */}
            <mesh scale={[scale * 2.5, scale * 2.5, scale * 2.5]}>
              <sphereGeometry args={[0.5, 32, 32]} />
              <meshBasicMaterial
                color={isHovered ? "#00e5ff" : "#4f46e5"}
                transparent={true}
                opacity={isHovered ? 0.3 : 0.1}
                blending={THREE.AdditiveBlending}
                depthWrite={false}
              />
            </mesh>
          </group>
        );
      })}
    </group>
  );
}
