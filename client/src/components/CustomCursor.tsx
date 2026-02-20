'use client';

import { useEffect, useRef, useState } from 'react';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [delayPosition, setDelayPosition] = useState({ x: 0, y: 0 });
  const requestRef = useRef<number | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const followCursor = () => {
      setDelayPosition((prev) => {
        const dx = mousePosition.x - prev.x;
        const dy = mousePosition.y - prev.y;
        return {
          x: prev.x + dx * 0.1,
          y: prev.y + dy * 0.1,
        };
      });

      requestRef.current = requestAnimationFrame(followCursor);
    };

    requestRef.current = requestAnimationFrame(followCursor);

    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [mousePosition.x, mousePosition.y]); // Only watch coordinates

  return (
    <>
      {/* Inner Dot */}
      <div
        className="fixed top-0 left-0 w-2 h-2 bg-neutral-500 rounded-full z-[1000] pointer-events-none mix-blend-difference"
        style={{
          transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
          transition: 'transform 0.05s linear',
        }}
      />

      {/* Outer Ring */}
      <div
        className="fixed top-0 left-0 w-8 h-8 border-2 border-neutral-500 rounded-full z-[999] pointer-events-none mix-blend-difference"
        style={{
          transform: `translate(${delayPosition.x - 16}px, ${delayPosition.y - 16}px)`,
        }}
      />
    </>
  );
};

export default CustomCursor;
