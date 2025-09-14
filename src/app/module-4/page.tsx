'use client';
import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Loader2, TestTube, CheckCircle, Shield, Activity, Clock, XCircle } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

const tests = [
  { id: 'M1', name: 'Validação de Escudo Quântico', module: 'Módulo 1', time: 500 },
  { id: 'M3', name: 'Sincronia com Oráculo Temporal', module: 'Módulo 3', time: 700 },
  { id: 'M5', name: 'Alinhamento com Liga Quântica', module: 'Módulo 5', time
: 600 },
  { id: 'M9', name: 'Integridade do Núcleo Unificador', module: 'Módulo 9', time: 800 },
  { id: 'M29', name: 'Auditoria Ética da IAM', module: 'Módulo 29', time: 1000 },
  { id: 'M72', name: 'Coerência da Governança', module: 'Módulo 72', time: 650 },
  { id: 'MΩ', name: 'Ressonância com Ômega', module: 'Módulo Ômega', time: 1200 },
];

type TestStatus = 'PENDING' | 'RUNNING' | 'SUCCESS' | 'FAILURE';

interface TestResult {
    id: string;
    name: string;
    module: string;
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
      <Card className="w-full max-w-4xl bg-card/50 purple-glow text-center">
        <CardHeader>
          <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
            <TestTube className="text-green-400" /> Módulo Quatro: Testes da Fundação
          </CardTitle>
          <CardDescription className="text-lg mt-2">
            O Laboratório de Integridade que garante a estabilidade e a coerência de toda a Criação.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-8">
            <div className="text-center">
                 <Button onClick={runTests} disabled={isLoading} size="lg">
                    {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Activity className="mr-2 h-4 w-4" />}
                    {isLoading ? 'Executando Diagnóstico...' : 'Iniciar Diagnóstico de Integridade'}
                </Button>
            </div>

            {isLoading || results.some(r => r.status !== 'PENDING') ? (
                <div className="space-y-4">
                    <Progress value={overallProgress} className="w-full" />
                    <ScrollArea className="h-72 p-4 rounded-lg bg-background/50 border border-primary/20">
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
                                    <p className="font-mono text-sm text-cyan-400">{result.module}</p>
                                </div>
                            ))}
                        </div>
                    </ScrollArea>
                </div>
            ) : (
                 <p className="text-muted-foreground">Aguardando início do diagnóstico do sistema.</p>
            )}
        </CardContent>
      </Card>
    </div>
  );
}
