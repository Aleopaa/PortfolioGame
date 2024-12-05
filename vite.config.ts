import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { glslify } from "vite-plugin-glslify";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), glslify()],
  base: "/PortfolioGame/",
  build: {
    outDir: "dist", // Define the output directory
    assetsDir: "assets", // Specify the assets folder within the dist directory
    rollupOptions: {
      input: "./index.html", // make sure the correct entry point is here
    },
  },
  assetsInclude: ["**/*.glb", "**/*.jpg", "**/*.png", "**/*.svg"], // Add asset types to include
});
