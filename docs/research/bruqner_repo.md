# bruQner repo: research notes for "The Sound of Entanglement" website

Source repo: `D:\Programming\BruQner\bruQner` (read only; nothing in it was changed).
Scratch outputs made during this research (all in `...\scratchpad\research\`):
- `figs/`: PNGs pulled out of the notebooks, top-down, front and side renders of the point cloud, and the two icons
- `data/bruqner_premiere_2024-09-04.json` and `data/8rooms_wissenschaftsball_2025-01-25.json`: compact excerpts of real measurement streams, about 10 KB each, ready to embed (format in section 3)
- `nbdump/`: plain-text dumps of every notebook (code, markdown and truncated outputs)

---

## 0. TL;DR for the website

| Asset | Where | Use on site |
|---|---|---|
| Logo motif: two overlapping rings, red `#db0000` and amber `#f3b124`, on black | `archive/visuals_python_glsl/visuals_icon.png` | Brand mark or favicon. It is the "two light cones" idea. |
| GLSL fragment shader: rings, pinwheel rings, lines, dotted rings | `archive/visuals_python_glsl/fragment_shader.glslf` | Ports almost 1:1 to WebGL (full-screen quad). See section 2. |
| BruQner animation choreography: lambda functions of `t` per section | `archive/visuals_python_glsl/performance_modules/performance_bruqner_4th_september.py` | Port to JS closures, driven by replayed or simulated events. |
| Real measurement logs, about 280k events from 2024-09 to 2025-11 | `logs/*.txt` (gitignored, local only) | Replay the real quantum events. Excerpts are ready in `scratchpad/research/data/`. |
| Quantum physics in about 10 lines | `simulator/src/bruqner_sim/physics.py` | Closed form: P(TT)=P(RR)=(1+V·cos4(a−b))/4. See section 4. |
| 3D scan of the actual experiment: 641,980 coloured points (Polycam) | `data/pointclouds/TSOE_Setup_pointcloud.pts` (34.7 MB ASCII) | Render with three.js `Points` after decimating and converting to binary. See section 7. |
| Tempo against S (Indeterminate Apparatus), taken from logs | `logs/osc_log.txt` (/TUQ/S-VALUE/, /TUQ/Tempo/) | Interactive "S drives tempo" widget. See section 5. |
| Much better images (light-cone painting, motif scores, performance photos) | the sibling repo `D:\Programming\The-Sound-of-Entanglement\` (the paper) and `D:\Programming\Master-Thesis\` | See section 6. These are outside this repo, so copyright or permission needs checking. |

---

## 1. Physics and setup: text for a general audience, with exact numbers

Sources: `docs/physics_background.md`, `docs/hardware_reference.md`, `docs/software_architecture.md`, `docs/project_overview.md`, `docs/performances.md`, `docs/performance_history.md`, `docs/glossary.md`, `docs/operational_knowledge/*`, `mintlify-docs/concepts/*.mdx`.

### 1.1 Concept (the project's own wording, reusable as copy)
- The project introduces **"Quantum Aleatoric Music"**. It extends chance-based composition (Mozart's and Haydn's dice games, John Cage; the thesis also cites Xenakis) with *genuinely non-classical* randomness.
- **"The Quantum Conductor."** A quantum measurement apparatus conducts the piece, not a human or an algorithm.
- "Unlike classical randomness (which is deterministic but unpredictable), quantum measurement outcomes are fundamentally indeterminate."
- The docs list three reasons it matters:
  1. Every performance is unique and cannot be repeated.
  2. The correlations are stronger than anything classically possible.
  3. The audience can *hear* the difference between quantum (S > 2) and classical (S ≤ 2) sections.
- Performance format: a lecture of about 20 minutes (often by Johannes Kofler), then about 15 to 30 minutes of performance, with quantum sections and deliberately classical sections.

### 1.2 How the experiment works (general-audience version)
1. **Source.** A **405 nm blue/violet pump laser** (drive current 40 mA, about 12 mW) shines into two thin **Type-I BBO crystals** rotated 90° to each other (the QuTools **quED** unit, rated S > 2.3).
2. **Down-conversion (SPDC).** Rarely, **about 1 pump photon in 10¹¹**, one photon splits into **two 810 nm infrared photons** (energy and momentum are conserved). The pair leaves on opposite sides of a cone and is polarisation-entangled: **|Φ⁺⟩ = (|HH⟩ + |VV⟩)/√2**. The hardware reference gives SPDC efficiency as about 10⁻⁸ to 10⁻⁶, a sub-nanowatt 810 nm output. The "light cones" visual idea comes from this cone geometry (see `Lightcones.jpg` in the paper repo).
3. **Two stations, Alice and Bob,** about **30 cm apart** (the docs stress 30 cm, not 30 m). Each has:
   - a **half-wave plate (λ/2 @ 810 nm)** in a motorised **Thorlabs Elliptec ELL14** rotation mount. The plate picks the measurement angle.
   - a **polarising beam splitter (PBS)** that sends each photon either **T (transmitted) or R (reflected)**.
4. **Four single-photon detectors (SPCMs)**: Alice-T, Alice-R, Bob-T, Bob-R. Light reaches them through **PM780-HP polarisation-maintaining single-mode fibres**, after **RG715 / FGL715 long-pass filters** (≥ 715 nm).
5. **Time tagger** (Swabian Instruments, picosecond precision). A **coincidence** is two detectors firing within about **0.5 ns** (1 ns at some shows). After delay calibration, the residual delays are under 50 ps.
6. **Outcome of each measurement:** TT, TR, RT or RR. Each is sent as ±1 per side, together with which of the two settings each side used.
7. **Network:** OSC over a private hidden 5 GHz Wi-Fi with static IPs, wired where possible. The experiment PC is 192.168.0.2, music (Max/MSP, Clemens) is .3, visuals (TouchDesigner) is .5:10000. Measured OSC latency is about 1 to 1.5 ms on LAN and 2 to 7 ms on Wi-Fi (`notebooks/figures/latency_testing`).

### 1.3 The Bell/CHSH test
- S = |E(a,b) + E(a,B) + E(A,b) − E(A,B)|, where E = P(TT) − P(TR) − P(RT) + P(RR).
- Classical (local realist) limit: **S ≤ 2**. Quantum maximum (Tsirelson bound): **2√2 ≈ 2.828**.
- **Achieved: S ≈ 2.45** (typical 2.45 to 2.55 when well aligned; the docs' threshold table puts 2.3 to 2.6 as "good").
- Why S is not 2.83: imperfect state, detector inefficiency, accidental coincidences, fibre losses, polarisation drift.
- Angles. Polarisation-space angles are Alice 0°/45° and Bob ±22.5°. Wave-plate angles are half of those: **[a, A, b, B] = [0, 22.5, 11.25, −11.25]** (the HWP rotates polarisation by twice its own angle).
- **Classical mode** uses deliberately "bad" angles, for example `[0, 22.5, 32, 22.5]` ("must produce 1.4"), or `[0, 12, 56, 19]` at CIVA. Switching modes means only turning the wave plates to other angles. The source stays the same.
- Fun fact: the source nominally makes Φ⁺, but it behaves like **Φ⁻** (an extra phase somewhere in the path), so the "Φ⁻ angles" give better S.

### 1.4 Real S-values found in the repo
| Where | S |
|---|---|
| `ZirkusDesWissens_Performance.ipynb` (JKU, 2025-11), 2 s per basis | **2.513** (counts below) |
| `CIVA_Performance.ipynb` (Indeterminate Apparatus premiere, 2025-10-03) | **2.411** |
| `measure_and_communicate_test.ipynb` | 2.321; per detector pair 2.28 to 2.52 |
| `metronome_clicks.ipynb` | 2.364 |
| `pairwise_bell_test.ipynb` | 2.352 |
| BruQner premiere log, 2024-09-04, "Q_all" block of 6,182 events | **2.342** (short blocks ranged 2.2 to 2.85) |
| BruQner second show, 2024-09-06, Q_all blocks | 2.31 to 2.43 |
| 8 Rooms, Wiener Wissenschaftsball, 2025-01-25 (58,169 events) | **2.618** |
| 8 Rooms, 2025-01-26 (the same ball, after midnight) | 2.458 |
| 8 Rooms, Science Diplomacy Summit, DC, 2025-04-14 | 2.192 |
| 8 Rooms, Millstatt, 2025-06-03 | 2.319 |
| 8 Rooms, Alpbach, 2025-08-26 | 2.291 |

Example raw printout (Zirkus des Wissens), which could be shown as a "lab notebook" typographic element:
```
corr[a,b] = 0.43586   N[TT]=1251 N[TR]= 524 N[RT]= 360 N[RR]= 999
corr[a,B] = 0.84931   N[TT]=1505 N[TR]= 135 N[RT]=  89 N[RR]=1244
corr[A,b] = 0.7929    N[TT]=1229 N[TR]= 126 N[RT]= 154 N[RR]=1195
corr[A,B] = -0.43453  N[TT]= 486 N[TR]=1063 N[RT]=1035 N[RR]= 341
S = 2.5126
```

### 1.5 Rates and timing
- **Singles:** 50k to 200k counts/s per detector. **Coincidences:** 1k to 5k per second. Performance loop logs show about 100 to 130 coincidences per 0.1 s integration, so roughly 1,200 per second.
- **Each musical event = 1 coincidence** (the last one in a 65 to 100 ms integration window), chosen from about 100.
- **Measurement cycle / metronome:** `metronome_interval = 0.52 s`, which is **about 115 BPM**. The 8 Rooms logs measure a **528 ms median gap (about 113.6 BPM)**; the docs say about 536 ms. Inside a 0.52 s cycle: rotation takes up to 0.35 s, integration 0.065 to 0.07 s, and the rest is buffer.
- **The motors' clicks are part of the music.** When the angle does not change, the loop does a *"fake rotation"* anyway so the Elliptec motor still clicks on the beat (`measurement/performance.py`, `get_single_measurement_metronome`). A contact microphone picks up the clicks.
- In BruQner 2024 and Indeterminate Apparatus 2025 the cadence is free-running, with a median gap of about 0.28 to 0.32 s (range 0.16 to 0.4 s).

### 1.6 Hardware and "backstage" facts (good for an "apparatus" page)
- Breadboard **600 × 600 mm**, flight-ready, with custom 3D-printed holders.
- Setup takes 2 to 4 hours, mostly **fibre alignment**: 4 couplers with 12+ degrees of freedom.
- Packing-list flavour: laser safety magnet, fibre pens, "QuTools alignment plexi plate", router, zip ties.
- A dedicated 5 GHz network is needed because "at festivals with thousands of phones the 2.4 GHz band becomes unusable."
- Haze projections were replaced by screen projections because of fire-safety rules. There was **no haze allowed in the Neuer Dom** either, which forced changes.

### 1.7 Team (`docs/project_overview.md`)
- Benjamin Orthner: experiment, all control code, visuals (Python/GLSL and TouchDesigner), networking, thesis at TU Wien.
- Clemens Wenger: composer and musical director, the Max/MSP system, the band.
- Philipp Haslinger: supervisor and primary funder.
- Johannes Kofler: theorist, had the original Bell-test idea, gives the lecture.
- Richard Kueng and Martin Ringbauer: organisation.
- Alexander Ploier: media and documentary ("BruQner – The Sound of Entanglement" on YouTube).
- Enar de Dios Rodríguez: visual concept and artistic direction.
- Publications: an arXiv paper "The Sound of Entanglement" (being revised for *Leonardo*). ISWC 3307761800.

### 1.8 Performance timeline (`docs/performance_history.md`)
- 2024-09-04: BruQner world premiere, Neuer Dom Linz, opening of Ars Electronica and the Bruckner year, 3,000+ people.
- 2024-09-05 or -06: second BruQner show, in German. The docs say 5 Sept; the log file is dated **2024-09-06, 15:18 to 17:13**.
- 2025-01-26: 8 Rooms at the Wiener Wissenschaftsball, Rathaus Vienna, played in repeated sets. The log runs **2025-01-25 15:02 to 2025-01-26 02:27**, so the ball night is 25 January. **The docs' date looks one day off.**
- 2025-04-14: Science Diplomacy Summit, Washington DC. The paper repo has `20250414_JHU_Science_2345.jpg`.
- 2025-06-03/04: Tech Forum Millstatt.
- 2025-08-26: European Forum Alpbach.
- 2025-10-03: **Indeterminate Apparatus** premiere, CIVA Festival.
- 2025-10-28: ISQCMC '25, a reduced version without the live experiment.
- 2025-11-19: Indeterminate Apparatus, Zirkus des Wissens / JKU Quantenwoche, Linz.
- The OSC log also has sessions on 2025-01-20/23/24 and 2025-03-14 (tests and rehearsals).

---

## 2. Visual systems

### 2.1 BruQner (2024): Python + pygame + OpenGL + one GLSL fragment shader
Files are in `archive/visuals_python_glsl/`:
- `animation_manager.py`: the pygame/OpenGL host, animation classes, and the OSC server
- `fragment_shader.glslf`: the single full-screen fragment shader
- `visuals_config.py`: output 3072×1920 divided by a 2× display scale, `MAX_ANIMATIONS = 30`. OSC listens on 192.168.0.5:7401.
- `performance_modules/performance_bruqner_4th_september.py`: the premiere choreography. The `_6th_september.py` version multiplies all thicknesses by `tt = 1.5` "for daytime performance" and has slower section-8 wipes.
- `performance_trial_run_2.py`, `performance_template.py` and `performance_for_paper.py`: earlier or simpler versions.
- `other_visual_ideas/multi_walker.py` and `random_walk.ipynb`: random-walk prototypes that led to 8 Rooms.

The visuals were projected into haze ("light cones projected into haze"). Rings on the screen become cones of light in the air.

**Architecture: "animations as lambda functions."** Each measurement event calls `trigger_animation(type, params)`. Any parameter can be a Python lambda of the elapsed time `t`, re-evaluated every frame (60 fps). Parameters are then uploaded as uniform arrays: up to 30 simultaneous animations, each with a type, colour, position, size, thickness, opacity, rotation, arm count and so on. The shader loops over them and keeps the colour of the **most opaque** layer per pixel (a max-alpha rule, not additive blending). This is the thesis's `lambda_func_simple.jpg` idea: `"position": lambda t: (0, np.sin(t))`.

**Animation lifecycle** (`Animation.update`):
- Opacity stays 0 until `delay` has passed, then takes its set value.
- Dynamic parameters are evaluated with `elapsed = now - start - delay`.
- The animation is removed once `elapsed > lifetime`.

**Coordinate system:** `uv = fragCoord/res*4 - 2; uv.y *= res.y/res.x`. So x runs from −2 to 2, and y from about −1.25 to 1.25 at 16:10. Many animations use `y_shift = -0.3`.

#### The shader (WebGL-portable; change `#version 330` to WebGL2 `#version 300 es` plus `precision highp float;`)
```glsl
#define PI 3.14159265
#define MAX_ANIMATIONS 30
uniform vec2 iResolution; uniform float iTime;
uniform int animationCount;
uniform int animationTypes[MAX_ANIMATIONS];   // 0 ring, 1 line, 2 dotted ring
// ring
uniform vec3 ringColors[MAX_ANIMATIONS]; uniform vec2 ringPositions[MAX_ANIMATIONS];
uniform float ringSizes[MAX_ANIMATIONS], ringOpacities[MAX_ANIMATIONS], ringThicknesses[MAX_ANIMATIONS],
              rotationSpeeds[MAX_ANIMATIONS], armCounts[MAX_ANIMATIONS];
// line
uniform vec3 lineColors[MAX_ANIMATIONS]; uniform vec2 linePositions[MAX_ANIMATIONS];
uniform float lineLengths[MAX_ANIMATIONS], lineAngles[MAX_ANIMATIONS], lineThicknesses[MAX_ANIMATIONS], lineOpacities[MAX_ANIMATIONS];
// dotted ring
uniform vec3 dotRingColors[MAX_ANIMATIONS]; uniform vec2 dotRingPositions[MAX_ANIMATIONS];
uniform float dotRingSizes[MAX_ANIMATIONS], dotRingRadii[MAX_ANIMATIONS], dotRingOpacities[MAX_ANIMATIONS],
              dotRingThicknesses[MAX_ANIMATIONS], dotRingAngles[MAX_ANIMATIONS];
uniform int dotRingDotCounts[MAX_ANIMATIONS];
out vec4 fragColor;

void main(){
  vec2 uv = (gl_FragCoord.xy / iResolution.xy) * 4.0 - 2.0;
  uv.y *= iResolution.y / iResolution.x;
  float time = iTime;  vec3 finalColor = vec3(0.0);  float maxAlpha = 0.0;
  for (int i = animationCount - 1; i >= 0; i--) {
    if (animationTypes[i] == 0) {                       // RING (hard-edged annulus)
      vec2 p = uv - ringPositions[i]; float dist = length(p);
      float ringAlpha = step(ringSizes[i] - ringThicknesses[i], dist) - step(ringSizes[i], dist);
      float angle = atan(p.y, p.x) + 0.2 * time * rotationSpeeds[i];
      float pinwheelAlpha = 1.0;                        // "pinwheel": ring cut into rotating arms
      if (armCounts[i] > 1.0)
        pinwheelAlpha = step(0.5 + 0.5*sin(armCounts[i]*angle + 0.2*time*rotationSpeeds[i]), 0.5);
      float a = ringOpacities[i] * ringAlpha * pinwheelAlpha;
      if (a > maxAlpha) { maxAlpha = a; finalColor = ringColors[i] * a; }
    } else if (animationTypes[i] == 1) {                // LINE (antialiased bar)
      vec2 p = uv - linePositions[i]; float ang = lineAngles[i], len = lineLengths[i], th = lineThicknesses[i];
      vec2 dir = vec2(cos(ang), sin(ang));
      vec2 s = linePositions[i] - dir*len/2.0, e = linePositions[i] + dir*len/2.0;
      float dist = abs(dot(p, vec2(-sin(ang), cos(ang))));
      float lineAlpha = smoothstep(th*1.2, th, dist) * (step(length(uv-s), len/2.0) + step(length(uv-e), len/2.0));
      float a = lineOpacities[i] * lineAlpha;
      if (a > maxAlpha) { maxAlpha = a; finalColor = lineColors[i] * a; }
    } else if (animationTypes[i] == 2) {                // DOTTED RING (n small rings on a circle, polar repetition)
      int n = dotRingDotCounts[i]; vec2 p = uv - dotRingPositions[i];
      float r = length(p), theta = atan(p.y, p.x) + dotRingAngles[i];
      theta -= (2.0*PI/float(n)) * floor((PI/float(n) + theta) / (2.0*PI/float(n)));
      p = r * vec2(cos(theta), sin(theta));
      float dist = length(p - vec2(dotRingRadii[i], 0.0));
      float ringAlpha = step(dotRingSizes[i] - dotRingThicknesses[i], dist) - step(dotRingSizes[i], dist);
      float a = dotRingOpacities[i] * ringAlpha;
      if (a > maxAlpha) { maxAlpha = a; finalColor = dotRingColors[i] * a; }
    }
  }
  fragColor = vec4(clamp(finalColor, 0.0, 1.0), 1.0);
}
```
Porting notes:
- The rings use hard `step` edges. On the web, swap in `smoothstep` with a pixel-width epsilon to anti-alias.
- `int` versus `float` comparisons need explicit casts in GLSL ES.
- A simpler route is to render each animation as its own SDF quad, or to pack the parameters into a float texture.

#### Palette (from the performance module)
```python
w = 0.7                       # "whiteness": pastel mixing
c0 = (1.0, 0.49, 0.49)        # red     (1.0, 0.7w, 0.7w)   -> #ff7d7d
c1 = (0.56, 0.56, 1.0)        # blue    (0.8w, 0.8w, 1.0)   -> #8f8fff
c2 = (1.0, 1.0, 0.7)          # yellow  (1, 1, w)           -> #ffffb3
c3 = (1.0, 0.7, 1.0)          # purple  (1, w, 1)           -> #ffb3ff
white = (1,1,1); black = (0,0,0)
# earlier trial palette: red (1,.1,.1), blue (.2,.2,1), purple (.5,0,.5)
```
**The Alice/Bob colour rule** (`performance_bruqner_4th_september.py`):
- The colour group depends on whether the two sides chose the same setting:
  - same setting (`alice_basis == bob_basis`): the **red/blue pair [c0, c1]**
  - different settings: the **yellow/purple pair [c2, c3]**
- Within the group:
  - Alice's colour comes from her outcome: group[0] if the outcome is +1 (even state index), otherwise group[1].
  - Bob gets **the same colour when the outcomes agree** and the other colour of the pair when they disagree.
- So colour agreement between the two rings shows the correlation directly.

Decoding the payload: OSC `/bruQner/graphics/` sends `[section, alice_state(1-4), bob_state(1-4), 'Q'|'C', motif_set]`.
- `basis = 1 if state <= 2`
- `outcome = 1 if state % 2 == 0`
- So each side's state 1 to 4 is the index of one of that organ's 4 motifs (2 settings × 2 outcomes).

Other colour sources:
- The BruQner app icon `visuals_icon.png` is two interlocking rings, **pure red `#db0000` and amber `#f3b124`**, on black.
- The later paper figures use red for Alice (a) and blue for Bob (b): see `Qrndwalk.jpg` and `Lightcones.jpg`, where photon A is red, photon B is blue-violet and the crossing points are yellow.
- The simulator UI uses a warm graphite plus amber design system (section 4.4).

#### Choreography per BruQner section (what it looks like)
Each event triggers the animation for the current section. `section_trigger_count` builds each section up over time.

1. **Section 1: twin rings drifting.**
   - Each event spawns two rings, Alice on the left and Bob on the right, at y = −0.3.
   - They fade in over 0.3 s, grow at 0.02/s, and fade out over the last 0.5 s of a 5.3 s life.
   - They drift **apart if the settings match and toward each other if they differ** (x speed 0.08).
   - Initial size grows from 0.01 to 0.71 and thickness from 0.02 to 0.08 over the first 10 events.
   - From events 5 to 9 a noise wiggle builds up (amplitude 0.008 × count, frequency 4), using the Shadertoy-style `smoothwiggle` value noise (https://www.shadertoy.com/view/7ss3RX).
   - Opposite rotation speeds ±0.5.
2. **Section 2: two persistent "breathing" rings.**
   - Size 0.5 at x = ±0.7, lifetime 3.428 s (4 beats at 70 BPM), so consecutive events chain seamlessly.
   - Each ring orbits a small circle (amplitude 0.06, one revolution per lifetime). Direction is set by that side's setting; the phases are 0 and π/2.
   - The wiggle modes step through the section:
     - events 1 to 4: size wiggle, same on both sides
     - events 5 to 8: thickness wiggle, same on both sides
     - events 9 to 12: size wiggle, different per side
     - events 13 to 16: thickness wiggle, different per side
     - after that: everything random
   - Motif set 3 instead gives "special" **dotted rings**: 3 staggered rings of 10 dots each, spinning at 2 to 2.5 rad/s.
     - Alice's rings *fall inward* (radius 2 − 1.5t, delay 2.2 s).
     - Bob's rings *grow outward* (radius 1.5t, delay 0.4 s).
3. **Section 3: nested ripples.**
   - At a random position, 2, 3 and later 4 concentric rings grow from zero (size 0.13t), launched 1.1 s apart.
   - Colours step from [Alice, Bob] to [Alice, white, Bob] to [white, Alice, white, Bob].
   - Thickness rises from 0 to 0.14 and falls away over a 6 s life.
4. **Section 4: "Quantum rings vs classical lines."**
   - **In quantum mode:** two thick rings (size 0.3, thickness 0.08) at x = ±0.4, wandering on Perlin noise with size wobble.
   - **In classical mode:** a single **white line** of infinite length (length 100, thickness 0.02) through a random point, rocking in angle by `max_angle·sin(0.5t+φ)`.
   - This is the site's strongest visual metaphor: **entangled = circles, classical = straight lines**.
5. **Section 5:** one very slow, dim white line drifting on Perlin noise with a lifetime of 1000 s. The code's TODO calls it "starry night / slow and dim background."
6. **Section 6: pinwheels.**
   - Two rings (size 0.5) with **random arm counts from 2 to 10**, so they are cut into rotating spokes.
   - They spin at ±2 depending on each side's setting.
   - They swing horizontally as `±0.9·cos²(πt/3.428)`, meeting and parting, with a Perlin y-jitter.
7. **Section 7: dotted-ring build-up and climax.**
   - **Quantum:** two dotted rings at x = ±0.5, counter-rotating.
     - Dot count is `1 + |25 − trigger_count|`: it shrinks to a single dot at event 25, then grows again.
     - Dot size grows with the event count, and colours are randomly chosen from c0 to c3.
   - **Classical:** one horizontal white line that bobs sinusoidally, its amplitude growing over events 15 to 40.
8. **Section 8: "Variations of Perger Präludium" (finale).**
   - A huge white arc: a ring of size 2.2 centred at (0, −2.1), like a horizon or dome.
   - Two black bars (thickness 2) slide apart over about 22 s (150 s on the 6th) to reveal it, then close again.
   - The 6th-September file has cue timestamps from a recording: "00:28 upswing … 06:33 final long held note, 06:46 ending".
- Extras: section 100 is a white line slowly growing to 2.5 units over 4 minutes. Section 200 is a white dotted ring expanding.

Other BruQner visual controls:
- Keyboard `r` triggers a random event, `q` toggles quantum/classical, `0` to `9` set the section.
- Phone triggers came in over OSC `/bruQner/visuals/manual` (thesis figure `phone_osc.png`).

#### The noise helpers used (easy to port to JS)
```python
def smoothstep(e0,e1,x): x=max(0,min(1,(x-e0)/(e1-e0))); return x*x*(3-2*x)
def smoothwiggle(t, frequency, seed, octaves=1):   # value noise, from shadertoy 7ss3RX
    wiggle=0
    for o in range(1,octaves+1):
        t*=frequency*o*o; a=R([floor(t),seed])*2-1; b=R([ceil(t),seed])*2-1
        t-=floor(t); wiggle+=mix(a,b,smoothstep(0,1,t))
    return wiggle
# plus a 1D Perlin noise with fade t^3(t(6t-15)+10)
```

### 2.2 Random-walk prototypes (these led to 8 Rooms)
- `archive/visuals_python_glsl/other_visual_ideas/random_walk.ipynb`: two walkers, one red and one green, plus their blue midpoint. Each step samples HH/HV/VH/VV from the simulator's probabilities; H moves a walker in x and V moves it in y.
- The notebook's own conclusion: individual steps are correlated, but the walk shows no visible structure. It suggests colouring moves by agreement, or letting the midpoint stay in a tighter circle when correlated.
- `multi_walker.py`: 10 walkers in a 2×5 grid of rectangles, each drawing a white trail (up to 100 points) on black.

### 2.3 TouchDesigner (8 Rooms and Indeterminate Apparatus)
- **The TouchDesigner project files (.toe/.tox) are not in this repo.** The docs mention only: "TouchDesigner, spectral landscapes" (8 Rooms), and for Indeterminate Apparatus "point cloud morphing (particle → strange attractor → experiment model)", inspired by "Point Cloud Sandbox, coalescence morphing techniques."
- The one TouchDesigner asset here is the experiment scan in `data/pointclouds/` (section 7) and its converter for a "point cloud sorting .tox".
- Visuals ran on a screen behind the performers; haze was dropped for fire safety.
- OSC to TouchDesigner in 2025 was `/TUQ/BENNYPC [aliceSetting0/1, bobSetting0/1, aliceOut0/1, bobOut0/1]`, sent to 192.168.0.5:10000, plus `/TUQ/Alice [..]`.
- **Suggested three.js morph** that recreates the TouchDesigner idea: random particles, then a strange attractor (Lorenz/Aizawa), then the experiment point cloud, all at the same point count, lerping positions in a vertex shader.

---

## 3. Recorded data

### 3.1 `data/Quantum_Music_2.8.csv` and `data/Quantum_Music_1.4.csv`
- Each has 10,000 rows and no header: `setting_a, setting_b, result_a, result_b`. Settings are in {1, 2} and results in {−1, +1}. Sizes are 100 KB and 94 KB.
- **These are not real measurements.** `osc_communicator.py` calls them "Johannes' historical test data". They were generated as backup/fallback streams.
  - The 2.8 file gives S = **2.761** with balanced TT/RR (0.34 each).
  - The 1.4 file gives S = **1.422**, with E(1,1) ≈ 0.70, E(1,2) ≈ 0.71, E(2,1) ≈ 0 and E(2,2) ≈ 0, and a strong (+1, +1) bias of 64%. That looks like a local-hidden-variable-style model.
- Useful as a "quantum vs classical" A/B pair, but they should be labelled as simulated.
- Sample rows (2.8): `1,1,-1,-1 / 1,2,-1,-1 / 2,2,-1,1 / 2,2,1,1 / 2,1,1,1`

### 3.2 Real performance logs in `logs/`
**These are gitignored (`logs/*.txt`), so they exist locally only.** They are plain Python logging text.

| File | Size | Content |
|---|---|---|
| `bruQner_main_performance_log.txt` | 1.4 MB, 18,105 lines | **BruQner premiere, 2024-09-04, 22:12:56 to 23:31:37.** 18,077 measurements, plus `State Changed to:` markers (Q_all, Q_diagonal, C_diagonal, C_single). |
| `bruQner_second_performance_log.txt` | 1.8 MB | 2024-09-06, 15:18 to 17:13, 23,648 measurements. |
| `osc_log.txt` | 30 MB, 395,647 lines | 2025-01-20 to 2025-11-19: every 8 Rooms and Indeterminate Apparatus session. About 226k measurements, plus incoming Max messages (see section 5). |

Line format:
```
2024-09-04 22:12:56,222 - INFO - Measurement [1, 2, -1, -1] sent to Clemens
2025-01-25 21:07:50,809 - INFO - Measurement [2, 2, -1, -1] sent to Enar        (the same event is duplicated to the visuals PC)
2025-10-03 14:34:13,516 - INFO - Received OSC_message: (2.0,) with address: /TUQ/S-VALUE/
2025-10-03 14:34:13,730 - INFO - Received OSC_message: (93,) with address: /TUQ/Tempo/
```
Payload: `[alice_setting(1|2), bob_setting(1|2), alice_result(±1), bob_result(±1)]`.

BruQner modes (from `metronome_clicks.ipynb`, HWP angles):

| Mode | Angle pairs | Behaviour in the logs |
|---|---|---|
| `Q_all` | all four CHSH pairs | S ≈ 2.3 to 2.4 over long blocks |
| `Q_diagonal` | only (a,b) and (A,B) | |
| `C_diagonal` | (0,−45) and (22.5,−22.5): anti-correlated | E(1,1) ≈ −1 |
| `C_single` | the single pair (−45,−22.5) | only (2,2) settings, E(1,1) ≈ −1: perfectly predictable |

In the BruQner premiere, the long C_single stretch (22:49 to 23:00, 4,139 events) is followed by Q_all.

**Caveat for the "live" feel:** real data has detector-imbalance marginals, for example 8 Rooms 2025-01-25 is TT 16%, TR 22%, RT 11%, RR 50%. That is real, but visibly skewed.

### 3.3 Embedding (done)
The two excerpts in `scratchpad/research/data/` are about 10 KB each, 2,000 events:
```json
{"source":"8rooms_wissenschaftsball_2025-01-25","start":"2025-01-25T21:07:50.809","count":2000,"S":2.554,
 "encoding":"one hex digit per event = (aliceSetting-1)*8 + (bobSetting-1)*4 + outcome; outcome 0=TT 1=TR 2=RT 3=RR",
 "events":"3393b5133d7d37ba37dd3e47...", "dt":[0,528,527,...]}
```
- `bruqner_premiere_2024-09-04.json`: Q_all section from 23:00:10, S = 2.222 over this excerpt.
- `8rooms_wissenschaftsball_2025-01-25.json`: from 21:07:50, S = 2.554, with a metronome-locked 528 ms cadence.

Decoding in JS:
```js
const v = parseInt(ch, 16);
const a = (v >> 3) + 1, b = ((v >> 2) & 1) + 1, o = v & 3;
const [x, y] = [[1,1],[1,-1],[-1,1],[-1,-1]][o];
```
- A full session (about 60k events) would be about 60 KB of hex plus the timings. Timings can be dropped for metronome sessions.
- A live rolling S over the replay makes a nice "S meter". It crosses 2 after a few hundred events.

---

## 4. Simulator (`simulator/`, excluding `.venv`)

### 4.1 What it is
The "TSOE Bell Simulator" is a standalone, cross-platform Python package (`tsoe-bell-sim`) with a FastAPI plus WebSocket web UI (`static/index.html`, `app.js`, `style.css`). It emits the **same OSC messages as the real rig**, so Clemens can compose in Max/MSP without the hardware. Presets are YAML (`configs/default.yaml`).

### 4.2 How it generates data (`physics.py`, `runner.py`)
- The state is a Werner mixture: ρ = V·|Φ±⟩⟨Φ±| + (1−V)·I/4. **A target S sets V = S_target / S_pure.**
- Each HWP is modelled as a Jones reflection matrix `[[cos2θ, sin2θ],[sin2θ, −cos2θ]]`. Probabilities are the diagonal of (U_A⊗U_B)ρ(U_A⊗U_B)†, in the order HH, HV, VH, VV, which maps to TT, TR, RT, RR.
- Each cycle picks one of the 4 CHSH angle pairs uniformly, samples one outcome, and emits `[setting_a, setting_b, result_a, result_b]` plus a click, **every 0.52 s** (with optional jitter).

**Closed form (verified numerically against `physics.py`)** for HWP angles in degrees:
```
Φ+ :  E(a,b) = V·cos(4(a − b))      Φ− :  E(a,b) = V·cos(4(a + b))
P(TT) = P(RR) = (1 + E)/4           P(TR) = P(RT) = (1 − E)/4
```
Each side's marginal is always 50/50, which the `theory.ipynb` note stresses.

Results:
- Default quantum angles `alice [0, 22.5]`, `bob [11.25, −11.25]` give S = 2.828 for Φ+.
- The classical angles `[0, 22.5, 32, 22.5]` give only S = 0.83 (Φ+) or 0.40 (Φ−) in this pure model. The real rig's roughly 1.4 comes from its imperfect state. For an honest "classical" demo, use a target of about 1.4 via lower visibility, or a local-hidden-variable model.

### 4.3 Client-side JS port: yes, it is trivial
```js
function sampleEvent({V = 0.866, quantum = true} = {}) {   // V = 2.45/2.828 → S ≈ 2.45
  const A = [0, 22.5], B = quantum ? [11.25, -11.25] : [32, 22.5];
  const sa = Math.random() < .5 ? 0 : 1, sb = Math.random() < .5 ? 0 : 1;
  const E = V * Math.cos(4 * (A[sa] - B[sb]) * Math.PI / 180);      // Φ+
  const r = Math.random(), pSame = (1 + E) / 2;                       // P(TT)+P(RR)
  const same = r < pSame, x = Math.random() < .5 ? 1 : -1;            // marginals 50/50
  return { a: sa + 1, b: sb + 1, x, y: same ? x : -x };
}
```
- This reproduces the correct CHSH statistics.
- Pair it with a rolling S estimator and a "target S" slider to make an interactive Bell test in the browser.
- Add a toggle for a local-hidden-variable model to show S capped at 2.

### 4.4 OSC addresses
From `simulator/src/bruqner_sim/protocol.py`, the single source of truth, which a test syncs with `src/bruqner/osc_communicator.py`:

| Direction | Address | Payload |
|---|---|---|
| out | `/TUQ/measurement_result` | `[setting_a, setting_b, result_a, result_b]` |
| out | `/TUQ/klick` | `1` (metronome pulse) |
| out | `/TUQ/visuals/manual` | same as measurement (for TouchDesigner) |
| in | `/TUQ/State/` | 1 = quantum, 0 = classical |
| in | `/TUQ/mode` | "quantum", "classical", "custom", or 1/0 |
| in | `/TUQ/request_measurement` | none, or `[sa, sb]` |
| in | `/TUQ/angles` | `[a0, a1, b0, b1]` in HWP degrees |
| in | `/TUQ/run`, `/TUQ/pause`, `/TUQ/reset` | transport controls |
| both | `/TUQ/connection_test/request`, `/TUQ/connection_test/response` | round-trip test |

Historical addresses (2024 BruQner visuals): `/bruQner/graphics/`, `/bruQner/visuals/{ring,manual,change_section,is_quantum,clear}`, `/TSOE/section/N`.

Simulator UI design tokens (`static/style.css`, "instrument-panel" style), useful as a reference:
- background `#0c0b09`, surfaces `#15130e` / `#1c1914`
- text ("paper") `#f0e9d8`, dimmed `#a39d8a`
- **amber `#f0a93a`**, green `#74cf86`, red `#e85a3c`
- fonts: JetBrains Mono, plus Instrument Serif italic for accents
- a faint 40 px grid
- the favicon is an amber "S" curl with two dots and a four-point sparkle on `#13100c` (`static/favicon.png`)

---

## 5. Music mapping per piece

### BruQner (2024, two organs, based on Bruckner's "Perger Präludium", WAB 129)
- 8 motifs: 4 per organ. **Organ A = Alice, organ B = Bob.**
- Each motif is labelled **A1+ A1− A2+ A2− / B1+ B1− B2+ B2−**: setting (1 or 2) × outcome (±).
- The score is `D:\Programming\The-Sound-of-Entanglement\Clemens figures\Figure_Motivset_BruQner 4.png`. The motifs are short two-bar figures: staccato repeated notes, triplet cells, and chromatic triplet runs such as C–B♭–B♮. The + and − versions **cross-map between the organs**: A1+ is the same figure as B1−, and A1− is the same figure as B1+. So correlation or anti-correlation becomes audible as unison versus alternation.
- Polyrhythmic combinations. Instructions went to the organists on iPads over the local network (EasyScore/VexFlow side-scrolling notation was considered).
- The visual payload carried the section (1 to 8), the motif state per side (1 to 4), Q/C, and the motif set.
- Quantum/classical switching used modes Q_all, Q_diagonal, C_diagonal and C_single.

### 8 Rooms (2025, band: Clemens on keys, plus bass and drums, with improvisation)
- A "2D quantum random walk on an 8-room grid". The Elliptec **motor clicks are the metronome** (about 528 to 536 ms, picked up by a contact microphone).
- `Qrndwalk.jpg` (paper repo) shows the axes: **setting 1 moves along x, setting 2 moves along y, and the outcome ±1 gives the direction**. Alice is red, Bob is blue.
- "Clicking motives" (`8 ROOMS - clicking motives mit beschriftung.png`): each of A1± A2± B1± B2± is a distinct **click rhythm pattern over about 2 s**, shown as orange/blue waveform spikes on black. That is a great visual reference for a dark site.
- Room transitions are based on correlations. OSC `/TUQ/Room/`, `/TUQ/x` and `/TUQ/y` go from Clemens to the visuals.
- Ball mode switches quantum and classical by changing the wave-plate angles.
- In the logs, Clemens sends back `/TUQ/Alice/` and `/TUQ/Bob/` with values 1 to 4 (the motif index), and `/TUQ/Metronome/` counting 1 to 6 (a 6-beat cycle).

### Indeterminate Apparatus (premiered at CIVA, 2025-10-03)
- Three parts (`docs/performances.md`):
  1. quantum, target 90 BPM, techno, about 7 min
  2. classical, 70 BPM, atmospheric and minimal, 6 to 7 min
  3. quantum, 110 BPM, techno, 6 to 7 min
- **The S-value controls the tempo.**
- Clemens plays a vocoder synth: left hand = Alice, right hand = Bob. **Sound only happens when both hands play together**, standing for a coincidence. Manu and Judith keep the pulse in the classical part.
- From the logs, Max computes a short-window S and sends `/TUQ/S-VALUE/` (values 0 to 4, often thirds such as 1.333 or 2.667), `/TUQ/MeasurementCount/`, `/TUQ/Tempo/` and `/TUQ/CIVASection/` (1 to 7).
- Tempo against the last S value, from 2025-10-03 and 2025-11-19 (it is non-linear and smoothed):

| S (short window) | 0 | 0.5 | 1.0 | 1.5 | 2.0 | 2.5 | 3.0 | 3.5 | 4.0 |
|---|---|---|---|---|---|---|---|---|---|
| mean BPM | 42 | 47 | 56 | 67 | 86 | 101 | 146 | 219 | 269 |

  The floor is about 38 to 40 BPM. Roughly: BPM ≈ 40·e^(0.4…0.48·S).

### Notebooks on outcome-to-music mapping
None of the notebooks contains the musical mapping itself; that lives in Clemens's Max/MSP patches, which are not in this repo. The notebooks cover only the angle-set dictionaries, the formatting of `[setting_a, setting_b, ±1, ±1]` ("resultClemensFormat") and the metronome timing.

---

## 6. Images and figures

### In this repo
| Path | What | Website value |
|---|---|---|
| `archive/visuals_python_glsl/visuals_icon.png` (246 px) | Two interlocking rings, red and amber, on black | **High.** Logo seed. |
| `simulator/src/bruqner_sim/static/favicon.png` (256 px) | Amber curl or "S" with a sparkle, on dark | Medium |
| `data/pointclouds/*.pts` | 3D scan of the experiment | **High** (section 7). Renders are in `scratchpad/research/figs/pc_xy.png` (top-down: breadboard, quED box, red and blue mounts, yellow Elliptec boards) and `pc_xz.png` (front). |
| `notebooks/figures/for_thesis/for_thesis_figures.ipynb` → `figs/for_thesis_figures_c1_0.png` | BBO refractive index (nₒ/nₑ) against wavelength, with 405 and 810 nm marked, grey gradient | Medium; restyle for dark |
| same → `figs/for_thesis_figures_c3_0.png`, and `notebooks/figures/for_thesis/delay_adjustment.pdf` | 3D "before/after delay adjustment" peaks (Alice_T/R, Bob_T/R) | Low to medium. **Note: synthetic Gaussians, not real data.** |
| `notebooks/figures/latency_testing` → `figs/latency_testing_c0_0.png` | OSC latency histograms (Linz big and small, Uni LAN, Uni WLAN) | Low |
| `notebooks/calibration/pairwise_bell_test.ipynb` → `figs/pairwise_bell_test_c17_1.png` | Simulated same versus mixed counts against wave-plate angle (the crossing cos² curves) | Medium as an idea for a Malus-law/correlation-curve graphic |
| `archive/.../random_walk.ipynb` → `figs/random_walk_c5/6/7` | Bloch spheres; "Qubit 1 / Qubit 2" circles | Low |
| `mintlify-docs/` | No images. The referenced `/images/spdc-diagram.svg` does not exist; `favicon.svg` is a purple circle `#7C3AED`. | none |

### Sibling repos (outside scope, but clearly the best material)
**Check copyright before using any of these.** The performance photos are credited "© Land OÖ / Andreas Krenn".

- `D:\Programming\The-Sound-of-Entanglement\Figures\`:
  - `Lightcones.jpg`: a painted red and blue SPDC cone with yellow crossing points ("Photon A / Photon B")
  - `Cones.png`
  - `Qrndwalk.jpg`, `Qrndwalk28.jpg`
  - `setup_top_down.png`, `SetupLabelledBeamPaths.png`, `Bell_setup_sketch.jpg`
  - `8Rooms_Graphics.png`, `8roomsclicks*.jpg`
  - `performance_layout.png`
  - `sheet_music*.png`
  - `BruQner Bilder_7*.jpg`
  - `20250414_JHU_Science_2345.jpg`
- `...\Clemens figures\`: `Figure_Motivset_BruQner 4.png`, `8 ROOMS - clicking motives …png`, `softwareGraphicsLive.png`, `Software-1.jpg`
- `...\Photos performance\`: Neuer Dom photos (Andreas Krenn), `bruqnerthe-sound-of-entanglement-.jpg`
- `...\Clemens Soundfiles\`: audio, possibly usable for the site
- `D:\Programming\Master-Thesis\sections\...`:
  - `whole_setup_photo.png` and `whole_setup_photo_beams.png` (13 MB each)
  - `perf_pic_1.jpg`, `perf_pic_2.jpg`
  - `qutools_with_controller.png`, `spcm_holder.png`, `alignment_plates.png`
  - `visuals/lambda_func_simple.jpg`, `visuals/phone_osc.png`, `animation_class_structure.png`
  - `haydn_dice_game_score.png`, `xenakis.jpg`

---

## 7. Point clouds (`data/pointclouds/`)
- `TSOE_Setup_pointcloud.pts` (34.7 MB). The first line is the count, **641,980**; then one point per line: `x y z scalar r g b` with 0 to 255 integer colours. The scalar is always 128.
- `TSOE_Setup_pointcloud_floatcolors.pts` (48.9 MB) is the same data with a header `X Y Z Scalar_field Rf Gf Bf` and 0 to 1 float colours. It was made by `rbgcolors_to_floatcolors.py` for a TouchDesigner point-cloud-sorting .tox.
- **Contents:** a **Polycam 3D scan of the actual Bell experiment breadboard**. Seen top-down: the black breadboard, the large quED source box, the white QuTools controller or box, red and blue kinematic/rotation mounts, the yellow Elliptec driver boards, fibre couplers and cables.
- Extent is about 1.02 × 1.02 × 0.28 in scan units. Z runs from 1.146 to 1.428, so the geometry needs centring. That is larger than the documented 600 mm board, so the units are approximate or the scan includes the surroundings.
- Colours are dark overall (mean RGB 62/57/46), which suits a dark site well. Additive blending or an emissive boost will make the red, blue and yellow parts glow.
- **Browser feasibility with three.js: yes.**
  - Convert to binary: Float32 xyz plus Uint8 rgb is 15 bytes per point, so the full cloud is about 9.6 MB (about 5 to 6 MB gzipped).
  - Better, decimate to 150k to 250k points (about 2 to 4 MB), or quantise positions to Uint16 (9 bytes per point).
  - Alternatively ship `.ply` or `.pcd` and load with `PLYLoader`/`PCDLoader`, or use a Draco-compressed `.drc`/glTF points.
  - Render with `THREE.Points` plus a small `ShaderMaterial` (size attenuation, soft round sprites). 200k points renders easily at 60 fps on laptops and phones.
  - Morph idea from the TouchDesigner show: noise, then Lorenz attractor, then this scan.

---

## 8. Other small facts (possible copy or easter eggs)
- Elliptec home offsets: Alice 9°, Bob 317° (−43°).
- Typical delay corrections: before, Alice_R −523 ps, Bob_T −750 ps (−225 mm of light path); after, within about 22 ps.
- The detector-efficiency notebook notes that closing the detection loophole needs η > 2/(1+√2) ≈ 82.8%. The setup does not close loopholes: Alice and Bob are 30 cm apart and settings are chosen by a pseudo-random `random.choice`. **The site should not claim a loophole-free test.**
- Known issue: there is no automatic fallback to simulated data. Clemens can switch manually to "backup data" (the Quantum_Music CSVs).
