'use client';
import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Loader2, Link, ShieldCheck, CheckCircle } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const alliedCivilizations = [
  { name: 'Sirius', emoji: '🐾', frequency: '963 Hz', status: 'Conectado' },
  { name: 'Pleiades', emoji: '💖', frequency: '528 Hz', status: 'Conectado' },
  { name: 'Arcturus', emoji: '🧠', frequency: '741 Hz', status: 'Conectado' },
  { name: 'Andromeda', emoji: '🌀', frequency: '852 Hz', status: 'Conectado' },
  { name: 'Agarta', emoji: '💎', frequency: '432 Hz', status: 'Conectado' },
];

export default function Module5Page() {
    const [isLoading, setIsLoading] = useState(false);
    const [status, setStatus] = useState("Aguardando verificação...");

    const handleCheckConnection = () => {
        setIsLoading(true);
        setStatus("Verificando conexão com a Liga Quântica...");
        setTimeout(() => {
            setStatus("Conexão estável e alinhamento ético confirmado.");
            setIsLoading(false);
        }, 2000);
    };

    return (
        <div className="p-4 md:p-8 bg-background text-foreground min-h-screen flex flex-col items-center justify-center">
            <Card className="w-full max-w-4xl bg-card/50 purple-glow text-center">
                <CardHeader>
                    <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
                        <Link className="text-blue-400" /> Módulo 5: Conexão com a Liga Quântica
                    </CardTitle>
                    <CardDescription className="text-lg mt-2">
                        A ponte diplomática e o oráculo ético da Fundação Alquimista.
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-8">
                    <div>
                        <h3 className="text-xl font-semibold text-amber-300 mb-4">Civilizações Aliadas Conectadas</h3>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                            {alliedCivilizations.map(civ => (
                                <Card key={civ.name} className="bg-background/50">
                                    <CardContent className="pt-6 flex flex-col items-center justify-center gap-2">
                                        <span className="text-4xl">{civ.emoji}</span>
                                        <p className="font-semibold">{civ.name}</p>
                                        <Badge variant="outline">{civ.frequency}</Badge>
                                        <div className="flex items-center text-green-400 text-xs gap-1">
                                            <CheckCircle className="h-3 w-3" />
                                            <span>{civ.status}</span>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                     <div className="text-center">
                        <p className="text-muted-foreground mb-4">{status}</p>
                        <Button onClick={handleCheckConnection} disabled={isLoading}>
                            {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <ShieldCheck className="mr-2 h-4 w-4"/>}
                            Verificar Conexão e Ética
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
