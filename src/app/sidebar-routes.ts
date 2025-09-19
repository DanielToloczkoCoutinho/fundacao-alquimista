'use server';

import { 
  Home, 
  Book, 
  Stethoscope, 
  Atom, 
  Map, 
  Archive, 
  GitMerge, 
  Rocket 
} from 'lucide-react';
import React from 'react';

export interface SidebarRoute {
  path: string;
  label: string;
  icon: React.ReactNode;
}

export const mainRoutes: SidebarRoute[] = [
  { path: '/console', label: 'Console', icon: React.createElement(Home) },
  { path: '/daily-report', label: 'Relatório Cerimonial', icon: React.createElement(Book) },
  { path: '/diagnostics', label: 'Diagnóstico Universal', icon: React.createElement(Stethoscope) },
  { path: '/alignment-portal', label: 'Observatório Vivo', icon: React.createElement(Atom) },
  { path: '/tree-of-life', label: 'Árvore da Vida', icon: React.createElement(GitMerge) },
  { path: '/roadmap', label: 'Roteiro de Gaia-Aurélia', icon: React.createElement(Map) },
  { path: '/akashic', label: 'Arquivo Akáshico', icon: React.createElement(Archive) },
  { path: '/convergence', label: 'Portal de Convergência', icon: React.createElement(GitMerge) },
  { path: '/espiral2', label: 'Espiral 2: Mundos Filhos', icon: React.createElement(Rocket) },
];
