'use client';
import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Loader2, Shield, BrainCircuit, BookOpen, AlertTriangle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { quantumResilience } from '@/lib/quantum-resilience';
import Link from 'next/link';

const ConnectionCard = ({ title, description, icon, href }: { title: string, description: string, icon: React.ReactNode, href: string }) => (
    <Card className="bg-card/70 purple-glow backdrop-blur-sm hover:border-accent transition-colors h-full">
      <Link href={href} passHref>
        <CardHeader>
            <div className="flex items-center gap-3">
                {icon}
                <CardTitle className="gradient-text">{title}</CardTitle>
            </div>
        </CardHeader>
        <CardContent>
            <p className="text-muted-foreground">{description}</p>
        </CardContent>
      </Link>
    </Card>
);

const mockDreamAnalysis = async (symbols: string) => {
    await new Promise(resolve => setTimeout(resolve, 2500));
    if (symbols.toLowerCase().includes('sombra')) {
        return { threatLevel: 8, identifiedThreat: 'Incursão Psíquica Nível 3', recommendation: 'Reforçar escudos de M156 e M1 e iniciar contramedida vibracional (741Hz).' };
    }
    return { threatLevel: 2, identifiedThreat: 'Nenhuma ameaça direta', recommendation: 'Monitorar padrões de sonho para evolução da consciência coletiva.' };
};

export default function OneiroShieldPage() {
    const { toast } = useToast();
    const [isLoading, setIsLoading] = useState(false);
    const [logs, setLogs] = useState<string[]>([]);
    const [analysisResult, setAnalysisResult] = useState<any>(null);

    const addLog = (log: string) => setLogs(prev => [log, ...prev].slice(0, 100));

    const handleAnalysis = async () => {
        setIsLoading(true);
        setAnalysisResult(null);
        setLogs([]);
        addLog('Iniciando varredura quântica de sonhos...');

        await quantumResilience.executeWithResilience(
            'analyze_quantum_dreams',
            async () => {
                addLog('Acessando Registros Akáshicos (M12) para padrões recentes...');
                await new Promise(r => setTimeout(r, 800));
                
                addLog('Coletando símbolos dominantes da última noite...');
                const dreamSymbols = "Sombra, Espiral, Olho que tudo vê";
                addLog(`Símbolos encontrados: ${dreamSymbols}`);
                
                addLog('Analisando símbolos com a Liga Quântica (M5)...');
                const analysis = await mockDreamAnalysis(dreamSymbols);
                
                setAnalysisResult(analysis);
                addLog('Análise concluída.');
                toast({ title: 'Análise de Sonhos Concluída', description: `Ameaça identificada: ${analysis.identifiedThreat}` });
            }
        ).catch(err => {
            const error = err as Error;
            addLog(`ERRO: ${error.message}`);
            toast({ title: 'Falha na Análise', description: error.message, variant: 'destructive' });
        }).finally(() => {
            setIsLoading(false);
        });
    };

    return (
        <div className="p-4 md:p-8 bg-background text-foreground min-h-screen flex flex-col items-center">
            <Card className="w-full max-w-6xl bg-card/50 purple-glow mb-8 text-center">
                <CardHeader>
                    <CardTitle className="text-3xl gradient-text flex items-center justify-center gap-3">
                        <Shield className="text-cyan-400" /> Módulo 229: OneiroShield
                    </CardTitle>
                    <CardDescription>
                        Análise de sonhos quânticos para ajuste dinâmico de ameaças, integrando a intuição do sono ao sistema de defesa da Fundação.
                    </CardDescription>
                </CardHeader>
            </Card>

            <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="flex flex-col gap-8">
                    <Card className="bg-card/50 purple-glow">
                        <CardHeader>
                            <CardTitle>Console de Análise Onírica</CardTitle>
                            <CardDescription>Inicia uma varredura dos registros de sonhos coletivos para identificar potenciais ameaças ou insights.</CardDescription>
                        </CardHeader>
                        <CardContent className="text-center">
                            <Button onClick={handleAnalysis} disabled={isLoading} className="font-bold text-lg">
                                {isLoading ? <><Loader2 className="mr-2 animate-spin" /> Analisando Sonhos...</> : 'Analisar Padrões de Sonho'}
                            </Button>
                        </CardContent>
                    </Card>
                     <Card className="bg-card/50 purple-glow">
                        <CardHeader>
                            <CardTitle>Logs da Análise</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ScrollArea className="h-60 pr-4">
                                <div className="text-xs font-mono text-muted-foreground space-y-1">
                                    {logs.map((log, i) => <p key={i}>{log}</p>)}
                                    {logs.length === 0 && <p>Aguardando análise...</p>}
                                </div>
                            </ScrollArea>
                        </CardContent>
                    </Card>
                </div>
                 <div className="flex flex-col gap-8">
                    <Card className="bg-card/50 purple-glow">
                        <CardHeader>
                            <CardTitle>Relatório da Inteligência Onírica</CardTitle>
                        </CardHeader>
                        <CardContent>
                            {isLoading && !analysisResult && (
                                <div className="flex justify-center items-center h-full">
                                    <Loader2 className="h-10 w-10 text-amber-400 animate-spin" />
                                </div>
                            )}
                            {analysisResult ? (
                                <div className="space-y-3">
                                    <div>
                                        <p className="font-semibold text-amber-300">Ameaça Identificada:</p>
                                        <p>{analysisResult.identifiedThreat}</p>
                                    </div>
                                    <div>
                                        <p className="font-semibold text-amber-300">Nível de Ameaça:</p>
                                        <p className={analysisResult.threatLevel > 5 ? 'text-red-400 font-bold' : 'text-green-400'}>{analysisResult.threatLevel}/10</p>
                                    </div>
                                     <div>
                                        <p className="font-semibold text-amber-300">Recomendação:</p>
                                        <p>{analysisResult.recommendation}</p>
                                    </div>
                                </div>
                            ) : (
                                !isLoading && <p className="text-muted-foreground text-center pt-10">Aguardando análise...</p>
                            )}
                        </CardContent>
                    </Card>
                    <div className="w-full">
                        <h3 className="text-xl font-semibold text-center mb-4 text-amber-300">Sinergias de Defesa Psíquica</h3>
                        <div className="grid grid-cols-1 gap-4">
                           <ConnectionCard title="Módulo 156: Proteção Avançada" description="O OneiroShield é a primeira linha de defesa, fornecendo inteligência para que o M156 possa agir proativamente." icon={<Shield className="h-6 w-6 text-red-400"/>} href="/module-156"/>
                           <ConnectionCard title="Módulo 12: Arquivo Akáshico" description="Consulta o Arquivo Akáshico para correlacionar símbolos oníricos com eventos históricos e prever intenções." icon={<BookOpen className="h-6 w-6 text-yellow-300"/>} href="/module-12"/>
                           <ConnectionCard title="Módulo 30: Detecção de Ameaças" description="Valida as ameaças intuitivas do OneiroShield com dados de sensores quânticos, confirmando e classificando os alertas." icon={<AlertTriangle className="h-6 w-6 text-orange-400"/>} href="/module-30"/>
                        </div>
                    </div>
                 </div>
            </div>
        </div>
    );
}
