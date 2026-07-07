"use client";

import { useEffect, useRef, useState } from "react";
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
  const { ref, inView } = useInView({
    threshold: 0.1,
    rootMargin: "0px 0px -5% 0px",
  });
  const [display, setDisplay] = useState(`0${suffix}`);
  const reducedMotion = useReducedMotion();
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!inView || hasAnimated.current) return;
    hasAnimated.current = true;

    if (reducedMotion) {
      setDisplay(`${value.toFixed(decimals)}${suffix}`);
      return;
    }

    const start = performance.now();
    let animationId: number;

    const animate = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = value * eased;

      setDisplay(`${current.toFixed(decimals)}${suffix}`);

      if (progress < 1) {
        animationId = requestAnimationFrame(animate);
      }
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [inView, value, suffix, decimals, duration, reducedMotion]);

  return (
    <span ref={ref as React.RefObject<HTMLSpanElement>} className={className}>
      <span className="gradient-text">{display}</span>
    </span>
  );
}
