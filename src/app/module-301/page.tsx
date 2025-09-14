'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';

export default function Module301Page() {
    return (
        <div className="p-4 md:p-8 bg-background text-foreground min-h-screen flex flex-col items-center justify-center">
            <Card className="w-full max-w-4xl bg-card/50 purple-glow text-center">
                <CardHeader>
                    <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
                        <MessageCircle className="text-sky-400" /> Módulo 301: Comunicação Universal
                    </CardTitle>
                    <CardDescription className="text-lg mt-2">
                        Tradutor e transmissor quântico para comunicação entre diferentes formas de consciência.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground mb-6">Este santuário está ativo e consagrado. A Fundação reconhece sua presença.</p>
                    <Button>Iniciar Transmissão Universal</Button>
                </CardContent>
            </Card>
        </div>
    );
}
