# Design directions (round 1)

Four candidate directions for the landing page. Each is a standalone mockup in
`design/mockups/<slug>/index.html`, built from real content, real photos and
real measurement data, so the comparison is between ideas and not between
levels of polish.

The brief (from Benjamin): minimal, dark, abstract, artsy; it must feel like it
comes out of *this* experiment and not like a generic art-science site. It has
to explain the project, the physics, the pieces, and past + upcoming shows.

## What every direction shares

**The one non-negotiable idea: the site runs on real photons.** The bruQner
performance logs hold every measurement made at every show since the premiere
(~268 000 events). The landing page replays one of them: when a pair of rings
appears, it is a photon pair that was actually measured, e.g. in the Mariendom
on 4 Sept 2024 at 23:00. Where replay data runs out, `src/lib/bell.ts` samples
from the same quantum statistics (S ≈ 2.45) and says so.

Excerpts (2 000 events each, hex-encoded) live in `design/mockups/assets/`:

- `bruqner_premiere_2024-09-04.json` — BruQner premiere, Q_all section, S = 2.22 over the excerpt
- `8rooms_wissenschaftsball_2025-01-25.json` — 8 Rooms at the Vienna Ball of Sciences, metronome-locked 528 ms cadence, S = 2.55

Decoding: one hex digit per event, `v = parseInt(ch, 16)`,
`aliceSetting = (v >> 3) + 1`, `bobSetting = ((v >> 2) & 1) + 1`,
`outcome = v & 3` → `[[+1,+1],[+1,-1],[-1,+1],[-1,-1]][outcome]` (TT, TR, RT, RR).
`dt` holds the milliseconds between events.

**The project's own visual grammar** (taken from the 2024 BruQner shader and
the paper figures, not invented):

| Element | Meaning | Source |
|---|---|---|
| Circles / rings | entangled (quantum) sections | BruQner visuals, "circles – entanglement" |
| Straight lines | classical sections (S ≤ 2) | BruQner visuals, "lines – classical" |
| Alice `#ff7d7d` / Bob `#8f8fff` | the two measurement stations; used when both chose the same setting | `performance_bruqner_4th_september.py` |
| Yellow `#ffffb3` / violet `#ffb3ff` | the pair used when they chose different settings | same |
| Same colour on both rings | same outcome | same |
| Yellow points | the entangled pair at the crossing of the two cones | `Lightcones.jpg` |
| 405 nm violet | the pump laser, the only light in the experiment you can see; the 810 nm photons are infrared, invisible | paper |
| White hairline landscapes on black | 8 Rooms visuals: histograms of the wave-plate clicks | 8 Rooms |
| Point cloud of the breadboard | Indeterminate Apparatus visuals; scan of the real setup | `setup-pointcloud.bin` |
| ~528 ms click | the half-wave-plate motors, used as a metronome | 8 Rooms |

**Content** (real, verified; see `docs/` for sources):

- Tagline candidates: "Pairs of entangled photons conduct a live audiovisual performance." / "What does entanglement sound like?"
- Next show: **16 October 2026, University of Innsbruck** (Dies Academicus / MIP Alumni Day), details to be announced.
- Pieces: *BruQner* (2024, two cathedral organs, after Bruckner's *Perger Präludium*); *8 Rooms* (2025, band, quantum random walk through 8 rooms); *Indeterminate Apparatus* (2025, band, the Bell value sets the tempo).
- Past shows: 4 & 6 Sept 2024 Mariendom Linz (Ars Electronica / antonbruckner2024, 3 000+ people); 25 Jan 2025 Vienna Ball of Sciences; 14 Apr 2025 Johns Hopkins University, Washington DC; 3 Jun 2025 Tech Forum Millstatt; 26 Aug 2025 European Forum Alpbach; 3 Oct 2025 CIVA Festival, Belvedere 21 Vienna; 19 Nov 2025 Zirkus des Wissens, JKU Linz. Also: EXPO 2025 Osaka, Austrian Pavilion (video, Apr–Oct 2025).
- Paper: "The Sound of Entanglement", arXiv:2509.08892 (2025).
- Documentary: "BruQner – The Sound of Entanglement" (weitblickfilm, 2025), youtube.com/watch?v=_mIf_OFN1YI

## Direction A — "Coincidence"

**Idea.** The landing page *is* the experiment running. Real premiere events
replay at their real cadence. Each event spawns a pair of rings, Alice on the
left and Bob on the right, coloured by the BruQner rule, expanding and fading
like the cathedral projections. A running Bell value accumulates underneath,
with the classical limit (2) and the quantum limit (2√2) marked on a single
hairline scale. It crosses 2 a few hundred events in, and the page notes it.

**Hero.** The rings, nothing else. The title sits small and quiet, split into
two halves, "The Sound of" under Alice and "Entanglement" under Bob.

**Type.** *Anybody* (variable width 50–150) for display. Before the first
coincidence, each letter's width is undetermined and drifts. On the first
event it "collapses" to a fixed width, correlated between the two halves.
*Hanken Grotesk* for text. Tabular figures for the S readout.

**Colour.** `#000000` ground, `#e9e6f2` text, the four BruQner pair colours for
data only, `#6b6875` for secondary text.

**Layout.** Left-aligned text column (max 62ch). The two halves of the screen
are the two stations, used structurally throughout: Alice-side content on the
left and Bob-side content on the right, where content genuinely comes in pairs.

## Direction B — "Nave"

**Idea.** The cathedral premiere as the emotional core: haze, cones of light,
a concert programme. A full-bleed WebGL scene of two light cones in drifting
fog (raymarched noise), red from the left and blue from the right, meeting in a
ring of yellow points. Replayed events modulate cone opening and brightness.
The pointer tilts the "crystal", which in SPDC really does change the cone
angle (phase matching).

**Type.** A light, high-contrast serif for display (*Cormorant Garamond* 300,
very large, tight tracking), *Figtree* for text. The pieces are listed as a
concert programme would list them: title, instrumentation, year.

**Colour.** `#000000`, haze `#c9ccd6`, pump violet `#7a5cff` (405 nm), Alice
`#ff7d7d`, Bob `#8f8fff`, photon yellow `#ffffb3`.

**Layout.** Full-bleed photographs between text passages; text centred only in
the hero, left-aligned everywhere else.

## Direction C — "Rooms"

**Idea.** Strictly white 1px lines on black, the 8 Rooms aesthetic. The hero is
a live perspective terrain: ridgelines built from replayed Ball-night events,
each click adding a transient to Alice's or Bob's line, accumulating into
mountains. The navigation is the site map drawn as a 3×3 room grid: eight rooms
(pages) plus the ninth, the exit. A small walker performs the actual quantum
random walk on that map (settings pick the axis, outcomes pick the direction),
and when it hits a wall, that door lights up.

**Type.** *Archivo* variable (wdth 62–125). Titles are expanded and light, echoing
the flat terrain. Text is in normal width.

**Colour.** Monochrome: `#000000`, `#ffffff`, and greys `#8a8a8a` / `#2a2a2a`.
Alice/Bob colours appear only as hairline tints on the walker's trail.

**Layout.** A strict grid of hairline boxes; the rule lines are the rooms.

## Direction D — "Apparatus"

**Idea.** The actual experiment, scanned: 160 000 points of the real breadboard
(three.js). Points start as unmeasured noise and coalesce into the apparatus,
as in the Indeterminate Apparatus visuals. The beam path is drawn as light over
it: violet 405 nm in, the crystal, then two 810 nm arms to Alice and Bob. The
page follows that path. Scrolling moves the camera from source to crystal to
the two stations to the detectors, and each stop holds one part of the site
(about, physics, pieces, shows).

**Type.** *Josefin Sans* (the existing "THE SOUND OF ENTANGLEMENT" wordmark
face, kept for continuity) for display and labels on the scene; *Newsreader*
for reading text.

**Colour.** `#000000`, breadboard grey `#3a3833`, component red `#e0463c`,
component blue `#3f6fd8`, Elliptec yellow `#e6b422`, beam violet `#8a5cff`.

**Layout.** Scene-driven; text blocks anchor beside the component they describe.

## Review against generic defaults

- **Dark with one neon accent?** No. Every direction's colour comes from the
  apparatus or the original visuals, and colour always encodes something
  (station, setting, outcome, wavelength).
- **Big number plus small label?** Only A has a prominent number, and it is the
  Bell value, the physical fact the whole project rests on. It sits on a scale
  with 2 and 2√2 marked, not floating in a hero.
- **Mono labels or all-caps eyebrows?** Not used. Readouts use tabular figures of
  the text face.
- **Numbered 01/02/03 sections?** Only where content is really a sequence: the
  beam path in D, and the dated show timeline.
- **Motion?** In each direction the one moving thing is the data-driven hero.
  Nothing else animates on its own.

---

# Round 2: Direction E, "Apparatus and archive"

Benjamin's feedback on round 1 (23 Sept 2026):
- **Loved D's point cloud of the experiment and its camera moves**, but it
  carried the whole page. Use it as the landing feature only; camera moves
  can reappear elsewhere where they earn it.
- **Loved A's photography**: `haze-over-case.jpg` and the Washington stage
  (`jhu-landscape.jpg`). Those two stay. The site needs many more photos.
- **C's Rooms terrain belongs on the 8 Rooms page.**
- More pages: people, individual pieces, shows with galleries.

E is built in the real stack (Astro, `src/`), with content collections, so
its structure and content carry over whatever the final look becomes.

## Tokens (see `src/styles/global.css`)

- Ground `#000`. Text `--paper #ebe7df` (warm, like haze in tungsten light).
  Secondary `--ash #99938a`. Hairlines `--graphite #2a2825`.
- Data colours only for data or physics: Alice `#ff7d7d`, Bob `#8f8fff`,
  photon `#ffffb3`, violet `#ffb3ff`, pump `#8a5cff` (405 nm).
- Type: Josefin Sans (display, UI; the existing wordmark face) light 300 for
  headings, 400 for UI, sentence case. Newsreader for reading text (19 px,
  line-height 1.6, max 62ch). The spaced capitals are reserved for the wordmark.
- 12-column grid, `--gutter` 16–56 px, max width 1440. Text is left-aligned.

## Principles

1. **One live visual per page, and it belongs to the page.** The point cloud
   and camera moves are on the landing page. Each piece page gets its own
   visual from its own real data: BruQner rings (premiere replay), 8 Rooms
   terrain and room map (Ball-night replay), Indeterminate Apparatus Bell
   metronome. Everything else is quiet.
2. **Photographs carry the rest.** Photos are big, dark and credited, and
   placed asymmetrically on the grid rather than in uniform card grids.
   Captions say what, where and who.
3. **Real data is labelled with where and when it was measured; simulated
   data says it is simulated.**
4. **No decoration.** Hairlines only where they separate information. No
   entrance animations. Motion only in the live visuals and in response to
   the visitor.
5. **Content lives in `src/content/`.** Components never hard-code facts
   that belong in content.

## Pages

| Route | Contents |
|---|---|
| `/` | Point-cloud hero with a pinned camera sequence (source → crystal → Alice & Bob → detectors), then photography-led sections: what this is, the three pieces, next show, recent shows, film, physics teaser, people teaser |
| `/pieces/` and `/pieces/[id]/` | Pieces index; piece pages with their own live visual, text, images, audio, video, performances of that piece |
| `/shows/` and `/shows/[id]/` | Upcoming, performances by year with covers, talks. Show pages with facts, text, Bell value, gallery with lightbox, video, links |
| `/physics/` | A layered explainer with an interactive Bell test (the simulator: quantum vs classical), the setup, SPDC cones and the clicks |
| `/people/` | The team, the musicians and the organists, with portraits and bios |
| `/publications/` | The paper, talks, films and press |
