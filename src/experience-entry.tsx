import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import ExperiencePage from "@/pages/experience"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ExperiencePage />
  </StrictMode>,
)
