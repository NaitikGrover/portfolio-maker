# Test Scenario 2: Video Editor & Motion Designer without Resume

This scenario tests the fallback questionnaire path when the user does not have a resume and works in a visual, media-heavy creative profession.

---

## 👤 User Profile & Prompt

**User Prompt:**
> "Hey! I want to build a portfolio website to showcase my video editing work to creators and brands, but I don't have a resume. Can you help me?"

---

## 🤖 AI Execution Steps

1. **Resume Fallback Protocol**:
   * AI detects no resume and triggers **Smart Progressive Intake (Batch 1)**:
     > *"No worries at all! Let's build your portfolio from the ground up. To kick things off, could you tell me:*
     > 1. *Your full name and headline (e.g. Jordan Lee — Short-Form & Long-Form Video Editor)?*
     > 2. *Your main focus: YouTube long-form, Shorts/Reels, commercials, or motion graphics?*
     > 3. *Your contact email and any social/portfolio links (YouTube, Instagram, X)?"*

2. **User Response (Batch 1)**:
   > "I'm Jordan Lee, high-retention video editor for creators and brands. I do YouTube long-form documentaries and viral TikToks/Reels. Email is jordan.edits@example.com."

3. **Intake Batch 2 (Experience, Projects & Metrics)**:
   * AI follows up:
     > *"Awesome Jordan! Next, let's highlight your biggest wins and projects:*
     > 1. *Do you have an approximate number of total views or videos edited? (e.g., 50M+ views, 300+ videos)?*
     > 2. *What are 2 or 3 of your favorite projects or video styles you've delivered?*
     > 3. *Do you have a main showreel link or YouTube video we can feature in an interactive popup player?"*

4. **User Response (Batch 2)**:
   > "I've edited over 320 videos generating over 75M views. Average 30-sec retention on my edits is 68%. Top edits are a documentary on hypersonic flight (3.4M views), a tech breakdown reel (8.1M views), and a SaaS launch commercial. My showreel is 1 min 45 sec."

5. **Style & Archetype Recommendation**:
   * AI recommends:
     * Archetype: **Video Editor / Motion Graphics Artist**.
     * Key widgets: Click-to-play Showreel Modal, View count badges (`3.4M Views`), Before & After Color Grading breakdown card (RAW LOG vs. Final Grade), and a Software Suite dock (Premiere, After Effects, DaVinci Resolve Studio, Blender).
     * Style: **High-Energy Dark Aesthetic** (`#0b0c10` with glowing rose and amber accents).

6. **Generation**:
   * Generates `templates/video-editor-showreel/index.html`.
   * Video cards with live hover states, category filters ("All Edits", "YouTube Long-Form", "Shorts & Reels", "Commercial"), and a responsive inquiry CTA.
