// 1. Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";

// 2. Define a `type` and `schema` for each collection
const pageText = defineCollection({
  type: "content", // v2.5.0 and later
  schema: ({ image }) =>
    z.object({
      heading: z.string(),
      image: image().refine((img) => img.width >= 1080, {
        message: "Cover image must be at least 1080 pixels wide!",
      }),
      imageAlt: z.string(),
    }),
});

const faqs = defineCollection({
  type: "content", // v2.5.0 and later
  schema: ({ image }) =>
    z.object({
      question: z.string(),
    }),
});

// 3. Export a single `collections` object to register your collection(s)
export const collections = {
  pageText: pageText,
  faqs: faqs,
};
