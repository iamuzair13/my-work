export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: "linkedin" | "github" | "upwork" | "email" | "resume";
}

export interface Stat {
  value: number;
  suffix?: string;
  label: string;
  decimals?: number;
}

export interface Service {
  title: string;
  description: string;
  icon: string;
}

export interface Project {
  id: string;
  title: string;
  type: string;
  description: string;
  features: string[];
  tech: string[];
  gradient: string;
  image?: string;
  github?: string;
  live?: string;
}

export interface Skill {
  name: string;
  level: "Expert" | "Advanced" | "Intermediate";
  icon?: string;
  size: "large" | "medium" | "small";
  brandColor?: string;
}

export interface ProcessStep {
  number: number;
  title: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

export interface TechBadge {
  name: string;
  icon: string;
}

export type ContactSubject =
  | "Freelance Project"
  | "Job Opportunity"
  | "Research Collaboration"
  | "Other";
