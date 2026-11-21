import React, { useState } from 'react';

/**
 * 21st.dev Component: Tiger Tear Reveal
 * Registry URL: https://21st.dev/r/kedhareswer/tiger-tear-reveal
 * Install command: npx shadcn@latest add "https://21st.dev/r/kedhareswer/tiger-tear-reveal"
 * Author: kedhareswer
 * Best for: High-Impact Creatives, Creative Agencies, Rebel Studios, Video Artists
 *
 * Description: Interactive scroll & hover paper-tear hero reveal: a bold slogan cracks
 * and rips in two with paper texture, revealing an eye-tracking graphic from behind.
 */

interface TigerTearRevealHeroProps {
  boldWord?: string;
  tagline?: string;
  ctaText?: string;
  ctaLink?: string;
}

export const TigerTearRevealHero: React.FC<TigerTearRevealHeroProps> = ({
  boldWord = "BREAKTHROUGH",
  tagline = "High-velocity storytelling, raw video editing, and unconventional creative execution.",
  ctaText = "Enter Portfolio",
  ctaLink = "#work",
}) => {
  const [isTorn, setIsTorn] = useState(false);

  return (
    <section className="relative min-h-[85vh] flex flex-col justify-center items-center overflow-hidden bg-[#0a0a0c] text-white px-6 py-20 select-none">
      {/* Interactive Paper Tear Container */}
      <div
        onMouseEnter={() => setIsTorn(true)}
        onMouseLeave={() => setIsTorn(false)}
        onClick={() => setIsTorn(!isTorn)}
        className="relative cursor-pointer max-w-5xl mx-auto text-center py-10"
      >
        {/* Underneath Revealed Asset / Graphic */}
        <div
          className={`absolute inset-0 flex items-center justify-center transition-all duration-700 pointer-events-none ${
            isTorn ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
          }`}
        >
          <div className="w-40 h-40 rounded-full bg-emerald-500/20 blur-2xl" />
          <div className="relative text-emerald-400 font-mono text-sm tracking-widest uppercase font-bold flex items-center gap-2">
            <span>● REVEALED • UNFILTERED CREATIVE CRAFT ●</span>
          </div>
        </div>

        {/* Top Half of Torn Slogan */}
        <div
          className={`transition-all duration-500 ease-out font-black text-6xl sm:text-8xl md:text-9xl tracking-tighter text-white overflow-hidden pb-1 ${
            isTorn ? '-translate-y-8 -rotate-1 opacity-80' : 'translate-y-0 rotate-0'
          }`}
        >
          {boldWord}
        </div>

        {/* Tear Jagged Line Indicator */}
        <div className="w-full h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent my-1" />

        {/* Bottom Half of Torn Slogan */}
        <div
          className={`transition-all duration-500 ease-out font-black text-6xl sm:text-8xl md:text-9xl tracking-tighter text-zinc-500 overflow-hidden pt-1 ${
            isTorn ? 'translate-y-8 rotate-1 opacity-60' : 'translate-y-0 rotate-0'
          }`}
        >
          {boldWord}
        </div>
      </div>

      {/* Subtitle & CTA */}
      <div className="relative z-10 max-w-xl mx-auto text-center space-y-6 mt-6">
        <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
          {tagline}
        </p>

        <div className="flex justify-center gap-4">
          <a
            href={ctaLink}
            className="px-8 py-3.5 rounded-full bg-white text-zinc-950 font-bold text-sm hover:bg-zinc-200 transition-all shadow-xl hover:scale-105 active:scale-95"
          >
            {ctaText}
          </a>
        </div>
        <div className="text-xs font-mono text-zinc-600">Hover or click slogan to tear</div>
      </div>
    </section>
  );
};
