import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import { site } from "@/data/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const siteUrl = "https://AbdElrhmanmwadi.github.io/portfolio";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: `${site.name} — AI Engineer Portfolio`,
  description:
    "AI Engineer & Computer Engineering student specializing in LLMs, RAG systems, LangChain / LangGraph multi-agent workflows, and real-time Voice AI.",
  keywords: [
    "AI Engineer",
    "LLM",
    "RAG",
    "LangChain",
    "LangGraph",
    "Voice AI",
    "Whisper",
    "Machine Learning",
    "Abd Elrahman Wadi",
  ],
  authors: [{ name: site.name }],
  openGraph: {
    title: `${site.name} — AI Engineer`,
    description:
      "Building AI agents, LLM apps, and Voice AI systems. Explore my projects and skills.",
    url: siteUrl,
    siteName: `${site.name} Portfolio`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — AI Engineer`,
    description:
      "Building AI agents, LLM apps, and Voice AI systems.",
  },
  robots: { index: true, follow: true },
};

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0f" },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
