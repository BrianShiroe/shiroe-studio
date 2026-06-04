import { EnvelopeIcon, PhoneIcon, MapPinIcon, SparklesIcon, GlobeAltIcon } from "@heroicons/react/24/outline";

const contactItems = [
  {
    title: "Email",
    value: "brianshiroe@gmail.com",
    href: "mailto:brianshiroe@gmail.com",
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
    value: "brianshiroe.com",
    href: "https://brianshiroe.com",
    icon: GlobeAltIcon,
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
    <section id="contact" className="flex flex-col items-center justify-center py-20">
      <div className="max-w-[1200px] w-full px-6">
        <div className="flex flex-col gap-4 items-start">
          <span className="text-[14px] font-semibold uppercase tracking-[0.2em] text-[rgb(112,66,248)]">
            Contact Me
          </span>
          <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            Let's turn your next idea into a launch-ready experience.
          </h1>
          <p className="max-w-[760px] text-gray-300 text-[17px] leading-relaxed">
            I&apos;m available for freelance projects, long-term collaborations, and digital operations work in Dubai or remote. Send a message to discuss website design, social media strategy, or ERP-supported growth systems.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[32px] border border-[rgba(255,255,255,0.08)] bg-white/5 p-8 shadow-[0_20px_80px_rgba(0,0,0,0.18)]">
            <div className="flex items-center gap-3 mb-6">
              <SparklesIcon className="h-6 w-6 text-purple-400" />
              <span className="text-sm uppercase tracking-[0.2em] text-[rgb(112,66,248)]">
                Get in touch
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
                    className="group rounded-3xl border border-[rgba(255,255,255,0.08)] bg-black/10 p-5 transition duration-200 hover:border-[rgb(112,66,248)] hover:bg-white/10"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <Icon className="h-5 w-5 text-[rgb(112,66,248)]" />
                        <div>
                          <div className="text-sm uppercase tracking-[0.14em] text-gray-400">
                            {item.title}
                          </div>
                          <div className="text-white font-semibold truncate max-w-[220px]">{item.value}</div>
                        </div>
                      </div>
                      <span className="text-[13px] text-gray-500 group-hover:text-white">Open</span>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

          <div className="rounded-[32px] border border-[rgba(255,255,255,0.08)] bg-white/5 p-8 shadow-[0_20px_80px_rgba(0,0,0,0.18)]">
            <p className="text-gray-300 text-[16px] leading-relaxed mb-6">
              Prefer to send a quick message? Use the form below and I&apos;ll reply to your email directly.
            </p>
            <form action="mailto:brianshiroe@gmail.com" method="POST" encType="text/plain" className="grid gap-4">
              <label className="flex flex-col gap-2 text-gray-300 text-sm">
                Name
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  required
                  className="rounded-3xl border border-[rgba(255,255,255,0.12)] bg-black/15 px-4 py-3 text-white placeholder:text-gray-500 outline-none focus:border-[rgb(112,66,248)] focus:ring-1 focus:ring-[rgb(112,66,248)]"
                />
              </label>
              <label className="flex flex-col gap-2 text-gray-300 text-sm">
                Email
                <input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  required
                  className="rounded-3xl border border-[rgba(255,255,255,0.12)] bg-black/15 px-4 py-3 text-white placeholder:text-gray-500 outline-none focus:border-[rgb(112,66,248)] focus:ring-1 focus:ring-[rgb(112,66,248)]"
                />
              </label>
              <label className="flex flex-col gap-2 text-gray-300 text-sm">
                Message
                <textarea
                  name="message"
                  rows={5}
                  placeholder="Tell me about your project"
                  required
                  className="rounded-3xl border border-[rgba(255,255,255,0.12)] bg-black/15 px-4 py-3 text-white placeholder:text-gray-500 outline-none focus:border-[rgb(112,66,248)] focus:ring-1 focus:ring-[rgb(112,66,248)]"
                />
              </label>
              <button
                type="submit"
                className="button-primary rounded-3xl py-3 text-white font-semibold transition hover:shadow-lg"
              >
                Email me now
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
