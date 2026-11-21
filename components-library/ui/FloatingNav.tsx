import React, { useState } from 'react';
import { ThemeToggle } from './ThemeToggle';
import { ArrowRight } from 'lucide-react';

interface NavItem {
  name: string;
  link: string;
  icon?: React.ReactNode;
}

export const FloatingNav: React.FC<{
  navItems: NavItem[];
  className?: string;
  ctaText?: string;
  ctaLink?: string;
}> = ({ navItems, className = '', ctaText = "Let's Talk", ctaLink = '#contact' }) => {
  const [activeItem, setActiveItem] = useState(navItems[0]?.name);

  return (
    <div
      className={`fixed top-6 inset-x-0 max-w-2xl mx-auto z-50 px-4 transition-all duration-300 ${className}`}
    >
      <div className="flex items-center justify-between gap-2 px-4 py-2.5 rounded-full border border-zinc-200/80 dark:border-white/[0.12] bg-white/80 dark:bg-[#09090b]/80 backdrop-blur-xl shadow-lg shadow-black/5 dark:shadow-black/20">
        <nav className="flex items-center gap-1 sm:gap-2">
          {navItems.map((item, idx) => (
            <a
              key={idx}
              href={item.link}
              onClick={() => setActiveItem(item.name)}
              className={`relative px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-colors ${
                activeItem === item.name
                  ? 'text-zinc-900 dark:text-white font-semibold'
                  : 'text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white'
              }`}
            >
              {activeItem === item.name && (
                <span className="absolute inset-0 rounded-full bg-zinc-100 dark:bg-white/[0.08] -z-10" />
              )}
              {item.name}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 pl-2 border-l border-zinc-200 dark:border-zinc-800">
          <ThemeToggle />
          <a
            href={ctaLink}
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 hover:opacity-90 transition-opacity"
          >
            <span>{ctaText}</span>
            <ArrowRight className="w-3 h-3" />
          </a>
        </div>
      </div>
    </div>
  );
};
