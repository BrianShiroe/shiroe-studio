import { RxGithubLogo, RxLinkedinLogo } from "react-icons/rx";
import { FaFacebook } from "react-icons/fa";

export const LINKS = {
  sourceCode: "https://shiroedigital.com",
};

export const NAV_LINKS = [
  {
    title: "Home",
    link: "#home",
  },
  {
    title: "About Us",
    link: "#about-me",
  },
  {
    title: "Capabilities",
    link: "#skills",
  },
  {
    title: "Work",
    link: "#projects",
  },
  {
    title: "Contact",
    link: "#contact",
  },
] as const;

export const SOCIALS = [
  {
    name: "GitHub",
    icon: RxGithubLogo,
    link: "https://github.com/shiroedigital",
  },
  {
    name: "LinkedIn",
    icon: RxLinkedinLogo,
    link: "https://www.linkedin.com/company/shiroedigital",
  },
  {
    name: "Facebook",
    icon: FaFacebook,
    link: "https://facebook.com/shiroedigital",
  },
] as const;

export const FOOTER_DATA = [
  {
    title: "Community",
    data: [
      {
        name: "GitHub",
        icon: RxGithubLogo,
        link: "https://github.com/shiroedigital",
      },
      {
        name: "LinkedIn",
        icon: RxLinkedinLogo,
        link: "https://www.linkedin.com/company/shiroedigital",
      },
      {
        name: "Facebook",
        icon: FaFacebook,
        link: "https://facebook.com/shiroedigital",
      },
    ],
  },
] as const;

export const SKILL_DATA = [
  {
    skill_name: "HTML",
    image: "html.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "CSS",
    image: "css.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "JavaScript",
    image: "js.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "Tailwind CSS",
    image: "tailwind.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React",
    image: "react.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Redux",
    image: "redux.png",
    width: 80,
    height: 80,
  },
  // {
  //   skill_name: "React Query",
  //   image: "reactquery.png",
  //   width: 80,
  //   height: 80,
  // },
  {
    skill_name: "TypeScript",
    image: "ts.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Next.js 14",
    image: "next.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Framer Motion",
    image: "framer.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Stripe",
    image: "stripe.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Node.js",
    image: "node.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "MongoDB",
    image: "mongodb.png",
    width: 40,
    height: 40,
  },
] as const;

export const FRONTEND_SKILL = [
  {
    skill_name: "HTML",
    image: "html.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "CSS",
    image: "css.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "JavaScript",
    image: "js.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "Tailwind CSS",
    image: "tailwind.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Wordpress",
    image: "wordpress.png",
    width: 110,
    height: 110,
  },
  {
    skill_name: "React",
    image: "react.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Redux",
    image: "redux.png",
    width: 80,
    height: 80,
  },
  // {
  //   skill_name: "React Query",
  //   image: "reactquery.png",
  //   width: 80,
  //   height: 80,
  // },
  {
    skill_name: "TypeScript",
    image: "ts.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Next.js 14",
    image: "next.png",
    width: 80,
    height: 80,
  },
] as const;

export const BACKEND_SKILL = [
  {
    skill_name: "Node.js",
    image: "node.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Express.js",
    image: "express.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "MongoDB",
    image: "mongodb.png",
    width: 40,
    height: 40,
  },
  {
    skill_name: "Firebase",
    image: "firebase.png",
    width: 55,
    height: 55,
  },
  {
    skill_name: "PostgreSQL",
    image: "postgresql.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "MySQL",
    image: "mysql.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Prisma",
    image: "prisma.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Graphql",
    image: "graphql.png",
    width: 80,
    height: 80,
  },
] as const;

export const FULLSTACK_SKILL = [
  {
    skill_name: "Next.js 14",
    image: "next.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Cloudflare",
    image: "cloudflare.png",
    width: 130,
    height: 130,
  },
  {
    skill_name: "Docker",
    image: "docker.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Figma",
    image: "figma.png",
    width: 50,
    height: 50,
  },
] as const;

export const OTHER_SKILL = [
  {
    skill_name: "Supabase",
    image: "supabase.png",
    width: 70,
    height: 70,
  },
] as const;

export const PROJECTS = [
  {
    title: "AuraX Luxury Footwear",
    description:
      "A high-end digital showroom for luxury footwear, featuring immersive scroll-based animations, architectural layouts, and a fluid user experience designed for premium retail storytelling.",
    image: "/projects/aurax.png",
    link: "https://aurax-luxury-footwear-landing-page.vercel.app/",
    tags: ["React", "Framer Motion", "Tailwind CSS"],
  },
  {
    title: "BlackScale Real Estate",
    description:
      "A premium frontend interface design for a modern real estate platform, combining editorial layouts with responsive, fluid structural grid layouts built for luxury properties.",
    image: "/projects/blackscale.png",
    link: "https://greyscale-real-estate.vercel.app/",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Noor Label",
    description:
      "A premium fashion portfolio showcasing architectural silhouettes and modest luxury. Focuses on high-end visual storytelling, scroll-based interactions, and a minimalist aesthetic rooted in Dubai's design culture.",
    image: "/projects/noor-label.png",
    link: "https://noor-label.vercel.app/",
    tags: ["Next.js", "Shopify", "Headless Commerce"],
  },
  {
    title: "GameTree Ecosystem",
    description:
      "A comprehensive e-commerce ecosystem featuring dedicated client workflows, secure Stripe processing pipelines, dynamic shipping configurations, and a full dashboard suite for seamless product management.",
    image: "/projects/gametree.png",
    link: "https://gametree.vercel.app/",
    tags: ["Next.js", "Supabase", "Stripe API"],
  },
  {
    title: "Samurai Agency Web",
    description:
      "An immersive agency landing page leveraging fluid Lenis smooth scrolling, micro-interactions, and cinematic Framer Motion timelines to deliver a highly interactive digital experience.",
    image: "/projects/saurai-web.png", // Maintained your file naming convention
    link: "https://shiroedigital.com",
    tags: ["Next.js", "Framer Motion", "Lenis Scroll"],
  },
  {
    title: "Zhel Gold Showroom",
    description:
      "A sleek digital retail experience and custom landing page concept crafted for gold trading and high-value commodity display, utilizing polished, content-focused layouts.",
    image: "/projects/zhel-gold.png",
    link: "https://zhel-gold-jewelry.vercel.app/",
    tags: ["Next.js", "Tailwind CSS", "UI Design"],
  },
  {
    title: "Creative Portfolio Showcase",
    description:
      "An editorial-grade interactive canvas featuring immersive asset presentation, fluid layouts, and smooth route transitions tailored for high-end graphic and interface designs.",
    image: "/projects/creative-portfolio.png",
    link: "https://award-winning-website-9d6.pages.dev/",
    tags: ["Next.js", "Framer Motion", "Creative Ops"],
  },
  {
    title: "Minimalist Style Portfolio",
    description:
      "A beautifully understated, content-first portfolio designed for a creative professional, stripping away visual noise to focus strictly on typography, space, and core projects.",
    image: "/projects/simple-portfolio.png",
    link: "https://maria-zorene.vercel.app/",
    tags: ["Next.js", "Minimal Design", "Tailwind CSS"],
  },
] as const;
