/** Date and text helpers shared across pages. */

const LOCALE = 'en-GB';

/** "4 September 2024" */
export function formatDate(d: Date): string {
  return d.toLocaleDateString(LOCALE, { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });
}

/** "4 Sept 2024" */
export function formatDateShort(d: Date): string {
  return d.toLocaleDateString(LOCALE, { day: 'numeric', month: 'short', year: 'numeric', timeZone: 'UTC' });
}

/** "4 and 6 September 2024", "13 April – 13 October 2025" */
export function formatRange(start: Date, end?: Date): string {
  if (!end) return formatDate(start);
  const sameMonth = start.getUTCMonth() === end.getUTCMonth() && start.getUTCFullYear() === end.getUTCFullYear();
  if (sameMonth && end.getUTCDate() - start.getUTCDate() === 2) {
    // two separate performances two days apart (e.g. 4 & 6 Sept)
    return `${start.getUTCDate()} and ${formatDate(end)}`;
  }
  if (sameMonth) return `${start.getUTCDate()}–${formatDate(end)}`;
  const s = start.toLocaleDateString(LOCALE, { day: 'numeric', month: 'long', timeZone: 'UTC' });
  return `${s} – ${formatDate(end)}`;
}

export function year(d: Date): number {
  return d.getUTCFullYear();
}
