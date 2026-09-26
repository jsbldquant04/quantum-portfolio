"use client";

interface Eq {
  tex: string;
  top: string;
  left: string;
  size: string;
  delay: string;
  duration: string;
}

const EQUATIONS: Eq[] = [
  { tex: "iħ ∂ψ/∂t = Ĥψ", top: "12%", left: "6%", size: "text-sm md:text-base", delay: "0s", duration: "16s" },
  { tex: "ΔxΔp ≥ ħ/2", top: "22%", left: "82%", size: "text-xs md:text-sm", delay: "1.2s", duration: "19s" },
  { tex: "dSₜ = μSₜdt + σSₜdWₜ", top: "38%", left: "4%", size: "text-xs md:text-base", delay: "2.4s", duration: "14s" },
  {
    tex: "∂V/∂t + ½σ²S²∂²V/∂S² + rS∂V/∂S − rV = 0",
    top: "58%",
    left: "58%",
    size: "text-[0.6rem] md:text-xs",
    delay: "0.6s",
    duration: "22s",
  },
  { tex: "VaRα(L)", top: "68%", left: "10%", size: "text-sm md:text-lg", delay: "3s", duration: "17s" },
  { tex: "Σ = QΛQᵀ", top: "80%", left: "78%", size: "text-sm md:text-base", delay: "1.8s", duration: "20s" },
  { tex: "θ* = argminθ L(θ)", top: "6%", left: "62%", size: "text-xs md:text-sm", delay: "2s", duration: "18s" },
  { tex: "P(τ ≤ t | x)", top: "48%", left: "88%", size: "text-xs md:text-sm", delay: "0.9s", duration: "15s" },
  { tex: "ρ, Tr(ρ²)", top: "90%", left: "40%", size: "text-xs md:text-sm", delay: "2.6s", duration: "21s" },
];

export default function FloatingEquations() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-[6] overflow-hidden"
    >
      {EQUATIONS.map((eq) => (
        <span
          key={eq.tex}
          className={`absolute select-none font-mono text-quantum-200/[0.14] ${eq.size} motion-safe:animate-drift`}
          style={{
            top: eq.top,
            left: eq.left,
            animationDelay: eq.delay,
            animationDuration: eq.duration,
          }}
        >
          {eq.tex}
        </span>
      ))}
    </div>
  );
}
