import React from 'react';

interface AuroraBackgroundProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  showRadialGradient?: boolean;
}

export const AuroraBackground: React.FC<AuroraBackgroundProps> = ({
  className = '',
  children,
  showRadialGradient = true,
  ...props
}) => {
  return (
    <div
      className={`relative flex flex-col items-center justify-center bg-zinc-50 dark:bg-[#09090b] text-zinc-900 dark:text-zinc-100 transition-bg ${className}`}
      {...props}
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className={`
            [--white-gradient:repeating-linear-gradient(100deg,var(--white)_0%,var(--white)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--white)_16%)]
            [--dark-gradient:repeating-linear-gradient(100deg,var(--black)_0%,var(--black)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--black)_16%)]
            [--aurora:repeating-linear-gradient(100deg,var(--blue-500)_10%,var(--indigo-300)_15%,var(--blue-300)_20%,var(--violet-200)_25%,var(--blue-400)_30%)]
            [background-image:var(--white-gradient),var(--aurora)]
            dark:[background-image:var(--dark-gradient),var(--aurora)]
            [background-size:300%,_200%]
            [background-position:50%_50%,50%_50%]
            filter blur-[10px] invert dark:invert-0
            after:content-[""] after:absolute after:inset-0 after:[background-image:var(--white-gradient),var(--aurora)] 
            after:dark:[background-image:var(--dark-gradient),var(--aurora)]
            after:[background-size:200%,_100%] 
            after:animate-aurora after:[background-attachment:fixed] after:mix-blend-difference
            pointer-events-none
            absolute -inset-[10px] opacity-40 will-change-transform
          `}
          style={{
            maskImage: showRadialGradient
              ? 'radial-gradient(ellipse at 100% 0%, black 10%, transparent 70%)'
              : undefined,
          }}
        />
      </div>
      {children}
    </div>
  );
};
