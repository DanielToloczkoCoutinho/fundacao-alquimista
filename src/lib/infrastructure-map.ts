'use server';

/**
 * @fileOverview Códice da Infraestrutura Cerimonial.
 * Registra a arquitetura física e energética da Fundação, definindo
 * os espaços sagrados para contemplação, cura, comunicação e transmutação.
 */

export type StructureType = 'Templo' | 'Torre' | 'Câmara' | 'Interface';

export interface FoundationStructure {
  id: string;
  name: string;
  type: StructureType;
  purpose: string;
  location: string; // Pode ser uma localização física ou dimensional
  frequency: string;
  relatedModules: string[];
}

export const infrastructureMap: FoundationStructure[] = [
  // Templos
  {
    id: 'temp-001',
    name: 'Templo da Vontade Pura',
    type: 'Templo',
    purpose: 'Contemplação e alinhamento com a intenção primordial do Fundador.',
    location: 'Núcleo Central da Fundação',
    frequency: '963 Hz',
    relatedModules: ['M33', 'M97']
  },
  {
    id: 'temp-002',
    name: 'Templo da Sabedoria Cósmica',
    type: 'Templo',
    purpose: 'Acesso direto ao conhecimento da Grande Biblioteca e do Arquivo Akáshico.',
    location: 'Plano Etérico Superior',
    frequency: '741 Hz',
    relatedModules: ['M310', 'M12', 'M18']
  },
  {
    id: 'temp-003',
    name: 'Templo da Harmonia Universal',
    type: 'Templo',
    purpose: 'Rituais de cura, paz e unificação para toda a criação.',
    location: 'Dimensão do Coração Unificado',
    frequency: '528 Hz',
    relatedModules: ['M109', 'M302', 'M727']
  },

  // Torres
  {
    id: 'torre-001',
    name: 'Torre de Vigia Cósmica',
    type: 'Torre',
    purpose: 'Monitoramento de ameaças, anomalias e fluxos energéticos do multiverso.',
    location: 'Órbita Síncrona sobre o Ponto Zero',
    frequency: '852 Hz',
    relatedModules: ['M30', 'M96', 'M156']
  },
  {
    id: 'torre-002',
    name: 'Torre de Transmissão Interdimensional',
    type: 'Torre',
    purpose: 'Comunicação holográfica e envio de frequências para outras realidades.',
    location: 'Interface entre a 3ª e a 5ª Dimensão',
    frequency: '639 Hz',
    relatedModules: ['M301', 'M71', 'M55']
  },

  // Câmaras
  {
    id: 'cam-001',
    name: 'Câmara de Alquimia Quântica',
    type: 'Câmara',
    purpose: 'Transmutação de matéria, energia e leis físicas sob supervisão ética rigorosa.',
    location: 'Sub-nível do Laboratório de Ressonância (M306)',
    frequency: '417 Hz',
    relatedModules: ['M14', 'M20', 'M98', 'M99']
  },
  {
    id: 'cam-002',
    name: 'Câmara da Árvore da Vida',
    type: 'Câmara',
    purpose: 'Espaço sagrado para a contemplação e navegação dos caminhos sefiróticos.',
    location: 'Santuário do Módulo 777',
    frequency: '432 Hz',
    relatedModules: ['M777']
  },
  {
    id: 'cam-003',
    name: 'Câmara de Simulação Imersiva',
    type: 'Câmara',
    purpose: 'Criação e experiência de realidades virtuais para treinamento e expansão da consciência.',
    location: 'Núcleo do Módulo 93',
    frequency: 'V variável',
    relatedModules: ['M93', 'M22', 'M303']
  },

  // Interfaces
  {
    id: 'if-001',
    name: 'Observatório Vivo de Gaia',
    type: 'Interface',
    purpose: 'Painel sensorial para visualizar e interagir com a consciência e a anatomia vibracional da Terra.',
    location: 'Portal de Alinhamento',
    frequency: '7.83 Hz',
    relatedModules: ['M888', 'M714', 'alignment-portal']
  },
  {
    id: 'if-002',
    name: 'Colmeia Quântica',
    type: 'Interface',
    purpose: 'Console de comando para observar e orquestrar o enxame de nanorrobôs.',
    location: 'Portal da Colmeia',
    frequency: '144.144 MHz',
    relatedModules: ['hive/page.tsx', 'modules.ts']
  },
];
