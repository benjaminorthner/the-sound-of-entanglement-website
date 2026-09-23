# Assets: where things are and what may be used

**Rule: copy selectively.** Only assets actually used on the site go into the
repo, resized and compressed (see "Adding assets" below). Originals stay in
the source locations. Detailed catalogues with full paths, resolutions and
contact sheets are in `docs/research/` (`drive_photos.md`, `personal_drive.md`,
`thesis.md`, `bruqner_repo.md`).

## Source locations (Benjamin's machine)

| Location | What |
|---|---|
| `C:\Users\benja\Downloads\The Sound of entanglement drive files\extracted\The Sound of Entanglement\` | **Shared team drive** (extracted from 7 zips next to it, 14 GB). One folder per show (`2024 09 - BruQner`, `2025 01 - Vienna Science Ball`, …), plus press, Leonardo and album folders. |
| `H:\My Drive\TU Wien\Project Works\TSOE\` | **Benjamin's drive**: Media (performance photos, published press PDFs, audio samples, timelapses), Figures (setup photos with beam paths, Inkscape diagrams, BruQner section clips), 3D Models (Polycam scans), Touchdesigner (projects per show, PPTMovie loops, click WAVs), Presentations (DPG, EFS), MAX. Bills, Payments, Thorlabs orders, Transport, Qutools and Swabian folders are **private**. |
| `D:\Programming\The-Sound-of-Entanglement\` | Paper LaTeX + figures (`Figures/`, `Clemens figures/`, `Clemens Soundfiles/`, `Photos performance/`) |
| `D:\Programming\Master-Thesis\` | Thesis LaTeX + figures (`sections/*/figures/`) |
| `D:\Programming\BruQner\bruQner\` | Experiment code, BruQner shader, logs (real data), point cloud, simulator, docs |

Never copy anything from: invoices and receipts (`Rechnungen`, `Bills`),
budgets (`Budget JKU.xlsx`, `Finanzbericht`, `Kalkulation_TechRider.xlsx`), the
accreditation list, CVs with personal data, crew call sheets
(`Dispo_Bruqner_Vorab.pdf`, `camera filming plan.pdf`), or internal emails.

## Photos: best picks and credits

**Credits are mandatory.** Use the credit exactly as written.

| Set | Credit line | Location (shared drive unless noted) | Notes |
|---|---|---|---|
| BruQner premiere, Ars Electronica | "Ars Electronica / Florian Voggeneder" or "Ars Electronica / Tom Mesic" (per file EXIF) | `2024 09 - BruQner/Photos Ars Electronica/` (63 files, 4000 px) | Best overall. Flickr licence probably CC BY-NC-ND; confirm with Ars Electronica. |
| BruQner premiere, light cones | "© Land OÖ / Andreas Krenn" | `2024 09 - BruQner/Doku/BruQner (c) Land OÖ-Andreas Krenn/` (33 files, 2657 px) | The best haze-cone shots. The folder name uses a decomposed "Ö", so use globs in scripts. |
| Documentary stills | "© weitblickfilm" | `2024 09 - BruQner/Doku/BruQner Stills/` (51 files, 4K) | Includes the violet pump-laser macro `BruQner_Stills_1.14.1.jpg` |
| Visual test in the Dom, July 2024 | Benjamin Orthner (to confirm) | `2024 09 - BruQner/Photos Dom Visual Test July/` (6K) | Symmetric V-cones above the altar in the empty cathedral |
| Washington DC | "Kaveh Sardari" (EXIF; the folder is named Ona Ambrozaite) | `2025 04 - Washington DC/Photos & Videos/Ona Ambrozaite/` (8K) | The 8 Rooms white-line landscape on a big screen |
| Alpbach | "© EFA / Luiza Puiu" | `2025 08 - Alpbach/Bilder…/` (2048 px) | Trio on stage, landscape visuals |
| CIVA | "© eSeL.at – Lorenz Seidler" | `2025 10 - CIVA Wien/Photos/esel.at/` | **Only 1024 px** for the performance half; request originals |
| Vienna Ball | credit unknown | `2025 01 - Vienna Science Ball/Photos/Ball Website (Low Quality)/` (1200 px) | Request hi-res and the credit from the Ball organisers |
| JKU Zirkus des Wissens | Johannes Kofler | `2025 11 - Zirkus des Wissens (JKU)/JK Pictures & Videos/` (HEIC) | Phone photos |
| Millstatt | Benjamin Orthner | `2025 06 - Millstatt/Photos/` | Setup-only phone photos |
| "Osaka" folder | Benjamin Orthner (confirmed) | `2025 05 - Osaka/Photos and Graphics/Photos/` | Actually 2024 pre-premiere sessions (haze, band), not Osaka |
| Setup, top-down in its glass case | Benjamin (to confirm) | `H:\…\TSOE\Presentations\EFS Application Presentation\DSCF9327.jpg` (6003 px) | Physics page |
| Setup with beam paths | Benjamin | `D:\Programming\The-Sound-of-Entanglement\Figures\SetupLabelledBeamPaths.png`; `D:\Programming\Master-Thesis\sections\setup\figures\whole_setup_photo_beams.png` | Physics page |

**Landing-page hero candidates** (ranked in `research/drive_photos.md` §2):
1. haze cloud over the glowing case (Ars / Voggeneder, `…_53972967048_o.jpg`)
2. inverted light cone over the case (Krenn 31)
3. huge cloud sweep over the crowd (Ars, `…_53971847342_o.jpg`)
4. symmetric V-cone above the altar (`LinzVisuals-7.jpg`)
5. purple cone (Krenn 15)
6. starburst from the gallery (Ars / Mesic, `…_53973053449_o.jpg`)

## Portraits

`2024 09 - BruQner/Press Pics for Are Electronica/` has individual portraits
named "Subject @ Photographer". Credits: Ploier © Elisabeth Peheim · Orthner ©
Benjamin Orthner · Wenger © Alex Gotter · de Dios Rodríguez © Philipp Haslinger
· Kofler © Johannes Kofler (only 330 px) · Ringbauer © Martin Ringbauer ·
Haslinger © Enar de Dios Rodríguez · Küng © Richard Küng. Musicians (CIVA
press folder): Manu Mayr © Ingo Pertramer, Judith Schwarz © Frank
Schindelbeck, Clemens Wenger © Alex Gotter (hi-res). There is also a team
slide with duotone portraits: `H:\…\TSOE\Media\Team Title Slide\TSOE Team Slide_notext.png`.

## Figures and diagrams

The best are in `D:\Programming\The-Sound-of-Entanglement\Figures\`:
`Lightcones.jpg` (painted SPDC cones), `SetupLabelledBeamPaths.png`,
`Qrndwalk28.jpg`, `8Rooms_Graphics.png` (R1–R8 visuals), `8Rooms.pdf` (room
map), `sheet_music.png` (BruQner motif set), `8roomsclicks*.jpg` (click
patterns), `sketchlayout_new.jpg`. The thesis has `type1_3d.pdf`,
`spdc_conservation.pdf`, `simplified_setup.pdf`, `pbs_cube.pdf` and
`floor_plans.pdf` (Mariendom). **Prefer redrawing diagrams as SVG in the site
style.** Avoid qutools product and brochure images (third-party).

## Audio

| File | Use |
|---|---|
| `H:\…\TSOE\Media\Audio Samples\Ball der Wissenschaften\TUQ_lastset_cut_excerpt.mp3` (4:32), `…excerpt2.mp3` (4:38) | The band live at the Ball (8 Rooms): best sample for a piece page |
| `H:\…\TSOE\Presentations\DPG Tagung\media\audio\raw_clicks.mp3` (5 s) | The raw sound of the rotation mounts; physics page |
| `H:\…\TSOE\Touchdesigner\…\Klick_ ALICE.wav`, `Klick_ BOB.wav` (15 min each) | Separate Alice and Bob clicks; trim for a stereo interactive |
| `D:\Programming\The-Sound-of-Entanglement\Clemens Soundfiles\8 ROOMS - clicking motives example *.wav` | Click echo patterns A2−, B2+, correlation |
| `H:\…\TSOE\Presentations\DPG Tagung\media\audio\johns bells.mp3` (1:35) | "John's Bells" experimental piece; confirm before using |
| CIVA sound examples (`2025 10 - CIVA Wien/Presentation/Soundfiles/`) | Indeterminate Apparatus (70/90/110 bpm, VoQoder) |
| `2025 11 - Zirkus des Wissens (JKU)/Audiomitschnitt/…mp3` | Indeterminate Apparatus recording |
| `H:\…\TSOE\Audio\Main Performance\*.m4a` | Full BruQner shows, **phone quality only**. Ask for the weitblickfilm soundtrack or a desk recording. |

Avoid `The Tunnel and the Clearing.mp3` (third-party).

## Video

| File | Use |
|---|---|
| YouTube: documentary `_mIf_OFN1YI`, trailer `i-wF82vEts0`, 8 Rooms Ball `Smz7cGPBODw` | Embed (privacy-enhanced, click to load) |
| `H:\…\Media\Performance pictures\Linz Ars Electronica BruQner\2025-03-15 00-39-54.mp4` (32 s, 1080p) | Dark macro of the optics with a haze beam; background loop |
| `H:\…\Touchdesigner\Ball der Wissenschaften 2025\TouchDesigner Ideas\PPTMovie*.mov` (5 s each) | Monochrome wireframe landscapes; loops |
| `H:\…\Figures\video clips\section 1–8.mp4` (480p) | BruQner visuals per section; reference for re-implementation |
| `2024 09 - BruQner/Preview Video/Bruqner_3_min.mp4` | 3-minute preview |
| `2025 04 - Washington DC/…/RandomWalk_Visualization_JHU_loop.mp4` | Silent loop |

## Logos (partners, for the credits/partners section)

Vector: TU Wien (svg/ai/eps/pdf), Uni Innsbruck (pdf/eps), Bruckner 2024
(many PDFs, including white-on-dark versions), Mariendom. Raster only: JKU, JKU
LIT, Ars Electronica, VCQ, BeyondC, quantA. Missing: FWF, Austrian Cultural
Forum. Location: `2024 09 - BruQner/Logos/` and `Editorial Program Info/`.
Partner logos should normally go in as one monochrome set (white on dark).
Check each partner's logo guidelines.

## Adding assets to the repo

- Resize to at most 2400 px on the long side for full-bleed images and 1600 px
  for gallery images. Let the site's image pipeline produce responsive AVIF/WebP.
- Name files descriptively (`bruqner-2024-haze-over-case.jpg`, not
  `53972967048_o.jpg`) and record the source path and credit in the content
  entry that uses them.
- Filenames on the shared drive can contain decomposed Unicode (`Ö`), so match
  with globs in scripts.
- ffmpeg is available: `ffmpeg -i in.jpg -vf "scale='min(2400,iw)':-2" -q:v 3 out.jpg`.

## Supporter logos (in the repo)

`src/assets/logos/*.png` are normalised by `scripts/prepare_logos.py` (dark logos
become white on transparent; official negative variants are kept). The list of
supporters, their roles and grant numbers is in `src/content/supporters.yaml`,
and it drives the landing section, the footer row (`featured: true`) and
/people/#support. Sources:
- **Shared drive:** TU Wien (SVG), Ars Electronica, VCQ, SFB BeyondC, JKU LIT,
  Stadt Wien Kultur, Mariendom (PDF), anton bruckner 2024 (official grey
  white-variant, "Aniver_Logo_GRA-GRA_white_EN"; the brand manual forbids new
  colour combinations).
- **Official websites:** FWF (fwf.ac.at/aktuelles/presse/logos), JKU (site
  footer SVG), University of Innsbruck (negative SVG), Anton Bruckner Private
  University, Kunstuniversität Linz, BMWKMS, Austrian Cultural Forum Washington.
- **quantA:** taken from the team's Berlin slides (quantumaustria.at was
  unreachable); replace with the official file when available.
- Text only (no logo): Johns Hopkins, Vienna Ball of Sciences, EXPO Osaka,
  TechForum Millstatt, European Forum Alpbach, CIVA, Zirkus des Wissens.
