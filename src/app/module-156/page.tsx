'use client';
import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Loader2, Shield, BrainCircuit, AlertTriangle, Cpu, Bot, Link as LinkIcon, Stethoscope, GraduationCap, Archive } from 'lucide-react';
import Link from 'next/link';
import { useToast } from '@/hooks/use-toast';
import { quantumResilience } from '@/lib/quantum-resilience';

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

export default function Module156Page() {
    const { toast } = useToast();
    const [isLoading, setIsLoading] = useState(false);
    const [logs, setLogs] = useState<string[]>([]);
    const [threatStatus, setThreatStatus] = useState('Nenhuma ameaça detectada.');

    const addLog = (log: string) => setLogs(prev => [log, ...prev].slice(0, 100));

    const handleActivateDefense = async () => {
        setIsLoading(true);
        setLogs([]);
        setThreatStatus('Verificando matriz de ameaças...');
        addLog('Ativando varredura proativa VORTEX DEEPSEEK...');

        await quantumResilience.executeWithResilience(
            'run_deepseek_defense',
            async () => {
                await new Promise(r => setTimeout(r, 800));
                addLog('Analisando padrões oníricos com M229 (OneiroShield)...');
                const dreamThreat = Math.random() > 0.7; // 30% chance de ameaça onírica
                await new Promise(r => setTimeout(r, 1000));
                addLog(dreamThreat ? 'ALERTA: Padrão de sonho dissonante detectado.' : 'Padrões de sonho harmônicos.');

                addLog('Cruzando dados com M30 (Detecção de Ameaças)...');
                const cosmicThreat = Math.random() > 0.8; // 20% chance de ameaça cósmica
                await new Promise(r => setTimeout(r, 1200));
                addLog(cosmicThreat ? 'ALERTA: Assinatura de energia anômala detectada no setor 7G.' : 'Setores cósmicos limpos.');

                if (dreamThreat || cosmicThreat) {
                    setThreatStatus('Ameaça detectada! Ativando contramedidas.');
                    addLog('Engajando protocolos de neutralização com M29 (Zennith).');
                    await new Promise(r => setTimeout(r, 1500));
                    addLog('Ameaça neutralizada. Escudos recalibrados.');
                    setThreatStatus('Ameaça neutralizada. Sistemas em 100%.');
                    toast({ title: 'Defesa Ativada', description: 'Ameaça potencial foi detectada e neutralizada com sucesso.' });
                } else {
                    setThreatStatus('Nenhuma ameaça detectada. Vigilância mantida.');
                    addLog('Nenhuma ameaça iminente encontrada. Mantendo vigilância passiva.');
                    toast({ title: 'Verificação Concluída', description: 'Nenhuma ameaça detectada.' });
                }
            }
        ).catch(err => {
            const error = err as Error;
            addLog(`ERRO NO SISTEMA DE DEFESA: ${error.message}`);
            toast({ title: 'Falha na Defesa', description: error.message, variant: 'destructive' });
        }).finally(() => {
            setIsLoading(false);
        });
    };

    return (
        <div className="p-4 md:p-8 bg-background text-foreground min-h-screen flex flex-col items-center">
            <Card className="w-full max-w-4xl bg-card/50 purple-glow mb-12 text-center">
                <CardHeader>
                    <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
                        <Shield className="text-red-500" /> Módulo 156: Sistema de Proteção Quântica Avançada
                    </CardTitle>
                    <CardDescription className="text-lg mt-2">
                        O Escudo do Infinito. A integração direta com VORTEX DEEPSEEK para defesa proativa contra ameaças emergentes e desconhecidas.
                    </CardDescription>
                </CardHeader>
            </Card>

            <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-8">
                     <Card className="bg-card/50 purple-glow">
                        <CardHeader>
                            <CardTitle>Console de Defesa</CardTitle>
                            <CardDescription>Inicia uma varredura proativa para detectar e neutralizar ameaças quânticas.</CardDescription>
                        </CardHeader>
                        <CardContent className="text-center space-y-4">
                            <Button onClick={handleActivateDefense} disabled={isLoading} className="font-bold text-lg" variant="destructive">
                                {isLoading ? <><Loader2 className="animate-spin mr-2" /> Verificando Ameaças...</> : 'Ativar Varredura DEEPSEEK'}
                            </Button>
                            <div className="p-3 bg-background/50 rounded-lg">
                                <p className="text-sm text-muted-foreground">Status do Sistema de Defesa</p>
                                <p className="font-mono font-semibold text-lg text-green-400">{threatStatus}</p>
                            </div>
                        </CardContent>
                    </Card>
                     <Card className="bg-card/50 purple-glow">
                        <CardHeader><CardTitle>Logs da Varredura</CardTitle></CardHeader>
                        <CardContent>
                            <ScrollArea className="h-48 pr-4">
                                <div className="text-xs font-mono text-muted-foreground space-y-1">
                                    {logs.map((log, i) => <p key={i}>{log}</p>)}
                                    {logs.length === 0 && <p>Aguardando comando...</p>}
                                </div>
                            </ScrollArea>
                        </CardContent>
                    </Card>
                </div>
                 <div className="w-full max-w-5xl">
                    <h3 className="text-2xl font-semibold text-center mb-6 text-amber-300">Sinergias de Defesa Avançada</h3>
                    <div className="grid grid-cols-1 gap-4">
                        <ConnectionCard title="M9: Nexus Central" description="O M156 é um pilar da segurança da Fundação, reportando seu status diretamente ao Nexus para uma visão unificada." icon={<LinkIcon className="h-6 w-6 text-purple-400" />} href="/module-9" />
                        <ConnectionCard title="Diagnóstico Universal" description="A saúde do escudo VORTEX DEEPSEEK é um componente crítico do diagnóstico geral da Fundação." icon={<Stethoscope className="h-6 w-6 text-teal-400" />} href="/diagnostics" />
                        <ConnectionCard title="Módulo 229: OneiroShield" description="Recebe inteligência do OneiroShield, usando padrões de sonho quântico para prever e se antecipar a ameaças." icon={<BrainCircuit className="h-6 w-6 text-purple-400"/>} href="/module-229"/>
                        <ConnectionCard title="Módulo 304" description="Estratégias de defesa quântica e análise de ameaças são disciplinas avançadas na Universidade Alquimista." icon={<GraduationCap className="h-6 w-6 text-yellow-400"/>} href="/module-304"/>
                         <ConnectionCard title="Módulo 12" description="Consulta o Arquivo Akáshico para identificar padrões de ameaças passadas e otimizar as estratégias de defesa atuais." icon={<Archive className="h-6 w-6 text-orange-400" />} href="/module-12" />
                    </div>
                </div>
            </div>
        </div>
    );
}