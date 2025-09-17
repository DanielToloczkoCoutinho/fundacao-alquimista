'use client';
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Text } from '@react-three/drei';
import { ARButton, XR } from '@react-three/xr';

function Jewel() {
  const ref = React.useRef<THREE.Mesh>(null!);
  return (
    <mesh ref={ref} position={[0, 0, -2]}>
      <icosahedronGeometry args={[0.3, 0]} />
      <meshStandardMaterial color="cyan" roughness={0.1} metalness={0.9} />
    </mesh>
  );
}

export default function AmplituhedronVisualizer() {
  return (
    <div className="w-full h-full relative">
      <ARButton sessionInit={{ requiredFeatures: ['hit-test'] }} className="absolute bottom-4 right-4 z-10" />
      <Canvas>
        <XR>
          <Suspense fallback={null}>
            <Jewel />
          </Suspense>
          <ambientLight intensity={1} />
          <pointLight position={[10, 10, 10]} />
        </XR>
      </Canvas>
    </div>
  );
}
