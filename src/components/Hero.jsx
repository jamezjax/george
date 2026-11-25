import React from 'react';
import { motion } from 'framer-motion';

export default function Hero({ teamInfo }) {
  const { name, tagline, subtitle, logo, ecosystemMetrics } = teamInfo;

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center px-6 pt-28 pb-16 overflow-hidden">
      {/* Central Generative Lighting & Cyber Rings */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center -z-10">
        <div className="w-[500px] h-[500px] sm:w-[700px] sm:h-[700px] rounded-full bg-gradient-radial from-[#8B5CF6]/20 via-[#3B82F6]/10 to-transparent blur-3xl animate-pulse-slow" />
        
        {/* Generative Rotating Circular Compass Rings */}
        <div className="absolute w-[440px] h-[440px] sm:w-[620px] sm:h-[620px] rounded-full border border-violet-500/15" />
        <div className="absolute w-[580px] h-[580px] sm:w-[820px] sm:h-[820px] rounded-full border border-dashed border-cyan-400/15 animate-[spin_120s_linear_infinite]" />
      </div>

      <div className="max-w-4xl mx-auto flex flex-col items-center text-center relative z-10">
        {/* Generative Platform Badge */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md mb-8 shadow-inner"
        >
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#22D3EE] opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#22D3EE]" />
          </span>
          <span className="text-[11px] font-mono tracking-widest text-[#22D3EE] uppercase font-semibold">
            Generative Art & Neural Collective
          </span>
        </motion.div>

        {/* Team Logo Container: Futuristic Glowing Crest */}
        <motion.div
          initial={{ opacity: 0, scale: 0.82 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1.1,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="relative mb-8 group"
        >
          {/* Subtle multi-layer ambient glow */}
          <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-[#8B5CF6]/40 via-[#3B82F6]/30 to-[#22D3EE]/40 blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-700" />

          {/* Crest Presentation */}
          <div className="relative w-36 h-36 sm:w-44 sm:h-44 md:w-48 md:h-48 rounded-2xl p-1 bg-gradient-to-b from-white/20 via-white/5 to-white/0 shadow-2xl backdrop-blur-md">
            <div className="w-full h-full rounded-[14px] bg-[#191920] border border-white/10 flex items-center justify-center p-3 relative overflow-hidden group-hover:border-violet-500/50 transition-colors duration-500">
              {/* Inner glowing grid accent */}
              <div className="absolute inset-0 bg-cyber-grid opacity-30 pointer-events-none" />
              
              <img
                src={logo}
                alt={`${name} Official Emblem`}
                className="w-full h-full object-contain relative z-10 transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </div>
          </div>

          {/* Futuristic Crest Micro-Badge */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-[#101014] text-[#22D3EE] text-[9px] font-mono tracking-[0.25em] uppercase font-bold px-3 py-0.5 rounded-full border border-cyan-400/40 shadow-lg shadow-cyan-500/10"
          >
            CORE EMBLEM
          </motion.div>
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

          {/* Generative Dual Gradient Hairline */}
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

        {/* Futuristic CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.85,
          }}
          className="mt-9 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#leadership"
            className="group relative inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full text-xs font-bold tracking-wider uppercase text-white bg-gradient-to-r from-[#8B5CF6] via-[#6366F1] to-[#3B82F6] shadow-[0_0_25px_rgba(139,92,246,0.4)] hover:shadow-[0_0_35px_rgba(139,92,246,0.6)] transition-all duration-300 hover:scale-[1.02]"
          >
            <span>Command & Leadership</span>
            <svg
              className="w-4 h-4 text-[#22D3EE] group-hover:translate-x-0.5 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>

          <a
            href="#team"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-xs font-semibold tracking-wider uppercase text-[#F5F5F7] bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 hover:border-white/20 backdrop-blur-md transition-all duration-300"
          >
            <span>The Collective Roster</span>
          </a>
        </motion.div>

        {/* Live Ecosystem Metrics Cards */}
        {ecosystemMetrics && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.05, duration: 0.8 }}
            className="mt-14 w-full grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-3xl"
          >
            {ecosystemMetrics.map((metric) => (
              <div
                key={metric.label}
                className="bg-[#191920]/80 border border-white/[0.07] rounded-xl p-3.5 text-center backdrop-blur-sm shadow-inner"
              >
                <div className="text-base sm:text-lg font-bold font-mono text-[#F5F5F7]">
                  {metric.value}
                </div>
                <div className="text-[10px] font-mono uppercase tracking-widest text-[#A1A1AA] mt-0.5">
                  {metric.label}
                </div>
              </div>
            ))}
          </motion.div>
        )}
      </div>

      {/* Futuristic Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 1 }}
        className="absolute bottom-5 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 pointer-events-none"
      >
        <span className="text-[9px] font-mono tracking-[0.3em] uppercase text-[#A1A1AA]">
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
