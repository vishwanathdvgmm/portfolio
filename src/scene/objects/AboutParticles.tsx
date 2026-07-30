"use client";

import React, { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export function AboutParticles() {
  const count = 150; // Less dense than hero, meant to represent structured data
  const meshRef = useRef<THREE.InstancedMesh>(null);

  const dummy = useMemo(() => new THREE.Object3D(), []);

  // Store individual particle rotation speeds and orbit radii
  const particleData = useMemo(() => {
    const data = [];
    for (let i = 0; i < count; i++) {
      data.push({
        orbitRadius: 4 + Math.random() * 6,
        orbitSpeed: (Math.random() - 0.5) * 0.5,
        rotationSpeed: {
          x: Math.random() * 0.02,
          y: Math.random() * 0.02,
          z: Math.random() * 0.02,
        },
        heightOffset: (Math.random() - 0.5) * 30, // Spread vertically along the DNA
        angle: Math.random() * Math.PI * 2,
      });
    }
    return data;
  }, [count]);

  const colors = useMemo(() => {
    const col = new Float32Array(count * 3);
    const color = new THREE.Color();
    for (let i = 0; i < count; i++) {
      // White and Cyan mix
      color.setHex(Math.random() > 0.3 ? 0xffffff : 0x06b6d4);
      col[i * 3] = color.r;
      col[i * 3 + 1] = color.g;
      col[i * 3 + 2] = color.b;
    }
    return col;
  }, [count]);

  useFrame((state, delta) => {
    if (!meshRef.current) return;

    // We calculate mouse position to affect the cubes slightly
    const mx = state.pointer.x;
    const my = state.pointer.y;
    const time = state.clock.elapsedTime;

    for (let i = 0; i < count; i++) {
      const data = particleData[i];

      // Update orbit angle
      data.angle += data.orbitSpeed * delta;

      // Add a slight wobble
      const wobble = Math.sin(time * 2 + i) * 0.5;

      // Calculate position
      const x = Math.cos(data.angle) * (data.orbitRadius + wobble);
      const z = Math.sin(data.angle) * (data.orbitRadius + wobble);

      // Slight parallax based on mouse
      const px = x + mx * 2;
      const py = data.heightOffset + my * 2;
      const pz = z;

      dummy.position.set(px, py, pz);

      // Add self-rotation
      dummy.rotation.x += data.rotationSpeed.x;
      dummy.rotation.y += data.rotationSpeed.y;
      dummy.rotation.z += data.rotationSpeed.z;

      // Small cubes
      dummy.scale.setScalar(0.2);
      dummy.updateMatrix();

      meshRef.current.setMatrixAt(i, dummy.matrix);
    }
    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
      <boxGeometry args={[1, 1, 1]} />
      <instancedBufferAttribute attach="instanceColor" args={[colors, 3]} />
      <meshPhysicalMaterial
        vertexColors
        roughness={0.1}
        metalness={0.8}
        transmission={0.8} // Glassy data cubes
        thickness={0.5}
        transparent={true}
        opacity={0.8}
      />
    </instancedMesh>
  );
}
