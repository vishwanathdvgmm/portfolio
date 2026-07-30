"use client";

import React, { Suspense, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { ScrollControls } from "@react-three/drei";
import { World } from "./World";
import { useWebGLStore } from "../store/webglStore";
import { WebGLErrorBoundary } from "../components/ui/WebGLErrorBoundary";

export function Experience() {
  const { setCanvasReady } = useWebGLStore();
  const [pages, setPages] = useState(6); // Default

  useEffect(() => {
    // We create a ResizeObserver to observe the HTML container's height
    // and adjust the ScrollControls pages dynamically so we never scroll past the footer.
    const updatePages = () => {
      const htmlContainer = document.querySelector(
        ".pointer-events-auto",
      ) as HTMLElement;
      if (htmlContainer) {
        const height = htmlContainer.getBoundingClientRect().height;
        // Pages is exactly the total height divided by viewport height
        // This ensures the translate3d exactly reaches the bottom of the footer.
        setPages(height / window.innerHeight);
      }
    };

    // Initial checks
    setTimeout(updatePages, 100);
    setTimeout(updatePages, 1000); // Failsafe for slow loads
    window.addEventListener("resize", updatePages);

    let observer: ResizeObserver | null = null;

    // We observe the body for child additions to find the pointer-events-auto container
    const mutationObserver = new MutationObserver(() => {
      const htmlContainer = document.querySelector(".pointer-events-auto");
      if (htmlContainer && !observer) {
        observer = new ResizeObserver(updatePages);
        observer.observe(htmlContainer);
        updatePages();
      }
    });

    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("resize", updatePages);
      if (observer) observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);

  return (
    <div className="absolute inset-0 z-0 h-screen w-screen bg-bg-primary">
      <WebGLErrorBoundary>
        <Canvas
          dpr={[1, 2]}
          gl={{
            antialias: true,
            alpha: true,
            powerPreference: "high-performance",
          }}
          onCreated={() => setCanvasReady(true)}
          className="h-full w-full"
        >
          <Suspense fallback={null}>
            <ScrollControls pages={pages} damping={0.25} distance={1.2}>
              <World />
            </ScrollControls>
          </Suspense>
        </Canvas>
      </WebGLErrorBoundary>
    </div>
  );
}
