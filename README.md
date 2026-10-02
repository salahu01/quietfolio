<img src="media/cover.png" alt="quietfolio showcase cover">

# quietfolio — showcase site

A dynamic, motion-graphical showcase for **[quietfolio](https://github.com/salahu01/quietfolio)** — a minimal, fast, accessible, SEO-first developer portfolio template (Next.js + Tailwind + Framer Motion). Doubles as a motion-design résumé: every section is a live demo of a technique from the 23.5&nbsp;s code-driven launch showreel.

Source of **https://salahu01.github.io/quietfolio-showcase/** (or whatever repo name you push this to).

A single static page: `index.html` with inline CSS and JS, GSAP from cdnjs, and the launch film in `media/`. No build step. GitHub Pages serves `main` directly.

- Template source: [salahu01/quietfolio](https://github.com/salahu01/quietfolio) · live demo: [salahu01.github.io/quietfolio](https://salahu01.github.io/quietfolio/)
- Film source: `motion-graphics/quietfolio-launch` (scene.html `render(t)` + synthesized score)
- Sister sites: [Globber](https://salahu01.github.io/Globber/) · [LiveWall](https://salahu01.github.io/livewall/)

## What's inside

| Section | What the visitor learns |
| --- | --- |
| Hero | Procedural pixel field, kinetic title, live HUD (T + FPS), theme toggle |
| Marquee | The numbers: 23.5 s film, Lighthouse 100s, 0 backend, −14 LUFS, MIT |
| 01 / The film | Embedded `media/reel.mp4` with 7 clickable chapters that scrub the video |
| 02 / The craft | Horizontal-scroll cards, each with a **live canvas demo** (waveform, cursor/reticle, audio bars, pixel wipe) + the `npm run build` pipeline |
| 03 / Inside quietfolio | 6 feature cards + a working port of the home-page project filters |
| 04 / Proof | Animated Lighthouse rings, JSON-LD/CSP notes, working **⌘K palette** miniature, circular theme-reveal demo |
| 05 / Content → ship | Content model table (`lib/data.ts`, `content/*.json`, `public/img/`), 4-tab terminal (Pages / Check / Film / Make-it-yours), animated counters |
| 06 / The human | Sample timeline, stack groups, links to Globber + LiveWall |
| Footer | Giant outline type, star-on-GitHub CTA |

## Preview locally

```sh
python3 -m http.server 8000   # then open http://localhost:8000
```

Press <kbd>⌘K</kbd> / <kbd>Ctrl+K</kbd> anywhere to try the palette. Toggle the theme in the hero.

## Publish to GitHub Pages

```sh
git init && git add . && git commit -m "feat: quietfolio motion showcase"
gh repo create quietfolio-showcase --public --source=. --push
# then: Settings → Pages → Deploy from a branch → main / root
```

`.nojekyll` is included so Pages serves `media/` as-is. The film (`media/reel.mp4`, ~8 MB) is the LinkedIn upload copy — under the 100 MB file limit.

## Licence

MIT, same as the template and the film.
