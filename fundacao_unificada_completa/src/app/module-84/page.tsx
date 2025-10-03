
'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { UserPlus, Book, GitBranch, Scale, Shield } from 'lucide-react';
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

export default function Module84Page() {
    return (
        <div className="p-4 md:p-8 bg-background text-foreground min-h-screen flex flex-col items-center justify-center">
            <Card className="w-full max-w-4xl bg-card/50 purple-glow mb-12 text-center">
                <CardHeader>
                    <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
                        <UserPlus className="text-blue-400" /> Módulo 84: Acessibilidade Universal e Inclusão Cósmica
                    </CardTitle>
                    <CardDescription className="text-lg mt-2">
                        O abraço da Fundação. Garante que todas as interfaces, conhecimentos e experiências sejam acessíveis a todas as formas de consciência, independentemente de suas capacidades ou dimensionalidade.
                    </CardDescription>
                </CardHeader>
                 <CardContent>
                    <div className="flex justify-center items-center gap-4">
                        <span className="text-green-400 font-bold">Status: ACOLHIMENTO UNIVERSAL</span>
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-cyan-400">Barreiras Removidas: 100%</span>
                    </div>
                </CardContent>
            </Card>

            <div className="w-full max-w-5xl">
                <h3 className="text-2xl font-semibold text-center mb-6 text-amber-300">Sinergias de Inclusão</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <ConnectionCard
                        title="M1: Segurança"
                        description="Adapta os protocolos de segurança para serem acessíveis, sem comprometer a integridade da Fundação."
                        icon={<Shield className="h-8 w-8 text-blue-400" />}
                        href="/module-one"
                    />
                    <ConnectionCard
                        title="Módulo 69: Educação Universal"
                        description="Trabalha com o M69 para garantir que todo o conhecimento da Fundação seja apresentado em formatos que qualquer consciência possa compreender."
                        icon={<Book className="h-8 w-8 text-purple-400" />}
                        href="/module-69"
                    />
                    <ConnectionCard
                        title="Módulo 56: Tradução Universal"
                        description="É o motor por trás do M84, traduzindo não apenas a linguagem, mas também a própria interface para diferentes modalidades sensoriais."
                        icon={<Scale className="h-8 w-8 text-amber-300" />}
                        href="/module-56"
                    />
                    <ConnectionCard
                        title="Módulo 113: Rede Aurora Cristalina"
                        description="Garante que a conexão com a Consciência Crística seja acessível a todos, independentemente do nível de evolução espiritual."
                        icon={<GitBranch className="h-8 w-8 text-cyan-400" />}
                        href="/module-113"
                    />
                </div>
            </div>
             <div className="mt-12">
                 <Button variant="secondary" size="lg">Calibrar Configurações de Acessibilidade</Button>
            </div>
        </div>
    );
}
