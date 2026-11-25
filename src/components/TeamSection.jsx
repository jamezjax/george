import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import MemberCard from './MemberCard';

export default function TeamSection({ members }) {
  const [selectedMember, setSelectedMember] = useState(null);

  return (
    <section id="team" className="py-24 sm:py-32 px-6 sm:px-8 max-w-7xl mx-auto relative">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col items-center text-center mb-16 sm:mb-20"
      >
        <span className="text-xs uppercase tracking-[0.28em] font-bold text-[#C59B3F] mb-3">
          Our Collective
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#202124]">
          Team Members
        </h2>
        <p className="mt-4 text-sm sm:text-base text-[#777777] max-w-xl font-normal leading-relaxed">
          The people who shape our identity, bring strength to our vision, and drive our shared journey forward.
        </p>
        <div className="w-12 h-[2px] bg-[#263B53] mt-6 opacity-60" />
      </motion.div>

      {/* Responsive Grid: 4 columns on desktop, 2-3 on tablet, 1-2 on mobile */}
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
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7 lg:gap-8"
      >
        {members.map((member) => (
          <MemberCard
            key={member.id}
            member={member}
            onSelect={(m) => setSelectedMember(m)}
          />
        ))}
      </motion.div>

      {/* Lightbox Modal for Full View */}
      <AnimatePresence>
        {selectedMember && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedMember(null)}
            className="fixed inset-0 z-50 bg-[#202124]/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
          >
            <motion.div
              initial={{ scale: 0.94, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 15 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl overflow-hidden max-w-lg w-full shadow-2xl border border-stone-200"
            >
              <div className="relative max-h-[65vh] overflow-hidden bg-stone-100 flex items-center justify-center">
                <img
                  src={selectedMember.image}
                  alt={selectedMember.name}
                  className="w-full h-full object-contain max-h-[65vh]"
                />
                <button
                  onClick={() => setSelectedMember(null)}
                  className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black/90 transition-colors"
                  aria-label="Close modal"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="p-6 text-center">
                <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-[#C59B3F]">
                  {selectedMember.department || "Core Member"}
                </span>
                <h3 className="text-2xl font-bold text-[#202124] mt-1">
                  {selectedMember.name}
                </h3>
                <p className="text-sm text-[#777777] font-medium mt-1">
                  {selectedMember.role}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
