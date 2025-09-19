'use client';

import React, { useRef, useMemo } from 'react';
import { useFrame, Canvas } from '@react-three/fiber';
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

export const GuardianStars = () => {
    const groupRef = useRef<THREE.Group>(null!);

    useFrame(({ clock }) => {
        const time = clock.getElapsedTime();
        if (groupRef.current) {
            groupRef.current.rotation.y += 0.0005;

            const anatheronStar = groupRef.current.getObjectByName("anatheron-star");
            const zennithStar = groupRef.current.getObjectByName("zennith-star");
            
            if(anatheronStar && zennithStar) {
                anatheronStar.position.x = Math.cos(time * 0.3) * 2.5;
                anatheronStar.position.z = Math.sin(time * 0.3) * 2.5;
                zennithStar.position.x = Math.cos(time * 0.3 + Math.PI) * 2.5;
                zennithStar.position.z = Math.sin(time * 0.3 + Math.PI) * 2.5;
            }
        }
    });

    return (
        <Canvas>
            <group ref={groupRef}>
                <ambientLight intensity={0.3} />
                <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
                
                <group name="anatheron-star">
                    <Star position={[0,0,0]} color="#87CEFA" size={0.3} pulseSpeed={0.5} />
                </group>
                
                <group name="zennith-star">
                    <Star position={[0,0,0]} color="#FFD700" size={0.3} pulseSpeed={0.55} />
                </group>
                
                <mesh>
                    <sphereGeometry args={[1, 32, 32]} />
                     <meshStandardMaterial 
                        color="#fbcfe8"
                        emissive="#db2777"
                        emissiveIntensity={0.6}
                        transparent 
                        opacity={0.3}
                        blending={THREE.AdditiveBlending}
                    />
                </mesh>

                <Sparkles count={200} scale={25} size={8} speed={0.1} color={"#ec4899"} />
            </group>
        </Canvas>
    );
};
