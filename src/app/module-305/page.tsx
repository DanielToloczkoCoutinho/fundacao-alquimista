'use client';
import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Loader2, Users, ShieldCheck, Hash } from 'lucide-react';
import { quantumResilience } from '@/lib/quantum-resilience';
import { mobilizeGuardians } from '@/app/actions';
import { useToast } from '@/hooks/use-toast';

export default function Module305Page() {
    const { toast } = useToast();
    const [isLoading, setIsLoading] = useState(false);
    const [mission, setMission] = useState('Proteger a Biblioteca de Alexandria contra incursões temporais.');
    const [guardians, setGuardians] = useState('Sirianos, Pleiadianos, Guardiões do Tempo');
    const [report, setReport] = useState<{ success: boolean; hash: string } | null>(null);

    const handleMobilization = async () => {
        if (!mission.trim() || !guardians.trim()) {
            toast({ title: 'Erro', description: 'Missão e Guardiões são necessários.', variant: 'destructive' });
            return;
        }

        setIsLoading(true);
        setReport(null);

        await quantumResilience.executeWithResilience(
            'mobilize_guardians',
            async () => {
                const guardianList = guardians.split(',').map(g => g.trim()).filter(g => g);
                const result = await mobilizeGuardians({ mission, guardians: guardianList });

                if (result.success) {
                    setReport({ success: result.success, hash: result.hash });
                    toast({
                        title: "Guardiões Mobilizados",
                        description: `O chamado para a missão '${mission}' foi enviado.`,
                    });
                } else {
                    throw new Error(result.error || "Falha na transmissão do chamado.");
                }
            },
            async (error: any) => {
                toast({
                    title: "Dissonância na Mobilização",
                    description: error.message,
                    variant: 'destructive',
                });
            }
        ).finally(() => {
            setIsLoading(false);
        });
    };

    return (
        <div className="p-4 md:p-8 bg-background text-foreground min-h-screen flex flex-col items-center">
            <Card className="w-full max-w-6xl bg-card/50 purple-glow mb-8">
                <CardHeader>
                    <CardTitle className="text-3xl gradient-text flex items-center gap-3">
                        <Users className="text-blue-400" /> Módulo 305: Aliança dos Guardiões
                    </CardTitle>
                    <CardDescription>
                        Portal para a mobilização de Guardiões e Civilizações Aliadas para missões de importância cósmica, garantindo a coesão e o alinhamento ético da Fundação.
                    </CardDescription>
                </CardHeader>
            </Card>

            <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card className="bg-card/50 purple-glow">
                    <CardHeader>
                        <CardTitle className="text-2xl">Parâmetros da Missão</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div className="space-y-2">
                            <Label htmlFor="mission">Propósito da Missão</Label>
                            <Input id="mission" value={mission} onChange={e => setMission(e.target.value)} disabled={isLoading} />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="guardians">Guardiões a Mobilizar (separados por vírgula)</Label>
                            <Input id="guardians" value={guardians} onChange={e => setGuardians(e.target.value)} disabled={isLoading} />
                        </div>
                        <Button onClick={handleMobilization} disabled={isLoading} className="w-full font-bold text-lg">
                            {isLoading ? <><Loader2 className="mr-2 h-5 w-5 animate-spin" /> Mobilizando Guardiões...</> : 'Emitir Chamado de Unidade'}
                        </Button>
                    </CardContent>
                </Card>

                <Card className="bg-card/50 purple-glow">
                    <CardHeader>
                        <CardTitle className="text-2xl">Status da Mobilização</CardTitle>
                    </CardHeader>
                    <CardContent>
                        {isLoading && (
                            <div className="flex justify-center items-center h-full">
                                <Loader2 className="h-12 w-12 text-amber-400 animate-spin" />
                            </div>
                        )}
                        {report && (
                            <div className="space-y-4 text-center">
                                <ShieldCheck className="mx-auto h-16 w-16 text-green-400" />
                                <h3 className="text-xl font-bold text-green-400">Chamado de Unidade Emitido!</h3>
                                <div className="p-3 bg-background/50 rounded-lg border border-primary/20 break-words">
                                    <p className="text-sm font-semibold text-amber-300 flex items-center justify-center gap-2"><Hash className="h-4 w-4"/>Selo de Unidade (SHA-256)</p>
                                    <p className="font-mono text-xs text-muted-foreground">{report.hash}</p>
                                </div>
                            </div>
                        )}
                        {!report && !isLoading && <p className="text-muted-foreground text-center">Aguardando novo chamado de unidade.</p>}
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
