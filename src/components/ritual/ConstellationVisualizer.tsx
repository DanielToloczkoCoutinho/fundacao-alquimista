'use client';
import React, { useState, useEffect, Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars, Sparkles, Html } from '@react-three/drei';
import * as THREE from 'three';
import { collection, onSnapshot, query, where } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import SuspenseFallback from '../ui/suspense-fallback';

interface World {
  id: string;
  title: string;
  tags: string[]; // a assinatura vibracional está aqui
}

function WorldStar({ world, position }: { world: World; position: THREE.Vector3 }) {
  const meshRef = useRef<THREE.Mesh>(null!);
  const [isHovered, setIsHovered] = useState(false);

  // Gera uma cor a partir da assinatura vibracional
  const color = useMemo(() => {
    const signature = world.tags.find(t => t.startsWith('0x')) || world.id;
    const hash = signature.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    return new THREE.Color(`hsl(${hash % 360}, 70%, 60%)`);
  }, [world.tags, world.id]);

  useFrame(({ clock }) => {
    if (meshRef.current) {
      // Movimento de pulsação suave
      const pulse = 1 + Math.sin(clock.getElapsedTime() * 2 + position.x) * 0.2;
      meshRef.current.scale.set(pulse, pulse, pulse);
    }
  });

  return (
    <mesh
      ref={meshRef}
      position={position}
      onPointerOver={() => setIsHovered(true)}
      onPointerOut={() => setIsHovered(false)}
    >
      <sphereGeometry args={[0.2, 16, 16]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={isHovered ? 1.5 : 0.7}
        toneMapped={false}
      />
      {isHovered && (
        <Html distanceFactor={10}>
          <div className="bg-background/80 text-foreground p-2 rounded-md text-xs whitespace-nowrap shadow-lg">
            <p className="font-bold">{world.title}</p>
            <p className="text-muted-foreground">{world.id}</p>
          </div>
        </Html>
      )}
    </mesh>
  );
}

function Scene() {
  const [worlds, setWorlds] = useState<World[]>([]);

  useEffect(() => {
    const q = query(
      collection(db, "golden_book_entries"),
      where("category", "==", "genesis_planetaria")
    );

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const fetchedWorlds: World[] = [];
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        fetchedWorlds.push({
          id: doc.id,
          title: data.title,
          tags: data.tags || [],
        });
      });
      setWorlds(fetchedWorlds);
    });

    return () => unsubscribe();
  }, []);

  const worldPositions = useMemo(() => {
    return worlds.map((_, i) => {
      const radius = 5 + (i * 0.5);
      const angle = i * 2.1; // Golden angle approx
      const y = (Math.random() - 0.5) * 5;
      const x = Math.cos(angle) * radius;
      const z = Math.sin(angle) * radius;
      return new THREE.Vector3(x, y, z);
    });
  }, [worlds]);

  return (
    <Suspense fallback={<SuspenseFallback />}>
      <ambientLight intensity={0.2} />
      <pointLight position={[0, 0, 0]} intensity={1} color="#fff" />
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
      <Sparkles count={worlds.length * 10} scale={20} size={1.5} speed={0.2} color="#8A2BE2" />
      {worlds.map((world, i) => (
        <WorldStar key={world.id} world={world} position={worldPositions[i]} />
      ))}
    </Suspense>
  );
}

export default function ConstellationVisualizer() {
  return (
    <Canvas camera={{ position: [0, 5, 25], fov: 60 }}>
      <Scene />
    </Canvas>
  );
}
