import {defineCollection, z} from 'astro:content';

const projectsCollection = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({ 
    title: z.string(),
    description: z.string(),
    image: image(), 
    tags: z.array(z.string()),
    github: z.string().url().optional(),
    live: z.string().url().optional(),
    backendFocus: z.array(z.string()),
    featured: z.boolean().default(false),
  }),
});

export const collections = {
    projects: projectsCollection,
};