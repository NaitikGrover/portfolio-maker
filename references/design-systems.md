# Design Systems, Aesthetics & Themes

This guide details visual styles, typography, color palettes, and component design systems supported by the Portfolio Maker skill.

---

## 🎨 Aesthetic Styles

### 1. Sleek Tech / Dark Bento (Default for Engineers & Tech Creatives)
* **Inspiration**: 21st.dev, Linear, Raycast, Vercel, Aceternity UI.
* **Palette**:
  * Dark Canvas: `#09090b` (Zinc 950) or `#030712` (Gray 950)
  * Dark Card Background: `#18181b` (Zinc 900) with `backdrop-blur-md`
  * Card Border: `border-zinc-800` or `border-white/10`
  * Primary Accent: Violet `#8b5cf6`, Cyan `#06b6d4`, or Emerald `#10b981`
  * Light Mode counterpart: Canvas `#ffffff`, Cards `#f4f4f5`, Borders `#e4e4e7`
* **Typography**:
  * Font Sans: `Inter`, `Plus Jakarta Sans`, or `Geist Sans`
  * Font Mono: `JetBrains Mono` or `Fira Code`
* **Signature Elements**:
  * Bento grid with asymmetric tile spans.
  * Radial gradient spotlight hover effect tracking cursor.
  * Pulsing green availability badge (`bg-emerald-500/20 text-emerald-400 border border-emerald-500/30`).
  * Terminal window with simulated bash commands or live system stats.

---

### 2. Clean Minimalist / Swiss Modern (Default for Senior PMs, Designers & Leaders)
* **Inspiration**: Dieter Rams, Notion, ReadCV, Apple design.
* **Palette**:
  * Light Canvas: `#ffffff` or `#fafafa`
  * Light Card Background: `#f4f4f5` (Zinc 100) or clean border outlines
  * Dark Canvas: `#121212` with subtle `#1e1e1e` borders
  * Accent: Pure monochrome with a single focal accent (e.g. Cobalt `#2563eb` or Safety Orange `#f97316`)
* **Typography**:
  * Headline: Clean geometric sans (`Inter`, `Helvetica Neue`, `Instrument Sans`)
  * Body: Crisp high-legibility sans
* **Signature Elements**:
  * Generous whitespace and vertical rhythm.
  * Thin 1px divider lines and structured tables.
  * Subtle hover opacity shifts rather than loud animations.
  * Simple, elegant project rows with hover-to-preview thumbnails.

---

### 3. High-Contrast Editorial / Creative Studio
* **Inspiration**: Kinfolk, Awwwards Site of the Day, Architectural Digest, Luxury Portfolios.
* **Palette**:
  * Canvas: Deep Charcoal `#111111` or Warm Cream `#fdfbf7`
  * Text: High-contrast `#ffffff` or Deep Espresso `#1a1a1a`
  * Accents: Champagne Gold `#d4af37`, Burgundy `#800020`, or Olive `#556b2f`
* **Typography**:
  * Headline: Elegant high-contrast serif (`Playfair Display`, `Cormorant Garamond`, `Cinzel`)
  * Body: Clean modern sans (`Inter`, `Plus Jakarta Sans`)
* **Signature Elements**:
  * Large, editorial serif headings (e.g. `text-5xl md:text-7xl font-serif tracking-tight`).
  * Magazine-style two-column layouts.
  * Full-bleed imagery and cinematic project showcases.

---

### 4. Neo-Brutalism (Bold, Indie, High-Impact)
* **Inspiration**: Figma Community trends, Gumroad, Retro Web, Creative Indie Hackers.
* **Palette**:
  * Canvas: Off-white `#fef08a` (soft yellow) or `#fdf4ff` or `#ffffff`
  * Borders: Bold solid black `border-2 border-black` or `border-3 border-black`
  * Shadows: Hard drop shadow with zero blur (`shadow-[4px_4px_0px_0px_#000]`)
  * Accents: High-saturation neon pop colors:
    * Lime: `#a3e635`
    * Cyan: `#22d3ee`
    * Bubblegum: `#f472b6`
    * Tangerine: `#fb923c`
* **Typography**:
  * Headline: Heavy weight sans (`Space Grotesk`, `Cabinet Grotesk`, or `Syne`)
  * Body: Monospace (`Space Mono`, `Courier New`)
* **Signature Elements**:
  * Tactile button clicks (`active:translate-x-1 active:translate-y-1 active:shadow-none`).
  * Sticker badges with tilted angles (`rotate-2`, `-rotate-2`).
  * Vibrant badge pills and high-contrast tables.

---

### 5. Bright & Vibrant / Modern Playful
* **Inspiration**: Stripe landing pages, Supabase, modern creative agency portfolios.
* **Palette**:
  * Canvas: Soft light purple `#f8fafc` or radiant gradient backdrops
  * Accents: Multi-color gradient meshes (Indigo `#6366f1` to Pink `#ec4899`, Violet `#8b5cf6` to Amber `#f59e0b`)
  * Cards: Soft rounded corners (`rounded-3xl`), pill badges, colorful icon containers
* **Typography**:
  * Friendly geometric sans (`Plus Jakarta Sans`, `Outfit`, `Poppins`)
* **Signature Elements**:
  * Smooth gradient blur orbs in the background (`filter blur-3xl opacity-30`).
  * Pill buttons with bouncy transitions (`transition-all duration-300 hover:scale-105`).
  * Animated emoji reactions or micro-interaction badges.

---

## 🌓 Theme Modes: Implementation Architecture

Every portfolio generated should include dual-mode support by default using Tailwind's `class` dark mode strategy:

```html
<script>
  // Theme toggle script (OriginUI / modern standard)
  const themeToggleBtn = document.getElementById('theme-toggle');
  const darkIcon = document.getElementById('theme-toggle-dark-icon');
  const lightIcon = document.getElementById('theme-toggle-light-icon');

  function applyTheme(isDark) {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      darkIcon.classList.add('hidden');
      lightIcon.classList.remove('hidden');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      darkIcon.classList.remove('hidden');
      lightIcon.classList.add('hidden');
    }
  }

  // Initial theme detection (localStorage or OS preference)
  const storedTheme = localStorage.getItem('theme');
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  applyTheme(storedTheme === 'dark' || (!storedTheme && systemPrefersDark));

  themeToggleBtn.addEventListener('click', () => {
    const isDark = document.documentElement.classList.contains('dark');
    applyTheme(!isDark);
  });
</script>
```

---

## 📐 Responsive Grid & Layout Rules

1. **Max Width Container**: Standardize on `max-w-5xl` or `max-w-6xl mx-auto px-4 sm:px-6 lg:px-8` for optimal reading line length.
2. **Spacing Rhythm**: Use consistent vertical padding `py-16 md:py-24` between major sections.
3. **Mobile Navigation**: Always include a hamburger button that toggles a full-width or slide-down mobile menu on screens `< md` (768px).
4. **Accessible Colors**: All text colors must pass WCAG AA contrast against their respective background (minimum 4.5:1 ratio).
