'use client'
import { useEffect, useRef } from 'react';

function ScrollSpeedTracker({ onChange }: { onChange: (speed: number) => void }) {
  const lastScrollTop = useRef(0);
  const lastTimestamp = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop = window.scrollY || document.documentElement.scrollTop;
      const currentTimestamp = Date.now();
      const deltaScroll = currentScrollTop - lastScrollTop.current;
      const deltaTime = currentTimestamp - lastTimestamp.current;

      if (deltaTime > 0) {
        const speed = Math.abs(deltaScroll / deltaTime) * 1000;
        onChange(speed);
      }

      lastScrollTop.current = currentScrollTop;
      lastTimestamp.current = currentTimestamp;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [onChange]);

  return null;
}

export default ScrollSpeedTracker;
