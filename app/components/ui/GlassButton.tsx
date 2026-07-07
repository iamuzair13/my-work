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
        "focus-ring inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-[0.9375rem] font-medium transition-all duration-300 ease-in-out active:scale-[0.98]",
        isPrimary
          ? "bg-gradient-to-br from-accent-primary to-accent-secondary text-white shadow-[0_4px_24px_rgba(59,130,246,0.35)] hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(59,130,246,0.5)]"
          : "border border-[var(--btn-secondary-border)] bg-[var(--btn-secondary-bg)] text-text-primary backdrop-blur-xl hover:-translate-y-0.5 hover:border-accent-primary/40 hover:bg-[var(--btn-secondary-bg-hover)]",
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
        "focus-ring inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-[0.9375rem] font-medium transition-all duration-300 ease-in-out active:scale-[0.98] disabled:opacity-60",
        isPrimary
          ? "bg-gradient-to-br from-accent-primary to-accent-secondary text-white shadow-[0_4px_24px_rgba(59,130,246,0.35)] hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(59,130,246,0.5)]"
          : "border border-[var(--btn-secondary-border)] bg-[var(--btn-secondary-bg)] text-text-primary backdrop-blur-xl hover:-translate-y-0.5 hover:border-accent-primary/40 hover:bg-[var(--btn-secondary-bg-hover)]",
        className,
      )}
      style={liquidFilter ? { filter: "url(#liquid-glass)" } : undefined}
      {...props}
    >
      {children}
    </button>
  );
}
