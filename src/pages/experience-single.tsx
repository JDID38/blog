import { lazy, Suspense } from "react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { Nav } from "@/components/nav"
import { ExperienceImageCard } from "@/components/experience-image-card"
import { experienceDetails, getExperienceBySlug } from "@/data/experience-detail"
import { resolveProjectAssetHref } from "@/data/project-detail"
import { isGalleryImageFileAvailable } from "@/lib/gallery-image-available"

const PixelBlast = lazy(() => import("@/components/pixel-blast"))

type Props = {
  slug: string
}

export default function ExperienceSinglePage({ slug }: Props) {
  const exp = getExperienceBySlug(slug)
  const baseUrl = import.meta.env.BASE_URL
  const homeUrl = `${baseUrl}`
  const other = experienceDetails.find((e) => e.slug !== slug)

  if (!exp) {
    return (
      <div className="relative min-h-screen px-6 py-24">
        <p className="text-sm text-muted-foreground">Experience not found.</p>
        <Button className="mt-4 rounded-none" render={<a href={homeUrl} />}>
          Back home
        </Button>
      </div>
    )
  }

  const galleryItemsOnDisk = exp.gallery.filter(
    (item) => item.imageHref && isGalleryImageFileAvailable(item.imageHref),
  )

  return (
    <div className="relative min-h-screen">
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

      <div className="pointer-events-none fixed inset-0 z-[5] bg-background/25" />

      <div className="relative z-10 mx-auto max-w-3xl px-6 py-24 pb-32">
        <header className="mb-10 border-b border-border pb-8">
          <p className="mb-4 font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-foreground/45">
            <a href={homeUrl} className="text-muted-foreground underline-offset-4 hover:text-foreground hover:underline">
              ← Home
            </a>
            {other ? (
              <>
                <span className="mx-2 text-border">/</span>
                <a
                  href={`${baseUrl}experience/${other.slug}/`}
                  className="text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
                >
                  {other.org}
                </a>
              </>
            ) : null}
          </p>
          <h1 className="text-3xl font-bold tracking-tight text-foreground">Nael Ghoundale</h1>
        </header>

        <article>
          <header className="mb-6">
            <h2 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
              {exp.title}
              <span className="text-muted-foreground"> @ {exp.org}</span>
            </h2>
            <p className="mt-3 text-sm text-muted-foreground">
              <span>{exp.location}</span>
              <span className="mx-2 text-border">|</span>
              <span className="font-mono text-xs tracking-wide">{exp.duration}</span>
            </p>
          </header>

          <div className="mb-6 flex flex-wrap gap-2">
            {exp.tags.map((tag) => (
              <Badge key={tag} variant="outline" className="rounded-none text-xs">
                {tag}
              </Badge>
            ))}
          </div>

          <p className="mb-10 max-w-prose text-sm leading-relaxed text-muted-foreground">
            {exp.description}
          </p>

          {galleryItemsOnDisk.length > 0 ? (
            <div>
              <h3 className="mb-4 font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-foreground/45">
                <span className="text-foreground/25">{">"}</span> Gallery
              </h3>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {galleryItemsOnDisk.map((item) => (
                  <ExperienceImageCard
                    key={item.id}
                    caption={item.caption}
                    src={resolveProjectAssetHref(item.imageHref!)}
                  />
                ))}
              </div>
            </div>
          ) : null}
        </article>

        <Separator className="my-16" />

        <section id="contact" className="mb-16">
          <h3 className="mb-6 font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-foreground/45">
            <span className="text-foreground/25">{">"}</span> Contact
          </h3>
          <div className="flex flex-wrap gap-3">
            <Button variant="outline" className="rounded-none" render={<a href="mailto:nael@example.com" />}>
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

        <footer className="border-t border-border pt-8 text-xs text-muted-foreground">
          <p>&copy; 2026 Nael Ghoundale</p>
        </footer>
      </div>

      <Nav />
    </div>
  )
}
