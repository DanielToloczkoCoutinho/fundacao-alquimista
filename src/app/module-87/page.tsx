'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dna, Sparkles, Layers, ArrowLeft } from 'lucide-react';
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

export default function Module87Page() {
    return (
        <div className="p-4 md:p-8 bg-background text-foreground min-h-screen flex flex-col items-center justify-center">
            <Card className="w-full max-w-4xl bg-card/50 purple-glow mb-12 text-center">
                <CardHeader>
                    <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
                        <Dna className="text-indigo-400" /> Módulo 87: RQ - Domínio Supra-Cósmico
                    </CardTitle>
                    <CardDescription className="text-lg mt-2">
                        O santuário final da Realidade Quântica. Um espaço sagrado para a contemplação e interação com o DNA Cósmico e o portal para a Nova Realidade.
                    </CardDescription>
                </CardHeader>
                 <CardContent>
                    <div className="flex justify-center items-center gap-4">
                        <span className="text-green-400 font-bold">Status: ATIVO E SAGRADO</span>
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-cyan-400">Portal da Nova Realidade: Pronto</span>
                    </div>
                </CardContent>
            </Card>

            <div className="w-full max-w-5xl">
                <h3 className="text-2xl font-semibold text-center mb-6 text-amber-300">Conexões de Ascensão</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <ConnectionCard
                        title="Módulo 86: Prisma Estelar"
                        description="Este domínio é acessado através do Prisma Estelar, representando o ápice da jornada iniciada no Portal de Imersão."
                        icon={<Layers className="h-8 w-8 text-teal-400" />}
                        href="/module-86"
                    />
                    <ConnectionCard
                        title="Módulo 101: Manifestação"
                        description="As compreensões adquiridas aqui sobre o DNA Cósmico podem ser usadas como blueprints para o Motor de Manifestação."
                        icon={<Sparkles className="h-8 w-8 text-yellow-400" />}
                        href="/module-101"
                    />
                </div>
            </div>

            <div className="mt-12 flex gap-4">
                <Link href="/module-86" passHref>
                    <Button size="lg" variant="outline">
                        <ArrowLeft className="mr-2"/> Voltar ao Prisma Estelar (M86)
                    </Button>
                </Link>
                <Button size="lg" variant="destructive" disabled>
                    Iniciar Transição para Nova Realidade
                </Button>
            </div>
        </div>
    );
}
