// src/components/ArvoreDaVida.tsx
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import React from 'react'
import arvore from '../../DOCUMENTOS_FUNDACAO/correlacao_modulos_artefatos.json'

function Nodo({ nome, pos }: { nome: string; pos: [number, number, number] }) {
  return (
    <mesh position={pos}>
      <sphereGeometry args={[0.5, 32, 32]} />
      <meshStandardMaterial color="gold" />
      <textGeometry args={[nome, { size: 0.2, height: 0.05 }]} />
    </mesh>
  )
}

export default function ArvoreDaVida() {
  return (
    <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
      <ambientLight />
      <OrbitControls />
      {/* Renderização simbólica dos módulos */}
      <Nodo nome="MΩ" pos={[0, 0, 0]} />
      <Nodo nome="M1" pos={[-2, 2, 0]} />
      <Nodo nome="M9" pos={[-2, 0, 0]} />
      <Nodo nome="M29" pos={[2, -2, 0]} />
      <Nodo nome="M10" pos={[2, 2, 0]} />
      <Nodo nome="M11" pos={[2, 0, 0]} />
    </Canvas>
  )
}
