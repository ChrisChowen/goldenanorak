// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://christopherhogg.net',
  base: process.env.ASTRO_BASE || '/',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()]
  }
});
