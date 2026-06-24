/** @type {import('next').NextConfig} */

// Set GITHUB_PAGES=true when building for a GitHub Pages project site
// (e.g. https://username.github.io/portfolio). On Vercel leave it unset.
const isGithubPages = process.env.GITHUB_PAGES === "true";
const repoName = process.env.REPO_NAME || "portfolio";

const nextConfig = {
  reactStrictMode: true,

  // Produce a fully static site in `out/` — works on Vercel AND GitHub Pages.
  output: "export",

  images: {
    // next/image optimization is not available on a static export.
    unoptimized: true,
  },

  // GitHub Pages serves a project site from a sub-path, so prefix assets.
  ...(isGithubPages
    ? {
        basePath: `/${repoName}`,
        assetPrefix: `/${repoName}/`,
      }
    : {}),

  trailingSlash: true,
};

module.exports = nextConfig;
