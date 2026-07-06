"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/app/components/Reveal";
import { SectionLabel } from "@/app/components/SectionLabel";
import { ServiceCard } from "@/app/components/ServiceCard";
import { services } from "@/app/data/portfolio";
import { staggerContainer, staggerItem } from "@/app/lib/animations";

export function Services() {
  return (
    <section id="services" className="section-padding bg-bg-secondary/30">
      <div className="container-main">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <SectionLabel>What I Do</SectionLabel>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-text-primary md:text-5xl">
              Services Built for Impact
            </h2>
          </Reveal>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service) => (
            <motion.div key={service.title} variants={staggerItem}>
              <ServiceCard
                title={service.title}
                description={service.description}
                icon={service.icon}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
