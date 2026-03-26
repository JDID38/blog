import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

const experiences = [
  {
    role: "Software Engineer",
    org: "Cirkles.ai",
    tags: ["Full-Stack", "AI"],
  },
  {
    role: "Data Scientist",
    org: "Thales",
    tags: ["ML", "Defense"],
  },
]

const projects = [
  {
    title: "3D Fluid Flow Diffusion Models",
    description:
      "Score-based generative modelling for turbulent flow fields — coupling deep learning with computational fluid dynamics.",
    tags: ["Diffusion", "CFD", "PyTorch"],
  },
  {
    title: "Generative Pipelines",
    description:
      "End-to-end diffusion and autoregressive architectures for scientific data generation and simulation.",
    tags: ["Generative AI", "Autoregressive", "Research"],
  },
]

function App() {
  return (
    <div className="min-h-screen">
      <div className="mx-auto max-w-2xl px-6 py-24">

        {/* Header */}
        <header className="mb-20">
          <h1 className="text-3xl font-bold tracking-tight text-white">
            Nael Ghoundale
            <span className="cursor-blink ml-1 text-white/40">█</span>
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Mechanical Engineering &middot; Artificial Intelligence &middot; Stanford
          </p>
        </header>

        {/* About */}
        <section className="mb-16">
          <SectionTitle>About</SectionTitle>
          <p className="max-w-prose text-sm leading-relaxed text-muted-foreground">
            Mechanical engineer turned AI researcher. Currently at Stanford,
            working at the intersection of computational physics and deep learning.
            I build things that bridge the gap between simulation and intelligence.
          </p>
        </section>

        <Separator className="mb-16 bg-border" />

        {/* Experience */}
        <section className="mb-16">
          <SectionTitle>Experience</SectionTitle>
          <div className="grid gap-4">
            {experiences.map((exp) => (
              <Card key={exp.org} className="transition-colors hover:border-white/20">
                <CardHeader>
                  <CardTitle>{exp.role}</CardTitle>
                  <CardDescription>@ {exp.org}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-2">
                    {exp.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="rounded-none text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <Separator className="mb-16 bg-border" />

        {/* Projects */}
        <section className="mb-16">
          <SectionTitle>Projects</SectionTitle>
          <div className="grid gap-4">
            {projects.map((project) => (
              <Card key={project.title} className="transition-colors hover:border-white/20">
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="rounded-none text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <Separator className="mb-16 bg-border" />

        {/* Contact */}
        <section className="mb-16">
          <SectionTitle>Contact</SectionTitle>
          <div className="flex gap-6 text-sm">
            <a
              href="mailto:nael@example.com"
              className="text-muted-foreground underline underline-offset-4 transition-colors hover:text-white"
            >
              Email
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground underline underline-offset-4 transition-colors hover:text-white"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground underline underline-offset-4 transition-colors hover:text-white"
            >
              LinkedIn
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-border pt-8 text-xs text-muted-foreground">
          <p>&copy; 2026 Nael Ghoundale</p>
        </footer>

      </div>
    </div>
  )
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-6 text-xs font-bold uppercase tracking-[0.2em] text-white/60">
      <span className="text-white/30">{">"}</span> {children}
    </h2>
  )
}

export default App
