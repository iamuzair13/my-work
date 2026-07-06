import { cn } from "@/app/lib/utils";

interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionLabel({ children, className }: SectionLabelProps) {
  return (
    <span
      className={cn(
        "font-mono text-xs font-medium uppercase tracking-[0.2em] text-accent-primary",
        className,
      )}
    >
      {children}
    </span>
  );
}
