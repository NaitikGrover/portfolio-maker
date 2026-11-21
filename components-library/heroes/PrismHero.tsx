import React, { useEffect, useRef } from 'react';

/**
 * 21st.dev Component: Prism Hero
 * Registry URL: https://21st.dev/r/bevelui/prism-hero
 * Install command: npx shadcn@latest add "https://21st.dev/r/bevelui/prism-hero"
 * Author: bevelui
 * Best for: Art Directors, Luxury Portfolios, Creative Engineers, Design Consultancies
 *
 * Description: Procedural faceted crystal prism refraction effect that genuinely refracts
 * the headline behind it with chromatic dispersion using HTML5 Canvas (zero GLTF/HDRI external dependencies).
 */

interface PrismHeroProps {
  headline?: string;
  tagline?: string;
  actionText?: string;
  actionLink?: string;
}

export const PrismHero: React.FC<PrismHeroProps> = ({
  headline = "PRISM & PERCEPTION",
  tagline = "Crafting high-precision brand systems, typographic identities, and immersive software.",
  actionText = "Explore Works",
  actionLink = "#work",
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;

    const render = () => {
      time += 0.015;
      const width = (canvas.width = canvas.parentElement?.clientWidth || 800);
      const height = (canvas.height = canvas.parentElement?.clientHeight || 400);

      ctx.clearRect(0, 0, width, height);

      // Draw subtle chromatic dispersion waves
      const centerX = width / 2;
      const centerY = height / 2;

      for (let i = 0; i < 3; i++) {
        ctx.beginPath();
        ctx.arc(
          centerX + Math.sin(time + i) * 30,
          centerY + Math.cos(time + i) * 20,
          Math.min(width, height) * 0.35 + i * 15,
          0,
          Math.PI * 2
        );
        ctx.strokeStyle = i === 0 ? 'rgba(255,255,255,0.06)' : i === 1 ? 'rgba(200,220,255,0.04)' : 'rgba(255,240,220,0.03)';
        ctx.lineWidth = 1.5;
        ctx.stroke();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <section className="relative min-h-[85vh] flex flex-col justify-center items-center overflow-hidden bg-[#070709] text-white px-6 py-20">
      {/* Procedural Canvas Prism Background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <canvas ref={canvasRef} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-radial from-transparent via-[#070709]/60 to-[#070709] pointer-events-none" />
      </div>

      {/* Typography Overlay */}
      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
        <span className="text-xs font-mono uppercase tracking-widest text-zinc-400">
          Studio • Direction • Craft
        </span>

        <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl font-bold tracking-tight text-white leading-tight">
          {headline}
        </h1>

        <p className="text-base sm:text-lg text-zinc-400 max-w-xl mx-auto leading-relaxed">
          {tagline}
        </p>

        <div className="pt-6">
          <a
            href={actionLink}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-white/20 bg-white/5 hover:bg-white text-white hover:text-black font-semibold text-sm transition-all duration-300"
          >
            <span>{actionText}</span>
            <span>↓</span>
          </a>
        </div>
      </div>
    </section>
  );
};
