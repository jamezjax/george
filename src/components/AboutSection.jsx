import React from 'react';
import { motion } from 'framer-motion';

export default function AboutSection({ teamInfo }) {
  const { name, description } = teamInfo;

  return (
    <section id="about" className="py-20 px-6 sm:px-8 border-y border-stone-200/60 bg-white/60">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-4"
        >
          <span className="text-[11px] uppercase tracking-[0.25em] font-semibold text-[#263B53]">
            Our Identity & Purpose
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#202124] tracking-tight">
            Forged in Unity. Built to Endure.
          </h2>
          <p className="text-stone-600 leading-relaxed text-sm sm:text-base max-w-2xl mx-auto pt-2">
            {description}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
