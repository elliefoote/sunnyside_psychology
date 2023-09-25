import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import { astroImageTools } from "astro-imagetools";
import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), astroImageTools],
  adapter: node({
    mode: "standalone",
  }),
  output: "hybrid",
});
