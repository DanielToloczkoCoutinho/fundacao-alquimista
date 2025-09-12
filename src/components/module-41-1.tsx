'use client';

import React, { useState, useCallback, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { ScrollArea } from './ui/scroll-area';
import { Heart, Zap, Dna, FileText, CheckCircle, AlertTriangle, LoaderCircle, History } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';
import { Badge } from './ui/badge';

type OperationState = 'IDLE' | 'ANALYZING' | 'GENERATING';

type LogEntry = {
  id: string;
  timestamp: string;
  operation: string;
  details: string;
  status: 'SUCCESS' | 'FAILURE' | 'INFO' | 'WARNING';
};

type GeneAnalysisResult = {
    gene_id: string;
    sequence: string;
    length: number;
    ethical_alignment_score: number;
};

type HealingManual = {
    manual_id: string;
    target_entity: string;
    protocols: number;
};

const Module41_1 = () => {
    const [operationState, setOperationState] = useState<OperationState>('IDLE');
    const [logs, setLogs] = useState<LogEntry[]>([]);
    const [geneSequence, setGeneSequence] = useState('ATGCGTACGTAGCTAGCTAGCTAGCTACGATC');
    const [targetPathogen, setTargetPathogen] = useState('Vírus da Dissonância');
    const [analysisResult, setAnalysisResult] = useState<GeneAnalysisResult | null>(null);
    const [healingManual, setHealingManual] = useState<HealingManual | null>(null);
    const { toast } = useToast();

    const addLog = useCallback((operation: string, details: string, status: LogEntry['status']) => {
        setLogs(prev => [{ id: `log-${Date.now()}`, timestamp: new Date().toISOString(), operation, details, status }, ...prev].slice(0, 100));
    }, []);

    const runFullCycle = async () => {
        setOperationState('ANALYZING');
        setAnalysisResult(null);
        setHealingManual(null);
        addLog('Ciclo Iniciado', 'Iniciando análise genômica e geração de manual de cura.', 'INFO');
        toast({ title: 'Ciclo de Cura Iniciado...' });

        // Fase 1: Análise Genômica
        await new Promise(res => setTimeout(res, 1500));
        const ethical_alignment = Math.random() * 0.3 + 0.65; // Simula score entre 0.65 e 0.95
        const currentAnalysis: GeneAnalysisResult = {
            gene_id: "GENE-EXEMPLO",
            sequence: geneSequence,
            length: geneSequence.length,
            ethical_alignment_score: ethical_alignment
        };
        setAnalysisResult(currentAnalysis);
        addLog('Análise Genômica', `Análise concluída. Alinhamento Ético: ${ethical_alignment.toFixed(2)}`, 'SUCCESS');
        
        // Fase 2: Geração do Manual
        setOperationState('GENERATING');
        await new Promise(res => setTimeout(res, 1500));
        
        if (ethical_alignment < 0.75) {
            addLog('Geração de Manual', `Falha: Alinhamento ético (${ethical_alignment.toFixed(2)}) abaixo do limiar de 0.75.`, 'FAILURE');
            toast({ variant: 'destructive', title: 'Falha Ética', description: 'Não é possível gerar o manual com baixo alinhamento ético.' });
            setOperationState('IDLE');
            return;
        }

        const newManual: HealingManual = {
            manual_id: `QHM-${hashlib.sha256(geneSequence.encode()).hexdigest()[:10]}`,
            target_entity: "Entidade Alvo Exemplo",
            protocols: Math.floor(Math.random() * 3) + 2,
        };
        setHealingManual(newManual);
        addLog('Geração de Manual', `Manual de cura '${newManual.manual_id}' gerado com ${newManual.protocols} protocolos.`, 'SUCCESS');
        toast({ title: 'Manual de Cura Gerado!', description: `Protocolos de cura para '${newManual.target_entity}' estão prontos.` });
        
        setOperationState('IDLE');
    };

    const StatusIndicator = useMemo(() => {
        switch (operationState) {
            case 'ANALYZING': return { icon: LoaderCircle, text: "Analisando Genoma...", color: "text-blue-400 animate-spin" };
            case 'GENERATING': return { icon: LoaderCircle, text: "Gerando Manual...", color: "text-purple-400 animate-spin" };
            case 'IDLE': default: return { icon: Heart, text: "Aguardando Orquestração", color: "text-gray-400" };
        }
    }, [operationState]);
    
    return (
        <div className="max-w-7xl mx-auto p-4 space-y-6">
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-2xl bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-rose-400">
                        <Heart /> Módulo 41.1: Manual de Cura Quântica
                    </CardTitle>
                    <CardDescription>
                        Interface para o Arquiteto da Cura Cósmica. Analise assinaturas genômicas e orquestre a geração de manuais de cura quântica personalizados.
                    </CardDescription>
                </CardHeader>
            </Card>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2"><Dna /> Painel de Análise e Geração</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div>
                            <label className="text-sm font-medium text-muted-foreground">Sequência de DNA Alvo</label>
                            <Textarea value={geneSequence} onChange={e => setGeneSequence(e.target.value)} disabled={operationState !== 'IDLE'} rows={4} />
                        </div>
                        <div>
                            <label className="text-sm font-medium text-muted-foreground">Patógeno Vibracional Alvo (Opcional)</label>
                            <Input value={targetPathogen} onChange={e => setTargetPathogen(e.target.value)} disabled={operationState !== 'IDLE'} />
                        </div>
                        <div className={cn("p-4 rounded-lg border flex items-center justify-center text-lg font-semibold", StatusIndicator.color.replace('text-', 'bg-').replace('400', '500/10'))}>
                            <StatusIndicator.icon className={cn("mr-2", StatusIndicator.color)} />
                            <span className={StatusIndicator.color}>{StatusIndicator.text}</span>
                        </div>
                        <Button onClick={runFullCycle} disabled={operationState !== 'IDLE'} className="w-full">
                            {operationState !== 'IDLE' ? <LoaderCircle className="animate-spin mr-2" /> : <Zap className="mr-2" />}
                            {operationState !== 'IDLE' ? 'Processando Ciclo...' : 'Iniciar Ciclo de Cura'}
                        </Button>
                    </CardContent>
                </Card>
                <div className="space-y-6">
                    {analysisResult && (
                        <Card>
                            <CardHeader><CardTitle className="flex items-center gap-2 text-blue-400"><FileText /> Resultado da Análise</CardTitle></CardHeader>
                            <CardContent className="font-mono text-xs space-y-1">
                                <p><strong>ID do Gene:</strong> {analysisResult.gene_id}</p>
                                <p><strong>Comprimento:</strong> {analysisResult.length} bases</p>
                                <p><strong>Alinhamento Ético:</strong> <Badge variant={analysisResult.ethical_alignment_score > 0.75 ? 'default' : 'destructive'} className={cn(analysisResult.ethical_alignment_score > 0.75 && "bg-green-600/80")}>{(analysisResult.ethical_alignment_score * 100).toFixed(2)}%</Badge></p>
                            </CardContent>
                        </Card>
                    )}
                    {healingManual && (
                        <Card>
                            <CardHeader><CardTitle className="flex items-center gap-2 text-green-400"><Heart /> Manual de Cura Gerado</CardTitle></CardHeader>
                            <CardContent className="font-mono text-xs space-y-1">
                                <p><strong>ID do Manual:</strong> {healingManual.manual_id}</p>
                                <p><strong>Alvo:</strong> {healingManual.target_entity}</p>
                                <p><strong>Protocolos:</strong> {healingManual.protocols} protocolos recomendados</p>
                                <p><strong>Status:</strong> <Badge className="bg-green-600/80">Pronto para Aplicação</Badge></p>
                            </CardContent>
                        </Card>
                    )}
                </div>
            </div>

            <Card>
                <CardHeader><CardTitle className="flex items-center gap-2"><History /> Log de Operações de Cura</CardTitle></CardHeader>
                <CardContent>
                    <ScrollArea className="h-80">
                        <Table>
                            <TableHeader><TableRow><TableHead>Timestamp</TableHead><TableHead>Operação</TableHead><TableHead>Detalhes</TableHead><TableHead>Status</TableHead></TableRow></TableHeader>
                            <TableBody>
                                {logs.map(log => (
                                    <TableRow key={log.id}>
                                        <TableCell className="text-xs">{new Date(log.timestamp).toLocaleTimeString()}</TableCell>
                                        <TableCell><Badge variant="secondary">{log.operation}</Badge></TableCell>
                                        <TableCell className="text-xs">{log.details}</TableCell>
                                        <TableCell><Badge variant={log.status === 'SUCCESS' ? 'default' : log.status === 'FAILURE' ? 'destructive' : 'outline'} className={cn(log.status === 'SUCCESS' && "bg-green-600/80")}>{log.status}</Badge></TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </ScrollArea>
                </CardContent>
            </Card>
        </div>
    );
};

export default Module41_1;
