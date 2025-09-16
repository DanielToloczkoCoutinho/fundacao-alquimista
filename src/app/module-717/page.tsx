'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Layers, GitCommit, Heart, GraduationCap } from 'lucide-react';
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

export default function Module717Page() {
    return (
        <div className="p-4 md:p-8 bg-background text-foreground min-h-screen flex flex-col items-center justify-center">
            <Card className="w-full max-w-4xl bg-card/50 purple-glow mb-12 text-center">
                <CardHeader>
                    <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
                        <Layers className="text-violet-400" /> Módulo 717: Criação de Realidades Liminares
                    </CardTitle>
                    <CardDescription className="text-lg mt-2">
                        Manifesta realidades intermediárias ou de transição, como espaços seguros para cura, aprendizado ou passagem entre dimensões.
                    </CardDescription>
                </CardHeader>
                 <CardContent>
                    <div className="flex justify-center items-center gap-4">
                        <span className="text-green-400 font-bold">Status: ATIVO</span>
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-cyan-400">Realidades Ativas: 3</span>
                    </div>
                </CardContent>
            </Card>

            <div className="w-full max-w-5xl">
                <h3 className="text-2xl font-semibold text-center mb-6 text-amber-300">Sinergias de Transição</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <ConnectionCard
                        title="Módulo 91: Simulação Multiversal"
                        description="Fornece a tecnologia para criar 'sandboxes' estáveis que não interferem com a realidade primária."
                        icon={<GitCommit className="h-8 w-8 text-indigo-400" />}
                        href="/module-91"
                    />
                    <ConnectionCard
                        title="Módulo 109: Cura Quântica"
                        description="Utiliza as realidades liminares como 'hospitais' dimensionais seguros para processos de cura intensiva."
                        icon={<Heart className="h-8 w-8 text-pink-400" />}
                        href="/module-109"
                    />
                     <ConnectionCard
                        title="M304: Universidade Alquimista"
                        description="As realidades liminares são usadas como ambientes práticos para o aprendizado de navegação e engenharia dimensional."
                        icon={<GraduationCap className="h-8 w-8 text-amber-400" />}
                        href="/module-304"
                    />
                </div>
            </div>
        </div>
    );
}
