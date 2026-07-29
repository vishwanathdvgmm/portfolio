'use client';

import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export function AboutScene() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.2;
      meshRef.current.rotation.y += 0.005;
    }
  });

  return (
    <group position={[0, 0, -100]}>
      {/* 3D Glass Information Monolith */}
      <mesh ref={meshRef} position={[2, 0, -5]}>
        <boxGeometry args={[4, 8, 0.5]} />
        <meshPhysicalMaterial 
          color="#06b6d4" 
          transmission={0.9} 
          opacity={1} 
          metalness={0.1} 
          roughness={0.1} 
          ior={1.5} 
          thickness={0.5} 
        />
      </mesh>
    </group>
  );
}
