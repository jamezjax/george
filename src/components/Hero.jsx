import React from 'react';
import { motion } from 'framer-motion';

export default function Hero({ teamInfo }) {
  const { name, tagline, subtitle, logo } = teamInfo;

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center px-6 pt-24 pb-16 overflow-hidden">
      {/* Central Ambient Lighting & Subtle Concentric Rings */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center -z-10">
        <div className="w-[500px] h-[500px] sm:w-[700px] sm:h-[700px] rounded-full bg-gradient-radial from-[#8B5CF6]/15 via-[#3B82F6]/5 to-transparent blur-3xl animate-pulse-slow" />
        
        {/* Subtle Decorative Rings */}
        <div className="absolute w-[440px] h-[440px] sm:w-[620px] sm:h-[620px] rounded-full border border-violet-500/10" />
        <div className="absolute w-[580px] h-[580px] sm:w-[820px] sm:h-[820px] rounded-full border border-dashed border-cyan-400/10 animate-[spin_120s_linear_infinite]" />
      </div>

      <div className="max-w-4xl mx-auto flex flex-col items-center text-center relative z-10">
        {/* Team Logo Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1.1,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="relative mb-8 group"
        >
          {/* Subtle ambient glow behind logo */}
          <div className="absolute -inset-3 rounded-3xl bg-gradient-to-r from-[#8B5CF6]/30 via-[#3B82F6]/20 to-[#22D3EE]/30 blur-xl opacity-60 group-hover:opacity-90 transition-opacity duration-700" />

          {/* Logo Crest Box */}
          <div className="relative w-36 h-36 sm:w-44 sm:h-44 md:w-48 md:h-48 rounded-2xl p-1 bg-gradient-to-b from-white/15 to-white/0 shadow-2xl backdrop-blur-md">
            <div className="w-full h-full rounded-[14px] bg-[#191920] border border-white/10 flex items-center justify-center p-3 relative overflow-hidden group-hover:border-violet-500/40 transition-colors duration-500">
              <img
                src={logo}
                alt={`${name} Official Emblem`}
                className="w-full h-full object-contain relative z-10 transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </div>
          </div>
        </motion.div>

        {/* Group Name as Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.9,
            delay: 0.25,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="space-y-3"
        >
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-[0.16em] sm:tracking-[0.22em] text-[#F5F5F7] uppercase">
            <span className="bg-gradient-to-b from-white via-[#F5F5F7] to-[#A1A1AA] bg-clip-text text-transparent">
              {name}
            </span>
          </h1>

          {/* Subtle Gradient Accent Hairline */}
          <div className="h-[2px] w-28 mx-auto bg-gradient-to-r from-transparent via-[#8B5CF6] to-transparent my-4 opacity-80" />
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.45,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="text-base sm:text-xl font-medium tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-[#22D3EE] via-[#8B5CF6] to-[#EC4899] max-w-xl mx-auto"
        >
          {tagline}
        </motion.p>

        {/* Supporting description */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.65,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="text-xs sm:text-sm text-[#A1A1AA] font-normal leading-relaxed max-w-lg mx-auto mt-3"
        >
          {subtitle}
        </motion.p>
      </div>

      {/* Clean Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
      >
        <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-[#A1A1AA]">
          Scroll to explore
        </span>
        <div className="w-4 h-7 rounded-full border border-white/20 flex justify-center p-1">
          <motion.div
            animate={{
              y: [0, 6, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-1 h-1.5 rounded-full bg-[#22D3EE]"
          />
        </div>
      </motion.div>
    </section>
  );
}
