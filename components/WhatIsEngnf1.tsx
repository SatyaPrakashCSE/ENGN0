"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const components = [
  {
    id: "not-same",
    title: "A System That Does Not Stay the Same",
    description: "\"Most systems operate. ENGN-F1 accumulates experience.\"",
    fullDesc: "ENGN-F1 is built around a simple but powerful idea: “Operational experience should not disappear after execution.”\nEvery system signature carries behavioral intelligence that often remains unpreserved within operational environments that fades once the event passes.\nENGN-F1 changes that by retaining raw operational signatures in their anomalous and behavioral form without flattening them through excessive normalization or rigid weighting structures.\nInstead of reducing operational behavior into simplified abstractions, the system preserves executional patterns as evolving operational memory, allowing intelligence to continuously grow from system behavior itself.",
  },
  {
    id: "intelligence",
    title: "Operational Experience Becomes Intelligence",
    description: "\"The more the system experiences, the more contextually aware it becomes.\"",
    fullDesc: "ENGN-F1 interprets live operational activity as a continuously evolving execution flow rather than isolated machine events.\nAs operational conditions repeat across environments, the system begins recognizing deeper execution characteristics, environmental shifts, and recurring anomaly structures through previously observed system behavior.\nOver time, this accumulated operational understanding allows responses to become increasingly contextual, adaptive, and environment-aware without depending on repeated retraining or external supervision.\nThis continuously evolving awareness layer also strengthens anomaly recognition and cybersecurity monitoring by identifying subtle behavioral deviations across operational environments before they escalate into larger execution disruptions.",
  },
  {
    id: "evolve",
    title: "A Change in How Systems Evolve",
    description: "\"For the first time, infrastructure begins learning from reality itself.\"",
    fullDesc: "Traditional systems depended heavily on predefined instructions, manual supervision, and continuous human intervention to handle changing operational conditions.\nIntelligence remained external to the system being constantly fed, updated, and controlled from outside.\nENGN-F1 introduces a computing paradigm where systems develop operational understanding directly through live execution, environmental interaction, and accumulated experience.\nInstead of waiting for instructions, systems begin recognizing patterns, adapting to conditions, and responding contextually through continuously evolving operational intelligence.\nThe infrastructure no longer remains a passive execution layer rather it progressively becomes adaptive, aware, and operationally self-evolving over time.",
  },
  {
    id: "shift",
    title: "The Shift Has Already Started",
    description: "\"The future advantage will not belong to systems that process more data; but to systems that accumulate more operational experience.\"",
    fullDesc: "As operational complexity increases across industries, static infrastructure becomes increasingly difficult to sustain.\nENGN-F1 represents the beginning of a transition toward systems that evolve continuously, adapt contextually and strengthen themselves through execution itself.\nThe organizations building this operational intelligence layer early will define how adaptive systems function in the future.",
  },
];

const NeuralNode = ({ isHovered, size = "large" }: { isHovered: boolean, size?: "large" | "small" }) => {
  const containerClass = size === "large" ? "w-28 h-28 md:w-36 md:h-36 mb-8" : "w-16 h-16 md:w-20 md:h-20 shrink-0";
  const innerClass = size === "large" ? "inset-3 md:inset-4" : "inset-2";
  const coreClass = size === "large" ? "inset-8 md:inset-10" : "inset-5 md:inset-6";

  return (
    <div className={`relative flex items-center justify-center ${containerClass}`}>
      <motion.div 
        animate={{ rotate: 360 }} 
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 rounded-full border border-dashed border-white/20"
      ></motion.div>
      <motion.div 
        animate={{ rotate: -360 }} 
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className={`absolute ${innerClass} rounded-full border border-neon-blue/40`}
      ></motion.div>
      <motion.div 
        animate={{ scale: isHovered ? 1.3 : 1, opacity: isHovered ? 1 : 0.4 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`absolute ${coreClass} bg-linear-to-tr from-cyan-400 to-neon-blue rounded-full blur-sm shadow-[0_0_30px_rgba(0,240,255,0.8)]`}
      ></motion.div>
      <div className="absolute w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_10px_white]"></div>
    </div>
  );
};

const NodeCard = ({ comp, onClick }: { comp: typeof components[0], onClick: () => void }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <motion.div
      className="relative group bg-gray-950/40 backdrop-blur-xl border border-white/10 p-8 md:p-12 rounded-[2.5rem] flex flex-col items-center text-center cursor-pointer overflow-hidden transition-all duration-500 hover:border-cyan-400/40 hover:shadow-[0_0_50px_rgba(0,240,255,0.1)]"
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -5 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-linear-to-r from-transparent via-cyan-400/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="absolute inset-0 bg-linear-to-b from-cyan-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

      <NeuralNode isHovered={isHovered} size="large" />

      <h3 className="text-xl md:text-2xl font-bold text-gray-300 group-hover:text-white transition-colors leading-tight mb-4 z-10">
        {comp.title}
      </h3>
      
      <p className="text-xs md:text-sm tracking-widest uppercase text-gray-600 group-hover:text-neon-blue transition-colors z-10 font-semibold">
        Explore Node
      </p>
    </motion.div>
  );
};

export default function WhatIsEngnf1() {
  const [activeCard, setActiveCard] = useState<string | null>(null);

  useEffect(() => {
    if (activeCard) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeCard]);

  return (
    <section id="what-is-engnf1" className="min-h-screen bg-transparent py-32 px-4 md:px-12 relative overflow-hidden flex flex-col justify-center">
      {/* Ambient background glows */}
      <div className="absolute top-0 left-0 w-50 h-50 bg-neon-blue/5 blur-[150px] rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-50 h-50 bg-cyan-400/5 blur-[150px] rounded-full pointer-events-none translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto w-full relative z-10 flex flex-col items-center">
        
        {/* Centered Heading */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl lg:text-[5rem] font-black tracking-[0.2em] text-center mb-24 text-transparent bg-clip-text bg-linear-to-b from-white via-gray-300 to-gray-700 drop-shadow-2xl uppercase"
        >
          WHAT IS ENGN-F1
        </motion.h2>

        {/* Symmetrical 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 w-full max-w-5xl">
          {components.map((comp) => (
            <NodeCard key={comp.id} comp={comp} onClick={() => setActiveCard(comp.id)} />
          ))}
        </div>

        {/* Modal Overlay */}
        <AnimatePresence>
          {activeCard && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center px-4 md:px-8"
            >
              <div className="absolute inset-0 bg-black/80 backdrop-blur-md" onClick={() => setActiveCard(null)}></div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 30 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                data-lenis-prevent
                className="relative w-full max-w-4xl max-h-[85vh] overflow-y-auto bg-gray-950/80 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] p-8 md:p-14 shadow-[0_0_100px_rgba(0,240,255,0.15)] scrollbar-hide"
              >
                {/* Decorative background glow inside modal */}
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-neon-blue/20 blur-[100px] rounded-full pointer-events-none"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-400/10 blur-[100px] rounded-full pointer-events-none"></div>

                <button 
                  onClick={() => setActiveCard(null)}
                  className="absolute top-6 right-6 md:top-8 md:right-8 text-gray-500 hover:text-white transition-colors bg-white/5 hover:bg-white/10 p-3 rounded-full z-10"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                {(() => {
                  const comp = components.find(c => c.id === activeCard);
                  if (!comp) return null;
                  const paragraphs = comp.fullDesc.split('\n');

                  return (
                    <div className="relative z-10 flex flex-col h-full">
                      <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-8 mb-10">
                        <NeuralNode isHovered={true} size="small" />
                        <h2 className="text-3xl md:text-5xl font-black text-transparent bg-clip-text bg-linear-to-r from-white via-gray-200 to-gray-500 leading-tight">
                          {comp.title}
                        </h2>
                      </div>
                      
                      <div className="bg-linear-to-r from-neon-blue/10 to-transparent border-l-4 border-l-neon-blue rounded-r-2xl p-6 md:p-8 mb-10">
                        <p className="text-cyan-300 italic text-lg md:text-2xl font-medium leading-relaxed">
                          {comp.description}
                        </p>
                      </div>
                      
                      <div className="space-y-6 text-gray-300 leading-relaxed font-light md:text-lg">
                        {paragraphs.map((p, i) => (
                          <p key={i}>{p}</p>
                        ))}
                      </div>
                    </div>
                  );
                })()}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Tagline at the end */}
        <div className="mt-28 flex justify-center w-full">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative group w-full max-w-4xl"
          >
            <div className="absolute inset-0 bg-linear-to-r from-neon-blue/20 via-cyan-400/20 to-neon-blue/20 blur-2xl rounded-full opacity-40 group-hover:opacity-80 transition-opacity duration-700 pointer-events-none"></div>
            <div className="relative px-8 py-6 border border-white/10 bg-black/60 backdrop-blur-2xl rounded-[2.5rem] shadow-2xl flex flex-col md:flex-row items-center justify-center gap-4 text-center md:text-left">
              <span className="text-2xl md:text-3xl font-black text-transparent bg-clip-text bg-linear-to-r from-neon-blue to-cyan-300 tracking-wider">
                ENGN-F1.
              </span>
              <span className="text-gray-400 text-sm md:text-lg italic font-light">
                “Transforming operational experience into continuously evolving intelligence.”
              </span>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
