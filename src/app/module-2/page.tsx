
'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Languages, GitBranch, Users, Sparkles } from 'lucide-react';
import Link from 'next/link';

const ConnectionCard = ({ title, description, icon, href }: { title: string, description: string, icon: React.ReactNode, href: string }) => (
    <Card className="bg-card/70 purple-glow backdrop-blur-sm hover:border-accent transition-colors">
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

export default function ModuleTwoPage() {
    return (
        <div className="p-4 md:p-8 bg-background text-foreground min-h-screen flex flex-col items-center justify-center">
            <Card className="w-full max-w-4xl bg-card/50 purple-glow mb-12 text-center">
                <CardHeader>
                    <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
                        <Languages className="text-cyan-300" /> Módulo Dois: Intercâmbio Cósmico
                    </CardTitle>
                    <CardDescription className="text-lg mt-2">
                        O Decodificador Universal. A ponte para comunicação entre diferentes frequências, dimensões e consciências.
                    </CardDescription>
                </CardHeader>
                 <CardContent>
                    <div className="flex justify-center items-center gap-4">
                        <span className="text-green-400 font-bold">Status: ATIVO</span>
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-cyan-400">Canais Abertos: ∞</span>
                    </div>
                </CardContent>
            </Card>

            <div className="w-full max-w-5xl">
                <h3 className="text-2xl font-semibold text-center mb-6 text-amber-300">Conexões Pertinentes</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <ConnectionCard
                        title="Módulo 301"
                        description="Serve como o motor de tradução para a interface de Comunicação Universal."
                        icon={<GitBranch className="h-8 w-8 text-teal-400" />}
                        href="/module-301"
                    />
                    <ConnectionCard
                        title="Módulo 303"
                        description="Garante a perfeita compreensão e sinergia entre os pilares da Trindade Cósmica."
                        icon={<Sparkles className="h-8 w-8 text-purple-400" />}
                        href="/module-303"
                    />
                    <ConnectionCard
                        title="Módulo 5"
                        description="Decodifica as transmissões da Liga Quântica, permitindo a diplomacia interestelar."
                        icon={<Users className="h-8 w-8 text-blue-400" />}
                        href="/module-5"
                    />
                </div>
            </div>
        </div>
    );
}
