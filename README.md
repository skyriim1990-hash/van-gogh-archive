# Van Gogh — a concept archive

An independent concept project: a small editorial archive of ten paintings by Vincent van Gogh. It is not an official or institutional Van Gogh site.

## About

- An independent concept and archive project.
- Ten published paintings, arranged by the places where Van Gogh worked: Nuenen, Paris, Arles, Saint-Rémy and Auvers.
- Presented in an editorial, gallery-oriented way: a homepage, a filterable list of works, a page for each painting and a page for each period.
- It states plainly that it is not an official site and is not affiliated with any institution (see *Disclosure*).

## Tech

- [Astro](https://astro.build) 5
- [Vercel](https://vercel.com) for hosting
- GitHub for the source, branch `main`

## Content

- Ten artworks. Their data is in `src/data/artworks.js` and the photographs are in `src/assets/artworks/`; Astro resizes them at build.
- Public routes:
  - `/`
  - `/works`
  - `/works/[slug]`
  - `/periods`
  - `/about`
  - `/contact`

## Development

```bash
npm install
npm run dev      # local development server
npm run build    # production build
npm run preview  # see the note below
```

- `package.json` does not fix a port for `npm run dev`, so Astro's default applies. The Claude Code launch configuration in `.claude/launch.json` runs it on port `4399`.
- The site is built with the Vercel adapter, and `astro preview` is not supported under that adapter. Use `npm run dev` locally.

## Production

https://van-gogh-archive.vercel.app/

## Project notes

- The public site is an independent concept.
- Artwork facts and content are presented as they are in the current project data.

## Disclosure

An independent concept project — not an official Van Gogh site, and not affiliated with any institution named in it.
