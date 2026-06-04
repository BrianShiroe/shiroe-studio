"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface Props {
  src: string;
  title: string;
  description: string;
  link: string;
  tags?: readonly string[];
}

export const ProjectCard = ({ src, title, description, link, tags = [] }: Props) => {
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noreferrer noopener"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="group w-full flex flex-col bg-gradient-to-b from-white/[0.03] to-white/[0.01] border border-white/[0.05] hover:border-[rgb(112,66,248)]/40 rounded-[24px] overflow-hidden backdrop-blur-md transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.2)]"
    >
      {/* PERFECT 16:9 RATIO WRAPPER FOR 1920x1080 IMAGES */}
      <div className="relative w-full aspect-video overflow-hidden border-b border-white/[0.05] bg-black/20">
        <Image
          src={src}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          priority={false}
          className="object-cover transition-transform duration-700 ease-[0.16, 1, 0.3, 1] group-hover:scale-102"
        />
        {/* Subtle Gradient Shadow Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10 opacity-60 group-hover:opacity-30 transition-opacity duration-300" />
      </div>

      {/* Content & Dynamic Alignment Frame Layout */}
      <div className="p-6 md:p-8 flex flex-col flex-grow justify-between gap-6">
        <div className="flex flex-col gap-3">
          
          {/* Card Heading with Micro-Interactions */}
          <div className="flex items-start justify-between gap-4">
            <h2 className="text-[20px] font-semibold text-gray-100 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-[rgb(112,66,248)] transition-all duration-300 tracking-wide">
              {title}
            </h2>
            <div className="p-2 rounded-full bg-white/5 border border-white/5 text-gray-400 group-hover:text-white group-hover:bg-[rgb(112,66,248)] group-hover:border-[rgb(112,66,248)] transition-all duration-300 shrink-0">
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
          </div>

          {/* Description Block with Clean Visual Hierarchy */}
          <p className="text-gray-400 text-[14px] font-light leading-relaxed tracking-wide">
            {description}
          </p>
        </div>

        {/* Modular Tech Badging Layout Grid */}
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-[11px] font-medium tracking-wider uppercase px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.06] text-gray-400 group-hover:border-[rgb(112,66,248)]/20 group-hover:text-purple-300 transition-colors duration-300 select-none"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

      </div>
    </motion.a>
  );
};