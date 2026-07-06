"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { GlassCard } from "@/app/components/GlassCard";
import { getRelatedProjectCount } from "@/app/data/portfolio";
import { cn } from "@/app/lib/utils";
import type { Skill } from "@/app/types";

interface SkillOrbProps {
  skill: Skill;
  className?: string;
}

const levelWidth = {
  Expert: "90%",
  Advanced: "75%",
  Intermediate: "60%",
};

export function SkillOrb({ skill, className }: SkillOrbProps) {
  const [hovered, setHovered] = useState(false);
  const projectCount = getRelatedProjectCount(skill.name);

  return (
    <div
      className={cn(
        "transition-transform duration-300 hover:scale-[1.02]",
        className,
      )}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <GlassCard hover className="flex h-full flex-col justify-between p-5">
        <div>
          <h3 className="text-base font-semibold tracking-tight text-text-primary">
            {skill.name}
          </h3>
          <span className="mt-2 inline-block rounded-full bg-accent-primary/10 px-2.5 py-0.5 text-xs font-medium text-accent-primary">
            {skill.level}
          </span>
          {hovered && projectCount > 0 && (
            <p className="mt-2 text-xs text-text-muted">
              {projectCount} related project{projectCount !== 1 ? "s" : ""}
            </p>
          )}
        </div>
        <div className="mt-4 h-1 w-full overflow-hidden rounded-full bg-white/5">
          <motion.div
            className="h-full rounded-full"
            style={{ backgroundColor: skill.brandColor ?? "#6366f1" }}
            initial={{ width: 0 }}
            whileInView={{ width: levelWidth[skill.level] }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
          />
        </div>
      </GlassCard>
    </div>
  );
}
