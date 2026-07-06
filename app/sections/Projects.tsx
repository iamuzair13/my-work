"use client";

import { Reveal } from "@/app/components/Reveal";
import { SectionLabel } from "@/app/components/SectionLabel";
import { ProjectCard } from "@/app/components/ProjectCard";
import { projects } from "@/app/data/portfolio";
import { cn } from "@/app/lib/utils";

export function Projects() {
  const [featured, ...rest] = projects;

  return (
    <section id="projects" className="section-padding">
      <div className="container-main">
        <Reveal>
          <SectionLabel>Featured Work</SectionLabel>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-4 max-w-2xl text-3xl font-bold tracking-tight text-text-primary md:text-5xl">
            Projects That Solve Real Problems
          </h2>
        </Reveal>

        <div className="mt-16 grid auto-rows-fr gap-6 lg:grid-cols-3 lg:gap-8">
          {featured && (
            <div className="lg:col-span-2 lg:row-span-2">
              <ProjectCard project={featured} index={0} featured />
            </div>
          )}
          {rest.map((project, index) => (
            <div
              key={project.id}
              className={cn("lg:col-span-1")}
            >
              <ProjectCard project={project} index={index + 1} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
