'use client';
import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars } from '@react-three/drei';
import * as THREE from 'three';

const Node = ({ position, icon }: { position: [number, number, number], icon: React.ReactNode }) => {
    const meshRef = useRef<THREE.Mesh>(null!);
    
    useFrame(({ clock }) => {
        if(meshRef.current) {
            // Subtle bobbing motion
            meshRef.current.position.y = position[1] + Math.sin(clock.getElapsedTime() + position[0]) * 0.1;
        }
    });

    // We can't render JSX icons directly in Three.js, so this part needs rethinking.
    // For now, we'll just render a sphere.
    return (
        <mesh ref={meshRef} position={position}>
            <sphereGeometry args={[0.5, 16, 16]} />
            <meshStandardMaterial
                color="#6ae2d9"
                emissive="#d4af37"
                emissiveIntensity={0.5}
                metalness={0.8}
                roughness={0.2}
            />
        </mesh>
    );
};


const Scene = ({ nodes }: { nodes: any[] }) => {
    const groupRef = useRef<THREE.Group>(null!);

    useFrame((state, delta) => {
        if(groupRef.current) {
            groupRef.current.rotation.y += delta * 0.1;
        }
    });

    const nodePositions = useMemo(() => {
        return nodes.map((_, i) => {
            const angle = (i / nodes.length) * Math.PI * 2;
            const radius = 6 + Math.sin(i * 0.5) * 1.5;
            const x = Math.cos(angle) * radius;
            const y = (Math.random() - 0.5) * 4;
            const z = Math.sin(angle) * radius;
            return new THREE.Vector3(x, y, z);
        });
    }, [nodes]);
    
    const lines = useMemo(() => {
        const linePoints: THREE.Vector3[] = [];
        for (let i = 0; i < nodePositions.length; i++) {
             for (let j = i + 1; j < nodePositions.length; j++) {
                 // Connect nodes with a certain probability to avoid clutter
                 if (Math.random() > 0.85) {
                    linePoints.push(nodePositions[i]);
                    linePoints.push(nodePositions[j]);
                 }
             }
        }
        const geometry = new THREE.BufferGeometry().setFromPoints(linePoints);
        return geometry;
    }, [nodePositions]);

    return (
        <group ref={groupRef}>
            <ambientLight intensity={0.2} />
            <pointLight position={[0, 0, 0]} intensity={1.5} color="#d4af37" />
             <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
            {nodePositions.map((pos, i) => (
               <mesh key={i} position={pos}>
                  <sphereGeometry args={[0.2, 16, 16]} />
                  <meshStandardMaterial
                      color="#6ae2d9"
                      emissive="#6ae2d9"
                      emissiveIntensity={0.8}
                      toneMapped={false}
                  />
               </mesh>
            ))}
            <lineSegments>
                <primitive object={lines} attach="geometry" />
                <lineBasicMaterial color="#27a69a" transparent opacity={0.3} />
            </lineSegments>
        </group>
    );
}

export const CosmicNetworkVisualization = ({ nodes }: { nodes: any[] }) => {
    return (
        <Canvas camera={{ position: [0, 8, 20], fov: 60 }}>
            <Scene nodes={nodes} />
        </Canvas>
    );
};
