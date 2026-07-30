"use client";

import React, { useRef, useMemo, useEffect } from "react";
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

  // Use refs instead of state to avoid re-renders inside useFrame
  const hoveredMilestoneRef = useRef<number | null>(null);
  const animationProgressRef = useRef(0);
  const isAnimatingRef = useRef(false);

  // Milestone star refs for updating scale/color imperatively
  const starCoreRefs = useRef<(THREE.Mesh | null)[]>([]);
  const starGlowRefs = useRef<(THREE.Mesh | null)[]>([]);
  const starCoreMaterials = useRef<(THREE.MeshBasicMaterial | null)[]>([]);
  const starGlowMaterials = useRef<(THREE.MeshBasicMaterial | null)[]>([]);

  useEffect(() => {
    const handleEnter = () => {
      isAnimatingRef.current = true;
      animationProgressRef.current = 0;
    };

    const handleHover = (e: Event) => {
      const customEvent = e as CustomEvent<{
        index: number;
        isHovering: boolean;
      }>;
      if (customEvent.detail.isHovering) {
        hoveredMilestoneRef.current = customEvent.detail.index;
      } else {
        hoveredMilestoneRef.current = null;
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
      groupRef.current.rotation.z = Math.sin(time * 0.1) * 0.1;
      groupRef.current.rotation.x = Math.sin(time * 0.15) * 0.05;
    }

    if (isAnimatingRef.current) {
      animationProgressRef.current += delta * 0.5;
      if (animationProgressRef.current >= 1) {
        isAnimatingRef.current = false;
        animationProgressRef.current = 1;
      }
    }

    // Update milestone stars imperatively (no React re-render!)
    const hovered = hoveredMilestoneRef.current;
    for (let i = 0; i < milestonePositions.length; i++) {
      const isHovered = hovered === i;
      const targetScale = isHovered ? 1.5 : 1;

      const core = starCoreRefs.current[i];
      if (core) {
        const s = THREE.MathUtils.lerp(core.scale.x, targetScale, 0.1);
        core.scale.set(s, s, s);
      }

      const glow = starGlowRefs.current[i];
      if (glow) {
        const gs = THREE.MathUtils.lerp(glow.scale.x, targetScale * 2.5, 0.1);
        glow.scale.set(gs, gs, gs);
      }

      const coreMat = starCoreMaterials.current[i];
      if (coreMat) {
        coreMat.color.lerp(
          isHovered ? new THREE.Color("#00e5ff") : new THREE.Color("#ffffff"),
          0.1,
        );
      }

      const glowMat = starGlowMaterials.current[i];
      if (glowMat) {
        glowMat.color.lerp(
          isHovered ? new THREE.Color("#00e5ff") : new THREE.Color("#4f46e5"),
          0.1,
        );
        glowMat.opacity = THREE.MathUtils.lerp(
          glowMat.opacity,
          isHovered ? 0.3 : 0.1,
          0.1,
        );
      }
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
        dashOffset={0}
        transparent={true}
        opacity={0.8}
      />

      {/* Oversized Milestone Stars */}
      {milestonePositions.map((pos, i) => (
        <group key={i} position={pos}>
          {/* The Star Core */}
          <mesh
            ref={(el: THREE.Mesh | null) => {
              starCoreRefs.current[i] = el;
            }}
          >
            <sphereGeometry args={[0.5, 32, 32]} />
            <meshBasicMaterial
              ref={(el: THREE.MeshBasicMaterial | null) => {
                starCoreMaterials.current[i] = el;
              }}
              color="#ffffff"
            />
          </mesh>

          {/* The Glow/Lensing Effect */}
          <mesh
            ref={(el: THREE.Mesh | null) => {
              starGlowRefs.current[i] = el;
            }}
            scale={[2.5, 2.5, 2.5]}
          >
            <sphereGeometry args={[0.5, 32, 32]} />
            <meshBasicMaterial
              ref={(el: THREE.MeshBasicMaterial | null) => {
                starGlowMaterials.current[i] = el;
              }}
              color="#4f46e5"
              transparent={true}
              opacity={0.1}
              blending={THREE.AdditiveBlending}
              depthWrite={false}
            />
          </mesh>
        </group>
      ))}
    </group>
  );
}
