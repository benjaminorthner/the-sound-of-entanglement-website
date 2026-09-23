# German version: style and terminology

The site is English by default (`/`) with a German version under `/de/`. There
is no automatic language detection; visitors switch with the header link.

**The German text is not a translation exercise.** It should read as if it
had been written in German by the team: natural sentence rhythm, German word
order, idiomatic phrasing. Restructure sentences, merge or split them, drop
English-isms, and change emphasis where German reads better. Facts must stay
exactly the same (dates, numbers, names, what was measured, what is claimed and
not claimed; see `physics.md`, "must NOT claim").

The team's own German texts are the best reference for tone:
- Press release BruQner 2024 (`research/drive_documents.md` §2.3)
- CIVA press text, German version (§2.1)
- OÖ Landespreis texts (§2.9, §2.11)
- German lecture scripts on the shared drive:
  `2025 06 - Millstatt/Presentation/TechForum Millstatt … (deutsch).docx`,
  `2024 09 - BruQner/Presentation/2024 09 06 - Präsentation.docx`,
  `2025 11 - Zirkus des Wissens (JKU)/2025 11 19 - JKU Zirkus des Wissens.docx`
  (extracted text: `research/txt/` in the scratchpad at the time; re-extract
  with python zipfile if needed)

## Conventions

- **Austrian German** (the project is Austrian): "Jänner", "heuer" only if
  natural, otherwise standard German. Dates like "4. September 2024".
- **Decimal comma**: S = 2,45; 2√2 ≈ 2,83. Use `num(lang, x)` from `src/i18n`.
- **Quotation marks**: „…" (and ‚…' inside).
- **Address**: avoid addressing the reader where possible. Where needed, use
  **„Sie"** (booking, contact, calls to action: „Schreiben Sie uns").
- **Gender-inclusive**: use the colon form sparingly and consistently
  („Musiker:innen", „Physiker:innen"), or neutral forms („das Publikum", „das
  Team"). Don't overdo it in every sentence.
- **Sentence case** headings, as in English (German nouns stay capitalised).
- Keep titles of works and the project in their original form: *The Sound of
  Entanglement*, *BruQner*, *8 Rooms*, *Indeterminate Apparatus*, *Sounds of
  Entanglement* (album), The Uncertain Question (band), *Perger Präludium*.
- Keep institutional names in their German form where one exists: TU Wien,
  Johannes Kepler Universität Linz, Universität Innsbruck, Anton Bruckner
  Privatuniversität Linz, Kunstuniversität Linz, Mariendom Linz, Wiener
  Rathaus, Europäisches Forum Alpbach, Deutsches Museum.
- Quoted documents (paper abstract, talk abstracts, press quotes) stay in their
  original language; add a short German lead-in if helpful.

## Glossary

| English | German |
|---|---|
| entanglement / entangled | Verschränkung / verschränkt |
| entangled photon pairs | verschränkte Photonenpaare |
| quantum conductor | Quanten-Dirigent |
| Bell test | Bell-Test |
| Bell value S | Bell-Wert S |
| classical limit (2) | klassische Grenze |
| quantum maximum 2√2 | quantenmechanisches Maximum |
| measurement setting | Messeinstellung |
| outcome, result | Messergebnis, Ergebnis |
| half-wave plate | Halbwellenplatte (λ/2-Platte) |
| polarising beam splitter | polarisierender Strahlteiler |
| single-photon detector | Einzelphotonendetektor |
| time tagger | Time Tagger (Zeitstempel-Elektronik) |
| coincidence | Koinzidenz |
| pump laser | Pumplaser |
| crystal (BBO) | Kristall (BBO) |
| spontaneous parametric down-conversion | spontane parametrische Fluoreszenz (SPDC) |
| light cone | Lichtkegel |
| lecture-performance | Lecture-Performance / Vortrag mit Performance |
| show, performance | Auftritt, Aufführung |
| premiere | Uraufführung (of a piece), Premiere |
| piece | Stück |
| random walk | Zufallsbewegung (Random Walk) |
| hidden variables | verborgene Variablen |
| local realism | lokaler Realismus |
| loophole | Schlupfloch |

## Where German text lives

- Interface strings: `src/i18n/ui.ts`
- Page copy: next to the English copy in the view or component, as
  `{ en, de }` pairs or `lang === 'de' ? … : …`
- Content entries: `src/content/de/<shows|pieces|people>/<id>.md` (same id as
  the English file; any field set there overrides the English one; the
  Markdown body replaces the English body)
- Photo alt texts: `src/i18n/photos.de.ts`, keyed by image file name

When you add or change English copy, change the German in the same commit.
