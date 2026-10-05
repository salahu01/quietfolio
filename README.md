<img src="public/media/cover.png" alt="quietfolio showcase cover">

# quietfolio — website

The project site for **[quietfolio-template](https://github.com/salahu01/quietfolio-template)**: a minimal, fast, accessible and SEO-first developer portfolio template (Next.js + Tailwind CSS v4 + Framer Motion) with projects, case studies, a blog and a printable résumé.

Source of **https://salahu01.github.io/quietfolio/**.

Next.js (App Router) exported as a static site, with GSAP + ScrollTrigger for motion and the launch film in `public/media/`. GitHub Pages serves the `gh-pages` branch.

- `app/page.tsx` — page markup and content
- `app/globals.css` — styles
- `lib/motion.js` — pixel field, canvas demos, ⌘K palette, filters, terminal and scroll animations

- Template source: [salahu01/quietfolio-template](https://github.com/salahu01/quietfolio-template) · sample demo: [salahu01.github.io/quietfolio-template](https://salahu01.github.io/quietfolio-template/)
- Film source: `motion-graphics/quietfolio-launch` (scene.html `render(t)` + synthesized score)
- Sister sites: [Globber](https://salahu01.github.io/globber/) · [LiveWall](https://salahu01.github.io/livewall/)

## What's inside

| Section | What the visitor learns |
| --- | --- |
| Hero | What the template is, with links to use it and to the live demo; theme toggle |
| Marquee | Stack and headline features: Next.js, Tailwind v4, no backend, JSON-LD, ⌘K, feeds, /resume, MIT |
| 01 / What you get | Pages and features, plus a working port of the home-page project filters |
| 02 / The look | Pixel-art banner, cursor FX, GitHub activity graph, reduced motion, brand assets — each with a live canvas sketch |
| 03 / Content → ship | Which file becomes which page, a 4-tab terminal (setup, CI, GitHub Pages, Netlify/Vercel) |
| 04 / SEO · a11y · hardening | Structured data, feeds and crawler files, CSP and headers, ⌘K palette miniature, no-flash theme demo |
| 05 / See it move | The 23.5 s launch film with clickable chapters |
| 06 / Make it yours | The 7-step checklist, sample experience and stack |

## Develop and deploy

```sh
npm install
npm run dev     # http://localhost:3000
npm run build   # static export to out/ (basePath /quietfolio)
npm run deploy  # build and force-push out/ to the gh-pages branch
```

Press <kbd>⌘K</kbd> / <kbd>Ctrl+K</kbd> anywhere to try the palette. Toggle the theme in the hero.

## Licence

MIT, same as the template and the film.
