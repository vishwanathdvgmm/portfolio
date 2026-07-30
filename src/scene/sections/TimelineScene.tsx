"use client";

import React from "react";
import { ConstellationObject } from "../objects/ConstellationObject";

export function TimelineScene() {
  return (
    <group position={[-2.5, -2.5, -425]}>
      <ConstellationObject />
    </group>
  );
}
