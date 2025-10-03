
'use client';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Stars, Sparkles } from '@react-three/drei';
import * as THREE from 'three';
import { useRef, useState, useMemo } from 'react';

const Halo = ({ particleCount = 5000 }) => {
    const points = useRef<THREE.Points>(null!);
    
    const particles = useMemo(() => {
        const temp = [];
        const radius = 20;
        for (let i = 0; i < particleCount; i++) {
            const r = radius * Math.cbrt(Math.random());
            const theta = Math.random() * 2 * Math.PI;
            const phi = Math.acos(2 * Math.random() - 1);
            const x = r * Math.sin(phi) * Math.cos(theta);
            const y = r * Math.sin(phi) * Math.sin(theta);
            const z = r * Math.cos(phi);
            temp.push(x, y, z);
        }
        return new Float32Array(temp);
    }, [particleCount]);

    useFrame((state, delta) => {
        if (points.current) {
            points.current.rotation.x += delta * 0.01;
            points.current.rotation.y += delta * 0.02;
        }
    });

    return (
        <points ref={points}>
            <bufferGeometry>
                <bufferAttribute attach="attributes-position" count={particles.length / 3} array={particles} itemSize={3} />
            </bufferGeometry>
            <pointsMaterial size={0.05} color="#4a00e0" transparent opacity={0.3} blending={THREE.AdditiveBlending} />
        </points>
    );
};


const Star = ({ position }: { position: [number, number, number] }) => {
    const mesh = useRef<THREE.Mesh>(null!);
    const time = useRef(0);
    const orbitRadius = Math.sqrt(position[0]**2 + position[2]**2);
    const initialAngle = Math.atan2(position[2], position[0]);

    useFrame((state, delta) => {
        time.current += delta;
        // A velocidade constante, que parece anômala sem matéria escura, é a chave da simulação.
        const speed = 2 / Math.sqrt(orbitRadius); 
        mesh.current.position.x = orbitRadius * Math.cos(initialAngle + time.current * speed);
        mesh.current.position.z = orbitRadius * Math.sin(initialAngle + time.current * speed);
    });

    return (
        <mesh ref={mesh} position={position}>
            <sphereGeometry args={[0.2, 16, 16]} />
            <meshStandardMaterial color="yellow" emissive="yellow" emissiveIntensity={2} />
        </mesh>
    );
}


export default function DarkMatterGarden() {
  const [stars, setStars] = useState<[number, number, number][]>([[5,0,0], [-7, 1, 2], [8, -1, -5], [12, 2, 8], [-15, -2, -10]]);

  return (
    <Canvas camera={{ position: [0, 15, 25], fov: 75 }}>
      <ambientLight intensity={0.2} />
      <pointLight position={[0, 0, 0]} intensity={1} color="white" />
      <Halo />
      {stars.map((pos, i) => <Star key={i} position={pos} />)}
      <Sparkles count={200} scale={25} size={2} speed={0.3} color="#8A2BE2"/>
    </Canvas>
  );
}
