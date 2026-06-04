import { BriefcaseIcon, DocumentTextIcon, GlobeAltIcon, MapPinIcon, SparklesIcon } from "@heroicons/react/24/outline";

const facts = [
  {
    title: "Location",
    value: "Al Rigga, Dubai, UAE",
    icon: MapPinIcon,
  },
  {
    title: "Nationality",
    value: "Filipino",
    icon: GlobeAltIcon,
  },
  {
    title: "Experience",
    value: "1 year",
    icon: BriefcaseIcon,
  },
  {
    title: "Projects",
    value: "50+ completed",
    icon: DocumentTextIcon,
  },
];

export const About = () => {
  return (
    <section id="about-me" className="flex flex-col items-center justify-center py-20">
      <div className="max-w-[1200px] w-full px-6">
        <div className="flex flex-col gap-4 items-start">
          <span className="text-[14px] font-semibold uppercase tracking-[0.2em] text-[rgb(112,66,248)]">
            About Me
          </span>
          <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            Web design, digital growth, and operations in one package.
          </h1>
          <p className="max-w-[760px] text-gray-300 text-[17px] leading-relaxed">
            I am Brian Haw, a Dubai-based Office Administrator, Social Media Manager,
            Web Designer & Developer, and Graphics Designer. I build high-performing
            SEO websites, manage multi-brand social channels, and design polished digital
            experiences that make operations smoother and marketing more effective.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.3fr_0.9fr] mt-14">
          <div className="space-y-6">
            <div className="rounded-[32px] border border-[rgba(255,255,255,0.08)] p-8 bg-white/5 shadow-[0_20px_80px_rgba(0,0,0,0.18)]">
              <p className="text-gray-400 leading-relaxed text-[16px]">
                Versatile professional with 1 year of experience developing 30+ SEO websites—boosting traffic by 500%—managing 25+ social channels across 5 brands, and completing 50+ projects with a 94% satisfaction rate. I specialize in ERP-driven operations, digital growth strategy, graphic and interface design, and workflow automation.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {facts.map((fact) => {
                const Icon = fact.icon;
                return (
                  <div key={fact.title} className="rounded-3xl border border-[rgba(255,255,255,0.08)] bg-white/5 p-6">
                    <div className="flex items-center gap-3 mb-3 text-[rgb(112,66,248)]">
                      <Icon className="h-5 w-5" />
                      <span className="text-sm uppercase tracking-[0.16em] text-gray-400">
                        {fact.title}
                      </span>
                    </div>
                    <div className="text-xl font-semibold text-white">{fact.value}</div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="rounded-[32px] border border-[rgba(255,255,255,0.08)] bg-white/5 p-8 shadow-[0_20px_80px_rgba(0,0,0,0.18)]">
            <div className="flex items-center gap-3 mb-6">
              <SparklesIcon className="h-6 w-6 text-purple-400" />
              <span className="text-sm uppercase tracking-[0.2em] text-[rgb(112,66,248)]">
                Core Strengths
              </span>
            </div>
            <div className="grid gap-4">
              <div className="rounded-3xl border border-[rgba(255,255,255,0.08)] bg-black/10 p-5">
                <p className="text-white font-semibold">Web & SEO Development</p>
                <p className="text-gray-400 text-sm mt-1">Next.js, responsive landing pages, performance optimization, and search-driven layouts.</p>
              </div>
              <div className="rounded-3xl border border-[rgba(255,255,255,0.08)] bg-black/10 p-5">
                <p className="text-white font-semibold">Social Media & Marketing</p>
                <p className="text-gray-400 text-sm mt-1">Multi-channel content strategy, brand consistency, and audience growth across 25+ profiles.</p>
              </div>
              <div className="rounded-3xl border border-[rgba(255,255,255,0.08)] bg-black/10 p-5">
                <p className="text-white font-semibold">Design & Creative Ops</p>
                <p className="text-gray-400 text-sm mt-1">Figma UI layouts, Canva graphics, CapCut motion assets, and polished editorial design.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
