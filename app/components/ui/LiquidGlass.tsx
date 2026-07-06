"use client";

import { cn } from "@/app/lib/utils";
import { forwardRef } from "react";

export type LiquidGlassVariant =
  | "default"
  | "elevated"
  | "subtle"
  | "hero"
  | "pill";

interface LiquidGlassProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: LiquidGlassVariant;
  as?: "div" | "section" | "article" | "nav" | "header" | "footer";
  shine?: boolean;
  edgeHighlight?: boolean;
  liquidFilter?: boolean;
}

const variantStyles: Record<LiquidGlassVariant, React.CSSProperties> = {
  default: {
    background: "rgba(255, 255, 255, 0.08)",
    backdropFilter: "blur(20px) saturate(180%)",
    WebkitBackdropFilter: "blur(20px) saturate(180%)",
    border: "1px solid rgba(255, 255, 255, 0.18)",
    borderRadius: "24px",
    boxShadow: `
      0 8px 32px rgba(0, 0, 0, 0.1),
      inset 0 1px 0 rgba(255, 255, 255, 0.2),
      inset 0 -1px 0 rgba(0, 0, 0, 0.05)
    `,
  },
  elevated: {
    background: "rgba(255, 255, 255, 0.1)",
    backdropFilter: "blur(24px) saturate(180%)",
    WebkitBackdropFilter: "blur(24px) saturate(180%)",
    border: "1px solid rgba(255, 255, 255, 0.2)",
    borderRadius: "24px",
    boxShadow: `
      0 12px 40px rgba(0, 0, 0, 0.15),
      inset 0 1px 0 rgba(255, 255, 255, 0.25),
      inset 0 -1px 0 rgba(0, 0, 0, 0.05)
    `,
  },
  subtle: {
    background: "rgba(255, 255, 255, 0.04)",
    backdropFilter: "blur(12px) saturate(150%)",
    WebkitBackdropFilter: "blur(12px) saturate(150%)",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    borderRadius: "24px",
    boxShadow: "0 4px 16px rgba(0, 0, 0, 0.08)",
  },
  hero: {
    background: "rgba(255, 255, 255, 0.08)",
    backdropFilter: "blur(20px) saturate(180%)",
    WebkitBackdropFilter: "blur(20px) saturate(180%)",
    border: "1px solid rgba(255, 255, 255, 0.18)",
    borderRadius: "24px",
    boxShadow: `
      0 8px 32px rgba(0, 0, 0, 0.1),
      inset 0 1px 0 rgba(255, 255, 255, 0.2),
      inset 0 -1px 0 rgba(0, 0, 0, 0.05)
    `,
  },
  pill: {
    background: "rgba(255, 255, 255, 0.06)",
    backdropFilter: "blur(16px) saturate(180%)",
    WebkitBackdropFilter: "blur(16px) saturate(180%)",
    border: "1px solid rgba(255, 255, 255, 0.12)",
    borderRadius: "9999px",
    boxShadow: `
      0 4px 16px rgba(0, 0, 0, 0.08),
      inset 0 1px 0 rgba(255, 255, 255, 0.15)
    `,
  },
};

export const LiquidGlass = forwardRef<HTMLDivElement, LiquidGlassProps>(
  function LiquidGlass(
    {
      children,
      className,
      variant = "default",
      as: Component = "div",
      shine = true,
      edgeHighlight = true,
      liquidFilter = false,
      style,
      ...props
    },
    ref,
  ) {
    return (
      <Component
        ref={ref as React.Ref<HTMLDivElement>}
        className={cn(
          "liquid-glass liquid-glass-component relative overflow-hidden",
          className,
        )}
        style={{
          ...variantStyles[variant],
          ...(liquidFilter ? { filter: "url(#liquid-glass)" } : {}),
          ...style,
        }}
        {...props}
      >
        {shine && (
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              borderRadius: "inherit",
              background:
                "linear-gradient(135deg, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0) 50%, rgba(255,255,255,0.1) 100%)",
              mixBlendMode: "overlay",
            }}
            aria-hidden
          />
        )}
        {edgeHighlight && (
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              borderRadius: "inherit",
              padding: "1px",
              background:
                "linear-gradient(180deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0) 20%, rgba(255,255,255,0) 80%, rgba(255,255,255,0.1) 100%)",
              WebkitMask:
                "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
              WebkitMaskComposite: "xor",
              maskComposite: "exclude",
            }}
            aria-hidden
          />
        )}
        <div className="relative z-[1]">{children}</div>
      </Component>
    );
  },
);
