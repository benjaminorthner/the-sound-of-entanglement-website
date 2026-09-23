import { getCollection, type CollectionEntry } from 'astro:content';
import type { Lang } from '../../i18n';

export type Supporter = CollectionEntry<'supporters'>;
export type Group = Supporter['data']['group'];

/** Headings for the groups, in display order. */
export const GROUPS: { id: Group; title: string; titleDe: string }[] = [
  { id: 'funding', title: 'Funding', titleDe: 'Förderung' },
  { id: 'institutions', title: 'Research and arts institutions', titleDe: 'Forschungs- und Kunstinstitutionen' },
  { id: 'premiere', title: 'The premiere', titleDe: 'Die Uraufführung' },
  { id: 'hosts', title: 'Hosts on tour', titleDe: 'Zu Gast bei' },
  { id: 'thanks', title: 'Thanks', titleDe: 'Dank' },
];

export const groupTitle = (g: (typeof GROUPS)[number], lang: Lang) => (lang === 'de' ? g.titleDe : g.title);

/** Name, role and note in the page language (German fields fall back to English). */
export function supporterText(s: Supporter, lang: Lang) {
  const d = s.data;
  if (lang === 'en') return { name: d.name, role: d.role, note: d.note };
  return { name: d.nameDe ?? d.name, role: d.roleDe ?? d.role, note: d.noteDe ?? d.note };
}

export async function supportersByGroup(): Promise<Record<Group, Supporter[]>> {
  const all = (await getCollection('supporters')).sort((a, b) => a.data.order - b.data.order);
  const out = {} as Record<Group, Supporter[]>;
  for (const g of GROUPS) out[g.id] = all.filter((s) => s.data.group === g.id);
  return out;
}

/**
 * Display height for a logo so that logos of different shapes carry similar
 * visual weight: equal area rather than equal height, then clamped.
 * `area` is the target area in px² for a logo with scale 1.
 */
export function logoHeight(width: number, height: number, scale: number, area: number, min: number, max: number) {
  const aspect = width / height;
  const h = Math.sqrt(area / aspect) * scale;
  return Math.round(Math.max(min, Math.min(max, h)));
}
