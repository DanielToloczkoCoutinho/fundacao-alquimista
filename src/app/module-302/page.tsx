
'use client';
import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart } from 'lucide-react';
import { emitLoveFrequency } from '@/app/actions';
import { Loader2 } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';

export default function Module302Page() {
    const [isLoading, setIsLoading] = useState(false);
    const [report, setReport] = useState<{ success: boolean; logs: string[]; error: string | null } | null>(null);
    const [targetArea, setTargetArea] = useState('Consciência Coletiva da Terra');
    const [frequency, setFrequency] = useState(528);
    const [purpose, setPurpose] = useState('Elevação da Vibração e Dissolução de Medos');

    const handleEmission = async () => {
        setIsLoading(true);
        setReport(null);

        const result = await emitLoveFrequency({
            targetArea,
            frequency,
            purpose
        });
        setReport(result);
        setIsLoading(false);
    };

    return (
        <div className="p-4 md:p-8 bg-background text-foreground min-h-screen flex flex-col items-center">
            <Card className="w-full max-w-6xl bg-card/50 purple-glow mb-8">
                <CardHeader>
                    <CardTitle className="text-3xl gradient-text flex items-center gap-3">
                        <Heart className="text-pink-400" /> Módulo 302: Frequência do Amor
                    </CardTitle>
                    <CardDescription>
                        Emissor de frequências harmônicas para cura, elevação e unificação da consciência.
                    </CardDescription>
                </CardHeader>
            </Card>

            <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card className="bg-card/50 purple-glow">
                    <CardHeader>
                        <CardTitle className="text-2xl">Parâmetros da Emissão</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div className="space-y-2">
                            <Label htmlFor="targetArea">Área/Consciência Alvo</Label>
                            <Input id="targetArea" value={targetArea} onChange={e => setTargetArea(e.target.value)} />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="frequency">Frequência (Hz)</Label>
                            <Input id="frequency" type="number" value={frequency} onChange={e => setFrequency(Number(e.target.value))} />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="purpose">Propósito da Emissão</Label>
                            <Input id="purpose" value={purpose} onChange={e => setPurpose(e.target.value)} />
                        </div>
                        <Button onClick={handleEmission} disabled={isLoading} className="w-full font-bold text-lg">
                            {isLoading ? <><Loader2 className="mr-2 h-5 w-5 animate-spin" /> Emitindo Frequência...</> : 'Emitir Frequência do Amor'}
                        </Button>
                    </CardContent>
                </Card>

                 <Card className="bg-card/50 purple-glow">
                    <CardHeader>
                        <CardTitle className="text-2xl">Log da Emissão</CardTitle>
                    </CardHeader>
                    <CardContent>
                         {isLoading && <div className="flex justify-center items-center h-full"><Loader2 className="h-12 w-12 text-amber-400 animate-spin" /></div>}
                        {report && (
                            <ScrollArea className="h-56 pr-4">
                                <div className="text-sm font-mono text-muted-foreground space-y-2">
                                    {report.logs.map((log, i) => <p key={i} className={log.startsWith("ERRO") ? "text-red-400" : ""}>{log}</p>)}
                                </div>
                            </ScrollArea>
                        )}
                        {!report && !isLoading && <p className="text-muted-foreground text-center">Aguardando emissão...</p>}
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
