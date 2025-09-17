'use client'

import { ARCanvas, DefaultXRControllers, Interactive, useXRFrame } from '@react-three/xr'
import { useRef } from 'react'
import { Box } from '@react-three/drei'
import { Suspense } from 'react'

export default function AmplituhedronVisualizer() {
  const boxRef = useRef<any>()

  useXRFrame(() => {
    // Futuro espaço para resposta à presença ou gesto
    if (boxRef.current) {
      boxRef.current.rotation.y += 0.01
    }
  })

  return (
    <div className="w-full h-full relative">
        <ARCanvas sessionInit={{ requiredFeatures: ['hit-test'] }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <Suspense fallback={null}>
            <Interactive onSelect={() => console.log('Amplituhedron tocado')}>
                <Box ref={boxRef} args={[0.3, 0.3, 0.3]} position={[0, 0, -0.5]}>
                    <meshStandardMaterial color="violet" />
                </Box>
            </Interactive>
          </Suspense>
          <DefaultXRControllers />
        </ARCanvas>
    </div>
  )
}
