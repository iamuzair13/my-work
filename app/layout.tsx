import type { Metadata } from "next";
import { Geist, Geist_Mono, JetBrains_Mono } from "next/font/google";
import { CustomCursor } from "@/app/components/CustomCursor";
import { PageLoader } from "@/app/components/PageLoader";
import { ScrollProgress } from "@/app/components/ScrollProgress";
import { Providers } from "@/app/providers";
import { siteConfig, socialLinks } from "@/app/data/portfolio";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://uzairshafqat.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Uzair Shafqat | Software Engineer & Full-Stack Developer",
  description:
    "I build scalable web applications, SaaS products, and AI-powered solutions. Specializing in React, Next.js, Node.js, and enterprise systems.",
  keywords: [
    "Software Engineer",
    "Full-Stack Developer",
    "React",
    "Next.js",
    "Node.js",
    "SaaS",
    "Web Development",
    "Pakistan",
  ],
  authors: [{ name: "Uzair Shafqat" }],
  openGraph: {
    title: "Uzair Shafqat | Software Engineer",
    description: "Building scalable web applications and SaaS products.",
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Uzair Shafqat Portfolio",
    images: [
      {
        url: "/images/image.jpg",
        width: 480,
        height: 600,
        alt: "Uzair Shafqat - Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Uzair Shafqat | Software Engineer",
    description:
      "Full-Stack Developer specializing in SaaS and business applications.",
    images: ["/images/image.jpg"],
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteConfig.name,
  jobTitle: siteConfig.title,
  description: siteConfig.description,
  address: {
    "@type": "PostalAddress",
    addressCountry: "Pakistan",
  },
  sameAs: socialLinks
    .filter((link) => link.icon !== "email")
    .map((link) => link.href),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${jetbrainsMono.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="min-h-screen bg-bg-primary text-text-primary antialiased transition-colors duration-300 ease-in-out">
        <svg
          style={{ position: "absolute", width: 0, height: 0 }}
          aria-hidden
        >
          <defs>
            <filter
              id="liquid-glass"
              x="-20%"
              y="-20%"
              width="140%"
              height="140%"
            >
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.015"
                numOctaves={3}
                result="noise"
              />
              <feDisplacementMap
                in="SourceGraphic"
                in2="noise"
                scale={8}
                xChannelSelector="R"
                yChannelSelector="G"
              />
              <feGaussianBlur stdDeviation="0.5" result="blur" />
              <feSpecularLighting
                in="blur"
                surfaceScale={2}
                specularConstant={0.8}
                specularExponent={15}
                lightingColor="white"
                result="specular"
              >
                <fePointLight x="-500" y="-500" z="600" />
              </feSpecularLighting>
              <feComposite
                in="specular"
                in2="SourceAlpha"
                operator="in"
                result="specularComposite"
              />
              <feComposite
                in="SourceGraphic"
                in2="specularComposite"
                operator="arithmetic"
                k1={0}
                k2={1}
                k3={0.4}
                k4={0}
              />
            </filter>
          </defs>
        </svg>
        <Providers>
          <a href="#main-content" className="sr-only sr-only-focusable">
            Skip to content
          </a>
          <PageLoader />
          <ScrollProgress />
          <CustomCursor />
          <main id="main-content" className="relative z-[1]">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
