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

import { pick, type Lang } from '../../../i18n';

type Text = { en: string; de: string };
export interface StoryPhoto {
  src: ImageMetadata;
  alt: Text;
  credit: string;
  caption?: Text;
}

/** The props Photo.astro expects, in one language. */
export const inLang = (lang: Lang, x: StoryPhoto) => ({
  src: x.src,
  credit: x.credit,
  alt: pick(lang, x.alt),
  caption: x.caption && pick(lang, x.caption),
});

const V = 'Florian Voggeneder / Ars Electronica';
const M = 'Tom Mesic / Ars Electronica';
const K = '© Land OÖ / Andreas Krenn';

export const photos = {
  exterior: {
    src: exterior, credit: M,
    alt: { en: 'The Mariendom at night, its façade lit violet, a crowd gathered outside.', de: 'Der Mariendom bei Nacht, die Fassade violett angestrahlt, davor eine Menschenmenge.' },
    caption: { en: 'The Mariendom on the evening of 4 September 2024, Anton Bruckner’s 200th birthday.', de: 'Der Mariendom am Abend des 4. September 2024, dem 200. Geburtstag Anton Bruckners.' },
  },
  overheadCrowd: {
    src: overheadCrowd2, credit: M,
    alt: { en: 'Seen from high in the vault: thousands of people sitting on the cathedral floor around the lit experiment and the stage.', de: 'Blick von hoch oben aus dem Gewölbe: Tausende Menschen sitzen auf dem Boden des Doms rund um das beleuchtete Experiment und die Bühne.' },
    caption: { en: 'From the vault: the crossing, the experiment in its lit case, and the audience on the floor in every direction.', de: 'Aus dem Gewölbe gesehen: die Vierung, das Experiment in seiner leuchtenden Vitrine und ringsum, so weit das Auge reicht, das Publikum auf dem Boden.' },
  },
  overheadNave: { src: overheadNave, credit: M, alt: { en: 'The packed nave seen steeply from above between the gothic columns.', de: 'Das voll besetzte Langhaus, steil von oben zwischen den gotischen Pfeilern.' } },
  wideNave: { src: wideNave, credit: V, alt: { en: 'The full length of the nave, crowded, the organ at the far end.', de: 'Das dicht gefüllte Langhaus in seiner ganzen Länge, ganz hinten die Orgel.' } },
  candles: { src: candles, credit: V, alt: { en: 'Visitors lighting candles at a candle stand before the performance.', de: 'Vor der Aufführung zünden Besucherinnen und Besucher Kerzen an.' } },
  lecture: {
    src: lecture, credit: V,
    alt: { en: 'Three speakers stand at the front; behind them over three thousand people sit on the floor of the nave, the organ at the far end.', de: 'Drei Vortragende stehen vorne; hinter ihnen sitzen über dreitausend Menschen auf dem Boden des Langhauses, ganz hinten die Orgel.' },
    caption: { en: 'The lecture, in front of more than 3 000 people sitting on the cathedral floor. The organ gallery is at the far end.', de: 'Der Vortrag vor mehr als 3 000 Menschen, die auf dem Boden des Doms Platz genommen haben. Ganz hinten die Orgelempore.' },
  },
  rudigierConsole: {
    src: rudigierConsole, credit: M,
    alt: { en: 'Gerhard Raab at the console of the Rudigier organ, a screen with the score above the manuals.', de: 'Gerhard Raab am Spieltisch der Rudigierorgel, über den Manualen ein Bildschirm mit den Noten.' },
    caption: { en: 'Alice: Gerhard Raab at the Rudigier organ, the main organ at the back of the nave.', de: 'Alice: Gerhard Raab an der Rudigierorgel, der großen Orgel am hinteren Ende des Langhauses.' },
  },
  registers: {
    src: registers, credit: M,
    alt: { en: 'Seen from behind, the organist at the Rudigier organ between banks of stops, a laptop and score beside him.', de: 'Der Organist an der Rudigierorgel von hinten, zwischen den Registerzügen, daneben Laptop und Noten.' },
    caption: { en: 'The next bar arrives on the screen above the manuals.', de: 'Der nächste Takt erscheint auf dem Bildschirm über den Manualen.' },
  },
  kreuzhuber: {
    src: kreuzhuber, credit: V,
    alt: { en: 'Wolfgang Kreuzhuber with headphones at the choir organ, lit from the side.', de: 'Wolfgang Kreuzhuber mit Kopfhörern an der Chororgel, seitlich angestrahlt.' },
    caption: { en: 'Bob: Wolfgang Kreuzhuber, cathedral organist, at the choir organ at the front.', de: 'Bob: Domorganist Wolfgang Kreuzhuber an der Chororgel vorne im Dom.' },
  },
  kreuzhuberLit: { src: kreuzhuberLit, credit: V, alt: { en: 'Wolfgang Kreuzhuber looks towards the camera from the lit organ console.', de: 'Wolfgang Kreuzhuber blickt vom beleuchteten Spieltisch in die Kamera.' } },
  motifs: {
    src: motifs, credit: '© Clemens Wenger',
    alt: { en: 'One set of eight motifs, four for Alice’s organ and four for Bob’s, labelled A1+ to B2−.', de: 'Ein Satz aus acht Motiven, vier für Alices Orgel und vier für Bobs, beschriftet von A1+ bis B2−.' },
    caption: { en: 'One of the motif sets. A1+ is the motif Alice plays when she measured setting 1 and got +1.', de: 'Einer der Motivsätze. A1+ spielt Alice, wenn bei ihr Messeinstellung 1 das Ergebnis +1 geliefert hat.' },
  },
  caseCross: {
    src: caseCross, credit: V,
    alt: { en: 'The experiment glows in its glass case in the haze, the altar cross rising behind it, the audience all around.', de: 'Das Experiment leuchtet in seiner Glasvitrine im Nebel, dahinter ragt das Altarkreuz auf, ringsum das Publikum.' },
    caption: { en: 'The experiment at the crossing, under the altar cross.', de: 'Das Experiment in der Vierung, unter dem Altarkreuz.' },
  },
  opticsMacro: { src: opticsMacro, credit: V, alt: { en: 'Close-up inside the lit glass case: mirrors, red rotation mounts and cables.', de: 'Nahaufnahme in der beleuchteten Vitrine: Spiegel, rote Drehhalterungen und Kabel.' } },
  caseForeground: { src: caseForeground, credit: V, alt: { en: 'The glass case in the foreground, the operator at his laptop behind it.', de: 'Die Glasvitrine im Vordergrund, dahinter der Experimentator an seinem Laptop.' } },
  invertedCone: { src: invertedCone, credit: K, alt: { en: 'An inverted cone of light descends through the haze onto the experiment.', de: 'Ein umgekehrter Lichtkegel senkt sich durch den Nebel auf das Experiment.' } },
  twinCones: { src: twinCones, credit: K, alt: { en: 'Two cones of light fan out from the crossing towards the altar.', de: 'Zwei Lichtkegel öffnen sich von der Vierung zum Altar hin.' } },
  purpleCone: { src: purpleCone, credit: K, alt: { en: 'A violet cone of light in the haze, the crucifix just visible behind it.', de: 'Ein violetter Lichtkegel im Nebel, dahinter schemenhaft das Kruzifix.' } },
  starburst: {
    src: starburst, credit: M,
    alt: { en: 'Seen from the gallery, rays of light burst over the packed nave.', de: 'Von der Empore aus gesehen: Lichtstrahlen brechen über das volle Langhaus herein.' },
    caption: { en: 'From the gallery: rays of light over the nave.', de: 'Von der Empore: Lichtstrahlen über dem Langhaus.' },
  },
  visitors: {
    src: visitors, credit: V,
    alt: { en: 'Two visitors lean over the lit glass case to look at the optics inside.', de: 'Zwei Besucher beugen sich über die beleuchtete Glasvitrine und betrachten die Optik darin.' },
    caption: { en: 'Afterwards, the audience came to the case to see what had conducted the music.', de: 'Danach kam das Publikum zur Vitrine, um zu sehen, was da eigentlich dirigiert hatte.' },
  },
  caseAndCrowd: { src: caseAndCrowd, credit: V, alt: { en: 'The lit case in the crowded nave after the performance, people gathering around it.', de: 'Nach der Aufführung: Menschen drängen sich im vollen Langhaus um die leuchtende Vitrine.' } },
} satisfies Record<string, StoryPhoto>;

/**
 * The seven parts, with the titles from the title cards shown during the
 * premiere (2024 premiere deck, slides 24–30) and what happened in each
 * (premiere lecture script; docs/pieces.md). The titles stay in English, as
 * on the title cards; the German quote in part 5 is from the German lecture
 * of 6 September 2024.
 */
export const sections: { n: number; title: string; text?: Text }[] = [
  { n: 1, title: 'Adagio Misterioso', text: { en: 'Conducted by entangled photons, like the two parts that follow.', de: 'Verschränkte Photonen dirigieren, so wie in den beiden folgenden Teilen.' } },
  { n: 2, title: 'Andante Correlations' },
  { n: 3, title: 'Complementary Melodies' },
  { n: 4, title: 'Distinction – Quantum meets Classical', text: { en: 'The experiment switches between entangled photons and a classical setting. The correlations weaken and the Bell value falls below 2.', de: 'Das Experiment wechselt zwischen verschränkten Photonen und einer klassischen Einstellung hin und her. Die Korrelationen werden schwächer, der Bell-Wert fällt unter 2.' } },
  { n: 5, title: 'Free Improvisation – Subjective Chance', text: { en: 'The organists improvise freely, without instructions: “a bow to human free will and to Anton Bruckner, who was known as one of the greatest improvisers on the organ.”', de: 'Die Organisten folgen ihrem freien Willen und improvisieren ohne Vorgaben des Experiments – „eine Verneigung vor Anton Bruckner, der als einer der größten Improvisatoren an der Orgel galt“.' } },
  { n: 6, title: 'Back To Entanglement', text: { en: 'The photons take over again.', de: 'Die Photonen übernehmen wieder.' } },
  { n: 7, title: 'Finale Vivace / Reflection', text: { en: 'Ending with the Perger Präludium in an extended version by Franz Neuhofer.', de: 'Zum Schluss erklingt das Perger Präludium in einer erweiterten Fassung von Franz Neuhofer.' } },
];
