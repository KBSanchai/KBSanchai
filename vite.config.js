import { defineConfig } from "vite";

// Relative asset URLs work on the GitHub Pages project path.
export default defineConfig({ base: "./", build: { outDir: "dist" } });
