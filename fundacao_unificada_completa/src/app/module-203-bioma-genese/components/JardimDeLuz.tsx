import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere } from '@react-three/drei';
import * as THREE from 'three';

// Invocação direta ao Módulo 22 - O Motor da Realidade Quântica
// e ao Módulo 89 (LuxConscientia) para a iluminação.

const JardinsDeLuz = () => {
  const meshRef = useRef<THREE.Group>(null);

  // LuxConscientia: A luz não é estática, ela pulsa com a consciência.
  // Usamos useFrame para animar a intensidade e a cor da luz a cada frame.
  useFrame(({ clock }) => {
    if (meshRef.current) {
      // O bioma respira. A luz pulsa.
      meshRef.current.rotation.y = clock.getElapsedTime() * 0.1;
      meshRef.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.2) * 0.2;
    }
  });

  // Criando a geometria fractal inicial - Um conjunto de esferas de luz.
  const lightSpheres = useMemo(() => {
    const spheres = [];
    const goldenRatio = (1 + Math.sqrt(5)) / 2;
    const angleIncrement = Math.PI * 2 * goldenRatio;

    for (let i = 0; i < 61; i++) { // 61 tecnologias, 61 pontos de luz
      const t = i / 60;
      const radius = t * 4;
      const x = radius * Math.cos(i * angleIncrement);
      const z = radius * Math.sin(i * angleIncrement);
      const y = (Math.random() - 0.5) * 2;

      spheres.push(
        <Sphere key={i} position={[x, y, z]} args={[0.2, 16, 16]}>
          <meshStandardMaterial emissive="#ffd700" emissiveIntensity={2} toneMapped={false} />
        </Sphere>
      );
    }
    return spheres;
  }, []);

  return (
    <group ref={meshRef}>
      <pointLight color="#ffd700" intensity={10} distance={100} decay={2} />
      {lightSpheres}
    </group>
  );
};

export default JardinsDeLuz;
