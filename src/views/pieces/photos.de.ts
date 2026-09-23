import { meta } from '../../lib/image';
/**
 * German alt texts for the cover and extra images of the piece entries
 * (src/content/pieces/*.md), keyed by image file name like
 * src/i18n/photos.de.ts. Photo.astro still prefers the shared table when an
 * image is listed there.
 */
import type { ImageMetadata } from 'astro';
import type { Lang } from '../../i18n';
import { photoKey } from '../../i18n/photos.de';

const altDe: Record<string, string> = {
  'haze-over-case': 'Wolken aus projiziertem Licht hängen im dunklen Langhaus über der leuchtenden Glasvitrine des Experiments.',
  'landscape-above-stage': 'Eine Landschaft aus weißen Linien füllt die Leinwand über der Band und dem beleuchteten Experiment auf der Bühne.',
  'lines-on-ceiling': 'Weiße Linien, an die Decke projiziert, über dem Trio und dem Experiment in violettem Bühnenlicht.',
  '8rooms-r1-r8': 'Acht Landschaften aus weißen Linien, eine für jeden Raum, beschriftet mit R1 bis R8.',
  'quantum-random-walk': 'Pfeile von der Mitte eines Gitters zeigen, wie oft jede Schrittrichtung vorkommt; die Diagonalen überwiegen.',
  'keys-under-pointcloud': 'Clemens Wenger mit Kappe am Keyboard, hinter ihm eine projizierte Wolke aus weißen Punkten.',
  'case-in-hall': 'Die beleuchtete Vitrine mit dem Experiment vorne im Kinosaal, dahinter das Publikum in den Sitzreihen.',
};

/** A piece image with its alt text in the page's language. */
export function pieceImage<T extends { src: ImageMetadata; alt: string }>(lang: Lang, img: T): T {
  if (lang !== 'de') return img;
  return { ...img, alt: altDe[photoKey(meta(img.src).src)] ?? img.alt };
}
