
'use client';
import React, { useState, useEffect, useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Camera } from 'lucide-react';
import { resonanceTone } from '@/lib/audio-utils';

// Componente para a esfera quântica
function QuantumOrb() {
  const meshRef = useRef<THREE.Mesh>(null!);
  const [coherence, setCoherence] = useState(0.5);

  useEffect(() => {
    const interval = setInterval(() => setCoherence(Math.random()), 1000);
    return () => clearInterval(interval);
  }, []);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.005;
      meshRef.current.rotation.y += 0.005;
    }
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[1.5, 32, 32]} />
      <meshStandardMaterial
        color={`hsl(${coherence * 360}, 70%, 50%)`}
        emissive={`hsl(${coherence * 360}, 70%, 30%)`}
        metalness={0.7}
        roughness={0.2}
      />
    </mesh>
  );
}

// Componente principal do visualizador
export default function TomographyVisualizer() {
  const [isResonating, setIsResonating] = useState(false);

  const toggleResonance = async () => {
    if (isResonating) return;
    setIsResonating(true);
    await resonanceTone(432);
    setIsResonating(false);
  };
  
  return (
    <>
      <div className="relative w-full h-96 bg-black/20 rounded-lg overflow-hidden border border-primary/30">
          <Canvas>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={1.5}/>
            <QuantumOrb />
            <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1.0}/>
          </Canvas>
      </div>
      <Button
        className="mt-6 font-bold"
        onClick={toggleResonance}
        disabled={isResonating}
      >
        {isResonating ? 'Ressonando...' : 'Ativar Ressonância Harmônica'}
      </Button>
    </>
  );
}
