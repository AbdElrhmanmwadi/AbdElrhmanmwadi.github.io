"use client";

import { Bot, BrainCircuit, Mic } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const highlights = [
  {
    icon: BrainCircuit,
    title: "RAG & LLMs",
    text: "Designing retrieval-augmented systems that ground LLMs in private data for accurate, citeable answers.",
  },
  {
    icon: Bot,
    title: "Agentic AI",
    text: "Building multi-agent workflows with LangGraph where agents plan, reason, and self-correct.",
  },
  {
    icon: Mic,
    title: "Voice AI",
    text: "Crafting real-time speech-to-speech assistants with Whisper, TTS, and WebRTC.",
  },
];

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container-px">
        <SectionHeading
          eyebrow="About Me"
          title="Turning AI research into real products"
        />

        <div className="grid items-start gap-10 lg:grid-cols-5">
          <Reveal className="lg:col-span-3">
            <div className="space-y-5 text-base leading-relaxed text-slate-600 dark:text-slate-300">
              <p>
                I&apos;m a{" "}
                <span className="font-semibold text-slate-900 dark:text-white">
                  Computer Engineering student
                </span>{" "}
                and AI Engineer driven by a deep passion for building
                intelligent systems that actually ship. My focus is on{" "}
                <span className="font-semibold text-accent">
                  Large Language Models, RAG architectures, and agent-based AI
                </span>
                .
              </p>
              <p>
                I love the engineering challenge of taking a model from a
                notebook to a production service — wiring up vector databases,
                orchestrating multi-agent graphs, and squeezing real-time
                latency out of Voice AI pipelines. I care about clean
                architecture, grounded answers, and great user experience.
              </p>
              <p>
                Whether it&apos;s a RAG chatbot that reasons over thousands of
                PDFs, or a speech-to-speech assistant that feels genuinely
                conversational, I enjoy bridging the gap between cutting-edge AI
                and dependable software.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-4 lg:col-span-2">
            {highlights.map((h, i) => (
              <Reveal key={h.title} delay={i * 0.1}>
                <div className="card flex gap-4 p-5 hover:border-accent/50 hover:shadow-lg hover:shadow-accent/5">
                  <div className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <h.icon size={22} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-white">
                      {h.title}
                    </h3>
                    <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                      {h.text}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
