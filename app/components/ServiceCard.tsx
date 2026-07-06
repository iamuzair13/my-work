"use client";

import {
  Cloud,
  Code2,
  LayoutDashboard,
  Rocket,
  Settings,
  type LucideIcon,
} from "lucide-react";
import { GlassCard } from "@/app/components/GlassCard";
import { useTilt } from "@/app/hooks/useTilt";
import { cn } from "@/app/lib/utils";

const iconMap: Record<string, LucideIcon> = {
  cloud: Cloud,
  "layout-dashboard": LayoutDashboard,
  code2: Code2,
  settings: Settings,
  rocket: Rocket,
};

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  className?: string;
}

export function ServiceCard({
  title,
  description,
  icon,
  className,
}: ServiceCardProps) {
  const Icon = iconMap[icon] ?? Code2;
  const tilt = useTilt();

  return (
    <div
      ref={tilt.ref}
      style={tilt.style}
      onMouseMove={tilt.onMouseMove}
      onMouseLeave={tilt.onMouseLeave}
      className={cn("h-full", className)}
    >
      <GlassCard
        hover
        className="group h-full p-8 transition-all duration-300 hover:bg-white/[0.1] hover:shadow-[0_0_40px_rgba(99,102,241,0.15)]"
      >
        <div className="mb-5 inline-flex animate-float rounded-xl bg-gradient-to-br from-accent-primary/20 to-accent-secondary/20 p-3">
          <Icon className="h-6 w-6 text-accent-primary" />
        </div>
        <h3 className="mb-3 text-xl font-semibold tracking-tight text-text-primary">
          {title}
        </h3>
        <p className="text-sm leading-relaxed text-text-secondary">
          {description}
        </p>
      </GlassCard>
    </div>
  );
}
