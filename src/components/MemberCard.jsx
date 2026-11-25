import React from 'react';
import { motion } from 'framer-motion';

export default function MemberCard({ member, onSelect }) {
  const { id, name, role, image, department, isLeader, leaderType } = member;

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 35, scale: 0.98 },
        visible: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: {
            duration: 0.7,
            ease: [0.215, 0.61, 0.355, 1],
          },
        },
      }}
      className="group relative flex flex-col bg-[#20202A]/90 rounded-2xl overflow-hidden border border-white/[0.08] hover:border-violet-500/40 shadow-[0_8px_30px_rgba(0,0,0,0.35)] hover:shadow-[0_12px_40px_rgba(139,92,246,0.18)] transition-all duration-500 cursor-pointer backdrop-blur-md"
      onClick={() => onSelect && onSelect(member)}
    >
      {/* Top Ambient Highlight on Card Hover */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:via-violet-500 transition-all duration-500" />

      {/* Portrait Container */}
      <div className="relative w-full aspect-[4/5] bg-[#191920] overflow-hidden">
        <img
          src={image}
          alt={name}
          loading="lazy"
          className="w-full h-full object-cover object-top sm:object-center transition-transform duration-700 ease-out group-hover:scale-105"
        />

        {/* Futuristic Node Badge */}
        <div className="absolute top-3.5 left-3.5 bg-[#101014]/85 backdrop-blur-md px-2.5 py-1 rounded-lg border border-white/10 font-mono text-[10px] text-[#22D3EE] font-bold shadow-sm">
          NODE {String(id).padStart(2, '0')}
        </div>

        {/* Leadership Pill if Leader */}
        {isLeader && (
          <div className="absolute top-3.5 right-3.5 bg-gradient-to-r from-[#8B5CF6] to-[#3B82F6] text-white text-[9px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full shadow-md font-mono flex items-center gap-1">
            <span>★</span> {leaderType === 'captain' ? 'CAPTAIN' : 'VICE-CAPTAIN'}
          </div>
        )}

        {/* Subtle Cyber Gradient Overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#101014] via-[#101014]/30 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300 pointer-events-none" />
      </div>

      {/* Member Details */}
      <div className="p-5 flex flex-col justify-between flex-grow bg-[#20202A]">
        <div>
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] font-semibold text-[#8B5CF6]">
              {department || "Core Team"}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400/60 group-hover:bg-[#22D3EE] transition-colors" />
          </div>

          <h3 className="text-lg sm:text-xl font-bold text-[#F5F5F7] tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:via-violet-200 group-hover:to-cyan-300 transition-all duration-300">
            {name}
          </h3>

          <p className="text-xs font-mono font-medium text-[#A1A1AA] mt-1">
            {role}
          </p>
        </div>

        {/* Bottom Metadata & View Affordance */}
        <div className="mt-4 pt-3.5 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono">
          <span className="text-[#22D3EE] uppercase tracking-wider opacity-75 group-hover:opacity-100 transition-opacity flex items-center gap-1">
            Inspect <span>→</span>
          </span>
          <span className="text-[#A1A1AA]/60 text-[10px]">
            ACTIVE
          </span>
        </div>
      </div>
    </motion.div>
  );
}
