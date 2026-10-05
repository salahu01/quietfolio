import type { Metadata, Viewport } from 'next';
import { Instrument_Serif, Inter, JetBrains_Mono } from 'next/font/google';
import { asset } from '@/lib/site';
import './globals.css';

const sans = Inter({ subsets: ['latin'], weight: ['300', '400', '500', '700'], variable: '--font-sans' });
const mono = JetBrains_Mono({ subsets: ['latin'], weight: ['400', '600', '800'], variable: '--font-mono' });
const serif = Instrument_Serif({ subsets: ['latin'], weight: '400', style: ['normal', 'italic'], variable: '--font-serif' });

const description =
  'quietfolio is a minimal, fast, accessible and SEO-first developer portfolio template: Next.js App Router, Tailwind CSS v4 and Framer Motion. Projects, case studies, a blog and a printable résumé. Fully static, no backend, MIT.';

export const metadata: Metadata = {
  metadataBase: new URL('https://salahu01.github.io'),
  title: 'quietfolio — a minimal, fast, SEO-first portfolio template',
  description,
  icons: { icon: asset('media/poster.png') },
  openGraph: {
    title: 'quietfolio — minimal, fast, open-source portfolio template',
    description: 'Next.js · Tailwind v4 · Framer Motion. Case studies, blog, ⌘K palette, pixel banner, printable résumé. Static export, no backend, MIT.',
    images: ['/quietfolio/media/cover.png'],
  },
  twitter: { card: 'summary_large_image' },
};

export const viewport: Viewport = { themeColor: '#0a0a0a' };

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'quietfolio',
  url: 'https://salahu01.github.io/quietfolio/',
  author: { '@type': 'Person', name: 'Muhammed Swalahudheen C V' },
  description,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="dark" className={`${sans.variable} ${mono.variable} ${serif.variable}`}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <noscript>
          <style>{'.reveal{opacity:1!important;transform:none!important}#loader{display:none!important}'}</style>
        </noscript>
      </head>
      <body>{children}</body>
    </html>
  );
}
