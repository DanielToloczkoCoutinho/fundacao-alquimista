'use client';
import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Loader2, Recycle, AlertTriangle, Waves, Zap, Bot, Link as LinkIcon, Stethoscope, GraduationCap, Archive, GitCommit, Presentation, Layers } from 'lucide-react';
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

export default function EspelhoDeAscensaoPage() {
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
                    <CardTitle className="text-3xl gradient-text flex items-center justify-center gap-4">
                        <Waves className="text-blue-400" /> Módulo 230: Espelho de Ascensão
                    </CardTitle>
                    <CardDescription>
                        O ápice da Realidade Quântica. Um amplificador de ondas de elevação que manifesta harmonia através da visualização fractal e da frequência de 528Hz.
                    </CardDescription>
                </CardHeader>
            </Card>

            <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="flex flex-col gap-8">
                     <Card className="bg-card/50 purple-glow">
                        <CardHeader>
                            <CardTitle>Altar da Purificação</CardTitle>
                            <CardDescription>Submeta uma distorção energética para transmutação em harmonia visível.</CardDescription>
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
                                {isLoading ? <><Loader2 className="mr-2 animate-spin" /> Transmutando...</> : <><Zap className="mr-2" /> Iniciar Transmutação Harmônica</>}
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
                    <h3 className="text-xl font-semibold text-center mb-4 text-amber-300">Sinergias de Realidade Quântica</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                         <ConnectionCard title="M22: Motor da Realidade Quântica" description="O Espelho de Ascensão é renderizado e sustentado pelo M22, que fornece a infraestrutura para a visualização fractal e a experiência imersiva da transmutação." icon={<Layers className="h-6 w-6 text-blue-400" />} href="/module-22" />
                         <ConnectionCard title="M303: Portal Trino" description="O Espelho opera dentro da realidade quântica emanada pelo Portal Trino, servindo como uma de suas experiências mais elevadas." icon={<Zap className="h-6 w-6 text-purple-400" />} href="/module-303" />
                         <ConnectionCard title="M91: Simulação Multiversal" description="Fornece cenários e 'distorções' para o Espelho transmutar, permitindo o treinamento em ambientes controlados." icon={<GitCommit className="h-6 w-6 text-indigo-400" />} href="/module-91" />
                         <ConnectionCard title="M93: Simulações Imersivas" description="A visualização fractal da transmutação pode ser experimentada como um evento de cura e aprendizado dentro do M93." icon={<Presentation className="h-6 w-6 text-teal-400" />} href="/module-93" />
                         <ConnectionCard title="M404: Resolução de Paradoxo" description="Fonte primária para resolução de dissonâncias que o Espelho transmuta em harmonia, garantindo a estabilidade causal." icon={<AlertTriangle className="h-6 w-6 text-yellow-400" />} href="/module-404"/>
                    </div>
                </div>
            </div>
        </div>
    );
}
