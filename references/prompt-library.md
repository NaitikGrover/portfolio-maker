# Component Prompt Library & Code Patterns

This library contains production-tested HTML + Tailwind CSS + Vanilla JS patterns inspired by **21st.dev**, **Aceternity UI / Animos**, **OriginUI**, **Flows**, and **Micrograph**.

When generating or upgrading portfolios, incorporate these patterns to achieve immediate high visual polish.

---

## 1. Bento Grid Layout (Inspired by 21st.dev)

A responsive, asymmetrical grid that gives projects visual hierarchy:

```html
<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
  <!-- Large Hero Card (Spans 2 columns) -->
  <div class="md:col-span-2 group relative overflow-hidden rounded-2xl bg-zinc-900/60 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 p-8 hover:border-zinc-400 dark:hover:border-zinc-700 transition-all duration-300">
    <div class="flex items-center justify-between mb-4">
      <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
        <span class="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
        Featured Project
      </span>
      <span class="text-xs text-zinc-500 font-mono">2026 Release</span>
    </div>
    <h3 class="text-2xl font-bold text-zinc-900 dark:text-white mb-2 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
      CloudScale Orchestrator
    </h3>
    <p class="text-zinc-600 dark:text-zinc-400 text-sm mb-6 leading-relaxed">
      Autonomous Kubernetes multi-cluster routing engine with automated failover and p99 latency reduction under 25ms.
    </p>
    <div class="flex flex-wrap gap-2 mb-6">
      <span class="text-xs px-2.5 py-1 rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 font-mono">Go</span>
      <span class="text-xs px-2.5 py-1 rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 font-mono">eBPF</span>
      <span class="text-xs px-2.5 py-1 rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 font-mono">Kubernetes</span>
    </div>
    <div class="flex items-center gap-4">
      <a href="#" class="inline-flex items-center gap-1.5 text-sm font-medium text-violet-600 dark:text-violet-400 hover:underline">
        Live Demo <i data-lucide="arrow-up-right" class="w-4 h-4"></i>
      </a>
      <a href="#" class="inline-flex items-center gap-1.5 text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white">
        Source Code <i data-lucide="github" class="w-4 h-4"></i>
      </a>
    </div>
  </div>

  <!-- Metric / Highlight Card (Spans 1 column) -->
  <div class="group relative overflow-hidden rounded-2xl bg-zinc-900/60 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 p-8 flex flex-col justify-between">
    <div>
      <span class="text-xs font-mono uppercase tracking-wider text-zinc-500">Global Impact</span>
      <div class="text-5xl font-black text-zinc-900 dark:text-white mt-4 font-mono tracking-tight">4.2M+</div>
      <p class="text-sm text-zinc-600 dark:text-zinc-400 mt-2">Active requests routed daily across 14 edge regions without outage.</p>
    </div>
    <div class="pt-6 border-t border-zinc-200 dark:border-zinc-800">
      <div class="flex items-center gap-2 text-xs text-emerald-600 dark:text-emerald-400 font-medium">
        <i data-lucide="shield-check" class="w-4 h-4"></i> 99.995% Service Level
      </div>
    </div>
  </div>
</div>
```

---

## 2. Spotlight Glow Hover Card (Inspired by Aceternity UI / Animos)

Tracks mouse coordinates and casts a subtle radial light glow onto the card border and surface:

```html
<div class="spotlight-card relative rounded-2xl p-6 bg-zinc-900 border border-zinc-800 overflow-hidden transition-all duration-300">
  <!-- Glowing radial overlay -->
  <div class="spotlight-glow pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300"></div>
  <div class="relative z-10">
    <div class="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/20 text-violet-400 flex items-center justify-center mb-4">
      <i data-lucide="cpu" class="w-5 h-5"></i>
    </div>
    <h4 class="text-lg font-bold text-white mb-1">High-Throughput Systems</h4>
    <p class="text-sm text-zinc-400">Architecting zero-downtime microservices capable of scaling under peak traffic spikes.</p>
  </div>
</div>

<script>
  // Mouse position tracker for spotlight effect
  document.querySelectorAll('.spotlight-card').forEach(card => {
    card.addEventListener('mousemove', e => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const glow = card.querySelector('.spotlight-glow');
      glow.style.opacity = '1';
      glow.style.background = `radial-gradient(400px circle at ${x}px ${y}px, rgba(139, 92, 246, 0.15), transparent 80%)`;
    });
    card.addEventListener('mouseleave', () => {
      card.querySelector('.spotlight-glow').style.opacity = '0';
    });
  });
</script>
```

---

## 3. Video Showreel Player Modal (Inspired by Motion/Flows)

For Video Editors and Motion Designers, provides an instant click-to-play popup:

```html
<!-- Trigger Button -->
<button id="open-showreel-btn" class="group inline-flex items-center gap-3 px-6 py-3.5 rounded-full bg-violet-600 hover:bg-violet-700 text-white font-semibold shadow-lg shadow-violet-600/25 transition-all duration-300 hover:scale-105">
  <span class="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center group-hover:scale-110 transition-transform">
    <i data-lucide="play" class="w-3.5 h-3.5 fill-current"></i>
  </span>
  Watch 2026 Showreel (1:45)
</button>

<!-- Showreel Modal -->
<div id="showreel-modal" class="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md opacity-0 pointer-events-none transition-all duration-300 p-4">
  <div class="relative w-full max-w-4xl bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl">
    <div class="flex items-center justify-between p-4 border-b border-zinc-800">
      <h3 class="text-white font-medium flex items-center gap-2">
        <i data-lucide="film" class="w-4 h-4 text-violet-400"></i> Selected Works Showreel
      </h3>
      <button id="close-showreel-btn" class="p-1 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors">
        <i data-lucide="x" class="w-5 h-5"></i>
      </button>
    </div>
    <div class="aspect-video w-full bg-black">
      <iframe id="showreel-iframe" class="w-full h-full" src="" title="Video Showreel" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
  </div>
</div>

<script>
  const openBtn = document.getElementById('open-showreel-btn');
  const closeBtn = document.getElementById('close-showreel-btn');
  const modal = document.getElementById('showreel-modal');
  const iframe = document.getElementById('showreel-iframe');
  const videoSrc = 'https://www.youtube.com/embed/sample_video'; // Replace with user's video link

  openBtn?.addEventListener('click', () => {
    iframe.src = videoSrc;
    modal.classList.remove('opacity-0', 'pointer-events-none');
  });

  const closeModal = () => {
    iframe.src = '';
    modal.classList.add('opacity-0', 'pointer-events-none');
  };

  closeBtn?.addEventListener('click', closeModal);
  modal?.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });
</script>
```

---

## 4. OriginUI 1-Click "Copy Email" Pill

High-utility contact pill that gives instant visual feedback:

```html
<button id="copy-email-btn" data-email="hello@example.com" class="group relative inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-100 dark:bg-zinc-800/80 hover:bg-zinc-200 dark:hover:bg-zinc-700/80 text-zinc-900 dark:text-zinc-200 border border-zinc-200 dark:border-zinc-700 text-sm font-medium transition-all duration-200">
  <i data-lucide="mail" class="w-4 h-4 text-zinc-500 dark:text-zinc-400"></i>
  <span id="email-text">hello@example.com</span>
  <i data-lucide="copy" class="w-3.5 h-3.5 text-zinc-400 group-hover:text-zinc-600 dark:group-hover:text-zinc-300"></i>
  <!-- Success Tooltip -->
  <span id="copy-feedback" class="absolute -top-8 left-1/2 -translate-x-1/2 px-2.5 py-1 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 text-xs rounded-md shadow-lg opacity-0 transition-opacity duration-200 pointer-events-none font-sans font-semibold">
    Copied!
  </span>
</button>

<script>
  const copyBtn = document.getElementById('copy-email-btn');
  const feedback = document.getElementById('copy-feedback');
  copyBtn?.addEventListener('click', async () => {
    const email = copyBtn.getAttribute('data-email');
    if (email) {
      await navigator.clipboard.writeText(email);
      feedback.classList.remove('opacity-0');
      setTimeout(() => feedback.classList.add('opacity-0'), 2000);
    }
  });
</script>
```

---

## 5. Micrograph Dynamic Work Filter Tabs

Enables visitor filtering between different project domains without page reloads:

```html
<div class="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none mb-8">
  <button class="filter-tab active px-4 py-1.5 rounded-full text-xs font-semibold bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 transition-colors" data-filter="all">All Works (12)</button>
  <button class="filter-tab px-4 py-1.5 rounded-full text-xs font-semibold bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors" data-filter="web">Web Apps</button>
  <button class="filter-tab px-4 py-1.5 rounded-full text-xs font-semibold bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors" data-filter="infra">Cloud & Infra</button>
  <button class="filter-tab px-4 py-1.5 rounded-full text-xs font-semibold bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors" data-filter="oss">Open Source</button>
</div>

<script>
  document.querySelectorAll('.filter-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.filter-tab').forEach(t => {
        t.className = 'filter-tab px-4 py-1.5 rounded-full text-xs font-semibold bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors';
      });
      tab.className = 'filter-tab active px-4 py-1.5 rounded-full text-xs font-semibold bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 transition-colors';
      
      const filter = tab.getAttribute('data-filter');
      document.querySelectorAll('.project-card').forEach(card => {
        if (filter === 'all' || card.getAttribute('data-category') === filter) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
</script>
```
