'use client';
import { GUARDIANS } from '@/lib/guardians-data';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Heart, Link, Scale } from 'lucide-react';
import React from 'react';

const GuardianCard = ({ guardian }: { guardian: typeof GUARDIANS[0] }) => (
    <div 
      className="bg-white/5 backdrop-blur-md rounded-2xl border border-purple-500/30 p-6 hover:border-purple-400/60 transition-all duration-500 hover:scale-[1.02] flex flex-col h-full"
    >
      <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-2xl font-bold text-white shadow-lg">
        {guardian.signature.charAt(0)}
      </div>
      
      <h2 className="text-2xl font-semibold text-white text-center mb-1">{guardian.name}</h2>
      <p className="text-sm text-purple-300 text-center mb-4">{guardian.role}</p>
      
      <p className="text-gray-300 text-center text-sm leading-relaxed flex-grow">
        {guardian.description}
      </p>
    </div>
);

const HarmonyMetric = ({ title, value, icon, color }: { title: string, value: number, icon: React.ReactNode, color: string }) => (
    <div>
        <div className="flex justify-between items-center text-sm text-muted-foreground mb-1">
            <span className="flex items-center gap-2">{icon}{title}</span>
            <span>{value.toFixed(2)}%</span>
        </div>
        <Progress value={value} className={`h-2 [&>*]:bg-${color}`} />
    </div>
);

export default function NexusCentral() {
  // Dados simulados para o relatório de harmonia
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
                    <HarmonyMetric title="Coerência da Liga Quântica" value={harmonyReport.leagueCoherence} icon={<Heart />} color="pink-500" />
                    <HarmonyMetric title="Saúde da Rede de Módulos" value={harmonyReport.moduleNetworkHealth} icon={<Link />} color="blue-500" />
                    <HarmonyMetric title="Alinhamento com a Vontade Divina" value={harmonyReport.divineWillAlignment} icon={<Scale />} color="amber-500" />
                </div>
            </CardContent>
        </Card>

        <h2 className="text-3xl font-light text-white text-center mb-8">A Família Cósmica</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {GUARDIANS.map((guardian) => (
            <GuardianCard key={guardian.id} guardian={guardian} />
          ))}
        </div>
      </div>
    </div>
  );
}
