"use client";

const solutions = [
  { keyword: "Real-time Sync", title: "Continuous Alignment", desc: "Instantly aligns physical operations with dynamic field conditions, completely closing the traditional IT-OT gap." },
  { keyword: "Adaptive Logic", title: "Heuristic Systems", desc: "Continuously adjusts to changing environments rather than relying on brittle, hardcoded static rules." },
  { keyword: "Quantum Routing", title: "Multiparametric Analysis", desc: "Evaluates millions of potential pathways simultaneously to find the absolute mathematical optimum." },
  { keyword: "Self-Healing", title: "Autonomous Correction", desc: "Detects localized failures and reroutes resources autonomously before they can cascade into systemic crashes." },
  { keyword: "Predictive Edge", title: "Forecasting Anomalies", desc: "Ingests massive datasets to predict supply shocks and mechanical failures hours before they occur." },
  { keyword: "Holistic Scale", title: "Global Optimization", desc: "Optimizes the entire enterprise network holistically, destroying isolated data silos and dark data pools." },
];

export default function SolutionTransition() {
  return (
    <section id="architecture" className="relative py-32 bg-[#020202] overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon-green/5 blur-[150px] rounded-full pointer-events-none z-0"></div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 w-full">

        {/* 3-Column Layout with SVG connector lines */}
        <div className="relative grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-0 w-full items-center">

          {/* SVG Connector Lines — desktop only */}
          <svg
            className="hidden lg:block absolute inset-0 w-full h-full pointer-events-none z-0"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="lineGradLeft" x1="100%" y1="50%" x2="0%" y2="50%">
                <stop offset="0%" stopColor="#00ff66" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#00ff66" stopOpacity="0.05" />
              </linearGradient>
              <linearGradient id="lineGradRight" x1="0%" y1="50%" x2="100%" y2="50%">
                <stop offset="0%" stopColor="#00ff66" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#00ff66" stopOpacity="0.05" />
              </linearGradient>
            </defs>
            {/* Left column — top card */}
            <line x1="34%" y1="13%" x2="50%" y2="50%" stroke="url(#lineGradLeft)" strokeWidth="1" />
            {/* Left column — middle card */}
            <line x1="34%" y1="50%" x2="50%" y2="50%" stroke="url(#lineGradLeft)" strokeWidth="1" />
            {/* Left column — bottom card */}
            <line x1="34%" y1="87%" x2="50%" y2="50%" stroke="url(#lineGradLeft)" strokeWidth="1" />
            {/* Right column — top card */}
            <line x1="66%" y1="13%" x2="50%" y2="50%" stroke="url(#lineGradRight)" strokeWidth="1" />
            {/* Right column — middle card */}
            <line x1="66%" y1="50%" x2="50%" y2="50%" stroke="url(#lineGradRight)" strokeWidth="1" />
            {/* Right column — bottom card */}
            <line x1="66%" y1="87%" x2="50%" y2="50%" stroke="url(#lineGradRight)" strokeWidth="1" />
          </svg>

          {/* Left Column (3 Points) */}
          <div className="flex flex-col gap-10 pr-0 lg:pr-16 relative z-10">
            {solutions.slice(0, 3).map((sol, idx) => (
              <div key={`left-${idx}`} className="relative p-8 border border-gray-800 bg-black/60 backdrop-blur-md rounded-2xl group hover:border-neon-green/50 transition-all duration-300 shadow-lg">
                {/* Keyword badge top-left */}
                <div className="absolute -top-4 left-6 bg-[#020202] px-4 py-1 text-neon-green font-mono font-bold tracking-widest text-xs uppercase shadow-[0_0_10px_rgba(0,255,102,0.5)] rounded-full border border-neon-green/50 z-10">
                  {sol.keyword}
                </div>
                {/* Connection dot on right edge pointing to center */}
                <div className="hidden lg:block absolute top-1/2 -right-3 -translate-y-1/2 w-3 h-3 rounded-full bg-neon-green shadow-[0_0_10px_#00ff66] z-20"></div>
                <h3 className="text-xl text-white font-semibold mb-3 mt-2 group-hover:text-neon-green transition-colors">{sol.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{sol.desc}</p>
              </div>
            ))}
          </div>

          {/* Center Column — Title */}
          <div className="flex flex-col justify-center items-center text-center px-8 py-20 lg:py-0 relative z-10 min-w-[280px] lg:min-w-[320px]">
            {/* Central node/hub */}
            <div className="hidden lg:flex w-5 h-5 rounded-full bg-neon-green shadow-[0_0_20px_#00ff66] mb-8 items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-white animate-ping"></div>
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight drop-shadow-[0_0_30px_rgba(0,255,102,0.3)]">
              Self-Healing <br />
              <span className="text-neon-green">Architecture</span>
            </h2>
            <p className="text-gray-300 text-base md:text-lg max-w-xs mx-auto leading-relaxed">
              ENGNF1 transforms fragile, siloed networks into adaptive, intelligent ecosystems that self-correct and optimize in real-time.
            </p>
          </div>

          {/* Right Column (3 Points) */}
          <div className="flex flex-col gap-10 pl-0 lg:pl-16 relative z-10">
            {solutions.slice(3, 6).map((sol, idx) => (
              <div key={`right-${idx}`} className="relative p-8 border border-gray-800 bg-black/60 backdrop-blur-md rounded-2xl group hover:border-neon-green/50 transition-all duration-300 shadow-lg">
                {/* Keyword badge top-right */}
                <div className="absolute -top-4 right-6 bg-[#020202] px-4 py-1 text-neon-green font-mono font-bold tracking-widest text-xs uppercase shadow-[0_0_10px_rgba(0,255,102,0.5)] rounded-full border border-neon-green/50 z-10">
                  {sol.keyword}
                </div>
                {/* Connection dot on left edge pointing to center */}
                <div className="hidden lg:block absolute top-1/2 -left-3 -translate-y-1/2 w-3 h-3 rounded-full bg-neon-green shadow-[0_0_10px_#00ff66] z-20"></div>
                <h3 className="text-xl text-white font-semibold mb-3 mt-2 text-right group-hover:text-neon-green transition-colors">{sol.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed text-right">{sol.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}


