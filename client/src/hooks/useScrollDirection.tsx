import { useState, useEffect, useRef } from 'react';

type ScrollDirection = 'up' | 'down';

export const useScrollDirection = (): ScrollDirection => {
  const [scrollDirection, setScrollDirection] = useState<ScrollDirection>('up');
  const lastScrollY = useRef(0); // Initialize safely for SSR
  const direction = useRef<ScrollDirection>('up');

  useEffect(() => {
    if (typeof window === 'undefined') return; // Bail out on the server

    lastScrollY.current = window.scrollY;

    const updateScrollDirection = () => {
      const scrollY = window.scrollY;
      const newDirection: ScrollDirection = scrollY > lastScrollY.current ? 'down' : 'up';

      if (
        newDirection !== direction.current &&
        Math.abs(scrollY - lastScrollY.current) > 5
      ) {
        direction.current = newDirection;
        setScrollDirection(newDirection);
      }

      lastScrollY.current = scrollY;
    };

    window.addEventListener('scroll', updateScrollDirection);

    return () => {
      window.removeEventListener('scroll', updateScrollDirection);
    };
  }, []);

  return scrollDirection;
};
