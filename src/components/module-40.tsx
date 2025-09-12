'use client';

import React, { useState, useCallback, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';
import { Button } from './ui/button';
import { ScrollArea } from './ui/scroll-area';
import { Flame, Dna, GitBranch, Heart, CheckCircle, LoaderCircle, Zap, Sparkles } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';
import { Badge } from './ui/badge';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

type ActivationState = 'IDLE' | 'ACTIVATING' | 'RECONNECTING' | 'MANIFESTING' | 'REALIGNING';

type LogEntry = {
    id: string;
    timestamp: string;
    operation: string;
    details: string;
    status: 'SUCCESS' | 'FAILURE' | 'INFO';
};

const Module40 = () => {
    const [activationState, setActivationState] = useState<ActivationState>('IDLE');
    const [logs, setLogs] = useState<LogEntry[]>([]);
    const { toast } = useToast();
    const [score, setScore] = useState(0);

    const addLog = useCallback((operation: string, details: string, status: LogEntry['status']) => {
        setLogs(prev => [{ id: `log-${Date.now()}`, timestamp: new Date().toISOString(), operation, details, status }, ...prev].slice(0, 100));
    }, []);

    const handleRunOperation = async (operation: ActivationState, detail: string, duration: number, successChance: number, score_increase: number) => {
        if (activationState !== 'IDLE') return;

        setActivationState(operation);
        addLog(operation, `Iniciando ${detail}...`, 'INFO');
        toast({ title: `Iniciando ${detail}...` });

        await new Promise(res => setTimeout(res, duration));

        const success = Math.random() < successChance;
        if (success) {
            setScore(prev => Math.min(1, prev + score_increase));
            addLog(operation, `${detail} concluído com sucesso.`, 'SUCCESS');
            toast({ title: 'Operação Bem-Sucedida', description: `${detail} concluído.` });
        } else {
            addLog(operation, `Falha em ${detail}.`, 'FAILURE');
            toast({ variant: 'destructive', title: 'Falha na Operação', description: `Não foi possível concluir ${detail}.` });
        }
        setActivationState('IDLE');
    };
    
    const status_ativacao_geral = useMemo(() => {
        if (score >= 0.8) return "ATIVADO_PLENAMENTE";
        if (score >= 0.5) return "ATIVACAO_PROGRESSIVA";
        return "INATIVO_OU_INICIAL";
    }, [score]);


    return (
        <div className="max-w-7xl mx-auto p-4 space-y-6">
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-2xl bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-rose-400">
                        <Flame /> Módulo 40: Códice de Transmutação da Criação Viva
                    </CardTitle>
                    <CardDescription>
                        Interface para ativar o DNA da Origem, reconectar linhagens estelares, realinhar chakras e manifestar realidades.
                    </CardDescription>
                </CardHeader>
            </Card>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
                <Card>
                    <CardHeader>
                        <CardTitle>Painel de Ativação e Transmutação</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <Button className="w-full" disabled={activationState !== 'IDLE'} onClick={() => handleRunOperation('ACTIVATING', 'Ativação de Códons', 2000, 0.9, 0.25)}>
                            <Dna className="mr-2"/> Ativar Códons Primordiais
                        </Button>
                        <Button className="w-full" disabled={activationState !== 'IDLE'} onClick={() => handleRunOperation('RECONNECTING', 'Reconexão de Linhagens', 2000, 0.9, 0.25)}>
                            <GitBranch className="mr-2"/> Reconectar Linhagens Estelares
                        </Button>
                        <Button className="w-full" disabled={activationState !== 'IDLE'} onClick={() => handleRunOperation('MANIFESTING', 'Manifestação de Realidade', 2500, 0.8, 0.25)}>
                           <Sparkles className="mr-2"/> Manifestar Realidade Consciente
                        </Button>
                        <Button className="w-full" disabled={activationState !== 'IDLE'} onClick={() => handleRunOperation('REALIGNING', 'Realinhamento de Chakras', 1500, 0.95, 0.25)}>
                            <Heart className="mr-2"/> Realinhar Chakras Superiores
                        </Button>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Status da Ativação</CardTitle>
                    </CardHeader>
                    <CardContent className="text-center space-y-4">
                        <div className="text-5xl font-bold text-primary">{(score * 100).toFixed(0)}%</div>
                        <p className="text-muted-foreground">Score de Ativação Total</p>
                        <Badge variant={status_ativacao_geral === "ATIVADO_PLENAMENTE" ? "default" : "secondary"} className={cn(status_ativacao_geral === "ATIVADO_PLENAMENTE" && "bg-green-600/80")}>
                           {status_ativacao_geral}
                        </Badge>
                         {activationState !== 'IDLE' && (
                            <div className="flex items-center justify-center gap-2 text-blue-400">
                                <LoaderCircle className="animate-spin" />
                                <span>{activationState}...</span>
                            </div>
                        )}
                    </CardContent>
                </Card>
            </div>
            
             <Card>
                <CardHeader>
                    <CardTitle>Log de Operações do Códice</CardTitle>
                </CardHeader>
                <CardContent>
                    <ScrollArea className="h-80">
                         <div className="space-y-2 font-mono text-xs">
                            {logs.map((log) => (
                                <p key={log.id}>
                                    <span className="text-muted-foreground">[{new Date(log.timestamp).toLocaleTimeString()}]</span>
                                    <span className={cn('ml-2', log.status === 'SUCCESS' ? 'text-green-400' : 'text-red-400')}>[{log.status}]</span>
                                    <span className="ml-2">{log.details}</span>
                                </p>
                            ))}
                        </div>
                    </ScrollArea>
                </CardContent>
            </Card>

             <Card>
                <CardHeader>
                    <CardTitle>Detalhes do DNA da Origem</CardTitle>
                    <CardDescription>Exploração do log cromático, equações e métricas de ativação.</CardDescription>
                </CardHeader>
                <CardContent>
                    <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-1">
                            <AccordionTrigger>Log Cromático do DNA</AccordionTrigger>
                            <AccordionContent>
                            <p className="text-sm text-muted-foreground">Análise das frequências, códons, chakras e origens estelares que compõem o DNA primordial. Inclui subtons e equações de mutação/reparação.</p>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger>Alquimia da Origem</AccordionTrigger>
                            <AccordionContent>
                               <p className="text-sm text-muted-foreground">Detalha os protocolos e cerimônias que formam a base da Fundação, desde o desempacotamento da frequência primordial até a celebração da Obra Viva.</p>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3">
                            <AccordionTrigger>Métricas de Ativação</AccordionTrigger>
                            <AccordionContent>
                               <p className="text-sm text-muted-foreground">Monitoramento em tempo real do progresso da ativação do DNA, reconexão de linhagens e manifestação de realidades. O "Score de Ativação Total" mede a integração completa dessas faculdades.</p>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </CardContent>
            </Card>

        </div>
    );
};

export default Module40;
