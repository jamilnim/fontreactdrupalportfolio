import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  resolve: {
    dedupe: ["react", "react-dom", "react-router-dom"],
    extensions: [".js", ".jsx", ".ts", ".tsx"], // ✅ ensures Vite resolves .jsx files
  },
  build: {
    outDir: "dist",
    rollupOptions: {
      external: [],
    },
  },
});
