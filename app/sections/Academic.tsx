"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { GlassCard } from "@/app/components/GlassCard";
import { LiquidGlass } from "@/app/components/ui/LiquidGlass";
import { Reveal } from "@/app/components/Reveal";
import { SectionLabel } from "@/app/components/SectionLabel";
import { academicContent } from "@/app/data/portfolio";
import { staggerContainer, staggerItem } from "@/app/lib/animations";

export function Academic() {
  return (
    <section id="academic" className="section-padding">
      <div className="container-main">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <SectionLabel>Academic Journey</SectionLabel>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-text-primary md:text-5xl">
              Education & Research Aspirations
            </h2>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          <Reveal>
            <GlassCard className="relative overflow-hidden border border-warning/20 p-8">
              <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-warning/10 blur-2xl" />
              <div className="mb-6 inline-flex rounded-xl bg-warning/10 p-3 text-warning">
                <GraduationCap className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-text-primary">
                {academicContent.degree}
              </h3>
              <div className="mt-4 space-y-2 text-text-secondary">
                <p>
                  <span className="text-text-muted">CGPA:</span>{" "}
                  {academicContent.cgpa}
                </p>
                <p>
                  <span className="text-text-muted">Graduated:</span>{" "}
                  {academicContent.graduation}
                </p>
              </div>
              <div className="mt-6">
                <p className="text-sm text-text-muted">Relevant coursework:</p>
                <p className="mt-2 text-sm text-text-secondary">
                  {academicContent.coursework.join(", ")}
                </p>
              </div>
            </GlassCard>
          </Reveal>

          <div>
            <Reveal delay={0.1}>
              <h3 className="mb-4 text-lg font-semibold text-text-primary">
                Research Interests
              </h3>
            </Reveal>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-wrap gap-3"
            >
              {academicContent.researchInterests.map((interest) => (
                <motion.div key={interest} variants={staggerItem}>
                  <LiquidGlass variant="pill" className="inline-flex">
                    <span className="px-4 py-2 text-sm text-text-secondary transition-colors hover:text-text-primary">
                      {interest}
                    </span>
                  </LiquidGlass>
                </motion.div>
              ))}
            </motion.div>

            <Reveal delay={0.3}>
              <div className="gradient-border mt-8 rounded-2xl p-6">
                <p className="text-sm leading-relaxed text-text-secondary">
                  {academicContent.futureGoal}
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
