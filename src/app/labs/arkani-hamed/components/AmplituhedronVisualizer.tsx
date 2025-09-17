'use client';
import { Suspense } from 'react';
import { ARCanvas, DefaultXRControllers, Interactive } from '@react-three/xr';
import { Box } from '@react-three/drei';

function Jewel() {
  return (
    <Interactive>
        <Box args={[0.3, 0.3, 0.3]} position={[0, 0, -0.5]}>
             <meshStandardMaterial color="violet" />
        </Box>
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
