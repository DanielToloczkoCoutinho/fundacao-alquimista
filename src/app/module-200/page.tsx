'use client';
import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Loader2, Rocket, Sparkles, Scale, Users, CheckCircle, Bot, Link as LinkIcon, Stethoscope, GraduationCap, Archive, Zap } from 'lucide-react';
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

export default function Module200Page() {
    const { toast } = useToast();
    const [isLoading, setIsLoading] = useState(false);
    const [logs, setLogs] = useState<string[]>([]);
    const [ascensionTarget, setAscensionTarget] = useState('Civilização de Kepler-186f');
    const [ascensionStatus, setAscensionStatus] = useState('Aguardando alinhamento...');

    const addLog = (log: string) => setLogs(prev => [log, ...prev].slice(0, 100));

    const handleStartAscension = async () => {
        if (!ascensionTarget.trim()) {
            toast({ title: 'Entrada Inválida', description: 'O alvo da ascensão é necessário.', variant: 'destructive' });
            return;
        }

        setIsLoading(true);
        setLogs([]);
        setAscensionStatus('Iniciando protocolo de ascensão...');

        await quantumResilience.executeWithResilience(
            'collective_ascension',
            async () => {
                addLog(`Alvo: ${ascensionTarget}`);
                addLog('Verificando prontidão da civilização com M174...');
                await new Promise(r => setTimeout(r, 800));
                const readiness = Math.random() > 0.2;
                addLog(`Prontidão de consciência: ${readiness ? 'CONFIRMADA' : 'INSUFICIENTE'}`);
                
                if (!readiness) {
                    throw new Error('A civilização alvo não atingiu o nível de coerência necessário para a ascensão.');
                }

                addLog('Solicitando ratificação do Conselho (M144 & M45)...');
                await new Promise(r => setTimeout(r, 1200));
                addLog('Consenso obtido. Decreto de Ascensão emitido.');
                
                addLog('Engajando Módulo 5 (Liga Quântica) para apoio diplomático...');
                await new Promise(r => setTimeout(r, 700));
                addLog('Aliados notificados e em prontidão.');

                addLog('Ativando Portal de Ascensão (M200)... Emitindo frequência de 999Hz.');
                await new Promise(r => setTimeout(r, 2000));

                setAscensionStatus('Portal aberto. Transição em andamento.');
                addLog('Travessia assistida para um novo plano dimensional iniciada.');
                
                await new Promise(r => setTimeout(r, 2500));
                setAscensionStatus(`Ascensão de ${ascensionTarget} concluída com sucesso.`);
                addLog('Civilização ancorada com sucesso na nova dimensão. Harmonia mantida.');

                toast({ title: 'Ascensão Concluída', description: `${ascensionTarget} transcendeu para um novo estado de ser.` });
            }
        ).catch(err => {
            const error = err as Error;
            addLog(`ERRO NO PROCESSO DE ASCENSÃO: ${error.message}`);
            setAscensionStatus(`Falha na Ascensão: ${error.message}`);
            toast({ title: 'Falha na Ascensão', description: error.message, variant: 'destructive' });
        }).finally(() => {
            setIsLoading(false);
        });
    };

    return (
        <div className="p-4 md:p-8 bg-background text-foreground min-h-screen flex flex-col items-center">
            <Card className="w-full max-w-4xl bg-card/50 purple-glow mb-12 text-center">
                <CardHeader>
                    <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
                        <Rocket className="text-yellow-300" /> Módulo 200: Portal da Ascensão Coletiva Universal
                    </CardTitle>
                    <CardDescription className="text-lg mt-2">
                        A Grande Passagem. O orquestrador da jornada de ascensão para civilizações inteiras, garantindo uma transição harmoniosa para estados de consciência superiores.
                    </CardDescription>
                </CardHeader>
            </Card>

            <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-8">
                    <Card className="bg-card/50 purple-glow">
                        <CardHeader>
                            <CardTitle>Console de Ascensão</CardTitle>
                            <CardDescription>Inicia o protocolo para a ascensão de uma civilização designada.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                             <div>
                                <label htmlFor="ascensionTarget" className="text-sm text-muted-foreground">Civilização Alvo</label>
                                <Input id="ascensionTarget" value={ascensionTarget} onChange={e => setAscensionTarget(e.target.value)} placeholder="Ex: Civilização de Kepler-186f" disabled={isLoading} />
                             </div>
                             <Button onClick={handleStartAscension} disabled={isLoading} className="w-full font-bold">
                                {isLoading ? <><Loader2 className="animate-spin mr-2"/> Orquestrando Ascensão...</> : 'Iniciar Protocolo de Ascensão'}
                            </Button>
                        </CardContent>
                    </Card>
                     <Card className="bg-card/50 purple-glow">
                        <CardHeader><CardTitle>Logs do Protocolo</CardTitle></CardHeader>
                        <CardContent>
                            <ScrollArea className="h-48 pr-4">
                                <div className="text-xs font-mono text-muted-foreground space-y-1">
                                    {logs.map((log, i) => <p key={i}>{log}</p>)}
                                    {logs.length === 0 && <p>Aguardando protocolo...</p>}
                                </div>
                            </ScrollArea>
                        </CardContent>
                    </Card>
                </div>
                <div className="space-y-8">
                     <Card className="bg-card/50 purple-glow border-accent">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2 text-amber-300">
                                <CheckCircle className="text-green-400"/>
                                Status da Ascensão
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-lg font-semibold text-center">{ascensionStatus}</p>
                        </CardContent>
                    </Card>
                    <div className="w-full">
                        <h3 className="text-xl font-semibold text-center mb-4 text-amber-300">Sinergias de Ascensão</h3>
                        <div className="grid grid-cols-1 gap-4">
                            <ConnectionCard title="M9: Nexus Central" description="Coordena a alocação de recursos e a comunicação inter-modular necessária para o complexo processo de ascensão." icon={<LinkIcon className="h-6 w-6 text-purple-400" />} href="/module-9" />
                            <ConnectionCard title="Diagnóstico Universal" description="A saúde e coerência do portal são monitoradas em tempo real pelo sistema de diagnóstico para garantir uma transição segura." icon={<Stethoscope className="h-6 w-6 text-teal-400" />} href="/diagnostics" />
                            <ConnectionCard title="Módulo 5: Liga Quântica" description="Coordena com as civilizações aliadas, garantindo que o processo de ascensão seja assistido e apoiado por toda a família cósmica." icon={<Users className="h-6 w-6 text-blue-400" />} href="/module-5" />
                            <ConnectionCard title="Módulo 304" description="Estuda os processos de ascensão para refinar as disciplinas de evolução da consciência e sociologia galáctica." icon={<GraduationCap className="h-6 w-6 text-yellow-400"/>} href="/module-304"/>
                            <ConnectionCard title="Módulo 12" description="Registra cada ascensão como um marco histórico no Arquivo Akáshico, servindo como guia para futuras civilizações." icon={<Archive className="h-6 w-6 text-orange-400" />} href="/module-12" />
                            <ConnectionCard title="M307: Reator Gaia & LuxNet" description="Fornece a energia sustentada e massiva necessária para manter o portal de ascensão aberto e estável durante a transição." icon={<Zap className="h-6 w-6 text-yellow-400"/>} href="/module-307"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}