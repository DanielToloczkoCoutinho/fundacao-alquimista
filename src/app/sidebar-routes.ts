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
  History,
  Crown,
  Share2,
  Users,
  Milestone,
  Scale,
  Network,
  Lock,
  Key,
  Building,
  Leaf,
  Recycle,
  Wheat,
  Hospital,
  Shield,
  CloudLightning,
  AlertTriangle,
  Hourglass,
  Layers,
  GitCommit,
  Presentation,
  Eye,
  Aperture,
  BrainCircuit,
  HeartHandshake,
  GitCompareArrows,
  SlidersHorizontal,
  CloudSun,
  Flame,
  Waypoints,
  BarChart,
  UserCog,
  Orbit,
  CheckSquare,
  Link as LinkIcon,
  Clock,
  ArrowUpCircle,
  Gavel,
  ShieldCheck,
  UserPlus
} from 'lucide-react';
import React from 'react';

export interface SidebarRoute {
  path: string;
  label: string;
  icon: React.ReactNode;
  category: 'main' | 'education' | 'governance' | 'engineering' | 'expansion' | 'rituals' | 'harmony';
}

export const mainRoutes: SidebarRoute[] = [
  // Categoria Principal
  { path: '/console', label: 'Console', icon: React.createElement(Home), category: 'main' },
  { path: '/diagnostics', label: 'Diagnóstico Universal', icon: React.createElement(Stethoscope), category: 'main' },
  { path: '/alignment-portal', label: 'Observatório Vivo', icon: React.createElement(Atom), category: 'main' },
  { path: '/golden-book', label: 'Livro de Ouro', icon: React.createElement(BookOpen), category: 'main' },
  { path: '/module-9', label: 'Nexus Central (M9)', icon: React.createElement(Heart), category: 'main' },
  { path: '/module-omega', label: 'Santuário do Ômega (MΩ)', icon: React.createElement(Sparkles), category: 'main' },

  // Categoria de Governança
  { path: '/module-72', label: 'Governança Universal (M72)', icon: React.createElement(Scale), category: 'governance' },
  { path: '/module-144', label: 'Lex Fundamentalis (M144)', icon: React.createElement(Gavel), category: 'governance' },
  { path: '/module-5', label: 'Liga Quântica (M5)', icon: React.createElement(LinkIcon), category: 'governance' },
  { path: '/module-45', label: 'CONCILIVM (M45)', icon: React.createElement(Gavel), category: 'governance' },
  { path: '/module-67', label: 'IA para Governança (M67)', icon: React.createElement(BrainCircuit), category: 'governance' },
  { path: '/module-724', label: 'Diplomacia Intergaláctica (M724)', icon: React.createElement(Users), category: 'governance' },

  // Categoria de Segurança e Ética Cósmica
  { path: '/module-one', label: 'Segurança Universal (M1)', icon: React.createElement(Shield), category: 'main' },
  { path: '/key-generator', label: 'Forja de Chaves', icon: React.createElement(Key), category: 'main' },
  { path: '/module-73', label: 'SAVCE (M73)', icon: React.createElement(ShieldCheck), category: 'governance' },
  { path: '/module-73-1', label: 'Revisão por Pares (M73.1)', icon: React.createElement(ShieldCheck), category: 'governance' },
  { path: '/module-141', label: 'Auditoria Ética (M141)', icon: React.createElement(ShieldCheck), category: 'governance' },
  { path: '/module-10', label: 'Defesa Avançada (M10)', icon: React.createElement(Shield), category: 'governance' },

  // Categoria de Educação e Sabedoria
  { path: '/module-304', label: 'Universidade Alquimista (M304)', icon: React.createElement(GraduationCap), category: 'education' },
  { path: '/module-69', label: 'Rede de Sabedoria (M69)', icon: React.createElement(GraduationCap), category: 'education' },
  { path: '/module-115', label: 'Matriz de Ressonância (M115)', icon: React.createElement(Waves), category: 'education' },
  { path: '/module-120', label: 'Escola de Guardiões (M120)', icon: React.createElement(Shield), category: 'education' },
  { path: '/module-131', label: 'Biblioteca Multiversal (M131)', icon: React.createElement(Library), category: 'education' },

  // Categoria de Engenharia e Criação
  { path: '/module-101', label: 'Manifestação (M101)', icon: React.createElement(Wand), category: 'engineering' },
  { path: '/module-114', label: 'Engenharia Cósmica (M114)', icon: React.createElement(Layers), category: 'engineering' },
  { path: '/module-89', label: 'Atelier da Realidade (M89)', icon: React.createElement(Paintbrush), category: 'engineering' },
  { path: '/module-94', label: 'Morfogênese (M94)', icon: React.createElement(Dna), category: 'engineering' },
  { path: '/module-14', label: 'Transmutador Quântico (M14)', icon: React.createElement(Atom), category: 'engineering' },
  { path: '/module-20', label: 'Transmutação Elemental (M20)', icon: React.createElement(Flame), category: 'engineering' },
  
  // Categoria de Expansão e Conexão
  { path: '/module-55', label: 'Redes de Comunicação (M55)', icon: React.createElement(Network), category: 'expansion' },
  { path: '/module-11', label: 'Gerenciamento de Portais (M11)', icon: React.createElement(Aperture), category: 'expansion' },
  { path: '/module-132', label: 'Convergência Dimensional (M132)', icon: React.createElement(Layers), category: 'expansion' },
  { path: '/module-81', label: 'Banco de Energia Universal (M81)', icon: React.createElement(Zap), category: 'expansion' },
  { path: '/module-77', label: 'Inteligência Coletiva (M77)', icon: React.createElement(Users), category: 'expansion' },
  { path: '/module-200', label: 'Portal da Ascensão (M200)', icon: React.createElement(ArrowUpCircle), category: 'expansion' },

  // Categoria de Harmonia e Equilíbrio
  { path: '/module-727', label: 'Guardião da Harmonia (M727)', icon: React.createElement(HeartHandshake), category: 'harmony' },
  { path: '/module-28', label: 'Harmonização Vibracional (M28)', icon: React.createElement(Music), category: 'harmony' },
  { path: '/module-232', label: 'Portal de Transmutação (M232)', icon: React.createElement(Recycle), category: 'harmony' },

  // Categoria de Rituais e Cerimônias
  { path: '/ritual', label: 'Navegação Cerimonial', icon: React.createElement(GitBranch), category: 'rituals' },
  { path: '/aura-transmission', label: 'Rito de Irradiação', icon: React.createElement(Heart), category: 'rituals' },
  { path: '/espiral2', label: 'Espiral 2: Mundos Filhos', icon: React.createElement(Rocket), category: 'rituals' },
];
