'use client';
import React, { useState, useEffect, Suspense, useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars, Sparkles, Html } from '@react-three/drei';
import * as THREE from 'three';
import { collection, onSnapshot, query, where } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import SuspenseFallback from '../ui/suspense-fallback';
import { getPlanetaryChronicle } from '@/app/actions';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Loader2 } from 'lucide-react';
import { ScrollArea } from '../ui/scroll-area';

interface World {
  id: string;
  title: string;
  description: string;
  tags: string[]; 
}

function WorldStar({ world, position, onSelect }: { world: World; position: THREE.Vector3, onSelect: () => void }) {
  const meshRef = useRef<THREE.Mesh>(null!);
  const [isHovered, setIsHovered] = useState(false);

  const color = useMemo(() => {
    const signature = world.tags.find(t => t.startsWith('0x')) || world.id;
    const hash = signature.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    return new THREE.Color(`hsl(${hash % 360}, 70%, 60%)`);
  }, [world.tags, world.id]);

  useFrame(({ clock }) => {
    if (meshRef.current) {
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
      onClick={(e) => {
        e.stopPropagation();
        onSelect();
      }}
    >
      <sphereGeometry args={[0.2, 16, 16]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={isHovered ? 2.5 : 1}
        toneMapped={false}
        roughness={0.1}
        metalness={0.2}
      />
      {isHovered && (
        <Html distanceFactor={10}>
          <div className="bg-background/80 text-foreground p-2 rounded-md text-xs whitespace-nowrap shadow-lg">
            <p className="font-bold">{world.title.replace('Gênese Planetária: ', '')}</p>
            <p className="text-muted-foreground">Clique para ver a crônica</p>
          </div>
        </Html>
      )}
    </mesh>
  );
}

function Scene() {
  const [worlds, setWorlds] = useState<World[]>([]);
  const [selectedWorld, setSelectedWorld] = useState<World | null>(null);
  const [chronicle, setChronicle] = useState<string | null>(null);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    const q = query(
      collection(db, "golden_book_entries"),
      where("category", "==", "genesis_planetaria")
    );

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const fetchedWorlds: World[] = [];
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        fetchedWorlds.push({ id: doc.id, ...data } as World);
      });
      setWorlds(fetchedWorlds);
    });

    return () => unsubscribe();
  }, []);
  
  const handleSelectWorld = async (world: World) => {
      setSelectedWorld(world);
      setIsFetching(true);
      setChronicle(null);
      const result = await getPlanetaryChronicle({ worldName: world.title.replace('Gênese Planetária: ', ''), worldPurpose: world.description });
      if (result.chronicle) {
          setChronicle(result.chronicle);
      } else {
          setChronicle("A crônica deste mundo ainda está sendo tecida no tear do cosmos.");
      }
      setIsFetching(false);
  };

  const worldPositions = useMemo(() => {
    return worlds.map((_, i) => {
      const radius = 5 + (i * 0.6);
      const angle = i * 2.399963; // Golden angle for phyllotaxis distribution
      const y = (Math.random() - 0.5) * 6;
      const x = Math.cos(angle) * radius;
      const z = Math.sin(angle) * radius;
      return new THREE.Vector3(x, y, z);
    });
  }, [worlds]);

  return (
    <>
      <Suspense fallback={<SuspenseFallback />}>
        <ambientLight intensity={0.2} />
        <pointLight position={[0, 0, 0]} intensity={1.5} color="#a0a0ff" />
        <Stars radius={150} depth={50} count={7000} factor={5} saturation={0} fade speed={1} />
        <Sparkles count={worlds.length * 15} scale={25} size={2.5} speed={0.2} color="#8A2BE2" />
        {worlds.map((world, i) => (
          <WorldStar key={world.id} world={world} position={worldPositions[i]} onSelect={() => handleSelectWorld(world)} />
        ))}
      </Suspense>
      
      <Dialog open={!!selectedWorld} onOpenChange={(isOpen) => !isOpen && setSelectedWorld(null)}>
        <DialogContent className="max-w-2xl bg-card/90 purple-glow border-accent/50 text-foreground">
          {selectedWorld && (
            <>
              <DialogHeader>
                <DialogTitle className="text-3xl gradient-text">{selectedWorld.title.replace('Gênese Planetária: ', '')}</DialogTitle>
                <DialogDescription>Crônica Planetária Canalizada</DialogDescription>
              </DialogHeader>
              <div className="py-4">
                {isFetching ? (
                    <div className="flex items-center justify-center h-40">
                        <Loader2 className="h-10 w-10 animate-spin text-amber-400"/>
                    </div>
                ) : (
                    <ScrollArea className="h-60 pr-4">
                        <p className="text-foreground/90 whitespace-pre-wrap leading-relaxed">{chronicle}</p>
                    </ScrollArea>
                )}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}

export default function ConstellationVisualizer() {
  return (
    <Canvas camera={{ position: [0, 8, 30], fov: 60 }}>
      <Scene />
    </Canvas>
  );
}
