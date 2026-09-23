/**
 * German alt texts and captions for photos, keyed by the image file's base
 * name (without extension), e.g. 'haze-over-case'. Photo.astro looks them up
 * on /de/ pages; anything missing falls back to the English text.
 * Credits are names and stay as they are.
 */
export const photosDe: Record<string, { alt?: string; caption?: string }> = {};

/** 'haze-over-case' from '/_astro/haze-over-case.CcEH.jpg' or '/@fs/.../haze-over-case.jpg?origWidth=…' */
export function photoKey(src: string): string {
  const last = src.split('?')[0].split('/').pop() ?? '';
  return last.split('.')[0];
}
