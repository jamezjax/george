import React from 'react';
import { motion } from 'framer-motion';

export default function Hero({ teamInfo }) {
  const { name, tagline, subtitle, logo } = teamInfo;

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center px-6 pt-24 pb-16 overflow-hidden">
      {/* Subtle architectural background elements that complement the circular crest */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center -z-10">
        {/* Very soft ambient radial glow */}
        <div className="absolute w-[600px] h-[600px] sm:w-[750px] sm:h-[750px] rounded-full bg-gradient-to-tr from-[#C59B3F]/5 via-[#263B53]/5 to-transparent blur-3xl" />

        {/* Concentric subtle rings evoking the crest emblem */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 0.45, scale: 1 }}
          transition={{ duration: 2.2, ease: "easeOut" }}
          className="absolute w-[460px] h-[460px] sm:w-[620px] sm:h-[620px] rounded-full border border-stone-300/40"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 0.25, scale: 1 }}
          transition={{ duration: 2.5, ease: "easeOut", delay: 0.2 }}
          className="absolute w-[680px] h-[680px] sm:w-[860px] sm:h-[860px] rounded-full border border-dashed border-stone-300/30"
        />
      </div>

      <div className="max-w-4xl mx-auto flex flex-col items-center text-center relative z-10">
        {/* Team Logo Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.82 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1.2,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="relative mb-8 sm:mb-10 group"
        >
          {/* Subtle logo framing with fine rim */}
          <div className="relative w-36 h-36 sm:w-44 sm:h-44 md:w-48 md:h-48 rounded-full p-2 bg-gradient-to-b from-[#FAF9F6] to-white shadow-[0_12px_40px_-10px_rgba(0,0,0,0.08)] border border-stone-200/80">
            <div className="w-full h-full rounded-full overflow-hidden border border-[#C59B3F]/30 bg-white shadow-inner flex items-center justify-center">
              <img
                src={logo}
                alt={`${name} Official Emblem`}
                className="w-full h-full object-contain p-1 transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </div>
          </div>
          {/* Subtle gold badge under logo */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 bg-[#202124] text-[#C59B3F] text-[10px] tracking-[0.25em] uppercase font-semibold px-3.5 py-1 rounded-full border border-[#C59B3F]/30 shadow-sm"
          >
            Official
          </motion.div>
        </motion.div>

        {/* Group Name as Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.9,
            delay: 0.3,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="space-y-3"
        >
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-[0.16em] sm:tracking-[0.22em] md:tracking-[0.26em] text-[#202124] uppercase">
            {name}
          </h1>
          {/* Subtle dividing accent line */}
          <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-[#263B53] to-transparent mx-auto opacity-70 my-3" />
        </motion.div>

        {/* Short Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.55,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="text-base sm:text-xl font-medium text-[#263B53] tracking-wide max-w-xl mx-auto mt-2"
        >
          {tagline}
        </motion.p>

        {/* Supporting description */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.75,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="text-sm sm:text-base text-[#777777] font-normal leading-relaxed max-w-lg mx-auto mt-3"
        >
          {subtitle}
        </motion.p>

        {/* CTA Link to Scroll Down */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.95,
          }}
          className="mt-10 sm:mt-12"
        >
          <a
            href="#team"
            className="group inline-flex items-center gap-2.5 px-6 py-3 rounded-full text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#202124] bg-white border border-stone-200 hover:border-[#263B53]/40 shadow-sm hover:shadow-md transition-all duration-300"
          >
            <span>Explore Team</span>
            <svg
              className="w-4 h-4 text-[#263B53] group-hover:translate-y-0.5 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </motion.div>
      </div>

      {/* Subtle Scroll Down mouse indicator at bottom */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
      >
        <span className="text-[10px] tracking-[0.25em] uppercase text-[#777777] font-medium">Scroll</span>
        <div className="w-5 h-8 rounded-full border border-stone-300/90 flex justify-center p-1">
          <motion.div
            animate={{
              y: [0, 8, 0],
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-1 h-1.5 rounded-full bg-[#263B53]"
          />
        </div>
      </motion.div>
    </section>
  );
}
