import { ImageIcon } from "lucide-react"

import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { cn } from "@/lib/utils"

type Props = {
  caption: string
  /** Resolved URL (e.g. from `resolveProjectAssetHref(imageHref)`). */
  src?: string
  className?: string
}

export function ExperienceImageCard({ caption, src, className }: Props) {
  return (
    <Card
      className={cn(
        "overflow-hidden border-border/80 bg-card/90 backdrop-blur-[2px] transition-all duration-200",
        "hover:border-foreground/25 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,0.06)]",
        className
      )}
    >
      <CardContent className="p-0">
        <div className="relative aspect-video overflow-hidden border-b border-border bg-muted/30">
          {src ? (
            <img src={src} alt={caption} className="h-full w-full object-cover" loading="lazy" decoding="async" />
          ) : (
            <div
              className="flex h-full min-h-[10rem] items-center justify-center border-b border-dashed border-border bg-gradient-to-br from-secondary/60 via-muted/40 to-background"
              aria-hidden
            >
              <div className="flex flex-col items-center gap-2 text-muted-foreground">
                <ImageIcon className="size-8 stroke-1 opacity-40" />
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] opacity-60">
                  Placeholder
                </span>
              </div>
            </div>
          )}
        </div>
      </CardContent>
      <CardFooter className="border-t border-border/60 bg-muted/20 px-3 py-2">
        <p className="w-full text-center font-mono text-[11px] text-muted-foreground">{caption}</p>
      </CardFooter>
    </Card>
  )
}
