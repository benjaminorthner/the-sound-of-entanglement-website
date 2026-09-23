# Content guide: how to update the site

The site is maintained by agents working in this repo, not through a CMS. All
content lives in `src/content/` as Markdown or YAML with a typed schema
(`src/content.config.ts`). A wrong field fails the build with a clear error,
so run `npm run build` after every content change.

## Add or update a show

1. Create `src/content/shows/YYYY-MM-DD-short-name.md`. The filename becomes
   the URL: `/shows/YYYY-MM-DD-short-name/`.
2. Frontmatter (see existing files for complete examples):

```yaml
---
title: Name of the event            # e.g. "European Forum Alpbach 2025"
date: '2026-10-16'
time: '19:30'                       # optional, local time
venue: University of Innsbruck
city: Innsbruck
country: Austria
piece: 8-rooms                      # optional; id of a file in src/content/pieces/
kind: performance                   # performance | talk | exhibition
premiere: false
format: Lecture-performance in German   # optional
lineup: [Clemens Wenger, synthesizer, …]
lecture: [Johannes Kofler]
bell: 2.41                          # optional: Bell value measured that night (from the logs)
summary: One or two sentences for lists.
cover: { src: ../../assets/photos/<folder>/<file>.jpg, alt: …, credit: … }
gallery: [ { src: …, alt: …, credit: …, caption: … } ]
youtube: VIDEOID                    # optional
links: [ { label: …, url: … } ]
draft: false                        # true hides it everywhere
---
Body text in Markdown.
```

3. Upcoming shows appear automatically on the home page, the shows page and
   in the footer ("Next: …") while their `date` is in the future, and move to
   "past" afterwards. Nothing else needs to change.
4. Only publish confirmed facts. Unconfirmed dates stay `draft: true` (see
   `docs/open-questions.md`).
5. Update `docs/shows.md` in the same change.

## Add photos

1. Add entries to `scripts/assets_manifest.json`: `{"src": "<ROOT alias>/<glob>", "dest": "src/assets/photos/<show-folder>/<descriptive-name>.jpg"}`.
   Root aliases are `DRIVE` (the shared-drive extract), `HDRIVE` (Benjamin's
   Google Drive), `PAPER` and `THESIS`. Use `*` for awkward characters.
2. Run `python scripts/import_assets.py`. It resizes to at most 2400 px, applies
   EXIF rotation, strips metadata and skips files that already exist.
3. Reference the image from the content entry with its **alt text and credit**.
   There is no image without a credit (see `docs/assets.md` for credit lines).

Astro produces responsive WebP variants at build time. Don't put photos in
`public/` (they wouldn't be optimised).

## Add a piece

Create `src/content/pieces/<id>.md` (see `8-rooms.md`). `status: repertoire`
pieces appear prominently; `experimental` ones are listed more quietly.
`visual` picks the live visual on the piece page (`rings`, `terrain`,
`metronome` or `none`). A new visual type needs a component in
`src/components/visuals/` and a schema update.

## People

`src/content/people/<id>.md`. `group` is `team`, `musicians` or `organists`;
`order` sorts within a group. Bios are the Markdown body. Portraits go through
the asset import like any photo.

## Publications and press

`src/content/publications.yaml`: one list item per paper, talk, video, press
article or radio piece. `kind` decides where it is listed.

## Media files

Audio and video loops live in `public/media/` (they are served as-is): MP3 at
128 kbps, and MP4 (H.264, no audio track, 1280 px wide, CRF around 28) for loops.
Keep loops under about 3 MB. The encode commands are in the git history of
`public/media/`, or ask ffmpeg:
`ffmpeg -i in.mp4 -an -vf scale=1280:-2 -c:v libx264 -crf 28 -preset slow -pix_fmt yuv420p -movflags +faststart out.mp4`.

## Real measurement data

`src/data/*.json` are excerpts of real performance logs (format in
`docs/data.md`). To add a new show's data, extract from
`D:\Programming\BruQner\bruQner\logs\` and record the source, time and S in
the file.
