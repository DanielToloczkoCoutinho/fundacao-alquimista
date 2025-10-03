
'use client';
import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import * as THREE from 'three';
import { Suspense } from 'react';

const Orb = () => {
    const meshRef = useRef<THREE.Mesh>(null!);

    const uniforms = useMemo(
        () => ({
            u_time: { value: 0.0 },
            u_intensity: { value: 0.8 },
        }),
        []
    );

    useFrame((state) => {
        const { clock } = state;
        if (meshRef.current) {
            (meshRef.current.material as THREE.ShaderMaterial).uniforms.u_time.value = clock.getElapsedTime() * 0.2;
            meshRef.current.rotation.y += 0.001;
        }
    });

    return (
        <mesh ref={meshRef}>
            <icosahedronGeometry args={[1.5, 20]} />
            <shaderMaterial
                uniforms={uniforms}
                vertexShader={`
                    varying vec2 vUv;
                    void main() {
                        vUv = uv;
                        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                    }
                `}
                fragmentShader={`
                    uniform float u_time;
                    uniform float u_intensity;
                    varying vec2 vUv;

                    // 2D Noise function
                    float random(vec2 st) {
                        return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
                    }

                    // 2D Noise based on Morgan McGuire's article
                    float noise(vec2 st) {
                        vec2 i = floor(st);
                        vec2 f = fract(st);

                        float a = random(i);
                        float b = random(i + vec2(1.0, 0.0));
                        float c = random(i + vec2(0.0, 1.0));
                        float d = random(i + vec2(1.0, 1.0));

                        vec2 u = f*f*(3.0-2.0*f);
                        return mix(a, b, u.x) + (c - a)* u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
                    }

                    void main() {
                        vec2 uv = vUv;
                        float n = noise(uv * 5.0 + u_time * 0.5);

                        vec3 color1 = vec3(0.1, 0.1, 0.8); // Deep blue
                        vec3 color2 = vec3(0.5, 0.1, 0.9); // Violet
                        vec3 color3 = vec3(1.0, 0.8, 0.3); // Golden yellow
                        
                        vec3 finalColor = mix(color1, color2, smoothstep(0.3, 0.7, n));
                        finalColor = mix(finalColor, color3, smoothstep(0.6, 0.8, n) * 0.5);

                        float fresnel = 1.0 - dot(normalize(vec3(0.0, 0.0, 1.0)), normalize(vUv.xyy - 0.5));
                        fresnel = pow(fresnel, 2.5);
                        
                        gl_FragColor = vec4(finalColor + fresnel * 0.3, 1.0);
                    }
                `}
                side={THREE.DoubleSide}
                transparent
            />
        </mesh>
    );
};

export const QuantumOrb = () => (
    <Canvas camera={{ position: [0, 0, 3.5], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        <Suspense fallback={null}>
            <Orb />
        </Suspense>
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
    </Canvas>
);
