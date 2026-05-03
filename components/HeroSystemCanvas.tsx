"use client";

import { useRef, useMemo, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";
import { motion } from "framer-motion";

function NodeNetwork() {
  const ref = useRef<THREE.Points>(null);
  const [mousePosition, setMousePosition] = useState(new THREE.Vector2());

  // Generate random points in a sphere
  const sphere = useMemo(() => {
    const count = 2000;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 5 * Math.cbrt(Math.random());
      const theta = Math.random() * 2 * Math.PI;
      const phi = Math.acos(2 * Math.random() - 1);
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);
    }
    return positions;
  }, []);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.y -= delta / 10;
      ref.current.rotation.x -= delta / 15;
      
      // Basic mouse reaction
      setMousePosition(
        new THREE.Vector2(
          (state.pointer.x * state.viewport.width) / 2,
          (state.pointer.y * state.viewport.height) / 2
        )
      );
      ref.current.position.x = THREE.MathUtils.lerp(ref.current.position.x, state.pointer.x * 0.5, 0.05);
      ref.current.position.y = THREE.MathUtils.lerp(ref.current.position.y, state.pointer.y * 0.5, 0.05);
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#00f0ff"
          size={0.02}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </Points>
    </group>
  );
}

export default function HeroSystemCanvas() {
  return (
    <div className="relative w-full h-screen bg-black overflow-hidden flex flex-col items-center justify-center">
      <div className="absolute inset-0 z-0 opacity-60">
        <Canvas camera={{ position: [0, 0, 8] }}>
          <NodeNetwork />
        </Canvas>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pointer-events-none flex flex-col items-center">
        
        {/* Massive Company Name & Full Form */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="mb-12 flex flex-col items-center w-full"
        >
          <div className="text-7xl md:text-8xl lg:text-9xl font-black tracking-widest text-transparent bg-clip-text bg-linear-to-r from-neon-blue via-white to-neon-green drop-shadow-[0_0_30px_rgba(0,240,255,0.4)] mb-6 select-none">
            ENGN<span className="text-gray-600">-</span>F1
          </div>
          <div className="px-5 py-2 rounded-full border border-gray-800 bg-black/60 backdrop-blur-md inline-flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#ff3333] animate-pulse shadow-[0_0_8px_#ff3333]"></span>
            <span className="text-xs md:text-sm font-mono tracking-[0.3em] text-gray-300 uppercase font-semibold">
              Engn-F1 Private Limited
            </span>
            <span className="w-2 h-2 rounded-full bg-[#ff3333] animate-pulse shadow-[0_0_8px_#ff3333]"></span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6"
        >
          Engineering Intelligent Systems for{" "}
          <span className="text-neon-blue animate-pulse">Real-World Execution</span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
          className="text-lg md:text-xl text-gray-400"
        >
          ENGNF1 is India&apos;s first optimization engine powered by AI + Quantum algorithms.
        </motion.p>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 z-10 flex flex-col items-center justify-center opacity-70"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <span className="text-xs uppercase tracking-[0.3em] mb-3 text-neon-green">Advanced Autonomous Techniques</span>
        <div className="w-px h-12 bg-linear-to-b from-neon-green to-transparent"></div>
      </motion.div>
    </div>
  );
}
