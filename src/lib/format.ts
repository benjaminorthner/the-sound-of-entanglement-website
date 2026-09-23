/** Date and text helpers shared across pages. Pass `lang` for German pages. */
import { intlLocale, type Lang } from '../i18n';

const opts = (o: Intl.DateTimeFormatOptions): Intl.DateTimeFormatOptions => ({ ...o, timeZone: 'UTC' });

/** "4 September 2024" / "4. September 2024" */
export function formatDate(d: Date, lang: Lang = 'en'): string {
  return d.toLocaleDateString(intlLocale(lang), opts({ day: 'numeric', month: 'long', year: 'numeric' }));
}

/** "4 Sept 2024" / "4. Sep. 2024" */
export function formatDateShort(d: Date, lang: Lang = 'en'): string {
  return d.toLocaleDateString(intlLocale(lang), opts({ day: 'numeric', month: 'short', year: 'numeric' }));
}

/** "4 and 6 September 2024" / "4. und 6. September 2024"; "13 April – 13 October 2025" */
export function formatRange(start: Date, end?: Date, lang: Lang = 'en'): string {
  if (!end) return formatDate(start, lang);
  const and = lang === 'de' ? 'und' : 'and';
  const day = (d: Date) => (lang === 'de' ? `${d.getUTCDate()}.` : `${d.getUTCDate()}`);
  const sameMonth = start.getUTCMonth() === end.getUTCMonth() && start.getUTCFullYear() === end.getUTCFullYear();
  if (sameMonth && end.getUTCDate() - start.getUTCDate() === 2) {
    // two separate performances two days apart (e.g. 4 & 6 Sept)
    return `${day(start)} ${and} ${formatDate(end, lang)}`;
  }
  if (sameMonth) return `${day(start)}–${formatDate(end, lang)}`;
  const s = start.toLocaleDateString(intlLocale(lang), opts({ day: 'numeric', month: 'long' }));
  return `${s} – ${formatDate(end, lang)}`;
}

/** "4 Sept" / "4. Sep." (no year) */
export function formatDayMonth(d: Date, lang: Lang = 'en'): string {
  return d.toLocaleDateString(intlLocale(lang), opts({ day: 'numeric', month: 'short' }));
}

export function year(d: Date): number {
  return d.getUTCFullYear();
}
