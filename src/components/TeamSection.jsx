import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import MemberCard from './MemberCard';

export default function TeamSection({ members }) {
  const [selectedMember, setSelectedMember] = useState(null);

  // Separate non-leader members to avoid redundancy with the Leadership Section
  const coreMembers = members.filter((m) => !m.isLeader);

  return (
    <section id="team" className="py-20 sm:py-28 px-6 sm:px-8 max-w-7xl mx-auto relative z-10">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col items-center text-center mb-14 sm:mb-18"
      >
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-[#22D3EE] text-[10px] font-mono tracking-widest uppercase font-bold mb-3">
          <span>◆</span> Specialist Nodes
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#F5F5F7]">
          Collective Roster
        </h2>

        <p className="mt-3 text-xs sm:text-sm text-[#A1A1AA] max-w-lg font-normal">
          The multidisciplinary creators, engineers, and strategists driving precision across every dimension of SMITH WARRIORS.
        </p>

        <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-[#22D3EE] to-transparent mt-5 opacity-70" />
      </motion.div>

      {/* Responsive Grid: 3 columns on desktop (clean 3x2 for the 6 members), 2 on tablet, 1 on mobile */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.1,
              delayChildren: 0.15,
            },
          },
        }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 lg:gap-8"
      >
        {coreMembers.map((member) => (
          <MemberCard
            key={member.id}
            member={member}
            onSelect={(m) => setSelectedMember(m)}
          />
        ))}
      </motion.div>

      {/* Futuristic Lightbox Modal for Full View */}
      <AnimatePresence>
        {selectedMember && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedMember(null)}
            className="fixed inset-0 z-50 bg-[#101014]/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          >
            <motion.div
              initial={{ scale: 0.94, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 15 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#191920] rounded-3xl overflow-hidden max-w-lg w-full shadow-2xl border border-white/10 relative"
            >
              {/* Glowing Corner Accents */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-violet-500/20 rounded-full blur-2xl pointer-events-none" />

              {/* Image Preview Container */}
              <div className="relative max-h-[65vh] overflow-hidden bg-[#101014] flex items-center justify-center">
                <img
                  src={selectedMember.image}
                  alt={selectedMember.name}
                  className="w-full h-full object-contain max-h-[65vh]"
                />
                <button
                  onClick={() => setSelectedMember(null)}
                  className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-colors backdrop-blur-md border border-white/20"
                  aria-label="Close modal"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                <div className="absolute bottom-3 left-4 bg-[#101014]/80 backdrop-blur-md px-3 py-1 rounded-md border border-white/10 font-mono text-[10px] text-[#22D3EE]">
                  NODE {String(selectedMember.id).padStart(2, '0')} // ORIGINAL PORTRAIT
                </div>
              </div>

              {/* Details in Modal */}
              <div className="p-6 bg-[#191920]">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[10px] uppercase tracking-[0.25em] font-mono font-semibold text-[#8B5CF6]">
                    {selectedMember.department || "Core Team"}
                  </span>
                  {selectedMember.isLeader && (
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-violet-500/20 text-[#22D3EE] font-bold">
                      LEADERSHIP
                    </span>
                  )}
                </div>

                <h3 className="text-2xl font-bold text-[#F5F5F7] mt-1">
                  {selectedMember.name}
                </h3>
                
                <p className="text-xs font-mono text-[#A1A1AA] mt-1">
                  {selectedMember.role}
                </p>

                <div className="mt-5 pt-4 border-t border-white/[0.08] flex items-center justify-between text-xs text-[#A1A1AA] font-mono">
                  <span>Affiliation: SMITH WARRIORS</span>
                  <span className="text-[#22D3EE]">VERIFIED ASSET</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
