import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { glslify } from "vite-plugin-glslify";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), glslify()],
  assetsInclude: ["**/*.glb"],
  base: "/PortfolioGame/", // Replace with your GitHub Pages repo name
  build: {
    outDir: "dist",
  },
});
