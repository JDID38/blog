import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import ExperienceSinglePage from "@/pages/experience-single"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ExperienceSinglePage slug="cirkles" />
  </StrictMode>,
)
