import Link from "next/link";
import Image from "next/image";
import { LINKS, NAV_LINKS, SOCIALS } from "@/constants";

export const Footer = () => {
  // Split the navigation array perfectly down the middle into two columns
  const midIndex = Math.ceil(NAV_LINKS.length / 2);
  const leftNavColumn = NAV_LINKS.slice(0, midIndex);
  const rightNavColumn = NAV_LINKS.slice(midIndex);

  return (
    <div className="w-full bg-transparent text-gray-200 relative z-10 px-6 md:px-16 pb-12 pt-16 border-t border-[rgba(112,66,248,0.15)] backdrop-blur-sm">
      {/* Subtle Top Ambient Glow */}
      <div className="absolute top-0 left-1/4 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-[rgb(112,66,248)]/40 to-transparent blur-sm" />

      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
        
        {/* Left Side: Brand Column with logo3.png Integration */}
        <div className="flex flex-col space-y-4 max-w-sm">
          <div className="flex items-center gap-3 select-none">
            <div className="relative w-7 h-7 flex items-center justify-center">
              <Image 
                src="/logo.png" 
                alt="Shiroe Digital Logo"
                width={80}
                height={80}
                priority
                className="object-contain"
              />
            </div>
            <div className="text-[20px] font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400">
              Shiroe Digital
            </div>
          </div>
          <p className="text-[14px] text-gray-400 font-light leading-relaxed tracking-wide">
            Digital agency crafting websites, brand systems, and marketing experiences for growth-driven companies.
          </p>
        </div>

        {/* Right Side: Columns Panel */}
        <div className="flex flex-row gap-16 md:gap-24 flex-wrap">
          {/* Column 1: Social Profiles (External Links) */}
          <div className="flex flex-col items-start justify-start min-w-[120px]">
            <h3 className="font-semibold text-[13px] uppercase tracking-[0.15em] text-[rgb(112,66,248)] mb-6 select-none">
              Community
            </h3>
            <div className="flex flex-col space-y-4">
              {SOCIALS.map(({ icon: Icon, name, link }) => (
                <Link
                  key={name}
                  href={link}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="relative flex flex-row items-center text-[15px] text-gray-400 hover:text-[rgb(112,66,248)] transition-colors duration-200 group py-1"
                >
                  <Icon className="mr-2 h-4 w-4 transition-transform duration-200 group-hover:scale-110" />
                  <span className="font-light tracking-wide">{name}</span>
                  <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[rgb(112,66,248)] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </Link>
              ))}
            </div>
          </div>

          {/* Column 2 & 3: Separated Local Navigation Layout */}
          <div className="flex flex-col items-start justify-start min-w-[280px]">
            <h3 className="font-semibold text-[13px] uppercase tracking-[0.15em] text-[rgb(112,66,248)] mb-6 select-none">
              Navigation
            </h3>

            {/* Inner row splits navigation down into two side-by-side cleanly tracking lists */}
            <div className="grid grid-cols-2 gap-x-12 gap-y-4 w-full">
              {/* Left Navigation Stack */}
              <div className="flex flex-col space-y-4">
                {leftNavColumn.map((link) => (
                  <Link
                    key={link.title}
                    href={link.link}
                    className="relative flex items-center text-[15px] text-gray-400 hover:text-[rgb(112,66,248)] transition-colors duration-200 group py-1 w-max"
                  >
                    <span className="font-light tracking-wide">{link.title}</span>
                    <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[rgb(112,66,248)] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                  </Link>
                ))}
              </div>

              {/* Right Navigation Stack */}
              <div className="flex flex-col space-y-4">
                {rightNavColumn.map((link) => (
                  <Link
                    key={link.title}
                    href={link.link}
                    className="relative flex items-center text-[15px] text-gray-400 hover:text-[rgb(112,66,248)] transition-colors duration-200 group py-1 w-max"
                  >
                    <span className="font-light tracking-wide">{link.title}</span>
                    <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[rgb(112,66,248)] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Row: Copyright */}
      <div className="max-w-[1200px] mx-auto mt-16 pt-8 border-t border-gray-800/40 flex flex-col sm:flex-row justify-between items-center gap-4 text-[13px] text-gray-500 font-light tracking-wide">
        <div className="select-none">&copy; {new Date().getFullYear()} Shiroe Digital. All rights reserved.</div>
        <div className="flex gap-6 text-gray-600 select-none">
          <span>Built with Next.js & Framer Motion</span>
        </div>
      </div>
    </div>
  );
};