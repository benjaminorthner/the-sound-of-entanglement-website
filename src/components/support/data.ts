import { getCollection, type CollectionEntry } from 'astro:content';

export type Supporter = CollectionEntry<'supporters'>;
export type Group = Supporter['data']['group'];

/** Headings for the groups, in display order. */
export const GROUPS: { id: Group; title: string }[] = [
  { id: 'funding', title: 'Funding' },
  { id: 'institutions', title: 'Research and arts institutions' },
  { id: 'premiere', title: 'The premiere' },
  { id: 'hosts', title: 'Hosts on tour' },
  { id: 'thanks', title: 'Thanks' },
];

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
