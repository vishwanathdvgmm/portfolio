"use client";

import { useEffect } from "react";

/**
 * A headless component that tracks global mouse movement and sets CSS custom properties
 * on the document element. This allows CSS-based parallax and hover effects without
 * triggering React re-renders.
 *
 * Properties exposed:
 * --mouse-x: Normalized X position (-1 to 1)
 * --mouse-y: Normalized Y position (-1 to 1)
 * --mouse-abs-x: Absolute client X (px)
 * --mouse-abs-y: Absolute client Y (px)
 */
export function MouseTracker() {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Calculate normalized coordinates (-1 to 1)
      const nx = (e.clientX / window.innerWidth) * 2 - 1;
      const ny = -(e.clientY / window.innerHeight) * 2 + 1; // standard WebGL coordinates

      document.documentElement.style.setProperty("--mouse-x", nx.toString());
      document.documentElement.style.setProperty("--mouse-y", ny.toString());
      document.documentElement.style.setProperty(
        "--mouse-abs-x",
        `${e.clientX}px`,
      );
      document.documentElement.style.setProperty(
        "--mouse-abs-y",
        `${e.clientY}px`,
      );
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return null;
}
