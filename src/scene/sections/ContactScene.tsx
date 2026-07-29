"use client";

import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export function ContactScene() {
  const meshRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<THREE.MeshBasicMaterial>(null);
  const scaleRef = useRef(1);
  const targetScaleRef = useRef(1);
  const opacityRef = useRef(0.1);
  const targetOpacityRef = useRef(0.1);

  React.useEffect(() => {
    const handleHover = (e: Event) => {
      const customEvent = e as CustomEvent<{ isHovering: boolean }>;
      targetScaleRef.current = customEvent.detail.isHovering ? 1.1 : 1;
      targetOpacityRef.current = customEvent.detail.isHovering ? 0.4 : 0.1;
    };
    window.addEventListener("contact-hover", handleHover);
    return () => window.removeEventListener("contact-hover", handleHover);
  }, []);

  useFrame((state) => {
    if (meshRef.current && materialRef.current) {
      meshRef.current.rotation.y += 0.005;
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime) * 0.1;

      // Pulse logic
      scaleRef.current = THREE.MathUtils.lerp(
        scaleRef.current,
        targetScaleRef.current,
        0.1,
      );
      meshRef.current.scale.set(
        scaleRef.current,
        scaleRef.current,
        scaleRef.current,
      );

      opacityRef.current = THREE.MathUtils.lerp(
        opacityRef.current,
        targetOpacityRef.current,
        0.1,
      );
      materialRef.current.opacity = opacityRef.current;
    }
  });

  return (
    <group position={[0, 0, -500]}>
      {/* 3D Communication Terminal Ring */}
      <mesh ref={meshRef} position={[0, 0, -10]}>
        <torusGeometry args={[8, 0.05, 16, 100]} />
        <meshBasicMaterial
          ref={materialRef}
          color="#00e5ff"
          transparent
          opacity={0.1}
        />
      </mesh>
    </group>
  );
}
