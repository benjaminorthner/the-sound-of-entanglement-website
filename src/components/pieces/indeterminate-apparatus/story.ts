/**
 * Photos and captions for the Indeterminate Apparatus page, in running order:
 * the Bell metronome, the classical section, the VoQoder, the images of the
 * quantum parts, the premiere at CIVA (Belvedere 21, Vienna, 3 October 2025)
 * and Linz (JKU Zirkus des Wissens, 19 November 2025).
 * Many CIVA files are only 1024 px wide: IAStory.astro keeps those at half
 * width or less. Facts: docs/pieces.md, docs/shows.md.
 */
import type { ImageMetadata } from 'astro';
import slideSBpm from '../../../assets/photos/2025-civa/slide-s-to-bpm.jpg';
import clemensTempo from '../../../assets/photos/2025-civa/clemens-explaining-tempo.jpg';
import pointcloudOverBand from '../../../assets/photos/2025-civa/pointcloud-over-band.jpg';
import pointcloudPortrait from '../../../assets/photos/2025-civa/pointcloud-portrait.jpg';
import caseBandPointcloud from '../../../assets/photos/2025-civa/case-band-pointcloud.jpg';
import voqoderSlide from '../../../assets/photos/2025-civa/voqoder-slide.jpg';
import keysPortrait from '../../../assets/photos/2025-civa/keys-portrait.jpg';
import keysUnderPointcloud from '../../../assets/photos/2025-civa/keys-under-pointcloud.jpg';
import whiteCurve from '../../../assets/photos/2025-civa/white-curve.jpg';
import wideStageCurve from '../../../assets/photos/2025-civa/wide-stage-curve.jpg';
import wideStageLines from '../../../assets/photos/2025-civa/wide-stage-lines.jpg';
import pixelSort from '../../../assets/photos/2025-civa/pixel-sort.jpg';
import lightStroke from '../../../assets/photos/2025-civa/performer-light-stroke.jpg';
import bassPortrait from '../../../assets/photos/2025-civa/bass-portrait.jpg';
import caseLightStripe from '../../../assets/photos/2025-civa/case-light-stripe.jpg';
import lectureStage from '../../../assets/photos/2025-civa/lecture-stage.jpg';
import caseWoodPanels from '../../../assets/photos/2025-civa/case-wood-panels.jpg';
import backlightBurst from '../../../assets/photos/2025-civa/backlight-burst.jpg';
import caseTopDown from '../../../assets/photos/2025-civa/case-top-down.jpg';
import audienceAtCase from '../../../assets/photos/2025-civa/audience-at-case.jpg';
import phonesAtCase from '../../../assets/photos/2025-civa/phones-at-case.jpg';
import afterShowCase from '../../../assets/photos/2025-civa/after-show-case.jpg';
import bows from '../../../assets/photos/2025-civa/bows.jpg';
import jkuAudience from '../../../assets/photos/2025-jku/audience-pointcloud.jpg';
import jkuRain from '../../../assets/photos/2025-jku/rain-visual.jpg';
import jkuSphere from '../../../assets/photos/2025-jku/dotted-sphere.jpg';
import jkuSoundcheck from '../../../assets/photos/2025-jku/hall-soundcheck.jpg';
import jkuAtExperiment from '../../../assets/photos/2025-jku/audience-at-experiment.jpg';

import { pick, type Lang } from '../../../i18n';

type Text = { en: string; de: string };
export interface StoryPhoto { src: ImageMetadata; alt: Text; credit: string; caption?: Text }

/** The props Photo.astro expects, in one language. */
export const inLang = (lang: Lang, x: StoryPhoto) => ({
  src: x.src,
  credit: x.credit,
  alt: pick(lang, x.alt),
  caption: x.caption && pick(lang, x.caption),
});

const E = '© eSeL.at – Lorenz Seidler';
const J = 'Johannes Kofler';

export const photos = {
  slideSBpm: {
    src: slideSBpm, credit: E,
    alt: { en: 'A slide on the cinema screen: the formula for the Bell value S, an arrow, and beneath it "BPM (beats per minute)"; the band’s instruments on the dark stage below.', de: 'Eine Folie auf der Kinoleinwand: die Formel für den Bell-Wert S, ein Pfeil und darunter „BPM (beats per minute)“; unten auf der dunklen Bühne die Instrumente der Band.' },
    caption: { en: 'The whole idea on one slide: the Bell value becomes beats per minute.', de: 'Die ganze Idee auf einer Folie: Aus dem Bell-Wert werden Schläge pro Minute.' },
  },
  clemensTempo: {
    src: clemensTempo, credit: E,
    alt: { en: 'Clemens Wenger with a microphone points at a tempo curve on the screen behind him.', de: 'Clemens Wenger zeigt mit dem Mikrofon in der Hand auf eine Tempokurve auf der Leinwand hinter ihm.' },
    caption: { en: 'Clemens Wenger explains the tempo curve, and the noise at the start.', de: 'Clemens Wenger erklärt die Tempokurve und das Rauschen am Anfang.' },
  },
  pointcloudOverBand: {
    src: pointcloudOverBand, credit: E,
    alt: { en: 'A projection made of white points above the band, the lit case in front.', de: 'Eine Projektion aus weißen Punkten über der Band, davor die beleuchtete Vitrine.' },
    caption: { en: 'Point clouds on the screen above the band.', de: 'Punktwolken auf der Leinwand über der Band.' },
  },
  pointcloudPortrait: { src: pointcloudPortrait, credit: E, alt: { en: 'Clemens Wenger at the keyboard, a point-cloud projection behind and over him.', de: 'Clemens Wenger am Keyboard, hinter und über ihm eine projizierte Punktwolke.' } },
  caseBandPointcloud: { src: caseBandPointcloud, credit: E, alt: { en: 'The lit experiment case in the foreground, the band and the point-cloud projection behind it.', de: 'Vorne die beleuchtete Vitrine mit dem Experiment, dahinter die Band und die projizierte Punktwolke.' } },
  voqoderSlide: {
    src: voqoderSlide, credit: E,
    alt: { en: 'Clemens Wenger at a laptop in front of a slide showing a keyboard split between Alice and Bob.', de: 'Clemens Wenger am Laptop vor einer Folie mit einer Klaviatur, die zwischen Alice und Bob aufgeteilt ist.' },
    caption: { en: 'The VoQoder, explained: one keyboard, split between Alice and Bob.', de: 'Der VoQoder, erklärt: eine Klaviatur, aufgeteilt zwischen Alice und Bob.' },
  },
  keysPortrait: {
    src: keysPortrait, credit: E,
    alt: { en: 'Clemens Wenger at the keyboard in a cap, lit grey by the projection.', de: 'Clemens Wenger mit Kappe am Keyboard, von der Projektion grau beleuchtet.' },
    caption: { en: 'Clemens Wenger', de: 'Clemens Wenger' },
  },
  keysUnderPointcloud: { src: keysUnderPointcloud, credit: E, alt: { en: 'Clemens Wenger at the keyboard under a projected cloud of white points.', de: 'Clemens Wenger am Keyboard unter einer projizierten Wolke aus weißen Punkten.' } },
  whiteCurve: { src: whiteCurve, credit: E, alt: { en: 'A single white curve on the screen, the band small and dark below.', de: 'Eine einzelne weiße Kurve auf der Leinwand, darunter klein und dunkel die Band.' } },
  wideStageCurve: { src: wideStageCurve, credit: E, alt: { en: 'A bright vertical stroke of light on the screen, the band and the lit case on the dark stage.', de: 'Ein heller senkrechter Lichtstrich auf der Leinwand, auf der dunklen Bühne die Band und die beleuchtete Vitrine.' } },
  wideStageLines: { src: wideStageLines, credit: E, alt: { en: 'Fine white lines fan out across the screen above the band.', de: 'Feine weiße Linien fächern sich über der Band auf der Leinwand auf.' } },
  pixelSort: { src: pixelSort, credit: E, alt: { en: 'A pixel-sorted image in grey and white on the screen behind the musicians.', de: 'Ein Bild aus sortierten Pixeln in Grau und Weiß auf der Leinwand hinter den Musiker:innen.' } },
  lightStroke: { src: lightStroke, credit: E, alt: { en: 'Clemens Wenger at the keyboard beneath a diagonal stroke of white light.', de: 'Clemens Wenger am Keyboard unter einem schrägen Strich aus weißem Licht.' } },
  bassPortrait: {
    src: bassPortrait, credit: E,
    alt: { en: 'Manu Mayr playing, lit from behind by the white screen.', de: 'Manu Mayr beim Spielen, von hinten von der weißen Leinwand angestrahlt.' },
    caption: { en: 'Manu Mayr', de: 'Manu Mayr' },
  },
  caseLightStripe: { src: caseLightStripe, credit: E, alt: { en: 'The lit case in the foreground, two performers in silhouette against a stripe of light.', de: 'Vorne die beleuchtete Vitrine, dahinter zwei Musiker als Silhouetten vor einem Lichtstreifen.' } },
  lectureStage: {
    src: lectureStage, credit: E,
    alt: { en: 'The lecture on the cinema stage: a slide comparing classical and quantum physics, the speakers at the side.', de: 'Der Vortrag auf der Kinobühne: eine Folie, die klassische Physik und Quantenphysik gegenüberstellt, seitlich die Vortragenden.' },
    caption: { en: 'The lecture before the premiere, in the cinema of Belvedere 21.', de: 'Der Vortrag vor der Uraufführung, im Kino des Belvedere 21.' },
  },
  caseWoodPanels: { src: caseWoodPanels, credit: E, alt: { en: 'The glowing experiment case in the cinema, lit wood panels on the walls behind.', de: 'Die leuchtende Vitrine mit dem Experiment im Kinosaal, dahinter die beleuchtete Holzvertäfelung.' } },
  backlightBurst: { src: backlightBurst, credit: E, alt: { en: 'A stage light bursts over the audience and the control desk with the experiment.', de: 'Ein Scheinwerfer strahlt über das Publikum und das Pult mit dem Experiment.' } },
  caseTopDown: { src: caseTopDown, credit: E, alt: { en: 'The experiment seen from above in its lit flight case.', de: 'Das Experiment von oben, in seinem beleuchteten Flightcase.' } },
  audienceAtCase: { src: audienceAtCase, credit: E, alt: { en: 'Visitors crowd around the lit case after the performance.', de: 'Nach der Aufführung drängt sich das Publikum um die beleuchtete Vitrine.' } },
  phonesAtCase: { src: phonesAtCase, credit: E, alt: { en: 'A visitor photographs the experiment with a phone.', de: 'Eine Besucherin fotografiert das Experiment mit dem Handy.' } },
  afterShowCase: { src: afterShowCase, credit: E, alt: { en: 'Someone leans over the open case, pointing at the optics.', de: 'Jemand beugt sich über die offene Vitrine und zeigt auf die Optik.' } },
  bows: {
    src: bows, credit: E,
    alt: { en: 'The team stands together on the stage at the end.', de: 'Am Ende steht das Team gemeinsam auf der Bühne.' },
    caption: { en: 'The end of the premiere.', de: 'Das Ende der Uraufführung.' },
  },
  jkuAudience: {
    src: jkuAudience, credit: J,
    alt: { en: 'Audience silhouettes in front of a large point-cloud projection above the stage.', de: 'Silhouetten des Publikums vor einer großen Punktwolken-Projektion über der Bühne.' },
    caption: { en: 'Zirkus des Wissens, JKU Linz, 19 November 2025.', de: 'Zirkus des Wissens, JKU Linz, 19. November 2025.' },
  },
  jkuRain: { src: jkuRain, credit: J, alt: { en: 'A rain of points on the screen above the band.', de: 'Ein Regen aus Punkten auf der Leinwand über der Band.' } },
  jkuSphere: { src: jkuSphere, credit: J, alt: { en: 'A dotted sphere projected above the band.', de: 'Eine gepunktete Kugel, über die Band projiziert.' } },
  jkuSoundcheck: { src: jkuSoundcheck, credit: J, alt: { en: 'The hall at soundcheck, the projection running across the wide screen.', de: 'Der Saal beim Soundcheck, die Projektion läuft über die breite Leinwand.' } },
  jkuAtExperiment: { src: jkuAtExperiment, credit: J, alt: { en: 'After the show, the audience crowds around the experiment.', de: 'Nach der Vorstellung drängt sich das Publikum um das Experiment.' } },
} satisfies Record<string, StoryPhoto>;

/** The three sections of the piece (CIVA programme, docs/pieces.md). */
export const parts: { n: number; mode: Text; s: Text; bpm: string }[] = [
  { n: 1, mode: { en: 'Entangled', de: 'Verschränkt' }, s: { en: 'S ≈ 2.5', de: 'S ≈ 2,5' }, bpm: '90 bpm' },
  { n: 2, mode: { en: 'Classical', de: 'Klassisch' }, s: { en: 'S ≈ 1.7', de: 'S ≈ 1,7' }, bpm: '70 bpm' },
  { n: 3, mode: { en: 'Entangled again', de: 'Wieder verschränkt' }, s: { en: 'S back above 2', de: 'S wieder über 2' }, bpm: '110 bpm' },
];
