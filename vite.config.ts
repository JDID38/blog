import path from "path"
import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import tailwindcss from "@tailwindcss/vite"

export default defineConfig({
  base: "/blog/",
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "index.html"),
        projectFluid: path.resolve(__dirname, "projects/fluid-diffusion/index.html"),
        projectGenerative: path.resolve(__dirname, "projects/generative-pipelines/index.html"),
        projectMarl: path.resolve(__dirname, "projects/marl-social-dilemmas/index.html"),
        projectSoccer: path.resolve(__dirname, "projects/soccer-financial-trends/index.html"),
        experienceCirkles: path.resolve(__dirname, "experience/cirkles/index.html"),
        experienceThales: path.resolve(__dirname, "experience/thales/index.html"),
      },
    },
  },
})
