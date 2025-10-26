import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // allows @/assets/...
    },
    dedupe: ["react", "react-dom", "react-router-dom"],
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
  build: {
    outDir: "dist",
  },
});
