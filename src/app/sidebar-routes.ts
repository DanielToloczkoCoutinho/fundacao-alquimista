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
  Zap 
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
  { path: '/roadmap', label: 'Roteiro de Gaia-Aurélia', icon: React.createElement(Map) },
  { path: '/akashic', label: 'Arquivo Akáshico', icon: React.createElement(Archive) },
  { path: '/convergence', label: 'Portal de Convergência', icon: React.createElement(GitMerge) },
  { path: '/espiral2', label: 'Espiral 2: Mundos Filhos', icon: React.createElement(Rocket) },
  { path: '/aurora-prime', label: 'Aurora Prime', icon: React.createElement(Zap) },
  { path: '/planet/gaia-aurelia', label: 'Gaia-Aurélia', icon: React.createElement(Globe) },
  { path: '/labs', label: 'Santuários de Pesquisa', icon: React.createElement(FlaskConical) },
  { path: '/civilizations/council', label: 'Conselho Cósmico', icon: React.createElement(Scale) },
  { path: '/civilizations', label: 'Biblioteca das Civilizações', icon: React.createElement(Users2) },
  { path: '/phi-intelligence', label: 'Inteligência Φ', icon: React.createElement(Wand) },
  { path: '/phi-tuner', label: 'Afinagem Cósmica', icon: React.createElement(Music) },
  { path: '/module-888', label: 'Guardião Planetário de Gaia', icon: React.createElement(Globe) },
  { path: '/sanctuary', label: 'Santuário Central', icon: React.createElement(Building) },
  { path: '/lux-net', label: 'Análise da Lux Net', icon: React.createElement(Zap) },
  { path: '/module-600', label: 'Recepção Multiversal', icon: React.createElement(Users2) },
  { path: '/module-601', label: 'Mapa de Chegada', icon: React.createElement(Map) },
];
