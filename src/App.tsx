import { lazy, Suspense } from "react"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Nav } from "@/components/nav"
import { experienceDetails } from "@/data/experience-detail"
import { projectDetails } from "@/data/project-detail"
import { ProjectDownloadLinks } from "@/components/project-download-links"

const PixelBlast = lazy(() => import("@/components/pixel-blast"))

function App() {

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
            Mechanical Engineering &middot; Artificial Intelligence &middot; Stanford  &middot; Arts et Métiers ParisTech
          </p>
        </header>

        {/* About */}
        <section id="about" className="mb-16">
          <SectionTitle>About</SectionTitle>
          <p className="max-w-prose text-sm leading-relaxed text-muted-foreground">
            Mechanical x AI. Currently at Stanford,
            Love math, physics, and coding.
            "Eternity is just a moment long enough to tell a joke" - Herman Hesse
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
                href={`${import.meta.env.BASE_URL}experience/${exp.slug}/`}
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
            {projectDetails.map((project) => {
              const posterPageHref = `${import.meta.env.BASE_URL}projects/${project.slug}/`
              return (
                <Card key={project.slug}>
                  <CardHeader>
                    <CardTitle>
                      <a href={posterPageHref} className="text-inherit no-underline hover:underline">
                        {project.title}
                      </a>
                    </CardTitle>
                    <CardDescription>{project.subtitle}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="rounded-none text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <ProjectDownloadLinks paperHref={project.paperHref} posterHref={project.posterHref} />
                    <p>
                      <a
                        href={posterPageHref}
                        className="text-xs text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
                      >
                        View poster page →
                      </a>
                    </p>
                  </CardContent>
                </Card>
              )
            })}
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
