import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const topics = ['Botany', 'Geology', 'History', 'Religion', 'Language'] as const;

const entries = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/entries' }),
  schema: z.object({
    title: z.string(),
    topic: z.enum(topics),
    date: z.string().optional(),
    summary: z.string().optional(),
    // Optional explicit layer mood override
    layer: z.enum(['underwater', 'coastal', 'sky', 'parchment', 'deep']).optional(),
    // Optional gallery for special entries (e.g. photo reel on Geology entries)
    gallery: z.array(z.object({
      src: z.string(),
      caption: z.string(),
      alt: z.string().optional(),
    })).optional(),
  }),
});

const glossary = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/glossary' }),
  schema: z.object({
    term: z.string(),
    greek: z.string().optional(),
    definition: z.string(),
    etymology: z.string().optional(),
    notes: z.string().optional(),
  }),
});

export const collections = { entries, glossary };
