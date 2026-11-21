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
  tagColor?: string;
  span?: string;
  children?: React.ReactNode;
  footer?: React.ReactNode;
  background?: React.ReactNode;
  className?: string;
}

export const BentoCard: React.FC<BentoCardProps> = ({
  title,
  description,
  tag,
  tagColor = 'bg-brand-500/10 text-brand-600 dark:text-brand-400 border-brand-500/20',
  span = 'md:col-span-1',
  children,
  footer,
  background,
  className = '',
}) => {
  return (
    <div
      className={`group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-zinc-200 dark:border-white/[0.08] bg-white dark:bg-zinc-900/60 p-7 hover:border-zinc-400 dark:hover:border-white/[0.2] backdrop-blur-md transition-all duration-300 ${span} ${className}`}
    >
      {background && <div className="absolute inset-0 z-0 overflow-hidden">{background}</div>}
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-3">
          <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-semibold border ${tagColor}`}>
            {tag}
          </span>
        </div>
        <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2 group-hover:text-brand-500 transition-colors">
          {title}
        </h3>
        <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
          {description}
        </p>
        {children}
      </div>
      {footer && <div className="relative z-10 pt-4 border-t border-zinc-100 dark:border-zinc-800/80">{footer}</div>}
    </div>
  );
};
