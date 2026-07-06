"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { GlassCard } from "@/app/components/GlassCard";
import { LiquidGlass } from "@/app/components/ui/LiquidGlass";
import type { Testimonial } from "@/app/types";

interface TestimonialCardProps {
  testimonial: Testimonial;
  index?: number;
  className?: string;
}

function getInitials(name: string): string {
  const cleaned = name.replace(/\[|\]/g, "").trim();
  const parts = cleaned.split(/\s+/).filter((p) => p && p !== "Dr." && p !== "Prof.");
  if (parts.length === 0) return "?";
  return parts
    .slice(0, 2)
    .map((p) => p[0]?.toUpperCase() ?? "")
    .join("");
}

export function TestimonialCard({
  testimonial,
  index = 0,
  className,
}: TestimonialCardProps) {
  const initials = getInitials(testimonial.author);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`h-full min-w-[300px] snap-center ${className ?? ""}`}
    >
      <GlassCard className="relative flex h-full flex-col p-8">
        <Quote className="absolute left-6 top-6 h-10 w-10 text-accent-primary/20" />

        <div className="relative z-10 flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-accent-primary to-accent-secondary text-sm font-bold text-white">
            {initials}
          </div>
          <LiquidGlass variant="pill" shine={false} edgeHighlight={false}>
            <div className="flex gap-0.5 px-3 py-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className="h-3.5 w-3.5 fill-accent-primary text-accent-primary"
                />
              ))}
            </div>
          </LiquidGlass>
        </div>

        <p className="relative z-10 mt-6 flex-1 text-base italic leading-relaxed text-text-secondary">
          &ldquo;{testimonial.quote}&rdquo;
        </p>
        <div className="relative z-10 mt-6 border-t border-white/10 pt-4">
          <p className="font-semibold text-text-primary">{testimonial.author}</p>
          <p className="text-sm text-text-muted">{testimonial.role}</p>
        </div>
      </GlassCard>
    </motion.div>
  );
}
