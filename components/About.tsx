"use client";

import { motion } from "framer-motion";

const reveal = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

export default function About() {
  return (
    <section
      id="about"
      className="relative mx-auto max-w-[1400px] px-5 py-28 md:px-10 md:py-36"
    >
      <motion.p
        variants={reveal}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="section-index mb-8"
      >
        01 / ABOUT
      </motion.p>

      <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-8">
        <motion.h2
          variants={reveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="col-span-12 max-w-2xl font-serif text-4xl font-light leading-[1.08] text-paper sm:text-5xl md:col-span-7 md:text-6xl"
        >
          From quantum systems to financial systems.
        </motion.h2>

        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="col-span-12 flex flex-col gap-6 text-base leading-relaxed text-paper/75 md:col-span-5 md:mt-2"
        >
          <p>
            My training is in physics — quantum measurement theory and the
            mathematics of open systems. What carried over into data and
            finance was the habit underneath it: treating uncertainty as
            something to be modeled precisely, not waved away.
          </p>
          <p>
            Day to day, that means working across data science, quantitative
            modeling, financial risk, and machine learning — building
            dashboards and pipelines that hold up under real operational
            load, and researching frameworks that connect stochastic physics
            to market structure. I&rsquo;m currently extending that line of
            work in an MS in Applied Mathematics, concentrated in
            Mathematical Finance.
          </p>
          <p className="font-mono-label text-xs text-quantum-300">
            PHYSICS → PROBABILITY → RISK → DECISIONS
          </p>
        </motion.div>
      </div>
    </section>
  );
}
