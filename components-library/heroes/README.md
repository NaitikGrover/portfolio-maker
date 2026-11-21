# 21st.dev Hero Sections Catalog

This directory contains the 9 official **21st.dev** hero components for the Portfolio Maker skill.
Each component is available as both an instant drop-in React TypeScript file (`.tsx`) and an official `npx shadcn` install command.

---

## 📋 The 9 Hero Sections

| # | Component | Author | Best For | shadcn CLI Command |
| :--- | :--- | :--- | :--- | :--- |
| **01** | [`ImageStreamHero.tsx`](./ImageStreamHero.tsx) | `ruixen.ui` | Video Editors, 3D Artists, Filmmakers | `npx shadcn@latest add "https://21st.dev/r/ruixen.ui/image-stream-hero"` |
| **02** | [`ProductRailGallery.tsx`](./ProductRailGallery.tsx) | `dhxwhy` | E-Commerce, Apparel, Streetwear Drops | `npx shadcn@latest add "https://21st.dev/r/dhxwhy/product-rail-gallery"` |
| **03** | [`TiltedGridHero.tsx`](./TiltedGridHero.tsx) | `ruixen.ui` | UI/UX Designers, Creative Agencies | `npx shadcn@latest add "https://21st.dev/r/ruixen.ui/tilted-grid-hero"` |
| **04** | [`PerspectiveTunnelHero.tsx`](./PerspectiveTunnelHero.tsx) | `daiwiikharihar` | Systems Engineers, Game/3D Developers | `npx shadcn@latest add "https://21st.dev/r/daiwiikharihar/perspective-tunnel-hero"` |
| **05** | [`PrismHero.tsx`](./PrismHero.tsx) | `bevelui` | Art Directors, Luxury & Experimental Tech | `npx shadcn@latest add "https://21st.dev/r/bevelui/prism-hero"` |
| **06** | [`TigerTearRevealHero.tsx`](./TigerTearRevealHero.tsx) | `kedhareswer` | High-Impact Creatives, Media Agencies | `npx shadcn@latest add "https://21st.dev/r/kedhareswer/tiger-tear-reveal"` |
| **07** | [`AgencyHero01.tsx`](./AgencyHero01.tsx) | `shadcnspace` | Consultants, Full-Stack Devs, Studios | `npx shadcn@latest add "https://21st.dev/r/shadcnspace/hero-01"` |
| **08** | [`ResponsiveHeroBanner.tsx`](./ResponsiveHeroBanner.tsx) | `sensewood8` | Executive Portfolios, SaaS Founders | `npx shadcn@latest add "https://21st.dev/r/sensewood8/responsive-hero-banner"` |
| **09** | [`CenteredImageFanHero.tsx`](./CenteredImageFanHero.tsx) | `felipemenezes098` | Product Designers, Content Creators | `npx shadcn@latest add "https://21st.dev/r/felipemenezes098/hero-10"` |

---

## 🎯 How the AI Uses These Heroes

When asking the user about visual preferences (Step 2 in `SKILL.md`), the AI presents relevant hero options tailored to the user's role:

### For Video Editors & Motion Artists:
> *"For your hero, I recommend either:*
> 1. **Image Stream Hero** (Vanishing-point streaming rails of your video frames)
> 2. **Tiger Tear Reveal Hero** (Interactive paper tear slogan reveal)"*

### For Software Engineers & Systems Leads:
> *"For your hero, I recommend either:*
> 1. **Perspective Tunnel Hero** (3D Z-axis spatial tunnel with floating metrics)
> 2. **Agency Hero 01** (High-trust engineering headline, trust avatars, and stats)"*

### For Product Designers & Creatives:
> *"For your hero, I recommend either:*
> 1. **Centered Image Fan Hero** (Editorial headline with a 3-image project fan collage)
> 2. **Tilted Grid Hero** (3D curved image stream bending toward the viewer)
> 3. **Prism Hero** (Procedural chromatic crystal dispersion)"*

### For E-Commerce & Merchandising:
> *"For your hero, I recommend:*
> 1. **Product Rail Gallery** (Interactive clothing rack with swinging hanger physics and hover turns)"*

---

## 🛠️ Drop-in or CLI Usage

1. **Direct Drop-in (Zero extra setup)**:
   The AI copies the TSX file from `components-library/heroes/<ComponentName>.tsx` into `src/components/sections/Hero.tsx` in the generated React + Vite project.

2. **Via shadcn CLI**:
   Run the respective `npx shadcn@latest add "https://21st.dev/r/..."` command to install with shadcn/ui.
