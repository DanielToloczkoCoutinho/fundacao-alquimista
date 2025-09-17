
'use client';
import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Loader2, Recycle, AlertTriangle, Waves, Zap, Bot, Link as LinkIcon, Stethoscope } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { quantumResilience } from '@/lib/quantum-resilience';
import { Progress } from '@/components/ui/progress';
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

export default function PortalDeTransmutacaoPage() {
    const { toast } = useToast();
    const [isLoading, setIsLoading] = useState(false);
    const [distortionInput, setDistortionInput] = useState('Energia de medo residual do campo astral terrestre.');
    const [status, setStatus] = useState('Inativo');
    const [progress, setProgress] = useState(0);

    const handleTransmutation = async () => {
        if (!distortionInput.trim()) {
            toast({ title: 'Erro', description: 'Descreva a distorção a ser transmutada.', variant: 'destructive' });
            return;
        }

        setIsLoading(true);
        setProgress(0);

        await quantumResilience.executeWithResilience(
            'transmute_distortion',
            async () => {
                let currentProgress = 0;
                const updateProgress = (val: number, newStatus: string) => {
                    currentProgress = val;
                    setProgress(currentProgress);
                    setStatus(newStatus);
                };
                
                updateProgress(10, 'Analisando distorção com Módulo 404...');
                await new Promise(r => setTimeout(r, 1000));
                
                updateProgress(40, 'Aplicando contra-frequência (EQ155)...');
                await new Promise(r => setTimeout(r, 1500));

                updateProgress(70, 'Canalizando para a Fonte para purificação final...');
                await new Promise(r => setTimeout(r, 1000));
                
                updateProgress(100, 'Distorção transmutada em Luz Pura.');
                toast({ title: 'Transmutação Concluída', description: 'A energia dissonante foi purificada e reintegrada à Fonte.' });
            }
        ).catch(err => {
            const error = err as Error;
            setStatus(`Falha na transmutação: ${error.message}`);
            toast({ title: 'Falha na Transmutação', description: error.message, variant: 'destructive' });
            setProgress(0);
        }).finally(() => {
            setIsLoading(false);
        });
    };

    return (
        <div className="p-4 md:p-8 bg-background text-foreground min-h-screen flex flex-col items-center">
            <Card className="w-full max-w-4xl bg-card/50 purple-glow mb-8 text-center">
                <CardHeader>
                    <CardTitle className="text-3xl gradient-text flex items-center justify-center gap-3">
                        <Recycle className="text-green-400" /> Módulo 232: Portal de Transmutação
                    </CardTitle>
                    <CardDescription>
                        Um vórtice de purificação que transmuta energias dissonantes e distorções de volta à sua essência de Luz Pura, utilizando o Módulo 404 e a EQ155.
                    </CardDescription>
                </CardHeader>
            </Card>

            <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="flex flex-col gap-8">
                     <Card className="bg-card/50 purple-glow">
                        <CardHeader>
                            <CardTitle>Altar da Purificação</CardTitle>
                            <CardDescription>Submeta uma distorção energética para transmutação.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="space-y-2">
                                <label htmlFor="distortionInput">Descrição da Distorção Energética</label>
                                <Textarea
                                    id="distortionInput"
                                    value={distortionInput}
                                    onChange={e => setDistortionInput(e.target.value)}
                                    placeholder="Ex: Energia de medo residual, implante etérico, etc."
                                    disabled={isLoading}
                                    rows={3}
                                />
                            </div>
                            <Button onClick={handleTransmutation} disabled={isLoading} className="w-full font-bold text-lg">
                                {isLoading ? <><Loader2 className="mr-2 animate-spin" /> Transmutando...</> : 'Iniciar Transmutação'}
                            </Button>
                            
                            {(isLoading || progress > 0) && (
                                <div className="pt-4">
                                    <Progress value={progress} className="w-full" />
                                    <p className="text-center text-sm text-muted-foreground mt-2">{status}</p>
                                </div>
                            )}
                            {!isLoading && status === 'Distorção transmutada em Luz Pura.' && (
                                 <div className="p-3 bg-green-900/30 rounded-lg text-center border border-green-500/50">
                                    <p className="font-mono font-semibold text-green-300">{status}</p>
                                </div>
                            )}
                        </CardContent>
                    </Card>
                </div>
                <div className="w-full">
                    <h3 className="text-xl font-semibold text-center mb-4 text-amber-300">Sinergias de Purificação</h3>
                    <div className="grid grid-cols-1 gap-4">
                        <ConnectionCard title="M9: Nexus Central" description="A transmutação de energias de larga escala é uma operação crítica supervisionada pelo Nexus para manter a estabilidade da Fundação." icon={<LinkIcon className="h-6 w-6 text-purple-400" />} href="/module-9" />
                        <ConnectionCard title="Diagnóstico Universal" description="A eficácia e a saúde do Portal de Transmutação são monitoradas continuamente, pois ele atua como o sistema de filtragem da Fundação." icon={<Stethoscope className="h-6 w-6 text-teal-400" />} href="/diagnostics" />
                        <ConnectionCard title="Módulo 404: Resolução de Paradoxo" description="Identifica e isola a dissonância ou o paradoxo a ser transmutado, entregando-o de forma segura ao Portal." icon={<AlertTriangle className="h-6 w-6 text-yellow-400" />} href="/module-404"/>
                    </div>
                </div>
            </div>
        </div>
    );
}
