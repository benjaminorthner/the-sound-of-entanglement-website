/**
 * Content collections. All site content lives in src/content/ as Markdown
 * or YAML so that it can be edited without touching components.
 * Facts must match docs/ (the verified knowledge base).
 */
import { defineCollection, reference, type SchemaContext } from 'astro:content';
import { glob, file } from 'astro/loaders';
import { z } from 'astro/zod';

const link = z.object({ label: z.string(), url: z.url() });

/** A photo with its mandatory credit. */
const photo = (image: SchemaContext['image']) =>
  z.object({
    src: image(),
    alt: z.string(),
    credit: z.string(),
    caption: z.string().optional(),
  });

const shows = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/shows' }),
  schema: ({ image }) =>
    z.object({
      /** Event name, e.g. "Ars Electronica Festival 2024, opening". */
      title: z.string(),
      date: z.coerce.date(),
      endDate: z.coerce.date().optional(),
      /** Local start time, e.g. "22:00". */
      time: z.string().optional(),
      venue: z.string(),
      city: z.string(),
      country: z.string(),
      piece: reference('pieces').optional(),
      kind: z.enum(['performance', 'talk', 'exhibition']),
      premiere: z.boolean().default(false),
      /** Short description of the format, e.g. "Lecture-performance in English". */
      format: z.string().optional(),
      lineup: z.array(z.string()).default([]),
      lecture: z.array(z.string()).default([]),
      /** Bell value measured during the show (from the performance logs). */
      bell: z.number().optional(),
      audience: z.string().optional(),
      summary: z.string(),
      cover: photo(image).optional(),
      gallery: z.array(photo(image)).default([]),
      youtube: z.string().optional(),
      links: z.array(link).default([]),
      /** Hide from public lists (e.g. unconfirmed). */
      draft: z.boolean().default(false),
    }),
});

const pieces = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/pieces' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      year: z.number(),
      /** Instrumentation line, e.g. "for two cathedral organs, entangled photons and light". */
      forces: z.string(),
      composers: z.array(z.string()),
      status: z.enum(['repertoire', 'experimental']),
      order: z.number(),
      /** One or two sentences for lists. */
      summary: z.string(),
      /** How the measurement drives the music, one sentence. */
      mapping: z.string(),
      visualsBy: z.array(z.string()).default([]),
      cover: photo(image).optional(),
      images: z.array(photo(image)).default([]),
      audio: z
        .array(z.object({ src: z.string(), title: z.string(), note: z.string().optional() }))
        .default([]),
      youtube: z.string().optional(),
      /** Which live visual the piece page uses. */
      visual: z.enum(['rings', 'terrain', 'metronome', 'none']).default('none'),
    }),
});

const people = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/people' }),
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      role: z.string(),
      group: z.enum(['team', 'musicians', 'organists']),
      affiliation: z.string().optional(),
      /** Personal or company website; the name links to it. */
      website: z.url().optional(),
      order: z.number(),
      portrait: photo(image).optional(),
      links: z.array(link).default([]),
    }),
});

const publications = defineCollection({
  loader: file('./src/content/publications.yaml'),
  schema: z.object({
    kind: z.enum(['paper', 'talk', 'video', 'press', 'radio']),
    title: z.string(),
    /** Authors, speaker, outlet or channel. */
    by: z.string(),
    date: z.coerce.date(),
    url: z.url().optional(),
    note: z.string().optional(),
    language: z.enum(['en', 'de']).default('en'),
  }),
});

/** Institutions, funders and hosts that made the project possible. */
const supporters = defineCollection({
  loader: file('./src/content/supporters.yaml'),
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      group: z.enum(['funding', 'institutions', 'premiere', 'hosts', 'thanks']),
      /** What they did for the project, e.g. "In cooperation with". */
      role: z.string().optional(),
      /** Details such as grant numbers. */
      note: z.string().optional(),
      /** German versions of name, role and note, for /de/ pages (fall back to English). */
      nameDe: z.string().optional(),
      roleDe: z.string().optional(),
      noteDe: z.string().optional(),
      url: z.url().optional(),
      /** Monochrome logo from src/assets/logos/ (see scripts/prepare_logos.py). */
      logo: image().optional(),
      /** Optical size correction for the logo (1 = default). */
      scale: z.number().default(1),
      /** Shown in the compact logo row in the footer. */
      featured: z.boolean().default(false),
      order: z.number().default(100),
    }),
});

/**
 * German versions. One file per entry, same id as the English entry, e.g.
 * src/content/de/shows/2025-10-03-civa.md. Every field is optional: whatever
 * is set replaces the English text on /de/ pages; the Markdown body replaces
 * the English body. Facts (dates, venues, Bell values, photos) stay in the
 * English entry. Photo alt texts and captions: src/i18n/photos.de.ts.
 */
const str = z.string().optional();
const strs = z.array(z.string()).optional();
const showsDe = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/de/shows' }),
  schema: z.object({ title: str, venue: str, city: str, country: str, format: str, summary: str, lineup: strs, lecture: strs, audience: str }),
});
const piecesDe = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/de/pieces' }),
  schema: z.object({ title: str, forces: str, summary: str, mapping: str, audio: z.array(z.object({ title: str, note: str })).optional() }),
});
const peopleDe = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/de/people' }),
  schema: z.object({ role: str, affiliation: str }),
});

export const collections = { showsDe, piecesDe, peopleDe, shows, pieces, people, publications, supporters };
