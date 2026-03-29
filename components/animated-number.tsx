"use client";

import { useEffect, useRef, useState } from "react";

type AnimatedNumberProps = {
  value: number;
  durationMs?: number;
};

export function AnimatedNumber({
  value,
  durationMs = 800,
}: AnimatedNumberProps) {
  const [displayValue, setDisplayValue] = useState(0);
  const [hasPlayed, setHasPlayed] = useState(false);
  const elementRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const element = elementRef.current;

    if (!element || hasPlayed) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) {
          return;
        }

        const startTime = performance.now();

        const animate = (currentTime: number) => {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / durationMs, 1);
          const nextValue = Math.round(progress * value);

          setDisplayValue(nextValue);

          if (progress < 1) {
            window.requestAnimationFrame(animate);
            return;
          }

          setHasPlayed(true);
        };

        window.requestAnimationFrame(animate);
        observer.disconnect();
      },
      { threshold: 0.4 },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [durationMs, hasPlayed, value]);

  return (
    <span ref={elementRef} role="status" aria-live="polite" aria-atomic="true">
      {displayValue}
    </span>
  );
}
