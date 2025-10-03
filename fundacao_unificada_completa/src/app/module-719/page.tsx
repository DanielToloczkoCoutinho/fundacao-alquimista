'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CloudSun, SlidersHorizontal, Sun, GraduationCap } from 'lucide-react';
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

export default function Module719Page() {
    return (
        <div className="p-4 md:p-8 bg-background text-foreground min-h-screen flex flex-col items-center justify-center">
            <Card className="w-full max-w-4xl bg-card/50 purple-glow mb-12 text-center">
                <CardHeader>
                    <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
                        <CloudSun className="text-orange-400" /> Módulo 719: Regulação Climática Quântica
                    </CardTitle>
                    <CardDescription className="text-lg mt-2">
                        Equilibra padrões climáticos planetários através da manipulação de campos de energia e ressonância atmosférica. A integração com a Sinfonia Cósmica manifestada.
                    </CardDescription>
                </CardHeader>
                 <CardContent>
                    <div className="flex justify-center items-center gap-4">
                        <span className="text-green-400 font-bold">Status: EQUILÍBRIO HARMÔNICO</span>
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-cyan-400">Estabilidade Climática: 99.6%</span>
                    </div>
                </CardContent>
            </Card>

            <div className="w-full max-w-5xl">
                <h3 className="text-2xl font-semibold text-center mb-6 text-amber-300">Sinergias de Sustentabilidade</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <ConnectionCard
                        title="Módulo 15: Jardineiro Cósmico"
                        description="É a ferramenta primária do M15, permitindo a intervenção precisa para proteger e nutrir ecossistemas."
                        icon={<SlidersHorizontal className="h-8 w-8 text-blue-400" />}
                        href="/module-15"
                    />
                    <ConnectionCard
                        title="Módulo 38: Previsão de Ciclos Solares"
                        description="Usa as previsões do M38 para se antecipar a tempestades solares, ajustando a magnetosfera planetária para proteção."
                        icon={<Sun className="h-8 w-8 text-yellow-400" />}
                        href="/module-38"
                    />
                     <ConnectionCard
                        title="M304: Universidade Alquimista"
                        description="A engenharia climática quântica é um campo de estudo prático e teórico na Universidade Alquimista."
                        icon={<GraduationCap className="h-8 w-8 text-amber-400" />}
                        href="/module-304"
                    />
                </div>
            </div>
        </div>
    );
}
