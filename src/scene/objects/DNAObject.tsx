"use client";

import React, { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export function DNAObject() {
  const strand1Ref = useRef<THREE.InstancedMesh>(null);
  const strand2Ref = useRef<THREE.InstancedMesh>(null);
  const rungsRef = useRef<THREE.InstancedMesh>(null);
  const groupRef = useRef<THREE.Group>(null);

  const count = 150; // Pairs of bases
  const radius = 2;
  const heightSpacing = 0.3;
  const twists = 3;

  const dummy = useMemo(() => new THREE.Object3D(), []);

  // Physics tracking for DNA unravel interaction
  const unravelAmount = useRef(0);

  // Initialize instanced meshes
  useFrame((state, delta) => {
    // 1. Mouse distance for unravel effect
    const mx = state.pointer.x; // -1 to 1
    const my = state.pointer.y; // -1 to 1

    // Unravel effect driven by scroll position
    // We want the DNA to unravel as the user scrolls through the About section.
    // The About section is roughly between offset 0.1 and 0.3.
    // We can use the camera's Z position or the scroll offset directly.

    // The camera reaches About (Z=-100) around offset = 0.2
    // Let's make it fully unraveled when the camera gets close to the DNA (Z=-125)
    // We can just calculate the distance between the camera and the DNA!
    const distToCamera = state.camera.position.distanceTo(
      groupRef.current?.position || new THREE.Vector3(0, 0, 0),
    );

    // When distance is large (> 100), it's 0. When distance is small (< 40), it's 1
    const targetUnravel = THREE.MathUtils.clamp(
      1 - (distToCamera - 40) / 60,
      0,
      1,
    );

    unravelAmount.current = THREE.MathUtils.lerp(
      unravelAmount.current,
      targetUnravel,
      0.05,
    );

    // 2. Base Rotation of the entire group
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.2;
      groupRef.current.position.y =
        Math.sin(state.clock.elapsedTime * 0.5) * 0.5;

      // Slight parallax tilt based on mouse
      const targetRotX = my * 0.2;
      const targetRotZ = mx * -0.2;
      groupRef.current.rotation.x = THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        targetRotX,
        0.05,
      );
      groupRef.current.rotation.z = THREE.MathUtils.lerp(
        groupRef.current.rotation.z,
        targetRotZ,
        0.05,
      );
    }

    // 3. Update Instances dynamically for unraveling
    if (strand1Ref.current && strand2Ref.current && rungsRef.current) {
      for (let i = 0; i < count; i++) {
        // Base positions for Helix
        const t = i / count;
        const angle = t * Math.PI * 2 * twists;
        const y = (i - count / 2) * heightSpacing;

        // Helix coordinates
        const hx1 = Math.cos(angle) * radius;
        const hz1 = Math.sin(angle) * radius;

        const hx2 = Math.cos(angle + Math.PI) * radius;
        const hz2 = Math.sin(angle + Math.PI) * radius;

        // Grid coordinates for Unravel effect
        // We'll flatten it out into a 2D grid plane
        const gridCols = 10;
        const col = i % gridCols;
        const row = Math.floor(i / gridCols);

        const gx1 = (col - gridCols / 2) * 1.5;
        const gy1 = (row - count / gridCols / 2) * 1.5;
        const gz1 = 0;

        const gx2 = gx1 + 0.5;
        const gy2 = gy1;
        const gz2 = 0;

        // Interpolate between Helix and Grid based on unravelAmount
        const u = unravelAmount.current;

        // Strand 1
        const x1 = THREE.MathUtils.lerp(hx1, gx1, u);
        const currentY1 = THREE.MathUtils.lerp(y, gy1, u);
        const z1 = THREE.MathUtils.lerp(hz1, gz1, u);

        dummy.position.set(x1, currentY1, z1);
        dummy.scale.setScalar(1 + u * 0.5); // Spheres get slightly bigger in grid mode
        dummy.updateMatrix();
        strand1Ref.current.setMatrixAt(i, dummy.matrix);

        // Strand 2
        const x2 = THREE.MathUtils.lerp(hx2, gx2, u);
        const currentY2 = THREE.MathUtils.lerp(y, gy2, u);
        const z2 = THREE.MathUtils.lerp(hz2, gz2, u);

        dummy.position.set(x2, currentY2, z2);
        dummy.updateMatrix();
        strand2Ref.current.setMatrixAt(i, dummy.matrix);

        // Rungs
        const cx = (x1 + x2) / 2;
        const cy = (currentY1 + currentY2) / 2;
        const cz = (z1 + z2) / 2;

        // Rung length changes if in grid mode
        const length = THREE.MathUtils.lerp(radius * 2, 0.5, u);

        dummy.position.set(cx, cy, cz);

        // Point the rung from strand 1 to strand 2
        const target = new THREE.Vector3(x2, currentY2, z2);
        dummy.lookAt(target);

        // Scale Z to reach between strands
        dummy.scale.set(0.5, 0.5, length);
        dummy.updateMatrix();
        rungsRef.current.setMatrixAt(i, dummy.matrix);
      }

      strand1Ref.current.instanceMatrix.needsUpdate = true;
      strand2Ref.current.instanceMatrix.needsUpdate = true;
      rungsRef.current.instanceMatrix.needsUpdate = true;
    }
  });

  return (
    <group ref={groupRef}>
      <pointLight color="#ffffff" intensity={2} distance={20} />
      <pointLight
        color="#06b6d4"
        intensity={1}
        distance={30}
        position={[5, 0, 5]}
      />

      {/* Strand 1 (Cyan) */}
      <instancedMesh ref={strand1Ref} args={[undefined, undefined, count]}>
        <sphereGeometry args={[0.3, 16, 16]} />
        <meshPhysicalMaterial
          color="#06b6d4"
          emissive="#06b6d4"
          emissiveIntensity={0.5}
          roughness={0.2}
          metalness={0.8}
          transmission={0.5}
        />
      </instancedMesh>

      {/* Strand 2 (White) */}
      <instancedMesh ref={strand2Ref} args={[undefined, undefined, count]}>
        <sphereGeometry args={[0.3, 16, 16]} />
        <meshPhysicalMaterial
          color="#ffffff"
          emissive="#ffffff"
          emissiveIntensity={0.5}
          roughness={0.2}
          metalness={0.8}
        />
      </instancedMesh>

      {/* Connecting Rungs (Subtle Glass) */}
      <instancedMesh ref={rungsRef} args={[undefined, undefined, count]}>
        <cylinderGeometry args={[0.05, 0.05, 1, 8]} />
        <meshPhysicalMaterial
          color="#e0f2fe"
          transmission={0.9}
          opacity={0.6}
          transparent={true}
          roughness={0.1}
          metalness={0.1}
        />
      </instancedMesh>
    </group>
  );
}
