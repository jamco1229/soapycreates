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

const bio = defineCollection({
	type: 'content',
	schema: z.object({}),
});

export const collections = { mugs, bio };
