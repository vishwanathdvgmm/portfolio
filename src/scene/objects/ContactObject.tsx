"use client";

import React, { useRef, useMemo, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export function ContactObject() {
  const groupRef = useRef<THREE.Group>(null);
  const ringsRef = useRef<THREE.Mesh[]>([]);
  const particlesRef = useRef<THREE.Points>(null);
  const lightShaftRef = useRef<THREE.Mesh>(null);
  const lightShaftMaterialRef = useRef<THREE.MeshBasicMaterial>(null);
  const light1Ref = useRef<THREE.PointLight>(null);
  const light2Ref = useRef<THREE.PointLight>(null);

  // Use ref instead of state to avoid re-renders
  const isHoveringRef = useRef(false);

  useEffect(() => {
    const handleHover = (e: Event) => {
      const customEvent = e as CustomEvent<{ isHovering: boolean }>;
      isHoveringRef.current = customEvent.detail.isHovering;
    };

    window.addEventListener("contact-hover", handleHover);
    return () => window.removeEventListener("contact-hover", handleHover);
  }, []);

  // Generate 5 layered energy rings
  const ringCount = 5;

  // Generate particle vortex
  const particleCount = 2000;
  const { positions, angles, radii } = useMemo(() => {
    const p = new Float32Array(particleCount * 3);
    const a = new Float32Array(particleCount);
    const r = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i++) {
      const radius = 2 + Math.random() * 20;
      const angle = Math.random() * Math.PI * 2;

      p[i * 3] = Math.cos(angle) * radius;
      p[i * 3 + 1] = Math.sin(angle) * radius;
      p[i * 3 + 2] = (Math.random() - 0.5) * 40;

      a[i] = angle;
      r[i] = radius;
    }

    return { positions: p, angles: a, radii: r };
  }, []);

  useFrame((state, delta) => {
    const time = state.clock.elapsedTime;
    const hovering = isHoveringRef.current;

    // Update lights imperatively
    if (light1Ref.current) {
      light1Ref.current.intensity = THREE.MathUtils.lerp(
        light1Ref.current.intensity,
        hovering ? 10 : 2,
        0.05,
      );
    }
    if (light2Ref.current) {
      light2Ref.current.intensity = THREE.MathUtils.lerp(
        light2Ref.current.intensity,
        hovering ? 15 : 5,
        0.05,
      );
    }

    // Update light shaft imperatively
    if (lightShaftMaterialRef.current) {
      lightShaftMaterialRef.current.opacity = THREE.MathUtils.lerp(
        lightShaftMaterialRef.current.opacity,
        hovering ? 0.3 : 0,
        0.05,
      );
    }
    if (lightShaftRef.current) {
      const targetScale = hovering ? 2 : 0.01;
      const s = THREE.MathUtils.lerp(
        lightShaftRef.current.scale.x,
        targetScale,
        0.05,
      );
      lightShaftRef.current.scale.set(s, 1, s);
    }

    // Rotate rings
    ringsRef.current.forEach((ring, i) => {
      if (!ring) return;

      const targetSpeed = hovering ? 2.0 : 0.2;
      const direction = i % 2 === 0 ? 1 : -1;

      const targetRotX = hovering ? 0 : Math.sin(time * 0.2 + i) * 0.2;
      const targetRotY = hovering ? 0 : Math.cos(time * 0.3 + i) * 0.2;

      ring.rotation.x = THREE.MathUtils.lerp(ring.rotation.x, targetRotX, 0.05);
      ring.rotation.y = THREE.MathUtils.lerp(ring.rotation.y, targetRotY, 0.05);
      ring.rotation.z += delta * targetSpeed * direction * (i + 1) * 0.5;

      const material = ring.material as THREE.MeshStandardMaterial;
      material.emissiveIntensity = THREE.MathUtils.lerp(
        material.emissiveIntensity,
        hovering ? 2.0 : 0.5,
        0.05,
      );
    });

    // Update particles (Swirling vortex)
    if (particlesRef.current) {
      const posArray = particlesRef.current.geometry.attributes.position
        .array as Float32Array;

      const vortexSpeed = hovering ? 5.0 : 1.0;
      const mx = state.pointer.x * 5;
      const my = state.pointer.y * 5;

      for (let i = 0; i < particleCount; i++) {
        angles[i] += (delta * vortexSpeed) / radii[i];

        let currentRadius = radii[i];
        if (hovering) {
          currentRadius -= delta * 5.0;
          if (currentRadius < 0.5) currentRadius = 20;
          radii[i] = currentRadius;
        } else {
          radii[i] = THREE.MathUtils.lerp(radii[i], 2 + (i % 20), 0.01);
        }

        posArray[i * 3] = Math.cos(angles[i]) * radii[i];
        posArray[i * 3 + 1] = Math.sin(angles[i]) * radii[i];

        if (hovering) {
          posArray[i * 3] += mx;
          posArray[i * 3 + 1] += my;
        }

        posArray[i * 3 + 2] += delta * 10 * vortexSpeed;
        if (posArray[i * 3 + 2] > 20) {
          posArray[i * 3 + 2] = -20;
        }
      }

      particlesRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Lights */}
      <pointLight
        ref={light1Ref}
        color="#ffffff"
        intensity={2}
        distance={50}
        position={[0, 0, 0]}
      />
      <pointLight
        ref={light2Ref}
        color="#fbbf24"
        intensity={5}
        distance={100}
        position={[0, 0, -10]}
      />

      {/* Golden Light Shaft - use fixed geometry, animate scale via ref */}
      <mesh
        ref={lightShaftRef}
        position={[0, 0, 10]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.01, 1, 0.01]}
      >
        <cylinderGeometry args={[1, 1, 50, 32]} />
        <meshBasicMaterial
          ref={lightShaftMaterialRef}
          color="#fbbf24"
          transparent={true}
          opacity={0}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </mesh>

      {/* Layered Portal Rings */}
      {Array.from({ length: ringCount }).map((_, i) => (
        <mesh
          key={i}
          ref={(el: THREE.Mesh | null) => {
            if (el) ringsRef.current[i] = el;
          }}
          scale={[1 - i * 0.1, 1 - i * 0.1, 1]}
          position={[0, 0, -i * 2]}
        >
          <torusGeometry args={[10, 0.2 + i * 0.05, 16, 100]} />
          <meshStandardMaterial
            color="#ffffff"
            emissive={i % 2 === 0 ? "#fbbf24" : "#ffffff"}
            emissiveIntensity={0.5}
            transparent={true}
            opacity={0.8 - i * 0.1}
            roughness={0.2}
            metalness={0.8}
            wireframe={i === 2}
          />
        </mesh>
      ))}

      {/* Particle Vortex */}
      <points ref={particlesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={particleCount}
            array={positions}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.1}
          color="#fbbf24"
          transparent={true}
          opacity={0.6}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
          sizeAttenuation={true}
        />
      </points>
    </group>
  );
}
