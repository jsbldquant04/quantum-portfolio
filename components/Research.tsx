"use client";

import { motion } from "framer-motion";

export default function Research() {
  return (
    <section
      id="research"
      className="relative mx-auto max-w-[1400px] px-5 py-28 md:px-10 md:py-36"
    >
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="section-index mb-8"
      >
        04 / RESEARCH
      </motion.p>

      <div className="grid grid-cols-1 gap-16 md:grid-cols-12 md:gap-8">
        <div className="md:col-span-6">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-6 font-serif text-3xl font-light leading-tight text-paper sm:text-4xl"
          >
            Pre- and post-selected spin measurements under one internal
            degree of freedom induced decoherence.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-4 text-sm leading-relaxed text-paper/65"
          >
            Conference research (presented at SPP 2025) on how weak-to-strong
            measurement transitions behave when decoherence is induced
            internally, rather than by an external bath — tracked through
            Galapon&rsquo;s internal-decoherence model applied to
            pre- and post-selected spin systems.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-sm leading-relaxed text-paper/50"
          >
            The same mathematics — density operators losing coherence under
            weak coupling to an internal degree of freedom — recurs in the
            quantitative-finance work: systems that decohere from a pure
            state into a statistical mixture behave a great deal like markets
            drifting from a clean regime into a noisy one.
          </motion.p>

          <div className="mt-8 flex flex-wrap gap-2 font-mono text-xs text-quantum-300">
            <span className="border border-line px-3 py-1.5">|ψ⟩</span>
            <span className="border border-line px-3 py-1.5">ρ</span>
            <span className="border border-line px-3 py-1.5">Tr(ρ²)</span>
            <span className="border border-line px-3 py-1.5">decoherence</span>
            <span className="border border-line px-3 py-1.5">measurement</span>
          </div>
        </div>

        <div className="md:col-span-6">
          <QuantumStateViz />
          <p className="mt-4 font-mono text-[0.65rem] text-mute">
            Econophysics work also includes a research poster on temporal
            scaling universality across financial markets, and a co-authored
            DOST–PCIEERD Grant-in-Aid proposal.
          </p>
        </div>
      </div>
    </section>
  );
}

function QuantumStateViz() {
  return (
    <div className="relative aspect-square w-full max-w-md border border-line bg-abyss/60">
      <svg viewBox="0 0 300 300" className="h-full w-full">
        <defs>
          <radialGradient id="stateGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#5fd6f5" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#5fd6f5" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="150" cy="150" r="110" fill="url(#stateGlow)" />
        <circle
          cx="150"
          cy="150"
          r="100"
          fill="none"
          stroke="#1c2530"
          strokeWidth="1"
        />
        {/* Bloch-sphere-like guides */}
        <ellipse cx="150" cy="150" rx="100" ry="34" fill="none" stroke="#22a3c4" strokeOpacity="0.4" strokeWidth="0.75" />
        <ellipse cx="150" cy="150" rx="34" ry="100" fill="none" stroke="#22a3c4" strokeOpacity="0.4" strokeWidth="0.75" />
        <line x1="150" y1="30" x2="150" y2="270" stroke="#1c2530" strokeWidth="0.75" />
        <line x1="30" y1="150" x2="270" y2="150" stroke="#1c2530" strokeWidth="0.75" />

        <motion.circle
          cx="150"
          cy="150"
          r="4"
          fill="#eafcff"
          animate={{
            cx: [150, 210, 150, 90, 150],
            cy: [70, 150, 230, 150, 70],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <line x1="150" y1="150" x2="150" y2="70" stroke="#5fd6f5" strokeWidth="1" strokeOpacity="0.6" />

        <text x="150" y="20" textAnchor="middle" className="font-mono" fontSize="8" fill="#7c8896">
          |0⟩
        </text>
        <text x="150" y="288" textAnchor="middle" className="font-mono" fontSize="8" fill="#7c8896">
          |1⟩
        </text>
      </svg>
    </div>
  );
}
