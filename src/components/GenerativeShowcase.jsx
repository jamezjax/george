import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function GenerativeShowcase() {
  const [activePreset, setActivePreset] = useState(0);

  const presets = [
    {
      id: "preset-1",
      title: "Neural Chromatics",
      prompt: "prompt: { 'style': 'prismatic-futurism', 'lighting': 'volumetric-violet', 'accuracy': 0.998 }",
      palette: ["#8B5CF6", "#3B82F6", "#22D3EE"],
      stats: { latency: "14ms", iterations: "1,024", entropy: "0.12" },
      description: "Fluid harmonic gradients interacting with mathematical vector surfaces."
    },
    {
      id: "preset-2",
      title: "Cybernetic Monoliths",
      prompt: "prompt: { 'structure': 'brutalist-quantum', 'glow': 'electric-cyan', 'density': 'high' }",
      palette: ["#22D3EE", "#3B82F6", "#101014"],
      stats: { latency: "18ms", iterations: "2,048", entropy: "0.08" },
      description: "Structural dark geometries engineered with micron-level structural accuracy."
    },
    {
      id: "preset-3",
      title: "Luminous Vectors",
      prompt: "prompt: { 'tensor': 'flow-fields', 'energy': 'hyper-radiance', 'coherence': 'max' }",
      palette: ["#EC4899", "#8B5CF6", "#3B82F6"],
      stats: { latency: "12ms", iterations: "4,096", entropy: "0.04" },
      description: "High-frequency generative trajectories shaping digital illumination."
    }
  ];

  const current = presets[activePreset];

  return (
    <section id="ecosystem" className="py-20 sm:py-28 px-6 sm:px-8 max-w-7xl mx-auto relative z-10">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center text-center mb-14"
      >
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-violet-500/10 border border-violet-500/30 text-violet-400 text-[10px] font-mono tracking-widest uppercase font-bold mb-3">
          <span>⚙</span> Generative Studio Architecture
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#F5F5F7]">
          Digital Art Ecosystem
        </h2>

        <p className="mt-3 text-xs sm:text-sm text-[#A1A1AA] max-w-lg font-normal">
          Where algorithm meets artistry. Explore the generative creative pipeline engineered by the SMITH WARRIORS collective.
        </p>

        <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-[#8B5CF6] to-transparent mt-5 opacity-70" />
      </motion.div>

      {/* Main Showcase Panel */}
      <div className="bg-[#191920]/90 rounded-3xl border border-white/[0.08] shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden backdrop-blur-xl">
        {/* Preset Selector Tabs */}
        <div className="flex border-b border-white/[0.08] overflow-x-auto bg-[#101014]/60 p-2 sm:p-3 gap-2">
          {presets.map((preset, idx) => (
            <button
              key={preset.id}
              onClick={() => setActivePreset(idx)}
              className={`flex-1 min-w-[160px] py-2.5 px-4 rounded-xl text-xs font-mono tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-2 ${
                activePreset === idx
                  ? 'bg-[#20202A] text-white border border-white/20 shadow-md shadow-violet-900/20 font-bold'
                  : 'text-[#A1A1AA] hover:text-white hover:bg-white/[0.02]'
              }`}
            >
              <span
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: preset.palette[0] }}
              />
              <span>{preset.title}</span>
            </button>
          ))}
        </div>

        {/* Content Body: Generative Canvas Preview + Code/Tensor Panel */}
        <div className="p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left: Generative 3D Canvas / Visual Simulation */}
          <div className="lg:col-span-7 relative">
            <div className="relative aspect-[16/10] sm:aspect-[16/9] rounded-2xl overflow-hidden bg-[#101014] border border-white/10 flex items-center justify-center p-6 group">
              {/* Animated Aurora Glow based on active preset */}
              <motion.div
                key={current.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 0.85, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="absolute inset-0 blur-3xl pointer-events-none"
                style={{
                  background: `radial-gradient(circle at 50% 50%, ${current.palette[0]}55, ${current.palette[1]}33, transparent 70%)`
                }}
              />

              {/* Generative Concentric Shapes */}
              <div className="relative z-10 flex flex-col items-center justify-center text-center">
                <div className="relative w-32 h-32 sm:w-40 sm:h-40 flex items-center justify-center">
                  <div className="absolute inset-0 rounded-full border border-dashed border-white/20 animate-[spin_30s_linear_infinite]" />
                  <div
                    className="absolute inset-3 rounded-full border border-white/30 animate-[spin_20s_linear_infinite_reverse]"
                    style={{ borderColor: current.palette[0] }}
                  />
                  <div
                    className="w-20 h-20 rounded-2xl rotate-45 border backdrop-blur-md flex items-center justify-center shadow-2xl transition-all duration-700"
                    style={{
                      background: `linear-gradient(135deg, ${current.palette[0]}40, ${current.palette[1]}20)`,
                      borderColor: current.palette[0]
                    }}
                  >
                    <span className="text-xl sm:text-2xl font-bold font-mono text-white -rotate-45">
                      ◈
                    </span>
                  </div>
                </div>

                <div className="mt-4 font-mono text-xs tracking-widest text-white/90 font-semibold uppercase">
                  {current.title}
                </div>
                <div className="text-[11px] text-[#A1A1AA] max-w-sm mt-1">
                  {current.description}
                </div>
              </div>

              {/* Bottom Telemetry Bar */}
              <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-[10px] font-mono text-[#A1A1AA] bg-[#101014]/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10">
                <span className="flex items-center gap-1.5 text-[#22D3EE]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#22D3EE] animate-pulse" />
                  SYNTH ENGINE ONLINE
                </span>
                <span>LATENCY: {current.stats.latency}</span>
                <span className="hidden sm:inline">ENTROPY: {current.stats.entropy}</span>
              </div>
            </div>
          </div>

          {/* Right: Technical Generative Metadata & Controls */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div>
              <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#8B5CF6] font-bold">
                Tensor Execution Log
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#F5F5F7] mt-1">
                Real-Time Neural Synthesis
              </h3>
              <p className="text-xs text-[#A1A1AA] mt-2 leading-relaxed">
                High-dimensional generative pipelines calibrated by SMITH WARRIORS to guarantee maximum aesthetic fidelity and structural accuracy.
              </p>
            </div>

            {/* Prompt Code Block */}
            <div className="bg-[#101014] rounded-xl p-4 border border-white/[0.08] font-mono text-xs text-[#22D3EE]/90 overflow-x-auto shadow-inner">
              <div className="text-[10px] text-white/40 mb-1.5">// Execution Matrix</div>
              <code>{current.prompt}</code>
            </div>

            {/* Metrics Chips */}
            <div className="grid grid-cols-3 gap-3">
              <div className="bg-[#20202A] p-3 rounded-xl border border-white/[0.06] text-center">
                <div className="text-xs font-mono font-bold text-[#F5F5F7]">{current.stats.iterations}</div>
                <div className="text-[9px] font-mono uppercase text-[#A1A1AA] mt-0.5">Steps</div>
              </div>
              <div className="bg-[#20202A] p-3 rounded-xl border border-white/[0.06] text-center">
                <div className="text-xs font-mono font-bold text-[#22D3EE]">{current.stats.latency}</div>
                <div className="text-[9px] font-mono uppercase text-[#A1A1AA] mt-0.5">Render</div>
              </div>
              <div className="bg-[#20202A] p-3 rounded-xl border border-white/[0.06] text-center">
                <div className="text-xs font-mono font-bold text-[#8B5CF6]">99.8%</div>
                <div className="text-[9px] font-mono uppercase text-[#A1A1AA] mt-0.5">Accuracy</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
