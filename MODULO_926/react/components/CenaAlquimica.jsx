import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';

function CuboAlquimico(props) {
  const meshRef = useRef();
  const [ativo, setAtivo] = useState(false);
  const [hover, setHover] = useState(false);

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta;
      meshRef.current.rotation.y += delta * 0.5;
    }
  });

  return (
    <mesh
      {...props}
      ref={meshRef}
      scale={ativo ? 1.5 : 1}
      onClick={() => setAtivo(!ativo)}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hover ? 'hotpink' : 'orange'} />
    </mesh>
  );
}

export default function CenaAlquimica() {
  return (
    <Canvas>
      <ambientLight intensity={Math.PI / 2} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      <CuboAlquimico position={[-1.2, 0, 0]} />
      <CuboAlquimico position={[1.2, 0, 0]} />
    </Canvas>
  );
}
