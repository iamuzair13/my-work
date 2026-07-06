"use client";

import { motion } from "framer-motion";
import { cn } from "@/app/lib/utils";

interface TechBadgeProps {
  name: string;
  className?: string;
}

export function TechBadge({ name, className }: TechBadgeProps) {
  return (
    <motion.div
      className={cn(
        "glass-subtle flex shrink-0 items-center gap-2 rounded-full px-4 py-2 text-sm text-text-secondary animate-glow-pulse",
        className,
      )}
    >
      <span className="h-2 w-2 rounded-full bg-accent-primary" />
      <span className="font-medium">{name}</span>
    </motion.div>
  );
}
