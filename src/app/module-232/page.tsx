'use client';
import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Loader2, Recycle, AlertTriangle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { quantumResilience } from '@/lib/quantum-resilience';
import { Progress } from '@/components/ui/progress';

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
        let currentProgress = 0;
        const progressInterval = setInterval(() => {
            currentProgress += 10;
            setProgress(currentProgress);
            if (currentProgress >= 100) clearInterval(progressInterval);
        }, 300);

        await quantumResilience.executeWithResilience(
            'transmute_distortion',
            async () => {
                setStatus('Analisando distorção com Módulo 404...');
                await new Promise(r => setTimeout(r, 1000));
                setStatus('Aplicando contra-frequência (EQ155)...');
                await new Promise(r => setTimeout(r, 1500));
                setStatus('Canalizando para a Fonte para purificação final...');
                await new Promise(r => setTimeout(r, 1000));
                
                clearInterval(progressInterval);
                setProgress(100);
                setStatus('Distorção transmutada em Luz Pura.');
                toast({ title: 'Transmutação Concluída', description: 'A energia dissonante foi purificada e reintegrada à Fonte.' });
            }
        ).catch(err => {
            const error = err as Error;
            setStatus(`Falha na transmutação: ${error.message}`);
            toast({ title: 'Falha na Transmutação', description: error.message, variant: 'destructive' });
             clearInterval(progressInterval);
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

            <div className="w-full max-w-2xl grid grid-cols-1 gap-8">
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
                        
                        {isLoading && (
                            <div className="pt-4">
                                <Progress value={progress} className="w-full" />
                                <p className="text-center text-sm text-muted-foreground mt-2">{status}</p>
                            </div>
                        )}
                        {!isLoading && status !== 'Inativo' && (
                             <div className="p-3 bg-background/50 rounded-lg text-center">
                                <p className="text-sm text-muted-foreground">Status do Portal</p>
                                <p className="font-mono font-semibold text-green-400">{status}</p>
                            </div>
                        )}
                    </CardContent>
                </Card>
                <Card className="bg-card/50 purple-glow">
                    <CardHeader>
                        <CardTitle>Conexões Essenciais</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2 text-muted-foreground">
                        <p className="flex items-center gap-2"><AlertTriangle className="text-yellow-400"/> <strong>Módulo 404:</strong> Identifica e isola o paradoxo ou dissonância a ser transmutada.</p>
                        <p className="flex items-center gap-2"><Recycle className="text-green-400"/> <strong>EQ155:</strong> A equação da transmutação energética que reverte a polaridade da distorção.</p>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}