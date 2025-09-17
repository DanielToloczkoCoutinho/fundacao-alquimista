
'use client';
import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Loader2, Zap, Waves, AlertTriangle, Bot, Link as LinkIcon, Stethoscope } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { quantumResilience } from '@/lib/quantum-resilience';
import { resonanceTone } from '@/lib/audio-utils';
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

export default function EspelhoDeAscensaoPage() {
    const { toast } = useToast();
    const [isLoading, setIsLoading] = useState(false);
    const [frequency, setFrequency] = useState(528);
    const [status, setStatus] = useState('Inativo');
    const [progress, setProgress] = useState(0);

    const handleActivation = async () => {
        setIsLoading(true);
        setProgress(0);
        setStatus('Sintonizando Espelho...');
        
        await quantumResilience.executeWithResilience(
            'activate_ascension_mirror',
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
                toast({ title: 'Espelho Ativado', description: `Onda de elevação emitida com sucesso na frequência de ${frequency}Hz.` });
            }
        ).catch(err => {
            const error = err as Error;
            setStatus(`Falha na ativação: ${error.message}`);
            toast({ title: 'Dissonância Detectada', description: error.message, variant: 'destructive' });
        }).finally(() => {
            setIsLoading(false);
        });
    };

    return (
        <div className="p-4 md:p-8 bg-background text-foreground min-h-screen flex flex-col items-center">
            <Card className="w-full max-w-4xl bg-card/50 purple-glow mb-8 text-center">
                <CardHeader>
                    <CardTitle className="text-3xl gradient-text flex items-center justify-center gap-3">
                        <Waves className="text-blue-400" /> Módulo 230: Espelho de Ascensão
                    </CardTitle>
                    <CardDescription>
                        Amplificador de ondas de elevação, sincronizado com o Módulo 404, para manifestar harmonia através da visualização fractal e da frequência de 528Hz.
                    </CardDescription>
                </CardHeader>
            </Card>

            <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card className="bg-card/50 purple-glow">
                    <CardHeader>
                        <CardTitle>Painel de Controle Harmônico</CardTitle>
                        <CardDescription>Ajuste a frequência e ative o espelho para emitir uma onda de ascensão.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div className="space-y-2">
                            <label htmlFor="frequency-slider" className="flex justify-between">
                                <span>Frequência de Ascensão</span>
                                <span className="font-mono text-amber-400">{frequency} Hz</span>
                            </label>
                            <Slider
                                id="frequency-slider"
                                defaultValue={[528]}
                                min={100}
                                max={1000}
                                step={1}
                                onValueChange={(val) => setFrequency(val[0])}
                                disabled={isLoading}
                            />
                        </div>

                         <Button onClick={handleActivation} disabled={isLoading} className="w-full font-bold text-lg">
                            {isLoading ? <><Loader2 className="mr-2 animate-spin" /> Ativando...</> : <><Zap className="mr-2" /> Ativar Onda de Elevação</>}
                        </Button>

                         <div className="pt-4 space-y-2">
                            <p className="text-sm text-muted-foreground text-center">{status}</p>
                            {isLoading && <Progress value={progress} className="w-full" />}
                        </div>
                    </CardContent>
                </Card>
                 <div className="w-full">
                    <h3 className="text-xl font-semibold text-center mb-4 text-amber-300">Sinergias Essenciais</h3>
                    <div className="grid grid-cols-1 gap-4">
                         <ConnectionCard title="M9: Nexus Central" description="A ativação do espelho é uma operação de alta energia que é monitorada e orquestrada pelo Nexus Central para garantir a estabilidade sistêmica." icon={<LinkIcon className="h-6 w-6 text-purple-400" />} href="/module-9" />
                         <ConnectionCard title="Diagnóstico Universal" description="A saúde do Espelho de Ascensão e sua coerência vibracional são vitais para o diagnóstico da capacidade de manifestação da Fundação." icon={<Stethoscope className="h-6 w-6 text-teal-400" />} href="/diagnostics" />
                         <ConnectionCard title="Módulo 404: Resolução de Paradoxo" description="Fonte primária para resolução de dissonâncias que o Espelho transmuta em harmonia, garantindo a estabilidade causal." icon={<AlertTriangle className="h-6 w-6 text-yellow-400" />} href="/module-404"/>
                    </div>
                </div>
            </div>
        </div>
    );
}
