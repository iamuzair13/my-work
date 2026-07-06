"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "@/app/hooks/useReducedMotion";

export function CustomCursor() {
  const reducedMotion = useReducedMotion();
  const dotRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const hoveringRef = useRef(false);

  useEffect(() => {
    if (reducedMotion || window.innerWidth < 1024) return;

    document.body.classList.add("custom-cursor-active");

    const updatePosition = (x: number, y: number) => {
      const dot = dotRef.current;
      if (!dot) return;
      dot.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
    };

    const updateHoverState = () => {
      const inner = innerRef.current;
      if (!inner) return;

      const hovering = hoveringRef.current;
      const size = hovering ? 30 : 8;
      inner.style.width = `${size}px`;
      inner.style.height = `${size}px`;
      inner.style.opacity = hovering ? "0.3" : "0.8";
    };

    const handleMove = (event: MouseEvent) => {
      updatePosition(event.clientX, event.clientY);
    };

    const handleOver = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const interactive = target.closest(
        "a, button, [role='button'], input, textarea, select, label",
      );
      const nextHovering = !!interactive;
      if (nextHovering !== hoveringRef.current) {
        hoveringRef.current = nextHovering;
        updateHoverState();
      }
    };

    window.addEventListener("mousemove", handleMove, { passive: true });
    document.addEventListener("mouseover", handleOver);

    return () => {
      document.body.classList.remove("custom-cursor-active");
      window.removeEventListener("mousemove", handleMove);
      document.removeEventListener("mouseover", handleOver);
    };
  }, [reducedMotion]);

  if (reducedMotion) return null;

  return (
    <div
      ref={dotRef}
      className="pointer-events-none fixed top-0 left-0 z-[200] hidden will-change-transform  lg:block"
      style={{ transform: "translate3d(-100px, -100px, 0) translate(-50%, -50%)" }}
    >
      <div
        ref={innerRef}
        className="rounded-full bg-black mix-blend-difference"
        style={{ width: 8, height: 8, opacity: 0.8 }}
      />
    </div>
  );
}
