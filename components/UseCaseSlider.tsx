"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function UseCaseSlider() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (!containerRef.current || !sliderRef.current) return;

    const sections = gsap.utils.toArray(sliderRef.current.children);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        pin: true,
        scrub: 1,
        snap: 1 / (sections.length - 1),
        end: () => "+=" + sliderRef.current!.offsetWidth,
      },
    });

    tl.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  const cases = [
    {
      title: "Manufacturing Systems",
      subtitle: "Dynamic Production Routing",
      desc: "Adjust assembly lines in real-time based on machine health, supply chain fluctuations, and immediate order priority. Eliminate downtime cascades.",
      color: "from-blue-900 to-black"
    },
    {
      title: "Logistics Systems",
      subtitle: "Last-mile Optimization",
      desc: "Recalculate thousands of delivery routes instantly to adapt to traffic, weather, and new high-priority insertions, maximizing fleet utilization.",
      color: "from-green-900 to-black"
    },
    {
      title: "Financial Systems",
      subtitle: "High-Frequency Risk Assessment",
      desc: "Process complex multiparametric market conditions through quantum-inspired algorithms to execute rapid, risk-adjusted trading strategies.",
      color: "from-purple-900 to-black"
    }
  ];

  return (
    <section ref={containerRef} className="h-screen bg-black overflow-hidden flex items-center relative">
      <div className="absolute top-10 left-10 z-10">
        <h2 className="text-4xl font-bold text-white tracking-tight">Applied Intelligence</h2>
        <p className="text-gray-400 mt-2">Where the system meets the real world.</p>
      </div>

      <div ref={sliderRef} className="flex h-[60vh] items-center mt-20" style={{ width: `${cases.length * 100}vw` }}>
        {cases.map((useCase, idx) => (
          <div key={idx} className="w-screen h-full flex items-center justify-center px-10 md:px-32">
            <div className={`w-full max-w-4xl h-full rounded-3xl p-12 bg-linear-to-br ${useCase.color} border border-gray-800 flex flex-col justify-center relative overflow-hidden`}>
              {/* Decorative elements */}
              <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-white opacity-5 blur-[100px]"></div>
              
              <h4 className="text-gray-400 font-mono text-sm uppercase tracking-widest mb-4">Case Study {idx + 1}</h4>
              <h3 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">{useCase.title}</h3>
              <h5 className="text-xl text-neon-blue mb-8 font-medium">{useCase.subtitle}</h5>
              <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-2xl">{useCase.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
