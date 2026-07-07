import type {
  NavLink,
  ProcessStep,
  Project,
  Service,
  Skill,
  SocialLink,
  Stat,
  TechBadge,
  Testimonial,
} from "@/app/types";

export const siteConfig = {
  name: "Uzair Shafqat",
  title: "Software Engineer & Full-Stack Developer",
  tagline: "Building Scalable Web Applications That Drive Business Growth",
  description:
    "I design and develop SaaS products, enterprise management systems, and AI-powered solutions that help organizations automate workflows and improve operational efficiency.",
  email: "uzair.works3@gmail.com",
  location: "Pakistan",
  availability: "Open for freelance & full-time opportunities",
  resumeUrl: "/resume.pdf",
  profileImage: "/images/image.jpg",
};

export const navLinks: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const socialLinks: SocialLink[] = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/i-uzair-shafqat/",
    icon: "linkedin",
  },
  {
    label: "GitHub",
    href: "https://github.com/iamuzair13",
    icon: "github",
  },
  {
    label: "Upwork",
    href: "https://www.upwork.com/freelancers/~01bcb162f714870824",
    icon: "upwork",
  },
  {
    label: "Email",
    href: "mailto:uzair.works3@gmail.com",
    icon: "email",
  },
];

export const heroBadge = "Software Engineer & Full-Stack Developer";

export const heroHeadlines = [
  "Building Scalable Web Applications",
  "That Drive Business Growth",
];

export const techBadges: TechBadge[] = [
  { name: "React", icon: "react" },
  { name: "Next.js", icon: "nextjs" },
  { name: "TypeScript", icon: "typescript" },
  { name: "Node.js", icon: "nodejs" },
  { name: "Express.js", icon: "express" },
  { name: "MongoDB", icon: "mongodb" },
  { name: "Tailwind CSS", icon: "tailwind" },
  { name: "Redux", icon: "redux" },
  { name: "Python", icon: "python" },
  { name: "OpenCV", icon: "opencv" },
  { name: "Git", icon: "git" },
  { name: "REST API", icon: "api" },
];

export const aboutContent = {
  paragraphs: [
    "I'm Uzair Shafqat, a Software Engineer from Pakistan with a passion for building systems that solve real business problems. With a BS in Information Technology (CGPA: 3.49/4.00), I combine strong academic foundations with hands-on experience in full-stack development.",
    "My work spans enterprise applications — from alumni management portals to research publication systems — and extends into AI-powered solutions using computer vision and face recognition technologies.",
    "Currently, I'm focused on developing SaaS products and business management tools while pursuing opportunities for advanced research in Computer Science through international scholarships.",
  ],
};

export const stats: Stat[] = [
  { value: 3, suffix: "+", label: "Years Experience" },
  { value: 8, suffix: "+", label: "Projects Completed" },
  { value: 10, suffix: "+", label: "Technologies Mastered" },
  { value: 3.49, label: "CGPA", decimals: 2 },
];

export const services: Service[] = [
  {
    title: "SaaS Development",
    description:
      "Custom SaaS applications tailored for startups and businesses. From architecture to deployment, I build scalable multi-tenant solutions.",
    icon: "cloud",
  },
  {
    title: "Admin Dashboards",
    description:
      "Business management dashboards and analytics systems that turn raw data into actionable insights with real-time visualization.",
    icon: "layout-dashboard",
  },
  {
    title: "Full-Stack Web Applications",
    description:
      "End-to-end development with modern frontend and backend architecture. React, Next.js, Node.js, and MongoDB.",
    icon: "code2",
  },
  {
    title: "Internal Business Tools",
    description:
      "Workflow automation and operational management systems that reduce manual work and improve team productivity.",
    icon: "settings",
  },
  {
    title: "MVP Development",
    description:
      "Rapid prototyping and development for startup validation. Get to market fast with clean, scalable code.",
    icon: "rocket",
  },
];

export const projects: Project[] = [
  {
    id: "alumni-portal",
    title: "Alumni Management Portal",
    type: "Enterprise Application",
    description:
      "Complete alumni management platform connecting graduates, students, and university administration with engagement tracking and analytics.",
    features: [
      "Alumni directory & profile management",
      "Events & job opportunities",
      "Admin & analytics dashboards",
      "SAP integration & RBAC",
    ],
    tech: ["Next.js", "Node.js", "Express.js", "MongoDB"],
    gradient: "from-indigo-600 via-violet-700 to-purple-900",
    github: "https://github.com/iamuzair13",
    live: "https://portal-alumni.uol.edu.pk",
  },
  {
    id: "thesis-management",
    title: "Thesis & Research Publication Management System",
    type: "Research Platform",
    description:
      "Centralized platform for managing student theses, research publications, and academic workflows with supervisor review.",
    features: [
      "Thesis submission & publication management",
      "Supervisor assignment & review workflow",
      "Document management & ethical approval",
      "Admin dashboard with search & filtering",
    ],
    tech: ["Next.js", "Node.js", "Express.js", "MongoDB"],
    gradient: "from-violet-600 via-fuchsia-600 to-pink-700",
    github: "https://github.com/iamuzair13",
    live: "https://cai-iresearch.uol.edu.pk",
  },
  {
    id: "face-recognition",
    title: "AI Face Recognition & Announcement System",
    type: "AI / Computer Vision",
    description:
      "Intelligent face recognition system that detects individuals, identifies registered users, and announces their names automatically.",
    features: [
      "Live face detection & user registration",
      "Webcam & external camera support",
      "Database matching & unknown user detection",
      "Voice announcement system with GUI",
    ],
    tech: ["Python", "MediaPipe", "OpenCV", "Pickle"],
    gradient: "from-cyan-500 via-blue-600 to-indigo-800",
    github: "https://github.com/iamuzair13",
  },
];

export const frontendSkills: Skill[] = [
  { name: "React.js + Next.js", level: "Expert", size: "large", brandColor: "#61DAFB" },
  { name: "TypeScript", level: "Advanced", size: "medium", brandColor: "#3178C6" },
  { name: "Tailwind CSS", level: "Expert", size: "medium", brandColor: "#06B6D4" },
  { name: "Redux Toolkit", level: "Advanced", size: "small", brandColor: "#764ABC" },
  { name: "Responsive Design", level: "Expert", size: "small", brandColor: "#6366F1" },
  { name: "HTML/CSS/JS", level: "Expert", size: "small", brandColor: "#F7DF1E" },
];

export const backendSkills: Skill[] = [
  { name: "Node.js + Express.js", level: "Expert", size: "large", brandColor: "#339933" },
  { name: "MongoDB", level: "Advanced", size: "medium", brandColor: "#47A248" },
  { name: "REST APIs + Auth", level: "Advanced", size: "medium", brandColor: "#6366F1" },
  { name: "Git & GitHub", level: "Advanced", size: "small", brandColor: "#F05032" },
];

export const aiToolsSkills: Skill[] = [
  { name: "Python", level: "Advanced", size: "large", brandColor: "#3776AB" },
  { name: "OpenCV + MediaPipe", level: "Intermediate", size: "medium", brandColor: "#06B6D4" },
  { name: "AI / Computer Vision", level: "Intermediate", size: "medium", brandColor: "#8B5CF6" },
  { name: "Git & DevOps", level: "Advanced", size: "small", brandColor: "#F05032" },
];

export function getRelatedProjectCount(skillName: string): number {
  const keywords = skillName
    .toLowerCase()
    .split(/[\s+&/]+/)
    .filter((k) => k.length > 2);

  return projects.filter((project) =>
    project.tech.some((tech) =>
      keywords.some(
        (keyword) =>
          tech.toLowerCase().includes(keyword) ||
          keyword.includes(tech.toLowerCase()),
      ),
    ),
  ).length;
}

export const academicContent = {
  degree: "Bachelor of Science in Information Technology",
  cgpa: "3.49 / 4.00",
  graduation: "2024",
  coursework: [
    "Software Engineering",
    "Database Systems",
    "Web Development",
    "AI Fundamentals",
  ],
  researchInterests: [
    "Artificial Intelligence",
    "Computer Vision",
    "Software Engineering",
    "Human Computer Interaction",
    "Intelligent Information Systems",
  ],
  futureGoal:
    "Pursuing an MS in Computer Science through a fully funded international scholarship to contribute to impactful research and software development.",
};

export const processSteps: ProcessStep[] = [
  {
    number: 1,
    title: "Discovery",
    description:
      "Understanding your business needs, user requirements, and technical constraints through detailed consultation.",
    icon: "search",
  },
  {
    number: 2,
    title: "Design & Architecture",
    description:
      "Creating system architecture, wireframes, and technical specifications that align with your goals.",
    icon: "pen-tool",
  },
  {
    number: 3,
    title: "Development",
    description:
      "Building with clean, maintainable code using modern technologies and best practices.",
    icon: "code",
  },
  {
    number: 4,
    title: "Deploy & Optimize",
    description:
      "Deploying to production with CI/CD, monitoring, and continuous optimization.",
    icon: "rocket",
  },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "Uzair delivered an exceptional alumni portal that transformed how we engage with our graduates. The system is robust, intuitive, and exactly what we needed.",
    author: "Dr. Sarah Ahmed",
    role: "Dean of Alumni Relations, University of Lahore",
  },
  {
    quote:
      "The research management system streamlined our entire thesis workflow. Uzair's attention to detail and technical expertise made the project a success.",
    author: "Prof. James Mitchell",
    role: "Research Director, UOL Research Center",
  },
  {
    quote:
      "Working with Uzair on our SaaS dashboard was a great experience. He understood our business needs and delivered a product that exceeded expectations.",
    author: "Alex Thompson",
    role: "Product Manager, TechVentures",
  },
];
