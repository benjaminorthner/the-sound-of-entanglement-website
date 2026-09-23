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

export interface StoryPhoto { src: ImageMetadata; alt: string; credit: string; caption?: string }

const E = '© eSeL.at – Lorenz Seidler';
const J = 'Johannes Kofler';

export const photos = {
  slideSBpm: { src: slideSBpm, credit: E, alt: 'A slide on the cinema screen: the formula for the Bell value S, an arrow, and beneath it "BPM (beats per minute)"; the band’s instruments on the dark stage below.', caption: 'The whole idea on one slide: the Bell value becomes beats per minute.' },
  clemensTempo: { src: clemensTempo, credit: E, alt: 'Clemens Wenger with a microphone points at a tempo curve on the screen behind him.', caption: 'Clemens Wenger explains the tempo curve, and the noise at the start.' },
  pointcloudOverBand: { src: pointcloudOverBand, credit: E, alt: 'A projection made of white points above the band, the lit case in front.', caption: 'Point clouds on the screen above the band.' },
  pointcloudPortrait: { src: pointcloudPortrait, credit: E, alt: 'Clemens Wenger at the keyboard, a point-cloud projection behind and over him.' },
  caseBandPointcloud: { src: caseBandPointcloud, credit: E, alt: 'The lit experiment case in the foreground, the band and the point-cloud projection behind it.' },
  voqoderSlide: { src: voqoderSlide, credit: E, alt: 'Clemens Wenger at a laptop in front of a slide showing a keyboard split between Alice and Bob.', caption: 'The VoQoder, explained: one keyboard, split between Alice and Bob.' },
  keysPortrait: { src: keysPortrait, credit: E, alt: 'Clemens Wenger at the keyboard in a cap, lit grey by the projection.', caption: 'Clemens Wenger' },
  keysUnderPointcloud: { src: keysUnderPointcloud, credit: E, alt: 'Clemens Wenger at the keyboard under a projected cloud of white points.' },
  whiteCurve: { src: whiteCurve, credit: E, alt: 'A single white curve on the screen, the band small and dark below.' },
  wideStageCurve: { src: wideStageCurve, credit: E, alt: 'A bright vertical stroke of light on the screen, the band and the lit case on the dark stage.' },
  wideStageLines: { src: wideStageLines, credit: E, alt: 'Fine white lines fan out across the screen above the band.' },
  pixelSort: { src: pixelSort, credit: E, alt: 'A pixel-sorted image in grey and white on the screen behind the musicians.' },
  lightStroke: { src: lightStroke, credit: E, alt: 'Clemens Wenger at the keyboard beneath a diagonal stroke of white light.' },
  bassPortrait: { src: bassPortrait, credit: E, alt: 'Manu Mayr playing, lit from behind by the white screen.', caption: 'Manu Mayr' },
  caseLightStripe: { src: caseLightStripe, credit: E, alt: 'The lit case in the foreground, two performers in silhouette against a stripe of light.' },
  lectureStage: { src: lectureStage, credit: E, alt: 'The lecture on the cinema stage: a slide comparing classical and quantum physics, the speakers at the side.', caption: 'The lecture before the premiere, in the cinema of Belvedere 21.' },
  caseWoodPanels: { src: caseWoodPanels, credit: E, alt: 'The glowing experiment case in the cinema, lit wood panels on the walls behind.' },
  backlightBurst: { src: backlightBurst, credit: E, alt: 'A stage light bursts over the audience and the control desk with the experiment.' },
  caseTopDown: { src: caseTopDown, credit: E, alt: 'The experiment seen from above in its lit flight case.' },
  audienceAtCase: { src: audienceAtCase, credit: E, alt: 'Visitors crowd around the lit case after the performance.' },
  phonesAtCase: { src: phonesAtCase, credit: E, alt: 'A visitor photographs the experiment with a phone.' },
  afterShowCase: { src: afterShowCase, credit: E, alt: 'Someone leans over the open case, pointing at the optics.' },
  bows: { src: bows, credit: E, alt: 'The team stands together on the stage at the end.', caption: 'The end of the premiere.' },
  jkuAudience: { src: jkuAudience, credit: J, alt: 'Audience silhouettes in front of a large point-cloud projection above the stage.', caption: 'Zirkus des Wissens, JKU Linz, 19 November 2025.' },
  jkuRain: { src: jkuRain, credit: J, alt: 'A rain of points on the screen above the band.' },
  jkuSphere: { src: jkuSphere, credit: J, alt: 'A dotted sphere projected above the band.' },
  jkuSoundcheck: { src: jkuSoundcheck, credit: J, alt: 'The hall at soundcheck, the projection running across the wide screen.' },
  jkuAtExperiment: { src: jkuAtExperiment, credit: J, alt: 'After the show, the audience crowds around the experiment.' },
} satisfies Record<string, StoryPhoto>;

/** The three sections of the piece (CIVA programme, docs/pieces.md). */
export const parts = [
  { n: 1, mode: 'Entangled', s: 'S ≈ 2.5', bpm: '90 bpm' },
  { n: 2, mode: 'Classical', s: 'S ≈ 1.7', bpm: '70 bpm' },
  { n: 3, mode: 'Entangled again', s: 'S back above 2', bpm: '110 bpm' },
];
