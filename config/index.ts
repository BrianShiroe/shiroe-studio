import type { Metadata } from "next";

export const siteConfig: Metadata = {
  title: "Shiroe Digital | Digital Agency",
  description:
    "Shiroe Digital is a Dubai-based digital agency crafting website design, brand systems, and marketing-driven digital experiences for ambitious companies.",
  keywords: [
    "reactjs",
    "nextjs",
    "vercel",
    "react",
    "portfolio",
    "3d-portfolio",
    "3d-website",
    "framer-motion",
    "gsap",
    "lenis",
    "smooth-scroll",
    "animation",
    "tailwindcss",
    "tailwindcss-animate",
    "ui/ux",
    "javascript",
    "typescript",
    "full-stack",
    "headless-cms",
    "odoo-erp",
    "seo-optimization",
    "web-performance",
  ] as Array<string>,
  authors: {
    name: "Shiroe Digital",
    url: "https://digital.brianshiroe.com",
  },
  metadataBase: new URL("https://digital.brianshiroe.com"),
  alternates: {
    canonical: "/",
  },
} as const;
