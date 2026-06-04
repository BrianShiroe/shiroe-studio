'use client';

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";

import { LINKS, NAV_LINKS, SOCIALS } from "@/constants";

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Hook into the page's vertical scroll position
  const { scrollY } = useScroll();

  // Define dynamic style transformations based on scroll pixel threshold (0px to 100px)
  const navbarWidth = useTransform(scrollY, [0, 100], ["100%", "90%"]);
  const navbarTop = useTransform(scrollY, [0, 100], ["0px", "12px"]);
  const borderRadius = useTransform(scrollY, [0, 100], ["0px", "9999px"]);
  const backgroundColor = useTransform(
    scrollY, 
    [0, 100], 
    ["rgba(3, 0, 20, 0.15)", "rgba(3, 0, 20, 0.75)"]
  );
  const borderStyle = useTransform(
    scrollY,
    [0, 100],
    ["1px solid rgba(112, 66, 248, 0)", "1px solid rgba(112, 66, 248, 0.25)"]
  );

  return (
    <motion.div 
      style={{
        width: navbarWidth,
        top: navbarTop,
        borderRadius: borderRadius,
        backgroundColor: backgroundColor,
        border: borderStyle,
        left: "50%",
        translateX: "-50%" // Anchors the shrinking navbar perfectly to the horizontal center
      }}
      className="h-[65px] fixed shadow-lg shadow-[#2A0E61]/50 backdrop-blur-md z-50 px-10 transition-shadow duration-300"
    >
      {/* Navbar Container */}
      <div className="w-full h-full flex items-center justify-between m-auto px-[10px]">
        {/* Logo + Name */}
        <Link
          href="#home"
          className="flex items-center"
        >
          <Image
            src="/logo.png"
            alt="Logo"
            width={70}
            height={70}
            draggable={false}
            className="cursor-pointer"
          />
          <div className="hidden md:flex items-center font-bold ml-[10px] text-gray-300 tracking-wide select-none">
            brianshiroe
          </div>
        </Link>

        {/* Web Navbar — Cleaned up background pill wrapper, increased link spacing and size */}
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

            {/* Source Code */}
            <Link
              href={LINKS.sourceCode}
              target="_blank"
              rel="noreferrer noopener"
              className="relative cursor-pointer hover:text-[rgb(112,66,248)] transition-colors duration-200 whitespace-nowrap group py-2"
            >
              Source Code
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[rgb(112,66,248)] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </Link>
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

        {/* Hamburger Menu */}
        <button
          className="md:hidden text-white focus:outline-none text-4xl select-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="absolute top-[65px] left-0 w-full bg-[#030014]/95 backdrop-blur-xl p-6 flex flex-col items-center text-gray-300 md:hidden border-t border-[rgba(112,66,248,0.2)] rounded-b-2xl shadow-2xl">
          {/* Links */}
          <div className="flex flex-col items-center gap-5 w-full">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.title}
                href={link.link}
                className="w-full text-center py-1 cursor-pointer hover:text-[rgb(112,66,248)] transition text-lg font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.title}
              </Link>
            ))}
            <Link
              href={LINKS.sourceCode}
              target="_blank"
              rel="noreferrer noopener"
              className="w-full text-center py-1 cursor-pointer hover:text-[rgb(112,66,248)] transition text-lg font-medium border-t border-gray-800 pt-4 mt-1"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Source Code
            </Link>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center gap-8 mt-6 border-t border-gray-800 pt-5 w-full">
            {SOCIALS.map(({ link, name, icon: Icon }) => (
              <Link
                href={link}
                target="_blank"
                rel="noreferrer noopener"
                key={name}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Icon className="h-7 w-7 text-white hover:text-[rgb(112,66,248)] transition-colors" />
              </Link>
            ))}
          </div>
        </div>
      )}
    </motion.div>
  );
};