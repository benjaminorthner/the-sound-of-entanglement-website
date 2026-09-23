/**
 * The BruQner page is a photographic account of the premiere night
 * (Mariendom Linz, 4 September 2024). This module holds the photos and
 * captions, in running order; BruqnerStory.astro lays them out.
 * Facts: docs/pieces.md, docs/shows.md. Credits: from the EXIF of the
 * Ars Electronica files (Voggeneder / Mesic), Land OÖ (Krenn), weitblickfilm.
 */
import type { ImageMetadata } from 'astro';
import exterior from '../../../assets/photos/2024-bruqner-linz/mariendom-exterior.jpg';
import overheadCrowd2 from '../../../assets/photos/2024-bruqner-linz/overhead-crowd-2.jpg';
import overheadNave from '../../../assets/photos/2024-bruqner-linz/overhead-nave.jpg';
import wideNave from '../../../assets/photos/2024-bruqner-linz/wide-nave.jpg';
import candles from '../../../assets/photos/2024-bruqner-linz/candles.jpg';
import lecture from '../../../assets/photos/2024-bruqner-linz/lecture-before-3000.jpg';
import rudigierConsole from '../../../assets/photos/2024-bruqner-linz/organ-rudigier-console.jpg';
import registers from '../../../assets/photos/2024-bruqner-linz/organist-registers.jpg';
import kreuzhuber from '../../../assets/photos/2024-bruqner-linz/organist-kreuzhuber.jpg';
import kreuzhuberLit from '../../../assets/photos/2024-bruqner-linz/organist-portrait-lit.jpg';
import motifs from '../../../assets/photos/figures/bruqner-motifs.jpg';
import caseCross from '../../../assets/photos/2024-bruqner-linz/case-cross-haze.jpg';
import opticsMacro from '../../../assets/photos/2024-bruqner-linz/optics-macro-2.jpg';
import caseForeground from '../../../assets/photos/2024-bruqner-linz/case-foreground.jpg';
import invertedCone from '../../../assets/photos/2024-bruqner-linz/inverted-cone.jpg';
import twinCones from '../../../assets/photos/2024-bruqner-linz/twin-cones.jpg';
import purpleCone from '../../../assets/photos/2024-bruqner-linz/purple-cone.jpg';
import starburst from '../../../assets/photos/2024-bruqner-linz/starburst-from-gallery.jpg';
import visitors from '../../../assets/photos/2024-bruqner-linz/visitors-at-case.jpg';
import caseAndCrowd from '../../../assets/photos/2024-bruqner-linz/case-and-crowd.jpg';

export interface StoryPhoto {
  src: ImageMetadata;
  alt: string;
  credit: string;
  caption?: string;
}

const V = 'Florian Voggeneder / Ars Electronica';
const M = 'Tom Mesic / Ars Electronica';
const K = '© Land OÖ / Andreas Krenn';

export const photos = {
  exterior: { src: exterior, credit: M, alt: 'The Mariendom at night, its façade lit violet, a crowd gathered outside.', caption: 'The Mariendom on the evening of 4 September 2024, Anton Bruckner’s 200th birthday.' },
  overheadCrowd: { src: overheadCrowd2, credit: M, alt: 'Seen from high in the vault: thousands of people sitting on the cathedral floor around the lit experiment and the stage.', caption: 'From the vault: the crossing, the experiment in its lit case, and the audience on the floor in every direction.' },
  overheadNave: { src: overheadNave, credit: M, alt: 'The packed nave seen steeply from above between the gothic columns.' },
  wideNave: { src: wideNave, credit: V, alt: 'The full length of the nave, crowded, the organ at the far end.' },
  candles: { src: candles, credit: V, alt: 'Visitors lighting candles at a candle stand before the performance.' },
  lecture: { src: lecture, credit: V, alt: 'Three speakers stand at the front; behind them over three thousand people sit on the floor of the nave, the organ at the far end.', caption: 'The lecture, in front of more than 3 000 people sitting on the cathedral floor. The organ gallery is at the far end.' },
  rudigierConsole: { src: rudigierConsole, credit: M, alt: 'Gerhard Raab at the console of the Rudigier organ, a screen with the score above the manuals.', caption: 'Alice: Gerhard Raab at the Rudigier organ, the main organ at the back of the nave.' },
  registers: { src: registers, credit: M, alt: 'Seen from behind, the organist at the Rudigier organ between banks of stops, a laptop and score beside him.', caption: 'The next bar arrives on the screen above the manuals.' },
  kreuzhuber: { src: kreuzhuber, credit: V, alt: 'Wolfgang Kreuzhuber with headphones at the choir organ, lit from the side.', caption: 'Bob: Wolfgang Kreuzhuber, cathedral organist, at the choir organ at the front.' },
  kreuzhuberLit: { src: kreuzhuberLit, credit: V, alt: 'Wolfgang Kreuzhuber looks towards the camera from the lit organ console.' },
  motifs: { src: motifs, credit: '© Clemens Wenger', alt: 'One set of eight motifs, four for Alice’s organ and four for Bob’s, labelled A1+ to B2−.', caption: 'One of the motif sets. A1+ is the motif Alice plays when she measured setting 1 and got +1.' },
  caseCross: { src: caseCross, credit: V, alt: 'The experiment glows in its glass case in the haze, the altar cross rising behind it, the audience all around.', caption: 'The experiment at the crossing, under the altar cross.' },
  opticsMacro: { src: opticsMacro, credit: V, alt: 'Close-up inside the lit glass case: mirrors, red rotation mounts and cables.' },
  caseForeground: { src: caseForeground, credit: V, alt: 'The glass case in the foreground, the operator at his laptop behind it.' },
  invertedCone: { src: invertedCone, credit: K, alt: 'An inverted cone of light descends through the haze onto the experiment.' },
  twinCones: { src: twinCones, credit: K, alt: 'Two cones of light fan out from the crossing towards the altar.' },
  purpleCone: { src: purpleCone, credit: K, alt: 'A violet cone of light in the haze, the crucifix just visible behind it.' },
  starburst: { src: starburst, credit: M, alt: 'Seen from the gallery, rays of light burst over the packed nave.', caption: 'From the gallery: rays of light over the nave.' },
  visitors: { src: visitors, credit: V, alt: 'Two visitors lean over the lit glass case to look at the optics inside.', caption: 'Afterwards, the audience came to the case to see what had conducted the music.' },
  caseAndCrowd: { src: caseAndCrowd, credit: V, alt: 'The lit case in the crowded nave after the performance, people gathering around it.' },
} satisfies Record<string, StoryPhoto>;

/**
 * The seven parts, with the titles from the title cards shown during the
 * premiere (2024 premiere deck, slides 24–30) and what happened in each
 * (premiere lecture script; docs/pieces.md).
 */
export const sections: { n: number; title: string; text?: string }[] = [
  { n: 1, title: 'Adagio Misterioso', text: 'Conducted by entangled photons, like the two parts that follow.' },
  { n: 2, title: 'Andante Correlations' },
  { n: 3, title: 'Complementary Melodies' },
  { n: 4, title: 'Distinction – Quantum meets Classical', text: 'The experiment switches between entangled photons and a classical setting. The correlations weaken and the Bell value falls below 2.' },
  { n: 5, title: 'Free Improvisation – Subjective Chance', text: 'The organists improvise freely, without instructions: “a bow to human free will and to Anton Bruckner, who was known as one of the greatest improvisers on the organ.”' },
  { n: 6, title: 'Back To Entanglement', text: 'The photons take over again.' },
  { n: 7, title: 'Finale Vivace / Reflection', text: 'Ending with the Perger Präludium in an extended version by Franz Neuhofer.' },
];
