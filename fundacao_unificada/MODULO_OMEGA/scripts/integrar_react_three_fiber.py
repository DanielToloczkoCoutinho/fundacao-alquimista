import subprocess, os

def integrar_react_three_fiber():
    print("⚙️ Integrando React Three Fiber ao Módulo 9...")
    subprocess.run(["npm", "install", "three", "@react-three/fiber"], check=True, cwd="MODULO_9")

    os.makedirs("MODULO_9/react/components", exist_ok=True)
    componente = """import React, { useRef, useState } from 'react';
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
"""
    with open("MODULO_9/react/components/CenaAlquimica.jsx", "w", encoding="utf-8") as f:
        f.write(componente)

    print("✅ CenaAlquimica.jsx criada com React Three Fiber")

if __name__ == "__main__":
    integrar_react_three_fiber()
