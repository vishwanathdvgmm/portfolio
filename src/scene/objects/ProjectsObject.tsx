"use client";

import React, { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export function ProjectsObject() {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const groupRef = useRef<THREE.Group>(null);

  // Create a curved array of 12 glass monolithic screens
  const { dummy, count } = useMemo(() => {
    const dummy = new THREE.Object3D();
    return { dummy, count: 12 };
  }, []);

  useFrame((state, delta) => {
    if (groupRef.current) {
      // Very slow global rotation
      groupRef.current.rotation.y += delta * 0.02;
      groupRef.current.position.y =
        Math.sin(state.clock.elapsedTime * 0.5) * 0.5;
    }

    if (meshRef.current) {
      const time = state.clock.elapsedTime;
      // Mouse interaction
      const mx = (state.pointer.x * Math.PI) / 8;
      const my = (state.pointer.y * Math.PI) / 8;

      for (let i = 0; i < count; i++) {
        // Distribute in a semi-circle (curved array)
        const angle = (i / count) * Math.PI * 2;
        const radius = 10;

        const x = Math.cos(angle) * radius;
        const z = Math.sin(angle) * radius;

        // Add some vertical staggering
        const y = Math.sin(i * 1.5) * 2;

        dummy.position.set(x, y, z);

        // Make them face outwards from center
        dummy.rotation.set(0, -angle + Math.PI / 2, 0);

        // Add floating wobble
        dummy.position.y += Math.sin(time + i) * 0.5;

        // Add parallax tilt from mouse
        dummy.rotation.x += my;
        dummy.rotation.z += mx;

        // Screens have different scales
        const scaleX = 2 + Math.sin(i) * 0.5;
        const scaleY = 3 + Math.cos(i) * 1;
        dummy.scale.set(scaleX, scaleY, 0.1);

        dummy.updateMatrix();
        meshRef.current.setMatrixAt(i, dummy.matrix);
      }
      meshRef.current.instanceMatrix.needsUpdate = true;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Lighting for the screens */}
      <pointLight
        color="#a855f7"
        intensity={5}
        distance={20}
        position={[0, 0, 0]}
      />
      <pointLight
        color="#ec4899"
        intensity={3}
        distance={20}
        position={[0, 5, 0]}
      />

      <instancedMesh
        ref={meshRef}
        args={[null as any, null as any, count]}
        castShadow
        receiveShadow
      >
        <boxGeometry args={[1, 1, 1]} />
        <meshPhysicalMaterial
          color="#1e1b4b"
          emissive="#4c1d95"
          emissiveIntensity={0.2}
          roughness={0.1}
          metalness={0.8}
          transmission={0.9}
          thickness={0.5}
          ior={1.5}
          transparent={true}
          opacity={0.8}
          side={THREE.DoubleSide}
        />
      </instancedMesh>
    </group>
  );
}
