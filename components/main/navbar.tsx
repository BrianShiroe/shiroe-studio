"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";

import { LINKS, NAV_LINKS, SOCIALS } from "@/constants";

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCompact, setIsCompact] = useState(false);

  // Track viewport changes to completely strip transition parameters on mobile/tablet layout sizes
  useEffect(() => {
    const handleResize = () => {
      // Treat anything below 1024px (tablets and mobiles) as "compact"
      setIsCompact(window.innerWidth < 1024);
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
      }
    };

    handleResize(); // Run initial calculation on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Hook into the page's vertical scroll position
  const { scrollY } = useScroll();

  // Define dynamic style transformations based on scroll pixel threshold (0px to 100px)
  const animatedWidth = useTransform(scrollY, [0, 100], ["100%", "90%"]);
  const animatedTop = useTransform(scrollY, [0, 100], ["0px", "12px"]);
  const animatedBorderRadius = useTransform(scrollY, [0, 100], ["0px", "9999px"]);
  const animatedBackgroundColor = useTransform(scrollY, [0, 100], ["rgba(3, 0, 20, 0.15)", "rgba(3, 0, 20, 0.75)"]);
  const animatedBorderStyle = useTransform(
    scrollY,
    [0, 100],
    ["1px solid rgba(112, 66, 248, 0)", "1px solid rgba(112, 66, 248, 0.25)"],
  );

  return (
    <motion.div
      style={{
        width: isCompact ? "100%" : animatedWidth,
        top: isCompact ? "0px" : animatedTop,
        borderRadius: isCompact ? "0px" : animatedBorderRadius,
        backgroundColor: isCompact ? "rgba(3, 0, 20, 0.85)" : animatedBackgroundColor,

        borderLeft: "none",
        borderRight: "none",
        borderTop: "none",
        borderBottom: isCompact ? "1px solid rgba(112, 66, 248, 0.15)" : animatedBorderStyle,

        left: "50%",
        translateX: "-50%",
        // FIX: Remove height: auto logic here so it does not override and crush AnimatePresence lifecycle transitions
      }}
      className="fixed h-auto shadow-lg shadow-[#2A0E61]/50 backdrop-blur-md z-50 px-6 md:px-10 flex flex-col justify-start overflow-hidden"
    >
      {/* Navbar Static Core Container */}
      <div className="w-full h-[65px] min-h-[65px] flex items-center justify-between m-auto px-[10px] shrink-0">
        {/* Logo + Name */}
        <Link href="#home" className="flex items-center" onClick={() => setIsMobileMenuOpen(false)}>
          <Image
            src="/logo.png"
            alt="Shiroe Digital Logo"
            width={40}
            height={40}
            draggable={false}
            className="cursor-pointer object-contain"
          />
          <div className="hidden md:flex items-center font-bold ml-[10px] text-gray-300 tracking-wide select-none">
            Shiroe Digital
          </div>
        </Link>

        {/* Desktop Navbar */}
        <div className="hidden lg:flex h-full flex-row items-center justify-between lg:mr-20">
          <div className="flex items-center justify-center gap-8 text-gray-200 text-[15px] font-medium tracking-wide">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.title}
                href={link.link}
                className="relative cursor-pointer hover:text-[rgb(112,66,248)] transition-colors duration-200 whitespace-nowrap group py-2"
              >
                {link.title}
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[rgb(112,66,248)] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </Link>
            ))}
          </div>
        </div>

        {/* Social Icons (Desktop) */}
        <div className="hidden lg:flex flex-row gap-5">
          {SOCIALS.map(({ link, name, icon: Icon }) => (
            <Link
              href={link}
              target="_blank"
              rel="noreferrer noopener"
              key={name}
              title={name}
              className="hover:scale-110 transition-transform duration-200"
            >
              <Icon className="h-6 w-6 text-white hover:text-[rgb(112,66,248)] transition-colors" />
            </Link>
          ))}
        </div>

        {/* Hamburger Menu Toggle Button */}
        <button
          className="lg:hidden text-white focus:outline-none text-3xl select-none p-2 relative w-10 h-10 flex items-center justify-center"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {/* Subtle transition on the tracking string text icon replacement */}
          <span className="transition-all duration-200 block transform">
            {isMobileMenuOpen ? "✕" : "☰"}
          </span>
        </button>
      </div>

      {/* Mobile & Tablet Drawer Overlay with explicit close lifecycles */}
      <AnimatePresence initial={false}>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }} // Clean, high-performance cubic curve
            className="w-full lg:hidden border-t border-[rgba(112,66,248,0.15)] overflow-hidden"
          >
            {/* Inner padding block to prevent layout layout-jank jump calculations during height changes */}
            <div className="flex flex-col items-center text-gray-300 pb-6 pt-4 w-full">
              {/* Links Container */}
              <div className="flex flex-col items-center gap-4 w-full">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.title}
                    href={link.link}
                    className="w-full text-center py-2 cursor-pointer hover:text-[rgb(112,66,248)] transition-colors text-base font-medium tracking-wide"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.title}
                  </Link>
                ))}
              </div>

              {/* Social Links Container */}
              <div className="flex justify-center gap-8 mt-6 border-t border-gray-800/60 pt-5 w-full">
                {SOCIALS.map(({ link, name, icon: Icon }) => (
                  <Link
                    href={link}
                    target="_blank"
                    rel="noreferrer noopener"
                    key={name}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-1"
                  >
                    <Icon className="h-6 w-6 text-white hover:text-[rgb(112,66,248)] transition-colors" />
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};