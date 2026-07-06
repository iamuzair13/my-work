"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { GlassButton } from "@/app/components/ui/GlassButton";
import { LiquidGlass } from "@/app/components/ui/LiquidGlass";
import { navLinks, siteConfig } from "@/app/data/portfolio";
import { cn } from "@/app/lib/utils";

const sectionIds = navLinks
  .map((link) => link.href.replace("#", ""))
  .filter(Boolean);

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrolled(window.scrollY > 50);

          const scrollPos = window.scrollY + 120;
          let current = "home";

          for (const id of sectionIds) {
            const el = document.getElementById(id);
            if (el && el.offsetTop <= scrollPos) {
              current = id;
            }
          }

          setActiveSection(current);
          ticking = false;
        });
        ticking = true;
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header className="pointer-events-none fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
        <LiquidGlass
          variant="elevated"
          className={cn(
            "pointer-events-auto w-full max-w-fit transition-all duration-300",
            scrolled ? "shadow-[0_8px_32px_rgba(0,0,0,0.3)]" : "",
          )}
          style={{ borderRadius: "9999px" }}
        >
          <div
            className={cn(
              "flex items-center gap-6 transition-all duration-300",
              scrolled ? "px-4 py-2" : "px-6 py-3",
            )}
          >
            <Link
              href="#home"
              className="focus-ring rounded-full text-lg font-semibold tracking-tight text-text-primary"
            >
              {siteConfig.name.split(" ")[0]}
              <span className="text-accent-primary">.</span>
            </Link>

            <nav className="hidden items-center gap-1 lg:flex">
              {navLinks.map((link) => {
                const id = link.href.replace("#", "");
                const isActive = activeSection === id;

                return (
                  <a
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "focus-ring relative rounded-full px-4 py-2 text-sm transition-colors",
                      isActive
                        ? "text-text-primary"
                        : "text-text-secondary hover:text-text-primary",
                    )}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-accent-primary shadow-[0_0_8px_rgba(99,102,241,0.8)]" />
                    )}
                  </a>
                );
              })}
            </nav>

            <div className="hidden lg:block">
              <GlassButton href="#contact" variant="primary" className="!px-5 !py-2 text-sm">
                Get in Touch
              </GlassButton>
            </div>

            <button
              type="button"
              className="focus-ring rounded-full p-2 text-text-primary lg:hidden"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </LiquidGlass>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-bg-primary/80 backdrop-blur-xl lg:hidden"
          >
            <nav className="flex w-full max-w-sm flex-col gap-4 px-6">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ delay: i * 0.08 }}
                >
                  <LiquidGlass variant="default" className="w-full">
                    <a
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="focus-ring block px-6 py-4 text-xl font-medium text-text-primary"
                    >
                      {link.label}
                    </a>
                  </LiquidGlass>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.08 }}
                className="mt-4 text-center"
              >
                <GlassButton
                  href="#contact"
                  onClick={() => setMobileOpen(false)}
                  variant="primary"
                >
                  Get in Touch
                </GlassButton>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
