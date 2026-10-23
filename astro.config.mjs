import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import vercel from '@astrojs/vercel/static';

// https://astro.build/config
export default defineConfig({
  site: "https://www.rishivhavle.works",
  output: 'static',
  adapter: vercel(),
  integrations: [
    tailwind(),
    sitemap({ customPages: ["https://www.rishivhavle.works/accelute"] }),
  ],
  markdown: {
    syntaxHighlight: "shiki",
    shikiConfig: {
      theme: "nord",
      wrap: false,
    },

  },
});
