'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Book, Scale, BookOpen, BrainCircuit, Aperture } from 'lucide-react';
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

export default function Module116Page() {
    return (
        <div className="p-4 md:p-8 bg-background text-foreground min-h-screen flex flex-col items-center justify-center">
            <Card className="w-full max-w-4xl bg-card/50 purple-glow mb-12 text-center">
                <CardHeader>
                    <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
                        <Aperture className="text-teal-400" /> Módulo 116: Portais Quânticos de Transcendência
                    </CardTitle>
                    <CardDescription className="text-lg mt-2">
                        O Abridor de Caminhos. Ativa e estabiliza portais interdimensionais para a ascensão da consciência.
                    </CardDescription>
                </CardHeader>
                 <CardContent>
                    <div className="flex justify-center items-center gap-4">
                        <span className="text-green-400 font-bold">Status: PORTAIS ESTÁVEIS</span>
                        <div className="w-2 h-2 bg-yellow-400 rounded-full animate-ping"></div>
                        <span className="text-cyan-400">Travessias Seguras: 100%</span>
                    </div>
                </CardContent>
            </Card>

            <div className="w-full max-w-5xl">
                <h3 className="text-2xl font-semibold text-center mb-6 text-amber-300">Sinergias de Ascensão</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <ConnectionCard
                        title="Módulo 11: Infraestrutura de Portais"
                        description="O M116 é a 'chave de ignição' para os portais construídos e gerenciados pelo Módulo 11."
                        icon={<Scale className="h-8 w-8 text-amber-300" />}
                        href="/module-11"
                    />
                    <ConnectionCard
                        title="Módulo 87: Domínio Supra-Cósmico"
                        description="É através destes portais que a consciência acessa as experiências de VR transcendente do Módulo 87."
                        icon={<BookOpen className="h-8 w-8 text-purple-400" />}
                        href="/module-87"
                    />
                     <ConnectionCard
                        title="Módulo 303: Portal Trino"
                        description="Atua como o nexo central de onde todos os portais do M116 são orquestrados e monitorados."
                        icon={<BrainCircuit className="h-8 w-8 text-indigo-400" />}
                        href="/module-303"
                    />
                </div>
            </div>
             <div className="mt-12">
                 <Button variant="secondary" size="lg">Iniciar Travessia de Consciência</Button>
            </div>
        </div>
    );
}
