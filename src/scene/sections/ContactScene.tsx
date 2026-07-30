"use client";

import React from "react";
import { ContactObject } from "../objects/ContactObject";

export function ContactScene() {
  return (
    <group position={[0, 0, -520]}>
      <ContactObject />
    </group>
  );
}
