# Portfolio Intake Questionnaire

When a user does not have a resume or wants to build their portfolio from scratch, use this questionnaire.

To keep the experience conversational and enjoyable, **do not dump all questions in a single wall of text**. Present questions in 3 logical batches, or prompt the user for the first batch and naturally expand.

---

## Batch 1: Core Identity, Role & Hook

Ask these 4 fundamental questions first:

1. **Basic Info & Title**:
   * What is your full name?
   * What is your primary title or headline? *(e.g., "Full-Stack Software Engineer", "Motion Designer & 3D Generalist", "Senior UI/UX Product Designer", "Creative Director")*
   * Where are you based, and what is your work preference? *(e.g., "Austin, TX (Open to Remote / Relocation)")*

2. **Your 1-Sentence Hook (Elevator Pitch)**:
   * In 1 or 2 sentences, what do you specialize in, and what unique value do you bring?
   * *Example (Dev):* "I build high-performance web applications, distributed systems, and delightful developer tools."
   * *Example (Video Editor):* "I craft viral, high-retention YouTube videos and brand commercials that turn casual viewers into loyal fans."

3. **Links & Contact**:
   * What is your public contact email?
   * Which social and professional profiles should we link?
     * GitHub / GitLab
     * LinkedIn
     * X (Twitter)
     * YouTube / Vimeo
     * Behance / Dribbble
     * Discord / Telegram / Personal Blog

4. **Availability & Status**:
   * What is your current work status?
     * 🟢 *Available for full-time roles*
     * 🟢 *Taking on freelance / contract projects*
     * 🟡 *Booking Q1/Q2 projects*
     * ⚪ *Currently employed / Just showcasing work*

---

## Batch 2: Work Experience & Standout Projects

Once Batch 1 is answered, move to experience and projects:

### 1. Work History (Past 2 to 4 Roles)
For each role, ask:
* **Company / Organization / Freelance**: Name of company or "Independent Consultant".
* **Role Title**: *(e.g., "Lead Frontend Engineer", "Senior Video Editor", "Product Design Intern")*
* **Dates / Timeline**: *(e.g., "2023 — Present", "2021 — 2023")*
* **Key Achievements (1-3 bullets)**: Emphasize *metrics and outcomes*:
  * *Bad:* "Managed social media videos."
  * *Good:* "Produced 65+ short-form videos resulting in 18M+ views and +120K subscriber growth across TikTok and IG."
  * *Bad:* "Worked on backend microservices."
  * *Good:* "Re-architected the checkout microservice in Go, cutting p99 latency from 450ms to 85ms during peak traffic."

### 2. Featured Projects (Top 2 to 4 Projects)
Ask for their absolute best work:
* **Project Name**:
* **Tagline**: 1 crisp sentence explaining what it is.
* **Problem & Solution**: What problem did it solve, and how did you build it?
* **Tools / Tech Stack**: *(e.g., Next.js, TypeScript, Tailwind, Supabase OR Premiere Pro, After Effects, DaVinci Resolve, Blender)*
* **Links or Media**:
  * Live URL or Demo link
  * GitHub repository
  * Video link (YouTube, Vimeo, or Loom)
  * Figma or Case Study link
* **Key Metric or Recognition**: *(e.g., "#1 Product of the Day on ProductHunt", "Over 5,000 GitHub stars", "Generated $150K in client revenue")*

---

## Batch 3: Skills, Tools & Supporting Sections

Wrap up with proficiencies and personal highlights:

1. **Categorized Skills & Tools**:
   * **Core Specialties**: *(e.g., React, TypeScript, GraphQL OR Video Editing, Motion Graphics, Color Grading)*
   * **Secondary / Exploring**: *(e.g., Rust, Docker, Kubernetes OR 3D Animation, Sound Design, Midjourney)*
   * **Workflow Tools**: *(e.g., Git, Linux, Figma, Notion, Linear)*

2. **Education, Certifications, or Milestones** (Optional):
   * Degree / University / Bootcamp / Self-taught journey.
   * Key certifications (AWS Certified Solutions Architect, Google Professional, etc.).
   * Awards, hackathons, featured articles, or conference talks.

3. **Testimonials or Client Logos** (Optional):
   * Do you have 1 or 2 quotes from past managers, clients, or collaborators?
   * Any recognizable companies, channels, or brands you've worked with?

---

## Fallback Intelligence: If the User Skips Details

If the user gives brief answers like *"I'm John, a developer with 3 years in React and Node"*:
1. Do not halt or get stuck.
2. Ingest the provided info.
3. Use sensible, industry-standard modern defaults for their role (e.g., standard project archetypes, clean GitHub/LinkedIn placeholders).
4. Clearly mark placeholder sections with HTML comments `<!-- CUSTOMIZE: Add your project link here -->` so the user can easily fill in the specifics later.
