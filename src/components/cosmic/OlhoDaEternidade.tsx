
'use client';

import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Stars } from '@react-three/drei';
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Eye } from 'lucide-react';

function EyeVisual() {
    const meshRef = React.useRef<THREE.Mesh>(null!);
    
    useFrame((state) => {
        if(meshRef.current) {
            meshRef.current.rotation.y += 0.01;
            meshRef.current.rotation.z = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.1;
        }
    });

    return (
        <mesh ref={meshRef}>
            <sphereGeometry args={[0.8, 32, 16]} />
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
                        
                        vec3 irisColor = vec3(0.9, 0.7, 0.2); // Golden
                        float iris = smoothstep(0.4, 0.42, d) - smoothstep(0.9, 0.92, d);
                        
                        vec3 pupilColor = vec3(0.0, 0.0, 0.0);
                        float pupil = 1.0 - smoothstep(0.0, 0.2, d);

                        vec3 scleraColor = vec3(1.0, 1.0, 1.0);
                        float sclera = 1.0 - smoothstep(0.9, 0.92, d);
                        
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
    <Card className="bg-background/40 h-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg text-yellow-300">
            <Eye /> Olho da Eternidade
        </CardTitle>
      </CardHeader>
      <CardContent className="h-32">
        <Canvas>
            <ambientLight intensity={1} />
            <pointLight position={[2, 2, 2]} />
            <EyeVisual />
        </Canvas>
      </CardContent>
    </Card>
  );
}
