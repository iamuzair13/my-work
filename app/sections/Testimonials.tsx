"use client";

import { useEffect, useRef, useState } from "react";
import { Reveal } from "@/app/components/Reveal";
import { SectionLabel } from "@/app/components/SectionLabel";
import { TestimonialCard } from "@/app/components/TestimonialCard";
import { testimonials } from "@/app/data/portfolio";
import { useReducedMotion } from "@/app/hooks/useReducedMotion";

export function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion || paused || !scrollRef.current) return;

    const container = scrollRef.current;
    let animationId: number;
    let scrollPos = 0;

    const scroll = () => {
      scrollPos += 0.5;
      if (scrollPos >= container.scrollWidth / 2) {
        scrollPos = 0;
      }
      container.scrollLeft = scrollPos;
      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationId);
  }, [reducedMotion, paused]);

  return (
    <section id="testimonials" className="section-padding">
      <div className="container-main">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <SectionLabel>Testimonials</SectionLabel>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-text-primary md:text-5xl">
              What People Say
            </h2>
          </Reveal>
        </div>

        <div className="relative mt-16 max-w-full overflow-hidden">
          <div
            className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-bg-primary to-transparent"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-bg-primary to-transparent"
            aria-hidden
          />

          <div
            ref={scrollRef}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <TestimonialCard
                key={`${testimonial.author}-${index}`}
                testimonial={testimonial}
                index={index % testimonials.length}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
