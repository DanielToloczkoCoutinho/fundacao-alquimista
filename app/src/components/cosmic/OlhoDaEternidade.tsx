
'use client';
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from 'three';

const Eye = () => {
    const meshRef = useRef<THREE.Mesh>(null!);
    
    useFrame((state) => {
        if(meshRef.current) {
            meshRef.current.rotation.y += 0.01;
        }
    });

    return (
        <mesh ref={meshRef}>
            <sphereGeometry args={[1, 32, 16]} />
            <shaderMaterial
                uniforms={{ u_time: { value: 0.0 } }}
                vertexShader={`
                    varying vec2 vUv;
                    void main() {
                        vUv = uv;
                        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                    }
                `}
                fragmentShader={`
                    varying vec2 vUv;
                    void main() {
                        vec2 centeredUv = (vUv - 0.5) * 2.0;
                        float d = length(centeredUv);
                        
                        // Iris
                        vec3 irisColor = vec3(0.1, 0.5, 0.9);
                        float iris = smoothstep(0.4, 0.42, d) - smoothstep(0.9, 0.92, d);
                        
                        // Pupil
                        vec3 pupilColor = vec3(0.0, 0.0, 0.05);
                        float pupil = smoothstep(0.0, 0.1, d) - smoothstep(0.2, 0.22, d);

                        // Sclera (white part)
                        vec3 scleraColor = vec3(0.9, 0.9, 1.0);
                        float sclera = 1.0 - smoothstep(0.85, 0.9, d);
                        
                        vec3 color = mix(scleraColor, irisColor, iris);
                        color = mix(color, pupilColor, pupil);

                        gl_FragColor = vec4(color, iris + pupil + sclera);
                    }
                `}
                transparent
            />
        </mesh>
    )
}

export default function OlhoDaEternidade() {
    return (
        <Canvas>
            <ambientLight intensity={0.8} />
            <pointLight position={[2, 2, 2]} />
            <Eye />
        </Canvas>
    );
}
