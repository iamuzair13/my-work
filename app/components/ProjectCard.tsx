"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { LiquidGlass } from "@/app/components/ui/LiquidGlass";
import { cn } from "@/app/lib/utils";
import type { Project } from "@/app/types";

// ─────────────────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────────────────

interface ProjectCardProps {
  project: Project;
  className?: string;
  index?: number;
  featured?: boolean;
}

// ─────────────────────────────────────────────────────────
// Animation
// ─────────────────────────────────────────────────────────

const cardMotion = {
  initial: { opacity: 0, y: 24, scale: 0.96 },
  animate: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.55,
      delay: i * 0.08,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

// ─────────────────────────────────────────────────────────
// Helpers
// ─────────────────────────────────────────────────────────

function normalizeUrl(url: string | undefined): string | undefined {
  if (!url) return undefined;
  return url.startsWith("http") ? url : `https://${url}`;
}

// ─────────────────────────────────────────────────────────
// Component
// ─────────────────────────────────────────────────────────

export function ProjectCard({
  project,
  className,
  index = 0,
  featured = false,
}: ProjectCardProps) {
  const liveUrl = normalizeUrl(project.live);
  const hasLinks = Boolean(liveUrl || project.github);

  return (
    <motion.article
      custom={index}
      variants={cardMotion}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-60px" }}
      className={cn(
        "group relative h-full overflow-hidden rounded-3xl",
        className
      )}
    >
      <LiquidGlass
        variant="default"
        liquidFilter={featured}
        className={cn(
          "flex h-full flex-col overflow-hidden p-0",
          "transition-all duration-300",
          "hover:-translate-y-1.5",
          "hover:shadow-[0_24px_64px_rgba(99,102,241,0.12)]"
        )}
      >
        {/* ─── Media ────────────────────────────────────── */}
        <div
          className={cn(
            "relative overflow-hidden bg-gradient-to-br",
            "animate-hue noise-overlay",
            "transition-transform duration-500 ease-out",
            "group-hover:scale-[1.03]",
            featured ? "min-h-[280px] flex-1" : "h-56",
            project.gradient
          )}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/90 via-bg-primary/20 to-transparent" />

          <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <LiquidGlass
                key={tech}
                variant="pill"
                shine={false}
                edgeHighlight={false}
              >
                <span className="px-2.5 py-1 text-xs font-medium text-text-secondary">
                  {tech}
                </span>
              </LiquidGlass>
            ))}
          </div>
        </div>

        {/* ─── Content ────────────────────────────────── */}
        <div className="flex flex-col p-6 md:p-8">
          <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-accent-tertiary">
            {project.type}
          </span>

          <h3
            className={cn(
              "mt-2 font-semibold tracking-tight leading-tight text-text-primary",
              featured ? "text-2xl" : "text-xl"
            )}
          >
            {project.title}
          </h3>

          <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-text-secondary">
            {project.description}
          </p>

          {hasLinks && (
            <div className="mt-5 flex flex-wrap gap-5">
              {liveUrl && (
                <ProjectLink
                  href={liveUrl}
                  icon={<ExternalLink className="h-4 w-4" />}
                  label="Live Demo"
                  variant="primary"
                />
              )}
              {project.github && (
                <ProjectLink
                  href={project.github}
                  icon={<Github className="h-4 w-4" />}
                  label="GitHub"
                  variant="secondary"
                />
              )}
            </div>
          )}
        </div>
      </LiquidGlass>
    </motion.article>
  );
}

// ─────────────────────────────────────────────────────────
// Sub-component: Project Link
// ─────────────────────────────────────────────────────────

interface ProjectLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
  variant: "primary" | "secondary";
}

function ProjectLink({ href, icon, label, variant }: ProjectLinkProps) {
  const isPrimary = variant === "primary";

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${label} — opens in new tab`}
      className={cn(
        "focus-ring inline-flex items-center gap-1.5 text-sm font-medium transition-colors duration-200",
        isPrimary
          ? "text-accent-primary hover:text-accent-secondary"
          : "text-text-secondary hover:text-text-primary"
      )}
    >
      {icon}
      {label}
    </a>
  );
}