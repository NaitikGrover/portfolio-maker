# 21st.dev & Aceternity Component Catalog & Composition Guide

> **MANDATORY FOR THE AI AGENT**: Never generate flat, generic, plain Tailwind divs for major sections.
> A portfolio must feel like a modern **Awwwards / 21st.dev / Aceternity** showcase. Assemble the site using the verified component primitives in `components-library/` or search the web for complementary 21st.dev components.

---

## 🎨 The Component Menu (Present these options to the user!)

When asking the user about visual preferences (Step 2 of the skill), the AI should present these signature component options:

### 1. Hero & Background Effects
| Component | Visual Impact | Best For |
| :--- | :--- | :--- |
| **`AuroraBackground`** | Soft, flowing animated northern-lights mesh gradient behind headline | High-end tech, AI engineers, modern SaaS |
| **`Spotlight Hero`** | Subtle radial light cone tracking the cursor or pinned at top-center | Sleek dark bento, systems architects |
| **`TextGenerateEffect`** | Words smoothly blur-in and reveal one by one upon page load | Impactful elevator pitches & hooks |
| **`DotPattern / Grid`** | Subtle cybernetic dot grid with radial fade mask | Developers, cloud architects, minimalists |

### 2. Project Cards & Showcase
| Component | Visual Impact | Best For |
| :--- | :--- | :--- |
| **`SpotlightCard`** | Card surface illuminates with glowing radial gradient following the cursor | Bento grids, feature grids, service cards |
| **`Card3D`** | 3D perspective tilt reacting to mouse position with pop-out layers (`translateZ`) | Featured flagship projects, app mockups |
| **`BorderBeam`** | Glowing neon beam continuously travelling along the card's rounded border | Top 1% featured highlight, awards, launches |
| **`Meteors`** | Subtle shooting star streaks animating behind dark card content | AI tools, experimental projects, hackathons |

### 3. Interactive Widgets & Media
| Component | Visual Impact | Best For |
| :--- | :--- | :--- |
| **`TerminalWidget`** | Simulated zsh/bash command line with interactive commands and colored dots | Software engineers, DevOps, backend leads |
| **`VideoModal`** | Seamless popup video player with backdrop blur and fullscreen support | Video editors, motion designers, creators |
| **`BeforeAfterSlider`** | Interactive left/right swipe comparing raw vs graded footage or redesigns | Video colorists, VFX artists, UI/UX designers |
| **`InfiniteMarquee`** | Smooth continuous ticker for client logos, tech stacks, or reviews | Brand collaborations, testimonials, tools |

### 4. Navigation & Tactile Micro-Interactions
| Component | Visual Impact | Best For |
| :--- | :--- | :--- |
| **`FloatingNav`** | Sleek floating glass pill centered at top with active section highlight | Modern minimal & bento aesthetics |
| **`ShimmerButton`** | Tactile CTA button with a rotating 360° light beam border and spring hover | Primary "Get in Touch" / "View Work" buttons |
| **`CopyEmailButton`** | 1-click tactile pill that copies email and reveals a floating "Copied!" tooltip | OriginUI-style footer & hero contact |
| **`ThemeToggle`** | Smooth sun/moon icon toggle with persistent `localStorage` dark/light modes | Dual-mode accessibility |

---

## 🧩 Proven Composition Recipes

When building the portfolio, use one of these pre-tuned component formulas:

### Recipe A: "The 21st.dev Elite Engineer" (Default for Developers & Tech Founders)
* **Hero**: `AuroraBackground` + `TextGenerateEffect` headline + `ShimmerButton` CTA + `CopyEmailButton`.
* **Sub-Hero**: `TerminalWidget` showing interactive `--specialties` and `--metrics`.
* **Projects**: `BentoGrid` combining:
  * 1 Large Card with `BorderBeam` (Flagship system/project).
  * 2 `SpotlightCard` items with tech tags.
  * 1 `Meteors` card for open-source / live metrics.
* **Social Proof**: `InfiniteMarquee` showing client brands or tech stack badges.
* **Navigation**: `FloatingNav` with active blur.

### Recipe B: "The High-Retention Creator" (For Video Editors & Motion Artists)
* **Hero**: High-contrast typography + `VideoModal` trigger button ("Watch 2026 Showreel").
* **Key Metrics**: 4-column metric ribbon with live glow borders.
* **Featured Edits**: Grid of video cards with view count flame badges + click-to-play modal.
* **Craftsmanship**: `BeforeAfterSlider` showing Raw LOG vs. Final Color Grade / VFX.
* **Software Suite**: Dock of tools (Premiere, DaVinci, After Effects, Blender) with hover tilts.
* **Inquiry**: `ShimmerButton` with calendar booking link.

### Recipe C: "The Swiss Modernist Studio" (For UI/UX & Product Designers)
* **Hero**: Minimalist editorial typography (`Instrument Sans` or `Cormorant Garamond`) + generous whitespace.
* **Case Studies**: Full-width deep dive cards with problem-to-outcome metrics and token breakdowns.
* **Philosophy**: 3-column structured grid with subtle hairline dividers.
* **Navigation**: Pinned glass header with `ThemeToggle`.

---

## 💻 Tailwind Config Requirements

To support the animations in these components, ensure `tailwind.config.js` includes the following animations and keyframes:

```js
module.exports = {
  theme: {
    extend: {
      animation: {
        'shimmer-slide': 'shimmer-slide var(--speed) ease-in-out infinite alternate',
        'spin-around': 'spin-around calc(var(--speed) * 2) infinite linear',
        'border-beam': 'border-beam calc(var(--duration)*1s) infinite linear',
        'meteor-effect': 'meteor 5s linear infinite',
        'marquee': 'marquee var(--duration) linear infinite',
      },
      keyframes: {
        'shimmer-slide': {
          to: {
            transform: 'translate(calc(100cqw - 100%), 0)',
          },
        },
        'spin-around': {
          '0%': { transform: 'translateZ(0) rotate(0)' },
          '15%, 35%': { transform: 'translateZ(0) rotate(90deg)' },
          '65%, 85%': { transform: 'translateZ(0) rotate(270deg)' },
          '100%': { transform: 'translateZ(0) rotate(360deg)' },
        },
        'border-beam': {
          '100%': { offsetDistance: '100%' },
        },
        meteor: {
          '0%': { transform: 'rotate(215deg) translateX(0)', opacity: '1' },
          '70%': { opacity: '1' },
          '100%': {
            transform: 'rotate(215deg) translateX(-500px)',
            opacity: '0',
          },
        },
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(calc(-100% - var(--gap)))' },
        },
      },
    },
  },
};
```
