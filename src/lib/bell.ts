/**
 * Client-side Bell-test simulator.
 *
 * Reproduces the statistics of the real experiment: polarisation-entangled
 * photon pairs in the state |Φ+⟩ = (|HH⟩ + |VV⟩)/√2, two measurement
 * stations (Alice, Bob), each choosing randomly between two polariser
 * settings, each photon ending up in one of two detectors (+1 / −1).
 *
 * "quantum" mode samples from the quantum-mechanical joint distribution,
 *   P(A, B | α, β) = (1 + A·B·V·cos 2(α − β)) / 4,
 * where V is the visibility of the source. V ≈ 0.87 gives S ≈ 2.45, the
 * value measured at the BruQner premiere (Linz, 4 Sept 2024).
 *
 * "classical" mode uses a local-hidden-variable model: every pair carries a
 * shared hidden polarisation λ, and each detector answers deterministically
 * from λ and its own setting. No such model can exceed S = 2.
 *
 * Angles are polarisation angles in degrees (half-wave-plate angle × 2).
 */

export type Setting = 0 | 1; // index into a Station's two settings
export type Outcome = 1 | -1;
export type Mode = 'quantum' | 'classical';

export interface Event {
  /** Monotonic event index. */
  n: number;
  a: Setting;
  b: Setting;
  A: Outcome;
  B: Outcome;
}

export interface BellConfig {
  mode: Mode;
  /** Source visibility, 0..1 (only used in quantum mode). */
  visibility: number;
  /** Alice's two polarisation angles in degrees. */
  alice: [number, number];
  /** Bob's two polarisation angles in degrees. */
  bob: [number, number];
}

/** Standard CHSH-optimal settings for |Φ+⟩ with S = |E11 + E12 + E21 − E22|. */
export const CHSH_SETTINGS = {
  alice: [0, 45] as [number, number],
  bob: [22.5, -22.5] as [number, number],
};

export const DEFAULT_CONFIG: BellConfig = {
  mode: 'quantum',
  visibility: 0.866,
  ...CHSH_SETTINGS,
};

const DEG = Math.PI / 180;

/** Uniform random number in [0, 1), from the platform CSPRNG where available. */
function rand(): number {
  const c = globalThis.crypto;
  if (c?.getRandomValues) {
    const buf = new Uint32Array(1);
    c.getRandomValues(buf);
    return buf[0] / 2 ** 32;
  }
  return Math.random();
}

/** Theoretical correlation E(α, β) for the given mode. */
export function correlation(alpha: number, beta: number, cfg: BellConfig): number {
  const d = (alpha - beta) * DEG;
  if (cfg.mode === 'quantum') return cfg.visibility * Math.cos(2 * d);
  // Local hidden variable model with sign(cos 2(θ − λ)) detectors:
  // E = 1 − 4|Δ|/π, with Δ folded into [0, π/2].
  let delta = Math.abs(d) % Math.PI;
  if (delta > Math.PI / 2) delta = Math.PI - delta;
  return 1 - (4 * delta) / Math.PI;
}

/** Theoretical S value for a configuration. */
export function theoreticalS(cfg: BellConfig): number {
  const [a1, a2] = cfg.alice;
  const [b1, b2] = cfg.bob;
  return Math.abs(
    correlation(a1, b1, cfg) +
      correlation(a1, b2, cfg) +
      correlation(a2, b1, cfg) -
      correlation(a2, b2, cfg),
  );
}

function sampleQuantum(alpha: number, beta: number, cfg: BellConfig): [Outcome, Outcome] {
  const A: Outcome = rand() < 0.5 ? 1 : -1;
  // P(B = A | A) = (1 + E) / 2
  const E = correlation(alpha, beta, cfg);
  const same = rand() < (1 + E) / 2;
  return [A, same ? A : ((-A) as Outcome)];
}

function sampleClassical(alpha: number, beta: number): [Outcome, Outcome] {
  const lambda = rand() * Math.PI; // shared hidden polarisation
  const A: Outcome = Math.cos(2 * (alpha * DEG - lambda)) >= 0 ? 1 : -1;
  const B: Outcome = Math.cos(2 * (beta * DEG - lambda)) >= 0 ? 1 : -1;
  return [A, B];
}

/**
 * Stateful Bell test: produces events one at a time and keeps running
 * correlation estimates, exactly like the performance software does.
 */
export class BellTest {
  cfg: BellConfig;
  private n = 0;
  /** counts[a][b] = number of events with settings (a, b) */
  private counts = [
    [0, 0],
    [0, 0],
  ];
  /** sums[a][b] = Σ A·B over events with settings (a, b) */
  private sums = [
    [0, 0],
    [0, 0],
  ];

  constructor(cfg: Partial<BellConfig> = {}) {
    this.cfg = { ...DEFAULT_CONFIG, ...cfg };
  }

  /** Measure one entangled pair. */
  next(): Event {
    const a: Setting = rand() < 0.5 ? 0 : 1;
    const b: Setting = rand() < 0.5 ? 0 : 1;
    const alpha = this.cfg.alice[a];
    const beta = this.cfg.bob[b];
    const [A, B] =
      this.cfg.mode === 'quantum' ? sampleQuantum(alpha, beta, this.cfg) : sampleClassical(alpha, beta);
    this.counts[a][b] += 1;
    this.sums[a][b] += A * B;
    return { n: this.n++, a, b, A, B };
  }

  /** Estimated correlation E_ab from the events so far (0 if none yet). */
  E(a: Setting, b: Setting): number {
    const c = this.counts[a][b];
    return c ? this.sums[a][b] / c : 0;
  }

  /** Estimated S value from the events so far. */
  get S(): number {
    return Math.abs(this.E(0, 0) + this.E(0, 1) + this.E(1, 0) - this.E(1, 1));
  }

  get count(): number {
    return this.n;
  }

  reset(): void {
    this.n = 0;
    this.counts = [
      [0, 0],
      [0, 0],
    ];
    this.sums = [
      [0, 0],
      [0, 0],
    ];
  }
}
