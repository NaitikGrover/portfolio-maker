import React from 'react';

/**
 * 21st.dev Component: Perspective Tunnel Hero
 * Registry URL: https://21st.dev/r/daiwiikharihar/perspective-tunnel-hero
 * Install command: npx shadcn@latest add "https://21st.dev/r/daiwiikharihar/perspective-tunnel-hero"
 * Author: daiwiikharihar
 * Best for: 3D Developers, Systems Engineers, Game Devs, Next-Gen SaaS Founders
 *
 * Description: 3D Z-axis spatial fly-through hero component where cards and geometric
 * elements burst out of a golden-angle central tunnel toward the camera.
 */

interface PerspectiveTunnelHeroProps {
  headline?: string;
  subtext?: string;
  badge?: string;
  ctaText?: string;
  ctaLink?: string;
}

export const PerspectiveTunnelHero: React.FC<PerspectiveTunnelHeroProps> = ({
  headline = "Engineering Resilient Distributed Architecture",
  subtext = "High-throughput cloud systems, distributed databases, and sub-millisecond API routing.",
  badge = "Staff Engineer • Cloud Architecture",
  ctaText = "Inspect Architecture",
  ctaLink = "#projects",
}) => {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-[#030712] text-white px-6">
      {/* 3D Perspective Golden-Angle Tunnel Rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none [perspective:800px]">
        {/* Layer 1 - Deep Vanishing Ring */}
        <div className="absolute w-40 h-40 rounded-full border border-white/5 animate-ping opacity-20 [animation-duration:6s]" />

        {/* Layer 2 - Mid Ring with Concentric Orbit */}
        <div className="absolute w-80 h-80 rounded-full border border-dashed border-white/10 animate-spin [animation-duration:40s]" />

        {/* Layer 3 - Outer Perspective Orbit */}
        <div className="absolute w-[36rem] h-[36rem] rounded-full border border-white/[0.08] [transform:rotateX(60deg)] opacity-40" />
        <div className="absolute w-[50rem] h-[50rem] rounded-full border border-white/[0.04] [transform:rotateX(60deg)] opacity-20" />

        {/* Floating Spatial Cards along Z-Axis */}
        <div className="absolute top-1/4 left-10 md:left-24 px-4 py-3 rounded-2xl bg-zinc-900/80 border border-white/10 backdrop-blur-md shadow-2xl [transform:translateZ(100px)_rotateY(-15deg)] hidden sm:block">
          <div className="text-xs font-mono text-emerald-400 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> p99 Latency &lt; 28ms
          </div>
          <div className="text-[11px] text-zinc-500 font-mono mt-1">Multi-Region Routing</div>
        </div>

        <div className="absolute bottom-1/4 right-10 md:right-24 px-4 py-3 rounded-2xl bg-zinc-900/80 border border-white/10 backdrop-blur-md shadow-2xl [transform:translateZ(80px)_rotateY(15deg)] hidden sm:block">
          <div className="text-xs font-mono text-cyan-400 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" /> 10M+ Daily Events
          </div>
          <div className="text-[11px] text-zinc-500 font-mono mt-1">Zero-Loss Kafka Pipeline</div>
        </div>
      </div>

      {/* Central Foreground Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider bg-white/[0.06] text-zinc-300 border border-white/[0.12] backdrop-blur-md">
          {badge}
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.08]">
          {headline}
        </h1>

        <p className="text-base sm:text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed font-sans">
          {subtext}
        </p>

        <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
          <a
            href={ctaLink}
            className="px-8 py-3.5 rounded-full bg-white text-zinc-950 font-bold text-sm hover:bg-zinc-200 transition-all shadow-xl hover:scale-105 active:scale-95"
          >
            {ctaText}
          </a>
          <a
            href="#contact"
            className="px-6 py-3.5 rounded-full bg-zinc-900 text-zinc-300 hover:text-white border border-white/10 text-sm font-semibold transition-colors"
          >
            Schedule Consultation
          </a>
        </div>
      </div>
    </section>
  );
};
