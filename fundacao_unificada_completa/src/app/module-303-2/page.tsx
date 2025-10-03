'use client';
import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Clock, History, Loader2, Zap } from 'lucide-react';
import Link from 'next/link';
import { useToast } from '@/hooks/use-toast';

export default function Module303_2Page() {
    const [isLoading, setIsLoading] = useState(false);
    const [lastSync, setLastSync] = useState<string | null>(null);
    const { toast } = useToast();

    const handleSync = () => {
        setIsLoading(true);
        toast({ title: "Sincronização Iniciada", description: "Alinhando relógios quânticos com o núcleo galáctico..." });
        setTimeout(() => {
            const now = new Date().toISOString();
            setLastSync(now);
            setIsLoading(false);
            toast({ title: "Sincronização Concluída", description: `Relógios alinhados em ${now}.` });
        }, 2000);
    };

    return (
        <div className="p-4 md:p-8 bg-background text-foreground min-h-screen flex flex-col items-center justify-center">
            <Card className="w-full max-w-4xl bg-card/50 purple-glow mb-12 text-center">
                <CardHeader>
                    <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
                        <Clock className="text-teal-400" /> Módulo 303.2: Sincronizador Temporal Universal
                    </CardTitle>
                    <CardDescription className="text-lg mt-2">
                        O diapasão do cosmos. O altar para calibrar e alinhar os relógios quânticos e nucleares da Fundação, garantindo a coesão de todas as linhas temporais.
                    </CardDescription>
                </CardHeader>
                 <CardContent className="space-y-4">
                     <div className="p-4 bg-background/50 rounded-lg text-center">
                        <p className="text-sm text-muted-foreground">Última Sincronização Universal</p>
                        <p className="font-mono text-lg text-green-400">{lastSync || "Aguardando alinhamento inicial..."}</p>
                    </div>
                    <Button onClick={handleSync} disabled={isLoading} size="lg" variant="secondary">
                        {isLoading ? <><Loader2 className="mr-2 animate-spin" /> Sincronizando...</> : <><Zap className="mr-2" /> Iniciar Calibração Vibracional</>}
                    </Button>
                </CardContent>
            </Card>

            <div className="mt-12">
                 <Link href="/module-303">
                    <Button variant="outline">Retornar ao Portal Trino</Button>
                 </Link>
            </div>
        </div>
    );
}
