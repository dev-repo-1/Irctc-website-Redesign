
import { useEffect, useState } from 'react';

// Intersection Observer Hook for animation triggers
export const useInView = (options = {}) => {
  const [ref, setRef] = useState<HTMLElement | null>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (!ref) return;

    const observer = new IntersectionObserver(([entry]) => {
      setIsInView(entry.isIntersecting);
    }, options);

    observer.observe(ref);

    return () => {
      observer.disconnect();
    };
  }, [ref, options]);

  return { ref: setRef, isInView };
};

// Helper to apply animation classes based on visibility
export const getAnimationClass = (isInView: boolean, animationClass: string, delayClass = '') => {
  return isInView 
    ? `${animationClass} ${delayClass}`
    : 'opacity-0';
};
