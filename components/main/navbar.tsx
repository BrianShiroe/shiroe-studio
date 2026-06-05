"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";

import { LINKS, NAV_LINKS, SOCIALS } from "@/constants";

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Track viewport changes to completely strip transition parameters on mobile layout sizes
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
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
        // Fallback to absolute static values on mobile to completely remove active transformation calculations
        width: isMobile ? "100%" : animatedWidth,
        top: isMobile ? "0px" : animatedTop,
        borderRadius: isMobile ? "0px" : animatedBorderRadius,
        backgroundColor: isMobile ? "rgba(3, 0, 20, 0.85)" : animatedBackgroundColor,
        border: isMobile ? "none" : animatedBorderStyle,
        borderBottom: isMobile ? "1px solid rgba(112, 66, 248, 0.15)" : undefined,
        left: "50%",
        translateX: "-50%",
        height: isMobileMenuOpen ? "auto" : "65px",
      }}
      className="fixed shadow-lg shadow-[#2A0E61]/50 backdrop-blur-md z-50 px-6 md:px-10 transition-all duration-300 flex flex-col justify-start overflow-hidden"
    >
      {/* Navbar Container */}
      <div className="w-full min-h-[65px] h-[65px] flex items-center justify-between m-auto px-[10px] shrink-0">
        {/* Logo + Name */}
        <Link href="#home" className="flex items-center" onClick={() => setIsMobileMenuOpen(false)}>
          <Image
            src="/logo.png"
            alt="ShiroeStudio Logo"
            width={40}
            height={40}
            draggable={false}
            className="cursor-pointer object-contain"
          />
          <div className="hidden md:flex items-center font-bold ml-[10px] text-gray-300 tracking-wide select-none">
            ShiroeStudio
          </div>
        </Link>

        {/* Web Navbar */}
        <div className="hidden md:flex h-full flex-row items-center justify-between md:mr-20">
          <div className="flex items-center justify-center gap-8 text-gray-200 text-[15px] font-medium tracking-wide">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.title}
                href={link.link}
                className="relative cursor-pointer hover:text-[rgb(112,66,248)] transition-colors duration-200 whitespace-nowrap group py-2"
              >
                {link.title}
                {/* Modern Hover Accent Line Animation */}
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[rgb(112,66,248)] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </Link>
            ))}
          </div>
        </div>

        {/* Social Icons (Web) */}
        <div className="hidden md:flex flex-row gap-5">
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

        {/* Hamburger Menu - Styled to prevent layout animation triggers on icon text toggle */}
        <motion.button
          animate={false}
          layout={false}
          className="md:hidden text-white focus:outline-none text-3xl select-none p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? "✕" : "☰"}
        </motion.button>
      </div>

      {/* Mobile Menu Overlay with Mount/Unmount Animation Lifecycle Tracking */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="w-full flex flex-col items-center text-gray-300 md:hidden border-t border-[rgba(112,66,248,0.15)] pb-6 pt-4 overflow-hidden"
          >
            {/* Links */}
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

            {/* Social Icons */}
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
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
