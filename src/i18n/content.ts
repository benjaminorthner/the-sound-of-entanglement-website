/**
 * Language-aware access to content entries. English is the source of truth;
 * German files in src/content/de/<collection>/<id>.md override text fields
 * and the body. Use:
 *
 *   const { data, entry } = await localized('shows', show, lang);
 *   const { Content } = await render(entry);   // German body when there is one
 */
import { getEntry, type CollectionEntry } from 'astro:content';
import type { Lang } from './index';

type Base = 'shows' | 'pieces' | 'people';
type DeOf<C extends Base> = C extends 'shows' ? 'showsDe' : C extends 'pieces' ? 'piecesDe' : 'peopleDe';

export async function localized<C extends Base>(
  collection: C,
  entry: CollectionEntry<C>,
  lang: Lang,
): Promise<{ data: CollectionEntry<C>['data']; entry: CollectionEntry<C> | CollectionEntry<DeOf<C>>; translated: boolean }> {
  if (lang === 'en') return { data: entry.data, entry, translated: false };
  const de = (await getEntry(`${collection}De` as DeOf<C>, entry.id)) as CollectionEntry<DeOf<C>> | undefined;
  if (!de) return { data: entry.data, entry, translated: false };
  const over = Object.fromEntries(Object.entries(de.data).filter(([, v]) => v !== undefined));
  const data = { ...entry.data, ...over } as CollectionEntry<C>['data'];
  // per-item audio titles/notes for pieces (keeps src from the English entry)
  if (collection === 'pieces' && 'audio' in over && Array.isArray(over.audio)) {
    const en = (entry.data as CollectionEntry<'pieces'>['data']).audio;
    (data as CollectionEntry<'pieces'>['data']).audio = en.map((a, i) => ({ ...a, ...(over.audio as { title?: string; note?: string }[])[i] }));
  }
  const hasBody = (de.body ?? '').trim().length > 0;
  return { data, entry: hasBody ? de : entry, translated: true };
}

/** Localize many entries at once, keeping order. */
export async function localizeAll<C extends Base>(collection: C, entries: CollectionEntry<C>[], lang: Lang) {
  return Promise.all(entries.map(async (e) => ({ ...e, data: (await localized(collection, e, lang)).data })));
}
