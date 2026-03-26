import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import ProjectsPage from "@/pages/projects"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ProjectsPage />
  </StrictMode>,
)
