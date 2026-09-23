// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Absolute URLs for share previews (og:image). Change when soundofentanglement.com points here.
  site: 'https://the-sound-of-entanglement.vercel.app',
  vite: {
    // Pre-bundle three.js up front so the dev server never serves a stale
    // optimised copy (which breaks the landing hero).
    optimizeDeps: { include: ['three'] },
  },
});
