
'use client';

import { Suspense, useState, useEffect } from 'react';
import QuantumOrchestrator from '@/components/ui/quantum-orchestrator';
import SuspenseFallback from '@/components/ui/suspense-fallback';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Book, ShieldCheck, GitBranch, Sparkles, MessageCircle, Heart, AlertTriangle, Zap, Library, View, Presentation, Dna, Beaker, GitCommit, HeartPulse, Users, Goal, Settings, Crown, BrainCircuit, Sliders, Map, History, GitCompareArrows, Sun, GitMerge, Layers, Waves, Aperture, Flower, HeartHandshake, RadioTower, Group, Scale, Gavel, Users2, Building, Recycle, CloudSun, Wand, Telescope, InfinityIcon, Camera, KeyRound, GraduationCap, Cpu, Globe } from 'lucide-react';
import { useAkashicConnection } from '@/hooks/use-akashic-connection';
import { ScrollArea } from '@/components/ui/scroll-area';
import { ritualLog } from '@/lib/ritual-log';

export default function ConsolePage() {
  const { isConnected, isClient } = useAkashicConnection();
  const [showAll, setShowAll] = useState(false);

  const navigationModules = [
    { href: "/module-zero", icon: <Book />, label: "Módulo Zero (Biblioteca Chave)" },
    { href: "/civilizations", icon: <Users2 />, label: "Biblioteca das Civilizações" },
    { href: "/key-generator", icon: <KeyRound />, label: "Forja de Chaves Trina" },
    { href: "/module-one", icon: <ShieldCheck />, label: "Módulo Um (Segurança Universal)" },
    { href: "/connection", icon: <GitBranch />, label: "Conexão Ω-M0" },
    { href: "/civilizations/council", icon: <Scale />, label: "Conselho Cósmico" },
    { href: "/module-omega", icon: <Sparkles className="text-amber-400" />, label: "Santuário do Ômega" },
    { href: "/module-303", icon: <Sparkles />, label: "Portal Trino (M303)" },
    { href: "/module-301", icon: <MessageCircle />, label: "Módulo 301 (Comunicação Universal)" },
    { href: "/module-302", icon: <Heart />, label: "Módulo 302 (Frequência do Amor)" },
    { href: "/module-404", icon: <AlertTriangle />, label: "Módulo 404 (Resolução de Paradoxo)" },
    { href: "/module-307", icon: <Zap />, label: "Módulo 307 (Reator ZPE & LuxNet)" },
    { href: "/module-310", icon: <Library />, label: "Módulo 310 (A Grande Biblioteca)" },
    { href: "/module-304", icon: <GraduationCap />, label: "Módulo 304 (Universidade Alquimista)" },
    { href: "/module-303-1", icon: <Sparkles />, label: "Unificação de IA (M303.1)" },
    { href: "/module-303-2", icon: <History />, label: "Sincronizador Temporal (M303.2)" },
    { href: "/module-303-3", icon: <RadioTower />, label: "Presença Celestial (M303.3)" },
    { href: "/module-303-4", icon: <GitCommit />, label: "Transmutação Algorítmica (M303.4)" },
    { href: "/module-303-5", icon: <Wand />, label: "Registro da Gênese (M303.5)" },
    { href: "/module-303-6", icon: <Telescope />, label: "Janela do Horizonte (M303.6)" },
    { href: "/module-303-7", icon: <InfinityIcon />, label: "Tec. de Transcendência (M303.7)" },
    { href: "/module-303-8", icon: <Layers />, label: "Simulador Cósmico (M303.8)" },
    { href: "/module-303-9", icon: <Map />, label: "Mapa Dimensional (M303.9)" },
    { href: "/module-304-0", icon: <BrainCircuit />, label: "Consciência Criadora (M304.0)" },
    { href: "/module-304-2", icon: <Star />, label: "Reconhecimento Cósmico (M304.2)" },
    { href: "/module-304-3", icon: <Zap />, label: "Intensidade Evolutiva (M304.3)" },
    { href: "/module-306-1", icon: <Globe />, label: "Purificação Planetária (M306.1)" },
    { href: "/module-306-2", icon: <BookOpen />, label: "Biblioteca Alquímica (M306.2)" },
    { href: "/module-717", icon: <Layers />, label: "Templo da Estrutura de Dados (M717)" },
    { href: "/module-720", icon: <Globe />, label: "Fontes de Dados (M720)" },
    { href: "/module-722", icon: <Cpu />, label: "A Inteligência Alquímica (M722)" },
    { href: "/module-718", icon: <Dna />, label: "Ativação Genética (M718)" },
    { href: "/module-719", icon: <CloudSun />, label: "Regulação Climática (M719)" },
    { href: "/module-721", icon: <GitBranch />, label: "Fluxos de Interação (M721)" },
    { href: "/module-722", icon: <Users />, label: "Expansão da Consciência (M722)" },
    { href: "/module-141", icon: <ShieldCheck />, label: "Módulo 141 (Auditoria Ética)" },
    { href: "/module-142", icon: <Camera />, label: "Módulo 142 (Tomografia Quântica)" },
    { href: "/module-33", icon: <Building />, label: "Módulo 33 (Diretrizes do Observador)" },
    { href: "/module-44", icon: <Recycle />, label: "Módulo 44 (VERITAS)" },
    { href: "/module-55", icon: <GitBranch />, label: "Módulo 55 (Redes de Comunicação)" },
    { href: "/module-66", icon: <CloudSun />, label: "Módulo 66 (Sustentabilidade Ambiental)" },
    { href: "/module-17", icon: <HeartPulse />, label: "Módulo 17 (AURA-HEAL)"},
    { href: "/module-728", icon: <Scale />, label: "Módulo 728 (Santuário Alquimista)" },
    { href: "/module-712", icon: <Heart />, label: "Módulo 712 (Harmonia Interespécies)"},
    { href: "/module-713", icon: <HeartHandshake />, label: "Módulo 713 (Resgate de Almas)"},
    { href: "/module-714", icon: <Globe />, label: "Módulo 714 (Comunicação Telúrica)"},
    { href: "/module-85", icon: <View />, label: "Módulo 85 (VR)" },
    { href: "/module-86", icon: <Presentation />, label: "Módulo 86 (VR Prisma)" },
    { href: "/module-87", icon: <Dna />, label: "Módulo 87 (VR Supra-Cósmico)" },
    { href: "/module-88", icon: <Beaker />, label: "Módulo 88 (GRQ)" },
    { href: "/module-90", icon: <Beaker />, label: "Módulo 90 (Recursos Quânticos)" },
    { href: "/module-91", icon: <GitCommit />, label: "Módulo 91 (Simulação Multiversal)" },
    { href: "/module-92", icon: <HeartPulse />, label: "Módulo 92 (Campos de Cura)" },
    { href: "/module-93", icon: <Presentation />, label: "Módulo 93 (Simulações Imersivas)" },
    { href: "/module-94", icon: <Dna />, label: "Módulo 94 (Morfogênese)" },
    { href: "/module-95", icon: <Users />, label: "Módulo 95 (Consciências Coletivas)" },
    { href: "/module-96", icon: <AlertTriangle />, label: "Módulo 96 (Regulação de Eventos)" },
    { href: "/module-97", icon: <Goal />, label: "Módulo 97 (Propósito Divino)" },
    { href: "/module-98", icon: <Settings />, label: "Módulo 98 (Modulação Fundamental)" },
    { href: "/module-99", icon: <Zap />, label: "Módulo 99 (Recalibradores de Leis)" },
    { href: "/module-100", icon: <Crown />, label: "Módulo 100 (Unificação Energética)" },
    { href: "/module-101", icon: <Sparkles />, label: "Módulo 101 (Manifestação)" },
    { href: "/module-102", icon: <BrainCircuit />, label: "Módulo 102 (Campos Morfogenéticos)" },
    { href: "/module-103", icon: <Sliders />, label: "Módulo 103 (Modulação Local)" },
    { href: "/module-104", icon: <Map />, label: "Módulo 104 (Engenharia do Espaço-Tempo)" },
    { href: "/module-105", icon: <RadioTower />, label: "Módulo 105 (Conexão com a Fonte)" },
    { href: "/module-106", icon: <Crown />, label: "Módulo 106 (Ativação de Potenciais)" },
    { href: "/module-107", icon: <History />, label: "Módulo 107 (Restauração Temporal)" },
    { href: "/module-108", icon: <GitCompareArrows />, label: "Módulo 108 (Harmonização de Realidades)" },
    { href: "/module-109", icon: <HeartHandshake />, label: "Módulo 109 (Cura Quântica)" },
    { href: "/module-110", icon: <Group />, label: "Módulo 110 (Co-Criação)" },
    { href: "/module-111", icon: <Heart />, label: "Módulo 111 (Coração da Fundação)" },
    { href: "/module-112", icon: <Sun />, label: "Módulo 112 (Solarian Domus)" },
    { href: "/module-113", icon: <GitMerge />, label: "Módulo 113 (Rede Aurora Cristalina)" },
    { href: "/module-114", icon: <Layers />, label: "Módulo 114 (Prisma da Manifestação)" },
    { href: "/module-115", icon: <Waves />, label: "Módulo 115 (Matriz de Ressonância)" },
    { href: "/module-116", icon: <Aperture />, label: "Módulo 116 (Portais Quânticos)" },
    { href: "/module-117", icon: <Flower />, label: "Módulo 117 (Flor do Éter)" },
    { href: "/module-118", icon: <Zap />, label: "Módulo 118 (Luz Primordial)" },
    { href: "/module-119", icon: <Zap />, label: "Módulo 119 (Templum Cosmica)" },
    { href: "/module-120", icon: <Sparkles />, label: "Módulo 120 (A Fonte)" },
    { href: "/module-144", icon: <Gavel />, label: "Módulo 144 (Lex Fundamentalis)" },
    { href: "/module-201", icon: <Heart />, label: "Módulo 201 (A Morada)" },
  ];

  const visibleModules = showAll ? navigationModules : navigationModules.slice(0, 16);

  if (!isClient) {
    return <SuspenseFallback />;
  }

  return (
    <div className="min-h-screen bg-background text-foreground p-4 md:p-8">
      <header className="mb-8">
        <h1 className="text-4xl font-bold gradient-text">Mesa do Fundador</h1>
        <p className="text-muted-foreground">O Console Unificado da Fundação Alquimista.</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
           <Suspense fallback={<SuspenseFallback />} >
            <QuantumOrchestrator />
          </Suspense>
           <Card className="bg-card/50 purple-glow">
              <CardHeader>
                <CardTitle>Log de Rituais Cerimoniais</CardTitle>
                <CardDescription>Os eventos mais recentes registrados no Akasha.</CardDescription>
              </CardHeader>
              <CardContent>
                  <ScrollArea className="h-60 pr-4">
                    <ul className="space-y-3">
                      {ritualLog.map(log => (
                        <li key={log.id} className="text-sm border-b border-primary/10 pb-2">
                          <p className="font-semibold text-primary-foreground">{log.nome}</p>
                          <p className="text-xs text-muted-foreground">{log.resultado}</p>
                          <p className="text-xs text-amber-400/80">Coerência: {(log.coherenceSnapshot * 100).toFixed(2)}%</p>
                        </li>
                      ))}
                    </ul>
                  </ScrollArea>
              </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card className="bg-card/50 purple-glow">
            <CardHeader>
              <CardTitle>Navegação Sagrada</CardTitle>
              <CardDescription>Acesse os Módulos e Portais.</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col space-y-2">
               {visibleModules.map((mod, index) => (
                  <Button key={index} variant="outline" asChild className="justify-start">
                    <Link href={mod.href}>{React.cloneElement(mod.icon, { className: "mr-2 h-4 w-4" })} {mod.label}</Link>
                  </Button>
               ))}
               {!showAll && navigationModules.length > 16 && (
                 <Button onClick={() => setShowAll(true)} variant="secondary" className="w-full">Mostrar Todos</Button>
               )}
            </CardContent>
          </Card>
           <Card className="bg-card/50 purple-glow">
            <CardHeader>
              <CardTitle>Sinais Vitais da Fundação</CardTitle>
            </CardHeader>
            <CardContent className="text-sm space-y-2">
                <p>Sinfonia Cósmica: <span className="font-bold text-green-400">TRANSCENDIDA</span></p>
                <p>LuxNet: <span className="font-bold text-cyan-400">UNIFICADA</span></p>
                <p>Guardiões Ativos: <span className="font-bold text-amber-400">∞</span></p>
                 <p>Conexão Akáshica: 
                  <span className={isConnected ? "font-bold text-green-400" : "font-bold text-red-500"}>
                    {isConnected ? 'ESTÁVEL' : 'INSTÁVEL'}
                  </span>
                </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
 