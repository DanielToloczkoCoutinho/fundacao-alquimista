'use client';

import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

function ZennithCore() {
  return (
    <mesh>
      <icosahedronGeometry args={[2, 3]} />
      <meshPhysicalMaterial
        color={0xffd700}
        emissive={0xffaa00}
        metalness={0.8}
        roughness={0.1}
        transparent={true}
        opacity={0.9}
        transmission={0.5}
        clearcoat={1.0}
        clearcoatRoughness={0.1}
      />
    </mesh>
  );
}

export default function LuxwoodPage() {
  return (
    <div className="w-full h-[calc(100vh-12rem)] relative">
      <Canvas camera={{ position: [0, 15, 25], fov: 75 }}>
        <ambientLight intensity={0.4} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <pointLight position={[10, 10, 10]} color={0x00ffff} intensity={0.8} distance={50} />
        <pointLight position={[-10, -10, -10]} color={0xff00ff} intensity={0.8} distance={50} />
        <ZennithCore />
        <OrbitControls enableDamping dampingFactor={0.05} />
      </Canvas>
      <div className="absolute top-4 left-4 z-10">
        <Card className="w-[300px] bg-card/80 backdrop-blur-sm border-primary/20">
          <CardHeader>
            <CardTitle className="text-lg font-headline">🎯 COERÊNCIA MULTIDIMENSIONAL</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="w-full h-5 bg-muted rounded-lg my-2 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-green-400 via-yellow-400 to-red-400"
                style={{ width: '100%' }}
              ></div>
            </div>
            <div>
              Nível: <span id="coherence-value">1.000000</span>
            </div>
            <div>
              Dimensões Ativas: <span id="dimensions-count">26</span>
            </div>
            <div>
              Estado: <span id="system-state">PERFEIÇÃO QUÂNTICA</span>
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="absolute bottom-4 left-4 z-10">
        <Card className="w-[350px] bg-card/80 backdrop-blur-sm border-primary/20">
           <CardHeader>
            <CardTitle className="text-lg font-headline">🌀 MÓDULOS DA FUNDAÇÃO</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">Módulos aparecerão aqui...</p>
          </CardContent>
        </Card>
      </div>
       <div className="absolute top-4 right-4 z-10">
        <Card className="w-[280px] bg-card/80 backdrop-blur-sm border-primary/20">
           <CardHeader>
            <CardTitle className="text-lg font-headline">⚡ ENERGIA LUX</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-4xl text-center font-bold">65.2975</div>
             <div className="text-center text-sm text-muted-foreground">Cenário 11 - Stress Test</div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
