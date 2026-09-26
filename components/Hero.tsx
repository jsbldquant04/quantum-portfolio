"use client";

import { motion } from "framer-motion";
import QuantumOrbital from "./QuantumOrbital";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-5 text-center"
    >
      <QuantumOrbital />

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="font-mono-label mb-6 text-[0.68rem] text-quantum-300"
      >
        SYSTEM // PORTFOLIO.EXE
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-glow font-serif text-[19vw] font-light leading-[0.85] tracking-tight text-paper sm:text-[14vw] md:text-[10rem] lg:text-[11rem]"
      >
        QUANTUM
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="mt-5 text-lg font-medium tracking-[0.18em] text-paper sm:text-xl"
      >
        JOSHUA SALVINO
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.55 }}
        className="font-mono-label mt-4 text-[0.7rem] text-mute sm:text-xs"
      >
        PHYSICS × DATA × FINANCE × INTELLIGENCE
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.7 }}
        className="mt-8 max-w-md text-balance text-base italic text-paper/80 sm:text-lg"
      >
        &ldquo;Modeling uncertainty through mathematics, data, and
        intelligent systems.&rdquo;
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.9 }}
        className="mt-12 flex flex-col items-center gap-4 sm:flex-row"
      >
        <a
          href="#about"
          className="border border-quantum-400/60 px-7 py-3 font-mono-label text-xs text-quantum-200 transition-colors hover:border-quantum-300 hover:bg-quantum-400/10 hover:text-quantum-100"
        >
          ENTER SYSTEM
        </a>
        <a
          href="https://github.com/jsbldquant04"
          target="_blank"
          rel="noopener noreferrer"
          className="px-7 py-3 font-mono-label text-xs text-mute transition-colors hover:text-paper"
        >
          VIEW GITHUB ↗
        </a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.3 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        aria-hidden
      >
        <div className="h-10 w-px animate-pulseGlow bg-gradient-to-b from-quantum-400 to-transparent" />
      </motion.div>
    </section>
  );
}
