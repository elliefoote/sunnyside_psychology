// 1. Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";

// 2. Define a `type` and `schema` for each collection
const pageText = defineCollection({
  type: "content", // v2.5.0 and later
  schema: ({ image }) =>
    z.object({
      heading: z.string(),
      image1: image().refine((img) => img.width >= 1080, {
        message: "Cover image must be at least 1080 pixels wide!",
      }),
      image1Alt: z.string(),
      image2: image().refine((img) => img.width >= 1080, {
        message: "Cover image must be at least 1080 pixels wide!",
      }),
      image2Alt: z.string(),
    }),
});

const faqs = defineCollection({
  type: "content", // v2.5.0 and later
  schema: z.object({
    question: z.string(),
  }),
});

const fees = defineCollection({
  type: "content", // v2.5.0 and later
  schema: z.object({
    heading: z.string(),
    introText: z.string(),
    fee: z.string().optional(),
    rebate: z.string().optional(),
    outOfPocketCost: z.string().optional(),
  }),
});

// 3. Export a single `collections` object to register your collection(s)
export const collections = {
  pageText: pageText,
  faqs: faqs,
  fees: fees,
};
