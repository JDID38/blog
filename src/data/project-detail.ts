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
  abstract: string
  problem: string
  approach: string
  outcome: string
  gallery: ProjectGalleryItem[]
}

export const projectDetails: ProjectDetail[] = [
  {
    slug: "fluid-diffusion",
    title: "3D Fluid Flow Reconstruction",
    subtitle: "Reconstructing 3D turbulent velocity fields from 2D slices",
    year: "2026",
    venue: "Stanford University",
    tags: ["DDPM", "CFD", "PyTorch", "3D U-Net"],
    abstract:
      "We want to reconstruct 3D flow fields from sparse 2D planar velocity data[cite: 779]. We use a Denoising Diffusion Probabilistic Model (DDPM) to predict the missing flow information[cite: 780].",
    problem:
      "In fluid mechanics, getting full volumetric measurements is experimentally challenging and expensive[cite: 787]. Usually, techniques like PIV only offer precise data at specific planar cross-sections[cite: 788]. We need a way to infer 3D flow structure from these sparse planar measurements[cite: 790].",
    approach:
      "We used Direct Numerical Simulation data from the Johns Hopkins Turbulence Database[cite: 782, 840]. We simulated incomplete observations by creating binary masks that randomly zero out a percentage of the cross-sectional slices[cite: 902]. Then, we trained a 3D U-Net denoising model to reverse the diffusion process and recover the original field[cite: 917, 926].",
    outcome:
      "The DDPM outperformed both the 3D CNN and linear interpolation baselines[cite: 1010]. It successfully captured long-range spatial dependencies and global flow patterns without relying on hard-coded physics[cite: 1012, 1024].",
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
    abstract:
      "This project focuses on synthesizing Computed Tomography (CT) images from Magnetic Resonance Imaging (MRI) data[cite: 274]. The goal is to facilitate an MR-only workflow to reduce patient radiation exposure during radiotherapy planning[cite: 274].",
    problem:
      "CT scans expose patients to severe radiation, and using both CT and MRI increases operation costs[cite: 293]. However, generating synthetic CTs is hard because MRI and CT encode different physical properties[cite: 297].",
    approach:
      "We built a Poisson flow generative model (PFGM++) based on a U-Net architecture that incorporates residual SwinFIR Transformer blocks[cite: 279]. The network processes a noisy CT slice and a conditioning MR slice to output a synthetic CT scan[cite: 383].",
    outcome:
      "Our SwinFIR-PFGM model achieved a Peak Signal-to-Noise Ratio (PSNR) of 20.68 and a Mean Absolute Error of 0.11[cite: 280]. It surpassed the 2D U-Net baseline, creating sharper soft tissues that align better with the ground truth[cite: 280, 412].",
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
    abstract:
      "Standard reinforcement learning agents frequently struggle to achieve cooperation in complex environments characterized by competition and resource scarcity[cite: 4]. We implement a dynamic education approach during training that shifts an agent's intrinsic goals over time using a Social Value Orientation (SVO) reward transformation[cite: 7].",
    problem:
      "If agents simply optimize for their raw, immediate environmental rewards, they almost inevitably fall into resources depletion[cite: 18]. Standard algorithms like Q-learning or standard Policy Gradients often converge to aggressive, mutually destructive policies[cite: 30].",
    approach:
      "We trained Independent Proximal Policy Optimization (IPPO) agents within the DeepMind Melting Pot suite[cite: 8]. We mathematically modify the rewards to reflect different social ideologies before they are passed to the learning algorithm[cite: 44, 45]. We also tested dynamic curriculum schedules[cite: 57, 59].",
    outcome:
      "Our findings demonstrate that a balanced cooperative ideology yields the most sustainable harvesting and highest collective reward[cite: 9]. However, dynamically shifting this ideology during training introduces optimization instability that ultimately underperforms when compared to a static cooperative baseline[cite: 9].",
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
    abstract:
      "Accurate predictions of these values can influence major decisions in club management[cite: 494]. We predict player market-value and wage from player performance, and player and club market value increases after transfer[cite: 500, 503].",
    problem:
      "Predicting player market values remains a complex challenge due to the multitude of factors that contribute to a player's worth[cite: 495].",
    approach:
      "We use a jointly-trained, multi-task neural network (NN), called FIFANet, to output the predicted wage and predicted market value[cite: 502]. We also use a novel meta-model called ClubNet, which aggregates LSTM, Random Forest, and Gradient Boosting Regressor[cite: 506].",
    outcome:
      "FIFANet consistently outperformed all baseline models in predicting both wage and market value[cite: 575]. ClubNet outperforms the simpler baseline models for predicting player and club market value increases, achieving the lowest MSE and MAE[cite: 632].",
    gallery: [
      { id: "soc1", caption: "FIFANet training loss" },
      { id: "soc2", caption: "ClubNet performance" },
      { id: "soc3", caption: "Feature correlation matrix" },
    ],
  }
]

export function getProjectBySlug(slug: string): ProjectDetail | undefined {
  return projectDetails.find((p) => p.slug === slug)
}