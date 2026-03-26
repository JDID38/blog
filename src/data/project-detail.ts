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
      "We want to reconstruct 3D flow fields from sparse 2D planar velocity data. We use a Denoising Diffusion Probabilistic Model (DDPM) to predict the missing flow information[cite: 779, 780].",
    problem:
      "In fluid mechanics, getting full 3D measurements is very hard and expensive[cite: 786, 787]. Standard experimental techniques like PIV usually only give 2D cross-sections[cite: 788]. We need a computational way to infer the complete 3D turbulent flow structure from these limited 2D slices to save time and storage[cite: 793, 795, 796].",
    approach:
      "We used Direct Numerical Simulation (DNS) data of turbulent channel flow from the Johns Hopkins Turbulence Database[cite: 782, 840, 842]. We extracted 3D volumes and randomly masked 50% of the 2D slices to simulate missing experimental data[cite: 902, 931]. Then, we built a 3D U-Net as the denoising model for our DDPM[cite: 917]. The model learns to reverse the diffusion noise process and predicts the missing velocity fields conditioned on the available spatial slices[cite: 918, 926].",
    outcome:
      "The DDPM performed much better than a standard 3D CNN (U-Net) and linear interpolation baselines[cite: 783, 1010]. Because it learns from the statistical distribution of the turbulent flow, it successfully captured global flow patterns and long-range spatial dependencies without needing hard-coded Navier-Stokes equations[cite: 1011, 1012, 1024].",
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
      "This project synthesizes Computed Tomography (CT) images from Magnetic Resonance Imaging (MRI) data[cite: 270, 274]. The goal is to allow an 'MR-only' workflow to reduce patient radiation exposure and improve efficiency during pelvic radiotherapy planning[cite: 274].",
    problem:
      "CT scans expose patients to severe radiation, and using both CT and MRI devices increases hospital costs and operation time[cite: 293]. However, predicting CT from MRI is a challenging translation problem because they measure different physical properties: MRI shows soft tissue contrast very well, while CT captures electron density like bones and air[cite: 297].",
    approach:
      "We used the SynthRAD2023 dataset with 180 patient cases[cite: 317, 318]. We built a physics-inspired generative model called PFGM++[cite: 299, 302]. It uses a U-Net architecture combined with SwinFIR Transformer blocks[cite: 279]. The network takes a noisy CT slice and a conditioning MR slice, and uses Poisson flow equations to transport the noisy sample back to a clean synthetic CT[cite: 381, 382, 383, 384].",
    outcome:
      "Our SwinFIR-PFGM model reached a Peak Signal-to-Noise Ratio (PSNR) of 20.68 and a Mean Absolute Error of 0.11[cite: 280]. It easily surpassed our 2D U-Net baseline[cite: 280]. The generated soft tissues and bones were much sharper, respected the anatomical boundaries, and matched the ground truth intensity values much better[cite: 411, 412, 424].",
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
      "Standard reinforcement learning agents struggle to cooperate in environments with limited resources, known as Sequential Social Dilemmas[cite: 4, 16]. We implemented an education approach to shift agent goals over time using a Social Value Orientation (SVO) reward transformation[cite: 7].",
    problem:
      "When artificial agents only optimize for their own immediate rewards, they act selfishly and quickly deplete all the resources in the environment[cite: 18]. This leads to suboptimal outcomes and starvation for the whole population[cite: 19]. Standard algorithms like Q-learning or Policy Gradients fail to learn sustainable cooperation in these scenarios[cite: 30].",
    approach:
      "We trained Independent Proximal Policy Optimization (IPPO) agents equipped with LSTM memory networks inside the DeepMind Melting Pot simulator[cite: 8, 94, 100]. We intercepted the environment rewards and mathematically transformed them to mix personal success with the success of peer agents[cite: 44, 48]. We tested both static ideologies (like 45° for balanced cooperation) and dynamic curriculum schedules (like linear or exponential changes)[cite: 53, 59].",
    outcome:
      "We found that a static 45° cooperative ideology worked best, yielding the most sustainable harvesting, highest total reward, and lowest inequality[cite: 112, 178]. Surprisingly, the dynamic curriculum schedules failed[cite: 219]. Shifting the ideology during training confused the IPPO agents' advantage estimations and caused severe optimization instability[cite: 221, 222].",
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
      "Accurate predictions of soccer player market values and wages are critical for club management and transfer strategies[cite: 493, 494]. We built machine learning models to predict these financial metrics from player and team performance data[cite: 487, 500].",
    problem:
      "Predicting player market values is a very complex challenge because there is a massive amount of data and a multitude of physical and performance factors that contribute to a player's worth[cite: 495]. Standard models struggle to capture both the static physical traits and the dynamic temporal performance trends over multiple games[cite: 633, 634].",
    approach:
      "We tackled two main tasks. First, we built FIFANet, a multi-task neural network with shared layers, to jointly predict player wage and market value using FIFA dataset attributes[cite: 502, 542, 545]. Second, we built ClubNet, a meta-model that predicts market value increases after a transfer[cite: 506]. ClubNet combines an LSTM to process sequential game data with Random Forest and Gradient Boosting Regressors to process static physical features[cite: 506, 551, 552, 553].",
    outcome:
      "FIFANet consistently outperformed all baseline models like Ridge Regression and Random Forest, achieving the highest R-squared scores and lowest errors[cite: 575]. ClubNet also beat the baselines for predicting value increases, proving that aggregating temporal LSTM data with static regression models creates a much stronger and more accurate predictive tool[cite: 632, 635].",
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