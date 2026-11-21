import React from 'react';
import { Star, ArrowRight } from 'lucide-react';

/**
 * 21st.dev Component: Agency Hero 01
 * Registry URL: https://21st.dev/r/shadcnspace/hero-01
 * Install command: npx shadcn@latest add "https://21st.dev/r/shadcnspace/hero-01"
 * Author: shadcnspace
 * Best for: Digital Agencies, Independent Consultants, Full-Stack Devs, Freelance Engineers
 *
 * Description: Full-width agency landing page hero with animated headline, social proof
 * trust avatars, star rating review badges, dual CTAs, and a partner logo marquee ticker.
 */

interface AgencyHero01Props {
  badge?: string;
  headline?: string;
  description?: string;
  primaryCtaText?: string;
  primaryCtaLink?: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  ratingScore?: string;
  reviewCount?: string;
}

export const AgencyHero01: React.FC<AgencyHero01Props> = ({
  badge = "✦ Transforming Ideas into Production Digital Experiences",
  headline = "We build high-performing digital products for visionary teams.",
  description = "Partnering with founders and engineering leaders to design, build, and scale custom web platforms with zero technical debt.",
  primaryCtaText = "Start a Project",
  primaryCtaLink = "#contact",
  secondaryCtaText = "View Case Studies",
  secondaryCtaLink = "#projects",
  ratingScore = "4.9/5.0",
  reviewCount = "from 40+ client engagements",
}) => {
  return (
    <section className="relative min-h-[85vh] flex flex-col justify-center overflow-hidden bg-zinc-950 text-white pt-24 pb-16 px-6">
      {/* Subtle Grid Ambient Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-7">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium bg-white/[0.06] text-zinc-300 border border-white/[0.1] backdrop-blur-md">
          <span>{badge}</span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.08]">
          {headline}
        </h1>

        {/* Description */}
        <p className="text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed">
          {description}
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <a
            href={primaryCtaLink}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-white text-zinc-950 font-bold text-sm hover:bg-zinc-200 transition-all shadow-xl hover:scale-102"
          >
            <span>{primaryCtaText}</span>
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href={secondaryCtaLink}
            className="px-6 py-3.5 rounded-xl bg-zinc-900 border border-white/10 text-zinc-300 hover:text-white text-sm font-semibold transition-colors"
          >
            {secondaryCtaText}
          </a>
        </div>

        {/* Trust Avatars & Star Rating */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-3 text-xs text-zinc-400">
          <div className="flex -space-x-2 overflow-hidden">
            <img className="inline-block h-8 w-8 rounded-full ring-2 ring-zinc-950 object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" alt="Client avatar" />
            <img className="inline-block h-8 w-8 rounded-full ring-2 ring-zinc-950 object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80" alt="Client avatar" />
            <img className="inline-block h-8 w-8 rounded-full ring-2 ring-zinc-950 object-cover" src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=100&q=80" alt="Client avatar" />
          </div>
          <div className="flex items-center gap-1.5">
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-current" />
              ))}
            </div>
            <span className="font-bold text-white ml-1">{ratingScore}</span>
            <span>{reviewCount}</span>
          </div>
        </div>
      </div>
    </section>
  );
};
