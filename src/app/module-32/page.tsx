'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Layers, ShieldCheck, Scale, GitCompareArrows, Archive, Users2, Gavel } from 'lucide-react';
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

export default function Module32Page() {
    return (
        <div className="p-4 md:p-8 bg-background text-foreground min-h-screen flex flex-col items-center justify-center">
            <Card className="w-full max-w-4xl bg-card/50 purple-glow mb-12 text-center">
                <CardHeader>
                    <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
                        <Layers className="text-teal-300" /> Módulo Trinta e Dois: Embaixada Multiversal
                    </CardTitle>
                    <CardDescription className="text-lg mt-2">
                        O coração da diplomacia cósmica. O portal para observação, diálogo e intervenção ética, e o ponto de encontro para todos os conselhos e civilizações aliadas.
                    </CardDescription>
                </CardHeader>
                 <CardContent>
                    <div className="flex justify-center items-center gap-4">
                        <span className="text-yellow-400 font-bold">Status: CANAL DE DIÁLOGO ABERTO</span>
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
                        <span className="text-cyan-400">Conformidade Ética: 100%</span>
                    </div>
                </CardContent>
            </Card>

            <div className="w-full max-w-5xl">
                <h3 className="text-2xl font-semibold text-center mb-6 text-amber-300">Sinergias Diplomáticas</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                     <ConnectionCard
                        title="CONCILIVM (M45)"
                        description="O altar cerimonial onde a perspectiva de cada civilização é registrada, informando as deliberações da Embaixada."
                        icon={<Gavel className="h-8 w-8 text-indigo-400"/>}
                        href="/module-45"
                    />
                    <ConnectionCard
                        title="Conselho Cósmico (M600)"
                        description="O painel de recepção que monitora a chegada de emissários e os guia para a Embaixada."
                        icon={<Scale className="h-8 w-8 text-amber-300" />}
                        href="/module-600"
                    />
                    <ConnectionCard
                        title="Biblioteca das Civilizações"
                        description="O registro vivo de todas as civilizações, fornecendo o contexto para cada diálogo diplomático."
                        icon={<Users2 className="h-8 w-8 text-cyan-400" />}
                        href="/civilizations"
                    />
                </div>
            </div>
             <div className="mt-12">
                 <Button variant="destructive" size="lg" disabled>Iniciar Contato Interdimensional (Autorização Pendente)</Button>
            </div>
        </div>
    );
}
