// 1. Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";

// 2. Define a `type` and `schema` for each collection
const pageText = defineCollection({
  type: "content", // v2.5.0 and later
  schema: z.object({
    heading: z.string(),
    image: z.string().optional(),
  }),
});

// 3. Export a single `collections` object to register your collection(s)
export const collections = {
  pageText: pageText,
};
