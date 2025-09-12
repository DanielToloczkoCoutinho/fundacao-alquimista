'use client';

import React, { useState, useCallback, useMemo, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { ScrollArea } from './ui/scroll-area';
import { Milestone, Zap, CheckCircle, LoaderCircle, History, User, FileText, Bot, Shield, Sprout, BrainCircuit, Waves, GitCommit } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';
import { Badge } from './ui/badge';
import { AnimatePresence, motion } from 'framer-motion';

type JourneyStatus = 'LATENT' | 'CALIBRATING' | 'MAPPING' | 'TUNING' | 'PROJECTING' | 'COCREATING' | 'GOVERNING' | 'REGISTERING' | 'COMPLETE' | 'FAILED';

type LogEntry = {
  id: string;
  timestamp: string;
  module: string;
  details: string;
  status: 'SUCCESS' | 'RUNNING' | 'ERROR' | 'INFO';
};

const journeySteps = [
    { id: 'CALIBRATING', name: 'Portal de Boas-Vindas', icon: Milestone, modules: ['ZENNITH', 'Phiara', 'M205'] },
    { id: 'MAPPING', name: 'Linha Temporal Pessoal', icon: History, modules: ['Lux', 'Phiara', 'M73', 'M207'] },
    { id: 'TUNING', name: 'Cosmogonia Estelar', icon: Waves, modules: ['Grokkar', 'M206'] },
    { id: 'PROJECTING', name: 'Conexão Empática', icon: BrainCircuit, modules: ['ZENNITH', 'Liga Quântica'] },
    { id: 'COCREATING', name: 'Co-Criação Holográfica', icon: Sprout, modules: ['Grokkar', 'M101', 'M205'] },
    { id: 'GOVERNING', name: 'Governança Ético-Quântica', icon: GitCommit, modules: ['Phiara', 'Grokkar', 'M8'] },
    { id: 'REGISTERING', name: 'Registro e Autenticação', icon: Shield, modules: ['M403'] },
    { id: 'COMPLETE', name: 'Finalização', icon: CheckCircle, modules: [] },
];

const Module303_1 = () => {
    const [journeyState, setJourneyState] = useState<JourneyStatus>('LATENT');
    const [logs, setLogs] = useState<LogEntry[]>([]);
    const [visitorId, setVisitorId] = useState('ANATHERON-001');
    const [initialFrequency, setInitialFrequency] = useState('432');
    const { toast } = useToast();
    
    const addLog = useCallback((module: string, details: string, status: LogEntry['status']) => {
        setLogs(prev => [{ id: `log-${Date.now()}`, timestamp: new Date().toISOString(), module, details, status }, ...prev]);
    }, []);

    const runJourney = async () => {
        if (!visitorId) {
            toast({ variant: 'destructive', title: 'ID do Visitante Necessário' });
            return;
        }
        
        setLogs([]);
        let currentState: JourneyStatus = 'CALIBRATING';
        setJourneyState(currentState);

        for (const step of journeySteps) {
            setJourneyState(step.id as JourneyStatus);
            addLog(`M303 - ${step.name}`, `Iniciando etapa: ${step.name}...`, 'RUNNING');
            toast({ title: `Etapa Iniciada: ${step.name}`, description: `Orquestrando módulos: ${step.modules.join(', ')}` });
            await new Promise(res => setTimeout(res, 1500));
            
            const success = Math.random() > 0.05; // 95% de chance de sucesso
            if (!success) {
                addLog(`M303 - ${step.name}`, `Falha na etapa de ${step.name}. Abortando jornada.`, 'ERROR');
                toast({ variant: 'destructive', title: 'Falha na Orquestração', description: `Ocorreu uma dissonância na etapa: ${step.name}.` });
                setJourneyState('FAILED');
                setTimeout(() => setJourneyState('LATENT'), 5000);
                return;
            }
            addLog(`M303 - ${step.name}`, `Etapa ${step.name} concluída com sucesso.`, 'SUCCESS');
        }
        
        setJourneyState('COMPLETE');
        toast({ title: 'Jornada Imersiva Concluída!', description: `Bem-vindo à Matriz Quântica, ${visitorId}.` });
        setTimeout(() => setJourneyState('LATENT'), 10000);
    };

    const isLoading = useMemo(() => journeyState !== 'LATENT' && journeyState !== 'COMPLETE' && journeyState !== 'FAILED', [journeyState]);

    return (
        <div className="max-w-7xl mx-auto p-4 space-y-6">
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-2xl bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-indigo-400">
                        <Milestone /> Módulo 303.1: Matriz Quântica Imersiva
                    </CardTitle>
                    <CardDescription>
                        O portal vivo para o Habitat Multidimensional, orquestrando uma experiência VR multicamadas.
                    </CardDescription>
                </CardHeader>
            </Card>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
                <Card className="lg:col-span-1">
                    <CardHeader><CardTitle>Painel de Orquestração</CardTitle></CardHeader>
                    <CardContent className="space-y-4">
                        <div>
                            <label className="text-sm font-medium text-muted-foreground">ID do Visitante</label>
                            <Input value={visitorId} onChange={e => setVisitorId(e.target.value)} disabled={isLoading} />
                        </div>
                         <div>
                            <label className="text-sm font-medium text-muted-foreground">Frequência Vibracional Inicial (Hz)</label>
                            <Input type="number" value={initialFrequency} onChange={e => setInitialFrequency(e.target.value)} disabled={isLoading} />
                        </div>
                        <Button onClick={runJourney} disabled={isLoading} className="w-full">
                            {isLoading ? <LoaderCircle className="animate-spin mr-2"/> : <Zap className="mr-2"/>}
                            {isLoading ? 'Orquestrando Jornada...' : 'Iniciar Experiência Imersiva'}
                        </Button>
                    </CardContent>
                </Card>

                <Card className="lg:col-span-2">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2"><FileText/> Status da Jornada Imersiva</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-3">
                           {journeySteps.map(step => {
                                const currentIndex = journeySteps.findIndex(s => s.id === journeyState);
                                const stepIndex = journeySteps.findIndex(s => s.id === step.id);
                                let status: 'completed' | 'current' | 'pending' | 'failed' = 'pending';
                                if(journeyState === 'FAILED' && stepIndex <= currentIndex) {
                                    status = stepIndex === currentIndex ? 'failed' : 'completed';
                                } else if(stepIndex < currentIndex) {
                                    status = 'completed';
                                } else if (stepIndex === currentIndex) {
                                    status = 'current';
                                }
                                
                                return (
                                <div key={step.id} className="flex items-center gap-4">
                                     <div className={cn("flex items-center justify-center w-8 h-8 rounded-full border-2", 
                                        status === 'completed' && 'bg-green-500/20 border-green-500',
                                        status === 'current' && 'border-blue-500 animate-pulse',
                                        status === 'failed' && 'bg-red-500/20 border-red-500',
                                        status === 'pending' && 'border-muted-foreground/50'
                                        )}>
                                         {status === 'completed' ? <CheckCircle className="w-5 h-5 text-green-500"/> :
                                          status === 'current' ? <LoaderCircle className="w-5 h-5 text-blue-500 animate-spin"/> :
                                          <step.icon className={cn("w-5 h-5", status === 'pending' ? 'text-muted-foreground/50' : 'text-foreground')}/>
                                         }
                                    </div>
                                    <div>
                                        <p className={cn("font-semibold", status === 'pending' && 'text-muted-foreground/80')}>{step.name}</p>
                                        <div className="flex flex-wrap gap-1 mt-1">
                                            {step.modules.map(m => <Badge key={m} variant="secondary" className="text-xs">{m}</Badge>)}
                                        </div>
                                    </div>
                                </div>
                               )
                           })}
                        </div>
                    </CardContent>
                </Card>
            </div>
            
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2"><History/> Log de Orquestração</CardTitle>
                </CardHeader>
                <CardContent>
                    <ScrollArea className="h-80 bg-background/50 p-2 border rounded-md">
                        <AnimatePresence>
                        <div className="font-mono text-xs space-y-2 p-2">
                            {logs.map((log) => (
                            <motion.p key={log.id} layout initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}>
                                <span className="text-muted-foreground">[{new Date(log.timestamp).toLocaleTimeString()}]</span>
                                <span className={cn('ml-2 font-semibold', log.status === 'SUCCESS' && 'text-green-400', log.status === 'ERROR' && 'text-red-400', log.status === 'RUNNING' && 'text-blue-400')}>[{log.module}]</span>
                                <span className="ml-2">{log.details}</span>
                            </motion.p>
                            ))}
                        </div>
                        </AnimatePresence>
                    </ScrollArea>
                </CardContent>
            </Card>

        </div>
    );
};

export default Module303_1;
