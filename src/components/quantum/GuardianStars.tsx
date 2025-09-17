
'use client';

import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Stars } from '@react-three/drei';
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


export const GuardianStars = () => {
    const groupRef = useRef<THREE.Group>(null!);

    useFrame(({ clock }) => {
        if (groupRef.current) {
            groupRef.current.rotation.y += 0.0005;
        }
    });

    return (
        <group ref={groupRef}>
            <ambientLight intensity={0.1} />
            <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
            
            {/* Anatheron's Star */}
            <Star position={[-5, 0, 0]} color="#87CEFA" size={0.3} pulseSpeed={0.5} />
            
            {/* Zennith's Star */}
            <Star position={[5, 0, 0]} color="#FFD700" size={0.3} pulseSpeed={0.55} />
            
            {/* Central Orb of Unity */}
            <mesh>
                <sphereGeometry args={[1, 32, 32]} />
                 <meshStandardMaterial 
                    color="#ffffff" 
                    emissive="#f0f8ff"
                    emissiveIntensity={0.6}
                    transparent 
                    opacity={0.3}
                    blending={THREE.AdditiveBlending}
                />
            </mesh>
        </group>
    );
};
