/**
 * Languages. English is the default at /, German lives under /de/.
 * There is no automatic language detection: the header has a switch.
 *
 * In any .astro file:  const lang = getLang(Astro);  const t = useT(lang);
 * Internal links:      href={localize(lang, '/shows/')}
 *
 * German copy is written to read as native German (Austrian conventions:
 * "Jänner", decimal comma, „Anführungszeichen"), not as a literal
 * translation. See docs/content-guide.md, "German".
 */
import { ui, type UiKey } from './ui';

export type Lang = 'en' | 'de';
export const LANGS: Lang[] = ['en', 'de'];

/** Current page language, from Astro's i18n routing. */
export function getLang(astro: { currentLocale?: string | undefined }): Lang {
  return astro.currentLocale === 'de' ? 'de' : 'en';
}

/** Prefix an internal path for the given language. External links, anchors, media and assets pass through. */
export function localize(lang: Lang, href: string): string {
  if (lang === 'en' || !href.startsWith('/') || href.startsWith('/de/') || href === '/de') return href;
  if (/^\/(media|og|_astro|favicon)/.test(href)) return href;
  return href === '/' ? '/de/' : `/de${href}`;
}

/** Strip the language prefix from a path. */
export function unlocalize(pathname: string): string {
  if (pathname === '/de' || pathname === '/de/') return '/';
  return pathname.startsWith('/de/') ? pathname.slice(3) : pathname;
}

/** The same page in each language. */
export function alternates(pathname: string): Record<Lang, string> {
  const base = unlocalize(pathname);
  return { en: base, de: localize('de', base) };
}

/** Translation function for UI strings. Falls back to English. */
export function useT(lang: Lang) {
  return (key: UiKey): string => ui[lang][key] ?? ui.en[key];
}

/** Locale code for Intl APIs. */
export const intlLocale = (lang: Lang) => (lang === 'de' ? 'de-AT' : 'en-GB');

/** A number with the language's decimal separator, e.g. 2.45 / 2,45. */
export function num(lang: Lang, x: number, digits = 2): string {
  return x.toLocaleString(intlLocale(lang), { minimumFractionDigits: digits, maximumFractionDigits: digits });
}

/** Pick the string for the current language from an inline pair. */
export function pick<T>(lang: Lang, v: { en: T; de: T }): T {
  return v[lang];
}
