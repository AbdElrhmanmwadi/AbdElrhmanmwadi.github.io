// Project cards. Replace the `github` and `demo` links with your real URLs.
export const projects = [
  {
    title: "AI RAG Chatbot",
    subtitle: "PDF + Knowledge Base",
    description:
      "A retrieval-augmented chatbot that ingests PDFs and custom knowledge bases, embeds them into a vector store, and answers questions with cited, grounded responses — eliminating hallucinations on private data.",
    tech: ["Python", "LangChain", "FAISS", "FastAPI", "OpenAI"],
    github: "https://github.com/AbdElrhmanmwadi/ai-rag-chatbot",
    demo: "",
    featured: true,
  },
  {
    title: "Voice AI Assistant",
    subtitle: "Speech-to-Speech System",
    description:
      "A real-time voice assistant with a full speech-to-speech loop: Whisper transcribes the user, an LLM reasons over the request, and ElevenLabs streams a natural voice reply over WebRTC with low latency.",
    tech: ["Whisper", "ElevenLabs", "WebRTC", "FastAPI", "Python"],
    github: "https://github.com/AbdElrhmanmwadi/voice-ai-assistant",
    demo: "",
    featured: true,
  },
  {
    title: "Multi-Agent AI System",
    subtitle: "Orchestrated with LangGraph",
    description:
      "A multi-agent workflow built on LangGraph where specialized agents (planner, researcher, critic, executor) collaborate through a shared state graph to solve complex tasks autonomously with built-in self-correction.",
    tech: ["LangGraph", "LangChain", "Python", "ChromaDB"],
    github: "https://github.com/AbdElrhmanmwadi/multi-agent-langgraph",
    demo: "",
    featured: true,
  },
  {
    title: "Local LLM Chatbot",
    subtitle: "Private & Offline with Ollama",
    description:
      "A fully local, privacy-first chatbot running open-source models through Ollama — no API keys, no data leaving the machine. Streaming responses with a clean web UI for offline AI experimentation.",
    tech: ["Ollama", "Python", "FastAPI", "Llama 3"],
    github: "https://github.com/AbdElrhmanmwadi/local-llm-ollama",
    demo: "",
    featured: false,
  },
];
