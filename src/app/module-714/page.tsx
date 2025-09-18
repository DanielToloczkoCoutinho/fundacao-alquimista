
'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Globe, GitBranch, Waves, GraduationCap } from 'lucide-react';
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

export default function Module714Page() {
    return (
        <div className="p-4 md:p-8 bg-background text-foreground min-h-screen flex flex-col items-center justify-center">
            <Card className="w-full max-w-4xl bg-card/50 purple-glow mb-12 text-center">
                <CardHeader>
                    <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
                        <Globe className="text-emerald-400" /> Módulo 714: Comunicação Telúrica
                    </CardTitle>
                    <CardDescription className="text-lg mt-2">
                        Permite a comunicação e a harmonização com as redes energéticas da Terra, como linhas ley e o núcleo cristalino de Gaia.
                    </CardDescription>
                </CardHeader>
                 <CardContent>
                    <div className="flex justify-center items-center gap-4">
                        <span className="text-green-400 font-bold">Status: CONECTADO A GAIA</span>
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-cyan-400">Coerência com a Grade: 99.3%</span>
                    </div>
                </CardContent>
            </Card>

            <div className="w-full max-w-5xl">
                <h3 className="text-2xl font-semibold text-center mb-6 text-amber-300">Sinergias Planetárias</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <ConnectionCard
                        title="Módulo 709: Rede Planetária"
                        description="Fornece os dados sobre o estado da grade telúrica para que o M709 possa realizar reparos e otimizações."
                        icon={<GitBranch className="h-8 w-8 text-cyan-400" />}
                        href="/module-709"
                    />
                    <ConnectionCard
                        title="Módulo 580 (Nagas): Guardiões Aquáticos"
                        description="Atua como a ponte de comunicação entre a Fundação e as consciências guardiãs dos reinos subterrâneos e aquáticos."
                        icon={<Waves className="h-8 w-8 text-blue-400" />}
                        href="/civilizations"
                    />
                     <ConnectionCard
                        title="M304: Universidade Alquimista"
                        description="O estudo das linhas ley e da consciência de Gaia é um tópico avançado no Domínio de Ciências Multidimensionais."
                        icon={<GraduationCap className="h-8 w-8 text-amber-400" />}
                        href="/module-304"
                    />
                </div>
            </div>
        </div>
    );
}
 