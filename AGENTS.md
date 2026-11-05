# The Sound of Entanglement: website

The website for *The Sound of Entanglement*, an art–science project in which a
live Bell-test experiment with entangled photons conducts music and visuals in
real time (pieces: *BruQner*, *8 Rooms*, *Indeterminate Apparatus*). It
replaces the placeholder at soundofentanglement.com.

**Before doing anything, read [`docs/README.md`](docs/README.md).** It indexes
a verified knowledge base about the project, people, physics, pieces, shows,
data and assets, so you don't need to re-explore the source drives.

## Stack

- [Astro](https://docs.astro.build) 7, fully static output, no backend.
- TypeScript (strict). Plain CSS (no framework) with design tokens as custom properties.
- WebGL / canvas for the data-driven visuals; three.js only where 3D is needed.
- `src/lib/bell.ts`: client-side Bell-test simulator with verified statistics.

## Commands

```sh
npm install
npm run dev        # dev server (use `astro dev --background` for agents; then `astro dev stop|status|logs`)
npm run build      # static build into dist/
npm run preview
```

Design mockups (static HTML) are in `design/mockups/`. Serve them with
`python -m http.server 8765` from that folder.

## Deployment

- Hosted on **Cloudflare Pages** (project `the-sound-of-entanglement`, in Benjamin's
  account), connected to this GitHub repo: **every push to `main` deploys to
  production** at https://the-sound-of-entanglement.pages.dev, and every other
  branch gets its own preview URL. So only push to `main` when the build passes
  (`npm run build`).
- `site` in `astro.config.mjs` (share previews, canonical links) is the `pages.dev`
  address until DNS for the domain is switched, then the `www` address.
- Cloudflare-specific files: `functions/media/[[path]].ts` serves the partial
  responses Safari needs for video and audio, limited to the paths in
  `public/_routes.json`. Redirects are in `public/_redirects`, cache rules in
  `public/_headers`. `src/pages/404.astro` must stay: without a 404 page, Pages
  serves the home page for every unknown address.
- Domain: soundofentanglement.com is owned by Clemens, with DNS and email at
  World4You. `www` is a CNAME to the Pages project. The bare domain stays on
  World4You, which redirects it to `www`. Don't change the nameservers.
- Preview phase: the site has `noindex` (in `src/layouts/Base.astro`) and a
  `public/robots.txt` blocking crawlers until photo rights are cleared. Remove
  both at launch.

## Repository layout

```
docs/                 knowledge base (start here); docs/content-guide.md = how to update content
docs/research/        raw research dossiers with source paths
design/               design directions (DIRECTIONS.md), round-1 static mockups
scripts/              import_assets.py + assets_manifest.json (photos from the drives)
src/content/          ALL site content: shows/, pieces/, people/ (Markdown), publications.yaml
src/content.config.ts content schemas
src/assets/photos/    imported photos (optimised by Astro at build)
src/data/             real measurement excerpts (JSON)
src/lib/              bell.ts (simulator), replay.ts (real data), format.ts
src/components/       shared components (Photo with credit, YouTube, AudioPlayer, BellScale, …)
public/media/         audio, video loops, point cloud of the setup
```

## Rules

- **Accuracy over flourish.** This is a physics project run by physicists.
  Never claim a loophole-free Bell test, faster-than-light signalling, or S
  values that weren't measured. See `docs/physics.md`.
- **Real vs simulated data must be labelled.** When a visual replays measured
  events, say where and when they were measured. When it simulates, say so.
- **Credits are mandatory** for every photo, video and audio file. See `docs/assets.md`.
- **Never copy private material** (invoices, budgets, CVs, call sheets, emails)
  from the source drives.
- Copy assets into the repo selectively via `scripts/import_assets.py`: resized, with descriptive names.
- In page code, read an imported image's properties only through `meta()` from `src/lib/image.ts`
  (reading `img.src` or `img.width` directly makes Astro ship the full-size original), and
  size photos with `ladder()` / `QUALITY` so every component reuses the same files.
  Cloudflare Pages allows 20,000 files per deployment and 25 MiB per file, so build size adds up.
- To add a show, piece, person or publication, follow `docs/content-guide.md`.
- Copy is written in sentence case, plain and precise, in the team's voice. No hype.
- Accessibility: keyboard navigation, visible focus, `prefers-reduced-motion`
  (static frames instead of animation), readable contrast, and pages that work
  without WebGL.

## Git

- Commit messages: imperative mood, concise.
- **Never add "Co-Authored-By" lines or mention AI agents or assistants in commit
  messages** (this is Benjamin's convention across his repos).
