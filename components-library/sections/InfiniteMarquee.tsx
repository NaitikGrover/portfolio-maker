import React from 'react';

interface MarqueeProps {
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  children?: React.ReactNode;
  repeat?: number;
}

export const InfiniteMarquee: React.FC<MarqueeProps> = ({
  className = '',
  reverse = false,
  pauseOnHover = true,
  children,
  repeat = 4,
}) => {
  return (
    <div
      className={`group flex overflow-hidden p-2 [--duration:40s] [--gap:1rem] [gap:var(--gap)] ${className}`}
    >
      {Array(repeat)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            className={`flex shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row ${
              reverse ? '[animation-direction:reverse]' : ''
            } ${pauseOnHover ? 'group-hover:[animation-play-state:paused]' : ''}`}
          >
            {children}
          </div>
        ))}
    </div>
  );
};
