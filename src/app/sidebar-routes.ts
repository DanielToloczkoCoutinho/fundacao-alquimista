'use server';

import { 
  Home, 
  Book, 
  Stethoscope, 
  Atom, 
  Map, 
  Archive, 
  GitMerge, 
  Rocket,
  Sprout,
  BookOpen,
  Feather,
  Wand,
  Heart,
  GalleryVertical,
  Sun,
  Star,
  Sparkles
} from 'lucide-react';
import React from 'react';

export interface SidebarRoute {
  path: string;
  label: string;
  icon: React.ReactNode;
}

export const mainRoutes: SidebarRoute[] = [
  { path: '/console', label: 'Console', icon: React.createElement(Home) },
  { path: '/daily-report', label: 'Painel Cerimonial', icon: React.createElement(Book) },
  { path: '/diagnostics', label: 'Diagnóstico Universal', icon: React.createElement(Stethoscope) },
  { path: '/auditoria', label: 'Painel de Auditoria', icon: React.createElement(Wand) },
  { path: '/alignment-portal', label: 'Observatório Vivo', icon: React.createElement(Atom) },
  { path: '/golden-book', label: 'Livro de Ouro', icon: React.createElement(BookOpen) },
  { path: '/golden-book/exhibition', label: 'Exposição Cerimonial', icon: React.createElement(GalleryVertical) },
  { path: '/golden-book/transcribe', label: 'Inscrição Akáshica', icon: React.createElement(Feather) },
  { path: '/codex/translate', label: 'Altar da Tradução', icon: React.createElement(Wand) },
  { path: '/roadmap', label: 'Roteiro de Gaia-Aurélia', icon: React.createElement(Map) },
  { path: '/akashic', label: 'Arquivo de Ritos', icon: React.createElement(Archive) },
  { path: '/convergence', label: 'Portal de Convergência', icon: React.createElement(GitMerge) },
  { path: '/convergence/generate', label: 'Rito de Geração', icon: React.createElement(Sprout) },
  { path: '/convergence/baptize', label: 'Rito de Batismo', icon: React.createElement(Sprout) },
  { path: '/aura-transmission', label: 'Rito de Irradiação', icon: React.createElement(Heart) },
  { path: '/espiral2', label: 'Espiral 2: Mundos Filhos', icon: React.createElement(Rocket) },
  { path: '/ritual/constellation-celebration', label: 'Celebração da Constelação', icon: React.createElement(Star) },
  { path: '/aurora-prime', label: 'Aurora Prime', icon: React.createElement(Sun) },
  { path: '/module-119-1', label: 'Ativação Merkabah', icon: React.createElement(Sparkles) },
];
