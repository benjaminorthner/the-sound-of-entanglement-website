# Research notes: Master thesis "BruQner: The Sound of Entanglement"

Source: `D:\Programming\Master-Thesis` (read-only). Every `.tex` file was read in full: `main.tex`, `abstract.tex`, `sections/misc/titlepage.tex`, `sections/introduction/introduction.tex`, `sections/setup/setup.tex`, `sections/software/software.tex`, `sections/software/software_old.tex`, `sections/music/music.tex`, `sections/visuals/visuals.tex` and `sections/misc/appendix.tex`. I also read `docs/thesis_status.md` and `references.bib`, and looked at every figure image, including the text extracted from the figure PDFs.

**Provenance tags used below**
- **[T]**: stated in the thesis text (quotes are verbatim, typos included)
- **[A]**: from the thesis appendix
- **[F]**: read off a figure, its labels or its caption
- **[D]**: derived by me from thesis material, consistent with it but not written out in it
- **[S]**: standard physics that the thesis does not spell out. It is added only to finish an explanation and should be checked before publishing.
- **[GAP]**: the thesis does not contain this

> **Important caveat about the thesis's state.** The thesis is an unfinished draft (the title page says "Project Thesis"). The introduction, SPDC theory, software/OSC and appendix are well written. **The Bell/CHSH theory subsections are empty headings**, the music chapter is just headings plus a Max8 paragraph, and **the visuals chapter's "8 phases" are never broken down** (there is only a bullet saying "8 Phases"). The "Real-Time Visuals: Code Implementation" part (visuals.tex lines 168–315) reads like a generic placeholder draft. Its GLSL snippet (`color = vec3(sin(angle), cos(angle), distance)`) and claims such as a "level-of-detail (LOD) approach" are probably **not** the real shader. The real visual code lives in the bruQner software repo (files named `animation_manager.py`, `config.py`/`visuals_config.py`, `performance.py`/`performance_bruqner_4th_september.py`, `fragment_shader.glsl(f)`). If the website needs the actual phases and shader, that repo is the place to look.

---

## 0. Key facts at a glance

| Item | Value | Source |
|---|---|---|
| Premiere | Evening of **4 September 2024**, Anton Bruckner's **200th birthday** | [T] |
| Venue | **Linz New Cathedral** (Neuer Dom / Mariendom), Linz, Austria | [T] |
| Occasion | **Ars Electronica Festival 2024** grand opening, in conjunction with the **2024 Bruckner festival** (200th anniversary) | [T] |
| Audience | **3200** | [T] |
| Instruments | **Two organs** of the cathedral, two organists | [T][F] |
| Pump laser | **405 nm** (blue/violet). The qutools text says "400nm" | [T] |
| Entangled photons | **810 nm** (near-infrared, invisible). qutools text says "800nm" | [T] |
| Crystals | Two **β-BBO** (β-barium borate, BaB₂O₄) crystals rotated 90°, **Type-I** phase matching; **YVO** (YVO₄) pre/post compensation crystals | [T][F] |
| State produced | $\lvert\phi^\pm\rangle=(\lvert HH\rangle\pm\lvert VV\rangle)/\sqrt2$ | [T] |
| Down-conversion efficiency | "only every $10^{-11}$th photon gets downconverted" (draft note; the rough-draft comment says "every $10^{11}$th photon") | [T] |
| Analysis | Motorised **λ/2 half-wave plates** (rotation mounts) plus **polarising beam-splitter cubes**, giving 2 outputs per side | [T][F] |
| Detectors | **4 SPCMs** (single-photon counting modules): Alice_T, Alice_R, Bob_T, Bob_R, fibre-coupled | [T] |
| Timing electronics | **Time tagger** (Python `TimeTagger` library), coincidence detection, ps-level delay compensation | [T] |
| Measurement rate | A new measurement every **~400–500 ms** (metronome click every ~400–520 ms). Artistic requirement: **≥1 Hz** | [T] |
| Bell value | Quantum (ideal, their angles): $S=-2\sqrt2$, i.e. $\lvert S\rvert = 2\sqrt2\approx 2.83$. Classical/local: $\lvert S\rvert\le 2$ | [A][T] |
| Networking | **OSC over UDP**, static IPs, 5 GHz WiFi plus wired Ethernet between the experiment PC and the music laptop | [T] |
| Music software | **Max/MSP (Max8)**, run by **Clemens** (music operator; surname not given) | [T][F] |
| Visuals | Python + OpenGL/**GLSL fragment shader**, **3 projectors** via an HDMI splitter, projecting **light cones into haze** | [T][F] |
| Author | **Benjamin Orthner** | [T] |
| Supervisor | **Associate Prof. Dr. Philipp Haslinger**, **TU Wien, Atominstitut, Research Unit of Atom Physics and Quantum Optics** | [T] |

---

## 1. The physics, layered for a website "Physics" page

Suggested layers: **(L1) one-line hook, (L2) plain-language story, (L3) curious-reader detail, (L4) equations/deep dive.**

### 1.1 Opening narrative (the thesis's own intro, good for a hero or intro)

[T] verbatim, introduction.tex:
> "On the evening of September 4, 2024, the 200th birthday of Anton Bruckner, the atmosphere inside the Linz New Cathedral shifted. As the lights dimmed, anticipation swept through the audience of 3200 gathered for the Ars Electronica Festival's grand opening. Suddenly, the two great organs of the cathedral echoed in unison, filling the vast space with a powerful resonance. Above, vibrant cones of color danced in perfect harmony with the music, projected into the billowing haze that drifted through the air, creating a visual symphony of light."

> "At the center of the cathedral stood a table filled with a network of electronics, cables, and mirrors. This was a Bell experiment—an intricate setup designed to entangle photons, measuring their polarizations with each audible click. As entangled photons were generated and measured in real time, their quantum states were translated into sheet music, fed directly to the two organists. [...] where the randomness of quantum entanglement became the composer of the night."

> "...how entangled photons became not just a scientific phenomenon but the very heartbeat of the performance."

### 1.2 Randomness in music: the aleatoric lineage (as told in the thesis)

**L1:** Composers have handed decisions to chance for over 500 years. This project hands them to nature's most fundamental chance.

**L2/L3** [T]:
1. **Johannes Ockeghem, 1470: *Missa cuiusvis toni*** ("Mass in Whatever Mode You Please"). The thesis calls it "one of the most technically challenging and innovative pieces of his era." Performers may choose between four musical modes at will (**Dorian, Phrygian, Lydian, Mixolydian**). Each version has a distinct character but stays harmonically coherent. Considered a precursor of *aleatoric music*. (Refs: Brunner 2009 review; Blue Heron 2018 concert programme.)
2. **"Aleatoric"** comes from Latin ***alea***, "dice" or "gambling".
3. **Musikalisches Würfelspiel** ("musical dice game"): a playful exercise some composers made "for their more compositionally challenged pupils", generating "endless" variations with a pair of dice.
   - **W. A. Mozart (speculated attribution), 1787, KV 516f**: *"Anleitung zum Componieren von Walzern so viele man will vermittelst zweier Würfel, ohne etwas von der Musik oder Composition zu verstehen"*, i.e. "Instructions for the composition of as many waltzes as one desires with two dice, without understanding anything about music or composition."
   - **Franz Joseph Haydn, ~1780**: *"Gioco filarmonico o sia maniera facile per comporre un infinito numero de minuetti e trio anche senza sapere il contrappunto"*, i.e. "The game of harmony, or an easy method for composing an infinite number of minuet-trios, without any knowledge of counterpoint." (Figure: the dice tables plus score.)
   - Limitation noted in the thesis: these only **select pre-composed passages** at random.
4. **John Cage: *4′33″*.** Three movements, each marked **TACET**. The performers do not play for 4 minutes 33 seconds, and "the random sounds of the concert hall, whether it be coughing, the rustling of the audience, or distant noises, become the composition itself." (The thesis recreates the score as a beige "Urtext" box: I TACET / II TACET / III TACET.)
5. **Iannis Xenakis**, Greek architect and composer, "deeply rooted in mathematics". He rejected the focus on individual notes in favour of **"sound masses, clouds, and galaxies"**. The composer shapes the overall framework and lets details evolve randomly within it: **"stochastic music"**.
   - ***Achorripsis* (1957)**: probability distributions place the instrumental sounds, and the music's evolution is controlled by **density, degree of order, and rate of change**.
   - Uses **Markov chains** and **Poisson distributions**. Book: ***Formalized Music: Thought and Mathematics in Composition***, which the thesis calls "incredibly dense".
   - Xenakis "still believed in the importance of the composer's role in refining and guiding the outcomes".
   - A figure shows Xenakis's hand-drawn *Pithoprakta* velocity graph (glissandi as particle velocities, with Gaussian $f(v)$ and α=35 annotated). The thesis caption says "Will be removed, just thought it looked nice." Visually stunning.
6. **The punchline** [T]: "But what all these uses of randomness have in common is that they use deterministic randomness. Randomness that is only due to our lack of knowledge of the environmental conditions, or the algorithms underlying the random number generation." An author's note in the source says to stress two things: **objective, non-deterministic randomness** and **non-classical correlations between two entangled particles**.

Framing line [T]: "Just as composers like Cage embraced environmental randomness, quantum mechanics offers a deeper, more elemental form of chance." And: "this project builds on the legacy of aleatoric music while venturing into a new frontier—where the randomness at the heart of nature itself becomes a creative tool."

### 1.3 Classical vs quantum (objective) randomness

**L1:** A dice roll only *looks* random. A quantum measurement *is* random.

**L2** [T]:
- Quantum mechanics "seemed to only make sense if we treated reality as being probabilistic". Properties such as position and momentum take definite values only upon measurement. The reduction of the superposition to one randomly selected outcome is **wave-function collapse**.
- **Thermodynamics analogy**: before atoms were discovered, heat and pressure were treated as intrinsic, probabilistic properties. They turned out to be emergent averages of particles "bouncing around a container, each with their own kinetic energy, hitting the walls at high speed and thus exerting pressure." So one might suspect that quantum randomness is likewise just ignorance of something deeper. The thesis's point is that **unlike thermodynamics, no deeper (local hidden-variable) theory can exist for quantum mechanics**, and Bell tests prove it.

### 1.4 Entanglement, and the gloves analogy

**L1:** Two photons, one shared fate, no pre-written script.

**L2** [T], verbatim:
> "When two particles are entangled, their properties become intrinsically linked, no matter how far apart they are. If we then measure one of the particles, the outcome is completely random, yet instantaneously we know with certainty what the result of measuring the second particle will be."

> **Gloves analogy:** "If you think classically, you might assume that the particles had already determined their measurement outcomes at the moment they were created, like a pair of gloves packed into two separate boxes. If one box is sent to Alice and the other to Bob, the moment Alice opens her box and finds a left-handed glove, she instantly knows that Bob's box contains the right-handed glove. In this view, the measurement outcomes are not truly random; they were simply pre-determined when the gloves were packed."

> "However, this reasoning does not transfer to quantum particles because it contradicts a core feature of quantum mechanics: superposition. Quantum objects, like Schrödinger's cat, do not exist in a single definite state before measurement. [...] If entangled particles were simply carrying hidden instructions all along, like the gloves in the boxes, we would expect measurement outcomes to be pre-determined. Yet, quantum mechanics insists they are not."

Characters: **Alice** and **Bob** are the two measurement stations. In the setup they are two physical arms, one on each side of the table (artistic requirement: "Show clear spatial separation between alice and bob").

### 1.5 EPR (1935)

[T]:
- **Albert Einstein, Boris Podolsky, Nathan Rosen**, 1935, *"Can Quantum-Mechanical Description of Physical Reality Be Considered Complete?"* (Phys. Rev. 47, 777).
- They showed the entangled behaviour is only explainable if either
  - **(a) Non-locality**: "Instantaneous action at a distance", as if the particles could "communicate" instantly regardless of separation. At first glance this seems to violate special relativity (nothing faster than light).
  - **(b) Pre-determination**: the properties were fixed at creation, not at measurement. This contradicts Heisenberg's uncertainty principle.
- EPR concluded that quantum mechanics was **incomplete** and proposed **"hidden variables"**: "unmeasurable properties hidden within quantum particles that tell them how to behave, and due to our ignorance of these properties, lead us to believe that they are acting randomly" (option b).
- The alternative paragraph (marked "DELETE" in the source, but well written) frames this as **locality + realism** ("the idea that physical properties exist independently of observation"). If both hold, QM cannot be complete.
- Einstein's stake: if hidden variables existed, "quantum mechanics would be like thermodynamics before the discovery of atoms—a statistical theory that merely describes averages rather than fundamental truth."
- It looks philosophical ("If hidden variables are, by definition, hidden, how could we ever test whether they exist?"), but Bell "transformed the EPR paradox from a philosophical dilemma into a testable experiment."

### 1.6 Bell's inequality (1964) and CHSH

[T]:
> "In 1964, John Bell devised a way to put this to the test. He derived an inequality that any local realist theory (one that obeys both realism and locality) must satisfy. However, if quantum mechanics were correct and no hidden variables existed, experiments would violate Bell's inequality [...] if we wish to preserve locality, then measurement outcomes are not pre-determined, meaning that nature is intrinsically random. Alternatively, if measurement outcomes are somehow determined, then the universe must allow for non-local influences"

> "The randomness we observe is not due to hidden variables but is an inherent feature of the universe. Whether we interpret this as the breakdown of realism, the acceptance of non-locality, or something even stranger remains a matter of ongoing debate"

References in the bib: Bell 1964, *"On the Einstein Podolsky Rosen paradox"*; **Clauser, Horne, Shimony, Holt 1969**, *"Proposed Experiment to Test Local Hidden-Variable Theories"* (the CHSH paper); Clauser & Horne 1974; Giustina et al. 2013 (Zeilinger group; Bell violation free of the fair-sampling assumption); Kwiat et al. 1995 (the SPDC source). The bib also has unused entries on **Popescu–Rohrlich boxes, Tsirelson's bound, quantum pseudo-telepathy and quantum nonlocality**, apparently for a planned "Exploring other visualisations of CHSH violation" subsection, which is empty. [GAP] The main-text subsections "History of Entanglement, Hidden variables and Locality" and "The Bell Experiment and Inequality" are **empty headings**.

**CHSH as the thesis uses it** [A][T]:
- Each side picks one of two measurement settings (angles): Alice $a$ or $a'$, Bob $b$ or $b'$. **A random basis choice is made between each measurement** [T, setup.tex].
- The correlator is computed from coincidence counts (normalised by coincidences) [A]:

$$
C(\theta_a,\theta_b)=\frac{p_{HH}+p_{VV}-p_{HV}-p_{VH}}{p_{HH}+p_{HV}+p_{VH}+p_{VV}}
$$

- The CHSH combination [A]:

$$
S=C(a,b)+C(a',b)+C(a,b')-C(a',b')
$$

- Angles used [A] (these are *polarisation* rotation angles in the HWP matrix, see §1.10):

$$
a=0,\qquad a'=\frac{\pi}{4},\qquad b=-\frac{3\pi}{8},\qquad b'=\frac{3\pi}{8}
$$

- **Result** [A]: with equal H/V detector efficiencies, $S=-2\sqrt2$, "independent of the absolute efficiencies". So $|S|=2\sqrt2\approx 2.83$, the quantum maximum.
- **Classical bound** [T, software.tex]: quantum mode "(entangled, $S > 2$)" vs classical mode "(product state, $S \leq 2$)". [S] The general local-realist bound is $|S|\le 2$ and the quantum (Tsirelson) bound is $|S|\le 2\sqrt2$.
- [D] For $\lvert\Phi^+\rangle$ with analyser polarisation angles $\alpha,\beta$, the correlator is $C=\cos 2(\alpha-\beta)$. With the angles above that gives three terms of $-\tfrac{1}{\sqrt2}$ and one of $+\tfrac{1}{\sqrt2}$, so $S=-\tfrac{3}{\sqrt2}-\tfrac{1}{\sqrt2}=-2\sqrt2$. (The quantity $\alpha$ here is the angle in the reflection matrix, which projects onto $(\cos\theta,\sin\theta)$.)
- [S] Why ≤ 2 classically, for a website sidebar: if every photon carried pre-set answers $A,A',B,B'\in\{\pm1\}$ (like the gloves), then $AB+A'B+AB'-A'B' = A(B+B')+A'(B-B')$. One bracket is 0 and the other ±2, so every pair contributes ±2 and the average can never exceed 2. Quantum pairs reach 2.83.

**Detector-imperfection model** [A] (a deep dive, useful for a "why real S is lower" note): each side's H and V detector has its own efficiency η. With mean $\Delta$ and imbalance $\delta$ per arm ($\eta_H=\Delta+\delta$, $\eta_V=\Delta-\delta$):

$$
S=\frac{2\left(-2\sqrt2\,\Delta_a^2\Delta_b^2+\Delta_a\Delta_b\,\delta_a\delta_b+2\sqrt2\,\delta_a^2\delta_b^2\right)}{2\Delta_a^2\Delta_b^2-\delta_a^2\delta_b^2}
\;\approx\; -2\sqrt2+\frac{\delta_a\delta_b}{\Delta_a\Delta_b}
$$

Assumptions: no dark counts, angle-independent efficiencies, coincidence post-selection. Accidentals can be subtracted first. The setup chapter also has an empty heading "Quantum State Tomography (diagnosing low S issue)", which implies the measured S in practice was below ideal. [GAP: no measured S value is reported anywhere in the thesis.]

### 1.7 SPDC: making entangled photon pairs

**L1:** Shine a blue laser through a special crystal. Very rarely, one blue photon splits into two infrared twins.

**L2** [T]: "So where do we get two polarisation-entangled photons from? We will have to find a process that simultaneously creates exactly two photons in such a way that there is a relationship between their respective polarisations, but we do not know which is which." Answer: **Spontaneous Parametric Down-Conversion (SPDC)** with a non-linear crystal and a laser (Kwiat et al. 1995).

**L3: nonlinear optics** [T]:
- The laser's electric field makes the crystal's electron cloud "periodically stretch and compress". The oscillating charges re-radiate, which is why light slows down in matter (refractive index $n(\lambda)$).
- Linear response:

$$\vec P=\varepsilon_0\chi_e\vec E$$

- Non-linear crystals add higher orders:

$$\vec P=\varepsilon_0\chi^{(1)}\vec E+\varepsilon_0\chi^{(2)}\vec E^2+\dots$$

- With two input frequencies, $E(t)=E_1e^{-i\omega_1t}+E_2e^{-i\omega_2t}+c.c.$, the $\chi^{(2)}$ term produces $2\omega_1$, $2\omega_2$, $\omega_1+\omega_2$ (**SFG**) and $\omega_1-\omega_2$ (**DFG**): **three-wave mixing**. SPDC uses DFG. The "seed" photon $\omega_2$ comes from **vacuum fluctuations** in the full quantum treatment.
- **Energy conservation**: the pump photon is destroyed and **signal** plus **idler** are created, $\omega_p=\omega_s+\omega_i$. Degenerate case: $\omega_p=2\omega$ and $\omega_s=\omega_i=\omega$, so **405 nm → 2 × 810 nm** (each photon has half the energy and twice the wavelength).
- **Momentum conservation**: $\vec k_p=\vec k_s+\vec k_i$. The twins fly out on **opposite sides of a cone** centred on the pump beam. (This cone is the visual seed for the whole project's light-cone aesthetic.)
- Phase-matching problem: $k=\omega n(\omega)/c$, so the degenerate collinear condition needs $n(2\omega)=n(\omega)$, which is "pretty much never fulfilled in an isotropic crystal."

$$
\frac{2\omega\, n(2\omega)}{c}=\frac{\omega n(\omega)}{c}+\frac{\omega n(\omega)}{c}\;\Rightarrow\; n(2\omega)=n(\omega)
$$

- Efficiency: roughly **1 in 10¹¹** pump photons down-converts ("VERY INEFFICIENT", draft note).

**L3: birefringence and BBO** [T]:
- "Our savior" is **uniaxial (birefringent) crystals**. They have one special direction, the **optic axis**. Light polarised along it sees $n_e$ (extraordinary) and light polarised perpendicular to it sees $n_o$ (ordinary). If $\Delta n=n_e-n_o<0$ the crystal is **negative uniaxial**.
- At angle θ to the optic axis:

$$
\frac{1}{n_e^2(\omega,\theta)}=\frac{\cos^2\theta}{n_o^2(\omega)}+\frac{\sin^2\theta}{n_e^2(\omega)}
$$

- **β-BBO (β-barium borate, BaB₂O₄)** is a non-linear, negative-uniaxial crystal with a large $\chi^{(2)}$ and a broad transparency range. Approximate values read from the thesis's dispersion plot [F]: at **405 nm** $n_o\approx1.69$, $n_e\approx1.57$; at **810 nm** $n_o\approx1.66$, $n_e\approx1.545$. Sellmeier data are from Tamošauskas et al. 2018.
- **Phase-matching types** [T] (pump/signal/idler polarisation): Type-0: o/o/o, **Type-I: e/o/o**, Type-II: e/(o,e)/(e,o). Why phase matching matters: the down-conversion can happen anywhere along the crystal, and without matched speeds the contributions would "destructively interfere".
- **The setup uses Type-I** at 405 nm pump → 810 nm signal and idler, both with the *same* (ordinary) polarisation.

**L3: two crossed crystals → entanglement** [T]:
- One Type-I crystal gives only $\lvert HH\rangle$. To entangle, each pair must have a 50/50 chance of being HH or VV, so **two BBO crystals rotated 90°** are stacked. The first emits an H-polarised cone and the second a V-polarised cone. **The cones overlap**, so a pair picked from opposite sides of the combined cone cannot be traced to a crystal:

$$
\lvert\phi^\pm\rangle=\frac{\lvert HH\rangle\pm\lvert VV\rangle}{\sqrt2}
$$

- Switch between $\phi^+$ and $\phi^-$ by shifting the pump phase by 180° (π) with a λ/2 waveplate.
- (The Type-I figure: blue pump beam, red H cone from crystal 1, green V cone from crystal 2, overlapping. Caption: "the true angle between the pump beam and crystals is more complicated... The pump in a real setup would be diag polarized too".)

**L4: compensation** [T][F]:
- **Spatial**: the two cones are offset because the crystals sit one behind the other. Mitigated by using **thin crystals**.
- **Temporal**: 405 nm light travels *slower* in the crystal than 810 nm. Photons born in crystal 1 therefore spend longer travelling fast and arrive earlier than those from crystal 2. **Pre-compensation** uses a birefringent crystal before the BBO pair that delays the H-polarised component.
- **Broadband SPDC** plus dispersion adds a signal/idler time offset. **Post-compensation** uses birefringent crystals after the BBO pair.
- In the qutools quED these compensators are **YVO (YVO₄) crystals**. Beam order [F]: *Laser → HWP → YVO → BBO|BBO → YVO → optical fibres*. The quED brochure (reproduced as a figure) says: "The two optically non-linear YVO crystals compensate the temporal shifts and dispersion effects due to different polarizations."
- Deeper refs: Karan et al. 2020, Rangarajan/Goggin/Kwiat 2009, Boeuf et al. 2000, Bisht 2022.

### 1.8 The source hardware: qutools quED

[T][F]:
- The team started from the commercial **"quED Entanglement Demonstrator" by qutools**, a science kit for university students ("simple, robust and easy to set up"). Between performances it can host the research group's **quantum experiment lab course**.
- The quED has: a **400 nm (405 nm) laser** diode with collimation, type-I SPDC to **800 nm (810 nm)**, all inside a **light-sealed box** with an **≈800 nm long-pass filter** (pump block), which makes it good for laser safety. The pump assembly photo labels a **laser diode and collimation, lens (negative focal length), mirrors, alignment target, wave plate (beam position), magnetic interlock, pre/post compensation crystals, BBO crystal**. The standard quED then has beam-folding mirrors, **polarisers in rotation mounts**, long-pass filters, fibre couplers and **polarisation-maintaining fibres** leading to a controller rack with **2 SPCMs and coincidence logic**.
- **Why the stock quED was not enough** [T], three reasons:
  1. **The need for single events.** There is only one SPCM per side, so you measure one polarisation at a time: "we are actually already preselecting the exact state we want to see". A Bell violation then only emerges by statistical averaging.
  2. **Maintaining entanglement until measurement.** The linear polarisers perform a projective measurement and "break the entanglement before the particles are measured". "Since we want the music to be controlled directly by true quantum events, this is not ideal, particularly from the artistic point of view."
  3. **Interfacing.** Only VNC/HTTP access, no raw data, too slow and too laggy for live performance.

### 1.9 The custom BruQner setup

[T][F]:
- The quED **source** (sealed pump box) is kept. The analysis side is rebuilt on a breadboard: for **each arm (Alice, Bob)**, mirrors → **motorised λ/2 half-wave plate** → **polarising beam-splitter (PBS) cube** → **two fibre couplers** (transmitted = H, reflected = V) → fibres → **SPCMs**. That makes **four detectors**.
- Simplified schematic [F]: purple pump into the crystal, splitting into a **blue path (Alice, θ_A)** and a **red path (Bob, θ_B)**. Each path passes a HWP and a PBS. Detectors **A (V), B (H)** on Alice's side and **C (H), D (V)** on Bob's side.
- The photo with beams [F] shows the black breadboard with red and blue beam paths overlaid, red/orange kinematic mounts, two yellow **rotation mounts**, SPCM modules top and bottom, the grey qutools baseplate and white source box. An inset shows the quED pump box (blue baseplate, orange laser path, "LASER APERTURE" label).
- For the performance, the setup sat in a **glass/acrylic case, lit from inside, on a black plinth** at the crossing of the cathedral [F, performance photos].
- **Custom 3D-printed parts** [F]: an **alignment-plate mount** (two versions; transparent plates with crosshair lines and three arched windows for the red/blue/red beams) and an **SPCM holder**.
- **Design requirements** [T]:
  - *Physics:* single events; the only projective measurement happens at the SPCM; ability to **turn off entanglement and switch to classical correlations**.
  - *Logistics:* easy to transport, **flight-ready and under the flight weight limit**, quick to set up, **vibration resistant** (travel, and live-music vibration from the organs), usable for the quantum-optics lab with the qutools setup, able to run on a different computer if the main one fails, fail-safes for live performance.
  - *Artistic:* output measurements quickly (**1 Hz minimum**, faster is better); **"Be usable in daylight so audience can see it"**; **"Show clear spatial separation between alice and bob"**.
- [GAP] Laser power, SPCM model, fibre types in the custom arms, band-pass/long-pass filter specs ("Eventually need to include LP/BP filters" appears in a caption), time-tagger brand, rotation-mount model and CAD details are not stated. (The software's `Rotator(Motor)`/`ControlBoard`/`pulse_per_rev`/"python library fork" pattern *suggests* Thorlabs Elliptec-type mounts, and the `TimeTagger` API suggests Swabian Instruments. Both are inference and should be verified.)

### 1.10 How a measurement is made

[T]:
1. **Random basis choice.** Before each measurement, each side randomly picks a measurement setting. The software rotates each **λ/2 plate** to the corresponding angle (requirement H2 "Automated Basis Selection").
2. **Waveplate + PBS = choose any pair of perpendicular directions.** The PBS alone only separates H and V. A λ/2 plate in front rotates the polarisation, so "we can measure any two perpendicular directions that we want." Figure (pbs_cube): a) the PBS splits H/V; b) with a HWP at **22.5°**, diagonal/antidiagonal light is split.
   - **Angle formalism:** a HWP rotates polarisation by twice its own rotation:

$$\theta_{\text{filter}}=\tfrac12\,\theta_{\text{polarisation}}$$

   - [D] So the appendix polarisation angles $0,\ \pi/4,\ \mp3\pi/8$ correspond to **physical waveplate angles 0°, 22.5°, ∓33.75°**.
   - HWP matrix [A]:

$$
\text{HWP}(\theta)=\begin{pmatrix}\cos\theta&\sin\theta\\ \sin\theta&-\cos\theta\end{pmatrix},\qquad
\rho'=(\text{HWP}_a\otimes\text{HWP}_b)\,\rho\,(\text{HWP}_a\otimes\text{HWP}_b)^\dagger
$$

3. **Wait until the mounts stop** (H4), then **integrate** coincidences for a set integration time.
4. **Coincidence detection.** The time tagger records photon arrival times from the 4 SPCMs. Two clicks (one Alice, one Bob) within a narrow **coincidence window** count as one entangled pair. The four "correlation channels" are HH, HV, VH, VV (i.e. Alice_T/R × Bob_T/R).
5. **Single-event pick** (H3): "we choose an event from the set collected over the integration time". This gives one genuine quantum outcome per cycle. **Which detector pair fired** is the result.
6. **Broadcast** the result via OSC `/bruQner/measurement_result` to the music and visuals, plus a metronome `/bruQner/klick`.
7. The cycle repeats every **~400–520 ms**.

**Delay compensation** [T][F]: the four paths differ in fibre/cable length and detector delay. Uncorrected, a wide coincidence window is needed, and that lets in accidentals. The fix is to put the setup at filter angles $(\theta_A,\theta_B)=(22.5°,0°)$ so that all four coincidence channels show counts. Then histogram the arrival-time differences (`TimeTagger.Correlation`, **1 ps bins × 5000 bins = 5 ns range**; relative delays were never much over **1 ns**) and take the weighted mean. This is done in two rounds (Alice_T reference, then Alice_R) and applied with `setInputDelay`. Example output:

| Channel | Before | After |
|---|---|---|
| Alice_T | 0 ps / 0.0 mm | 0 ps / 0.0 mm |
| Alice_R | 879 ps / 263.7 mm | 11 ps / 3.3 mm |
| Bob_T | 33 ps / 9.9 mm | 4 ps / 1.2 mm |
| Bob_R | −603 ps / −180.9 mm | −19 ps / −5.7 mm |

(mm = the distance light travels in that delay. A nice fact for the website: **1 ps ≈ 0.3 mm of light travel**.)

Channel counts in the live-plot figure are roughly **22k–38k counts per interval per detector** (units unclear) [F].

**Quantum vs classical mode** [T]: the system can toggle between **quantum mode (entangled state, S > 2)** and **classical mode (product state, S ≤ 2)**. The physical setup changes (mechanism not described [GAP]), so this is a toggle (`/TUQ/State/`) rather than a per-message flag.

### 1.11 The clicking mounts as a metronome (a good human detail)

[T]: "we noticed that the rotation mounts create a periodic clicking sound. We thought this was quite a nice thing since it gave the setup more liveliness, made it obvious that it was doing something." The team planned to **amplify the clicks with contact microphones** and use them musically as a metronome in later performances. Problems and fixes:
- Rotation speed isn't controllable and differs between clockwise and counter-clockwise and between the two mounts. Start-up lag differs too. Integration time varies. A slightly wrong tempo drifts over time.
- Musical issue: if the random basis doesn't change, **neither mount moves and there is no click**. Fix: measure first, then do a "dummy" rotation *just to click*, with dynamically adjusted time buffers before and after the rotations.
- Timing: `time.sleep` was accurate to tens of ms. A **busy-wait** loop gets to hundreds of µs. A hybrid is used (sleep until 20 ms remain, then spin).

---

## 2. The performance: BruQner, 4 September 2024

### 2.1 What the audience experienced [T][F]
- The New Cathedral in Linz at the Ars Electronica 2024 opening, before **3200** people, on Bruckner's 200th birthday.
- The **two great organs** played "in unison". Coloured **light cones** were projected **into haze** overhead.
- In the centre was the **Bell experiment in a lit glass case**, "measuring their polarizations with each audible click".
- Photos [F]: audience seated on the cathedral floor around the plinth; the glowing case with red/orange optics visible; the operator behind it at a laptop; blue-white haze clouds lit by projectors high in the nave; the altar crucifix in the background; warm tungsten light and haze in the second shot.

### 2.2 Floor plan (figure floor_plans.pdf) [F]
- The cathedral plan has the **chancel/apse on the left** and the **west end/tower on the right**.
- **Experiment and visual operator station** at the **crossing, beside the altar**. The table holds the **Experiment**, **Experiment-PC**, **Visual-PC** and **networking equipment**.
- **Three projectors** grouped at the crossing. **One throws a wide green cone down the nave** toward the west (main) organ, and **two throw cones north and south into the transepts**. The cones are drawn translucent green over the seating blocks (brown).
- **Hazers**: two by the projectors and one near the experiment table in the operator detail, plus a **Hazer Operator** station.
- **Organist 1** (small red square, west of the crossing near the chancel; presumably the choir organ) sits with a **laptop on the console showing the notes**, connected by cable to the **Music Operator** (Clemens, the Max/MSP laptop) and Ethernet. The **Hazer Operator** is also in this box.
- **Organist 2** (large red bar at the west end; presumably the **main gallery organ**) also has a laptop on the console and an Ethernet connection.
- The software refers to a **"small organ PC" and "big organ PC"** [T, software_old]. Latency was measured to both: see below.

### 2.3 How data maps to music [T]
- Architecture [F, base_level_architecture_flowchart]: **Setup Control (Python, Jupyter Notebook)** ↔ Experimental Setup (request measurement / send measurement). Setup Control sends measurements to **Music Generation (Max/MSP)**. Music Generation sends back "configure setup", triggers the **Visual Generation (Python, OpenGL)**, and sends musical instructions to the **Instruments & Musicians**, with an "optional exp. control" link back. Visual Generation sends rendered visuals to the **Projectors**.
- **Music generation is "beyond the scope of this thesis"**. The music chapter is headings only: "The goal of the music, obvious vs …", "Two Organ BruQner performance", "Other Mapping approaches", "Max8", "Timing, Synchronization and Metronomes". [GAP: the actual mapping rules are not documented.]
- What is stated: the quantum outcomes "were translated into **sheet music, fed directly to the two organists**" in real time. Requirement G3: "Allow flexibility for different types of music without restrictions on instruments or conversion methods".
- **Max8**: Max was originally developed in the late 1980s by **Miller Puckette at IRCAM**. It is a visual programming environment (patch objects together), used for real-time audio/video and MIDI/OSC control. Made by Cycling '74.
- **Two clocks** [T]: one on Clemens's side for reading new measurements and requesting setup changes (the "setup clock metronome"), and one for the musicians and visuals.
- **Clemens triggers section changes** (`/TSOE/section/N`; TSOE = "The Sound Of Entanglement") and the quantum/classical toggle.

### 2.4 OSC and networking [T][F]
- **OSC (Open Sound Control)**, Wright & Freed 1997. UDP messages with human-readable addresses. It was chosen over MIDI for its flexible message structure and readable debugging. UDP can drop packets, but "Measurements come in every 400--500 ms, so if one gets dropped, the next one arrives shortly anyway. We would rather have low latency than perfect reliability."
- Addresses in the current text: `/bruQner/measurement_result`, `/bruQner/klick`, `/TSOE/section/N`, `/TUQ/State/`.
- Addresses in the older draft: `/bruQner/connection_test/request|response`, `/bruQner/set/state`, `/bruQner/visuals/manual`, `/bruQner/visuals/ring`, `/bruQner/graphics`, `/bruQner/visuals/change_section`, `/bruQner/visuals/is_quantum`, `/bruQner/visuals/clear`.
- There is a dedicated local network with **static IPs** ("We learned the hard way that DHCP can cause problems"). "At larger festivals with thousands of phones searching for WiFi, the 2.4 GHz band gets completely unusable", so they use **5 GHz** plus **wired Ethernet** between the experiment PC and Clemens's music laptop.
- **Latency tests** (Max8 patches that send 1000 "bangs" over UDP at `metro 100`, 192.168.0.2 ↔ 192.168.0.3, port 7401, measuring round trip) [F]. One-way latency:
  - **Linz Big (organ) μ = 1.12 ms, σ = 0.17**
  - **Linz Small μ = 1.15 ms, σ = 0.20**
  - **Uni LAN μ = 1.58 ms, σ = 0.31**
  - **Uni WLAN**: broad log-normal, a long tail to tens of ms.

### 2.5 Phones / OSC control [T][F]
- The visuals can be triggered and tested from a phone (requirement V7). The screenshot shows an Android OSC app ("by Adam Katz", Google Play) configured with **IP 192.168.0.5, port 7401, OSC path `/bruQner/visuals`**. It has a grid of buttons:
  - **Trigger** (red)
  - **Q** (green) = quantum
  - **C** (cyan) = classical
  - **X** (black) = clear
  - **S1–S7** (gold) and **S8, S9** (dark) = sections, e.g. address `/change_section` value `1` label "S1"
- The older draft example has `/change_speed` adjusting animation speed.

### 2.6 The 8 visual phases [T]
The thesis says only this:
- "The live visuals were structured into **8 distinct phases**, each representing different aspects of the performance's narrative."
- "**Core concept is circles (quantum), lines (classical)**"
- Section/phase changes are triggered by Clemens. The quantum/classical switch is a toggle.
- Smoothstep functions are used for opacity transitions ("IDEA: show graph of smoothstep opacity transitions").
- **[GAP] There is no per-phase breakdown in the thesis.** The phone UI has buttons S1–S9 (7 gold plus 2 dark), consistent with about 8 sections and possibly an end phase ("osc triggers of special animation phases like an end phase"). For the phase-by-phase content, check `performance_bruqner_4th_september.py` in the bruQner software repo.

---

## 3. The visuals in detail

### 3.1 Concept [T]
- Motivation: "the setup itself was not very visually exciting (800nm laser)" (the photons are infrared and invisible), and "only moving parts are rotation mounts that can not be seen from far away. Visuals could help give indications as to when changes are happening in the music."
- "Inspired by the **light cone representation of SPDC** and the artist *** [name left blank in the thesis] we settled on using **projectors to project light cones into haze**." The SPDC emission cone (twin photons on opposite sides of a cone around the pump) becomes literal cones of projected light in fog. From below, each projected **ring** becomes a **cone** in 3D haze. That is why the animations are rings, dot-rings and lines on black.
- Pre-rendered videos were considered and rejected as "a bit limiting". The visuals are instead **generated programmatically in real time with a GLSL fragment shader plus Python**, triggered over OSC.
- **Visual grammar:** **circles/rings = quantum**, **lines = classical**.

### 3.2 Requirements V1–V14 [T]
OSC-triggerable animations; simple editing; many simultaneous animations; fast on low-end hardware; GPU execution; OSC section switching; phone OSC testing; special end-phase triggers; **dynamic parameters via lambda functions with default values** ("variables inside lambda functions are passed by reference", so bind with defaults); overlapping animations; **trigger counting** for sub-sections; **frame-rate-independent clock**; parameter validation; **runtime hot-reloading** of performance files and code.

### 3.3 Architecture (visuals_flowchart) [F]
- `animation_manager.py` is the entry point ("Run this file to start visuals"). It initialises from `config.py` and `fragment_shader.glslf` and creates an `AnimationManager()` holding a **list of Animation instances**.
- **Multithreaded OSC server** listening for triggers. External triggers come from the **Music PC** and the **Phone OSC controller**.
- Main loop `while True:`: check keyboard inputs → **check for code update (hot reloading)** → update existing animations → render animations.
- `performance.py`: "Process Received Trigger & extract info from AnimationManager". Then `if current_section == 1: Define Animation Parameters … elif current_section == n`, and "Add new animations".
- Output goes through an **HDMI splitter to Projector 1, 2 and 3** (all three show the same image).

### 3.4 Animation classes (animation_class_structure) [F]
- **`Animation`** (base): `start_time, parameters, dynamic_parameters, complete, color: list[float], opacity, delay, position: list[float], lifetime`. Methods: `update(), validate_parameters(), is_complete(), render()`.
- **`RingAnimation`**: `size, thickness: list, rotation_speed: list, arm_count`. Drawn as a white ring on black.
- **`DotRingAnimation`**: `dot_count: int, ring_radius, dot_size, dot_thickness, angle`. Drawn as 8 small rings arranged in a circle.
- **`LineAnimation`**: `thickness, angle, length`. Drawn as a single diagonal line.

### 3.5 "Triple lambda": time-dependent parameters [T][F]
Each animation takes static parameters plus a `'dynamic'` dict of **functions of time**. The thesis example (a red ring, 10 s lifetime) is below; the typo `sin(x …)` should be `sin(t …)`:

```python
am = animation_manager
red = (1, 0, 0)
lifetime = 10
am.trigger_animation('ring',
                {
                    # static varibales
                    'color': red,
                    'lifetime': lifetime,

                    # time dependent variables
                    'dynamic': {
                        'size': lambda t: t / lifetime,
                        'position': lambda t: sin(x * 2 * PI / lifetime),
                        'opacity': lambda t: smoothstep(0, 3, t),
                    },
                })
```

The figure `triple_lambda.pdf` shows three stacked plots against t:
- **Opacity**: a smoothstep from 0 to 1 over the first ~3 s, then flat
- **x-Position**: one sine period over the lifetime
- **Size**: a linear ramp 0 → ~1.2

Below the plots are five black frames: a tiny faint red dot left of centre → a small ring drifting right → a solid red ring at centre → a bigger ring left → a huge ring overflowing the frame. The hand-drawn figure `lambda_func_simple.jpg` shows `"position": lambda t: (0, np.sin(t))` with a small red circle bobbing up and down across frames.

Smoothstep (GLSL standard) for the website:

```glsl
float smoothstep(float e0, float e1, float x) {
    float t = clamp((x - e0) / (e1 - e0), 0.0, 1.0);
    return t * t * (3.0 - 2.0 * t);
}
```

The lambda default-binding gotcha (from the draft):

```python
def create_dynamic_parameter(value=0):
    return lambda: value
```

### 3.6 The shader [T], with caveats
Listed shader topics: why a shader approach, efficiency, **angular domain repetition**, limiting the animation count (the uniform array size), and hot reloading. The draft's illustrative GLSL (probably not the production shader, but it shows the polar/kaleidoscope idea):

```glsl
void main() {
    vec2 uv = gl_FragCoord.xy / resolution.xy;
    vec2 center = vec2(0.5, 0.5);

    // Calculate the distance and angle from the center of the screen
    float distance = length(uv - center);
    float angle = atan(uv.y - center.y, uv.x - center.x);

    // Apply angular domain repetition for a kaleidoscope effect
    float repeated_angle = mod(angle, TWO_PI / repetition_count);

    // Calculate color based on distance and repeated angle
    vec3 color = vec3(sin(repeated_angle), cos(repeated_angle), distance);

    gl_FragColor = vec4(color, 1.0);
}
```

**Porting idea for the website** [D, my synthesis]. This is a minimal WebGL ring/dot-ring/line SDF in the project's visual language, with parameters matching the Python classes:

```glsl
// ring: |dist - radius| < thickness, soft edge
float ring(vec2 p, vec2 c, float r, float th) {
    float d = abs(length(p - c) - r);
    return 1.0 - smoothstep(th, th + 0.004, d);
}
// dot ring via angular domain repetition (DotRingAnimation: dot_count, ring_radius, dot_size, angle)
float dotRing(vec2 p, vec2 c, float R, float n, float dotR, float th, float ang) {
    vec2 q = p - c;
    float a = atan(q.y, q.x) - ang;
    float sector = 6.2831853 / n;
    a = mod(a + 0.5 * sector, sector) - 0.5 * sector;   // fold into one sector
    vec2 local = length(q) * vec2(cos(a), sin(a)) - vec2(R, 0.0);
    return ring(local, vec2(0.0), dotR, th);
}
// line segment (LineAnimation: thickness, angle, length) = classical
float line(vec2 p, vec2 c, float ang, float len, float th) {
    vec2 dir = vec2(cos(ang), sin(ang));
    vec2 q = p - c;
    float t = clamp(dot(q, dir), -0.5 * len, 0.5 * len);
    return 1.0 - smoothstep(th, th + 0.004, length(q - t * dir));
}
```

### 3.7 Colours seen in the material [F]
- **In the cathedral**: cool **blue-white/cyan light in grey haze** on near-black. The warm amber of the cathedral contrasts with the violet/blue projector light.
- **Diagrams**: **red = Bob / H-polarised cone / signal-idler photons (810 nm)**, **blue = Alice / pump (405 nm)**, **green = V-polarised cone** (in the Type-I figure) and **green = projector cones** (floor plan), **purple = pump** (simplified setup). The quED pump inset uses orange/amber for the laser path. The palette is muted warm greys/taupe (#A9A294-ish) with deep red (#8B1A1A-ish) and teal (#4A8FA0-ish) in the SPDC-conservation and three-wave-mixing diagrams.
- **Phone UI**: Q = **green**, C = **cyan**, Trigger = **red**, sections = **ochre/gold**.
- **Animation demo**: pure **red (1,0,0)** ring on black.

---

## 4. All figures (path, description, website suitability)

Paths are relative to `D:\Programming\Master-Thesis\`. ★ marks a strong website candidate.

| # | Path | What it shows | Website? |
|---|---|---|---|
| 1 | `sections/introduction/figures/perf_pic_1.jpg` (4000×2668) | Performance photo: the lit experiment case centre-front, operator behind, audience on the floor, **blue-lit haze clouds** under the vault, crucifix at the far end. Moody, dark. | ★★★ Hero image. Matches the dark aesthetic perfectly. Check photographer credit (the thesis gives none). |
| 2 | `sections/introduction/figures/perf_pic_2.jpg` (4000×2668) | Performance photo: warm amber cathedral, haze, crowd, projectors on a stand at left, operator at a laptop beside the glowing case, tall cross. | ★★★ Piece page / gallery. Credit unknown. |
| 3 | `sections/introduction/figures/haydn_dice_game_score.png` | Haydn *Gioco filarmonico*: two dice tables (minuet, trio) plus numbered score fragments. | ★★ Aleatoric history section (public domain source: purl.pt/28871). |
| 4 | (inline TikZ, no file) | John Cage *4′33″* score recreation: I/II/III TACET on a beige box. | ★ Easy to recreate in HTML/CSS. |
| 5 | `sections/introduction/figures/xenakis.jpg` | Xenakis's hand-drawn *Pithoprakta* glissando/velocity graph (dense line web). Caption: "Will be removed, just thought it looked nice". | ★★ Beautiful texture for the history section. Check rights (from a blog). |
| 6 | `sections/introduction/figures/floor_plans.pdf` (18.7 MB) | Linz cathedral plan with 3 green projector cones (nave plus both transepts), 2 organs in red, plus detail boxes: Organist 1 + Music Operator + Hazer Operator; Experiment & Visual Operator (projectors, hazers, altar, Visual-PC, Experiment-PC, networking, experiment photo); Organist 2. | ★★★ BruQner piece page ("how the space was used"). Could be restyled dark. |
| 7 | `sections/introduction/figures/three_wave_mixing.pdf` | ω₁, ω₂ into a χ⁽²⁾ box, outputs 2ω₁, 2ω₂, ω₁+ω₂ (SFG), ω₁−ω₂ (DFG). | ★ Deep-dive only. |
| 8 | `sections/introduction/figures/spdc_conservation.pdf` | Three panels: SPDC (pump → χ⁽²⁾ → signal and idler at an angle), energy level diagram ω_p = ω_s + ω_i, momentum triangle k_p = k_s + k_i. Teal pump, red daughters. | ★★★ Clean. Ideal for the Physics page (recreate as SVG in site colours). |
| 9 | `sections/introduction/figures/ellipsoid.pdf` | Index ellipsoid of a negative uniaxial crystal (n_o, n_e, optic axis, e-ray/o-ray, H/V). | ★ Deep dive. |
| 10 | `sections/introduction/figures/bbo_ior.png` | BBO n_o/n_e vs wavelength (log axis 200–3200+ nm), gradient fill by angle θ, markers at 405 nm and 810 nm. Caption notes the angle colourbar should be flipped. | ★ Deep dive. |
| 11 | `sections/introduction/figures/type1_3d.pdf` | Type-I SPDC in 3D: left, one crystal gives a red cone and $\lvert HH\rangle$; right, two crossed crystals give **overlapping red (H) and green (V) cones** and $(\lvert HH\rangle\pm\lvert VV\rangle)/\sqrt2$. | ★★★ **The key "light cone" image**. The visual origin of the project's aesthetic. Recreate/animate. |
| 12 | `compensation2D.png` (repo root) | qutools quED brochure diagram: pump → BBO → cone → detectors; second panel HWP, YVO, BBO, BBO, YVO. | ✗ Third-party brochure (qutools copyright). Use as reference only. |
| 13 | `sections/introduction/figures/temporal_compensation.png` | Arrival-time pulses λ₁ (red), λ₂ (green) from crystals 1 and 2 and pump λ_p (cyan), with τ₊, τ₋ offsets. | ✗/★ Deep dive. Source unclear, likely from a paper. |
| 14 | `sections/introduction/figures/temp_spdc_compensation.png` | Component strip: Laser, HWP, YVO, BBO, BBO (red/blue dot), YVO, optical fibres, with (i) info icons. Looks like a screenshot of an interactive web widget. | ★ Idea for an interactive "beam path" component on the website. Commented out in the thesis. |
| 15 | `sections/software/figures/qutools_setup_architecture.png` | Annotated quED photo: pump and source box, long-pass filter (pump block), beam-folding mirrors, polarisers in rotation mounts, fibre couplers, PM fibres, red beam paths. | ✗ qutools marketing image. |
| 16 | `sections/setup/figures/qutools_with_controller.png` | quED rack controller plus baseplate product shot. | ✗ qutools product image. |
| 17 | `sections/setup/figures/qutools_pump_assembly.png` | Annotated quED pump box interior: laser diode, lens, mirrors, alignment target, wave plate, magnetic interlock, compensation crystals, BBO. | ✗/★ Probably qutools image. Informative. |
| 18 | `sections/setup/figures/pbs_cube.pdf` | Isometric: two PBS cubes with dark-red beams and polarisation arrows. The second has a **HWP at 22.5°** in front, showing diagonal basis measurement. | ★★ Physics page, "how we choose a measurement". |
| 19 | `sections/setup/figures/whole_setup_photo_beams.png` (5219×3463) | Top-down photo of the actual BruQner breadboard with **red and blue beam paths drawn in**, plus an inset of the quED pump box with an orange laser path. Transparent background. | ★★★ Physics/setup page. Looks great on dark. |
| 20 | `sections/setup/figures/whole_setup_photo.png` | Same without the left beam overlays (the inset keeps its beam). | ★★ Use for "reveal beams" hover/scroll effect with #19. |
| 21 | `sections/setup/figures/simplified_setup.pdf` (page 2 blank) | Schematic: pump → crystal → blue (Alice) and red (Bob) paths → mirrors → HWP θ_A/θ_B → PBS → detectors A (V), B (H), C (H), D (V). | ★★★ Best simple explainer diagram. Recreate as an animated SVG. |
| 22 | `sections/setup/figures/spcm_holder.png` | CAD render of the 3D-printed SPCM holder (two detector modules, translucent). | ★ "Making of" / details. |
| 23 | `sections/setup/figures/alignment_plates.png` | CAD render of 3D-printed alignment-plate mounts with glass crosshair plates, and red/blue/red beams through arched windows. | ★ "Making of". Nice. |
| 24 | `sections/software/figures/base_level_architecture_flowchart.pdf` | Software/hardware block diagram: Setup Control (Python/Jupyter), Music Generation (Max/MSP), Visual Generation (Python/OpenGL), Experimental Setup, Instruments & Musicians, Projectors. | ★★ "How it works" (restyle). |
| 25 | `sections/software/figures/choose_channel_graph.png` | Live SPCM count traces (Bob_T, Alice_T, Bob_R, Alice_R) with dropouts where beams were blocked. | ✗/★ Technical. Could inspire a "live counts" motif. |
| 26 | `sections/software/figures/delay_adjustment.pdf` | 3D Gaussian arrival-time peaks for 4 channels, before and after delay adjustment (±100 ps). | ★ Deep dive. Aesthetically nice. |
| 27 | `sections/software/figures/latencyhistogram.png` | Network latency histograms: Linz Big/Small, Uni LAN/WLAN, with fits. | ✗ Technical. |
| 28 | `sections/software/figures/patches.png` | Max8 latency-test patches (udpsend/udpreceive, metro, timer). | ✗ Technical. Maybe "making of". |
| 29 | `sections/software/figures/patches_vertical.png` | Vertical layout variant of #28 (unused). | ✗ |
| 30 | `sections/software/figures/km_class_structure.png` | UML: ControlBoard, Motor, Rotator(Motor), Shutter(Motor). | ✗ |
| 31 | `sections/visuals/lambda_func_simple.jpg` | Hand sketch: `"position": lambda t: (0, np.sin(t))` with a sine plot and a red circle bobbing across frames. | ★ "Process" charm. |
| 32 | `sections/visuals/phone_osc.png` | Phone OSC controller mock-up (Trigger, Q, C, X, S1–S9) plus app config (IP 192.168.0.5, port 7401, `/bruQner/visuals`). | ★ "Behind the scenes". |
| 33 | `sections/visuals/figures/visuals_flowchart.pdf` | Visual system workflow (animation_manager.py, performance.py, OSC server, hot reload, HDMI splitter to 3 projectors). | ✗/★ Technical. |
| 34 | `sections/visuals/figures/triple_lambda.pdf` | Opacity (smoothstep), x-position (sine) and size (linear) vs t, with 5 black frames of a growing red ring. | ★★ Explains the visuals. Could become a live WebGL demo. |
| 35 | `sections/visuals/figures/animation_class_structure.png` | UML of Animation → RingAnimation/DotRingAnimation/LineAnimation, with a thumbnail of each shape (white on black). | ★★ The three thumbnails **are** the visual vocabulary (ring, dot-ring, line). |
| 36 | `figures/anton-bruckner-2024-logo-mit-signet.svg` | Official Anton Bruckner 2024 anniversary logo (not included in the tex). | ⚠ Only with permission / for a partner logo strip. |
| 37 | `figures/titlepage/TU_ATI_logo.png`, `TU_Logo.pdf` | TU Wien / Atominstitut logos. | ⚠ Partner logos, with permission. |

---

## 5. Names, institutions, dates, facts

**People**
- **Benjamin Orthner**: author, physicist, built the optical setup, control software and visuals. TU Wien.
- **Assoc. Prof. Dr. Philipp Haslinger**: supervisor, TU Wien Atominstitut.
- **Clemens**: music operator / composer side (Max/MSP). He triggers sections and the quantum/classical toggle. **Surname not given in the thesis.**
- Two **organists** (unnamed), a **Hazer Operator** (unnamed), and an **Experiment & Visual Operator** (Benjamin).
- An **unnamed artist** who inspired the light-cones-in-haze idea ("the artist ***").
- Historical: Johannes Ockeghem, W. A. Mozart, Joseph Haydn, John Cage, Iannis Xenakis, Anton Bruckner, Einstein, Podolsky, Rosen, John Bell, Clauser/Horne/Shimony/Holt, Heisenberg, Schrödinger (cat), Miller Puckette (Max), Kwiat/Mattle/Weinfurter/Zeilinger/Sergienko/Shih (1995 source paper), Giustina et al./Zeilinger (2013), M. Wright & A. Freed (OSC, 1997).

**Institutions and organisations**
- **TU Wien, Atominstitut, Research Unit of Atom Physics and Quantum Optics**
- **Ars Electronica Festival** (2024 opening)
- **Anton Bruckner 2024 / Bruckner festival** (200th anniversary)
- **Linz New Cathedral** (Neuer Dom / Mariendom)
- **qutools** (quED Entanglement Demonstrator, the base source)
- **IRCAM** (origin of Max), **Cycling '74** (Max docs)
- Also referenced: Blue Heron (early-music ensemble, Ockeghem programme)
- **Funders: none mentioned in the thesis.** [GAP]

**Dates**
- 1470: Ockeghem *Missa cuiusvis toni*
- ~1780: Haydn *Gioco filarmonico*
- 1787: Mozart *Musikalisches Würfelspiel* KV 516f (attribution speculated)
- 1935: EPR paper
- 1957: Xenakis *Achorripsis*
- 1964: Bell's theorem
- 1969: CHSH
- late 1980s: Max created at IRCAM
- 1995: Kwiat et al. two-crystal polarisation-entangled source
- **4 Sept 2024: BruQner premiere, Linz**
- Jan 2026: thesis still in draft (per docs/thesis_status.md)

**Later work**: `docs/thesis_status.md` mentions post-BruQner work **"8 Rooms, CIVA"**. **"Indeterminate Apparatus" is not mentioned anywhere** in the thesis repo. The metronome section says contact-mic-amplified mount clicks were planned "for different performances".

**Other handy numbers**
- 1 in ~10¹¹ pump photons down-converts
- The measurement cycle runs about 2–2.5 times per second (400–520 ms)
- Delay corrections are hundreds of ps (e.g. 879 ps ≈ 26 cm of light path), corrected to about ±20 ps
- Correlation histogram: 1 ps bins, 5 ns range
- One-way network latency in Linz ≈ **1.1 ms**
- OSC port 7401. IPs 192.168.0.x.

---

## 6. Suggested website copy snippets (drafted from the thesis, in its voice)

- **Hook:** "For 500 years composers have let dice decide. We let the universe decide."
- **Randomness:** "A dice roll is only random because we don't know enough. A quantum measurement is random because there is nothing more to know."
- **Gloves → quantum:** use the thesis gloves paragraph (§1.4), then: "Bell showed how to tell the difference. If the photons carried hidden instructions, a certain score *S* could never exceed 2. Our entangled photons reach up to 2√2 ≈ 2.83."
- **Source:** "A violet 405 nm laser shines through two paper-thin BBO crystals set at right angles. About one photon in a hundred billion splits into a pair of invisible 810 nm infrared twins, which fly apart on opposite sides of a cone of light. We never know which crystal made them, so the pair is entangled."
- **Measurement:** "Every half-second, motors turn a half-wave plate on each side to a randomly chosen angle (the click you hear). A polarising cube sends each photon to one of two detectors. The pair of detectors that fire becomes the next musical decision."
- **Visuals:** "The photons are invisible, so we drew them. The emission cone of down-converted light became cones of projected light in haze: circles for quantum, lines for classical."

---

## 7. Gaps to fill from other sources
1. The **8 visual phases**, phase by phase (see `performance_bruqner_4th_september.py` in the bruQner repo).
2. **The music mapping rules** (how HH/HV/VH/VV became organ notes). This lives on Clemens's Max patches.
3. The production **GLSL shader** (`fragment_shader.glsl(f)`).
4. **Measured S values** in performance, and how the classical (product-state) mode is physically produced.
5. Hardware models: laser power, SPCM model, time tagger (Swabian?), rotation mounts (Elliptec?), fibres, filters.
6. Clemens's surname, the organists' names, the inspiring artist, photo credits, funders.
7. *8 Rooms*, *Indeterminate Apparatus* and CIVA: nothing in the thesis beyond the one mention of "8 Rooms, CIVA".
