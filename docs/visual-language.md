# Visual language

This describes what the project already looks like: the visual grammar that
exists in the performances, the paper figures and the photos. The website's
design should grow out of it rather than invent something unrelated. Decisions
about the website's own design system are recorded in `design/DECISIONS.md`
once they are made. Design exploration is in `design/`.

## The grammar from the performances

| Element | Meaning | Where it comes from |
|---|---|---|
| **Circles / rings** | entanglement (quantum sections) | BruQner visuals, "Circles – Entanglement" |
| **Straight lines** | classical sections (S ≤ 2) | BruQner visuals, "Lines – Classical" |
| **Cones of light** | the SPDC emission cone, where the photon pairs are born | rings projected into haze become cones in the air |
| **Two sides** | Alice (left/red) and Bob (right/blue) | every figure; stereo clicks; the organs; the VoQoder's two hands |
| **White hairlines on black** | 8 Rooms: histograms of the half-wave-plate clicks growing into landscapes | TouchDesigner, 2025 |
| **Point clouds** | Indeterminate Apparatus: pixels scatter when S is chaotic and form an image as it settles; the classical part shows the scanned experiment | TouchDesigner, CIVA 2025 |
| **The glowing glass case** | the experiment on stage, lit from inside | every show |
| **The click** | a measurement setting being chosen, used as a metronome | 8 Rooms |

## Colours used so far

| Name | Value | Use |
|---|---|---|
| Alice red | `#ff7d7d` (performance) · `rgb(245,111,111)` (paper) | Alice; red cone; used when both sides chose the same setting |
| Bob blue | `#8f8fff` (performance) · `rgb(160,180,241)` (paper) | Bob; blue cone |
| Photon yellow | `#ffffb3` | Alice/Bob pair colour for *different* settings; entangled pair points in `Lightcones.jpg` |
| Violet | `#ffb3ff` | partner of yellow |
| Pump violet | ≈ `#7a5cff` (405 nm) | the pump laser, the only visible light in the experiment |
| Source grey | `rgb(200,200,200)` | the source in paper diagrams |
| BruQner icon | red `#db0000` + amber `#f3b124` rings on black | the 2024 visuals app icon |

**BruQner colour rule** (from `performance_bruqner_4th_september.py`): if Alice
and Bob chose the same setting, the ring pair uses red/blue; if they chose
different settings, yellow/violet. Alice's colour comes from her outcome, and
Bob gets **the same colour when the outcomes agree**. Colour agreement shows the
correlation directly.

Stage photos add cool blue-white haze, cathedral amber, deep indigo, and the
red/orange of the kinematic mounts inside the case.

## Existing typography and branding

- **Wordmark**: "THE SOUND OF ENTANGLEMENT" in **Josefin Sans** (Bold/Regular)
  with a thin waveform line and a red chevron. It exists only as PSD/PNG
  (`Logos/`, `Design and Media/`). There is no vector logo.
- BruQner's serif variant uses Richmond Display/Text.
- The current soundofentanglement.com uses Space Mono and Bebas Neue on white.
  That was not deliberate branding; it's fine to leave behind.
- Team slide: duotone portraits in steel blue, black and plum.

## The BruQner visuals in detail

A single GLSL fragment shader (`D:\Programming\BruQner\bruQner\archive\visuals_python_glsl\fragment_shader.glslf`)
draws up to 30 layered animations: **ring** (with optional rotating "pinwheel"
arms), **line**, and **dotted ring**, keeping the most opaque layer per pixel.
Every parameter is a function of time (the "lambda" system). Each measurement
event triggers the animation for the current section. The 8 sections:

1. twin rings drifting apart (same settings) or together (different settings)
2. two persistent "breathing" rings orbiting small circles
3. nested ripples: 2–4 concentric rings growing from a random point
4. quantum: two thick wandering rings; classical: a single white line rocking
5. one slow, dim white line ("starry night")
6. pinwheels: rings cut into 2–10 rotating arms, swinging together and apart
7. dotted rings counting down to a single dot at event 25, then growing again (classical: a bobbing line)
8. finale: a huge white arc like a horizon, revealed by two black bars sliding apart

Full notes and the shader source: `research/bruqner_repo.md` §2. It ports to
WebGL2 almost unchanged.

## Photographic character

Dark, high-contrast, with light only where something is happening: projected
light in haze, the lit case, the white-line screen. Most of the best images are
90% black. That suits a dark site, but crops must keep the light shapes intact.
