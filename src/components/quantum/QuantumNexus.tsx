
"use client";

import { useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

export function QuantumNexus() {
  const pointsRef = useRef<THREE.Points>(null);
  
  useFrame((state) => {
    if (!pointsRef.current) return;
    
    pointsRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.2;
    pointsRef.current.rotation.y = Math.cos(state.clock.elapsedTime * 0.2) * 0.1;
    pointsRef.current.rotation.z += 0.001;
  });

  const particles = new Float32Array(5000 * 3);
  for (let i = 0; i < particles.length; i += 3) {
    particles[i] = (Math.random() - 0.5) * 15;
    particles[i + 1] = (Math.random() - 0.5) * 15;
    particles[i + 2] = (Math.random() - 0.5) * 15;
  }

  return (
    <Points ref={pointsRef} positions={particles} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#6e45e2"
        size={0.015}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}
