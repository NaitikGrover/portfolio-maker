import React, { useState } from 'react';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
  className?: string;
}

export const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({
  beforeImage,
  afterImage,
  beforeLabel = 'Before',
  afterLabel = 'After',
  className = '',
}) => {
  const [sliderPosition, setSliderPosition] = useState(50);

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderPosition(Number(e.target.value));
  };

  return (
    <div className={`relative aspect-video w-full overflow-hidden rounded-2xl select-none border border-zinc-200 dark:border-zinc-800 ${className}`}>
      <img
        src={afterImage}
        alt="After"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ width: `${sliderPosition}%` }}
      >
        <img
          src={beforeImage}
          alt="Before"
          className="absolute inset-0 h-full w-full object-cover max-w-none"
          style={{ width: '100%', height: '100%' }}
        />
        <span className="absolute top-3 left-3 px-2 py-1 rounded bg-black/80 text-white font-mono text-xs font-semibold">
          {beforeLabel}
        </span>
      </div>

      <span className="absolute top-3 right-3 px-2 py-1 rounded bg-black/80 text-white font-mono text-xs font-semibold">
        {afterLabel}
      </span>

      {/* Slider Line */}
      <div
        className="absolute top-0 bottom-0 w-0.5 bg-white shadow-[0_0_10px_rgba(0,0,0,0.5)] cursor-ew-resize"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white text-zinc-900 shadow-xl flex items-center justify-center text-xs font-bold font-mono">
          ↔
        </div>
      </div>

      <input
        type="range"
        min="0"
        max="100"
        value={sliderPosition}
        onChange={handleSliderChange}
        className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
        aria-label="Image comparison slider"
      />
    </div>
  );
};
