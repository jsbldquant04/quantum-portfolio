export type ProjectCategory =
  | "CREDIT RISK"
  | "QUANTITATIVE FINANCE"
  | "AI / MACHINE LEARNING"
  | "DATA ENGINEERING"
  | "PHYSICS / COMPLEX SYSTEMS";

export type VisualizationType =
  | "credit-risk"
  | "monte-carlo"
  | "market-regime"
  | "rmt-eigenvalue"
  | "ai-agent"
  | "generic";

export interface Project {
  id: string;
  number: string;
  category: ProjectCategory;
  title: string;
  problem: string;
  methodology: string;
  stack: string[];
  visualization: VisualizationType;
  githubUrl: string;
  caseStudyNote?: string;
}

export const projects: Project[] = [
  {
    id: "cpsi-rmt-banking",
    number: "01",
    category: "PHYSICS / COMPLEX SYSTEMS",
    title: "Cluster Perturbation Sensitivity Index",
    problem:
      "Standard correlation-matrix diagnostics flag systemic risk in banking networks only after stress is already visible in prices. The question is whether the structure of the correlation spectrum itself carries an earlier signal.",
    methodology:
      "Applies Random Matrix Theory to the Philippine banking network — separating eigenvalues consistent with the Marchenko–Pastur null from genuine outlier modes, then tracking cluster-level perturbation sensitivity as a leading indicator of network fragility. MS thesis in Applied Mathematics (Mathematical Finance), structured across three chapters.",
    stack: ["Python", "NumPy", "pandas", "RMT", "Graph Theory", "MATLAB"],
    visualization: "rmt-eigenvalue",
    githubUrl: "https://github.com/jsbldquant04",
    caseStudyNote:
      "Active thesis research — case study reflects the current CPSI framework direction and will be updated as chapters are completed.",
  },
  {
    id: "credit-risk-scorecard",
    number: "02",
    category: "CREDIT RISK",
    title: "PD Scorecard & Calibration Study",
    problem:
      "A lending desk needs a probability-of-default model that is not just discriminative but well-calibrated — where a predicted 8% default rate actually behaves like 8% in practice.",
    methodology:
      "Gradient-boosted scorecard (XGBoost / LightGBM) benchmarked against logistic-regression baselines, evaluated on discrimination (ROC-AUC, KS statistic) and calibration (reliability curves, Brier score), with SHAP-based reason codes for adverse-action transparency.",
    stack: ["Python", "XGBoost", "scikit-learn", "SHAP", "pandas", "SQL"],
    visualization: "credit-risk",
    githubUrl: "https://github.com/jsbldquant04",
  },
  {
    id: "monte-carlo-risk-engine",
    number: "03",
    category: "QUANTITATIVE FINANCE",
    title: "Monte Carlo Risk Engine",
    problem:
      "Closed-form VaR understates tail risk under fat-tailed, path-dependent exposures. A simulation engine is needed to price risk under realistic stochastic dynamics.",
    methodology:
      "Simulates asset paths under geometric Brownian motion and stochastic-volatility variants, aggregating terminal-loss distributions to estimate VaR and Expected Shortfall at multiple confidence levels, with variance-reduction techniques for convergence.",
    stack: ["Python", "NumPy", "SciPy", "stochastic calculus", "Streamlit"],
    visualization: "monte-carlo",
    githubUrl: "https://github.com/jsbldquant04",
    caseStudyNote: "Figures shown are illustrative unless sourced from the live repository.",
  },
  {
    id: "regime-detection-hmm",
    number: "04",
    category: "QUANTITATIVE FINANCE",
    title: "Market Regime Detection",
    problem:
      "Volatility and correlation are not stationary. A strategy tuned to a calm market can fail abruptly when the regime shifts to crisis-like dynamics.",
    methodology:
      "Hidden Markov Model over return and volatility features to infer latent market regimes (low-volatility, high-volatility, crisis), with transition-probability estimation and regime-conditional statistics used to inform position sizing.",
    stack: ["Python", "hmmlearn", "statsmodels", "GARCH", "pandas"],
    visualization: "market-regime",
    githubUrl: "https://github.com/jsbldquant04",
  },
  {
    id: "kpi-automation-suite",
    number: "05",
    category: "DATA ENGINEERING",
    title: "Operational KPI Automation Suite",
    problem:
      "A BPO operations floor tracked incentive-eligible KPIs across many programs by hand, with formulas that changed program-to-program and were slow to validate.",
    methodology:
      "Built a multi-program KPI dashboard with a custom formula builder and an employee-tracking web app to standardize incentive validation across programs, replacing manual spreadsheet reconciliation with a repeatable, auditable pipeline.",
    stack: ["JavaScript", "Google Apps Script", "Power BI", "DAX", "SQL"],
    visualization: "generic",
    githubUrl: "https://github.com/jsbldquant04",
  },
  {
    id: "quant-research-agent",
    number: "06",
    category: "AI / MACHINE LEARNING",
    title: "Research-Assistant Agent Pipeline",
    problem:
      "Screening candidate models, datasets, and papers for a quant-research workflow is repetitive and time-consuming when done manually, one query at a time.",
    methodology:
      "An orchestration layer routes a research query to tool-calling agents — search, data retrieval, and model evaluation — and returns a structured, sourced summary rather than a single unstructured completion.",
    stack: ["Python", "LangChain", "n8n", "FastAPI", "Vector Search"],
    visualization: "ai-agent",
    githubUrl: "https://github.com/jsbldquant04",
  },
];
