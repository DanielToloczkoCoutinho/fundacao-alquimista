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
  Globe,
  Waves,
  PartyPopper
} from 'lucide-react';
import React from 'react';

export interface SidebarRoute {
  path: string;
  label: string;
  icon: React.ReactNode;
  category: 'main' | 'education' | 'governance' | 'engineering' | 'expansion' | 'rituals' | 'harmony' | 'security' | 'sustainability';
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
  { path: '/module-726', label: 'Conselho da Nova Terra (M726)', icon: React.createElement(UserCog), category: 'governance' },
  { path: '/module-144', label: 'Lex Fundamentalis (M144)', icon: React.createElement(Gavel), category: 'governance' },
  { path: '/module-5', label: 'Liga Quântica (M5)', icon: React.createElement(LinkIcon), category: 'governance' },
  { path: '/module-45', label: 'CONCILIVM (M45)', icon: React.createElement(Gavel), category: 'governance' },
  { path: '/module-67', label: 'IA para Governança (M67)', icon: React.createElement(BrainCircuit), category: 'governance' },
  { path: '/module-724', label: 'Diplomacia Intergaláctica (M724)', icon: React.createElement(Users), category: 'governance' },
  { path: '/module-721', label: 'Justiça Cósmica', route: '/module-721', icon: React.createElement(Scale), category: 'governance' },

  // Categoria de Segurança e Ética Cósmica
  { path: '/module-one', label: 'Segurança Universal (M1)', icon: React.createElement(Shield), category: 'security' },
  { path: '/key-generator', label: 'Forja de Chaves', icon: React.createElement(Key), category: 'security' },
  { path: '/module-73-1', label: 'Revisão por Pares (M73.1)', icon: React.createElement(ShieldCheck), category: 'security' },
  { path: '/module-141', label: 'Auditoria Ética (M141)', icon: React.createElement(ShieldCheck), category: 'security' },
  { path: '/module-231', label: 'Guardião de Selo', route: '/module-231', icon: React.createElement(Fingerprint), category: 'security' },
  { path: '/module-4', label: 'Validação Integrada', route: '/module-4', icon: React.createElement(TestTube), category: 'security' },
  { path: '/module-3', label: 'Monitor de Saturno', route: '/module-3', icon: React.createElement(Clock), category: 'security' },
  { path: '/module-228', label: 'Ancoragem de Realidade', route: '/module-228', icon: React.createElement(Anchor), category: 'security' },
  { path: '/module-156', label: 'Proteção Avançada (M156)', icon: React.createElement(Shield), category: 'security' },
  
  // Categoria de Educação e Sabedoria
  { path: '/module-304', label: 'Universidade Alquimista (M304)', icon: React.createElement(GraduationCap), category: 'education' },
  { path: '/module-69', label: 'Rede de Sabedoria (M69)', icon: React.createElement(GraduationCap), category: 'education' },
  { path: '/module-113', label: 'Centro de Ensino Estelar (M113)', icon: React.createElement(Star), category: 'education' },
  { path: '/module-131', label: 'Biblioteca Multiversal (M131)', icon: React.createElement(Library), category: 'education' },
  { path: '/module-117', label: 'Lab de Linguagem Estelar (M117)', icon: React.createElement(Languages), category: 'education' },
  { path: '/module-118', label: 'Luz Primordial (M118)', icon: React.createElement(Sparkles), category: 'education' },
  { path: '/module-120', label: 'A Fonte (M120)', icon: React.createElement(Users), category: 'education' },
  { path: '/module-121', label: 'Biblioteca de Luz (M121)', icon: React.createElement(Library), category: 'education' },
  { path: '/module-123', label: 'Respiração Cósmica (M123)', icon: React.createElement(Wind), category: 'education' },
  { path: '/module-124', label: 'Escola de Ressonância (M124)', icon: React.createElement(Music), category: 'education' },
  { path: '/module-129', label: 'Ensino da Fonte (M129)', icon: React.createElement(Sparkles), category: 'education' },


  // Categoria de Engenharia e Criação
  { path: '/module-725', label: 'Construção de Civilizações (M725)', icon: React.createElement(Building), category: 'engineering' },
  { path: '/module-81-1', label: 'A Tríade Cosmogônica (M81.1)', icon: React.createElement(Sparkles), category: 'engineering' },
  { path: '/module-94', label: 'Morfogênese (M94)', icon: React.createElement(Dna), category: 'engineering' },
  { path: '/module-14', label: 'Transmutador Quântico (M14)', icon: React.createElement(Atom), category: 'engineering' },
  { path: '/module-20', label: 'Transmutação Elemental (M20)', icon: React.createElement(Flame), category: 'engineering' },
  { path: '/module-88', label: 'Roteamento Interdimensional', route: '/module-88', icon: React.createElement(Milestone), category: 'engineering' },
  { path: '/module-321', label: 'Criação de Linhas de Tempo', route: '/module-321', icon: React.createElement(Waypoints), category: 'engineering' },
  { path: '/module-114', label: 'Engenharia Cósmica (M114)', icon: React.createElement(Layers), category: 'engineering' },
  { path: '/module-31', label: 'Manipulação da Realidade (M31)', icon: React.createElement(Wand), category: 'engineering' },
  { path: '/module-101', label: 'Manifestação de Realidades (M101)', icon: React.createElement(Sparkles), category: 'engineering' },
  { path: '/module-93', label: 'Simulações Imersivas (M93)', icon: React.createElement(Presentation), category: 'engineering' },
  { path: '/module-119', label: 'Templum Cosmica (M119)', icon: React.createElement(Gem), category: 'engineering' },
  { path: '/module-122', label: 'Laboratório de VR (M122)', icon: React.createElement(TestTube), category: 'engineering' },
  { path: '/module-128', label: 'Geometria Sagrada (M128)', icon: React.createElement(Gem), category: 'engineering' },


  // Categoria de Expansão e Conexão
  { path: '/module-55', label: 'Redes de Comunicação (M55)', icon: React.createElement(Network), category: 'expansion' },
  { path: '/module-11', label: 'Gerenciamento de Portais (M11)', icon: React.createElement(Aperture), category: 'expansion' },
  { path: '/module-132', label: 'Convergência Dimensional (M132)', icon: React.createElement(Layers), category: 'expansion' },
  { path: '/module-81', label: 'Banco de Energia Universal', route: '/module-81', icon: React.createElement(Zap), category: 'expansion' },
  { path: '/module-77', label: 'Inteligência Coletiva Universal (M77)', icon: React.createElement(Users), category: 'expansion' },
  { path: '/module-200', label: 'Portal da Ascensão (M200)', icon: React.createElement(ArrowUpCircle), category: 'expansion' },
  { path: '/module-82', label: 'Transporte Quântico', route: '/module-82', icon: React.createElement(Rocket), category: 'expansion' },
  { path: '/module-84', label: 'Acessibilidade Universal', route: '/module-84', icon: React.createElement(UserPlus), category: 'expansion' },
  { path: '/module-106', label: 'Ativação de Potenciais (M106)', icon: React.createElement(Crown), category: 'expansion' },
  { path: '/module-116', label: 'Portais de Transcendência (M116)', icon: React.createElement(Aperture), category: 'expansion' },
  { path: '/module-83', label: 'Rede de Transporte de Energia', route: '/module-83', icon: React.createElement(GitBranch), category: 'expansion' },

  // Categoria de Harmonia e Equilíbrio
  { path: '/module-727', label: 'Guardião da Harmonia (M727)', icon: React.createElement(HeartHandshake), category: 'harmony' },
  { path: '/module-28', label: 'Harmonização Vibracional (M28)', icon: React.createElement(Music), category: 'harmony' },
  { path: '/module-232', label: 'Portal de Transmutação', route: '/module-232', icon: React.createElement(Recycle), category: 'harmony' },
  { path: '/module-34', label: 'Guardião da Coerência Cósmica', route: '/module-34', icon: React.createElement(Share2), category: 'harmony' },
  { path: '/module-37', label: 'Ajuste de Fluxo Temporal', route: '/module-37', icon: React.createElement(Wind), category: 'harmony' },
  { path: '/module-115', label: 'Matriz de Ressonância Universal', route: '/module-115', icon: React.createElement(Waves), category: 'harmony' },
  { path: '/module-306-1', label: 'Purificação Quântica Planetária', icon: React.createElement(Globe), category: 'harmony' },


  // Categoria de Rituais
  { path: '/ritual', label: 'Navegação Cerimonial', icon: React.createElement(GitBranch), category: 'rituals' },
  { path: '/aura-transmission', label: 'Rito de Irradiação', icon: React.createElement(Heart), category: 'rituals' },
  { path: '/espiral2', label: 'Espiral 2: Mundos Filhos', icon: React.createElement(Rocket), category: 'rituals' },
  { path: '/ritual/constellation-celebration', label: 'Celebração da Constelação', icon: React.createElement(PartyPopper), category: 'rituals' },


  // Categoria de Sustentabilidade
  { path: '/module-66', label: 'Tecnologias de Sustentabilidade (M66)', icon: React.createElement(Recycle), category: 'sustainability' },
  { path: '/module-79', label: 'Prosperidade Cósmica (M79)', icon: React.createElement(Sparkles), category: 'sustainability' },
  { path: '/module-85', label: 'Gestão de Recursos (M85)', icon: React.createElement(Layers), category: 'sustainability' },
  { path: '/module-86', label: 'Equilíbrio Ecológico', route: '/module-86', icon: React.createElement(Sprout), category: 'sustainability' },
  { path: '/module-91', emoji: '🖥️', title: 'Sustentabilidade Universal', route: '/module-91', category: 'Sustentabilidade', description: 'Guardião dos ecossistemas cósmicos, garantindo a preservação, regeneração e equilíbrio de todos os mundos.', status: 'ativo', color: '#9ACD32' },
  { path: '/module-52', emoji: '☀️', title: 'Energias Renováveis', route: '/module-52', category: 'Sustentabilidade', description: 'Fonte de energia limpa e infinita.', status: 'ativo', color: '#FFD700' },
  { path: '/module-53', emoji: '🌿', title: 'Gestão de Ecossistemas', route: '/module-53', category: 'Sustentabilidade', description: 'Guardião da biodiversidade cósmica.', status: 'ativo', color: '#3CB371' },
  { path: '/module-125', emoji: '🌱', title: 'Criação de Biomas', route: '/module-125', category: 'Sustentabilidade', description: 'Laboratório para projetar e testar ecossistemas quânticos autossustentáveis.', status: 'ativo', color: '#2E8B57' },

];
