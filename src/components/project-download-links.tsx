import { Button } from "@/components/ui/button"
import { resolveProjectAssetHref } from "@/data/project-detail"
import { cn } from "@/lib/utils"

function assetAnchorProps(href: string) {
  const resolved = resolveProjectAssetHref(href)
  const external = /^https?:\/\//i.test(href.trim())
  if (external) {
    return { href: resolved, target: "_blank" as const, rel: "noopener noreferrer" as const }
  }
  return { href: resolved, download: true as const }
}

type Props = {
  paperHref?: string
  posterHref?: string
  className?: string
  buttonSize?: "default" | "sm" | "xs"
}

export function ProjectDownloadLinks({
  paperHref,
  posterHref,
  className,
  buttonSize = "sm",
}: Props) {
  if (!paperHref && !posterHref) return null
  return (
    <div className={cn("flex flex-wrap gap-2", className)}>
      {paperHref ? (
        <Button
          variant="outline"
          size={buttonSize}
          className="rounded-none"
          render={<a {...assetAnchorProps(paperHref)} />}
        >
          Paper (PDF)
        </Button>
      ) : null}
      {posterHref ? (
        <Button
          variant="outline"
          size={buttonSize}
          className="rounded-none"
          render={<a {...assetAnchorProps(posterHref)} />}
        >
          Poster (PDF)
        </Button>
      ) : null}
    </div>
  )
}
