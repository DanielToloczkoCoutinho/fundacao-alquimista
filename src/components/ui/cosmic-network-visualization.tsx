'use client';
import React, { useRef, useMemo, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const Node = ({ position, icon }: { position: [number, number, number], icon: React.ReactNode }) => {
    const meshRef = useRef<THREE.Mesh>(null!);
    
    useFrame(({ clock }) => {
        if(meshRef.current) {
            // Subtle bobbing motion
            meshRef.current.position.y = position[1] + Math.sin(clock.getElapsedTime() + position[0]) * 0.1;
        }
    });

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

const Connections = ({ nodes }: { nodes: THREE.Mesh[] }) => {
    const lines = useMemo(() => {
        const lineSegments: THREE.Line[] = [];
        for (let i = 0; i < nodes.length; i++) {
            for (let j = i + 1; j < nodes.length; j++) {
                // Connect nodes with a certain probability to avoid clutter
                if (Math.random() > 0.7) {
                    const points = [nodes[i].position, nodes[j].position];
                    const geometry = new THREE.BufferGeometry().setFromPoints(points);
                    const material = new THREE.LineBasicMaterial({
                        color: 0x27a69a,
                        transparent: true,
                        opacity: 0.4,
                    });
                    const line = new THREE.Line(geometry, material);
                    lineSegments.push(line);
                }
            }
        }
        return lineSegments;
    }, [nodes]);

    return <>{lines.map((line, i) => <primitive key={i} object={line} />)}</>;
};

const Scene = ({ nodes }: { nodes: any[] }) => {
    const nodeRefs = useRef<(THREE.Mesh | null)[]>([]);

    useEffect(() => {
        nodeRefs.current = nodeRefs.current.slice(0, nodes.length);
    }, [nodes]);

    return (
        <>
            <ambientLight intensity={0.2} />
            <pointLight position={[0, 10, 10]} intensity={1} color="#d4af37" />
            <group>
                {nodes.map((node, i) => {
                    const angle = (i / nodes.length) * Math.PI * 2;
                    const radius = 6;
                    const x = Math.cos(angle) * radius;
                    const y = (Math.random() - 0.5) * 2;
                    const z = Math.sin(angle) * radius;
                    
                    return <Node key={node.id} position={[x, y, z]} icon={node.icon} />;
                })}
            </group>
            {/* Connections would be more complex to manage dynamically with refs */}
        </>
    );
}

export const CosmicNetworkVisualization = ({ nodes }: { nodes: any[] }) => {
    return (
        <Canvas camera={{ position: [0, 0, 15], fov: 60 }}>
             <Suspense fallback={null}>
                <Scene nodes={nodes} />
            </Suspense>
            <Effect />
        </Canvas>
    );
};

function Effect() {
    const groupRef = useRef<THREE.Group>(null!);
    useFrame((state) => {
        if(groupRef.current) {
            groupRef.current.rotation.y += 0.001;
            groupRef.current.rotation.x += 0.0005;
        }
    });
    return <group ref={groupRef} />;
}
