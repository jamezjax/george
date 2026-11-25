import React from 'react';
import { motion } from 'framer-motion';

export default function MemberCard({ member, onSelect }) {
  const { id, name, role, image, department, isLeader } = member;

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
      className={`group relative flex flex-col bg-white rounded-2xl overflow-hidden border transition-all duration-500 cursor-pointer ${
        isLeader
          ? 'border-[#C59B3F]/40 shadow-[0_6px_25px_-5px_rgba(197,155,63,0.15)] hover:shadow-[0_20px_40px_-8px_rgba(197,155,63,0.22)]'
          : 'border-stone-200/80 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.04)] hover:shadow-[0_16px_36px_-6px_rgba(38,59,83,0.12)]'
      }`}
      onClick={() => onSelect && onSelect(member)}
    >
      {/* Photo Container: Clean portrait aspect ratio */}
      <div className="relative w-full aspect-[4/5] bg-stone-100 overflow-hidden">
        <img
          src={image}
          alt={name}
          loading="lazy"
          className="w-full h-full object-cover object-top sm:object-center transition-transform duration-700 ease-out group-hover:scale-105"
        />

        {/* Number badge on top left */}
        <div className="absolute top-3.5 left-3.5 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-full border border-stone-200/60 shadow-sm">
          <span className="text-[10px] font-bold tracking-widest text-[#263B53] uppercase">
            {String(id).padStart(2, '0')}
          </span>
        </div>

        {/* Leadership highlight badge if Captain / Vice Captain */}
        {isLeader && (
          <div className="absolute top-3.5 right-3.5 bg-[#202124]/90 backdrop-blur-md px-3 py-1 rounded-full border border-[#C59B3F]/40 shadow-sm">
            <span className="text-[10px] font-extrabold tracking-widest text-[#C59B3F] uppercase flex items-center gap-1">
              ★ {role}
            </span>
          </div>
        )}

        {/* Subtle hover gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#202124]/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      </div>

      {/* Member Details */}
      <div className="p-5 flex flex-col justify-between flex-grow bg-white">
        <div>
          <div className="flex items-center justify-between mb-1">
            <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#777777]">
              {department || "Core Team"}
            </span>
          </div>

          <h3 className="text-lg sm:text-xl font-bold text-[#202124] tracking-tight group-hover:text-[#263B53] transition-colors duration-200">
            {name}
          </h3>

          <p className={`text-xs font-semibold mt-1 tracking-wide ${isLeader ? 'text-[#C59B3F]' : 'text-[#777777]'}`}>
            {role}
          </p>
        </div>

        {/* Elegant minimal hairline divider & subtle view affordance */}
        <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between">
          <span className="text-[11px] font-semibold tracking-wider text-[#263B53] uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-1">
            View Portrait
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </span>
          <div className={`w-2 h-2 rounded-full transition-colors duration-300 ${isLeader ? 'bg-[#C59B3F]' : 'bg-stone-300 group-hover:bg-[#C59B3F]'}`} />
        </div>
      </div>
    </motion.div>
  );
}
