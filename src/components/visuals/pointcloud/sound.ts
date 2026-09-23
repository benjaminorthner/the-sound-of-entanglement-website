/**
 * Optional sound for the landing hero, off until the visitor turns it on.
 * Deliberately not music (the pieces are Clemens Wenger's; nothing here should
 * pass for them): a soft hum so a site about sound isn't silent, and a faint
 * trace of each detection.
 *
 * - Hum: one low A (55 Hz) and a few of its natural overtones, each breathing
 *   slowly at its own rate, slightly detuned between left and right. No
 *   melody, no chords that change.
 * - Detection: a faint high glint (an overtone of the same A), Alice left and
 *   Bob right. Rate-limited, so fast forward doesn't turn into a rain of pings.
 *
 * Everything is synthesised with Web Audio; no files are loaded.
 */

const F0 = 55;
/** overtone number and level */
const PARTIALS: [number, number][] = [
  [1, 0.5],
  [2, 1],
  [3, 0.5],
  [4, 0.4],
  [6, 0.2],
  [8, 0.08],
];
const GLINT = F0 * 24; // 1320 Hz

export class HeroSound {
  private ctx?: AudioContext;
  private out?: GainNode;
  private lastGlint = -9;
  on = false;

  /** Must be called from a user gesture (browsers block audio otherwise). */
  async enable() {
    if (!this.ctx) this.build();
    await this.ctx!.resume();
    this.on = true;
    this.fade(1, 3);
  }

  disable() {
    this.on = false;
    this.fade(0, 1);
  }

  /** Pause while the hero is off screen or the tab is hidden. */
  pause(paused: boolean) {
    if (!this.ctx || !this.on) return;
    if (paused) void this.ctx.suspend();
    else void this.ctx.resume();
  }

  private build() {
    const ctx = (this.ctx = new AudioContext());
    this.out = ctx.createGain();
    this.out.gain.value = 0;
    this.out.connect(ctx.destination);

    const lp = ctx.createBiquadFilter();
    lp.type = 'lowpass';
    lp.frequency.value = 900;
    lp.Q.value = 0.3;
    const hum = ctx.createGain();
    hum.gain.value = 0.018;
    lp.connect(hum).connect(this.out);

    for (const [n, level] of PARTIALS) {
      for (const pan of [-0.6, 0.6]) {
        const osc = ctx.createOscillator();
        osc.frequency.value = F0 * n + pan * 0.25 * Math.sqrt(n); // slow beating between the sides
        const g = ctx.createGain();
        g.gain.value = level * 0.6;
        // each overtone breathes at its own slow rate
        const lfo = ctx.createOscillator();
        lfo.frequency.value = 0.02 + Math.random() * 0.05;
        const depth = ctx.createGain();
        depth.gain.value = level * 0.4;
        lfo.connect(depth).connect(g.gain);
        const p = ctx.createStereoPanner();
        p.pan.value = pan;
        osc.connect(g).connect(p).connect(lp);
        osc.start();
        lfo.start(ctx.currentTime + Math.random() * 10);
      }
    }
  }

  private fade(to: number, seconds: number) {
    if (!this.ctx || !this.out) return;
    const t = this.ctx.currentTime;
    this.out.gain.cancelScheduledValues(t);
    this.out.gain.setValueAtTime(this.out.gain.value, t);
    this.out.gain.linearRampToValueAtTime(to, t + seconds);
  }

  /** Both detectors click. */
  detect() {
    if (!this.on || !this.ctx) return;
    const t = this.ctx.currentTime + 0.01;
    if (t - this.lastGlint < 0.35) return;
    this.lastGlint = t;
    this.glint(-0.7, t);
    this.glint(0.7, t + 0.004);
  }

  private glint(pan: number, t: number) {
    const ctx = this.ctx!;
    const osc = ctx.createOscillator();
    osc.frequency.value = GLINT;
    const g = ctx.createGain();
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(0.012, t + 0.008);
    g.gain.exponentialRampToValueAtTime(0.0001, t + 1.4);
    const p = ctx.createStereoPanner();
    p.pan.value = pan;
    osc.connect(g).connect(p).connect(this.out!);
    osc.start(t);
    osc.stop(t + 1.5);
  }
}
