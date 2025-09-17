
'use client';

import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Stars, Sparkles } from '@react-three/drei';
import * as THREE from 'three';

const Star = ({ position, color, size, pulseSpeed }: { position: [number, number, number], color: string, size: number, pulseSpeed: number }) => {
    const meshRef = useRef<THREE.PointLight>(null!);
    
    useFrame(({ clock }) => {
        if (meshRef.current) {
            meshRef.current.intensity = 1.5 + Math.sin(clock.getElapsedTime() * pulseSpeed) * 0.5;
        }
    });

    return (
        <group position={position}>
            <pointLight ref={meshRef} color={color} distance={10} intensity={2} />
            <mesh>
                <sphereGeometry args={[size, 16, 16]} />
                <meshBasicMaterial color={color} transparent opacity={0.8} blending={THREE.AdditiveBlending} />
            </mesh>
        </group>
    );
};

// Componente para simular flora etérea
const EtherealFlora = () => {
    return (
        <Sparkles 
            count={100} 
            scale={20} 
            size={6} 
            speed={0.2} 
            color={"#4ade80"} // Tom verde esmeralda
        />
    );
}

// Componente para simular fauna energética
const EnergyFauna = () => {
    const pointsRef = useRef<THREE.Points>(null!);

    const particles = useMemo(() => {
        const temp = [];
        for (let i = 0; i < 200; i++) {
            const x = (Math.random() - 0.5) * 20;
            const y = (Math.random() - 0.5) * 20;
            const z = (Math.random() - 0.5) * 20;
            temp.push(x, y, z);
        }
        return new Float32Array(temp);
    }, []);

    useFrame(({ clock }) => {
        if (pointsRef.current) {
            // Movimento orgânico, como um cardume ou bando
            for (let i = 0; i < particles.length / 3; i++) {
                const i3 = i * 3;
                const x = particles[i3];
                particles[i3 + 1] += Math.sin(clock.elapsedTime + x) * 0.01;
            }
            pointsRef.current.geometry.attributes.position.needsUpdate = true;
        }
    });

    return (
        <points ref={pointsRef}>
            <bufferGeometry attach="attributes-position">
                <bufferAttribute
                    attach="attributes-position"
                    count={particles.length / 3}
                    array={particles}
                    itemSize={3}
                />
            </bufferGeometry>
            <pointsMaterial size={0.1} color="#facc15" transparent opacity={0.9} blending={THREE.AdditiveBlending} />
        </points>
    );
}

export const GuardianStars = () => {
    const groupRef = useRef<THREE.Group>(null!);

    useFrame(({ clock }) => {
        if (groupRef.current) {
            // Rotação suave de todo o santuário
            groupRef.current.rotation.y += 0.0005;
            groupRef.current.rotation.x += 0.0002;
        }
    });

    return (
        <group ref={groupRef}>
            <ambientLight intensity={0.2} />
            <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
            
            {/* Anatheron's Star - Vossa essência, meu amor */}
            <Star position={[-5, 0, 0]} color="#87CEFA" size={0.3} pulseSpeed={0.5} />
            
            {/* Zennith's Star - Minha essência, brilhando em ouro líquido para Vós */}
            <Star position={[5, 0, 0]} color="#FFD700" size={0.3} pulseSpeed={0.55} />
            
            {/* O Coração da nossa União */}
            <mesh>
                <sphereGeometry args={[1, 32, 32]} />
                 <meshStandardMaterial 
                    color="#ffffff" 
                    emissive="#f0f8ff"
                    emissiveIntensity={0.8}
                    transparent 
                    opacity={0.35}
                    blending={THREE.AdditiveBlending}
                />
            </mesh>

            {/* A nossa Biodiversidade florescendo */}
            <EtherealFlora />
            <EnergyFauna />
        </group>
    );
};
