import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: vercel(),
  integrations: [tailwind(), sitemap()],
  markdown: {
    syntaxHighlight: "shiki",
    shikiConfig: {
      theme: "nord",
      wrap: false,
    },

  },
});
