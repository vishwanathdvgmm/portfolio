/* eslint-disable @typescript-eslint/no-explicit-any */

// Module declaration for @react-three/fiber (ships without .d.ts)
declare module "@react-three/fiber" {
  import type { ReactNode } from "react";

  export interface RootState {
    pointer: { x: number; y: number };
    clock: { elapsedTime: number; getDelta: () => number };
    camera: any;
    scene: any;
    gl: any;
  }

  export type FrameCallback = (state: RootState, delta: number) => void;

  export function Canvas(props: {
    children?: ReactNode;
    camera?: Record<string, unknown>;
    dpr?: [number, number] | number;
    gl?: Record<string, unknown>;
    onCreated?: (state: any) => void;
    className?: string;
    style?: React.CSSProperties;
    [key: string]: unknown;
  }): JSX.Element;

  export function useFrame(callback: FrameCallback): void;
  export function useThree(): RootState;
}

// Extend JSX to include all R3F / Three.js intrinsic elements
declare namespace JSX {
  interface IntrinsicElements {
    // Meshes & Groups
    mesh: any;
    group: any;
    points: any;
    line: any;
    lineSegments: any;
    instancedMesh: any;

    // Geometries
    bufferGeometry: any;
    boxGeometry: any;
    sphereGeometry: any;
    planeGeometry: any;
    torusGeometry: any;
    torusKnotGeometry: any;
    cylinderGeometry: any;
    coneGeometry: any;
    icosahedronGeometry: any;

    // Buffer attributes
    bufferAttribute: any;

    // Materials
    meshBasicMaterial: any;
    meshStandardMaterial: any;
    meshPhysicalMaterial: any;
    meshLambertMaterial: any;
    meshPhongMaterial: any;
    shaderMaterial: any;
    pointsMaterial: any;
    lineBasicMaterial: any;
    lineDashedMaterial: any;

    // Lights
    ambientLight: any;
    directionalLight: any;
    pointLight: any;
    spotLight: any;
    hemisphereLight: any;
    rectAreaLight: any;

    // Helpers
    gridHelper: any;
    axesHelper: any;

    // Camera
    perspectiveCamera: any;
    orthographicCamera: any;

    // Misc
    fog: any;
    color: any;
    primitive: any;
  }
}
