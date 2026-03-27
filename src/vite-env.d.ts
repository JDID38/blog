/// <reference types="vite/client" />

declare module "virtual:paper-availability" {
  /** Basenames of real files found in `public/papers/` (excludes `.gitkeep`). */
  export const availablePaperFilenames: ReadonlySet<string>
}
