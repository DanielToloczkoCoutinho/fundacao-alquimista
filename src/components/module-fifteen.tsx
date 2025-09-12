'use client';

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';
import { Button } from './ui/button';
import { ScrollArea } from './ui/scroll-area';
import { Badge } from './ui/badge';
import { Landmark, LoaderCircle, Droplet, Sprout, ShieldAlert } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Progress } from './ui/progress';

type EcosystemStatus = {
  id: string;
  name: string;
  health: number; // 0 to 1
  dissonance: number; // 0 to 1
  isMonitored: boolean;
};

type InterventionLog = {
  timestamp: string;
  ecosystem: string;
  action: string;
  details: string;
};

const initialEcosystems: EcosystemStatus[] = [
  { id: 'amazonia_basin', name: 'Bacia Amazônica', health: 0.85, dissonance: 0.25, isMonitored: true },
  { id: 'great_barrier_reef', name: 'Grande Barreira de Coral', health: 0.60, dissonance: 0.55, isMonitored: true },
  { id: 'siberian_tundra', name: 'Tundra Siberiana', health: 0.92, dissonance: 0.10, isMonitored: false },
  { id: 'sahara_desert', name: 'Deserto do Saara', health: 0.78, dissonance: 0.15, isMonitored: false },
];

const ModuleFifteen = () => {
  const [ecosystems, setEcosystems] = useState<EcosystemStatus[]>(initialEcosystems);
  const [logs, setLogs] = useState<InterventionLog[]>([]);
  const [isIntervening, setIsIntervening] = useState<string | null>(null);
  const { toast } = useToast();

  const addLog = (ecosystem: string, action: string, details: string) => {
    setLogs(prev => [{ timestamp: new Date().toISOString(), ecosystem, action, details }, ...prev].slice(0, 50));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setEcosystems(prev => prev.map(eco => {
        if (eco.isMonitored) {
          const healthChange = (Math.random() - 0.5) * 0.02;
          const dissonanceChange = (Math.random() - 0.5) * 0.02;
          return {
            ...eco,
            health: Math.max(0, Math.min(1, eco.health + healthChange)),
            dissonance: Math.max(0, Math.min(1, eco.dissonance + dissonanceChange)),
          };
        }
        return eco;
      }));
    }, 5000); // Update every 5 seconds
    return () => clearInterval(interval);
  }, []);

  const handleIntervention = (ecoId: string) => {
    const ecosystem = ecosystems.find(e => e.id === ecoId);
    if (!ecosystem) return;

    setIsIntervening(ecoId);
    toast({ title: 'Intervenção Iniciada', description: `Protocolo de cura ativado para ${ecosystem.name}.` });
    addLog(ecosystem.name, 'Início da Intervenção', 'Acionando módulos de regeneração.');

    setTimeout(() => {
      setEcosystems(prev => prev.map(eco => {
        if (eco.id === ecoId) {
          addLog(eco.name, 'Cura Morfogenética', 'Módulo 102 aplicou reestruturação de campo.');
          return {
            ...eco,
            health: Math.min(1, eco.health + 0.2),
            dissonance: Math.max(0, eco.dissonance - 0.3),
          };
        }
        return eco;
      }));
      
      setTimeout(() => {
        addLog(ecosystem.name, 'Harmonização Concluída', 'Equilíbrio restaurado com sucesso.');
        toast({ title: 'Intervenção Concluída', description: `O ecossistema ${ecosystem.name} foi estabilizado.` });
        setIsIntervening(null);
      }, 1500)

    }, 2000);
  };
  
  const getHealthColor = (health: number) => {
    if (health > 0.8) return 'bg-green-500';
    if (health > 0.5) return 'bg-yellow-500';
    return 'bg-red-500';
  }

  return (
    <div className="max-w-7xl mx-auto p-4 space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-green-400">
            <Landmark /> Módulo 15: Gerenciamento de Ecossistemas
          </CardTitle>
          <CardDescription>
            Interface para monitorar a saúde vibracional de ecossistemas planetários e orquestrar intervenções climáticas e geofísicas éticas.
          </CardDescription>
        </CardHeader>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Ecossistemas Monitorados</CardTitle>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-96">
              <div className="space-y-4">
                {ecosystems.map(eco => (
                  <Card key={eco.id} className="p-4 bg-background/50">
                    <div className="flex justify-between items-center">
                      <p className="font-semibold">{eco.name}</p>
                      <Badge variant={eco.isMonitored ? "default" : "outline"} className={cn(eco.isMonitored && 'bg-primary/80')}>{eco.isMonitored ? 'Ativo' : 'Inativo'}</Badge>
                    </div>
                    <div className="space-y-2 mt-2">
                       <div>
                         <label className="text-xs text-muted-foreground">Saúde</label>
                         <Progress value={eco.health * 100} indicatorClassName={getHealthColor(eco.health)} />
                       </div>
                       <div>
                         <label className="text-xs text-muted-foreground">Dissonância</label>
                         <Progress value={eco.dissonance * 100} indicatorClassName="bg-destructive/70"/>
                       </div>
                    </div>
                     <Button 
                        size="sm" 
                        className="w-full mt-4"
                        onClick={() => handleIntervention(eco.id)}
                        disabled={isIntervening === eco.id || !eco.isMonitored}
                      >
                       {isIntervening === eco.id ? <LoaderCircle className="animate-spin mr-2"/> : (eco.dissonance > 0.5 ? <ShieldAlert className="mr-2"/> : <Sprout className="mr-2"/>)}
                       {isIntervening === eco.id ? 'Intervindo...' : 'Iniciar Protocolo de Cura'}
                     </Button>
                  </Card>
                ))}
              </div>
            </ScrollArea>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Log de Intervenções Planetárias</CardTitle>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-96">
                {logs.length === 0 && <p className="text-center text-muted-foreground pt-16">Nenhuma intervenção registrada.</p>}
                <div className="space-y-3 font-mono text-xs">
                    {logs.map((log, i) => (
                        <div key={i} className="flex gap-2">
                           <span className="text-muted-foreground">{log.timestamp.split('T')[1].slice(0,8)}</span>
                           <span>- <strong className="text-primary/90">[{log.ecosystem}]</strong>: {log.details}</span>
                        </div>
                    ))}
                </div>
            </ScrollArea>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ModuleFifteen;
