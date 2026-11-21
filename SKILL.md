---
name: portfolio-maker
description: >-
  Interactive, intelligent portfolio creation skill for any AI assistant. Activates whenever
  a user asks to build, create, design, or update a personal portfolio website. Guides the
  user through resume intake (or a comprehensive fallback questionnaire if no resume is available),
  mandatory style & theme preference questioning (Light, Dark, or Dual mode; Dark Bento, Minimalist,
  etc.), and builds a production-grade React + Vite + Tailwind CSS portfolio by default using modern
  component patterns inspired by 21st.dev, OriginUI, Aceternity/Animos, Flows, and Micrograph.
---

# Portfolio Maker Skill

The **Portfolio Maker** skill turns any AI into an elite design engineer and portfolio consultant. It systematically extracts the user's background, aligns on visual preferences, and generates a modern, production-grade **React + Vite + Tailwind CSS** portfolio website by default.

---

## 🚀 Skill Lifecycle & Workflow

```
[Trigger / User Request]
        │
        ▼
[Step 1: Resume Intake Check]
   ├── Resume Provided? ───────────────► Parse & Extract Info
   └── No Resume / User Declines ──────► Run Fallback Questionnaire (Batch 1-3)
                                                  │
                                                  ▼
                                       [Step 2: MANDATORY Style & Theme Alignment]
                                          * Ask: Visual Aesthetic (Dark Bento, Minimalist, etc.)
                                          * Ask: Theme Mode (Dark, Light, or Dual-mode toggle)
                                          * Confirm Stack: Default React + Vite + Tailwind
                                                  │
                                                  ▼
                                       [Step 3: Component System Selection (21st.dev / Aceternity)]
                                                  │
                                                  ▼
                                       [Step 4: React + Vite Code Generation]
                                                  │
                                                  ▼
                                       [Step 5: Build Verification & Preview]
```

---

## Step 1: Initialization & Resume Intake

1. **Acknowledge and Set the Stage**:
   Welcome the user and confirm you'll build their portfolio step-by-step.

2. **Check for Resume**:
   * Inspect current context and workspace files for an existing resume (`.pdf`, `.md`, `.txt`, `.docx`, LinkedIn export).
   * If found: Confirm with the user and extract: Name, Title, Bio, Projects, Experience, Metrics, Tech Stack.
   * If NOT found: Ask the user directly:
     > *"To start crafting your portfolio, could you share your resume? You can paste its text, upload a file, or provide a link.*
     > 
     > *If you don't have one ready, no worries at all! Just let me know, and I'll ask you a few quick questions to gather everything we need."*

3. **Fallback Questionnaire (When User Has No Resume)**:
   If the user says **"I don't have a resume"**, use the **Smart Progressive Intake** strategy from [references/questionnaire.md](./references/questionnaire.md):
   * **Batch 1**: Name, Title, 1-Sentence Hook, Contact/Social links.
   * **Batch 2**: Experience history with metrics, top 2-4 projects (title, tech, outcome, links).
   * **Batch 3**: Tools/Skills matrix, certifications, and availability status.

---

## Step 2: MANDATORY Style & Theme Preference Alignment

> [!IMPORTANT]
> **DO NOT skip directly to code generation!**
> Unless the user already explicitly answered these questions in their prompt, you **MUST** pause and ask the user for their style and theme preferences:

Ask the user:
> *"Before I generate the code, let's align on the visual design and setup:*
> 
> 1. **Visual Style / Aesthetic**:
>    * **Sleek Tech / Dark Bento** (Inspired by 21st.dev, Linear & Aceternity — glowing borders, spotlight hover cards, carbon dark canvas).
>    * **Clean Minimalist / Swiss Grid** (Inspired by Apple & Dieter Rams — generous whitespace, crisp typography, subtle borders).
>    * **Neo-Brutalism** (High-contrast bold borders, drop shadows, vibrant pop accent colors).
>    * **High-Contrast Editorial** (Elegant serif headlines, magazine layout, studio aesthetic).
>    * **Bright & Vibrant** (Warm playful gradients, rounded pill cards, soft micro-interactions).
> 
> 2. **Theme Mode**:
>    * **Dark Mode** (Sleek, immersive tech vibe).
>    * **Light Mode** (Crisp, clean, high-readability).
>    * **Dual Mode (Recommended)** (Both Light and Dark mode with an interactive toggle switch that remembers preferences in `localStorage`).
> 
> 3. **Tech Stack**:
>    * By default, I will generate a complete, modular **React + Vite + Tailwind CSS** project with Lucide React and Framer Motion components.
>    * (If you prefer a single-file HTML or Next.js instead, just let me know!)"*

Wait for the user's response (or proceed using their stated preferences if they already answered).

---

## Step 3: Prompt Libraries & Web Research Integration

The AI has full permission and is expected to search the web and leverage modern prompt and component registries — including **21st.dev**, **Aceternity UI / Animos**, **OriginKit / OriginUI**, **Flows**, and **Micrograph**:

* **Web Search for Elements**: If a specific archetype, interaction, or style requires a specialized widget (e.g. video showreel modal, audio waveform, 3D card tilt, animated tech marquee, interactive filter tab), the AI should search the web for the latest clean React + Tailwind + Framer Motion implementations.
* **Component Primitives to Integrate**:
  * **Spotlight Card Hover Effect** (`Spotlight.tsx`): Radial gradient spotlight tracking mouse position across card surfaces (Aceternity / 21st.dev).
  * **Bento Grid & Bento Cards** (`BentoGrid.tsx`): Asymmetric card layout with varying column/row spans and live status indicators (21st.dev / Magic UI).
  * **Border Beam & Gradient Glows** (`BorderBeam.tsx`): Smooth animated border glow around featured hero cards.
  * **Interactive Terminal Widget** (`Terminal.tsx`): Simulated command-line interface with interactive tabs or output commands (`whoami`, `specialties`, `status`).
  * **OriginUI 1-Click Copy Email Pill** (`CopyEmailButton.tsx`): Tactile button copying contact email with animated pop-up tooltip feedback.
  * **Interactive Theme Switcher** (`ThemeToggle.tsx`): Accessible toggle switching between `dark` and `light` classes on `document.documentElement` with `localStorage` persistence.

*(Consult [references/prompt-library.md](./references/prompt-library.md) for ready-to-use React/TSX implementations.)*

---

## Step 4: Code Generation Architecture (React + Vite by Default)

Unless the user explicitly requests another stack (e.g. static single HTML or Next.js), **always generate a full React + Vite + Tailwind CSS (TypeScript) application**:

### Project Structure:
```text
my-portfolio/
├── package.json
├── vite.config.ts
├── tailwind.config.js
├── postcss.config.js
├── tsconfig.json
├── index.html
└── src/
    ├── main.tsx
    ├── App.tsx
    ├── index.css
    ├── components/
    │   ├── ui/
    │   │   ├── Spotlight.tsx
    │   │   ├── BentoGrid.tsx
    │   │   ├── BorderBeam.tsx
    │   │   ├── Terminal.tsx
    │   │   ├── CopyEmailButton.tsx
    │   │   └── ThemeToggle.tsx
    │   └── sections/
    │       ├── Navbar.tsx
    │       ├── Hero.tsx
    │       ├── ExpertiseBento.tsx
    │       ├── Projects.tsx
    │       ├── AILabs.tsx (or MediaShowreel for editors)
    │       ├── ContentSection.tsx
    │       └── Footer.tsx
    └── types/
        └── index.ts
```

### Essential Dependencies (`package.json`):
```json
{
  "name": "portfolio",
  "private": true,
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "clsx": "^2.1.1",
    "framer-motion": "^11.11.17",
    "lucide-react": "^0.460.0",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "tailwind-merge": "^2.5.4"
  },
  "devDependencies": {
    "@types/react": "^18.3.12",
    "@types/react-dom": "^18.3.1",
    "@vitejs/plugin-react": "^4.3.3",
    "autoprefixer": "^10.4.20",
    "postcss": "^8.4.49",
    "tailwindcss": "^3.4.15",
    "typescript": "^5.6.3",
    "vite": "^5.4.11"
  }
}
```

---

## Step 5: Verification & Run Instructions

After generating the files:
1. Run `npm install` and `npm run build` to verify there are zero TypeScript or bundling errors.
2. Provide clear run commands:
   ```bash
   npm install
   npm run dev
   ```
3. Highlight where the user can customize text, images, and project links.

---

## 📚 Supporting References

* [references/questionnaire.md](./references/questionnaire.md) — 3-batch fallback intake questions.
* [references/prompt-library.md](./references/prompt-library.md) — 21st.dev, Aceternity, and OriginUI React TSX patterns.
* [references/design-systems.md](./references/design-systems.md) — Visual styles, palettes, and theme architectures.
* [references/archetypes.md](./references/archetypes.md) — Role-specific section blueprints.
