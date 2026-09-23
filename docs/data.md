# Measurement data and simulation

The website's signature idea is that its visuals run on **real photons**:
events measured by the experiment during actual shows. This file explains what
data exists, how it is encoded, and how to simulate it honestly when real data
isn't available.

## Event format

Every measurement is one coincidence (one detected photon pair), sent as

```
[aliceSetting, bobSetting, aliceOutcome, bobOutcome]
 ∈ {1,2}       ∈ {1,2}     ∈ {+1,−1}      ∈ {+1,−1}
```

+1 means transmitted (T) at the polarising beam splitter and −1 reflected (R).
Outcome pairs are called TT, TR, RT, RR.

## Where the real data lives (outside this repo)

All in `D:\Programming\BruQner\bruQner\logs\`. These files are gitignored in
that repo and exist only on Benjamin's machine.

| File | Content |
|---|---|
| `bruQner_main_performance_log.txt` (1.4 MB) | **BruQner premiere**, 2024-09-04 22:12–23:31: 18 077 measurements plus mode markers (`Q_all`, `Q_diagonal`, `C_diagonal`, `C_single`) |
| `bruQner_second_performance_log.txt` (1.8 MB) | BruQner, 2024-09-06 15:18–17:13: 23 648 measurements |
| `osc_log.txt` (30 MB) | 2025-01-20 → 2025-11-19: every 8 Rooms and Indeterminate Apparatus session, about 226k measurements, plus incoming Max messages (`/TUQ/S-VALUE/`, `/TUQ/Tempo/`, `/TUQ/Room/`, …) |

Line format: `2024-09-04 22:12:56,222 - INFO - Measurement [1, 2, -1, -1] sent to Clemens`

Also: `H:\My Drive\TU Wien\Project Works\TSOE\MAX\Used Data from BruQner Performance\BruQner_UA.json`
holds 127 events of the premiere *as the music saw them*:
`[section, aliceMotif 1–4, bobMotif 1–4, "Q"|"C", n]`.

Measured S per show (from logs and notebooks): premiere 2.34 (long Q_all
block; the paper quotes ≈ 2.45) · Ball night 25 Jan 2025: 2.62 · after
midnight: 2.46 · Washington 2.19 · Millstatt 2.32 · Alpbach 2.29 · CIVA 2.41 ·
JKU 2.51.

**Caveat:** real data has detector imbalance. For example, on the Ball night
RR is 50% and RT 11%. It is real but visibly skewed, and the S value still
violates 2.

**Not real:** `bruQner/data/Quantum_Music_2.8.csv` and `Quantum_Music_1.4.csv`
are *generated* backup streams (S = 2.76 and 1.42). If the site ever uses them,
label them as simulated.

## Excerpts prepared for the web

`design/mockups/assets/` (to move to `src/data/` or `public/data/` in the real
site):

| File | Source | Events | S |
|---|---|---|---|
| `bruqner_premiere_2024-09-04.json` | premiere, Q_all section from 23:00:10 | 2 000 | 2.22 |
| `8rooms_wissenschaftsball_2025-01-25.json` | Ball night from 21:07:50, metronome-locked (≈528 ms) | 2 000 | 2.55 |

```json
{"source":"8rooms_wissenschaftsball_2025-01-25","start":"2025-01-25T21:07:50.809","count":2000,"S":2.554,
 "encoding":"one hex digit per event = (aliceSetting-1)*8 + (bobSetting-1)*4 + outcome; outcome 0=TT 1=TR 2=RT 3=RR",
 "events":"3393b5133d7d…", "dt":[0,528,527,…]}
```

Decoding:

```js
const v = parseInt(ch, 16);
const aliceSetting = (v >> 3) + 1, bobSetting = ((v >> 2) & 1) + 1;
const [A, B] = [[1, 1], [1, -1], [-1, 1], [-1, -1]][v & 3];
```

A full session is about 60 KB of hex, plus timings (timings can be dropped
for metronome-locked sessions). To extract more, parse the log lines above.
Keep the extraction script in `scripts/` when you write it.

**Rule for the site:** whenever real data is shown, say where and when it was
measured ("Measured in the Mariendom Linz on 4 September 2024 at 23:00").
Whenever simulated data is shown, say so.

## Simulator (`src/lib/bell.ts`)

A client-side Bell test with the correct statistics:

- **quantum mode**: P(A, B | α, β) = (1 + A·B·V·cos 2(α − β)) / 4, using
  polarisation angles. Visibility V = 0.866 gives S ≈ 2.45. Each side's
  marginal is exactly 50/50.
- **classical mode**: a local-hidden-variable model (shared hidden
  polarisation λ, deterministic detectors). S = 2 at best.
- Settings: Alice 0°/45°, Bob 22.5°/−22.5° (polarisation angles; wave-plate
  angles are half).
- Verified: 400k events give S = 2.452 (theory 2.449) and 2.001 (theory 2.000).

`BellTest` keeps running correlation estimates, so `.S` can be shown live.
With few events, S fluctuates wildly between 0 and 4. That is the "Bell
Metronome" effect from *Indeterminate Apparatus*, and it can be used
deliberately.

Equivalent closed form in wave-plate angles (from the bruQner simulator):
Φ⁺: E(a,b) = V·cos(4(a − b)); P(TT) = P(RR) = (1+E)/4, P(TR) = P(RT) = (1−E)/4.

## Other data-derived facts

- Bell Metronome tempo (Indeterminate Apparatus), mean BPM against the
  short-window S, from the logs: S 0 → 42, 0.5 → 47, 1.0 → 56, 1.5 → 67,
  2.0 → 86, 2.5 → 101, 3.0 → 146, 3.5 → 219, 4.0 → 269.
- 8 Rooms cadence: median 528 ms between events (≈ 113.6 BPM).
- BruQner and Indeterminate Apparatus cadence: free-running, median gap about
  0.28–0.32 s.

## 3D scan of the setup

- Source: `D:\Programming\BruQner\bruQner\data\pointclouds\TSOE_Setup_pointcloud.pts`
  (641 980 points, ASCII `x y z 128 r g b`). Also as `.ply` on Benjamin's drive:
  `H:\My Drive\TU Wien\Project Works\TSOE\3D Models\Polycam\main setup\TSOE_Setup_pointcloud.ply`.
- Web version: `design/mockups/assets/setup-pointcloud.bin`, 160 000 random
  points, 2.4 MB. Layout: `uint32 N`, then `N×3 float32` xyz (centred; x,y
  normalised to [−1, 1]; z ∈ [−0.28, 0.28] is height), then `N×3 uint8` rgb.
- Seen from the top: black breadboard, the qutools source box (top), the white
  laser module, red rotation mounts and blue mirror mounts, yellow Elliptec
  driver boards, and fibre couplers at the bottom.
