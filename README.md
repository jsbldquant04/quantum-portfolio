# QUANTUM — Joshua Salvino Portfolio

A cinematic, research-terminal-styled personal portfolio built around the
intersection of physics, data science, quantitative finance, and AI.

## Stack

- Next.js 14 (App Router) + TypeScript
- Tailwind CSS
- Framer Motion
- Three.js / React Three Fiber (quantum particle background)

## Project structure

```
app/
  layout.tsx        — root layout, fonts, metadata
  page.tsx           — assembles all sections
  globals.css         — design tokens, base styles
components/
  LoadingScreen.tsx     — boot sequence ("INITIALIZING WAVEFUNCTION...")
  QuantumBackground.tsx  — R3F particle field with cursor repulsion
  QuantumOrbital.tsx      — abstract orbital behind the hero
  FloatingEquations.tsx    — low-opacity drifting equations
  Navigation.tsx
  Hero.tsx
  About.tsx
  Experience.tsx
  Projects.tsx / ProjectCard.tsx / ProjectVisualizations.tsx
  Research.tsx
  TechStack.tsx
  Contact.tsx
data/
  projects.ts    — project content (edit here to add/change projects)
  experience.ts   — experience timeline content
  skills.ts        — tech stack categories
```

## Development

```bash
npm install
npm run dev
```

Visit http://localhost:3000.

## Build

```bash
npm run build
npm run start
```

## Deployment (Vercel)

1. Push this repository to GitHub.
2. Import the repo at https://vercel.com/new.
3. Framework preset: Next.js (auto-detected). No environment variables are required.
4. Deploy.

## Deployment (GitHub Pages)

This project is pre-configured for GitHub Pages: `next.config.js` builds a
static export (`output: "export"`), and `.github/workflows/deploy.yml`
builds and publishes it automatically on every push to `main`.

1. Push the repo to GitHub.
2. In the repo, go to **Settings → Pages** and set **Source** to
   **GitHub Actions**.
3. Push to `main` (or run the workflow manually from the **Actions** tab).
   The site will be live at `https://<username>.github.io/<repo>/`
   (or `https://<username>.github.io/` if the repo is literally named
   `<username>.github.io`).

No manual basePath edits are needed — `next.config.js` detects the repo
name at build time via the `GITHUB_REPOSITORY` environment variable that
GitHub Actions sets automatically.

## Things to fill in before shipping

`components/Contact.tsx` contains placeholder entries for LinkedIn, email,
and a resume link — replace the `href`/`value` fields once you have the real
URLs. `data/projects.ts` marks illustrative figures (e.g. Monte Carlo VaR
numbers) with a `caseStudyNote`; swap in real results once available from
each repository at https://github.com/jsbldquant04.

## Performance & accessibility notes

- Particle count scales down automatically on smaller viewports and is
  disabled under `prefers-reduced-motion`.
- The R3F canvas pauses its render loop when the tab is not visible.
- All interactive elements have visible focus states; navigation is fully
  keyboard-operable.
- Section reveal animations use `whileInView` with `once: true` to avoid
  re-triggering on scroll-back.
