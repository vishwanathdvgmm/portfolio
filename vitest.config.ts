import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  // @ts-ignore - Type mismatch between Vite and Vitest plugin types
  plugins: [react() as any],
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: "./src/__tests__/setup.ts",
    exclude: ["node_modules", "e2e/**"],
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
