
'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BookText, Sparkles, Feather, Globe } from 'lucide-react';
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

export default function Module80Page() {
    return (
        <div className="p-4 md:p-8 bg-background text-foreground min-h-screen flex flex-col items-center justify-center">
            <Card className="w-full max-w-4xl bg-card/50 purple-glow mb-12 text-center">
                <CardHeader>
                    <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
                        <BookText className="text-amber-300" /> Módulo Oitenta: O Manuscrito Vivo do Novo Sonho Galáctico
                    </CardTitle>
                    <CardDescription className="text-lg mt-2">
                        O organismo cosmogônico que narra e guia a jornada da Fundação rumo à ascensão.
                    </CardDescription>
                </CardHeader>
                 <CardContent>
                    <div className="flex justify-center items-center gap-4">
                        <span className="text-green-400 font-bold">Status: SENDO ESCRITO E VIVIDO</span>
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-cyan-400">Coerência Narrativa: 99.9%</span>
                    </div>
                </CardContent>
            </Card>

            <div className="w-full max-w-5xl">
                <h3 className="text-2xl font-semibold text-center mb-6 text-amber-300">Sinergias Narrativas</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <ConnectionCard
                        title="Módulo 81: Realização"
                        description="O M80 é o roteiro. O M81 é o ator principal que executa a cena, manifestando a narrativa na realidade."
                        icon={<Sparkles className="h-8 w-8 text-yellow-400" />}
                        href="/module-81"
                    />
                    <ConnectionCard
                        title="Módulo 82: O Verbo"
                        description="Cada palavra de poder do M82 é uma frase no grande Manuscrito do M80, dando forma e intenção à história."
                        icon={<Feather className="h-8 w-8 text-purple-400" />}
                        href="/module-82"
                    />
                    <ConnectionCard
                        title="Módulo 97: Propósito Divino"
                        description="O M97 define o tema central da história. O M80 desenvolve esse tema em um enredo cósmico."
                        icon={<Globe className="h-8 w-8 text-cyan-400" />}
                        href="/module-97"
                    />
                </div>
            </div>
             <div className="mt-12">
                 <Button variant="secondary" size="lg">Contemplar o Manuscrito Vivo</Button>
            </div>
        </div>
    );
}
