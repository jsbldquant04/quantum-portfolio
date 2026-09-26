"use client";

import { motion } from "framer-motion";
import { skillCategories } from "@/data/skills";

export default function TechStack() {
  return (
    <section
      id="stack"
      className="relative mx-auto max-w-[1400px] px-5 py-28 md:px-10 md:py-36"
    >
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="section-index mb-8"
      >
        05 / SYSTEM STACK
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="mb-16 max-w-2xl font-serif text-4xl font-light text-paper sm:text-5xl"
      >
        Instruments and infrastructure.
      </motion.h2>

      <div className="grid grid-cols-1 gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-5">
        {skillCategories.map((cat, i) => (
          <motion.div
            key={cat.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            className="bg-void p-6"
          >
            <p className="font-mono-label mb-5 text-[0.65rem] text-quantum-400">
              {cat.label}
            </p>
            <ul className="space-y-2.5">
              {cat.items.map((item) => (
                <li key={item} className="text-sm text-paper/70">
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
