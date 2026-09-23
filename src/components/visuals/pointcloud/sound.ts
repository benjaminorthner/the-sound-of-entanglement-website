/**
 * Optional sound for the landing hero, off until the visitor turns it on.
 * Deliberately not music (the pieces are Clemens Wenger's; nothing here should
 * pass for them): a soft hum so a site about sound isn't silent, and a faint
 * trace of each detection.
 *
 * - Hum: one low A (55 Hz) and a few of its natural overtones, each breathing
 *   slowly at its own rate, slightly detuned between left and right. No
 *   melody, no chords that change.
 * - Detection: the hum blooms for a moment on each side (Alice left, Bob
 *   right): a few higher overtones of the same A swell and fade. Every pair
 *   adds to the bloom, so in fast forward the hum simply gets brighter.
 * - The volume follows the scroll: it fades out as the hero leaves the screen.
 *
 * Everything is synthesised with Web Audio; no files are loaded.
 */

const F0 = 55;
/** overtone number and level of the hum */
const PARTIALS: [number, number][] = [
  [1, 0.5],
  [2, 1],
  [3, 0.5],
  [4, 0.4],
  [6, 0.2],
  [8, 0.08],
];
/** overtones that bloom at a detection */
const BLOOM: [number, number][] = [
  [5, 0.5],
  [6, 0.7],
  [8, 0.5],
  [10, 0.25],
];
const BLOOM_TAU = 0.7; // seconds

export class HeroSound {
  private ctx?: AudioContext;
  private out?: GainNode; // on/off
  private level?: GainNode; // scroll
  private bloom: { gain: GainNode; env: number; at: number }[] = [];
  private idle?: ReturnType<typeof setTimeout>;
  private hidden = false;
  private scroll = 1;
  on = false;

  /** Must be called from a user gesture (browsers block audio otherwise). */
  async enable() {
    if (!this.ctx) this.build();
    this.on = true;
    await this.wake();
    this.ramp(this.out!.gain, 1, 3);
  }

  disable() {
    this.on = false;
    if (this.out) this.ramp(this.out.gain, 0, 1);
    this.sleepSoon(1.2);
  }

  /** Pause while the tab is hidden. */
  pause(hidden: boolean) {
    this.hidden = hidden;
    if (!this.ctx || !this.on) return;
    if (hidden) void this.ctx.suspend();
    else if (this.scroll > 0) void this.wake();
  }

  /** 1 while the hero fills the screen, falling to 0 as it scrolls away. */
  setLevel(x: number) {
    this.scroll = x;
    if (!this.ctx || !this.level) return;
    this.level.gain.setTargetAtTime(x * x, this.ctx.currentTime, 0.08);
    if (!this.on) return;
    if (x > 0) void this.wake();
    else this.sleepSoon(0.6);
  }

  private async wake() {
    clearTimeout(this.idle);
    if (this.ctx && !this.hidden && this.ctx.state !== 'running') await this.ctx.resume();
  }

  /** Suspend the context once it has gone quiet, to save the CPU. */
  private sleepSoon(seconds: number) {
    clearTimeout(this.idle);
    this.idle = setTimeout(() => void this.ctx?.suspend(), seconds * 1000);
  }

  private ramp(param: AudioParam, to: number, seconds: number) {
    const t = this.ctx!.currentTime;
    param.cancelScheduledValues(t);
    param.setValueAtTime(param.value, t);
    param.linearRampToValueAtTime(to, t + seconds);
  }

  private build() {
    const ctx = (this.ctx = new AudioContext());
    this.level = ctx.createGain();
    this.level.gain.value = this.scroll * this.scroll;
    this.level.connect(ctx.destination);
    this.out = ctx.createGain();
    this.out.gain.value = 0;
    this.out.connect(this.level);

    const lp = ctx.createBiquadFilter();
    lp.type = 'lowpass';
    lp.frequency.value = 900;
    lp.Q.value = 0.3;
    const hum = ctx.createGain();
    hum.gain.value = 0.018;
    lp.connect(hum).connect(this.out);

    const tone = (f: number, pan: number, level: number, into: AudioNode) => {
      const osc = ctx.createOscillator();
      osc.frequency.value = f;
      const g = ctx.createGain();
      g.gain.value = level;
      const p = ctx.createStereoPanner();
      p.pan.value = pan;
      osc.connect(g).connect(p).connect(into);
      osc.start();
      return g;
    };

    for (const [n, level] of PARTIALS) {
      for (const pan of [-0.6, 0.6]) {
        // slightly detuned sides beat slowly; each overtone breathes at its own rate
        const g = tone(F0 * n + pan * 0.25 * Math.sqrt(n), pan, level * 0.6, lp);
        const lfo = ctx.createOscillator();
        lfo.frequency.value = 0.02 + Math.random() * 0.05;
        const depth = ctx.createGain();
        depth.gain.value = level * 0.4;
        lfo.connect(depth).connect(g.gain);
        lfo.start(ctx.currentTime + Math.random() * 10);
      }
    }

    // the bloom: one group of higher overtones per side, silent until a detection
    for (const pan of [-0.75, 0.75]) {
      const gain = ctx.createGain();
      gain.gain.value = 0;
      gain.connect(this.out);
      for (const [n, level] of BLOOM) tone(F0 * n + pan * 0.4, pan, level * 0.007, gain);
      this.bloom.push({ gain, env: 0, at: 0 });
    }
  }

  /** Both detectors click. */
  detect() {
    if (!this.on || !this.ctx || this.ctx.state !== 'running') return;
    const t = this.ctx.currentTime;
    for (const b of this.bloom) {
      // every detection adds to what is left of the previous blooms
      b.env = Math.min(3, b.env * Math.exp(-(t - b.at) / BLOOM_TAU) + 1);
      b.at = t;
      const peak = Math.sqrt(b.env); // many blooms in a row get brighter, not louder in proportion
      b.gain.gain.cancelScheduledValues(t);
      b.gain.gain.setValueAtTime(b.gain.gain.value, t);
      b.gain.gain.linearRampToValueAtTime(peak, t + 0.12);
      b.gain.gain.setTargetAtTime(0, t + 0.12, BLOOM_TAU);
    }
  }
}
