import { Github, Linkedin, Mail } from "lucide-react";
import { navLinks, siteConfig, socialLinks } from "@/app/data/portfolio";

export function Footer() {
  return (
    <footer className="border-t border-border bg-bg-secondary/50">
      <div className="container-main py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <p className="text-lg font-semibold text-text-primary">
              {siteConfig.name}
            </p>
            <p className="mt-1 text-sm text-text-muted">{siteConfig.title}</p>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="focus-ring text-sm text-text-muted transition-colors hover:text-accent-primary"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center justify-center gap-4 md:justify-end">
            {socialLinks.slice(0, 3).map((link) => {
              const Icon =
                link.icon === "linkedin"
                  ? Linkedin
                  : link.icon === "github"
                    ? Github
                    : Mail;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-muted transition-colors hover:text-accent-primary"
                  aria-label={link.label}
                >
                  <Icon className="h-5 w-5" />
                </a>
              );
            })}
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-text-muted transition-colors hover:text-accent-primary"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-2 border-t border-border pt-8 text-center text-xs text-text-muted md:flex-row md:text-left">
          <p>&copy; 2025 {siteConfig.name}. All rights reserved.</p>
          <p>Built with Next.js, Tailwind CSS & Framer Motion</p>
        </div>
      </div>
    </footer>
  );
}
