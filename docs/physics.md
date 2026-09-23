# The physics (source material for the physics page)

Written in layers: a one-line hook, the plain story, then detail for curious
readers, then a deep dive. Keep the website accurate. Where it's unclear, check
the paper (arXiv:2509.08892) or ask Benjamin.

**Things the site must NOT claim**
- that the experiment is a loophole-free Bell test. Alice and Bob are about
  30 cm apart and settings are chosen by a pseudo-random generator. The paper
  says: "our experiment does not close any of the loopholes… However, all
  loopholes have already been closed experimentally."
- that anything travels faster than light, or that Alice's measurement
  "sends" information to Bob.
- that S reaches 2√2 on stage. Measured values are about 2.2–2.6.

## 1. Randomness

**Hook:** a dice roll only *looks* random. A quantum measurement *is* random.

In classical physics everything has a cause. A roulette ball's final position
seems random only because it is too complicated to calculate. That is
*subjective* randomness, a lack of knowledge. Whether a single photon is
transmitted or reflected at a beam splitter has no cause at all. The odds are
50:50 and nothing decides it: *objective* randomness.

**Aleatoric music** (Latin *alea*, "dice") has always used the subjective kind:
- Johannes Ockeghem, *Missa cuiusvis toni* (c. 1470): sing it in whichever mode you like
- Haydn, *Gioco filarmonico* (c. 1780), and the dice game attributed to Mozart,
  KV 516f (1787): "Instructions for the composition of as many waltzes as one
  desires with two dice, without understanding anything about music or
  composition"
- John Cage, *4′33″* (1952): the room's sounds become the piece
- Iannis Xenakis, stochastic music (*Achorripsis*, 1957; *Pithoprakta*)
- Terry Riley, *In C* (1964): 53 phrases, with the form left to the performers

"What all these uses of randomness have in common is that they use
deterministic randomness." (thesis) TSOE brings in *objective* randomness,
plus correlations that no classical process can produce.

## 2. Entanglement

**Hook:** two photons, one shared fate, and no script written in advance.

"In our classical world, any pair of objects, for example two scores of music,
is fully described by describing the two individual objects… The state of two
entangled quantum systems cannot be described by fully describing the
individual systems. The whole is more than the sum of its parts." (lecture
script) Schrödinger called entanglement "not *one* but rather *the*
characteristic trait of quantum mechanics".

**The gloves analogy** (thesis): classically you might think the photons
decided their outcomes when they were created, like a pair of gloves packed
into two boxes. When Alice opens hers and finds a left glove, she knows Bob has
the right one. Nothing is random. Quantum mechanics says that is *not* what
happens: the polarisation does not exist before measurement. Each outcome is
random locally, but globally the outcomes are correlated.

**EPR (1935).** Einstein, Podolsky and Rosen argued that quantum mechanics must
be incomplete and that "hidden variables" (the gloves) must exist. Einstein:
God "does not play dice"; entanglement is "spooky action at a distance".

**Local realism** = *realism* (properties exist before measurement) +
*locality* (no influence faster than light).

## 3. Bell's inequality: the test

**Hook:** Bell turned a philosophical argument into a number you can measure.
Classical ≤ 2. Quantum up to 2√2 ≈ 2.83.

John Bell (1964) found a way to test EPR's hidden variables. In the CHSH
version (Clauser, Horne, Shimony, Holt 1969) that the project uses:

- Alice randomly picks one of two settings, *a₁* or *a₂*. Bob picks *b₁* or *b₂*.
- Each gets an outcome, +1 or −1.
- 2 settings × 2 outcomes per side gives 4 × 4 = **16 combinations** per pair.
- Over many pairs, estimate the four correlations *E₁₁, E₁₂, E₂₁, E₂₂*, each
  between −1 and +1.
- Combine them: **S = |E₁₁ + E₁₂ + E₂₁ − E₂₂|**

**Why S ≤ 2 classically** (usable as-is): if every pair carried pre-set answers
A₁, A₂, B₁, B₂ (each ±1), then A₁(B₁+B₂) + A₂(B₁−B₂) = ±2 for *every* pair:
one bracket is always 0 and the other ±2. The average of numbers that are each
+2 or −2 can never exceed 2.

**Quantum:** entangled photons reach S = 2√2 ≈ 2.828 (the Tsirelson bound). No
hidden-variable model can produce that. The experiments that settled this won
the **2022 Nobel Prize in Physics** (Aspect, Clauser, Zeilinger). Johannes
Kofler contributed the theory for one of Zeilinger's prize-winning
experiments.

**On stage**: S ≈ 2.45 at the BruQner premiere (paper). Log values: 2.34
(premiere, long quantum block), 2.62 (Ball night), 2.41 (CIVA), 2.51 (JKU). It
is lower than 2.83 because of imperfect state preparation, detector
efficiencies, accidental coincidences and drift.

**The musical point**: "a classical conductor — bound by the laws of classical
physics — cannot beat this Bell value of 2. But a quantum conductor can!"

## 4. Making entangled photons: SPDC

**Hook:** shine a violet laser through a special crystal, and very rarely one
photon splits into two invisible infrared twins.

- **Pump**: a 405 nm violet laser diode (about 12 mW; a qutools quED source unit).
- **Crystals**: two thin **β-BBO** (beta barium borate) crystals rotated 90°
  to each other, **type-I** phase matching.
- **Spontaneous parametric down-conversion**: about 1 in 10¹¹ pump photons
  splits into two **810 nm** photons (half the energy, twice the wavelength).
  Energy conservation: ω_p = ω_s + ω_i. Momentum conservation: k_p = k_s + k_i.
  So the twins leave on **opposite sides of a cone** around the pump beam.
- The first crystal makes H-polarised pairs, the second V-polarised pairs. The
  cones overlap, so for a pair taken from the overlap you cannot know which
  crystal made it. That gives the entangled state
  **|Φ⁺⟩ = (|HH⟩ + |VV⟩)/√2**. (In practice the source behaves like Φ⁻, which
  only changes the angles used.)
- YVO₄ crystals before and after compensate timing differences.
- **The cone is the origin of the project's whole visual language**: the light
  cones projected into haze in the cathedral are this emission cone made
  visible. The 810 nm photons themselves are infrared and invisible.

Deep dive (thesis): nonlinear polarisation P = ε₀(χ⁽¹⁾E + χ⁽²⁾E² + …),
three-wave mixing, and birefringent phase matching
1/n_e²(θ) = cos²θ/n_o² + sin²θ/n_e². BBO n_o ≈ 1.69, n_e ≈ 1.57 at 405 nm;
n_o ≈ 1.66, n_e ≈ 1.545 at 810 nm.

## 5. Measuring: from photon to musical decision

1. On each side, a **motorised half-wave plate** (Thorlabs Elliptec ELL14)
   turns to one of two angles chosen at random. The motors **click**, and the
   click is the sound of a measurement setting being chosen. It became the
   metronome in *8 Rooms*.
2. A **polarising beam splitter** cube sends the photon either through (T) or
   reflected (R): outcome +1 or −1. Half-wave plate + PBS = "measure along any
   pair of perpendicular directions". The plate rotates the polarisation by
   *twice* its own angle.
3. Fibres (PM780-HP) lead to **four single-photon detectors** (Alice-T,
   Alice-R, Bob-T, Bob-R), behind 715 nm long-pass filters.
4. A **time tagger** (Swabian Instruments) timestamps every click with
   picosecond precision. Two clicks within about **0.5–1 ns** count as a
   coincidence, i.e. one pair. After calibration the delays match to within
   about 20 ps (1 ps ≈ 0.3 mm of light travel).
5. Rates: 50k–200k clicks/s per detector; 1k–5k coincidences/s.
6. About **every 0.3–0.5 s** one coincidence is picked as the measurement
   result: `[aliceSetting, bobSetting, aliceOutcome, bobOutcome]`, sent via OSC
   to music and visuals. Network latency is about 1 ms on LAN.

Measurement angles (polarisation space): Alice 0°/45°, Bob ±22.5°. Wave-plate
angles are half of those: 0°/22.5° and ±11.25°. For the **classical mode** the
plates go to other angles (e.g. HWP [0, 22.5, 32, 22.5]), which push S below 2.
The source stays the same; only the measurement changes.

## 6. Setup facts (for an "apparatus" section)

- A 600 × 600 mm breadboard in a glass case lit from inside, flight-ready,
  with custom 3D-printed holders. Built at TU Wien.
- Setup takes 2–4 h on site, mostly fibre alignment (four couplers).
- Why not just the commercial quED demonstrator? It has one detector per side
  (no single-event outcomes), polarisers that "break the entanglement before the
  particles are measured", and no fast raw-data interface.
- Its own 5 GHz network: "at festivals with thousands of phones the 2.4 GHz
  band becomes unusable".

## Good sentences to reuse

- "For 500 years composers have let dice decide. We let the universe decide." (draft)
- "The photons are invisible, so we drew them." (draft)
- "Every half-second, motors turn a half-wave plate on each side to a randomly
  chosen angle — the click you hear."
- "Entanglement is about correlations. Music is about correlations. A conductor
  coordinates and correlates musicians." (lecture)
- "If a tree falls in the forest and no one is around to hear it, does it
  actually make a sound?" (the lecture opener)

## Figures that already exist

See `assets.md`. The ones that matter most: `Lightcones.jpg` (painted cones with
yellow photon points), `SetupLabelledBeamPaths.png` (setup photo with beam
paths and a₁/a₂, b₁/b₂, ±1), `type1_3d.pdf` (two-crystal cones),
`spdc_conservation.pdf`, `simplified_setup.pdf`, `pbs_cube.pdf`,
`Qrndwalk28.jpg` (8 Rooms walk skew at S = 2√2). Most should be redrawn as SVG
in the site style rather than used as-is.
