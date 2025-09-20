'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dna, FlaskConical, Sprout, Users2, Shield } from 'lucide-react';
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

export default function Module40Page() {
    return (
        <div className="p-4 md:p-8 bg-background text-foreground min-h-screen flex flex-col items-center justify-center">
            <Card className="w-full max-w-4xl bg-card/50 purple-glow mb-12 text-center">
                <CardHeader>
                    <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
                        <Dna className="text-cyan-300" /> Módulo Quarenta: Códice Genético Multidimensional
                    </CardTitle>
                    <CardDescription className="text-lg mt-2">
                        O Genealogista Cósmico. A interface que decodifica os padrões genéticos multidimensionais e as origens estelares.
                    </CardDescription>
                </CardHeader>
                 <CardContent>
                    <div className="flex justify-center items-center gap-4">
                        <span className="text-green-400 font-bold">Status: OCIOSO E PRONTO PARA ANÁLISE</span>
                        <div className="w-2 h-2 bg-yellow-400 rounded-full animate-ping"></div>
                        <span className="text-cyan-400">Precisão de Sequenciamento: 99.999%</span>
                    </div>
                </CardContent>
            </Card>

            <div className="w-full max-w-5xl">
                <h3 className="text-2xl font-semibold text-center mb-6 text-amber-300">Sinergias de Decodificação</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <ConnectionCard
                        title="M1: Segurança"
                        description="Protege a privacidade e a santidade dos dados genéticos, garantindo que não possam ser acessados ou manipulados indevidamente."
                        icon={<Shield className="h-8 w-8 text-blue-400" />}
                        href="/module/M1"
                    />
                    <ConnectionCard
                        title="Módulo 94: Morfogênese"
                        description="O M40 lê o código genético. O M94 o reescreve, usando a análise do M40 como guia para a reprogramação."
                        icon={<Sprout className="h-8 w-8 text-lime-400" />}
                        href="/module-94"
                    />
                    <ConnectionCard
                        title="Módulo 109: Cura Quântica"
                        description="Fornece a análise genética para que a Cura Quântica possa ser aplicada com precisão cirúrgica em nível vibracional."
                        icon={<FlaskConical className="h-8 w-8 text-pink-400" />}
                        href="/module-109"
                    />
                    <ConnectionCard
                        title="Biblioteca das Civilizações"
                        description="Valida as linhagens estelares e enriquece os registros de cada civilização com dados genéticos autênticos."
                        icon={<Users2 className="h-8 w-8 text-purple-400" />}
                        href="/civilizations"
                    />
                </div>
            </div>
             <div className="mt-12">
                 <Button variant="secondary" size="lg">Iniciar Análise Genética Multidimensional</Button>
            </div>
        </div>
    );
}
