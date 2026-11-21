import React from 'react';
import { Terminal as TerminalIcon } from 'lucide-react';

interface TerminalCommand {
  command: string;
  output: string;
}

export const TerminalWidget: React.FC<{
  commands: TerminalCommand[];
  userName?: string;
  className?: string;
}> = ({ commands, userName = 'developer', className = '' }) => {
  return (
    <div
      className={`rounded-2xl border border-zinc-200 dark:border-white/[0.08] bg-[#0c0d0f] text-zinc-200 p-5 font-mono text-xs sm:text-sm shadow-2xl overflow-hidden backdrop-blur-md ${className}`}
    >
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
