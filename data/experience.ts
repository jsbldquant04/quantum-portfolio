export interface ExperienceEntry {
  period: string;
  role: string;
  org: string;
  summary: string;
  bullets: string[];
}

export const experience: ExperienceEntry[] = [
  {
    period: "CURRENT",
    role: "Data Analyst",
    org: "Transformation & Process Excellence (TPE) — Business Intelligence Pioneering Team, Magellan BPO",
    summary:
      "Founding member of a newly formed BI function embedded within a transformation team, building analytics infrastructure across HR, Talent Acquisition, Training, Finance, QA, and Operations.",
    bullets: [
      "Designed and shipped 12+ Power BI dashboards spanning HR analytics, talent acquisition, training, accounting & finance, QA, and operations.",
      "Built standardized analytical datasets to replace ad-hoc, program-specific reporting with a shared source of truth.",
      "Automated incentive-eligibility validation across multiple operational programs, reducing manual reconciliation.",
      "Authored Power BI DAX measures (including balance fill-rate tracking) for recurring operational reporting.",
      "Developed a multi-program KPI dashboard with a custom formula builder, and an employee-tracker web app, to standardize how incentive metrics are computed and audited.",
      "Works daily with large operational datasets across process-automation and transformation initiatives.",
    ],
  },
  {
    period: "ONGOING",
    role: "MS Applied Mathematics — Mathematical Finance",
    org: "University of the Philippines Diliman (part-time, expected 2029)",
    summary:
      "Graduate coursework and thesis research bridging physics-derived stochastic methods with quantitative finance.",
    bullets: [
      "Thesis: applying Random Matrix Theory to the Philippine banking network via a Cluster Perturbation Sensitivity Index (CPSI) framework, structured across three chapters.",
      "Coursework grounded in stochastic calculus — Itô's lemma, Black–Scholes, risk-neutral pricing, Girsanov's theorem.",
      "Advised by Sir Sigmund Breton; thesis direction arrived at after evaluating and discarding several earlier candidate frameworks.",
    ],
  },
  {
    period: "PRIOR",
    role: "BS Physics, Academic Distinction",
    org: "Polytechnic University of the Philippines — Sta. Mesa",
    summary:
      "Research grounding in quantum measurement theory and econophysics, carried forward into current quantitative work.",
    bullets: [
      "Co-authored a conference paper presented at SPP 2025 on weak-to-strong quantum measurement transitions under an internal-decoherence model.",
      "Produced an econophysics research poster on temporal scaling universality across financial markets.",
      "Co-author on a DOST–PCIEERD Grant-in-Aid research proposal.",
    ],
  },
];
