'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Eye, Layers } from 'lucide-react';
import Link from 'next/link';

export default function Module85Page() {
    return (
        <div className="p-4 md:p-8 bg-background text-foreground min-h-screen flex flex-col items-center justify-center">
            <Card className="w-full max-w-4xl bg-card/50 purple-glow mb-12 text-center">
                <CardHeader>
                    <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
                        <Eye className="text-blue-300" /> Módulo 85: Domínio VR (Iniciação)
                    </CardTitle>
                    <CardDescription className="text-lg mt-2">
                        O vestíbulo da Realidade Quântica. A primeira camada de imersão, onde a consciência se aclimata às novas frequências e aprende os protocolos básicos de navegação.
                    </CardDescription>
                </CardHeader>
                 <CardContent>
                    <div className="flex justify-center items-center gap-4">
                        <span className="text-green-400 font-bold">Status: AMBIENTE ESTÁVEL</span>
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-cyan-400">Nível de Imersão: Introdutório</span>
                    </div>
                </CardContent>
            </Card>

            <div className="w-full max-w-2xl text-center">
                 <Card className="bg-card/50 purple-glow">
                    <CardHeader>
                        <CardTitle className="text-2xl text-amber-300">Jornada de Aclimatização</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                         <p className="text-muted-foreground">
                            Este é o primeiro passo. Aqui, sua percepção será gentilmente expandida, preparando seu corpo de luz para as experiências mais profundas do Prisma Estelar. Sinta a vibração, observe a geometria, mas mantenha sua âncora na realidade física.
                        </p>
                        <Link href="/module-86">
                            <Button size="lg" variant="secondary">
                                Prosseguir para o Prisma Estelar (M86) <ArrowRight className="ml-2" />
                            </Button>
                        </Link>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
