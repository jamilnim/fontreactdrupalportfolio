import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  resolve: {
    dedupe: ["react", "react-dom", "react-router-dom"],
  },
  optimizeDeps: {
    include: ["styled-components"], // ✅ pre-bundle styled-components for Vite
  },
  build: {
    rollupOptions: {
      external: [], // ✅ do NOT mark styled-components as external
    },
  },
});
