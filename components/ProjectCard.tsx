"use client";

import { motion } from "framer-motion";
import type { Project } from "@/data/projects";
import { VisualizationFor } from "./ProjectVisualizations";

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: (index % 2) * 0.08 }}
      className="group grid grid-cols-1 gap-0 border border-line bg-navy/30 transition-colors hover:border-quantum-700 md:grid-cols-12"
    >
      <div className="flex flex-col justify-between p-6 md:col-span-7 md:p-8">
        <div>
          <div className="mb-5 flex items-center justify-between">
            <span className="font-mono-label text-[0.65rem] text-quantum-400">
              {project.number}
            </span>
            <span className="font-mono-label text-[0.6rem] text-mute">
              {project.category}
            </span>
          </div>

          <h3 className="mb-3 text-2xl font-medium text-paper transition-colors group-hover:text-quantum-200">
            {project.title}
          </h3>

          <p className="mb-4 text-sm leading-relaxed text-paper/65">
            {project.problem}
          </p>

          <p className="mb-5 text-sm leading-relaxed text-paper/55">
            <span className="font-mono-label text-[0.62rem] text-quantum-400">
              METHOD —{" "}
            </span>
            {project.methodology}
          </p>

          <ul className="mb-6 flex flex-wrap gap-2">
            {project.stack.map((s) => (
              <li
                key={s}
                className="border border-line px-2.5 py-1 font-mono text-[0.62rem] text-mute"
              >
                {s}
              </li>
            ))}
          </ul>

          {project.caseStudyNote && (
            <p className="mb-4 font-mono text-[0.62rem] text-mute/80">
              {project.caseStudyNote}
            </p>
          )}
        </div>

        <div className="flex items-center gap-6 border-t border-line pt-5">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono-label text-[0.68rem] text-paper/80 transition-colors hover:text-quantum-300"
          >
            GITHUB ↗
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono-label text-[0.68rem] text-quantum-400 transition-colors hover:text-quantum-200"
          >
            VIEW CASE STUDY →
          </a>
        </div>
      </div>

      <div className="md:col-span-5">
        <VisualizationFor type={project.visualization} />
      </div>
    </motion.article>
  );
}
