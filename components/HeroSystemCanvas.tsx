"use client";

import { motion } from "framer-motion";

export default function HeroSystemCanvas() {
  return (
    <div className="relative w-full h-screen bg-transparent overflow-hidden flex flex-col items-center justify-center">
      
      <div className="relative z-10 text-center px-4 max-w-[95vw] mx-auto pointer-events-none flex flex-col items-center justify-center h-full pt-10">
        
        {/* Layer 3 - Primary Navigation / CTA (Now on top, without button) */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col items-center gap-4 w-full pointer-events-auto mb-16"
        >
          <div className="relative inline-block px-4">
            <p className="text-xs md:text-sm text-transparent bg-clip-text bg-linear-to-r from-cyan-400 via-white to-neon-green max-w-5xl tracking-[0.2em] md:tracking-[0.3em] uppercase font-bold text-center">
              From real-time detection to localized execution, enabling layered autonomy that responds, intervenes, and acts across different operational environments
            </p>
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-[2px] bg-linear-to-r from-transparent via-cyan-400 to-transparent opacity-80 blur-[1px]"></div>
          </div>
        </motion.div>

        {/* Massive Company Name */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
          className="mb-14 flex flex-col items-center w-full relative"
        >
          {/* Subtle background glow behind the text */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50%] h-[50%] bg-neon-blue/20 blur-[120px] rounded-full pointer-events-none"></div>

          <div className="text-7xl md:text-9xl lg:text-[11rem] font-black tracking-widest text-transparent bg-clip-text bg-linear-to-b from-white via-gray-200 to-gray-600 drop-shadow-[0_0_60px_rgba(0,240,255,0.5)] mb-2 select-none leading-none">
            ENGN<span className="text-neon-blue drop-shadow-[0_0_20px_rgba(0,240,255,1)]">-</span>F1
          </div>
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 1 }}
            className="text-xs md:text-sm lg:text-lg font-bold tracking-[0.2em] md:tracking-[0.4em] uppercase text-gray-200 mt-6 bg-black/50 px-8 py-3 rounded-full backdrop-blur-xl border border-neon-blue/40 shadow-[0_0_30px_rgba(0,240,255,0.2)] relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent w-full h-full transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            Enforced Neural Generative Network <span className="text-neon-blue">at</span> Formula 1 Speed
          </motion.div>
        </motion.div>

        {/* Layer 1 - Primary Identity Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-8 w-full max-w-[90vw]"
        >
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight drop-shadow-lg">
            An Experience-driven <span className="text-transparent bg-clip-text bg-linear-to-r from-neon-blue to-cyan-300">Computing Paradigm</span><br className="hidden md:block" /> Powered by Real-Time Operational Information.
          </h1>
        </motion.div>

        {/* Layer 2 - Supporting Explanation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="max-w-[80vw] mx-auto"
        >
          <p className="text-sm md:text-base lg:text-xl text-gray-300 font-light leading-relaxed text-center italic">
            A continuously observing intelligence flow that identifies disruptions as they emerge and responds through distributed operational nodes.
          </p>
        </motion.div>

      </div>
    </div>
  );
}
