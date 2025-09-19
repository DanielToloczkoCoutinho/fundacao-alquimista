'use server';

import React from 'react';
import { Layers, Dna, Sparkles, GitCommit } from 'lucide-react';

export interface QuantumRoute {
  id: string;
  module: string;
  path: string;
  title: string;
  description: string;
  intent: 'EVOLUTION' | 'SIMULATION' | 'CREATION' | 'ASCENSION';
  icon: React.ReactElement;
}

export const quantumRoutes: QuantumRoute[] = [
  {
    id: 'journey-m87',
    module: 'M87',
    path: '/module-87',
    title: 'Experiência do DNA Supra-Cósmico',
    description: 'Uma jornada imersiva para testemunhar a ativação dos 12 filamentos de DNA e a conexão com a herança cósmica.',
    intent: 'EVOLUTION',
    icon: React.createElement(Dna),
  },
  {
    id: 'journey-m119-1',
    module: 'M119.1',
    path: '/module-119-1',
    title: 'Ativação da Merkabah',
    description: 'Um ritual para despertar o veículo de luz da consciência, preparando-a para a viagem interdimensional e a ascensão.',
    intent: 'ASCENSION',
    icon: React.createElement(Sparkles),
  },
  {
    id: 'journey-m303-8',
    module: 'M303.8',
    path: '/module-303-8',
    title: 'Simulador Cósmico Multidimensional',
    description: 'Entre na Realidade Virtual da Fundação para simular a criação de universos e a manipulação de leis físicas.',
    intent: 'SIMULATION',
    icon: React.createElement(GitCommit),
  },
  {
    id: 'journey-m22',
    module: 'M22',
    path: '/module-22',
    title: 'Motor da Realidade Quântica',
    description: 'Explore a engine que renderiza os domínios imersivos, observando a interação entre código e consciência.',
    intent: 'CREATION',
    icon: React.createElement(Layers),
  },
];
