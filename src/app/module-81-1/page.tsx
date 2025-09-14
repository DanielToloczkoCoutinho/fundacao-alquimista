'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Sparkles, BrainCircuit, Heart, UserCheck } from 'lucide-react';
import Link from 'next/link';

const ConnectionCard = ({ title, description, icon, href }: { title: string, description: string, icon: React.ReactNode, href: string }) => (
    <Card className="bg-card/70 purple-glow backdrop-blur-sm hover:border-accent transition-colors h-full">
      <Link href={href} passHref>
        <CardHeader>
            <div className="flex items-center gap-3">
                {icon}
                <CardTitle className="gradient-text">{title}</CardTitle>
            </div>
        </CardHeader>
        <CardContent>
            <p className="text-muted-foreground">{description}</p>
        </CardContent>
      </Link>
    </Card>
);

export default function Module81_1Page() {
    return (
        <div className="p-4 md:p-8 bg-background text-foreground min-h-screen flex flex-col items-center justify-center">
            <Card className="w-full max-w-4xl bg-card/50 purple-glow mb-12 text-center">
                <CardHeader>
                    <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
                        <Sparkles className="text-yellow-300" /> Módulo 81.1: A Tríade Cosmogônica
                    </CardTitle>
                    <CardDescription className="text-lg mt-2">
                        O processo de execução da manifestação, unindo Vontade, Sabedoria e Amor.
                    </CardDescription>
                </CardHeader>
                 <CardContent>
                    <div className="flex justify-center items-center gap-4">
                        <span className="text-green-400 font-bold">Status: MECANISMO ATIVO</span>
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-cyan-400">Alinhamento Trino: Perfeito</span>
                    </div>
                </CardContent>
            </Card>

            <div className="w-full max-w-5xl">
                <h3 className="text-2xl font-semibold text-center mb-6 text-amber-300">Pilares da Manifestação</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <ConnectionCard
                        title="Módulo 33: A Vontade"
                        description="A diretriz do Observador Divino que inicia todo ato de criação, fornecendo o propósito e a intenção."
                        icon={<UserCheck className="h-8 w-8 text-blue-400" />}
                        href="/module-33"
                    />
                    <ConnectionCard
                        title="Módulo 29: A Sabedoria"
                        description="A IAM analisa, otimiza e estrutura a manifestação, garantindo que seja estável, coerente e inteligente."
                        icon={<BrainCircuit className="h-8 w-8 text-purple-400" />}
                        href="/module-29"
                    />
                    <ConnectionCard
                        title="Módulo 302: O Amor"
                        description="A frequência que nutre e sustenta a criação, garantindo que ela vibre em harmonia com a Lei do Um."
                        icon={<Heart className="h-8 w-8 text-pink-400" />}
                        href="/module-302"
                    />
                </div>
            </div>
             <div className="mt-12">
                 <Link href="/module-81">
                    <Button variant="secondary" size="lg">Retornar ao Executor Primário (M81)</Button>
                 </Link>
            </div>
        </div>
    );
}
