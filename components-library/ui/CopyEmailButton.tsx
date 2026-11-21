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
      className="group relative inline-flex items-center gap-2.5 px-5 py-3 rounded-xl bg-white dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-white/[0.08] text-sm font-semibold hover:bg-zinc-100 dark:hover:bg-zinc-800/80 transition-all shadow-sm"
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
        className={`absolute -top-9 left-1/2 -translate-x-1/2 px-2.5 py-1 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 text-xs rounded-md shadow-md pointer-events-none transition-all duration-200 font-sans font-bold whitespace-nowrap ${
          copied ? 'opacity-100 -translate-y-1' : 'opacity-0'
        }`}
      >
        Copied to Clipboard!
      </span>
    </button>
  );
};
