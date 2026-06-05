import { BriefcaseIcon, DocumentTextIcon, GlobeAltIcon, MapPinIcon, SparklesIcon } from "@heroicons/react/24/outline";

const facts = [
  {
    title: "Location",
    value: "Dubai, UAE",
    icon: MapPinIcon,
  },
  {
    title: "Services",
    value: "Web & Brand",
    icon: GlobeAltIcon,
  },
  {
    title: "Clients",
    value: "20+ brands",
    icon: BriefcaseIcon,
  },
  {
    title: "Projects",
    value: "50+ launches",
    icon: DocumentTextIcon,
  },
];

export const About = () => {
  return (
    <section id="about-me" className="flex flex-col items-center justify-center py-20">
      <div className="max-w-[1200px] w-full px-6">
        <div className="flex flex-col gap-4 items-start">
          <span className="text-[14px] font-semibold uppercase tracking-[0.2em] text-[rgb(112,66,248)]">
            About Us
          </span>
          <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            Creative strategy, digital growth, and brand clarity.
          </h1>
          <p className="max-w-[760px] text-gray-300 text-[17px] leading-relaxed">
            Shiroe Digital is a digital agency helping companies in Dubai and beyond design, build, and grow purposeful digital products. We create websites, marketing campaigns, and branded experiences that help businesses stand out and convert.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.3fr_0.9fr] mt-14">
          <div className="space-y-6">
            <div className="rounded-[32px] border border-[rgba(255,255,255,0.08)] p-8 bg-white/5 shadow-[0_20px_80px_rgba(0,0,0,0.18)]">
              <p className="text-gray-400 leading-relaxed text-[16px]">
                  Shiroe Digital delivers polished websites, marketing assets, and digital systems for growth-focused brands. Our approach blends design, conversion, and technical performance into every project.
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
                <p className="text-white font-semibold">Digital Product Design</p>
                <p className="text-gray-400 text-sm mt-1">Strategic UI/UX, conversion-focused landing pages, and brand-forward interface systems.</p>
              </div>
              <div className="rounded-3xl border border-[rgba(255,255,255,0.08)] bg-black/10 p-5">
                <p className="text-white font-semibold">Brand & Campaign Strategy</p>
                <p className="text-gray-400 text-sm mt-1">Positioning, messaging, and digital storytelling for cohesive campaign experiences.</p>
              </div>
              <div className="rounded-3xl border border-[rgba(255,255,255,0.08)] bg-black/10 p-5">
                <p className="text-white font-semibold">Growth-Focused Development</p>
                <p className="text-gray-400 text-sm mt-1">Modern web builds, fast performance, and scalable tools for long-term digital growth.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
