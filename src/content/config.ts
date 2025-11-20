import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  // Schema ensures frontmatter correctness
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    description: z.string().optional(),
    hero_image: z.string().optional(),
    tags: z.array(z.string()).optional(),
    // Transform string to Date object
  }),
});

export const collections = { blog };
