"use client";

import { motion } from "framer-motion";

const LINKS = [
  {
    label: "GitHub",
    value: "github.com/jsbldquant04",
    href: "https://github.com/jsbldquant04",
  },
  {
    label: "LinkedIn",
    value: "add your LinkedIn URL",
    href: "#",
    placeholder: true,
  },
  {
    label: "Email",
    value: "add your email address",
    href: "#",
    placeholder: true,
  },
  {
    label: "Resume",
    value: "add your resume PDF link",
    href: "#",
    placeholder: true,
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative mx-auto flex min-h-[90svh] max-w-[1400px] flex-col justify-center px-5 py-28 md:px-10"
    >
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="section-index mb-8"
      >
        06 / CONTACT
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="font-mono-label mb-6 text-xs text-quantum-300"
      >
        OPEN CHANNEL
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, delay: 0.15 }}
        className="text-glow font-serif text-[13vw] font-light leading-[0.92] text-paper sm:text-[9vw] md:text-8xl lg:text-9xl"
      >
        LET&rsquo;S MODEL
        <br />
        WHAT&rsquo;S NEXT.
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-16 grid grid-cols-1 gap-6 border-t border-line pt-10 sm:grid-cols-2 md:grid-cols-4"
      >
        {LINKS.map((l) => (
          <a
            key={l.label}
            href={l.href}
            target={l.href.startsWith("http") ? "_blank" : undefined}
            rel={l.href.startsWith("http") ? "noopener noreferrer" : undefined}
            aria-disabled={l.placeholder}
            className="group flex flex-col gap-2"
          >
            <span className="font-mono-label text-[0.65rem] text-mute">
              {l.label}
            </span>
            <span
              className={`text-sm transition-colors ${
                l.placeholder
                  ? "italic text-mute/70"
                  : "text-paper group-hover:text-quantum-300"
              }`}
            >
              {l.value} {!l.placeholder && "↗"}
            </span>
          </a>
        ))}
      </motion.div>

      <p className="mt-20 font-mono text-[0.65rem] text-mute/60">
        © {new Date().getFullYear()} Joshua Salvino — built with Next.js, Three.js &amp; a healthy respect for uncertainty.
      </p>
    </section>
  );
}
