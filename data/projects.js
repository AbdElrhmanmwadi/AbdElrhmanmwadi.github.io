// Project cards — sourced from real GitHub repositories.
export const projects = [
  {
    title: "RAG Knowledge Engine",
    subtitle: "Production RAG Backend with Agents & Voice",
    description:
      "A production-grade FastAPI backend for document ingestion, RAG question answering, and a conversational agent with token-by-token SSE streaming. Vector search over PGVector/Qdrant, LLM generation via Cohere/OpenAI, JWT auth with Google sign-in, async translation, and a full voice loop (faster-whisper STT + Piper TTS) with automatic Arabic/English voice selection.",
    tech: ["Python", "FastAPI", "PGVector", "Qdrant", "Cohere", "Whisper"],
    github: "https://github.com/AbdElrhmanmwadi/rag-knowledge-engine",
    demo: "",
    featured: true,
  },
  {
    title: "Voxora",
    subtitle: "AI Voice, Translation & Communication Platform",
    description:
      "An AI platform for voice, translation, and smart communication — built as a Vite + React + TypeScript single-page app on top of the RAG Knowledge Engine. Delivers real-time conversational AI, document translation, and voice workflows through a clean, responsive web UI.",
    tech: ["TypeScript", "React", "Vite", "Tailwind CSS"],
    github: "https://github.com/AbdElrhmanmwadi/Voxora",
    demo: "https://voxora-one.vercel.app",
    featured: true,
  },
  {
    title: "Knowledge Engine Mobile",
    subtitle: "Flutter Client for the RAG Engine",
    description:
      "A Flutter mobile client for the RAG Knowledge Engine backend, enabling file upload, semantic search, AI-powered question answering, and document translation on the go. Built with Riverpod state management, GoRouter navigation, and a Material 3 design, following a clean repository-pattern architecture.",
    tech: ["Flutter", "Dart", "Riverpod", "GoRouter", "Dio"],
    github: "https://github.com/AbdElrhmanmwadi/knowledge-engine-mobile",
    demo: "",
    featured: false,
  },
];
