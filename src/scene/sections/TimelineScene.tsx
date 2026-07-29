'use client';

import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export function TimelineScene() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.position.z = Math.sin(state.clock.elapsedTime * 0.5) * 2;
    }
  });

  return (
    <group position={[0, 0, -400]}>
      {/* 3D Development Corridor Pillars */}
      <group ref={groupRef} position={[-4, -2, -10]}>
        {Array.from({ length: 5 }).map((_, i) => (
          <mesh key={i} position={[i * 2, i * 0.5, -i * 5]}>
            <cylinderGeometry args={[0.1, 0.1, 4, 8]} />
            <meshStandardMaterial color="#06b6d4" emissive="#06b6d4" emissiveIntensity={0.5} />
          </mesh>
        ))}
      </group>

      <group position={[4, -2, -10]}>
        {Array.from({ length: 5 }).map((_, i) => (
          <mesh key={i} position={[-i * 2, i * 0.5, -i * 5]}>
            <cylinderGeometry args={[0.1, 0.1, 4, 8]} />
            <meshStandardMaterial color="#a855f7" emissive="#a855f7" emissiveIntensity={0.5} />
          </mesh>
        ))}
      </group>
    </group>
  );
}
