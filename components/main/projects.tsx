import { ProjectCard } from "@/components/sub/project-card";
import { PROJECTS } from "@/constants";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center py-24 relative z-10"
    >
      <div className="max-w-[1200px] w-full px-6 flex flex-col gap-12">
        
        {/* Modern Editorial Header Layout Layout */}
        <div className="flex flex-col gap-3 items-start text-left">
          <span className="text-[14px] font-semibold uppercase tracking-[0.25em] text-[rgb(112,66,248)]">
            Selected Works
          </span>
          <h1 className="text-[40px] md:text-[48px] font-semibold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-[rgb(112,66,248)] leading-tight">
            Polished Digital Experiences
          </h1>
          <p className="max-w-[600px] text-gray-400 text-[15px] md:text-[16px] font-light leading-relaxed tracking-wide">
            A curated showcase of high-performing web platforms, headless architectures, and fluid interface designs focusing on conversions and technical SEO efficiency.
          </p>
        </div>

        {/* 2-Column Responsive Structural Display Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16 mt-4">
          {PROJECTS.map((project, index) => (
            <div 
              key={project.title}
              className={`w-full flex flex-col ${
                index % 2 === 1 ? "md:translate-y-8" : ""
              } transition-transform duration-500 ease-out`}
            >
              <ProjectCard
                src={project.image}
                title={project.title}
                description={project.description}
                link={project.link}
                tags={project.tags}
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};