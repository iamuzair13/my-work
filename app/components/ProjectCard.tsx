"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink, Github } from "lucide-react";
import { LiquidGlass } from "@/app/components/ui/LiquidGlass";
import { cn } from "@/app/lib/utils";
import type { Project } from "@/app/types";

interface ProjectCardProps {
  project: Project;
  className?: string;
  index?: number;
  featured?: boolean;
}

export function ProjectCard({
  project,
  className,
  index = 0,
  featured = false,
}: ProjectCardProps) {
  const liveUrl = project.live?.startsWith("http")
    ? project.live
    : project.live
      ? `https://${project.live}`
      : undefined;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={cn("group relative h-full overflow-hidden rounded-[24px]", className)}
    >
      <LiquidGlass
        variant="default"
        liquidFilter={featured}
        className="flex h-full flex-col overflow-hidden p-0 transition-all duration-400 hover:shadow-[0_20px_60px_rgba(99,102,241,0.15)]"
      >
        <div
          className={cn(
            "relative overflow-hidden bg-gradient-to-br animate-hue noise-overlay transition-transform duration-500 group-hover:scale-105",
            featured ? "min-h-[280px] flex-1" : "h-56",
            project.gradient,
          )}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/90 via-bg-primary/20 to-transparent" />
          <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <LiquidGlass key={tech} variant="pill" shine={false} edgeHighlight={false}>
                <span className="px-2.5 py-1 text-xs text-text-secondary">{tech}</span>
              </LiquidGlass>
            ))}
          </div>
        </div>

        <div className="relative flex flex-col p-6">
          <span className="font-mono text-xs uppercase tracking-wider text-accent-tertiary">
            {project.type}
          </span>
          <h3
            className={cn(
              "mt-2 font-semibold tracking-tight text-text-primary",
              featured ? "text-2xl" : "text-xl",
            )}
          >
            {project.title}
          </h3>
          <p className="mt-3 line-clamp-2 text-sm text-text-secondary">
            {project.description}
          </p>

          <div className="mt-4 flex flex-wrap gap-4 text-sm opacity-100 transition-opacity duration-300 lg:opacity-0 lg:group-hover:opacity-100">
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring inline-flex items-center gap-1 font-medium text-accent-primary transition-colors hover:text-accent-secondary"
              >
                View Project
                <ArrowUpRight className="h-4 w-4" />
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring inline-flex items-center gap-1 text-text-secondary transition-colors hover:text-text-primary"
              >
                <Github className="h-4 w-4" />
                GitHub
              </a>
            )}
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring inline-flex items-center gap-1 text-text-secondary transition-colors hover:text-text-primary"
              >
                <ExternalLink className="h-4 w-4" />
                Live Demo
              </a>
            )}
          </div>
        </div>

        <LiquidGlass
          variant="elevated"
          className="absolute inset-x-4 bottom-4 translate-y-full p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
          shine={false}
        >
          <p className="text-sm text-text-secondary">{project.description}</p>
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring mt-3 inline-flex items-center gap-1 text-sm font-medium text-accent-primary"
            >
              View Project
              <ArrowUpRight className="h-4 w-4" />
            </a>
          )}
        </LiquidGlass>
      </LiquidGlass>
    </motion.div>
  );
}
