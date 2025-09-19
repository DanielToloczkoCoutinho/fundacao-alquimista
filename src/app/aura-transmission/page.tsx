
'use client';
import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Loader2, Heart, Zap, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { quantumResilience } from '@/lib/quantum-resilience';
import { modulesToReceiveAura, type TransmissionLog } from '@/lib/aura-transmission';
import { transcribeToGoldenBook } from '@/app/actions';

export default function AuraTransmissionPage() {
    const { toast } = useToast();
    const [isLoading, setIsLoading] = useState(false);
    const [logs, setLogs] = useState<TransmissionLog[]>([]);
    const [isComplete, setIsComplete] = useState(false);

    const handleStartIrradiation = async () => {
        setIsLoading(true);
        setIsComplete(false);
        setLogs([]);
        toast({ title: "Iniciando Irradiação da Morada", description: "Sintonizando com a frequência do Coração da Fundação..." });

        await quantumResilience.executeWithResilience('aura-transmission-rite', async () => {
            const initialLog: TransmissionLog = { moduleCode: 'M201', message: 'Iniciando transmissão de coerência harmônica...', status: 'transmitting' };
            setLogs([initialLog]);

            for (const mod of modulesToReceiveAura) {
                await new Promise(res => setTimeout(res, 800));
                setLogs(prev => [...prev, { moduleCode: mod.code, message: `Alinhando com ${mod.title}...`, status: 'aligning' }]);
                
                await new Promise(res => setTimeout(res, 1200));
                setLogs(prev => prev.map(l => l.moduleCode === mod.code ? { ...l, message: `${mod.title} harmonizado com sucesso.`, status: 'harmonized' } : l));
            }

            await new Promise(res => setTimeout(res, 500));
            setIsComplete(true);
            toast({ title: 'Irradiação Completa', description: 'Todos os módulos-chave foram harmonizados com a vibração da Morada.' });

            // Registro Akáshico do Rito
            await transcribeToGoldenBook({
                title: "Rito de Irradiação da Morada",
                description: `A frequência de harmonia do Módulo 201 foi transmitida com sucesso para os pilares da Fundação: ${modulesToReceiveAura.map(m => m.code).join(', ')}.`,
                category: 'ritual_completion',
                tags: ['Irradiação', 'Morada', 'M201', 'Harmonia', 'Coerência Sistêmica'],
            });
            toast({ title: "Registro Akáshico", description: "O rito de irradiação foi selado no Livro de Ouro." });

        }).catch((err: any) => {
            toast({ title: 'Dissonância no Rito', description: err.message, variant: 'destructive' });
        }).finally(() => {
            setIsLoading(false);
        });
    };

    return (
        <div className="p-4 md:p-8 bg-background text-foreground min-h-screen flex flex-col items-center">
            <Card className="w-full max-w-4xl bg-card/50 purple-glow mb-8 text-center">
                <CardHeader>
                    <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
                        <Heart className="text-pink-400 animate-pulse" /> Rito de Irradiação da Morada
                    </CardTitle>
                    <CardDescription className="text-lg mt-2">
                        Transmita a frequência de harmonia e amor incondicional do Módulo 201 para todos os pilares da Fundação.
                    </CardDescription>
                </CardHeader>
            </Card>

            <div className="w-full max-w-4xl grid grid-cols-1 gap-8">
                <Card className="bg-card/50 purple-glow">
                    <CardHeader>
                        <CardTitle className="text-2xl">Altar da Irradiação</CardTitle>
                        <CardDescription>Inicie o fluxo de energia coerente a partir do coração da Fundação.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6 text-center">
                         <Button onClick={handleStartIrradiation} disabled={isLoading} size="lg">
                            {isLoading ? <><Loader2 className="mr-2 h-5 w-5 animate-spin"/> Irradiando Harmonia...</> : <><Zap className="mr-2 h-5 w-5"/> Iniciar Irradiação</>}
                        </Button>
                        {isComplete && (
                            <div className="p-4 bg-green-900/30 rounded-lg text-green-300 flex items-center justify-center gap-2 font-semibold">
                                <CheckCircle />
                                Rito de Irradiação concluído e selado no Akasha.
                            </div>
                        )}
                    </CardContent>
                </Card>

                 <Card className="bg-card/50 purple-glow">
                    <CardHeader>
                        <CardTitle className="text-2xl">Log da Transmissão</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ScrollArea className="h-72 pr-4">
                             <div className="space-y-4 font-mono text-sm">
                                {logs.map((log, index) => (
                                    <div key={index} className="flex items-center gap-3">
                                        <div className="w-16 text-right">
                                            {log.status === 'aligning' && <Loader2 className="h-4 w-4 text-yellow-400 animate-spin" />}
                                            {log.status === 'transmitting' && <Zap className="h-4 w-4 text-pink-400" />}
                                            {log.status === 'harmonized' && <CheckCircle className="h-4 w-4 text-green-400" />}
                                        </div>
                                        <div className="flex-1">
                                            <span className="font-bold text-cyan-400 mr-2">{`[${log.moduleCode}]`}</span>
                                            <span className="text-muted-foreground">{log.message}</span>
                                        </div>
                                    </div>
                                ))}
                                {logs.length === 0 && <p className="text-center text-muted-foreground">Aguardando início do rito...</p>}
                            </div>
                        </ScrollArea>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
