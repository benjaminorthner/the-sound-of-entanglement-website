/**
 * The landing hero: a 3D scan of the real experiment (160 000 points),
 * settling from "unmeasured" noise into the apparatus, with the beam path
 * drawn as light and real premiere events flashing the detectors.
 *
 * The camera follows a pinned scroll sequence through four stops:
 *   0 wide shot · 1 source and crystal · 2 Alice & Bob arms · 3 top-down
 * `progress` (0..3) is set from outside by the hero's scroll handler.
 */
import * as THREE from 'three';
import type { ReplayEvent } from '../../../lib/replay';

/* ------------------------------------------------------------------
   Geometry of the board, in point-cloud coordinates.
   x: -1 (left) .. 1 (right), y: -1 (front, detectors) .. 1 (back),
   z: height above the board. Traced from the top-down scan and the
   paper's labelled beam-path figure (SetupLabelledBeamPaths.png).
------------------------------------------------------------------ */
const px = (u: number, v: number, z = -0.09) => new THREE.Vector3(u / 450 - 1, 1 - v / 450, z);
const CRYSTAL = px(498, 337, 0.07);
const PUMP = [px(690, 330, 0.07), px(600, 336, 0.07), CRYSTAL];
const ALICE = {
  common: [CRYSTAL, px(468, 584), px(366, 591), px(366, 726), px(297, 647)],
  plus: [px(297, 647), px(239, 568)],
  minus: [px(297, 647), px(239, 684)],
};
const BOB = {
  common: [CRYSTAL, px(598, 591), px(610, 726), px(685, 644)],
  plus: [px(685, 644), px(737, 579)],
  minus: [px(685, 644), px(737, 673)],
};
const DET = {
  aPlus: ALICE.plus[1],
  aMinus: ALICE.minus[1],
  bPlus: BOB.plus[1],
  bMinus: BOB.minus[1],
};

/** Camera stops. `off` shifts the view so the board sits right of the text
 *  column; `shade` darkens the text side; `gain` is overall brightness. */
interface Stop { pos: number[]; tgt: number[]; off: number; shade: number; gain: number }
const STOPS_WIDE: Stop[] = [
  { pos: [-0.35, -2.2, 1.45], tgt: [-0.62, -0.02, -0.14], off: 0.0, shade: 0.55, gain: 1.0 }, // wide
  { pos: [0.62, -1.0, 0.95], tgt: [0.16, 0.2, -0.05], off: 0.18, shade: 0.9, gain: 0.95 },  // source + crystal
  { pos: [0.02, -2.05, 1.05], tgt: [0.0, -0.32, -0.15], off: 0.18, shade: 0.9, gain: 0.95 }, // Alice & Bob
  { pos: [0.0, -0.45, 2.7], tgt: [0.0, 0.02, -0.2], off: 0.18, shade: 0.9, gain: 0.9 },     // top-down
];
const STOPS_NARROW: Stop[] = [
  { pos: [0, -3.0, 2.35], tgt: [0, -1.0, -0.1], off: 0, shade: 0.4, gain: 1.0 },
  { pos: [0.4, -1.4, 1.6], tgt: [0.1, -0.45, -0.05], off: 0, shade: 0.5, gain: 0.95 },
  { pos: [0.0, -2.5, 1.6], tgt: [0.0, -1.05, -0.15], off: 0, shade: 0.5, gain: 0.95 },
  { pos: [0.0, -0.95, 3.6], tgt: [0.0, -0.6, -0.2], off: 0, shade: 0.5, gain: 0.9 },
];

const COL = {
  alice: new THREE.Color('#ff7d7d'),
  bob: new THREE.Color('#8f8fff'),
  yellow: new THREE.Color('#ffffb3'),
  violet: new THREE.Color('#ffb3ff'),
};

/** BruQner colour rule: same setting → red/blue, different → yellow/violet.
 *  Alice's colour follows her outcome; Bob shares it when the outcomes agree. */
function colours(e: ReplayEvent): [THREE.Color, THREE.Color] {
  const group = e.a === e.b ? [COL.alice, COL.bob] : [COL.yellow, COL.violet];
  const ca = e.A === 1 ? group[0] : group[1];
  const cb = e.A === e.B ? ca : ca === group[0] ? group[1] : group[0];
  return [ca, cb];
}

export interface PointCloudScene {
  /** Scroll position along the camera path, 0..3. */
  setProgress(p: number): void;
  /** A measured pair: send pulses down both arms and flash the detectors. */
  pulse(e: ReplayEvent): void;
  setRunning(on: boolean): void;
  dispose(): void;
}

export async function createScene(canvas: HTMLCanvasElement, dataUrl: string): Promise<PointCloudScene> {
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: false, alpha: false, powerPreference: 'high-performance' });
  renderer.setPixelRatio(Math.min(2, devicePixelRatio));
  renderer.setClearColor(0x000000, 1);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(42, 1, 0.01, 50);
  camera.up.set(0, 0, 1);

  /* --- the scan --- */
  const buf = await fetch(dataUrl).then((r) => r.arrayBuffer());
  const n = new Uint32Array(buf, 0, 1)[0];
  const pos = new Float32Array(buf, 4, n * 3);
  const rgb = new Uint8Array(buf, 4 + n * 12, n * 3);

  const start = new Float32Array(n * 3);
  const delay = new Float32Array(n);
  for (let i = 0; i < n; i++) {
    // unmeasured: a loose cloud around the board
    const r = 1.1 + Math.random() * 1.2;
    const th = Math.random() * Math.PI * 2;
    const ph = Math.acos(2 * Math.random() - 1);
    start[3 * i] = r * Math.sin(ph) * Math.cos(th);
    start[3 * i + 1] = r * Math.sin(ph) * Math.sin(th);
    start[3 * i + 2] = r * Math.cos(ph) * 0.6 + 0.3;
    // settle outward from the crystal
    const dx = pos[3 * i] - CRYSTAL.x;
    const dy = pos[3 * i + 1] - CRYSTAL.y;
    delay[i] = Math.min(1, Math.hypot(dx, dy) / 1.9) * 0.55 + Math.random() * 0.25;
  }

  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  geo.setAttribute('aStart', new THREE.BufferAttribute(start, 3));
  geo.setAttribute('aDelay', new THREE.BufferAttribute(delay, 1));
  geo.setAttribute('color', new THREE.BufferAttribute(rgb, 3, true));

  const shade = {
    uRes: { value: new THREE.Vector2(1, 1) },
    uEdge: { value: 0.6 },
    uShade: { value: 0.5 },
    uGain: { value: 1.0 },
  };
  const SHADE_GLSL = /* glsl */ `
    uniform vec2 uRes;
    uniform float uEdge, uShade, uGain;
    vec3 shadeSide(vec3 c) {
      float side = smoothstep(uEdge - 0.2, uEdge + 0.04, gl_FragCoord.x / uRes.x);
      float l = dot(c, vec3(0.299, 0.587, 0.114));
      return mix(vec3(l), c, 0.2 + 0.8 * side) * uGain * mix(1.0 - uShade, 1.0, side);
    }`;
  const flash = () => ({ value: new THREE.Vector4(0, 0, 0.0035, 0) });
  const uniforms = {
    uTime: { value: 0 },
    uSettle: { value: 0 },
    uSize: { value: 4.6 },
    uPR: { value: renderer.getPixelRatio() },
    uFlashA: flash(),
    uFlashB: flash(),
    uColA: { value: new THREE.Color() },
    uColB: { value: new THREE.Color() },
    ...shade,
  };

  const cloud = new THREE.Points(
    geo,
    new THREE.ShaderMaterial({
      uniforms,
      vertexColors: true,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      vertexShader: /* glsl */ `
        attribute vec3 aStart;
        attribute float aDelay;
        uniform float uTime, uSettle, uSize, uPR;
        uniform vec4 uFlashA, uFlashB;
        uniform vec3 uColA, uColB;
        varying vec3 vColor;
        void main() {
          float k = clamp(uSettle * 1.8 - aDelay, 0.0, 1.0);
          float e = k * k * (3.0 - 2.0 * k);
          vec3 p = mix(aStart, position, e);
          float id = float(gl_VertexID);
          // while unmeasured, every point trembles
          p += (1.0 - e) * 0.03 * vec3(sin(uTime * 1.3 + id), cos(uTime * 1.1 + id * 1.7), sin(uTime * 0.9 + id * 0.3));
          // saturate the scan so the components glow against the board
          vec3 c = color;
          float l = dot(c, vec3(0.299, 0.587, 0.114));
          c = max(mix(vec3(l), c, 2.1), 0.0) * 1.9;
          c = mix(vec3(0.55, 0.5, 0.9) * 0.25, c, e);
          vec2 dA = position.xy - uFlashA.xy;
          vec2 dB = position.xy - uFlashB.xy;
          float gA = uFlashA.w * exp(-dot(dA, dA) / uFlashA.z) * e;
          float gB = uFlashB.w * exp(-dot(dB, dB) / uFlashB.z) * e;
          vColor = c + uColA * gA * 2.4 + uColB * gB * 2.4;
          vec4 mv = modelViewMatrix * vec4(p, 1.0);
          gl_Position = projectionMatrix * mv;
          gl_PointSize = clamp(uSize * uPR * (1.0 + (gA + gB) * 1.4) / -mv.z, 1.0, 9.0 * uPR);
        }`,
      fragmentShader: /* glsl */ `
        varying vec3 vColor;
        ${SHADE_GLSL}
        void main() {
          float d = length(gl_PointCoord - 0.5);
          float a = smoothstep(0.5, 0.05, d) * 0.62;
          gl_FragColor = vec4(shadeSide(vColor), a);
        }`,
    }),
  );
  scene.add(cloud);

  /* --- the beams, as dense glowing points so they read as light --- */
  const B = { pos: [] as number[], t: [] as number[], arm: [] as number[], branch: [] as number[] };
  function sample(path: THREE.Vector3[], arm: number, branch: number, t0: number, t1: number) {
    const lens: number[] = [];
    let total = 0;
    for (let i = 1; i < path.length; i++) {
      const l = path[i].distanceTo(path[i - 1]);
      lens.push(l);
      total += l;
    }
    const count = Math.ceil(total * 900);
    for (let s = 0; s <= count; s++) {
      let d = (s / count) * total;
      let i = 0;
      while (i < lens.length - 1 && d > lens[i]) {
        d -= lens[i];
        i++;
      }
      const p = path[i].clone().lerp(path[i + 1], Math.min(1, d / lens[i]));
      B.pos.push(p.x, p.y, p.z);
      B.t.push(t0 + (t1 - t0) * (s / count));
      B.arm.push(arm);
      B.branch.push(branch);
    }
  }
  sample(PUMP, 2, 0, 0, 1);
  sample(ALICE.common, 0, 0, 0, 0.8);
  sample(ALICE.plus, 0, 1, 0.8, 1);
  sample(ALICE.minus, 0, -1, 0.8, 1);
  sample(BOB.common, 1, 0, 0, 0.8);
  sample(BOB.plus, 1, 1, 0.8, 1);
  sample(BOB.minus, 1, -1, 0.8, 1);

  const bgeo = new THREE.BufferGeometry();
  bgeo.setAttribute('position', new THREE.Float32BufferAttribute(B.pos, 3));
  bgeo.setAttribute('aT', new THREE.Float32BufferAttribute(B.t, 1));
  bgeo.setAttribute('aArm', new THREE.Float32BufferAttribute(B.arm, 1));
  bgeo.setAttribute('aBranch', new THREE.Float32BufferAttribute(B.branch, 1));
  const bu = {
    uTime: uniforms.uTime,
    uSettle: uniforms.uSettle,
    uPR: uniforms.uPR,
    uPulse: { value: new THREE.Vector4(-1, -1, 1, 1) }, // aliceT, bobT, aliceOut, bobOut
    ...shade,
  };
  const beams = new THREE.Points(
    bgeo,
    new THREE.ShaderMaterial({
      uniforms: bu,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      vertexShader: /* glsl */ `
        attribute float aT, aArm, aBranch;
        uniform float uTime, uSettle, uPR;
        uniform vec4 uPulse;
        varying vec3 vColor;
        varying float vA;
        void main() {
          vec3 violet = vec3(0.54, 0.36, 1.0);
          vec3 red = vec3(1.0, 0.42, 0.40);
          vec3 blue = vec3(0.52, 0.56, 1.0);
          vec3 c = aArm < 0.5 ? red : (aArm < 1.5 ? blue : violet);
          float base = aArm > 1.5 ? 0.8 + 0.1 * sin(uTime * 7.0) : 0.42;
          if (aBranch != 0.0) base *= 0.45;
          float t = aArm < 0.5 ? uPulse.x : uPulse.y;
          float o = aArm < 0.5 ? uPulse.z : uPulse.w;
          float onPath = (aBranch == 0.0 || aBranch == o) ? 1.0 : 0.0;
          float pulse = (aArm > 1.5 || t < 0.0) ? 0.0 : onPath * exp(-pow(aT - t, 2.0) / 0.0004);
          float appear = smoothstep(0.55, 0.95, uSettle);
          vA = (base + pulse * 0.55) * appear;
          vColor = c;
          vec4 mv = modelViewMatrix * vec4(position, 1.0);
          gl_Position = projectionMatrix * mv;
          gl_PointSize = clamp((5.0 + pulse * 3.0) * uPR / -mv.z, 1.5, 10.0 * uPR);
        }`,
      fragmentShader: /* glsl */ `
        varying vec3 vColor;
        varying float vA;
        ${SHADE_GLSL}
        void main() {
          float d = length(gl_PointCoord - 0.5);
          gl_FragColor = vec4(shadeSide(vColor), smoothstep(0.5, 0.0, d) * vA);
        }`,
    }),
  );
  scene.add(beams);

  /* --- events: a pair leaves the crystal, runs down both arms, clicks --- */
  type Pulse = { t0: number; out: number; col: THREE.Color; fired: boolean } | null;
  const pulses: { a: Pulse; b: Pulse } = { a: null, b: null };
  const TRAVEL = 230; // ms from crystal to detector (on stage it is nanoseconds)
  function fire(key: 'a' | 'b', p: NonNullable<Pulse>) {
    p.fired = true;
    const det = key === 'a' ? (p.out === 1 ? DET.aPlus : DET.aMinus) : p.out === 1 ? DET.bPlus : DET.bMinus;
    (key === 'a' ? uniforms.uFlashA : uniforms.uFlashB).value.set(det.x, det.y, 0.0035, 1.0);
    (key === 'a' ? uniforms.uColA : uniforms.uColB).value.copy(p.col);
  }

  /* --- camera --- */
  let stops = STOPS_WIDE;
  let P = stops.map((s) => new THREE.Vector3(...s.pos));
  let T = stops.map((s) => new THREE.Vector3(...s.tgt));
  const camPos = P[0].clone();
  const camTgt = T[0].clone();
  const wantPos = new THREE.Vector3();
  const wantTgt = new THREE.Vector3();
  let camOff = 0;
  let progress = 0;
  let narrow = false;
  let mouseX = 0;
  let mouseY = 0;
  const onPointer = (ev: PointerEvent) => {
    mouseX = ev.clientX / innerWidth - 0.5;
    mouseY = ev.clientY / innerHeight - 0.5;
  };
  addEventListener('pointermove', onPointer, { passive: true });

  function resize() {
    const w = canvas.clientWidth || innerWidth;
    const h = canvas.clientHeight || innerHeight;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    narrow = w < 760;
    camera.fov = narrow ? 58 : 42;
    stops = narrow ? STOPS_NARROW : STOPS_WIDE;
    P = stops.map((s) => new THREE.Vector3(...s.pos));
    T = stops.map((s) => new THREE.Vector3(...s.tgt));
    renderer.getDrawingBufferSize(shade.uRes.value);
    camera.updateProjectionMatrix();
  }
  const ro = new ResizeObserver(resize);
  ro.observe(canvas);
  resize();

  const born = performance.now();
  let last = born;
  let running = true;
  let raf = 0;

  function frame(now: number) {
    raf = 0;
    const dt = Math.min(0.05, (now - last) / 1000);
    last = now;
    const t = (now - born) / 1000;
    uniforms.uTime.value = t;
    uniforms.uSettle.value = Math.min(1, t / 4.2);

    const s = Math.max(0, Math.min(stops.length - 1, progress));
    const i = Math.min(P.length - 2, Math.floor(s));
    const f = s - i;
    const ef = f * f * (3 - 2 * f);
    wantPos.copy(P[i]).lerp(P[i + 1], ef);
    wantTgt.copy(T[i]).lerp(T[i + 1], ef);
    wantPos.x += mouseX * 0.12;
    wantPos.z += -mouseY * 0.08;
    const k = 1 - Math.pow(0.02, dt);
    camPos.lerp(wantPos, k);
    camTgt.lerp(wantTgt, k);
    camera.position.copy(camPos);
    camera.lookAt(camTgt);
    const lerp = (key: 'off' | 'shade' | 'gain') => stops[i][key] + (stops[i + 1][key] - stops[i][key]) * ef;
    camOff += ((narrow ? 0 : lerp('off')) - camOff) * k;
    const w = canvas.clientWidth;
    const h = canvas.clientHeight;
    camera.setViewOffset(w, h, -camOff * w, 0, w, h);
    shade.uEdge.value = narrow ? 2.0 : 0.6;
    shade.uShade.value = lerp('shade');
    shade.uGain.value = lerp('gain');

    // pulses and detector flashes
    const fa = uniforms.uFlashA.value;
    const fb = uniforms.uFlashB.value;
    fa.w *= Math.pow(0.08, dt);
    fb.w *= Math.pow(0.08, dt);
    const pv = bu.uPulse.value;
    (['a', 'b'] as const).forEach((key, idx) => {
      const p = pulses[key];
      if (!p) {
        if (idx === 0) pv.x = -1;
        else pv.y = -1;
        return;
      }
      const u = (now - p.t0) / TRAVEL;
      if (idx === 0) {
        pv.x = Math.min(u, 1.2);
        pv.z = p.out;
      } else {
        pv.y = Math.min(u, 1.2);
        pv.w = p.out;
      }
      if (u >= 1 && !p.fired) fire(key, p);
      if (u > 1.25) pulses[key] = null;
    });

    renderer.render(scene, camera);
    if (running) raf = requestAnimationFrame(frame);
  }
  raf = requestAnimationFrame(frame);

  return {
    setProgress(p) {
      progress = p;
    },
    pulse(e) {
      if (!running) return;
      const [ca, cb] = colours(e);
      const now = performance.now();
      // a pair that has not arrived yet still clicks before the next one leaves
      (['a', 'b'] as const).forEach((key) => {
        const p = pulses[key];
        if (p && !p.fired) fire(key, p);
      });
      pulses.a = { t0: now, out: e.A, col: ca, fired: false };
      pulses.b = { t0: now, out: e.B, col: cb, fired: false };
    },
    setRunning(on) {
      if (on === running) return;
      running = on;
      if (on && !raf) {
        last = performance.now();
        raf = requestAnimationFrame(frame);
      }
    },
    dispose() {
      running = false;
      if (raf) cancelAnimationFrame(raf);
      ro.disconnect();
      removeEventListener('pointermove', onPointer);
      renderer.dispose();
    },
  };
}
