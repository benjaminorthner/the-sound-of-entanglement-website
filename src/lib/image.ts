import type { ImageMetadata } from 'astro';

/**
 * An imported image's metadata (src, width, height) without shipping the
 * full-size original. Astro copies an original into the build as soon as any
 * property of the import is read in page code; `clone` is exempt. Read image
 * properties through this, never directly.
 */
export const meta = (img: ImageMetadata): ImageMetadata =>
  ((img as unknown as { clone?: ImageMetadata }).clone) ?? img;

/**
 * One ladder of widths and one quality for every photo on the site, so the
 * same photo in a gallery, a timeline and a page body reuses the same files
 * instead of adding another set to each deployment.
 */
export const LADDER = [480, 800, 1200, 1600, 2000];
export const QUALITY = 80;
export const ladder = (img: ImageMetadata, max = 2000) => {
  const w = meta(img).width;
  const out = LADDER.filter((x) => x <= Math.min(w, max));
  return out.length ? out : [Math.min(w, max)];
};
