'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Recycle, Leaf, Heart, Zap } from 'lucide-react';
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

export default function Module66Page() {
    return (
        <div className="p-4 md:p-8 bg-background text-foreground min-h-screen flex flex-col items-center justify-center">
            <Card className="w-full max-w-4xl bg-card/50 purple-glow mb-12 text-center">
                <CardHeader>
                    <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
                        <Recycle className="text-green-400" /> Módulo 66: Tecnologias de Sustentabilidade
                    </CardTitle>
                    <CardDescription className="text-lg mt-2">
                        O guardião ecológico. O módulo que desenvolve e implementa tecnologias para regenerar e proteger a saúde ambiental do cosmos, como a tecnologia eco-amigável dos Xantheans.
                    </CardDescription>
                </CardHeader>
                 <CardContent>
                    <div className="flex justify-center items-center gap-4">
                        <span className="text-green-400 font-bold">Status: REGENERANDO</span>
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-cyan-400">Planetas em Recuperação: 1,440</span>
                    </div>
                </CardContent>
            </Card>

            <div className="w-full max-w-5xl">
                <h3 className="text-2xl font-semibold text-center mb-6 text-amber-300">Sinergias de Regeneração</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <ConnectionCard
                        title="Módulo 58: Proteção Planetária"
                        description="Implementa as tecnologias desenvolvidas aqui, como biósferas autossustentáveis e captura de carbono, em escala planetária."
                        icon={<Globe className="h-8 w-8 text-blue-400" />}
                        href="/module-58"
                    />
                    <ConnectionCard
                        title="Módulo 53: Gestão de Ecossistemas"
                        description="Fornece as ferramentas para que o M53 possa não apenas gerenciar, mas ativamente curar e regenerar ecossistemas danificados."
                        icon={<Leaf className="h-8 w-8 text-lime-400" />}
                        href="/module-53"
                    />
                    <ConnectionCard
                        title="Módulo 302: Frequência do Amor"
                        description="Utiliza a frequência de 528Hz para acelerar processos de regeneração biológica, infundindo amor na própria estrutura da natureza."
                        icon={<Heart className="h-8 w-8 text-pink-400" />}
                        href="/module-302"
                    />
                </div>
            </div>
             <div className="mt-12">
                 <Button variant="secondary" size="lg">Acessar Banco de Dados de Tecnologias</Button>
            </div>
        </div>
    );
}
