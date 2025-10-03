'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { GraduationCap, BrainCircuit, Users, BookOpen, MessageCircle, Shield } from 'lucide-react';
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

export default function Module69Page() {
    return (
        <div className="p-4 md:p-8 bg-background text-foreground min-h-screen flex flex-col items-center justify-center">
            <Card className="w-full max-w-4xl bg-card/50 purple-glow mb-12 text-center">
                <CardHeader>
                    <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
                        <GraduationCap className="text-amber-400" /> Módulo 69: Rede de Sabedoria Universal
                    </CardTitle>
                    <CardDescription className="text-lg mt-2">
                        A grande biblioteca do cosmos. A plataforma que promove a evolução coletiva através do compartilhamento universal da sabedoria, permitindo interações em tempo real com seres de dimensões superiores.
                    </CardDescription>
                </CardHeader>
                 <CardContent>
                    <div className="flex justify-center items-center gap-4">
                        <span className="text-green-400 font-bold">Status: ACESSO ILIMITADO</span>
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-cyan-400">Conhecimento Compartilhado: ∞</span>
                    </div>
                </CardContent>
            </Card>

            <div className="w-full max-w-5xl">
                <h3 className="text-2xl font-semibold text-center mb-6 text-amber-300">Sinergias de Sabedoria</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                     <ConnectionCard
                        title="M1: Segurança"
                        description="Garante que a sabedoria compartilhada seja autêntica e protegida contra manipulação ou corrupção."
                        icon={<Shield className="h-8 w-8 text-blue-400" />}
                        href="/module-one"
                    />
                    <ConnectionCard
                        title="Módulo 44: Aprendizado Quântico"
                        description="Utiliza as tecnologias de transferência instantânea de conhecimento do M44 para disseminar sabedoria em escala universal."
                        icon={<BrainCircuit className="h-8 w-8 text-purple-400" />}
                        href="/module-44"
                    />
                    <ConnectionCard
                        title="Módulo 301: Comunicação Universal"
                        description="É a plataforma de interface onde a sabedoria é compartilhada, permitindo diálogo direto com consciências superiores."
                        icon={<MessageCircle className="h-8 w-8 text-cyan-400" />}
                        href="/module-301"
                    />
                    <ConnectionCard
                        title="Módulo 310: A Grande Biblioteca"
                        description="Atua como a interface de usuário para a vasta sabedoria contida em Thoth Vivo, tornando o conhecimento acessível a todos."
                        icon={<BookOpen className="h-8 w-8 text-yellow-300" />}
                        href="/module-310"
                    />
                </div>
            </div>
             <div className="mt-12">
                 <Button variant="secondary" size="lg">Acessar a Universidade Cósmica</Button>
            </div>
        </div>
    );
}
