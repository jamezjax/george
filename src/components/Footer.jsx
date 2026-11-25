import React from 'react';

export default function Footer({ teamInfo }) {
  const { name, logo, tagline } = teamInfo;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.08] bg-[#101014] py-14 px-6 sm:px-8 relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center space-y-6">
        {/* Team Logo & Name */}
        <div className="flex flex-col items-center space-y-3">
          <div className="w-12 h-12 rounded-xl overflow-hidden p-0.5 bg-gradient-to-br from-[#8B5CF6] via-[#3B82F6] to-[#22D3EE] shadow-[0_0_20px_rgba(139,92,246,0.3)]">
            <div className="w-full h-full rounded-[10px] bg-[#101014] p-0.5 flex items-center justify-center">
              <img
                src={logo}
                alt={`${name} Logo`}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
          <span className="text-lg sm:text-xl font-extrabold tracking-[0.2em] text-[#F5F5F7] uppercase">
            {name}
          </span>
          <span className="text-[10px] font-mono tracking-widest text-[#22D3EE] uppercase -mt-2">
            {tagline}
          </span>
        </div>

        {/* Short Closing Statement */}
        <p className="text-xs text-[#A1A1AA] max-w-md font-normal leading-relaxed">
          United by purpose, driven by accuracy, and sculpting the future of digital art ecosystems.
        </p>

        {/* Telemetry metadata & Copyright */}
        <div className="pt-6 border-t border-white/[0.06] w-full max-w-sm flex flex-col items-center gap-2">
          <div className="flex items-center gap-2 text-[10px] font-mono text-[#A1A1AA]/70">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>NEURAL CLUSTER: ACTIVE</span>
            <span>•</span>
            <span>NODES: 09</span>
          </div>
          <p className="text-[10px] font-mono text-[#A1A1AA]/60 tracking-wider uppercase">
            © {currentYear} {name}. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
