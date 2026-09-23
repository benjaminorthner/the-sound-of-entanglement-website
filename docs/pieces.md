# The pieces

Clemens Wenger: "So far, I've composed three pieces for our setup." Each one
maps the Bell-test outcomes to music differently, and each has its own
visual system.

Every measurement delivers `[aliceSetting ∈ {1,2}, bobSetting ∈ {1,2},
aliceOutcome ∈ {+1,−1}, bobOutcome ∈ {+1,−1}]`. Per side that is 4 states:
A1+, A1−, A2+, A2− and B1+, B1−, B2+, B2−.

---

## BruQner (2024)

*For two cathedral organs, entangled photons and live visuals.* After Anton
Bruckner's *Präludium in C* ("Perger Präludium"), WAB 129 (1884).

- **Composer:** Clemens Wenger (with Anton Bruckner). AKM, ISWC 3307761800
  (as cited in the paper; unverified).
- **Premiere:** 4 Sept 2024, 22:00 (in English), Mariendom Linz, opening event
  of Ars Electronica 2024 and part of antonbruckner2024 (OÖ KulturEXPO), on
  Bruckner's 200th birthday. Second performance 6 Sept 2024, 16:00 (in German,
  family-friendly). Free entry. 3 000+ people.
- **Performers:** Gerhard Raab (**Alice**, Rudigier organ, main organ at the
  back), Wolfgang Kreuzhuber (**Bob**, choir organ, at the front), about 30 m
  apart. The Mariendom has two organs tuned to each other that can be played
  together, which is one reason the piece could only happen there.
- **Mapping:** for each measurement the quantum conductor chooses one of four
  precomposed motifs for each organ (A1+, A1−, A2+, A2− / B1+ …). The motifs
  are derived from the *Perger Präludium*: "some bars are completely identical
  with the original work, but there are many variations, inversions,
  transpositions and rhythmic intensification of Bruckner's harmonies". There
  are 28 motif sets with different bar lengths, and over 200–250 precomposed
  bars in total. The mapping was designed so that non-classical correlations
  mostly produce **polyrhythmic** motif combinations. A1+ is the same figure as
  B1−, and so on, so agreement and disagreement become audible as unison versus
  alternation.
- **Delivery:** notes generated live, shown on tablets at the organ consoles
  with a one-bar look-ahead, over LAN (1–2 ms). WiFi was too jittery.
- **Form** (premiere lecture script): 7 short sections. Sections 1–3 are
  conducted by entangled photons. Section 4 switches between entangled photons
  and a classical setup. In section 5 the organists improvise freely, "a bow to
  human free will and to Anton Bruckner, who was known as one of the greatest
  improvisers on the organ". Sections 6–7 return to the quantum world and end
  with the *Perger Präludium* in an extended version by Franz Neuhofer. The
  original *Perger Präludium* was played at the start, in the dark.
- **Duration:** about 18 minutes of performance after a roughly 25-minute lecture.
- **Measured:** S ≈ 2.45. The classical middle section had S < 2.
- **Visuals** (concept Enar de Dios Rodríguez, code Benjamin Orthner):
  Python/OpenGL GLSL shader. Rings, pinwheels, dotted rings and lines were
  projected by three laser projectors *toward* the audience into haze, so rings
  on screen became **cones of light in the air**: "the audience is sitting in
  the visual projection". **Circles = entanglement, lines = classical.** 8
  visual sections (see `visual-language.md`). "The cones of light did not
  simply illustrate entanglement; they embodied it — interacting, overlapping,
  and surrounding the audience like living sculptures." (paper)
- **Media:** documentary (YouTube `_mIf_OFN1YI`), trailer (`i-wF82vEts0`),
  promo (`m5-0rCh3GbY`). A good-quality concert recording is not on the drives.
  Only phone recordings plus `BruQner_Composition_v6_teil1bis4b.mp3` exist.

## 8 Rooms (2025)

*For synthesizer/electric piano, electric bass, drums, entangled photons and
live visuals.* Composers: Clemens Wenger, Manu Mayr, Judith Schwarz (AKM 2025).

- **Premiere:** 25 Jan 2025, Vienna Ball of Sciences, Vienna City Hall. Then
  Washington DC (14 Apr 2025), Millstatt (3 Jun 2025), Alpbach (26 Aug 2025).
  A simulated excerpt was shown at ISQCMC Palermo (Oct 2025).
- **Three layers:**
  1. **The clicks.** The half-wave-plate motors click every time a measurement
     setting is chosen. Contact microphones pick up one click for Alice (left)
     and one for Bob (right). Measurements were timed about every 513–528 ms,
     so the clicks become a **metronome** (about 114–117 BPM) and a
     percussion element. Each of the 4 outcomes per side triggers its own
     **echo/delay response** on the click. "Sometimes sounding like distorted
     electric guitars, sometimes sounding like a knock on wood."
  2. **A quantum random walk through 8 rooms.** Each room is a square with its
     own musical theme and tonal centre. A walker starts in the middle.
     Setting 1 moves it along x and setting 2 along y; the outcome ±1 gives the
     direction: `x += A·δ(a,a₁) + B·δ(b,b₁)`, `y += A·δ(a,a₂) + B·δ(b,b₂)`.
     When it hits a wall, that wall is a door into the next room. After a set
     time (about 19 min) all doors lead to **room 9**, where the piece ends.
     Entanglement skews the walk: at S = 2√2 diagonal steps dominate. "Not
     your classical random walk, but a very strangely behaving quantum random
     walk that shows a strong will to reintroduce some order into chaos."
  3. The musicians improvise over room-specific material "in a musical
     dialogue with the quantum-controlled clicking sounds".
- **Visuals:** TouchDesigner (Benjamin, concept with Enar). Fine white lines
  on black: the spectra of the two clicks accumulate into a histogram that grows
  into an undulating 3D landscape, "each emerging peak representing a single
  'mountain'". Each room has its own camera angle and line treatment (R1–R8).
  At Alpbach the live Bell value was shown at the sides, with an orange line at
  the classical bound.
- **Ball mode:** switch between quantum and classical by changing wave-plate
  angles, with no lecture.
- **Media:** "8 Rooms – Live at Vienna Science Ball 2025" (YouTube
  `Smz7cGPBODw`, 11:43). Click audio examples: `8 ROOMS - clicking motives
  example A2-.wav`, `…B2+.wav`, `…correlation.wav`. The band's Ball excerpts
  (about 4.5 min each) are on Benjamin's drive.

## Indeterminate Apparatus (2025)

*For synthesizers/VoQoder, electric bass, drums, entangled photons and live
visuals.* The working title was "CIVAnewcomp". The name comes from the script
line "our metronome is a truly indeterminate apparatus". CIVA's exhibition was
also called |indeterminate⟩⟨apparatus|.

- **Premiere:** 3 Oct 2025, 20:30, CIVA Festival, Belvedere 21 (Blickle Kino),
  Vienna. Again 19 Nov 2025, Zirkus des Wissens, JKU Linz.
- **Bell Metronome:** the running S value sets the tempo. At the start S swings
  wildly between 0 and 4 because few events have been counted, so there is no
  stable tempo. As correlations accumulate, S settles, and so does the tempo.
  Three sections of about 7 minutes: **quantum** (S ≈ 2.5 → 90 BPM),
  **classical** (angles changed, S ≈ 1.7 → 70 BPM, atmospheric and minimal),
  **quantum** again (→ 110 BPM). The mapping measured from the logs is
  non-linear: S=0 → ~40, 1 → ~56, 2 → ~86, 2.5 → ~101, 3 → ~146 BPM. The
  musicians follow the beat on screens. "Manu and Judith's main responsibility
  in this piece is to follow this uncertain metronome."
- **VoQoder:** Clemens's keyboard is split. The left hand plays synth 1
  (Alice) and the right hand synth 2 (Bob). The measurement outcomes change
  each synth's sound (512 sound variations per measurement). They are routed
  through a vocoder, which sounds only when both sides play at once, like a
  coincidence.
- **Visuals:** TouchDesigner, with point clouds and pixel sorting. The pixels
  scatter while S is chaotic and a clear image forms as it stabilises. The
  quantum sections have abstract motifs; the classical section has "a very
  concrete and realistic object" (the 3D scan of the experiment itself).
- **Media:** CIVA sound examples (70/90/110 BPM, "Alice Chord", "bob melody",
  "voQoder") and the JKU audio recording `2025-11-19_The_Sound_Of_Entanglement_(JKU).mp3`.

## Other and experimental

- Two unreleased experimental pieces were played at Vienna rehearsal events in
  2024. The DPG slides (Mar 2025) mention "Piece 2 – FM Drums, inverse control"
  and **"John's Bells"** (a 1:35 audio file is on Benjamin's drive). Confirm
  with Clemens before publishing anything.
- **Album** *Sounds of Entanglement* by **The Uncertain Question**: "First Music
  Album capturing a live performance of music that is conducted by pairs of
  entangled photons, using a quantum photonic experiment". Vinyl and digital.
  Recording planned for 1 May 2026, release planned for Oct/Nov 2026. No track
  list known; status unconfirmed.
