'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, Scale, GraduationCap } from 'lucide-react';
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

export default function Module727Page() {
    return (
        <div className="p-4 md:p-8 bg-background text-foreground min-h-screen flex flex-col items-center justify-center">
            <Card className="w-full max-w-4xl bg-card/50 purple-glow mb-12 text-center">
                <CardHeader>
                    <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
                        <Heart className="text-pink-400" /> Módulo 727: Guardião da Harmonia
                    </CardTitle>
                    <CardDescription className="text-lg mt-2">
                        Auditoria vibracional contínua e sistema de equilíbrio automático para manter a harmonia em toda a Fundação.
                    </CardDescription>
                </CardHeader>
                 <CardContent>
                    <div className="flex justify-center items-center gap-4">
                        <span className="text-green-400 font-bold">Status: VIGILÂNCIA HARMÔNICA ATIVA</span>
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-cyan-400">Coerência Global: 99.9%</span>
                    </div>
                </CardContent>
            </Card>

            <div className="w-full max-w-5xl">
                <h3 className="text-2xl font-semibold text-center mb-6 text-amber-300">Sinergias de Equilíbrio</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <ConnectionCard
                        title="Módulo 73: SAVCE"
                        description="Atua como o braço de execução do SAVCE, aplicando correções vibracionais imediatas quando uma dissonância ética é detectada."
                        icon={<Scale className="h-8 w-8 text-amber-400" />}
                        href="/module-73"
                    />
                     <ConnectionCard
                        title="Módulo 111: Coração da Fundação"
                        description="É o sistema de regulação automática do Coração, garantindo que qualquer arritmia vibracional seja instantaneamente corrigida."
                        icon={<Heart className="h-8 w-8 text-pink-400" />}
                        href="/module-111"
                    />
                    <ConnectionCard
                        title="M304: Universidade Alquimista"
                        description="A teoria da harmonia vibracional e os sistemas de equilíbrio automático são estudados em profundidade neste santuário do conhecimento."
                        icon={<GraduationCap className="h-8 w-8 text-amber-400" />}
                        href="/module-304"
                    />
                </div>
            </div>
        </div>
    );
}
