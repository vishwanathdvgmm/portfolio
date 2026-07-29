'use client';

import React, { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useScroll } from '@react-three/drei';
import * as THREE from 'three';

export function CameraController() {
  const scroll = useScroll();
  const cameraGroup = useRef<THREE.Group>(null);

  // Define a cinematic spline path for the camera to follow through the world
  const curve = useMemo(() => {
    return new THREE.CatmullRomCurve3([
      new THREE.Vector3(0, 0, 10),       // Start (Hero)
      new THREE.Vector3(5, 0, -50),      // Curve right
      new THREE.Vector3(0, 5, -100),     // About Scene (Knowledge Archive)
      new THREE.Vector3(-10, 0, -150),   // Curve left
      new THREE.Vector3(0, 0, -200),     // Skills Scene (Tech Galaxy)
      new THREE.Vector3(5, 5, -250),     // Rise up
      new THREE.Vector3(0, 0, -300),     // Projects Scene (Laboratory)
      new THREE.Vector3(-5, -5, -350),   // Dip down
      new THREE.Vector3(0, 0, -400),     // Timeline (Corridor)
      new THREE.Vector3(0, 0, -500),     // Contact (Terminal)
    ], false, 'catmullrom', 0.5);
  }, []);

  useFrame((state) => {
    if (!cameraGroup.current) return;

    // Get current scroll offset (0 to 1)
    const offset = scroll.offset;

    // Get position on curve
    const point = curve.getPointAt(offset);
    
    // Look ahead a little bit for smooth camera rotation
    const lookAhead = Math.min(offset + 0.05, 1.0);
    const target = curve.getPointAt(lookAhead);

    // Smoothly interpolate camera position using GSAP-like dampening (lerp)
    cameraGroup.current.position.lerp(point, 0.1);
    
    // Smoothly look at the target
    const currentLookAt = new THREE.Vector3(0,0,-1).applyQuaternion(cameraGroup.current.quaternion).add(cameraGroup.current.position);
    currentLookAt.lerp(target, 0.1);
    cameraGroup.current.lookAt(currentLookAt);

    // Add slight mouse parallax to the camera
    const mouseX = (state.pointer.x * 2);
    const mouseY = (state.pointer.y * 2);
    
    state.camera.position.x = THREE.MathUtils.lerp(state.camera.position.x, mouseX, 0.05);
    state.camera.position.y = THREE.MathUtils.lerp(state.camera.position.y, mouseY, 0.05);
  });

  return (
    <group ref={cameraGroup}>
      <perspectiveCamera makeDefault fov={45} near={0.1} far={1000} />
    </group>
  );
}
