import React from 'react';
import { motion } from 'framer-motion';

export default function LeadershipSection({ captain, viceCaptain, onSelect }) {
  if (!captain || !viceCaptain) return null;

  return (
    <section id="leadership" className="py-20 sm:py-28 px-6 sm:px-8 max-w-7xl mx-auto relative z-10">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col items-center text-center mb-14 sm:mb-18"
      >
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-violet-500/10 border border-violet-500/30 text-violet-400 text-[10px] font-mono tracking-widest uppercase font-bold mb-3">
          <span>◈</span> Command Architecture
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#F5F5F7]">
          Leadership Core
        </h2>
        
        <p className="mt-3 text-xs sm:text-sm text-[#A1A1AA] max-w-lg font-normal">
          Directing accuracy, creative strategy, and execution across the SMITH WARRIORS collective.
        </p>

        <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-[#8B5CF6] to-transparent mt-5 opacity-70" />
      </motion.div>

      {/* Leadership Grid: 2 Prominent Columns (Captain larger/highlighted, Vice-Captain alongside) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
        
        {/* CAPTAIN: Prominent position (7 cols on lg) */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 group relative flex flex-col sm:flex-row bg-[#191920]/90 rounded-3xl overflow-hidden border border-[#8B5CF6]/40 shadow-[0_0_40px_rgba(139,92,246,0.18)] hover:shadow-[0_0_60px_rgba(139,92,246,0.3)] transition-all duration-500 cursor-pointer backdrop-blur-xl"
          onClick={() => onSelect && onSelect(captain)}
        >
          {/* Subtle Ambient Glow Behind Captain */}
          <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-[#8B5CF6]/15 blur-3xl pointer-events-none" />

          {/* Captain Portrait */}
          <div className="relative sm:w-1/2 aspect-[4/5] sm:aspect-auto bg-[#20202A] overflow-hidden flex-shrink-0">
            <img
              src={captain.image}
              alt={captain.name}
              loading="lazy"
              className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
            />
            {/* Holographic Number */}
            <div className="absolute top-4 left-4 bg-[#101014]/80 backdrop-blur-md px-2.5 py-1 rounded-lg border border-white/10 font-mono text-[10px] text-[#22D3EE] font-bold">
              NODE 02
            </div>
            
            {/* Captain Distinctive Label on Photo */}
            <div className="absolute top-4 right-4 bg-gradient-to-r from-[#8B5CF6] to-[#A855F7] text-white text-[10px] font-bold tracking-[0.2em] uppercase px-3 py-1 rounded-full shadow-lg shadow-violet-900/50 flex items-center gap-1.5">
              <span>★</span> CAPTAIN
            </div>
          </div>

          {/* Captain Details Content */}
          <div className="p-6 sm:p-8 flex flex-col justify-between sm:w-1/2 relative z-10">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] font-semibold text-[#8B5CF6]">
                  Executive Direction
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#8B5CF6] animate-pulse" />
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#F5F5F7] tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-[#8B5CF6] transition-all duration-300">
                {captain.name}
              </h3>

              <div className="mt-2 inline-block px-3 py-1 rounded-md bg-violet-500/10 border border-violet-500/20 text-[#8B5CF6] text-xs font-semibold tracking-wider uppercase font-mono">
                {captain.role}
              </div>

              <p className="mt-4 text-xs text-[#A1A1AA] leading-relaxed">
                Spearheading the artistic vision, creative methodology, and cohesive alignment of the entire SMITH WARRIORS collective.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-white/[0.08] flex items-center justify-between">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#22D3EE] flex items-center gap-1.5 group-hover:translate-x-1 transition-transform">
                Inspect Portrait <span>→</span>
              </span>
              <span className="text-[10px] font-mono text-[#A1A1AA]">
                LEAD-ALPHA
              </span>
            </div>
          </div>
        </motion.div>

        {/* VICE-CAPTAIN: Prominent Secondary Profile (5 cols on lg) */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 group relative flex flex-col bg-[#191920]/90 rounded-3xl overflow-hidden border border-[#3B82F6]/40 shadow-[0_0_35px_rgba(59,130,246,0.15)] hover:shadow-[0_0_55px_rgba(59,130,246,0.28)] transition-all duration-500 cursor-pointer backdrop-blur-xl"
          onClick={() => onSelect && onSelect(viceCaptain)}
        >
          {/* Subtle Ambient Glow */}
          <div className="absolute top-0 right-0 w-60 h-60 rounded-full bg-[#3B82F6]/15 blur-3xl pointer-events-none" />

          {/* Vice-Captain Portrait */}
          <div className="relative w-full aspect-[16/11] bg-[#20202A] overflow-hidden">
            <img
              src={viceCaptain.image}
              alt={viceCaptain.name}
              loading="lazy"
              className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
            />
            {/* Holographic Number */}
            <div className="absolute top-4 left-4 bg-[#101014]/80 backdrop-blur-md px-2.5 py-1 rounded-lg border border-white/10 font-mono text-[10px] text-[#22D3EE] font-bold">
              NODE 07
            </div>

            {/* Vice Captain Distinctive Label */}
            <div className="absolute top-4 right-4 bg-gradient-to-r from-[#3B82F6] to-[#22D3EE] text-white text-[10px] font-bold tracking-[0.2em] uppercase px-3 py-1 rounded-full shadow-lg shadow-blue-900/50 flex items-center gap-1.5">
              <span>◆</span> VICE-CAPTAIN
            </div>
          </div>

          {/* Details Content */}
          <div className="p-6 flex flex-col justify-between flex-grow relative z-10">
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] font-semibold text-[#3B82F6]">
                  Strategic Operations
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-[#F5F5F7] tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-[#3B82F6] transition-all duration-300">
                {viceCaptain.name}
              </h3>

              <div className="mt-1.5 inline-block px-2.5 py-0.5 rounded-md bg-blue-500/10 border border-blue-500/20 text-[#3B82F6] text-xs font-semibold tracking-wider uppercase font-mono">
                {viceCaptain.role}
              </div>

              <p className="mt-3 text-xs text-[#A1A1AA] leading-relaxed">
                Overseeing tactical execution, collaborative dynamics, and operational workflow across the production pipeline.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-white/[0.08] flex items-center justify-between">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#3B82F6] flex items-center gap-1.5 group-hover:translate-x-1 transition-transform">
                Inspect Portrait <span>→</span>
              </span>
              <span className="text-[10px] font-mono text-[#A1A1AA]">
                LEAD-BETA
              </span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
