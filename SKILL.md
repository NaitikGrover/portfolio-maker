---
name: portfolio-maker
description: >-
  Interactive, intelligent portfolio creation skill for any AI assistant. Activates whenever
  a user asks to build, create, design, or update a personal portfolio website. Guides the
  user through resume intake (or a comprehensive fallback questionnaire if no resume is available),
  archetype selection (Developer, Video Editor, Designer, Content Creator, etc.), aesthetic & styling
  preferences (Minimalist, Dark Bento, Neo-Brutalist, Editorial, Vibrant, etc.), and theme mode
  (Light, Dark, Dual/System toggle). Utilizes modern component patterns inspired by 21st.dev,
  OriginUI, Aceternity/Animos, Flows, and Micrograph to generate production-ready, responsive,
  visually stunning portfolios with zero configuration required.
---

# Portfolio Maker Skill

The **Portfolio Maker** skill turns any AI into an elite design engineer and portfolio consultant. It systematically extracts the user's background, selects the ideal design language, and generates a responsive, accessible, high-converting portfolio website.

---

## 🚀 Skill Lifecycle & Workflow

```
[Trigger / Install]
        │
        ▼
[Step 1: Resume Intake Check]
   ├── Resume Provided? ───────────────► Parse & Structure Data
   └── No Resume / User Declines ──────► [Step 2: Fallback Questionnaire]
                                                  │
                                                  ▼
                                       [Step 3: Archetype & Role Identification]
                                                  │
                                                  ▼
                                       [Step 4: Style, Theme & Component Selection]
                                                  │
                                                  ▼
                                       [Step 5: Code Generation (Production-Ready)]
                                                  │
                                                  ▼
                                       [Step 6: Live Preview & Deployment Guide]
```

---

## Step 1: Initialization & Resume Intake

When the user asks to create or revamp a portfolio:

1. **Acknowledge and Set the Stage**:
   Briefly welcome the user and explain that you will build a tailored, production-ready portfolio together in a few quick steps.

2. **Check for Resume**:
   * Inspect current context and workspace files for an existing resume (`.pdf`, `.md`, `.txt`, `.docx`, LinkedIn export).
   * If found: Confirm with the user:
     > *"I noticed your resume in `[file]`. Would you like me to use this as the foundation for your portfolio, or do you have an updated version?"*
   * If NOT found: Ask the user directly:
     > *"To start crafting your portfolio, could you share your resume? You can paste its text, upload a file, or provide a link.*
     > 
     > *If you don't have one ready, no worries at all! Just let me know, and I'll ask you a few quick questions to gather everything we need."*

---

## Step 2: Fallback Questionnaire (When User Has No Resume)

If the user says **"I don't have a resume"**, **"Start from scratch"**, or provides minimal context:

Do **not** overwhelm the user with a 30-question wall of text. Instead, use the **Smart Progressive Intake** strategy outlined in [references/questionnaire.md](./references/questionnaire.md).

### Smart Progressive Intake (3 Quick Batches)

#### Batch 1: Core Identity & Target Role
* **Full Name** & **Preferred Title / Headline** (e.g., *"Alex Rivera — Senior Full-Stack Engineer"* or *"Jordan Lee — Short-Form Video Editor & Storyteller"*).
* **Location & Work Preference** (e.g., *"San Francisco, CA • Open to Remote"*).
* **1-Sentence Hook / Value Proposition** (What do you specialize in, and what big problem do you solve for clients or teams?).
* **Contact & Links** (Email, GitHub, LinkedIn, X/Twitter, YouTube, Behance, etc.).

#### Batch 2: Work Experience & Standout Projects
* **Top 2-3 Roles or Freelance Experience**: Company/Client name, role, dates, and 1-2 bullet points with *numbers or metrics* (e.g., *"Scaled API to 2M req/sec"*, *"Edited 40+ TikTok videos averaging 300K views"*).
* **Top 2-4 Featured Projects**:
  * Project Title & Short description.
  * Your role & tools/tech stack used.
  * Deliverables or Live links (GitHub repo, live demo, YouTube showreel link, Figma file, etc.).
  * Outcome or standout feature.

#### Batch 3: Skills, Tools & Personality
* **Core Skills & Software**: What are your go-to tools? (e.g., `React, Node.js, TypeScript, PostgreSQL` or `Premiere Pro, DaVinci Resolve, After Effects, Blender`).
* **Availability Status**: (e.g., *"Available for freelance projects"*, *"Seeking full-time SWE roles"*, *"Booking Q1 2026"*).
* **Optional Highlights**: Education, certifications, testimonials, awards, or fun facts.

*(For the complete questionnaire reference and role-specific questions, consult [references/questionnaire.md](./references/questionnaire.md).)*

---

## Step 3: Archetype & Role Customization

Every profession has distinct portfolio needs. Select or recommend the appropriate archetype:

| Archetype | Key Focus Sections | Signature Elements |
| :--- | :--- | :--- |
| **Software Engineer / Developer** | Projects, Tech Stack, Architecture, GitHub/Open Source | Terminal / Code blocks, Live demo badges, System architecture diagrams, GitHub commit activity widget. |
| **Video Editor / Motion Designer** | Showreel, Video Player Modal, Retention/View Metrics, Client Brands | High-contrast video cards, Auto-play showreel modal, YouTube/Vimeo embed support, Before/After slider (Color grading/VFX). |
| **UI/UX & Product Designer** | Case Studies, Design Systems, Prototypes, User Impact | Problem-to-solution narrative, Figma embeds, Interactive UI previews, User testing metrics. |
| **Content Creator / Marketer** | Audience Analytics, Brand Collaborations, Channels, Press | High-energy stat counters (Followers, Impressions, Views), Social feed cards, Brand logos marquee. |
| **Student / Career Switcher** | Passion Projects, Transferable Skills, Learning Journey, Education | Highlighted problem-solving process, GitHub links, Certifications, "Why hire me" value pitch. |

*(For in-depth archetype blueprints, consult [references/archetypes.md](./references/archetypes.md).)*

---

## Step 4: Aesthetic, Style & Theme Selection

Present the user with clear, distinct aesthetic options:

### 1. Aesthetic Styles

1. **Sleek Tech / Dark Bento** *(Popularized by 21st.dev, Linear, Aceternity)*
   * *Look & Feel*: Dark carbon background (`#09090b`), subtle glowing radial gradients, frosted glass borders (`border-white/10`), spotlight hover cards, micro-interactions.
   * *Best for*: Developers, AI engineers, tech founders.

2. **Clean Minimalist / Swiss Grid** *(Vercel, Notion, Apple style)*
   * *Look & Feel*: High whitespace, crisp typography (Inter / Geist), subtle borders (`border-zinc-200`), ultra-clean layout, focus on clarity and speed.
   * *Best for*: Senior engineers, product managers, technical writers.

3. **High-Contrast Editorial** *(Magazine, Studio, Luxury Agency)*
   * *Look & Feel*: Elegant serif headlines (Playfair / Cormorant), bold monochromatic palette, oversized typography, asymmetrical grid.
   * *Best for*: Art directors, UI/UX designers, creative leads.

4. **Neo-Brutalism** *(Trendy, Bold, Playful)*
   * *Look & Feel*: High-contrast black 2px/3px borders, hard drop shadows (`shadow-[4px_4px_0px_0px_#000]`), vibrant pop colors (lime `#a3e635`, yellow `#fde047`, lilac `#c084fc`), monospace accents.
   * *Best for*: Creative developers, video editors, indie hackers, motion designers.

5. **Bright & Vibrant / Modern Creative**
   * *Look & Feel*: Warm gradients, rounded pill badges, playful hover bounces, friendly illustrations/emojis, approachable vibe.
   * *Best for*: Content creators, junior developers, community builders.

### 2. Theme Mode Selection
Always ask the user for their theme preference:
* **Dark Mode** (immersive, modern tech feel)
* **Light Mode** (clean, crisp, traditional readable aesthetic)
* **Dual Mode (Recommended)** (Light + Dark mode with a toggle button that remembers user preference via `localStorage` and defaults to the system OS preference).

*(For detailed color systems and typography pairings, consult [references/design-systems.md](./references/design-systems.md).)*

---

## Step 5: Design Systems & Component Libraries Integration

The generated code must incorporate high-end design patterns inspired by the best modern UI libraries:

* **21st.dev & shadcn**:
  * Bento grid layouts with varying tile spans (`col-span-12 md:col-span-8` + `col-span-12 md:col-span-4`).
  * Modern badge tags with subtle dot indicators (`w-2 h-2 rounded-full bg-emerald-500 animate-pulse`).
  * Interactive project tabs or tag filters.

* **Aceternity UI & Animos**:
  * Spotlight card hover effect (radial gradient tracking the cursor).
  * Glowing animated border gradients (`bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500`).
  * Smooth accordion FAQ or experience disclosure.

* **OriginUI & Micrograph**:
  * Avatar clusters, status badges with tooltips.
  * "Copy Email" one-click button with dynamic copied feedback tooltip.
  * Clean, accessible navigation bar with frosted backdrop blur (`backdrop-blur-md bg-white/70 dark:bg-zinc-900/70`).
  * Keyboard shortcut indicator (`Press ⌘K to contact`).

* **Flows / Motion**:
  * Smooth staggered entrance animations on scroll.
  * Interactive modal popup for project previews or video showreels.

*(For copy-paste ready component implementations, consult [references/prompt-library.md](./references/prompt-library.md).)*

---

## Step 6: Code Generation Standards

When generating the portfolio:

1. **Zero-Dependency Production Standalone by Default**:
   * Output a production-ready `index.html` with:
     * Tailwind CSS CDN (`https://cdn.tailwindcss.com`) configured with custom fonts, colors, and dark mode class.
     * Lucide Icons CDN (`https://unpkg.com/lucide@latest`) for crisp SVG icons.
     * Google Fonts preloaded (e.g., `Inter`, `Plus Jakarta Sans`, `Geist`, or `Fira Code`).
     * Embedded vanilla JavaScript for the theme switcher, mobile menu, smooth scrolling, copy-to-clipboard, and modal handlers.
   * *Why?* The user can double-click the file and see a functioning portfolio instantly in any browser without needing `npm install` or build tools.

2. **Full React / Vite / Next.js Support (When Requested)**:
   * If the user requests a React, Next.js, or Vite project, provide the complete component breakdown (`Hero.tsx`, `Projects.tsx`, `Experience.tsx`, `BentoGrid.tsx`, `Contact.tsx`) along with `package.json` and Tailwind configuration.

3. **Real, High-Quality Copy (No Lorem Ipsum!)**:
   * Synthesize compelling headlines, metric-backed project descriptions, and natural bio text from the user's resume or questionnaire answers.
   * If information is missing, infer sensible professional defaults and flag them with `<!-- CUSTOMIZE: ... -->` comments.

4. **Essential Features Included in Every Portfolio**:
   * Responsive navigation bar with mobile slide-out/dropdown menu.
   * Dark / Light mode toggle switch with persistent `localStorage` memory.
   * Hero section with availability status badge, social links, and clear primary CTA.
   * About / Experience timeline with company, role, dates, and metric bullets.
   * Featured Projects bento grid with live links, source links, and tech tags.
   * Categorized skills pill badges.
   * Contact footer with 1-click "Copy Email" button, social media icons, and resume download button.
   * Accessible markup (`aria-label`, semantic tags `<header>`, `<main>`, `<section>`, `<footer>`).

---

## Step 7: Live Preview, Testing & Deployment Guidance

After generating the code:

1. **Provide a 1-click Preview Method**:
   * Offer to launch a local server (e.g. `python scripts/serve.py` or `npx serve .`).
   * Or direct the user to open `index.html` in their favorite browser.

2. **Give Instant Deployment Options**:
   * **GitHub Pages**: Push to repository and enable GitHub Pages in settings (instant 100% free hosting).
   * **Vercel / Netlify**: Drag-and-drop or connect repo for instant custom domain + SSL.

3. **Offer Next-Step Polish**:
   * Swap placeholder images with their real photo or project screenshots.
   * Add Google Analytics or Plausible analytics snippet.
   * Connect a custom domain (e.g., `yourname.dev`).

---

## 📚 Supporting References

* [references/questionnaire.md](./references/questionnaire.md) — Comprehensive resume fallback questionnaire.
* [references/design-systems.md](./references/design-systems.md) — Color palettes, typography, and styling systems.
* [references/archetypes.md](./references/archetypes.md) — Role-specific section blueprints (Dev, Video Editor, Designer, etc.).
* [references/prompt-library.md](./references/prompt-library.md) — Ready-to-use component patterns (Bento, Spotlight, Modals, Showreels).
* [templates/](./templates/) — Pre-built production reference implementations.
