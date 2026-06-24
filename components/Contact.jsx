"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { site } from "@/data/site";

const channels = [
  {
    icon: Mail,
    label: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
  },
  {
    icon: Github,
    label: "GitHub",
    value: "@your-username",
    href: site.github,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Abd Elrahman Wadi",
    href: site.linkedin,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container-px">
        <SectionHeading
          eyebrow="Get in touch"
          title="Let's build something intelligent"
          description="I'm open to AI engineering roles, internships, and collaborations. Reach out through any channel below."
        />

        <Reveal>
          <div className="mx-auto max-w-4xl">
            <div className="grid gap-4 sm:grid-cols-3">
              {channels.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="card group flex flex-col items-center gap-3 p-7 text-center hover:-translate-y-1 hover:border-accent/60 hover:shadow-xl hover:shadow-accent/10"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 text-accent transition-transform group-hover:scale-110">
                    <c.icon size={22} />
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                    {c.label}
                  </span>
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-200">
                    {c.value}
                  </span>
                </a>
              ))}
            </div>

            <div className="mt-10 text-center">
              <a href={`mailto:${site.email}`} className="btn-primary">
                <Mail size={16} />
                Say Hello
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
