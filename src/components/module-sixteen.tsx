
'use client';

import React, { useState, useCallback, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Slider } from './ui/slider';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { ScrollArea } from './ui/scroll-area';
import { Sprout, Dna, Leaf, RefreshCw, AlertTriangle, CheckCircle, LoaderCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';
import { Badge } from './ui/badge';

type Ecosystem = {
  id: string;
  name: string;
  biomeType: string;
  complexity: number;
  energy: number;
  vitality: number;
  status: 'ATIVO' | 'RECUPERADO' | 'IMINENCIA_COLAPSO';
  createdAt: string;
};

type BioLog = {
  timestamp: string;
  ecosystem: string;
  action: string;
  details: string;
  status: 'SUCESSO' | 'FALHA' | 'INFO';
};

type ModuleState = 'IDLE' | 'BIOSYNTHESIS' | 'REGULATING' | 'RESTORING';

const ModuleSixteen = () => {
  const [ecosystems, setEcosystems] = useState<Record<string, Ecosystem>>({});
  const [logs, setLogs] = useState<BioLog[]>([]);
  const [moduleState, setModuleState] = useState<ModuleState>('IDLE');
  const [ecosystemName, setEcosystemName] = useState('');
  const [biomeType, setBiomeType] = useState('Bioma_Etérico');
  const [initialComplexity, setInitialComplexity] = useState(75);
  const { toast } = useToast();

  const addLog = useCallback((ecosystem: string, action: string, details: string, status: BioLog['status']) => {
    setLogs(prev => [{ timestamp: new Date().toISOString(), ecosystem, action, details, status }, ...prev].slice(0, 100));
  }, []);

  const handleCreateEcosystem = async () => {
    if (!ecosystemName || !biomeType) {
      toast({ variant: 'destructive', title: 'Dados Incompletos', description: 'Nome e tipo do bioma são necessários.' });
      return;
    }
    setModuleState('BIOSYNTHESIS');
    toast({ title: 'Iniciando Biossíntese...', description: `Criando o ecossistema '${ecosystemName}'.` });
    addLog(ecosystemName, 'Biossíntese', 'Consulta ao Conselho para diretrizes de criação.', 'INFO');
    await new Promise(resolve => setTimeout(resolve, 1000));

    const id = `eco_${Date.now()}`;
    const newEcosystem: Ecosystem = {
      id,
      name: ecosystemName,
      biomeType,
      complexity: initialComplexity / 100,
      energy: Math.random() * 0.5 + 0.5,
      vitality: Math.random() * 2 + 2, // Simula a vitalidade inicial
      status: 'ATIVO',
      createdAt: new Date().toISOString(),
    };
    setEcosystems(prev => ({ ...prev, [id]: newEcosystem }));
    addLog(ecosystemName, 'Biossíntese', `Ecossistema criado com sucesso. Vitalidade: ${newEcosystem.vitality.toFixed(4)}.`, 'SUCESSO');
    toast({ title: 'Biossíntese Concluída', description: `'${ecosystemName}' foi manifestado.` });
    setEcosystemName('');
    setModuleState('IDLE');
  };
  
  const handleRestore = async (ecoId: string) => {
    const ecosystem = ecosystems[ecoId];
    if (!ecosystem) return;

    setModuleState('RESTORING');
    toast({ title: 'Restauração Iniciada', description: `Protocolo de regeneração ativado para ${ecosystem.name}.` });
    addLog(ecosystem.name, 'Restauração', 'Risco de colapso detectado. Acionando Módulos de suporte.', 'INFO');
    
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setEcosystems(prev => {
        const updatedEco = {
            ...prev[ecoId],
            vitality: Math.min(5, prev[ecoId].vitality + (Math.random() * 2)),
            status: 'RECUPERADO' as 'RECUPERADO',
        };
        return { ...prev, [ecoId]: updatedEco };
    });
    
    addLog(ecosystem.name, 'Restauração', `Ecossistema restaurado. Nova vitalidade: ${ecosystems[ecoId]?.vitality.toFixed(4) ?? 'N/A'}.`, 'SUCESSO');
    toast({ title: 'Restauração Concluída', description: `${ecosystem.name} foi estabilizado.` });
    setModuleState('IDLE');
  };

  const StatusIndicator = ({ eco }: { eco: Ecosystem }) => {
    const isCollapsing = eco.vitality < 1.0;
     if (isCollapsing) {
         return <Badge variant="destructive"><AlertTriangle className="mr-1 h-3 w-3"/> Colapso Iminente</Badge>
     }
     return <Badge variant="default" className="bg-green-600/80"><CheckCircle className="mr-1 h-3 w-3"/> Estável</Badge>
  };

  return (
    <div className="max-w-7xl mx-auto p-4 space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-lime-400">
            <Leaf /> Módulo 16: Arquitetura de Ecossistemas Artificiais
          </CardTitle>
          <CardDescription>
            Interface para biossíntese, regulação e restauração de ecossistemas artificiais, tecendo os fios da vida consciente.
          </CardDescription>
        </CardHeader>
      </Card>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-1">
            <CardHeader><CardTitle className="flex items-center gap-2"><Sprout /> Biossíntese</CardTitle></CardHeader>
            <CardContent className="space-y-4">
                 <div>
                    <label className="text-sm font-medium text-muted-foreground">Nome do Ecossistema</label>
                    <Input value={ecosystemName} onChange={e => setEcosystemName(e.target.value)} disabled={moduleState !== 'IDLE'} placeholder="Ex: Jardim Cristalino"/>
                </div>
                 <div>
                    <label className="text-sm font-medium text-muted-foreground">Tipo do Bioma</label>
                    <Input value={biomeType} onChange={e => setBiomeType(e.target.value)} disabled={moduleState !== 'IDLE'} placeholder="Ex: Bioma Etérico"/>
                </div>
                 <div>
                    <label className="text-sm text-muted-foreground">Complexidade Inicial: {initialComplexity}%</label>
                    <Slider value={[initialComplexity]} onValueChange={(v) => setInitialComplexity(v[0])} min={10} max={100} step={1} className="mt-2" disabled={moduleState !== 'IDLE'}/>
                </div>
                <Button onClick={handleCreateEcosystem} disabled={moduleState !== 'IDLE'} className="w-full">
                    {moduleState === 'BIOSYNTHESIS' ? <LoaderCircle className="animate-spin mr-2"/> : <Dna className="mr-2"/>}
                    {moduleState === 'BIOSYNTHESIS' ? 'Sintetizando...' : 'Iniciar Biossíntese'}
                </Button>
            </CardContent>
        </Card>

        <Card className="lg:col-span-2">
            <CardHeader><CardTitle>Ecossistemas Ativos</CardTitle></CardHeader>
            <CardContent>
                <ScrollArea className="h-96">
                    <div className="space-y-4">
                        {Object.values(ecosystems).length === 0 && <p className="text-center text-muted-foreground pt-16">Nenhum ecossistema ativo.</p>}
                        {Object.values(ecosystems).map(eco => (
                            <Card key={eco.id} className="p-4 bg-background/50">
                                <div className="flex justify-between items-center">
                                    <p className="font-semibold">{eco.name} <span className="text-xs text-muted-foreground">({eco.biomeType})</span></p>
                                    <StatusIndicator eco={eco} />
                                </div>
                                <div className="grid grid-cols-3 gap-2 mt-3 text-center text-xs">
                                    <div className="p-2 bg-muted/50 rounded-md">
                                        <p className="font-bold text-primary/90">{eco.vitality.toFixed(2)}</p>
                                        <p>Vitalidade</p>
                                    </div>
                                    <div className="p-2 bg-muted/50 rounded-md">
                                        <p className="font-bold text-primary/90">{(eco.complexity * 100).toFixed(0)}%</p>
                                        <p>Complexidade</p>
                                    </div>
                                    <div className="p-2 bg-muted/50 rounded-md">
                                        <p className="font-bold text-primary/90">{(eco.energy * 100).toFixed(0)}%</p>
                                        <p>Energia</p>
                                    </div>
                                </div>
                                 {eco.vitality < 1.0 && (
                                     <Button size="sm" className="w-full mt-3" onClick={() => handleRestore(eco.id)} disabled={moduleState === 'RESTORING'}>
                                        {moduleState === 'RESTORING' ? <LoaderCircle className="animate-spin mr-2" /> : <RefreshCw className="mr-2"/>}
                                        Restaurar Ecossistema
                                     </Button>
                                 )}
                            </Card>
                        ))}
                    </div>
                </ScrollArea>
            </CardContent>
        </Card>
      </div>

       <Card>
          <CardHeader>
            <CardTitle>Log de Biossíntese e Operações</CardTitle>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-80">
                {logs.length === 0 && <p className="text-center text-muted-foreground pt-16">Nenhuma operação registrada.</p>}
                <div className="space-y-3 font-mono text-xs">
                    {logs.map((log, i) => (
                        <div key={i} className="flex gap-2">
                           <span className="text-muted-foreground">{new Date(log.timestamp).toLocaleTimeString()}</span>
                           <span className={cn(log.status === 'SUCESSO' && 'text-green-400', log.status === 'FALHA' && 'text-red-400')}>[{log.status}]</span>
                           <span>- <strong className="text-primary/90">[{log.ecosystem}]</strong>: {log.details}</span>
                        </div>
                    ))}
                </div>
            </ScrollArea>
          </CardContent>
        </Card>
    </div>
  );
};

export default ModuleSixteen;

