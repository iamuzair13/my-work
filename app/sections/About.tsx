"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { AnimatedCounter } from "@/app/components/ui/AnimatedCounter";
import { LiquidGlass } from "@/app/components/ui/LiquidGlass";
import { Reveal } from "@/app/components/Reveal";
import { SectionLabel } from "@/app/components/SectionLabel";
import { aboutContent, stats } from "@/app/data/portfolio";
import { useReducedMotion } from "@/app/hooks/useReducedMotion";
import { staggerContainer, staggerItem } from "@/app/lib/animations";

const codeSnippet = `const developer = {
  name: "Uzair Shafqat",
  role: "Full-Stack Developer",
  location: "Pakistan",
  skills: ["React", "Next.js", "Node.js", "MongoDB", "TypeScript"],
  openToWork: true,
  coffee: Infinity
};`;

function CodeTerminal() {
  const reducedMotion = useReducedMotion();
  const [displayed, setDisplayed] = useState(reducedMotion ? codeSnippet : "");
  const [done, setDone] = useState(reducedMotion);

  useEffect(() => {
    if (reducedMotion) return;

    let index = 0;
    const interval = setInterval(() => {
      index += 1;
      setDisplayed(codeSnippet.slice(0, index));
      if (index >= codeSnippet.length) {
        clearInterval(interval);
        setDone(true);
      }
    }, 18);

    return () => clearInterval(interval);
  }, [reducedMotion]);

  const highlight = (text: string) => {
    const parts = text.split(
      /(const|developer|name|role|location|skills|openToWork|coffee|true|Infinity|"[^"]*")/g,
    );

    return parts.map((part, i) => {
      if (part === "const" || part === "true" || part === "Infinity")
        return (
          <span key={i} className="text-accent-tertiary">
            {part}
          </span>
        );
      if (
        part === "developer" ||
        part === "name" ||
        part === "role" ||
        part === "location" ||
        part === "skills" ||
        part === "openToWork" ||
        part === "coffee"
      )
        return (
          <span key={i} className="text-accent-secondary">
            {part}
          </span>
        );
      if (part.startsWith('"'))
        return (
          <span key={i} className="text-success">
            {part}
          </span>
        );
      return <span key={i}>{part}</span>;
    });
  };

  return (
    <div className="relative">
      <div className="absolute -inset-4 rounded-3xl bg-accent-primary/10 blur-2xl" />
      <LiquidGlass variant="elevated" className="relative overflow-hidden p-0">
        <div className="flex items-center gap-2 border-b border-border px-4 py-3">
          <span className="h-3 w-3 rounded-full bg-red-500/80" />
          <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
          <span className="h-3 w-3 rounded-full bg-green-500/80" />
          <span className="ml-2 font-code text-xs text-text-muted">developer.ts</span>
        </div>
        <pre
          className={`code-editor overflow-x-auto p-6 font-code text-sm leading-relaxed text-text-secondary ${!done ? "typing-cursor" : ""}`}
        >
          <code>{highlight(displayed)}</code>
        </pre>
      </LiquidGlass>
    </div>
  );
}

export function About() {
  return (
    <section id="about" className="section-padding">
      <div className="container-main">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <Reveal>
              <SectionLabel>About Me</SectionLabel>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-text-primary md:text-5xl">
                Engineering Solutions That Matter
              </h2>
            </Reveal>

            <Reveal delay={0.15}>
              <LiquidGlass variant="default" className="mt-6 p-6 md:p-8">
                <motion.div
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="space-y-4"
                >
                  {aboutContent.paragraphs.map((paragraph) => (
                    <motion.p
                      key={paragraph.slice(0, 30)}
                      variants={staggerItem}
                      className="leading-relaxed text-text-secondary"
                    >
                      {paragraph}
                    </motion.p>
                  ))}
                </motion.div>
              </LiquidGlass>
            </Reveal>

            <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
              {stats.map((stat, i) => (
                <Reveal key={stat.label} delay={0.1 * i}>
                  <LiquidGlass
                    variant="subtle"
                    className="group p-4 text-center transition-all duration-300 hover:-translate-y-1.5 md:p-5 md:text-left"
                  >
                    <p className="text-2xl font-bold transition-transform duration-300 group-hover:scale-105 md:text-3xl">
                      <AnimatedCounter
                        value={stat.value}
                        suffix={stat.suffix}
                        decimals={stat.decimals}
                      />
                    </p>
                    <p className="mt-1 text-xs uppercase tracking-wider text-text-muted">
                      {stat.label}
                    </p>
                  </LiquidGlass>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delay={0.2}>
            <CodeTerminal />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
