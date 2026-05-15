"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-black/80 backdrop-blur-xl border-b border-gray-800 py-4 shadow-[0_10px_30px_rgba(0,0,0,0.8)]" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo Area */}
        <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="flex items-center gap-3 cursor-pointer group">
          <div className="w-3 h-3 bg-neon-blue rounded-full shadow-[0_0_10px_var(--color-neon-blue)] group-hover:scale-125 transition-transform"></div>
          <span className="text-white font-black tracking-[0.2em] text-xl">
            ENGN<span className="text-gray-600">-</span>F1
          </span>
        </a>

        {/* Navigation Links */}
        <div className="hidden lg:flex gap-6 xl:gap-8 text-xs font-mono tracking-widest uppercase">
          {[
            { id: "what-is-engnf1", label: "What is ENGN-F1" },
            { id: "how-it-works", label: "How it Works" },
            { id: "team", label: "Teams" }
          ].map((item) => (
            <button 
              key={item.id}
              onClick={() => {
                const element = document.getElementById(item.id);
                if (element) {
                  const top = element.getBoundingClientRect().top + window.scrollY - 80;
                  window.scrollTo({ top, behavior: "smooth" });
                }
              }}
              className="text-gray-400 hover:text-white transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-px after:bg-neon-blue hover:after:w-full after:transition-all"
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* CTA Button */}
        <button 
          onClick={() => {
            const element = document.getElementById("contact");
            if (element) {
              const top = element.getBoundingClientRect().top + window.scrollY - 80;
              window.scrollTo({ top, behavior: "smooth" });
            }
          }}
          className="px-6 py-2 bg-neon-blue/10 border border-neon-blue/50 text-neon-blue rounded-full text-xs font-bold tracking-[0.2em] uppercase hover:bg-neon-blue hover:text-black transition-all hover:shadow-[0_0_20px_var(--color-neon-blue)]"
        >
          Request a Demo
        </button>
      </div>
    </motion.nav>
  );
}
