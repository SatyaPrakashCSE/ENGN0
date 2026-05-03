"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ProblemSimulation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedProblem, setSelectedProblem] = useState<number | null>(null);

  const problems = [
    { 
      title: "Execution Drift", 
      desc: "The IT-OT Gap causes massive friction. High-level strategic plans created in IT silos fail to account for real-time, unpredictable factory floor conditions. This disconnect leads to wasted resources, misaligned production schedules, and a constant state of reactive firefighting rather than proactive management." 
    },
    { 
      title: "Cascade Failures", 
      desc: "One small delay propagates through the entire network. When a single dependent process stalls, it creates a ripple effect that exponentially magnifies the initial delay across all downstream operations. Traditional systems lack the dynamic re-routing capabilities needed to isolate and absorb these micro-failures before they become critical." 
    },
    { 
      title: "Static Logic in Dynamic Worlds", 
      desc: "Rigid rules fail when reality changes. Traditional software relies on hardcoded assumptions that don't reflect the chaos of the physical world. When unexpected variables hit—like supply shortages or machine breakdowns—the system breaks down instead of adapting, requiring slow, manual human intervention." 
    },
    { 
      title: "System Saturation", 
      desc: "Peak capacity crashes traditional models. System architectures that work perfectly in isolation often choke when subjected to concurrent, high-volume real-world demands. This leads to severe latency in decision-making, unoptimized resource allocation, and ultimately, critical path failures." 
    },
    { 
      title: "Latent Inefficiency", 
      desc: "Siloed data prevents global optimization. Departments operate using disparate software tools that don't communicate, creating massive dark data pools. Without a unified mathematical state space, the enterprise cannot leverage its full computational or physical potential." 
    },
  ];

  return (
    <section id="failure" ref={containerRef} className="relative min-h-screen py-32 bg-dark overflow-hidden flex flex-col justify-center">
      {/* Background aesthetics */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20 bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-[#ff3333]/10 via-transparent to-transparent"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 w-full">
        <div className="mb-20 text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white tracking-tight">
            The Physics of <span className="text-transparent bg-clip-text bg-linear-to-r from-[#ff3333] to-[#ff6666]">System Failure</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
            Modern enterprises operate on complex, interdependent networks. When traditional static models meet dynamic reality, systems break down.
          </p>
        </div>

        <div className="flex flex-col gap-4 w-full">
          {problems.map((prob, idx) => {
            const isSelected = selectedProblem === idx;
            return (
              <motion.div 
                key={idx}
                layout
                onClick={() => setSelectedProblem(isSelected ? null : idx)}
                className={`w-full cursor-pointer overflow-hidden transition-all duration-500 border ${
                  isSelected 
                    ? "bg-dark border-[#ff3333] shadow-[0_0_30px_rgba(255,51,51,0.15)] rounded-2xl" 
                    : "bg-dark border-gray-800 hover:border-gray-600 rounded-xl hover:bg-[#111]"
                }`}
              >
                {/* Header Row */}
                <motion.div layout className="flex items-center justify-between p-6 md:p-8">
                  <div className="flex items-center gap-6">
                    {/* Status Indicator */}
                    <div className="relative w-12 h-12 flex items-center justify-center shrink-0">
                      {isSelected ? (
                        <>
                          <motion.div 
                            animate={{ rotate: 360 }} 
                            transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
                            className="absolute inset-0 border-2 border-dashed border-[#ff3333] rounded-full"
                          />
                          <div className="w-3 h-3 bg-[#ff3333] rounded-full shadow-[0_0_10px_#ff3333]"></div>
                        </>
                      ) : (
                        <div className="w-12 h-12 border border-gray-700 rounded-full flex items-center justify-center bg-black">
                          <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
                        </div>
                      )}
                    </div>
                    
                    <div>
                      <div className="font-mono text-xs text-gray-500 mb-1 uppercase tracking-widest">
                        ERROR_VECTOR_0{idx + 1}
                      </div>
                      <h3 className={`text-xl md:text-2xl font-bold transition-colors ${isSelected ? "text-white" : "text-gray-300"}`}>
                        {prob.title}
                      </h3>
                    </div>
                  </div>

                  {/* Toggle Icon */}
                  <div className={`w-10 h-10 flex items-center justify-center rounded-full border transition-colors ${isSelected ? "border-[#ff3333] text-[#ff3333]" : "border-gray-800 text-gray-500"}`}>
                    <motion.svg 
                      animate={{ rotate: isSelected ? 45 : 0 }} 
                      className="w-5 h-5" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </motion.svg>
                  </div>
                </motion.div>

                {/* Expanded Content */}
                <AnimatePresence>
                  {isSelected && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                    >
                      <div className="px-6 md:px-8 pb-8 pt-2">
                        <div className="w-full h-px bg-linear-to-r from-[#ff3333]/50 to-transparent mb-6"></div>
                        <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-6 md:gap-12 items-start">
                          {/* Decorative Barcode / Data element */}
                          <div className="hidden md:flex flex-col gap-1 opacity-40">
                            {Array.from({ length: 8 }).map((_, i) => (
                              <div key={i} className="h-1 bg-[#ff3333]" style={{ width: `${Math.random() * 40 + 20}px` }}></div>
                            ))}
                          </div>
                          
                          <p className="text-gray-400 text-base md:text-lg leading-relaxed">
                            {prob.desc}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
