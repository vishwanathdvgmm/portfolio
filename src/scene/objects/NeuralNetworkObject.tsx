"use client";

import React, { useRef, useMemo, useEffect, useState } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const CATEGORIES = [
  "AI & Machine Learning",
  "Systems & Languages",
  "Backend & DevOps",
  "Frontend & Web",
];

const COLORS = {
  "AI & Machine Learning": new THREE.Color("#06b6d4"), // Cyan
  "Systems & Languages": new THREE.Color("#4f46e5"), // Indigo
  "Backend & DevOps": new THREE.Color("#a855f7"), // Purple
  "Frontend & Web": new THREE.Color("#ffffff"), // White
  Default: new THREE.Color("#1e293b"), // Slate 800
};

interface NetworkNode {
  position: THREE.Vector3;
  category: string;
  isHub: boolean;
  baseColor: THREE.Color;
  velocity: THREE.Vector3;
}

interface NetworkEdge {
  source: number;
  target: number;
  category: string;
}

export function NeuralNetworkObject() {
  const nodesRef = useRef<THREE.InstancedMesh>(null);
  const edgesRef = useRef<THREE.LineSegments>(null);
  const groupRef = useRef<THREE.Group>(null);

  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  // Generate Graph Data
  const { nodes, edges, linePositions, lineColors } = useMemo(() => {
    const nodes: NetworkNode[] = [];
    const edges: NetworkEdge[] = [];
    const clusterCenters = [
      new THREE.Vector3(-4, 2, -2), // AI
      new THREE.Vector3(4, 2, 2), // Systems
      new THREE.Vector3(-3, -2, 4), // Backend
      new THREE.Vector3(3, -3, -3), // Frontend
    ];

    const nodesPerCluster = 15;

    // Generate Nodes
    CATEGORIES.forEach((cat, cIdx) => {
      const center = clusterCenters[cIdx];

      // Central hub node for the category
      nodes.push({
        position: center.clone(),
        category: cat,
        isHub: true,
        baseColor: COLORS[cat as keyof typeof COLORS],
        velocity: new THREE.Vector3(
          (Math.random() - 0.5) * 0.01,
          (Math.random() - 0.5) * 0.01,
          (Math.random() - 0.5) * 0.01,
        ),
      });

      // Child nodes
      for (let i = 0; i < nodesPerCluster; i++) {
        const pos = center
          .clone()
          .add(
            new THREE.Vector3(
              (Math.random() - 0.5) * 4,
              (Math.random() - 0.5) * 4,
              (Math.random() - 0.5) * 4,
            ),
          );

        nodes.push({
          position: pos,
          category: cat,
          isHub: false,
          baseColor: COLORS[cat as keyof typeof COLORS],
          velocity: new THREE.Vector3(
            (Math.random() - 0.5) * 0.02,
            (Math.random() - 0.5) * 0.02,
            (Math.random() - 0.5) * 0.02,
          ),
        });
      }
    });

    // Generate Edges (Connect nodes within the same category to their hub, and occasionally to other hubs)
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const n1 = nodes[i];
        const n2 = nodes[j];

        const dist = n1.position.distanceTo(n2.position);

        // Connect to hub
        if (n1.category === n2.category && (n1.isHub || n2.isHub)) {
          edges.push({ source: i, target: j, category: n1.category });
        }
        // Interconnect children slightly if close
        else if (n1.category === n2.category && dist < 2) {
          edges.push({ source: i, target: j, category: n1.category });
        }
        // Inter-category connections (sparse)
        else if (n1.isHub && n2.isHub) {
          edges.push({ source: i, target: j, category: "Mixed" });
        }
      }
    }

    const linePositions = new Float32Array(edges.length * 6);
    const lineColors = new Float32Array(edges.length * 6);

    return { nodes, edges, linePositions, lineColors };
  }, []);

  const dummy = useMemo(() => new THREE.Object3D(), []);
  const color = useMemo(() => new THREE.Color(), []);

  // Listen to HTML hover events
  useEffect(() => {
    const handleHover = (e: Event) => {
      const customEvent = e as CustomEvent<{
        category: string;
        isHovering: boolean;
      }>;
      if (customEvent.detail.isHovering) {
        setHoveredCategory(customEvent.detail.category);
      } else {
        setHoveredCategory(null);
      }
    };

    window.addEventListener("skill-hover", handleHover);
    return () => window.removeEventListener("skill-hover", handleHover);
  }, []);

  // Animation Loop
  useFrame((state, delta) => {
    const time = state.clock.elapsedTime;

    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.05;
      groupRef.current.position.y = Math.sin(time * 0.5) * 0.5;
    }

    // Update Nodes
    if (nodesRef.current) {
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];

        // Slight organic movement
        node.position.add(node.velocity);
        // Bounce within boundary relative to hub (if not hub)
        // For simplicity, just let them wander slowly and use a sine wave
        const wobbleX = Math.sin(time * 0.5 + i) * 0.01;
        const wobbleY = Math.cos(time * 0.4 + i) * 0.01;

        dummy.position.copy(node.position);
        dummy.position.x += wobbleX;
        dummy.position.y += wobbleY;

        // Scale based on hub and hover state
        let targetScale = node.isHub ? 0.4 : 0.15;

        // Hover WOW effect
        const isFaded =
          hoveredCategory !== null && node.category !== hoveredCategory;
        const isHighlighted =
          hoveredCategory !== null && node.category === hoveredCategory;

        if (isHighlighted) targetScale *= 1.5;
        if (isFaded) targetScale *= 0.5;

        dummy.scale.setScalar(targetScale);
        dummy.updateMatrix();
        nodesRef.current.setMatrixAt(i, dummy.matrix);

        // Color based on hover state
        if (isFaded) {
          color.copy(COLORS["Default"]);
        } else {
          color.copy(node.baseColor);
        }
        nodesRef.current.setColorAt(i, color);
      }

      nodesRef.current.instanceMatrix.needsUpdate = true;
      if (nodesRef.current.instanceColor)
        nodesRef.current.instanceColor.needsUpdate = true;
    }

    // Update Edges
    if (edgesRef.current) {
      const positions = edgesRef.current.geometry.attributes.position
        .array as Float32Array;
      const colors = edgesRef.current.geometry.attributes.color
        .array as Float32Array;

      for (let i = 0; i < edges.length; i++) {
        const edge = edges[i];
        const n1 = nodes[edge.source];
        const n2 = nodes[edge.target];

        // Apply same wobble
        const w1X = Math.sin(time * 0.5 + edge.source) * 0.01;
        const w1Y = Math.cos(time * 0.4 + edge.source) * 0.01;
        const w2X = Math.sin(time * 0.5 + edge.target) * 0.01;
        const w2Y = Math.cos(time * 0.4 + edge.target) * 0.01;

        positions[i * 6] = n1.position.x + w1X;
        positions[i * 6 + 1] = n1.position.y + w1Y;
        positions[i * 6 + 2] = n1.position.z;

        positions[i * 6 + 3] = n2.position.x + w2X;
        positions[i * 6 + 4] = n2.position.y + w2Y;
        positions[i * 6 + 5] = n2.position.z;

        // Color logic for lines (Pulse effect)
        const isFaded =
          hoveredCategory !== null && edge.category !== hoveredCategory;
        const isHighlighted =
          hoveredCategory !== null && edge.category === hoveredCategory;

        let edgeColor = COLORS["Default"];
        if (!isFaded) {
          edgeColor =
            edge.category === "Mixed"
              ? COLORS["Default"]
              : COLORS[edge.category as keyof typeof COLORS];
        }

        // Data flow pulse effect
        const pulse = (Math.sin(time * 3 - i * 0.1) + 1) / 2;
        const intensity = isHighlighted
          ? 0.8 + pulse * 0.2
          : isFaded
            ? 0.1
            : 0.3 + pulse * 0.3;

        const r = edgeColor.r * intensity;
        const g = edgeColor.g * intensity;
        const b = edgeColor.b * intensity;

        colors[i * 6] = r;
        colors[i * 6 + 1] = g;
        colors[i * 6 + 2] = b;

        colors[i * 6 + 3] = r;
        colors[i * 6 + 4] = g;
        colors[i * 6 + 5] = b;
      }

      edgesRef.current.geometry.attributes.position.needsUpdate = true;
      edgesRef.current.geometry.attributes.color.needsUpdate = true;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Nodes */}
      <instancedMesh ref={nodesRef} args={[undefined, undefined, nodes.length]}>
        <sphereGeometry args={[1, 16, 16]} />
        <meshBasicMaterial toneMapped={false} />
      </instancedMesh>

      {/* Edges */}
      <lineSegments ref={edgesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={linePositions.length / 3}
            array={linePositions}
            itemSize={3}
          />
          <bufferAttribute
            attach="attributes-color"
            count={lineColors.length / 3}
            array={lineColors}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial
          vertexColors={true}
          transparent={true}
          opacity={0.6}
        />
      </lineSegments>
    </group>
  );
}
