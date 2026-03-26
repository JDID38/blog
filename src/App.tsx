import { lazy, Suspense } from "react"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Nav } from "@/components/nav"

const PixelBlast = lazy(() => import("@/components/pixel-blast"))

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
    <div className="relative min-h-screen">
      {/* PixelBlast background */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <Suspense fallback={null}>
          <PixelBlast
            variant="square"
            pixelSize={4}
            color="#c0bdb8"
            patternScale={2}
            patternDensity={1}
            pixelSizeJitter={0}
            enableRipples
            rippleSpeed={0.4}
            rippleThickness={0.12}
            rippleIntensityScale={1.5}
            liquid={false}
            speed={0.5}
            edgeFade={0.25}
            transparent
          />
        </Suspense>
      </div>

      <div className="relative z-10 mx-auto max-w-2xl px-6 py-24 pb-32">

        {/* Header */}
        <header className="mb-20">
          <h1 className="text-3xl font-bold tracking-tight text-foreground">
            Nael Ghoundale
            <span className="cursor-blink ml-1 text-foreground/30">█</span>
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Mechanical Engineering &middot; Artificial Intelligence &middot; Stanford
          </p>
        </header>

        {/* About */}
        <section id="about" className="mb-16">
          <SectionTitle>About</SectionTitle>
          <p className="max-w-prose text-sm leading-relaxed text-muted-foreground">
            Mechanical engineer turned AI researcher. Currently at Stanford,
            working at the intersection of computational physics and deep learning.
            I build things that bridge the gap between simulation and intelligence.
          </p>
        </section>

        <Separator className="mb-16" />

        {/* Experience */}
        <section id="experience" className="mb-16">
          <SectionTitle>Experience</SectionTitle>
          <div className="grid gap-4">
            {experiences.map((exp) => (
              <Card key={exp.org}>
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

        <Separator className="mb-16" />

        {/* Projects */}
        <section id="projects" className="mb-16">
          <SectionTitle>Projects</SectionTitle>
          <div className="grid gap-4">
            {projects.map((project) => (
              <Card key={project.title}>
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

        <Separator className="mb-16" />

        {/* Contact */}
        <section id="contact" className="mb-16">
          <SectionTitle>Contact</SectionTitle>
          <div className="flex flex-wrap gap-3">
            <Button
              variant="outline"
              className="rounded-none"
              render={<a href="mailto:nael@example.com" />}
            >
              Email
            </Button>
            <Button
              variant="outline"
              className="rounded-none"
              render={<a href="https://github.com/" target="_blank" rel="noopener noreferrer" />}
            >
              GitHub
            </Button>
            <Button
              variant="outline"
              className="rounded-none"
              render={<a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" />}
            >
              LinkedIn
            </Button>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-border pt-8 text-xs text-muted-foreground">
          <p>&copy; 2026 Nael Ghoundale</p>
        </footer>

      </div>

      <Nav />
    </div>
  )
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-6 text-xs font-bold uppercase tracking-[0.2em] text-foreground/50">
      <span className="text-foreground/25">{">"}</span> {children}
    </h2>
  )
}

export default App
