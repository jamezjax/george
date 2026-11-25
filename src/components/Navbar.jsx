import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Navbar({ teamName, logo }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#F7F7F4]/90 backdrop-blur-md border-b border-stone-200/60 shadow-[0_2px_15px_-4px_rgba(0,0,0,0.03)] py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Brand identity */}
        <a href="#" className="flex items-center gap-3.5 group">
          <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-full overflow-hidden border border-stone-300/80 p-0.5 bg-white shadow-sm transition-transform duration-300 group-hover:scale-105">
            <img
              src={logo}
              alt={`${teamName} Logo`}
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-sm sm:text-base md:text-lg font-extrabold tracking-[0.14em] sm:tracking-[0.18em] text-[#202124] group-hover:text-[#263B53] transition-colors whitespace-nowrap">
              {teamName}
            </span>
            <span className="text-[9px] uppercase tracking-[0.25em] text-[#777777] font-medium -mt-0.5">
              Official Team
            </span>
          </div>
        </a>

        {/* Minimal Navigation */}
        <nav className="flex items-center gap-6 sm:gap-8 text-xs sm:text-sm font-medium tracking-wide">
          <a
            href="#about"
            className="text-[#777777] hover:text-[#202124] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#263B53] hover:after:w-full after:transition-all after:duration-300"
          >
            About
          </a>
          <a
            href="#team"
            className="text-[#777777] hover:text-[#202124] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#263B53] hover:after:w-full after:transition-all after:duration-300"
          >
            Members
          </a>
          <a
            href="#team"
            className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-[#263B53] hover:bg-[#1B2A3C] rounded-full transition-all duration-300 shadow-sm hover:shadow-md"
          >
            Meet The Team
          </a>
        </nav>
      </div>
    </motion.header>
  );
}
