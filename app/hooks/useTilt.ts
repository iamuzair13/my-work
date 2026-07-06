"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useReducedMotion } from "@/app/hooks/useReducedMotion";

interface TiltState {
  rotateX: number;
  rotateY: number;
}

const MAX_TILT = 5;

export function useTilt() {
  const ref = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();
  const rafRef = useRef<number | null>(null);
  const targetRef = useRef<TiltState>({ rotateX: 0, rotateY: 0 });
  const [tilt, setTilt] = useState<TiltState>({ rotateX: 0, rotateY: 0 });

  const animate = useCallback(() => {
    setTilt((prev) => {
      const next = {
        rotateX: prev.rotateX + (targetRef.current.rotateX - prev.rotateX) * 0.15,
        rotateY: prev.rotateY + (targetRef.current.rotateY - prev.rotateY) * 0.15,
      };
      if (
        Math.abs(next.rotateX - targetRef.current.rotateX) > 0.01 ||
        Math.abs(next.rotateY - targetRef.current.rotateY) > 0.01
      ) {
        rafRef.current = requestAnimationFrame(animate);
      }
      return next;
    });
  }, []);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (reducedMotion || !ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;

      targetRef.current = {
        rotateX: -y * MAX_TILT * 2,
        rotateY: x * MAX_TILT * 2,
      };

      if (!rafRef.current) {
        rafRef.current = requestAnimationFrame(animate);
      }
    },
    [reducedMotion, animate],
  );

  const handleMouseLeave = useCallback(() => {
    targetRef.current = { rotateX: 0, rotateY: 0 };
    if (!rafRef.current) {
      rafRef.current = requestAnimationFrame(animate);
    }
  }, [animate]);

  useEffect(() => {
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const style: React.CSSProperties = reducedMotion
    ? {}
    : {
        transform: `perspective(1000px) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)`,
        transition: "transform 0.1s ease-out",
        willChange: "transform",
      };

  return {
    ref,
    style,
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
  };
}
