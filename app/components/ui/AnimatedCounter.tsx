"use client";

import { useEffect, useRef } from "react";
import { useInView } from "@/app/hooks/useInView";
import { useReducedMotion } from "@/app/hooks/useReducedMotion";
import { cn } from "@/app/lib/utils";

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  decimals?: number;
  duration?: number;
  className?: string;
}

export function AnimatedCounter({
  value,
  suffix = "",
  decimals = 0,
  duration = 1500,
  className,
}: AnimatedCounterProps) {
  const { ref, inView } = useInView(0.3);
  const countRef = useRef<HTMLSpanElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (!inView || !countRef.current) return;

    if (reducedMotion) {
      countRef.current.textContent = `${value.toFixed(decimals)}${suffix}`;
      return;
    }

    const start = performance.now();
    const animate = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = value * eased;

      if (countRef.current) {
        countRef.current.textContent = `${current.toFixed(decimals)}${suffix}`;
      }

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [inView, value, suffix, decimals, duration, reducedMotion]);

  return (
    <span ref={ref as React.RefObject<HTMLSpanElement>} className={className}>
      <span ref={countRef} className="gradient-text">
        0{suffix}
      </span>
    </span>
  );
}
