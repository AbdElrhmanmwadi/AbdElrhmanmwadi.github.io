"use client";

import { ArrowUpRight, Github } from "lucide-react";

export default function ProjectCard({ project }) {
  return (
    <div className="card group relative flex h-full flex-col overflow-hidden p-6 hover:-translate-y-1.5 hover:border-accent/60 hover:shadow-2xl hover:shadow-accent/10">
      {/* Gradient glow on hover */}
      <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-accent/0 blur-3xl transition-all duration-500 group-hover:bg-accent/20" />

      <div className="mb-4 flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">
            {project.title}
          </h3>
          <p className="mt-0.5 text-sm font-medium text-accent">
            {project.subtitle}
          </p>
        </div>
        <div className="flex gap-2">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${project.title} GitHub repository`}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition-colors hover:border-accent hover:text-accent dark:border-slate-700 dark:text-slate-400"
          >
            <Github size={16} />
          </a>
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} live demo`}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition-colors hover:border-accent hover:text-accent dark:border-slate-700 dark:text-slate-400"
            >
              <ArrowUpRight size={16} />
            </a>
          )}
        </div>
      </div>

      <p className="flex-1 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
        {project.description}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span
            key={t}
            className="rounded-md bg-accent/10 px-2.5 py-1 text-xs font-medium text-accent dark:text-accent-light"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
