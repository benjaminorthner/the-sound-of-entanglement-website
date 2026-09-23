# The Sound of Entanglement: drive photo & media catalogue

Prepared 2026-09-23 for the website build. Source (read-only, untouched):
`C:\Users\benja\Downloads\The Sound of entanglement drive files\extracted\The Sound of Entanglement\` (called **ROOT** below; all paths in the tables are absolute).

**Totals:** 1,467 files. Media: 396 jpg, 158 heic, 49 webp, 35 png, 13 tif, 10 jpeg, 4 psd, 60 mov, 40 mp4, 2 mpg. Also 566 pdf (almost all Bruckner-2024 logo variants), 29 pptx, 33 docx, 30 mp3.
Every image folder and every video was viewed through contact sheets. The Ars Electronica, Krenn, Washington, CIVA and other candidates were also compared at larger size.

**Contact sheets** (numbers like `#30` in this doc refer to the tile numbers on these sheets):
`C:\Users\benja\AppData\Local\Temp\claude\D--Programming-the-sound-of-entanglement-website\a3c8646d-4800-4998-b030-5c47a0497203\scratchpad\previews\sheets\`
- one sheet per folder (`<folder_slug>__N.jpg`, 25 images each, labelled with filename + resolution)
- `videos__1.jpg` … `videos__12.jpg`: 6 frames per video, numbered V1–V90 (index in `..\video_index.txt`)
- `hero_candidates_1.jpg`, `hero_candidates_2.jpg`, `hero_candidates_3.jpg`: larger side-by-side comparisons
- `logos_pdf_sheet.jpg`, `pptx_media_sheet.jpg`, `portraits_subfolders.jpg`
- tile-number → file mapping: `..\sheet_index.json`; full per-file inventory (dims, EXIF, durations): `..\..\inventory.json`

Legend: **L** = landscape, **P** = portrait, **Sq** = square.

---

## 0. Headline findings (read first)

1. **BruQner / Ars Electronica (Mariendom Linz, 4 Sep 2024) is by far the strongest material.** It has 63 professional Ars Electronica Flickr photos (Florian Voggeneder + Tom Mesic, 4000 px), 33 Land OÖ photos by Andreas Krenn (2657 px, the best light-cone shots), and 51 4K film stills from the weitblickfilm documentary. Most of the hero images come from here.
2. **Washington (JHU Science Diplomacy Summit, 14 Apr 2025)** has 11 excellent 8K professional shots. EXIF credits them to **Kaveh Sardari**; the folder is named "Ona Ambrozaite", presumably the person who shared them. They show the white-line "8 Rooms" landscape on a big screen in a dark hall, which suits the site.
3. **CIVA Wien (Oct 2025)**: good esel.at / Lorenz Seidler photos of the **point-cloud visuals**, but the performance half is only **1024×683 px webp**. Only the early/lecture half is 2000 px. **Request originals from esel.at** before using any as a full-bleed hero.
4. **Vienna Science Ball**: the official photos are only 1200×800 ("Ball Website (Low Quality)"), and the photographer is not stated (filename prefix `08_FRPIC_250125_BdW_…`). Request hi-res originals and a credit from the ball organisers.
5. **"Osaka" folder is not Osaka footage.** EXIF dates are **21 May 2024** and **13 Jun 2024**, before the premiere: an optics-bench rehearsal with piano/double bass and a haze-light session with an audience. They were probably collected for an Osaka application video (`Text für Video.docx`). No evidence that an Osaka show happened ("On Tour 2025.docx" lists Osaka as "Maybe"). Treat these as 2024 development/"early sessions" images.
6. **Millstatt (3 Jun 2025)**: only Benjamin's Pixel phone photos of the setup in the baroque church. No audience or performance photos.
7. **No photos at all** for Munich/Viva Quantum (only a 354 MB pptx, which may contain photos), Palermo, Berlin (video excerpts only), Pint of Science 2026 (one video), OOE Landespreis (paperwork), MIT Leonardo, In the Press (a radio mp3).
8. **No vector project logo exists.** The "THE SOUND OF ENTANGLEMENT" wordmark is set in **Josefin Sans** Bold/Regular (a free Google Font) with a thin waveform line and a red chevron (`>`). It exists only in PSD/PNG. The BruQner serif variant uses Richmond Display/Text. Rebuilding the wordmark as SVG in Josefin Sans is easy. See §5.
9. Credits are mostly recoverable (EXIF artist fields + filenames). Where marked "– confirm", the credit is my inference from the camera model.

---

## 1. Inventory per folder

Counts are photos (jpg/jpeg/png/heic/webp/tif/psd) and videos (mov/mp4/mpg). Resolutions are EXIF-rotation-corrected.

| Folder (relative to drive root) | Photos | Videos | Formats | Typical resolution | Camera / EXIF credit |
|---|---|---|---|---|---|
| 2024 09 - BruQner\Design and Media\Photos For New Austrian | 13 | 0 | jpg×13 | 3840×2160 (10), 4000×2668 (3) | Florian Voggeneder (3); Canon EOS R5 |
| 2024 09 - BruQner\Design and Media\Team Title Slide | 2 | 0 | png×1, psd×1 | 3858×2170 (2) |  |
| 2024 09 - BruQner\Design and Media\Youtube | 3 | 0 | png×2, psd×1 | 1920×1080 (3) |  |
| 2024 09 - BruQner\Doku\BruQner (c) Land OÖ-Andreas Krenn | 33 | 0 | jpg×33 | 2657×1772 (33) | Andreas KRENN (33); Canon EOS R |
| 2024 09 - BruQner\Doku\BruQner Stills | 51 | 0 | jpg×51 | 3840×2160 (51) |  |
| 2024 09 - BruQner\Doku | 0 | 1 | mp4×1 | 2160×3840 (1) |  |
| 2024 09 - BruQner\Editorial Program Info | 8 | 0 | jpg×4, png×2, tif×2 | 3988×928 (1), 1357×603 (1) | Canon EOS 5D Mark II; iPhone 12 Pro |
| 2024 09 - BruQner\Fotos Aufführung | 3 | 1 | jpeg×3, mp4×1 | 1200×1600 (2), 3072×4080 (1) |  |
| 2024 09 - BruQner\Logos\BruQner_Doku | 8 | 0 | png×6, jpg×2 | 5159×1746 (1), 1357×603 (1) |  |
| 2024 09 - BruQner\Logos\Bruckner_Logos | 0 | 2 | mp4×2 | 1920×1080 (2) |  |
| 2024 09 - BruQner\Logos\Bruckner_Logos\Logos u. Markenmanual DE\Bruckner_Logovarianten_DE | 2 | 0 | png×2 | 756×1164 (1), 591×603 (1) |  |
| 2024 09 - BruQner\Logos | 2 | 0 | png×1, jpeg×1 | 200×119 (1), 474×160 (1) |  |
| 2024 09 - BruQner\Logos\TU_Logo_schwarz\Print_CMYK | 2 | 0 | png×2 | 3120×1182 (1), 750×285 (1) |  |
| 2024 09 - BruQner\Logos\TU_Logo_schwarz\Screen-Web_RGB | 2 | 0 | png×2 | 3120×1182 (1), 750×285 (1) |  |
| 2024 09 - BruQner\Photos Ars Electronica | 63 | 0 | jpg×63 | 4000×2668 (30), 4000×2667 (23) | Florian Voggeneder (29); Tom Mesic (28); Canon EOS R5; Canon EOS R6 |
| 2024 09 - BruQner\Photos Dom November 2023 | 13 | 0 | heic×13 | 4032×3024 (7), 3024×4032 (6) | iPhone 12 Pro |
| 2024 09 - BruQner\Photos Dom Visual Test July | 21 | 0 | jpg×21 | 6240×4160 (3), 4160×6240 (2) | X100V |
| 2024 09 - BruQner\Photos Innsbruck Lab 10.05.2023 | 39 | 0 | jpg×39 | 5616×3744 (18), 3744×5616 (7) | Canon EOS 5D Mark II |
| 2024 09 - BruQner\Photos and Videos_ 2024 07 05 | 18 | 5 | heic×18, mov×5 | 4032×3024 (16), 1920×1080 (5) | iPhone 14 Pro |
| 2024 09 - BruQner\Presentation\Figures | 1 | 0 | psd×1 | None×None (1) |  |
| 2024 09 - BruQner\Press Pics for Are Electronica | 12 | 0 | jpg×7, tif×4, jpeg×1 | 12133×8036 (3), 3744×5616 (1) | ORTNER BENJAMIN (2); ALEX GOTTER (1); iPhone 12 Pro; X-T2 |
| 2024 09 - BruQner\Press Pics for Are Electronica\z_Low-res-group-images | 3 | 0 | jpg×3 | 2592×1717 (3) |  |
| 2024 09 - BruQner\Press_pictures_June2023 | 4 | 0 | tif×4 | 5016×3095 (1), 5016×3375 (1) | Canon EOS 5D Mark II |
| 2024 09 - BruQner\Press_portraits_July2023 | 4 | 0 | tif×3, jpg×1 | 6052×4032 (1), 12100×4032 (1) | iPhone 12 Pro |
| 2024 09 - BruQner\Press_portraits_July2023\Portraits\Enar | 1 | 0 | jpg×1 | 1861×1861 (1) |  |
| 2024 09 - BruQner\Press_portraits_July2023\Portraits\Johannes | 1 | 0 | jpg×1 | 330×440 (1) |  |
| 2024 09 - BruQner\Press_portraits_July2023\Portraits\Martin | 1 | 0 | jpg×1 | 2173×2563 (1) | Canon EOS 650D |
| 2024 09 - BruQner\Press_portraits_July2023\Portraits\Philipp | 3 | 0 | jpg×3 | 3024×4032 (2), 2447×2486 (1) | iPhone 12 Pro |
| 2024 09 - BruQner\Press_portraits_July2023\Portraits\Richard | 1 | 0 | jpeg×1 | 4928×3280 (1) |  |
| 2024 09 - BruQner\Preview Video | 0 | 1 | mp4×1 | 1920×1080 (1) |  |
| 2024 09 - BruQner\Rechnungen - Belege - Buchhaltung\Clemens | 2 | 0 | heic×1, jpg×1 | 3024×4032 (1), 4032×3024 (1) | iPhone 11 |
| 2024 09 - BruQner\Video | 0 | 2 | mp4×2 | 1280×720 (1), 1920×1080 (1) |  |
| 2024 09 - BruQner\Visuals - Linz | 0 | 6 | mp4×6 | 1920×1080 (6) |  |
| 2025 01 - Vienna Science Ball\Photos\Ball Website (Low Quality) | 8 | 0 | jpg×8 | 1200×800 (7), 800×1200 (1) |  |
| 2025 01 - Vienna Science Ball\Photos\Benjamin Photos | 13 | 7 | mp4×7, jpg×13 | 4080×3072 (9), 1080×1920 (5) | Pixel 9 Pro XL |
| 2025 04 - Washington DC\Photos & Videos\Alex Video | 0 | 1 | mp4×1 | 3840×2160 (1) |  |
| 2025 04 - Washington DC\Photos & Videos\Benny Pictures\Conference | 20 | 0 | jpg×20 | 3072×4080 (3), 4080×3072 (2) | Pixel 9 Pro XL; X100V |
| 2025 04 - Washington DC\Photos & Videos\Benny Pictures\Sightseeing | 20 | 0 | jpg×20 | 4160×6240 (5), 4112×5740 (1) | X100V; Pixel 9 Pro XL |
| 2025 04 - Washington DC\Photos & Videos\Found Online | 3 | 0 | jpg×2, png×1 | 1280×853 (2), 1205×893 (1) |  |
| 2025 04 - Washington DC\Photos & Videos\JK‘s Pictures and Videos | 28 | 25 | heic×28, mov×25 | 1920×1080 (25), 4032×3024 (15) | iPhone 16 Pro |
| 2025 04 - Washington DC\Photos & Videos\Ona Ambrozaite | 11 | 0 | jpg×11 | 8256×5504 (10), 5392×3592 (1) | KAVEH SARDARI (11); NIKON Z 8; NIKON Z 9 |
| 2025 04 - Washington DC\Photos & Videos\Verena Pictures and Videos | 76 | 3 | heic×76, mov×3 | 3024×4032 (50), 4032×3024 (26) | iPhone 13 Pro |
| 2025 04 - Washington DC\Presentation\2025 03 DPG Regensburg\media\graphic elements | 9 | 2 | jpg×4, png×5, mp4×2 | 2000×1125 (4), 414×332 (3) |  |
| 2025 04 - Washington DC\Presentation\2025 03 DPG Regensburg\media\touchdesigner Screenshots | 4 | 0 | png×4 | 2370×1376 (1), 2698×1412 (1) |  |
| 2025 04 - Washington DC\Presentation\2025 03 DPG Regensburg\media\videos | 0 | 19 | mp4×9, mov×10 | 1280×720 (11), 1920×1080 (6) |  |
| 2025 04 - Washington DC\Social Media Material | 3 | 1 | jpeg×3, mp4×1 | 3024×4032 (2), 4032×3024 (1) |  |
| 2025 05 - Osaka\Photos and Graphics\Photos | 6 | 0 | jpg×6 | 6240×4160 (1), 6134×4089 (1) | X-S10; X100V |
| 2025 05 - Osaka\Photos and Graphics\Setup Title Image | 6 | 0 | psd×1, png×5 | 1920×1080 (6) |  |
| 2025 06 - Millstatt\Photos\Benjamin Photos | 21 | 2 | jpg×21, mp4×2 | 3072×4080 (14), 4080×3072 (7) | Pixel 9 Pro XL |
| 2025 07 - Berlin\SourceFiles | 2 | 4 | mp4×4, png×2 | 1920×1080 (4), 750×285 (1) |  |
| 2025 08 - Alpbach\Bilder - Sound of Entanglement EFA CCA – Herz-Kremenak-Saal | 25 | 0 | jpg×25 | 2048×1365 (23), 1365×2048 (2) | Luiza Puiu (25); NIKON Z 9 |
| 2025 10 - CIVA Wien\Photos\esel.at | 49 | 0 | webp×49 | 2000×1334 (19), 1024×683 (18) | eSeL Lorenz Seidler (49); Canon EOS R5 |
| 2025 10 - CIVA Wien\Pressematerial\Group Pictures | 5 | 0 | jpg×4, jpeg×1 | 4912×7360 (1), 7360×4912 (1) | ALEX GOTTER (2); Frank Schindelbeck (1); ILCE-7M3; PENTAX 645Z |
| 2025 10 - CIVA Wien\Pressematerial\Pictures EXPERIMENT_copyrightTHESOUNDOFENTANGLEMENT | 16 | 0 | jpg×16 | 3840×2160 (15), 4000×2668 (1) | Florian Voggeneder (1); Canon EOS R5 |
| 2025 10 - CIVA Wien\Visuals\Audio-clemens | 0 | 2 | mpg×2 | None×None (2) |  |
| 2025 10 - CIVA Wien\Visuals\Pictures | 2 | 0 | jpg×2 | 3797×2136 (1), 3840×2160 (1) |  |
| 2025 10 - CIVA Wien\Visuals\Test-exports | 0 | 4 | mov×4 | 1280×720 (4) |  |
| 2025 11 - Zirkus des Wissens (JKU)\JK Pictures & Videos | 22 | 13 | heic×22, mov×13 | 4032×3024 (14), 1920×1080 (13) | iPhone 16 Pro |
| 2026 05 - Pint of Science | 0 | 1 | mp4×1 | 1920×1080 (1) |  |

Folders with no photos/videos: `2025 - On Tour` (docx), `2025 05 - OOE Landespreis…` (application docs), `2025 07 - Berlin` (pptx + 4 videos in SourceFiles), `2025 08 - Palermo` (abstract, pptx, mp3), `2025 10 - Munich (Viva Quantum)` (one 354 MB pptx), `2026 05 - Pint of Science` (pptx + 1 video), `2026 _ Music Album` (xlsx), `General_Photos_Slide` (`One_slide_all_performances.pptx`, which holds a nice 6-photo overview of performances; its media was extracted to `previews\pptx_media\oneslide_image*.png`), `In the Press` (Ö1 radio mp3), `MIT Leonardo Journal` (docx).

### Photographer credits found

| Folder | Credit | Source of info |
|---|---|---|
| BruQner / Photos Ars Electronica | **Florian Voggeneder / Ars Electronica (vog.photo)**, 29 files; **Tom Mesic / Tom Mesic photography**, 28 files; per-file in EXIF Artist/Copyright. Files #1–#6 have no EXIF: #1, #3, #4, #5 are weitblickfilm stills, #2 is the Innsbruck press image (Martin Ringbauer, Philipp Haslinger), #6 is the team collage. Standard Ars Electronica credit format: "Ars Electronica / Florian Voggeneder", "Ars Electronica / Tom Mesic". | EXIF |
| BruQner / Doku / "BruQner (c) Land OÖ-Andreas Krenn" | **© Land OÖ / Andreas Krenn** | folder + filenames + EXIF |
| BruQner / Doku / BruQner Stills, Design and Media / Photos For New Austrian ("BruQner Bilder"), CIVA Pressematerial / Pictures EXPERIMENT | Frames from the documentary by **weitblickfilm**: Director Deniz Lindenberg, Cinematography Florian Lindenberg, Exec. Producer Alexander Ploier. Editorial Program Info credits one of them as "Setup @ Deniz Lindenberg". The CIVA folder name says "copyright THE SOUND OF ENTANGLEMENT". | `Doku/Short_Text.docx`, filenames |
| BruQner / Press_pictures_June2023 (press01–03) and Editorial "Illustration @ …" | **Martin Ringbauer, Philipp Haslinger** | filename |
| BruQner / Photos Innsbruck Lab 10.05.2023 | Same Canon 5D Mk II as press01, so likely **Martin Ringbauer / Philipp Haslinger** (confirm) | EXIF camera |
| BruQner / Photos Dom Visual Test July (2024-07-04) | Fujifilm X100V, the same camera as "Benny Pictures", so likely **Benjamin Orthner** (confirm) | EXIF camera |
| BruQner / Photos Dom November 2023, Photos and Videos_ 2024 07 05 | Team iPhone snapshots (iPhone 12 Pro / 14 Pro) | EXIF |
| Press portraits | per filename "Subject @ Photographer", see §7 | filenames + `00_Credits_BruQner_Portrait.docx` |
| Washington / Ona Ambrozaite | **Kaveh Sardari** (EXIF Artist + Copyright, Nikon Z8/Z9) | EXIF |
| Washington / JK's Pictures and Videos | Johannes Kofler (iPhone 16 Pro) | folder |
| Washington / Verena Pictures and Videos | "Verena" (iPhone 13 Pro); surname unknown | folder |
| Washington / Benny Pictures, Vienna Ball / Benjamin Photos, Millstatt | Benjamin Orthner (Pixel 9 Pro XL / X100V) | folder |
| Washington / Found Online | unknown (web downloads; one is an Instagram screenshot) | — |
| Vienna Science Ball / Ball Website (Low Quality) | unknown official ball photographer ("FRPIC" prefix) | — |
| Alpbach | **© EFA / Luiza Puiu** (in every filename + EXIF) | filename |
| CIVA / esel.at | **© eSeL.at – Lorenz Seidler** | EXIF |
| CIVA / Pressematerial / Group Pictures | Clemens Wenger © **Alex(ander) Gotter**; Judith Schwarz © **Frank Schindelbeck**; Manu Mayr © **Ingo Pertramer** | filenames + EXIF |
| JKU Zirkus des Wissens | Johannes Kofler (iPhone 16 Pro) | folder |
| "Osaka" photos | Fujifilm X-S10/X100V, likely Benjamin Orthner (confirm) | EXIF |

---

## 2. Landing-page hero candidates (top 10, ranked)

All are dark and dramatic. Nos. 1–6 and 8 are landscape crops that survive a 21:9 banner.

| Description | Orient. & px | Credit | Path |
|---|---|---|---|
| 1. Haze-cloud projection hovering in the dark nave above the glowing experiment case; performer lit from below. The signature image | L 4000×2668 | Florian Voggeneder / Ars Electronica (vog.photo) | `C:\Users\benja\Downloads\The Sound of entanglement drive files\extracted\The Sound of Entanglement\2024 09 - BruQner\Photos Ars Electronica\bruqnerthe-sound-of-entanglement--clemens-wenger-at-enar-de-dios-rodrguez-es-martin-ringbauer-at-johannes-kofler-at-richard-kng-at-alexander-ploier-at-benjamin-orthner-atgh-philipp-haslinger-at_53972967048_o.jpg` |
| 2. Inverted light cone / "V" of haze descending onto the glowing case; stark black surround | L 2657×1772 | © Land OÖ / Andreas Krenn | `C:\Users\benja\Downloads\The Sound of entanglement drive files\extracted\The Sound of Entanglement\2024 09 - BruQner\Doku\BruQner (c) Land OÖ-Andreas Krenn\BruQner (c) Land OÖ Andreas Krenn (31).jpg` |
| 3. Huge white cloud projection sweeping diagonally over a silhouetted crowd | L 4000×2668 | Florian Voggeneder / Ars Electronica (vog.photo) | `C:\Users\benja\Downloads\The Sound of entanglement drive files\extracted\The Sound of Entanglement\2024 09 - BruQner\Photos Ars Electronica\bruqnerthe-sound-of-entanglement--clemens-wenger-at-enar-de-dios-rodrguez-es-martin-ringbauer-at-johannes-kofler-at-richard-kng-at-alexander-ploier-at-benjamin-orthner-atgh-philipp-haslinger-at_53971847342_o.jpg` |
| 4. Symmetric V-shaped light cone above the altar in the empty cathedral (visual test, 6K) | L 6191×4127 | likely Benjamin Orthner (Fujifilm X100V) – confirm | `C:\Users\benja\Downloads\The Sound of entanglement drive files\extracted\The Sound of Entanglement\2024 09 - BruQner\Photos Dom Visual Test July\LinzVisuals-7.jpg` |
| 5. Near-abstract purple/white light cone in haze, crucifix just visible. Crops well to a banner | L 2657×1772 | © Land OÖ / Andreas Krenn | `C:\Users\benja\Downloads\The Sound of entanglement drive files\extracted\The Sound of Entanglement\2024 09 - BruQner\Doku\BruQner (c) Land OÖ-Andreas Krenn\BruQner (c) Land OÖ Andreas Krenn (15).jpg` |
| 6. Bright torn-cloud projection above the audience, very high contrast | L 4000×2668 | Florian Voggeneder / Ars Electronica (vog.photo) | `C:\Users\benja\Downloads\The Sound of entanglement drive files\extracted\The Sound of Entanglement\2024 09 - BruQner\Photos Ars Electronica\bruqnerthe-sound-of-entanglement--clemens-wenger-at-enar-de-dios-rodrguez-es-martin-ringbauer-at-johannes-kofler-at-richard-kng-at-alexander-ploier-at-benjamin-orthner-atgh-philipp-haslinger-at_53973168965_o.jpg` |
| 7. 8 Rooms: white-line landscape on the giant screen above band and case, dark hall (8K) | L 8256×5504 | Kaveh Sardari (EXIF; shared via Ona Ambrozaite) | `C:\Users\benja\Downloads\The Sound of entanglement drive files\extracted\The Sound of Entanglement\2025 04 - Washington DC\Photos & Videos\Ona Ambrozaite\20250414_JHU_Science_2353.jpg` |
| 8. Glowing experiment case in the foreground, performer behind, cathedral dark | L 4000×2668 | Florian Voggeneder / Ars Electronica (vog.photo) | `C:\Users\benja\Downloads\The Sound of entanglement drive files\extracted\The Sound of Entanglement\2024 09 - BruQner\Photos Ars Electronica\bruqnerthe-sound-of-entanglement--clemens-wenger-at-enar-de-dios-rodrguez-es-martin-ringbauer-at-johannes-kofler-at-richard-kng-at-alexander-ploier-at-benjamin-orthner-atgh-philipp-haslinger-at_53973168985_o.jpg` |
| 9. Macro: violet pump laser hitting the crystal (entangled-photon source); abstract and very dark | L 3840×2160 | film still, weitblickfilm (Deniz & Florian Lindenberg) | `C:\Users\benja\Downloads\The Sound of entanglement drive files\extracted\The Sound of Entanglement\2024 09 - BruQner\Doku\BruQner Stills\BruQner_Stills_1.14.1.jpg` |
| 10. Starburst of light rays over the packed nave, seen from the gallery | L 4000×2667 | Tom Mesic / Ars Electronica | `C:\Users\benja\Downloads\The Sound of entanglement drive files\extracted\The Sound of Entanglement\2024 09 - BruQner\Photos Ars Electronica\bruqnerthe-sound-of-entanglement--clemens-wenger-at-enar-de-dios-rodrguez-es-martin-ringbauer-at-johannes-kofler-at-richard-kng-at-alexander-ploier-at-benjamin-orthner-atgh-philipp-haslinger-at_53973053449_o.jpg` |

Alternates:

| Description | Orient. & px | Credit | Path |
|---|---|---|---|
| Alt: overhead dark nave with a glowing double-lobe ("entangled") light shape over the crowd (film still) | L 3840×2160 | film still, weitblickfilm (Deniz & Florian Lindenberg) | `C:\Users\benja\Downloads\The Sound of entanglement drive files\extracted\The Sound of Entanglement\2024 09 - BruQner\Design and Media\Photos For New Austrian\BruQner Bilder_7.jpg` |
| Alt: experiment macro, red polariser mounts in a line on black | L 4000×2668 | Florian Voggeneder / Ars Electronica (vog.photo) | `C:\Users\benja\Downloads\The Sound of entanglement drive files\extracted\The Sound of Entanglement\2024 09 - BruQner\Photos Ars Electronica\bruqnerthe-sound-of-entanglement--clemens-wenger-at-enar-de-dios-rodrguez-es-martin-ringbauer-at-johannes-kofler-at-richard-kng-at-alexander-ploier-at-benjamin-orthner-atgh-philipp-haslinger-at_53973169020_o.jpg` |
| Alt (portrait): light cone fanning from the altar under stained-glass windows | P 3658×5790 | likely Benjamin Orthner (Fujifilm X100V) – confirm | `C:\Users\benja\Downloads\The Sound of entanglement drive files\extracted\The Sound of Entanglement\2024 09 - BruQner\Photos Dom Visual Test July\LinzVisuals-18.jpg` |
| Alt: low haze light sheet over silhouetted audience heads (2024 session, only 1879 px) | L 1879×1051 | likely Benjamin Orthner (Fujifilm) – confirm | `C:\Users\benja\Downloads\The Sound of entanglement drive files\extracted\The Sound of Entanglement\2025 05 - Osaka\Photos and Graphics\Photos\TSOE_osaka_photos-6.jpg` |
| Alt (only 1024 px): performer under the point-cloud projection, the Indeterminate Apparatus look | L 1024×683 | © eSeL.at – Lorenz Seidler | `C:\Users\benja\Downloads\The Sound of entanglement drive files\extracted\The Sound of Entanglement\2025 10 - CIVA Wien\Photos\esel.at\ESEL6709.webp` |
| Alt: purple and yellow laser fan above the altar | L 2657×1772 | © Land OÖ / Andreas Krenn | `C:\Users\benja\Downloads\The Sound of entanglement drive files\extracted\The Sound of Entanglement\2024 09 - BruQner\Doku\BruQner (c) Land OÖ-Andreas Krenn\BruQner (c) Land OÖ Andreas Krenn (28).jpg` |

---

## 3. Per-show galleries (ranked shortlist, cover first)

### 3.1 BruQner: Mariendom Linz / Ars Electronica opening, 4 Sep 2024
Piece: *BruQner* for two organs (organists Wolfgang Kreuzhuber, Gerhard Raab), haze-projected light cones and clouds.
Source folders: `2024 09 - BruQner\Photos Ars Electronica` (63), `…\Doku\BruQner (c) Land OÖ-Andreas Krenn` (33), `…\Fotos Aufführung` (3 phone shots, 1200 px).

| Description | Orient. & px | Credit | Path |
|---|---|---|---|
| COVER: cloud projection over the glowing case in the nave | L 4000×2668 | Florian Voggeneder / Ars Electronica (vog.photo) | `C:\Users\benja\Downloads\The Sound of entanglement drive files\extracted\The Sound of Entanglement\2024 09 - BruQner\Photos Ars Electronica\bruqnerthe-sound-of-entanglement--clemens-wenger-at-enar-de-dios-rodrguez-es-martin-ringbauer-at-johannes-kofler-at-richard-kng-at-alexander-ploier-at-benjamin-orthner-atgh-philipp-haslinger-at_53972967048_o.jpg` |
| Cloud projection over the silhouetted crowd | L 4000×2668 | Florian Voggeneder / Ars Electronica (vog.photo) | `C:\Users\benja\Downloads\The Sound of entanglement drive files\extracted\The Sound of Entanglement\2024 09 - BruQner\Photos Ars Electronica\bruqnerthe-sound-of-entanglement--clemens-wenger-at-enar-de-dios-rodrguez-es-martin-ringbauer-at-johannes-kofler-at-richard-kng-at-alexander-ploier-at-benjamin-orthner-atgh-philipp-haslinger-at_53971847342_o.jpg` |
| Inverted haze cone above the case | L 2657×1772 | © Land OÖ / Andreas Krenn | `C:\Users\benja\Downloads\The Sound of entanglement drive files\extracted\The Sound of Entanglement\2024 09 - BruQner\Doku\BruQner (c) Land OÖ-Andreas Krenn\BruQner (c) Land OÖ Andreas Krenn (31).jpg` |
| Torn-cloud projection, audience in silhouette | L 4000×2668 | Florian Voggeneder / Ars Electronica (vog.photo) | `C:\Users\benja\Downloads\The Sound of entanglement drive files\extracted\The Sound of Entanglement\2024 09 - BruQner\Photos Ars Electronica\bruqnerthe-sound-of-entanglement--clemens-wenger-at-enar-de-dios-rodrguez-es-martin-ringbauer-at-johannes-kofler-at-richard-kng-at-alexander-ploier-at-benjamin-orthner-atgh-philipp-haslinger-at_53973168965_o.jpg` |
| Purple light cone in haze, close | L 2657×1772 | © Land OÖ / Andreas Krenn | `C:\Users\benja\Downloads\The Sound of entanglement drive files\extracted\The Sound of Entanglement\2024 09 - BruQner\Doku\BruQner (c) Land OÖ-Andreas Krenn\BruQner (c) Land OÖ Andreas Krenn (15).jpg` |
| Starburst rays over the nave from the gallery | L 4000×2667 | Tom Mesic / Ars Electronica | `C:\Users\benja\Downloads\The Sound of entanglement drive files\extracted\The Sound of Entanglement\2024 09 - BruQner\Photos Ars Electronica\bruqnerthe-sound-of-entanglement--clemens-wenger-at-enar-de-dios-rodrguez-es-martin-ringbauer-at-johannes-kofler-at-richard-kng-at-alexander-ploier-at-benjamin-orthner-atgh-philipp-haslinger-at_53973053449_o.jpg` |
| Performer behind the glowing experiment case | L 4000×2668 | Florian Voggeneder / Ars Electronica (vog.photo) | `C:\Users\benja\Downloads\The Sound of entanglement drive files\extracted\The Sound of Entanglement\2024 09 - BruQner\Photos Ars Electronica\bruqnerthe-sound-of-entanglement--clemens-wenger-at-enar-de-dios-rodrguez-es-martin-ringbauer-at-johannes-kofler-at-richard-kng-at-alexander-ploier-at-benjamin-orthner-atgh-philipp-haslinger-at_53973168985_o.jpg` |
| Laser fan (purple/yellow) over the altar crucifix | L 2657×1772 | © Land OÖ / Andreas Krenn | `C:\Users\benja\Downloads\The Sound of entanglement drive files\extracted\The Sound of Entanglement\2024 09 - BruQner\Doku\BruQner (c) Land OÖ-Andreas Krenn\BruQner (c) Land OÖ Andreas Krenn (28).jpg` |
| Cloud floating in the dark nave | L 4000×2667 | Tom Mesic / Ars Electronica | `C:\Users\benja\Downloads\The Sound of entanglement drive files\extracted\The Sound of Entanglement\2024 09 - BruQner\Photos Ars Electronica\bruqnerthe-sound-of-entanglement--clemens-wenger-at-enar-de-dios-rodrguez-es-martin-ringbauer-at-johannes-kofler-at-richard-kng-at-alexander-ploier-at-benjamin-orthner-atgh-philipp-haslinger-at_53972967143_o.jpg` |
| Top-down: dark crowd, glowing case, beam | L 4000×2667 | Tom Mesic / Ars Electronica | `C:\Users\benja\Downloads\The Sound of entanglement drive files\extracted\The Sound of Entanglement\2024 09 - BruQner\Photos Ars Electronica\bruqnerthe-sound-of-entanglement--clemens-wenger-at-enar-de-dios-rodrguez-es-martin-ringbauer-at-johannes-kofler-at-richard-kng-at-alexander-ploier-at-benjamin-orthner-atgh-philipp-haslinger-at_53971847492_o.jpg` |
| Top-down (portrait): cloud projection seen from the vault | P 2667×4000 | Tom Mesic / Ars Electronica | `C:\Users\benja\Downloads\The Sound of entanglement drive files\extracted\The Sound of Entanglement\2024 09 - BruQner\Photos Ars Electronica\bruqnerthe-sound-of-entanglement--clemens-wenger-at-enar-de-dios-rodrguez-es-martin-ringbauer-at-johannes-kofler-at-richard-kng-at-alexander-ploier-at-benjamin-orthner-atgh-philipp-haslinger-at_53972730451_o.jpg` |
| Organist silhouetted in the lit organ console | L 4000×2668 | Florian Voggeneder / Ars Electronica (vog.photo) | `C:\Users\benja\Downloads\The Sound of entanglement drive files\extracted\The Sound of Entanglement\2024 09 - BruQner\Photos Ars Electronica\bruqnerthe-sound-of-entanglement--clemens-wenger-at-enar-de-dios-rodrguez-es-martin-ringbauer-at-johannes-kofler-at-richard-kng-at-alexander-ploier-at-benjamin-orthner-atgh-philipp-haslinger-at_53973168995_o.jpg` |
| Case with a light shaft cutting through the dark | L 4000×2668 | Florian Voggeneder / Ars Electronica (vog.photo) | `C:\Users\benja\Downloads\The Sound of entanglement drive files\extracted\The Sound of Entanglement\2024 09 - BruQner\Photos Ars Electronica\bruqnerthe-sound-of-entanglement-7-clemens-wenger-at-enar-de-dios-rodrguez-es-martin-ringbauer-at-johannes-kofler-at-richard-kng-at-alexander-ploier-at-benjamin-orthner-atgh-philipp-haslinger-at_53972730271_o.jpg` |
| Twin haze cones, crucifix centre | L 2657×1772 | © Land OÖ / Andreas Krenn | `C:\Users\benja\Downloads\The Sound of entanglement drive files\extracted\The Sound of Entanglement\2024 09 - BruQner\Doku\BruQner (c) Land OÖ-Andreas Krenn\BruQner (c) Land OÖ Andreas Krenn (25).jpg` |
| Experiment close-up: red polarisation optics | L 4000×2668 | Florian Voggeneder / Ars Electronica (vog.photo) | `C:\Users\benja\Downloads\The Sound of entanglement drive files\extracted\The Sound of Entanglement\2024 09 - BruQner\Photos Ars Electronica\bruqnerthe-sound-of-entanglement--clemens-wenger-at-enar-de-dios-rodrguez-es-martin-ringbauer-at-johannes-kofler-at-richard-kng-at-alexander-ploier-at-benjamin-orthner-atgh-philipp-haslinger-at_53973169020_o.jpg` |
| Fisheye overhead of the full cathedral; warm and crowded (context shot) | L 4000×2667 | Tom Mesic / Ars Electronica | `C:\Users\benja\Downloads\The Sound of entanglement drive files\extracted\The Sound of Entanglement\2024 09 - BruQner\Photos Ars Electronica\bruqnerthe-sound-of-entanglement--clemens-wenger-at-enar-de-dios-rodrguez-es-martin-ringbauer-at-johannes-kofler-at-richard-kng-at-alexander-ploier-at-benjamin-orthner-atgh-philipp-haslinger-at_53972967203_o.jpg` |
| Mariendom exterior at blue hour in purple light (Ars Electronica opening context) | L 4000×2667 | Tom Mesic / Ars Electronica | `C:\Users\benja\Downloads\The Sound of entanglement drive files\extracted\The Sound of Entanglement\2024 09 - BruQner\Photos Ars Electronica\impression-ars-electronica-opening-2024_53973049295_o.jpg` |

Notes: skip the Krenn slide shots (#2, #10–12, #29–33: lecture slides on screen) and the bright organ-console shots unless you need people. The two Tom Mesic "impression-ars-electronica-opening" files (#61, #63) are general festival shots. `Fotos Aufführung\BruQnerPerformance02.jpeg` (purple cloud) and `BruQner_Performance01.jpeg` (blue twin cones) are nice but only 1200×1600 phone shots.

#### BruQner: making-of / process sub-gallery (lab, visual tests, documentary)
Folders: `Photos Dom Visual Test July` (21, 4–6K, 2024-07-04), `Doku\BruQner Stills` (51, 4K), `Photos Innsbruck Lab 10.05.2023` (39, 5.6K), `Photos Dom November 2023` (13 HEIC, site visit), `Photos and Videos_ 2024 07 05` (18 HEIC + 5 MOV, projection test).

| Description | Orient. & px | Credit | Path |
|---|---|---|---|
| Visual test July 2024: V-shaped cone over the altar in the empty cathedral | L 6191×4127 | likely Benjamin Orthner (Fujifilm X100V) – confirm | `C:\Users\benja\Downloads\The Sound of entanglement drive files\extracted\The Sound of Entanglement\2024 09 - BruQner\Photos Dom Visual Test July\LinzVisuals-7.jpg` |
| Visual test: cone from the altar under the windows (portrait) | P 3658×5790 | likely Benjamin Orthner (Fujifilm X100V) – confirm | `C:\Users\benja\Downloads\The Sound of entanglement drive files\extracted\The Sound of Entanglement\2024 09 - BruQner\Photos Dom Visual Test July\LinzVisuals-18.jpg` |
| Visual test: beam cutting across the chancel | L 6233×4155 | likely Benjamin Orthner (Fujifilm X100V) – confirm | `C:\Users\benja\Downloads\The Sound of entanglement drive files\extracted\The Sound of Entanglement\2024 09 - BruQner\Photos Dom Visual Test July\LinzVisuals-13.jpg` |
| Visual test: side beams across the nave | L 6240×4160 | likely Benjamin Orthner (Fujifilm X100V) – confirm | `C:\Users\benja\Downloads\The Sound of entanglement drive files\extracted\The Sound of Entanglement\2024 09 - BruQner\Photos Dom Visual Test July\LinzVisuals-15.jpg` |
| Film still: haze light test in the dark cathedral | L 3840×2160 | film still, weitblickfilm (Deniz & Florian Lindenberg) | `C:\Users\benja\Downloads\The Sound of entanglement drive files\extracted\The Sound of Entanglement\2024 09 - BruQner\Doku\BruQner Stills\BruQner_Stills_1.24.1.jpg` |
| Film still: cloud projection above the pews | L 3840×2160 | film still, weitblickfilm (Deniz & Florian Lindenberg) | `C:\Users\benja\Downloads\The Sound of entanglement drive files\extracted\The Sound of Entanglement\2024 09 - BruQner\Doku\BruQner Stills\BruQner_Stills_1.27.1.jpg` |
| Film still: optics in red/black bokeh | L 3840×2160 | film still, weitblickfilm (Deniz & Florian Lindenberg) | `C:\Users\benja\Downloads\The Sound of entanglement drive files\extracted\The Sound of Entanglement\2024 09 - BruQner\Doku\BruQner Stills\BruQner_Stills_1.9.1.jpg` |
| Film still: organ console seen from above | L 3840×2160 | film still, weitblickfilm (Deniz & Florian Lindenberg) | `C:\Users\benja\Downloads\The Sound of entanglement drive files\extracted\The Sound of Entanglement\2024 09 - BruQner\Doku\BruQner Stills\BruQner_Stills_1.33.1.jpg` |
| Innsbruck lab, May 2023: pink/red lit optical table | L 5616×3744 | likely M. Ringbauer / P. Haslinger (Canon 5D II) – confirm | `C:\Users\benja\Downloads\The Sound of entanglement drive files\extracted\The Sound of Entanglement\2024 09 - BruQner\Photos Innsbruck Lab 10.05.2023\IMG_3820 copy.jpg` |
| Innsbruck lab: optics table with lasers | L 5616×3744 | likely M. Ringbauer / P. Haslinger (Canon 5D II) – confirm | `C:\Users\benja\Downloads\The Sound of entanglement drive files\extracted\The Sound of Entanglement\2024 09 - BruQner\Photos Innsbruck Lab 10.05.2023\IMG_3870 copy.jpg` |
| Innsbruck lab: ion-trap chip in its carrier, dark | L 3894×2596 | likely M. Ringbauer / P. Haslinger (Canon 5D II) – confirm | `C:\Users\benja\Downloads\The Sound of entanglement drive files\extracted\The Sound of Entanglement\2024 09 - BruQner\Photos Innsbruck Lab 10.05.2023\IMG_3802 copy.jpg` |
| Team snapshot, July 2024: looking up into the vault with a projected ring | P 3024×4032 | team snapshot (iPhone) | `C:\Users\benja\Downloads\The Sound of entanglement drive files\extracted\The Sound of Entanglement\2024 09 - BruQner\Photos and Videos_ 2024 07 05\IMG_0397.HEIC` |

### 3.2 Vienna Science Ball (Ball der Wissenschaften), Vienna City Hall, 25 Jan 2025
Band with case and white-line visuals. Low-res official photos (1200 px) plus Benjamin's Pixel shots (4080 px, phone quality).

| Description | Orient. & px | Credit | Path |
|---|---|---|---|
| COVER: glowing experiment case at an angle, guests in black tie (only 1200 px) | L 1200×800 | Ball der Wissenschaften official photo – photographer unknown | `C:\Users\benja\Downloads\The Sound of entanglement drive files\extracted\The Sound of Entanglement\2025 01 - Vienna Science Ball\Photos\Ball Website (Low Quality)\08_FRPIC_250125_BdW_234.jpg` |
| Case in the foreground, guitarist behind | L 1200×800 | Ball der Wissenschaften official photo – photographer unknown | `C:\Users\benja\Downloads\The Sound of entanglement drive files\extracted\The Sound of Entanglement\2025 01 - Vienna Science Ball\Photos\Ball Website (Low Quality)\08_FRPIC_250125_BdW_021.jpg` |
| Case edge-lit, orange line visuals behind | L 1200×800 | Ball der Wissenschaften official photo – photographer unknown | `C:\Users\benja\Downloads\The Sound of entanglement drive files\extracted\The Sound of Entanglement\2025 01 - Vienna Science Ball\Photos\Ball Website (Low Quality)\08_FRPIC_250125_BdW_229.jpg` |
| Stage: band, case, white-line visual on screen | L 1200×800 | Ball der Wissenschaften official photo – photographer unknown | `C:\Users\benja\Downloads\The Sound of entanglement drive files\extracted\The Sound of Entanglement\2025 01 - Vienna Science Ball\Photos\Ball Website (Low Quality)\08_FRPIC_250125_BdW_030.jpg` |
| Guests gathered around the lit case | L 1200×800 | Ball der Wissenschaften official photo – photographer unknown | `C:\Users\benja\Downloads\The Sound of entanglement drive files\extracted\The Sound of Entanglement\2025 01 - Vienna Science Ball\Photos\Ball Website (Low Quality)\08_FRPIC_250125_BdW_262.jpg` |
| Guitarist and drummer beside the case | L 1200×800 | Ball der Wissenschaften official photo – photographer unknown | `C:\Users\benja\Downloads\The Sound of entanglement drive files\extracted\The Sound of Entanglement\2025 01 - Vienna Science Ball\Photos\Ball Website (Low Quality)\08_FRPIC_250125_BdW_032.jpg` |
| Drummer close-up | L 1200×800 | Ball der Wissenschaften official photo – photographer unknown | `C:\Users\benja\Downloads\The Sound of entanglement drive files\extracted\The Sound of Entanglement\2025 01 - Vienna Science Ball\Photos\Ball Website (Low Quality)\08_FRPIC_250125_BdW_035.jpg` |
| Screen with a spiky white-line landscape over the band (Pixel) | L 4080×3072 | Benjamin Orthner | `C:\Users\benja\Downloads\The Sound of entanglement drive files\extracted\The Sound of Entanglement\2025 01 - Vienna Science Ball\Photos\Benjamin Photos\PXL_20250125_210939237.jpg` |
| Band and case under the screen | L 4080×3072 | Benjamin Orthner | `C:\Users\benja\Downloads\The Sound of entanglement drive files\extracted\The Sound of Entanglement\2025 01 - Vienna Science Ball\Photos\Benjamin Photos\PXL_20250125_210502378.jpg` |
| Ballroom in pink/purple light, before the ball | L 4080×3072 | Benjamin Orthner | `C:\Users\benja\Downloads\The Sound of entanglement drive files\extracted\The Sound of Entanglement\2025 01 - Vienna Science Ball\Photos\Benjamin Photos\PXL_20250125_173812750.jpg` |
| Vienna City Hall festival hall | L 4080×3072 | Benjamin Orthner | `C:\Users\benja\Downloads\The Sound of entanglement drive files\extracted\The Sound of Entanglement\2025 01 - Vienna Science Ball\Photos\Benjamin Photos\PXL_20250125_190713271.jpg` |

### 3.3 Washington DC: JHU Science Diplomacy Summit, Bloomberg Center, 14 Apr 2025
*8 Rooms* with synth + electric bass (Clemens Wenger, Manu Mayr), white-line landscape visuals. 11 pro shots (8K), 28 + 76 phone photos, 20 personal/sightseeing shots (Benny, not for the gallery), plus rehearsal at the Austrian Embassy (JK videos).

| Description | Orient. & px | Credit | Path |
|---|---|---|---|
| COVER: white-line landscape on the screen above band and case | L 8256×5504 | Kaveh Sardari (EXIF; shared via Ona Ambrozaite) | `C:\Users\benja\Downloads\The Sound of entanglement drive files\extracted\The Sound of Entanglement\2025 04 - Washington DC\Photos & Videos\Ona Ambrozaite\20250414_JHU_Science_2353.jpg` |
| Wide shot: line visuals over the stage and dark audience | L 8256×5504 | Kaveh Sardari (EXIF; shared via Ona Ambrozaite) | `C:\Users\benja\Downloads\The Sound of entanglement drive files\extracted\The Sound of Entanglement\2025 04 - Washington DC\Photos & Videos\Ona Ambrozaite\20250414_JHU_Science_2455.jpg` |
| Stage from the back of the hall, line visuals | L 8256×5504 | Kaveh Sardari (EXIF; shared via Ona Ambrozaite) | `C:\Users\benja\Downloads\The Sound of entanglement drive files\extracted\The Sound of Entanglement\2025 04 - Washington DC\Photos & Videos\Ona Ambrozaite\20250414_JHU_Science_2345.jpg` |
| Diagonal line visuals, band on stage | L 8256×5504 | Kaveh Sardari (EXIF; shared via Ona Ambrozaite) | `C:\Users\benja\Downloads\The Sound of entanglement drive files\extracted\The Sound of Entanglement\2025 04 - Washington DC\Photos & Videos\Ona Ambrozaite\20250414_JHU_Science_2363.jpg` |
| Clemens Wenger at the keys behind the glowing experiment case | L 8256×5504 | Kaveh Sardari (EXIF; shared via Ona Ambrozaite) | `C:\Users\benja\Downloads\The Sound of entanglement drive files\extracted\The Sound of Entanglement\2025 04 - Washington DC\Photos & Videos\Ona Ambrozaite\20250414_JHU_Science_2358.jpg` |
| Bassist (Manu Mayr) against the Bloomberg Center backdrop | L 8256×5504 | Kaveh Sardari (EXIF; shared via Ona Ambrozaite) | `C:\Users\benja\Downloads\The Sound of entanglement drive files\extracted\The Sound of Entanglement\2025 04 - Washington DC\Photos & Videos\Ona Ambrozaite\20250414_JHU_Science_2387.jpg` |
| Benjamin Orthner operating the experiment | L 8256×5504 | Kaveh Sardari (EXIF; shared via Ona Ambrozaite) | `C:\Users\benja\Downloads\The Sound of entanglement drive files\extracted\The Sound of Entanglement\2025 04 - Washington DC\Photos & Videos\Ona Ambrozaite\20250414_JHU_Science_2389.jpg` |
| Band and experiment on stage | L 8256×5504 | Kaveh Sardari (EXIF; shared via Ona Ambrozaite) | `C:\Users\benja\Downloads\The Sound of entanglement drive files\extracted\The Sound of Entanglement\2025 04 - Washington DC\Photos & Videos\Ona Ambrozaite\20250414_JHU_Science_2378.jpg` |
| Hall panorama: visuals and packed audience (iPhone) | L 5712×4284 | Johannes Kofler (iPhone) | `C:\Users\benja\Downloads\The Sound of entanglement drive files\extracted\The Sound of Entanglement\2025 04 - Washington DC\Photos & Videos\JK‘s Pictures and Videos\IMG_2308.HEIC` |
| Stage with a single white-line visual in the dark | L 5712×4284 | Johannes Kofler (iPhone) | `C:\Users\benja\Downloads\The Sound of entanglement drive files\extracted\The Sound of Entanglement\2025 04 - Washington DC\Photos & Videos\JK‘s Pictures and Videos\IMG_2318.HEIC` |
| Experiment case glowing in the blue-lit green room | L 5712×4284 | Johannes Kofler (iPhone) | `C:\Users\benja\Downloads\The Sound of entanglement drive files\extracted\The Sound of Entanglement\2025 04 - Washington DC\Photos & Videos\JK‘s Pictures and Videos\IMG_2277.HEIC` |
| Line visuals above the lectern and stage | L 4032×3024 | Verena (iPhone) – surname? | `C:\Users\benja\Downloads\The Sound of entanglement drive files\extracted\The Sound of Entanglement\2025 04 - Washington DC\Photos & Videos\Verena Pictures and Videos\IMG_0727 2.HEIC` |
| Lecture part, slides on screen | L 8256×5504 | Kaveh Sardari (EXIF; shared via Ona Ambrozaite) | `C:\Users\benja\Downloads\The Sound of entanglement drive files\extracted\The Sound of Entanglement\2025 04 - Washington DC\Photos & Videos\Ona Ambrozaite\20250414_JHU_Science_2339.jpg` |
| Team group photo on the rooftop, Capitol behind | L 5712×4284 | Johannes Kofler (iPhone) | `C:\Users\benja\Downloads\The Sound of entanglement drive files\extracted\The Sound of Entanglement\2025 04 - Washington DC\Photos & Videos\JK‘s Pictures and Videos\IMG_2339.HEIC` |

### 3.4 "Osaka" folder (really 2024 pre-premiere sessions; see finding 5)

| Description | Orient. & px | Credit | Path |
|---|---|---|---|
| Low haze light sheet over audience silhouettes (13 Jun 2024) | L 1879×1051 | likely Benjamin Orthner (Fujifilm) – confirm | `C:\Users\benja\Downloads\The Sound of entanglement drive files\extracted\The Sound of Entanglement\2025 05 - Osaka\Photos and Graphics\Photos\TSOE_osaka_photos-6.jpg` |
| Blue haze cloud over audience silhouettes (13 Jun 2024) | L 1770×1080 | likely Benjamin Orthner (Fujifilm) – confirm | `C:\Users\benja\Downloads\The Sound of entanglement drive files\extracted\The Sound of Entanglement\2025 05 - Osaka\Photos and Graphics\Photos\TSOE_osaka_photos-5.jpg` |
| Blue light cone in a rehearsal hall (portrait, 21 May 2024) | P 4160×6240 | likely Benjamin Orthner (Fujifilm) – confirm | `C:\Users\benja\Downloads\The Sound of entanglement drive files\extracted\The Sound of Entanglement\2025 05 - Osaka\Photos and Graphics\Photos\TSOE_osaka_photos-4.jpg` |
| Optics bench with red mounts, piano behind | L 6134×4089 | likely Benjamin Orthner (Fujifilm) – confirm | `C:\Users\benja\Downloads\The Sound of entanglement drive files\extracted\The Sound of Entanglement\2025 05 - Osaka\Photos and Graphics\Photos\TSOE_osaka_photos-2.jpg` |
| Macro of a red polariser mount (portrait) | P 3875×6062 | likely Benjamin Orthner (Fujifilm) – confirm | `C:\Users\benja\Downloads\The Sound of entanglement drive files\extracted\The Sound of Entanglement\2025 05 - Osaka\Photos and Graphics\Photos\TSOE_osaka_photos-3.jpg` |
| Pianist with the optics bench | L 6240×4160 | likely Benjamin Orthner (Fujifilm) – confirm | `C:\Users\benja\Downloads\The Sound of entanglement drive files\extracted\The Sound of Entanglement\2025 05 - Osaka\Photos and Graphics\Photos\TSOE_osaka_photos-1.jpg` |

Also in the folder: `Setup Title Image\Setup Title v1–v5.png` + `BruQner Thumbnail.psd`, 1920×1080 title-card drafts ("THE SOUND OF ENTANGLEMENT" in a serif, over the optics bench).

### 3.5 Millstatt: TechForum, 3 Jun 2025 (setup photos only)

| Description | Orient. & px | Credit | Path |
|---|---|---|---|
| COVER: Clemens at the keys, visuals on the screen in front of the baroque altar | L 4080×3072 | Benjamin Orthner | `C:\Users\benja\Downloads\The Sound of entanglement drive files\extracted\The Sound of Entanglement\2025 06 - Millstatt\Photos\Benjamin Photos\PXL_20250603_145548651.jpg` |
| Setup: keys, screen, gilded altar | L 4080×3072 | Benjamin Orthner | `C:\Users\benja\Downloads\The Sound of entanglement drive files\extracted\The Sound of Entanglement\2025 06 - Millstatt\Photos\Benjamin Photos\PXL_20250603_145550360.jpg` |
| Setup: speakers, screen, altar | L 4080×3072 | Benjamin Orthner | `C:\Users\benja\Downloads\The Sound of entanglement drive files\extracted\The Sound of Entanglement\2025 06 - Millstatt\Photos\Benjamin Photos\PXL_20250603_145554474.jpg` |
| Altar with the projection screen (portrait) | P 3072×4080 | Benjamin Orthner | `C:\Users\benja\Downloads\The Sound of entanglement drive files\extracted\The Sound of Entanglement\2025 06 - Millstatt\Photos\Benjamin Photos\PXL_20250603_141856734.jpg` |
| Nave view toward the lit screen | P 3072×4080 | Benjamin Orthner | `C:\Users\benja\Downloads\The Sound of entanglement drive files\extracted\The Sound of Entanglement\2025 06 - Millstatt\Photos\Benjamin Photos\PXL_20250603_171507090.jpg` |
| Laptop with the random-walk "rooms" UI | P 3072×4080 | Benjamin Orthner | `C:\Users\benja\Downloads\The Sound of entanglement drive files\extracted\The Sound of Entanglement\2025 06 - Millstatt\Photos\Benjamin Photos\PXL_20250603_150123055.jpg` |
| Laptop and altar | L 4080×3072 | Benjamin Orthner | `C:\Users\benja\Downloads\The Sound of entanglement drive files\extracted\The Sound of Entanglement\2025 06 - Millstatt\Photos\Benjamin Photos\PXL_20250603_120231710.jpg` |
| Historic organ positive in the church | P 3072×4080 | Benjamin Orthner | `C:\Users\benja\Downloads\The Sound of entanglement drive files\extracted\The Sound of Entanglement\2025 06 - Millstatt\Photos\Benjamin Photos\PXL_20250603_110147249.jpg` |

### 3.6 European Forum Alpbach: Herz-Kremenak-Saal, 26 Aug 2025
25 photos, 2048×1365 "lo_res" (ask EFA for full-res if needed). © EFA / Luiza Puiu. The show part is on #1–#5; the rest is the post-show experiment demo with the audience.

| Description | Orient. & px | Credit | Path |
|---|---|---|---|
| COVER: white-line visuals across the ceiling above band and case, purple stage | L 2048×1365 | © EFA / Luiza Puiu | `C:\Users\benja\Downloads\The Sound of entanglement drive files\extracted\The Sound of Entanglement\2025 08 - Alpbach\Bilder - Sound of Entanglement EFA CCA – Herz-Kremenak-Saal\250826_200111_efa25_Happening-Sound of Entanglement-EFA-CCA – Herz-Kremenak-Saal_lo_res_(c)_EFA_Luiza_Puiu.jpg` |
| Spiky line landscape above the band | L 2048×1365 | © EFA / Luiza Puiu | `C:\Users\benja\Downloads\The Sound of entanglement drive files\extracted\The Sound of Entanglement\2025 08 - Alpbach\Bilder - Sound of Entanglement EFA CCA – Herz-Kremenak-Saal\250826_200513_efa25_Happening-Sound of Entanglement-EFA-CCA – Herz-Kremenak-Saal_lo_res_(c)_EFA_Luiza_Puiu.jpg` |
| Wide stage with line visuals | L 2048×1365 | © EFA / Luiza Puiu | `C:\Users\benja\Downloads\The Sound of entanglement drive files\extracted\The Sound of Entanglement\2025 08 - Alpbach\Bilder - Sound of Entanglement EFA CCA – Herz-Kremenak-Saal\250826_195509_efa25_Happening-Sound of Entanglement-EFA-CCA – Herz-Kremenak-Saal_lo_res_(c)_EFA_Luiza_Puiu.jpg` |
| Drummer in purple light | L 2048×1365 | © EFA / Luiza Puiu | `C:\Users\benja\Downloads\The Sound of entanglement drive files\extracted\The Sound of Entanglement\2025 08 - Alpbach\Bilder - Sound of Entanglement EFA CCA – Herz-Kremenak-Saal\250826_195710_efa25_Happening-Sound of Entanglement-EFA-CCA – Herz-Kremenak-Saal_lo_res_(c)_EFA_Luiza_Puiu.jpg` |
| Keyboardist in purple light | L 2048×1365 | © EFA / Luiza Puiu | `C:\Users\benja\Downloads\The Sound of entanglement drive files\extracted\The Sound of Entanglement\2025 08 - Alpbach\Bilder - Sound of Entanglement EFA CCA – Herz-Kremenak-Saal\250826_195935_efa25_Happening-Sound of Entanglement-EFA-CCA – Herz-Kremenak-Saal_lo_res_(c)_EFA_Luiza_Puiu.jpg` |
| Experiment close-up in its flight case | L 2048×1365 | © EFA / Luiza Puiu | `C:\Users\benja\Downloads\The Sound of entanglement drive files\extracted\The Sound of Entanglement\2025 08 - Alpbach\Bilder - Sound of Entanglement EFA CCA – Herz-Kremenak-Saal\250826_201246_efa25_Happening-Sound of Entanglement-EFA-CCA – Herz-Kremenak-Saal_lo_res_(c)_EFA_Luiza_Puiu.jpg` |
| Audience peering into the experiment | L 2048×1365 | © EFA / Luiza Puiu | `C:\Users\benja\Downloads\The Sound of entanglement drive files\extracted\The Sound of Entanglement\2025 08 - Alpbach\Bilder - Sound of Entanglement EFA CCA – Herz-Kremenak-Saal\250826_201313_efa25_Happening-Sound of Entanglement-EFA-CCA – Herz-Kremenak-Saal_lo_res_(c)_EFA_Luiza_Puiu.jpg` |
| Benjamin opening the case for the audience | L 2048×1365 | © EFA / Luiza Puiu | `C:\Users\benja\Downloads\The Sound of entanglement drive files\extracted\The Sound of Entanglement\2025 08 - Alpbach\Bilder - Sound of Entanglement EFA CCA – Herz-Kremenak-Saal\250826_201036_efa25_Happening-Sound of Entanglement-EFA-CCA – Herz-Kremenak-Saal_lo_res_(c)_EFA_Luiza_Puiu.jpg` |
| Explaining the setup in front of the "Facing Change" backdrop | L 2048×1365 | © EFA / Luiza Puiu | `C:\Users\benja\Downloads\The Sound of entanglement drive files\extracted\The Sound of Entanglement\2025 08 - Alpbach\Bilder - Sound of Entanglement EFA CCA – Herz-Kremenak-Saal\250826_201632_efa25_Happening-Sound of Entanglement-EFA-CCA – Herz-Kremenak-Saal_lo_res_(c)_EFA_Luiza_Puiu.jpg` |
| Team on stage in front of the portrait slide | L 2048×1365 | © EFA / Luiza Puiu | `C:\Users\benja\Downloads\The Sound of entanglement drive files\extracted\The Sound of Entanglement\2025 08 - Alpbach\Bilder - Sound of Entanglement EFA CCA – Herz-Kremenak-Saal\250826_200928_efa25_Happening-Sound of Entanglement-EFA-CCA – Herz-Kremenak-Saal_lo_res_(c)_EFA_Luiza_Puiu.jpg` |

### 3.7 CIVA Festival Wien, 2–3 Oct 2025 (point-cloud visuals; *Indeterminate Apparatus*?)
49 esel.at webp. ESEL6055–6534 are 2000 px (arrival, lecture); ESEL6571–6989 (**the performance**) are **1024 px only**.

| Description | Orient. & px | Credit | Path |
|---|---|---|---|
| COVER: performer at a Novation keyboard, point-cloud projection behind (1024 px) | L 1024×683 | © eSeL.at – Lorenz Seidler | `C:\Users\benja\Downloads\The Sound of entanglement drive files\extracted\The Sound of Entanglement\2025 10 - CIVA Wien\Photos\esel.at\ESEL6709.webp` |
| Glowing case, band and point-cloud projection (1024 px) | L 1024×683 | © eSeL.at – Lorenz Seidler | `C:\Users\benja\Downloads\The Sound of entanglement drive files\extracted\The Sound of Entanglement\2025 10 - CIVA Wien\Photos\esel.at\ESEL6704.webp` |
| Point-cloud projection over the band (1024 px) | L 1024×683 | © eSeL.at – Lorenz Seidler | `C:\Users\benja\Downloads\The Sound of entanglement drive files\extracted\The Sound of Entanglement\2025 10 - CIVA Wien\Photos\esel.at\ESEL6693.webp` |
| Case in the foreground, performer silhouetted against a light stripe (1024 px) | L 1024×683 | © eSeL.at – Lorenz Seidler | `C:\Users\benja\Downloads\The Sound of entanglement drive files\extracted\The Sound of Entanglement\2025 10 - CIVA Wien\Photos\esel.at\ESEL6585.webp` |
| White curve projection, band in the dark (1024 px) | L 1024×683 | © eSeL.at – Lorenz Seidler | `C:\Users\benja\Downloads\The Sound of entanglement drive files\extracted\The Sound of Entanglement\2025 10 - CIVA Wien\Photos\esel.at\ESEL6571.webp` |
| Pixel-sort projection with guitarist (1024 px) | L 1024×683 | © eSeL.at – Lorenz Seidler | `C:\Users\benja\Downloads\The Sound of entanglement drive files\extracted\The Sound of Entanglement\2025 10 - CIVA Wien\Photos\esel.at\ESEL6797.webp` |
| Portrait: performer under a white light stroke (1024 px) | P 683×1024 | © eSeL.at – Lorenz Seidler | `C:\Users\benja\Downloads\The Sound of entanglement drive files\extracted\The Sound of Entanglement\2025 10 - CIVA Wien\Photos\esel.at\ESEL6677.webp` |
| Portrait: guitarist in hard light (1024 px) | P 683×1024 | © eSeL.at – Lorenz Seidler | `C:\Users\benja\Downloads\The Sound of entanglement drive files\extracted\The Sound of Entanglement\2025 10 - CIVA Wien\Photos\esel.at\ESEL6757.webp` |
| Case glowing beside the band (1024 px) | L 1024×683 | © eSeL.at – Lorenz Seidler | `C:\Users\benja\Downloads\The Sound of entanglement drive files\extracted\The Sound of Entanglement\2025 10 - CIVA Wien\Photos\esel.at\ESEL6820.webp` |
| Glowing case against warm wood-panel walls (2000 px) | L 2000×1334 | © eSeL.at – Lorenz Seidler | `C:\Users\benja\Downloads\The Sound of entanglement drive files\extracted\The Sound of Entanglement\2025 10 - CIVA Wien\Photos\esel.at\ESEL6372.webp` |
| Backlight burst over the audience and control desk (2000 px) | L 2000×1334 | © eSeL.at – Lorenz Seidler | `C:\Users\benja\Downloads\The Sound of entanglement drive files\extracted\The Sound of Entanglement\2025 10 - CIVA Wien\Photos\esel.at\ESEL6414.webp` |
| Hall with the portrait slide, lecture part (2000 px) | L 2000×1334 | © eSeL.at – Lorenz Seidler | `C:\Users\benja\Downloads\The Sound of entanglement drive files\extracted\The Sound of Entanglement\2025 10 - CIVA Wien\Photos\esel.at\ESEL6209.webp` |
| Top-down: the experiment in its lit flight case (1024 px) | L 1024×683 | © eSeL.at – Lorenz Seidler | `C:\Users\benja\Downloads\The Sound of entanglement drive files\extracted\The Sound of Entanglement\2025 10 - CIVA Wien\Photos\esel.at\ESEL6989.webp` |
| Team bows on stage (1024 px) | L 1024×683 | © eSeL.at – Lorenz Seidler | `C:\Users\benja\Downloads\The Sound of entanglement drive files\extracted\The Sound of Entanglement\2025 10 - CIVA Wien\Photos\esel.at\ESEL6849.webp` |

### 3.8 JKU "Zirkus des Wissens", Linz, 19 Nov 2025
22 HEIC + 13 MOV, all Johannes Kofler's iPhone. The **videos are better than the photos** for the point-cloud visuals: IMG_6509 / IMG_6513 (V84/V86) show the full projected point-cloud zig-zag. A 1080p still grabbed from them would beat any photo here.

| Description | Orient. & px | Credit | Path |
|---|---|---|---|
| COVER: audience silhouettes, point-cloud projection, stage (iPhone) | L 4032×3024 | Johannes Kofler (iPhone) | `C:\Users\benja\Downloads\The Sound of entanglement drive files\extracted\The Sound of Entanglement\2025 11 - Zirkus des Wissens (JKU)\JK Pictures & Videos\IMG_6514.HEIC` |
| "Rain" visual on the screen above the band | L 4032×3024 | Johannes Kofler (iPhone) | `C:\Users\benja\Downloads\The Sound of entanglement drive files\extracted\The Sound of Entanglement\2025 11 - Zirkus des Wissens (JKU)\JK Pictures & Videos\IMG_6519.HEIC` |
| Dotted-sphere visual, band | L 4032×3024 | Johannes Kofler (iPhone) | `C:\Users\benja\Downloads\The Sound of entanglement drive files\extracted\The Sound of Entanglement\2025 11 - Zirkus des Wissens (JKU)\JK Pictures & Videos\IMG_6502.HEIC` |
| Soundcheck: wide hall with projection | L 4032×3024 | Johannes Kofler (iPhone) | `C:\Users\benja\Downloads\The Sound of entanglement drive files\extracted\The Sound of Entanglement\2025 11 - Zirkus des Wissens (JKU)\JK Pictures & Videos\IMG_6485.HEIC` |
| Very dark: projection only | L 4032×3024 | Johannes Kofler (iPhone) | `C:\Users\benja\Downloads\The Sound of entanglement drive files\extracted\The Sound of Entanglement\2025 11 - Zirkus des Wissens (JKU)\JK Pictures & Videos\IMG_6508.HEIC` |
| Stage setup with the band | L 4032×3024 | Johannes Kofler (iPhone) | `C:\Users\benja\Downloads\The Sound of entanglement drive files\extracted\The Sound of Entanglement\2025 11 - Zirkus des Wissens (JKU)\JK Pictures & Videos\IMG_6487.HEIC` |
| Team around the experiment case | L 5712×4284 | Johannes Kofler (iPhone) | `C:\Users\benja\Downloads\The Sound of entanglement drive files\extracted\The Sound of Entanglement\2025 11 - Zirkus des Wissens (JKU)\JK Pictures & Videos\IMG_6486.HEIC` |
| Exterior at night with blue projection wall | L 4032×3024 | Johannes Kofler (iPhone) | `C:\Users\benja\Downloads\The Sound of entanglement drive files\extracted\The Sound of Entanglement\2025 11 - Zirkus des Wissens (JKU)\JK Pictures & Videos\IMG_6495.HEIC` |
| Audience crowding the experiment after the show | L 5712×4284 | Johannes Kofler (iPhone) | `C:\Users\benja\Downloads\The Sound of entanglement drive files\extracted\The Sound of Entanglement\2025 11 - Zirkus des Wissens (JKU)\JK Pictures & Videos\IMG_6522.HEIC` |

### 3.9 Shows without a photo set
- **Berlin (Jul 2025, QCA workshop)**: only `SourceFiles\8rooms_ausschnitt_1/2/#3.mp4` (Washington performance recordings, split-screen visuals + band) and `JHU_BruQner_Präsentation_Ausschnitt.mp4`.
- **Munich / Viva Quantum, Deutsches Museum (25 Oct 2025)**: no photos; the 354 MB pptx might contain some.
- **Palermo (Oct 2025)**, **Pint of Science (May 2026)**: presentations only; Pint of Science has `Bruckner_Original_soe.mp4` (BruQner cathedral footage).

---

## 4. Suggested piece-page imagery
- **BruQner (2024)**: hero #1/#2/#4/#5 (cathedral light cones and clouds).
- **8 Rooms (2025)**: Washington `20250414_JHU_Science_2353.jpg` (cover), `…_2455.jpg`; Alpbach #4/#5 (lines on the ceiling); Vienna Ball `08_FRPIC_250125_BdW_030.jpg`. Visual assets: `2025 04 - Washington DC\Presentation\2025 03 DPG Regensburg\media\videos\RandomWalk_Visualization_JHU_loop.mp4` (a 3×3 grid of white-line landscapes on black, silent; ideal loop material).
- **Indeterminate Apparatus (2025)**: CIVA esel ESEL6709/6704/6693 (point clouds; low-res), JKU IMG_6514 + video stills from IMG_6509/6513. CIVA TouchDesigner test exports `2025 10 - CIVA Wien\Visuals\Test-exports\*.mov` (ProRes 720p, grey-scale pixel-sort / particles) could work as abstract loops.

---

## 5. Logos

### Project logo / wordmark
- **No vector (svg/eps/ai/pdf) project logo exists in the drive.**
- **"THE SOUND OF ENTANGLEMENT" wordmark**, two lines ("THE SOUND OF" / "ENTANGLEMENT") in **Josefin Sans** (Regular/Light + Bold), a thin red/blue "entangled wavy line" between them, and a red vertical bar + red chevron `>` framing it. Best raster sources:
  - `C:\Users\benja\Downloads\The Sound of entanglement drive files\extracted\The Sound of Entanglement\2024 09 - BruQner\Design and Media\Youtube\TSOE Thumbnail.psd` (layered; layers "Entangled Wavey Line", text layers) and `TSOE Thumbnail.png` (1920×1080, over a photo)
  - `C:\Users\benja\Downloads\The Sound of entanglement drive files\extracted\The Sound of Entanglement\2024 09 - BruQner\Design and Media\Team Title Slide\TSOE Team Slide.psd` / `.png` (3858×2170, wordmark + 8 labelled team portraits in B/W; parts made with Photoshop generative fill)
- **Serif variant** (Richmond Display/Text): `C:\Users\benja\Downloads\The Sound of entanglement drive files\extracted\The Sound of Entanglement\2025 05 - Osaka\Photos and Graphics\Setup Title Image\Setup Title v1–v5.png`
- **BruQner wordmark** ("BruQner" with a red Q, subtitle "The Sound of Entanglement"): `C:\Users\benja\Downloads\The Sound of entanglement drive files\extracted\The Sound of Entanglement\2024 09 - BruQner\Design and Media\Youtube\BruQner Thumbnail.png`; a sans version sits in the portrait grids `Bruqner-portraits_8-people-BruQner(-logos).tif`.
- A third, typographic poster style (spaced caps over vertical barcode lines, Vienna Ball programme slide) is in `previews\pptx_media\jan25_image2.png` (from `C:\Users\benja\Downloads\The Sound of entanglement drive files\extracted\The Sound of Entanglement\2024 09 - BruQner\Presentation\2025 01 25 - The Sound of Entanglement.pptx`).
- **Recommendation:** rebuild the wordmark as SVG in Josefin Sans (Google Fonts) + a hand-drawn waveform path + chevron, rather than tracing rasters.

### Partner / funder logos: best available files
| Partner | Best file(s) | Type |
|---|---|---|
| TU Wien | `C:\Users\benja\Downloads\The Sound of entanglement drive files\extracted\The Sound of Entanglement\2024 09 - BruQner\Logos\TU_Logo_schwarz\Screen-Web_RGB\TU_Logo_schwarz_RGB.svg` (also `.ai`, `.eps`, `.pdf`; CMYK set in `Print_CMYK\`); `C:\Users\benja\Downloads\The Sound of entanglement drive files\extracted\The Sound of Entanglement\2024 09 - BruQner\Editorial Program Info\TU_Wien Logo.pdf` (3 pages); black only, invert for a dark site | **vector** |
| Universität Innsbruck | `C:\Users\benja\Downloads\The Sound of entanglement drive files\extracted\The Sound of Entanglement\2024 09 - BruQner\Editorial Program Info\Uni_Innsbruck_Logo.pdf`; `C:\Users\benja\Downloads\The Sound of entanglement drive files\extracted\The Sound of Entanglement\2024 09 - BruQner\Logos\universitaet-innsbruck-logo-cmyk-sw.eps` (b/w); PNG `Logos\BruQner_Doku\Universitaet-innsbruck-logo-rgb-farbe.svg.png` (1200 px, raster despite the name) | **vector** |
| Anton Bruckner 2024 / OÖ KulturEXPO | `C:\Users\benja\Downloads\The Sound of entanglement drive files\extracted\The Sound of Entanglement\2024 09 - BruQner\Logos\Bruckner_Logos\Bruckner_Logos_EN\Bruckner24_KOOPERATION_GEL_VIO\01_Bruckner24_GEL_VIO_EN.pdf` (signet + "anton bruckner 2024", yellow/violet); **for a dark site** use `…\Bruckner_Logos_EN_white variants\Bruckner24_KOOPERATION_GEL_VIO\` (same numbering); signet only: `101_Bruckner24_Signet_GEL_VIO_EN.pdf`. Rules: `…\Logos u. Markenmanual DE\Bruckner24_Markenmanual_Partnerlogos.pdf` (12 p). Raster: `C:\Users\benja\Downloads\The Sound of entanglement drive files\extracted\The Sound of Entanglement\2024 09 - BruQner\Editorial Program Info\Bruckner_Logo.png` (OÖ KulturEXPO lock-up, 1357×603). ~540 PDF variants in total (colourways GEL-VIO, BEI-GRU, GRA-GRA, …, ×DE/EN ×white); "KOOPERATION_GEL_VIO" is the partner/cooperation lock-up. Intro videos: `…\Bruckner_Logos\Anton Bruckner 200 years intro.mp4`, sound logo mp3s. | **vector** |
| Mariendom Linz (100 Jahre) | `C:\Users\benja\Downloads\The Sound of entanglement drive files\extracted\The Sound of Entanglement\2024 09 - BruQner\Logos\BruQner_Doku\Logo_anthrazit_100jahremariendom.pdf` | **vector** |
| JKU / LIT | raster only: `C:\Users\benja\Downloads\The Sound of entanglement drive files\extracted\The Sound of Entanglement\2024 09 - BruQner\Logos\BruQner_Doku\JKU_LIT_Logo_hoch_Blau.png` (597×312), `C:\Users\benja\Downloads\The Sound of entanglement drive files\extracted\The Sound of Entanglement\2024 09 - BruQner\Editorial Program Info\JKU_LIT_Logo.png`; plain JKU black (small) in `previews\pptx_media\berlin_image5.png` (from `2025 07 - Berlin\TSoE_Berlin_Konzertslide.pptx`). **Get the SVG from JKU's press kit.** | raster |
| Ars Electronica | raster: `C:\Users\benja\Downloads\The Sound of entanglement drive files\extracted\The Sound of Entanglement\2024 09 - BruQner\Editorial Program Info\AE_ArsElectronica_MainLogo.jpg` (3988×928, with claim); `C:\Users\benja\Downloads\The Sound of entanglement drive files\extracted\The Sound of Entanglement\2024 09 - BruQner\Logos\BruQner_Doku\fl_logo_black-1000x143.png` | raster |
| VCQ (Vienna Center for Quantum Science & Technology) | `C:\Users\benja\Downloads\The Sound of entanglement drive files\extracted\The Sound of Entanglement\2024 09 - BruQner\Logos\BruQner_Doku\VCQ-Logo_transparent.png` (240 px, white text), `C:\Users\benja\Downloads\The Sound of entanglement drive files\extracted\The Sound of Entanglement\2024 09 - BruQner\Editorial Program Info\vcq_logo.jpg` (817 px) | raster |
| SFB BeyondC | `C:\Users\benja\Downloads\The Sound of entanglement drive files\extracted\The Sound of Entanglement\2024 09 - BruQner\Logos\BruQner_Doku\BeyondC_Project_Logo_-_transparent4.png` (5159×1746); `C:\Users\benja\Downloads\The Sound of entanglement drive files\extracted\The Sound of Entanglement\2024 09 - BruQner\Logos\SFB-beyondC.jpeg` | raster |
| Stadt Wien Kultur | `C:\Users\benja\Downloads\The Sound of entanglement drive files\extracted\The Sound of Entanglement\2024 09 - BruQner\Logos\BruQner_Doku\Stadt_Wien_Kultur.jpg` (390 px only) | raster |
| Katholische Kirche OÖ | `C:\Users\benja\Downloads\The Sound of entanglement drive files\extracted\The Sound of Entanglement\2024 09 - BruQner\Logos\BruQner_Doku\Clip_KKOOe_4c_schwarz.jpg` | raster |
| quantA (FWF Cluster of Excellence "Quantum Austria") | only embedded in pptx: `previews\pptx_media\berlin_image2.png` (311×88); source `2025 04 - Washington DC\Presentation\quantA\quantA_JK.pptx` may hold a better one | raster |
| **FWF**, **Austrian Cultural Forum Washington**, JHU, EFA, CIVA | **not in the drive**. ACF and quantA are named as supporters in `2025 04 - Washington DC\Social Media Material\Social Media.docx` | — |

Rendered previews: `previews\sheets\logos_pdf_sheet.jpg`, `previews\sheets\2024_09_BruQner_Logos_BruQner_Doku__1.jpg`, `…Editorial_Program_Info__1.jpg`, `pptx_media_sheet.jpg`.

---

## 6. Videos

Full list with duration/resolution/codec (all 100): see the appendix. Frame strips: `previews\sheets\videos__1..12.jpg` (V-numbers).

### Key videos
| Video | Dur. | Res. | What it is / use |
|---|---|---|---|
| `C:\Users\benja\Downloads\The Sound of entanglement drive files\extracted\The Sound of Entanglement\2024 09 - BruQner\Preview Video\Bruqner_3_min.mp4` (V10) | 2:46 | 1920×1080 h264 23.976, audio | **"Preview Video"**: dark cathedral performance edit (cones, rings, case). **Best source for a muted background loop** (dark, slow haze-cone motion); cut 5–15 s segments. |
| `C:\Users\benja\Downloads\The Sound of entanglement drive files\extracted\The Sound of Entanglement\2024 09 - BruQner\Video\BruQner - The Sound of Entanglement (Trailer, 2025)(1).mp4` (V11) | 2:09 | 1280×720 | **Trailer** (title card, interviews, optics macro, light cones). Only 720p. Embed from YouTube rather than self-host. |
| `C:\Users\benja\Downloads\The Sound of entanglement drive files\extracted\The Sound of Entanglement\2024 09 - BruQner\Video\BruQner_Prvw_2.mp4` (V12) | 16:22 | 1920×1080, 1.65 GB | **Documentary** (weitblickfilm) preview cut; published as the ~19 min YouTube doc `https://www.youtube.com/watch?v=_mIf_OFN1YI` (per `Doku\How to publish the docu.docx`). Source of the 4K stills. |
| `C:\Users\benja\Downloads\The Sound of entanglement drive files\extracted\The Sound of Entanglement\2024 09 - BruQner\Doku\BruQner_Teaser_short.mp4` (V1) | 1:51 | **2160×3840 vertical** | Documentary **short/teaser** (YouTube Short `https://www.youtube.com/shorts/8sxtatNxGQQ`); subtitled interviews. Good for mobile. |
| `C:\Users\benja\Downloads\The Sound of entanglement drive files\extracted\The Sound of Entanglement\2025 04 - Washington DC\Photos & Videos\Alex Video\SoE_OnTour.mp4` (V26) | 2:12 | **3840×2160** 60 fps | "On Tour" vlog by Alexander Ploier (DC travel, setup). Behind-the-scenes; not dark. |
| `C:\Users\benja\Downloads\The Sound of entanglement drive files\extracted\The Sound of Entanglement\2025 07 - Berlin\SourceFiles\8rooms_ausschnitt_1.mp4`, `_2.mp4`, `_#3.mp4` (V69–71) | 1:03 / 0:56 / 1:30 | 1080p | **8 Rooms performance excerpts** (Washington), split screen: visuals + band camera. Good trailer material for the 8 Rooms page. |
| `C:\Users\benja\Downloads\The Sound of entanglement drive files\extracted\The Sound of Entanglement\2025 07 - Berlin\SourceFiles\JHU_BruQner_Präsentation_Ausschnitt.mp4` (V72) | 0:48 | 1080p | BruQner cathedral excerpt ("Andante Correlations" caption): light cones, organ. |
| `C:\Users\benja\Downloads\The Sound of entanglement drive files\extracted\The Sound of Entanglement\2026 05 - Pint of Science\Bruckner_Original_soe.mp4` (V90) | 0:29 | 1080p | Perger Präludium original vs. SoE; dark cathedral with the glowing case. |

### Best muted background-loop candidates
1. **`Bruqner_3_min.mp4`**: segments with the haze cone / rings (frames at ~30–110 s). Dark, cinematic, 1080p.
2. **`…\DPG Regensburg\media\videos\RandomWalk_Visualization_JHU_loop.mp4`** (60 s, 1080p, **already a loop, no audio**; also `compressed_…` 13 MB): 3×3 grid of the 8 Rooms white-line landscapes on black. Crop one tile for a single-landscape loop.
3. **`…\DPG Regensburg\media\videos\Setting Choice Device_loop.mp4`** / `_doubletime.mp4` / `compressed_…` (30 s, 1080p): macro loop of the red rotating polariser mount (the "setting choice device"); bright bokeh, moody. `filter spinning.mp4` is a 1.6 s 720p version.
4. **`C:\Users\benja\Downloads\The Sound of entanglement drive files\extracted\The Sound of Entanglement\2024 09 - BruQner\Photos and Videos_ 2024 07 05\IMG_0384/0387/0392/0393/0394.MOV`** (11–43 s, 1080p iPhone): **light cones moving in haze in the empty cathedral** (July 2024 test). Handheld, with some pans to windows; usable 3–6 s stretches exist (e.g. IMG_0393 start/end, IMG_0392 start).
5. **JKU `IMG_6509.MOV`, `IMG_6513.MOV`** (15–20 s, 1080p HEVC): point-cloud zig-zag on the big screen, locked-off; good for Indeterminate Apparatus. `IMG_6489/6503/6505/6517/6518` show other visuals (white strokes, particle bursts, rising line).
6. **CIVA `Visuals\Test-exports\Particles.mov`, `Classic.mov`, `Quantumpart1/2.mov`** (ProRes 720p): pure-visual TouchDesigner exports (particles, grey pixel-sort). Abstract, silent-friendly, low-res.
7. **Washington JK iPhone clips** `IMG_2306/2307/2310/2312/2313/2315/2316/2319/2326/2327.MOV`: line visuals on stage; `IMG_2301.MOV` is visuals only on a black screen. Verena `IMG_0746 2.MOV` (8 s) is a nice line-landscape close-up.
8. `C:\Users\benja\Downloads\The Sound of entanglement drive files\extracted\The Sound of Entanglement\2024 09 - BruQner\Visuals - Linz\Linz01–07_horizontal.mp4`: **the actual BruQner projection source visuals** (thin pastel circles/Venn rings, dotted circles, lines on pure black). Mostly black, minimalist; fine as abstract motion graphics, but not the haze look.

Not useful for the site: Bruckner-2024 intro videos (partner branding), `Cage.mp4`/`Cage_loop.mp4` (third-party orchestra footage), `PPTMovie*.mov`, `random_wlak.mp4` (UI screen recording), `CIVA Visuals\Audio-clemens\*.mpg` (audio-only, no video stream).

---

## 7. Team portraits

**Team (per docs):** Clemens Wenger (pianist, composer), Enar de Dios Rodríguez (visual artist), Benjamin Orthner (experimental physicist, TU Wien), Martin Ringbauer (experimental physicist, Univ. Innsbruck), Richard Küng (theoretical computer scientist, JKU), Johannes Kofler (JKU), Alexander Ploier (JKU; executive producer of the doc), Philipp Haslinger (experimental physicist, TU Wien). **Band from 2025:** Manu Mayr (bass), Judith Schwarz (drums).

### Individual portraits (`C:\Users\benja\Downloads\The Sound of entanglement drive files\extracted\The Sound of Entanglement\2024 09 - BruQner\Press Pics for Are Electronica\`), filename = "Subject @ Photographer"
| Person | File | px | Credit |
|---|---|---|---|
| Alexander Ploier | `Alex Ploier @ Elisabeth Peheim.jpg` | 3744×5616 P | © Elisabeth Peheim |
| Benjamin Orthner | `Benjamin Orthner @ Benjamin Orthner.jpg` (looking aside, red wall) / `Benjamin Orthner.jpg` (frontal) | 3650×5475 / 3825×5737 P | self |
| Clemens Wenger | `Clemens Wenger @ Alexander Gotter.jpg` (RGB split, stylised) | 1367×2048 P | © Alex Gotter |
| Enar de Dios Rodríguez | `Enar de Dios Rodriguez @ Philipp Haslinger.tif` (B/W) | 1861×1861 Sq | © Philipp Haslinger |
| Johannes Kofler | `Johannes Kofler @ Johannes Kofler.jpg` | **330×440** (too small) | self |
| Martin Ringbauer | `Martin Ringbauer @ Martin Ringbauer.jpg` (Great Wall backdrop) | 2173×2563 P | self |
| Philipp Haslinger | `Philipp Haslinger @ Enar de Dios Rodriguez.jpg` | 2447×2486 Sq | © Enar de Dios Rodríguez |
| Richard Küng | `Richard Küng @ Richard Küng.jpeg` (star scarf, lab) | 4928×3280 L | self |

Duplicates/alternates in `C:\Users\benja\Downloads\The Sound of entanglement drive files\extracted\The Sound of Entanglement\2024 09 - BruQner\Press_portraits_July2023\Portraits\<Name>\` (Enar, Johannes (same 330 px), Martin, Philipp: `Haslinger1/2/4.jpg` 3024×4032, Richard). Clemens only has a Dropbox link (`Clemens_portraits_dropbox.docx`). **Higher-res Clemens portraits:** `C:\Users\benja\Downloads\The Sound of entanglement drive files\extracted\The Sound of Entanglement\2025 10 - CIVA Wien\Pressematerial\Group Pictures\Clemens Wenger -3248 - Alex Gotter-2.jpg` (4912×7360) and `…-3473 - Alex Gotter.jpg` (7360×4912), © Alex Gotter.
Band: `C:\Users\benja\Downloads\The Sound of entanglement drive files\extracted\The Sound of Entanglement\2025 10 - CIVA Wien\Pressematerial\Group Pictures\Manu Mayr by ingo pertramer.jpg` (2657×3543, B/W, © Ingo Pertramer); `Kopie von JudithSchwarz_copyrightFRANK_SCHNIDELBECK.jpeg` (1950×1300, B/W drummer, © Frank Schindelbeck).

### Group composites (duotone red/B&W)
- `C:\Users\benja\Downloads\The Sound of entanglement drive files\extracted\The Sound of Entanglement\2024 09 - BruQner\Press Pics for Are Electronica\Bruqner-portraits_8-people.tif` (12133×8036; also `-BruQner.tif` with a "BruQner" wordmark and `-BruQner-logos.tif` with JKU/TU/UIBK logos; low-res copies in `z_Low-res-group-images\`, 2592 px; `C:\Users\benja\Downloads\The Sound of entanglement drive files\extracted\The Sound of Entanglement\2025 10 - CIVA Wien\Pressematerial\Group Pictures\TSOW-portraits_8-people.jpg` 2000 px).
  **Grid order (4×2):** top row: **Richard Küng, Clemens Wenger, Philipp Haslinger, Benjamin Orthner**; bottom row: **Johannes Kofler, Enar de Dios Rodríguez, Martin Ringbauer, Alexander Ploier.** Credit line from `00_Credits_BruQner_Portrait.docx`: "BruQner – The Sound of Entanglement © [Richard Küng], Alex Gotter, Enar de Dios Rodríguez, [Benjamin Orthner], [Johannes Kofler], Philipp Haslinger, Martin Ringbauer, Elisabeth Peheim" (the `xx` gaps are the self-portraits). The full list appears in `Editorial Program Info\Team @ Richard Küng, Alexander Gotter, Enar de Dios Rodriguez, Benjamin Orthner, Johannes Kofler, Philipp Haslinger, Martin Ringbauer, Elisabeth Peheim.tif`.
- `C:\Users\benja\Downloads\The Sound of entanglement drive files\extracted\The Sound of Entanglement\2024 09 - BruQner\Press_portraits_July2023\Bruqner-portraits_6-people.tif` (9091×8036): the earlier 6-person version with logos, without Benjamin and Alex (top: Richard, Clemens, Philipp; bottom: Johannes, Enar, Martin). `Bruqner-portraits.tif` = Clemens + Philipp; `_4-people copy.tif` = Richard, Clemens, Philipp, Johannes.
- `C:\Users\benja\Downloads\The Sound of entanglement drive files\extracted\The Sound of Entanglement\2024 09 - BruQner\Design and Media\Team Title Slide\TSOE Team Slide.png` (3858×2170): B/W strips with names, left to right: **Richard Küng, Johannes Kofler, Philipp Haslinger, Enar de Dios Rodríguez, Clemens Wenger, Martin Ringbauer, Alexander Ploier, Benjamin Orthner**.

### Documentary interview stills (4K, `C:\Users\benja\Downloads\The Sound of entanglement drive files\extracted\The Sound of Entanglement\2024 09 - BruQner\Doku\BruQner Stills\`)
Moody environmental portraits, credit weitblickfilm. Identifications are by likeness against the press portraits:
`BruQner_Stills_1.4.1.jpg` / `1.5.1.jpg` = Benjamin Orthner; `1.16.1` / `1.17.1` = Enar de Dios Rodríguez; `1.15.1` = Johannes Kofler (lecture hall); `1.47.1–1.49.1` = Philipp Haslinger (concrete hall); `1.50.1` / `1.51.1` = Martin Ringbauer (empty chair rows); `1.41.1` = Clemens Wenger (glasses, beard, cathedral; likely); `1.2.1` / `1.3.1` = unidentified man in a cap at a Danube-side café (confirm who); `1.42.1` = organist at the console.

### Group/team snapshots (casual)
Washington rooftop: `C:\Users\benja\Downloads\The Sound of entanglement drive files\extracted\The Sound of Entanglement\2025 04 - Washington DC\Photos & Videos\JK‘s Pictures and Videos\IMG_2339.HEIC`, `…\Social Media Material\04.jpeg`, Verena `IMG_0758–0773 2.HEIC`. CIVA bow: esel `ESEL6849.webp`. Alpbach stage: `250826_200928_…Luiza_Puiu.jpg`.

---

## Appendix A: all videos

| V# | Path (under ROOT) | Duration | Resolution | Codec / fps | Audio | Size |
|---|---|---|---|---|---|---|
| V1 | `2024 09 - BruQner\Doku\BruQner_Teaser_short.mp4` | 1:51 | 2160×3840 | h264 25/1 | yes | 633 MB |
| V2 | `2024 09 - BruQner\Fotos Aufführung\BruQner_Performance_Video.mp4` | 0:10 | 720×1280 | h264 6249/250 | yes | 0 MB |
| V3 | `2024 09 - BruQner\Logos\Bruckner_Logos\Anton Bruckner 200 Jahre Intro.mp4` | 1:20 | 1920×1080 | h264 25/1 | yes | 23 MB |
| V4 | `2024 09 - BruQner\Logos\Bruckner_Logos\Anton Bruckner 200 years intro.mp4` | 1:20 | 1920×1080 | h264 25/1 | yes | 34 MB |
| V5 | `2024 09 - BruQner\Photos and Videos_ 2024 07 05\IMG_0384.MOV` | 0:43 | 1920×1080 | h264 30/1 | yes | 77 MB |
| V6 | `2024 09 - BruQner\Photos and Videos_ 2024 07 05\IMG_0387.MOV` | 0:20 | 1920×1080 | h264 30/1 | yes | 37 MB |
| V7 | `2024 09 - BruQner\Photos and Videos_ 2024 07 05\IMG_0392.MOV` | 0:15 | 1920×1080 | h264 30/1 | yes | 27 MB |
| V8 | `2024 09 - BruQner\Photos and Videos_ 2024 07 05\IMG_0393.MOV` | 0:16 | 1920×1080 | h264 30/1 | yes | 29 MB |
| V9 | `2024 09 - BruQner\Photos and Videos_ 2024 07 05\IMG_0394.MOV` | 0:10 | 1920×1080 | h264 30/1 | yes | 18 MB |
| V10 | `2024 09 - BruQner\Preview Video\Bruqner_3_min.mp4` | 2:46 | 1920×1080 | h264 24000/1001 | yes | 306 MB |
| V11 | `2024 09 - BruQner\Video\BruQner - The Sound of Entanglement (Trailer, 2025)(1).mp4` | 2:08 | 1280×720 | h264 25/1 | yes | 10 MB |
| V12 | `2024 09 - BruQner\Video\BruQner_Prvw_2.mp4` | 16:22 | 1920×1080 | h264 25/1 | yes | 1653 MB |
| V13 | `2024 09 - BruQner\Visuals - Linz\Linz01_horizontal.mp4` | 1:59 | 1920×1080 | h264 25/1 | yes | 34 MB |
| V14 | `2024 09 - BruQner\Visuals - Linz\Linz02_horizontal.mp4` | 1:47 | 1920×1080 | h264 25/1 | yes | 18 MB |
| V15 | `2024 09 - BruQner\Visuals - Linz\Linz03_horizontal.mp4` | 1:39 | 1920×1080 | h264 25/1 | yes | 21 MB |
| V16 | `2024 09 - BruQner\Visuals - Linz\Linz04_horizontal.mp4` | 1:54 | 1920×1080 | h264 25/1 | yes | 16 MB |
| V17 | `2024 09 - BruQner\Visuals - Linz\Linz06_horizontal.mp4` | 0:30 | 1920×1080 | h264 25/1 | yes | 5 MB |
| V18 | `2024 09 - BruQner\Visuals - Linz\Linz07_08_horizontal.mp4` | 2:57 | 1920×1080 | h264 25/1 | yes | 15 MB |
| V19 | `2025 01 - Vienna Science Ball\Photos\Benjamin Photos\Copy of PXL_20250124_193955063~2.mp4` | 0:07 | 1080×1920 | hevc 90000/1 | yes | 17 MB |
| V20 | `2025 01 - Vienna Science Ball\Photos\Benjamin Photos\Copy of PXL_20250125_184053735.mp4` | 0:07 | 1080×1920 | hevc 90000/1 | yes | 18 MB |
| V21 | `2025 01 - Vienna Science Ball\Photos\Benjamin Photos\Copy of PXL_20250125_203446447.mp4` | 0:05 | 1080×1920 | hevc 120/1 | yes | 12 MB |
| V22 | `2025 01 - Vienna Science Ball\Photos\Benjamin Photos\Copy of PXL_20250125_210220396.mp4` | 0:33 | 1080×1920 | hevc 99/4 | yes | 77 MB |
| V23 | `2025 01 - Vienna Science Ball\Photos\Benjamin Photos\Copy of PXL_20250125_210941851.mp4` | 0:05 | 1920×1080 | hevc 60000/1001 | yes | 13 MB |
| V24 | `2025 01 - Vienna Science Ball\Photos\Benjamin Photos\Copy of PXL_20250125_213438538.mp4` | 0:05 | 1080×1920 | hevc 74/3 | yes | 12 MB |
| V25 | `2025 01 - Vienna Science Ball\Photos\Benjamin Photos\Copy of Wissenschaftsball TSOE Clip.mp4` | 0:06 | 1280×720 | h264 30/1 | yes | 7 MB |
| V26 | `2025 04 - Washington DC\Photos & Videos\Alex Video\SoE_OnTour.mp4` | 2:12 | 3840×2160 | h264 60/1 | yes | 791 MB |
| V27 | `2025 04 - Washington DC\Photos & Videos\JK‘s Pictures and Videos\IMG_2251.MOV` | 0:20 | 1920×1080 | h264 30/1 | yes | 38 MB |
| V28 | `2025 04 - Washington DC\Photos & Videos\JK‘s Pictures and Videos\IMG_2252.MOV` | 0:24 | 1920×1080 | h264 30/1 | yes | 44 MB |
| V29 | `2025 04 - Washington DC\Photos & Videos\JK‘s Pictures and Videos\IMG_2253.MOV` | 0:20 | 1920×1080 | h264 30/1 | yes | 38 MB |
| V30 | `2025 04 - Washington DC\Photos & Videos\JK‘s Pictures and Videos\IMG_2254.MOV` | 0:38 | 1920×1080 | h264 30000/1001 | yes | 71 MB |
| V31 | `2025 04 - Washington DC\Photos & Videos\JK‘s Pictures and Videos\IMG_2255.MOV` | 0:07 | 1920×1080 | h264 30000/1001 | yes | 15 MB |
| V32 | `2025 04 - Washington DC\Photos & Videos\JK‘s Pictures and Videos\IMG_2256.MOV` | 0:14 | 1920×1080 | h264 30000/1001 | yes | 26 MB |
| V33 | `2025 04 - Washington DC\Photos & Videos\JK‘s Pictures and Videos\IMG_2273.MOV` | 0:44 | 1920×1080 | h264 30/1 | yes | 80 MB |
| V34 | `2025 04 - Washington DC\Photos & Videos\JK‘s Pictures and Videos\IMG_2279.MOV` | 0:15 | 1920×1080 | h264 30/1 | yes | 28 MB |
| V35 | `2025 04 - Washington DC\Photos & Videos\JK‘s Pictures and Videos\IMG_2293.MOV` | 0:07 | 1920×1080 | h264 30/1 | yes | 14 MB |
| V36 | `2025 04 - Washington DC\Photos & Videos\JK‘s Pictures and Videos\IMG_2294.MOV` | 0:10 | 1920×1080 | h264 30/1 | yes | 19 MB |
| V37 | `2025 04 - Washington DC\Photos & Videos\JK‘s Pictures and Videos\IMG_2295.MOV` | 0:16 | 1920×1080 | h264 30/1 | yes | 31 MB |
| V38 | `2025 04 - Washington DC\Photos & Videos\JK‘s Pictures and Videos\IMG_2298.MOV` | 0:10 | 1920×1080 | h264 30000/1001 | yes | 19 MB |
| V39 | `2025 04 - Washington DC\Photos & Videos\JK‘s Pictures and Videos\IMG_2299.MOV` | 0:10 | 1920×1080 | h264 30/1 | yes | 19 MB |
| V40 | `2025 04 - Washington DC\Photos & Videos\JK‘s Pictures and Videos\IMG_2301.MOV` | 0:11 | 1920×1080 | h264 24000/1001 | yes | 19 MB |
| V41 | `2025 04 - Washington DC\Photos & Videos\JK‘s Pictures and Videos\IMG_2306.MOV` | 0:29 | 1920×1080 | h264 30000/1001 | yes | 50 MB |
| V42 | `2025 04 - Washington DC\Photos & Videos\JK‘s Pictures and Videos\IMG_2307.MOV` | 1:20 | 1920×1080 | h264 30/1 | yes | 150 MB |
| V43 | `2025 04 - Washington DC\Photos & Videos\JK‘s Pictures and Videos\IMG_2310.MOV` | 0:25 | 1920×1080 | h264 30/1 | yes | 45 MB |
| V44 | `2025 04 - Washington DC\Photos & Videos\JK‘s Pictures and Videos\IMG_2312.MOV` | 0:25 | 1920×1080 | h264 30/1 | yes | 47 MB |
| V45 | `2025 04 - Washington DC\Photos & Videos\JK‘s Pictures and Videos\IMG_2313.MOV` | 0:30 | 1920×1080 | h264 30/1 | yes | 56 MB |
| V46 | `2025 04 - Washington DC\Photos & Videos\JK‘s Pictures and Videos\IMG_2315.MOV` | 0:20 | 1920×1080 | h264 30/1 | yes | 38 MB |
| V47 | `2025 04 - Washington DC\Photos & Videos\JK‘s Pictures and Videos\IMG_2316.MOV` | 0:20 | 1920×1080 | h264 30/1 | yes | 38 MB |
| V48 | `2025 04 - Washington DC\Photos & Videos\JK‘s Pictures and Videos\IMG_2319.MOV` | 0:20 | 1920×1080 | h264 30/1 | yes | 38 MB |
| V49 | `2025 04 - Washington DC\Photos & Videos\JK‘s Pictures and Videos\IMG_2326.MOV` | 0:20 | 1920×1080 | h264 30/1 | yes | 38 MB |
| V50 | `2025 04 - Washington DC\Photos & Videos\JK‘s Pictures and Videos\IMG_2327.MOV` | 0:45 | 1920×1080 | h264 30/1 | yes | 85 MB |
| V51 | `2025 04 - Washington DC\Photos & Videos\JK‘s Pictures and Videos\IMG_2329.MOV` | 0:09 | 1920×1080 | h264 30/1 | yes | 17 MB |
| V52 | `2025 04 - Washington DC\Photos & Videos\Verena Pictures and Videos\IMG_0746 2.MOV` | 0:07 | 1920×1080 | hevc 30/1 | yes | 13 MB |
| V53 | `2025 04 - Washington DC\Photos & Videos\Verena Pictures and Videos\IMG_0747 2.MOV` | 0:07 | 1080×1920 | hevc 30/1 | yes | 10 MB |
| V54 | `2025 04 - Washington DC\Photos & Videos\Verena Pictures and Videos\IMG_0748 2.MOV` | 0:13 | 1080×1920 | hevc 30/1 | yes | 22 MB |
| V56 | `2025 04 - Washington DC\Presentation\2025 03 DPG Regensburg\media\graphic elements\Wissenschaftsball TSOE Clip.mp4` | 0:06 | 1280×720 | h264 30/1 | yes | 7 MB |
| V55 | `2025 04 - Washington DC\Presentation\2025 03 DPG Regensburg\media\graphic elements\filter spinning.mp4` | 0:01 | 1280×720 | h264 30/1 | yes | 1 MB |
| V57 | `2025 04 - Washington DC\Presentation\2025 03 DPG Regensburg\media\videos\Cage.mp4` | 0:12 | 852×480 | h264 30/1 | yes | 5 MB |
| V58 | `2025 04 - Washington DC\Presentation\2025 03 DPG Regensburg\media\videos\Cage_loop.mp4` | 0:51 | 1920×1080 | h264 30/1 | yes | 123 MB |
| - | `2025 04 - Washington DC\Presentation\2025 03 DPG Regensburg\media\videos\PPTMovie.0.mov` | 0:05 | 1280×720 | mpeg4 30/1 | no | 11 MB |
| - | `2025 04 - Washington DC\Presentation\2025 03 DPG Regensburg\media\videos\PPTMovie0.mov` | 0:05 | 1280×720 | mpeg4 30/1 | no | 0 MB |
| - | `2025 04 - Washington DC\Presentation\2025 03 DPG Regensburg\media\videos\PPTMovie10.mov` | 0:05 | 1280×720 | mpeg4 30/1 | no | 3 MB |
| - | `2025 04 - Washington DC\Presentation\2025 03 DPG Regensburg\media\videos\PPTMovie2.mov` | 0:05 | 1280×720 | mpeg4 30/1 | no | 2 MB |
| - | `2025 04 - Washington DC\Presentation\2025 03 DPG Regensburg\media\videos\PPTMovie3.mov` | 0:05 | 1280×720 | mpeg4 30/1 | no | 4 MB |
| - | `2025 04 - Washington DC\Presentation\2025 03 DPG Regensburg\media\videos\PPTMovie4.mov` | 0:05 | 1280×720 | mpeg4 30/1 | no | 4 MB |
| - | `2025 04 - Washington DC\Presentation\2025 03 DPG Regensburg\media\videos\PPTMovie5.mov` | 0:05 | 1280×720 | mpeg4 30/1 | no | 3 MB |
| - | `2025 04 - Washington DC\Presentation\2025 03 DPG Regensburg\media\videos\PPTMovie6.mov` | 0:05 | 1280×720 | mpeg4 30/1 | no | 5 MB |
| - | `2025 04 - Washington DC\Presentation\2025 03 DPG Regensburg\media\videos\PPTMovie7.mov` | 0:05 | 1280×720 | mpeg4 30/1 | no | 7 MB |
| - | `2025 04 - Washington DC\Presentation\2025 03 DPG Regensburg\media\videos\PPTMovie8.mov` | 0:05 | 1280×720 | mpeg4 30/1 | no | 7 MB |
| V62 | `2025 04 - Washington DC\Presentation\2025 03 DPG Regensburg\media\videos\RandomWalk_Visualization_JHU_loop.mp4` | 1:00 | 1920×1080 | h264 30/1 | no | 143 MB |
| V64 | `2025 04 - Washington DC\Presentation\2025 03 DPG Regensburg\media\videos\Setting Choice Device_loop.mp4` | 0:30 | 1920×1080 | h264 30/1 | yes | 70 MB |
| V65 | `2025 04 - Washington DC\Presentation\2025 03 DPG Regensburg\media\videos\Setting Choice Device_loop_doubletime.mp4` | 0:30 | 1920×1080 | h264 30/1 | yes | 72 MB |
| V59 | `2025 04 - Washington DC\Presentation\2025 03 DPG Regensburg\media\videos\compressed_RandomWalk_Visualization_JHU_loop.mp4` | 1:00 | 1920×1080 | h264 30/1 | no | 13 MB |
| V60 | `2025 04 - Washington DC\Presentation\2025 03 DPG Regensburg\media\videos\compressed_Setting Choice Device_loop_doubletime.mp4` | 0:30 | 1920×1080 | h264 30/1 | yes | 14 MB |
| V61 | `2025 04 - Washington DC\Presentation\2025 03 DPG Regensburg\media\videos\filter spinning.mp4` | 0:01 | 1280×720 | h264 30/1 | yes | 1 MB |
| V63 | `2025 04 - Washington DC\Presentation\2025 03 DPG Regensburg\media\videos\random_wlak.mp4` | 1:18 | 2048×1024 | h264 60/1 | no | 3 MB |
| V66 | `2025 04 - Washington DC\Social Media Material\03.mp4` | 0:11 | 1920×1080 | h264 30/1 | yes | 29 MB |
| V67 | `2025 06 - Millstatt\Photos\Benjamin Photos\PXL_20250603_150123851.mp4` | 0:21 | 1080×1920 | hevc 30/1 | yes | 49 MB |
| V68 | `2025 06 - Millstatt\Photos\Benjamin Photos\PXL_20250603_150153489.mp4` | 0:13 | 1080×1920 | hevc 240/1 | yes | 32 MB |
| V69 | `2025 07 - Berlin\SourceFiles\8rooms_ausschnitt_#3.mp4` | 1:30 | 1920×1080 | h264 30/1 | yes | 217 MB |
| V70 | `2025 07 - Berlin\SourceFiles\8rooms_ausschnitt_1.mp4` | 1:03 | 1920×1080 | h264 30/1 | yes | 152 MB |
| V71 | `2025 07 - Berlin\SourceFiles\8rooms_ausschnitt_2.mp4` | 0:56 | 1920×1080 | h264 30/1 | yes | 135 MB |
| V72 | `2025 07 - Berlin\SourceFiles\JHU_BruQner_Präsentation_Ausschnitt.mp4` | 0:47 | 1920×1080 | h264 25/1 | yes | 57 MB |
| - | `2025 10 - CIVA Wien\Visuals\Audio-clemens\new_steam_v2_110bpm 3.mpg` | 0:00 | None×None | None None | no | 8 MB |
| - | `2025 10 - CIVA Wien\Visuals\Audio-clemens\new_steam_v2_90bpm.mpg` | 0:00 | None×None | None None | no | 10 MB |
| V73 | `2025 10 - CIVA Wien\Visuals\Test-exports\Classic.mov` | 0:36 | 1280×720 | prores 25/1 | yes | 384 MB |
| V74 | `2025 10 - CIVA Wien\Visuals\Test-exports\Particles.mov` | 0:19 | 1280×720 | prores 25/1 | yes | 130 MB |
| V75 | `2025 10 - CIVA Wien\Visuals\Test-exports\Quamtumpart2.mov` | 0:17 | 1280×720 | prores 25/1 | yes | 152 MB |
| V76 | `2025 10 - CIVA Wien\Visuals\Test-exports\Quantumpart1.mov` | 0:45 | 1280×720 | prores 25/1 | yes | 143 MB |
| V77 | `2025 11 - Zirkus des Wissens (JKU)\JK Pictures & Videos\IMG_6489.MOV` | 0:20 | 1920×1080 | hevc 120/1 | yes | 42 MB |
| V78 | `2025 11 - Zirkus des Wissens (JKU)\JK Pictures & Videos\IMG_6490.mov` | 0:10 | 1920×1080 | hevc 24000/1001 | yes | 14 MB |
| V79 | `2025 11 - Zirkus des Wissens (JKU)\JK Pictures & Videos\IMG_6493.MOV` | 0:18 | 1920×1080 | hevc 30/1 | yes | 38 MB |
| V80 | `2025 11 - Zirkus des Wissens (JKU)\JK Pictures & Videos\IMG_6503.MOV` | 0:30 | 1920×1080 | hevc 30/1 | yes | 27 MB |
| V81 | `2025 11 - Zirkus des Wissens (JKU)\JK Pictures & Videos\IMG_6505.MOV` | 0:25 | 1920×1080 | hevc 24000/1001 | yes | 22 MB |
| V82 | `2025 11 - Zirkus des Wissens (JKU)\JK Pictures & Videos\IMG_6506.MOV` | 0:15 | 1920×1080 | hevc 24000/1001 | yes | 12 MB |
| V83 | `2025 11 - Zirkus des Wissens (JKU)\JK Pictures & Videos\IMG_6507.mov` | 0:15 | 1920×1080 | hevc 24000/1001 | yes | 13 MB |
| V84 | `2025 11 - Zirkus des Wissens (JKU)\JK Pictures & Videos\IMG_6509.MOV` | 0:15 | 1920×1080 | hevc 30/1 | yes | 31 MB |
| V85 | `2025 11 - Zirkus des Wissens (JKU)\JK Pictures & Videos\IMG_6510.MOV` | 0:30 | 1920×1080 | hevc 24000/1001 | yes | 26 MB |
| V86 | `2025 11 - Zirkus des Wissens (JKU)\JK Pictures & Videos\IMG_6513.MOV` | 0:20 | 1920×1080 | hevc 30/1 | yes | 39 MB |
| V87 | `2025 11 - Zirkus des Wissens (JKU)\JK Pictures & Videos\IMG_6515.mov` | 0:12 | 1920×1080 | hevc 24000/1001 | yes | 10 MB |
| V88 | `2025 11 - Zirkus des Wissens (JKU)\JK Pictures & Videos\IMG_6517.MOV` | 0:20 | 1920×1080 | hevc 24000/1001 | yes | 19 MB |
| V89 | `2025 11 - Zirkus des Wissens (JKU)\JK Pictures & Videos\IMG_6518.MOV` | 0:15 | 1920×1080 | hevc 120/1 | yes | 23 MB |
| V90 | `2026 05 - Pint of Science\Bruckner_Original_soe.mp4` | 0:28 | 1920×1080 | h264 25/1 | yes | 31 MB |

## Appendix B: technical notes for the build
- HEIC (158 files: Washington JK/Verena, JKU, Dom Nov 2023, July 2024) must be converted to JPEG/AVIF; Pillow + pillow_heif works here (`python -c "import pillow_heif"` OK), as does ffmpeg.
- iPhone MOVs are HEVC or h264 with rotation metadata; re-encode loops to H.264/AV1 WebM with the audio stripped (`-an`).
- The Ars Electronica filenames are ~230 characters long; rename on import (e.g. `bruqner-ae-53972967048.jpg`).
- `OÖ` in the Krenn folder/filenames may be Unicode-decomposed on disk. Glob rather than hard-code if scripting.
