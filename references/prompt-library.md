# React Component Prompt Library & Patterns (21st.dev & Aceternity)

This library contains production-ready **React + TypeScript + Tailwind CSS** component primitives inspired by **21st.dev**, **Aceternity UI**, **Magic UI**, and **OriginUI**.

Use these modular components when building or upgrading React + Vite portfolios.

---

## 1. Spotlight Glow Card (`SpotlightCard.tsx` — Aceternity / 21st.dev)

Tracks mouse coordinates and casts a glowing radial light gradient over the card border and surface:

```tsx
import React, { useRef, useState } from 'react';

interface SpotlightCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
}

export const SpotlightCard: React.FC<SpotlightCardProps> = ({
  children,
  className = '',
  glowColor = 'rgba(99, 102, 241, 0.15)',
  ...props
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState<number>(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 transition-all duration-300 ${className}`}
      {...props}
    >
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300"
        style={{
          opacity,
          background: `radial-gradient(400px circle at ${position.x}px ${position.y}px, ${glowColor}, transparent 80%)`,
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
};
```

---

## 2. Bento Grid & Bento Card (`BentoGrid.tsx` — 21st.dev / Magic UI)

Responsive container with asymmetric tiles for showcasing flagship projects and metrics:

```tsx
import React from 'react';

export const BentoGrid: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className = '',
}) => {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[22rem] ${className}`}>
      {children}
    </div>
  );
};

interface BentoCardProps {
  title: string;
  description: string;
  tag: string;
  span?: string;
  children?: React.ReactNode;
  footer?: React.ReactNode;
  className?: string;
}

export const BentoCard: React.FC<BentoCardProps> = ({
  title,
  description,
  tag,
  span = 'md:col-span-1',
  children,
  footer,
  className = '',
}) => {
  return (
    <div
      className={`group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 p-6 hover:border-zinc-400 dark:hover:border-zinc-700 transition-all ${span} ${className}`}
    >
      <div>
        <div className="flex items-center justify-between mb-3">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-semibold bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
            {tag}
          </span>
        </div>
        <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2 group-hover:text-brand-500 transition-colors">
          {title}
        </h3>
        <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
          {description}
        </p>
        {children}
      </div>
      {footer && <div className="pt-4 border-t border-zinc-100 dark:border-zinc-800/80">{footer}</div>}
    </div>
  );
};
```

---

## 3. Interactive Terminal Widget (`Terminal.tsx` — Micrograph / 21st.dev)

A modern simulated CLI widget displaying system stats and skills:

```tsx
import React, { useState } from 'react';
import { Terminal as TerminalIcon } from 'lucide-react';

interface TerminalCommand {
  command: string;
  output: string;
}

export const Terminal: React.FC<{ commands: TerminalCommand[]; userName?: string }> = ({
  commands,
  userName = 'developer',
}) => {
  const [activeTab, setActiveTab] = useState<number>(0);

  return (
    <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-[#121316] text-zinc-200 p-5 font-mono text-xs sm:text-sm shadow-xl overflow-hidden">
      <div className="flex items-center justify-between pb-3 border-b border-zinc-800 mb-4">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-red-500/80" />
          <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
          <span className="text-xs text-zinc-500 ml-2">{userName}@workstation:~</span>
        </div>
        <div className="flex items-center gap-1.5 text-zinc-500 text-xs">
          <TerminalIcon className="w-3.5 h-3.5" />
          <span>zsh</span>
        </div>
      </div>

      <div className="space-y-3">
        {commands.map((cmd, idx) => (
          <div key={idx} className="space-y-1">
            <div className="flex items-center gap-2 text-zinc-400">
              <span className="text-indigo-400 font-bold">$</span>
              <span>{cmd.command}</span>
            </div>
            <div className="text-zinc-300 pl-4 text-xs leading-relaxed">
              {cmd.output}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
```

---

## 4. OriginUI 1-Click Copy Email Button (`CopyEmailButton.tsx`)

A tactile copy button with interactive tooltip feedback:

```tsx
import React, { useState } from 'react';
import { Mail, Copy, Check } from 'lucide-react';

export const CopyEmailButton: React.FC<{ email: string; label?: string }> = ({
  email,
  label,
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch (err) {
      console.error('Failed to copy email', err);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className="group relative inline-flex items-center gap-2.5 px-5 py-3 rounded-xl bg-white dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-800 text-sm font-semibold hover:bg-zinc-100 dark:hover:bg-zinc-800/80 transition-all shadow-sm"
      aria-label="Copy email address"
    >
      <Mail className="w-4 h-4 text-indigo-500" />
      <span>{label || email}</span>
      {copied ? (
        <Check className="w-3.5 h-3.5 text-emerald-500" />
      ) : (
        <Copy className="w-3.5 h-3.5 text-zinc-400 group-hover:text-zinc-600 dark:group-hover:text-zinc-200 transition-colors" />
      )}

      {/* OriginUI Tooltip */}
      <span
        className={`absolute -top-9 left-1/2 -translate-x-1/2 px-2.5 py-1 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 text-xs rounded-md shadow-md pointer-events-none transition-all duration-200 font-sans font-bold ${
          copied ? 'opacity-100 -translate-y-1' : 'opacity-0'
        }`}
      >
        Copied to Clipboard!
      </span>
    </button>
  );
};
```

---

## 5. Persistent Theme Switcher (`ThemeToggle.tsx`)

Dual mode switcher supporting light, dark, and system preference with persistent `localStorage`:

```tsx
import React, { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

export const ThemeToggle: React.FC = () => {
  const [isDark, setIsDark] = useState<boolean>(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const shouldBeDark = savedTheme === 'dark' || (!savedTheme && prefersDark);
    
    setIsDark(shouldBeDark);
    if (shouldBeDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    const nextDark = !isDark;
    setIsDark(nextDark);
    if (nextDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle Dark and Light Mode"
      className="p-2 rounded-xl text-zinc-500 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors"
    >
      {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-zinc-600" />}
    </button>
  );
};
```
