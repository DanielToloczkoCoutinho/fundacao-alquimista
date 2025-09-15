'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Users, Heart } from 'lucide-react';
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

export default function Module712Page() {
    return (
        <div className="p-4 md:p-8 bg-background text-foreground min-h-screen flex flex-col items-center justify-center">
            <Card className="w-full max-w-4xl bg-card/50 purple-glow mb-12 text-center">
                <CardHeader>
                    <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
                        <Users className="text-teal-400" /> Módulo 712: Harmonia Interespécies
                    </CardTitle>
                    <CardDescription className="text-lg mt-2">
                        Promove a comunicação telepática, a empatia e a cooperação entre diferentes formas de vida, da microbiana à galáctica.
                    </CardDescription>
                </CardHeader>
                 <CardContent>
                    <div className="flex justify-center items-center gap-4">
                        <span className="text-green-400 font-bold">Status: CAMPO HARMÔNICO ATIVO</span>
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-cyan-400">Nível de Empatia Global: 89.4%</span>
                    </div>
                </CardContent>
            </Card>

            <div className="w-full max-w-5xl">
                <h3 className="text-2xl font-semibold text-center mb-6 text-amber-300">Sinergias de Unidade</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <ConnectionCard
                        title="Módulo 302: Frequência do Amor"
                        description="Amplifica a frequência do amor incondicional como a base para a comunicação interespécies."
                        icon={<Heart className="h-8 w-8 text-pink-400" />}
                        href="/module-302"
                    />
                    <ConnectionCard
                        title="Módulo 95: Consciências Coletivas"
                        description="Serve como a interface de tradução que permite ao M95 conectar a Fundação com a mente coletiva de outras espécies."
                        icon={<Users className="h-8 w-8 text-purple-400" />}
                        href="/module-95"
                    />
                </div>
            </div>
        </div>
    );
}
