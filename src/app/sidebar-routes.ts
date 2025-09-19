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
  UserPlus,
  Globe
} from 'lucide-react';
import React from 'react';

export interface SidebarRoute {
  path: string;
  label: string;
  icon: React.ReactNode;
  category: 'main' | 'education' | 'governance' | 'engineering' | 'expansion' | 'rituals' | 'harmony' | 'security';
}

export const mainRoutes: SidebarRoute[] = [
  // Categoria Principal
  { path: '/console', label: 'Console', icon: React.createElement(Home), category: 'main' },
  { path: '/planet/gaia-aurelia', label: 'Gaia-Aurélia', icon: React.createElement(Globe), category: 'main' },
  { path: '/diagnostics', label: 'Diagnóstico Universal', icon: React.createElement(Stethoscope), category: 'main' },
  { path: '/alignment-portal', label: 'Observatório Vivo', icon: React.createElement(Atom), category: 'main' },
  { path: '/golden-book', label: 'Livro de Ouro', icon: React.createElement(BookOpen), category: 'main' },
  { path: '/module-9', label: 'Nexus Central (M9)', icon: React.createElement(Heart), category: 'main' },
  { path: '/module-omega', label: 'Santuário da Metacognição', icon: React.createElement(Sparkles), category: 'main' },
  { path: '/module-728', label: 'Santuário dos Alquimistas', icon: React.createElement(Scale), category: 'main' },
  
  // Categoria de Governança
  { path: '/module-72', label: 'Governança Universal (M72)', icon: React.createElement(Scale), category: 'governance' },
  { path: '/module-726', label: 'Conselho da Nova Terra', icon: React.createElement(UserCog), category: 'governance' },
  { path: '/module-144', label: 'Lex Fundamentalis (M144)', icon: React.createElement(Gavel), category: 'governance' },
  { path: '/module-5', label: 'Liga Quântica (M5)', icon: React.createElement(LinkIcon), category: 'governance' },
  { path: '/module-45', label: 'CONCILIVM (M45)', icon: React.createElement(Gavel), category: 'governance' },
  { path: '/module-67', label: 'IA para Governança (M67)', icon: React.createElement(BrainCircuit), category: 'governance' },
  { path: '/module-724', label: 'Diplomacia Intergaláctica (M724)', icon: React.createElement(Users), category: 'governance' },

  // Categoria de Segurança e Ética Cósmica
  { path: '/module-one', label: 'Segurança Universal (M1)', icon: React.createElement(Shield), category: 'security' },
  { path: '/key-generator', label: 'Forja de Chaves', icon: React.createElement(Key), category: 'security' },
  { path: '/module-73', label: 'SAVCE (M73)', icon: React.createElement(ShieldCheck), category: 'security' },
  { path: '/module-73-1', label: 'Revisão por Pares (M73.1)', icon: React.createElement(ShieldCheck), category: 'security' },
  { path: '/module-141', label: 'Auditoria Ética (M141)', icon: React.createElement(ShieldCheck), category: 'security' },
  { path: '/module-231', label: 'Guardião de Selo (M231)', icon: React.createElement(Fingerprint), category: 'security' },
  { path: '/module-4', label: 'Validação Integrada (M4)', icon: React.createElement(TestTube), category: 'security' },
  { path: '/module-3', label: 'Monitor de Saturno (M3)', icon: React.createElement(Clock), category: 'security' },
  { path: '/module-228', label: 'Ancoragem de Realidade (M228)', icon: React.createElement(Anchor), category: 'security' },
  
  // Categoria de Educação e Sabedoria
  { path: '/module-304', label: 'Universidade Alquimista (M304)', icon: React.createElement(GraduationCap), category: 'education' },
  { path: '/module-69', label: 'Rede de Sabedoria (M69)', icon: React.createElement(GraduationCap), category: 'education' },
  { path: '/module-115', label: 'Matriz de Ressonância (M115)', icon: React.createElement(Waves), category: 'education' },
  { path: '/module-131', label: 'Biblioteca Multiversal (M131)', icon: React.createElement(Library), category: 'education' },
  
  // Categoria de Engenharia e Criação
  { path: '/module-725', label: 'Construção de Civilizações', icon: React.createElement(Building), category: 'engineering' },
  { path: '/module-81-1', label: 'A Tríade Cosmogônica', icon: React.createElement(Sparkles), category: 'engineering' },
  { path: '/module-94', label: 'Morfogênese (M94)', icon: React.createElement(Dna), category: 'engineering' },
  { path: '/module-14', label: 'Transmutador Quântico (M14)', icon: React.createElement(Atom), category: 'engineering' },
  { path: '/module-20', label: 'Transmutação Elemental (M20)', icon: React.createElement(Flame), category: 'engineering' },
  { path: '/module-88', label: 'Roteamento Interdimensional (M88)', icon: React.createElement(Milestone), category: 'engineering' },
  { path: '/module-321', label: 'Criação de Linhas de Tempo (M321)', icon: React.createElement(Waypoints), category: 'engineering' },
  
  // Categoria de Expansão e Conexão
  { path: '/module-55', label: 'Redes de Comunicação (M55)', icon: React.createElement(Network), category: 'expansion' },
  { path: '/module-11', label: 'Gerenciamento de Portais (M11)', icon: React.createElement(Aperture), category: 'expansion' },
  { path: '/module-132', label: 'Convergência Dimensional (M132)', icon: React.createElement(Layers), category: 'expansion' },
  { path: '/module-81', label: 'Banco de Energia Universal (M81)', icon: React.createElement(Zap), category: 'expansion' },
  { path: '/module-77', label: 'Inteligência Coletiva Universal (M77)', icon: React.createElement(Users), category: 'expansion' },
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
