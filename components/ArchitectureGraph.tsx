"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const nodes = [
  { 
    id: "signals", 
    title: "Where Operational Signals Become Intelligence", 
    shortDesc: "ENGN-F1 operates as a distributed intelligence layer embedded directly inside live operational environments", 
    fullDesc: "Every operational environment continuously generates signals through logs, workflows, traces, machine behavior, and execution activity.\nMost systems simply observe these signals as isolated events. ENGN-F1 interprets them as evolving operational behavior.\nAs environments shift in real time, the system continuously identifies emerging disruptions, behavioral deviations, and execution instability directly from live operational conditions.\nInstead of relying on static assumptions, operational understanding develops dynamically from the environment itself." 
  },
  { 
    id: "activation", 
    title: "The Activation of Operational Intelligence", 
    shortDesc: "The moment disruption appears, intelligence begins coordinating around the environment", 
    fullDesc: "Once operational behavior begins deviating from established governance boundaries, the ENGN-F1 engine correlates patterns across execution layers to identify the underlying operational issue.\nRather than reacting only to surface anomalies, the system interprets contextual relationships between behavioral signatures in real time.\nThis allows the engine to determine the most reliable corrective pathway using accumulated operational experience and deterministic execution logic." 
  },
  { 
    id: "spom-d", 
    title: "SPOM-D and Distributed Execution", 
    shortDesc: "Operational intelligence becomes more reliable when execution remains local to the environment experiencing the problem", 
    fullDesc: "At the center of ENGN-F1 is SPOM-D — the Specific Problem Operating Model Distribution Engine.\nInstead of depending on a centralized intelligence layer, ENGN-F1 distributes intelligence through localized SPOM nodes embedded across operational environments.\nEach SPOM node functions as an autonomous micro-node of Experience-Based Intelligence responsible for a specific operational zone.\nThese nodes continuously observe local execution behavior, coordinate through swarm-based intelligence, and determine contextually stable responses before intervention occurs.\nThis distributed architecture allows intelligence to remain directly connected to live execution rather than operating remotely from it." 
  },
  { 
    id: "action", 
    title: "Deterministic Action Inside Live Systems", 
    shortDesc: "ENGN-F1 moves beyond observation by enabling operational intervention directly inside the system itself", 
    fullDesc: "Once corrective behavior is selected, SPOM nodes execute deterministic operational actions within the affected environment.\nEvery intervention remains traceable, auditable, and reversible throughout the execution cycle.\nInstead of depending on repeated human coordination, the infrastructure itself becomes capable of adaptive operational correction through distributed intelligence embedded directly within the system." 
  }
];

const HyperCube = ({ isHovered, size = "large" }: { isHovered: boolean, size?: "large" | "small" }) => {
  const containerClass = size === "large" ? "w-16 h-16 md:w-20 md:h-20" : "w-12 h-12 md:w-16 md:h-16 shrink-0";
  const cubeClass = size === "large" ? "w-12 h-12 md:w-16 md:h-16" : "w-10 h-10 md:w-12 md:h-12";

  return (
    <div className={`relative flex items-center justify-center perspective ${containerClass}`}>
      <motion.div
        animate={{ 
          rotateX: isHovered ? 180 : 360, 
          rotateY: isHovered ? -180 : 360,
          scale: isHovered ? 1.15 : 1 
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className={`${cubeClass} border border-cyan-400/50 preserve-3d shadow-[0_0_20px_#00f0ff] bg-cyan-400/5 flex items-center justify-center`}
      >
        <motion.div
          animate={{ rotateX: -360, rotateY: -360 }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
          className="w-[70%] h-[70%] border border-neon-blue/80 preserve-3d bg-neon-blue/20 flex items-center justify-center backdrop-blur-xs"
        >
          <div className={`w-2 h-2 bg-white rounded-full shadow-[0_0_15px_white] transition-transform duration-500 ${isHovered ? 'scale-150 bg-neon-blue' : 'scale-100'}`}></div>
        </motion.div>
      </motion.div>
      <style jsx>{`
        .perspective { perspective: 800px; }
        .preserve-3d { transform-style: preserve-3d; }
      `}</style>
    </div>
  );
};

const GlassCard = ({ node, index, isHovered }: any) => (
  <motion.div
    whileHover={{ y: -5 }}
    whileTap={{ scale: 0.98 }}
    className={`relative bg-gray-950/80 backdrop-blur-2xl border p-6 md:p-8 rounded-[2rem] flex flex-col items-start transition-all duration-500 overflow-hidden w-full h-full
      ${isHovered ? 'border-cyan-400/50 shadow-[0_0_40px_rgba(0,240,255,0.15)]' : 'border-white/10'}`}
  >
    <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-linear-to-r from-transparent via-cyan-400/80 to-transparent transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`}></div>
    <div className={`absolute inset-0 bg-linear-to-b from-cyan-400/5 to-transparent pointer-events-none transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`}></div>

    <span className={`font-mono text-xs tracking-widest block mb-3 uppercase transition-opacity ${isHovered ? 'text-neon-blue opacity-100' : 'text-gray-500 opacity-80'}`}>
      Phase 0{index + 1}
    </span>
    <h3 className={`text-xl md:text-2xl font-bold leading-tight mb-4 transition-colors ${isHovered ? 'text-white' : 'text-gray-300'}`}>
      {node.title}
    </h3>
    <p className={`text-sm leading-relaxed mb-6 transition-colors ${isHovered ? 'text-gray-300' : 'text-gray-500'}`}>
      {node.shortDesc}
    </p>

    <div className={`mt-auto flex items-center gap-2 text-xs tracking-widest uppercase font-semibold transition-colors ${isHovered ? 'text-neon-blue' : 'text-gray-600'}`}>
      <span>Examine Logic</span>
      <svg className={`w-4 h-4 transform transition-transform ${isHovered ? 'translate-x-1' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
      </svg>
    </div>
  </motion.div>
);

function DesktopNode({ node, index, onClick, isEven }: any) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="flex-1 flex flex-col items-center justify-center relative h-full group cursor-pointer" 
         onMouseEnter={() => setIsHovered(true)} 
         onMouseLeave={() => setIsHovered(false)}
         onClick={onClick}>
      
      {/* Top Half */}
      <div className="flex-1 w-full flex items-end justify-center pb-8 relative">
         {isEven && (
            <div className="w-[95%] xl:w-[85%] max-w-[320px] z-30 h-full flex flex-col justify-end">
               <GlassCard node={node} index={index} isHovered={isHovered} />
            </div>
         )}
         {isEven && <div className={`absolute bottom-0 left-1/2 w-[2px] h-8 bg-cyan-900/50 -translate-x-1/2 transition-all duration-500 ${isHovered ? 'bg-neon-blue shadow-[0_0_15px_#00f0ff]' : ''}`}></div>}
      </div>

      {/* Center Visual Node */}
      <div className="h-0 flex items-center justify-center z-20">
         <div className="bg-[#050505] rounded-full p-2">
           <HyperCube isHovered={isHovered} />
         </div>
      </div>

      {/* Bottom Half */}
      <div className="flex-1 w-full flex items-start justify-center pt-8 relative">
         {!isEven && (
            <div className="w-[95%] xl:w-[85%] max-w-[320px] z-30 h-full flex flex-col justify-start">
               <GlassCard node={node} index={index} isHovered={isHovered} />
            </div>
         )}
         {!isEven && <div className={`absolute top-0 left-1/2 w-[2px] h-8 bg-cyan-900/50 -translate-x-1/2 transition-all duration-500 ${isHovered ? 'bg-neon-blue shadow-[0_0_15px_#00f0ff]' : ''}`}></div>}
      </div>
    </div>
  );
}

function MobileNode({ node, index, onClick }: any) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative w-full flex items-start mb-16 cursor-pointer"
         onMouseEnter={() => setIsHovered(true)} 
         onMouseLeave={() => setIsHovered(false)}
         onClick={onClick}>
      
      <div className="absolute left-6 top-8 -translate-x-1/2 -translate-y-1/2 bg-black rounded-full z-20 p-1">
         <HyperCube isHovered={isHovered} size="small" />
      </div>
      
      <div className={`absolute left-6 top-8 h-[2px] w-10 bg-cyan-900/50 transition-all duration-500 ${isHovered ? 'bg-neon-blue shadow-[0_0_10px_#00f0ff]' : ''}`}></div>

      <div className="pl-20 w-full z-30">
         <GlassCard node={node} index={index} isHovered={isHovered} />
      </div>
    </div>
  );
}

export default function ArchitectureGraph() {
  const [selectedNode, setSelectedNode] = useState<typeof nodes[0] | null>(null);

  useEffect(() => {
    if (selectedNode) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedNode]);

  return (
    <section id="how-it-works" className="min-h-screen py-32 bg-transparent relative overflow-hidden flex flex-col justify-center items-center">
      
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-neon-blue to-transparent opacity-20"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-neon-blue/5 blur-[120px] rounded-[100%] pointer-events-none z-0"></div>
      
      <div className="max-w-7xl mx-auto px-6 w-full text-center mb-16 md:mb-24 relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl lg:text-[4.5rem] font-black text-transparent bg-clip-text bg-linear-to-b from-white via-gray-300 to-gray-700 drop-shadow-2xl tracking-widest uppercase"
        >
          HOW ENGN-F1 WORKS
        </motion.h2>
      </div>

      <div className="relative w-full max-w-[90rem] mx-auto px-4 md:px-8 pb-20 z-10 flex flex-col items-center">
        
        {/* Desktop Layout: Horizontal Continuous Line */}
        <div className="hidden lg:flex flex-row items-center w-full h-[600px] xl:h-[700px] relative">
           
           {/* The continuous horizontal line */}
           <div className="absolute top-1/2 left-0 w-full h-[2px] bg-cyan-900/40 -translate-y-1/2 shadow-[0_0_15px_rgba(0,240,255,0.1)] overflow-hidden">
              <motion.div 
                animate={{ left: ["-10%", "110%"] }} 
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }} 
                className="absolute top-0 h-full w-48 bg-linear-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_20px_#00f0ff]" 
              />
           </div>

           {nodes.map((node, index) => (
              <DesktopNode key={node.id} node={node} index={index} isEven={index % 2 === 0} onClick={() => setSelectedNode(node)} />
           ))}
        </div>

        {/* Mobile Layout: Vertical Continuous Line */}
        <div className="lg:hidden flex flex-col w-full relative pt-10">
          
          {/* The continuous vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-[2px] bg-cyan-900/40 -translate-x-1/2 shadow-[0_0_15px_rgba(0,240,255,0.1)] overflow-hidden">
             <motion.div 
                animate={{ top: ["-10%", "110%"] }} 
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }} 
                className="absolute left-0 w-full h-48 bg-linear-to-b from-transparent via-cyan-400 to-transparent shadow-[0_0_20px_#00f0ff]" 
             />
          </div>

          {nodes.map((node, index) => (
            <MobileNode key={node.id} node={node} index={index} onClick={() => setSelectedNode(node)} />
          ))}
        </div>

      </div>

      {/* Pop-up Modal */}
      <AnimatePresence>
        {selectedNode && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center px-4 md:px-8"
          >
            <div className="absolute inset-0 bg-black/80 backdrop-blur-md" onClick={() => setSelectedNode(null)}></div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 30 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              data-lenis-prevent
              className="relative w-full max-w-4xl max-h-[85vh] overflow-y-auto bg-gray-950/80 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] p-8 md:p-14 shadow-[0_0_100px_rgba(0,240,255,0.15)] scrollbar-hide"
            >
              <div className="absolute -top-40 -right-40 w-80 h-80 bg-neon-blue/20 blur-[100px] rounded-full pointer-events-none"></div>
              <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-400/10 blur-[100px] rounded-full pointer-events-none"></div>

              <button 
                onClick={() => setSelectedNode(null)}
                className="absolute top-6 right-6 md:top-8 md:right-8 text-gray-500 hover:text-white transition-colors bg-white/5 hover:bg-white/10 p-3 rounded-full z-10"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {(() => {
                const paragraphs = selectedNode.fullDesc.split('\n');

                return (
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-8 mb-10">
                      <HyperCube isHovered={true} size="small" />
                      <div>
                        <span className="text-neon-blue font-mono text-sm tracking-widest block mb-2 uppercase">
                          Phase 0{nodes.findIndex(n => n.id === selectedNode.id) + 1} // {selectedNode.id}
                        </span>
                        <h2 className="text-3xl md:text-5xl font-black text-transparent bg-clip-text bg-linear-to-r from-white via-gray-200 to-gray-500 leading-tight">
                          {selectedNode.title}
                        </h2>
                      </div>
                    </div>
                    
                    <div className="bg-linear-to-r from-neon-blue/10 to-transparent border-l-4 border-l-neon-blue rounded-r-2xl p-6 md:p-8 mb-10">
                      <p className="text-cyan-300 italic text-lg md:text-2xl font-medium leading-relaxed">
                        {selectedNode.shortDesc}
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

    </section>
  );
}
