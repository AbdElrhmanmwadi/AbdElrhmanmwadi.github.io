"use client";

import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import ProjectCard from "./ProjectCard";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container-px">
        <SectionHeading
          eyebrow="Portfolio"
          title="Featured Projects"
          description="A selection of AI systems I've built — from RAG chatbots to real-time Voice AI and multi-agent workflows."
        />

        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((project, i) => (
            <Reveal key={project.title} delay={i * 0.1}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
