import { defineConfig } from "astro/config"
import react from "@astrojs/react"
import sitemap from "@astrojs/sitemap"
import tailwind from "@astrojs/tailwind"
import vercel from "@astrojs/vercel/serverless"

export default defineConfig({
  site: "https://me.jesubohrdev.com/",
  output: "server",
  adapter: vercel(),
  integrations: [sitemap(), react(), tailwind()],
})
