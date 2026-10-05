import Effects from '@/components/Effects';
import { asset } from '@/lib/site';

const REPO = 'https://github.com/salahu01/quietfolio-template';
const DEMO = 'https://salahu01.github.io/quietfolio-template/';

const MARQUEE: [string, string][] = [
  ['Next.js', 'App Router'],
  ['Tailwind', 'CSS v4'],
  ['0', 'backend · fully static'],
  ['7', 'JSON-LD types'],
  ['⌘K', 'command palette'],
  ['RSS', '+ llms.txt + sitemap'],
  ['/resume', 'printable, from your data'],
  ['MIT', 'fork it, keep it'],
];

const FEATURES = [
  { ico: '◫', title: 'Projects with filters', tag: 'lib/data.ts → home', body: 'All / Web / Mobile / Desktop / Tooling filters, featured flags, LIVE / WIP / PRIVATE status, tags, live and repo links, and an optional case-study link. Try the live port below.' },
  { ico: '❐', title: 'Case studies', tag: '/work/[slug]', body: 'Long-form write-ups in content/work.json, rendered with the same block system as the blog. Three samples ship: Northwind Dashboard, Pocket Budget and Plainfile CLI.' },
  { ico: '✎', title: 'A blog that validates', tag: 'content/blog.json', body: 'Posts with per-post Open Graph images and an RSS feed. npm run validate catches broken internal links, missing images and duplicate slugs before you deploy.' },
  { ico: '⌘', title: '⌘K command palette', tag: 'keyboard-first', body: 'Searches sections, case studies, posts and your links. Keyboard-operable and escapable, and it returns focus where it was. Press ⌘K / Ctrl+K on this page.' },
  { ico: '◐', title: 'Theme with no flash', tag: 'pre-paint script', body: 'Dark and light themes. The choice is saved, and a tiny inline script applies it before first paint, so a light theme never flashes dark.' },
  { ico: '▤', title: 'Printable résumé', tag: '/resume', body: 'A /resume page generated from the same data as the home page. Print it from the browser, or run npm run resume to regenerate public/resume.pdf.' },
];

const PROJECTS = [
  { title: 'Northwind Dashboard', cat: 'Web', meta: 'Web · 2026 · LIVE', bg: 'linear-gradient(135deg,#8b7bff,#9db1ff)' },
  { title: 'Pocket Budget', cat: 'Mobile', meta: 'Mobile · 2025 · LIVE', bg: 'linear-gradient(135deg,#ff785a,#ffb04c)' },
  { title: 'Plainfile CLI', cat: 'Tooling', meta: 'Tooling · 2025 · LIVE', bg: 'linear-gradient(135deg,#8fa4ff,#9db1ff)' },
  { title: 'Orbit Notes', cat: 'Desktop', meta: 'Desktop · 2026 · WIP', bg: 'linear-gradient(135deg,#ff4d8d,#8b7bff)' },
];

const RINGS: [number, number, string][] = [
  [7, 100, 'JSON-LD types'],
  [9, 100, 'Content block types'],
  [5, 100, 'CI checks'],
  [0, 0, 'Third-party scripts'],
];

const PILLS = ['sitemap.xml', 'robots.txt', 'feed.xml', 'llms.txt', 'llms-full.txt', 'security.txt', 'manifest'];

const CHAPTERS = [
  { t: '1.2', range: '0.0 – 3.0s · TITLE', h: 'Letters drop in.', p: 'The title lands while the focus reticle from the template locks on.' },
  { t: '4.2', range: '3.0 – 5.9s · MANIFESTO', h: 'minimal. fast. open source.', p: 'The three-word thesis, over the same pixel cursor trail the template ships.' },
  { t: '8.0', range: '5.9 – 10.9s · LIVE SITE', h: 'The real build, browsed.', p: 'Footage of the sample site: projects, a case study and the blog.' },
  { t: '12.4', range: '10.9 – 13.9s · THEME', h: 'Dark to light.', p: 'A real click on the theme toggle.' },
  { t: '15.6', range: '13.9 – 17.4s · ⌘K', h: 'The palette, searching.', p: 'A live ⌘K search across sections, case studies and posts.' },
  { t: '18.6', range: '17.4 – 19.9s · MOBILE', h: 'Three phones, live scrolls.', p: 'The responsive layout, captured on mobile.' },
  { t: '21.6', range: '19.9 – 23.5s · END CARD', h: 'The URL types itself.', p: 'Where to get it.' },
];

const CHECKLIST: [string, string, string][] = [
  ['1 · You', 'lib/data.ts', 'Name, role, bio, links, projects, experience and tech stack. Set profile.githubUser for the activity graph.'],
  ['2 · Writing', 'content/work.json · content/blog.json', 'Case studies and posts. Run npm run validate to catch broken links, missing images and duplicate slugs.'],
  ['3 · Images', 'public/img/', 'Replace the avatar and project covers. make_sample_assets.py regenerates neutral placeholders.'],
  ['4 · Brand', 'make_brand_assets.py "Name" "Role" "domain"', 'Regenerates the favicon, Apple icon and social image from your avatar.'],
  ['5 · SEO', 'NEXT_PUBLIC_SITE_URL · lib/site.ts', 'Your canonical URL, description, keywords and Twitter handle.'],
  ['6 · Résumé', 'npm run resume', '/resume is generated from your data; this rebuilds public/resume.pdf.'],
  ['7 · Banner', 'make_banner.py', 'Edit the script to change the animated pixel-art scene.'],
];

const STACKS: [string, string][] = [
  ['Languages', 'TypeScript · JavaScript · Python · SQL'],
  ['Frontend', 'React · Next.js · Tailwind CSS · Framer Motion'],
  ['Backend', 'Node.js · PostgreSQL · Redis · GraphQL · REST'],
  ['DevOps & Cloud', 'Docker · GitHub Actions · Vercel · Netlify'],
  ['Tools', 'Git · Figma · Playwright · Vitest'],
];

export default function Home() {
  return (
    <>
      <div className="grain" />
      <div className="cur" /><div className="cur-dot" /><div id="trail" />
      <div id="loader">
        <div className="bar" /><div className="px" id="loaderPx" />
        <div className="n mono"><span id="ln">000</span></div>
        <div className="lbl">Built once at deploy —<br />served as plain HTML.</div>
      </div>
      <div id="progress" />
      <nav>
        <a className="logo" href="#hero"><b>q</b>quietfolio</a>
        <ul>
          {[['inside', 'Inside'], ['craft', 'Look'], ['ship', 'Content'], ['proof', 'Proof'], ['film', 'Film'], ['resume', 'Use it']].map(([id, label]) => (
            <li key={id}><a href={`#${id}`}>{label}</a></li>
          ))}
        </ul>
        <a className="logo mono" style={{ fontSize: '12px', fontWeight: 400, letterSpacing: '.12em' }} href={REPO}>GITHUB ↗</a>
      </nav>

      {/* HERO */}
      <section id="hero">
        <canvas id="field" />
        <div className="veil" />
        <div className="content wrap">
          <div className="kicker hero-in">Developer portfolio template · Next.js · MIT</div>
          <h1 className="title hero-indent" aria-label="quietfolio"><span id="htitle">quietfolio</span></h1>
          <p className="hero-sub hero-in hero-indent">A minimal, fast, accessible, SEO-first developer portfolio — <span className="serif" style={{ fontSize: '1.12em' }}>projects, case studies, a blog and a résumé,</span> from one data file and two JSON files.</p>
          <div className="hero-row hero-in hero-indent">
            <a className="btn solid magnet" href={REPO}>Use this template <span className="arr">↗</span></a>
            <a className="btn magnet" href={DEMO}>Open the live demo <span className="arr">↗</span></a>
            <button className="btn magnet" id="themeBtn">Toggle theme ◐</button>
          </div>
          <div className="hero-hud hero-in hero-indent">
            <div>STACK <b className="ok">NEXT.JS · TAILWIND v4</b></div>
            <div>BUILD <b>STATIC · 0 SERVERS</b></div>
            <div>LICENCE <b>MIT</b></div>
            <div>T <b id="hudT">00:00.000</b></div>
            <div>FPS <b id="hudF">—</b></div>
          </div>
        </div>
        <div className="scrollhint">Scroll<i /></div>
      </section>

      <div className="marquee"><div className="track" id="mq">
        {MARQUEE.flatMap(([b, s]) => [
          <div key={b} className="it"><b>{b}</b><span>{s}</span></div>,
          <div key={`${b}-sep`} className="it"><em>✦</em></div>,
        ])}
      </div></div>

      <div className="stripe" />

      {/* INSIDE */}
      <section id="inside" className="sec">
        <div className="wrap">
          <div className="sec-h"><div className="idx">01 / WHAT YOU GET</div><div>
            <h2 className="split">One-page home.<br /><span className="grad">Case studies. Blog. Résumé.</span></h2>
            <p>Built with <b>Next.js App Router, Tailwind CSS v4 and Framer Motion</b>. Fully static, no backend. The home page holds about, filterable projects, experience, tech stack and your GitHub activity. Around it: <b>/work/[slug]</b> case studies, a <b>/blog</b> and a printable <b>/resume</b>.</p>
          </div></div>
          <div className="feats">
            {FEATURES.map(f => (
              <div key={f.title} className="feat reveal"><div className="ico">{f.ico}</div><h4>{f.title}</h4><p>{f.body}</p><span className="tag">{f.tag}</span></div>
            ))}
          </div>
          <div className="fdemo reveal">
            <div className="bar">
              <span className="mono" style={{ fontSize: '11px', color: 'var(--dim)', letterSpacing: '.14em' }}>LIVE PORT — THE HOME FILTERS</span><span style={{ flex: 1 }} />
              {['All', 'Web', 'Mobile', 'Desktop', 'Tooling'].map(f => <button key={f} className={`chip${f === 'All' ? ' on' : ''}`} data-f={f}>{f}</button>)}
            </div>
            <div className="fgrid" id="fgrid">
              {PROJECTS.map(p => (
                <div key={p.title} className="fcard" data-c={p.cat}><div className="sw" style={{ background: p.bg }} /><div className="bd"><b>{p.title}</b><span>{p.meta}</span></div></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* LOOK (horizontal) */}
      <section id="craft">
        <div className="hwrap"><div className="htrack" id="htrack">
          <div className="dintro"><div className="kicker">02 / THE LOOK</div><h2 style={{ marginTop: '18px' }}>Quiet,<br /><span className="serif grad">not plain.</span></h2><p>The template&apos;s signature details, sketched live in your browser. Drag or scroll sideways to travel through them.</p></div>
          <article className="dcard"><div className="num">01 — PIXEL-ART BANNER</div><h3>An animated banner, generated.</h3><p><code>scripts/make_banner.py</code> renders the hero banner as WebP and GIF, plus a static PNG that reduced-motion visitors get instead. Edit the script to change the scene.</p><div className="viz"><canvas id="vizPixels" /></div></article>
          <article className="dcard"><div className="num">02 — CURSOR FX</div><h3>Pixel trail and focus reticle.</h3><p>One canvas draws a pixel trail, click sparks and camera-style brackets that lerp to the cursor and snap to links and buttons. Fine pointers only.</p><div className="viz"><canvas id="vizCursor" /></div></article>
          <article className="dcard"><div className="num">03 — GITHUB ACTIVITY</div><h3>Your contribution graph, on the home page.</h3><p>Set <code>profile.githubUser</code> and the home page shows your last year of contributions. It&apos;s the only outside origin the CSP allows.</p><div className="viz"><canvas id="vizActivity" /></div></article>
          <article className="dcard"><div className="num">04 — REDUCED MOTION</div><h3>Motion that knows when to stop.</h3><p>With <code>prefers-reduced-motion</code> set, the banner turns static and the cursor effects never start. Nothing important depends on animation.</p><div className="viz"><canvas id="vizWave" /></div></article>
          <article className="dcard"><div className="num">05 — BRAND ASSETS</div><h3>Favicon, Apple icon and social image.</h3><p><code>make_brand_assets.py &quot;Name&quot; &quot;Role&quot; &quot;domain&quot;</code> rebuilds them from your avatar, so shared links look like you, not like the template.</p><div className="viz"><img src={asset('media/cover.png')} alt="quietfolio social card" style={{ width: '100%', borderRadius: '10px', display: 'block' }} /><div style={{ display: 'flex', gap: '10px', marginTop: '10px', alignItems: 'center' }}><img src={asset('media/poster.png')} alt="" style={{ width: '64px', borderRadius: '8px' }} /><span className="mono" style={{ fontSize: '11px', color: 'var(--dim)' }}>app/icon.png · app/apple-icon.png · app/opengraph-image.png</span></div></div></article>
        </div></div>
      </section>

      {/* CONTENT + SHIP */}
      <section id="ship" className="sec">
        <div className="wrap">
          <div className="sec-h"><div className="idx">03 / CONTENT → SHIP</div><div>
            <h2 className="split">Write JSON.<br /><span className="grad">Get a site, a feed, a résumé.</span></h2>
            <p>Blocks are <b>h2 h3 p ul ol quote code img table</b>. Inline: <b>**bold** *italic* `code` [links]</b>. One validator, one checklist, and a static export or a Node build.</p>
          </div></div>
          <div className="imp reveal">
            <div className="row head"><div>Source of truth</div><div>What it becomes</div></div>
            <div className="row"><div><code>lib/data.ts</code> — name, role, bio, links, projects, experience, stack</div><div>The home page, the ⌘K palette and the printable <code>/resume</code></div></div>
            <div className="row"><div><code>content/work.json</code> — case studies with slug, title, date, cover, blocks</div><div><code>/work/[slug]</code> pages with BreadcrumbList and TechArticle JSON-LD</div></div>
            <div className="row"><div><code>content/blog.json</code> — posts in the same block format</div><div><code>/blog</code>, per-post Open Graph images and RSS at <code>/feed.xml</code></div></div>
            <div className="row"><div><code>public/img/</code> — avatar, banner and project covers</div><div>Regenerable: <code>make_sample_assets.py</code> · <code>make_banner.py</code> · <code>optimize_images.py</code></div></div>
          </div>
          <div className="term reveal">
            <div className="tb"><i /><i /><i /><div className="tt" id="ttabs" /></div>
            <pre id="tout" />
          </div>
          <div className="nums">
            <div className="num reveal"><b className="count" data-to="3">0</b><span>sample case studies</span></div>
            <div className="num reveal"><b className="count" data-to="3">0</b><span>sample blog posts</span></div>
            <div className="num reveal"><b className="count" data-to="4">0</b><span>sample projects</span></div>
            <div className="num reveal"><b className="count" data-to="0">0</b><span>servers needed</span></div>
          </div>
        </div>
      </section>

      {/* PROOF */}
      <section id="proof" className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="sec-h"><div className="idx">04 / SEO · A11Y · HARDENING</div><div>
            <h2 className="split">Found by search.<br /><span className="grad">Read by machines.</span></h2>
            <p>Every page gets metadata, a canonical URL and structured data. Crawlers, feed readers and LLMs all get a file made for them. And it works with a keyboard alone.</p>
          </div></div>
          <div className="rings reveal" id="rings">
            {RINGS.map(([n, v, label]) => (
              <div key={label} className="ring"><svg viewBox="0 0 130 130"><circle className="bgc" cx="65" cy="65" r="60" /><circle className="fgc" cx="65" cy="65" r="60" data-v={v} /></svg><b className="count" data-to={n}>0</b><span>{label}</span></div>
            ))}
          </div>
          <div className="seo-grid" style={{ marginTop: '22px' }}>
            <div className="jl reveal"><header><span>SEO · AEO · GEO</span><span>lib/seo.ts</span></header><pre>
              <span className="k">Person</span> · <span className="k">WebSite</span> · <span className="k">ProfilePage</span>{'\n'}
              <span className="k">TechArticle</span> · <span className="k">BlogPosting</span> · <span className="k">Blog</span>{'\n'}
              <span className="k">BreadcrumbList</span> — escaped, per route.{'\n'}
              Open Graph + Twitter cards, <span className="s">generated per post</span>,{'\n'}
              canonical URLs, <span className="s">sitemap.xml</span>, <span className="s">robots.txt</span>,{'\n'}
              RSS, <span className="s">llms.txt</span> + <span className="s">llms-full.txt</span>.</pre></div>
            <div className="jl reveal"><header><span>HARDENED BY DEFAULT</span><span>next.config.ts</span></header><pre>
              Security headers + <span className="s">strict CSP</span> on Node hosts,{'\n'}
              <span className="s">no third-party scripts</span>, X-Powered-By removed.{'\n'}
              <span className="k">a11y:</span> skip link, landmarks, AA contrast,{'\n'}
              visible focus, keyboard palette and filters.{'\n'}
              CI: <span className="s">lint → typecheck → validate → build → audit</span>.</pre></div>
          </div>
          <div className="pills reveal">{PILLS.map(p => <span key={p} className="pill"><b>{p}</b> ✓</span>)}</div>
          <div className="duo">
            <div className="mock reveal"><header><b>⌘K palette</b><button className="kbtn" id="palBtn">Press ⌘K</button></header><div className="stage"><p style={{ color: 'var(--dim)', fontSize: '15px', lineHeight: 1.6 }}>The template&apos;s palette lists sections, links, the résumé, every case study and every post. This page has a working miniature with the sample content — open it with the button or <span className="mono">⌘K / Ctrl+K</span>, type to filter, <span className="mono">↵</span> to jump.</p><p className="mono" style={{ marginTop: '14px', fontSize: '12px', color: 'var(--dim)' }}>indexes: sections · links · /resume · /work/* · /blog/*</p></div></div>
            <div className="mock reveal"><header><b>Theme toggle, no flash</b><button className="kbtn" id="demoTheme">Click: toggle</button></header><div className="stage"><div className="browser" id="demoBrowser"><div id="themeWipe" /><div className="tb"><i /><i /><i /></div><div className="pg"><h5 id="demoTitle">Dark, the default.</h5><div className="l" style={{ width: '92%' }} /><div className="l" style={{ width: '70%' }} /><div className="l" style={{ width: '82%' }} /><p className="mono" style={{ fontSize: '11px', opacity: 0.6 }}>Saved to localStorage, applied before first paint.</p></div></div></div></div>
          </div>
        </div>
      </section>

      {/* FILM */}
      <section id="film" className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="sec-h"><div className="idx">05 / SEE IT MOVE</div><div>
            <h2 className="split">The template, <span className="grad">in 23.5 seconds.</span></h2>
            <p>A launch film of the sample site: the live build, the theme toggle, the ⌘K palette and the mobile layout. Pick a chapter to jump to it.</p>
          </div></div>
          <div className="reel-grid">
            <div className="player reveal">
              <video id="reel" src={asset('media/reel.mp4')} poster={asset('media/poster.png')} controls playsInline preload="metadata" />
              <div className="cap"><i /><span id="reelCap">LAUNCH FILM · 23.5s</span></div>
            </div>
            <div className="chapters reveal" id="chapters">
              {CHAPTERS.map((c, i) => (
                <div key={c.t} className={`chap${i === 0 ? ' on' : ''}`} data-t={c.t}><div className="t">{c.range}</div><h4>{c.h}</h4><p>{c.p}</p></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* USE IT */}
      <section id="resume" className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="sec-h"><div className="idx">06 / MAKE IT YOURS</div><div>
            <h2 className="split">Seven steps.<br /><span className="grad">Then it&apos;s yours.</span></h2>
            <p>The template ships with neutral sample content — <b>Alex Morgan</b>, a fictional full-stack developer — so your copy starts clean. Click <b>Use this template</b>, work through the checklist, deploy.</p>
          </div></div>
          <div className="imp reveal">
            <div className="row head"><div>Step · where</div><div>What you change</div></div>
            {CHECKLIST.map(([step, where, what]) => (
              <div key={step} className="row"><div><b>{step}</b> — <code>{where}</code></div><div>{what}</div></div>
            ))}
          </div>
          <div className="res-grid" style={{ marginTop: '40px' }}>
            <div className="reveal"><div className="mono" style={{ fontSize: '11px', letterSpacing: '.16em', color: 'var(--dim)' }}>SAMPLE EXPERIENCE (REPLACE WITH YOURS)</div>
              <div className="tl">
                <div className="tl-item"><time>2023 — PRESENT</time><b>Senior Full Stack Developer · Acme Corp</b><p>Lead a small team building customer-facing web products, from architecture and APIs to CI/CD and performance budgets.</p></div>
                <div className="tl-item"><time>2020 — 2023</time><b>Full Stack Developer · Globex</b><p>Built and shipped internal tools and a public dashboard used by thousands of people every week.</p></div>
              </div>
              <div className="hero-row"><a className="btn solid magnet" href={REPO}>Use this template <span className="arr">↗</span></a><a className="btn magnet" href={`${DEMO}resume/`}>Sample /resume <span className="arr">↗</span></a></div>
            </div>
            <div className="stacks reveal">
              {STACKS.map(([k, v]) => <div key={k} className="stack"><small>{k} · sample stack</small><p>{v}</p></div>)}
            </div>
          </div>
        </div>
      </section>

      <div className="stripe" />
      <footer>
        <div id="bigbg">quietfolio</div>
        <div className="wrap">
          <div className="kicker">Open source · MIT · by Muhammed Swalahudheen C V</div>
          <div className="cta" style={{ marginTop: '22px' }}><a href={REPO}>Star it on<br /><span className="grad">GitHub ↗</span></a></div>
          <div className="bottom">
            <span>quietfolio — © salahu01 · MIT · also by the author: <a href="https://salahu01.github.io/globber/">Globber</a> · <a href="https://salahu01.github.io/livewall/">LiveWall</a></span>
            <span><a href={DEMO}>Demo</a> · <a href={REPO}>Source</a> · <a href={`${REPO}/issues`}>Issues</a> · <a href="https://salahu01.github.io">salahu01.github.io</a></span>
          </div>
        </div>
      </footer>

      <div id="pal"><div className="box"><input id="palIn" placeholder="Search sections, projects, posts…" autoComplete="off" /><div className="opts" id="palOpts" /></div></div>

      <Effects />
    </>
  );
}
