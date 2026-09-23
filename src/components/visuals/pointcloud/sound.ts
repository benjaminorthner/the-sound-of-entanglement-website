/**
 * Optional sound for the landing hero, off until the visitor turns it on.
 * Deliberately not music (the pieces are Clemens Wenger's; nothing here should
 * pass for them): a quiet room tone so a site about sound isn't silent, and a
 * faint trace of each detection.
 *
 * - Room: slowly breathing filtered noise, decorrelated left and right, with
 *   a low rumble and a little air on top. No pitches.
 * - Detection: two soft ticks, Alice left and Bob right, and the room opens up
 *   for a moment, like the glow on the board.
 *
 * Everything is synthesised with Web Audio; no files are loaded.
 */

const noise = (ctx: BaseAudioContext, seconds: number, brown = false) => {
  const len = Math.floor(ctx.sampleRate * seconds);
  const buf = ctx.createBuffer(1, len, ctx.sampleRate);
  const d = buf.getChannelData(0);
  let last = 0;
  for (let i = 0; i < len; i++) {
    const w = Math.random() * 2 - 1;
    last = brown ? (last + 0.02 * w) / 1.02 : w;
    d[i] = brown ? last * 3.5 : w;
  }
  return buf;
};

export class HeroSound {
  private ctx?: AudioContext;
  private out?: GainNode;
  private room?: BiquadFilterNode[];
  private tickBuf?: AudioBuffer;
  private lastSwell = -9;
  on = false;

  /** Must be called from a user gesture (browsers block audio otherwise). */
  async enable() {
    if (!this.ctx) this.build();
    await this.ctx!.resume();
    this.on = true;
    this.fade(1, 2.5);
  }

  disable() {
    this.on = false;
    this.fade(0, 0.8);
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
    this.tickBuf = noise(ctx, 0.03);
    this.room = [];

    // the room: two decorrelated beds of brown noise, one per side
    for (const pan of [-0.7, 0.7]) {
      const src = ctx.createBufferSource();
      src.buffer = noise(ctx, 7.3 + pan, true);
      src.loop = true;
      const lp = ctx.createBiquadFilter();
      lp.type = 'lowpass';
      lp.frequency.value = 560;
      lp.Q.value = 0.4;
      const g = ctx.createGain();
      g.gain.value = 0.065;
      const p = ctx.createStereoPanner();
      p.pan.value = pan;
      // slow breathing of the filter, a different rate on each side
      const lfo = ctx.createOscillator();
      lfo.frequency.value = pan < 0 ? 0.043 : 0.057;
      const depth = ctx.createGain();
      depth.gain.value = 140;
      lfo.connect(depth).connect(lp.frequency);
      src.connect(lp).connect(g).connect(p).connect(this.out);
      src.start();
      lfo.start();
      this.room.push(lp);
    }

    // a little air on top, very quiet
    const air = ctx.createBufferSource();
    air.buffer = noise(ctx, 5.1);
    air.loop = true;
    const hp = ctx.createBiquadFilter();
    hp.type = 'bandpass';
    hp.frequency.value = 7000;
    hp.Q.value = 0.5;
    const ag = ctx.createGain();
    ag.gain.value = 0.006;
    air.connect(hp).connect(ag).connect(this.out);
    air.start();
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
    this.tick(-0.8, t);
    this.tick(0.8, t);
    // the room opens up briefly (at most every couple of seconds, so fast forward doesn't churn)
    if (t - this.lastSwell < 2) return;
    this.lastSwell = t;
    for (const lp of this.room!) {
      lp.Q.cancelScheduledValues(t);
      lp.Q.setValueAtTime(lp.Q.value, t);
      lp.Q.linearRampToValueAtTime(1.6, t + 0.08);
      lp.Q.exponentialRampToValueAtTime(0.4, t + 1.8);
    }
  }

  private tick(pan: number, t: number) {
    const ctx = this.ctx!;
    const src = ctx.createBufferSource();
    src.buffer = this.tickBuf!;
    const bp = ctx.createBiquadFilter();
    bp.type = 'bandpass';
    bp.frequency.value = 3200;
    bp.Q.value = 0.9;
    const g = ctx.createGain();
    g.gain.setValueAtTime(0.035, t);
    g.gain.exponentialRampToValueAtTime(0.0001, t + 0.025);
    const p = ctx.createStereoPanner();
    p.pan.value = pan;
    src.connect(bp).connect(g).connect(p).connect(this.out!);
    src.start(t);
    src.stop(t + 0.03);
  }
}
