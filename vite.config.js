import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  resolve: {
    dedupe: ["react", "react-dom", "react-router-dom"], // ✅ ensures single version
  },
  build: {
    outDir: "dist",
    rollupOptions: {
      external: [],
    },
  },
});
