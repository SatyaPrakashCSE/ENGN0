"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const applications = [
  {
    id: "app-1",
    category: "Supply Chain",
    title: "Operations Optimization",
    shortDesc: "End-to-end supply chain logistics.",
    fullDesc: "ENGNF1 completely reinvents supply chain logistics by replacing static routing with dynamic, quantum-powered heuristic models. It anticipates supply shocks, calculates multiparametric routing across global networks in real-time, and reduces fleet downtime. This creates an antifragile supply network capable of self-healing during global disruptions.",
    metric: "85% Cost Reduction",
    color: "from-blue-500/10 to-blue-900/10",
    border: "border-blue-500/30",
    text: "text-blue-400",
    bg: "bg-blue-400"
  },
  {
    id: "app-2",
    category: "Life Sciences",
    title: "Healthcare & Discovery",
    shortDesc: "Molecular simulation acceleration.",
    fullDesc: "By leveraging massive parallel state space exploration, ENGNF1 accelerates the drug discovery pipeline. It models complex molecular interactions, predicts protein folding anomalies, and optimizes clinical trial participant distribution, bringing life-saving therapeutics to market in a fraction of the traditional time.",
    metric: "70% Faster Discovery",
    color: "from-green-500/10 to-green-900/10",
    border: "border-green-500/30",
    text: "text-green-400",
    bg: "bg-green-400"
  },
  {
    id: "app-3",
    category: "Drone Systems",
    title: "Aviation & UAV",
    shortDesc: "Autonomous fleet coordination.",
    fullDesc: "Managing thousands of autonomous UAVs requires microsecond decision-making. ENGNF1 provides real-time dynamic airspace management, collision avoidance heuristics, and optimal battery-routing for massive drone swarms, enabling safe, high-density urban air mobility.",
    metric: "90% Efficiency Increase",
    color: "from-purple-500/10 to-purple-900/10",
    border: "border-purple-500/30",
    text: "text-purple-400",
    bg: "bg-purple-400"
  },
  {
    id: "app-4",
    category: "Financial Sector",
    title: "Markets & Trading",
    shortDesc: "Algorithmic trading optimization.",
    fullDesc: "Financial markets operate on nanosecond margins. ENGNF1 parses millions of market signals simultaneously to optimize algorithmic trading, instantly balance massive portfolios against emerging systemic risks, and detect anomalous market behavior before traditional systems register a blip.",
    metric: "95% Risk Reduction",
    color: "from-yellow-500/10 to-yellow-900/10",
    border: "border-yellow-500/30",
    text: "text-yellow-400",
    bg: "bg-yellow-400"
  },
  {
    id: "app-5",
    category: "Automotive",
    title: "Autonomous Navigation",
    shortDesc: "Systemic traffic flow optimization.",
    fullDesc: "Moving beyond individual vehicle autonomy, ENGNF1 coordinates city-wide autonomous vehicle networks. By treating urban traffic as a unified fluid dynamics problem, it eliminates phantom traffic jams, optimizes intersection throughput, and drastically reduces accident rates across the smart city.",
    metric: "80% Accident Reduction",
    color: "from-red-500/10 to-red-900/10",
    border: "border-red-500/30",
    text: "text-red-400",
    bg: "bg-red-400"
  },
  {
    id: "app-6",
    category: "Electronics",
    title: "Semiconductor Tech",
    shortDesc: "Advanced logic & circuit routing.",
    fullDesc: "As Moore's Law slows, optimization becomes critical. ENGNF1 solves NP-hard VLSI routing problems, optimizing transistor placement and logic gates at the nanometer scale. This directly translates to lower power consumption, higher yield rates, and massive manufacturing efficiencies.",
    metric: "60% Design Efficiency",
    color: "from-cyan-500/10 to-cyan-900/10",
    border: "border-cyan-500/30",
    text: "text-cyan-400",
    bg: "bg-cyan-400"
  },
  {
    id: "app-7",
    category: "Military & Defense",
    title: "Strategic Intelligence",
    shortDesc: "Tactical operational optimization.",
    fullDesc: "Modern conflicts are data-driven. ENGNF1 provides commanders with real-time probabilistic models of battlefield scenarios, optimizing troop deployment logistics, securing communications against quantum threats, and parsing vast amounts of signal intelligence instantly.",
    metric: "Classified Advantages",
    color: "from-zinc-400/10 to-zinc-800/10",
    border: "border-zinc-500/30",
    text: "text-zinc-300",
    bg: "bg-zinc-300"
  },
  {
    id: "app-8",
    category: "Global Trade",
    title: "Commodity Commerce",
    shortDesc: "Predictive pricing & shipping.",
    fullDesc: "ENGNF1 ingests global macroeconomic indicators, weather patterns, and geopolitical data to map optimal trade routes and forecast commodity pricing. It allows shipping conglomerates to reroute vessels dynamically, avoiding delays and capturing maximum arbitrage margins.",
    metric: "75% Profit Increase",
    color: "from-emerald-500/10 to-emerald-900/10",
    border: "border-emerald-500/30",
    text: "text-emerald-400",
    bg: "bg-emerald-400"
  },
  {
    id: "app-9",
    category: "Judiciary",
    title: "Legal Systems",
    shortDesc: "Massive justice system optimization.",
    fullDesc: "Backlogged legal systems cripple economies. ENGNF1 applies advanced heuristic sorting to court dockets, optimizing case assignments based on historical precedent, judge availability, and complexity. This algorithmic workflow slashes wait times and ensures smoother administration of justice.",
    metric: "50% Faster Resolution",
    color: "from-orange-500/10 to-orange-900/10",
    border: "border-orange-500/30",
    text: "text-orange-400",
    bg: "bg-orange-400"
  },
  {
    id: "app-10",
    category: "Manufacturing",
    title: "Industrial Operations",
    shortDesc: "Predictive maintenance scheduling.",
    fullDesc: "Unplanned downtime costs billions. ENGNF1 constantly analyzes vibration, thermal, and acoustic data from factory floor machinery to predict catastrophic failures before they happen. It perfectly balances the production line, ensuring zero bottlenecks and unlocking massive TAM.",
    metric: "$80B TAM Unlocked",
    color: "from-pink-500/10 to-pink-900/10",
    border: "border-pink-500/30",
    text: "text-pink-400",
    bg: "bg-pink-400"
  }
];

export default function ApplicationsSection() {
  const [selectedApp, setSelectedApp] = useState<typeof applications[0] | null>(null);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedApp) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [selectedApp]);

  return (
    <section id="applications" className="py-24 bg-[#020202] relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 w-full relative z-10">
        <div className="mb-24 text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white tracking-tight">
            From Static Models to <span className="text-neon-blue">Living Systems</span>
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg md:text-xl">
            ENGNF1 serves as the foundational model across diverse industries, transforming complex, multiparametric challenges into scalable, real-time solutions.
          </p>
        </div>

        {/* Horizontal Bus Topology Layout */}
        <div className="relative w-full overflow-x-auto md:overflow-visible pb-12 hide-scrollbar">
          <div className="min-w-[1000px] md:min-w-full relative">
            
            {/* The Horizontal Bus Line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-800 -translate-y-1/2 rounded-full z-0 hidden md:block">
              <motion.div 
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className="w-full h-full bg-linear-to-r from-neon-blue via-neon-green to-neon-blue rounded-full opacity-80"
              />
            </div>

            {/* Top Row (Indices 0-4) */}
            <div className="grid grid-cols-5 gap-4 md:gap-6 mb-12 md:mb-0 relative z-10">
              {applications.slice(0, 5).map((app, idx) => (
                <div key={app.id} className="flex flex-col items-center justify-end md:pb-12 relative group cursor-pointer" onClick={() => setSelectedApp(app)}>
                  
                  {/* Vertical line down to bus (Desktop) */}
                  <div className="hidden md:block absolute bottom-0 left-1/2 w-px h-12 bg-gray-700 -translate-x-1/2 group-hover:bg-gray-400 transition-colors"></div>
                  {/* Connection Node */}
                  <div className={`hidden md:block absolute bottom-0 left-1/2 w-3 h-3 rounded-full border border-gray-900 bg-black z-20 translate-y-1/2 -translate-x-1/2 ${app.text}`}>
                    <div className={`absolute inset-0 rounded-full ${app.bg} animate-pulse shadow-[0_0_10px_currentColor]`}></div>
                  </div>

                  {/* Card */}
                  <motion.div
                    whileHover={{ scale: 1.05, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full p-5 rounded-2xl border ${app.border} bg-linear-to-br ${app.color} backdrop-blur-xl bg-black/80 flex flex-col items-center text-center shadow-lg hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all`}
                  >
                    <span className={`text-[10px] font-mono uppercase tracking-widest ${app.text} mb-2 block`}>
                      {app.category}
                    </span>
                    <h3 className="text-sm md:text-base font-bold text-white mb-2 leading-tight">{app.title}</h3>
                    <p className="text-gray-500 text-xs line-clamp-2 mb-4">{app.shortDesc}</p>
                    <div className="mt-auto px-3 py-1 rounded-full bg-white/5 border border-white/10">
                      <span className={`font-mono text-[10px] font-bold tracking-wider ${app.text}`}>
                        {app.metric}
                      </span>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>

            {/* Bottom Row (Indices 5-9) */}
            <div className="grid grid-cols-5 gap-4 md:gap-6 relative z-10">
              {applications.slice(5, 10).map((app, idx) => (
                <div key={app.id} className="flex flex-col items-center justify-start md:pt-12 relative group cursor-pointer" onClick={() => setSelectedApp(app)}>
                  
                  {/* Vertical line up to bus (Desktop) */}
                  <div className="hidden md:block absolute top-0 left-1/2 w-px h-12 bg-gray-700 -translate-x-1/2 group-hover:bg-gray-400 transition-colors"></div>
                  {/* Connection Node */}
                  <div className={`hidden md:block absolute top-0 left-1/2 w-3 h-3 rounded-full border border-gray-900 bg-black z-20 -translate-y-1/2 -translate-x-1/2 ${app.text}`}>
                    <div className={`absolute inset-0 rounded-full ${app.bg} animate-pulse shadow-[0_0_10px_currentColor]`}></div>
                  </div>

                  {/* Card */}
                  <motion.div
                    whileHover={{ scale: 1.05, y: 5 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full p-5 rounded-2xl border ${app.border} bg-linear-to-br ${app.color} backdrop-blur-xl bg-black/80 flex flex-col items-center text-center shadow-lg hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all`}
                  >
                    <span className={`text-[10px] font-mono uppercase tracking-widest ${app.text} mb-2 block`}>
                      {app.category}
                    </span>
                    <h3 className="text-sm md:text-base font-bold text-white mb-2 leading-tight">{app.title}</h3>
                    <p className="text-gray-500 text-xs line-clamp-2 mb-4">{app.shortDesc}</p>
                    <div className="mt-auto px-3 py-1 rounded-full bg-white/5 border border-white/10">
                      <span className={`font-mono text-[10px] font-bold tracking-wider ${app.text}`}>
                        {app.metric}
                      </span>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] bg-neon-blue/5 blur-[200px] rounded-full pointer-events-none z-0"></div>

      {/* Pop-up Modal */}
      <AnimatePresence>
        {selectedApp && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-100 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xl"
            onClick={() => setSelectedApp(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 20, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className={`relative w-full max-w-2xl bg-dark border ${selectedApp.border} rounded-3xl p-8 md:p-12 shadow-[0_0_50px_rgba(0,0,0,0.8)] overflow-hidden`}
            >
              {/* Modal Background Glow */}
              <div className={`absolute top-0 right-0 w-64 h-64 ${selectedApp.bg} opacity-10 blur-[80px] rounded-full pointer-events-none`}></div>
              
              <button 
                onClick={() => setSelectedApp(null)}
                className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 transition-colors z-20"
              >
                ✕
              </button>

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-3 h-3 rounded-full ${selectedApp.bg} animate-pulse shadow-[0_0_10px_currentColor] ${selectedApp.text}`}></div>
                  <span className={`font-mono text-xs uppercase tracking-widest ${selectedApp.text}`}>
                    {selectedApp.category} Sector
                  </span>
                </div>
                
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  {selectedApp.title}
                </h3>
                
                <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-10">
                  {selectedApp.fullDesc}
                </p>

                <div className="p-5 rounded-2xl bg-black/50 border border-gray-800 flex items-center justify-between">
                  <span className="text-gray-500 font-mono text-xs uppercase tracking-widest">
                    Impact Metric
                  </span>
                  <span className={`font-mono text-lg font-bold ${selectedApp.text}`}>
                    {selectedApp.metric}
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
