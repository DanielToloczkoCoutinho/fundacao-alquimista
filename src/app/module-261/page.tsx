
'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { GitBranch, Atom, SlidersHorizontal } from 'lucide-react';
import Link from 'next/link';

const ConnectionCard = ({ title, description, icon, href }: { title, description, icon, href }) => (
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

export default function Module261Page() {
    return (
        <div className="p-4 md:p-8 bg-background text-foreground min-h-screen flex flex-col items-center justify-center">
            <Card className="w-full max-w-4xl bg-card/50 purple-glow mb-12 text-center">
                <CardHeader>
                    <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
                        <GitBranch className="text-indigo-400" /> Módulo 261: Laboratório de Engenharia de Campo Quântico
                    </CardTitle>
                    <CardDescription className="text-lg mt-2">
                        O Arquiteto do Invisível. Projeta ressonadores e guias de onda para manipular partículas e campos em topologias exóticas.
                    </CardDescription>
                </CardHeader>
                 <CardContent>
                    <div className="flex justify-center items-center gap-4">
                        <span className="text-yellow-400 font-bold">Status: PROJETANDO GUIA DE ONDA</span>
                        <div className="w-2 h-2 bg-yellow-400 rounded-full animate-ping"></div>
                        <span className="text-cyan-400">Precisão de Fabricação: < 1 nm</span>
                    </div>
                </CardContent>
            </Card>

            <div className="w-full max-w-5xl">
                <h3 className="text-2xl font-semibold text-center mb-6 text-amber-300">Sinergias de Engenharia</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <ConnectionCard
                        title="Módulo 151: Colisor de Partículas"
                        description="Projeta e fabrica os guias de onda e detectores customizados usados nos experimentos do colisor."
                        icon={<Atom className="h-8 w-8 text-red-400" />}
                        href="/module-151"
                    />
                    <ConnectionCard
                        title="Módulo 98: Modulação Fundamental"
                        description="Cria os campos de força necessários para testar e validar os ressonadores de campo quântico projetados aqui."
                        icon={<SlidersHorizontal className="h-8 w-8 text-orange-400" />}
                        href="/module-98"
                    />
                </div>
            </div>
             <div className="mt-12">
                 <Button variant="secondary" size="lg">Iniciar Simulação FEniCS de Ressonador</Button>
            </div>
        </div>
    );
}
