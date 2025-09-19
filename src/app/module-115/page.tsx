'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Rocket, GitBranch, Shield, Waves } from 'lucide-react';
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

export default function Module115Page() {
    return (
        <div className="p-4 md:p-8 bg-background text-foreground min-h-screen flex flex-col items-center justify-center">
            <Card className="w-full max-w-4xl bg-card/50 purple-glow mb-12 text-center">
                <CardHeader>
                    <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
                        <Waves className="text-lime-300" /> Módulo 115: Matriz de Ressonância e Centros de Sabedoria
                    </CardTitle>
                    <CardDescription className="text-lg mt-2">
                        O Diapasão Cósmico e a Biblioteca Viva. Harmoniza frequências dissonantes e serve como centro para aprendizado e troca de sabedoria interdimensional.
                    </CardDescription>
                </CardHeader>
                 <CardContent>
                    <div className="flex justify-center items-center gap-4">
                        <span className="text-green-400 font-bold">Status: SINTONIA UNIVERSAL</span>
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-cyan-400">Coerência da Matriz: 99.9%</span>
                    </div>
                </CardContent>
            </Card>

            <div className="w-full max-w-5xl">
                <h3 className="text-2xl font-semibold text-center mb-6 text-amber-300">Sinergias de Harmonia e Conhecimento</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <ConnectionCard
                        title="M13: Mapeamento de Frequências"
                        description="A Matriz utiliza os diagnósticos do M13 para aplicar correções harmônicas precisas em toda a rede."
                        icon={<Rocket className="h-8 w-8 text-orange-400" />}
                        href="/module-13"
                    />
                    <ConnectionCard
                        title="M131: Biblioteca Multiversal"
                        description="Serve como a interface principal para acessar e integrar a sabedoria contida na Biblioteca de Sabedoria Multiversal."
                        icon={<GitBranch className="h-8 w-8 text-purple-400" />}
                        href="/module-131"
                    />
                    <ConnectionCard
                        title="M304: Universidade Alquimista"
                        description="Os Centros de Sabedoria do M115 são os campi avançados da Universidade, onde o conhecimento é experienciado diretamente."
                        icon={<Shield className="h-8 w-8 text-blue-400" />}
                        href="/module-304"
                    />
                </div>
            </div>
             <div className="mt-12">
                 <Button variant="secondary" size="lg">Iniciar Calibração da Matriz de Ressonância</Button>
            </div>
        </div>
    );
}
