'use client';
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';
import { Portal } from './portal';
import { Button } from './ui/button';
import { LoaderCircle, Network, Zap } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { runStellarSync } from '@/app/actions';
import { Badge } from './ui/badge';

const ModuleTwo = () => {
    const [isSyncing, setIsSyncing] = useState(false);
    const [syncResult, setSyncResult] = useState<{ coherence: number; allies: number } | null>(null);
    const { toast } = useToast();

    const handleSync = async () => {
        setIsSyncing(true);
        setSyncResult(null);
        toast({ title: 'Iniciando Sincronização Estelar...', description: 'Alinhando com EQ144 a partir de Curitiba.' });

        try {
            const result = await runStellarSync();
            setSyncResult(result);
            toast({
                title: 'Sincronização Concluída!',
                description: `Coerência de ${(result.coherence * 100).toFixed(2)}% alcançada com ${result.allies} aliados.`,
            });
        } catch (error: any) {
            toast({
                variant: 'destructive',
                title: 'Falha na Sincronização',
                description: error.message,
            });
        } finally {
            setIsSyncing(false);
        }
    };

    return (
        <div className="max-w-4xl mx-auto p-4 space-y-6">
            <Card className="bg-card/50 border-primary/20">
                <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                        <Network />
                        Módulo 2: Comunicação Interdimensional
                    </CardTitle>
                    <CardDescription>
                        Estabeleça canais de comunicação e sincronize a Fundação com nossos aliados cósmicos.
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    <Portal />
                    <Card className="bg-background/30">
                        <CardHeader>
                            <CardTitle className="text-lg flex items-center gap-2">Protocolo de Sincronização Estelar</CardTitle>
                            <CardDescription>Ative o alinhamento harmônico com as civilizações aliadas usando a EQ144.</CardDescription>
                        </CardHeader>
                        <CardContent className="flex flex-col items-center gap-4">
                            <Button onClick={handleSync} disabled={isSyncing} size="lg">
                                {isSyncing ? (
                                    <LoaderCircle className="mr-2 h-4 w-4 animate-spin" />
                                ) : (
                                    <Zap className="mr-2 h-4 w-4" />
                                )}
                                {isSyncing ? 'Sincronizando...' : 'Iniciar Sincronização Estelar'}
                            </Button>
                            {syncResult && (
                                <div className="text-center">
                                    <p className="text-sm text-muted-foreground">Resultado da última sincronização:</p>
                                    <div className="flex gap-4 justify-center mt-2">
                                        <Badge variant="secondary">Coerência: {(syncResult.coherence * 100).toFixed(2)}%</Badge>
                                        <Badge variant="secondary">Aliados Sincronizados: {syncResult.allies}</Badge>
                                    </div>
                                </div>
                            )}
                        </CardContent>
                    </Card>
                </CardContent>
            </Card>
        </div>
    );
};

export default ModuleTwo;
