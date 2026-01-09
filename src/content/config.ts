import { defineCollection, z } from 'astro:content';

const mugs = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		date: z.date(),
		image: z.string(),
		bgImage: z.string(),
	}),
});

export const collections = { mugs };
