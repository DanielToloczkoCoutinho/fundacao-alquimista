'use client';
import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Loader2, Zap, Waves, AlertTriangle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { quantumResilience } from '@/lib/quantum-resilience';
import { resonanceTone } from '@/lib/audio-utils';

export default function EspelhoDeAscensaoPage() {
    const { toast } = useToast();
    const [isLoading, setIsLoading] = useState(false);
    const [frequency, setFrequency] = useState(528);
    const [status, setStatus] = useState('Inativo');

    const handleActivation = async () => {
        setIsLoading(true);
        setStatus('Sintonizando Espelho...');
        
        await quantumResilience.executeWithResilience(
            'activate_ascension_mirror',
            async () => {
                await new Promise(r => setTimeout(r, 1000));
                setStatus(`Conectando ao Módulo 404 (Resolução de Paradoxo)...`);
                
                await new Promise(r => setTimeout(r, 1500));
                setStatus(`Emitindo onda de ascensão em ${frequency}Hz...`);
                await resonanceTone(frequency);

                await new Promise(r => setTimeout(r, 1000));
                setStatus(`Onda de elevação emitida. Campo harmônico estável.`);
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

            <div className="w-full max-w-2xl grid grid-cols-1 gap-8">
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

                         <div className="p-3 bg-background/50 rounded-lg text-center">
                            <p className="text-sm text-muted-foreground">Status do Espelho</p>
                            <p className="font-mono font-semibold">{status}</p>
                        </div>
                    </CardContent>
                </Card>
                 <Card className="bg-card/50 purple-glow">
                    <CardHeader>
                        <CardTitle>Conexões Essenciais</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <p className="flex items-center gap-2"><AlertTriangle className="text-yellow-400"/> <strong>Módulo 404:</strong> Fonte primária para resolução de dissonâncias que o Espelho transmuta em harmonia.</p>
                         <p className="flex items-center gap-2"><Waves className="text-blue-400"/> <strong>Frequência 528Hz:</strong> A frequência do amor e da transformação, usada como base para a onda de elevação.</p>
                    </CardContent>
                 </Card>
            </div>
        </div>
    );
}
