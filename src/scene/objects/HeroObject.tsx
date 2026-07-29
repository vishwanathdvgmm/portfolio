'use client';

import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

interface MeshLike {
  rotation: { x: number; y: number; z: number };
  position: { x: number; y: number; z: number };
}

export function HeroObject() {
  const meshRef = useRef<MeshLike>(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.2;
      meshRef.current.rotation.y += delta * 0.3;

      const targetX = state.pointer.x * 0.5;
      const targetY = state.pointer.y * 0.5;
      meshRef.current.position.x +=
        (targetX - meshRef.current.position.x) * 0.05;
      meshRef.current.position.y +=
        (targetY - meshRef.current.position.y) * 0.05;
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 0, 0]} castShadow receiveShadow>
      <torusKnotGeometry args={[1.4, 0.45, 128, 32]} />
      <meshPhysicalMaterial
        color="#00e5ff"
        emissive="#0b1021"
        roughness={0.1}
        metalness={0.1}
        transmission={0.6}
        thickness={0.8}
        clearcoat={1.0}
        clearcoatRoughness={0.1}
        wireframe={false}
      />
    </mesh>
  );
}
