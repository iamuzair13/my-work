"use client";

import { cn } from "@/app/lib/utils";

interface GlassButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: "primary" | "secondary";
  liquidFilter?: boolean;
}

export function GlassButton({
  children,
  className,
  variant = "primary",
  liquidFilter = false,
  ...props
}: GlassButtonProps) {
  const isPrimary = variant === "primary";

  return (
    <a
      className={cn(
        "focus-ring inline-flex items-center justify-center gap-2 rounded-xl px-7 py-3.5 text-[0.9375rem] font-medium transition-all duration-200",
        isPrimary
          ? "bg-gradient-to-br from-accent-primary to-accent-secondary text-white shadow-[0_4px_24px_rgba(99,102,241,0.35)] hover:scale-[1.02] hover:shadow-[0_8px_32px_rgba(99,102,241,0.5)]"
          : "border border-white/10 bg-white/5 text-text-primary backdrop-blur-xl hover:scale-[1.02] hover:border-accent-primary/40 hover:bg-white/10",
        className,
      )}
      style={liquidFilter ? { filter: "url(#liquid-glass)" } : undefined}
      {...props}
    >
      {children}
    </a>
  );
}

interface GlassButtonElementProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  liquidFilter?: boolean;
}

export function GlassButtonElement({
  children,
  className,
  variant = "primary",
  liquidFilter = false,
  type = "button",
  ...props
}: GlassButtonElementProps) {
  const isPrimary = variant === "primary";

  return (
    <button
      type={type}
      className={cn(
        "focus-ring inline-flex items-center justify-center gap-2 rounded-xl px-7 py-3.5 text-[0.9375rem] font-medium transition-all duration-200",
        isPrimary
          ? "bg-gradient-to-br from-accent-primary to-accent-secondary text-white shadow-[0_4px_24px_rgba(99,102,241,0.35)] hover:scale-[1.02] hover:shadow-[0_8px_32px_rgba(99,102,241,0.5)] disabled:opacity-60"
          : "border border-white/10 bg-white/5 text-text-primary backdrop-blur-xl hover:scale-[1.02] hover:border-accent-primary/40 hover:bg-white/10 disabled:opacity-60",
        className,
      )}
      style={liquidFilter ? { filter: "url(#liquid-glass)" } : undefined}
      {...props}
    >
      {children}
    </button>
  );
}
