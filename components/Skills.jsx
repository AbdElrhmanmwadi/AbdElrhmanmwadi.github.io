"use client";

import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { skillGroups } from "@/data/skills";

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container-px">
        <SectionHeading
          eyebrow="Tech Stack"
          title="Skills & Tools"
          description="The technologies I use to design, build, and ship AI systems."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group, i) => (
            <Reveal key={group.category} delay={i * 0.08}>
              <div className="card h-full p-6 hover:-translate-y-1 hover:border-accent/50 hover:shadow-xl hover:shadow-accent/5">
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-accent">
                  {group.category}
                </h3>
                <ul className="space-y-2.5">
                  {group.skills.map((skill) => (
                    <li
                      key={skill}
                      className="flex items-center gap-2.5 text-sm text-slate-600 dark:text-slate-300"
                    >
                      <span className="h-1.5 w-1.5 flex-none rounded-full bg-accent" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
