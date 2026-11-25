import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TeamSection from './components/TeamSection';
import Footer from './components/Footer';
import { teamInfo, teamMembers as initialMembers } from './data/teamData';

export default function App() {
  const [members, setMembers] = useState(initialMembers);
  const [isEditorOpen, setIsEditorOpen] = useState(false);

  const handleUpdateMember = (id, field, value) => {
    const updated = members.map((m) =>
      m.id === id ? { ...m, [field]: value } : m
    );
    setMembers(updated);
  };

  const handleReset = () => {
    setMembers(initialMembers);
    localStorage.removeItem('yazeen_team_members');
  };

  return (
    <div className="min-h-screen bg-[#F7F7F4] text-[#202124] flex flex-col font-sans selection:bg-[#263B53] selection:text-white">
      {/* Navigation */}
      <Navbar teamName={teamInfo.name} logo={teamInfo.logo} />

      {/* Hero & Team Sections */}
      <main className="flex-grow">
        <Hero teamInfo={teamInfo} />
        <TeamSection members={members} />
      </main>

      {/* Footer Section */}
      <Footer teamInfo={teamInfo} />

      {/* Subtle Admin Edit Toggle (discreet in bottom corner) */}
      <div className="fixed bottom-4 right-4 z-40 opacity-40 hover:opacity-100 transition-opacity">
        <button
          onClick={() => setIsEditorOpen(true)}
          className="flex items-center gap-1.5 bg-white/90 backdrop-blur-md text-[#202124] border border-stone-200/90 px-3 py-1.5 rounded-full shadow-sm text-[11px] font-semibold tracking-wider hover:bg-stone-50 transition-colors"
          title="Edit Roster Details"
        >
          <svg className="w-3.5 h-3.5 text-[#C59B3F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
          </svg>
          <span>Edit Roster</span>
        </button>
      </div>

      {/* Quick Names Editor Modal */}
      {isEditorOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[85vh] flex flex-col overflow-hidden border border-stone-200">
            <div className="p-5 border-b border-stone-200 flex items-center justify-between bg-stone-50">
              <div>
                <h3 className="text-lg font-bold text-[#202124]">Team Roster Editor</h3>
                <p className="text-xs text-[#777777]">Modify names and designations</p>
              </div>
              <button
                onClick={() => setIsEditorOpen(false)}
                className="w-8 h-8 rounded-full bg-stone-200 hover:bg-stone-300 flex items-center justify-center text-stone-600 transition-colors"
              >
                ✕
              </button>
            </div>

            <div className="p-5 overflow-y-auto space-y-4 divide-y divide-stone-100">
              {members.map((member) => (
                <div key={member.id} className="pt-4 first:pt-0 flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl overflow-hidden bg-stone-100 flex-shrink-0 border border-stone-200">
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <div>
                      <label className="block text-[10px] font-bold text-stone-500 uppercase tracking-wider mb-1">
                        Member #{member.id} Full Name
                      </label>
                      <input
                        type="text"
                        value={member.name}
                        onChange={(e) => handleUpdateMember(member.id, 'name', e.target.value)}
                        className="w-full text-xs font-semibold px-3 py-2 bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#263B53]"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold text-stone-500 uppercase tracking-wider mb-1">
                        Role / Designation
                      </label>
                      <input
                        type="text"
                        value={member.role}
                        onChange={(e) => handleUpdateMember(member.id, 'role', e.target.value)}
                        className="w-full text-xs font-medium px-3 py-2 bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#263B53]"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 border-t border-stone-200 bg-stone-50 flex items-center justify-between">
              <button
                onClick={handleReset}
                className="text-xs text-stone-500 hover:text-red-600 underline font-medium"
              >
                Reset to Original
              </button>
              <button
                onClick={() => setIsEditorOpen(false)}
                className="px-5 py-2 bg-[#202124] hover:bg-[#263B53] text-white rounded-lg text-xs font-bold uppercase tracking-wider transition-colors"
              >
                Save & Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
