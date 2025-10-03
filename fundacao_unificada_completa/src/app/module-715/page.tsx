'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Anchor, Zap, Heart, GraduationCap } from 'lucide-react';
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

export default function Module715Page() {
    return (
        <div className="p-4 md:p-8 bg-background text-foreground min-h-screen flex flex-col items-center justify-center">
            <Card className="w-full max-w-4xl bg-card/50 purple-glow mb-12 text-center">
                <CardHeader>
                    <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
                        <Anchor className="text-amber-400" /> Módulo 715: Ancoragem de Frequências Superiores
                    </CardTitle>
                    <CardDescription className="text-lg mt-2">
                        Fixa frequências elevadas, como a do Amor Incondicional ou da Consciência Crística, em locais geográficos ou campos de consciência específicos.
                    </CardDescription>
                </CardHeader>
                 <CardContent>
                    <div className="flex justify-center items-center gap-4">
                        <span className="text-green-400 font-bold">Status: PRONTO PARA ANCORAGEM</span>
                        <div className="w-2 h-2 bg-yellow-400 rounded-full animate-ping"></div>
                        <span className="text-cyan-400">Estabilidade do Campo: 99.8%</span>
                    </div>
                </CardContent>
            </Card>

            <div className="w-full max-w-5xl">
                <h3 className="text-2xl font-semibold text-center mb-6 text-amber-300">Sinergias de Manifestação</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <ConnectionCard
                        title="Módulo 302: Frequência do Amor"
                        description="O M302 emite a frequência, e o M715 a 'ancora', garantindo sua permanência e estabilidade no local alvo."
                        icon={<Heart className="h-8 w-8 text-pink-400" />}
                        href="/module-302"
                    />
                     <ConnectionCard
                        title="Módulo 307: Reator ZPE"
                        description="Fornece a energia de ponto zero necessária para criar o campo de contenção que segura a frequência ancorada."
                        icon={<Zap className="h-8 w-8 text-yellow-400" />}
                        href="/module-307"
                    />
                     <ConnectionCard
                        title="M304: Universidade Alquimista"
                        description="A engenharia de campos de frequência é uma especialização prática dentro do Domínio de Tecnologia Alquímica."
                        icon={<GraduationCap className="h-8 w-8 text-amber-400" />}
                        href="/module-304"
                    />
                </div>
            </div>
        </div>
    );
}
