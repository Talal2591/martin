import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * Content Collection für Leistungsseiten.
 * Jede Leistung ist eine Markdown-Datei unter src/content/leistungen/.
 * Der Dateiname bestimmt die URL: /leistungen/<slug>/
 */
const leistungen = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/leistungen' }),
  schema: z.object({
    title: z.string(),
    /** Kurzer Titel für Kacheln/Navigation, falls abweichend */
    shortTitle: z.string().optional(),
    /** Fachbereich für Gruppierung in der Leistungsübersicht */
    category: z.enum([
      'Implantologie',
      'Zahnersatz',
      'Ästhetische Zahnmedizin',
      'Oralchirurgie',
      'CMD',
      'Zahnerhalt & Prophylaxe',
    ]),
    /** Teaser für Kachel-Grid und Meta-Description-Fallback */
    teaser: z.string(),
    metaTitle: z.string(),
    metaDescription: z.string(),
    /** Sortierung innerhalb der Kategorie */
    order: z.number().default(99),
    /** Motiv-Hinweis für das spätere echte Bild */
    imageNote: z.string().optional(),
    /** Häufige Fragen zu dieser Leistung */
    faq: z
      .array(z.object({ q: z.string(), a: z.string() }))
      .default([]),
  }),
});

export const collections = { leistungen };
