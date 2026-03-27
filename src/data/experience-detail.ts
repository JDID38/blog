export type ExperienceGalleryItem = {
  id: string
  caption: string
  /**
   * Image under `public/`, e.g. `images/experience/cirkles/c1.webp`.
   * Omit for placeholder.
   */
  imageHref?: string
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
    title: "Founding Software Engineer",
    org: "Cirkles.ai",
    location: "Paris, France (Remote)",
    duration: "July 2025 — Present",
    description:
      "I joined Cirkles.ai from the very beginning as part of the founding team. We are building an AI fraud detection SaaS designed specifically for leasing and banking companies. It is a really exciting environment because we recently raised $50k in funding, and we are now actively deploying our production product to our first two clients. Being there since day one means I got to participate in building the entire software product from end to end.\n\n" +
      "Because it is an early-stage startup, my technical work covers a lot of different areas. I built the backend architecture using FastAPI and designed the databases to securely handle the information. I also did a lot of data engineering and web scraping to gather the right data for our systems. On the AI side, I was involved in model research to make sure our fraud detection algorithms are accurate and ready for real-world banking scenarios.\n\n" +
      "Besides the pure engineering work, I also interact directly with our clients to understand their needs and improve the product based on their feedback. Most recently, my main focus has been developing an MCP (Model Context Protocol) tool to integrate directly into our main Cirkles software platform. This role has given me incredible hands-on experience in taking a complex AI idea and turning it into a live product that companies actually pay for and use.",
    tags: ["FastAPI", "AI", "SaaS", "Data Engineering"],
    gallery: [
      { id: "c1", caption: "Product surface" },
      { id: "c2", caption: "Data / eval" },
      { id: "c3", caption: "Infra sketch" },
    ],
  },
  {
    slug: "thales",
    title: "Data Scientist Intern",
    org: "Thales Digital Factory",
    location: "Paris, France",
    duration: "June 2025 — Sept. 2025",
    description:
      "During my summer internship at the Thales Digital Factory, I worked as a Data Scientist in an AI software team. Our team was responsible for building and delivering AI solutions for internal infrastructure teams as well as external clients. When I first joined, my main project was to develop a centralized demo showcase platform. This platform was used to display all the different AI projects our team was working on, making it easier to present our technical capabilities to other departments and clients.\n\n" +
      "After finishing the showcase platform, I started working on a complex RAG (Retrieval-Augmented Generation) chatbot designed specifically for Thales technicians. Because we were dealing with sensitive technical documentation, I had to keep everything secure and on-premise. I used Docker to containerize the application and ran local LLMs using Ollama. This ensured that no private company data left the network, while still giving the technicians a smart assistant to help them find information quickly.\n\n" +
      "To make the chatbot accurate, I spent a lot of time on the data processing pipeline. I implemented custom document chunking strategies, breaking down the text using different logics like semantic meaning and HTML tags to keep the context intact. Then, I orchestrated a Weaviate vector database to store and retrieve these chunks efficiently. Finally, I plugged this whole retrieval system into the chatbot interface, creating a smooth and reliable AI tool for the technicians to use in their daily work.",
    tags: ["RAG", "Local LLMs", "Docker", "Vector DB"],
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