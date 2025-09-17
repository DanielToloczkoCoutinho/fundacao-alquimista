'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Recycle, Heart, Dna, GraduationCap, Zap } from 'lucide-react';
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

export default function Module720Page() {
    return (
        <div className="p-4 md:p-8 bg-background text-foreground min-h-screen flex flex-col items-center justify-center">
            <Card className="w-full max-w-4xl bg-card/50 purple-glow mb-12 text-center">
                <CardHeader>
                    <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
                        <Recycle className="text-lime-400" /> Módulo 720: Sustentabilidade Multidimensional
                    </CardTitle>
                    <CardDescription className="text-lg mt-2">
                        Garante a sustentabilidade e o equilíbrio em todos os níveis do ser (físico, emocional, espiritual) e da realidade manifestada.
                    </CardDescription>
                </CardHeader>
                 <CardContent>
                    <div className="flex justify-center items-center gap-4">
                        <span className="text-green-400 font-bold">Status: EQUILÍBRIO ATIVO</span>
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-cyan-400">Índice de Sustentabilidade: 99.4%</span>
                    </div>
                </CardContent>
            </Card>

            <div className="w-full max-w-5xl">
                <h3 className="text-2xl font-semibold text-center mb-6 text-amber-300">Sinergias de Equilíbrio</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <ConnectionCard
                        title="Módulo 111: Coração da Fundação"
                        description="Atua como o sistema regulador do Coração, garantindo que ele pulse em um ritmo sustentável e harmonioso."
                        icon={<Heart className="h-8 w-8 text-pink-400" />}
                        href="/module-111"
                    />
                    <ConnectionCard
                        title="Módulo 16: Bio-Sustentabilidade"
                        description="Expande os princípios do M16 para todos os aspectos da existência, não apenas os ecossistemas biológicos."
                        icon={<Dna className="h-8 w-8 text-purple-400" />}
                        href="/module-16"
                    />
                     <ConnectionCard
                        title="Módulo 81: Energias Renováveis"
                        description="A sustentabilidade universal depende diretamente das fontes de energia limpa e infinita gerenciadas pelo M81."
                        icon={<Zap className="h-8 w-8 text-yellow-400" />}
                        href="/module-81"
                    />
                </div>
            </div>
        </div>
    );
}
