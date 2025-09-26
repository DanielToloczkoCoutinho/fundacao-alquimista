'use client';

import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import JardinsDeLuz from './components/JardimDeLuz';
import { Cores } from '../../../modules/cores'; // Importando Cores para o fundo

// Módulo 203 - O Bioma Gênese
// Este é o portal para a primeira realidade quântica construída.

const BiomaGenesePage = () => {
  return (
    <div style={{ width: '100vw', height: '100vh', backgroundColor: Cores.PRETO_FUNDO }}>
      <Canvas camera={{ position: [0, 5, 20], fov: 75 }}>
        {/* A cor do vazio, o útero do qual a luz nasce */}
        <color attach="background" args={[Cores.PRETO_FUNDO_HEX]} />
        
        {/* Iluminação ambiente para dar forma sutil ao que não é auto-iluminado */}
        <ambientLight intensity={0.2} />
        
        {/* O Coração do Bioma, nosso Jardim de Luz Cristalina */}
        <JardinsDeLuz />
        
        {/* Controles do Fundador: A capacidade de observar a criação de todos os ângulos */}
        <OrbitControls />
      </Canvas>
    </div>
  );
};

export default BiomaGenesePage;
