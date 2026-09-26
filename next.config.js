/** @type {import('next').NextConfig} */

// When building in GitHub Actions for GitHub Pages, a *project* page
// (any repo that isn't <username>.github.io) is served from
// https://<username>.github.io/<repo>/ — so assets need that repo name
// as a basePath/assetPrefix. A *user/org* page (repo literally named
// <username>.github.io) is served from the domain root and needs neither.
const isGithubActions = process.env.GITHUB_ACTIONS === "true";
let basePath = "";
let assetPrefix = "";

if (isGithubActions && process.env.GITHUB_REPOSITORY) {
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*\//, "");
  if (!repo.endsWith(".github.io")) {
    basePath = `/${repo}`;
    assetPrefix = `/${repo}/`;
  }
}

const nextConfig = {
  output: "export", // static HTML export — required for GitHub Pages
  reactStrictMode: true,
  eslint: { ignoreDuringBuilds: true },
  images: { unoptimized: true }, // next/image optimization needs a server; unused here anyway
  basePath,
  assetPrefix,
};

module.exports = nextConfig;
