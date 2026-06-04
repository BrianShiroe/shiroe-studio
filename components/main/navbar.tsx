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
    // Wrap with motion.div and assign the dynamic layout variants
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
      className="h-[65px] fixed shadow-lg shadow-[#2A0E61]/30 backdrop-blur-md z-50 px-10 transition-shadow duration-300"
    >
      {/* Navbar Container */}
      <div className="w-full h-full flex items-center justify-between m-auto px-[10px]">
        {/* Logo + Name */}
        <Link
          href="#about-me"
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
          {/* Typo fixed from 'md:selffont-bold' to 'items-center font-bold' */}
          <div className="hidden md:flex items-center font-bold ml-[10px] text-gray-300">John Doe</div>
        </Link>

        {/* Web Navbar */}
        <div className="hidden md:flex w-[500px] h-full flex-row items-center justify-between md:mr-20">
          <div className="flex items-center justify-between w-full h-auto border-[rgba(112,66,248,0.38)] bg-[rgba(3,0,20,0.37)] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.title}
                href={link.link}
                className="cursor-pointer hover:text-[rgb(112,66,248)] transition"
              >
                {link.title}
              </Link>
            ))}

            {/* Source Code */}
            <Link
              href={LINKS.sourceCode}
              target="_blank"
              rel="noreferrer noopener"
              className="cursor-pointer hover:text-[rgb(112,66,248)] transition"
            >
              Source Code
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
            >
              <Icon className="h-6 w-6 text-white" />
            </Link>
          ))}
        </div>

        {/* Hamburger Menu */}
        <button
          className="md:hidden text-white focus:outline-none text-4xl"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-[65px] left-0 w-full bg-[#030014] rounded-b-2xl p-5 flex flex-col items-center text-gray-300 md:hidden border-t border-[rgba(112,66,248,0.2)] shadow-xl">
          {/* Links */}
          <div className="flex flex-col items-center gap-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.title}
                href={link.link}
                className="cursor-pointer hover:text-[rgb(112,66,248)] transition text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.title}
              </Link>
            ))}
            <Link
              href={LINKS.sourceCode}
              target="_blank"
              rel="noreferrer noopener"
              className="cursor-pointer hover:text-[rgb(112,66,248)] transition text-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Source Code
            </Link>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center gap-6 mt-6">
            {SOCIALS.map(({ link, name, icon: Icon }) => (
              <Link
                href={link}
                target="_blank"
                rel="noreferrer noopener"
                key={name}
              >
                <Icon className="h-8 w-8 text-white" />
              </Link>
            ))}
          </div>
        </div>
      )}
    </motion.div>
  );
};