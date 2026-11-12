import React, { useEffect, useState, useRef } from 'react';

export const MouseGlowAura: React.FC = () => {
  const [pos, setPos] = useState({ x: -200, y: -200 });
  const [visible, setVisible] = useState(false);
  const targetPos = useRef({ x: -200, y: -200 });
  const animFrame = useRef<number | null>(null);

  useEffect(() => {
    // Only enable on desktop pointer devices
    if (window.matchMedia('(hover: none)').matches) {
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      targetPos.current = { x: e.clientX, y: e.clientY };
      if (!visible) setVisible(true);
    };

    const handleMouseLeave = () => {
      setVisible(false);
    };

    // Smooth animation loop (lerp)
    const updatePosition = () => {
      setPos((prev) => ({
        x: prev.x + (targetPos.current.x - prev.x) * 0.15,
        y: prev.y + (targetPos.current.y - prev.y) * 0.15,
      }));
      animFrame.current = requestAnimationFrame(updatePosition);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    animFrame.current = requestAnimationFrame(updatePosition);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      if (animFrame.current) cancelAnimationFrame(animFrame.current);
    };
  }, [visible]);

  if (!visible) return null;

  return (
    <div
      className="pointer-events-none fixed z-10 w-[380px] h-[380px] -translate-x-1/2 -translate-y-1/2 rounded-full transition-opacity duration-300 opacity-60 hidden md:block"
      style={{
        left: `${pos.x}px`,
        top: `${pos.y}px`,
        background:
          'radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, rgba(14, 165, 233, 0.08) 40%, transparent 70%)',
        filter: 'blur(30px)',
      }}
    />
  );
};

