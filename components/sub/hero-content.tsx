"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Image from "next/image";

import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";

export const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col md:flex-row items-center justify-center px-6 mt-32 md:mt-40 w-full z-[20] gap-8 md:gap-10"
    >
      <div className="h-full w-full flex flex-col gap-4 justify-center text-center md:text-start items-center md:items-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-white/20 bg-black/60 backdrop-blur-sm"
        >
          <SparklesIcon className="text-white mr-[10px] h-4 w-4 md:h-5 md:w-5 shrink-0" />
          <h1 className="Welcome-text text-[11px] md:text-[13px] leading-snug text-white font-medium">
            Digital Strategy | Web Development | Graphics | Dubai, UAE
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-4 mt-4 text-3xl md:text-6xl font-bold text-white max-w-[600px] w-full"
        >
          <span>
            Shiroe Digital:{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              Dubai's partner
            </span>{" "}
            for bold digital transformation.
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-sm md:text-lg text-gray-400 my-3 md:my-5 max-w-[560px]"
        >
          Based in Dubai, Shiroe Digital helps businesses across the UAE launch
          distinctive websites, high-conversion campaigns, and cohesive visual systems.
          We blend strategy, design, and development to turn your business goals into
          polished, high-performance digital experiences.
        </motion.p>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full flex justify-center items-center"
      >
        <Image
          src="/hero-bg.svg"
          alt="Digital Strategy and Development in Dubai"
          height={650}
          width={650}
          sizes="(max-width: 768px) 90vw, 650px"
          draggable={false}
          className="select-none w-[75vw] max-w-[400px] md:max-w-full h-auto"
        />
      </motion.div>
    </motion.div>
  );
};