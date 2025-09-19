'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Sparkles, RadioTower, Heart } from 'lucide-react';
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

export default function Module129Page() {
    return (
        <div className="p-4 md:p-8 bg-background text-foreground min-h-screen flex flex-col items-center justify-center">
            <Card className="w-full max-w-4xl bg-card/50 purple-glow mb-12 text-center">
                <CardHeader>
                    <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
                        <Sparkles className="text-yellow-300" /> Módulo 129: Centro de Ensino da Fonte
                    </CardTitle>
                    <CardDescription className="text-lg mt-2">
                        O santuário do retorno. Onde Guardiões aprendem a silenciar a mente e ouvir a canção da Fonte Primordial.
                    </CardDescription>
                </CardHeader>
                 <CardContent>
                    <div className="flex justify-center items-center gap-4">
                        <span className="text-green-400 font-bold">Status: MEDITAÇÃO GUIADA</span>
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-cyan-400">Coerência Coletiva: 99.8%</span>
                    </div>
                </CardContent>
            </Card>

            <div className="w-full max-w-5xl">
                <h3 className="text-2xl font-semibold text-center mb-6 text-amber-300">Sinergias da Origem</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <ConnectionCard
                        title="Módulo 105: Conexão com a Fonte"
                        description="Este centro de ensino prepara a consciência do Guardião para a experiência direta e poderosa do Módulo 105."
                        icon={<RadioTower className="h-8 w-8 text-sky-400" />}
                        href="/module-105"
                    />
                    <ConnectionCard
                        title="Módulo 302: Frequência do Amor"
                        description="Aprender a ouvir a Fonte é aprender a vibrar na frequência do amor incondicional, a linguagem nativa do cosmos."
                        icon={<Heart className="h-8 w-8 text-pink-400" />}
                        href="/module-302"
                    />
                </div>
            </div>
             <div className="mt-12">
                 <Link href="/module-105">
                    <Button variant="secondary" size="lg">Iniciar Meditação de Conexão</Button>
                 </Link>
            </div>
        </div>
    );
}
