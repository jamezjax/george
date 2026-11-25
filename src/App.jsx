import React, { useState } from 'react';
import GenerativeCanvas from './components/GenerativeCanvas';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LeadershipSection from './components/LeadershipSection';
import TeamSection from './components/TeamSection';
import Footer from './components/Footer';
import { teamInfo, teamMembers as initialMembers } from './data/teamData';

export default function App() {
  const [members, setMembers] = useState(initialMembers);
  const [selectedModalMember, setSelectedModalMember] = useState(null);

  // Extract Captain and Vice Captain for the dedicated Leadership Core
  const captain = members.find((m) => m.leaderType === 'captain') || members.find((m) => m.id === 2);
  const viceCaptain = members.find((m) => m.leaderType === 'vice-captain') || members.find((m) => m.id === 7);

  return (
    <div className="relative min-h-screen bg-[#101014] text-[#F5F5F7] font-sans selection:bg-[#8B5CF6]/30 selection:text-white overflow-x-hidden">
      {/* Generative Interactive Canvas Background */}
      <GenerativeCanvas />

      {/* Futuristic Navigation Bar */}
      <Navbar teamName={teamInfo.name} logo={teamInfo.logo} />

      {/* Main Flow */}
      <main className="relative z-10">
        {/* 1. Hero Section */}
        <Hero teamInfo={teamInfo} />

        {/* 2. Dedicated Leadership Highlight (Captain & Vice-Captain) */}
        <LeadershipSection
          captain={captain}
          viceCaptain={viceCaptain}
          onSelect={(m) => setSelectedModalMember(m)}
        />

        {/* 3. Team Members Section */}
        <TeamSection
          members={members}
        />
      </main>

      {/* Footer Section */}
      <Footer teamInfo={teamInfo} />

      {/* Global Lightbox for Leadership Modal Clicks */}
      {selectedModalMember && (
        <div
          onClick={() => setSelectedModalMember(null)}
          className="fixed inset-0 z-50 bg-[#101014]/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-[#191920] rounded-3xl overflow-hidden max-w-lg w-full shadow-2xl border border-white/10 relative"
          >
            <div className="relative max-h-[65vh] overflow-hidden bg-[#101014] flex items-center justify-center">
              <img
                src={selectedModalMember.image}
                alt={selectedModalMember.name}
                className="w-full h-full object-contain max-h-[65vh]"
              />
              <button
                onClick={() => setSelectedModalMember(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-colors backdrop-blur-md border border-white/20"
                aria-label="Close modal"
              >
                ✕
              </button>
            </div>
            <div className="p-6 bg-[#191920]">
              <div className="flex items-center justify-between mb-1">
                <span className="text-[10px] uppercase tracking-[0.25em] font-mono font-semibold text-[#8B5CF6]">
                  {selectedModalMember.department || "Leadership Core"}
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-violet-500/20 text-[#22D3EE] font-bold">
                  {selectedModalMember.role}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-[#F5F5F7] mt-1">
                {selectedModalMember.name}
              </h3>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
