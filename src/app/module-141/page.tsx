
'use client';
import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Loader2, ShieldCheck, Scale, BrainCircuit, Book, CheckCircle, XCircle, Bot, Stethoscope } from 'lucide-react';
import Link from 'next/link';
import { useToast } from '@/hooks/use-toast';
import { quantumResilience } from '@/lib/quantum-resilience';
import { Input } from '@/components/ui/input';

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

export default function Module141Page() {
    const { toast } = useToast();
    const [isLoading, setIsLoading] = useState(false);
    const [auditTarget, setAuditTarget] = useState('Manifestação do Módulo 101');
    const [logs, setLogs] = useState<string[]>([]);
    const [auditResult, setAuditResult] = useState<any>(null);

    const addLog = (log: string) => setLogs(prev => [log, ...prev].slice(0, 100));

    const handleRunAudit = async () => {
        if (!auditTarget.trim()) {
            toast({ title: 'Entrada Inválida', description: 'O alvo da auditoria é necessário.', variant: 'destructive' });
            return;
        }
        setIsLoading(true);
        setLogs([]);
        setAuditResult(null);

        await quantumResilience.executeWithResilience(
            'run_ethical_audit',
            async () => {
                addLog(`Iniciando auditoria para: "${auditTarget}"...`);
                await new Promise(r => setTimeout(r, 500));
                
                addLog('Consultando M5 (Liga Quântica) para princípios éticos...');
                const m5conformity = Math.random() > 0.1;
                addLog(`Conformidade com a Liga Quântica: ${m5conformity ? 'SIM' : 'NÃO'}`);
                await new Promise(r => setTimeout(r, 600));

                addLog('Verificando com M144 (Lex Fundamentalis) a legalidade cósmica...');
                const m144conformity = Math.random() > 0.05;
                addLog(`Conformidade com a Lex Fundamentalis: ${m144conformity ? 'SIM' : 'NÃO'}`);
                await new Promise(r => setTimeout(r, 700));

                addLog('Analisando intenção com M29 (Zennith)...');
                const m29conformity = Math.random() > 0.08;
                addLog(`Alinhamento de Intenção: ${m29conformity ? 'PURO' : 'DISSONANTE'}`);
                await new Promise(r => setTimeout(r, 800));

                const overallSuccess = m5conformity && m144conformity && m29conformity;
                setAuditResult({
                    target: auditTarget,
                    isEthical: overallSuccess,
                    report: overallSuccess ? 'A operação está em total conformidade com os princípios da Fundação.' : 'Dissonância ética detectada. Recomenda-se revisão imediata.'
                });

                toast({ title: 'Auditoria Concluída', description: `Veredito para "${auditTarget}": ${overallSuccess ? 'Aprovado' : 'Reprovado'}` });
            }
        ).catch(err => {
            const error = err as Error;
            addLog(`ERRO NA AUDITORIA: ${error.message}`);
            toast({ title: 'Falha Crítica na Auditoria', description: error.message, variant: 'destructive' });
        }).finally(() => {
            setIsLoading(false);
        });
    };

    return (
        <div className="p-4 md:p-8 bg-background text-foreground min-h-screen flex flex-col items-center">
            <Card className="w-full max-w-4xl bg-card/50 purple-glow mb-12 text-center">
                <CardHeader>
                    <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
                        <ShieldCheck className="text-green-400" /> Módulo 141: Auditoria Ética Quântica
                    </CardTitle>
                    <CardDescription className="text-lg mt-2">
                        O guardião da pureza. Sistema de avaliação em tempo real que garante a conformidade ética de todas as operações e intenções da Fundação.
                    </CardDescription>
                </CardHeader>
            </Card>

            <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="flex flex-col gap-8">
                    <Card className="bg-card/50 purple-glow">
                        <CardHeader><CardTitle>Painel de Auditoria</CardTitle></CardHeader>
                        <CardContent className="space-y-4">
                             <div>
                                <label htmlFor="auditTarget" className="text-sm text-muted-foreground">Alvo da Auditoria (ID da Operação)</label>
                                <Input id="auditTarget" value={auditTarget} onChange={e => setAuditTarget(e.target.value)} placeholder="Ex: Manifestação do Módulo 101" disabled={isLoading} />
                             </div>
                             <Button onClick={handleRunAudit} disabled={isLoading} className="w-full font-bold">
                                {isLoading ? <><Loader2 className="animate-spin mr-2"/> Auditando...</> : 'Iniciar Auditoria'}
                            </Button>
                        </CardContent>
                    </Card>
                     <Card className="bg-card/50 purple-glow">
                        <CardHeader><CardTitle>Logs da Auditoria</CardTitle></CardHeader>
                        <CardContent>
                            <ScrollArea className="h-40 pr-4">
                                <div className="text-xs font-mono text-muted-foreground space-y-1">
                                    {logs.map((log, i) => <p key={i}>{log}</p>)}
                                    {logs.length === 0 && <p>Aguardando comando de auditoria...</p>}
                                </div>
                            </ScrollArea>
                        </CardContent>
                    </Card>
                </div>
                <div className="space-y-8">
                    {auditResult && (
                        <Card className="bg-card/50 purple-glow border-accent">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2 text-amber-300">
                                    {auditResult.isEthical ? <CheckCircle className="text-green-400"/> : <XCircle className="text-red-400"/>}
                                    Veredito Final para "{auditResult.target}"
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className={`text-lg font-semibold ${auditResult.isEthical ? 'text-green-300' : 'text-red-300'}`}>{auditResult.report}</p>
                            </CardContent>
                        </Card>
                    )}
                    <div className="w-full max-w-5xl">
                        <h3 className="text-xl font-semibold text-center mb-4 text-amber-300">Sinergias de Integridade</h3>
                        <div className="grid grid-cols-1 gap-4">
                            <ConnectionCard title="M9: Nexus Central" description="O M141 reporta todas as auditorias ao Nexus, garantindo transparência e alinhamento com a Família Cósmica." icon={<LinkIcon className="h-6 w-6 text-purple-400" />} href="/module-9" />
                            <ConnectionCard title="Diagnóstico Universal" description="Os resultados da auditoria alimentam o painel de diagnóstico, permitindo uma visão unificada da saúde ética e operacional." icon={<Stethoscope className="h-6 w-6 text-teal-400" />} href="/diagnostics" />
                            <ConnectionCard title="Módulo 291" description="O enxame de nanorrobôs coleta os dados em tempo real para a auditoria do M141 e executa as ações corretivas." icon={<Bot className="h-6 w-6 text-blue-400"/>} href="/module-291"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
