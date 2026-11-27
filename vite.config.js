import { defineConfig } from "vite";

// This repository is the account's GitHub Pages user site,
// so assets must be served from the domain root.
export default defineConfig({ base: "/", build: { outDir: "dist" } });
