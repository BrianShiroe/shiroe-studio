import { ProjectMarquee } from "@/components/sub/project-marquee";
import { PROJECTS } from "@/constants";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center py-24 relative z-10 overflow-hidden"
    >
      <div className="max-w-[1200px] w-full px-6 flex flex-col gap-12">
        <div className="flex flex-col gap-3 items-center text-center">
          <span className="text-[14px] font-semibold uppercase tracking-[0.25em] text-[rgb(112,66,248)]">
            Selected Works
          </span>
          <h1 className="text-[40px] md:text-[48px] font-semibold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-[rgb(112,66,248)] leading-tight">
            Polished Digital Experiences
          </h1>
          <p className="max-w-[600px] text-gray-400 text-[15px] md:text-[16px] font-light leading-relaxed tracking-wide">
            A curated showcase of high-performing web platforms, headless
            architectures, and fluid interface designs.
          </p>
        </div>
      </div>

      <div className="w-full mt-10 flex flex-col gap-5">
        <ProjectMarquee projects={PROJECTS} direction="left" />
        <ProjectMarquee projects={PROJECTS} direction="right" />
      </div>
    </section>
  );
};