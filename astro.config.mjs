import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

// https://astro.build/config
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  site: 'https://jesubohr-dev.vercel.app/',
  output: 'server',
  integrations: [mdx(), sitemap(), react(), tailwind()],
  adapter: vercel()
});