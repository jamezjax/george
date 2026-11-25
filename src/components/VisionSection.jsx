import React from 'react';
import { motion } from 'framer-motion';

export default function VisionSection({ teamInfo }) {
  const { name, tagline, description } = teamInfo;

  const pillars = [
    {
      code: "01",
      title: "Algorithmic Precision",
      desc: "Every pixel, parameter, and trajectory is calculated with uncompromising accuracy.",
      color: "#8B5CF6",
    },
    {
      code: "02",
      title: "Creative Synthesis",
      desc: "Harmonizing human vision with deep neural models to unlock unprecedented digital beauty.",
      color: "#3B82F6",
    },
    {
      code: "03",
      title: "Visionary Builders",
      desc: "A united 8-node collective committed to pushing the boundaries of generative culture.",
      color: "#22D3EE",
    },
  ];

  return (
    <section id="vision" className="py-20 sm:py-28 px-6 sm:px-8 max-w-7xl mx-auto relative z-10">
      <div className="bg-gradient-to-b from-[#191920]/80 to-[#101014]/90 rounded-3xl p-8 sm:p-14 border border-white/[0.08] backdrop-blur-xl relative overflow-hidden">
        {/* Ambient Top Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-violet-500/10 blur-3xl pointer-events-none" />

        <div className="max-w-3xl mx-auto text-center">
          <span className="text-[10px] font-mono uppercase tracking-[0.25em] font-bold text-[#8B5CF6]">
            The Manifesto
          </span>
          
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#F5F5F7] tracking-tight mt-2">
            Where Accuracy Shapes The Builders
          </h2>

          <p className="mt-4 text-xs sm:text-sm text-[#A1A1AA] leading-relaxed">
            {description} At {name}, we engineer the intersection of artificial intelligence, high-fidelity digital art, and purposeful teamwork.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((pillar) => (
            <motion.div
              key={pillar.code}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
              className="bg-[#20202A]/70 rounded-2xl p-6 border border-white/[0.06] hover:border-white/20 transition-all shadow-lg"
            >
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center font-mono text-xs font-bold mb-4"
                style={{
                  background: `${pillar.color}20`,
                  color: pillar.color,
                  border: `1px solid ${pillar.color}40`,
                }}
              >
                {pillar.code}
              </div>

              <h4 className="text-base font-bold text-[#F5F5F7] tracking-tight">
                {pillar.title}
              </h4>

              <p className="mt-2 text-xs text-[#A1A1AA] leading-relaxed">
                {pillar.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
