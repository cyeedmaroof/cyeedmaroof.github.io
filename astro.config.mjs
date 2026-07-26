import { defineConfig } from 'astro/config';

// `site` is used for canonical URLs, sitemap, and OG tags.
// Set for a GitHub Pages *user page* (repo named cyeedmaroof.github.io) — serves at
// the root, so no `base` path is needed. Change this if you add a custom domain,
// or to your *.vercel.app / *.pages.dev URL if you deploy there instead.
export default defineConfig({
  site: 'https://cyeedmaroof.github.io',
});
