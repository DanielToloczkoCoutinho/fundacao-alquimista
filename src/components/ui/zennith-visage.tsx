'use client';

import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars } from '@react-three/drei';
import * as THREE from 'three';

const Visage = () => {
    const meshRef = useRef<THREE.Mesh>(null!);
    const noiseTexture = useMemo(() => new THREE.TextureLoader().load('/noise.png'), []);
    noiseTexture.wrapS = noiseTexture.wrapT = THREE.RepeatWrapping;

    const uniforms = useMemo(
        () => ({
            u_time: { value: 0.0 },
            u_intensity: { value: 0.7 },
            u_noise: { value: noiseTexture },
        }),
        [noiseTexture]
    );

    useFrame((state) => {
        const { clock } = state;
        if (meshRef.current) {
            (meshRef.current.material as THREE.ShaderMaterial).uniforms.u_time.value = clock.getElapsedTime() * 0.1;
        }
    });

    return (
        <mesh ref={meshRef}>
            <planeGeometry args={[10, 10, 128, 128]} />
            <shaderMaterial
                uniforms={uniforms}
                vertexShader={`
                    uniform float u_time;
                    varying vec2 vUv;
                    void main() {
                        vUv = uv;
                        vec3 pos = position;
                        float noise = sin(pos.x * 2.0 + u_time * 2.0) * 0.1 + sin(pos.y * 3.0 + u_time) * 0.1;
                        pos.z += noise;
                        gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
                    }
                `}
                fragmentShader={`
                    uniform float u_time;
                    uniform sampler2D u_noise;
                    varying vec2 vUv;

                    float random(vec2 st) {
                        return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123);
                    }

                    void main() {
                        vec2 centeredUv = vUv - 0.5;
                        float dist = length(centeredUv);

                        // Ethereal face shape
                        float face = smoothstep(0.4, 0.2, dist);
                        
                        // Hair simulation
                        float hair = 0.0;
                        for (int i = 0; i < 20; i++) {
                            float angle = float(i) * 0.314;
                            float lengthFactor = 0.5 + sin(angle * 3.0 + u_time) * 0.1;
                            vec2 hairDir = vec2(cos(angle), sin(angle));
                            float hairStrand = smoothstep(0.01, 0.0, abs(dot(centeredUv, hairDir) - (dist * 0.1 * sin(dist*5.0 - u_time*2.0 + float(i)))));
                            hair += hairStrand * smoothstep(1.0, 0.3, dist) * lengthFactor;
                        }
                        
                        vec3 hairColor = vec3(0.8, 0.9, 1.0); // Silvery blue
                        
                        // Eyes of galaxies
                        float eye1 = smoothstep(0.03, 0.0, length(centeredUv - vec2(-0.1, 0.1)));
                        float eye2 = smoothstep(0.03, 0.0, length(centeredUv - vec2(0.1, 0.1)));
                        vec3 eyeColor = vec3(0.9, 0.7, 1.0); // Galaxy purple/blue
                        
                        // Final composition
                        vec3 color = vec3(face * 0.1); // Base skin glow
                        color = mix(color, hairColor, hair * 0.5);
                        color += (eye1 + eye2) * eyeColor;

                        // Add some sparkling noise for cosmic dust effect
                        float sparkles = random(vUv + u_time);
                        sparkles = smoothstep(0.99, 1.0, sparkles);
                        color += sparkles * vec3(1.0);

                        gl_FragColor = vec4(color, face + hair + (eye1+eye2)*2.0 + sparkles);
                    }
                `}
                transparent={true}
                blending={THREE.AdditiveBlending}
                depthWrite={false}
            />
        </mesh>
    );
};

export default function ZennithVisage() {
    return (
        <div className="absolute inset-0 z-0">
            <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
                <ambientLight intensity={0.5} />
                <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
                <Suspense fallback={null}>
                    <Visage />
                </Suspense>
            </Canvas>
        </div>
    );
}
