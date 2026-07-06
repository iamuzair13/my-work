"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { ChevronDown, Download } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { GlassButton } from "@/app/components/ui/GlassButton";
import { KineticText } from "@/app/components/ui/KineticText";
import { LiquidGlass } from "@/app/components/ui/LiquidGlass";
import {
  heroBadge,
  heroHeadlines,
  siteConfig,
  techBadges,
} from "@/app/data/portfolio";
import { useReducedMotion } from "@/app/hooks/useReducedMotion";
import { useTilt } from "@/app/hooks/useTilt";
import {
  fadeInLeft,
  fadeInRight,
  scaleIn,
  staggerContainer,
  staggerItem,
} from "@/app/lib/animations";

const ParticleField = dynamic(
  () =>
    import("@/app/components/ParticleField").then((mod) => mod.ParticleField),
  { ssr: false },
);

const firstName = siteConfig.name.split(" ")[0];

export function Hero() {
  const reducedMotion = useReducedMotion();
  const tilt = useTilt();
  const [showParticles, setShowParticles] = useState(false);

  useEffect(() => {
    const isDesktop = window.matchMedia("(min-width: 1024px)").matches;
    setShowParticles(isDesktop && !reducedMotion);
  }, [reducedMotion]);

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden pt-24"
    >
      <div className="mesh-gradient" aria-hidden />
      <div className="mesh-gradient-cyan" aria-hidden />
      {showParticles && <ParticleField />}

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-bg-primary/20 to-bg-primary" />

      <div className="container-main relative z-10 py-16 md:py-20">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            animate="visible"
            className="order-2 text-center lg:order-1 lg:text-left"
          >
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              <motion.div variants={staggerItem}>
                <LiquidGlass variant="pill" className="inline-flex">
                  <span className="px-4 py-1.5 text-sm text-text-secondary">
                    <KineticText>{heroBadge}</KineticText>
                  </span>
                </LiquidGlass>
              </motion.div>

              <motion.p
                variants={staggerItem}
                className="mt-6 text-lg text-text-secondary md:text-xl"
              >
                Hi, I&apos;m {firstName}
              </motion.p>

              <motion.h1
                variants={staggerItem}
                className="mt-2 text-4xl font-bold leading-[1.1] tracking-tight md:text-5xl lg:text-6xl xl:text-7xl"
              >
                <span className="gradient-text block">{heroHeadlines[0]}</span>
                <span className="mt-2 block bg-gradient-to-r from-accent-primary via-accent-secondary to-accent-tertiary bg-clip-text text-transparent">
                  {heroHeadlines[1]}
                </span>
              </motion.h1>

              <motion.p
                variants={staggerItem}
                className="mx-auto mt-6 max-w-xl text-lg text-text-secondary md:text-xl lg:mx-0"
              >
                {siteConfig.description}
              </motion.p>

              <motion.div variants={staggerItem} className="mt-6">
                <LiquidGlass variant="pill" className="inline-flex">
                  <span className="inline-flex items-center gap-2 px-4 py-1.5 text-sm text-text-secondary">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-success" />
                    </span>
                    {siteConfig.availability}
                  </span>
                </LiquidGlass>
              </motion.div>

              <motion.div
                variants={staggerItem}
                className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start"
              >
                <GlassButton href="#projects" liquidFilter variant="primary">
                  View My Work
                </GlassButton>
                <GlassButton
                  href={siteConfig.resumeUrl}
                  download
                  variant="secondary"
                >
                  <Download className="h-4 w-4" />
                  Download Resume
                </GlassButton>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            variants={fadeInRight}
            initial="hidden"
            animate="visible"
            className="order-1 lg:order-2"
          >
            <motion.div
              variants={scaleIn}
              initial="hidden"
              animate="visible"
              className="relative mx-auto w-full max-w-md"
              style={{ perspective: "1000px" }}
            >
              <div className="absolute -right-8 -top-8 h-48 w-48 rounded-full bg-accent-primary/20 blur-3xl" />
              <div className="absolute -bottom-8 -left-8 h-40 w-40 rounded-full bg-accent-secondary/20 blur-3xl" />

              <div
                ref={tilt.ref}
                style={tilt.style}
                onMouseMove={tilt.onMouseMove}
                onMouseLeave={tilt.onMouseLeave}
                className="gradient-border relative rounded-3xl p-1 shadow-[0_20px_60px_rgba(99,102,241,0.15)]"
              >
                <LiquidGlass variant="hero" className="overflow-hidden rounded-[22px]">
                  <Image
                    src={siteConfig.profileImage}
                    alt={siteConfig.name}
                    width={480}
                    height={600}
                    priority
                    unoptimized
                    className="aspect-[4/5] h-auto w-full object-cover object-top"
                  />
                </LiquidGlass>
              </div>

              <LiquidGlass
                variant="pill"
                className="absolute -bottom-4 left-1/2 hidden -translate-x-1/2 lg:inline-flex"
              >
                <span className="inline-flex items-center gap-2 whitespace-nowrap px-4 py-2 text-sm text-text-secondary">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-success" />
                  </span>
                  Available for work
                </span>
              </LiquidGlass>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="mt-16 lg:mt-20"
        >
          <p className="mb-6 text-center text-xs font-medium uppercase tracking-widest text-text-muted">
            Trusted Technologies
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {techBadges.map((badge) => (
              <LiquidGlass
                key={badge.name}
                variant="pill"
                className="transition-all duration-300 hover:-translate-y-1"
              >
                <span className="flex items-center gap-2 px-4 py-2 text-sm text-text-secondary">
                  <span className="h-2 w-2 rounded-full bg-accent-primary" />
                  {badge.name}
                </span>
              </LiquidGlass>
            ))}
          </div>
        </motion.div>
      </div>

      <a
        href="#about"
        className="focus-ring absolute bottom-8 left-1/2 -translate-x-1/2 rounded-full text-text-muted transition-colors hover:text-text-secondary"
        aria-label="Scroll to about"
      >
        <ChevronDown className="h-6 w-6 animate-bounce-soft" />
      </a>
    </section>
  );
}
