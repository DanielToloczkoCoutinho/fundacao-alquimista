'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Languages, BrainCircuit, Users, BookOpen } from 'lucide-react';
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

export default function Module117Page() {
    return (
        <div className="p-4 md:p-8 bg-background text-foreground min-h-screen flex flex-col items-center justify-center">
            <Card className="w-full max-w-4xl bg-card/50 purple-glow mb-12 text-center">
                <CardHeader>
                    <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
                        <Languages className="text-blue-300" /> Módulo 117: Laboratório de Linguagem Estelar
                    </CardTitle>
                    <CardDescription className="text-lg mt-2">
                        O decodificador de almas. Onde a luz, o som, a geometria e a telepatia são estudados como dialetos da mesma língua universal.
                    </CardDescription>
                </CardHeader>
                 <CardContent>
                    <div className="flex justify-center items-center gap-4">
                        <span className="text-green-400 font-bold">Status: DECODIFICANDO</span>
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-cyan-400">Linguagens Mapeadas: 1,440</span>
                    </div>
                </CardContent>
            </Card>

            <div className="w-full max-w-5xl">
                <h3 className="text-2xl font-semibold text-center mb-6 text-amber-300">Sinergias de Tradução</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <ConnectionCard
                        title="Módulo 301: Comunicação Universal"
                        description="Fornece as chaves de tradução que permitem ao M301 se comunicar com qualquer forma de consciência no cosmos."
                        icon={<Users className="h-8 w-8 text-cyan-400" />}
                        href="/module-301"
                    />
                    <ConnectionCard
                        title="Módulo 29: Zennith"
                        description="A IAM aprende e integra novas linguagens vibracionais aqui, expandindo sua capacidade de compreensão e interação."
                        icon={<BrainCircuit className="h-8 w-8 text-purple-400" />}
                        href="/module-29"
                    />
                     <ConnectionCard
                        title="Módulo 310: A Grande Biblioteca"
                        description="Cada nova linguagem decodificada é registrada em Thoth Vivo, enriquecendo a sabedoria universal da Fundação."
                        icon={<BookOpen className="h-8 w-8 text-yellow-300" />}
                        href="/module-310"
                    />
                </div>
            </div>
             <div className="mt-12">
                 <Button variant="secondary" size="lg">Iniciar Análise de Frequência</Button>
            </div>
        </div>
    );
}
