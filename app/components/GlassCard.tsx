"use client";

import { motion } from "framer-motion";
import { LiquidGlass, type LiquidGlassVariant } from "@/app/components/ui/LiquidGlass";
import { cn } from "@/app/lib/utils";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  variant?: LiquidGlassVariant;
  hover?: boolean;
  style?: React.CSSProperties;
  liquidFilter?: boolean;
}

export function GlassCard({
  children,
  className,
  variant = "default",
  hover = false,
  style,
  liquidFilter = false,
}: GlassCardProps) {
  return (
    <motion.div
      whileHover={
        hover
          ? {
              y: -6,
              transition: {
                duration: 0.3,
                ease: [0.16, 1, 0.3, 1],
              },
            }
          : undefined
      }
      className={cn(
        hover &&
          "transition-all duration-300 hover:border-white/30 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4),0_0_60px_rgba(99,102,241,0.1)]",
        "relative",
        className,
      )}
    >
      <LiquidGlass
        variant={variant}
        liquidFilter={liquidFilter}
        className="h-full w-full"
        style={style}
      >
        {children}
      </LiquidGlass>
    </motion.div>
  );
}
