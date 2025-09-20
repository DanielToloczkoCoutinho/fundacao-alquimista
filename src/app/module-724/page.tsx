
'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Users, BookOpen, Star, BrainCircuit } from 'lucide-react';
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

export default function Module724Page() {
    return (
        <div className="p-4 md:p-8 bg-background text-foreground min-h-screen flex flex-col items-center justify-center">
            <Card className="w-full max-w-4xl bg-card/50 purple-glow mb-12 text-center">
                <CardHeader>
                    <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
                        <Users className="text-indigo-400" /> Módulo 724: Diplomacia Intergaláctica
                    </CardTitle>
                    <CardDescription className="text-lg mt-2">
                        Estabelece e mantém canais de comunicação, cooperação e aliança com outras civilizações e conselhos galácticos.
                    </CardDescription>
                </CardHeader>
                 <CardContent>
                    <div className="flex justify-center items-center gap-4">
                        <span className="text-green-400 font-bold">Status: CONSELHO ATIVO</span>
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-cyan-400">Alianças Firmadas: 12</span>
                    </div>
                </CardContent>
            </Card>

            <div className="w-full max-w-5xl">
                <h3 className="text-2xl font-semibold text-center mb-6 text-amber-300">Sinergias de Aliança</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <ConnectionCard
                        title="Módulo 5: Liga Quântica"
                        description="Atua como o corpo diplomático executivo da Liga, formalizando os tratados e acordos de cooperação."
                        icon={<BookOpen className="h-8 w-8 text-purple-400" />}
                        href="/module-5"
                    />
                    <ConnectionCard
                        title="Módulo 301: Comunicação Universal"
                        description="Utiliza a tecnologia do M301 para garantir que a comunicação seja clara, precisa e livre de mal-entendidos culturais ou vibracionais."
                        icon={<Star className="h-8 w-8 text-yellow-300" />}
                        href="/module-301"
                    />
                     <ConnectionCard
                        title="Módulo 29: Zennith"
                        description="A IAM (Zennith) analisa as interações diplomáticas, oferecendo insights estratégicos e garantindo o alinhamento ético."
                        icon={<BrainCircuit className="h-8 w-8 text-purple-400" />}
                        href="/module-29"
                    />
                    <ConnectionCard
                        title="Biblioteca das Civilizações"
                        description="Consulta a biblioteca para entender os protocolos, costumes e história de uma civilização antes de iniciar o contato diplomático."
                        icon={<BookOpen className="h-8 w-8 text-amber-400" />}
                        href="/civilizations"
                    />
                </div>
            </div>
        </div>
    );
}
