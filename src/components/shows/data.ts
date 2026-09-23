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

/**
 * What the embedded video is, per show. The schema has only `youtube`, so the
 * description lives here. (Candidate for a `video: {id, title, note}` field.)
 */
export const videoInfo: Record<string, { title: string; duration?: string; note?: string }> = {
  '2024-09-04-bruqner-linz': {
    title: 'BruQner – The Sound of Entanglement, documentary',
    duration: '18 min',
    note: 'A film by weitblickfilm about the days leading up to the premiere.',
  },
  '2025-01-25-vienna-ball-of-sciences': {
    title: '8 Rooms, live at the Vienna Ball of Sciences',
    duration: '12 min',
    note: 'The second set of the night. Film by Lisa Truttmann, live recording by Christian Hölzel.',
  },
  '2025-04-14-washington': {
    title: 'Lecture and performance, Washington',
    duration: '52 min',
    note: 'The whole event: the lecture, then 8 Rooms with the landscape visuals on the big screen.',
  },
  '2024-06-13-preview-vienna': {
    title: 'Preview performance, Vienna, 13 June 2024',
    note: 'The recording is low in picture and sound quality; it is kept because it shows how it all started.',
  },
};

export async function speakers(names: string[]) {
  const people = await getCollection('people');
  return names.map((raw) => {
    const person = people.find((p) => raw.startsWith(p.data.name));
    const extra = person ? raw.slice(person.data.name.length).trim() : '';
    return { raw, person, extra };
  });
}

/** "Venue, City, Country", without repeating the city when the venue is the city. */
export function venueLine(s: Show): string {
  return s.data.venue === s.data.city ? place(s) : `${s.data.venue}, ${place(s)}`;
}
