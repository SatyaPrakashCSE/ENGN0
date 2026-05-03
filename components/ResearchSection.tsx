"use client";

import { motion } from "framer-motion";

export default function ResearchSection() {
  return (
    <section id="methodology" className="min-h-screen py-32 bg-dark text-white flex justify-center items-center">
      <div className="max-w-4xl mx-auto px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mb-12"
        >
          <p className="text-sm font-mono text-neon-blue uppercase tracking-[0.2em] mb-4">Research &amp; Methodology</p>
          <h2 className="text-4xl md:text-5xl font-light tracking-tight leading-tight">
            The mathematical foundation of <br />
            <span className="font-bold">absolute efficiency.</span>
          </h2>
        </motion.div>

        <div className="space-y-12 text-gray-300 text-lg md:text-xl font-light leading-relaxed">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            ENGNF1 is built on the premise that traditional heuristics fail at scale. As variables increase linearly, the state space expands exponentially. Our engine bypasses these limitations by employing quantum-inspired algorithms capable of evaluating multiparametric fields simultaneously.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
            className="pl-8 border-l border-gray-800"
          >
            <p>
              &quot;We do not approximate. We redefine the topography of the problem space to ensure the global minimum is the only inevitable outcome.&quot;
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            By mapping real-world constraints into high-dimensional topologies, we allow operations to seamlessly self-correct. The result is a robust, scalable framework that drives margins to their theoretical limits without compromising execution stability.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
