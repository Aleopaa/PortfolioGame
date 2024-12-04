import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { glslify } from "vite-plugin-glslify";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), glslify()],
  base: "./",
  build: {
    outDir: "dist", // Define the output directory
    assetsDir: "assets", // Specify the assets folder within the dist directory
  },
  assetsInclude: ["**/*.glb", "**/*.jpg", "**/*.png", "**/*.svg"], // Add asset types to include
});
