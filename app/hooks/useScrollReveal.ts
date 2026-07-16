"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Intersection Observer-based scroll reveal hook.
 * Returns a ref to attach and a `visible` boolean.
 * Apply `.hg-reveal-hidden` and `.hg-reveal-visible` CSS classes conditionally.
 */
export function useScrollReveal(threshold = 0.15) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(node);
        }
      },
      { threshold },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, visible };
}
