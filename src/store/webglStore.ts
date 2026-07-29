import { create, type StateCreator } from "zustand";

export type HardwareTier = "high" | "medium" | "low";

export interface WebGLState {
  isCanvasReady: boolean;
  fps: number;
  qualityTier: HardwareTier;
  targetCameraPosition: [number, number, number];
  targetCameraLookAt: [number, number, number];

  // Actions
  setCanvasReady: (ready: boolean) => void;
  setFps: (fps: number) => void;
  setQualityTier: (tier: HardwareTier) => void;
  setCameraTarget: (
    position: [number, number, number],
    lookAt: [number, number, number],
  ) => void;
}

const storeCreator: StateCreator<WebGLState> = (set) => ({
  isCanvasReady: false,
  fps: 60,
  qualityTier: "high",
  targetCameraPosition: [0, 0, 10],
  targetCameraLookAt: [0, 0, 0],

  setCanvasReady: (ready: boolean) => set({ isCanvasReady: ready }),
  setFps: (fps: number) => set({ fps }),
  setQualityTier: (tier: HardwareTier) => set({ qualityTier: tier }),
  setCameraTarget: (
    position: [number, number, number],
    lookAt: [number, number, number],
  ) => set({ targetCameraPosition: position, targetCameraLookAt: lookAt }),
});

export const useWebGLStore = create<WebGLState>(storeCreator);
