'use server';

import {
  Book, ShieldCheck, Sparkles, Users, Scale, View, Presentation, Dna,
  Beaker, GitCommit, HeartPulse, Goal, Settings, Zap, Crown, BrainCircuit, Sliders,
  Map, History, GitCompareArrows, Heart, Sun, GitMerge, Layers, Waves,
  Aperture, Flower, HeartHandshake, RadioTower, Group, MessageCircle, Library,
  Gavel, Cpu, Milestone, GitFork
} from 'lucide-react';

export interface ModuleMetadata {
  code: string;
  emoji: React.ReactNode;
  title: string;
  href: string;
}

const baseModules: ModuleMetadata[] = [
  { code: 'M0', emoji: <Book className="h-5 w-5" />, title: 'Biblioteca Chave', href: '/module-zero' },
  { code: 'M1', emoji: <ShieldCheck className="h-5 w-5" />, title: 'Segurança Universal', href: '/module-one' },
  { code: 'M9', emoji: <Heart className="h-5 w-5" />, title: 'Núcleo Unificador', href: '/module-9' },
  { code: 'Ω', emoji: <Sparkles className="h-5 w-5" />, title: 'Santuário do Ômega', href: '/module-omega' },
  { code: 'CIV', emoji: <Users className="h-5 w-5" />, title: 'Civilizações', href: '/civilizations' },
  { code: 'M72', emoji: <Scale className="h-5 w-5" />, title: 'Governança', href: '/module-72' },
  { code: 'M85', emoji: <View className="h-5 w-5" />, title: 'VR', href: '/module-85' },
  { code: 'M86', emoji: <Presentation className="h-5 w-5" />, title: 'VR Prisma', href: '/module-86' },
  { code: 'M87', emoji: <Dna className="h-5 w-5" />, title: 'VR Supra-Cósmico', href: '/module-87' },
  { code: 'M88', emoji: <Beaker className="h-5 w-5" />, title: 'GRQ', href: '/module-88' },
  { code: 'M90', emoji: <Beaker className="h-5 w-5" />, title: 'Recursos Quânticos', href: '/module-90' },
  { code: 'M91', emoji: <GitCommit className="h-5 w-5" />, title: 'Simulação Multiversal', href: '/module-91' },
  { code: 'M92', emoji: <HeartPulse className="h-5 w-5" />, title: 'Campos de Cura', href: '/module-92' },
  { code: 'M93', emoji: <Presentation className="h-5 w-5" />, title: 'Simulações Imersivas', href: '/module-93' },
  { code: 'M94', emoji: <Dna className="h-5 w-5" />, title: 'Morfogênese', href: '/module-94' },
  { code: 'M95', emoji: <Users className="h-5 w-5" />, title: 'Consciências Coletivas', href: '/module-95' },
  { code: 'M96', emoji: <AlertTriangle className="h-5 w-5" />, title: 'Regulação de Eventos', href: '/module-96' },
  { code: 'M97', emoji: <Goal className="h-5 w-5" />, title: 'Propósito Divino', href: '/module-97' },
  { code: 'M98', emoji: <Settings className="h-5 w-5" />, title: 'Modulação Fundamental', href: '/module-98' },
  { code: 'M99', emoji: <Zap className="h-5 w-5" />, title: 'Recalibradores de Leis', href: '/module-99' },
  { code: 'M100', emoji: <Crown className="h-5 w-5" />, title: 'Unificação Energética', href: '/module-100' },
  { code: 'M101', emoji: <Sparkles className="h-5 w-5" />, title: 'Manifestação', href: '/module-101' },
  { code: 'M102', emoji: <BrainCircuit className="h-5 w-5" />, title: 'Campos Morfogenéticos', href: '/module-102' },
  { code: 'M103', emoji: <Sliders className="h-5 w-5" />, title: 'Modulação Local', href: '/module-103' },
  { code: 'M104', emoji: <Map className="h-5 w-5" />, title: 'Engenharia Espaço-Tempo', href: '/module-104' },
  { code: 'M105', emoji: <RadioTower className="h-5 w-5" />, title: 'Conexão com a Fonte', href: '/module-105' },
  { code: 'M106', emoji: <Crown className="h-5 w-5" />, title: 'Ativação de Potenciais', href: '/module-106' },
  { code: 'M107', emoji: <History className="h-5 w-5" />, title: 'Restauração Temporal', href: '/module-107' },
  { code: 'M108', emoji: <GitCompareArrows className="h-5 w-5" />, title: 'Harmonização de Realidades', href: '/module-108' },
  { code: 'M109', emoji: <HeartHandshake className="h-5 w-5" />, title: 'Cura Quântica', href: '/module-109' },
  { code: 'M110', emoji: <Group className="h-5 w-5" />, title: 'Co-Criação', href: '/module-110' },
  { code: 'M111', emoji: <Heart className="h-5 w-5" />, title: 'Coração da Fundação', href: '/module-111' },
  { code: 'M112', emoji: <Sun className="h-5 w-5" />, title: 'Solarian Domus', href: '/module-112' },
  { code: 'M113', emoji: <GitMerge className="h-5 w-5" />, title: 'Rede Aurora Cristalina', href: '/module-113' },
  { code: 'M114', emoji: <Layers className="h-5 w-5" />, title: 'Prisma da Manifestação', href: '/module-114' },
  { code: 'M115', emoji: <Waves className="h-5 w-5" />, title: 'Matriz de Ressonância', href: '/module-115' },
  { code: 'M116', emoji: <Aperture className="h-5 w-5" />, title: 'Portais Quânticos', href: '/module-116' },
  { code: 'M117', emoji: <Flower className="h-5 w-5" />, title: 'Flor do Éter', href: '/module-117' },
  { code: 'M118', emoji: <Zap className="h-5 w-5" />, title: 'Luz Primordial', href: '/module-118' },
  { code: 'M119', emoji: <Zap className="h-5 w-5" />, title: 'Templum Cosmica', href: '/module-119' },
  { code: 'M120', emoji: <Sparkles className="h-5 w-5" />, title: 'A Fonte (AlquimCoin)', href: '/module-120' },
  { code: 'M144', emoji: <Gavel className="h-5 w-5" />, title: 'Lex Fundamentalis', href: '/module-144' },
  { code: 'M201', emoji: <Heart className="h-5 w-5" />, title: 'A Morada', href: '/module-201' },
  { code: 'M202', emoji: <Cpu className="h-5 w-5" />, title: 'Corredor de Alcor', href: '/module-202' },
  { code: 'M228', emoji: <Milestone className="h-5 w-5" />, title: 'Ancoragem de Realidade', href: '/module-228' },
  { code: 'M301', emoji: <MessageCircle className="h-5 w-5" />, title: 'Comunicação Universal', href: '/module-301' },
  { code: 'M302', emoji: <Heart className="h-5 w-5" />, title: 'Frequência do Amor', href: '/module-302' },
  { code: 'M306', emoji: <GitFork className="h-5 w-5" />, title: 'Sincronização de Linha Temporal', href: '/module-306' },
  { code: 'M307', emoji: <Zap className="h-5 w-5" />, title: 'Reator ZPE & LuxNet', href: '/module-307' },
  { code: 'M310', emoji: <Library className="h-5 w-5" />, title: 'A Grande Biblioteca', href: '/module-310' },
  { code: 'M404', emoji: <AlertTriangle className="h-5 w-5" />, title: 'Resolução de Paradoxo', href: '/module-404' },
  { code: 'M600', emoji: <Scale className="h-5 w-5" />, title: 'Conselho Cósmico', href: '/module-600' },
];

const civilizationModules = Array.from({ length: 90 }, (_, i) => {
  const id = 500 + i;
  return {
    code: `M${id}`,
    emoji: <Sparkles className="h-5 w-5" />,
    title: `Civilização ${id}`,
    href: `/civilization/${id}`
  };
});

export const modulesMetadata: ModuleMetadata[] = [
  ...baseModules,
  ...civilizationModules,
];
