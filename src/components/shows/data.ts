/** Show queries shared by the shows index and show pages. */
import { getCollection, getEntry, type CollectionEntry } from 'astro:content';

export type Show = CollectionEntry<'shows'>;

export async function publicShows(): Promise<Show[]> {
  const all = await getCollection('shows', (s) => !s.data.draft);
  return all.sort((a, b) => +a.data.date - +b.data.date);
}

/** A show is upcoming until its last day has passed. */
export function isUpcoming(s: Show, now = new Date()): boolean {
  const end = s.data.endDate ?? s.data.date;
  return +end + 24 * 3600 * 1000 > +now;
}

export async function pieceOf(s: Show) {
  return s.data.piece ? await getEntry(s.data.piece) : undefined;
}

export function place(s: Show): string {
  return s.data.city === s.data.country ? s.data.city : `${s.data.city}, ${s.data.country}`;
}
