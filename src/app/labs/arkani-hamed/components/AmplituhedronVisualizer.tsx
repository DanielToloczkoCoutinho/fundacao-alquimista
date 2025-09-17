'use client';
import { Suspense, useState, useRef } from 'react';
import { ARCanvas, DefaultXRControllers, Interactive, useHitTest } from '@react-three/xr';
import { Box, OrbitControls } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function Jewel() {
  const [position, setPosition] = useState<[number, number, number]>([0, 0, -0.5]);
  const hitTestRef = useRef<THREE.Mesh>(null!);

  useHitTest((hitMatrix) => {
    if (hitTestRef.current) {
      hitMatrix.decompose(
        hitTestRef.current.position,
        hitTestRef.current.quaternion,
        hitTestRef.current.scale
      );
    }
  });

  useFrame((state, delta) => {
    if(hitTestRef.current) {
        hitTestRef.current.rotation.y += delta * 0.5;
    }
  })

  return (
    <Interactive onSelect={() => console.log('Jewel selected')}>
        <mesh ref={hitTestRef}>
          <Box args={[0.2, 0.2, 0.2]}>
              <meshStandardMaterial color="violet" emissive="#9400D3" emissiveIntensity={1} />
          </Box>
        </mesh>
    </Interactive>
  );
}

export default function AmplituhedronVisualizer() {
  return (
    <div className="w-full h-full relative">
      <ARCanvas sessionInit={{ requiredFeatures: ['hit-test'] }}>
          <ambientLight intensity={1.5} />
          <pointLight position={[10, 10, 10]} />
          <Suspense fallback={null}>
            <Jewel />
          </Suspense>
          <DefaultXRControllers />
      </ARCanvas>
    </div>
  );
}
