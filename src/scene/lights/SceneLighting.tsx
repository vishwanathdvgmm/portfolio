'use client';

import React from 'react';

export function SceneLighting() {
  return (
    <>
      {/* Ambient background illumination */}
      <ambientLight intensity={0.4} color="#0b1021" />

      {/* Main key light */}
      <directionalLight
        position={[10, 10, 10]}
        intensity={1.2}
        color="#ffffff"
        castShadow
      />

      {/* Cyan Accent Light */}
      <pointLight
        position={[-10, -5, -5]}
        intensity={2.0}
        color="#00e5ff"
        distance={25}
      />

      {/* Purple Accent Light */}
      <pointLight
        position={[10, -8, 5]}
        intensity={1.8}
        color="#a855f7"
        distance={30}
      />
    </>
  );
}
