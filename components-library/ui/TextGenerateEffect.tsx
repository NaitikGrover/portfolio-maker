import React, { useEffect, useState } from 'react';

export const TextGenerateEffect: React.FC<{
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
}> = ({ words, className = '', filter = true, duration = 0.5 }) => {
  const wordsArray = words.split(' ');
  const [revealedCount, setRevealedCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRevealedCount((prev) => {
        if (prev < wordsArray.length) {
          return prev + 1;
        }
        clearInterval(interval);
        return prev;
      });
    }, 70);

    return () => clearInterval(interval);
  }, [wordsArray.length]);

  return (
    <div className={`font-bold ${className}`}>
      <div className="leading-snug tracking-wide">
        {wordsArray.map((word, idx) => {
          const isRevealed = idx < revealedCount;
          return (
            <span
              key={word + idx}
              style={{
                transitionDuration: `${duration}s`,
                filter: filter ? (isRevealed ? 'blur(0px)' : 'blur(8px)') : undefined,
              }}
              className={`inline-block mr-1.5 transition-all ${
                isRevealed
                  ? 'opacity-100 text-zinc-900 dark:text-white'
                  : 'opacity-0 text-zinc-400 dark:text-zinc-600'
              }`}
            >
              {word}
            </span>
          );
        })}
      </div>
    </div>
  );
};
