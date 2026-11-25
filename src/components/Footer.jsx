import React from 'react';

export default function Footer({ teamInfo }) {
  const { name, logo, established } = teamInfo;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-stone-200/80 bg-[#F7F7F4] py-14 px-6 sm:px-8">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center space-y-6">
        {/* Team Logo & Name */}
        <div className="flex flex-col items-center space-y-3">
          <div className="w-12 h-12 rounded-full overflow-hidden border border-stone-300/80 p-0.5 bg-white shadow-sm">
            <img
              src={logo}
              alt={`${name} Logo`}
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <span className="text-lg sm:text-xl font-extrabold tracking-[0.18em] sm:tracking-[0.22em] text-[#202124] uppercase">
            {name}
          </span>
        </div>

        {/* Short Closing Statement */}
        <p className="text-xs sm:text-sm text-[#777777] max-w-md font-normal leading-relaxed">
          United by purpose and driven by excellence. Dedicated to achieving greatness together.
        </p>

        {/* Copyright info */}
        <div className="pt-4 border-t border-stone-200/60 w-full max-w-xs text-center">
          <p className="text-[11px] text-[#777777] tracking-wider uppercase font-medium">
            © {currentYear} {name}. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
