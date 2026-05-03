"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

type LogType = { text: string; color: string; delay: number };

const processLogs: LogType[] = [
  { text: "> initializing quantum engine...", color: "text-gray-500", delay: 500 },
  { text: "> input: system state [matrix dim: 1024x1024]", color: "text-white", delay: 1200 },
  { text: "> mapping real-time constraints...", color: "text-yellow-400", delay: 2000 },
  { text: "> processing...", color: "text-neon-blue", delay: 2500 },
  { text: "> converging state space [err: 0.0012]", color: "text-gray-400", delay: 3500 },
  { text: "> optimizing...", color: "text-neon-blue", delay: 4200 },
  { text: "> global minimum reached (24ms)", color: "text-green-400", delay: 5000 },
  { text: "> output: decision generated [routing_updated]", color: "text-neon-green", delay: 5500 },
];

export default function TerminalInterface() {
  const [logs, setLogs] = useState<LogType[]>([]);
  const [isRunning, setIsRunning] = useState(false);

  const startSimulation = () => {
    if (isRunning) return;
    setIsRunning(true);
    setLogs([]);

    processLogs.forEach((log) => {
      setTimeout(() => {
        setLogs((prev) => [...prev, log]);
      }, log.delay);
    });

    setTimeout(() => {
      setIsRunning(false);
    }, 6500);
  };

  return (
    <section className="py-24 bg-darker relative flex flex-col items-center justify-center">
      <div className="max-w-4xl mx-auto w-full px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">System Thinking Interface</h2>
          <p className="text-gray-400">Watch the optimization engine resolve complex state variables in real-time.</p>
        </div>

        <div className="bg-black border border-gray-800 rounded-xl shadow-2xl overflow-hidden font-mono">
          <div className="bg-gray-900 border-b border-gray-800 px-4 py-3 flex items-center justify-between">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="text-gray-500 text-xs">engnf1-kernel@opt-node-1</div>
            <div></div>
          </div>
          
          <div className="p-6 h-[320px] overflow-y-auto bg-black flex flex-col gap-2 relative">
            <AnimatePresence>
              {logs.map((log, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className={`${log.color} text-sm md:text-base`}
                >
                  {log.text}
                </motion.div>
              ))}
            </AnimatePresence>

            {isRunning && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 0] }}
                transition={{ repeat: Infinity, duration: 0.8 }}
                className="w-2 h-5 bg-white mt-1"
              />
            )}

            {!isRunning && logs.length > 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-4 text-gray-500 text-sm"
              >
                &gt; process complete. waiting for next input...
              </motion.div>
            )}

            {!isRunning && logs.length === 0 && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/80 backdrop-blur-sm z-10">
                <button
                  onClick={startSimulation}
                  className="px-6 py-3 bg-neon-blue/10 text-neon-blue border border-neon-blue/50 rounded hover:bg-neon-blue/20 hover:shadow-[0_0_15px_var(--color-neon-blue)]/30 transition-all uppercase tracking-widest text-xs font-bold"
                >
                  Initiate Engine
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
