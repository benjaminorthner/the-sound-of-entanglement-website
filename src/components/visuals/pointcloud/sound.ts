/**
 * Optional sound for the landing hero, off until the visitor turns it on.
 * A sonification sketch of the pairs being drawn, not a recording of a piece:
 *
 * - When both detectors click, each side strikes a bell: Alice on the left,
 *   Bob on the right, an octave higher. The note is the measured outcome
 *   (+1 = D, −1 = E), so equal outcomes sound as octaves and different
 *   outcomes as a seventh or a ninth. With entangled photons the octaves win.
 * - The measurement setting colours the bell: the first setting is brighter,
 *   the second darker.
 * - When a wave plate turns to a new setting, a soft motor click.
 *
 * Everything is synthesised with Web Audio; no files are loaded.
 */
import type { ReplayEvent } from '../../../lib/replay';

const NOTE = { plus: 293.66, minus: 329.63 }; // D4, E4
const hz = (out: number, octave: number) => (out === 1 ? NOTE.plus : NOTE.minus) * octave;

export class HeroSound {
  private ctx?: AudioContext;
  private out?: GainNode;
  private last = { a: -1, b: -1 };
  on = false;

  /** Must be called from a user gesture (browsers block audio otherwise). */
  async enable() {
    if (!this.ctx) {
      this.ctx = new AudioContext();
      const comp = this.ctx.createDynamicsCompressor();
      comp.threshold.value = -18;
      comp.ratio.value = 3;
      this.out = this.ctx.createGain();
      this.out.gain.value = 0;
      this.out.connect(comp).connect(this.ctx.destination);
    }
    await this.ctx.resume();
    this.on = true;
    this.fade(0.5);
  }

  disable() {
    this.on = false;
    this.fade(0);
  }

  /** Pause while the hero is off screen or the tab is hidden. */
  pause(paused: boolean) {
    if (!this.ctx || !this.on) return;
    if (paused) void this.ctx.suspend();
    else void this.ctx.resume();
  }

  private fade(to: number) {
    if (!this.ctx || !this.out) return;
    const t = this.ctx.currentTime;
    this.out.gain.cancelScheduledValues(t);
    this.out.gain.setValueAtTime(this.out.gain.value, t);
    this.out.gain.linearRampToValueAtTime(to, t + 0.4);
  }

  /** The wave plates turn to the settings of the next pair. */
  turn(e: ReplayEvent) {
    if (!this.on || !this.ctx) return;
    if (e.a !== this.last.a) this.click(-0.6);
    if (e.b !== this.last.b) this.click(0.6, 0.03);
    this.last = { a: e.a, b: e.b };
  }

  /** Both detectors click. */
  detect(e: ReplayEvent) {
    if (!this.on || !this.ctx) return;
    this.bell(hz(e.A, 1), -0.6, e.a === 0 ? 3.2 : 1.6);
    this.bell(hz(e.B, 2), 0.6, e.b === 0 ? 3.2 : 1.6);
  }

  /** A soft FM bell: inharmonic modulator, index and amplitude decaying. */
  private bell(f: number, pan: number, bright: number) {
    const ctx = this.ctx!;
    const t = ctx.currentTime + 0.01;
    const car = ctx.createOscillator();
    const mod = ctx.createOscillator();
    const modGain = ctx.createGain();
    const amp = ctx.createGain();
    const p = ctx.createStereoPanner();
    car.frequency.value = f;
    mod.frequency.value = f * 1.4;
    modGain.gain.setValueAtTime(f * bright, t);
    modGain.gain.exponentialRampToValueAtTime(f * 0.05, t + 1.6);
    amp.gain.setValueAtTime(0.0001, t);
    amp.gain.exponentialRampToValueAtTime(0.22, t + 0.006);
    amp.gain.exponentialRampToValueAtTime(0.0001, t + 3.2);
    p.pan.value = pan;
    mod.connect(modGain).connect(car.frequency);
    car.connect(amp).connect(p).connect(this.out!);
    car.start(t);
    mod.start(t);
    car.stop(t + 3.3);
    mod.stop(t + 3.3);
  }

  /** A short filtered noise tick, like the motor of a rotation mount. */
  private click(pan: number, delay = 0) {
    const ctx = this.ctx!;
    const t = ctx.currentTime + 0.01 + delay;
    const len = Math.floor(ctx.sampleRate * 0.04);
    const buf = ctx.createBuffer(1, len, ctx.sampleRate);
    const d = buf.getChannelData(0);
    for (let i = 0; i < len; i++) d[i] = (Math.random() * 2 - 1) * Math.exp(-i / (len * 0.12));
    const src = ctx.createBufferSource();
    src.buffer = buf;
    const bp = ctx.createBiquadFilter();
    bp.type = 'bandpass';
    bp.frequency.value = 2400;
    bp.Q.value = 1.2;
    const g = ctx.createGain();
    g.gain.value = 0.12;
    const p = ctx.createStereoPanner();
    p.pan.value = pan;
    src.connect(bp).connect(g).connect(p).connect(this.out!);
    src.start(t);
  }
}
