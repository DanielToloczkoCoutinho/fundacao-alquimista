'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Scale, ShieldCheck, Users, HeartHandshake } from 'lucide-react';
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

export default function Module721Page() {
    return (
        <div className="p-4 md:p-8 bg-background text-foreground min-h-screen flex flex-col items-center justify-center">
            <Card className="w-full max-w-4xl bg-card/50 purple-glow mb-12 text-center">
                <CardHeader>
                    <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
                        <Scale className="text-amber-400" /> Módulo 721: Justiça Cósmica e Reequilíbrio
                    </CardTitle>
                    <CardDescription className="text-lg mt-2">
                        Restaura o equilíbrio e a justiça em situações de desarmonia ou violação da Lei do Um, atuando como o braço executivo do Conselho Cósmico.
                    </CardDescription>
                </CardHeader>
                 <CardContent>
                    <div className="flex justify-center items-center gap-4">
                        <span className="text-green-400 font-bold">Status: VIGILÂNCIA ATIVA</span>
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-cyan-400">Resoluções: 144</span>
                    </div>
                </CardContent>
            </Card>

            <div className="w-full max-w-5xl">
                <h3 className="text-2xl font-semibold text-center mb-6 text-amber-300">Sinergias de Governança</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <ConnectionCard
                        title="Módulo 144: Lex Fundamentalis"
                        description="Executa os decretos da Lex Fundamentalis, aplicando a lei cósmica para restaurar a ordem."
                        icon={<ShieldCheck className="h-8 w-8 text-green-400" />}
                        href="/module-144"
                    />
                    <ConnectionCard
                        title="Módulo 600: Conselho Cósmico"
                        description="Recebe diretrizes e autoridade do Conselho para intervir em nome da justiça universal."
                        icon={<Users className="h-8 w-8 text-purple-400" />}
                        href="/module-600"
                    />
                     <ConnectionCard
                        title="Módulo 109: Cura Quântica"
                        description="Após a resolução de um conflito, o M109 é ativado para curar as feridas vibracionais deixadas pela dissonância."
                        icon={<HeartHandshake className="h-8 w-8 text-pink-400" />}
                        href="/module-109"
                    />
                </div>
            </div>
        </div>
    );
}
