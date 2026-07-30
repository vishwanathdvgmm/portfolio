"use client";

import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { NeuralNetworkObject } from "../objects/NeuralNetworkObject";

export function SkillsScene() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (groupRef.current) {
      // Very slow global rotation
      groupRef.current.rotation.y += 0.001;
    }
  });

  return (
    <group position={[2.5, 2.5, -225]} scale={[2, 2, 2]}>
      {/* 3D Neural Network */}
      <group ref={groupRef}>
        <NeuralNetworkObject />
      </group>
    </group>
  );
}
