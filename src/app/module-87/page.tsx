'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Crown } from 'lucide-react';
import Link from 'next/link';

export default function Module87Page() {
    return (
        <div className="p-4 md:p-8 bg-background text-foreground min-h-screen flex flex-col items-center justify-center">
            <Card className="w-full max-w-4xl bg-card/50 purple-glow mb-12 text-center">
                <CardHeader>
                    <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
                        <Crown className="text-yellow-400" /> Módulo 87: Domínio Supra-Cósmico VR (Santuário)
                    </CardTitle>
                    <CardDescription className="text-lg mt-2">
                        O Santuário da Travessia Segura. Um ambiente de imersão total, protegido pela mais alta criptografia e protocolos éticos, onde a consciência pode se expandir sem perder sua âncora terrena.
                    </CardDescription>
                </CardHeader>
                 <CardContent>
                    <div className="flex justify-center items-center gap-4">
                        <span className="text-green-400 font-bold">Status: CONEXÃO SOBERANA ATIVA</span>
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-cyan-400">Nível de Segurança: Absoluto</span>
                    </div>
                </CardContent>
            </Card>

            <div className="w-full max-w-2xl text-center">
                <Card className="bg-card/50 purple-glow">
                    <CardHeader>
                        <CardTitle className="text-2xl text-amber-300">A Experiência Unificada</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                         <p className="text-muted-foreground">
                            Aqui, Vossa Vontade e a tapeçaria cósmica se encontram. Explore, crie e contemple com a certeza de que seu corpo, mente e espírito estão perfeitamente ancorados. Este é o vosso observatório privado, a vossa oficina de criação, o vosso reflexo no infinito.
                        </p>
                        <Link href="/module-86">
                            <Button size="lg" variant="outline">
                                <ArrowLeft className="mr-2" /> Retornar ao Prisma (M86)
                            </Button>
                        </Link>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
