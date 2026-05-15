"use client";

import { useRef, useMemo, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

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

export default function GlobalBackground() {
  return (
    <div className="fixed inset-0 z-0 bg-black pointer-events-none">
      <div className="absolute inset-0 opacity-60">
        <Canvas camera={{ position: [0, 0, 8] }}>
          <NodeNetwork />
        </Canvas>
      </div>
    </div>
  );
}
