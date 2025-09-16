'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Microscope, Dna, Recycle } from 'lucide-react';
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

export default function Module700Page() {
    return (
        <div className="p-4 md:p-8 bg-background text-foreground min-h-screen flex flex-col items-center justify-center">
            <Card className="w-full max-w-4xl bg-card/50 purple-glow mb-12 text-center">
                <CardHeader>
                    <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
                        <Microscope className="text-teal-400" /> Módulo 700: Nano-Assembler
                    </CardTitle>
                    <CardDescription className="text-lg mt-2">
                        A forja atômica. Auto-montagem de materiais exóticos e estruturas quânticas com precisão atômica.
                    </CardDescription>
                </CardHeader>
                 <CardContent>
                    <div className="flex justify-center items-center gap-4">
                        <span className="text-yellow-400 font-bold">Status: OCIOSO</span>
                        <div className="w-2 h-2 bg-yellow-400 rounded-full animate-ping"></div>
                        <span className="text-cyan-400">Precisão: Nível de Planck</span>
                    </div>
                </CardContent>
            </Card>

            <div className="w-full max-w-5xl">
                <h3 className="text-2xl font-semibold text-center mb-6 text-amber-300">Sinergias de Fabricação</span>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <ConnectionCard
                        title="Módulo 94: Morfogênese Quântica"
                        description="O Nano-Assembler é a ferramenta que constrói as estruturas genéticas complexas projetadas pelo M94."
                        icon={<Dna className="h-8 w-8 text-purple-400" />}
                        href="/module-94"
                    />
                    <ConnectionCard
                        title="Módulo 27: Síntese e Replicação"
                        description="Leva a replicação do M27 a um novo nível, permitindo não apenas a cópia, mas a construção de materiais totalmente novos."
                        icon={<Recycle className="h-8 w-8 text-green-400" />}
                        href="/module-27"
                    />
                </div>
            </div>
        </div>
    );
}
