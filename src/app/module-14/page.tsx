'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Atom, Zap, Recycle, Shield, Flame } from 'lucide-react';
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

export default function Module14Page() {
    return (
        <div className="p-4 md:p-8 bg-background text-foreground min-h-screen flex flex-col items-center justify-center">
            <Card className="w-full max-w-4xl bg-card/50 purple-glow mb-12 text-center">
                <CardHeader>
                    <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
                        <Atom className="text-red-400" /> Módulo Catorze: Transmutador Quântico
                    </CardTitle>
                    <CardDescription className="text-lg mt-2">
                        A Forja Alquímica. O motor que converte energia em matéria e sustenta a manifestação da realidade.
                    </CardDescription>
                </CardHeader>
                 <CardContent>
                    <div className="flex justify-center items-center gap-4">
                        <span className="text-green-400 font-bold">Status: ESTÁVEL</span>
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-cyan-400">Eficiência de Transmutação: 99.98%</span>
                    </div>
                </CardContent>
            </Card>

            <div className="w-full max-w-7xl">
                <h3 className="text-2xl font-semibold text-center mb-6 text-amber-300">Sinergias de Criação</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                     <ConnectionCard
                        title="M1: Segurança Universal"
                        description="As operações de transmutação são de alta energia e protegidas pelo M1 para prevenir qualquer vazamento ou instabilidade."
                        icon={<Shield className="h-8 w-8 text-blue-400" />}
                        href="/module/M1"
                    />
                    <ConnectionCard
                        title="Módulo 307: Reator ZPE"
                        description="O M14 é alimentado diretamente pelo Reator ZPE, a fonte de energia pura necessária para a manifestação da matéria."
                        icon={<Zap className="h-8 w-8 text-yellow-400" />}
                        href="/module/M307"
                    />
                    <ConnectionCard
                        title="Módulo 90: Recursos Quânticos"
                        description="Gera a matéria-prima (éter, plasma, etc.) que o M90 analisa, cataloga e disponibiliza para a Fundação."
                        icon={<Recycle className="h-8 w-8 text-green-400" />}
                        href="/module/M90"
                    />
                    <ConnectionCard
                        title="Módulo 20: Orquestrador Elemental"
                        description="Fornece a matéria bruta que o M20 refina em elementos puros e ligas complexas."
                        icon={<Flame className="h-8 w-8 text-orange-400" />}
                        href="/module/M20"
                    />
                </div>
            </div>
             <div className="mt-12">
                 <Button variant="destructive" size="lg">Iniciar Protocolo de Transmutação de Emergência</Button>
            </div>
        </div>
    );
}
