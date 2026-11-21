import React, { useState, useRef } from 'react';

interface Card3DProps {
  children: React.ReactNode;
  className?: string;
}

export const Card3D: React.FC<Card3DProps> = ({ children, className = '' }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const rX = ((mouseY - height / 2) / height) * -20;
    const rY = ((mouseX - width / 2) / width) * 20;
    setRotateX(rX);
    setRotateY(rY);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <div
      className="[perspective:1000px] flex items-center justify-center"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div
        ref={ref}
        className={`transition-all duration-200 ease-out [transform-style:preserve-3d] ${className}`}
        style={{
          transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        }}
      >
        {children}
      </div>
    </div>
  );
};

export const Card3DItem: React.FC<{
  children: React.ReactNode;
  translateZ?: number;
  className?: string;
}> = ({ children, translateZ = 30, className = '' }) => {
  return (
    <div
      style={{
        transform: `translateZ(${translateZ}px)`,
      }}
      className={`[transform-style:preserve-3d] transition-transform duration-200 ${className}`}
    >
      {children}
    </div>
  );
};
