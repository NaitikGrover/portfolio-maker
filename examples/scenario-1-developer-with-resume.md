# Test Scenario 1: Senior Full-Stack Engineer with Resume

This scenario tests the standard path where the user already has a resume file or pastes raw resume text.

---

## 👤 User Profile & Prompt

**User Prompt:**
> "Hey, can you help me build a modern developer portfolio? Here is my resume text:
> 
> Alex Rivera — Staff Software Engineer
> Email: alex.rivera@example.com | Location: San Francisco, CA | GitHub: github.com/alexrivera
> Summary: Staff software engineer with 6+ years designing distributed Go microservices, high-throughput cloud infrastructure, and Next.js applications.
> Experience:
> - Staff Software Engineer @ Veloce Cloud Systems (2023 - Present): Architected Go ingestion engine handling 15,000 msgs/sec, reducing EC2 costs by 34%. Mentored 8 engineers.
> - Senior Backend Engineer @ Hyperion Technologies (2021 - 2023): Designed 14 gRPC microservices. Reduced p99 database latency by 62%.
> - Full-Stack Developer @ Nexus Studio (2019 - 2021): Built React/Node apps handling $20M+ checkout volume.
> Skills: Go, TypeScript, Python, Kubernetes, Docker, AWS, Next.js, PostgreSQL, ClickHouse.
> Featured Projects:
> - MeshRoute: Multi-cloud traffic balancer in Go with eBPF.
> - Synthetix: Real-time event analytics dashboard with Next.js 15 and ClickHouse."

---

## 🤖 AI Execution Steps

1. **Intake Recognition**:
   * AI detects that the resume is already supplied in full.
   * AI extracts: Name, role, contact, experience metrics, top projects, skills.
   * AI skips the fallback questionnaire.

2. **Style & Theme Options Confirmation**:
   * AI asks:
     > *"Awesome Alex! I've extracted your background. For your developer portfolio, I recommend the **Sleek Tech / Dark Bento** aesthetic (inspired by 21st.dev and Linear) with an interactive terminal widget, bento project cards, and a dual Light/Dark mode toggle switch.*
     > 
     > *Does this style sound good to you, or would you prefer a Clean Minimalist or Neo-Brutalist look?"*

3. **User Confirmation**:
   * User agrees to the recommendation.

4. **Generation**:
   * Generates `templates/developer-bento/index.html` with:
     * Interactive terminal with `whoami` and latency stats.
     * Bento grid with MeshRoute and Synthetix cards.
     * Impact metric cards (85ms p99 latency, 1.8k GitHub stars).
     * Experience timeline with quantifiable metrics.
     * Dual-mode toggle switch with persistent `localStorage`.
     * 1-click "Copy Email" pill.

5. **Validation**:
   * Double-clicking `index.html` loads instantly in any browser with zero build steps.
