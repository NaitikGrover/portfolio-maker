import React from 'react';

/**
 * 21st.dev Component: Tilted Grid Hero
 * Registry URL: https://21st.dev/r/ruixen.ui/tilted-grid-hero
 * Install command: npx shadcn@latest add "https://21st.dev/r/ruixen.ui/tilted-grid-hero"
 * Author: ruixen.ui
 * Best for: Designers, Creative Agencies, Photographers, Product Portfolios
 *
 * Description: Hero with a curved, endlessly streaming 3D row of images that tilts
 * and bends toward the viewer at the edges, creating immersion and depth.
 */

interface TiltedGridHeroProps {
  headline?: string;
  tagline?: string;
  ctaText?: string;
  ctaLink?: string;
  images?: string[];
}

export const TiltedGridHero: React.FC<TiltedGridHeroProps> = ({
  headline = "Designing Human Interfaces with Clarity & Dimension",
  tagline = "Senior Product Designer crafting scalable multi-brand design systems, tactile mobile interfaces, and digital products.",
  ctaText = "View Case Studies",
  ctaLink = "#work",
  images = [
    "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&w=800&q=80",
  ],
}) => {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden bg-zinc-950 text-white px-6 py-24">
      {/* Curved 3D Tilted Grid Ribbon */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none [perspective:1000px] flex items-center justify-center">
        <div className="flex gap-6 -rotate-x-[20deg] rotate-y-[10deg] rotate-z-[-8deg] scale-110 opacity-30 dark:opacity-20 transition-opacity">
          <div className="flex gap-6 animate-marquee">
            {images.concat(images).map((src, i) => (
              <div
                key={i}
                className="w-64 h-96 rounded-3xl overflow-hidden border border-white/10 shadow-2xl flex-shrink-0 transform hover:scale-105 transition-transform"
              >
                <img src={src} alt="Case study frame" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>

        {/* Ambient Vignette Overlay */}
        <div className="absolute inset-0 bg-radial from-transparent via-zinc-950/70 to-zinc-950 pointer-events-none" />
      </div>

      {/* Hero Typography */}
      <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
        <span className="inline-block px-3 py-1 rounded-full text-xs font-mono uppercase tracking-widest bg-white/10 text-zinc-300 border border-white/10">
          UI/UX & Design Systems
        </span>

        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.08]">
          {headline}
        </h1>

        <p className="text-lg text-zinc-400 max-w-xl mx-auto leading-relaxed">
          {tagline}
        </p>

        <div className="pt-4 flex items-center justify-center gap-4">
          <a
            href={ctaLink}
            className="px-8 py-3.5 rounded-full bg-white text-zinc-950 font-bold text-sm hover:bg-zinc-200 transition-all shadow-xl hover:scale-105 active:scale-95"
          >
            {ctaText}
          </a>
          <a
            href="mailto:contact@example.com"
            className="px-6 py-3.5 rounded-full bg-zinc-900 border border-white/10 text-white text-sm font-semibold hover:bg-zinc-800 transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
};
