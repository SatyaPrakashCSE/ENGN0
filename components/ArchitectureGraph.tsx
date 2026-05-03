"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const nodes = [
  { 
    id: "data", 
    title: "Data Ingestion", 
    shortDesc: "Real-time streaming from edge.", 
    fullDesc: "High-throughput API gateways and edge-computing nodes instantly parse massive streams of telemetry from factory floors, financial feeds, or supply chains. It handles terabytes of unstructured noise and filters it into clean signals." 
  },
  { 
    id: "integration", 
    title: "Integration Layer", 
    shortDesc: "Normalizing disparate formats.", 
    fullDesc: "Translates chaotic, unstructured multi-source data into a unified, high-dimensional tensor state space. This layer guarantees that regardless of the origin system, all data speaks the exact same mathematical language." 
  },
  { 
    id: "modeling", 
    title: "Digital Twin", 
    shortDesc: "Dynamic representation.", 
    fullDesc: "Creates an exact, continuously updating mathematical replica of the physical enterprise. This environment allows for zero-risk simulated stress testing and acts as the canvas for the optimization engine." 
  },
  { 
    id: "optimization", 
    title: "Quantum-AI", 
    shortDesc: "Solving NP-hard problems.", 
    fullDesc: "Our proprietary heuristic engine navigates billions of potential permutations simultaneously. It collapses the state space to find the absolute mathematical optimum for your specific objective function." 
  },
  { 
    id: "decision", 
    title: "Action Matrix", 
    shortDesc: "Translating optima to logic.", 
    fullDesc: "The theoretical optimum is constrained by real-world physics and rigid business rules. This node translates the raw math into an executable, step-by-step operational action plan." 
  },
  { 
    id: "feedback", 
    title: "Feedback Loop", 
    shortDesc: "Monitoring execution.", 
    fullDesc: "Sensors immediately measure the real-world impact of the executed action, feeding results back into the neural matrix to improve future prediction accuracy and create a self-learning loop." 
  }
];

export default function ArchitectureGraph() {
  const [selectedNode, setSelectedNode] = useState<typeof nodes[0] | null>(null);

  // Reorder for serpentine layout: 1, 2, 3 on top row; 6, 5, 4 on bottom row.
  const visualNodes = [
    nodes[0], nodes[1], nodes[2],
    nodes[5], nodes[4], nodes[3]
  ];

  return (
    <section id="system" className="min-h-screen py-32 bg-darker relative overflow-hidden flex flex-col justify-center items-center">
      
      {/* Background aesthetics */}
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-neon-blue to-transparent opacity-20"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-neon-blue/5 blur-[120px] rounded-[100%] pointer-events-none z-0"></div>
      
      <div className="max-w-7xl mx-auto px-6 w-full text-center mb-24 relative z-10">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
          How our <span className="text-neon-blue">ENGN-F1</span> System Thinks
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg md:text-xl">
          A continuous, closed-loop engine driving intelligent execution from raw data to refined action. Click any module to inspect.
        </p>
      </div>

      <div className="relative w-full max-w-6xl mx-auto px-6 pb-20 z-10">
        
        {/* SVG Serpentine Connecting Path (Desktop) */}
        <div className="hidden md:block absolute inset-0 pointer-events-none z-0">
          <svg className="w-full h-full" preserveAspectRatio="none">
            {/* Draw a loop: Top row centers are approx at y=25%, x=16.6%, 50%, 83.3%. Bottom row at y=75%. */}
            <path 
              d="M 16.6% 25% L 50% 25% L 83.3% 25% L 83.3% 75% L 50% 75% L 16.6% 75% Z" 
              fill="none" 
              stroke="#112233" 
              strokeWidth="2" 
              strokeDasharray="8 8"
            />
            {/* Animated glowing beam along the path */}
            <path 
              d="M 16.6% 25% L 50% 25% L 83.3% 25% L 83.3% 75% L 50% 75% L 16.6% 75% Z" 
              fill="none" 
              stroke="#00f0ff" 
              strokeWidth="3"
              className="opacity-50"
              strokeDasharray="200 1000"
              style={{ animation: "dash 10s linear infinite" }}
            />
          </svg>
        </div>

        {/* Diamond Node Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-12 md:gap-y-32 gap-x-8 justify-items-center relative z-10">
          {visualNodes.map((node, index) => {
            // Original index determines the step number (0 to 5)
            const originalIndex = nodes.findIndex(n => n.id === node.id);
            
            return (
              <div key={node.id} className="relative group cursor-pointer" onClick={() => setSelectedNode(node)}>
                
                {/* Connecting lines for mobile (vertical) */}
                <div className="md:hidden absolute -bottom-12 left-1/2 w-px h-12 bg-gray-800 -translate-x-1/2"></div>
                
                {/* The Diamond Shape */}
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-40 h-40 md:w-48 md:h-48 rotate-45 border border-neon-blue/30 bg-dark flex items-center justify-center transition-all duration-300 shadow-[0_0_20px_rgba(0,0,0,0.8)] group-hover:bg-neon-blue/5 group-hover:border-neon-blue group-hover:shadow-[0_0_30px_rgba(0,240,255,0.3)] relative overflow-hidden"
                >
                  {/* Subtle inner glow */}
                  <div className="absolute inset-0 bg-linear-to-tr from-neon-blue/0 via-neon-blue/5 to-neon-blue/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  
                  {/* Content (Counter-rotated to be straight) */}
                  <div className="-rotate-45 text-center p-6 flex flex-col items-center justify-center w-[140%] h-[140%]">
                    <span className="text-neon-blue font-mono text-sm tracking-widest block mb-2 opacity-80 group-hover:opacity-100">
                      STEP 0{originalIndex + 1}
                    </span>
                    <h3 className="text-white font-bold text-base md:text-lg leading-tight mb-2 group-hover:text-neon-blue transition-colors">
                      {node.title}
                    </h3>
                    <p className="text-gray-500 text-xs hidden md:block">
                      {node.shortDesc}
                    </p>
                  </div>
                </motion.div>
                
              </div>
            );
          })}
        </div>
      </div>

      {/* Pop-up Modal */}
      <AnimatePresence>
        {selectedNode && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-100 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl"
            onClick={() => setSelectedNode(null)}
          >
            <motion.div
              initial={{ scale: 0.8, rotateX: 20, opacity: 0 }}
              animate={{ scale: 1, rotateX: 0, opacity: 1 }}
              exit={{ scale: 0.8, rotateX: -20, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-xl bg-dark border border-neon-blue/50 rounded-none p-1 md:p-1 shadow-[0_0_50px_rgba(0,240,255,0.2)]"
            >
              {/* Techy Border Styling */}
              <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-neon-blue"></div>
              <div className="absolute -top-1 -right-1 w-4 h-4 border-t-2 border-r-2 border-neon-blue"></div>
              <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b-2 border-l-2 border-neon-blue"></div>
              <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-neon-blue"></div>
              
              <div className="bg-[#111] p-8 md:p-12 relative overflow-hidden">
                {/* Modal Background Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-neon-blue/10 blur-[80px] rounded-full pointer-events-none"></div>
                
                <button 
                  onClick={() => setSelectedNode(null)}
                  className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors font-mono text-sm uppercase tracking-widest z-20"
                >
                  [ Close ]
                </button>

                <div className="relative z-10">
                  <span className="text-neon-blue font-mono text-sm tracking-widest block mb-4 uppercase">
                    Module 0{nodes.findIndex(n => n.id === selectedNode.id) + 1} // {selectedNode.id}
                  </span>
                  
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                    {selectedNode.title}
                  </h3>
                  
                  <div className="w-12 h-1 bg-neon-blue mb-8"></div>
                  
                  <p className="text-gray-300 text-base md:text-lg leading-relaxed font-light">
                    {selectedNode.fullDesc}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx global>{`
        @keyframes dash {
          to {
            stroke-dashoffset: -1200;
          }
        }
      `}</style>
    </section>
  );
}
