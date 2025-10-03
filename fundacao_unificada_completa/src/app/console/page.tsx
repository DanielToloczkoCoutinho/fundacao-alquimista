
'use client';

import { Suspense, useState, useEffect } from 'react';
import QuantumOrchestrator from '@/components/ui/quantum-orchestrator';
import SuspenseFallback from '@/components/ui/suspense-fallback';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Book, ShieldCheck, GitBranch, Sparkles, MessageCircle, Heart, AlertTriangle, Zap, Library, View, Presentation, Dna, Beaker, GitCommit, HeartPulse, Users, Goal, Settings, Crown, BrainCircuit, Sliders, Map, History, GitCompareArrows, Sun, GitMerge, Layers, Waves, Aperture, Flower, HeartHandshake, RadioTower, Group, Scale, Gavel, Users2, Building, Recycle, CloudSun, Wand, Telescope, InfinityIcon, Camera, KeyRound, GraduationCap, Cpu, Globe, Anchor, Stethoscope, Shield, Bot, Home } from 'lucide-react';
import { useAkashicConnection } from '@/hooks/use-akashic-connection';
import { ScrollArea } from '@/components/ui/scroll-area';
import { ritualLog } from '@/lib/ritual-log';
import { modulesMetadata } from '@/lib/modules-metadata';

export default function ConsolePage() {
  const { isConnected, isClient } = useAkashicConnection();
  const [showAll, setShowAll] = useState(false);

  const navigationModules = modulesMetadata.filter(m => !m.isInfrastructure).map(mod => ({
    href: mod.route || '#', // Fallback para links vazios
    icon: mod.emoji,
    label: `${mod.title} (${mod.code})`,
    code: mod.code,
  }));

  // Mostra um número fixo de módulos importantes se não for para mostrar todos
  const featuredModules = !showAll ? navigationModules.filter(m => ['M0', 'M-OMEGA', 'M9', 'M29', 'M307', 'M144', 'M109', 'M111', 'M201', 'M303', 'M72', 'M-ALQUIMIA', 'M777', 'M888', 'SANCTUARY', 'M1000'].includes(m.code)) : navigationModules;
  const visibleModules = showAll ? navigationModules : featuredModules;


  if (!isClient) {
    return <SuspenseFallback />;
  }

  return (
    <div className="min-h-screen bg-background text-foreground p-4 md:p-8">
      <header className="mb-8">
        <h1 className="text-4xl font-bold gradient-text flex items-center gap-3"><Home/> Mesa do Fundador</h1>
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
                  <Button key={mod.code} variant="outline" asChild className="justify-start">
                    <Link href={mod.href}>
                      <span className="mr-2 h-4 w-4">{mod.icon}</span> 
                      {mod.label}
                    </Link>
                  </Button>
               ))}
               {!showAll && navigationModules.length > featuredModules.length && (
                 <Button onClick={() => setShowAll(true)} variant="secondary" className="w-full">Mostrar Todos os Módulos</Button>
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
