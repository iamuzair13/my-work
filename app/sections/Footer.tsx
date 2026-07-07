import { ExternalLink, Github, Linkedin, Mail } from "lucide-react";
import { navLinks, siteConfig, socialLinks } from "@/app/data/portfolio";

function SocialIcon({ icon }: { icon: string }) {
  switch (icon) {
    case "linkedin":
      return <Linkedin className="h-5 w-5" />;
    case "github":
      return <Github className="h-5 w-5" />;
    case "email":
      return <Mail className="h-5 w-5" />;
    default:
      return <ExternalLink className="h-5 w-5" />;
  }
}

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
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.icon === "email" ? undefined : "_blank"}
                rel={link.icon === "email" ? undefined : "noopener noreferrer"}
                className="text-text-muted transition-colors hover:text-accent-primary"
                aria-label={link.label}
              >
                <SocialIcon icon={link.icon} />
              </a>
            ))}
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
