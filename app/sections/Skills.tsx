"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/app/components/Reveal";
import { SectionLabel } from "@/app/components/SectionLabel";
import { SkillOrb } from "@/app/components/SkillOrb";
import { LiquidGlass } from "@/app/components/ui/LiquidGlass";
import {
  aiToolsSkills,
  backendSkills,
  frontendSkills,
} from "@/app/data/portfolio";
import { staggerContainer, staggerItem } from "@/app/lib/animations";

const categories = [
  { title: "Frontend", skills: frontendSkills, accent: "border-accent-primary" },
  { title: "Backend", skills: backendSkills, accent: "border-accent-secondary" },
  { title: "AI / Tools", skills: aiToolsSkills, accent: "border-accent-tertiary" },
] as const;

export function Skills() {
  return (
    <section id="skills" className="section-padding bg-bg-secondary/30">
      <div className="container-main">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <SectionLabel>Tech Stack</SectionLabel>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-text-primary md:text-5xl">
              Tools I Work With
            </h2>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {categories.map((category, catIndex) => (
            <Reveal key={category.title} delay={catIndex * 0.1}>
              <LiquidGlass
                variant="default"
                className={`border-l-4 p-6 ${category.accent}`}
              >
                <h3 className="mb-6 text-lg font-semibold text-text-primary">
                  {category.title}
                </h3>
                <motion.div
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-1"
                >
                  {category.skills.map((skill) => (
                    <motion.div key={skill.name} variants={staggerItem}>
                      <SkillOrb skill={skill} />
                    </motion.div>
                  ))}
                </motion.div>
              </LiquidGlass>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
