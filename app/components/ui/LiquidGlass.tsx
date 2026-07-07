"use client";

import { forwardRef } from "react";
import { cn } from "@/app/lib/utils";

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
    background: "var(--glass-bg)",
    backdropFilter: "var(--glass-backdrop)",
    WebkitBackdropFilter: "var(--glass-backdrop)",
    border: "1px solid var(--glass-border)",
    borderRadius: "24px",
    boxShadow: "var(--glass-shadow)",
  },
  elevated: {
    background: "var(--glass-bg-elevated)",
    backdropFilter: "var(--glass-backdrop)",
    WebkitBackdropFilter: "var(--glass-backdrop)",
    border: "1px solid var(--glass-border)",
    borderRadius: "24px",
    boxShadow: "var(--glass-shadow)",
  },
  subtle: {
    background: "var(--glass-bg-subtle)",
    backdropFilter: "var(--glass-backdrop-subtle)",
    WebkitBackdropFilter: "var(--glass-backdrop-subtle)",
    border: "1px solid var(--glass-border)",
    borderRadius: "24px",
    boxShadow: "0 4px 16px rgba(0, 0, 0, 0.06)",
  },
  hero: {
    background: "var(--glass-bg-hero)",
    backdropFilter: "var(--glass-backdrop)",
    WebkitBackdropFilter: "var(--glass-backdrop)",
    border: "1px solid var(--glass-border)",
    borderRadius: "24px",
    boxShadow: "var(--glass-shadow)",
  },
  pill: {
    background: "var(--glass-bg-pill)",
    backdropFilter: "var(--glass-backdrop)",
    WebkitBackdropFilter: "var(--glass-backdrop)",
    border: "1px solid var(--glass-border)",
    borderRadius: "9999px",
    boxShadow: "var(--glass-shadow)",
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
          "liquid-glass liquid-glass-component relative overflow-hidden transition-all duration-300 ease-in-out",
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
