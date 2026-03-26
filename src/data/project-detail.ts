/** New poster page: add `projects/<slug>/index.html`, then append slug to `project-poster-build.ts`. */

export type ProjectGalleryItem = {
  id: string
  caption: string
}

export type ProjectDetail = {
  slug: string
  title: string
  subtitle: string
  year: string
  venue: string
  tags: string[]
  /** Site-relative path (e.g. papers/foo.pdf) or https URL — files live under `public/` when relative */
  paperHref?: string
  posterHref?: string
  abstract: string
  problem: string
  approach: string
  outcome: string
  gallery: ProjectGalleryItem[]
}

/** Resolve a project asset path for anchors. Relative paths use Vite `base` (e.g. /blog/). */
export function resolveProjectAssetHref(href: string): string {
  if (/^https?:\/\//i.test(href.trim())) return href.trim()
  const base = import.meta.env.BASE_URL.replace(/\/?$/, "/")
  const path = href.replace(/^\//, "")
  return `${base}${path}`
}

export const projectDetails: ProjectDetail[] = [
  {
    slug: "fluid-diffusion",
    title: "3D Fluid Flow Reconstruction",
    subtitle: "Reconstructing 3D turbulent velocity fields from 2D slices",
    year: "2026",
    venue: "Stanford University",
    tags: ["DDPM", "CFD", "PyTorch", "3D U-Net"],
    paperHref: "papers/fluid-diffusion-paper.pdf",
    posterHref: "papers/fluid-diffusion-poster.pdf",
    abstract:
      "We want to reconstruct 3D flow fields from sparse 2D planar velocity data. We use a Denoising Diffusion Probabilistic Model (DDPM) to predict the missing flow information.",
    problem:
      "In fluid mechanics, getting full 3D measurements is very hard and expensive. Standard experimental techniques like PIV usually only give 2D cross-sections. We need a computational way to infer the complete 3D turbulent flow structure from these limited 2D slices to save time and storage.",
    approach:
      "We used Direct Numerical Simulation (DNS) data of turbulent channel flow from the Johns Hopkins Turbulence Database. We extracted 3D volumes and randomly masked 50% of the 2D slices to simulate missing experimental data. Then, we built a 3D U-Net as the denoising model for our DDPM. The model learns to reverse the diffusion noise process and predicts the missing velocity fields conditioned on the available spatial slices.",
    outcome:
      "The DDPM performed much better than a standard 3D CNN (U-Net) and linear interpolation baselines. Because it learns from the statistical distribution of the turbulent flow, it successfully captured global flow patterns and long-range spatial dependencies without needing hard-coded Navier-Stokes equations.",
    gallery: [
      { id: "fd1", caption: "Velocity field slice" },
      { id: "fd2", caption: "Ground truth vs prediction" },
      { id: "fd3", caption: "Error distribution" },
    ],
  },
  {
    slug: "medical-image-synthesis",
    title: "Medical Image Synthesis (MRI to CT)",
    subtitle: "Generating synthetic CT scans for radiotherapy using PFGM++",
    year: "2026",
    venue: "Stanford University",
    tags: ["Generative AI", "PFGM++", "Medical Imaging", "PyTorch"],
    paperHref: "papers/medical-image-synthesis-paper.pdf",
    posterHref: "papers/medical-image-synthesis-poster.pdf",
    abstract:
      "This project synthesizes Computed Tomography (CT) images from Magnetic Resonance Imaging (MRI) data. The goal is to allow an 'MR-only' workflow to reduce patient radiation exposure and improve efficiency during pelvic radiotherapy planning.",
    problem:
      "CT scans expose patients to severe radiation, and using both CT and MRI devices increases hospital costs and operation time. However, predicting CT from MRI is a challenging translation problem because they measure different physical properties: MRI shows soft tissue contrast very well, while CT captures electron density like bones and air.",
    approach:
      "We used the SynthRAD2023 dataset with 180 patient cases. We built a physics-inspired generative model called PFGM++. It uses a U-Net architecture combined with SwinFIR Transformer blocks. The network takes a noisy CT slice and a conditioning MR slice, and uses Poisson flow equations to transport the noisy sample back to a clean synthetic CT.",
    outcome:
      "Our SwinFIR-PFGM model reached a Peak Signal-to-Noise Ratio (PSNR) of 20.68 and a Mean Absolute Error of 0.11. It easily surpassed our 2D U-Net baseline. The generated soft tissues and bones were much sharper, respected the anatomical boundaries, and matched the ground truth intensity values much better.",
    gallery: [
      { id: "gp1", caption: "MRI Input" },
      { id: "gp2", caption: "Synthetic CT Output" },
      { id: "gp3", caption: "Ground Truth CT" },
    ],
  },
  {
    slug: "marl-social-dilemmas",
    title: "Multi-Agent Reinforcement Learning",
    subtitle: "Static vs. Dynamic Social Value Orientation in MARL",
    year: "2026",
    venue: "Stanford University",
    tags: ["RL", "MARL", "IPPO", "Python"],
    paperHref: "papers/marl-social-dilemmas-paper.pdf",
    posterHref: "papers/marl-social-dilemmas-poster.pdf",
    abstract:
      "Standard reinforcement learning agents struggle to cooperate in environments with limited resources, known as Sequential Social Dilemmas. We implemented an education approach to shift agent goals over time using a Social Value Orientation (SVO) reward transformation.",
    problem:
      "When artificial agents only optimize for their own immediate rewards, they act selfishly and quickly deplete all the resources in the environment. This leads to suboptimal outcomes and starvation for the whole population. Standard algorithms like Q-learning or Policy Gradients fail to learn sustainable cooperation in these scenarios.",
    approach:
      "We trained Independent Proximal Policy Optimization (IPPO) agents equipped with LSTM memory networks inside the DeepMind Melting Pot simulator. We intercepted the environment rewards and mathematically transformed them to mix personal success with the success of peer agents. We tested both static ideologies (like 45° for balanced cooperation) and dynamic curriculum schedules (like linear or exponential changes).",
    outcome:
      "We found that a static 45° cooperative ideology worked best, yielding the most sustainable harvesting, highest total reward, and lowest inequality. Surprisingly, the dynamic curriculum schedules failed. Shifting the ideology during training confused the IPPO agents' advantage estimations and caused severe optimization instability.",
    gallery: [
      { id: "rl1", caption: "Melting Pot simulation" },
      { id: "rl2", caption: "Reward mean during training" },
      { id: "rl3", caption: "Cumulative total reward" },
    ],
  },
  {
    slug: "soccer-financial-trends",
    title: "Predicting Soccer Financial Trends",
    subtitle: "Machine learning methods for professional soccer market values",
    year: "2026",
    venue: "Stanford University",
    tags: ["Machine Learning", "LSTM", "Neural Networks", "Data Science"],
    paperHref: "papers/soccer-financial-trends-paper.pdf",
    posterHref: "papers/soccer-financial-trends-poster.pdf",
    abstract:
      "Accurate predictions of soccer player market values and wages are critical for club management and transfer strategies. We built machine learning models to predict these financial metrics from player and team performance data.",
    problem:
      "Predicting player market values is a very complex challenge because there is a massive amount of data and a multitude of physical and performance factors that contribute to a player's worth. Standard models struggle to capture both the static physical traits and the dynamic temporal performance trends over multiple games.",
    approach:
      "We tackled two main tasks. First, we built FIFANet, a multi-task neural network with shared layers, to jointly predict player wage and market value using FIFA dataset attributes. Second, we built ClubNet, a meta-model that predicts market value increases after a transfer. ClubNet combines an LSTM to process sequential game data with Random Forest and Gradient Boosting Regressors to process static physical features.",
    outcome:
      "FIFANet consistently outperformed all baseline models like Ridge Regression and Random Forest, achieving the highest R-squared scores and lowest errors. ClubNet also beat the baselines for predicting value increases, proving that aggregating temporal LSTM data with static regression models creates a much stronger and more accurate predictive tool.",
    gallery: [
      { id: "soc1", caption: "FIFANet training loss" },
      { id: "soc2", caption: "ClubNet performance" },
      { id: "soc3", caption: "Feature correlation matrix" },
    ],
  },
  {
    slug: "von-karman-cfd",
    title: "Von Karman Vortex Simulation",
    subtitle: "CFD analysis of fluid flow dynamics",
    year: "2023",
    venue: "Academic Project",
    tags: ["CFD", "STAR-CCM+", "CATIA V5", "Fluid Dynamics"],
    paperHref: "papers/von-karman-cfd-paper.pdf",
    posterHref: "papers/von-karman-cfd-poster.pdf",
    abstract:
      "This project explores computational fluid dynamics (CFD) by simulating and analyzing the famous Von Karman vortex street phenomenon using industry-standard engineering software.",
    problem:
      "Understanding how fluids behave when they flow past blunt obstacles is crucial in mechanical engineering to prevent structural vibrations and damage. I needed to properly set up a digital environment to observe and measure this specific turbulence pattern.",
    approach:
      "First, I used CATIA V5 to design the geometry of the physical obstacle and the surrounding fluid domain. Then, I imported this model into STAR-CCM+ to run the actual CFD simulation. I had to carefully configure the mesh, boundary conditions, and turbulence models to capture the physics accurately.",
    outcome:
      "The simulation successfully reproduced the alternating vortex street. This project gave me hands-on experience with the complete workflow of taking a CAD design and running a full computational fluid dynamics analysis on it.",
    gallery: [
      { id: "vk1", caption: "CATIA V5 Geometry" },
      { id: "vk2", caption: "Mesh generation" },
      { id: "vk3", caption: "Velocity field simulation" },
    ],
  },
  {
    slug: "pump-body-design",
    title: "Mechanical Design: Pump Body",
    subtitle: "Manufacturing, metrology, and industrialization",
    year: "2023",
    venue: "Academic Project",
    tags: ["Mechanical Design", "Metrology", "Manufacturing", "CAD"],
    paperHref: "papers/pump-body-design-paper.pdf",
    posterHref: "papers/pump-body-design-poster.pdf",
    abstract:
      "This project focused on the complete mechanical design and manufacturing lifecycle of a pump body, bridging the gap between theoretical CAD and physical production.",
    problem:
      "Designing a part on a computer is very different from actually building it in the real world. I needed to understand the strict physical constraints involved in manufacturing, measuring, and industrializing a real mechanical component.",
    approach:
      "I worked on the mechanical design of the pump body and then applied metrology techniques to ensure all the dimensions and tolerances were correct for the machines to build it. I also studied the specific issues and requirements needed to scale this part up for actual industrial production.",
    outcome:
      "I successfully learned the basic skills needed to manufacture a part using metrology. Getting to grips with the real issues involved in industrializing a part gave me practical mechanical engineering skills that I can apply directly to my future professional projects.",
    gallery: [
      { id: "pb1", caption: "CAD Model" },
      { id: "pb2", caption: "Metrology measurements" },
      { id: "pb3", caption: "Manufacturing plan" },
    ],
  },
  {
    slug: "centrifugal-compressor",
    title: "Centrifugal Compressor for Hydrogen",
    subtitle: "Prototyping a sustainable fuel solution with LIFSE",
    year: "2023",
    venue: "Arts et Métiers (LIFSE)",
    tags: ["CATIA V5", "3D Printing", "Fluid Systems", "Sustainability"],
    paperHref: "papers/centrifugal-compressor-paper.pdf",
    posterHref: "papers/centrifugal-compressor-poster.pdf",
    abstract:
      "Driven by an interest in replacing fossil fuels, I conducted a project focused on hydrogen tanks. I designed, dimensioned, and 3D printed a fully functional prototype of a centrifugal compressor.",
    problem:
      "Hydrogen gas is a highly promising sustainable energy source, but filling hydrogen tanks requires very specific and efficient compression systems. I wanted to explore practical engineering solutions for this renewable energy challenge.",
    approach:
      "Working in collaboration with the Laboratoire d'Ingénierie des Fluides et des Systèmes Énergétiques (LIFSE), I dimensioned and designed the compressor using CATIA V5. After finalizing the CAD model, I 3D printed the components to assemble a physical prototype for laboratory testing.",
    outcome:
      "I successfully delivered and tested a fully functional centrifugal compressor prototype in the lab. This hands-on project deepened my understanding of fluid systems and strongly reinforced my belief that hydrogen has a bright future as a fuel substitute.",
    gallery: [
      { id: "cc1", caption: "Compressor CAD design" },
      { id: "cc2", caption: "3D printing process" },
      { id: "cc3", caption: "Laboratory testing" },
    ],
  },
  {
    slug: "motor-gearbox",
    title: "Motor Gearbox Design",
    subtitle: "Advanced product design and 3D modeling",
    year: "2023",
    venue: "Arts et Métiers",
    tags: ["Mechanical Design", "Dassault Systèmes", "3D Experience", "CAD"],
    paperHref: "papers/motor-gearbox-paper.pdf",
    posterHref: "papers/motor-gearbox-poster.pdf",
    abstract:
      "During my time at engineering school, I designed a cutting-edge motor gearbox. This project challenged my engineering skills and creativity, giving me invaluable hands-on experience in the field.",
    problem:
      "Designing a functional motor transmission system requires precise calculations, spatial awareness, and an understanding of mechanical constraints. I needed to apply my theoretical knowledge to a complex, multi-part assembly.",
    approach:
      "I utilized the Dassault Systèmes 3D Experience platform to create a comprehensive mechanical design. I carefully conceptualized the gear ratios, structured the housing, and modeled all the internal components to ensure they would interact smoothly and reliably.",
    outcome:
      "The successful completion of the gearbox showcased my dedication to precise 3D modeling and mechanical design. It affirmed my passion for mechanical engineering and provided a strong foundation for future innovations.",
    gallery: [
      { id: "mg1", caption: "Gearbox assembly" },
      { id: "mg2", caption: "3D Experience platform" },
      { id: "mg3", caption: "Component detailing" },
    ],
  },
  {
    slug: "rerock-startup",
    title: "Rerock: AI Upcycling Start-up",
    subtitle: "Sustainable fashion powered by Artificial Intelligence",
    year: "2024",
    venue: "ENSAM Entrepreneurial Program",
    tags: ["AI", "Start-up", "App Development", "Sustainability"],
    paperHref: "papers/rerock-startup-paper.pdf",
    posterHref: "papers/rerock-startup-poster.pdf",
    abstract:
      "I co-initiated 'Rerock', an app that revolutionizes sustainable fashion by upcycling. We connect clients with local creators and use AI to generate custom design ideas based on user preferences.",
    problem:
      "Fast fashion creates massive waste, and many people have unwanted garments they don't know what to do with. The traditional upcycling process can be difficult because clients struggle to visualize what their old clothes could become.",
    approach:
      "In collaboration with the ENSAM entrepreneurial program, my associate and I built a platform to connect consumers with creators. We integrated an AI feature that analyzes photos of unwanted garments and user preferences to automatically generate creative, custom upcycling design concepts.",
    outcome:
      "Our AI innovation successfully streamlined the creative process for both clients and creators. By making upcycling easier and more accessible, we helped reduce costs and amplified our positive environmental impact in the fashion industry.",
    gallery: [
      { id: "rr1", caption: "App interface" },
      { id: "rr2", caption: "AI design generation" },
      { id: "rr3", caption: "Upcycled garments" },
    ],
  },
  {
    slug: "aircraft-brakes",
    title: "Aircraft Brakes Design",
    subtitle: "Mechanical modeling and simulation in CATIA",
    year: "2023",
    venue: "Arts et Métiers",
    tags: ["CATIA", "Simulation", "Aerospace", "Mechanical Design"],
    paperHref: "papers/aircraft-brakes-paper.pdf",
    posterHref: "papers/aircraft-brakes-poster.pdf",
    abstract:
      "For a comprehensive mechanical engineering project, I designed, modeled, and simulated an aircraft brake system. This involved taking the mechanism from early conceptualization all the way to detailed 3D simulation.",
    problem:
      "Aircraft braking systems must be incredibly efficient and reliable to handle massive forces safely. The challenge was to design a mechanism that met these strict aerospace requirements while ensuring all components were optimized for stress and thermal loads.",
    approach:
      "I used CATIA to handle the complete conceptualization and detailing of the brake system. Once the 3D modeling was finished, I ran simulations on the mechanism to verify its structural integrity and operational reliability under heavy loads.",
    outcome:
      "I delivered a precise 3D model and successful simulation of the aircraft brake system. This project proved my ability to tackle complex aerospace components and showcased my proficiency in both mechanical design and engineering analysis.",
    gallery: [
      { id: "ab1", caption: "Brake system concept" },
      { id: "ab2", caption: "Detailed CATIA modeling" },
      { id: "ab3", caption: "Stress simulation" },
    ],
  }
]

export function getProjectBySlug(slug: string): ProjectDetail | undefined {
  return projectDetails.find((p) => p.slug === slug)
}