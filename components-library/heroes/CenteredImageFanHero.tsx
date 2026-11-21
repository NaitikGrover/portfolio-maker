import React from 'react';
import { ArrowRight, Star } from 'lucide-react';

/**
 * 21st.dev Component: Centered Hero with Image Fan
 * Registry URL: https://21st.dev/r/felipemenezes098/hero-10
 * Install command: npx shadcn@latest add "https://21st.dev/r/felipemenezes098/hero-10"
 * Author: felipemenezes098
 * Best for: Product Designers, Content Creators, Independent Founders, Portfolios
 *
 * Description: Centered hero section with a highlighted serif/sans headline, description,
 * dual action buttons, social proof, and a fanned collage of overlapping project preview images.
 */

interface CenteredImageFanHeroProps {
  headline?: string;
  highlightWord?: string;
  description?: string;
  primaryLink?: string;
  images?: [string, string, string];
}

export const CenteredImageFanHero: React.FC<CenteredImageFanHeroProps> = ({
  headline = "Designing intuitive interfaces that drive real",
  highlightWord = "business impact.",
  description = "Senior Product Designer & Systems Thinker with 7+ years creating digital products used by millions worldwide.",
  primaryLink = "#work",
  images = [
    "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80",
  ],
}) => {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center items-center overflow-hidden bg-zinc-950 text-white px-6 pt-20 pb-16">
      {/* Ambient Vignette */}
      <div className="absolute inset-0 bg-radial from-white/[0.04] to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
        {/* Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.1]">
          {headline}{' '}
          <span className="underline decoration-white/30 underline-offset-8">
            {highlightWord}
          </span>
        </h1>

        {/* Description */}
        <p className="text-base sm:text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
          {description}
        </p>

        {/* Actions */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <a
            href={primaryLink}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-zinc-950 font-bold text-sm hover:bg-zinc-200 transition-all shadow-xl hover:scale-105 active:scale-95"
          >
            <span>Explore Projects</span>
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#contact"
            className="px-6 py-3.5 rounded-full bg-zinc-900 border border-white/10 text-zinc-300 hover:text-white text-sm font-semibold transition-colors"
          >
            Get in Touch
          </a>
        </div>

        {/* Fanned 3-Image Collage */}
        <div className="relative pt-12 flex justify-center items-center max-w-3xl mx-auto h-72 sm:h-96">
          {/* Left Fanned Image */}
          <div className="absolute w-56 sm:w-80 aspect-[16/10] rounded-2xl overflow-hidden border border-white/10 shadow-2xl -rotate-12 -translate-x-20 sm:-translate-x-36 hover:rotate-0 hover:z-30 transition-all duration-500">
            <img src={images[0]} alt="Project 1" className="w-full h-full object-cover" />
          </div>

          {/* Right Fanned Image */}
          <div className="absolute w-56 sm:w-80 aspect-[16/10] rounded-2xl overflow-hidden border border-white/10 shadow-2xl rotate-12 translate-x-20 sm:translate-x-36 hover:rotate-0 hover:z-30 transition-all duration-500">
            <img src={images[2]} alt="Project 3" className="w-full h-full object-cover" />
          </div>

          {/* Center Main Image */}
          <div className="relative z-20 w-64 sm:w-96 aspect-[16/10] rounded-2xl overflow-hidden border border-white/20 shadow-2xl shadow-black/80 hover:scale-105 transition-all duration-500">
            <img src={images[1]} alt="Project 2 (Featured)" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
};
