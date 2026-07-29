'use client';

import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export function ProjectsScene() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.children.forEach((child, i) => {
        child.rotation.x += 0.005 + (i * 0.001);
        child.rotation.y += 0.01 + (i * 0.001);
        child.position.y = Math.sin(state.clock.elapsedTime + i) * 0.5;
      });
    }
  });

  return (
    <group position={[0, 0, -300]}>
      {/* 3D Holographic Cubes */}
      <group ref={groupRef} position={[3, 0, -5]}>
        <mesh position={[0, 2, 0]}>
          <boxGeometry args={[1.5, 1.5, 1.5]} />
          <meshStandardMaterial color="#6366f1" wireframe emissive="#6366f1" emissiveIntensity={0.2} />
        </mesh>
        <mesh position={[2, -1, -2]}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="#06b6d4" wireframe emissive="#06b6d4" emissiveIntensity={0.2} />
        </mesh>
        <mesh position={[-2, -2, 1]}>
          <boxGeometry args={[1.2, 1.2, 1.2]} />
          <meshStandardMaterial color="#a855f7" wireframe emissive="#a855f7" emissiveIntensity={0.2} />
        </mesh>
      </group>
    </group>
  );
}
