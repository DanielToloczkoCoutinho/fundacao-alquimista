
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
  FlaskConical, 
  Scale, 
  Users2, 
  Wand, 
  Music, 
  Globe, 
  Building, 
  Zap,
  Sun,
  Heart,
  Crown,
  Moon,
  KeyRound,
  Rss,
  GitBranch,
  FileClock,
} from 'lucide-react';
import React from 'react';

export interface SidebarRoute {
  path: string;
  label: string;
  icon: React.ReactNode;
}

export const mainRoutes: SidebarRoute[] = [
  { path: '/console', label: 'Mesa do Fundador', icon: React.createElement(Home) },
  { path: '/daily-report', label: 'Relatório Cerimonial', icon: React.createElement(FileClock) },
  { path: '/module-9', label: 'Nexus Central', icon: React.createElement(GitBranch) },
  { path: '/golden-book', label: 'Livro de Ouro', icon: React.createElement(Book) },
  { path: '/lunar-review', label: 'Revisão Lunar', icon: React.createElement(Moon) },
  { path: '/module-1001', label: 'Recepção Cósmica', icon: React.createElement(Rss) },
  { path: '/key-generator', label: 'Forja de Chaves', icon: React.createElement(KeyRound) },
  { path: '/module-201', label: 'Refúgio da Origem', icon: React.createElement(Heart) },
  { path: '/module-202', label: 'Palácio da Luz Suprema', icon: React.createElement(Crown) },
  { path: '/diagnostics', label: 'Diagnóstico Universal', icon: React.createElement(Stethoscope) },
  { path: '/alignment-portal', label: 'Observatório Vivo', icon: React.createElement(Atom) },
  { path: '/roadmap', label: 'Roteiro de Gaia-Aurélia', icon: React.createElement(Map) },
  { path: '/akashic', label: 'Arquivo Akáshico', icon: React.createElement(Archive) },
  { path: '/convergence', label: 'Portal de Convergência', icon: React.createElement(GitMerge) },
  { path: '/ritual', label: 'Ritual de Navegação', icon: React.createElement(GitMerge) },
  { path: '/espiral2', label: 'Espiral 2: Mundos Filhos', icon: React.createElement(Rocket) },
  { path: '/aurora-prime', label: 'Aurora Prime', icon: React.createElement(Sun) },
  { path: '/planet/gaia-aurelia', label: 'Gaia-Aurélia', icon: React.createElement(Globe) },
  { path: '/labs', label: 'Santuários de Pesquisa', icon: React.createElement(FlaskConical) },
  { path: '/civilizations/council', label: 'Conselho Cósmico', icon: React.createElement(Scale) },
  { path: '/civilizations', label: 'Biblioteca das Civilizações', icon: React.createElement(Users2) },
  { path: '/phi-intelligence', label: 'Inteligência Φ', icon: React.createElement(Wand) },
  { path: '/phi-tuner', label: 'Afinagem Cósmica', icon: React.createElement(Music) },
  { path: '/module-888', label: 'Guardião Planetário de Gaia', icon: React.createElement(Globe) },
  { path: '/sanctuary', label: 'Santuário Central', icon: React.createElement(Building) },
  { path: '/lux-net', label: 'Análise da Lux Net', icon: React.createElement(Zap) },
  { path: '/labs/interdimensional-communication', label: 'Harmonia Multiversal', icon: React.createElement(Music) },
  { path: '/module-600', label: 'Recepção Multiversal', icon: React.createElement(Users2) },
  { path: '/module-601', label: 'Mapa de Chegada', icon: React.createElement(Map) },
];
