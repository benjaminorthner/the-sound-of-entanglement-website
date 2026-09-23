/** Show queries shared by the shows index and show pages. */
import { getCollection, getEntry, type CollectionEntry } from 'astro:content';
import type { Lang } from '../../i18n';
import { localizeAll } from '../../i18n/content';

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
type VideoInfo = { title: string; duration?: string; note?: string };
const videos: Record<string, Record<Lang, VideoInfo>> = {
  '2024-09-04-bruqner-linz': {
    en: {
      title: 'BruQner – The Sound of Entanglement, documentary',
      duration: '18 min',
      note: 'A film by weitblickfilm about the days leading up to the premiere.',
    },
    de: {
      title: 'BruQner – The Sound of Entanglement, Dokumentation',
      duration: '18 Min.',
      note: 'Ein Film von weitblickfilm über die Tage vor der Uraufführung.',
    },
  },
  '2025-01-25-vienna-ball-of-sciences': {
    en: {
      title: '8 Rooms, live at the Vienna Ball of Sciences',
      duration: '12 min',
      note: 'The second set of the night. Film by Lisa Truttmann, live recording by Christian Hölzel.',
    },
    de: {
      title: '8 Rooms, live am Wiener Ball der Wissenschaften',
      duration: '12 Min.',
      note: 'Das zweite Set des Abends. Film: Lisa Truttmann, Live-Mitschnitt: Christian Hölzel.',
    },
  },
  '2025-04-14-washington': {
    en: {
      title: 'Lecture and performance, Washington',
      duration: '52 min',
      note: 'The whole event: the lecture, then 8 Rooms with the landscape visuals on the big screen.',
    },
    de: {
      title: 'Vortrag und Performance, Washington',
      duration: '52 Min.',
      note: 'Der ganze Abend: zuerst der Vortrag, dann 8 Rooms mit den Landschafts-Visuals auf der großen Leinwand.',
    },
  },
  '2024-06-13-preview-vienna': {
    en: {
      title: 'Preview performance, Vienna, 13 June 2024',
      note: 'The recording is low in picture and sound quality; it is kept because it shows how it all started.',
    },
    de: {
      title: 'Voraufführung, Wien, 13. Juni 2024',
      note: 'Bild und Ton sind nicht die besten. Wir zeigen die Aufnahme trotzdem, weil man sieht, wie alles angefangen hat.',
    },
  },
};

export function videoInfo(id: string, lang: Lang): VideoInfo | undefined {
  return videos[id]?.[lang];
}

/** Link labels from the show entries, in German. Unknown labels (names) stay as they are. */
const linkLabelsDe: Record<string, string> = {
  'Ars Electronica programme': 'Programm der Ars Electronica',
  Programme: 'Programm',
  'Austrian Cultural Forum Washington': 'Österreichisches Kulturforum Washington',
  'European Forum Alpbach': 'Europäisches Forum Alpbach',
  'CIVA 2025 at Belvedere 21': 'CIVA 2025 im Belvedere 21',
};
export function linkLabel(label: string, lang: Lang): string {
  return lang === 'de' ? (linkLabelsDe[label] ?? label) : label;
}

/** Match "Name (note)" strings to people entries; role and affiliation in the page language. */
export async function speakers(names: string[], lang: Lang = 'en') {
  const people = await localizeAll('people', await getCollection('people'), lang);
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
