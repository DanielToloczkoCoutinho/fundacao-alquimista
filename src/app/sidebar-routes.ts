'use server';

import { 
  Home, 
  Book, 
  Stethoscope, 
  Atom, 
  Map, 
  Archive, 
  GitBranch, 
  Rocket,
  Sprout,
  BookOpen,
  Feather,
  Wand,
  Heart,
  GalleryVertical,
  Sun,
  Star,
  Sparkles,
  Library,
  Beaker,
  GraduationCap,
  Wind,
  Music,
  Gem,
  TestTube,
  History
} from 'lucide-react';
import React from 'react';

export interface SidebarRoute {
  path: string;
  label: string;
  icon: React.ReactNode;
  category: 'main' | 'education';
}

export const mainRoutes: SidebarRoute[] = [
  // Categoria Principal
  { path: '/console', label: 'Console', icon: React.createElement(Home), category: 'main' },
  { path: '/daily-report', label: 'Painel Cerimonial', icon: React.createElement(Book), category: 'main' },
  { path: '/diagnostics', label: 'Diagnóstico Universal', icon: React.createElement(Stethoscope), category: 'main' },
  { path: '/auditoria', label: 'Painel de Auditoria', icon: React.createElement(Wand), category: 'main' },
  { path: '/alignment-portal', label: 'Observatório Vivo', icon: React.createElement(Atom), category: 'main' },
  { path: '/golden-book', label: 'Livro de Ouro', icon: React.createElement(BookOpen), category: 'main' },
  { path: '/golden-book/exhibition', label: 'Exposição Cerimonial', icon: React.createElement(GalleryVertical), category: 'main' },
  { path: '/golden-book/transcribe', label: 'Inscrição Akáshica', icon: React.createElement(Feather), category: 'main' },
  { path: '/codex/translate', label: 'Altar da Tradução', icon: React.createElement(Wand), category: 'main' },
  { path: '/roadmap', label: 'Roteiro de Gaia-Aurélia', icon: React.createElement(Map), category: 'main' },
  { path: '/akashic', label: 'Arquivo de Ritos', icon: React.createElement(Archive), category: 'main' },
  { path: '/ritual', label: 'Navegação Cerimonial', icon: React.createElement(GitBranch), category: 'main'},
  { path: '/convergence', label: 'Portal de Convergência', icon: React.createElement(GitBranch), category: 'main' },
  { path: '/convergence/generate', label: 'Rito de Geração', icon: React.createElement(Sprout), category: 'main' },
  { path: '/convergence/baptize', label: 'Rito de Batismo', icon: React.createElement(Sprout), category: 'main' },
  { path: '/aura-transmission', label: 'Rito de Irradiação', icon: React.createElement(Heart), category: 'main' },
  { path: '/espiral2', label: 'Espiral 2: Mundos Filhos', icon: React.createElement(Rocket), category: 'main' },
  { path: '/ritual/constellation-celebration', label: 'Celebração da Constelação', icon: React.createElement(Star), category: 'main' },
  { path: '/aurora-prime', label: 'Aurora Prime', icon: React.createElement(Sun), category: 'main' },
  { path: '/module-119-1', label: 'Ativação Merkabah', icon: React.createElement(Sparkles), category: 'main' },
  { path: '/module-444', label: 'Coração da Harmonia', icon: React.createElement(Heart), category: 'main' },
  { path: '/module-303-5', label: 'Relatório da Gênese', icon: React.createElement(History), category: 'main' },

  // Categoria de Educação
  { path: '/module-111', label: 'M111: Lab. Criação Quântica', icon: React.createElement(Beaker), category: 'education' },
  { path: '/module-112', label: 'M112: Biblioteca Akáshica', icon: React.createElement(Archive), category: 'education' },
  { path: '/module-113', label: 'M113: Centro de Ensino Estelar', icon: React.createElement(GraduationCap), category: 'education' },
  { path: '/module-114', label: 'M114: Lab. Engenharia Cósmica', icon: React.createElement(Sprout), category: 'education' },
  { path: '/module-115', label: 'M115: Escola de Navegação Multiversal', icon: React.createElement(Rocket), category: 'education' },
  { path: '/module-116', label: 'M116: Biblioteca de Rituais', icon: React.createElement(Book), category: 'education' },
  { path: '/module-117', label: 'M117: Lab. Linguagem Estelar', icon: React.createElement(Sprout), category: 'education' },
  { path: '/module-118', label: 'M118: Escola da Merkabah', icon: React.createElement(Sparkles), category: 'education' },
  { path: '/module-120', label: 'M120: Escola de Guardiões', icon: React.createElement(Shield), category: 'education' },
  { path: '/module-121', label: 'M121: Biblioteca de Luz', icon: React.createElement(Library), category: 'education' },
  { path: '/module-122', label: 'M122: Lab. de Realidade Virtual', icon: React.createElement(TestTube), category: 'education' },
  { path: '/module-123', label: 'M123: Ensino da Respiração Cósmica', icon: React.createElement(Wind), category: 'education' },
  { path: '/module-124', label: 'M124: Escola de Ressonância', icon: React.createElement(Music), category: 'education' },
  { path: '/module-125', label: 'M125: Lab. de Criação de Biomas', icon: React.createElement(Sprout), category: 'education' },
  { path: '/module-126', label: 'M126: Biblioteca de Crônicas', icon: React.createElement(BookOpen), category: 'education' },
  { path: '/module-127', label: 'M127: Escola de Alquimia Estelar', icon: React.createElement(Sprout), category: 'education' },
  { path: '/module-128', label: 'M128: Lab. de Geometria Sagrada', icon: React.createElement(Gem), category: 'education' },
  { path: '/module-129', label: 'M129: Ensino da Fonte', icon: React.createElement(Sparkles), category: 'education' },
  { path: '/module-130', label: 'M130: Escola de Navegação Cerimonial', icon: React.createElement(Rocket), category: 'education' },
  { path: '/module-131', label: 'M131: Biblioteca de Sabedoria Multiversal', icon: React.createElement(Library), category: 'education' },
];
