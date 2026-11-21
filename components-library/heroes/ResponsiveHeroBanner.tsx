import React from 'react';
import { ArrowUpRight, Sparkles } from 'lucide-react';

/**
 * 21st.dev Component: Responsive Hero Banner
 * Registry URL: https://21st.dev/r/sensewood8/responsive-hero-banner
 * Install command: npx shadcn@latest add "https://21st.dev/r/sensewood8/responsive-hero-banner"
 * Author: sensewood8
 * Best for: High-End Studios, Design Directors, Modern SaaS, Minimalist Founders
 *
 * Description: Cinematic full-screen hero banner with subtle background imagery,
 * glassmorphic navigation blur, elegant typography, dual CTAs, and a partner logo grid.
 */

interface ResponsiveHeroBannerProps {
  badge?: string;
  title?: string;
  subtitle?: string;
  primaryBtnText?: string;
  primaryBtnLink?: string;
  secondaryBtnText?: string;
  secondaryBtnLink?: string;
}

export const ResponsiveHeroBanner: React.FC<ResponsiveHeroBannerProps> = ({
  badge = "Design Engineering & Creative Direction",
  title = "Building digital experiences where craft meets utility.",
  subtitle = "Specialized in high-end web applications, modular design tokens, and fluid interactive animations for ambitious brands.",
  primaryBtnText = "Explore Selected Works",
  primaryBtnLink = "#work",
  secondaryBtnText = "Download Resume",
  secondaryBtnLink = "#contact",
}) => {
  return (
    <section className="relative min-h-[88vh] flex flex-col justify-center overflow-hidden bg-[#0c0d10] text-white px-6 py-20">
      {/* Cinematic Ambient Backdrop */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <img
          src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1600&q=80"
          alt="Cinematic background"
          className="w-full h-full object-cover filter contrast-125 saturate-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c0d10] via-[#0c0d10]/80 to-transparent" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto space-y-6 pt-10">
        {/* Animated Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white/[0.08] text-zinc-300 border border-white/[0.12] backdrop-blur-md">
          <Sparkles className="w-3.5 h-3.5 text-zinc-300" />
          <span>{badge}</span>
        </div>

        {/* Title */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-[1.08]">
          {title}
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-xl text-zinc-400 max-w-2xl leading-relaxed">
          {subtitle}
        </p>

        {/* Dual Actions */}
        <div className="flex flex-wrap items-center gap-4 pt-4">
          <a
            href={primaryBtnLink}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-zinc-950 font-bold text-sm hover:bg-zinc-200 transition-all shadow-xl hover:scale-102"
          >
            <span>{primaryBtnText}</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
          <a
            href={secondaryBtnLink}
            className="px-6 py-3.5 rounded-full bg-zinc-900/80 border border-white/10 text-zinc-300 hover:text-white text-sm font-semibold transition-colors backdrop-blur-md"
          >
            {secondaryBtnText}
          </a>
        </div>
      </div>
    </section>
  );
};
