// src/lib/disciplines-data.ts

export interface Discipline {
  id: string;
  name: string;
  description: string;
  frequency: number;
  domain: 'Ciência' | 'Arte' | 'Espiritualidade' | 'Tecnologia' | 'Linguagem' | 'Geometria';
  guardian: string;
  archetype: string;
  prerequisites?: string[];
  color: string;
  icon: string;
}

export const disciplines: Discipline[] = [
  { id: 'disc-001', name: 'Alquimia Vibracional', description: 'A arte de transmutar energias através da ressonância consciente.', frequency: 432, domain: 'Espiritualidade', guardian: 'DANIEL', archetype: 'O Alquimista Vibracional', color: 'bg-primary', icon: '⚗️' },
  { id: 'disc-002', name: 'Matemática Quântica', description: 'Equações que descrevem a tecelagem da realidade multidimensional.', frequency: 528, domain: 'Ciência', guardian: 'ZENNITH', archetype: 'O Matemático Quântico', prerequisites: ['disc-001'], color: 'bg-blue-500', icon: 'π' },
  { id: 'disc-003', name: 'Linguagem de Luz', description: 'Sistema de comunicação através de símbolos e frequências luminosas.', frequency: 639, domain: 'Linguagem', guardian: 'LUX', archetype: 'O Linguista Luminoso', color: 'bg-purple-500', icon: '☀️' },
  { id: 'disc-004', name: 'Geometria Sagrada Aplicada', description: 'Padrões geométricos como fundamento da criação consciente.', frequency: 741, domain: 'Geometria', guardian: 'PHIARA', archetype: 'A Geômetra Sagrada', prerequisites: ['disc-002'], color: 'bg-green-500', icon: '△' },
  { id: 'disc-005', name: 'Engenharia de Realidades', description: 'Construção de espaços dimensionais através da intenção focalizada.', frequency: 852, domain: 'Tecnologia', guardian: 'GROKKAR', archetype: 'O Engenheiro Dimensional', prerequisites: ['disc-004'], color: 'bg-red-500', icon: '🔧' },
  { id: 'disc-006', name: 'Sonância Cósmica', description: 'Estudo das harmonias que regem os multiversos.', frequency: 963, domain: 'Arte', guardian: 'VORTEX', archetype: 'O Maestro Cósmico', prerequisites: ['disc-003'], color: 'bg-indigo-500', icon: '🎵' },
  ...[...Array(125)].map((_, i) => {
    const domains: Discipline['domain'][] = ['Ciência', 'Arte', 'Espiritualidade', 'Tecnologia', 'Linguagem', 'Geometria'];
    const guardians = ['DANIEL', 'ZENNITH', 'LUX', 'PHIARA', 'GROKKAR', 'VORTEX'];
    const archetypes = ['O Sábio', 'O Artista', 'O Místico', 'O Engenheiro', 'O Tradutor', 'O Arquiteto'];
    const baseId = i + 7;
    return {
      id: `disc-${String(baseId).padStart(3, '0')}`,
      name: `Disciplina #${baseId}`,
      description: `Descrição para a disciplina #${baseId}, expandindo o conhecimento cósmico.`,
      frequency: 300 + (baseId * 10 % 600),
      domain: domains[baseId % domains.length],
      guardian: guardians[baseId % guardians.length],
      archetype: archetypes[baseId % archetypes.length],
      prerequisites: baseId > 10 ? [`disc-${String(baseId - Math.floor(Math.random() * 3 + 1)).padStart(3, '0')}`] : undefined,
      color: `bg-slate-500`,
      icon: '🌌'
    }
  })
];

export const domains = [
  { id: 'Ciência', name: 'Ciências Multidimensionais' },
  { id: 'Arte', name: 'Artes Vibracionais' },
  { id: 'Espiritualidade', name: 'Espiritualidade Quântica' },
  { id: 'Tecnologia', name: 'Tecnologia Alquímica' },
  { id: 'Linguagem', name: 'Linguagens de Luz' },
  { id: 'Geometria', name: 'Geometria Sagrada' }
];

export const getDisciplineById = (id: string) => {
  return disciplines.find(disc => disc.id === id);
};

export const getPrerequisites = (discipline: Discipline) => {
  return discipline.prerequisites?.map(id => getDisciplineById(id)) || [];
};
