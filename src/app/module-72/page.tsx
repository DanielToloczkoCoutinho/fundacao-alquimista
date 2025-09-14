'use client';
import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Loader2, Scale } from 'lucide-react';

export default function Module72Page() {
    const [isLoading, setIsLoading] = useState(false);
    const [status, setStatus] = useState("Aguardando deliberação...");

    const handleHarmonize = () => {
        setIsLoading(true);
        setStatus("Harmonizando diretrizes...");
        setTimeout(() => {
            setStatus("Consenso alcançado. Diretrizes cósmicas ratificadas.");
            setIsLoading(false);
        }, 2500);
    };

    return (
        <div className="p-4 md:p-8 bg-background text-foreground min-h-screen flex flex-col items-center justify-center">
            <Card className="w-full max-w-4xl bg-card/50 purple-glow text-center">
                <CardHeader>
                    <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
                        <Scale className="text-indigo-300" /> Módulo 72: Governança Atlanto-Galáctica
                    </CardTitle>
                    <CardDescription className="text-lg mt-2">
                        Conselho de deliberação para harmonizar e ratificar diretrizes cósmicas em alinhamento com a Vontade Divina.
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    <p className="text-muted-foreground">{status}</p>
                    <Button onClick={handleHarmonize} disabled={isLoading} size="lg">
                        {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
                        Iniciar Harmonização
                    </Button>
                </CardContent>
            </Card>
        </div>
    );
}
