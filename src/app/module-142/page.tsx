
'use client';
import React, { useState, useEffect, useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Camera } from 'lucide-react';

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

// Componente principal do Módulo 142
export default function Module142Page() {
  const [resonanceActive, setResonanceActive] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const oscillatorRef = useRef<OscillatorNode | null>(null);

  const toggleResonance = () => {
    if (typeof window === 'undefined') return;

    if (!audioCtxRef.current) {
      audioCtxRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
    }

    if (resonanceActive) {
      if (oscillatorRef.current) {
        oscillatorRef.current.stop();
        oscillatorRef.current.disconnect();
        oscillatorRef.current = null;
      }
      setResonanceActive(false);
    } else {
      const oscillator = audioCtxRef.current.createOscillator();
      oscillator.type = 'sine';
      oscillator.frequency.setValueAtTime(432, audioCtxRef.current.currentTime);
      oscillator.connect(audioCtxRef.current.destination);
      oscillator.start();
      oscillatorRef.current = oscillator;
      setResonanceActive(true);
    }
  };
  
  useEffect(() => {
    // Cleanup ao desmontar o componente
    return () => {
      if (oscillatorRef.current) {
        oscillatorRef.current.stop();
      }
      if (audioCtxRef.current && audioCtxRef.current.state !== 'closed') {
        audioCtxRef.current.close();
      }
    };
  }, []);

  return (
    <div className="p-4 md:p-8 bg-background text-foreground min-h-screen flex flex-col items-center justify-center">
      <Card className="w-full max-w-4xl bg-card/50 purple-glow text-center">
        <CardHeader>
          <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
            <Camera className="text-cyan-400" /> Módulo 142: Tomografia Quântica
          </CardTitle>
          <CardDescription className="text-lg mt-2">
            O Olho que Vê o Invisível. Visualize o estado de coerência e a ressonância de um nó vibracional em tempo real.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="relative w-full h-96 bg-black/20 rounded-lg overflow-hidden border border-primary/30">
            <Suspense fallback={<p className="text-center p-4">Carregando visualizador...</p>}>
              <Canvas>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1.5}/>
                <QuantumOrb />
                <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1.0}/>
              </Canvas>
            </Suspense>
          </div>
          <Button
            className="mt-6 font-bold"
            onClick={toggleResonance}
          >
            {resonanceActive ? 'Desativar Ressonância (432Hz)' : 'Ativar Ressonância Harmônica'}
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
