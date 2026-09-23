/** Update a LiveBell scale (see LiveBell.astro). */
export function setLiveBell(root: HTMLElement, S: number, sigma: number, text: string) {
  const pct = (v: number) => `${(Math.max(0, Math.min(3, v)) / 3) * 100}%`;
  const dot = root.querySelector<HTMLElement>('[data-lb-dot]')!;
  const band = root.querySelector<HTMLElement>('[data-lb-band]')!;
  const label = root.querySelector<HTMLElement>('[data-lb-text]')!;
  dot.style.opacity = '1';
  dot.style.left = pct(S);
  band.style.left = pct(S - sigma);
  band.style.width = `calc(${pct(S + sigma)} - ${pct(S - sigma)})`;
  label.textContent = text;
}

/** "21:07:50" from an ISO local start time plus elapsed milliseconds. */
export function clockAt(startIso: string, elapsedMs: number): string {
  const m = /T(\d\d):(\d\d):(\d\d)(?:\.(\d+))?/.exec(startIso);
  if (!m) return '';
  const frac = m[4] ? Number(`0.${m[4]}`) * 1000 : 0;
  const t = Math.floor(((+m[1] * 60 + +m[2]) * 60 + +m[3]) + (frac + elapsedMs) / 1000);
  const p = (n: number) => String(n).padStart(2, '0');
  return `${p(Math.floor(t / 3600) % 24)}:${p(Math.floor(t / 60) % 60)}:${p(t % 60)}`;
}

/** Run a requestAnimationFrame loop only while `el` is on screen. */
export function whileVisible(el: Element, frame: (ts: number) => void): { stop(): void } {
  let raf = 0;
  let visible = false;
  const loop = (ts: number) => {
    frame(ts);
    if (visible) raf = requestAnimationFrame(loop);
  };
  const io = new IntersectionObserver(([entry]) => {
    const was = visible;
    visible = entry.isIntersecting;
    if (visible && !was) raf = requestAnimationFrame(loop);
    if (!visible) cancelAnimationFrame(raf);
  });
  io.observe(el);
  return {
    stop() {
      io.disconnect();
      cancelAnimationFrame(raf);
      visible = false;
    },
  };
}

export const REDUCED =
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
