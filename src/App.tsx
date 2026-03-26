import { lazy, Suspense } from "react"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Nav } from "@/components/nav"
import { experienceDetails } from "@/data/experience-detail"

const PixelBlast = lazy(() => import("@/components/pixel-blast"))

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
  const projectsHref = `${import.meta.env.BASE_URL}projects/`

  return (
    <div className="relative min-h-screen">
      {/* PixelBlast background */}
      <div className="pointer-events-none fixed inset-0 z-0 opacity-[0.40]">
        <Suspense fallback={null}>
          <PixelBlast
            variant="square"
            pixelSize={4}
            color="#B7D5FF"
            patternScale={2}
            patternDensity={1}
            pixelSizeJitter={0}
            enableRipples
            rippleSpeed={0.4}
            rippleThickness={0.12}
            rippleIntensityScale={1.05}
            liquid={false}
            speed={0.5}
            edgeFade={0.22}
            transparent
          />
        </Suspense>
      </div>

      {/* Dimming overlay to keep foreground text readable */} 
      <div className="pointer-events-none fixed inset-0 z-[5] bg-background/25" />

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
            {experienceDetails.map((exp) => (
              <a
                key={exp.slug}
                href={`${import.meta.env.BASE_URL}experience/#${exp.slug}`}
                className="block no-underline text-inherit"
              >
                <Card className="cursor-pointer">
                  <CardHeader>
                    <CardTitle>{exp.title}</CardTitle>
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
              </a>
            ))}
          </div>
        </section>

        <Separator className="mb-16" />

        {/* Projects */}
        <section id="projects" className="mb-16">
          <SectionTitle>Projects</SectionTitle>
          <div className="grid gap-4">
            {projects.map((project) => (
              <a
                key={project.title}
                href={projectsHref}
                className="block no-underline text-inherit"
              >
                <Card className="cursor-pointer">
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
              </a>
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
