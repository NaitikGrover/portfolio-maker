import React from 'react';

/**
 * 21st.dev Component: Image Stream Hero
 * Registry URL: https://21st.dev/r/ruixen.ui/image-stream-hero
 * Install command: npx shadcn@latest add "https://21st.dev/r/ruixen.ui/image-stream-hero"
 * Author: ruixen.ui
 * Best for: Video Editors, Motion Artists, Visual Storytellers, Creative Directors
 *
 * Description: Two rails of visual images ride out of a vanishing point at the center
 * and sweep to both edges, growing and turning in 3D perspective in an infinite loop.
 */

interface ImageStreamHeroProps {
  title?: string;
  subtitle?: string;
  badgeText?: string;
  images?: string[];
  ctaPrimaryText?: string;
  ctaPrimaryLink?: string;
  ctaSecondaryText?: string;
  ctaSecondaryLink?: string;
}

export const ImageStreamHero: React.FC<ImageStreamHeroProps> = ({
  title = "Crafting Visual Stories That Captivate & Convert",
  subtitle = "High-retention editing, cinematic color grading, and dynamic motion graphics with over 75M+ organic views delivered.",
  badgeText = "Available for Q1 2026 Projects",
  images = [
    "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80",
  ],
  ctaPrimaryText = "Watch Showreel (1:45)",
  ctaPrimaryLink = "#showreel",
  ctaSecondaryText = "Explore Selected Edits",
  ctaSecondaryLink = "#projects",
}) => {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center items-center overflow-hidden bg-zinc-950 text-white pt-20 pb-16">
      {/* 3D Perspective Streaming Rails Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none [perspective:1200px] flex items-center justify-center">
        {/* Left Vanishing Rail */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 flex gap-6 -rotate-y-[45deg] rotate-z-[6deg] -translate-x-12 opacity-30 dark:opacity-20 hover:opacity-50 transition-opacity duration-700">
          <div className="flex gap-6 animate-marquee flex-row-reverse">
            {images.concat(images).map((src, idx) => (
              <div
                key={`left-${idx}`}
                className="w-48 h-64 sm:w-60 sm:h-80 rounded-2xl overflow-hidden border border-white/10 shadow-2xl flex-shrink-0"
              >
                <img src={src} alt="Stream frame" className="w-full h-full object-cover filter contrast-110" />
              </div>
            ))}
          </div>
        </div>

        {/* Right Vanishing Rail */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 flex gap-6 rotate-y-[45deg] -rotate-z-[6deg] translate-x-12 opacity-30 dark:opacity-20 hover:opacity-50 transition-opacity duration-700">
          <div className="flex gap-6 animate-marquee">
            {images.concat(images).map((src, idx) => (
              <div
                key={`right-${idx}`}
                className="w-48 h-64 sm:w-60 sm:h-80 rounded-2xl overflow-hidden border border-white/10 shadow-2xl flex-shrink-0"
              >
                <img src={src} alt="Stream frame" className="w-full h-full object-cover filter contrast-110" />
              </div>
            ))}
          </div>
        </div>

        {/* Central Ambient Gradient Vignette */}
        <div className="absolute inset-0 bg-radial from-transparent via-zinc-950/80 to-zinc-950 pointer-events-none" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center space-y-6">
        {/* Badge */}
        {badgeText && (
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-white/[0.08] text-zinc-300 border border-white/[0.12] backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>{badgeText}</span>
          </div>
        )}

        {/* Title */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.08]">
          {title}
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <a
            href={ctaPrimaryLink}
            className="px-7 py-3.5 rounded-full bg-white text-zinc-950 font-bold text-sm hover:bg-zinc-200 transition-all shadow-xl hover:scale-105 active:scale-95"
          >
            {ctaPrimaryText}
          </a>
          <a
            href={ctaSecondaryLink}
            className="px-6 py-3.5 rounded-full bg-zinc-900/80 text-zinc-300 hover:text-white border border-white/[0.12] hover:border-white/[0.25] text-sm font-semibold transition-all backdrop-blur-md"
          >
            {ctaSecondaryText}
          </a>
        </div>
      </div>
    </section>
  );
};
