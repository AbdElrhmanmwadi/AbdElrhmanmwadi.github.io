"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import { site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 py-10 dark:border-slate-800">
      <div className="container-px flex flex-col items-center justify-between gap-6 sm:flex-row">
        <div className="text-center sm:text-left">
          <p className="font-bold">
            <span className="heading-gradient">{site.name}</span>
          </p>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            AI Engineer • {new Date().getFullYear()}
          </p>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={`mailto:${site.email}`}
            aria-label="Email"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition-colors hover:border-accent hover:text-accent dark:border-slate-700 dark:text-slate-400"
          >
            <Mail size={16} />
          </a>
          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition-colors hover:border-accent hover:text-accent dark:border-slate-700 dark:text-slate-400"
          >
            <Github size={16} />
          </a>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition-colors hover:border-accent hover:text-accent dark:border-slate-700 dark:text-slate-400"
          >
            <Linkedin size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
