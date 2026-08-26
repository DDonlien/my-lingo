import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: process.env.GITHUB_ACTIONS ? "/my-lingo/app/" : "/",
  plugins: [react()],
  server: { port: 5173 },
  build: {
    outDir: process.env.GITHUB_ACTIONS ? "dist/app" : "dist",
  },
});
