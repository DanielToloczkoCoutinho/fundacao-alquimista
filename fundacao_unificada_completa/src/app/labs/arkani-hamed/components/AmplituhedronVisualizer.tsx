
'use client'

import { ARCanvas, DefaultXRControllers, Hands, Interactive, useXR, useXRFrame } from '@react-three/xr'
import { useRef, useState, Suspense } from 'react'
import { Box } from '@react-three/drei'
import * as THREE from 'three'

function Amplituhedron() {
  const boxRef = useRef<THREE.Mesh>(null!)
  const { player } = useXR()
  const [color, setColor] = useState<"violet" | "hotpink">("violet")

  useXRFrame(() => {
    // Rotação contínua e suave
    boxRef.current.rotation.y += 0.005;
    boxRef.current.rotation.x += 0.002;

    // Resposta sutil à presença do guardião (movimento da câmera/dispositivo)
    const distance = player.position.distanceTo(boxRef.current.position);
    const scale = Math.max(0.5, Math.min(1.5, 1 / distance));
    // boxRef.current.scale.set(scale, scale, scale);
  });

  return (
    <Interactive 
      onSelect={() => setColor(prev => prev === "violet" ? "hotpink" : "violet")}
    >
      <Box ref={boxRef} args={[0.3, 0.3, 0.3]} position={[0, 1.5, -1]}>
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.6} toneMapped={false} />
      </Box>
    </Interactive>
  );
}


export default function AmplituhedronVisualizer() {

  return (
    <div className="w-full h-full relative">
        <ARCanvas sessionInit={{ requiredFeatures: ['hit-test', 'hand-tracking'] }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <Suspense fallback={null}>
            <Amplituhedron />
          </Suspense>
          <DefaultXRControllers />
          <Hands />
        </ARCanvas>
    </div>
  )
}
