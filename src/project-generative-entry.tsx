import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import ProjectPosterPage from "@/pages/project-poster"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ProjectPosterPage slug="generative-pipelines" />
  </StrictMode>,
)
