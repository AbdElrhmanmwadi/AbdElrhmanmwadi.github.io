/** @type {import('next').NextConfig} */

// Set GITHUB_PAGES=true when building for GitHub Pages.
// - User/org site  (repo named "<user>.github.io")  -> served at root, no basePath.
// - Project site   (any other repo name)            -> served at /<repo>, needs basePath.
// On Vercel, leave GITHUB_PAGES unset.
const isGithubPages = process.env.GITHUB_PAGES === "true";
const repoName = process.env.REPO_NAME || "";
const isUserSite = repoName.endsWith(".github.io");
const useBasePath = isGithubPages && !isUserSite && repoName.length > 0;

const nextConfig = {
  reactStrictMode: true,

  // Produce a fully static site in `out/` — works on Vercel AND GitHub Pages.
  output: "export",

  images: {
    // next/image optimization is not available on a static export.
    unoptimized: true,
  },

  // Project sites live under a sub-path, so prefix assets. User sites don't.
  ...(useBasePath
    ? {
        basePath: `/${repoName}`,
        assetPrefix: `/${repoName}/`,
      }
    : {}),

  trailingSlash: true,
};

module.exports = nextConfig;
