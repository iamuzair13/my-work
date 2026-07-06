"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Code, PenTool, Rocket, Search, type LucideIcon } from "lucide-react";
import { LiquidGlass } from "@/app/components/ui/LiquidGlass";
import { Reveal } from "@/app/components/Reveal";
import { SectionLabel } from "@/app/components/SectionLabel";
import { processSteps } from "@/app/data/portfolio";
import { staggerContainer, staggerItem } from "@/app/lib/animations";
import { useReducedMotion } from "@/app/hooks/useReducedMotion";

const iconMap: Record<string, LucideIcon> = {
  search: Search,
  "pen-tool": PenTool,
  code: Code,
  rocket: Rocket,
};

export function Process() {
  const lineRef = useRef<SVGLineElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion || !lineRef.current || !sectionRef.current) return;

    const initGsap = async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      gsap.fromTo(
        lineRef.current,
        { strokeDashoffset: 1000 },
        {
          strokeDashoffset: 0,
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            toggleActions: "play none none none",
          },
        },
      );
    };

    initGsap();
  }, [reducedMotion]);

  return (
    <section id="process" className="section-padding bg-bg-secondary/30">
      <div className="container-main">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <SectionLabel>My Process</SectionLabel>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-text-primary md:text-5xl">
              How I Deliver Results
            </h2>
          </Reveal>
        </div>

        <div ref={sectionRef} className="relative mt-16">
          <svg
            className="absolute left-0 right-0 top-12 hidden h-1 w-full lg:block"
            preserveAspectRatio="none"
          >
            <line
              ref={lineRef}
              x1="10%"
              y1="0"
              x2="90%"
              y2="0"
              stroke="url(#processGradient)"
              strokeWidth="2"
              strokeDasharray="1000"
              strokeDashoffset="1000"
            />
            <defs>
              <linearGradient id="processGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#6366f1" />
                <stop offset="100%" stopColor="#8b5cf6" />
              </linearGradient>
            </defs>
          </svg>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-4"
          >
            {processSteps.map((step) => {
              const Icon = iconMap[step.icon] ?? Search;
              return (
                <motion.div key={step.number} variants={staggerItem}>
                  <LiquidGlass variant="subtle" className="relative p-6 text-center lg:text-left">
                    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-accent-primary/30 bg-accent-primary/10 text-lg font-bold text-accent-primary lg:mx-0">
                      {step.number}
                    </div>
                    <div className="mb-3 inline-flex rounded-lg bg-bg-tertiary p-2 text-accent-secondary">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-semibold text-text-primary">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                      {step.description}
                    </p>
                  </LiquidGlass>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
