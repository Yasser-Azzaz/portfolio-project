import { useState, useEffect, useRef, useCallback } from 'react';

export const useIntersectionObserver = () => {
  const [visibleElements, setVisibleElements] = useState<Set<string>>(new Set());
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.target.id) {
            setVisibleElements((prev) => new Set(prev).add(entry.target.id));
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const elements = document.querySelectorAll<HTMLElement>('[data-animate]');
    elements.forEach((el) => {
      if (el.id && observerRef.current) {
        observerRef.current.observe(el);
      }
    });

    return () => observerRef.current?.disconnect();
  }, []);

  const isVisible = useCallback((id: string) => visibleElements.has(id), [visibleElements]);

  return { isVisible };
};