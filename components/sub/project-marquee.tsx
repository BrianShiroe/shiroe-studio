"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
  tags?: readonly string[];
}

interface MarqueeProps {
  projects: Project[];
  direction?: "left" | "right";
}

interface CardProps {
  src: string;
  title: string;
  description: string;
  link: string;
  tags?: readonly string[];
}

function ProjectCard({ src, title, description, link, tags = [] }: CardProps) {
  return (
    <Link
      href={link}
      target="_blank"
      rel="noreferrer noopener"
      className="group w-[320px] flex-shrink-0 flex flex-col bg-white/[0.03] border border-white/[0.06] hover:border-[rgb(112,66,248)]/40 rounded-[20px] overflow-hidden transition-colors duration-300"
    >
      <div className="relative w-full aspect-video overflow-hidden border-b border-white/[0.05] bg-black/20">
        <Image
          src={src}
          alt={title}
          fill
          sizes="320px"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10 opacity-60 group-hover:opacity-30 transition-opacity duration-300" />
      </div>

      <div className="p-5 flex flex-col gap-3">
        <div className="flex items-start justify-between gap-3">
          <h2 className="text-[15px] font-semibold text-gray-100 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-[rgb(112,66,248)] transition-all duration-300">
            {title}
          </h2>
          <div className="p-1.5 rounded-full bg-white/5 border border-white/5 text-gray-400 group-hover:text-white group-hover:bg-[rgb(112,66,248)] group-hover:border-[rgb(112,66,248)] transition-all duration-300 shrink-0">
            <ArrowUpRight className="h-3.5 w-3.5" />
          </div>
        </div>

        <p className="text-gray-400 text-[13px] font-light leading-relaxed line-clamp-2">
          {description}
        </p>

        {tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] font-medium tracking-wider uppercase px-2.5 py-0.5 rounded-full bg-white/[0.04] border border-white/[0.06] text-gray-400 group-hover:border-[rgb(112,66,248)]/20 group-hover:text-purple-300 transition-colors duration-300 select-none"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </Link>
  );
}

export function ProjectMarquee({ projects, direction = "left" }: MarqueeProps) {
  const doubled = [...projects, ...projects];

  return (
    <div className="relative w-full overflow-hidden group/marquee">
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#030014] to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#030014] to-transparent z-10 pointer-events-none" />

      <div
        className={`flex gap-5 w-max ${
          direction === "left"
            ? "animate-marquee-left"
            : "animate-marquee-right"
        } group-hover/marquee:[animation-play-state:paused]`}
      >
        {doubled.map((project, i) => (
          <ProjectCard
            key={`${project.title}-${i}`}
            src={project.image}
            title={project.title}
            description={project.description}
            link={project.link}
            tags={project.tags}
          />
        ))}
      </div>
    </div>
  );
}