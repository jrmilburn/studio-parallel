"use client";

import { useEffect, useState } from "react";

export function useInViewOnce<T extends HTMLElement>(
  options: IntersectionObserverInit = { threshold: 0.25 }
) {
  const [ref, setRef] = useState<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!ref) return;
    let seen = false;

    const io = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (!seen && entry.isIntersecting) {
        seen = true;
        setInView(true);
        io.unobserve(entry.target); // fire once
      }
    }, options);

    io.observe(ref);
    return () => io.disconnect();
  }, [ref, options]);

  return { ref: setRef, inView };
}