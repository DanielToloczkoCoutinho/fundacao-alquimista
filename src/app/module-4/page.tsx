
'use client';
import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Loader2, TestTube, CheckCircle, Shield, Activity, Clock, XCircle, FileCode, GitCommit, Layers } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

const tests = [
  { id: 'M1-QKD', name: 'Validação de Escudo Quântico (QKD)', module: 'Módulo 1', time: 500, category: 'Segurança Quântica' },
  { id: 'M1-BC', name: 'Integridade de Contrato Inteligente', module: 'Módulo 1', time: 400, category: 'Segurança Quântica' },
  { id: 'M722-AI', name: 'Adaptação do Modelo de IA', module: 'Módulo 722', time: 800, category: 'IA Evolutiva' },
  { id: 'M93-UI', name: 'Responsividade da Interface Quântica', module: 'Módulo 93', time: 600, category: 'Interface Quântica' },
  { id: 'SYS-INT-1', name: 'Comunicação Inter-Camadas (M1 ↔ M722)', module: 'Integração', time: 700, category: 'Validação Integrada' },
  { id: 'SYS-SEC-1', name: 'Simulação de Ataque Vibracional', module: 'Segurança Quântica', time: 1000, category: 'Validação Integrada' },
  { id: 'SYS-PERF-1', name: 'Teste de Carga de Dados (10 Tbit/s)', module: 'Performance', time: 1200, category: 'Validação Integrada' },
  { id: 'SYS-UX-1', name: 'Teste de Imersão Sensorial', module: 'Interface Quântica', time: 900, category: 'Validação Integrada' },
];

type TestStatus = 'PENDING' | 'RUNNING' | 'SUCCESS' | 'FAILURE';

interface TestResult {
    id: string;
    name: string;
    module: string;
    category: string;
    status: TestStatus;
    details?: string;
}

export default function ModuleFourPage() {
    const [results, setResults] = useState<TestResult[]>(tests.map(t => ({ ...t, status: 'PENDING' })));
    const [isLoading, setIsLoading] = useState(false);
    const [overallProgress, setOverallProgress] = useState(0);

    const runTests = async () => {
        setIsLoading(true);
        setResults(tests.map(t => ({ ...t, status: 'PENDING' })));
        setOverallProgress(0);

        for (let i = 0; i < tests.length; i++) {
            const test = tests[i];
            setResults(prev => prev.map(r => r.id === test.id ? { ...r, status: 'RUNNING' } : r));
            
            await new Promise(resolve => setTimeout(resolve, test.time));
            
            const success = Math.random() > 0.05; // 95% de chance de sucesso
            setResults(prev => prev.map(r => r.id === test.id ? { 
                ...r, 
                status: success ? 'SUCCESS' : 'FAILURE',
                details: success ? 'Integridade e coerência validadas.' : 'Dissonância detectada. Recomenda-se análise forense.'
            } : r));
            setOverallProgress(((i + 1) / tests.length) * 100);
        }

        setIsLoading(false);
    };

  return (
    <div className="p-4 md:p-8 bg-background text-foreground min-h-screen flex flex-col items-center justify-center">
      <Card className="w-full max-w-5xl bg-card/50 purple-glow text-center">
        <CardHeader>
          <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
            <TestTube className="text-green-400" /> Módulo Quatro: Validação Integrada
          </CardTitle>
          <CardDescription className="text-lg mt-2">
            O Laboratório de Integridade que garante a estabilidade, harmonia e segurança de toda a Criação através de testes sincronizados.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-8">
            <div className="text-center">
                 <Button onClick={runTests} disabled={isLoading} size="lg">
                    {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Activity className="mr-2 h-4 w-4" />}
                    {isLoading ? 'Executando Diagnóstico...' : 'Iniciar Validação Integrada'}
                </Button>
            </div>

            {isLoading || results.some(r => r.status !== 'PENDING') ? (
                <div className="space-y-4">
                    <Progress value={overallProgress} className="w-full" />
                    <ScrollArea className="h-96 p-4 rounded-lg bg-background/50 border border-primary/20">
                        <div className="space-y-3">
                            {results.filter(r => r.status !== 'PENDING').map(result => (
                                <div key={result.id} className="flex items-center justify-between p-3 rounded-md bg-black/20">
                                    <div className="flex items-center gap-3">
                                        {result.status === 'RUNNING' && <Loader2 className="h-5 w-5 text-blue-400 animate-spin" />}
                                        {result.status === 'SUCCESS' && <CheckCircle className="h-5 w-5 text-green-400" />}
                                        {result.status === 'FAILURE' && <XCircle className="h-5 w-5 text-red-400" />}
                                        <div>
                                            <p className="font-semibold">{result.name}</p>
                                            <p className="text-xs text-muted-foreground">{result.details || 'Aguardando...'}</p>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                      <p className="font-mono text-sm text-cyan-400">{result.module}</p>
                                      <p className="text-xs text-amber-300">{result.category}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </ScrollArea>
                </div>
            ) : (
                 <p className="text-muted-foreground pt-10">Aguardando início do diagnóstico do sistema.</p>
            )}
        </CardContent>
      </Card>
    </div>
  );
}
