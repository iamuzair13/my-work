"use client";

import { Github, Linkedin, Mail, MapPin, Download } from "lucide-react";
import { ContactForm } from "@/app/components/ContactForm";
import { Reveal } from "@/app/components/Reveal";
import { SectionLabel } from "@/app/components/SectionLabel";
import { LiquidGlass } from "@/app/components/ui/LiquidGlass";
import { siteConfig, socialLinks } from "@/app/data/portfolio";

const iconMap = {
  linkedin: Linkedin,
  github: Github,
  upwork: Mail,
  email: Mail,
  resume: Download,
};

export function Contact() {
  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/5 via-transparent to-accent-secondary/5" />

      <div className="container-main relative">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <SectionLabel>Get in Touch</SectionLabel>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-text-primary md:text-5xl">
              Let&apos;s Build Something Together
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-4 text-text-secondary">
              Whether you need a SaaS product, an enterprise system, or want to
              discuss research opportunities — I&apos;m always open to meaningful
              conversations.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-2">
          <div>
            <Reveal>
              <LiquidGlass variant="default" className="space-y-6 p-6">
                <div className="flex items-center gap-3 text-text-secondary">
                  <Mail className="h-5 w-5 text-accent-primary" />
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="focus-ring rounded transition-colors hover:text-text-primary"
                  >
                    {siteConfig.email}
                  </a>
                </div>
                <div className="flex items-center gap-3 text-text-secondary">
                  <MapPin className="h-5 w-5 text-accent-primary" />
                  <span>{siteConfig.location}</span>
                </div>
                <p className="text-sm text-text-muted">{siteConfig.availability}</p>
              </LiquidGlass>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-8 flex flex-wrap gap-3">
                {socialLinks.map((link) => {
                  const Icon = iconMap[link.icon] ?? Mail;
                  return (
                    <LiquidGlass
                      key={link.label}
                      variant="subtle"
                      className="transition-transform duration-300 hover:scale-110"
                    >
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="focus-ring flex h-11 w-11 items-center justify-center text-text-secondary transition-colors hover:text-accent-primary"
                        aria-label={link.label}
                      >
                        <Icon className="h-5 w-5" />
                      </a>
                    </LiquidGlass>
                  );
                })}
                <LiquidGlass
                  variant="subtle"
                  className="transition-transform duration-300 hover:scale-110"
                >
                  <a
                    href={siteConfig.resumeUrl}
                    download
                    className="focus-ring flex h-11 w-11 items-center justify-center text-text-secondary transition-colors hover:text-accent-primary"
                    aria-label="Download Resume"
                  >
                    <Download className="h-5 w-5" />
                  </a>
                </LiquidGlass>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
