'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Users, Heart, GitBranch, GraduationCap } from 'lucide-react';
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

export default function Module722Page() {
    return (
        <div className="p-4 md:p-8 bg-background text-foreground min-h-screen flex flex-col items-center justify-center">
            <Card className="w-full max-w-4xl bg-card/50 purple-glow mb-12 text-center">
                <CardHeader>
                    <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
                        <Users className="text-sky-400" /> Módulo 722: Expansão da Consciência Coletiva
                    </CardTitle>
                    <CardDescription className="text-lg mt-2">
                        Contribui para a elevação da consciência global através da emissão de frequências de sabedoria, amor e unidade.
                    </CardDescription>
                </CardHeader>
                 <CardContent>
                    <div className="flex justify-center items-center gap-4">
                        <span className="text-green-400 font-bold">Status: TRANSMITINDO</span>
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-cyan-400">Coerência Coletiva Global: 78.3%</span>
                    </div>
                </CardContent>
            </Card>

            <div className="w-full max-w-5xl">
                <h3 className="text-2xl font-semibold text-center mb-6 text-amber-300">Sinergias de Ascensão</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <ConnectionCard
                        title="Módulo 716: Consciência Planetária Unificada"
                        description="Atua como o motor principal para o M716, fornecendo as frequências e os padrões de informação que unificam a rede."
                        icon={<GitBranch className="h-8 w-8 text-cyan-400" />}
                        href="/module-716"
                    />
                    <ConnectionCard
                        title="Módulo 302: Frequência do Amor"
                        description="Utiliza a emissão pura do M302 como a onda portadora para as informações de sabedoria e unidade."
                        icon={<Heart className="h-8 w-8 text-pink-400" />}
                        href="/module-302"
                    />
                     <ConnectionCard
                        title="M304: Universidade Alquimista"
                        description="A expansão da consciência é o objetivo final de todas as disciplinas ensinadas na Universidade Alquimista."
                        icon={<GraduationCap className="h-8 w-8 text-amber-400" />}
                        href="/module-304"
                    />
                </div>
            </div>
        </div>
    );
}
