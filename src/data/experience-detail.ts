export type ExperienceGalleryItem = {
  id: string
  caption: string
}

export type ExperienceDetail = {
  slug: string
  title: string
  org: string
  location: string
  duration: string
  description: string
  tags: string[]
  gallery: ExperienceGalleryItem[]
}

export const experienceDetails: ExperienceDetail[] = [
  {
    slug: "cirkles",
    title: "Software Engineer",
    org: "Cirkles.ai",
    location: "Remote · Europe",
    duration: "2024 — Present",
    description:
      "Building end-to-end product features across the stack: APIs, data pipelines, and ML-adjacent services. " +
      "Focused on shipping reliable systems, tight iteration loops with design and research, and instrumentation " +
      "so we can measure what matters. Day-to-day work spans TypeScript/React, backend services, and integrating " +
      "models into production workflows—not demos.",
    tags: ["Full-Stack", "AI"],
    gallery: [
      { id: "c1", caption: "Product surface" },
      { id: "c2", caption: "Data / eval" },
      { id: "c3", caption: "Infra sketch" },
    ],
  },
  {
    slug: "thales",
    title: "Data Scientist",
    org: "Thales",
    location: "France",
    duration: "2022 — 2024",
    description:
      "Applied machine learning and statistics on sensor-rich, safety-critical datasets. Work included exploratory analysis, " +
      "feature engineering, model training and validation, and communicating uncertainty to stakeholders. Emphasis on " +
      "reproducible notebooks, clear baselines, and deployment constraints—not slide-deck ML.",
    tags: ["ML", "Defense"],
    gallery: [
      { id: "t1", caption: "Signals" },
      { id: "t2", caption: "Model card" },
      { id: "t3", caption: "Ops view" },
    ],
  },
]

export function getExperienceBySlug(slug: string): ExperienceDetail | undefined {
  return experienceDetails.find((e) => e.slug === slug)
}
