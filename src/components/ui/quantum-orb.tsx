'use client';
import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import * as THREE from 'three';

const Orb = () => {
    const meshRef = useRef<THREE.Mesh>(null!);
    const noise = useMemo(() => new THREE.TextureLoader().load('/noise.png'), []);
    noise.wrapS = noise.wrapT = THREE.RepeatWrapping;

    const uniforms = useMemo(
        () => ({
            u_time: { value: 0.0 },
            u_intensity: { value: 0.8 },
            u_noise: { value: noise },
        }),
        [noise]
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
                    uniform sampler2D u_noise;
                    varying vec2 vUv;

                    // Perlin noise function
                    vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
                    vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
                    vec4 permute(vec4 x) { return mod289(((x*34.0)+1.0)*x); }
                    vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }
                    float snoise(vec3 v) {
                        const vec2 C = vec2(1.0/6.0, 1.0/3.0);
                        const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
                        vec3 i = floor(v + dot(v, C.yyy));
                        vec3 x0 = v - i + dot(i, C.xxx);
                        vec3 g = step(x0.yzx, x0.xyz);
                        vec3 l = 1.0 - g;
                        vec3 i1 = min(g.xyz, l.zxy);
                        vec3 i2 = max(g.xyz, l.zxy);
                        vec3 x1 = x0 - i1 + C.xxx;
                        vec3 x2 = x0 - i2 + C.yyy;
                        vec3 x3 = x0 - D.yyy;
                        i = mod289(i);
                        vec4 p = permute(permute(permute(
                                i.z + vec4(0.0, i1.z, i2.z, 1.0))
                                + i.y + vec4(0.0, i1.y, i2.y, 1.0))
                                + i.x + vec4(0.0, i1.x, i2.x, 1.0));
                        float n_ = 0.142857142857; 
                        vec3 ns = n_ * D.wyz - D.xzx;
                        vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
                        vec4 x_ = floor(j * ns.z);
                        vec4 y_ = floor(j - 7.0 * x_);
                        vec4 x = x_ *ns.x + ns.yyyy;
                        vec4 y = y_ *ns.x + ns.yyyy;
                        vec4 h = 1.0 - abs(x) - abs(y);
                        vec4 b0 = vec4(x.xy, y.xy);
                        vec4 b1 = vec4(x.zw, y.zw);
                        vec4 s0 = floor(b0)*2.0 + 1.0;
                        vec4 s1 = floor(b1)*2.0 + 1.0;
                        vec4 sh = -step(h, vec4(0.0));
                        vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy;
                        vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww;
                        vec3 p0 = vec3(a0.xy,h.x);
                        vec3 p1 = vec3(a0.zw,h.y);
                        vec3 p2 = vec3(a1.xy,h.z);
                        vec3 p3 = vec3(a1.zw,h.w);
                        vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2,p2), dot(p3,p3)));
                        p0 *= norm.x;
                        p1 *= norm.y;
                        p2 *= norm.z;
                        p3 *= norm.w;
                        vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
                        m = m * m;
                        return 42.0 * dot(m*m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
                    }

                    void main() {
                        float noise = snoise(vec3(vUv * 3.0, u_time));
                        vec3 color1 = vec3(0.1, 0.1, 0.8); // Deep blue
                        vec3 color2 = vec3(0.5, 0.1, 0.9); // Violet
                        vec3 color3 = vec3(1.0, 0.8, 0.3); // Golden yellow
                        
                        vec3 finalColor = mix(color1, color2, smoothstep(0.3, 0.7, noise));
                        finalColor = mix(finalColor, color3, smoothstep(0.6, 0.8, noise) * 0.5);

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
