import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';

/**
 * `site` drives the canonical links and the sitemap. The same value appears
 * once more in public/robots.txt.
 *
 * `output` stays 'static': every page is prerendered to plain HTML at build
 * time. The Vercel adapter is kept so the redirects below are served as real
 * 301s rather than as HTML refresh pages. `astro preview` does not work under
 * the adapter; `astro dev` is unaffected.
 */
export default defineConfig({
  site: 'https://van-gogh-archive.vercel.app',
  trailingSlash: 'ignore',
  adapter: vercel(),
  /* The two routes the previous concept owned. Nothing external links to them,
     but a redirect costs a line and means a shared URL still lands somewhere
     that exists rather than on a 404. */
  redirects: {
    '/art-sport': '/periods',
    '/exhibitions': '/periods',
  },
  integrations: [sitemap()],
  build: {
    inlineStylesheets: 'auto',
  },
});
