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
    title: "3D Fluid Flow Diffusion Models",
    subtitle: "Generative modelling for turbulent flow fields",
    year: "2025",
    venue: "Research · Stanford",
    tags: ["Diffusion", "CFD", "PyTorch"],
    abstract:
      "We explore score-based diffusion in three dimensions to synthesize and denoise volumetric flow fields, " +
      "bridging turbulence statistics with learned priors. The goal is faithful samples that respect physics " +
      "constraints while remaining tractable at scale.",
    problem:
      "High-fidelity CFD is expensive; naive neural surrogates often violate incompressibility or decay spectra. " +
      "We need generative models that respect coarse physical structure without hand-engineering every constraint.",
    approach:
      "A voxel-space diffusion model with noise schedules tuned for multi-scale structure, trained with physics-aware " +
      "losses and data from simulations. Iterative refinement focuses energy where the spectrum is hardest to match.",
    outcome:
      "Prototype sampler that matches second-order statistics on held-out Reynolds numbers; ablations isolate the " +
      "value of spectral losses vs. plain L2. Code and figures are placeholders here—swap for your real results.",
    gallery: [
      { id: "fd1", caption: "Field sample" },
      { id: "fd2", caption: "Spectrum match" },
      { id: "fd3", caption: "Ablations" },
    ],
  },
  {
    slug: "generative-pipelines",
    title: "Generative Pipelines",
    subtitle: "Scientific data — diffusion & autoregressive stacks",
    year: "2024",
    venue: "Research",
    tags: ["Generative AI", "Autoregressive", "Research"],
    abstract:
      "End-to-end pipelines for scientific data: from raw measurements or simulations to latent space, generation, " +
      "and evaluation. We compare diffusion and autoregressive heads under a shared tokenizer and reporting harness.",
    problem:
      "Lab workflows need reproducible pipelines, not one-off notebooks. Models must plug into evaluation, versioning, " +
      "and downstream tasks without rewrites every iteration.",
    approach:
      "Modular stages: preprocessing → tokenization or VAE → generative backbone → task metrics. Shared config and " +
      "logging so experiments stay comparable across model families.",
    outcome:
      "A reference pipeline layout you can adapt: swap in your datasets, swap in your checkpoints. Placeholder panels " +
      "below stand in for figures and tables.",
    gallery: [
      { id: "gp1", caption: "Pipeline" },
      { id: "gp2", caption: "Metrics" },
      { id: "gp3", caption: "Samples" },
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
      "We trained Independent Proximal Policy Optimization (IPPO) agents within the DeepMind Melting Pot suite[cite: 8, 94]. We mathematically modify the rewards to reflect different social ideologies before they are passed to the learning algorithm[cite: 44, 45]. We also tested dynamic curriculum schedules[cite: 57].",
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
