"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const pillarsData = [
  { id: "spom", name: "SPOM-D Nodes", color: "from-blue-500 to-cyan-400" },
  { id: "experience", name: "Experience", color: "from-neon-blue to-cyan-300" },
  { id: "quantum", name: "Quantum Algorithms", color: "from-emerald-400 to-teal-500" }
];

export default function PillarsSection() {
  const [selectedPillar, setSelectedPillar] = useState<string | null>(null);
  const [hoveredPillar, setHoveredPillar] = useState<string | null>(null);

  const activeFrontView = selectedPillar !== null;

  // Triangle coordinates for Top View
  const topCoords = {
    "experience": { x: 0, y: -142 },
    "spom": { x: -140, y: 100 },
    "quantum": { x: 140, y: 100 }
  };

  // Row coordinates for Front View
  const frontCoords = {
    "spom": { x: -180, y: 0 },
    "experience": { x: 0, y: 0 },
    "quantum": { x: 180, y: 0 }
  };

  // Precomputed line coordinates connecting the triangle vertices
  const lines = [
    { cx: -70, cy: -21, length: 280, angle: 120 }, // experience -> spom
    { cx: 0, cy: 100, length: 280, angle: 0 },         // spom -> quantum
    { cx: 70, cy: -21, length: 280, angle: -120 } // quantum -> experience
  ];

  return (
    <section id="pillars" className="py-24 relative overflow-hidden flex flex-col items-center min-h-[800px] z-10">
      <div className="w-full px-4 z-10 mb-16">
        <div className="text-center w-full">
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-transparent bg-clip-text bg-linear-to-r from-neon-blue via-white to-cyan-300 tracking-widest uppercase w-full block">
            Pillars of ENGN-F1
          </h2>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-lg md:text-xl">
            The foundational elements driving our intelligent systems.
          </p>
        </div>
      </div>

      {/* Main Layout Container */}
      <div className="relative w-full max-w-360 mx-auto flex items-center justify-center min-h-[500px]">
        {/* 3D Scene Container */}
        <motion.div 
          className="absolute h-[500px] flex items-center justify-center perspective-distant w-full max-w-4xl z-10 pointer-events-none"
          animate={{
            x: activeFrontView ? "-25%" : "0%",
          }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <motion.div
            animate={{
              rotateX: activeFrontView ? 0 : 60,
              scale: activeFrontView ? 1 : 0.85
            }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="relative w-full h-full flex items-center justify-center transform-style-3d pointer-events-auto"
          >
          {/* Triangle Lines (Only visible in top view) */}
          <AnimatePresence>
            {!activeFrontView && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 w-full h-full pointer-events-none"
              >
                {lines.map((l, i) => (
                  <div
                    key={i}
                    className="absolute top-1/2 left-1/2 h-[2px] bg-white/10 shadow-[0_0_10px_rgba(255,255,255,0.3)] pointer-events-none"
                    style={{
                      width: l.length,
                      transform: `translate(-50%, -50%) translate(${l.cx}px, ${l.cy}px) rotate(${l.angle}deg)`,
                    }}
                  />
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Pillars */}
          {pillarsData.map((pillar) => {
            const isSelected = selectedPillar === pillar.id;
            const topPos = topCoords[pillar.id as keyof typeof topCoords];
            const frontPos = frontCoords[pillar.id as keyof typeof frontCoords];
            
            return (
              <motion.div
                key={pillar.id}
                onClick={() => setSelectedPillar(pillar.id)}
                onMouseEnter={() => setHoveredPillar(pillar.id)}
                onMouseLeave={() => setHoveredPillar(null)}
                className="absolute top-1/2 left-1/2 outline-none"
                animate={{
                  x: `calc(-50% + ${activeFrontView ? frontPos.x : topPos.x}px)`,
                  y: `calc(-50% + ${activeFrontView ? frontPos.y : topPos.y}px)`,
                  z: activeFrontView ? 0 : 20,
                }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              >
                {/* Pillar / Vertex Container */}
                <motion.div
                  className={`relative flex flex-col items-center justify-center overflow-visible transition-all duration-300 group cursor-pointer backdrop-blur-xl outline-none ${isSelected ? 'drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]' : 'hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]'}`}
                  animate={{
                    width: activeFrontView ? 100 : 80,
                    height: activeFrontView ? 360 : 80,
                  }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                >
                  {/* Sliding Hover Border */}
                  {activeFrontView && hoveredPillar === pillar.id && (
                    <motion.div
                      layoutId="pillarHoverBorder"
                      className="absolute inset-0 border border-white/80 rounded-xl pointer-events-none z-20 shadow-[0_0_15px_rgba(255,255,255,0.4)]"
                      transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    />
                  )}

                  {/* FRONT VIEW PILLAR (Doric Style) */}
                  <motion.div 
                    className="absolute inset-0 flex flex-col items-center justify-between w-full h-full pointer-events-none"
                    initial={{ opacity: 0, scaleY: 0.5 }}
                    animate={{ 
                      opacity: activeFrontView ? 1 : 0,
                      scaleY: activeFrontView ? 1 : 0.5 
                    }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                  >
                    {/* CAPITAL (Top) */}
                    <div className="flex flex-col items-center w-full z-10">
                      <div className={`w-[120%] h-4 bg-linear-to-r ${pillar.color} rounded-sm shadow-[0_0_15px_rgba(255,255,255,0.2)] flex items-center justify-center`}>
                        <div className="w-[80%] h-[2px] bg-white/40 blur-[1px]"></div>
                      </div>
                      <div className="w-full h-3 bg-white/20 border-b border-black/50 backdrop-blur-sm mt-[2px]"></div>
                    </div>

                    {/* SHAFT */}
                    <div className="flex-1 w-[80%] my-1 flex justify-evenly bg-black/60 border-l border-r border-white/20 shadow-[inset_0_0_20px_rgba(0,0,0,0.9)] relative overflow-hidden backdrop-blur-md">
                       {/* Fluting lines */}
                       <div className="w-px h-full bg-white/10 shadow-[1px_0_2px_rgba(0,0,0,0.5)]"></div>
                       <div className="w-px h-full bg-white/20 shadow-[1px_0_2px_rgba(0,0,0,0.5)]"></div>
                       <div className="w-px h-full bg-white/30 shadow-[1px_0_2px_rgba(0,0,0,0.5)]"></div>
                       <div className="w-px h-full bg-white/20 shadow-[1px_0_2px_rgba(0,0,0,0.5)]"></div>
                       <div className="w-px h-full bg-white/10 shadow-[1px_0_2px_rgba(0,0,0,0.5)]"></div>
                       
                       {/* Subtle inner gradient to simulate roundness */}
                       <div className="absolute inset-0 bg-linear-to-r from-black/80 via-white/10 to-black/80 pointer-events-none"></div>
                       {/* Base Color Glow */}
                       <div className={`absolute inset-0 opacity-30 bg-linear-to-t ${pillar.color} ${isSelected ? 'opacity-50' : ''}`}></div>
                    </div>

                    {/* BASE */}
                    <div className="flex flex-col items-center w-full z-10">
                      <div className="w-full h-4 bg-white/20 backdrop-blur-sm border-t border-black/50 mb-[2px]"></div>
                      <div className={`w-[120%] h-6 bg-linear-to-r ${pillar.color} rounded-sm shadow-[0_0_15px_rgba(255,255,255,0.2)] flex items-center justify-center`}>
                        <div className="w-[80%] h-[2px] bg-black/30 blur-[1px]"></div>
                      </div>
                    </div>
                  </motion.div>

                  {/* TOP VIEW VERTEX */}
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center rounded-full border border-white/20 bg-black/60 backdrop-blur-xl pointer-events-none transition-all duration-300 group-hover:border-white group-hover:ring-2 group-hover:ring-white/80"
                    animate={{
                      opacity: activeFrontView ? 0 : 1,
                      scale: activeFrontView ? 0.5 : 1,
                    }}
                    transition={{ duration: 0.5 }}
                    style={{
                      boxShadow: "inset 0 0 20px rgba(255,255,255,0.6), inset 0 0 40px rgba(255,255,255,0.2), 0 0 20px rgba(255,255,255,0.4)"
                    }}
                  >
                    <div className={`absolute inset-0 bg-linear-to-tr ${pillar.color} blur-xl opacity-80 rounded-full`} />
                    <div className="w-6 h-6 bg-white rounded-full shadow-[0_0_25px_#fff]" />
                  </motion.div>

                  {/* Name Label */}
                  <motion.div 
                    className="absolute inset-x-0 -bottom-16 flex justify-center w-full"
                    animate={{ 
                      opacity: 1,
                      y: activeFrontView ? 0 : -20
                    }}
                    transition={{ duration: 0.5, delay: activeFrontView ? 0.3 : 0 }}
                  >
                    <span className={`text-sm md:text-base text-center font-bold tracking-widest uppercase whitespace-nowrap pl-[0.1em] transition-colors duration-300 ${activeFrontView ? (isSelected ? 'text-white' : 'text-gray-300 group-hover:text-white') : 'text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]'}`}>
                      {pillar.name}
                    </span>
                  </motion.div>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
          </motion.div>
        

        {/* Description Box */}
        <AnimatePresence mode="wait">
          {selectedPillar && (
            <motion.div
              key={selectedPillar}
              initial={{ opacity: 0, x: 50, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -50, scale: 0.95 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="absolute right-4 md:right-12 top-1/2 -translate-y-1/2 w-full max-w-xl z-20 pointer-events-auto"
            >
              <div className="relative p-10 rounded-2xl border border-white/20 bg-black/80 backdrop-blur-xl shadow-[0_0_50px_rgba(255,255,255,0.05)] min-h-[350px] flex flex-col justify-center overflow-hidden group">
                {/* Subtle glowing border effect based on selected pillar color */}
                <div className={`absolute inset-0 opacity-10 bg-linear-to-r ${pillarsData.find(p => p.id === selectedPillar)?.color} blur-2xl pointer-events-none transition-opacity duration-500`}></div>
                
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedPillar(null);
                  }}
                  className="absolute top-6 right-6 text-gray-500 hover:text-white transition-colors z-10"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                </button>
                
                <h3 className={`text-3xl font-bold text-transparent bg-clip-text bg-linear-to-r ${pillarsData.find(p => p.id === selectedPillar)?.color} mb-6`}>
                  {pillarsData.find(p => p.id === selectedPillar)?.name}
                </h3>
                
                <div className="w-full h-full text-gray-400 text-base leading-relaxed flex-1 flex flex-col">
                  {/* Empty text box for future content */}
                  <div className="flex-1 min-h-[200px] border border-dashed border-gray-700/50 rounded-lg flex items-center justify-center bg-gray-900/20">
                    <span className="text-gray-500 font-light italic text-center px-4">Content will be placed here hereafter...</span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
