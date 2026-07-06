"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "@/app/hooks/useReducedMotion";
import { cn } from "@/app/lib/utils";

interface KineticTextProps {
  children: string;
  className?: string;
  minWeight?: number;
  maxWeight?: number;
}

export function KineticText({
  children,
  className,
  minWeight = 400,
  maxWeight = 700,
}: KineticTextProps) {
  const reducedMotion = useReducedMotion();
  const [weight, setWeight] = useState(minWeight);

  useEffect(() => {
    if (reducedMotion) {
      setWeight(maxWeight);
      return;
    }

    let ticking = false;

    const updateWeight = () => {
      const scrollY = window.scrollY;
      const maxScroll = 400;
      const progress = Math.min(scrollY / maxScroll, 1);
      setWeight(minWeight + (maxWeight - minWeight) * progress);
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateWeight);
        ticking = true;
      }
    };

    updateWeight();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [minWeight, maxWeight, reducedMotion]);

  return (
    <span
      className={cn(className)}
      style={{ fontWeight: weight, fontVariationSettings: `"wght" ${weight}` }}
    >
      {children}
    </span>
  );
}
