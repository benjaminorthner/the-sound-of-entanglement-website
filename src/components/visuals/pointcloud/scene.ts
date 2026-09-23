/**
 * Landing hero: a 3D scan of the real experiment (about 475 000 points),
 * settling from "unmeasured" noise into the apparatus. Photon pairs measured
 * at the premiere are drawn one at a time:
 *
 *   pump pulse (405 nm) → crystal → a linked pair leaves → both photons pass
 *   their half-wave plate (turned to the measured setting) → beam splitter →
 *   both detectors click at the same instant (ring + outcome colour + ±1).
 *
 * Geometry: waypoints were registered from the paper's labelled beam-path
 * figure (SetupLabelledBeamPaths.png) onto component positions measured in
 * the scan (red/yellow clusters), and made mirror-symmetric about the
 * setup's axis x = 0.085, as the real setup is.
 *
 * Coordinates (scan, normalised): x −1 (left) .. 1 (right), y −1 (front,
 * detectors) .. 1 (back), z height; board surface ≈ −0.23. The beam height
 * (0.095) was measured from elevation slices of the scan: the centres of the
 * rotation-mount apertures (z ≈ 0.10–0.11) and mirror faces (z ≈ 0.09).
 */
import * as THREE from 'three';
import type { ReplayEvent } from '../../../lib/replay';

/* ------------------------------------------------------------------ geometry */

const AXIS = 0.085;
const ZB = 0.095; // beam height: optical centre of the mounts, measured in the scan
const v = (x: number, y: number, z = ZB) => new THREE.Vector3(x, y, z);
const CRYSTAL = v(AXIS, 0.3);
const PUMP = [v(0.52, 0.31), v(0.3, 0.305), CRYSTAL];

/** One measurement arm; side = −1 for Alice (left), +1 for Bob (right). */
function arm(side: -1 | 1) {
  const X = (d: number) => AXIS + side * d;
  const pbs = v(X(0.46), -0.53);
  return {
    common: [CRYSTAL, v(X(0.03), -0.37), v(X(0.29), -0.375), v(X(0.29), -0.76), pbs],
    plus: [pbs, v(X(0.6), -0.34)],
    minus: [pbs, v(X(0.62), -0.63)],
    hwp: v(X(0.29), -0.5),
  };
}
const ALICE = arm(-1);
const BOB = arm(1);

/** Parts of the setup that matter at each camera stop (x, y, radius in the
 *  board plane). Everything else fades to monochrome as the camera arrives. */
const both = (d: number, y: number, r: number) => [
  [AXIS - d, y, r],
  [AXIS + d, y, r],
];
const FOCUS = {
  // 1: laser, crystal and the source box
  source: [[0.4, 0.3, 0.3], [0.2, 0.3, 0.2], [AXIS, 0.3, 0.12]],
  // 2: the arms: central mirrors, side mirrors, half-wave plates, bottom mirrors
  arms: [...both(0.03, -0.37, 0.07), ...both(0.29, -0.37, 0.09), ...both(0.285, -0.5, 0.11), ...both(0.285, -0.78, 0.1)],
  // 3: beam splitters and fibre couplers (the detectors)
  detectors: [...both(0.46, -0.53, 0.08), ...both(0.6, -0.34, 0.09), ...both(0.62, -0.63, 0.09)],
};
const focusUniform = (list: number[][], n: number) => ({
  value: Array.from({ length: n }, (_, i) => new THREE.Vector3(...(list[i] ?? [9, 9, 0]))),
});

/** Polarisation angles (degrees) of the two settings, for the plate glyph. */
const SETTING_ANGLE = { a: [0, 45], b: [22.5, -22.5] };

/* ------------------------------------------------------------------ colours */

const COL = {
  alice: new THREE.Color('#ff7d7d'),
  bob: new THREE.Color('#8f8fff'),
  yellow: new THREE.Color('#ffffb3'),
  violet: new THREE.Color('#ffb3ff'),
  pump: new THREE.Color('#8a5cff'),
  photon: new THREE.Color('#fff3e6'),
};

/** BruQner colour rule: same setting → red/blue, different → yellow/violet.
 *  Alice's colour follows her outcome; Bob shares it when the outcomes agree. */
export function outcomeColours(e: Pick<ReplayEvent, 'a' | 'b' | 'A' | 'B'>): [THREE.Color, THREE.Color] {
  const group = e.a === e.b ? [COL.alice, COL.bob] : [COL.yellow, COL.violet];
  const ca = e.A === 1 ? group[0] : group[1];
  const cb = e.A === e.B ? ca : ca === group[0] ? group[1] : group[0];
  return [ca, cb];
}

/* ------------------------------------------------------------------ polylines */

class Path {
  lens: number[] = [];
  total = 0;
  constructor(public pts: THREE.Vector3[]) {
    for (let i = 1; i < pts.length; i++) {
      const l = pts[i].distanceTo(pts[i - 1]);
      this.lens.push(l);
      this.total += l;
    }
  }
  at(t: number, out = new THREE.Vector3()) {
    let d = Math.min(1, Math.max(0, t)) * this.total;
    let i = 0;
    while (i < this.lens.length - 1 && d > this.lens[i]) d -= this.lens[i++];
    return out.copy(this.pts[i]).lerp(this.pts[i + 1], Math.min(1, d / this.lens[i]));
  }
}
/** Full path of one photon for a given outcome: common part, then its branch. */
const fullPath = (a: ReturnType<typeof arm>, out: 1 | -1) =>
  new Path([...a.common, (out === 1 ? a.plus : a.minus)[1]]);

/* ------------------------------------------------------------------ timing (ms) */

const T = {
  turn: 380, // wave plates turn to the new setting (motors click)
  pump: 520, // violet pulse reaches the crystal
  flight: 1500, // pair travels to the detectors
  after: 1200, // detection ring, labels, glow
  rest: 250,
};
const CYCLE = T.pump + T.flight + T.after + T.rest;

/* ------------------------------------------------------------------ camera */

interface Stop {
  tgt: [number, number, number];
  az: number; // degrees, 0 = from the front (−y)
  el: number; // degrees above the board
  dist: number;
  off: number; // horizontal view offset (fraction of width): pushes the board right of the text
  shade: number; // darkening of the text side
}
const STOPS_WIDE: Stop[] = [
  { tgt: [0.12, -0.24, -0.18], az: -16, el: 40, dist: 3.25, off: 0.2, shade: 0.8 }, // establishing
  { tgt: [0.2, 0.02, -0.1], az: 22, el: 42, dist: 2.3, off: 0.2, shade: 0.88 }, // source & crystal
  { tgt: [0.085, -0.45, -0.12], az: 0, el: 50, dist: 2.7, off: 0.2, shade: 0.88 }, // Alice & Bob
  { tgt: [0.085, -0.3, -0.2], az: 0, el: 86, dist: 3.5, off: 0.2, shade: 0.88 }, // top-down
];
const STOPS_NARROW: Stop[] = [
  { tgt: [0.1, -0.3, -0.18], az: -10, el: 48, dist: 3.6, off: 0, shade: 0.35 },
  { tgt: [0.18, 0.0, -0.1], az: 20, el: 44, dist: 2.9, off: 0, shade: 0.5 },
  { tgt: [0.085, -0.45, -0.12], az: 0, el: 52, dist: 3.4, off: 0, shade: 0.5 },
  { tgt: [0.085, -0.3, -0.2], az: 0, el: 86, dist: 4.1, off: 0, shade: 0.5 },
];
const camFrom = (s: Stop, out = new THREE.Vector3()) => {
  const az = (s.az * Math.PI) / 180;
  const el = (s.el * Math.PI) / 180;
  return out.set(
    s.tgt[0] + s.dist * Math.cos(el) * Math.sin(az),
    s.tgt[1] - s.dist * Math.cos(el) * Math.cos(az),
    s.tgt[2] + s.dist * Math.sin(el),
  );
};

/* ------------------------------------------------------------------ public API */

export interface DetectInfo {
  e: ReplayEvent;
  colours: [string, string];
}
export interface PointCloudScene {
  /** Scroll position along the camera path, 0..3. */
  setProgress(p: number): void;
  /** Draw one measured pair. Resolves when the next pair may start: when
   *  this one has finished, or after a short gap in fast forward. */
  play(e: ReplayEvent): Promise<void>;
  /** Playback speed of the pairs: 1 = one slowed-down pair at a time. */
  setSpeed(k: number): void;
  /** Resolves once the scan has settled and pairs can be drawn. */
  ready: Promise<void>;
  setRunning(on: boolean): void;
  dispose(): void;
}
export interface SceneOptions {
  /** Element (positioned) that receives the small ±1 labels. */
  overlay?: HTMLElement;
  /** Called at the moment both detectors click. */
  onDetect?: (info: DetectInfo) => void;
}

/* ------------------------------------------------------------------ loader */

async function loadCloud(url: string) {
  const buf = await fetch(url).then((r) => {
    if (!r.ok) throw new Error(`${url}: ${r.status}`);
    return r.arrayBuffer();
  });
  const head = new DataView(buf);
  const magic = String.fromCharCode(...new Uint8Array(buf, 0, 4));
  if (magic !== 'TSOE' || head.getUint32(4, true) !== 2) throw new Error('unexpected point-cloud format');
  const n = head.getUint32(8, true);
  const lo = new Float32Array(buf, 12, 3);
  const hi = new Float32Array(buf, 24, 3);
  const q = new Uint16Array(buf, 36, n * 3);
  const rgb = new Uint8Array(buf, 36 + n * 6, n * 3);
  const pos = new Float32Array(n * 3);
  for (let i = 0; i < n * 3; i++) {
    const k = i % 3;
    pos[i] = lo[k] + (q[i] / 65535) * (hi[k] - lo[k]);
  }
  return { n, pos, rgb };
}

/* ------------------------------------------------------------------ scene */

export async function createScene(
  canvas: HTMLCanvasElement,
  dataUrl: string,
  opts: SceneOptions = {},
): Promise<PointCloudScene> {
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: false, alpha: false, powerPreference: 'high-performance' });
  renderer.setPixelRatio(Math.min(2, devicePixelRatio));
  renderer.setClearColor(0x000000, 1);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(40, 1, 0.01, 50);
  camera.up.set(0, 0, 1);

  const { n, pos, rgb } = await loadCloud(dataUrl);

  // "Unmeasured" start positions and per-point settle delays (outward from the crystal).
  const start = new Float32Array(n * 3);
  const delay = new Float32Array(n);
  for (let i = 0; i < n; i++) {
    const r = 1.1 + Math.random() * 1.2;
    const th = Math.random() * Math.PI * 2;
    const ph = Math.acos(2 * Math.random() - 1);
    start[3 * i] = r * Math.sin(ph) * Math.cos(th);
    start[3 * i + 1] = r * Math.sin(ph) * Math.sin(th);
    start[3 * i + 2] = r * Math.cos(ph) * 0.6 + 0.3;
    const d = Math.hypot(pos[3 * i] - CRYSTAL.x, pos[3 * i + 1] - CRYSTAL.y);
    delay[i] = Math.min(1, d / 1.9) * 0.55 + Math.random() * 0.25;
  }

  const shade = {
    uRes: { value: new THREE.Vector2(1, 1) },
    uEdge: { value: 0.6 },
    uShade: { value: 0.5 },
    /** 0: text on the left (wide screens), 1: text below the board (narrow screens). */
    uVertical: { value: 0 },
  };
  const SHADE_GLSL = /* glsl */ `
    uniform vec2 uRes;
    uniform float uEdge, uShade, uVertical;
    // Keeps the hero text legible: the cloud is quieter where the text sits.
    // Wide screens: the left side. Narrow screens: the lower part, below the board.
    vec3 shadeSide(vec3 c) {
      float sideX = smoothstep(uEdge - 0.22, uEdge + 0.04, gl_FragCoord.x / uRes.x);
      float sideY = smoothstep(0.34, 0.52, gl_FragCoord.y / uRes.y);
      float side = mix(sideX, sideY, uVertical);
      float l = dot(c, vec3(0.299, 0.587, 0.114));
      return mix(vec3(l), c, 0.25 + 0.75 * side) * mix(1.0 - uShade, 1.0, side);
    }`;

  const common = {
    uTime: { value: 0 },
    uSettle: { value: 0 },
    uPR: { value: renderer.getPixelRatio() },
    uViewH: { value: 900 },
    uCamDist: { value: 2.4 },
    ...shade,
  };

  /* --- the scan: opaque round points, so objects read as solid --- */
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  geo.setAttribute('aStart', new THREE.BufferAttribute(start, 3));
  geo.setAttribute('aDelay', new THREE.BufferAttribute(delay, 1));
  geo.setAttribute('color', new THREE.BufferAttribute(rgb, 3, true));
  const cloudU = {
    ...common,
    uFlashA: { value: new THREE.Vector4(0, 0, 0.006, 0) },
    uFlashB: { value: new THREE.Vector4(0, 0, 0.006, 0) },
    uColA: { value: new THREE.Color() },
    uColB: { value: new THREE.Color() },
    // ripple across the board when a pair is born: crystal x, y, age (s), strength
    uRipple: { value: new THREE.Vector4(CRYSTAL.x, CRYSTAL.y, 99, 0) },
    // weight of each stop's focus (wide, source, arms, detectors), from scroll
    uFocusW: { value: new THREE.Vector4(1, 0, 0, 0) },
    uFocusSrc: focusUniform(FOCUS.source, 3),
    uFocusArm: focusUniform(FOCUS.arms, 8),
    uFocusDet: focusUniform(FOCUS.detectors, 6),
  };
  const cloud = new THREE.Points(
    geo,
    new THREE.ShaderMaterial({
      uniforms: cloudU,
      vertexColors: true,
      transparent: false,
      depthWrite: true,
      depthTest: true,
      vertexShader: /* glsl */ `
        attribute vec3 aStart;
        attribute float aDelay;
        uniform float uTime, uSettle, uPR, uViewH, uCamDist;
        uniform vec4 uFlashA, uFlashB;
        uniform vec3 uColA, uColB;
        uniform vec4 uRipple;
        uniform vec4 uFocusW;
        uniform vec3 uFocusSrc[3];
        uniform vec3 uFocusArm[8];
        uniform vec3 uFocusDet[6];
        varying vec3 vColor;

        float inFocus(vec3 f, vec3 p) {
          // soft-edged cylinder above the board
          float d = length(p.xy - f.xy);
          return (1.0 - smoothstep(f.z * 0.7, f.z, d)) * smoothstep(-0.215, -0.19, p.z);
        }

        void main() {
          float k = clamp(uSettle * 1.8 - aDelay, 0.0, 1.0);
          float e = k * k * (3.0 - 2.0 * k);
          vec3 p = mix(aStart, position, e);
          float id = float(gl_VertexID);
          p += (1.0 - e) * 0.03 * vec3(sin(uTime * 1.3 + id), cos(uTime * 1.1 + id * 1.7), sin(uTime * 0.9 + id * 0.3));

          // Tone the scan: lift the dark capture, add saturation, keep the
          // flat board and baseplate quiet so the components read as objects.
          vec3 c = pow(color, vec3(0.8));
          float l = dot(c, vec3(0.299, 0.587, 0.114));
          c = max(mix(vec3(l), c, 1.35), 0.0) * 1.25;
          float plane = 1.0 - smoothstep(-0.225, -0.2, position.z);
          c *= mix(1.0, 0.38, plane);

          // The breadboard breathes: a slow swell of light and a sub-pixel lift,
          // plus a faint ring spreading from the crystal each time a pair is born.
          // Only the board moves; the components stay still.
          vec2 b = position.xy;
          float swell = sin(b.x * 6.0 + uTime * 0.31) * sin(b.y * 5.0 - uTime * 0.23)
                      + 0.6 * sin((b.x - b.y) * 11.0 + uTime * 0.47);
          float rd = length(b - uRipple.xy) - uRipple.z * 0.55;
          float ring = uRipple.w * exp(-rd * rd / 0.0035) * exp(-uRipple.z * 1.1);
          p.z += plane * e * (0.0022 * swell + 0.004 * ring);
          c *= 1.0 + plane * (0.09 * swell + 0.55 * ring);

          // focus: the parts that matter at this stop keep their colour,
          // everything else fades to a dim monochrome
          float mSrc = 0.0, mArm = 0.0, mDet = 0.0;
          for (int i = 0; i < 3; i++) mSrc = max(mSrc, inFocus(uFocusSrc[i], position));
          for (int i = 0; i < 8; i++) mArm = max(mArm, inFocus(uFocusArm[i], position));
          for (int i = 0; i < 6; i++) mDet = max(mDet, inFocus(uFocusDet[i], position));
          float focus = uFocusW.x + uFocusW.y * mSrc + uFocusW.z * mArm + uFocusW.w * mDet;
          float grey = dot(c, vec3(0.299, 0.587, 0.114));
          c = mix(vec3(grey) * 0.42, c * 1.12, clamp(focus, 0.0, 1.0));
          c = mix(vec3(0.5, 0.45, 0.85) * 0.22, c, e); // unmeasured points are faintly violet

          // detector glow after a click
          vec2 dA = position.xy - uFlashA.xy;
          vec2 dB = position.xy - uFlashB.xy;
          float gA = uFlashA.w * exp(-dot(dA, dA) / uFlashA.z) * e;
          float gB = uFlashB.w * exp(-dot(dB, dB) / uFlashB.z) * e;
          c = mix(c, uColA * 1.4, clamp(gA, 0.0, 0.85));
          c = mix(c, uColB * 1.4, clamp(gB, 0.0, 0.85));

          vec4 mv = modelViewMatrix * vec4(p, 1.0);
          float depth = -mv.z;
          // depth fog: the far side of the board recedes
          float fog = smoothstep(uCamDist + 1.1, uCamDist - 0.7, depth);
          vColor = c * mix(0.28, 1.0, fog);
          gl_Position = projectionMatrix * mv;
          // world-space size, so density stays even at every zoom
          float px = 0.0042 * projectionMatrix[1][1] * uViewH * 0.5 / depth;
          gl_PointSize = clamp(px, 1.0, 7.0 * uPR);
        }`,
      fragmentShader: /* glsl */ `
        varying vec3 vColor;
        ${SHADE_GLSL}
        void main() {
          vec2 q = gl_PointCoord - 0.5;
          if (dot(q, q) > 0.25) discard;
          gl_FragColor = vec4(shadeSide(vColor), 1.0);
        }`,
    }),
  );
  scene.add(cloud);

  /* --- beams: faint streams of points along the paths, lit where a photon is --- */
  const B = { pos: [] as number[], s: [] as number[], arm: [] as number[], branch: [] as number[] };
  const addStream = (path: Path, armId: number, branch: number, s0: number, s1: number, density = 1400) => {
    const count = Math.ceil(path.total * density);
    const p = new THREE.Vector3();
    for (let i = 0; i <= count; i++) {
      const t = i / count;
      path.at(t, p);
      const g = () => (Math.random() + Math.random() + Math.random() - 1.5) * 0.0045;
      B.pos.push(p.x + g(), p.y + g(), p.z + g());
      B.s.push(s0 + (s1 - s0) * t);
      B.arm.push(armId);
      B.branch.push(branch);
    }
  };
  // s runs 0..1 along each arm; the branch after the beam splitter continues it.
  const armLen = (a: ReturnType<typeof arm>) => new Path(a.common).total + new Path(a.plus).total;
  for (const [a, id] of [
    [ALICE, 0],
    [BOB, 1],
  ] as const) {
    const cLen = new Path(a.common).total;
    const f = cLen / armLen(a);
    addStream(new Path(a.common), id, 0, 0, f);
    addStream(new Path(a.plus), id, 1, f, 1);
    addStream(new Path(a.minus), id, -1, f, 1);
  }
  addStream(new Path(PUMP), 2, 0, 0, 1, 1800);

  const bgeo = new THREE.BufferGeometry();
  bgeo.setAttribute('position', new THREE.Float32BufferAttribute(B.pos, 3));
  bgeo.setAttribute('aS', new THREE.Float32BufferAttribute(B.s, 1));
  bgeo.setAttribute('aArm', new THREE.Float32BufferAttribute(B.arm, 1));
  bgeo.setAttribute('aBranch', new THREE.Float32BufferAttribute(B.branch, 1));
  const beamU = {
    ...common,
    // photon position along each arm (s, or −1 when none), chosen branch, wake strength
    uPhA: { value: new THREE.Vector3(-1, 1, 0) },
    uPhB: { value: new THREE.Vector3(-1, 1, 0) },
    uPump: { value: -1 },
  };
  const beams = new THREE.Points(
    bgeo,
    new THREE.ShaderMaterial({
      uniforms: beamU,
      transparent: true,
      depthWrite: false,
      depthTest: false,
      blending: THREE.AdditiveBlending,
      vertexShader: /* glsl */ `
        attribute float aS, aArm, aBranch;
        uniform float uSettle, uPR, uViewH, uPump;
        uniform vec3 uPhA, uPhB;
        varying vec3 vColor;
        varying float vA;
        void main() {
          bool pump = aArm > 1.5;
          vec3 ph = aArm < 0.5 ? uPhA : uPhB;
          float onBranch = (aBranch == 0.0 || aBranch == ph.y) ? 1.0 : 0.0;
          float glow = 0.0;
          if (pump) {
            glow = uPump < 0.0 ? 0.0 : exp(-pow(aS - uPump, 2.0) / 0.004);
          } else if (ph.x >= 0.0) {
            float d = aS - ph.x;
            // bright at the photon, a short fading wake behind it
            glow = onBranch * (0.8 * exp(-d * d / 0.0012) + ph.z * 0.16 * step(d, 0.0) * exp(d / 0.05));
          }
          float base = pump ? 0.12 : (aBranch == 0.0 ? 0.07 : 0.045);
          float appear = smoothstep(0.6, 1.0, uSettle);
          vA = (base + glow * 1.5) * appear;
          vColor = pump ? vec3(0.54, 0.36, 1.0) : vec3(1.0, 0.93, 0.86);
          vec4 mv = modelViewMatrix * vec4(position, 1.0);
          gl_Position = projectionMatrix * mv;
          float px = (0.007 + glow * 0.01) * projectionMatrix[1][1] * uViewH * 0.5 / -mv.z;
          gl_PointSize = clamp(px, 1.0, 9.0 * uPR);
        }`,
      fragmentShader: /* glsl */ `
        varying vec3 vColor;
        varying float vA;
        ${SHADE_GLSL}
        void main() {
          vec2 q = gl_PointCoord - 0.5;
          float a = exp(-dot(q, q) * 14.0) * vA;
          gl_FragColor = vec4(shadeSide(vColor), a);
        }`,
    }),
  );
  scene.add(beams);

  /* --- sparks: photon heads, the thread between the pair, detection rings, plate glyphs --- */
  const THREAD = 90;
  const RING = 72;
  const GLYPH = 40 + 14; // ring + fast-axis line, per plate
  const MAXP = 10; // pairs in flight at once (fast forward)
  const SLOT = 3 + THREAD + 2 * RING + 3;
  const SPARKS = MAXP * SLOT + 2 * GLYPH;
  const sPos = new Float32Array(SPARKS * 3);
  const sCol = new Float32Array(SPARKS * 3);
  const sA = new Float32Array(SPARKS);
  const sSize = new Float32Array(SPARKS);
  const sgeo = new THREE.BufferGeometry();
  sgeo.setAttribute('position', new THREE.BufferAttribute(sPos, 3).setUsage(THREE.DynamicDrawUsage));
  sgeo.setAttribute('color', new THREE.BufferAttribute(sCol, 3).setUsage(THREE.DynamicDrawUsage));
  sgeo.setAttribute('aA', new THREE.BufferAttribute(sA, 1).setUsage(THREE.DynamicDrawUsage));
  sgeo.setAttribute('aSize', new THREE.BufferAttribute(sSize, 1).setUsage(THREE.DynamicDrawUsage));
  const sparks = new THREE.Points(
    sgeo,
    new THREE.ShaderMaterial({
      uniforms: common,
      vertexColors: true,
      transparent: true,
      depthWrite: false,
      depthTest: false,
      blending: THREE.AdditiveBlending,
      vertexShader: /* glsl */ `
        attribute float aA, aSize;
        uniform float uPR, uViewH;
        varying vec3 vColor;
        varying float vA;
        void main() {
          vColor = color;
          vA = aA;
          vec4 mv = modelViewMatrix * vec4(position, 1.0);
          gl_Position = projectionMatrix * mv;
          gl_PointSize = clamp(aSize * projectionMatrix[1][1] * uViewH * 0.5 / -mv.z, 1.0, 90.0 * uPR);
        }`,
      fragmentShader: /* glsl */ `
        varying vec3 vColor;
        varying float vA;
        ${SHADE_GLSL}
        void main() {
          vec2 q = gl_PointCoord - 0.5;
          float a = exp(-dot(q, q) * 12.0) * vA;
          gl_FragColor = vec4(shadeSide(vColor), a);
        }`,
    }),
  );
  sparks.frustumCulled = false;
  scene.add(sparks);

  const put = (i: number, p: THREE.Vector3, c: THREE.Color, a: number, size: number) => {
    sPos[3 * i] = p.x;
    sPos[3 * i + 1] = p.y;
    sPos[3 * i + 2] = p.z;
    sCol[3 * i] = c.r;
    sCol[3 * i + 1] = c.g;
    sCol[3 * i + 2] = c.b;
    sA[i] = a;
    sSize[i] = size;
  };
  const slotIdx = (k: number) => {
    const b = k * SLOT;
    return { heads: b, thread: b + 3, rings: b + 3 + THREAD, halos: b + 3 + THREAD + 2 * RING };
  };
  const GLYPHS = MAXP * SLOT;

  /* --- ±1 labels --- */
  const labels = (['a', 'b'] as const).map((k) => {
    if (!opts.overlay) return null;
    const el = document.createElement('span');
    el.className = `pc-label pc-label-${k}`;
    el.setAttribute('aria-hidden', 'true');
    opts.overlay.appendChild(el);
    return el;
  });

  /* --- "Alice" and "Bob", shown while the camera is on the two arms --- */
  const names = (['Alice', 'Bob'] as const).map((name) => {
    if (!opts.overlay) return null;
    const el = document.createElement('span');
    el.className = 'pc-label pc-name';
    el.setAttribute('aria-hidden', 'true');
    el.textContent = name;
    opts.overlay.appendChild(el);
    return el;
  });
  // in front of each arm, below the beam splitter and detectors
  const NAME_AT = [v(AXIS - 0.46, -0.9, -0.16), v(AXIS + 0.46, -0.9, -0.16)];

  /* --- the pairs being drawn: one at a time, or many in fast forward --- */
  interface Pair {
    e: ReplayEvent;
    t0: number;
    /** playback speed; the pair's own clock runs k times faster */
    k: number;
    slot: number;
    pathA: Path;
    pathB: Path;
    colA: THREE.Color;
    colB: THREE.Color;
    detected: boolean;
    rippled: boolean;
    /** real ms after t0 when the next pair may start */
    release: number;
    released: boolean;
    done: () => void;
  }
  let pairs: Pair[] = [];
  let speed = 1;
  /** real ms between pairs in fast forward */
  const FAST_GAP = 110;
  const release = (pr: Pair) => {
    if (!pr.released) {
      pr.released = true;
      pr.done();
    }
  };
  const plate = { a: 0, b: SETTING_ANGLE.b[0], aTo: 0, bTo: SETTING_ANGLE.b[0], click: 0 };

  /* --- camera --- */
  let stops = STOPS_WIDE;
  let progress = 0;
  let narrow = false;
  let camOff = 0;
  let focusS = 0;
  const camPos = camFrom(stops[0]);
  const camTgt = new THREE.Vector3(...stops[0].tgt);
  const wantPos = new THREE.Vector3();
  const wantTgt = new THREE.Vector3();
  const tmpA = new THREE.Vector3();
  const tmpB = new THREE.Vector3();
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
    camera.fov = narrow ? 52 : 40;
    stops = narrow ? STOPS_NARROW : STOPS_WIDE;
    renderer.getDrawingBufferSize(shade.uRes.value);
    common.uViewH.value = shade.uRes.value.y;
    camera.updateProjectionMatrix();
  }
  const ro = new ResizeObserver(resize);
  ro.observe(canvas);
  resize();

  const born = performance.now();
  let last = born;
  let running = true;
  let raf = 0;
  let settled: () => void = () => {};
  const ready = new Promise<void>((r) => (settled = r));
  const SETTLE = 4200;

  const project = (p: THREE.Vector3, el: HTMLElement | null, text: string, col: THREE.Color, a: number) => {
    if (!el) return;
    if (a <= 0.01) {
      el.style.opacity = '0';
      return;
    }
    tmpA.copy(p).setZ(p.z + 0.07).project(camera);
    const w = canvas.clientWidth;
    const h = canvas.clientHeight;
    el.textContent = text;
    el.style.color = `#${col.getHexString()}`;
    el.style.opacity = String(a);
    el.style.transform = `translate(${((tmpA.x + 1) / 2) * w}px, ${((1 - tmpA.y) / 2) * h}px) translate(-50%, -100%)`;
  };

  function frame(now: number) {
    raf = 0;
    const dt = Math.min(0.05, (now - last) / 1000);
    last = now;
    const t = (now - born) / 1000;
    common.uTime.value = t;
    common.uSettle.value = Math.min(1, (now - born) / SETTLE);
    if (now - born > SETTLE) settled();

    /* camera */
    const s = Math.max(0, Math.min(stops.length - 1, progress));
    const i = Math.min(stops.length - 2, Math.floor(s));
    const f = s - i;
    const ef = f * f * (3 - 2 * f);
    const a0 = stops[i];
    const a1 = stops[i + 1];
    const mix = (x: number, y: number) => x + (y - x) * ef;
    const st: Stop = {
      tgt: [mix(a0.tgt[0], a1.tgt[0]), mix(a0.tgt[1], a1.tgt[1]), mix(a0.tgt[2], a1.tgt[2])],
      // a slow idle drift, so the scan never sits completely still
      az: mix(a0.az, a1.az) + mouseX * 6 + Math.sin(t * 0.21) * 1.8,
      el: mix(a0.el, a1.el) - mouseY * 4 + Math.sin(t * 0.17 + 1) * 0.9,
      dist: mix(a0.dist, a1.dist) * (1 + Math.sin(t * 0.13 + 2) * 0.012),
      off: mix(a0.off, a1.off),
      shade: mix(a0.shade, a1.shade),
    };
    camFrom(st, wantPos);
    wantTgt.set(...st.tgt);
    const k = 1 - Math.pow(0.02, dt);
    camPos.lerp(wantPos, k);
    camTgt.lerp(wantTgt, k);
    camera.position.copy(camPos);
    camera.lookAt(camTgt);
    common.uCamDist.value = camPos.distanceTo(camTgt);
    camOff += ((narrow ? 0 : st.off) - camOff) * k;
    const w = canvas.clientWidth;
    const h = canvas.clientHeight;
    // narrow screens: lift the board into the upper part, above the text
    camera.setViewOffset(w, h, -camOff * w, narrow ? h * 0.16 : 0, w, h);
    // focus weights: a tent around each stop, following the (smoothed) scroll
    focusS += (s - focusS) * k;
    cloudU.uFocusW.value.set(
      Math.max(0, 1 - Math.abs(focusS - 0)),
      Math.max(0, 1 - Math.abs(focusS - 1)),
      Math.max(0, 1 - Math.abs(focusS - 2)),
      Math.max(0, 1 - Math.abs(focusS - 3)),
    );
    shade.uEdge.value = 0.58;
    shade.uVertical.value = narrow ? 1 : 0;
    shade.uShade.value = st.shade;
    camera.updateMatrixWorld();
    const nameA = Math.min(1, cloudU.uFocusW.value.z + 0.6 * cloudU.uFocusW.value.w) * common.uSettle.value;
    names.forEach((el, j) => {
      if (!el) return;
      el.style.opacity = nameA < 0.02 ? '0' : String(nameA * 0.85);
      if (nameA < 0.02) return;
      tmpA.copy(NAME_AT[j]).project(camera);
      el.style.transform = `translate(${((tmpA.x + 1) / 2) * w}px, ${((1 - tmpA.y) / 2) * h}px) translate(-50%, -50%)`;
    });

    /* the pair */
    sA.fill(0);
    const fa = cloudU.uFlashA.value;
    const fb = cloudU.uFlashB.value;
    cloudU.uRipple.value.z += dt;
    fa.w *= Math.pow(0.18, dt);
    fb.w *= Math.pow(0.18, dt);
    beamU.uPump.value = -1;
    beamU.uPhA.value.set(-1, 1, 0);
    beamU.uPhB.value.set(-1, 1, 0);
    let labelA = 0;
    let labelB = 0;
    let labelPair: Pair | undefined;

    const pumpPath = new Path(PUMP);
    for (const pr of pairs) {
      const u = (now - pr.t0) * pr.k; // the pair's own clock, in normal-speed ms
      const { e } = pr;
      const I = slotIdx(pr.slot);
      const newest = pr === pairs[pairs.length - 1];
      // pump pulse
      if (u >= 0 && u < T.pump) {
        const q = u / T.pump;
        if (newest) beamU.uPump.value = q;
        put(I.heads + 2, pumpPath.at(q, tmpA), COL.pump, 1, 0.08);
        put(I.halos + 2, tmpA, COL.pump, 0.3, 0.25);
      }
      // birth flash at the crystal, and a ripple across the board (not too often)
      const birth = u - T.pump;
      if (birth >= 0 && !pr.rippled) {
        pr.rippled = true;
        if (pr.k === 1 || cloudU.uRipple.value.z > 1.4) cloudU.uRipple.value.set(CRYSTAL.x, CRYSTAL.y, 0, 1);
      }
      if (birth > -60 && birth < 400) {
        const fl = Math.exp(-Math.pow(birth / 160, 2));
        put(I.heads + 2, CRYSTAL, COL.photon, fl, 0.12);
        put(I.halos + 2, CRYSTAL, COL.pump, fl * 0.45, 0.4);
      }
      // flight
      if (u >= T.pump && u < T.pump + T.flight + 350) {
        const q = Math.min(1, (u - T.pump) / T.flight);
        const eq = q < 0.5 ? 2 * q * q : 1 - Math.pow(-2 * q + 2, 2) / 2; // ease in-out
        const wake = u < T.pump + T.flight ? 1 : Math.max(0, 1 - (u - T.pump - T.flight) / 350);
        if (newest) {
          beamU.uPhA.value.set(eq, e.A, wake);
          beamU.uPhB.value.set(eq, e.B, wake);
        }
        if (q < 1) {
          pr.pathA.at(eq, tmpA);
          pr.pathB.at(eq, tmpB);
          const tint = Math.min(1, q * 3);
          put(I.heads, tmpA, COL.photon, tint, 0.07);
          put(I.heads + 1, tmpB, COL.photon, tint, 0.07);
          put(I.halos, tmpA, COL.photon, 0.22 * tint, 0.22);
          put(I.halos + 1, tmpB, COL.photon, 0.22 * tint, 0.22);
          // the thread: the two photons belong to one state (slow mode only;
          // in fast forward the many threads read as clutter)
          const p = new THREE.Vector3();
          for (let j = 0; j < (pr.k === 1 ? THREAD : 0); j++) {
            const r = j / (THREAD - 1);
            p.copy(tmpA).lerp(tmpB, r);
            p.z += Math.sin(r * Math.PI) * 0.035 + Math.sin(t * 3 + j) * 0.002;
            const shimmer = 0.5 + 0.5 * Math.sin(t * 6 - r * 12);
            put(I.thread + j, p, COL.photon, (0.12 + 0.1 * shimmer) * tint, 0.014);
          }
        }
      }
      // detection: both at the same instant
      const since = u - (T.pump + T.flight);
      const dA = (e.A === 1 ? ALICE.plus : ALICE.minus)[1];
      const dB = (e.B === 1 ? BOB.plus : BOB.minus)[1];
      if (since >= 0 && !pr.detected) {
        pr.detected = true;
        fa.set(dA.x, dA.y, 0.0035, 1);
        fb.set(dB.x, dB.y, 0.0035, 1);
        cloudU.uColA.value.copy(pr.colA);
        cloudU.uColB.value.copy(pr.colB);
        opts.onDetect?.({ e, colours: [`#${pr.colA.getHexString()}`, `#${pr.colB.getHexString()}`] });
      }
      if (since >= 0 && since < T.after + 300) {
        const r = since / (T.after * 0.8);
        const ringAlpha = Math.max(0, 1 - r) * 0.8;
        const radius = 0.012 + 0.09 * (1 - Math.pow(1 - Math.min(1, r), 3));
        for (let j = 0; j < RING; j++) {
          const ang = (j / RING) * Math.PI * 2;
          tmpA.set(dA.x + Math.cos(ang) * radius, dA.y + Math.sin(ang) * radius, dA.z);
          tmpB.set(dB.x + Math.cos(ang) * radius, dB.y + Math.sin(ang) * radius, dB.z);
          put(I.rings + j, tmpA, pr.colA, ringAlpha, 0.018);
          put(I.rings + RING + j, tmpB, pr.colB, ringAlpha, 0.018);
        }
        // the click itself
        const pop = Math.exp(-since / 180);
        put(I.heads, dA, pr.colA, pop, 0.1);
        put(I.heads + 1, dB, pr.colB, pop, 0.1);
        put(I.halos, dA, pr.colA, 0.5 * Math.exp(-since / 600), 0.35);
        put(I.halos + 1, dB, pr.colB, 0.5 * Math.exp(-since / 600), 0.35);
        // the ±1 labels only at normal speed; in fast forward they would flicker
        if (newest && pr.k === 1) {
          labelA = labelB = since < T.after ? Math.min(1, since / 120) : Math.max(0, 1 - (since - T.after) / 300);
          labelPair = pr;
        }
      }
      if (now - pr.t0 >= pr.release) release(pr);
    }
    // finished pairs leave
    pairs = pairs.filter((pr) => {
      const over = (now - pr.t0) * pr.k >= CYCLE;
      if (over) release(pr);
      return !over;
    });
    if (labelPair) {
      const lp = labelPair;
      project((lp.e.A === 1 ? ALICE.plus : ALICE.minus)[1], labels[0], lp.e.A === 1 ? '+1' : '−1', lp.colA, labelA);
      project((lp.e.B === 1 ? BOB.plus : BOB.minus)[1], labels[1], lp.e.B === 1 ? '+1' : '−1', lp.colB, labelB);
    } else {
      labels.forEach((l) => l && (l.style.opacity = '0'));
    }

    /* half-wave plates: a small disc with the measured direction */
    plate.a += (plate.aTo - plate.a) * (1 - Math.pow(0.0005, dt));
    plate.b += (plate.bTo - plate.b) * (1 - Math.pow(0.0005, dt));
    plate.click *= Math.pow(0.05, dt);
    const glyph = (base: number, c: THREE.Vector3, deg: number) => {
      const R = 0.03;
      const al = (0.22 + 0.5 * plate.click) * common.uSettle.value;
      for (let j = 0; j < 40; j++) {
        const ang = (j / 40) * Math.PI * 2;
        tmpA.set(c.x + Math.cos(ang) * R, c.y, c.z + Math.sin(ang) * R);
        put(base + j, tmpA, COL.photon, al * 0.7, 0.008);
      }
      const rad = (deg * Math.PI) / 180 + Math.PI / 2;
      for (let j = 0; j < 14; j++) {
        const r = (j / 13) * 2 - 1;
        tmpA.set(c.x + Math.cos(rad) * R * r, c.y, c.z + Math.sin(rad) * R * r);
        put(base + 40 + j, tmpA, COL.photon, al, 0.009);
      }
    };
    glyph(GLYPHS, ALICE.hwp, plate.a);
    glyph(GLYPHS + GLYPH, BOB.hwp, plate.b);

    sgeo.attributes.position.needsUpdate = true;
    sgeo.attributes.color.needsUpdate = true;
    (sgeo.attributes.aA as THREE.BufferAttribute).needsUpdate = true;
    (sgeo.attributes.aSize as THREE.BufferAttribute).needsUpdate = true;

    renderer.render(scene, camera);
    if (running) raf = requestAnimationFrame(frame);
  }
  raf = requestAnimationFrame(frame);

  return {
    ready,
    setProgress(p) {
      progress = p;
    },
    setSpeed(k) {
      if (k === speed) return;
      const now = performance.now();
      if (k > speed) {
        // speeding up: the pairs in flight switch to the new speed at once, and
        // the next pair doesn't wait for them
        for (const pr of pairs) {
          pr.t0 = now - ((now - pr.t0) * pr.k) / k;
          pr.k = k;
          release(pr);
        }
      }
      speed = k;
    },
    play(e) {
      return new Promise<void>((resolve) => {
        const [colA, colB] = outcomeColours(e);
        plate.aTo = SETTING_ANGLE.a[e.a];
        plate.bTo = SETTING_ANGLE.b[e.b];
        plate.click = 1;
        const used = new Set(pairs.map((pr) => pr.slot));
        let slot = [...Array(MAXP).keys()].find((k) => !used.has(k));
        if (slot === undefined) {
          const oldest = pairs.shift()!;
          release(oldest);
          slot = oldest.slot;
        }
        pairs.push({
          e,
          t0: performance.now() + T.turn / speed,
          k: speed,
          slot,
          pathA: fullPath(ALICE, e.A),
          pathB: fullPath(BOB, e.B),
          colA,
          colB,
          detected: false,
          rippled: false,
          release: speed === 1 ? Infinity : FAST_GAP - T.turn / speed,
          released: false,
          done: resolve,
        });
      });
    },
    setRunning(on) {
      if (on === running) return;
      running = on;
      if (on && !raf) {
        const pause = performance.now() - last;
        for (const pr of pairs) pr.t0 += pause; // resume the pairs where they were
        last = performance.now();
        raf = requestAnimationFrame(frame);
      }
    },
    dispose() {
      running = false;
      if (raf) cancelAnimationFrame(raf);
      ro.disconnect();
      removeEventListener('pointermove', onPointer);
      labels.forEach((l) => l?.remove());
      names.forEach((l) => l?.remove());
      renderer.dispose();
    },
  };
}
