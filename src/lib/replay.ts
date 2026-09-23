/**
 * Replay of real measurement events recorded during performances.
 * Data files live in src/data/ (see docs/data.md for provenance and format).
 *
 * Client usage:
 *   import premiere from '../data/bruqner_premiere_2024-09-04.json';
 *   const events = decodeExcerpt(premiere);
 *   const player = new Replay(events, (e) => draw(e));
 *   player.start();
 */
import type { Event, Outcome, Setting } from './bell';

export interface Excerpt {
  source: string;
  start: string; // ISO local time of the first event
  count: number;
  S: number;
  events: string; // one hex digit per event
  dt: number[]; // ms since previous event
}

export interface ReplayEvent extends Event {
  /** Milliseconds since the previous event, as measured. */
  dt: number;
  /** Wall-clock time of the measurement, local to the venue. */
  at: Date;
}

const OUTCOMES: [Outcome, Outcome][] = [
  [1, 1],
  [1, -1],
  [-1, 1],
  [-1, -1],
];

export function decodeExcerpt(x: Excerpt): ReplayEvent[] {
  const t0 = new Date(x.start).getTime();
  let t = t0;
  return Array.from(x.events, (ch, n) => {
    const v = parseInt(ch, 16);
    const [A, B] = OUTCOMES[v & 3];
    t += x.dt[n] ?? 0;
    return {
      n,
      a: (v >> 3) as Setting,
      b: ((v >> 2) & 1) as Setting,
      A,
      B,
      dt: x.dt[n] ?? 0,
      at: new Date(t),
    };
  });
}

/** Running CHSH estimate, same convention as BellTest: S = |E11 + E12 + E21 − E22|. */
export class RunningS {
  private c = [0, 0, 0, 0];
  private s = [0, 0, 0, 0];
  n = 0;
  add(e: Event) {
    const k = e.a * 2 + e.b;
    this.c[k] += 1;
    this.s[k] += e.A * e.B;
    this.n += 1;
  }
  E(k: number) {
    return this.c[k] ? this.s[k] / this.c[k] : 0;
  }
  get S() {
    return Math.abs(this.E(0) + this.E(1) + this.E(2) - this.E(3));
  }
  /** Rough 1σ uncertainty of S (binomial errors on the four correlators). */
  get sigma() {
    let v = 0;
    for (let k = 0; k < 4; k++) if (this.c[k]) v += (1 - this.E(k) ** 2) / this.c[k];
    return Math.sqrt(v);
  }
}

/** Plays events at their recorded pace. Loops by default. */
export class Replay {
  private i = 0;
  private timer: ReturnType<typeof setTimeout> | undefined;
  speed = 1;
  constructor(
    private events: ReplayEvent[],
    private onEvent: (e: ReplayEvent) => void,
    private loop = true,
  ) {}
  start() {
    this.stop();
    const tick = () => {
      if (this.i >= this.events.length) {
        if (!this.loop) return;
        this.i = 0;
      }
      const e = this.events[this.i++];
      this.onEvent(e);
      const next = this.events[this.i]?.dt ?? 500;
      this.timer = setTimeout(tick, Math.max(40, next / this.speed));
    };
    tick();
  }
  stop() {
    if (this.timer) clearTimeout(this.timer);
    this.timer = undefined;
  }
  get running() {
    return this.timer !== undefined;
  }
  /** Jump to event index without emitting. */
  seek(i: number) {
    this.i = Math.max(0, Math.min(this.events.length - 1, i));
  }
}
