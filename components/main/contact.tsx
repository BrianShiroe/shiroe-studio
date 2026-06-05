import { EnvelopeIcon, PhoneIcon, MapPinIcon, SparklesIcon, CodeBracketIcon } from "@heroicons/react/24/outline";

const contactItems = [
  {
    title: "Email",
    value: "hello@shiroestudio.com",
    href: "mailto:hello@shiroestudio.com",
    icon: EnvelopeIcon,
  },
  {
    title: "Phone",
    value: "+971 50 359 2133",
    href: "tel:+971503592133",
    icon: PhoneIcon,
  },
  {
    title: "Website",
    value: "shiroestudio.com",
    href: "https://shiroestudio.com",
    icon: CodeBracketIcon,
  },
  {
    title: "Location",
    value: "Al Rigga, Dubai, UAE",
    href: "https://maps.google.com/?q=Al+Rigga+Dubai+UAE",
    icon: MapPinIcon,
  },
];

export const Contact = () => {
  return (
    <section id="contact" className="flex flex-col items-center justify-center py-20 relative z-10">
      <div className="max-w-[1200px] w-full px-6">
        
        <div className="grid gap-12 grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] items-center">
          
          {/* Left Side: Editorial Content */}
          <div className="flex flex-col gap-5 items-start">
            <span className="text-[13px] font-semibold uppercase tracking-[0.2em] text-[rgb(112,66,248)]">
              Contact
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-[48px] font-semibold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-[rgb(112,66,248)]">
              Let's turn your next idea into a launch-ready experience.
            </h1>
            <p className="max-w-full md:max-w-[620px] text-gray-400 text-base md:text-[17px] leading-relaxed font-light tracking-wide">
              ShiroeStudio is available for new agency partnerships, digital campaigns, and website launches in Dubai or remote. Select any channel to discuss brand strategy, website design, or marketing systems.
            </p>
          </div>

          {/* Right Side: Clean Contact Information Cards Container */}
          <div className="rounded-[32px] border border-[rgba(255,255,255,0.08)] bg-white/5 p-6 md:p-8 shadow-[0_20px_80px_rgba(0,0,0,0.18)] backdrop-blur-sm relative overflow-hidden w-full">
            {/* Ambient subtle decorative card glow */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-[rgb(112,66,248)]/10 rounded-full blur-3xl pointer-events-none" />
            
            <div className="flex items-center gap-3 mb-6">
              <SparklesIcon className="h-5 w-5 text-purple-400" />
              <span className="text-sm uppercase tracking-[0.2em] font-medium text-gray-300">
                Direct Channels
              </span>
            </div>

            <div className="grid gap-4">
              {contactItems.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.title}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="group rounded-2xl border border-[rgba(255,255,255,0.06)] bg-black/20 p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 transition-all duration-300 hover:border-[rgb(112,66,248)]/60 hover:bg-white/10"
                  >
                    <div className="flex items-center gap-4 min-w-0 w-full sm:w-auto">
                      <div className="p-3 rounded-xl bg-white/5 border border-white/5 group-hover:border-[rgb(112,66,248)]/30 group-hover:bg-[rgb(112,66,248)]/10 transition-colors duration-300">
                        <Icon className="h-5 w-5 text-[rgb(112,66,248)] transition-transform duration-300 group-hover:scale-110" />
                      </div>
                      <div className="min-w-0 w-full">
                        <div className="text-[12px] uppercase tracking-[0.15em] text-gray-500 font-medium">
                          {item.title}
                        </div>
                        <div className="text-gray-200 text-[15px] md:text-[16px] font-light tracking-wide truncate mt-0.5 group-hover:text-white transition-colors duration-200">
                          {item.value}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-1.5 shrink-0 px-3 py-1.5 rounded-xl border border-transparent bg-white/5 text-[12px] font-medium text-gray-400 transition-all duration-300 group-hover:bg-[rgb(112,66,248)] group-hover:text-white group-hover:border-[rgb(112,66,248)]">
                      <span>Open</span>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};