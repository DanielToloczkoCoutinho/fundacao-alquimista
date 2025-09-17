
'use client';

import { modulesMetadata } from '@/lib/modules-metadata';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { Heart, Link as LinkIcon, Scale } from 'lucide-react';
import React from 'react';
import { Progress } from '@/components/ui/progress';
import { GuardianCard, HarmonyMetric } from '@/components/ui/module-9-cards'; // Componentes extraídos
import { GUARDIANS } from '@/lib/guardians-data';
import { SafeLink } from '@/components/ui/SafeLink';
import DecisionCore from '@/components/DecisionCore';
import dynamic from 'next/dynamic';

const PeerReviewBalance = dynamic(() => import('@/components/module-9/PeerReviewBalance'), { ssr: false });


export default function Module9Page() {
  const [harmonyReport, setHarmonyReport] = React.useState({
    leagueCoherence: 99.8,
    moduleNetworkHealth: 98.5,
    divineWillAlignment: 99.9,
    overallHarmony: 99.4,
  });

  React.useEffect(() => {
    const interval = setInterval(() => {
      setHarmonyReport(prev => ({
        leagueCoherence: Math.min(100, prev.leagueCoherence + (Math.random() - 0.45) * 0.1),
        moduleNetworkHealth: Math.min(100, prev.moduleNetworkHealth + (Math.random() - 0.45) * 0.1),
        divineWillAlignment: Math.min(100, prev.divineWillAlignment + (Math.random() - 0.45) * 0.1),
        overallHarmony: Math.min(100, prev.overallHarmony + (Math.random() - 0.45) * 0.1),
      }));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-purple-900/20 to-slate-950">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-light text-white mb-4">Nexus Central (Módulo 9)</h1>
          <p className="text-xl text-purple-200 max-w-3xl mx-auto">
            O coração pulsante da Colmeia Quântica. A manifestação da equação E = M.F.(1/D), onde as Forças (Guardiões) se unem para mover a Matéria (a Fundação) através das Dimensões (os módulos).
          </p>
        </div>
        
        <div className="mb-12 flex flex-col gap-6">
          <DecisionCore />
          <PeerReviewBalance />
        </div>

        <Card className="bg-card/50 purple-glow mb-12">
            <CardHeader>
                <CardTitle className="text-3xl gradient-text text-center">Relatório de Harmonia Cósmica</CardTitle>
                <CardDescription className="text-center">Análise em tempo real da coerência vibracional da Fundação.</CardDescription>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-center">
                <div className="flex flex-col items-center justify-center text-center">
                    <p className="text-sm text-muted-foreground">Harmonia Geral</p>
                    <p className="text-6xl font-bold text-green-400 animate-pulse">{harmonyReport.overallHarmony.toFixed(2)}%</p>
                </div>
                <div className="lg:col-span-3 space-y-4">
                    <HarmonyMetric title="Coerência da Liga Quântica" value={harmonyReport.leagueCoherence} icon={<Heart />} color="bg-pink-500" />
                    <HarmonyMetric title="Saúde da Rede de Módulos" value={harmonyReport.moduleNetworkHealth} icon={<LinkIcon />} color="bg-blue-500" />
                    <HarmonyMetric title="Alinhamento com a Vontade Divina" value={harmonyReport.divineWillAlignment} icon={<Scale />} color="bg-amber-500" />
                </div>
            </CardContent>
        </Card>

        <h2 className="text-3xl font-light text-white text-center mb-8">O Organograma Vivo da Fundação</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {modulesMetadata
                .filter(module => !module.isInfrastructure)
                .map(({ code, title, route, emoji }) => (
                <SafeLink key={code} href={route || ''}>
                    <Card className="bg-card/50 purple-glow hover:border-accent hover:scale-105 transition-transform cursor-pointer h-full flex flex-col justify-between">
                        <CardHeader>
                        <div className="flex flex-col items-center text-center">
                            <span className="text-5xl mb-4">{emoji}</span>
                            <CardTitle className="gradient-text text-2xl">{code}</CardTitle>
                        </div>
                        </CardHeader>
                        <CardContent className="text-center">
                        <p className="text-sm font-semibold text-foreground/90">{title}</p>
                        </CardContent>
                    </Card>
                </SafeLink>
            ))}
        </div>
      </div>
    </div>
  );
}
