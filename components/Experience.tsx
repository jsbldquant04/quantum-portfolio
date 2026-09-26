"use client";

import { motion } from "framer-motion";
import { experience } from "@/data/experience";

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative mx-auto max-w-[1400px] px-5 py-28 md:px-10 md:py-36"
    >
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="section-index mb-8"
      >
        02 / EXPERIENCE
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="mb-16 max-w-2xl font-serif text-4xl font-light text-paper sm:text-5xl"
      >
        A record, not a résumé.
      </motion.h2>

      <div className="border-t border-line">
        {experience.map((item, i) => (
          <motion.div
            key={item.role}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: i * 0.08 }}
            className="grid grid-cols-1 gap-4 border-b border-line py-10 md:grid-cols-12 md:gap-8"
          >
            <div className="md:col-span-2">
              <p className="font-mono-label text-xs text-quantum-300">
                {item.period}
              </p>
            </div>

            <div className="md:col-span-4">
              <h3 className="text-xl font-medium text-paper">{item.role}</h3>
              <p className="mt-1 text-sm text-mute">{item.org}</p>
            </div>

            <div className="md:col-span-6">
              <p className="mb-4 text-sm leading-relaxed text-paper/70">
                {item.summary}
              </p>
              <ul className="space-y-2.5">
                {item.bullets.map((b) => (
                  <li
                    key={b}
                    className="flex gap-3 text-sm leading-relaxed text-paper/65"
                  >
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-quantum-400" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
