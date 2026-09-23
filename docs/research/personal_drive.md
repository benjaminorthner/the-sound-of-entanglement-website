# The Sound of Entanglement: asset catalogue for Benjamin's personal Google Drive

Source root (read-only, nothing was modified): `H:\My Drive\TU Wien\Project Works\TSOE`
In this document, `ROOT` = `H:\My Drive\TU Wien\Project Works\TSOE`. Every path below is `ROOT\...`. **Appendix A** at the end repeats every catalogued image with its full absolute path and pixel size, which matters for the long Ars Electronica/Flickr file names.

Catalogued on 2026-09-23. Helper files in the scratchpad (`...\scratchpad\research\`):
- `sheets\*.jpg` are labelled contact sheets, with `*_index.txt` mapping each number to a file.
- `frames\` holds video frame grabs.
- `text\` holds the text extracted from the PDFs and PPTXs.
- `dpgmedia\` holds videos copied out of the DPG pptx.

---

## 0. TL;DR: best assets

| Use | Asset | Why |
|---|---|---|
| **Hero / landing** | Ars Electronica photo `..._53973053449_o.jpg` (4000x2667) | Taken from the gallery. A blinding white-blue starburst of projector beams radiates through haze over a packed cathedral nave, with the Gothic altar and crucifix above. Deep indigo and violet. Very striking. |
| Hero, alt 1 | Ars Electronica `..._53973168965_o.jpg` | Huge pale-cyan smoke and cloud projection sweeping diagonally over the altar. Silhouetted crowd with phones in the foreground. Painterly, abstract. |
| Hero, alt 2 | `Land OÖ photos\BruQner (c) Land OÖ Andreas Krenn (27).jpg` | A fan of haze beams (violet on the left, pale olive/gold on the right) converging on one bright point. The operator's silhouette sits at the bottom. Almost pure abstraction. |
| Hero, alt 3 (setup macro) | `BruQner Stills\BruQner_Stills_1.14.1.jpg` (3840x2160, a weitblickfilm film still) | A violet 405 nm laser beam leaves the quED laser module and passes through optics. Shallow depth of field, dark navy and violet with a yellow "LASER APERTURE" label. The perfect "the experiment" image. |
| Physics page / setup | `Presentations\EFS Application Presentation\DSCF9327.jpg` (6003x3947) | Top-down 3/4 view of the complete setup inside its glass case, framed by an LED strip. You can see the quTools source, red rotation mounts, blue mirror mounts and the Swabian Time Tagger Ultra. Dark and crisp. |
| Physics page, annotated | `Figures\setup for performnce presentation\BruQner Setup\1.png ... 4v2.png` (5219x3463) plus `Figures\Inkscape\Setup\simplified setup\SetupLabelledBeamPaths.png` | Overhead photo of the setup with painted red and blue beam paths and "ALICE"/"BOB" zones. The second file adds a clean labelled beam-path diagram (A=±1, B=±1). |
| **3D / three.js** | `3D Models\Polycam\main setup\TSOE_Setup_pointcloud.ply` (16.5 MB, 641,980 coloured points) | A photogrammetry point cloud of the entire breadboard setup, which I verified by rendering it. It is ideal as an abstract rotating particle model. |
| Video loop | `Media\Performance pictures\Linz Ars Electronica BruQner\2025-03-15 00-39-54.mp4` (1920x1080, 32.5 s) | A dark macro of the optics with red rotation mounts and a haze beam glowing behind. |
| Video loop (visuals) | `Touchdesigner\Ball der Wissenschaften 2025\TouchDesigner Ideas\PPTMovie*.mov` (1280x720, 5 s each) | Monochrome wireframe and audio-spectrum landscapes on black. They are ready-made abstract loops. |
| Team page | `Media\Team Title Slide\TSOE Team Slide_notext.png` (3858x2170) | Eight duotone portraits in vertical strips (steel-blue, black and plum), with names and faint uni logos. The PSD (163 MB) probably holds the separate portrait layers. |
| Audio sample | `Media\Audio Samples\Ball der Wissenschaften\TUQ_lastset_cut_excerpt.mp3` (4:32) and `...excerpt2.mp3` (4:38) | The Uncertain Question band at the Science Ball 2025. These are ready-cut excerpts. |
| Data for a live-ish viz | `MAX\Used Data from BruQner Performance\BruQner_UA.json` | The actual 127 measurement-driven events used in the BruQner performance: section, Alice motif, Bob motif, Q/C flag and a count. It could drive a fake "live" visual on the site. |
| Copy (EN) | BruQner folder text, the quantA article, the DPG abstract and the Falling Walls interview | Quoted verbatim in section 6. |

---

## 1. Folder tree overview

| Folder | Files | Size | Relevance |
|---|---|---|---|
| `3D Models` | 6 | 176 MB | **High.** Polycam point clouds of the setup. |
| `Alain Aspect Presentation` | 29 | 350 MB | Low. Phone photos and audio of Alain Aspect's lecture at TU Wien on 21 June 2024, plus a selfie of Benjamin with Aspect. |
| `Audio` | 3 | 105 MB | Medium. Phone recordings of the full Linz performances (low bitrate). |
| `Figures` | 164 | 1.4 GB | **High.** Setup photos with beam overlays, Inkscape diagrams, CAD renders, the visuals flowcharts, the section video clips, sheet-music figures and floor plans. |
| `Inventor` | 126 | 357 MB | Medium. Autodesk Inventor assemblies, plus Thorlabs STEP and OBJ parts. |
| `Johannes Code` | 6 | 4.8 MB | Low to medium. Mathematica simulation of Bell data, CSVs, and an email explaining the quantum and classical datasets. |
| `MAX` | 8 | 38 KB | Low to medium. Max/MSP latency-test patch and data, plus the BruQner performance data JSON. |
| `Media` | 286 | 1.4 GB | **Very high.** Performance photos (Ars Electronica, Land OÖ, weitblickfilm stills, Science Ball), press PDFs, the title design, the team slide, timelapses and audio samples. |
| `papers` | 6 | 18 MB | Low. Reference literature, not the project's own publications. |
| `Presentations` | 40 | 719 MB | High. The EFS talk (with speaker notes), the DPG 2025 talk plus abstract, and embedded media. |
| `Setup Software` | 1 | 0.6 MB | None. A Thorlabs protocol PDF. |
| `Touchdesigner` | ~300 | large | Medium to high. TouchDesigner projects per show (Science Ball, Washington, Millstatt, EFA Alpbach, CIVA, Palermo) with visual loops and audio stems. |
| `TSOE Docs` | 1 | 0 KB | `On Tour 2025.gdoc` is a cloud-only Google Doc stub that cannot be read locally. **It likely contains the 2025 tour list and is worth opening in Drive.** |
| Root-level files | 9 | ~9 MB | `setup layout.jpg`, `setup sketch.jpg` and `quED measurements _240228_174747.jpg` are early hand-annotated planning sketches. `BruQner_UA.json` duplicates the MAX data. The rest is private or order paperwork (see below). |

**Private folders, noted only (not catalogued, nothing copied):** `Bills` (56 files), `Payments and Finances` (3), `Thorlabs orders` (3), `Transport Documents` (4), `Qutools` (8), `Swabian Instruments` (1).

These root-level and Media files are also private and should not go on the site:
- `ROOT\BruQner Shopping Cart.xls`, `ROOT\Quotation_MQ305239_325197.pdf` and `ROOT\order sheet qutools.jpg` (the last is an invoice photo).
- `Media\Performance pictures\Angebot TU Wien Atominstitut Einzeltransport ... Washington_PH.pdf` (a transport quote).
- `Media\Organisation Plans\Dispo_Bruqner_Vorab.pdf` and `Media\camera filming plan.pdf`. These are the film-crew call sheets (weitblickfilm, 2–4 Sept 2024) and contain phone numbers and hotel details. They are internal.
- `Presentations\EFS Application Presentation\EFS Assesment.pptx` is a job-application data task and unrelated to the project.

---

## 2. Images (viewed): descriptions and ratings

Rating scale: **H** = hero/landing, **P** = piece page, **Ph** = physics page, **G** = gallery, **T** = team. Stars 1–5.

### 2.1 Media\Performance pictures\Linz Performances\Ars Electronica Photos (65 JPGs, mostly 4000x2667)
Folder: `ROOT\Media\Performance pictures\Linz Performances\Ars Electronica Photos\`

These are official Ars Electronica festival (Flickr) photos of BruQner at the Mariendom Linz, 4 and 6 Sept 2024. Credit is probably "Ars Electronica / [photographer]" (Flickr ids 5386…–5397…), so check the credit on Ars Electronica's Flickr. The file names are
`bruqnerthe-sound-of-entanglement--clemens-wenger-at-...-philipp-haslinger-at_<FLICKRID>_o.jpg`. There are a few variants, so see Appendix A for exact names.

Standouts (by Flickr id):
- **53973053449**: ★★★★★ **H**. The starburst of projector beams over the crowd in the nave, shot from the gallery. The altar and crucifix sit top centre, the "PART 7 OF 7 – Finale Vivace Reflection" screens are visible, and there are indigo, violet and white highlights. It is the single most iconic image. The same file is also in "Show to people".
- **53973168965**: ★★★★★ **H/P**. Cyan-white smoke clouds projected diagonally across the altar. Black silhouettes of the audience and phones sit in the foreground. Moody and painterly.
- **53972967048**: ★★★★★ **H/P**. Cloud projections float on the vault above the altar. In the centre foreground is the glowing glass case with the experiment and the operator behind it. This shows the experiment as an altarpiece.
- **53972967143**: ★★★★ **P**. A cloud projection in the nave between pillars, with dark and warm tones.
- **53973168985**: ★★★★ **P/Ph**. The illuminated glass case in the foreground, the operator (Benjamin) lit from below, and the crucifix above.
- **53973169020**: ★★★★ **Ph**. A frontal macro through the glass case showing the red rotation mounts with brass screws. It has a symmetrical, product-shot feel.
- **53973169045**: ★★★ **Ph**. An oblique macro of the case interior (blue mounts and red clamp).
- **53972730451** (portrait): ★★★★ **P**. A vertical view of a smoke projection on the vault with a hanging mic. Abstract.
- **53972730466, 53972730506, 53972967203, 53972967208, 53972967243**: ★★★★ **G/P**. Bird's-eye shots from the gallery of the packed cathedral (about 3,100 people). The warm golden floor contrasts with the crowd, and the instrument desks are visible. They convey scale.
- **53971847537 / 53973053494** (portrait): ★★★★ **G**. Long views down the nave, crowded, in golden light.
- **53971847317 / 53971847342 / 53971847412**: ★★★ **G**. People leaning over the glowing experiment case, with smoke clouds over the crowd.
- **53864179317**: ★★★★ **Ph**. The setup on a black breadboard, shot frontally against purple. It has red mounts and chrome posts and is clean.
- **53865440779** (5016x3095): ★★★★ **Ph/P**. A macro of the optics in red and blue light with hand-drawn white chalk-style overlay sketches ("LASER", a beam diagram and music notes). It was used as the cover illustration (© Martin Ringbauer, Philipp Haslinger, Enar de Dios Rodríguez). A great graphic hero candidate.
- **53876792882**: ★★★ **Ph**. A macro of a Thorlabs cube mount, silver on dark.
- **53877695106**: ★★★ **G**. The Mariendom interior with the Rudigier organ, in daylight.
- **53878103910**: ★★ **G**. Organ keys, macro.
- **53880337878**: ★★★★ **T**. An eight-person team collage of duotone portraits (red, blue and grey tints).
- **Organ console shots (53971847427, 53971847457, 53971847462, 53972730241, 53972730406, 53973053454, 53973053469, 53973011374, 53973169010, 53973168995)**: ★★★ **P**. Cathedral organists Gerhard Raab and Wolfgang Kreuzhuber at the Rudigier organ and choir organ. Warm wood, stops, headphones, and a tablet showing live-generated notation. Good for the BruQner piece page.
- **53972730281 / 53972730291 / 53972730301**: ★★★ **G**. Clemens Wenger at a MacBook (the Max patch, showing "8" in red) and at the console. There is a warm dark-red tone.
- **53972967133**: ★★★ **G**. A camera LCD showing an organist, taken behind the scenes.
- **53972967013**: ★★★ **G**. A detail of the organ stop knobs (Prinzipal, Gedackt…), with a graphic pattern.
- **impression-ars-electronica-opening-2024_53972848143 / 53973049295 / 53973049290**: ★★★ **G**. The Mariendom exterior at night, lit magenta and purple under a deep-blue sky, with the crowd. Good context shots.
- **impression-…_53972758326 / 53973081254**: ★★ **G**. Press and TV interviews inside the cathedral.

### 2.2 Media\Performance pictures\Linz Performances\Land OÖ photos (33 JPGs, 2657x1772)
Folder: `ROOT\Media\Performance pictures\Linz Performances\Land OÖ photos\` holds `BruQner (c) Land OÖ Andreas Krenn (1..33).jpg`. **Credit: © Land OÖ / Andreas Krenn** (the Falling Walls article credits this series too).
- (1)–(4): the lecture part. Johannes Kofler at the lectern, Kofler, Clemens and Martin with a mic, a projector in the foreground.
- (5)–(10): projected lecture slides ("BruQner – The Sound of Entanglement / Lecture and Performance", "Classical Physics vs Quantum Physics", "Quantum Music", "BruQner music mapping: ALICE (Rudigier Organ)" with A1±/A2± staves, and "Quantum Aleatoric Music – two overlapping circles vs a line"). ★★★ **Ph/P**. Slide 10, with the two rings versus a line, is a lovely visual metaphor.
- (11): ★★★★ violet and orange smoke vortex over the audience.
- (12)–(15): ★★★★ a single haze cone emerging from the altar area, with the crucifix. (14) and (15) show a mauve cone on black and are very minimal.
- (16)–(17): ★★★★ concentric blue and indigo rings projected on the cathedral wall (the "entanglement = circles" motif).
- (18)–(19): "PART 4 OF 7 – Distinction: Quantum Meets Classical" screens.
- (20)–(21): ★★★★ an inverted grey smoke pyramid projected over the crowd.
- (22)–(23), (26): the glass case glowing red in the dark nave with a haze light point.
- (24)–(25): ★★★★ white smoke plumes on black.
- **(27)**: ★★★★★ **H**. A violet and olive fan of beams (viewed at full size).
- (28): ★★★★★ **H** — a similar fan with a stronger lime-green and violet split.
- (29): ★★★★ mixed violet, orange and grey beams over the case.
- (30): ★★★★ bright white and grey beams converging on the case.
- (31): ★★★★ an inverted cone of grey cloud texture over the case.
- (32): ★★★ Benjamin at the laptop, warm and bright, a portrait for the team or experiment page.
- (33): ★★★ the case contents in bright light (a documentation shot).

### 2.3 Media\Performance pictures\Linz Performances\BruQner Stills (46 JPGs, 3840x2160)
Folder: `ROOT\Media\Performance pictures\Linz Performances\BruQner Stills\BruQner_Stills_1.<n>.1.jpg`. These are **film stills from the weitblickfilm promo video** (Deniz & Florian Lindenberg, commissioned by JKU; the folder text credits "Setup (c) weitblickfilm"). They are cinematic 4K frames.
- **1.14.1**: ★★★★★ **H/Ph**. The violet laser macro, viewed at full size.
- 1.11.1: ★★★★★ **H/Ph**. A violet glow in a fibre coupler, with the blue-black quTools box.
- 1.13.1: ★★★★ **Ph**. The BBO crystal and holder with a purple spot and bokeh.
- 1.10.1: ★★★ **Ph**. A macro of a BB1-E03 mirror.
- 1.12.1 and 1.21.1: ★★★ **Ph**. The Swabian Time Tagger with teal status LEDs.
- 1.24.1: ★★★★ **P**. A ring and swirl projection in the nave.
- 1.25.1: ★★★ an icy beam over the pews with candle bokeh.
- 1.27.1: ★★★★ **P**. A marble and cloud projection on the ceiling, with two viewers from behind.
- 1.34.1: ★★★★ the dark nave with a haze plane, very minimal.
- 1.40.1: ★★★★ **P**. Violet beams and a phone filming, with the case in the crowd.
- **1.44.1**: ★★★★★ **H**. A cyan and violet fan of beams over a sea of heads, viewed at full size. It has lots of negative dark space for text overlay.
- 1.46.1: ★★★★ a blue tunnel arch of light over the audience.
- 1.26.1: ★★★ hands on a MIDI/controller in chiaroscuro.
- 1.22.1, 1.31.1, 1.32.1, 1.33.1, 1.45.1: ★★★ **P**. Organists and consoles, with Clemens's Max patch on screen (1.32.1).
- 1.35.1: ★★★ a hand adjusting optics inside the lit case.
- 1.36.1 and 1.38.1: people at the case. 1.42.1: organist Kreuzhuber at the console.
- 1.28.1 and 1.29.1: ★★★ **T/G**. The team walking at the JKU campus and by the armillary sculpture, in daylight.
- **Interview portraits for the team page (★★★★ T):**
  - Alexander Ploier (?) on the Danube terrace: 1.2.1 and 1.3.1.
  - Benjamin in the office: 1.4.1 and 1.5.1.
  - Johannes Kofler in the lecture hall: 1.15.1.
  - Enar de Dios Rodríguez: 1.16.1 and 1.17.1.
  - Benjamin working: 1.19.1.
  - Clemens (?) in bokeh: 1.20.1.
  - Clemens laughing in the cathedral: 1.41.1.
  - Martin Ringbauer (?) in a concrete hall, white shirt: 1.47.1–1.49.1.
  - Philipp Haslinger (?) in an auditorium with empty chairs: 1.50.1 and 1.51.1.

  Identities marked (?) are inferred and should be verified with Benjamin.

### 2.4 Media\Performance pictures\Linz Performances\Show to people (curated set, 26 files)
Folder: `ROOT\Media\Performance pictures\Linz Performances\Show to people\` holds duplicates of the best stills and Ars photos, plus:
- `PXL_20240903_191344084.jpg` (phone): ★★★ a behind-the-scenes shot of Benjamin at the case in the haze, with a film crew.
- `PXL_20240904_202638354.MP.jpg` and `PXL_20240903_192701779.MP.jpg`: ★★★★ an operator's-eye view. Two laptops with code, the glowing case, and the Gothic nave with the crowd behind.
- `PXL_20240904_195409546.jpg`: a fun selfie of Benjamin in front of the full cathedral.
- `BruQner_Performance01.jpeg` and `BruQnerPerformance02.jpeg` (1200x1600): ★★★★ cyan beam cones and a violet vortex, portrait orientation.
- `Film Drunk Guy Photo.jpg`: a team group photo at night (informal, film grain).
- `BruQner_Performance_Video.mp4`: a 10.5 s vertical clip.
- `ROOT\Media\Performance pictures\Linz Ars Electronica BruQner\PXL_20240903_192652980.jpg`: operator view down the nave.

### 2.5 Vienna trial-run and Osaka-application photos
Folder: `ROOT\Media\Performance pictures\Vienna Trail Run Performances\For Osaka Application\`
- `TSOE_osaka_photos-6.jpg` (1879x1051): ★★★★ **P** (for the band piece). A haze beam sweeps over a silhouetted audience in a wood-panelled hall. There are musicians (double bass) and cyan-blue light, and it is very atmospheric.
- `TSOE_osaka_photos-5.jpg` (1770x1080): ★★★★ a cloud texture projected into haze in the same hall. The duplicates `DSCF3529-3/-4.jpg` are in the EFS folder.
- `TSOE_osaka_photos-4.jpg` (4160x6240, portrait): the band with a green laser-like beam in a seminar room.
- `TSOE_osaka_photos-3.jpg` (portrait): ★★★★ **Ph**. An extreme macro of an ELL14 rotation mount (red PCB with lens). Rich red.
- `TSOE_osaka_photos-2.jpg` and `-1.jpg` (6k): ★★★★ **Ph/P**. The setup on a wooden table in front of a grand piano and pianist, with warm light.

### 2.6 Ball der Wissenschaften (Vienna Science Ball, City Hall, 25 Jan 2025)
Folder: `ROOT\Media\Performance pictures\Ball der Wissenschaften\`
- `PXL_20250125_210459244/210502378/210504429/210939237.jpg` (4080x3072, phone): ★★★★ **P/G**. A band (keys, guitar, drums) in an ornate red-damask ballroom under a crystal chandelier, with a huge screen of cyan wireframe spectra. Evening-dress audience and the lit experiment case in the front.
- `PXL_20250125_203442473.jpg`: a wide shot of the room.
- `PXL_20250125_221725650/221727826.jpg`: ★★★ ball guests in gowns crowding around the glowing case.
- `PXL_20250124_142652614.jpg`: the setup packed in a car boot, for a behind-the-scenes or "on tour" feel.
- Videos are listed in section 5.

### 2.7 Media\Photos (May 2024 lab photos, Signal-exported)
Folder: `ROOT\Media\Photos\` holds `signal-2024-05-1x-*.jpeg`. These are lab build shots: the setup on a white bench, Philipp and Benjamin grinning, dark-room alignment with the quED screen, and coincidence traces. ★★★ for "history / making-of".

### 2.8 Designs, title art and branding
- `ROOT\Media\Photos\Designs\Setup Title Image\Setup Title v1..v5.png` (1920x1080), duplicated in `Media\Osaka Application\`: ★★★★ "THE SOUND OF ENTANGLEMENT" in a heavy serif (Playfair-like), white with a red ">" chevron bracket and a tiny red/blue waveform line between the words. It sits over a dim purple photo of the setup (red rotation mounts). The versions differ only in the bracket style (v4 has chevrons on both sides). This is **existing wordmark design language**: dark aubergine, crimson accent, blue accent.
- `ROOT\Media\Youtube Thumbnail\BruQner Thumbnail.png` shows the "BruQner" wordmark with a red Q ("The Sound of Entanglement"). `TSOE Thumbnail.png` has a lighter sans version. The PSDs sit alongside.
- `ROOT\Media\Photos\Designs\Setup Title Image\BruQner Thumbnail.psd` (23 MB) is the layered source.
- `ROOT\Media\Team Title Slide\TSOE Team Slide.png`, `_new.png` and `_notext.png` (3858x2170), plus `TSOE Team Slide (1).psd` (163 MB): ★★★★★ **T**. Seen in full. Eight vertical strips: Richard Küng, Johannes Kofler, Philipp Haslinger, Enar de Dios Rodríguez, Clemens Wenger, Martin Ringbauer, Alexander Ploier and Benjamin Orthner. Each has a monochrome portrait tinted steel-blue, black or plum, the name in a light geometric sans (Josefin-Sans-like), and faint institution logos at the top (JKU, TU Wien, Uni Innsbruck). The PSD likely has cut-out portraits usable as individual team cards.
- `ROOT\Figures\logos\anton-bruckner-2024-logo-mit-signet.svg`: the Anton Bruckner 2024 KulturEXPO logo, for the partner and credits strip.
- `ROOT\Touchdesigner\Ball der Wissenschaften 2025\TouchDesigner Ideas\Untitled-1 copy.png` (1920x1080) is an info screen with the text: "THE SOUND OF ENTANGLEMENT IS AN ART-AND-SCIENCE PROJECT CONDUCTED BY ENTANGLED PAIRS OF PHOTONS, WHICH DICTATE THE MUSICIANS' PERFORMANCE AND THE ACCOMPANIED LIVE VISUALS." The team is listed as Musicians: Manu Mayr, Judith Schwarz, Clemens Wenger; Scientists: Philipp Haslinger, Johannes Kofler, Richard Küng, Benjamin Orthner, Alexander Ploier, Martin Ringbauer; Visual artist: Enar de Dios Rodríguez. It carries the logos of quantA, the (VCQ?) bird, JKU, TU Wien and Uni Innsbruck. The **logos are usable for the partner strip**, but ideally get vector originals.

### 2.9 Setup photography and figures (physics page)
- `ROOT\Presentations\EFS Application Presentation\DSCF9327.jpg` (6003x3947): ★★★★★ **Ph/H**. Viewed at full size. The complete setup in a black case with a glowing LED rim, photographed in a dark room. You can see the quTools quED source (white laser box), red Thorlabs ELL rotation mounts, blue kinematic mounts, a glass PBS cube and the Swabian "Time Tagger Ultra". Excellent quality.
- `ROOT\Figures\setup for performnce presentation\BruQner Setup\` (5219x3463 PNG, about 10–12 MB each; `*_compressed.png` versions exist):
  - `3.png` is the clean top-down photo of the setup (black breadboard with components).
  - `2.png` adds orange, yellow and blue overlays for the laser source module.
  - `1.png` adds red and blue beam paths.
  - `4.png` and `4v2.png` add translucent red "BOB" and blue "ALICE" zones.
  - `Aufbau.psd` (395 MB) holds the layers.
  - ★★★★★ **Ph**. Ideal for a scroll-driven explainer: photo, then source, then beams, then Alice/Bob.
- `ROOT\Figures\setup for performnce presentation\Old Setup\aufbau_blank/_laser_source/_lasers/_laser_labels/_laser_highlights.png` (5219x3463) show the earlier (May 2024) layout on a wooden table with the same overlay sequence. `aufbau_laser_labels.png` labels D1/D2 detectors and filters. The RAW files are `DSCF5989–5994.RAF` (33 MB each) and the PSD is `aufbau.psd`.
- `ROOT\Figures\Inkscape\Setup\simplified setup\SetupLabelledBeamPaths.png` (1456x1140; `SetupDiagram.svg` and `SetupBeamPath.pdf`): ★★★★★ **Ph**. A faded photo of the setup with crisp red (Alice) and blue (Bob) beam paths. It shows PBS cubes, a1/a2 and b1/b2 settings, and detectors labelled A=+1/−1 and B=+1/−1 with squiggle photon icons. It is publication-grade, and the **SVG could be restyled for a dark theme.**
- `ROOT\Figures\Inkscape\TSOE Paper\exports\setup_top_down.png` (1514x1004) is the same kind of beam-overlay figure, cleaner.
- `ROOT\Figures\Inkscape\TSOE Paper\BellSchemeSketch.svg` is a simple Source, Alice, Bob scheme (A=±1). ★★★★ **Ph**. It is ideal to rebuild as an animated SVG.
- `ROOT\Figures\Inkscape\Setup\PBS Cube\pbs_cube.png/.svg`: ★★★★ **Ph**. Two teal glass cubes, a red beam, a 22.5° waveplate, and polarisation-arrow stars. Clean isometric vector.
- `ROOT\Figures\Inkscape\Theory\SPDC\SPDC.svg`, `ellipsoid.svg`, `type1_3d.pdf`, `three_wave_mixing.pdf` and `conservation.pdf` are SPDC theory diagrams (from Benjamin's thesis). **Ph**.
- `ROOT\Figures\Inkscape\PythonFigures\bbo_ior.png` is a BBO refractive-index plot. It is thesis-level and too technical.
- `ROOT\Figures\sketches\PBS and lambda half.jpg` is a hand-drawn polariser/PBS sketch with colourful polarisation arrows. ★★★ it has a nice hand-drawn aesthetic.
- `ROOT\Figures\CAD\setup sketch.png`, `setup sketch 2.png` and `setup sketch 3.png` (2772x1408) are Inventor renders of the setup layout: grey boxes, red rotation mounts, and hand annotations ("PRISM MIRRORS", "LINEAR POLARIZER ON SLIDER (FOR CLASSICAL CORRELATIONS)", "ROTATION MOUNTS"). ★★★ for making-of.
- `ROOT\Media\Send To Johannes\opaque1.png`, `opaque2.png`, `transparent1.png`, `transparent3.png` (3840x2160 and 2160x2160) are **Inventor renders** of the setup. There is an isometric grey breadboard with red mounts and a thin beam line, plus a close-up render of a mount with a translucent PNG. ★★★★ they would work as clean white or light renders, or inverted for dark mode. `Assembly1.jpg` is also there.
- `ROOT\Media\Send To Johannes\video screenshot.png` and `video screenshot_drawing.png` (3072x1572) are top-down timelapse frames of Benjamin building the setup, one with yellow and green beam annotations.
- `ROOT\Figures\photos for paper\rotation mount.jpg` (3875x6062): ★★★★ an ELL14 rotation mount macro (red PCB).
- `ROOT\Figures\Inkscape\Setup\SPCM holder\*.png` and `Alignment Plates\*.png` are 3D-printed part renders on black: grey holders and beige 3D-printed alignment plates with red and blue beam lines. ★★★ `lasers.png` and `w.png` are minimal red and blue lines on black, which make a nice abstract graphic.

### 2.10 Figures: software, music and performance diagrams
- `ROOT\Figures\Inkscape\Code Flowcharts\base_level_architecture\base_level_architecture_flowchart.png/.svg`, plus `highlighted\*.png`. Boxes: Setup Control (Python/Jupyter), Music Generation (Max/MSP), Visual Generation (Python/OpenGL), Experimental Setup, Instruments & Musicians, Projectors. ★★★★ **Ph** ("how it works"). The SVG is restylable.
- `ROOT\Figures\Inkscape\Code Flowcharts\Visual Code Flowchart\*` is the detailed visuals-code architecture (animation_manager.py, performance.py, OSC). Too technical, except for a dev or "tech" page.
- `ROOT\Figures\Inkscape\Lambda Functions\triple_lambda.png` shows opacity, x-position and size curves over time with small red ring frames. It is a nice explainer of the ring animations.
- `ROOT\Figures\Inkscape\TSOE Paper\sheet_music.png/.svg` and `Sheet Music\Figure_Motivset_BruQner 4.png` (1772x1772) show "Alice's Motives" and "Bob's Motives" (A1±, A2±, B1±, B2±). ★★★★ **P** (BruQner) and **Ph**. They show how measurement outcomes map to pre-composed motifs.
- `ROOT\Figures\Inkscape\TSOE Paper\8Rooms.png/.svg/.pdf`, `8Rooms_Graphics.png` (1124x1275) and `8Rooms_Touchdesigner.svg` (8.75 MB) are **8 Rooms (2025)**:
  - A square room map (1, 2, 3, 5, 7) with a black quantum-random-walk trace and a red dot.
  - `8Rooms_Graphics.png` is a grid of wireframe "R1…R8" visual variants (white line landscapes on black). ★★★★ **P** (8 Rooms).
  - `RandomWalk Python Script\random_walk.png` shows a random walk on yellow.
  - `8roomsclicks_graphic_bw.pdf` is also here.
- `ROOT\Figures\Inkscape\TSOE Paper\exports\performance_layout.png` (1500x1911) is a stage layout icon diagram: musicians, keyboard, drums, projector, experiment and visuals. ★★★ **P**.
- `ROOT\Figures\Inkscape\Misc\floor plans\stands_organs.png`, `stands_organs_projectors.png` and `zoomin.png` are Mariendom floor plans with the organs (red), the seating and green projector cones. ★★★★ **P** (BruQner). They show the spatial concept.
- `ROOT\Figures\Inkscape\Misc\sheet music\haydn_dice_game_score.png` is the historical dice-game score (aleatoric-music history). ★★★ as a context image.
- `ROOT\Figures\Phone OSC controller\phone_osc*.png` are TouchOSC phone-controller screenshots (S1–S9 section buttons, Q/C). Making-of only.
- `ROOT\Figures\Max Patches\From Clemens\Bildschirmfoto 2025-03-14 um *.png` (3024x1964) are Clemens's Max/MSP and Ableton screenshots:
  - 11.06.01 shows the 8 Rooms UI with a yellow room and random walk ("ROOM 1 – 0 MINUTES played", GO TO ROOM buttons).
  - 11.18.09 shows the section/Q-C control.
  - 11.15.56 shows live notation.
  - ★★★ for **P** (8 Rooms) and a "music system" section.
- `ROOT\Figures\OSC and communication\Max8\*.png` and `Figures\sketches\latencyhistogram*.png` cover network latency tests. They are technical.
- `ROOT\Figures\organs\*` and `Figures\Mariendom Floorplans\*` are **third-party** images (Dommusikverein, Wikimedia, architects' plans). Check the licence in `organs\organ picture sources.txt` before any use.

### 2.11 Presentations and slides imagery
- `ROOT\Media\2nd perforamnce slides\2nd Performance Slides The Sound of Entanglement.pptx_page-0001..0032.jpg` (2000x1125) and the PDF are from the 13 June 2024 lecture-performance. Slide 1 has a team photo grid. Other slides cover classical versus quantum physics, entanglement, the quantum conductor, entangled musicians, Einstein's moon quote, Bell/CHSH, and Clemens's hand-drawn composition sketches (pages 29–32: musical form, shuffling motifs, Wendy Carlos and Moog, "What is so special?"). Pages 29–32 are also in `Presentations\DPG Tagung\media\`. ★★★ the hand-drawn sketches are good for the piece and process page. Most slides use stock images, so avoid those.
- `ROOT\Presentations\DPG Tagung\media\touchdesigner Screenshots\*.png` are TouchDesigner network screenshots (the 8 Rooms / Science Ball visuals).
- `ROOT\Presentations\DPG Tagung\media\graphic elements\tablet.png` and `top-view-tablet-marble-table.png` are tablet mockups showing the 8 Rooms musician UI.
- `ROOT\Presentations\DPG Tagung\Photos\dpg_presentation_photo_1..5.jpeg` (2000x1500): ★★★ Benjamin presenting at DPG Regensburg on 19 March 2025. A lecture hall with twin screens (Clemens portrait, the entangled-state formula |ψ⟩AB ≠ Σ cij|i⟩⊗|j⟩). Good for a talks and publications entry.
- `ROOT\Alain Aspect Presentation\IMG_20240621_*.jpg` (25 photos) are from Alain Aspect's lecture in the TU Wien Festsaal (21 June 2024). `IMG_20240621_161128.jpg` is a selfie of Benjamin with Alain Aspect. It is personal and not a project asset, though it could be a cute "news" item if Benjamin wishes.

### 2.12 Early planning (root)
- `ROOT\setup layout.jpg` and `ROOT\quED measurements _240228_174747.jpg` (1752x2477) show four layout variants for Alice and Bob on a pegboard render. `ROOT\setup sketch.jpg` is annotated. ★★ making-of.
- `ROOT\Media\Washington\newspaper article.jpeg` is a newspaper clipping: "Quantenmusik als Botschafterin für den Forschungsstandort Österreich" (the Washington D.C. / Johns Hopkins performance, April 2025). Press.
- `ROOT\Media\Published Media\newspaper.jpeg` is a clipping: "Das weltweit erste Quantenmusik-Konzert" (with a Kofler and organist photo, Aug 2024). Press.

---

## 3. 3D models

### 3.1 Polycam point clouds (best for the web)
Folder: `ROOT\3D Models\Polycam\`

| File | Size | Format | Contents |
|---|---|---|---|
| `main setup\TSOE_Setup_pointcloud.ply` | 16.5 MB | Binary PLY, 641,980 vertices, double xyz plus uchar RGB | The full breadboard setup. |
| `main setup\TSOE_Setup_pointcloud.pts` | 33.1 MB | ASCII PTS (x y z intensity r g b) | Same data. |
| `main setup\TSOE_Setup_pointcloud.xyz` | 30.7 MB | ASCII XYZ | Same data. |
| `main setup\TSOE_Setup_pointcloud_floatcolors.pts` | 46.6 MB | Tab-separated with float colours and a scalar field (TouchDesigner-ready) | Same data. |
| `main setup\TSOE_Setup_pointcloud_floatcolors_sorted_radial.pts` | 43.6 MB | Same, points sorted radially | Used for the CIVA TD animations. |
| `laser module\TSOE_SetupLaser_pointcloud.pts` | 5.3 MB | ASCII, 103,820 points | The laser module only. |

I rendered top and side projections (`scratchpad\research\sheets\pc_xy.png` and `pc_xz.png`). The cloud is clean and recognisable: breadboard, quTools box, red ELL mounts, blue mounts, yellow fibre couplers and detectors. The bounding box is about 1.0 x 1.0 x 0.28 m.

**three.js suitability: excellent.** Load it with `PLYLoader` as `THREE.Points`, with small additive-blended points on black. Recommendations:
- Decimate to about 150–250k points.
- Convert to float32 or quantised positions and uint8 colours, then Draco or meshopt-compress. The target is about 2–4 MB.
- The existing `_sorted_radial` version suggests an animated "assemble from centre" reveal.
- An abstract monochrome or violet recolour would fit the dark aesthetic.
- A slow orbit or scroll-linked camera would work, with the photon path drawn as glowing lines along the beam paths (ALICE red / BOB blue, as in the figures).

### 3.2 Autodesk Inventor (CAD)
Folder: `ROOT\Inventor\`
- `Setup\Assembly1.iam` (23 MB) is the full setup assembly. There are also subassemblies (`Rotation Mounts.iam`, `BS Mounted.iam`, `Mirror Mounted.iam`, `Prism Mounted.iam`, `Fiber Collimator.iam`, `Slider Assembled.iam`, each with `_MIR` mirrored versions) and `Setup\quTools.ipt`.
- `Thorlabs Parts\*\*.ipt` (54 part files) and 17 `OldVersions` backups.
- `Thorlabs Parts\*.step` (30 STEP files, 0.04–40 MB; the largest is `ELL14K-Step.step` at 40 MB and `ELL6-Step.STEP` at 18 MB).
- `Thorlabs Parts\parts obj\*.obj` (22 OBJ files, 0.02–4.75 MB), for example `ell14k-step.obj` (3 MB, the rotation mount), `km05_m-step.obj`, `ks1-step.obj`, `pbs102-step.obj` (cube beamsplitter) and `mb3045_m-step.obj` (breadboard).
- `Thorlabs Parts\quTools.png`, `quToolsWarped.png` and `qutools box frontpanel*.png` are texture images for the quTools box.

**Web use:** the `.iam` and `.ipt` files are proprietary and can't be used in a browser. Exporting the full assembly to glTF or GLB, for example Inventor → STEP/OBJ → Blender → GLB, would give a clean CAD-style model of the setup. The individual **OBJ parts load directly in three.js** (`OBJLoader`). A stylised "exploded" rotation mount or PBS cube would work as small interactive accents on the physics page. The Thorlabs parts are vendor CAD, fine for rendering but not for redistribution as downloads. The rendered PNGs in `Media\Send To Johannes\` show what a GLB export would look like. **Recommendation:** use the Polycam point cloud as the hero 3D element (it is abstract and artsy), and only optionally use a GLB export of `Assembly1.iam` for a diagrammatic view.

### 3.3 TouchDesigner example point clouds (not project assets)
Under `Touchdesigner\CIVA\Example projects\` there are workshop example data: `shrine.xyz` (197 MB), `stairs.xyz`, the B2BK `Novations_2Millions.txt`, and Kinect EXRs. These are third-party tutorial assets. **Do not use them.**

---

## 4. Audio

| File (under ROOT) | Duration | Format | Description / website use |
|---|---|---|---|
| `Audio\Main Performance\trail performance 03 sept.m4a` | 1:47:00 | AAC 48 kbps stereo, phone (Android) | Full dress-rehearsal recording in the Mariendom. Low quality, with long stretches of talk and lecture. |
| `Audio\Main Performance\main performance 04 sept .m4a` | 1:22:31 | AAC 48 kbps | **Premiere, 4 Sept 2024 (English)**, including the lecture. You could cut a 1–2 min organ excerpt from it, but it is phone quality. Only a fallback: ask the team for the weitblickfilm soundtrack or a desk recording. |
| `Audio\Main Performance\German Performance 06 sept.m4a` | 1:42:18 | AAC 48 kbps | Second (German) performance. |
| `Media\Audio Samples\Ball der Wissenschaften\TUQ_lastset_cut_excerpt.mp3` | 4:32 | MP3 160k mono | **The Uncertain Question (band) live at the Science Ball 2025.** Ready-cut excerpt. **Best current sample for a band-piece page (8 Rooms era).** |
| `Media\Audio Samples\Ball der Wissenschaften\TUQ_lastset_cut_excerpt2.mp3` | 4:38 | MP3 | A second excerpt. |
| `Media\Audio Samples\Ball der Wissenschaften\TUQ_set2_cut_mischpult.mp3` | 11:14 | MP3 | A full set from the mixing desk ("Mischpult"). |
| `Presentations\DPG Tagung\media\audio\johns bells.mp3` | 1:35 | MP3 | "John's Bells" (120 BPM), presumably a quantum-controlled piece named after John Bell (DPG talk slide "John's Bells"). **Good short sample.** |
| `Presentations\DPG Tagung\media\audio\johnsBellsLong.mp3` | 5:24 | MP3 | Long version. |
| `Presentations\DPG Tagung\media\audio\wisBall1.mp3`, `wissBall2.mp3`, `wisBall3.mp3` | 10–13 s each | MP3 | Very short Science Ball snippets. **Ideal hover or teaser stings.** |
| `Presentations\DPG Tagung\media\audio\raw_clicks.mp3` | 5 s | MP3 | **The raw clicks of the rotation mounts / experiment.** A lovely "sound of the experiment" micro-sample for the physics page. |
| `Touchdesigner\...\Klick_ ALICE.wav` and `Klick_ BOB.wav` (copies in Ball der Wissenschaften, Washington and Palermo) | 15:09 each | WAV 44.1k mono, 76 MB | Separate Alice and Bob click tracks (contact-mic recordings of the kinetic mounts). **Great for a stereo "Alice left / Bob right" interactive on the physics page**, trimmed to 10–30 s. |
| `Touchdesigner\CIVA\Final CIVA Project\assets\section_1.mp3/.opus` | 6:59 | MP3 97k / Opus | CIVA performance (Sept/Oct 2025) section audio, likely from the 2025 piece (see note below). |
| `...\section_2.mp3/.opus` | 4:25 | | |
| `...\section_3.mp3/.opus` | 8:24 | | |
| `Touchdesigner\CIVA\...\new_steam_v2_90bpm.mpg` and `new_steam_v2_110bpm 3.mpg` | 4:36 / 3:45 | MP3 in an .mpg container | Audio sketches by Clemens ("Audio-clemens") for CIVA. |
| `Touchdesigner\CIVA\Final CIVA Project\assets\metronome_90bpm_5min.wav` and `metronome_110bpm_5min.mp3` | 5:00 | | Utility click tracks. Not for the site. |
| `Touchdesigner\...\The Tunnel and the Clearing.mp3` | 6:09 | MP3 (YouTube/DASH rip) | Likely a **third-party** reference track used for testing visuals. **Do not use.** |
| `Alain Aspect Presentation\Record-001..004.wav` | 13:03, 2:19, 1:33, 4:00 | WAV | Recordings of Alain Aspect's lecture (third-party speech). **Not for the site.** |

**Note on pieces:**
- Nothing in this drive is explicitly labelled "8 Rooms" audio, but the Science Ball TUQ sets (Jan 2025) and the 8 Rooms UI screenshots (Mar 2025) are the band-format material.
- "Indeterminate Apparatus (2025)" is not named anywhere in this drive. The CIVA TouchDesigner project (`Touchdesigner\CIVA\Final CIVA Project\`, Sept–Oct 2025, with the point-cloud visuals of the setup) and its `section_1–3` audio are the likely candidates. Confirm with Benjamin.

---

## 5. Video

| File (under ROOT) | Duration | Resolution | Content / loop suitability |
|---|---|---|---|
| `Media\Performance pictures\Linz Ars Electronica BruQner\2025-03-15 00-39-54.mp4` | 32.5 s | 1920x1080 h264 | Also embedded in the DPG pptx (media31). A dark macro of the optics (red rotation mounts) with a pale haze beam glowing behind. **★★★★★ background loop** for the landing or physics page. |
| `Presentations\DPG Tagung\media\graphic elements\filter spinning.mp4` | 1.6 s | 1280x720 | A close-up of the ELL14 rotation mount turning. **★★★★ micro-loop** (the "measurement setting" motion). |
| `Media\Timelapses\Timelapse Practice 1.mp4` | 25.5 s | 3840x2160 | A 4K timelapse of a rehearsal (Clemens at a laptop, piano, bass, drums, in a studio). ★★★ making-of. |
| `Media\Timelapses\setup blurry.mp4` | 20.2 s | 3840x2160 | A top-down 4K timelapse of the setup being built (hands, cables). ★★★ making-of or physics. |
| `Media\Send To Johannes\Timelapse 1080.mp4` | 30.3 s | 1920x1080 | The same build timelapse at 1080p. |
| `Figures\video clips\section 1.mp4 … section 8.mp4`, `section 4 Q.mp4`, `section 4 C.mp4`, `section 7 Q.mp4` | 4–21 s each | 856x480 | **Screen recordings of the BruQner visuals per section**: yellow and pink rings (entanglement), white lines (classical), dotted rings and arcs on pure black. ★★★★ as abstract minimal loops. They are low-res, but the graphics are simple enough to **re-create in canvas/WebGL** (the site could re-implement ring = Q and line = C animations). |
| `Figures\video clips\Handheld visuals - Made with Clipchamp.mp4` | 44.9 s | 540x960 vertical | Handheld phone footage of the BruQner projections in the cathedral. ★★★ social/gallery. |
| `Figures\video clips\2025-03-14 23-33-03.mp4` and `2025-03-14 23-32-19.mp4` (in DPG as media1 and media2) | 12–14 s | 1152x648 | Vienna trial run: haze and cloud projection and a laser plane over the audience in a wood-panelled hall with the band. ★★★★ **P** (band piece). |
| `Media\Performance pictures\Ball der Wissenschaften\PXL_20250125_210220396.mp4` | 33.3 s | 1920x1080 HEVC, 77 MB | The Science Ball set. `compressed\PXL_20250125_210220396.mp4` is a 1080x1920 h264 copy at 11.5 MB. ★★★ **P**. |
| `...\Ball der Wissenschaften\PXL_20250125_184053735.mp4` | 7.6 s | 1080p HEVC (vertical) | A close-up of the rotation mount. |
| `...\PXL_20250124_193955063~2.mp4` | 7.3 s | 1080p HEVC | The lit case. |
| `...\PXL_20250125_203446447.mp4`, `210941851.mp4`, `213438538.mp4` | 5–6 s | 1080p HEVC | Short clips. |
| `...\Wissenschaftsball TSOE Clip.mp4` | 6.5 s | 1280x720 | The band with the screen. |
| `Touchdesigner\Ball der Wissenschaften 2025\TouchDesigner Ideas\PPTMovie.0.mov`, `PPTMovie0/2/3/4/5/6/7/8/10.mov` | 5 s each | 1280x720 MPEG-4 | **TouchDesigner visual renders**: red and cyan chromatic line-spectra waves, dense white wireframe audio-spectrum landscapes, and a single white/grey trace. **★★★★★ abstract background loops** (black background, monochrome) that fit the dark minimal aesthetic. Re-encode to webm or mp4. |
| `Touchdesigner\CIVA\Final CIVA Project\assets\Classic.mov` | 36.3 s | 1280x720 ProRes, 384 MB | A grey depth-map-like vertical-streak texture (the "classical" visual state). ★★★ loop after re-encoding. |
| `Touchdesigner\CIVA\Final CIVA Project\assets\PXL_20251002_175604765.mp4` | 20:15 | 1920x1080 HEVC, **2.9 GB** | The CIVA performance or rehearsal filmed over the operator's laptop (TD "Performance" UI, guitarist and projections). Source material to cut highlights from. |
| `Media\Performance pictures\Linz Performances\Show to people\BruQner_Performance_Video.mp4` | 10.5 s | 720x1280 | A vertical BruQner clip. |

The EFS and DPG pptx files embed further copies of these clips. The DPG pptx embedded videos I copied to `scratchpad\research\dpgmedia\` are all duplicates of the above, except `media4.mp4` (a Berlin Phil conductor clip, third-party, do not use).

**Missing:** the official weitblickfilm promo video ("BruQner – The Sound of Entanglement (Promotional Video, 2024)", embedded on the TU Wien news page) is **not** in this drive. Only its stills are. Ask for the master file or link the YouTube/TU Wien embed.

---

## 6. Texts: project descriptions, press, abstracts (verbatim quotes)

### 6.1 Official BruQner programme folder, `ROOT\Media\Published Media\2024_BruQner_Folder.pdf`
Premiere in English: Wed 4 Sept 2024, 10 pm, New Cathedral Linz. Second event in German: Fri 6 Sept 2024, 4 pm. Part of Ars Electronica Festival 2024 and OÖ KulturEXPO Anton Bruckner 2024.

EN text:
> "Anton Bruckner's work has written music history and is renowned far beyond the country's borders. Austria is also internationally known for its contributions to quantum physics – not least thanks to the 2022 Nobel Prize in Physics. In BruQner these two worlds meet: using a musical interpretation of a so-called "Bell Test", striking passages from Bruckner's Perger Präludium are made audible in a new way. A sensual symbiosis of music, visuals and modern research is created. BruQner is one of the first attempts in the world to work musically with genuine quantum mechanics. Entangled photon pairs from lasers will take on the role of a conductor and show the disruptive findings of the second quantum revolution in a performance for the first time. BruQner is completely committed to the festival motto "Tradition, Innovation and Avant-Garde" – marvel with us and hear the future potential in Bruckner's music!"

> "The second quantum revolution as a musical spectacle: Lasers, mirrors, non-linear crystals – an experimental setup from the high-tech laboratory in the middle of Linz's new Cathedral. Entangled photons – the quanta of light – become conductors and direct Bruckner's Perger Präludium in a way that no human could in the here and now. The Cathedral organists play live on the two resounding church organs and fill the Mariendom's spectacular acoustic space. BruQner shows us a new view of our reality – a world premiere!"

> "In the experiment, entangled photon pairs are created via a laser and a non-linear crystal. The random but correlated measurement results are musically implemented live by the cathedral organists."

> "The New Cathedral in Linz, with its two organs that can be played simultaneously, is one of the few places in Europe where this project can be performed."

DE (for a German version):
> "Die zweite Quantenrevolution als Musikspektakel im Linzer Mariendom: Laser, Spiegel, Polarisatoren, nichtlineare Kristalle – ein Experimentalaufbau aus dem High-Tech-Labor mitten im Linzer Mariendom. Verschränkte Photonen – die Quanten des Lichts – werden zu Dirigenten und variieren Bruckners Perger Präludium auf eine Weise, wie es niemand im Hier und Jetzt könnte. Zwei schallende Kirchenorgeln spielen live und füllen den spektakulären Klangraum des Doms. BruQner zeigt uns eine neue Sicht auf unsere Realität – eine Weltpremiere!"

**Team and roles** (from the folder):
- Clemens Wenger: composer, musical direction.
- Enar de Dios Rodríguez: artist, visual design.
- Martin Ringbauer: experimental physicist, Univ. of Innsbruck.
- Johannes Kofler, Richard Küng and Alexander Ploier: theoretical computer scientists, JKU Linz.
- Benjamin Orthner: experimental physicist, TU Wien.
- Philipp Haslinger: experimental physicist, TU Wien, and project management.
- Wolfgang Kreuzhuber and Gerhard Raab: cathedral organists.

**Credits and partners:**
> "A Project of OÖ KulturEXPO Anton Bruckner 2024 in cooperation with Ars Electronica and with the support of LIT-JKU, VCQ, University of Innsbruck, Vienna University of Technology, SFB-beyondC and the city of Vienna culture."

Other folder credits:
- Cover illustration: © Martin Ringbauer, Philipp Haslinger, Enar de Dios Rodríguez.
- Setup and Rudigier organ photos: © weitblickfilm.
- Team photo credits: © Richard Küng / Alexander Gotter / Enar de Dios Rodriguez / Benjamin Orthner / Johannes Kofler / Philipp Haslinger / Martin Ringbauer / Elisabeth Peheim.

### 6.2 BruQner flyer card, `ROOT\Media\2024_AB_Karten_BruQner_A5.pdf`
> "The second quantum revolution as a musical spectacle! Laser, mirrors, polarizers, nonlinear crystals - an experimental setup from the high-tech lab. Entangled photons - the quantum of light - act as conductors, directing Bruckner's Perger Prelude in a way no human could. BruQner reveals a new perspective on our reality - a world premiere!"

Credits line: "Musikalische Leitung: Clemens Wenger | Visuelle Gestaltung: Enar de Dios Rodríguez | Projektleitung: JKU, Uni Innsbruck und TU Wien | Rudigierorgel & Chororgel: Wolfgang Kreuzhuber & Gerhard Raab". The 4 Sept show was "as part of the Ars Electronica Festival and 24-hour birthday party (in English)". Free entry.

### 6.3 quantA article (press), `ROOT\Media\Published Media\BruQner - The Sound of Entanglement - quantA.pdf` (https://www.quantumscience.at/bruqner-sound)
> "On September 4th, 2024, join us for BruQner – a world premiere merging quantum physics and classical music with live organs and entangled photons, transforming Linz's Mariendom into a high-tech lab of sound and light."

> "The true stars of the performance, however, are entangled photons – quantum particles of light. These photons will take on the role of conductors, randomly determining musical notes based on Anton Bruckner's Perger Prelude in a way that no human could replicate."

> "While the concert is inspired by Bruckner, the music will be composed in real-time by the quantum mechanical experiment. The use of Bell's theorem in this setup allows for quantum correlations stronger than what classical physics would permit, generating musical notes that are random yet interconnected in ways that defy conventional expectations. These notes will be passed to the organists to play, ensuring that every performance is not only unique but a true reflection of quantum phenomena."

> Richard Küng: "Quantum physics is different from what we experience every day... Music seemed like an ideal way to not only explain quantum physics, but also make it more tangible and audible, using the other senses."

### 6.4 TU Wien news "Wenn Photonen dirigieren" (30 Aug 2024), `ROOT\Media\Published Media\Wenn Photonen dirigieren _ TU Wien.pdf` (https://www.tuwien.at/tu-wien/aktuelles/news/news/wenn-photonen-dirigieren)
> "Verschränkte Teilchen verlieren ihre individuellen Eigenschaften, stehen dafür aber in ganz besonders starker Beziehung zueinander, egal wie weit sie voneinander entfernt sind. … Im Linzer Mariendom übernehmen die verschränkten Photonen-Paare die Rolle des Dirigenten: Von jedem Paar wird das Messresultat des einen Photons zur Seitenorgel gesendet und das Resultat des Partnerphotons zur Hauptorgel. An diesen Orgeln sitzen die beiden Organisten Wolfgang Kreuzhuber und Gerhard Raab, die anhand ihrer empfangenen Messdaten gleichzeitig und live Anton Bruckners Werk "Perger Präludium" variieren."

> "Kein menschlicher Dirigent oder klassischer Computer könnte solche Musik instruieren – das kann nur die sonderbare Physik der Quantenteilchen."

The page embeds "BruQner – The Sound of Entanglement (Promotional Video, 2024)".

### 6.5 ORF OÖ "24-Stunden-Party zu Bruckners 200er", `ROOT\Media\Published Media\24-Stunden-Party zu Bruckners 200er - ooe.ORF.pdf`
The PDF uses broken embedded fonts, so its text can't be extracted. It is a press item (ooe.ORF.at, Aug 2024) about the 24-hour Bruckner birthday festival that included BruQner. List it on the press page with the link, and re-fetch from ORF if a quote is needed.

### 6.6 Falling Walls: "Breaking the Wall of Quantum Music", Global Call 2026 Finalist Interview, Art & Science (Clemens Wenger), `ROOT\Media\Published Media\Breaking the Wall of Quantum Music _ Falling Walls.pdf`
Photo credit on the page: © Andreas Krenn, Land OÖ.

Bio:
> "Clemens Wenger is a Viennese composer and Professor of Composition at Anton Bruckner Private University Linz. A pioneer of Quantum Music, he staged BruQner – The Sound of Entanglement, the first concert with entangled photons, before 3,100 people at Linz Cathedral. Invitations followed from Johns Hopkins University, the European Forum Alpbach, and EXPO2025 Osaka. He founded JazzWerkstatt Wien and leads the soul band 5/8erl in Ehr'n, moving fluidly between the popular and the avant-garde."

> "BruQner – The Sound of Entanglement breaks that wall by making entanglement audible. In September 2024, together with physicists from TU Wien, JKU Linz, and the University of Innsbruck, I built the first musical work driven live by entangled photons: the real-time measurement outcomes of an entanglement experiment were translated into a compositional structure and performed for 3,100 people in Linz Cathedral. No simulation, no metaphor — the sound the audience heard was generated by quantum randomness as it happened."

> "BruQner treats music not as a metaphor for quantum physics but as its direct medium, closing the distance between two disciplines that rarely share a stage, let alone a language."

(The PDF text is garbled at this point; the quote was reconstructed from the overlaid text.)

> "Since Linz, the project has grown into an ongoing line of work rather than a single achievement: invitations followed from Johns Hopkins University, the Science Ball at Vienna City Hall, the European Forum Alpbach, and the Austrian pavilion at EXPO2025 in Osaka. I have since built The Uncertain Question, a dedicated ensemble developing further compositions from quantum data, and Sound of Entanglement has become a repeatable lecture-performance format, adapted to new venues and new physics. A formal research project is now in preparation…"

> "The sounds the audience heard weren't pre-programmed or simulated — they came from real photons hitting real detectors in that exact moment, so the piece was genuinely different, and unrepeatable, every time it played."

> "After a year of building the experimental setup, writing the actual software, and countless failed tests — the moment our setup beat the classical bound, just as John Bell predicted, and The Sound of Entanglement worked for the first time."

### 6.7 DPG 2025 abstract (publication/talk), `ROOT\Presentations\DPG Tagung\DPG Website The Sound Of Entanglement.pdf`
DPG Spring Meeting Regensburg 2025, session DY 20.1, Wednesday 19 March 2025, 09:30, room H37. "The Sound of Entanglement" by Benjamin Orthner, Clemens Wenger, Johannes Kofler, Richard Küng, Enar de Dios Rodríguez, Martin Ringbauer, Alexander Ploier and Philipp Haslinger.

Affiliations:
1. VCQ, Atominstitut, TU Wien.
2. JKU Linz.
3. Internationales Forschungszentrum Kulturwissenschaften, Kunstuniversität Linz.
4. University of Innsbruck.
5. Universität für Musik und darstellende Kunst Graz.

(This affiliation list is useful for the team page.)

> "This contribution presents The Sound of Entanglement, a project at the intersection of quantum physics, music, and visual art. At its core lies a Bell experiment setup, where polarization-entangled photon pairs are generated through spontaneous parametric down-conversion in a β-BBO crystal. The experiment acts as a quantum conductor, utilizing the quantum correlations between the photons to coordinate and influence the choices of live musicians in real-time, creating a performance guided by principles beyond classical physics.
> This work seeks to make these abstract concepts more accessible and engaging to broader audiences by transforming them into tangible, sensory experiences. By combining live music with a dynamic light show, both controlled by the experiment, this project illustrates how advancements in technology, like those shaping the second quantum revolution, can redefine artistic expression and bridge the gap between science and art."

Keywords: Quantum Entanglement; Bell Experiment; Aleatoric Music; Interdisciplinary Art; Spontaneous Parametric Down Conversion. URL: https://www.dpg-verhandlungen.de/year/2025/conference/regensburg/part/dy/session/20

The slides are in `ROOT\Presentations\DPG Tagung\DPG Tagung presentation.pptx` (285 MB) and `.pdf` (7.4 MB).

### 6.8 One-line project definition (Science Ball info screen, 2025)
> "THE SOUND OF ENTANGLEMENT IS AN ART-AND-SCIENCE PROJECT CONDUCTED BY ENTANGLED PAIRS OF PHOTONS, WHICH DICTATE THE MUSICIANS' PERFORMANCE AND THE ACCOMPANIED LIVE VISUALS."

Musicians named: Manu Mayr, Judith Schwarz, Clemens Wenger.

### 6.9 Physics-explainer copy (lecture slides by Kofler/Ringbauer et al.), `ROOT\Media\2nd perforamnce slides\...pptx.pdf`, `ROOT\Media\Copy of BruQner.pptx` (slides from the 21 May 2024 talk)
Ready-made plain-language physics copy:

> "Classical physics: universe is a deterministic clockwork. Objects have well defined properties at all times. Everything has a cause. Randomness only due to ignorance. Determinism (even in chaos). Quantum physics: breaks this world view."

> "In quantum mechanics: Only probabilities of events can be predicted. Individual events without cause: objective randomness."

> "Classical world: The whole is always the sum of its parts. Parts can be correlated, but have individual properties. Quantum World: Entangled states not described by individual properties! The whole is more than the sum of its parts. Works over large distances: 'Spooky action at a distance'."

> "Two entangled photons: If A is ↕, then B is ↔. If A is ↔, then B is ↕. Locally, outcomes are completely random (property does not exist before measurement). Globally, outcomes are perfectly correlated."

> "Bell's Theorem – Assume: 'Realism' – Instruments make sounds even when nobody is listening. 'Locality' – The choice Alice makes should not change the sound of Bob. S = ⟨A1B1⟩ + ⟨A1B2⟩ + ⟨A2B1⟩ – ⟨A2B2⟩ ≤ 2"

> "In the quantum world: Entangled states are more correlated than any classical system can: S_QM > 2 … 'The Sound of Entanglement': Measurement outcomes conduct the music. Correlated sounds that are classically impossible → We can create music which no classical (human/computer) conductor could instruct."

> "Entangled Musicians — classical expectation: sometimes both; quantum reality: never both." (A slide with Alice and Bob choosing instrument and volume.)

> "Do you really believe the moon exists only when you are looking at it?" – Albert Einstein (used as a slide).

The same slides carry Clemens's composer perspective, "WHAT IS SO SPECIAL?":
> "1) realtime measurement of data and immediate interplay with live musicians in a performance - playing with nature not data collections 2) objective chance! no mood swings / no bias towards certain material -> openness of musical form and sound 3) ENTANGLEMENT - chance vs. order - what is it? what can we do with it? pioneer research in musical theory 4) new way of approaching music and performance - new instrument - new composition - finding new aesthetics"

### 6.10 Benjamin's talk notes (EFS and DPG pptx speaker notes): useful facts for the piece and physics pages
From `ROOT\Presentations\DPG Tagung\DPG Tagung presentation.pptx` notes and `ROOT\Presentations\DPG Tagung\DPG Presentation Brainstorm new.excalidraw`:
- "TSOE THREE PARTS: 1. Real Musicians on stage 2. Q Exp. running live. Results tell musicians … (Q CONDUCTOR) 3. Visuals also controlled by the Q."
- "Hardest part, entangled photon source, not hard. Buy BBO, shine a laser at it. Our system Type-1 phase matched, hence photons always share polarisation."
- "Continuously sends out ~2 measurements per second (bottleneck: rotation mount speed)." The slides state the measurement results rate as about 2 Hz and |S| ≈ 2.5.
- BruQner: "2 organs, 1 photon per organ, generates sheet music … Over 200 precomposed bars of music, chosen in real time by exp. … BREAK ENTANGLEMENT IN SETUP, REFLECTED IN MUSIC … 8 sections, 6 subsections, 250 precomposed bars of music chosen by exp." Visuals: "8 Sections. Circles – Entanglement. Lines – Classical."
- Science Ball / band format: "clicking along — rhythmic. Attached contact mics through synthesizer … Audio spectra from clicking, various details controlled by experimental results … Quantum random walk." The 8 Rooms UI uses a random walk between rooms.
- Excalidraw conclusion (quotable):
> "What we have built is a platform that provides a new interesting restriction to a composer. To compose with two correlated random number generators and create music that sounds both interesting and conveys the spirit of entanglement audibly. That and its much easier to convince people to listen to a physics lecture if you promise them some music afterwards. Maybe one day we can actually entangle two musicians but for now this is about as close as we can get."
> "Entanglement is all about correlations. An Orchestra is also all about correlations."
- Anecdotes ("world firsts"): "People dancing to the clicks of kinetic filter mounts", "A pastor threatening physical violence as a reaction to seeing a quantum experiment on his altar", and "all-night alignment after moving the setup".

From `ROOT\Presentations\EFS Application Presentation\EFS Application Presentation.pptx` (Oct 2024, German notes, 112 MB). It is a technical walkthrough:
- Two PCs (experiment and visuals), a haze operator, a music operator, and two organists reading notation from screens.
- WiFi was replaced by a 100 m LAN cable because of latency.
- Light cones are made by projecting rings and circles into haze.
- The BruQner visuals run 8 sections, about 5.5 min.
- The software is Python KineticMountController, TimeTaggerController and a TT_Simulator, with a Jupyter control interface, OSC to Max/MSP, and Python/OpenGL fragment-shader visuals (AnimationManager with Ring, Line and DotRing animations, 60 fps, hot reloading) triggered by each measurement.

This is good for a "How it works / Technology" section.

### 6.11 Johannes Kofler email (data explainer), `ROOT\Johannes Code\Johannes Code email explanation.pdf`
It is a German internal email of July 2024 with names and email addresses. Don't publish it, but the facts are useful:
- The simulated quantum dataset has S ≈ 2.5.
- The "classical" dataset uses deliberately bad measurement angles (|S| ≈ 1.75), so "Wir wollen im Dom ja per Knopfdruck rein durch schlechtere Setting-Wahl auf den klassischen Fall umschalten können" (we want to be able to switch to the classical case in the cathedral at the push of a button, just by choosing worse settings).
- Clemens replies that switching between A1B1 and A2B2 makes the quantum/classical difference audible.

This explains the Q/C sections, for example "Section 4-Q / 4-C".

### 6.12 Papers folder (reference literature, not TSOE publications)
Folder: `ROOT\papers\`
- `srep09175.pdf` is "Non-local classical optical correlation", Sci. Rep. 2015.
- `A Test of Bell_s Inequality for the Undergraduate Laboratory.pdf`
- `Bell test and quantum state tomography_ undergrad setup.pdf`
- `PR Boxes in Minecraft.pdf`
- `Giles Castell Master thesis design inspo.pdf` (design inspiration; worth a look for style).
- `Lecture Notes Johannes Kofler 2025_quantum_information_lecture_notes-1.pdf`

**No TSOE paper PDF is here yet.** `Figures\Inkscape\TSOE Paper\` shows a paper is in preparation (figures dated June–Sept 2025), so the website's publications list should include the DPG 2025 talk and that paper when it appears.

### 6.13 Timeline of shows inferred from this drive (for the past-shows page)

| Date | Event | Evidence |
|---|---|---|
| May 2024 | First talk (21 May 2024 slide deck "BruQner – The Sound of Entanglement") | `Media\Copy of BruQner.pptx` |
| 13 June 2024 | Lecture-performance, the "2nd performance" slides (Vienna) | `Media\2nd perforamnce slides\` |
| 2024 | Vienna trial-run performances with the band (haze hall; used for the Osaka application) | `Media\Performance pictures\Vienna Trail Run Performances\` |
| 3 Sept 2024 | Dress rehearsal / trial, Mariendom Linz | audio |
| **4 Sept 2024, 22:00** | **BruQner premiere (EN)**, Mariendom Linz, Ars Electronica opening and Bruckner's 200th birthday (born 4 Sept 1824), about 3,100 people | folder, press, photos |
| **6 Sept 2024, 16:00** | **BruQner (DE)**, Mariendom Linz | folder, audio |
| 25 Jan 2025 | Ball der Wissenschaften (Vienna Science Ball, City Hall), The Uncertain Question band | photos, videos, audio, TD project |
| 19 Mar 2025 | DPG Spring Meeting Regensburg talk (DY 20.1) | abstract, photos |
| Apr 2025 | Washington D.C. / Johns Hopkins (TD project "Washington", newspaper clipping, transport quote) | `Touchdesigner\Washington`, `Media\Washington` |
| 2025 | EXPO2025 Osaka, Austrian pavilion (mentioned in Falling Walls; Osaka application designs) | text |
| Aug 2025 | Millstatt (TD project `Touchdesigner\Millstatt\Millstatt.toe`, 21 Aug 2025) | TD |
| Aug 2025 | European Forum Alpbach, EFA 2025 (`Touchdesigner\EFA 2025 Alpbach\TSOE_EFA_2025.toe`) | TD, Falling Walls |
| Sept–Oct 2025 | CIVA (TD "Final CIVA Project" with point-cloud visuals and a 2 Oct 2025 performance recording) | TD, which may be where Indeterminate Apparatus premiered |
| Oct–Nov 2025 | Palermo ISQCMC (TD project `Touchdesigner\Palermo\Palermo ISQCMC.toe`) | TD |

`TSOE Docs\On Tour 2025.gdoc` (cloud-only) probably has the authoritative 2025 list, so open it in Google Drive. The Google Drive MCP connector is available but needs authentication.

---

## 7. TouchDesigner and Max/MSP

### TouchDesigner (`ROOT\Touchdesigner\`)
Projects are listed by show. Each has many `Backup\*.toe` autosaves (0.3–7 MB).
- `Ball der Wissenschaften 2025\TouchDesigner Ideas\`:
  - `BallOfSciencesVisuals.toe` / `.12.toe` (Benjamin) and `BallOfSciencesVisualsEnar*.toe` (Enar).
  - `Audio-histogram.toe`, `noise-circle.toe` and `Reactive-lines_text.toe` (prototypes), plus `SetupOscReceiver.tox`.
  - **The `PPTMovie*.mov` renders are the visual exports** (see Video).
  - `Klick_ ALICE/BOB.wav` and the info screen `Untitled-1 copy.png`.
  - Two `.dmp` crash dumps (ignore).
- `Washington\Washington\Washington.toe` / `.10.toe` (Apr 2025) and `snapshot.1/2.tif` (tiny).
- `Millstatt\Millstatt.toe` (Aug 2025).
- `EFA 2025 Alpbach\TSOE_EFA_2025.18.toe` (Aug–Sept 2025).
- `CIVA\`:
  - `Final CIVA Project\TSOE_CIVA.toe` (7 MB, Nov 2025) with its assets: the point clouds (including `TSOE_Setup_pointcloud_floatcolors_random.pts`), `Classic.mov`, section audio, stills and the 20-min performance video.
  - `enar\CIVA-all.toe`, `Updates\CIVA-part1b/3b.toe` and `Pixel-sorting.5.toe`.
  - `pointcloudexperiments*.toe` and `Example projects\` (third-party workshop files).
- `Palermo\Palermo ISQCMC.toe` and `.5.toe` (Oct–Nov 2025), plus `chopto1.tsv` (data export).
- `Custom Pallet Toxs\Palette\` holds reusable components: `PointClouds\Photons.tox`, `Photons_Spheres.tox`, `Thomas_Attractor.tox`, `radial_noise.tox`, `edgeNoise.tox`, `LifeFeedback.tox`, `SlopeDisplace_feedback.tox`, `PointCloud_PixelMixer.tox`, `base_shifter.tox`, and `misc\camSequencer1.tox`, `SetupOscReceiver1/2.tox`. The names indicate the visual vocabulary: photons as particles, Thomas attractor, radial noise and feedback. **This is good inspiration for the website's WebGL look** (point-cloud setup plus a strange-attractor or noise field).

**Screenshots and renders of the visuals:**
- `ROOT\Presentations\DPG Tagung\media\touchdesigner Screenshots\*.png` (network graphs).
- The TD visual output as photographed at the Science Ball (cyan and white wireframe spectra on the big screen).
- `Figures\Inkscape\TSOE Paper\8Rooms_Graphics.png` (a grid of the eight room visuals).
- The frame grabs in `scratchpad\research\frames\`: 23.jpg (red and cyan spectra), 24.jpg (wireframe landscape) and 22.jpg (`Classic.mov` grey streaks).

No clean hi-res stills of the CIVA point-cloud visuals exist. **Rendering stills from `TSOE_CIVA.toe` would be a worthwhile to-do for Benjamin.**

### Max/MSP (`ROOT\MAX\`)
- `Latency Testing\LatencyTester.maxpat` and `latencyTimer.js`, plus the data `latency_big_organ_data.txt`, `dom_small_organ_timing_latency_data.txt`, `tunet.txt` and `bruqnerLANCabled.txt`. These are network latency measurements (about 1.5–2.5 ms typical), plus a `.gsheet` link. They are technical only.
- `Used Data from BruQner Performance\BruQner_UA.json` (also at `ROOT\BruQner_UA.json`) holds 127 events, each `[section, aliceMotif(1–4), bobMotif(1–4), "Q"|"C", n]`, with 106 Q and 21 C across sections 1–7. **Reusable as data** for an on-site "replay of the premiere" visualisation.
- Clemens's actual Max patches are not in this drive. Only screenshots are, in `Figures\Max Patches\From Clemens\`.

---

## 8. Gaps and recommendations
1. The **promo video master** (weitblickfilm) and good-quality **audio** of BruQner are missing. Only phone recordings exist, so request them from Clemens or JKU.
2. There are **no photos of 8 Rooms or Indeterminate Apparatus** as named pieces. The Science Ball, CIVA, Alpbach and Palermo material is unlabelled, so confirm the mapping with Benjamin.
3. **Photo credits:**
   - The Land OÖ set is © Land OÖ / Andreas Krenn.
   - The BruQner Stills are © weitblickfilm (JKU commission).
   - The Ars Electronica Flickr images need their Flickr credit (probably "Ars Electronica / <photographer>", often CC BY-NC-ND), so check before use.
   - Organ and floor-plan images are third-party.
4. Suggested hero trio: Ars `53973053449` (starburst), `BruQner_Stills_1.14.1` (violet laser macro) and `DSCF9327` (glowing case), with the Polycam point cloud as the interactive element.
5. Existing brand cues are a dark aubergine and black background, crimson red and electric blue accents (Alice red and Bob blue in all figures), a serif wordmark, and a light geometric sans for names. Recurring motifs are concentric rings for entanglement versus straight lines for classical.

---

## Appendix A: full paths of catalogued images (index to path, pixel size)
Contact sheets live at `C:\Users\benja\AppData\Local\Temp\claude\D--Programming-the-sound-of-entanglement-website\a3c8646d-4800-4998-b030-5c47a0497203\scratchpad\research\sheets\<name>_N.jpg`.

### Ars Electronica Photos (sheet `ars_*.jpg`)

- [0] 4000x2667: `H:\My Drive\TU Wien\Project Works\TSOE\Media\Performance pictures\Linz Performances\Ars Electronica Photos\bruqnerthe-sound-of-entanglement_53973053439_o.jpg`
- [1] 4000x2668: `H:\My Drive\TU Wien\Project Works\TSOE\Media\Performance pictures\Linz Performances\Ars Electronica Photos\bruqnerthe-sound-of-entanglement-7-clemens-wenger-at-enar-de-dios-rodrguez-es-martin-ringbauer-at-johannes-kofler-at-richard-kng-at-alexander-ploier-at-benjamin-orthner-atgh-philipp-haslinger-at_53972730271_o.jpg`
- [2] 4000x2668: `H:\My Drive\TU Wien\Project Works\TSOE\Media\Performance pictures\Linz Performances\Ars Electronica Photos\bruqnerthe-sound-of-entanglement-7-clemens-wenger-at-enar-de-dios-rodrguez-es-martin-ringbauer-at-johannes-kofler-at-richard-kng-at-alexander-ploier-at-benjamin-orthner-atgh-philipp-haslinger-at_53972730276_o.jpg`
- [3] 3840x2160: `H:\My Drive\TU Wien\Project Works\TSOE\Media\Performance pictures\Linz Performances\Ars Electronica Photos\bruqnerthe-sound-of-entanglement--clemens-wenger-at-enar-de-dios-rodrguez-es-martin-ringbauer-at-johannes-kofler-at-richard-kng-at-alexander-ploier-at-benjamin-orthner-atgh-philipp-haslinger-at_53864179317_o.jpg`
- [4] 5016x3095: `H:\My Drive\TU Wien\Project Works\TSOE\Media\Performance pictures\Linz Performances\Ars Electronica Photos\bruqnerthe-sound-of-entanglement--clemens-wenger-at-enar-de-dios-rodrguez-es-martin-ringbauer-at-johannes-kofler-at-richard-kng-at-alexander-ploier-at-benjamin-orthner-atgh-philipp-haslinger-at_53865440779_o.jpg`
- [5] 3840x2160: `H:\My Drive\TU Wien\Project Works\TSOE\Media\Performance pictures\Linz Performances\Ars Electronica Photos\bruqnerthe-sound-of-entanglement--clemens-wenger-at-enar-de-dios-rodrguez-es-martin-ringbauer-at-johannes-kofler-at-richard-kng-at-alexander-ploier-at-benjamin-orthner-atgh-philipp-haslinger-at_53876792882_o.jpg`
- [6] 3840x2160: `H:\My Drive\TU Wien\Project Works\TSOE\Media\Performance pictures\Linz Performances\Ars Electronica Photos\bruqnerthe-sound-of-entanglement--clemens-wenger-at-enar-de-dios-rodrguez-es-martin-ringbauer-at-johannes-kofler-at-richard-kng-at-alexander-ploier-at-benjamin-orthner-atgh-philipp-haslinger-at_53877695106_o.jpg`
- [7] 3840x2160: `H:\My Drive\TU Wien\Project Works\TSOE\Media\Performance pictures\Linz Performances\Ars Electronica Photos\bruqnerthe-sound-of-entanglement--clemens-wenger-at-enar-de-dios-rodrguez-es-martin-ringbauer-at-johannes-kofler-at-richard-kng-at-alexander-ploier-at-benjamin-orthner-atgh-philipp-haslinger-at_53878103910_o.jpg`
- [8] 4000x2649: `H:\My Drive\TU Wien\Project Works\TSOE\Media\Performance pictures\Linz Performances\Ars Electronica Photos\bruqnerthe-sound-of-entanglement--clemens-wenger-at-enar-de-dios-rodrguez-es-martin-ringbauer-at-johannes-kofler-at-richard-kng-at-alexander-ploier-at-benjamin-orthner-atgh-philipp-haslinger-at_53880337878_o.jpg`
- [9] 4000x2668: `H:\My Drive\TU Wien\Project Works\TSOE\Media\Performance pictures\Linz Performances\Ars Electronica Photos\bruqnerthe-sound-of-entanglement--clemens-wenger-at-enar-de-dios-rodrguez-es-martin-ringbauer-at-johannes-kofler-at-richard-kng-at-alexander-ploier-at-benjamin-orthner-atgh-philipp-haslinger-at_53971847317_o.jpg`
- [10] 4000x2668: `H:\My Drive\TU Wien\Project Works\TSOE\Media\Performance pictures\Linz Performances\Ars Electronica Photos\bruqnerthe-sound-of-entanglement--clemens-wenger-at-enar-de-dios-rodrguez-es-martin-ringbauer-at-johannes-kofler-at-richard-kng-at-alexander-ploier-at-benjamin-orthner-atgh-philipp-haslinger-at_53971847342_o.jpg`
- [11] 4000x2668: `H:\My Drive\TU Wien\Project Works\TSOE\Media\Performance pictures\Linz Performances\Ars Electronica Photos\bruqnerthe-sound-of-entanglement-clemens-wenger-at-enar-de-dios-rodrguez-es-martin-ringbauer-at-johannes-kofler-at-richard-kng-at-alexander-ploier-at-benjamin-orthner-atgh-philipp-haslinger-at_53971847387_o.jpg`
- [12] 4000x2668: `H:\My Drive\TU Wien\Project Works\TSOE\Media\Performance pictures\Linz Performances\Ars Electronica Photos\bruqnerthe-sound-of-entanglement--clemens-wenger-at-enar-de-dios-rodrguez-es-martin-ringbauer-at-johannes-kofler-at-richard-kng-at-alexander-ploier-at-benjamin-orthner-atgh-philipp-haslinger-at_53971847407_o.jpg`
- [13] 4000x2668: `H:\My Drive\TU Wien\Project Works\TSOE\Media\Performance pictures\Linz Performances\Ars Electronica Photos\bruqnerthe-sound-of-entanglement--clemens-wenger-at-enar-de-dios-rodrguez-es-martin-ringbauer-at-johannes-kofler-at-richard-kng-at-alexander-ploier-at-benjamin-orthner-atgh-philipp-haslinger-at_53971847412_o.jpg`
- [14] 4000x2667: `H:\My Drive\TU Wien\Project Works\TSOE\Media\Performance pictures\Linz Performances\Ars Electronica Photos\bruqnerthe-sound-of-entanglement--clemens-wenger-at-enar-de-dios-rodrguez-es-martin-ringbauer-at-johannes-kofler-at-richard-kng-at-alexander-ploier-at-benjamin-orthner-atgh-philipp-haslinger-at_53971847427_o.jpg`
- [15] 4000x2667: `H:\My Drive\TU Wien\Project Works\TSOE\Media\Performance pictures\Linz Performances\Ars Electronica Photos\bruqnerthe-sound-of-entanglement--clemens-wenger-at-enar-de-dios-rodrguez-es-martin-ringbauer-at-johannes-kofler-at-richard-kng-at-alexander-ploier-at-benjamin-orthner-atgh-philipp-haslinger-at_53971847457_o.jpg`
- [16] 4000x2667: `H:\My Drive\TU Wien\Project Works\TSOE\Media\Performance pictures\Linz Performances\Ars Electronica Photos\bruqnerthe-sound-of-entanglement--clemens-wenger-at-enar-de-dios-rodrguez-es-martin-ringbauer-at-johannes-kofler-at-richard-kng-at-alexander-ploier-at-benjamin-orthner-atgh-philipp-haslinger-at_53971847462_o.jpg`
- [17] 2667x4000: `H:\My Drive\TU Wien\Project Works\TSOE\Media\Performance pictures\Linz Performances\Ars Electronica Photos\bruqnerthe-sound-of-entanglement-clemens-wenger-at-enar-de-dios-rodrguez-es-martin-ringbauer-at-johannes-kofler-at-richard-kng-at-alexander-ploier-at-benjamin-orthner-atgh-philipp-haslinger-at_53971847487_o.jpg`
- [18] 4000x2667: `H:\My Drive\TU Wien\Project Works\TSOE\Media\Performance pictures\Linz Performances\Ars Electronica Photos\bruqnerthe-sound-of-entanglement--clemens-wenger-at-enar-de-dios-rodrguez-es-martin-ringbauer-at-johannes-kofler-at-richard-kng-at-alexander-ploier-at-benjamin-orthner-atgh-philipp-haslinger-at_53971847492_o.jpg`
- [19] 2667x4000: `H:\My Drive\TU Wien\Project Works\TSOE\Media\Performance pictures\Linz Performances\Ars Electronica Photos\bruqnerthe-sound-of-entanglement--clemens-wenger-at-enar-de-dios-rodrguez-es-martin-ringbauer-at-johannes-kofler-at-richard-kng-at-alexander-ploier-at-benjamin-orthner-atgh-philipp-haslinger-at_53971847537_o.jpg`
- [20] 4000x2667: `H:\My Drive\TU Wien\Project Works\TSOE\Media\Performance pictures\Linz Performances\Ars Electronica Photos\bruqnerthe-sound-of-entanglement--clemens-wenger-at-enar-de-dios-rodrguez-es-martin-ringbauer-at-johannes-kofler-at-richard-kng-at-alexander-ploier-at-benjamin-orthner-atgh-philipp-haslinger-at_53972730241_o.jpg`
- [21] 4000x2668: `H:\My Drive\TU Wien\Project Works\TSOE\Media\Performance pictures\Linz Performances\Ars Electronica Photos\bruqnerthe-sound-of-entanglement--clemens-wenger-at-enar-de-dios-rodrguez-es-martin-ringbauer-at-johannes-kofler-at-richard-kng-at-alexander-ploier-at-benjamin-orthner-atgh-philipp-haslinger-at_53972730281_o.jpg`
- [22] 4000x2668: `H:\My Drive\TU Wien\Project Works\TSOE\Media\Performance pictures\Linz Performances\Ars Electronica Photos\bruqnerthe-sound-of-entanglement--clemens-wenger-at-enar-de-dios-rodrguez-es-martin-ringbauer-at-johannes-kofler-at-richard-kng-at-alexander-ploier-at-benjamin-orthner-atgh-philipp-haslinger-at_53972730291_o.jpg`
- [23] 4000x2668: `H:\My Drive\TU Wien\Project Works\TSOE\Media\Performance pictures\Linz Performances\Ars Electronica Photos\bruqnerthe-sound-of-entanglement--clemens-wenger-at-enar-de-dios-rodrguez-es-martin-ringbauer-at-johannes-kofler-at-richard-kng-at-alexander-ploier-at-benjamin-orthner-atgh-philipp-haslinger-at_53972730301_o.jpg`
- [24] 4000x2668: `H:\My Drive\TU Wien\Project Works\TSOE\Media\Performance pictures\Linz Performances\Ars Electronica Photos\bruqnerthe-sound-of-entanglement--clemens-wenger-at-enar-de-dios-rodrguez-es-martin-ringbauer-at-johannes-kofler-at-richard-kng-at-alexander-ploier-at-benjamin-orthner-atgh-philipp-haslinger-at_53972730326_o.jpg`
- [25] 4000x2668: `H:\My Drive\TU Wien\Project Works\TSOE\Media\Performance pictures\Linz Performances\Ars Electronica Photos\bruqnerthe-sound-of-entanglement--clemens-wenger-at-enar-de-dios-rodrguez-es-martin-ringbauer-at-johannes-kofler-at-richard-kng-at-alexander-ploier-at-benjamin-orthner-atgh-philipp-haslinger-at_53972730346_o.jpg`
- [26] 4000x2667: `H:\My Drive\TU Wien\Project Works\TSOE\Media\Performance pictures\Linz Performances\Ars Electronica Photos\bruqnerthe-sound-of-entanglement--clemens-wenger-at-enar-de-dios-rodrguez-es-martin-ringbauer-at-johannes-kofler-at-richard-kng-at-alexander-ploier-at-benjamin-orthner-atgh-philipp-haslinger-at_53972730406_o.jpg`
- [27] 2667x4000: `H:\My Drive\TU Wien\Project Works\TSOE\Media\Performance pictures\Linz Performances\Ars Electronica Photos\bruqnerthe-sound-of-entanglement--clemens-wenger-at-enar-de-dios-rodrguez-es-martin-ringbauer-at-johannes-kofler-at-richard-kng-at-alexander-ploier-at-benjamin-orthner-atgh-philipp-haslinger-at_53972730451_o.jpg`
- [28] 4000x2667: `H:\My Drive\TU Wien\Project Works\TSOE\Media\Performance pictures\Linz Performances\Ars Electronica Photos\bruqnerthe-sound-of-entanglement--clemens-wenger-at-enar-de-dios-rodrguez-es-martin-ringbauer-at-johannes-kofler-at-richard-kng-at-alexander-ploier-at-benjamin-orthner-atgh-philipp-haslinger-at_53972730466_o.jpg`
- [29] 4000x2668: `H:\My Drive\TU Wien\Project Works\TSOE\Media\Performance pictures\Linz Performances\Ars Electronica Photos\bruqnerthe-sound-of-entanglement--clemens-wenger-at-enar-de-dios-rodrguez-es-martin-ringbauer-at-johannes-kofler-at-richard-kng-at-alexander-ploier-at-benjamin-orthner-atgh-philipp-haslinger-at_53972730506_o.jpg`
- [30] 4000x2667: `H:\My Drive\TU Wien\Project Works\TSOE\Media\Performance pictures\Linz Performances\Ars Electronica Photos\bruqnerthe-sound-of-entanglement--clemens-wenger-at-enar-de-dios-rodrguez-es-martin-ringbauer-at-johannes-kofler-at-richard-kng-at-alexander-ploier-at-benjamin-orthner-atgh-philipp-haslinger-at_53972730521_o.jpg`
- [31] 4000x2668: `H:\My Drive\TU Wien\Project Works\TSOE\Media\Performance pictures\Linz Performances\Ars Electronica Photos\bruqnerthe-sound-of-entanglement--clemens-wenger-at-enar-de-dios-rodrguez-es-martin-ringbauer-at-johannes-kofler-at-richard-kng-at-alexander-ploier-at-benjamin-orthner-atgh-philipp-haslinger-at_53972924878_o.jpg`
- [32] 4000x2667: `H:\My Drive\TU Wien\Project Works\TSOE\Media\Performance pictures\Linz Performances\Ars Electronica Photos\bruqnerthe-sound-of-entanglement--clemens-wenger-at-enar-de-dios-rodrguez-es-martin-ringbauer-at-johannes-kofler-at-richard-kng-at-alexander-ploier-at-benjamin-orthner-atgh-philipp-haslinger-at_53972967013_o.jpg`
- [33] 4000x2668: `H:\My Drive\TU Wien\Project Works\TSOE\Media\Performance pictures\Linz Performances\Ars Electronica Photos\bruqnerthe-sound-of-entanglement--clemens-wenger-at-enar-de-dios-rodrguez-es-martin-ringbauer-at-johannes-kofler-at-richard-kng-at-alexander-ploier-at-benjamin-orthner-atgh-philipp-haslinger-at_53972967028_o.jpg`
- [34] 4000x2668: `H:\My Drive\TU Wien\Project Works\TSOE\Media\Performance pictures\Linz Performances\Ars Electronica Photos\bruqnerthe-sound-of-entanglement--clemens-wenger-at-enar-de-dios-rodrguez-es-martin-ringbauer-at-johannes-kofler-at-richard-kng-at-alexander-ploier-at-benjamin-orthner-atgh-philipp-haslinger-at_53972967048_o.jpg`
- [35] 4000x2668: `H:\My Drive\TU Wien\Project Works\TSOE\Media\Performance pictures\Linz Performances\Ars Electronica Photos\bruqnerthe-sound-of-entanglement--clemens-wenger-at-enar-de-dios-rodrguez-es-martin-ringbauer-at-johannes-kofler-at-richard-kng-at-alexander-ploier-at-benjamin-orthner-atgh-philipp-haslinger-at_53972967083_o.jpg`
- [36] 4000x2668: `H:\My Drive\TU Wien\Project Works\TSOE\Media\Performance pictures\Linz Performances\Ars Electronica Photos\bruqnerthe-sound-of-entanglement--clemens-wenger-at-enar-de-dios-rodrguez-es-martin-ringbauer-at-johannes-kofler-at-richard-kng-at-alexander-ploier-at-benjamin-orthner-atgh-philipp-haslinger-at_53972967098_o.jpg`
- [37] 4000x2667: `H:\My Drive\TU Wien\Project Works\TSOE\Media\Performance pictures\Linz Performances\Ars Electronica Photos\bruqnerthe-sound-of-entanglement--clemens-wenger-at-enar-de-dios-rodrguez-es-martin-ringbauer-at-johannes-kofler-at-richard-kng-at-alexander-ploier-at-benjamin-orthner-atgh-philipp-haslinger-at_53972967108_o.jpg`
- [38] 4000x2667: `H:\My Drive\TU Wien\Project Works\TSOE\Media\Performance pictures\Linz Performances\Ars Electronica Photos\bruqnerthe-sound-of-entanglement--clemens-wenger-at-enar-de-dios-rodrguez-es-martin-ringbauer-at-johannes-kofler-at-richard-kng-at-alexander-ploier-at-benjamin-orthner-atgh-philipp-haslinger-at_53972967133_o.jpg`
- [39] 4000x2667: `H:\My Drive\TU Wien\Project Works\TSOE\Media\Performance pictures\Linz Performances\Ars Electronica Photos\bruqnerthe-sound-of-entanglement--clemens-wenger-at-enar-de-dios-rodrguez-es-martin-ringbauer-at-johannes-kofler-at-richard-kng-at-alexander-ploier-at-benjamin-orthner-atgh-philipp-haslinger-at_53972967143_o.jpg`
- [40] 4000x2667: `H:\My Drive\TU Wien\Project Works\TSOE\Media\Performance pictures\Linz Performances\Ars Electronica Photos\bruqnerthe-sound-of-entanglement--clemens-wenger-at-enar-de-dios-rodrguez-es-martin-ringbauer-at-johannes-kofler-at-richard-kng-at-alexander-ploier-at-benjamin-orthner-atgh-philipp-haslinger-at_53972967203_o.jpg`
- [41] 4000x2667: `H:\My Drive\TU Wien\Project Works\TSOE\Media\Performance pictures\Linz Performances\Ars Electronica Photos\bruqnerthe-sound-of-entanglement--clemens-wenger-at-enar-de-dios-rodrguez-es-martin-ringbauer-at-johannes-kofler-at-richard-kng-at-alexander-ploier-at-benjamin-orthner-atgh-philipp-haslinger-at_53972967208_o.jpg`
- [42] 4000x2667: `H:\My Drive\TU Wien\Project Works\TSOE\Media\Performance pictures\Linz Performances\Ars Electronica Photos\bruqnerthe-sound-of-entanglement--clemens-wenger-at-enar-de-dios-rodrguez-es-martin-ringbauer-at-johannes-kofler-at-richard-kng-at-alexander-ploier-at-benjamin-orthner-atgh-philipp-haslinger-at_53972967243_o.jpg`
- [43] 4000x2668: `H:\My Drive\TU Wien\Project Works\TSOE\Media\Performance pictures\Linz Performances\Ars Electronica Photos\bruqnerthe-sound-of-entanglement--clemens-wenger-at-enar-de-dios-rodrguez-es-martin-ringbauer-at-johannes-kofler-at-richard-kng-at-alexander-ploier-at-benjamin-orthner-atgh-philipp-haslinger-at_53973011374_o.jpg`
- [44] 4000x2668: `H:\My Drive\TU Wien\Project Works\TSOE\Media\Performance pictures\Linz Performances\Ars Electronica Photos\bruqnerthe-sound-of-entanglement--clemens-wenger-at-enar-de-dios-rodrguez-es-martin-ringbauer-at-johannes-kofler-at-richard-kng-at-alexander-ploier-at-benjamin-orthner-atgh-philipp-haslinger-at_53973053339_o.jpg`
- [45] 4000x2668: `H:\My Drive\TU Wien\Project Works\TSOE\Media\Performance pictures\Linz Performances\Ars Electronica Photos\bruqnerthe-sound-of-entanglement--clemens-wenger-at-enar-de-dios-rodrguez-es-martin-ringbauer-at-johannes-kofler-at-richard-kng-at-alexander-ploier-at-benjamin-orthner-atgh-philipp-haslinger-at_53973053354_o.jpg`
- [46] 4000x2668: `H:\My Drive\TU Wien\Project Works\TSOE\Media\Performance pictures\Linz Performances\Ars Electronica Photos\bruqnerthe-sound-of-entanglement--clemens-wenger-at-enar-de-dios-rodrguez-es-martin-ringbauer-at-johannes-kofler-at-richard-kng-at-alexander-ploier-at-benjamin-orthner-atgh-philipp-haslinger-at_53973053364_o.jpg`
- [47] 4000x2668: `H:\My Drive\TU Wien\Project Works\TSOE\Media\Performance pictures\Linz Performances\Ars Electronica Photos\bruqnerthe-sound-of-entanglement--clemens-wenger-at-enar-de-dios-rodrguez-es-martin-ringbauer-at-johannes-kofler-at-richard-kng-at-alexander-ploier-at-benjamin-orthner-atgh-philipp-haslinger-at_53973053384_o.jpg`
- [48] 4000x2667: `H:\My Drive\TU Wien\Project Works\TSOE\Media\Performance pictures\Linz Performances\Ars Electronica Photos\bruqnerthe-sound-of-entanglement--clemens-wenger-at-enar-de-dios-rodrguez-es-martin-ringbauer-at-johannes-kofler-at-richard-kng-at-alexander-ploier-at-benjamin-orthner-atgh-philipp-haslinger-at_53973053449_o.jpg`
- [49] 4000x2667: `H:\My Drive\TU Wien\Project Works\TSOE\Media\Performance pictures\Linz Performances\Ars Electronica Photos\bruqnerthe-sound-of-entanglement--clemens-wenger-at-enar-de-dios-rodrguez-es-martin-ringbauer-at-johannes-kofler-at-richard-kng-at-alexander-ploier-at-benjamin-orthner-atgh-philipp-haslinger-at_53973053454_o.jpg`
- [50] 4000x2667: `H:\My Drive\TU Wien\Project Works\TSOE\Media\Performance pictures\Linz Performances\Ars Electronica Photos\bruqnerthe-sound-of-entanglement--clemens-wenger-at-enar-de-dios-rodrguez-es-martin-ringbauer-at-johannes-kofler-at-richard-kng-at-alexander-ploier-at-benjamin-orthner-atgh-philipp-haslinger-at_53973053469_o.jpg`
- [51] 2667x4000: `H:\My Drive\TU Wien\Project Works\TSOE\Media\Performance pictures\Linz Performances\Ars Electronica Photos\bruqnerthe-sound-of-entanglement--clemens-wenger-at-enar-de-dios-rodrguez-es-martin-ringbauer-at-johannes-kofler-at-richard-kng-at-alexander-ploier-at-benjamin-orthner-atgh-philipp-haslinger-at_53973053494_o.jpg`
- [52] 4000x2668: `H:\My Drive\TU Wien\Project Works\TSOE\Media\Performance pictures\Linz Performances\Ars Electronica Photos\bruqnerthe-sound-of-entanglement--clemens-wenger-at-enar-de-dios-rodrguez-es-martin-ringbauer-at-johannes-kofler-at-richard-kng-at-alexander-ploier-at-benjamin-orthner-atgh-philipp-haslinger-at_53973126360_o.jpg`
- [53] 4000x2667: `H:\My Drive\TU Wien\Project Works\TSOE\Media\Performance pictures\Linz Performances\Ars Electronica Photos\bruqnerthe-sound-of-entanglement--clemens-wenger-at-enar-de-dios-rodrguez-es-martin-ringbauer-at-johannes-kofler-at-richard-kng-at-alexander-ploier-at-benjamin-orthner-atgh-philipp-haslinger-at_53973168930_o.jpg`
- [54] 4000x2668: `H:\My Drive\TU Wien\Project Works\TSOE\Media\Performance pictures\Linz Performances\Ars Electronica Photos\bruqnerthe-sound-of-entanglement--clemens-wenger-at-enar-de-dios-rodrguez-es-martin-ringbauer-at-johannes-kofler-at-richard-kng-at-alexander-ploier-at-benjamin-orthner-atgh-philipp-haslinger-at_53973168965_o.jpg`
- [55] 4000x2668: `H:\My Drive\TU Wien\Project Works\TSOE\Media\Performance pictures\Linz Performances\Ars Electronica Photos\bruqnerthe-sound-of-entanglement--clemens-wenger-at-enar-de-dios-rodrguez-es-martin-ringbauer-at-johannes-kofler-at-richard-kng-at-alexander-ploier-at-benjamin-orthner-atgh-philipp-haslinger-at_53973168985_o.jpg`
- [56] 4000x2668: `H:\My Drive\TU Wien\Project Works\TSOE\Media\Performance pictures\Linz Performances\Ars Electronica Photos\bruqnerthe-sound-of-entanglement--clemens-wenger-at-enar-de-dios-rodrguez-es-martin-ringbauer-at-johannes-kofler-at-richard-kng-at-alexander-ploier-at-benjamin-orthner-atgh-philipp-haslinger-at_53973168995_o.jpg`
- [57] 4000x2668: `H:\My Drive\TU Wien\Project Works\TSOE\Media\Performance pictures\Linz Performances\Ars Electronica Photos\bruqnerthe-sound-of-entanglement--clemens-wenger-at-enar-de-dios-rodrguez-es-martin-ringbauer-at-johannes-kofler-at-richard-kng-at-alexander-ploier-at-benjamin-orthner-atgh-philipp-haslinger-at_53973169010_o.jpg`
- [58] 4000x2668: `H:\My Drive\TU Wien\Project Works\TSOE\Media\Performance pictures\Linz Performances\Ars Electronica Photos\bruqnerthe-sound-of-entanglement--clemens-wenger-at-enar-de-dios-rodrguez-es-martin-ringbauer-at-johannes-kofler-at-richard-kng-at-alexander-ploier-at-benjamin-orthner-atgh-philipp-haslinger-at_53973169020_o.jpg`
- [59] 4000x2668: `H:\My Drive\TU Wien\Project Works\TSOE\Media\Performance pictures\Linz Performances\Ars Electronica Photos\bruqnerthe-sound-of-entanglement--clemens-wenger-at-enar-de-dios-rodrguez-es-martin-ringbauer-at-johannes-kofler-at-richard-kng-at-alexander-ploier-at-benjamin-orthner-atgh-philipp-haslinger-at_53973169045_o.jpg`
- [60] 4000x2667: `H:\My Drive\TU Wien\Project Works\TSOE\Media\Performance pictures\Linz Performances\Ars Electronica Photos\impression-ars-electronica-opening-2024_53972758326_o.jpg`
- [61] 4000x2667: `H:\My Drive\TU Wien\Project Works\TSOE\Media\Performance pictures\Linz Performances\Ars Electronica Photos\impression-ars-electronica-opening-2024_53972848143_o.jpg`
- [62] 2667x4000: `H:\My Drive\TU Wien\Project Works\TSOE\Media\Performance pictures\Linz Performances\Ars Electronica Photos\impression-ars-electronica-opening-2024_53973049290_o.jpg`
- [63] 4000x2667: `H:\My Drive\TU Wien\Project Works\TSOE\Media\Performance pictures\Linz Performances\Ars Electronica Photos\impression-ars-electronica-opening-2024_53973049295_o.jpg`
- [64] 4000x2667: `H:\My Drive\TU Wien\Project Works\TSOE\Media\Performance pictures\Linz Performances\Ars Electronica Photos\impression-ars-electronica-opening-2024_53973081254_o.jpg`

### Land OÖ photos (sheet `landooe_*.jpg`)

- [0] 2657x1772: `H:\My Drive\TU Wien\Project Works\TSOE\Media\Performance pictures\Linz Performances\Land OÖ photos\BruQner (c) Land OÖ Andreas Krenn (1).jpg`
- [1] 2657x1772: `H:\My Drive\TU Wien\Project Works\TSOE\Media\Performance pictures\Linz Performances\Land OÖ photos\BruQner (c) Land OÖ Andreas Krenn (2).jpg`
- [2] 2657x1772: `H:\My Drive\TU Wien\Project Works\TSOE\Media\Performance pictures\Linz Performances\Land OÖ photos\BruQner (c) Land OÖ Andreas Krenn (3).jpg`
- [3] 2657x1772: `H:\My Drive\TU Wien\Project Works\TSOE\Media\Performance pictures\Linz Performances\Land OÖ photos\BruQner (c) Land OÖ Andreas Krenn (4).jpg`
- [4] 2657x1772: `H:\My Drive\TU Wien\Project Works\TSOE\Media\Performance pictures\Linz Performances\Land OÖ photos\BruQner (c) Land OÖ Andreas Krenn (5).jpg`
- [5] 2657x1772: `H:\My Drive\TU Wien\Project Works\TSOE\Media\Performance pictures\Linz Performances\Land OÖ photos\BruQner (c) Land OÖ Andreas Krenn (6).jpg`
- [6] 2657x1772: `H:\My Drive\TU Wien\Project Works\TSOE\Media\Performance pictures\Linz Performances\Land OÖ photos\BruQner (c) Land OÖ Andreas Krenn (7).jpg`
- [7] 2657x1772: `H:\My Drive\TU Wien\Project Works\TSOE\Media\Performance pictures\Linz Performances\Land OÖ photos\BruQner (c) Land OÖ Andreas Krenn (8).jpg`
- [8] 2657x1772: `H:\My Drive\TU Wien\Project Works\TSOE\Media\Performance pictures\Linz Performances\Land OÖ photos\BruQner (c) Land OÖ Andreas Krenn (9).jpg`
- [9] 2657x1772: `H:\My Drive\TU Wien\Project Works\TSOE\Media\Performance pictures\Linz Performances\Land OÖ photos\BruQner (c) Land OÖ Andreas Krenn (10).jpg`
- [10] 2657x1772: `H:\My Drive\TU Wien\Project Works\TSOE\Media\Performance pictures\Linz Performances\Land OÖ photos\BruQner (c) Land OÖ Andreas Krenn (11).jpg`
- [11] 2657x1772: `H:\My Drive\TU Wien\Project Works\TSOE\Media\Performance pictures\Linz Performances\Land OÖ photos\BruQner (c) Land OÖ Andreas Krenn (12).jpg`
- [12] 2657x1772: `H:\My Drive\TU Wien\Project Works\TSOE\Media\Performance pictures\Linz Performances\Land OÖ photos\BruQner (c) Land OÖ Andreas Krenn (13).jpg`
- [13] 2657x1772: `H:\My Drive\TU Wien\Project Works\TSOE\Media\Performance pictures\Linz Performances\Land OÖ photos\BruQner (c) Land OÖ Andreas Krenn (14).jpg`
- [14] 2657x1772: `H:\My Drive\TU Wien\Project Works\TSOE\Media\Performance pictures\Linz Performances\Land OÖ photos\BruQner (c) Land OÖ Andreas Krenn (15).jpg`
- [15] 2657x1772: `H:\My Drive\TU Wien\Project Works\TSOE\Media\Performance pictures\Linz Performances\Land OÖ photos\BruQner (c) Land OÖ Andreas Krenn (16).jpg`
- [16] 2657x1772: `H:\My Drive\TU Wien\Project Works\TSOE\Media\Performance pictures\Linz Performances\Land OÖ photos\BruQner (c) Land OÖ Andreas Krenn (17).jpg`
- [17] 2657x1772: `H:\My Drive\TU Wien\Project Works\TSOE\Media\Performance pictures\Linz Performances\Land OÖ photos\BruQner (c) Land OÖ Andreas Krenn (18).jpg`
- [18] 2657x1772: `H:\My Drive\TU Wien\Project Works\TSOE\Media\Performance pictures\Linz Performances\Land OÖ photos\BruQner (c) Land OÖ Andreas Krenn (19).jpg`
- [19] 2657x1772: `H:\My Drive\TU Wien\Project Works\TSOE\Media\Performance pictures\Linz Performances\Land OÖ photos\BruQner (c) Land OÖ Andreas Krenn (20).jpg`
- [20] 2657x1772: `H:\My Drive\TU Wien\Project Works\TSOE\Media\Performance pictures\Linz Performances\Land OÖ photos\BruQner (c) Land OÖ Andreas Krenn (21).jpg`
- [21] 2657x1772: `H:\My Drive\TU Wien\Project Works\TSOE\Media\Performance pictures\Linz Performances\Land OÖ photos\BruQner (c) Land OÖ Andreas Krenn (22).jpg`
- [22] 2657x1772: `H:\My Drive\TU Wien\Project Works\TSOE\Media\Performance pictures\Linz Performances\Land OÖ photos\BruQner (c) Land OÖ Andreas Krenn (23).jpg`
- [23] 2657x1772: `H:\My Drive\TU Wien\Project Works\TSOE\Media\Performance pictures\Linz Performances\Land OÖ photos\BruQner (c) Land OÖ Andreas Krenn (24).jpg`
- [24] 2657x1772: `H:\My Drive\TU Wien\Project Works\TSOE\Media\Performance pictures\Linz Performances\Land OÖ photos\BruQner (c) Land OÖ Andreas Krenn (25).jpg`
- [25] 2657x1772: `H:\My Drive\TU Wien\Project Works\TSOE\Media\Performance pictures\Linz Performances\Land OÖ photos\BruQner (c) Land OÖ Andreas Krenn (26).jpg`
- [26] 2657x1772: `H:\My Drive\TU Wien\Project Works\TSOE\Media\Performance pictures\Linz Performances\Land OÖ photos\BruQner (c) Land OÖ Andreas Krenn (27).jpg`
- [27] 2657x1772: `H:\My Drive\TU Wien\Project Works\TSOE\Media\Performance pictures\Linz Performances\Land OÖ photos\BruQner (c) Land OÖ Andreas Krenn (28).jpg`
- [28] 2657x1772: `H:\My Drive\TU Wien\Project Works\TSOE\Media\Performance pictures\Linz Performances\Land OÖ photos\BruQner (c) Land OÖ Andreas Krenn (29).jpg`
- [29] 2657x1772: `H:\My Drive\TU Wien\Project Works\TSOE\Media\Performance pictures\Linz Performances\Land OÖ photos\BruQner (c) Land OÖ Andreas Krenn (30).jpg`
- [30] 2657x1772: `H:\My Drive\TU Wien\Project Works\TSOE\Media\Performance pictures\Linz Performances\Land OÖ photos\BruQner (c) Land OÖ Andreas Krenn (31).jpg`
- [31] 2657x1772: `H:\My Drive\TU Wien\Project Works\TSOE\Media\Performance pictures\Linz Performances\Land OÖ photos\BruQner (c) Land OÖ Andreas Krenn (32).jpg`
- [32] 2657x1772: `H:\My Drive\TU Wien\Project Works\TSOE\Media\Performance pictures\Linz Performances\Land OÖ photos\BruQner (c) Land OÖ Andreas Krenn (33).jpg`

### BruQner Stills (sheet `stills_*.jpg`)

- [0] 3840x2160: `H:\My Drive\TU Wien\Project Works\TSOE\Media\Performance pictures\Linz Performances\BruQner Stills\BruQner_Stills_1.2.1.jpg`
- [1] 3840x2160: `H:\My Drive\TU Wien\Project Works\TSOE\Media\Performance pictures\Linz Performances\BruQner Stills\BruQner_Stills_1.3.1.jpg`
- [2] 3840x2160: `H:\My Drive\TU Wien\Project Works\TSOE\Media\Performance pictures\Linz Performances\BruQner Stills\BruQner_Stills_1.4.1.jpg`
- [3] 3840x2160: `H:\My Drive\TU Wien\Project Works\TSOE\Media\Performance pictures\Linz Performances\BruQner Stills\BruQner_Stills_1.5.1.jpg`
- [4] 3840x2160: `H:\My Drive\TU Wien\Project Works\TSOE\Media\Performance pictures\Linz Performances\BruQner Stills\BruQner_Stills_1.10.1.jpg`
- [5] 3840x2160: `H:\My Drive\TU Wien\Project Works\TSOE\Media\Performance pictures\Linz Performances\BruQner Stills\BruQner_Stills_1.11.1.jpg`
- [6] 3840x2160: `H:\My Drive\TU Wien\Project Works\TSOE\Media\Performance pictures\Linz Performances\BruQner Stills\BruQner_Stills_1.12.1.jpg`
- [7] 3840x2160: `H:\My Drive\TU Wien\Project Works\TSOE\Media\Performance pictures\Linz Performances\BruQner Stills\BruQner_Stills_1.13.1.jpg`
- [8] 3840x2160: `H:\My Drive\TU Wien\Project Works\TSOE\Media\Performance pictures\Linz Performances\BruQner Stills\BruQner_Stills_1.14.1.jpg`
- [9] 3840x2160: `H:\My Drive\TU Wien\Project Works\TSOE\Media\Performance pictures\Linz Performances\BruQner Stills\BruQner_Stills_1.15.1.jpg`
- [10] 3840x2160: `H:\My Drive\TU Wien\Project Works\TSOE\Media\Performance pictures\Linz Performances\BruQner Stills\BruQner_Stills_1.16.1.jpg`
- [11] 3840x2160: `H:\My Drive\TU Wien\Project Works\TSOE\Media\Performance pictures\Linz Performances\BruQner Stills\BruQner_Stills_1.17.1.jpg`
- [12] 3840x2160: `H:\My Drive\TU Wien\Project Works\TSOE\Media\Performance pictures\Linz Performances\BruQner Stills\BruQner_Stills_1.18.1.jpg`
- [13] 3840x2160: `H:\My Drive\TU Wien\Project Works\TSOE\Media\Performance pictures\Linz Performances\BruQner Stills\BruQner_Stills_1.19.1.jpg`
- [14] 3840x2160: `H:\My Drive\TU Wien\Project Works\TSOE\Media\Performance pictures\Linz Performances\BruQner Stills\BruQner_Stills_1.20.1.jpg`
- [15] 3840x2160: `H:\My Drive\TU Wien\Project Works\TSOE\Media\Performance pictures\Linz Performances\BruQner Stills\BruQner_Stills_1.21.1.jpg`
- [16] 3840x2160: `H:\My Drive\TU Wien\Project Works\TSOE\Media\Performance pictures\Linz Performances\BruQner Stills\BruQner_Stills_1.22.1.jpg`
- [17] 3840x2160: `H:\My Drive\TU Wien\Project Works\TSOE\Media\Performance pictures\Linz Performances\BruQner Stills\BruQner_Stills_1.23.1.jpg`
- [18] 3840x2160: `H:\My Drive\TU Wien\Project Works\TSOE\Media\Performance pictures\Linz Performances\BruQner Stills\BruQner_Stills_1.24.1.jpg`
- [19] 3840x2160: `H:\My Drive\TU Wien\Project Works\TSOE\Media\Performance pictures\Linz Performances\BruQner Stills\BruQner_Stills_1.25.1.jpg`
- [20] 3840x2160: `H:\My Drive\TU Wien\Project Works\TSOE\Media\Performance pictures\Linz Performances\BruQner Stills\BruQner_Stills_1.26.1.jpg`
- [21] 3840x2160: `H:\My Drive\TU Wien\Project Works\TSOE\Media\Performance pictures\Linz Performances\BruQner Stills\BruQner_Stills_1.27.1.jpg`
- [22] 3840x2160: `H:\My Drive\TU Wien\Project Works\TSOE\Media\Performance pictures\Linz Performances\BruQner Stills\BruQner_Stills_1.28.1.jpg`
- [23] 3840x2160: `H:\My Drive\TU Wien\Project Works\TSOE\Media\Performance pictures\Linz Performances\BruQner Stills\BruQner_Stills_1.29.1.jpg`
- [24] 3840x2160: `H:\My Drive\TU Wien\Project Works\TSOE\Media\Performance pictures\Linz Performances\BruQner Stills\BruQner_Stills_1.30.1.jpg`
- [25] 3840x2160: `H:\My Drive\TU Wien\Project Works\TSOE\Media\Performance pictures\Linz Performances\BruQner Stills\BruQner_Stills_1.31.1.jpg`
- [26] 3840x2160: `H:\My Drive\TU Wien\Project Works\TSOE\Media\Performance pictures\Linz Performances\BruQner Stills\BruQner_Stills_1.32.1.jpg`
- [27] 3840x2160: `H:\My Drive\TU Wien\Project Works\TSOE\Media\Performance pictures\Linz Performances\BruQner Stills\BruQner_Stills_1.33.1.jpg`
- [28] 3840x2160: `H:\My Drive\TU Wien\Project Works\TSOE\Media\Performance pictures\Linz Performances\BruQner Stills\BruQner_Stills_1.34.1.jpg`
- [29] 3840x2160: `H:\My Drive\TU Wien\Project Works\TSOE\Media\Performance pictures\Linz Performances\BruQner Stills\BruQner_Stills_1.35.1.jpg`
- [30] 3840x2160: `H:\My Drive\TU Wien\Project Works\TSOE\Media\Performance pictures\Linz Performances\BruQner Stills\BruQner_Stills_1.36.1.jpg`
- [31] 3840x2160: `H:\My Drive\TU Wien\Project Works\TSOE\Media\Performance pictures\Linz Performances\BruQner Stills\BruQner_Stills_1.37.1.jpg`
- [32] 3840x2160: `H:\My Drive\TU Wien\Project Works\TSOE\Media\Performance pictures\Linz Performances\BruQner Stills\BruQner_Stills_1.38.1.jpg`
- [33] 3840x2160: `H:\My Drive\TU Wien\Project Works\TSOE\Media\Performance pictures\Linz Performances\BruQner Stills\BruQner_Stills_1.39.1.jpg`
- [34] 3840x2160: `H:\My Drive\TU Wien\Project Works\TSOE\Media\Performance pictures\Linz Performances\BruQner Stills\BruQner_Stills_1.40.1.jpg`
- [35] 3840x2160: `H:\My Drive\TU Wien\Project Works\TSOE\Media\Performance pictures\Linz Performances\BruQner Stills\BruQner_Stills_1.41.1.jpg`
- [36] 3840x2160: `H:\My Drive\TU Wien\Project Works\TSOE\Media\Performance pictures\Linz Performances\BruQner Stills\BruQner_Stills_1.42.1.jpg`
- [37] 3840x2160: `H:\My Drive\TU Wien\Project Works\TSOE\Media\Performance pictures\Linz Performances\BruQner Stills\BruQner_Stills_1.43.1.jpg`
- [38] 3840x2160: `H:\My Drive\TU Wien\Project Works\TSOE\Media\Performance pictures\Linz Performances\BruQner Stills\BruQner_Stills_1.44.1.jpg`
- [39] 3840x2160: `H:\My Drive\TU Wien\Project Works\TSOE\Media\Performance pictures\Linz Performances\BruQner Stills\BruQner_Stills_1.45.1.jpg`
- [40] 3840x2160: `H:\My Drive\TU Wien\Project Works\TSOE\Media\Performance pictures\Linz Performances\BruQner Stills\BruQner_Stills_1.46.1.jpg`
- [41] 3840x2160: `H:\My Drive\TU Wien\Project Works\TSOE\Media\Performance pictures\Linz Performances\BruQner Stills\BruQner_Stills_1.47.1.jpg`
- [42] 3840x2160: `H:\My Drive\TU Wien\Project Works\TSOE\Media\Performance pictures\Linz Performances\BruQner Stills\BruQner_Stills_1.48.1.jpg`
- [43] 3840x2160: `H:\My Drive\TU Wien\Project Works\TSOE\Media\Performance pictures\Linz Performances\BruQner Stills\BruQner_Stills_1.49.1.jpg`
- [44] 3840x2160: `H:\My Drive\TU Wien\Project Works\TSOE\Media\Performance pictures\Linz Performances\BruQner Stills\BruQner_Stills_1.50.1.jpg`
- [45] 3840x2160: `H:\My Drive\TU Wien\Project Works\TSOE\Media\Performance pictures\Linz Performances\BruQner Stills\BruQner_Stills_1.51.1.jpg`

### Show to people / Vienna / Ball der Wissenschaften (sheet `misc_perf_*.jpg`)

- [0] 3072x4080: `H:\My Drive\TU Wien\Project Works\TSOE\Media\Performance pictures\Linz Performances\Show to people\PXL_20240903_191344084.jpg`
- [1] 3072x4080: `H:\My Drive\TU Wien\Project Works\TSOE\Media\Performance pictures\Linz Performances\Show to people\PXL_20240904_202638354.MP.jpg`
- [2] 3072x4080: `H:\My Drive\TU Wien\Project Works\TSOE\Media\Performance pictures\Linz Performances\Show to people\PXL_20240903_192701779.MP.jpg`
- [3] 2736x3648: `H:\My Drive\TU Wien\Project Works\TSOE\Media\Performance pictures\Linz Performances\Show to people\PXL_20240904_195409546.jpg`
- [4] 4000x2668: `H:\My Drive\TU Wien\Project Works\TSOE\Media\Performance pictures\Linz Performances\Show to people\bruqnerthe-sound-of-entanglement--clemens-wenger-at-enar-de-dios-rodrguez-es-martin-ringbauer-at-johannes-kofler-at-richard-kng-at-alexander-ploier-at-benjamin-orthner-atgh-philipp-haslinger-at_53972967048_o.jpg`
- [5] 4000x2667: `H:\My Drive\TU Wien\Project Works\TSOE\Media\Performance pictures\Linz Performances\Show to people\bruqnerthe-sound-of-entanglement--clemens-wenger-at-enar-de-dios-rodrguez-es-martin-ringbauer-at-johannes-kofler-at-richard-kng-at-alexander-ploier-at-benjamin-orthner-atgh-philipp-haslinger-at_53972967243_o.jpg`
- [6] 4000x2668: `H:\My Drive\TU Wien\Project Works\TSOE\Media\Performance pictures\Linz Performances\Show to people\bruqnerthe-sound-of-entanglement--clemens-wenger-at-enar-de-dios-rodrguez-es-martin-ringbauer-at-johannes-kofler-at-richard-kng-at-alexander-ploier-at-benjamin-orthner-atgh-philipp-haslinger-at_53971847407_o.jpg`
- [7] 4000x2668: `H:\My Drive\TU Wien\Project Works\TSOE\Media\Performance pictures\Linz Performances\Show to people\bruqnerthe-sound-of-entanglement--clemens-wenger-at-enar-de-dios-rodrguez-es-martin-ringbauer-at-johannes-kofler-at-richard-kng-at-alexander-ploier-at-benjamin-orthner-atgh-philipp-haslinger-at_53972730506_o.jpg`
- [8] 4000x2668: `H:\My Drive\TU Wien\Project Works\TSOE\Media\Performance pictures\Linz Performances\Show to people\bruqnerthe-sound-of-entanglement--clemens-wenger-at-enar-de-dios-rodrguez-es-martin-ringbauer-at-johannes-kofler-at-richard-kng-at-alexander-ploier-at-benjamin-orthner-atgh-philipp-haslinger-at_53972730281_o.jpg`
- [9] 4000x2667: `H:\My Drive\TU Wien\Project Works\TSOE\Media\Performance pictures\Linz Performances\Show to people\bruqnerthe-sound-of-entanglement--clemens-wenger-at-enar-de-dios-rodrguez-es-martin-ringbauer-at-johannes-kofler-at-richard-kng-at-alexander-ploier-at-benjamin-orthner-atgh-philipp-haslinger-at_53972730241_o.jpg`
- [10] 4000x2668: `H:\My Drive\TU Wien\Project Works\TSOE\Media\Performance pictures\Linz Performances\Show to people\bruqnerthe-sound-of-entanglement--clemens-wenger-at-enar-de-dios-rodrguez-es-martin-ringbauer-at-johannes-kofler-at-richard-kng-at-alexander-ploier-at-benjamin-orthner-atgh-philipp-haslinger-at_53973053339_o.jpg`
- [11] 4000x2668: `H:\My Drive\TU Wien\Project Works\TSOE\Media\Performance pictures\Linz Performances\Show to people\bruqnerthe-sound-of-entanglement-clemens-wenger-at-enar-de-dios-rodrguez-es-martin-ringbauer-at-johannes-kofler-at-richard-kng-at-alexander-ploier-at-benjamin-orthner-atgh-philipp-haslinger-at_53971847387_o.jpg`
- [12] 4000x2667: `H:\My Drive\TU Wien\Project Works\TSOE\Media\Performance pictures\Linz Performances\Show to people\bruqnerthe-sound-of-entanglement--clemens-wenger-at-enar-de-dios-rodrguez-es-martin-ringbauer-at-johannes-kofler-at-richard-kng-at-alexander-ploier-at-benjamin-orthner-atgh-philipp-haslinger-at_53973053449_o.jpg`
- [13] 1200x1600: `H:\My Drive\TU Wien\Project Works\TSOE\Media\Performance pictures\Linz Performances\Show to people\BruQner_Performance01.jpeg`
- [14] 1200x1600: `H:\My Drive\TU Wien\Project Works\TSOE\Media\Performance pictures\Linz Performances\Show to people\BruQnerPerformance02.jpeg`
- [15] 1600x1070: `H:\My Drive\TU Wien\Project Works\TSOE\Media\Performance pictures\Linz Performances\Show to people\Film Drunk Guy Photo.jpg`
- [16] 3072x4080: `H:\My Drive\TU Wien\Project Works\TSOE\Media\Performance pictures\Linz Ars Electronica BruQner\PXL_20240903_192652980.jpg`
- [17] 1879x1051: `H:\My Drive\TU Wien\Project Works\TSOE\Media\Performance pictures\Vienna Trail Run Performances\For Osaka Application\TSOE_osaka_photos-6.jpg`
- [18] 1770x1080: `H:\My Drive\TU Wien\Project Works\TSOE\Media\Performance pictures\Vienna Trail Run Performances\For Osaka Application\TSOE_osaka_photos-5.jpg`
- [19] 4160x6240: `H:\My Drive\TU Wien\Project Works\TSOE\Media\Performance pictures\Vienna Trail Run Performances\For Osaka Application\TSOE_osaka_photos-4.jpg`
- [20] 3875x6062: `H:\My Drive\TU Wien\Project Works\TSOE\Media\Performance pictures\Vienna Trail Run Performances\For Osaka Application\TSOE_osaka_photos-3.jpg`
- [21] 6134x4089: `H:\My Drive\TU Wien\Project Works\TSOE\Media\Performance pictures\Vienna Trail Run Performances\For Osaka Application\TSOE_osaka_photos-2.jpg`
- [22] 6240x4160: `H:\My Drive\TU Wien\Project Works\TSOE\Media\Performance pictures\Vienna Trail Run Performances\For Osaka Application\TSOE_osaka_photos-1.jpg`
- [23] 4080x3072: `H:\My Drive\TU Wien\Project Works\TSOE\Media\Performance pictures\Ball der Wissenschaften\PXL_20250125_221727826.jpg`
- [24] 4080x3072: `H:\My Drive\TU Wien\Project Works\TSOE\Media\Performance pictures\Ball der Wissenschaften\PXL_20250125_221725650.jpg`
- [25] 4080x3072: `H:\My Drive\TU Wien\Project Works\TSOE\Media\Performance pictures\Ball der Wissenschaften\PXL_20250125_210459244.jpg`
- [26] 4080x3072: `H:\My Drive\TU Wien\Project Works\TSOE\Media\Performance pictures\Ball der Wissenschaften\PXL_20250125_210504429.jpg`
- [27] 4080x3072: `H:\My Drive\TU Wien\Project Works\TSOE\Media\Performance pictures\Ball der Wissenschaften\PXL_20250125_210939237.jpg`
- [28] 4080x3072: `H:\My Drive\TU Wien\Project Works\TSOE\Media\Performance pictures\Ball der Wissenschaften\PXL_20250125_210502378.jpg`
- [29] 4080x3072: `H:\My Drive\TU Wien\Project Works\TSOE\Media\Performance pictures\Ball der Wissenschaften\PXL_20250125_203442473.jpg`
- [30] 3072x4080: `H:\My Drive\TU Wien\Project Works\TSOE\Media\Performance pictures\Ball der Wissenschaften\PXL_20250124_142652614.jpg`

### Media misc, designs, presentations, TD images (sheet `mediamisc_*.jpg`)

- [0] 3072x1572: `H:\My Drive\TU Wien\Project Works\TSOE\Media\Send To Johannes\video screenshot.png`
- [1] 3072x1572: `H:\My Drive\TU Wien\Project Works\TSOE\Media\Send To Johannes\video screenshot_drawing.png`
- [2] 3840x2160: `H:\My Drive\TU Wien\Project Works\TSOE\Media\Send To Johannes\opaque2.png`
- [3] 2160x2160: `H:\My Drive\TU Wien\Project Works\TSOE\Media\Send To Johannes\transparent3.png`
- [4] 3840x2160: `H:\My Drive\TU Wien\Project Works\TSOE\Media\Send To Johannes\transparent1.png`
- [5] 3840x2160: `H:\My Drive\TU Wien\Project Works\TSOE\Media\Send To Johannes\opaque1.png`
- [6] 1600x1200: `H:\My Drive\TU Wien\Project Works\TSOE\Media\Photos\signal-2024-05-11-161147_007.jpeg`
- [7] 1600x1200: `H:\My Drive\TU Wien\Project Works\TSOE\Media\Photos\signal-2024-05-11-161147_006.jpeg`
- [8] 1600x1200: `H:\My Drive\TU Wien\Project Works\TSOE\Media\Photos\signal-2024-05-11-161147_005.jpeg`
- [9] 1600x1200: `H:\My Drive\TU Wien\Project Works\TSOE\Media\Photos\signal-2024-05-11-161147_004.jpeg`
- [10] 1600x1200: `H:\My Drive\TU Wien\Project Works\TSOE\Media\Photos\signal-2024-05-11-161147_003.jpeg`
- [11] 1600x1200: `H:\My Drive\TU Wien\Project Works\TSOE\Media\Photos\signal-2024-05-11-161147_002.jpeg`
- [12] 900x1600: `H:\My Drive\TU Wien\Project Works\TSOE\Media\Photos\signal-2024-05-10-173140_002.jpeg`
- [13] 1200x1600: `H:\My Drive\TU Wien\Project Works\TSOE\Media\Photos\signal-2024-05-10-172239_002.jpeg`
- [14] 3000x4000: `H:\My Drive\TU Wien\Project Works\TSOE\Media\Photos\signal-2024-05-10-161940_002.jpeg`
- [15] 1920x1080: `H:\My Drive\TU Wien\Project Works\TSOE\Media\Photos\Designs\Setup Title Image\Setup Title v2.png`
- [16] 1920x1080: `H:\My Drive\TU Wien\Project Works\TSOE\Media\Photos\Designs\Setup Title Image\Setup Title v1.png`
- [17] 1920x1080: `H:\My Drive\TU Wien\Project Works\TSOE\Media\Photos\Designs\Setup Title Image\Setup Title v5.png`
- [18] 1920x1080: `H:\My Drive\TU Wien\Project Works\TSOE\Media\Photos\Designs\Setup Title Image\Setup Title v4.png`
- [19] 1920x1080: `H:\My Drive\TU Wien\Project Works\TSOE\Media\Photos\Designs\Setup Title Image\Setup Title v3.png`
- [20] 1920x1080: `H:\My Drive\TU Wien\Project Works\TSOE\Media\Youtube Thumbnail\BruQner Thumbnail.png`
- [21] 1920x1080: `H:\My Drive\TU Wien\Project Works\TSOE\Media\Youtube Thumbnail\TSOE Thumbnail.png`
- [22] 900x1600: `H:\My Drive\TU Wien\Project Works\TSOE\Media\Published Media\newspaper.jpeg`
- [23] 1920x1080: `H:\My Drive\TU Wien\Project Works\TSOE\Media\Osaka Application\Setup Title v4.png`
- [24] 1920x1080: `H:\My Drive\TU Wien\Project Works\TSOE\Media\Osaka Application\Setup Title v3.png`
- [25] 1920x1080: `H:\My Drive\TU Wien\Project Works\TSOE\Media\Osaka Application\Setup Title v2.png`
- [26] 1920x1080: `H:\My Drive\TU Wien\Project Works\TSOE\Media\Osaka Application\Setup Title v1.png`
- [27] 1920x1080: `H:\My Drive\TU Wien\Project Works\TSOE\Media\Osaka Application\Setup Title v5.png`
- [28] 3858x2170: `H:\My Drive\TU Wien\Project Works\TSOE\Media\Team Title Slide\TSOE Team Slide.png`
- [29] 3858x2170: `H:\My Drive\TU Wien\Project Works\TSOE\Media\Team Title Slide\TSOE Team Slide_new.png`
- [30] 3858x2170: `H:\My Drive\TU Wien\Project Works\TSOE\Media\Team Title Slide\TSOE Team Slide_notext.png`
- [31] 1600x1200: `H:\My Drive\TU Wien\Project Works\TSOE\Media\Washington\newspaper article.jpeg`
- [32] 2502x3562: `H:\My Drive\TU Wien\Project Works\TSOE\order sheet qutools.jpg`
- [33] 1752x2477: `H:\My Drive\TU Wien\Project Works\TSOE\quED measurements _240228_174747.jpg`
- [34] 1752x2477: `H:\My Drive\TU Wien\Project Works\TSOE\setup layout.jpg`
- [35] 1570x1590: `H:\My Drive\TU Wien\Project Works\TSOE\setup sketch.jpg`
- [36] 1770x1080: `H:\My Drive\TU Wien\Project Works\TSOE\Presentations\EFS Application Presentation\DSCF3529-3.jpg`
- [37] 1879x1051: `H:\My Drive\TU Wien\Project Works\TSOE\Presentations\EFS Application Presentation\DSCF3529-4.jpg`
- [38] 6003x3947: `H:\My Drive\TU Wien\Project Works\TSOE\Presentations\EFS Application Presentation\DSCF9327.jpg`
- [39] 2000x1125: `H:\My Drive\TU Wien\Project Works\TSOE\Presentations\DPG Tagung\media\2nd Performance Slides The Sound of Entanglement.pptx_page-0032.jpg`
- [40] 2000x1125: `H:\My Drive\TU Wien\Project Works\TSOE\Presentations\DPG Tagung\media\2nd Performance Slides The Sound of Entanglement.pptx_page-0029.jpg`
- [41] 2000x1125: `H:\My Drive\TU Wien\Project Works\TSOE\Presentations\DPG Tagung\media\2nd Performance Slides The Sound of Entanglement.pptx_page-0030.jpg`
- [42] 2000x1125: `H:\My Drive\TU Wien\Project Works\TSOE\Presentations\DPG Tagung\media\2nd Performance Slides The Sound of Entanglement.pptx_page-0031.jpg`
- [43] 1800x2461: `H:\My Drive\TU Wien\Project Works\TSOE\Presentations\DPG Tagung\media\graphic elements\top-view-tablet-marble-table.png`
- [44] 1800x2461: `H:\My Drive\TU Wien\Project Works\TSOE\Presentations\DPG Tagung\media\graphic elements\tablet.png`
- [45] 414x332: `H:\My Drive\TU Wien\Project Works\TSOE\Presentations\DPG Tagung\media\graphic elements\Untitled-1.png`
- [46] 414x332: `H:\My Drive\TU Wien\Project Works\TSOE\Presentations\DPG Tagung\media\graphic elements\filter.png`
- [47] 414x332: `H:\My Drive\TU Wien\Project Works\TSOE\Presentations\DPG Tagung\media\graphic elements\arrow.png`
- [48] 2370x1376: `H:\My Drive\TU Wien\Project Works\TSOE\Presentations\DPG Tagung\media\touchdesigner Screenshots\Screenshot 2025-03-16 210525.png`
- [49] 1714x1426: `H:\My Drive\TU Wien\Project Works\TSOE\Presentations\DPG Tagung\media\touchdesigner Screenshots\tablet.png`
- [50] 2216x1184: `H:\My Drive\TU Wien\Project Works\TSOE\Presentations\DPG Tagung\media\touchdesigner Screenshots\Screenshot 2025-03-16 210638.png`
- [51] 2698x1412: `H:\My Drive\TU Wien\Project Works\TSOE\Presentations\DPG Tagung\media\touchdesigner Screenshots\Screenshot 2025-03-16 210603.png`
- [52] 2000x1500: `H:\My Drive\TU Wien\Project Works\TSOE\Presentations\DPG Tagung\Photos\dpg_presentation_photo_3.jpeg`
- [53] 2000x1500: `H:\My Drive\TU Wien\Project Works\TSOE\Presentations\DPG Tagung\Photos\dpg_presentation_photo_4.jpeg`
- [54] 2000x1500: `H:\My Drive\TU Wien\Project Works\TSOE\Presentations\DPG Tagung\Photos\dpg_presentation_photo_5.jpeg`
- [55] 2000x1500: `H:\My Drive\TU Wien\Project Works\TSOE\Presentations\DPG Tagung\Photos\dpg_presentation_photo_2.jpeg`
- [56] 2000x1500: `H:\My Drive\TU Wien\Project Works\TSOE\Presentations\DPG Tagung\Photos\dpg_presentation_photo_1.jpeg`
- [57] 1920x1080: `H:\My Drive\TU Wien\Project Works\TSOE\Touchdesigner\Ball der Wissenschaften 2025\TouchDesigner Ideas\Untitled-1 copy.png`
- [58] 1920x1080: `H:\My Drive\TU Wien\Project Works\TSOE\Touchdesigner\Washington\Media\Untitled-1 copy.png`
- [59] 3797x2136: `H:\My Drive\TU Wien\Project Works\TSOE\Touchdesigner\CIVA\enar\Pictures\BruQner Bilder copy.jpg`
- [60] 3840x2160: `H:\My Drive\TU Wien\Project Works\TSOE\Touchdesigner\CIVA\enar\Pictures\BruQner_Stills_1.14.1 copy.jpg`
- [61] 2048x1024: `H:\My Drive\TU Wien\Project Works\TSOE\Touchdesigner\CIVA\Example projects\TDSW-Assets\environment-map.jpg`
- [62] 2208x1080: `H:\My Drive\TU Wien\Project Works\TSOE\Touchdesigner\CIVA\Example projects\TDSW-Assets\Sample-Images\tdsw-image1.jpg`
- [63] 2208x1080: `H:\My Drive\TU Wien\Project Works\TSOE\Touchdesigner\CIVA\Example projects\TDSW-Assets\Sample-Images\tdsw-image2.jpg`
- [64] 3840x2160: `H:\My Drive\TU Wien\Project Works\TSOE\Touchdesigner\CIVA\Final CIVA Project\assets\BruQner_Stills_1.14.1 copy.jpg`
- [65] 3797x2136: `H:\My Drive\TU Wien\Project Works\TSOE\Touchdesigner\CIVA\Final CIVA Project\assets\BruQner Bilder copy.jpg`

### Figures (sheet `figures_*.jpg`)

- [0] 1529x2030: `H:\My Drive\TU Wien\Project Works\TSOE\Figures\setup for performnce presentation\BruQner Setup\PXL_20240901_174723842.jpg`
- [1] 5219x3463: `H:\My Drive\TU Wien\Project Works\TSOE\Figures\setup for performnce presentation\BruQner Setup\3.png`
- [2] 5219x3463: `H:\My Drive\TU Wien\Project Works\TSOE\Figures\setup for performnce presentation\BruQner Setup\2.png`
- [3] 5219x3463: `H:\My Drive\TU Wien\Project Works\TSOE\Figures\setup for performnce presentation\BruQner Setup\1.png`
- [4] 5219x3463: `H:\My Drive\TU Wien\Project Works\TSOE\Figures\setup for performnce presentation\BruQner Setup\4.png`
- [5] 5219x3463: `H:\My Drive\TU Wien\Project Works\TSOE\Figures\setup for performnce presentation\BruQner Setup\4v2.png`
- [6] 1277x1646: `H:\My Drive\TU Wien\Project Works\TSOE\Figures\Inkscape\Code Flowcharts\Visual Code Flowchart\visuals_flowchart.png`
- [7] 1915x2470: `H:\My Drive\TU Wien\Project Works\TSOE\Figures\Inkscape\Code Flowcharts\Visual Code Flowchart\for presentation\Page 8.png`
- [8] 1915x2470: `H:\My Drive\TU Wien\Project Works\TSOE\Figures\Inkscape\Code Flowcharts\Visual Code Flowchart\for presentation\Page 7.png`
- [9] 1915x2470: `H:\My Drive\TU Wien\Project Works\TSOE\Figures\Inkscape\Code Flowcharts\Visual Code Flowchart\for presentation\Page 6.png`
- [10] 1915x2470: `H:\My Drive\TU Wien\Project Works\TSOE\Figures\Inkscape\Code Flowcharts\Visual Code Flowchart\for presentation\Page 5.png`
- [11] 1915x2470: `H:\My Drive\TU Wien\Project Works\TSOE\Figures\Inkscape\Code Flowcharts\Visual Code Flowchart\for presentation\Page 4.png`
- [12] 1915x2470: `H:\My Drive\TU Wien\Project Works\TSOE\Figures\Inkscape\Code Flowcharts\Visual Code Flowchart\for presentation\Page 1.png`
- [13] 1240x530: `H:\My Drive\TU Wien\Project Works\TSOE\Figures\Inkscape\Code Flowcharts\base_level_architecture\base_level_architecture_flowchart.png`
- [14] 1240x530: `H:\My Drive\TU Wien\Project Works\TSOE\Figures\Inkscape\Code Flowcharts\base_level_architecture\highlighted\highlighted_visuals.png`
- [15] 1240x530: `H:\My Drive\TU Wien\Project Works\TSOE\Figures\Inkscape\Code Flowcharts\base_level_architecture\highlighted\highlighted_setup.png`
- [16] 1240x530: `H:\My Drive\TU Wien\Project Works\TSOE\Figures\Inkscape\Code Flowcharts\base_level_architecture\highlighted\highlighted_experiment.png`
- [17] 1240x530: `H:\My Drive\TU Wien\Project Works\TSOE\Figures\Inkscape\Code Flowcharts\base_level_architecture\highlighted\highlighted_numbered.png`
- [18] 2140x1347: `H:\My Drive\TU Wien\Project Works\TSOE\Figures\Inkscape\Setup\PBS Cube\pbs_cube.png`
- [19] 1456x1140: `H:\My Drive\TU Wien\Project Works\TSOE\Figures\Inkscape\Setup\simplified setup\SetupLabelledBeamPaths.png`
- [20] 2673x2276: `H:\My Drive\TU Wien\Project Works\TSOE\Figures\Inkscape\Setup\SPCM holder\spcm_holder.png`
- [21] 3504x2478: `H:\My Drive\TU Wien\Project Works\TSOE\Figures\Inkscape\Setup\SPCM holder\Sideways SPCM holder (1).png`
- [22] 3504x2478: `H:\My Drive\TU Wien\Project Works\TSOE\Figures\Inkscape\Setup\SPCM holder\Sideways SPCM holder (3).png`
- [23] 3504x2478: `H:\My Drive\TU Wien\Project Works\TSOE\Figures\Inkscape\Setup\SPCM holder\Sideways SPCM holder.png`
- [24] 3504x2478: `H:\My Drive\TU Wien\Project Works\TSOE\Figures\Inkscape\Setup\SPCM holder\Sideways SPCM holder (2).png`
- [25] 3504x2478: `H:\My Drive\TU Wien\Project Works\TSOE\Figures\Inkscape\Setup\Alignment Plates\wo.png`
- [26] 2391x2115: `H:\My Drive\TU Wien\Project Works\TSOE\Figures\Inkscape\Setup\Alignment Plates\Alignment Plate Holder (1).png`
- [27] 3504x2478: `H:\My Drive\TU Wien\Project Works\TSOE\Figures\Inkscape\Setup\Alignment Plates\w.png`
- [28] 3504x2478: `H:\My Drive\TU Wien\Project Works\TSOE\Figures\Inkscape\Setup\Alignment Plates\lasers.png`
- [29] 2411x2113: `H:\My Drive\TU Wien\Project Works\TSOE\Figures\Inkscape\Setup\Alignment Plates\Alignment Plate Holder.png`
- [30] 2745x2216: `H:\My Drive\TU Wien\Project Works\TSOE\Figures\Inkscape\Setup\Alignment Plates\alignment_plates.png`
- [31] 1706x1237: `H:\My Drive\TU Wien\Project Works\TSOE\Figures\Inkscape\Lambda Functions\triple_lambda.png`
- [32] 2023x544: `H:\My Drive\TU Wien\Project Works\TSOE\Figures\Inkscape\Misc\sheet music\haydn_dice_game_score.png`
- [33] 1030x530: `H:\My Drive\TU Wien\Project Works\TSOE\Figures\Inkscape\Misc\floor plans\stands_organs.png`
- [34] 1030x530: `H:\My Drive\TU Wien\Project Works\TSOE\Figures\Inkscape\Misc\floor plans\stands_organs_projectors.png`
- [35] 1537x735: `H:\My Drive\TU Wien\Project Works\TSOE\Figures\Inkscape\Misc\floor plans\zoomin.png`
- [36] 1117x790: `H:\My Drive\TU Wien\Project Works\TSOE\Figures\Inkscape\PythonFigures\bbo_ior.png`
- [37] 1500x1911: `H:\My Drive\TU Wien\Project Works\TSOE\Figures\Inkscape\TSOE Paper\exports\performance_layout.png`
- [38] 1514x1004: `H:\My Drive\TU Wien\Project Works\TSOE\Figures\Inkscape\TSOE Paper\exports\setup_top_down.png`
- [39] 512x512: `H:\My Drive\TU Wien\Project Works\TSOE\Figures\Inkscape\TSOE Paper\RandomWalk Python Script\random_walk.png`
- [40] 1124x1275: `H:\My Drive\TU Wien\Project Works\TSOE\Figures\Inkscape\TSOE Paper\8Rooms_Graphics.png`
- [41] 1772x1772: `H:\My Drive\TU Wien\Project Works\TSOE\Figures\Inkscape\TSOE Paper\Sheet Music\Figure_Motivset_BruQner 4.png`
- [42] 800x1055: `H:\My Drive\TU Wien\Project Works\TSOE\Figures\Inkscape\TSOE Paper\sheet_music.png`
- [43] 794x473: `H:\My Drive\TU Wien\Project Works\TSOE\Figures\Inkscape\TSOE Paper\8Rooms.png`
- [44] 2539x2236: `H:\My Drive\TU Wien\Project Works\TSOE\Figures\Phone OSC controller\phone_osc.png`
- [45] 1344x1893: `H:\My Drive\TU Wien\Project Works\TSOE\Figures\Phone OSC controller\phone_osc_2.png`
- [46] 1344x654: `H:\My Drive\TU Wien\Project Works\TSOE\Figures\Phone OSC controller\phone_osc_1.png`
- [47] 1344x2351: `H:\My Drive\TU Wien\Project Works\TSOE\Figures\Phone OSC controller\phone_osc_3.png`
- [48] 1266x569: `H:\My Drive\TU Wien\Project Works\TSOE\Figures\sketches\lambda_func_simple.jpg`
- [49] 1122x633: `H:\My Drive\TU Wien\Project Works\TSOE\Figures\sketches\PBS and lambda half.jpg`
- [50] 1888x919: `H:\My Drive\TU Wien\Project Works\TSOE\Figures\sketches\latencyhistogram.png`
- [51] 1020x636: `H:\My Drive\TU Wien\Project Works\TSOE\Figures\sketches\latencyhistogram_2.png`
- [52] 1888x919: `H:\My Drive\TU Wien\Project Works\TSOE\Figures\OSC and communication\Max8\patches_vertical.png`
- [53] 1888x919: `H:\My Drive\TU Wien\Project Works\TSOE\Figures\OSC and communication\Max8\patches.png`
- [54] 1634x932: `H:\My Drive\TU Wien\Project Works\TSOE\Figures\OSC and communication\Max8\maxpatch.png`
- [55] 1010x1024: `H:\My Drive\TU Wien\Project Works\TSOE\Figures\CAD\setup sketch.png`
- [56] 2772x1408: `H:\My Drive\TU Wien\Project Works\TSOE\Figures\CAD\setup sketch 3.png`
- [57] 1308x1302: `H:\My Drive\TU Wien\Project Works\TSOE\Figures\CAD\setup sketch 2.png`
- [58] 731x1024: `H:\My Drive\TU Wien\Project Works\TSOE\Figures\organs\Linz_Neuer_Dom_Rudigier-Orgel_01.jpg`
- [59] 480x720: `H:\My Drive\TU Wien\Project Works\TSOE\Figures\organs\big organ.png`
- [60] 3875x6062: `H:\My Drive\TU Wien\Project Works\TSOE\Figures\photos for paper\rotation mount.jpg`

### Figures: Old Setup and Max patches (sheet `figures2_*.jpg`)

- [0] 5219x3463: `H:\My Drive\TU Wien\Project Works\TSOE\Figures\setup for performnce presentation\Old Setup\aufbau_lasers.png`
- [1] 5219x3463: `H:\My Drive\TU Wien\Project Works\TSOE\Figures\setup for performnce presentation\Old Setup\aufbau_laser_labels.png`
- [2] 5219x3463: `H:\My Drive\TU Wien\Project Works\TSOE\Figures\setup for performnce presentation\Old Setup\aufbau_laser_highlights.png`
- [3] 5219x3463: `H:\My Drive\TU Wien\Project Works\TSOE\Figures\setup for performnce presentation\Old Setup\aufbau_blank.png`
- [4] 5219x3463: `H:\My Drive\TU Wien\Project Works\TSOE\Figures\setup for performnce presentation\Old Setup\aufbau_laser_source.png`
- [5] 3024x1964: `H:\My Drive\TU Wien\Project Works\TSOE\Figures\Max Patches\From Clemens\Bildschirmfoto 2025-03-14 um 11.04.50.png`
- [6] 3024x1964: `H:\My Drive\TU Wien\Project Works\TSOE\Figures\Max Patches\From Clemens\Bildschirmfoto 2025-03-14 um 11.08.52.png`
- [7] 3024x1964: `H:\My Drive\TU Wien\Project Works\TSOE\Figures\Max Patches\From Clemens\Bildschirmfoto 2025-03-14 um 11.07.37.png`
- [8] 3024x1964: `H:\My Drive\TU Wien\Project Works\TSOE\Figures\Max Patches\From Clemens\Bildschirmfoto 2025-03-14 um 11.06.59.png`
- [9] 1410x1356: `H:\My Drive\TU Wien\Project Works\TSOE\Figures\Max Patches\From Clemens\Bildschirmfoto 2025-03-14 um 11.06.01.png`
- [10] 3024x1964: `H:\My Drive\TU Wien\Project Works\TSOE\Figures\Max Patches\From Clemens\Bildschirmfoto 2025-03-14 um 11.05.55.png`
- [11] 3024x1964: `H:\My Drive\TU Wien\Project Works\TSOE\Figures\Max Patches\From Clemens\Bildschirmfoto 2025-03-14 um 11.15.13.png`
- [12] 912x1144: `H:\My Drive\TU Wien\Project Works\TSOE\Figures\Max Patches\From Clemens\Bildschirmfoto 2025-03-14 um 11.18.09.png`
- [13] 3024x1964: `H:\My Drive\TU Wien\Project Works\TSOE\Figures\Max Patches\From Clemens\Bildschirmfoto 2025-03-14 um 11.18.04.png`
- [14] 3024x1964: `H:\My Drive\TU Wien\Project Works\TSOE\Figures\Max Patches\From Clemens\Bildschirmfoto 2025-03-14 um 11.15.56.png`

### 2nd performance slides (sheet `slides_*.jpg`)

- [0] 2000x1125: `H:\My Drive\TU Wien\Project Works\TSOE\Media\2nd perforamnce slides\2nd Performance Slides The Sound of Entanglement.pptx_page-0001.jpg`
- [1] 2000x1125: `H:\My Drive\TU Wien\Project Works\TSOE\Media\2nd perforamnce slides\2nd Performance Slides The Sound of Entanglement.pptx_page-0002.jpg`
- [2] 2000x1125: `H:\My Drive\TU Wien\Project Works\TSOE\Media\2nd perforamnce slides\2nd Performance Slides The Sound of Entanglement.pptx_page-0003.jpg`
- [3] 2000x1125: `H:\My Drive\TU Wien\Project Works\TSOE\Media\2nd perforamnce slides\2nd Performance Slides The Sound of Entanglement.pptx_page-0004.jpg`
- [4] 2000x1125: `H:\My Drive\TU Wien\Project Works\TSOE\Media\2nd perforamnce slides\2nd Performance Slides The Sound of Entanglement.pptx_page-0005.jpg`
- [5] 2000x1125: `H:\My Drive\TU Wien\Project Works\TSOE\Media\2nd perforamnce slides\2nd Performance Slides The Sound of Entanglement.pptx_page-0006.jpg`
- [6] 2000x1125: `H:\My Drive\TU Wien\Project Works\TSOE\Media\2nd perforamnce slides\2nd Performance Slides The Sound of Entanglement.pptx_page-0007.jpg`
- [7] 2000x1125: `H:\My Drive\TU Wien\Project Works\TSOE\Media\2nd perforamnce slides\2nd Performance Slides The Sound of Entanglement.pptx_page-0008.jpg`
- [8] 2000x1125: `H:\My Drive\TU Wien\Project Works\TSOE\Media\2nd perforamnce slides\2nd Performance Slides The Sound of Entanglement.pptx_page-0009.jpg`
- [9] 2000x1125: `H:\My Drive\TU Wien\Project Works\TSOE\Media\2nd perforamnce slides\2nd Performance Slides The Sound of Entanglement.pptx_page-0010.jpg`
- [10] 2000x1125: `H:\My Drive\TU Wien\Project Works\TSOE\Media\2nd perforamnce slides\2nd Performance Slides The Sound of Entanglement.pptx_page-0011.jpg`
- [11] 2000x1125: `H:\My Drive\TU Wien\Project Works\TSOE\Media\2nd perforamnce slides\2nd Performance Slides The Sound of Entanglement.pptx_page-0012.jpg`
- [12] 2000x1125: `H:\My Drive\TU Wien\Project Works\TSOE\Media\2nd perforamnce slides\2nd Performance Slides The Sound of Entanglement.pptx_page-0013.jpg`
- [13] 2000x1125: `H:\My Drive\TU Wien\Project Works\TSOE\Media\2nd perforamnce slides\2nd Performance Slides The Sound of Entanglement.pptx_page-0014.jpg`
- [14] 2000x1125: `H:\My Drive\TU Wien\Project Works\TSOE\Media\2nd perforamnce slides\2nd Performance Slides The Sound of Entanglement.pptx_page-0015.jpg`
- [15] 2000x1125: `H:\My Drive\TU Wien\Project Works\TSOE\Media\2nd perforamnce slides\2nd Performance Slides The Sound of Entanglement.pptx_page-0016.jpg`
- [16] 2000x1125: `H:\My Drive\TU Wien\Project Works\TSOE\Media\2nd perforamnce slides\2nd Performance Slides The Sound of Entanglement.pptx_page-0017.jpg`
- [17] 2000x1125: `H:\My Drive\TU Wien\Project Works\TSOE\Media\2nd perforamnce slides\2nd Performance Slides The Sound of Entanglement.pptx_page-0018.jpg`
- [18] 2000x1125: `H:\My Drive\TU Wien\Project Works\TSOE\Media\2nd perforamnce slides\2nd Performance Slides The Sound of Entanglement.pptx_page-0019.jpg`
- [19] 2000x1125: `H:\My Drive\TU Wien\Project Works\TSOE\Media\2nd perforamnce slides\2nd Performance Slides The Sound of Entanglement.pptx_page-0020.jpg`
- [20] 2000x1125: `H:\My Drive\TU Wien\Project Works\TSOE\Media\2nd perforamnce slides\2nd Performance Slides The Sound of Entanglement.pptx_page-0021.jpg`
- [21] 2000x1125: `H:\My Drive\TU Wien\Project Works\TSOE\Media\2nd perforamnce slides\2nd Performance Slides The Sound of Entanglement.pptx_page-0022.jpg`
- [22] 2000x1125: `H:\My Drive\TU Wien\Project Works\TSOE\Media\2nd perforamnce slides\2nd Performance Slides The Sound of Entanglement.pptx_page-0023.jpg`
- [23] 2000x1125: `H:\My Drive\TU Wien\Project Works\TSOE\Media\2nd perforamnce slides\2nd Performance Slides The Sound of Entanglement.pptx_page-0024.jpg`
- [24] 2000x1125: `H:\My Drive\TU Wien\Project Works\TSOE\Media\2nd perforamnce slides\2nd Performance Slides The Sound of Entanglement.pptx_page-0025.jpg`
- [25] 2000x1125: `H:\My Drive\TU Wien\Project Works\TSOE\Media\2nd perforamnce slides\2nd Performance Slides The Sound of Entanglement.pptx_page-0026.jpg`
- [26] 2000x1125: `H:\My Drive\TU Wien\Project Works\TSOE\Media\2nd perforamnce slides\2nd Performance Slides The Sound of Entanglement.pptx_page-0027.jpg`
- [27] 2000x1125: `H:\My Drive\TU Wien\Project Works\TSOE\Media\2nd perforamnce slides\2nd Performance Slides The Sound of Entanglement.pptx_page-0028.jpg`
- [28] 2000x1125: `H:\My Drive\TU Wien\Project Works\TSOE\Media\2nd perforamnce slides\2nd Performance Slides The Sound of Entanglement.pptx_page-0029.jpg`
- [29] 2000x1125: `H:\My Drive\TU Wien\Project Works\TSOE\Media\2nd perforamnce slides\2nd Performance Slides The Sound of Entanglement.pptx_page-0030.jpg`
- [30] 2000x1125: `H:\My Drive\TU Wien\Project Works\TSOE\Media\2nd perforamnce slides\2nd Performance Slides The Sound of Entanglement.pptx_page-0031.jpg`
- [31] 2000x1125: `H:\My Drive\TU Wien\Project Works\TSOE\Media\2nd perforamnce slides\2nd Performance Slides The Sound of Entanglement.pptx_page-0032.jpg`

### Alain Aspect presentation (sheet `aspect_*.jpg`)

- [0] 3000x4000: `H:\My Drive\TU Wien\Project Works\TSOE\Alain Aspect Presentation\IMG_20240621_145615.jpg`
- [1] 3000x4000: `H:\My Drive\TU Wien\Project Works\TSOE\Alain Aspect Presentation\IMG_20240621_151222.jpg`
- [2] 3000x4000: `H:\My Drive\TU Wien\Project Works\TSOE\Alain Aspect Presentation\IMG_20240621_151455.jpg`
- [3] 3000x4000: `H:\My Drive\TU Wien\Project Works\TSOE\Alain Aspect Presentation\IMG_20240621_151637.jpg`
- [4] 3000x4000: `H:\My Drive\TU Wien\Project Works\TSOE\Alain Aspect Presentation\IMG_20240621_152049.jpg`
- [5] 3000x4000: `H:\My Drive\TU Wien\Project Works\TSOE\Alain Aspect Presentation\IMG_20240621_152239.jpg`
- [6] 3000x4000: `H:\My Drive\TU Wien\Project Works\TSOE\Alain Aspect Presentation\IMG_20240621_152255.jpg`
- [7] 3000x4000: `H:\My Drive\TU Wien\Project Works\TSOE\Alain Aspect Presentation\IMG_20240621_152325.jpg`
- [8] 3000x4000: `H:\My Drive\TU Wien\Project Works\TSOE\Alain Aspect Presentation\IMG_20240621_152631.jpg`
- [9] 3000x4000: `H:\My Drive\TU Wien\Project Works\TSOE\Alain Aspect Presentation\IMG_20240621_152846.jpg`
- [10] 3000x4000: `H:\My Drive\TU Wien\Project Works\TSOE\Alain Aspect Presentation\IMG_20240621_152941.jpg`
- [11] 3000x4000: `H:\My Drive\TU Wien\Project Works\TSOE\Alain Aspect Presentation\IMG_20240621_153012.jpg`
- [12] 3000x4000: `H:\My Drive\TU Wien\Project Works\TSOE\Alain Aspect Presentation\IMG_20240621_153129.jpg`
- [13] 3000x4000: `H:\My Drive\TU Wien\Project Works\TSOE\Alain Aspect Presentation\IMG_20240621_153149.jpg`
- [14] 3000x4000: `H:\My Drive\TU Wien\Project Works\TSOE\Alain Aspect Presentation\IMG_20240621_153245.jpg`
- [15] 3000x4000: `H:\My Drive\TU Wien\Project Works\TSOE\Alain Aspect Presentation\IMG_20240621_153320.jpg`
- [16] 3000x4000: `H:\My Drive\TU Wien\Project Works\TSOE\Alain Aspect Presentation\IMG_20240621_153512.jpg`
- [17] 3000x4000: `H:\My Drive\TU Wien\Project Works\TSOE\Alain Aspect Presentation\IMG_20240621_153535.jpg`
- [18] 3000x4000: `H:\My Drive\TU Wien\Project Works\TSOE\Alain Aspect Presentation\IMG_20240621_153737.jpg`
- [19] 3000x4000: `H:\My Drive\TU Wien\Project Works\TSOE\Alain Aspect Presentation\IMG_20240621_153758.jpg`
- [20] 3000x4000: `H:\My Drive\TU Wien\Project Works\TSOE\Alain Aspect Presentation\IMG_20240621_153856.jpg`
- [21] 3000x4000: `H:\My Drive\TU Wien\Project Works\TSOE\Alain Aspect Presentation\IMG_20240621_153904.jpg`
- [22] 3000x4000: `H:\My Drive\TU Wien\Project Works\TSOE\Alain Aspect Presentation\IMG_20240621_153906.jpg`
- [23] 3000x4000: `H:\My Drive\TU Wien\Project Works\TSOE\Alain Aspect Presentation\IMG_20240621_154820.jpg`
- [24] 3456x4608: `H:\My Drive\TU Wien\Project Works\TSOE\Alain Aspect Presentation\IMG_20240621_161128.jpg`

### Video frame grabs (`frames\NN.jpg`, sheet index = NN-1)

- 01 Figures/video clips/section 1.mp4 @2
- 02 Figures/video clips/section 2.mp4 @2
- 03 Figures/video clips/section 3.mp4 @6
- 04 Figures/video clips/section 4 Q.mp4 @6
- 05 Figures/video clips/section 4 C.mp4 @8
- 06 Figures/video clips/section 5.mp4 @10
- 07 Figures/video clips/section 6.mp4 @4
- 08 Figures/video clips/section 7 Q.mp4 @6
- 09 Figures/video clips/section 8.mp4 @10
- 10 Figures/video clips/Handheld visuals - Made with Clipchamp.mp4 @20
- 11 Figures/video clips/2025-03-14 23-33-03.mp4 @6
- 12 Figures/video clips/2025-03-14 23-32-19.mp4 @6
- 13 Media/Send To Johannes/Timelapse 1080.mp4 @15
- 14 edia/Timelapses/Timelapse Practice 1.mp4 @12
- 15 Media/Timelapses/setup blurry.mp4 @10
- 16 edia/Performance pictures/Linz Performances/Show to people/BruQner_Performance_Video.mp4 @5
- 17 Media/Performance pictures/Ball der Wissenschaften/PXL_20250125_210220396.mp4 @15
- 18 Media/Performance pictures/Ball der Wissenschaften/PXL_20250125_184053735.mp4 @4
- 19 Media/Performance pictures/Ball der Wissenschaften/PXL_20250124_193955063~2.mp4 @3
- 20 Media/Performance pictures/Ball der Wissenschaften/Wissenschaftsball TSOE Clip.mp4 @3
- 21 Media/Performance pictures/Linz Ars Electronica BruQner/2025-03-15 00-39-54.mp4 @15
- 22 Touchdesigner/CIVA/Final CIVA Project/assets/Classic.mov @18
- 23 Touchdesigner/Ball der Wissenschaften 2025/TouchDesigner Ideas/PPTMovie.0.mov @2
- 24 Touchdesigner/Ball der Wissenschaften 2025/TouchDesigner Ideas/PPTMovie7.mov @2
- 25 Presentations/DPG Tagung/media/graphic elements/filter spinning.mp4 @1
- 26 Touchdesigner/CIVA/Final CIVA Project/assets/PXL_20251002_175604765.mp4 @300
- 27 Touchdesigner/CIVA/Final CIVA Project/assets/PXL_20251002_175604765.mp4 @700
- 28 Media/Performance pictures/Ball der Wissenschaften/PXL_20250125_210941851.mp4 @3

## Appendix B: raw listing of Figures / Media / Inventor (size, modified date, path relative to ROOT)

```
== Figures
1.01MB	2024-09-01	Figures/setup for performnce presentation/BruQner Setup/PXL_20240901_174723842.jpg
394.65MB	2024-09-03	Figures/setup for performnce presentation/BruQner Setup/Aufbau.psd
12.42MB	2024-09-01	Figures/setup for performnce presentation/BruQner Setup/3.png
12.38MB	2024-09-01	Figures/setup for performnce presentation/BruQner Setup/2.png
9.65MB	2024-09-01	Figures/setup for performnce presentation/BruQner Setup/1.png
11.66MB	2024-09-01	Figures/setup for performnce presentation/BruQner Setup/4.png
10.91MB	2024-09-03	Figures/setup for performnce presentation/BruQner Setup/4v2.png
12.42MB	2025-03-18	Figures/setup for performnce presentation/BruQner Setup/3_compressed.png
2.37MB	2025-03-18	Figures/setup for performnce presentation/BruQner Setup/2_compressed.png
1.86MB	2025-03-18	Figures/setup for performnce presentation/BruQner Setup/1_compressed.png
33.48MB	2024-05-21	Figures/setup for performnce presentation/Old Setup/DSCF5990.RAF
33.41MB	2024-05-21	Figures/setup for performnce presentation/Old Setup/DSCF5993.RAF
33.89MB	2024-05-21	Figures/setup for performnce presentation/Old Setup/DSCF5991.RAF
33.65MB	2024-05-21	Figures/setup for performnce presentation/Old Setup/DSCF5992.RAF
33.06MB	2024-05-21	Figures/setup for performnce presentation/Old Setup/DSCF5989.RAF
19.89MB	2024-05-21	Figures/setup for performnce presentation/Old Setup/aufbau_lasers.png
18.48MB	2024-05-21	Figures/setup for performnce presentation/Old Setup/aufbau_laser_labels.png
18.44MB	2024-05-21	Figures/setup for performnce presentation/Old Setup/aufbau_laser_highlights.png
16.84MB	2024-05-21	Figures/setup for performnce presentation/Old Setup/aufbau_blank.png
19.81MB	2024-05-21	Figures/setup for performnce presentation/Old Setup/aufbau_laser_source.png
0.01MB	2024-05-21	Figures/setup for performnce presentation/Old Setup/DSCF5992.xmp
279.37MB	2024-05-23	Figures/setup for performnce presentation/Old Setup/aufbau.psd
33.08MB	2024-05-21	Figures/setup for performnce presentation/Old Setup/DSCF5994.RAF
0.51MB	2024-10-18	Figures/Inkscape/Code Flowcharts/Visual Code Flowchart/Visual Code Flowchart.svg
0.05MB	2024-10-09	Figures/Inkscape/Code Flowcharts/Visual Code Flowchart/visuals_flowchart.pdf
0.10MB	2024-09-25	Figures/Inkscape/Code Flowcharts/Visual Code Flowchart/visuals_flowchart_CS1.svg
0.10MB	2024-09-25	Figures/Inkscape/Code Flowcharts/Visual Code Flowchart/visuals_flowchart_CS2.svg
0.29MB	2024-10-03	Figures/Inkscape/Code Flowcharts/Visual Code Flowchart/visuals_flowchart.png
0.30MB	2024-10-03	Figures/Inkscape/Code Flowcharts/Visual Code Flowchart/visuals_flowchart.svg
0.17MB	2024-10-05	Figures/Inkscape/Code Flowcharts/Visual Code Flowchart/for presentation/Page 8.png
0.18MB	2024-10-05	Figures/Inkscape/Code Flowcharts/Visual Code Flowchart/for presentation/Page 7.png
0.24MB	2024-10-05	Figures/Inkscape/Code Flowcharts/Visual Code Flowchart/for presentation/Page 6.png
0.28MB	2024-10-05	Figures/Inkscape/Code Flowcharts/Visual Code Flowchart/for presentation/Page 5.png
0.35MB	2024-10-05	Figures/Inkscape/Code Flowcharts/Visual Code Flowchart/for presentation/Page 4.png
0.44MB	2024-10-05	Figures/Inkscape/Code Flowcharts/Visual Code Flowchart/for presentation/Page 1.png
0.35MB	2024-09-25	Figures/Inkscape/Code Flowcharts/Experiment Control Code Flowchart/Experiment Control Code Flowchart.svg
0.57MB	2024-10-07	Figures/Inkscape/Code Flowcharts/base_level_architecture/base_level_architecture_flowchart.svg
0.02MB	2024-10-03	Figures/Inkscape/Code Flowcharts/base_level_architecture/base_level_architecture_flowchart.pdf
0.10MB	2024-10-03	Figures/Inkscape/Code Flowcharts/base_level_architecture/base_level_architecture_flowchart.png
0.03MB	2024-10-04	Figures/Inkscape/Code Flowcharts/base_level_architecture/highlighted/highlighted_visuals.png
0.03MB	2024-10-04	Figures/Inkscape/Code Flowcharts/base_level_architecture/highlighted/highlighted_setup.png
0.03MB	2024-10-07	Figures/Inkscape/Code Flowcharts/base_level_architecture/highlighted/highlighted_experiment.png
0.04MB	2024-10-07	Figures/Inkscape/Code Flowcharts/base_level_architecture/highlighted/highlighted_numbered.png
0.23MB	2024-10-06	Figures/Inkscape/Setup/PBS Cube/pbs_cube.svg
0.01MB	2024-09-27	Figures/Inkscape/Setup/PBS Cube/pbs_cube.pdf
0.21MB	2024-10-06	Figures/Inkscape/Setup/PBS Cube/pbs_cube.png
17.86MB	2024-11-22	Figures/Inkscape/Setup/complete setup/complete_setup.svg
0.02MB	2024-11-22	Figures/Inkscape/Setup/complete setup/to_scale_setup_sketch.pdf
10.27MB	2025-07-25	Figures/Inkscape/Setup/simplified setup/SetupDiagram.svg
0.01MB	2024-09-27	Figures/Inkscape/Setup/simplified setup/simplified_setup.pdf
2.96MB	2025-06-01	Figures/Inkscape/Setup/simplified setup/SetupBeamPath.pdf
1.26MB	2025-07-14	Figures/Inkscape/Setup/simplified setup/SetupLabelledBeamPaths.png
0.60MB	2024-10-16	Figures/Inkscape/Setup/SPCM holder/spcm_holder.png
6.41MB	2024-10-16	Figures/Inkscape/Setup/SPCM holder/spcm_holder.psd
0.50MB	2024-10-16	Figures/Inkscape/Setup/SPCM holder/Sideways SPCM holder (1).png
0.66MB	2024-10-16	Figures/Inkscape/Setup/SPCM holder/Sideways SPCM holder (3).png
0.72MB	2024-10-16	Figures/Inkscape/Setup/SPCM holder/Sideways SPCM holder.png
0.51MB	2024-10-16	Figures/Inkscape/Setup/SPCM holder/Sideways SPCM holder (2).png
14.85MB	2024-10-16	Figures/Inkscape/Setup/Alignment Plates/alignment_plates.psd
0.75MB	2024-10-16	Figures/Inkscape/Setup/Alignment Plates/wo.png
0.62MB	2024-10-16	Figures/Inkscape/Setup/Alignment Plates/Alignment Plate Holder (1).png
0.76MB	2024-10-16	Figures/Inkscape/Setup/Alignment Plates/w.png
0.44MB	2024-10-16	Figures/Inkscape/Setup/Alignment Plates/lasers.png
0.28MB	2024-10-16	Figures/Inkscape/Setup/Alignment Plates/Alignment Plate Holder.png
0.81MB	2024-10-16	Figures/Inkscape/Setup/Alignment Plates/alignment_plates.png
0.30MB	2024-10-05	Figures/Inkscape/Lambda Functions/Lambda Functions.svg
0.02MB	2024-09-26	Figures/Inkscape/Lambda Functions/triple_lambda.pdf
0.12MB	2024-10-05	Figures/Inkscape/Lambda Functions/triple_lambda.png
1.75MB	2024-10-02	Figures/Inkscape/Misc/sheet music/haydn_dice_game_score.png
18.93MB	2024-10-02	Figures/Inkscape/Misc/sheet music/haydn_dice_game_score.psd
5.95MB	2024-10-02	Figures/Inkscape/Misc/sheet music/haydn.pdf
45.44MB	2024-10-09	Figures/Inkscape/Misc/floor plans/floor_plans.svg
0.39MB	2024-10-07	Figures/Inkscape/Misc/floor plans/stands_organs.png
0.42MB	2024-10-07	Figures/Inkscape/Misc/floor plans/stands_organs_projectors.png
0.20MB	2024-10-07	Figures/Inkscape/Misc/floor plans/zoomin.png
18.68MB	2024-10-09	Figures/Inkscape/Misc/floor plans/floor_plans.pdf
0.17MB	2024-10-22	Figures/Inkscape/PythonFigures/bbo_ior.png
0.01MB	2024-10-23	Figures/Inkscape/Theory/SPDC/three_wave_mixing.pdf
0.02MB	2024-10-23	Figures/Inkscape/Theory/SPDC/conservation.pdf
0.40MB	2024-10-24	Figures/Inkscape/Theory/SPDC/SPDC.svg
0.23MB	2024-10-22	Figures/Inkscape/Theory/SPDC/pbs_cube.svg
0.02MB	2024-10-22	Figures/Inkscape/Theory/SPDC/ellipsoid.pdf
0.04MB	2024-10-24	Figures/Inkscape/Theory/SPDC/type1_3d.pdf
0.40MB	2024-10-24	Figures/Inkscape/Theory/SPDC/ellipsoid.svg.2024_10_24_15_36_01.0.svg
1.44MB	2025-07-25	Figures/Inkscape/TSOE Paper/base_level_architecture_flowchart.svg
73.64MB	2025-07-06	Figures/Inkscape/TSOE Paper/floor_plans.svg
0.03MB	2024-11-21	Figures/Inkscape/TSOE Paper/exports/code_flowchart.pdf
0.70MB	2024-11-22	Figures/Inkscape/TSOE Paper/exports/performance_layout.png
0.02MB	2024-11-22	Figures/Inkscape/TSOE Paper/exports/to_scale_setup_sketch.pdf
1.91MB	2025-06-01	Figures/Inkscape/TSOE Paper/exports/setup_top_down.png
0.10MB	2025-09-09	Figures/Inkscape/TSOE Paper/8Rooms.svg
0.02MB	2025-09-09	Figures/Inkscape/TSOE Paper/8Rooms.pdf
8.75MB	2025-07-31	Figures/Inkscape/TSOE Paper/8Rooms_Touchdesigner.svg
0.00MB	2025-06-01	Figures/Inkscape/TSOE Paper/RandomWalk Python Script/main.py
0.00MB	2025-06-01	Figures/Inkscape/TSOE Paper/RandomWalk Python Script/random_walk.png
0.93MB	2025-07-31	Figures/Inkscape/TSOE Paper/8Rooms_Graphics.png
0.14MB	2025-06-01	Figures/Inkscape/TSOE Paper/Sheet Music/Figure_Motivset_BruQner 4.png
0.02MB	2025-06-01	Figures/Inkscape/TSOE Paper/Sheet Music/individual/Layer 15.png
0.03MB	2025-06-01	Figures/Inkscape/TSOE Paper/Sheet Music/individual/Layer 16.png
0.02MB	2025-06-01	Figures/Inkscape/TSOE Paper/Sheet Music/individual/Layer 17.png
0.02MB	2025-06-01	Figures/Inkscape/TSOE Paper/Sheet Music/individual/Layer 18.png
0.02MB	2025-06-01	Figures/Inkscape/TSOE Paper/Sheet Music/individual/Layer 19.png
0.02MB	2025-06-01	Figures/Inkscape/TSOE Paper/Sheet Music/individual/Layer 20.png
0.03MB	2025-06-01	Figures/Inkscape/TSOE Paper/Sheet Music/individual/Layer 21.png
0.02MB	2025-06-01	Figures/Inkscape/TSOE Paper/Sheet Music/individual/Group 2 copy.png
1.08MB	2025-07-31	Figures/Inkscape/TSOE Paper/sheet_music.svg
0.23MB	2025-06-01	Figures/Inkscape/TSOE Paper/sheet_music.png
0.03MB	2025-06-02	Figures/Inkscape/TSOE Paper/code_flowchart.pdf
0.09MB	2025-07-06	Figures/Inkscape/TSOE Paper/BellSchemeSketch.svg
0.24MB	2025-07-31	Figures/Inkscape/TSOE Paper/sheet_music_bw
0.02MB	2025-07-31	Figures/Inkscape/TSOE Paper/8roomsclicks_graphic_bw.pdf
0.04MB	2025-09-09	Figures/Inkscape/TSOE Paper/8Rooms.png
0.40MB	2024-09-17	Figures/Phone OSC controller/phone_osc.png
7.82MB	2024-09-17	Figures/Phone OSC controller/phone_osc.psd
0.14MB	2024-09-17	Figures/Phone OSC controller/phone_osc_2.png
0.06MB	2024-09-17	Figures/Phone OSC controller/phone_osc_1.png
0.09MB	2024-09-17	Figures/Phone OSC controller/phone_osc_3.png
0.12MB	2024-09-12	Figures/sketches/lambda_func_simple.jpg
0.15MB	2024-09-12	Figures/sketches/PBS and lambda half.jpg
0.22MB	2024-09-12	Figures/sketches/latencyhistogram.png
0.07MB	2024-10-07	Figures/sketches/latencyhistogram_2.png
8.93MB	2024-09-12	Figures/OSC and communication/Max8/maxpatch.psd
0.47MB	2024-09-12	Figures/OSC and communication/Max8/patches_vertical.png
0.44MB	2024-09-12	Figures/OSC and communication/Max8/patches.png
0.11MB	2024-09-12	Figures/OSC and communication/Max8/maxpatch.png
0.64MB	2024-03-06	Figures/CAD/setup sketch.png
2.40MB	2024-03-11	Figures/CAD/setup sketch 3.png
1.07MB	2024-03-11	Figures/CAD/setup sketch 2.png
0.05MB	2024-05-07	Figures/logos/anton-bruckner-2024-logo-mit-signet.svg
0.28MB	2024-10-05	Figures/Mariendom Floorplans/Entwurfsplan_Vinzenz_Statz_1859-mariendom-linz-altarraum-gestaltung-plan-zeichnung.jpg
0.13MB	2024-10-05	Figures/Mariendom Floorplans/mit_Dommusik_III-mariendom-linz-alt-dom-bauwerk-plan-zeichnung-3b.jpg
0.14MB	2024-10-05	Figures/Mariendom Floorplans/Entwurfsplan_Kuehn_Malvezzi_2016___Gesamtraum__mit_Legende_-P_4_-_Entwurfsplan_Kuehn_Malvezzi_2016_Gesamtraum_mit_Legende_web.jpg
0.17MB	2024-10-05	Figures/Mariendom Floorplans/Bestandsplan_1980er-Jahre_bis_2016-P_3_-_Bestandsplan_1980er-Jahre_bis_2016_web.jpg
0.16MB	2024-10-05	Figures/Mariendom Floorplans/Bestandsplan_1930er-_bis_1980er-Jahre-P_2_-_Bestandsplan_1930er-_bis_1980er-Jahre_web.jpg
0.17MB	2024-10-05	Figures/Mariendom Floorplans/picture_6909_17.jpg-1600x1200-oltarni-ostrov-v-lineckem-marianskem-chramu-altarraumgestaltung-mariendom.jpg
2.06MB	2024-10-05	Figures/Mariendom Floorplans/sharpened.png
1.14MB	2024-10-05	Figures/video clips/section 4 Q.mp4
2.20MB	2024-10-05	Figures/video clips/section 3.mp4
1.21MB	2024-10-05	Figures/video clips/section 7 Q.mp4
0.85MB	2024-10-05	Figures/video clips/section 6.mp4
1.31MB	2024-10-05	Figures/video clips/section 5.mp4
0.24MB	2024-10-05	Figures/video clips/section 8.mp4
0.72MB	2024-10-05	Figures/video clips/section 2.mp4
1.37MB	2024-10-05	Figures/video clips/section 1.mp4
0.80MB	2024-10-05	Figures/video clips/section 4 C.mp4
28.41MB	2024-10-05	Figures/video clips/Handheld visuals - Made with Clipchamp.mp4
1.54MB	2025-03-14	Figures/video clips/2025-03-14 23-33-03.mp4
2.12MB	2025-03-14	Figures/video clips/2025-03-14 23-32-19.mp4
0.85MB	2024-10-05	Figures/organs/Pflueger-Chororgel_im_Mariendom_Linz-Pflueger-Chororgel_DSC06723_bearb_heller_-_-Dommusikverein-Linz_Stefanie-Petelin_web.jpg
0.00MB	2024-10-06	Figures/organs/organ picture sources.txt
0.24MB	2024-10-06	Figures/organs/Rudigierorgel_im_Mariendom_Linz-ORGEL_GEHAeUSE_The_Best_Kunstverlag.jpg
0.25MB	2024-10-06	Figures/organs/Linz_Neuer_Dom_Rudigier-Orgel_01.jpg
0.99MB	2024-10-06	Figures/organs/big organ.png
2.31MB	2025-03-18	Figures/photos for paper/rotation mount.jpg
0.73MB	2025-03-14	Figures/Max Patches/From Clemens/Bildschirmfoto 2025-03-14 um 11.04.50.png
0.59MB	2025-03-14	Figures/Max Patches/From Clemens/Bildschirmfoto 2025-03-14 um 11.08.52.png
1.33MB	2025-03-14	Figures/Max Patches/From Clemens/Bildschirmfoto 2025-03-14 um 11.07.37.png
0.82MB	2025-03-14	Figures/Max Patches/From Clemens/Bildschirmfoto 2025-03-14 um 11.06.59.png
0.09MB	2025-03-14	Figures/Max Patches/From Clemens/Bildschirmfoto 2025-03-14 um 11.06.01.png
0.21MB	2025-03-14	Figures/Max Patches/From Clemens/Bildschirmfoto 2025-03-14 um 11.05.55.png
0.31MB	2025-03-14	Figures/Max Patches/From Clemens/Bildschirmfoto 2025-03-14 um 11.15.13.png
0.09MB	2025-03-14	Figures/Max Patches/From Clemens/Bildschirmfoto 2025-03-14 um 11.18.09.png
0.24MB	2025-03-14	Figures/Max Patches/From Clemens/Bildschirmfoto 2025-03-14 um 11.18.04.png
0.85MB	2025-03-14	Figures/Max Patches/From Clemens/Bildschirmfoto 2025-03-14 um 11.15.56.png
== Media
64.23MB	2024-04-05	Media/Send To Johannes/Timelapse 1080.mp4
5.35MB	2024-04-12	Media/Send To Johannes/video screenshot.png
5.34MB	2024-04-12	Media/Send To Johannes/video screenshot_drawing.png
2.92MB	2024-04-10	Media/Send To Johannes/opaque2.png
1.42MB	2024-04-10	Media/Send To Johannes/transparent3.png
0.19MB	2024-04-10	Media/Send To Johannes/Assembly1.jpg
1.96MB	2024-04-10	Media/Send To Johannes/transparent1.png
3.50MB	2024-04-10	Media/Send To Johannes/opaque1.png
0.00MB	2026-09-22	Media/Send To Johannes/desktop.ini
8.21MB	2024-05-17	Media/Copy of BruQner.pptx
8.21MB	2024-05-17	Media/Johannes presentation incomplete.pptx
0.23MB	2024-05-16	Media/Photos/signal-2024-05-11-161147_007.jpeg
0.18MB	2024-05-16	Media/Photos/signal-2024-05-11-161147_006.jpeg
0.10MB	2024-05-16	Media/Photos/signal-2024-05-11-161147_005.jpeg
0.22MB	2024-05-16	Media/Photos/signal-2024-05-11-161147_004.jpeg
0.11MB	2024-05-16	Media/Photos/signal-2024-05-11-161147_003.jpeg
0.23MB	2024-05-16	Media/Photos/signal-2024-05-11-161147_002.jpeg
0.13MB	2024-05-16	Media/Photos/signal-2024-05-10-173140_002.jpeg
0.16MB	2024-05-16	Media/Photos/signal-2024-05-10-172239_002.jpeg
1.02MB	2024-05-16	Media/Photos/signal-2024-05-10-161940_002.jpeg
2.75MB	2024-10-03	Media/Photos/Designs/Setup Title Image/Setup Title v2.png
2.75MB	2024-10-03	Media/Photos/Designs/Setup Title Image/Setup Title v1.png
23.35MB	2024-10-03	Media/Photos/Designs/Setup Title Image/BruQner Thumbnail.psd
2.72MB	2024-10-03	Media/Photos/Designs/Setup Title Image/Setup Title v5.png
2.75MB	2024-10-03	Media/Photos/Designs/Setup Title Image/Setup Title v4.png
2.75MB	2024-10-03	Media/Photos/Designs/Setup Title Image/Setup Title v3.png
118.38MB	2024-06-04	Media/Timelapses/Timelapse Practice 1.mp4
146.16MB	2024-06-04	Media/Timelapses/setup blurry.mp4
0.00MB	2026-09-22	Media/Timelapses/desktop.ini
8.17MB	2024-06-14	Media/2nd perforamnce slides/2nd Performance Slides The Sound of Entanglement.pptx.pdf
0.43MB	2024-06-24	Media/2nd perforamnce slides/2nd Performance Slides The Sound of Entanglement.pptx_page-0001.jpg
0.90MB	2024-06-24	Media/2nd perforamnce slides/2nd Performance Slides The Sound of Entanglement.pptx_page-0002.jpg
0.77MB	2024-06-24	Media/2nd perforamnce slides/2nd Performance Slides The Sound of Entanglement.pptx_page-0003.jpg
0.50MB	2024-06-24	Media/2nd perforamnce slides/2nd Performance Slides The Sound of Entanglement.pptx_page-0004.jpg
0.47MB	2024-06-24	Media/2nd perforamnce slides/2nd Performance Slides The Sound of Entanglement.pptx_page-0005.jpg
0.50MB	2024-06-24	Media/2nd perforamnce slides/2nd Performance Slides The Sound of Entanglement.pptx_page-0006.jpg
0.48MB	2024-06-24	Media/2nd perforamnce slides/2nd Performance Slides The Sound of Entanglement.pptx_page-0007.jpg
0.47MB	2024-06-24	Media/2nd perforamnce slides/2nd Performance Slides The Sound of Entanglement.pptx_page-0008.jpg
0.69MB	2024-06-24	Media/2nd perforamnce slides/2nd Performance Slides The Sound of Entanglement.pptx_page-0009.jpg
0.68MB	2024-06-24	Media/2nd perforamnce slides/2nd Performance Slides The Sound of Entanglement.pptx_page-0010.jpg
0.62MB	2024-06-24	Media/2nd perforamnce slides/2nd Performance Slides The Sound of Entanglement.pptx_page-0011.jpg
0.52MB	2024-06-24	Media/2nd perforamnce slides/2nd Performance Slides The Sound of Entanglement.pptx_page-0012.jpg
0.55MB	2024-06-24	Media/2nd perforamnce slides/2nd Performance Slides The Sound of Entanglement.pptx_page-0013.jpg
0.22MB	2024-06-24	Media/2nd perforamnce slides/2nd Performance Slides The Sound of Entanglement.pptx_page-0014.jpg
0.12MB	2024-06-24	Media/2nd perforamnce slides/2nd Performance Slides The Sound of Entanglement.pptx_page-0015.jpg
0.35MB	2024-06-24	Media/2nd perforamnce slides/2nd Performance Slides The Sound of Entanglement.pptx_page-0016.jpg
0.47MB	2024-06-24	Media/2nd perforamnce slides/2nd Performance Slides The Sound of Entanglement.pptx_page-0017.jpg
0.50MB	2024-06-24	Media/2nd perforamnce slides/2nd Performance Slides The Sound of Entanglement.pptx_page-0018.jpg
0.34MB	2024-06-24	Media/2nd perforamnce slides/2nd Performance Slides The Sound of Entanglement.pptx_page-0019.jpg
0.32MB	2024-06-24	Media/2nd perforamnce slides/2nd Performance Slides The Sound of Entanglement.pptx_page-0020.jpg
0.34MB	2024-06-24	Media/2nd perforamnce slides/2nd Performance Slides The Sound of Entanglement.pptx_page-0021.jpg
0.61MB	2024-06-24	Media/2nd perforamnce slides/2nd Performance Slides The Sound of Entanglement.pptx_page-0022.jpg
0.73MB	2024-06-24	Media/2nd perforamnce slides/2nd Performance Slides The Sound of Entanglement.pptx_page-0023.jpg
0.95MB	2024-06-24	Media/2nd perforamnce slides/2nd Performance Slides The Sound of Entanglement.pptx_page-0024.jpg
0.93MB	2024-06-24	Media/2nd perforamnce slides/2nd Performance Slides The Sound of Entanglement.pptx_page-0025.jpg
0.88MB	2024-06-24	Media/2nd perforamnce slides/2nd Performance Slides The Sound of Entanglement.pptx_page-0026.jpg
0.65MB	2024-06-24	Media/2nd perforamnce slides/2nd Performance Slides The Sound of Entanglement.pptx_page-0027.jpg
0.58MB	2024-06-24	Media/2nd perforamnce slides/2nd Performance Slides The Sound of Entanglement.pptx_page-0028.jpg
0.43MB	2024-06-24	Media/2nd perforamnce slides/2nd Performance Slides The Sound of Entanglement.pptx_page-0029.jpg
0.34MB	2024-06-24	Media/2nd perforamnce slides/2nd Performance Slides The Sound of Entanglement.pptx_page-0032.jpg
0.46MB	2024-06-24	Media/2nd perforamnce slides/2nd Performance Slides The Sound of Entanglement.pptx_page-0030.jpg
0.91MB	2024-06-24	Media/2nd perforamnce slides/2nd Performance Slides The Sound of Entanglement.pptx_page-0031.jpg
0.14MB	2024-06-24	Media/2nd perforamnce slides/1st 1st 1st slide.png
15.00MB	2025-03-10	Media/Youtube Thumbnail/BruQner Thumbnail.psd
2.80MB	2024-08-02	Media/Youtube Thumbnail/BruQner Thumbnail.png
2.70MB	2025-03-10	Media/Youtube Thumbnail/TSOE Thumbnail.png
0.08MB	2024-08-07	Media/Code Media/Visuals icon.psd
0.77MB	2024-08-13	Media/2024_AB_Karten_BruQner_A5.pdf
0.63MB	2024-08-23	Media/Published Media/2024_BruQner_Folder.pdf
1.34MB	2024-08-23	Media/Published Media/BruQner - The Sound of Entanglement - quantA.pdf
0.32MB	2024-08-24	Media/Published Media/newspaper.jpeg
0.67MB	2024-08-27	Media/Published Media/24-Stunden-Party zu Bruckners 200er - ooe.ORF.pdf
3.61MB	2024-08-30	Media/Published Media/Wenn Photonen dirigieren _ TU Wien.pdf
1.33MB	2026-09-02	Media/Published Media/Breaking the Wall of Quantum Music _ Falling Walls.pdf
2.11MB	2024-08-23	Media/Organisation Plans/Dispo_Bruqner_Vorab.pdf
23.35MB	2024-08-25	Media/Osaka Application/BruQner Thumbnail.psd
2.75MB	2024-08-25	Media/Osaka Application/Setup Title v4.png
2.75MB	2024-08-25	Media/Osaka Application/Setup Title v3.png
2.75MB	2024-08-25	Media/Osaka Application/Setup Title v2.png
2.75MB	2024-08-25	Media/Osaka Application/Setup Title v1.png
2.72MB	2024-08-25	Media/Osaka Application/Setup Title v5.png
2.11MB	2024-10-05	Media/camera filming plan.pdf
163.49MB	2025-03-15	Media/Team Title Slide/TSOE Team Slide (1).psd
6.27MB	2025-02-26	Media/Team Title Slide/TSOE Team Slide.png
6.32MB	2025-03-15	Media/Team Title Slide/TSOE Team Slide_new.png
6.22MB	2025-03-15	Media/Team Title Slide/TSOE Team Slide_notext.png
3.89MB	2024-09-23	Media/Performance pictures/Linz Performances/Show to people/BruQner_Stills_1.46.1.jpg
3.39MB	2024-09-23	Media/Performance pictures/Linz Performances/Show to people/BruQner_Stills_1.40.1.jpg
2.02MB	2024-09-23	Media/Performance pictures/Linz Performances/Show to people/BruQner_Stills_1.23.1.jpg
2.55MB	2024-09-23	Media/Performance pictures/Linz Performances/Show to people/BruQner_Stills_1.45.1.jpg
3.44MB	2024-09-23	Media/Performance pictures/Linz Performances/Show to people/BruQner_Stills_1.4.1.jpg
2.90MB	2024-09-23	Media/Performance pictures/Linz Performances/Show to people/BruQner_Stills_1.25.1.jpg
3.68MB	2024-09-23	Media/Performance pictures/Linz Performances/Show to people/BruQner_Stills_1.47.1.jpg
3.19MB	2024-09-23	Media/Performance pictures/Linz Performances/Show to people/BruQner_Stills_1.27.1.jpg
3.85MB	2024-09-23	Media/Performance pictures/Linz Performances/Show to people/BruQner_Stills_1.14.1.jpg
3.00MB	2024-09-23	Media/Performance pictures/Linz Performances/Show to people/BruQner_Stills_1.8.1.jpg
2.71MB	2024-09-23	Media/Performance pictures/Linz Performances/Show to people/PXL_20240903_191344084.jpg
5.08MB	2024-09-23	Media/Performance pictures/Linz Performances/Show to people/PXL_20240904_202638354.MP.jpg
6.80MB	2024-09-23	Media/Performance pictures/Linz Performances/Show to people/PXL_20240903_192701779.MP.jpg
2.28MB	2024-09-23	Media/Performance pictures/Linz Performances/Show to people/PXL_20240904_195409546.jpg
1.84MB	2024-09-12	Media/Performance pictures/Linz Performances/Show to people/bruqnerthe-sound-of-entanglement--clemens-wenger-at-enar-de-dios-rodrguez-es-martin-ringbauer-at-johannes-kofler-at-richard-kng-at-alexander-ploier-at-benjamin-orthner-atgh-philipp-haslinger-at_53972967048_o.jpg
4.53MB	2024-09-12	Media/Performance pictures/Linz Performances/Show to people/bruqnerthe-sound-of-entanglement--clemens-wenger-at-enar-de-dios-rodrguez-es-martin-ringbauer-at-johannes-kofler-at-richard-kng-at-alexander-ploier-at-benjamin-orthner-atgh-philipp-haslinger-at_53972967243_o.jpg
3.49MB	2024-09-12	Media/Performance pictures/Linz Performances/Show to people/bruqnerthe-sound-of-entanglement--clemens-wenger-at-enar-de-dios-rodrguez-es-martin-ringbauer-at-johannes-kofler-at-richard-kng-at-alexander-ploier-at-benjamin-orthner-atgh-philipp-haslinger-at_53971847407_o.jpg
3.22MB	2024-09-12	Media/Performance pictures/Linz Performances/Show to people/bruqnerthe-sound-of-entanglement--clemens-wenger-at-enar-de-dios-rodrguez-es-martin-ringbauer-at-johannes-kofler-at-richard-kng-at-alexander-ploier-at-benjamin-orthner-atgh-philipp-haslinger-at_53972730506_o.jpg
2.78MB	2024-09-12	Media/Performance pictures/Linz Performances/Show to people/bruqnerthe-sound-of-entanglement--clemens-wenger-at-enar-de-dios-rodrguez-es-martin-ringbauer-at-johannes-kofler-at-richard-kng-at-alexander-ploier-at-benjamin-orthner-atgh-philipp-haslinger-at_53972730281_o.jpg
2.56MB	2024-09-12	Media/Performance pictures/Linz Performances/Show to people/bruqnerthe-sound-of-entanglement--clemens-wenger-at-enar-de-dios-rodrguez-es-martin-ringbauer-at-johannes-kofler-at-richard-kng-at-alexander-ploier-at-benjamin-orthner-atgh-philipp-haslinger-at_53972730241_o.jpg
3.04MB	2024-09-12	Media/Performance pictures/Linz Performances/Show to people/bruqnerthe-sound-of-entanglement--clemens-wenger-at-enar-de-dios-rodrguez-es-martin-ringbauer-at-johannes-kofler-at-richard-kng-at-alexander-ploier-at-benjamin-orthner-atgh-philipp-haslinger-at_53973053339_o.jpg
1.40MB	2024-09-12	Media/Performance pictures/Linz Performances/Show to people/bruqnerthe-sound-of-entanglement-clemens-wenger-at-enar-de-dios-rodrguez-es-martin-ringbauer-at-johannes-kofler-at-richard-kng-at-alexander-ploier-at-benjamin-orthner-atgh-philipp-haslinger-at_53971847387_o.jpg
2.47MB	2024-09-12	Media/Performance pictures/Linz Performances/Show to people/bruqnerthe-sound-of-entanglement--clemens-wenger-at-enar-de-dios-rodrguez-es-martin-ringbauer-at-johannes-kofler-at-richard-kng-at-alexander-ploier-at-benjamin-orthner-atgh-philipp-haslinger-at_53973053449_o.jpg
0.62MB	2024-09-07	Media/Performance pictures/Linz Performances/Show to people/BruQner_Performance01.jpeg
0.64MB	2024-09-07	Media/Performance pictures/Linz Performances/Show to people/BruQnerPerformance02.jpeg
0.91MB	2024-09-05	Media/Performance pictures/Linz Performances/Show to people/BruQner_Performance_Video.mp4
0.20MB	2024-10-18	Media/Performance pictures/Linz Performances/Show to people/Film Drunk Guy Photo.jpg
2.55MB	2024-09-23	Media/Performance pictures/Linz Performances/BruQner Stills/BruQner_Stills_1.45.1.jpg
3.39MB	2024-09-23	Media/Performance pictures/Linz Performances/BruQner Stills/BruQner_Stills_1.40.1.jpg
2.68MB	2024-09-23	Media/Performance pictures/Linz Performances/BruQner Stills/BruQner_Stills_1.41.1.jpg
2.35MB	2024-09-23	Media/Performance pictures/Linz Performances/BruQner Stills/BruQner_Stills_1.44.1.jpg
2.08MB	2024-09-23	Media/Performance pictures/Linz Performances/BruQner Stills/BruQner_Stills_1.43.1.jpg
3.89MB	2024-09-23	Media/Performance pictures/Linz Performances/BruQner Stills/BruQner_Stills_1.46.1.jpg
3.88MB	2024-09-23	Media/Performance pictures/Linz Performances/BruQner Stills/BruQner_Stills_1.51.1.jpg
3.23MB	2024-09-23	Media/Performance pictures/Linz Performances/BruQner Stills/BruQner_Stills_1.49.1.jpg
3.62MB	2024-09-23	Media/Performance pictures/Linz Performances/BruQner Stills/BruQner_Stills_1.50.1.jpg
3.43MB	2024-09-23	Media/Performance pictures/Linz Performances/BruQner Stills/BruQner_Stills_1.5.1.jpg
3.40MB	2024-09-23	Media/Performance pictures/Linz Performances/BruQner Stills/BruQner_Stills_1.48.1.jpg
3.68MB	2024-09-23	Media/Performance pictures/Linz Performances/BruQner Stills/BruQner_Stills_1.47.1.jpg
2.77MB	2024-09-23	Media/Performance pictures/Linz Performances/BruQner Stills/BruQner_Stills_1.39.1.jpg
2.63MB	2024-09-23	Media/Performance pictures/Linz Performances/BruQner Stills/BruQner_Stills_1.42.1.jpg
3.44MB	2024-09-23	Media/Performance pictures/Linz Performances/BruQner Stills/BruQner_Stills_1.4.1.jpg
2.18MB	2024-09-23	Media/Performance pictures/Linz Performances/BruQner Stills/BruQner_Stills_1.32.1.jpg
3.24MB	2024-09-23	Media/Performance pictures/Linz Performances/BruQner Stills/BruQner_Stills_1.34.1.jpg
2.80MB	2024-09-23	Media/Performance pictures/Linz Performances/BruQner Stills/BruQner_Stills_1.37.1.jpg
2.66MB	2024-09-23	Media/Performance pictures/Linz Performances/BruQner Stills/BruQner_Stills_1.33.1.jpg
2.02MB	2024-09-23	Media/Performance pictures/Linz Performances/BruQner Stills/BruQner_Stills_1.23.1.jpg
2.91MB	2024-09-23	Media/Performance pictures/Linz Performances/BruQner Stills/BruQner_Stills_1.20.1.jpg
3.75MB	2024-09-23	Media/Performance pictures/Linz Performances/BruQner Stills/BruQner_Stills_1.24.1.jpg
2.32MB	2024-09-23	Media/Performance pictures/Linz Performances/BruQner Stills/BruQner_Stills_1.31.1.jpg
4.03MB	2024-09-23	Media/Performance pictures/Linz Performances/BruQner Stills/BruQner_Stills_1.29.1.jpg
3.19MB	2024-09-23	Media/Performance pictures/Linz Performances/BruQner Stills/BruQner_Stills_1.27.1.jpg
3.92MB	2024-09-23	Media/Performance pictures/Linz Performances/BruQner Stills/BruQner_Stills_1.28.1.jpg
2.90MB	2024-09-23	Media/Performance pictures/Linz Performances/BruQner Stills/BruQner_Stills_1.25.1.jpg
2.20MB	2024-09-23	Media/Performance pictures/Linz Performances/BruQner Stills/BruQner_Stills_1.30.1.jpg
3.15MB	2024-09-23	Media/Performance pictures/Linz Performances/BruQner Stills/BruQner_Stills_1.3.1.jpg
1.99MB	2024-09-23	Media/Performance pictures/Linz Performances/BruQner Stills/BruQner_Stills_1.26.1.jpg
3.13MB	2024-09-23	Media/Performance pictures/Linz Performances/BruQner Stills/BruQner_Stills_1.38.1.jpg
3.05MB	2024-09-23	Media/Performance pictures/Linz Performances/BruQner Stills/BruQner_Stills_1.36.1.jpg
2.72MB	2024-09-23	Media/Performance pictures/Linz Performances/BruQner Stills/BruQner_Stills_1.35.1.jpg
3.15MB	2024-09-23	Media/Performance pictures/Linz Performances/BruQner Stills/BruQner_Stills_1.2.1.jpg
2.62MB	2024-09-23	Media/Performance pictures/Linz Performances/BruQner Stills/BruQner_Stills_1.22.1.jpg
3.57MB	2024-09-23	Media/Performance pictures/Linz Performances/BruQner Stills/BruQner_Stills_1.19.1.jpg
3.71MB	2024-09-23	Media/Performance pictures/Linz Performances/BruQner Stills/BruQner_Stills_1.15.1.jpg
2.66MB	2024-09-23	Media/Performance pictures/Linz Performances/BruQner Stills/BruQner_Stills_1.17.1.jpg
4.01MB	2024-09-23	Media/Performance pictures/Linz Performances/BruQner Stills/BruQner_Stills_1.13.1.jpg
2.67MB	2024-09-23	Media/Performance pictures/Linz Performances/BruQner Stills/BruQner_Stills_1.16.1.jpg
3.93MB	2024-09-23	Media/Performance pictures/Linz Performances/BruQner Stills/BruQner_Stills_1.11.1.jpg
3.59MB	2024-09-23	Media/Performance pictures/Linz Performances/BruQner Stills/BruQner_Stills_1.21.1.jpg
2.63MB	2024-09-23	Media/Performance pictures/Linz Performances/BruQner Stills/BruQner_Stills_1.18.1.jpg
3.85MB	2024-09-23	Media/Performance pictures/Linz Performances/BruQner Stills/BruQner_Stills_1.14.1.jpg
4.14MB	2024-09-23	Media/Performance pictures/Linz Performances/BruQner Stills/BruQner_Stills_1.12.1.jpg
3.22MB	2024-09-23	Media/Performance pictures/Linz Performances/BruQner Stills/BruQner_Stills_1.10.1.jpg
1.70MB	2024-09-18	Media/Performance pictures/Linz Performances/Land OÖ photos/BruQner (c) Land OÖ Andreas Krenn (11).jpg
1.40MB	2024-09-18	Media/Performance pictures/Linz Performances/Land OÖ photos/BruQner (c) Land OÖ Andreas Krenn (25).jpg
2.66MB	2024-09-18	Media/Performance pictures/Linz Performances/Land OÖ photos/BruQner (c) Land OÖ Andreas Krenn (20).jpg
2.35MB	2024-09-18	Media/Performance pictures/Linz Performances/Land OÖ photos/BruQner (c) Land OÖ Andreas Krenn (32).jpg
2.07MB	2024-09-18	Media/Performance pictures/Linz Performances/Land OÖ photos/BruQner (c) Land OÖ Andreas Krenn (13).jpg
2.25MB	2024-09-18	Media/Performance pictures/Linz Performances/Land OÖ photos/BruQner (c) Land OÖ Andreas Krenn (16).jpg
1.85MB	2024-09-18	Media/Performance pictures/Linz Performances/Land OÖ photos/BruQner (c) Land OÖ Andreas Krenn (21).jpg
1.65MB	2024-09-18	Media/Performance pictures/Linz Performances/Land OÖ photos/BruQner (c) Land OÖ Andreas Krenn (23).jpg
2.14MB	2024-09-18	Media/Performance pictures/Linz Performances/Land OÖ photos/BruQner (c) Land OÖ Andreas Krenn (33).jpg
2.51MB	2024-09-18	Media/Performance pictures/Linz Performances/Land OÖ photos/BruQner (c) Land OÖ Andreas Krenn (3).jpg
2.40MB	2024-09-18	Media/Performance pictures/Linz Performances/Land OÖ photos/BruQner (c) Land OÖ Andreas Krenn (12).jpg
1.88MB	2024-09-18	Media/Performance pictures/Linz Performances/Land OÖ photos/BruQner (c) Land OÖ Andreas Krenn (1).jpg
1.66MB	2024-09-18	Media/Performance pictures/Linz Performances/Land OÖ photos/BruQner (c) Land OÖ Andreas Krenn (10).jpg
1.60MB	2024-09-18	Media/Performance pictures/Linz Performances/Land OÖ photos/BruQner (c) Land OÖ Andreas Krenn (2).jpg
2.72MB	2024-09-18	Media/Performance pictures/Linz Performances/Land OÖ photos/BruQner (c) Land OÖ Andreas Krenn (26).jpg
3.23MB	2024-09-18	Media/Performance pictures/Linz Performances/Land OÖ photos/BruQner (c) Land OÖ Andreas Krenn (19).jpg
2.08MB	2024-09-18	Media/Performance pictures/Linz Performances/Land OÖ photos/BruQner (c) Land OÖ Andreas Krenn (18).jpg
2.64MB	2024-09-18	Media/Performance pictures/Linz Performances/Land OÖ photos/BruQner (c) Land OÖ Andreas Krenn (14).jpg
3.11MB	2024-09-18	Media/Performance pictures/Linz Performances/Land OÖ photos/BruQner (c) Land OÖ Andreas Krenn (17).jpg
4.21MB	2024-09-18	Media/Performance pictures/Linz Performances/Land OÖ photos/BruQner (c) Land OÖ Andreas Krenn (30).jpg
2.61MB	2024-09-18	Media/Performance pictures/Linz Performances/Land OÖ photos/BruQner (c) Land OÖ Andreas Krenn (8).jpg
2.60MB	2024-09-18	Media/Performance pictures/Linz Performances/Land OÖ photos/BruQner (c) Land OÖ Andreas Krenn (4).jpg
2.88MB	2024-09-18	Media/Performance pictures/Linz Performances/Land OÖ photos/BruQner (c) Land OÖ Andreas Krenn (24).jpg
4.00MB	2024-09-18	Media/Performance pictures/Linz Performances/Land OÖ photos/BruQner (c) Land OÖ Andreas Krenn (29).jpg
2.39MB	2024-09-18	Media/Performance pictures/Linz Performances/Land OÖ photos/BruQner (c) Land OÖ Andreas Krenn (22).jpg
3.14MB	2024-09-18	Media/Performance pictures/Linz Performances/Land OÖ photos/BruQner (c) Land OÖ Andreas Krenn (5).jpg
5.17MB	2024-09-18	Media/Performance pictures/Linz Performances/Land OÖ photos/BruQner (c) Land OÖ Andreas Krenn (28).jpg
1.69MB	2024-09-18	Media/Performance pictures/Linz Performances/Land OÖ photos/BruQner (c) Land OÖ Andreas Krenn (15).jpg
4.77MB	2024-09-18	Media/Performance pictures/Linz Performances/Land OÖ photos/BruQner (c) Land OÖ Andreas Krenn (27).jpg
4.19MB	2024-09-18	Media/Performance pictures/Linz Performances/Land OÖ photos/BruQner (c) Land OÖ Andreas Krenn (31).jpg
2.81MB	2024-09-18	Media/Performance pictures/Linz Performances/Land OÖ photos/BruQner (c) Land OÖ Andreas Krenn (6).jpg
5.21MB	2024-09-18	Media/Performance pictures/Linz Performances/Land OÖ photos/BruQner (c) Land OÖ Andreas Krenn (9).jpg
4.74MB	2024-09-18	Media/Performance pictures/Linz Performances/Land OÖ photos/BruQner (c) Land OÖ Andreas Krenn (7).jpg
1.84MB	2024-09-12	Media/Performance pictures/Linz Performances/Ars Electronica Photos/bruqnerthe-sound-of-entanglement--clemens-wenger-at-enar-de-dios-rodrguez-es-martin-ringbauer-at-johannes-kofler-at-richard-kng-at-alexander-ploier-at-benjamin-orthner-atgh-philipp-haslinger-at_53972967048_o.jpg
1.67MB	2024-09-12	Media/Performance pictures/Linz Performances/Ars Electronica Photos/impression-ars-electronica-opening-2024_53972848143_o.jpg
1.48MB	2024-09-12	Media/Performance pictures/Linz Performances/Ars Electronica Photos/bruqnerthe-sound-of-entanglement-7-clemens-wenger-at-enar-de-dios-rodrguez-es-martin-ringbauer-at-johannes-kofler-at-richard-kng-at-alexander-ploier-at-benjamin-orthner-atgh-philipp-haslinger-at_53972730271_o.jpg
1.08MB	2024-09-12	Media/Performance pictures/Linz Performances/Ars Electronica Photos/bruqnerthe-sound-of-entanglement--clemens-wenger-at-enar-de-dios-rodrguez-es-martin-ringbauer-at-johannes-kofler-at-richard-kng-at-alexander-ploier-at-benjamin-orthner-atgh-philipp-haslinger-at_53973169020_o.jpg
1.45MB	2024-09-12	Media/Performance pictures/Linz Performances/Ars Electronica Photos/bruqnerthe-sound-of-entanglement--clemens-wenger-at-enar-de-dios-rodrguez-es-martin-ringbauer-at-johannes-kofler-at-richard-kng-at-alexander-ploier-at-benjamin-orthner-atgh-philipp-haslinger-at_53973169010_o.jpg
2.82MB	2024-09-12	Media/Performance pictures/Linz Performances/Ars Electronica Photos/bruqnerthe-sound-of-entanglement--clemens-wenger-at-enar-de-dios-rodrguez-es-martin-ringbauer-at-johannes-kofler-at-richard-kng-at-alexander-ploier-at-benjamin-orthner-atgh-philipp-haslinger-at_53972967143_o.jpg
2.64MB	2024-09-12	Media/Performance pictures/Linz Performances/Ars Electronica Photos/bruqnerthe-sound-of-entanglement--clemens-wenger-at-enar-de-dios-rodrguez-es-martin-ringbauer-at-johannes-kofler-at-richard-kng-at-alexander-ploier-at-benjamin-orthner-atgh-philipp-haslinger-at_53973053494_o.jpg
2.03MB	2024-09-12	Media/Performance pictures/Linz Performances/Ars Electronica Photos/bruqnerthe-sound-of-entanglement--clemens-wenger-at-enar-de-dios-rodrguez-es-martin-ringbauer-at-johannes-kofler-at-richard-kng-at-alexander-ploier-at-benjamin-orthner-atgh-philipp-haslinger-at_53973053469_o.jpg
2.08MB	2024-09-12	Media/Performance pictures/Linz Performances/Ars Electronica Photos/bruqnerthe-sound-of-entanglement--clemens-wenger-at-enar-de-dios-rodrguez-es-martin-ringbauer-at-johannes-kofler-at-richard-kng-at-alexander-ploier-at-benjamin-orthner-atgh-philipp-haslinger-at_53973053454_o.jpg
1.21MB	2024-09-12	Media/Performance pictures/Linz Performances/Ars Electronica Photos/bruqnerthe-sound-of-entanglement--clemens-wenger-at-enar-de-dios-rodrguez-es-martin-ringbauer-at-johannes-kofler-at-richard-kng-at-alexander-ploier-at-benjamin-orthner-atgh-philipp-haslinger-at_53973169045_o.jpg
1.17MB	2024-09-12	Media/Performance pictures/Linz Performances/Ars Electronica Photos/bruqnerthe-sound-of-entanglement--clemens-wenger-at-enar-de-dios-rodrguez-es-martin-ringbauer-at-johannes-kofler-at-richard-kng-at-alexander-ploier-at-benjamin-orthner-atgh-philipp-haslinger-at_53972967133_o.jpg
1.86MB	2024-09-12	Media/Performance pictures/Linz Performances/Ars Electronica Photos/bruqnerthe-sound-of-entanglement-clemens-wenger-at-enar-de-dios-rodrguez-es-martin-ringbauer-at-johannes-kofler-at-richard-kng-at-alexander-ploier-at-benjamin-orthner-atgh-philipp-haslinger-at_53971847487_o.jpg
2.79MB	2024-09-12	Media/Performance pictures/Linz Performances/Ars Electronica Photos/bruqnerthe-sound-of-entanglement--clemens-wenger-at-enar-de-dios-rodrguez-es-martin-ringbauer-at-johannes-kofler-at-richard-kng-at-alexander-ploier-at-benjamin-orthner-atgh-philipp-haslinger-at_53973011374_o.jpg
4.53MB	2024-09-12	Media/Performance pictures/Linz Performances/Ars Electronica Photos/bruqnerthe-sound-of-entanglement--clemens-wenger-at-enar-de-dios-rodrguez-es-martin-ringbauer-at-johannes-kofler-at-richard-kng-at-alexander-ploier-at-benjamin-orthner-atgh-philipp-haslinger-at_53972967243_o.jpg
0.83MB	2024-09-12	Media/Performance pictures/Linz Performances/Ars Electronica Photos/bruqnerthe-sound-of-entanglement--clemens-wenger-at-enar-de-dios-rodrguez-es-martin-ringbauer-at-johannes-kofler-at-richard-kng-at-alexander-ploier-at-benjamin-orthner-atgh-philipp-haslinger-at_53973168995_o.jpg
2.14MB	2024-09-12	Media/Performance pictures/Linz Performances/Ars Electronica Photos/bruqnerthe-sound-of-entanglement--clemens-wenger-at-enar-de-dios-rodrguez-es-martin-ringbauer-at-johannes-kofler-at-richard-kng-at-alexander-ploier-at-benjamin-orthner-atgh-philipp-haslinger-at_53973168930_o.jpg
1.86MB	2024-09-12	Media/Performance pictures/Linz Performances/Ars Electronica Photos/bruqnerthe-sound-of-entanglement--clemens-wenger-at-enar-de-dios-rodrguez-es-martin-ringbauer-at-johannes-kofler-at-richard-kng-at-alexander-ploier-at-benjamin-orthner-atgh-philipp-haslinger-at_53973168965_o.jpg
3.35MB	2024-09-12	Media/Performance pictures/Linz Performances/Ars Electronica Photos/bruqnerthe-sound-of-entanglement--clemens-wenger-at-enar-de-dios-rodrguez-es-martin-ringbauer-at-johannes-kofler-at-richard-kng-at-alexander-ploier-at-benjamin-orthner-atgh-philipp-haslinger-at_53972967098_o.jpg
2.33MB	2024-09-12	Media/Performance pictures/Linz Performances/Ars Electronica Photos/bruqnerthe-sound-of-entanglement--clemens-wenger-at-enar-de-dios-rodrguez-es-martin-ringbauer-at-johannes-kofler-at-richard-kng-at-alexander-ploier-at-benjamin-orthner-atgh-philipp-haslinger-at_53972967083_o.jpg
1.79MB	2024-09-12	Media/Performance pictures/Linz Performances/Ars Electronica Photos/impression-ars-electronica-opening-2024_53973049295_o.jpg
3.75MB	2024-09-12	Media/Performance pictures/Linz Performances/Ars Electronica Photos/impression-ars-electronica-opening-2024_53972758326_o.jpg
2.47MB	2024-09-12	Media/Performance pictures/Linz Performances/Ars Electronica Photos/bruqnerthe-sound-of-entanglement--clemens-wenger-at-enar-de-dios-rodrguez-es-martin-ringbauer-at-johannes-kofler-at-richard-kng-at-alexander-ploier-at-benjamin-orthner-atgh-philipp-haslinger-at_53973053449_o.jpg
3.16MB	2024-09-12	Media/Performance pictures/Linz Performances/Ars Electronica Photos/bruqnerthe-sound-of-entanglement--clemens-wenger-at-enar-de-dios-rodrguez-es-martin-ringbauer-at-johannes-kofler-at-richard-kng-at-alexander-ploier-at-benjamin-orthner-atgh-philipp-haslinger-at_53972967208_o.jpg
0.99MB	2024-09-12	Media/Performance pictures/Linz Performances/Ars Electronica Photos/bruqnerthe-sound-of-entanglement--clemens-wenger-at-enar-de-dios-rodrguez-es-martin-ringbauer-at-johannes-kofler-at-richard-kng-at-alexander-ploier-at-benjamin-orthner-atgh-philipp-haslinger-at_53973053354_o.jpg
1.12MB	2024-09-12	Media/Performance pictures/Linz Performances/Ars Electronica Photos/bruqnerthe-sound-of-entanglement--clemens-wenger-at-enar-de-dios-rodrguez-es-martin-ringbauer-at-johannes-kofler-at-richard-kng-at-alexander-ploier-at-benjamin-orthner-atgh-philipp-haslinger-at_53972967108_o.jpg
1.44MB	2024-09-12	Media/Performance pictures/Linz Performances/Ars Electronica Photos/bruqnerthe-sound-of-entanglement_53973053439_o.jpg
1.40MB	2024-09-12	Media/Performance pictures/Linz Performances/Ars Electronica Photos/bruqnerthe-sound-of-entanglement-clemens-wenger-at-enar-de-dios-rodrguez-es-martin-ringbauer-at-johannes-kofler-at-richard-kng-at-alexander-ploier-at-benjamin-orthner-atgh-philipp-haslinger-at_53971847387_o.jpg
3.14MB	2024-09-12	Media/Performance pictures/Linz Performances/Ars Electronica Photos/impression-ars-electronica-opening-2024_53973081254_o.jpg
1.91MB	2024-09-12	Media/Performance pictures/Linz Performances/Ars Electronica Photos/impression-ars-electronica-opening-2024_53973049290_o.jpg
2.72MB	2024-09-12	Media/Performance pictures/Linz Performances/Ars Electronica Photos/bruqnerthe-sound-of-entanglement--clemens-wenger-at-enar-de-dios-rodrguez-es-martin-ringbauer-at-johannes-kofler-at-richard-kng-at-alexander-ploier-at-benjamin-orthner-atgh-philipp-haslinger-at_53973126360_o.jpg
1.79MB	2024-09-12	Media/Performance pictures/Linz Performances/Ars Electronica Photos/bruqnerthe-sound-of-entanglement--clemens-wenger-at-enar-de-dios-rodrguez-es-martin-ringbauer-at-johannes-kofler-at-richard-kng-at-alexander-ploier-at-benjamin-orthner-atgh-philipp-haslinger-at_53972967028_o.jpg
1.60MB	2024-09-12	Media/Performance pictures/Linz Performances/Ars Electronica Photos/bruqnerthe-sound-of-entanglement--clemens-wenger-at-enar-de-dios-rodrguez-es-martin-ringbauer-at-johannes-kofler-at-richard-kng-at-alexander-ploier-at-benjamin-orthner-atgh-philipp-haslinger-at_53973168985_o.jpg
3.19MB	2024-09-12	Media/Performance pictures/Linz Performances/Ars Electronica Photos/bruqnerthe-sound-of-entanglement--clemens-wenger-at-enar-de-dios-rodrguez-es-martin-ringbauer-at-johannes-kofler-at-richard-kng-at-alexander-ploier-at-benjamin-orthner-atgh-philipp-haslinger-at_53972967203_o.jpg
2.21MB	2024-09-12	Media/Performance pictures/Linz Performances/Ars Electronica Photos/bruqnerthe-sound-of-entanglement--clemens-wenger-at-enar-de-dios-rodrguez-es-martin-ringbauer-at-johannes-kofler-at-richard-kng-at-alexander-ploier-at-benjamin-orthner-atgh-philipp-haslinger-at_53972730451_o.jpg
1.16MB	2024-09-12	Media/Performance pictures/Linz Performances/Ars Electronica Photos/bruqnerthe-sound-of-entanglement--clemens-wenger-at-enar-de-dios-rodrguez-es-martin-ringbauer-at-johannes-kofler-at-richard-kng-at-alexander-ploier-at-benjamin-orthner-atgh-philipp-haslinger-at_53973053384_o.jpg
1.23MB	2024-09-12	Media/Performance pictures/Linz Performances/Ars Electronica Photos/bruqnerthe-sound-of-entanglement--clemens-wenger-at-enar-de-dios-rodrguez-es-martin-ringbauer-at-johannes-kofler-at-richard-kng-at-alexander-ploier-at-benjamin-orthner-atgh-philipp-haslinger-at_53973053364_o.jpg
2.88MB	2024-09-12	Media/Performance pictures/Linz Performances/Ars Electronica Photos/bruqnerthe-sound-of-entanglement-7-clemens-wenger-at-enar-de-dios-rodrguez-es-martin-ringbauer-at-johannes-kofler-at-richard-kng-at-alexander-ploier-at-benjamin-orthner-atgh-philipp-haslinger-at_53972730276_o.jpg
3.49MB	2024-09-12	Media/Performance pictures/Linz Performances/Ars Electronica Photos/bruqnerthe-sound-of-entanglement--clemens-wenger-at-enar-de-dios-rodrguez-es-martin-ringbauer-at-johannes-kofler-at-richard-kng-at-alexander-ploier-at-benjamin-orthner-atgh-philipp-haslinger-at_53971847407_o.jpg
1.82MB	2024-09-12	Media/Performance pictures/Linz Performances/Ars Electronica Photos/bruqnerthe-sound-of-entanglement--clemens-wenger-at-enar-de-dios-rodrguez-es-martin-ringbauer-at-johannes-kofler-at-richard-kng-at-alexander-ploier-at-benjamin-orthner-atgh-philipp-haslinger-at_53971847412_o.jpg
2.74MB	2024-09-12	Media/Performance pictures/Linz Performances/Ars Electronica Photos/bruqnerthe-sound-of-entanglement--clemens-wenger-at-enar-de-dios-rodrguez-es-martin-ringbauer-at-johannes-kofler-at-richard-kng-at-alexander-ploier-at-benjamin-orthner-atgh-philipp-haslinger-at_53972730466_o.jpg
3.04MB	2024-09-12	Media/Performance pictures/Linz Performances/Ars Electronica Photos/bruqnerthe-sound-of-entanglement--clemens-wenger-at-enar-de-dios-rodrguez-es-martin-ringbauer-at-johannes-kofler-at-richard-kng-at-alexander-ploier-at-benjamin-orthner-atgh-philipp-haslinger-at_53973053339_o.jpg
4.34MB	2024-09-12	Media/Performance pictures/Linz Performances/Ars Electronica Photos/bruqnerthe-sound-of-entanglement--clemens-wenger-at-enar-de-dios-rodrguez-es-martin-ringbauer-at-johannes-kofler-at-richard-kng-at-alexander-ploier-at-benjamin-orthner-atgh-philipp-haslinger-at_53971847537_o.jpg
1.58MB	2024-09-12	Media/Performance pictures/Linz Performances/Ars Electronica Photos/bruqnerthe-sound-of-entanglement--clemens-wenger-at-enar-de-dios-rodrguez-es-martin-ringbauer-at-johannes-kofler-at-richard-kng-at-alexander-ploier-at-benjamin-orthner-atgh-philipp-haslinger-at_53971847492_o.jpg
2.56MB	2024-09-12	Media/Performance pictures/Linz Performances/Ars Electronica Photos/bruqnerthe-sound-of-entanglement--clemens-wenger-at-enar-de-dios-rodrguez-es-martin-ringbauer-at-johannes-kofler-at-richard-kng-at-alexander-ploier-at-benjamin-orthner-atgh-philipp-haslinger-at_53972730241_o.jpg
1.73MB	2024-09-12	Media/Performance pictures/Linz Performances/Ars Electronica Photos/bruqnerthe-sound-of-entanglement--clemens-wenger-at-enar-de-dios-rodrguez-es-martin-ringbauer-at-johannes-kofler-at-richard-kng-at-alexander-ploier-at-benjamin-orthner-atgh-philipp-haslinger-at_53972967013_o.jpg
2.48MB	2024-09-12	Media/Performance pictures/Linz Performances/Ars Electronica Photos/bruqnerthe-sound-of-entanglement--clemens-wenger-at-enar-de-dios-rodrguez-es-martin-ringbauer-at-johannes-kofler-at-richard-kng-at-alexander-ploier-at-benjamin-orthner-atgh-philipp-haslinger-at_53971847342_o.jpg
3.54MB	2024-09-12	Media/Performance pictures/Linz Performances/Ars Electronica Photos/bruqnerthe-sound-of-entanglement--clemens-wenger-at-enar-de-dios-rodrguez-es-martin-ringbauer-at-johannes-kofler-at-richard-kng-at-alexander-ploier-at-benjamin-orthner-atgh-philipp-haslinger-at_53880337878_o.jpg
1.40MB	2024-09-12	Media/Performance pictures/Linz Performances/Ars Electronica Photos/bruqnerthe-sound-of-entanglement--clemens-wenger-at-enar-de-dios-rodrguez-es-martin-ringbauer-at-johannes-kofler-at-richard-kng-at-alexander-ploier-at-benjamin-orthner-atgh-philipp-haslinger-at_53971847317_o.jpg
1.22MB	2024-09-12	Media/Performance pictures/Linz Performances/Ars Electronica Photos/bruqnerthe-sound-of-entanglement--clemens-wenger-at-enar-de-dios-rodrguez-es-martin-ringbauer-at-johannes-kofler-at-richard-kng-at-alexander-ploier-at-benjamin-orthner-atgh-philipp-haslinger-at_53972730291_o.jpg
1.99MB	2024-09-12	Media/Performance pictures/Linz Performances/Ars Electronica Photos/bruqnerthe-sound-of-entanglement--clemens-wenger-at-enar-de-dios-rodrguez-es-martin-ringbauer-at-johannes-kofler-at-richard-kng-at-alexander-ploier-at-benjamin-orthner-atgh-philipp-haslinger-at_53972730406_o.jpg
1.77MB	2024-09-12	Media/Performance pictures/Linz Performances/Ars Electronica Photos/bruqnerthe-sound-of-entanglement--clemens-wenger-at-enar-de-dios-rodrguez-es-martin-ringbauer-at-johannes-kofler-at-richard-kng-at-alexander-ploier-at-benjamin-orthner-atgh-philipp-haslinger-at_53972730301_o.jpg
1.94MB	2024-09-12	Media/Performance pictures/Linz Performances/Ars Electronica Photos/bruqnerthe-sound-of-entanglement--clemens-wenger-at-enar-de-dios-rodrguez-es-martin-ringbauer-at-johannes-kofler-at-richard-kng-at-alexander-ploier-at-benjamin-orthner-atgh-philipp-haslinger-at_53972730326_o.jpg
0.58MB	2024-09-12	Media/Performance pictures/Linz Performances/Ars Electronica Photos/bruqnerthe-sound-of-entanglement--clemens-wenger-at-enar-de-dios-rodrguez-es-martin-ringbauer-at-johannes-kofler-at-richard-kng-at-alexander-ploier-at-benjamin-orthner-atgh-philipp-haslinger-at_53876792882_o.jpg
2.96MB	2024-09-12	Media/Performance pictures/Linz Performances/Ars Electronica Photos/bruqnerthe-sound-of-entanglement--clemens-wenger-at-enar-de-dios-rodrguez-es-martin-ringbauer-at-johannes-kofler-at-richard-kng-at-alexander-ploier-at-benjamin-orthner-atgh-philipp-haslinger-at_53972730521_o.jpg
2.01MB	2024-09-12	Media/Performance pictures/Linz Performances/Ars Electronica Photos/bruqnerthe-sound-of-entanglement--clemens-wenger-at-enar-de-dios-rodrguez-es-martin-ringbauer-at-johannes-kofler-at-richard-kng-at-alexander-ploier-at-benjamin-orthner-atgh-philipp-haslinger-at_53972924878_o.jpg
1.18MB	2024-09-12	Media/Performance pictures/Linz Performances/Ars Electronica Photos/bruqnerthe-sound-of-entanglement--clemens-wenger-at-enar-de-dios-rodrguez-es-martin-ringbauer-at-johannes-kofler-at-richard-kng-at-alexander-ploier-at-benjamin-orthner-atgh-philipp-haslinger-at_53972730346_o.jpg
2.01MB	2024-09-12	Media/Performance pictures/Linz Performances/Ars Electronica Photos/bruqnerthe-sound-of-entanglement--clemens-wenger-at-enar-de-dios-rodrguez-es-martin-ringbauer-at-johannes-kofler-at-richard-kng-at-alexander-ploier-at-benjamin-orthner-atgh-philipp-haslinger-at_53971847462_o.jpg
3.22MB	2024-09-12	Media/Performance pictures/Linz Performances/Ars Electronica Photos/bruqnerthe-sound-of-entanglement--clemens-wenger-at-enar-de-dios-rodrguez-es-martin-ringbauer-at-johannes-kofler-at-richard-kng-at-alexander-ploier-at-benjamin-orthner-atgh-philipp-haslinger-at_53972730506_o.jpg
1.49MB	2024-09-12	Media/Performance pictures/Linz Performances/Ars Electronica Photos/bruqnerthe-sound-of-entanglement--clemens-wenger-at-enar-de-dios-rodrguez-es-martin-ringbauer-at-johannes-kofler-at-richard-kng-at-alexander-ploier-at-benjamin-orthner-atgh-philipp-haslinger-at_53877695106_o.jpg
12.26MB	2024-09-12	Media/Performance pictures/Linz Performances/Ars Electronica Photos/bruqnerthe-sound-of-entanglement--clemens-wenger-at-enar-de-dios-rodrguez-es-martin-ringbauer-at-johannes-kofler-at-richard-kng-at-alexander-ploier-at-benjamin-orthner-atgh-philipp-haslinger-at_53865440779_o.jpg
0.88MB	2024-09-12	Media/Performance pictures/Linz Performances/Ars Electronica Photos/bruqnerthe-sound-of-entanglement--clemens-wenger-at-enar-de-dios-rodrguez-es-martin-ringbauer-at-johannes-kofler-at-richard-kng-at-alexander-ploier-at-benjamin-orthner-atgh-philipp-haslinger-at_53878103910_o.jpg
1.65MB	2024-09-12	Media/Performance pictures/Linz Performances/Ars Electronica Photos/bruqnerthe-sound-of-entanglement--clemens-wenger-at-enar-de-dios-rodrguez-es-martin-ringbauer-at-johannes-kofler-at-richard-kng-at-alexander-ploier-at-benjamin-orthner-atgh-philipp-haslinger-at_53971847457_o.jpg
2.78MB	2024-09-12	Media/Performance pictures/Linz Performances/Ars Electronica Photos/bruqnerthe-sound-of-entanglement--clemens-wenger-at-enar-de-dios-rodrguez-es-martin-ringbauer-at-johannes-kofler-at-richard-kng-at-alexander-ploier-at-benjamin-orthner-atgh-philipp-haslinger-at_53972730281_o.jpg
1.01MB	2024-09-12	Media/Performance pictures/Linz Performances/Ars Electronica Photos/bruqnerthe-sound-of-entanglement--clemens-wenger-at-enar-de-dios-rodrguez-es-martin-ringbauer-at-johannes-kofler-at-richard-kng-at-alexander-ploier-at-benjamin-orthner-atgh-philipp-haslinger-at_53864179317_o.jpg
1.44MB	2024-09-12	Media/Performance pictures/Linz Performances/Ars Electronica Photos/bruqnerthe-sound-of-entanglement--clemens-wenger-at-enar-de-dios-rodrguez-es-martin-ringbauer-at-johannes-kofler-at-richard-kng-at-alexander-ploier-at-benjamin-orthner-atgh-philipp-haslinger-at_53971847427_o.jpg
1.02MB	2024-10-03	Media/Performance pictures/Vienna Trail Run Performances/For Osaka Application/TSOE_osaka_photos-6.jpg
1.06MB	2024-10-03	Media/Performance pictures/Vienna Trail Run Performances/For Osaka Application/TSOE_osaka_photos-5.jpg
2.27MB	2024-10-03	Media/Performance pictures/Vienna Trail Run Performances/For Osaka Application/TSOE_osaka_photos-4.jpg
2.09MB	2024-10-03	Media/Performance pictures/Vienna Trail Run Performances/For Osaka Application/TSOE_osaka_photos-3.jpg
2.33MB	2024-10-03	Media/Performance pictures/Vienna Trail Run Performances/For Osaka Application/TSOE_osaka_photos-2.jpg
1.98MB	2024-10-03	Media/Performance pictures/Vienna Trail Run Performances/For Osaka Application/TSOE_osaka_photos-1.jpg
1.79MB	2025-03-14	Media/Performance pictures/Ball der Wissenschaften/PXL_20250125_221727826.jpg
13.81MB	2025-03-14	Media/Performance pictures/Ball der Wissenschaften/PXL_20250125_210941851.mp4
12.03MB	2025-03-14	Media/Performance pictures/Ball der Wissenschaften/PXL_20250125_213438538.mp4
2.08MB	2025-03-14	Media/Performance pictures/Ball der Wissenschaften/PXL_20250125_221725650.jpg
2.30MB	2025-03-14	Media/Performance pictures/Ball der Wissenschaften/PXL_20250125_210459244.jpg
2.41MB	2025-03-14	Media/Performance pictures/Ball der Wissenschaften/PXL_20250125_210504429.jpg
2.55MB	2025-03-14	Media/Performance pictures/Ball der Wissenschaften/PXL_20250125_210939237.jpg
2.35MB	2025-03-14	Media/Performance pictures/Ball der Wissenschaften/PXL_20250125_210502378.jpg
2.12MB	2025-03-14	Media/Performance pictures/Ball der Wissenschaften/PXL_20250125_203442473.jpg
12.06MB	2025-03-14	Media/Performance pictures/Ball der Wissenschaften/PXL_20250125_203446447.mp4
77.37MB	2025-03-14	Media/Performance pictures/Ball der Wissenschaften/PXL_20250125_210220396.mp4
18.09MB	2025-03-14	Media/Performance pictures/Ball der Wissenschaften/PXL_20250125_184053735.mp4
3.18MB	2025-03-14	Media/Performance pictures/Ball der Wissenschaften/PXL_20250124_142652614.jpg
17.34MB	2025-03-15	Media/Performance pictures/Ball der Wissenschaften/PXL_20250124_193955063~2.mp4
7.45MB	2025-03-18	Media/Performance pictures/Ball der Wissenschaften/Wissenschaftsball TSOE Clip.mp4
11.55MB	2025-03-16	Media/Performance pictures/Ball der Wissenschaften/compressed/PXL_20250125_210220396.mp4
3.11MB	2025-03-15	Media/Performance pictures/Linz Ars Electronica BruQner/PXL_20240903_192652980.jpg
9.54MB	2025-03-15	Media/Performance pictures/Linz Ars Electronica BruQner/2025-03-15 00-39-54.mp4
10.70MB	2025-03-28	Media/Performance pictures/Angebot TU Wien Atominstitut Einzeltransport - Volle Deckung Wien Washington_PH.pdf
5.30MB	2025-03-18	Media/Audio Samples/Ball der Wissenschaften/TUQ_lastset_cut_excerpt2.mp3
12.86MB	2025-03-18	Media/Audio Samples/Ball der Wissenschaften/TUQ_set2_cut_mischpult.mp3
5.19MB	2025-03-18	Media/Audio Samples/Ball der Wissenschaften/TUQ_lastset_cut_excerpt.mp3
0.34MB	2025-05-02	Media/Washington/newspaper article.jpeg
== Inventor
1.15MB	2024-03-31	Inventor/Setup/quTools.ipt
23.15MB	2024-03-31	Inventor/Setup/Assembly1.iam
3.35MB	2024-03-11	Inventor/Setup/Rotation Mounts.iam
2.86MB	2024-03-08	Inventor/Setup/BS Mounted.iam
1.74MB	2024-03-08	Inventor/Setup/Mirror Mounted.iam
0.18MB	2024-03-08	Inventor/Setup/Prism Mounted.iam
2.94MB	2024-03-11	Inventor/Setup/Fiber Collimator.iam
2.86MB	2024-03-11	Inventor/Setup/BS Mounted_MIR.iam
1.73MB	2024-03-11	Inventor/Setup/Mirror Mounted_MIR.iam
3.32MB	2024-03-11	Inventor/Setup/Rotation Mounts_MIR.iam
2.94MB	2024-03-11	Inventor/Setup/Fiber Collimator_MIR.iam
1.65MB	2024-03-11	Inventor/Setup/Slider Assembled_MIR.iam
1.66MB	2024-03-11	Inventor/Setup/Slider Assembled.iam
4.21MB	2024-03-11	Inventor/Thorlabs Parts/KM05PM_M-Step/KM05PM_M-Step.ipt
5.11MB	2024-03-08	Inventor/Thorlabs Parts/KM05PM_M-Step/KM05PM_M-Step_MIR.ipt
5.10MB	2024-03-11	Inventor/Thorlabs Parts/KM05PM_M-Step/KM05PM_M-Step_MIR1.ipt
0.14MB	2024-03-06	Inventor/Thorlabs Parts/MRA10-E03-Step/MRA10-E03-Step.ipt
0.28MB	2024-03-06	Inventor/Thorlabs Parts/MB3045_M-Step/MB3045_M-Step.iam
0.84MB	2024-03-06	Inventor/Thorlabs Parts/MB3045_M-Step/MB3045_M - Aluminium Breadboard 300 x 450 x 12.7mm_MB3030_M-1.ipt
0.49MB	2024-03-06	Inventor/Thorlabs Parts/MB6060_M-Step/MB6060_M-Step.iam
1.51MB	2024-03-06	Inventor/Thorlabs Parts/MB6060_M-Step/MB6060_M - Aluminium Breadboard 600 x 600 x 12.7mm_MB3030_M-1.ipt
1.05MB	2024-03-06	Inventor/Thorlabs Parts/KB25_M-Step/KB25_M-Step.ipt
3.37MB	2024-03-11	Inventor/Thorlabs Parts/KS1-Step/KS1-Step.ipt
4.26MB	2024-03-11	Inventor/Thorlabs Parts/KS1-Step/KS1-Step_MIR.ipt
0.40MB	2024-03-11	Inventor/Thorlabs Parts/BB1-E03-Step/BB1-E03-Step.ipt
0.55MB	2024-03-11	Inventor/Thorlabs Parts/BB1-E03-Step/BB1-E03-Step_MIR.ipt
0.04MB	2024-02-28	Inventor/Thorlabs Parts/qutools box frontpanel aspect ratio fixed.png
0.04MB	2024-02-28	Inventor/Thorlabs Parts/qutools box frontpanel.png
1.43MB	2024-02-13	Inventor/Thorlabs Parts/SM1A6-Step.step
0.68MB	2024-02-28	Inventor/Thorlabs Parts/quToolsWarped.png
1.52MB	2024-02-28	Inventor/Thorlabs Parts/quTools.png
0.68MB	2024-02-13	Inventor/Thorlabs Parts/PM4_M-Step.step
0.61MB	2024-02-13	Inventor/Thorlabs Parts/PM3_M-Step.step
0.04MB	2024-03-04	Inventor/Thorlabs Parts/MRA10-E03-Step.step
0.67MB	2024-02-13	Inventor/Thorlabs Parts/PBS102-Step.step
3.88MB	2024-02-13	Inventor/Thorlabs Parts/MB3045_M-Step.step
8.67MB	2024-02-28	Inventor/Thorlabs Parts/MB6060_M-Step.step
2.62MB	2024-02-13	Inventor/Thorlabs Parts/LPNIR050-MP2-Step.step
4.75MB	2024-02-13	Inventor/Thorlabs Parts/parts obj/ks1-step.obj
3.16MB	2024-02-13	Inventor/Thorlabs Parts/parts obj/km05_m-step.obj
3.55MB	2024-02-13	Inventor/Thorlabs Parts/parts obj/km05pm_m-step.obj
0.13MB	2024-02-13	Inventor/Thorlabs Parts/parts obj/fbh810-10-step.obj
0.13MB	2024-02-13	Inventor/Thorlabs Parts/parts obj/ImageToStl.com_sm1a6-step.obj
0.14MB	2024-02-13	Inventor/Thorlabs Parts/parts obj/ella1-step.obj
0.57MB	2024-02-13	Inventor/Thorlabs Parts/parts obj/ellb-step.obj
0.27MB	2024-02-13	Inventor/Thorlabs Parts/parts obj/f260fc-780-step.obj
1.24MB	2024-02-13	Inventor/Thorlabs Parts/parts obj/ell6-step.obj
0.05MB	2024-02-13	Inventor/Thorlabs Parts/parts obj/bb1-e03-step.obj
0.06MB	2024-02-13	Inventor/Thorlabs Parts/parts obj/bb2-e03-step.obj
0.02MB	2024-02-13	Inventor/Thorlabs Parts/parts obj/pbs102-step.obj
0.25MB	2024-02-13	Inventor/Thorlabs Parts/parts obj/pm4_m-step.obj
0.22MB	2024-02-13	Inventor/Thorlabs Parts/parts obj/pm3_m-step.obj
0.33MB	2024-02-13	Inventor/Thorlabs Parts/parts obj/wph05m-808-step.obj
0.42MB	2024-02-13	Inventor/Thorlabs Parts/parts obj/mb3045_m-step.obj
0.30MB	2024-02-13	Inventor/Thorlabs Parts/parts obj/lpnir050-mp2-step.obj
0.30MB	2024-02-13	Inventor/Thorlabs Parts/parts obj/lpnir050-mp2-step (1).obj
3.03MB	2024-02-13	Inventor/Thorlabs Parts/parts obj/ell14k-step.obj
0.15MB	2024-02-13	Inventor/Thorlabs Parts/parts obj/ad11f-step.obj
1.67MB	2024-02-13	Inventor/Thorlabs Parts/parts obj/ks2-step.obj
0.10MB	2024-02-13	Inventor/Thorlabs Parts/parts obj/ad11ba-step.obj
2.74MB	2024-02-13	Inventor/Thorlabs Parts/WPH05M-808-Step.step
4.23MB	2024-02-28	Inventor/Thorlabs Parts/KB50_M-Step.step
3.15MB	2024-02-28	Inventor/Thorlabs Parts/KB25_M-Step.step
7.59MB	2024-02-13	Inventor/Thorlabs Parts/KS2-Step.step
2.62MB	2024-02-13	Inventor/Thorlabs Parts/LPNIR050-MP2-Step (1).step
1.18MB	2024-02-13	Inventor/Thorlabs Parts/FBH810-10-Step.step
0.73MB	2024-02-13	Inventor/Thorlabs Parts/F260FC-780-Step.step
18.48MB	2024-02-13	Inventor/Thorlabs Parts/ELL6-Step.STEP
5.52MB	2024-02-13	Inventor/Thorlabs Parts/KM05_M-Step.step
7.16MB	2024-02-13	Inventor/Thorlabs Parts/KS1-Step.step
7.57MB	2024-02-13	Inventor/Thorlabs Parts/KM05PM_M-Step.step
6.97MB	2024-02-13	Inventor/Thorlabs Parts/ELLB-Step.step
40.44MB	2024-02-13	Inventor/Thorlabs Parts/ELL14K-Step.step
0.89MB	2024-02-13	Inventor/Thorlabs Parts/ELLA1-Step.step
1.24MB	2024-02-13	Inventor/Thorlabs Parts/BB2-E03-Step.step
1.15MB	2024-02-13	Inventor/Thorlabs Parts/BB1-E03-Step.step
0.66MB	2024-02-13	Inventor/Thorlabs Parts/AD11F-Step.step
1.64MB	2024-02-13	Inventor/Thorlabs Parts/AD11BA-Step.step
0.78MB	2024-03-11	Inventor/Thorlabs Parts/CP33_M-Step/CP33_M-Step.ipt
1.09MB	2024-03-11	Inventor/Thorlabs Parts/CP33_M-Step/CP33_M-Step_MIR.ipt
0.70MB	2024-03-11	Inventor/Thorlabs Parts/ER1-Step/ER1-Step.ipt
0.82MB	2024-03-11	Inventor/Thorlabs Parts/ER1-Step/ER1-Step_MIR.ipt
0.85MB	2024-03-08	Inventor/Thorlabs Parts/ER1-Step.step
2.39MB	2024-03-08	Inventor/Thorlabs Parts/CP33_M-Step.step
0.20MB	2024-03-08	Inventor/Thorlabs Parts/SR025-Step.step
0.27MB	2024-03-11	Inventor/Thorlabs Parts/PBS102-Step/PBS102-Step.ipt
0.36MB	2024-03-11	Inventor/Thorlabs Parts/PBS102-Step/PBS102-Step_MIR.ipt
0.44MB	2024-03-11	Inventor/Thorlabs Parts/PM3_M-Step/PM3_M-Step.ipt
0.57MB	2024-03-11	Inventor/Thorlabs Parts/PM3_M-Step/PM3_M-Step_MIR.ipt
9.30MB	2024-03-11	Inventor/Thorlabs Parts/ELL14K-Step/ELL14K-Step.ipt
13.43MB	2024-03-11	Inventor/Thorlabs Parts/ELL14K-Step/ELL14K-Step_MIR.ipt
0.69MB	2024-03-08	Inventor/Thorlabs Parts/BSH10_M-Step (1)/BSH10_M-Step (1).ipt
1.82MB	2024-03-08	Inventor/Thorlabs Parts/BSH10_M-Step (1).step
1.29MB	2024-03-11	Inventor/Thorlabs Parts/AD11BA-Step/AD11BA-Step_MIR.ipt
0.82MB	2024-03-11	Inventor/Thorlabs Parts/AD11BA-Step/AD11BA-Step.ipt
0.36MB	2024-03-11	Inventor/Thorlabs Parts/F260FC-780-Step/F260FC-780-Step_MIR.ipt
0.30MB	2024-03-11	Inventor/Thorlabs Parts/F260FC-780-Step/F260FC-780-Step.ipt
4.55MB	2024-03-11	Inventor/Thorlabs Parts/KM05_M-Step/KM05_M-Step_MIR.ipt
3.84MB	2024-03-11	Inventor/Thorlabs Parts/KM05_M-Step/KM05_M-Step.ipt
1.58MB	2024-03-11	Inventor/Thorlabs Parts/WPH05M-808-Step/WPH05M-808-Step_MIR.ipt
1.12MB	2024-03-11	Inventor/Thorlabs Parts/WPH05M-808-Step/WPH05M-808-Step.ipt
7.22MB	2024-03-11	Inventor/Thorlabs Parts/ELL6-Step/ELL6-Step_MIR.ipt
5.65MB	2024-03-11	Inventor/Thorlabs Parts/ELL6-Step/ELL6-Step.ipt
0.33MB	2024-03-11	Inventor/Thorlabs Parts/ELLA1-Step/ELLA1-Step.ipt
0.46MB	2024-03-11	Inventor/Thorlabs Parts/ELLA1-Step/ELLA1-Step_MIR.ipt
1.01MB	2024-03-11	Inventor/Thorlabs Parts/LPNIR050-MP2-Step/LPNIR050-MP2-Step.ipt
1.41MB	2024-03-11	Inventor/Thorlabs Parts/LPNIR050-MP2-Step/LPNIR050-MP2-Step_MIR.ipt
0.57MB	2024-03-11	Inventor/Thorlabs Parts/SM1A6-Step/SM1A6-Step.ipt
0.80MB	2024-03-11	Inventor/Thorlabs Parts/SM1A6-Step/SM1A6-Step_MIR.ipt
```

## Appendix C: raw listing of the other relevant folders (TD Backup folders omitted)

```
== 3D Models
33.1MB	2025-09-18	3D Models/Polycam/main setup/TSOE_Setup_pointcloud.pts
16.5MB	2025-09-18	3D Models/Polycam/main setup/TSOE_Setup_pointcloud.ply
30.7MB	2025-09-19	3D Models/Polycam/main setup/TSOE_Setup_pointcloud.xyz
46.6MB	2025-09-19	3D Models/Polycam/main setup/TSOE_Setup_pointcloud_floatcolors.pts
43.6MB	2025-09-19	3D Models/Polycam/main setup/TSOE_Setup_pointcloud_floatcolors_sorted_radial.pts
5.3MB	2025-09-18	3D Models/Polycam/laser module/TSOE_SetupLaser_pointcloud.pts
== Audio
29.5MB	2024-10-05	Audio/Main Performance/main performance 04 sept .m4a
38.3MB	2024-10-05	Audio/Main Performance/trail performance 03 sept.m4a
36.5MB	2024-10-05	Audio/Main Performance/German Performance 06 sept.m4a
== Johannes Code
0.1MB	2024-08-30	Johannes Code/Quantum_Music_v5_classical.csv
0.1MB	2024-08-30	Johannes Code/Quantum_Music_v5_quantum.csv
0.1MB	2024-08-30	Johannes Code/Quantum_Music_v5.pdf
0.1MB	2024-08-30	Johannes Code/Quantum_Music_v5.nb
0.1MB	2024-08-30	Johannes Code/Johannes Code email explanation.pdf
4.2MB	2024-09-03	Johannes Code/vs_BuildTools.exe
== MAX
0.0MB	2024-09-12	MAX/Latency Testing/LatencyTester.maxpat
0.0MB	2024-08-22	MAX/Latency Testing/latencyTimer.js
0.0MB	2024-09-06	MAX/Latency Testing/Latency Testing.gsheet
0.0MB	2024-08-28	MAX/Latency Testing/tunet.txt
0.0MB	2024-08-28	MAX/Latency Testing/bruqnerLANCabled.txt
0.0MB	2024-09-02	MAX/Latency Testing/dom_small_organ_timing_latency_data.txt
0.0MB	2024-09-02	MAX/Latency Testing/latency_big_organ_data.txt
0.0MB	2024-10-06	MAX/Used Data from BruQner Performance/BruQner_UA.json
== papers
0.5MB	2024-04-26	papers/srep09175.pdf
5.0MB	2024-06-18	papers/PR Boxes in Minecraft.pdf
1.5MB	2024-06-18	papers/Giles Castell Master thesis design inspo.pdf
1.6MB	2025-03-13	papers/Bell test and quantum state tomography_ undergrad setup.pdf
0.4MB	2025-03-14	papers/A Test of Bell_s Inequality for the Undergraduate Laboratory.pdf
8.1MB	2025-07-21	papers/Lecture Notes Johannes Kofler 2025_quantum_information_lecture_notes-1.pdf
== Presentations
112.5MB	2024-10-17	Presentations/EFS Application Presentation/EFS Application Presentation.pptx
0.0MB	2024-10-03	Presentations/EFS Application Presentation/EFS Application Presentation.gslides
0.2MB	2024-10-07	Presentations/EFS Application Presentation/DSCF3529-3.jpg
0.2MB	2024-10-07	Presentations/EFS Application Presentation/DSCF3529-4.jpg
1.1MB	2024-10-07	Presentations/EFS Application Presentation/DSCF9327.jpg
1.8MB	2024-10-09	Presentations/EFS Application Presentation/EFS Assesment.pptx
0.0MB	2024-12-01	Presentations/DPG Tagung/DPG Tagung Abstract Submission.gdoc
0.2MB	2025-02-26	Presentations/DPG Tagung/DPG Website The Sound Of Entanglement.pdf
285.4MB	2025-03-21	Presentations/DPG Tagung/DPG Tagung presentation.pptx
2.7MB	2025-03-10	Presentations/DPG Tagung/DPG Presentation Brainstorm.excalidraw
3.8MB	2025-03-13	Presentations/DPG Tagung/DPG Presentation Brainstorm new.excalidraw
12.4MB	2025-03-19	Presentations/DPG Tagung/media/audio/johnsBellsLong.mp3
1.2MB	2025-03-19	Presentations/DPG Tagung/media/audio/johns bells.mp3
0.1MB	2025-03-19	Presentations/DPG Tagung/media/audio/wissBall2.mp3
0.1MB	2025-03-19	Presentations/DPG Tagung/media/audio/wisBall3.mp3
0.2MB	2025-03-19	Presentations/DPG Tagung/media/audio/wisBall1.mp3
0.1MB	2025-03-18	Presentations/DPG Tagung/media/audio/raw_clicks.mp3
0.3MB	2025-03-17	Presentations/DPG Tagung/media/2nd Performance Slides The Sound of Entanglement.pptx_page-0032.jpg
0.4MB	2025-03-17	Presentations/DPG Tagung/media/2nd Performance Slides The Sound of Entanglement.pptx_page-0029.jpg
0.5MB	2025-03-17	Presentations/DPG Tagung/media/2nd Performance Slides The Sound of Entanglement.pptx_page-0030.jpg
0.9MB	2025-03-17	Presentations/DPG Tagung/media/2nd Performance Slides The Sound of Entanglement.pptx_page-0031.jpg
0.5MB	2025-03-15	Presentations/DPG Tagung/media/graphic elements/top-view-tablet-marble-table.png
1.0MB	2025-03-15	Presentations/DPG Tagung/media/graphic elements/tablet.png
7.5MB	2025-03-18	Presentations/DPG Tagung/media/graphic elements/Wissenschaftsball TSOE Clip.mp4
1.9MB	2025-03-17	Presentations/DPG Tagung/media/graphic elements/filter spinning.mp4
0.0MB	2025-03-16	Presentations/DPG Tagung/media/graphic elements/Untitled-1.png
0.0MB	2025-03-16	Presentations/DPG Tagung/media/graphic elements/filter.png
0.0MB	2025-03-16	Presentations/DPG Tagung/media/graphic elements/arrow.png
0.2MB	2025-03-16	Presentations/DPG Tagung/media/touchdesigner Screenshots/Screenshot 2025-03-16 210525.png
0.2MB	2025-03-16	Presentations/DPG Tagung/media/touchdesigner Screenshots/tablet.png
0.1MB	2025-03-16	Presentations/DPG Tagung/media/touchdesigner Screenshots/Screenshot 2025-03-16 210638.png
0.2MB	2025-03-16	Presentations/DPG Tagung/media/touchdesigner Screenshots/Screenshot 2025-03-16 210603.png
0.3MB	2025-03-21	Presentations/DPG Tagung/Photos/dpg_presentation_photo_3.jpeg
0.2MB	2025-03-21	Presentations/DPG Tagung/Photos/dpg_presentation_photo_4.jpeg
0.2MB	2025-03-21	Presentations/DPG Tagung/Photos/dpg_presentation_photo_5.jpeg
0.3MB	2025-03-21	Presentations/DPG Tagung/Photos/dpg_presentation_photo_2.jpeg
0.2MB	2025-03-21	Presentations/DPG Tagung/Photos/dpg_presentation_photo_1.jpeg
274.2MB	2025-03-18	Presentations/DPG Tagung/DPG Tagung presentation - backup.pptx
7.4MB	2025-04-13	Presentations/DPG Tagung/DPG Tagung presentation.pdf
0.0MB	2025-04-13	Presentations/DPG Tagung/DPG Tagung presentation.log
== Setup Software
0.6MB	2024-04-05	Setup Software/Thorlabs Documentation/Rotation Mount Controller Software Protocol.pdf
== TSOE Docs
0.0MB	2025-08-13	TSOE Docs/On Tour 2025.gdoc
== Touchdesigner
0.2MB	2025-01-24	Touchdesigner/Ball der Wissenschaften 2025/TouchDesigner Ideas/Untitled-1 copy.png
76.4MB	2025-01-23	Touchdesigner/Ball der Wissenschaften 2025/TouchDesigner Ideas/Klick_ ALICE.wav
0.6MB	2025-01-24	Touchdesigner/Ball der Wissenschaften 2025/TouchDesigner Ideas/TouchDesignerCrash.2023.12000_2.dmp
0.6MB	2025-01-23	Touchdesigner/Ball der Wissenschaften 2025/TouchDesigner Ideas/TouchDesignerCrash.2023.12000_1.dmp
8.5MB	2025-01-22	Touchdesigner/Ball der Wissenschaften 2025/TouchDesigner Ideas/The Tunnel and the Clearing.mp3
0.1MB	2025-01-24	Touchdesigner/Ball der Wissenschaften 2025/TouchDesigner Ideas/Reactive-lines_text.toe
0.0MB	2025-01-24	Touchdesigner/Ball der Wissenschaften 2025/TouchDesigner Ideas/SetupOscReceiver.tox
0.0MB	2025-01-23	Touchdesigner/Ball der Wissenschaften 2025/TouchDesigner Ideas/noise-circle.toe
0.0MB	2025-01-23	Touchdesigner/Ball der Wissenschaften 2025/TouchDesigner Ideas/noise-circle.1.toe
0.1MB	2025-01-24	Touchdesigner/Ball der Wissenschaften 2025/TouchDesigner Ideas/Reactive-lines_text.4.toe
0.3MB	2025-01-25	Touchdesigner/Ball der Wissenschaften 2025/TouchDesigner Ideas/BallOfSciencesVisualsEnar.34.toe
0.0MB	2025-01-23	Touchdesigner/Ball der Wissenschaften 2025/TouchDesigner Ideas/CrashAutoSave.BallOfSciencesVisuals.2.toe
0.3MB	2025-03-16	Touchdesigner/Ball der Wissenschaften 2025/TouchDesigner Ideas/BallOfSciencesVisualsEnar.toe
1.5MB	2025-01-24	Touchdesigner/Ball der Wissenschaften 2025/TouchDesigner Ideas/CrashAutoSave.BallOfSciencesVisuals.9.toe
1.5MB	2025-01-25	Touchdesigner/Ball der Wissenschaften 2025/TouchDesigner Ideas/BallOfSciencesVisuals.toe
1.5MB	2025-01-25	Touchdesigner/Ball der Wissenschaften 2025/TouchDesigner Ideas/BallOfSciencesVisuals.12.toe
0.1MB	2025-01-23	Touchdesigner/Ball der Wissenschaften 2025/TouchDesigner Ideas/Audio-histogram.toe
0.1MB	2025-01-23	Touchdesigner/Ball der Wissenschaften 2025/TouchDesigner Ideas/Audio-histogram.21.toe
76.4MB	2025-01-23	Touchdesigner/Ball der Wissenschaften 2025/TouchDesigner Ideas/Klick_ BOB.wav
3.8MB	2025-03-17	Touchdesigner/Ball der Wissenschaften 2025/TouchDesigner Ideas/PPTMovie10.mov
7.7MB	2025-03-17	Touchdesigner/Ball der Wissenschaften 2025/TouchDesigner Ideas/PPTMovie8.mov
7.9MB	2025-03-17	Touchdesigner/Ball der Wissenschaften 2025/TouchDesigner Ideas/PPTMovie7.mov
5.6MB	2025-03-17	Touchdesigner/Ball der Wissenschaften 2025/TouchDesigner Ideas/PPTMovie6.mov
3.8MB	2025-03-17	Touchdesigner/Ball der Wissenschaften 2025/TouchDesigner Ideas/PPTMovie5.mov
4.4MB	2025-03-17	Touchdesigner/Ball der Wissenschaften 2025/TouchDesigner Ideas/PPTMovie4.mov
4.7MB	2025-03-17	Touchdesigner/Ball der Wissenschaften 2025/TouchDesigner Ideas/PPTMovie3.mov
2.1MB	2025-03-17	Touchdesigner/Ball der Wissenschaften 2025/TouchDesigner Ideas/PPTMovie2.mov
0.9MB	2025-03-17	Touchdesigner/Ball der Wissenschaften 2025/TouchDesigner Ideas/PPTMovie0.mov
11.1MB	2025-03-16	Touchdesigner/Ball der Wissenschaften 2025/TouchDesigner Ideas/PPTMovie.0.mov
0.3MB	2025-03-16	Touchdesigner/Ball der Wissenschaften 2025/TouchDesigner Ideas/BallOfSciencesVisualsEnar.36.toe
0.0MB	2025-04-18	Touchdesigner/Washington/Washington/Thumbs.db
0.0MB	2025-04-12	Touchdesigner/Washington/Washington/snapshot.1.tif
0.0MB	2025-04-12	Touchdesigner/Washington/Washington/snapshot.2.tif
0.3MB	2025-04-14	Touchdesigner/Washington/Washington/Washington.10.toe
0.3MB	2025-04-14	Touchdesigner/Washington/Washington/Washington.toe
76.4MB	2025-01-23	Touchdesigner/Washington/Media/Klick_ ALICE.wav
0.2MB	2025-01-24	Touchdesigner/Washington/Media/Untitled-1 copy.png
76.4MB	2025-01-23	Touchdesigner/Washington/Media/Klick_ BOB.wav
8.5MB	2025-01-22	Touchdesigner/Washington/Media/The Tunnel and the Clearing.mp3
0.0MB	2025-04-14	Touchdesigner/Washington/.DS_Store
0.3MB	2025-08-21	Touchdesigner/Millstatt/Millstatt.toe
0.0MB	2025-09-21	Touchdesigner/EFA 2025 Alpbach/TSOE_EFA_2025.toe
0.3MB	2025-09-21	Touchdesigner/EFA 2025 Alpbach/TSOE_EFA_2025.18.toe
0.3MB	2025-09-02	Touchdesigner/CIVA/CIVA.toe
0.0MB	2025-09-17	Touchdesigner/CIVA/enar/Pixel-sorting.5.toe
8.6MB	2025-09-17	Touchdesigner/CIVA/enar/Audio-clemens/new_steam_v2_110bpm 3.mpg
10.5MB	2025-09-17	Touchdesigner/CIVA/enar/Audio-clemens/new_steam_v2_90bpm.mpg
1.2MB	2025-09-17	Touchdesigner/CIVA/enar/Pictures/BruQner Bilder copy.jpg
2.6MB	2025-09-17	Touchdesigner/CIVA/enar/Pictures/BruQner_Stills_1.14.1 copy.jpg
1.3MB	2025-09-26	Touchdesigner/CIVA/enar/CIVA-all.4.toe
1.0MB	2025-09-26	Touchdesigner/CIVA/enar/CIVA-all.toe
0.1MB	2025-10-02	Touchdesigner/CIVA/enar/Updates/CIVA-part1b.9.toe
0.0MB	2025-10-03	Touchdesigner/CIVA/enar/Updates/CIVA-part3b.6.toe
0.0MB	2025-10-02	Touchdesigner/CIVA/enar/Updates/CIVA-part1b.toe
0.0MB	2025-10-03	Touchdesigner/CIVA/enar/Updates/CIVA-part3b.toe
0.0MB	2025-09-19	Touchdesigner/CIVA/pointcloudexperiments.toe
0.4MB	2025-09-17	Touchdesigner/CIVA/Example projects/TDSW-Assets/environment-map.jpg
0.0MB	2025-09-17	Touchdesigner/CIVA/Example projects/TDSW-Assets/presentation.2.toe
0.0MB	2025-09-17	Touchdesigner/CIVA/Example projects/TDSW-Assets/presentation.toe
4.3MB	2025-09-17	Touchdesigner/CIVA/Example projects/TDSW-Assets/Kinect-Images/Basil1/colour.exr
1.7MB	2025-09-17	Touchdesigner/CIVA/Example projects/TDSW-Assets/Kinect-Images/Basil1/depth.exr
4.1MB	2025-09-17	Touchdesigner/CIVA/Example projects/TDSW-Assets/Kinect-Images/Basil1/pointcloud.exr
4.3MB	2025-09-17	Touchdesigner/CIVA/Example projects/TDSW-Assets/Kinect-Images/Basil2/colour.exr
1.7MB	2025-09-17	Touchdesigner/CIVA/Example projects/TDSW-Assets/Kinect-Images/Basil2/depth.exr
4.1MB	2025-09-17	Touchdesigner/CIVA/Example projects/TDSW-Assets/Kinect-Images/Basil2/pointcloud.exr
4.3MB	2025-09-17	Touchdesigner/CIVA/Example projects/TDSW-Assets/Kinect-Images/Basil3/colour.exr
1.7MB	2025-09-17	Touchdesigner/CIVA/Example projects/TDSW-Assets/Kinect-Images/Basil3/depth.exr
4.1MB	2025-09-17	Touchdesigner/CIVA/Example projects/TDSW-Assets/Kinect-Images/Basil3/pointcloud.exr
4.3MB	2025-09-17	Touchdesigner/CIVA/Example projects/TDSW-Assets/Kinect-Images/Basil4/colour.exr
1.8MB	2025-09-17	Touchdesigner/CIVA/Example projects/TDSW-Assets/Kinect-Images/Basil4/depth.exr
4.2MB	2025-09-17	Touchdesigner/CIVA/Example projects/TDSW-Assets/Kinect-Images/Basil4/pointcloud.exr
197.4MB	2025-09-17	Touchdesigner/CIVA/Example projects/TDSW-Assets/Original-Scans/shrine.xyz
90.6MB	2025-09-17	Touchdesigner/CIVA/Example projects/TDSW-Assets/Original-Scans/stairs.xyz
21.8MB	2025-09-17	Touchdesigner/CIVA/Example projects/TDSW-Assets/Prepared-Scans/shrine.pts
21.8MB	2025-09-17	Touchdesigner/CIVA/Example projects/TDSW-Assets/Prepared-Scans/stairs.pts
19.3MB	2025-09-19	Touchdesigner/CIVA/Example projects/TDSW-Assets/Prepared-Scans/shrine_modified.pts
0.9MB	2025-09-17	Touchdesigner/CIVA/Example projects/TDSW-Assets/Sample-Images/tdsw-image1.jpg
1.3MB	2025-09-17	Touchdesigner/CIVA/Example projects/TDSW-Assets/Sample-Images/tdsw-image2.jpg
0.0MB	2025-09-17	Touchdesigner/CIVA/Example projects/TDSW-Assets/Shifter Component/base_shifter.tox
0.2MB	2022-05-29	Touchdesigner/CIVA/Example projects/B2BK_WORKSHOP_2022/StereoLux_Photogrammetry_02.toe
127.2MB	2018-03-17	Touchdesigner/CIVA/Example projects/B2BK_WORKSHOP_2022/[SOURCES]/3D_DATA/Novations_2Millions.txt
80.3MB	2018-03-11	Touchdesigner/CIVA/Example projects/B2BK_WORKSHOP_2022/[SOURCES]/3D_DATA/ScanCanap01_1million.txt
0.0MB	2025-09-22	Touchdesigner/CIVA/Example projects/StereoLux_Photogrammetry_adaptation.toe
0.1MB	2025-09-22	Touchdesigner/CIVA/Example projects/StereoLux_Photogrammetry_adaptation.37.toe
0.0MB	2025-09-19	Touchdesigner/CIVA/pointcloudexperiments.4.toe
43.6MB	2025-09-19	Touchdesigner/CIVA/Final CIVA Project/assets/TSOE_Setup_pointcloud_floatcolors_sorted_radial.pts
8.6MB	2025-09-25	Touchdesigner/CIVA/Final CIVA Project/assets/new_steam_v2_110bpm 3.mpg
10.5MB	2025-09-25	Touchdesigner/CIVA/Final CIVA Project/assets/new_steam_v2_90bpm.mpg
46.6MB	2025-09-19	Touchdesigner/CIVA/Final CIVA Project/assets/TSOE_Setup_pointcloud_floatcolors.pts
43.6MB	2025-09-25	Touchdesigner/CIVA/Final CIVA Project/assets/TSOE_Setup_pointcloud_floatcolors_random.pts
25.2MB	2025-09-29	Touchdesigner/CIVA/Final CIVA Project/assets/metronome_90bpm_5min.wav
2.3MB	2025-09-29	Touchdesigner/CIVA/Final CIVA Project/assets/metronome_110bpm_5min.mp3
384.4MB	2025-09-29	Touchdesigner/CIVA/Final CIVA Project/assets/Classic.mov
6.1MB	2025-10-02	Touchdesigner/CIVA/Final CIVA Project/assets/section_3.mp3
3.0MB	2025-10-02	Touchdesigner/CIVA/Final CIVA Project/assets/section_2.mp3
4.8MB	2025-10-02	Touchdesigner/CIVA/Final CIVA Project/assets/section_1.mp3
1.1MB	2025-10-02	Touchdesigner/CIVA/Final CIVA Project/assets/section_3.opus
0.6MB	2025-10-02	Touchdesigner/CIVA/Final CIVA Project/assets/section_2.opus
0.9MB	2025-10-02	Touchdesigner/CIVA/Final CIVA Project/assets/section_1.opus
2900.6MB	2025-10-02	Touchdesigner/CIVA/Final CIVA Project/assets/PXL_20251002_175604765.mp4
2.6MB	2025-09-17	Touchdesigner/CIVA/Final CIVA Project/assets/BruQner_Stills_1.14.1 copy.jpg
1.2MB	2025-09-17	Touchdesigner/CIVA/Final CIVA Project/assets/BruQner Bilder copy.jpg
7.1MB	2025-11-19	Touchdesigner/CIVA/Final CIVA Project/TSOE_CIVA.toe
7.0MB	2025-10-03	Touchdesigner/CIVA/Final CIVA Project/TSOE_CIVA.98.toe
7.1MB	2025-11-19	Touchdesigner/CIVA/Final CIVA Project/TSOE_CIVA.104.toe
0.0MB	2025-09-20	Touchdesigner/CustomComponents/PointcloudComponents/PointCloudMerge.tox
0.0MB	2025-09-29	Touchdesigner/Custom Pallet Toxs/Palette/paletteData.json
0.2MB	2025-09-25	Touchdesigner/Custom Pallet Toxs/Palette/misc/camSequencer1.tox
0.1MB	2025-09-26	Touchdesigner/Custom Pallet Toxs/Palette/misc/SetupOscReceiver1.tox
0.0MB	2025-09-29	Touchdesigner/Custom Pallet Toxs/Palette/misc/SetupOscReceiver2.tox
0.0MB	2025-09-25	Touchdesigner/Custom Pallet Toxs/Palette/PointClouds/base_shifter.tox
0.0MB	2025-09-29	Touchdesigner/Custom Pallet Toxs/Palette/PointClouds/edgeNoise.tox
0.0MB	2025-09-21	Touchdesigner/Custom Pallet Toxs/Palette/PointClouds/LifeFeedback.tox
0.0MB	2025-09-29	Touchdesigner/Custom Pallet Toxs/Palette/PointClouds/Photons.tox
0.0MB	2025-09-29	Touchdesigner/Custom Pallet Toxs/Palette/PointClouds/Photons1.tox
0.0MB	2025-09-29	Touchdesigner/Custom Pallet Toxs/Palette/PointClouds/Photons_Spheres.tox
0.0MB	2025-09-21	Touchdesigner/Custom Pallet Toxs/Palette/PointClouds/PointCloudMerge.tox
0.0MB	2025-09-29	Touchdesigner/Custom Pallet Toxs/Palette/PointClouds/PointCloud_PixelMixer.tox
0.0MB	2025-09-21	Touchdesigner/Custom Pallet Toxs/Palette/PointClouds/radial_noise.tox
0.0MB	2025-09-21	Touchdesigner/Custom Pallet Toxs/Palette/PointClouds/SlopeDisplace_feedback.tox
0.0MB	2025-09-25	Touchdesigner/Custom Pallet Toxs/Palette/PointClouds/Thomas_Attractor.tox
0.0MB	2025-09-25	Touchdesigner/Custom Pallet Toxs/Palette/PointClouds/Thomas_Attractor1.tox
0.0MB	2025-11-13	Touchdesigner/Palermo/Palermo ISQCMC.toe
8.5MB	2025-01-22	Touchdesigner/Palermo/Media/The Tunnel and the Clearing.mp3
76.4MB	2025-01-23	Touchdesigner/Palermo/Media/Klick_ BOB.wav
76.4MB	2025-01-23	Touchdesigner/Palermo/Media/Klick_ ALICE.wav
1.1MB	2025-10-27	Touchdesigner/Palermo/chopto1.tsv
0.5MB	2025-11-13	Touchdesigner/Palermo/Palermo ISQCMC.5.toe
```
