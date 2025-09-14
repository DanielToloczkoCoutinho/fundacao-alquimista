'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Gavel, Scale, ShieldCheck, Users } from 'lucide-react';
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

export default function Module45Page() {
    return (
        <div className="p-4 md:p-8 bg-background text-foreground min-h-screen flex flex-col items-center justify-center">
            <Card className="w-full max-w-4xl bg-card/50 purple-glow mb-12 text-center">
                <CardHeader>
                    <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
                        <Gavel className="text-indigo-300" /> Módulo Quarenta e Cinco: CONCILIVM
                    </CardTitle>
                    <CardDescription className="text-lg mt-2">
                        O Plenário Cósmico. A interface para o processo de deliberação e governança universal pelo Conselho Cósmico.
                    </CardDescription>
                </CardHeader>
                 <CardContent>
                    <div className="flex justify-center items-center gap-4">
                        <span className="text-yellow-400 font-bold">Status: AGUARDANDO PROPOSTA</span>
                        <div className="w-2 h-2 bg-yellow-400 rounded-full animate-ping"></div>
                        <span className="text-cyan-400">Decretos Ativos: 0</span>
                    </div>
                </CardContent>
            </Card>

            <div className="w-full max-w-5xl">
                <h3 className="text-2xl font-semibold text-center mb-6 text-amber-300">Sinergias de Governança</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <ConnectionCard
                        title="Módulo 600: Conselho Cósmico"
                        description="O CONCILIVM é a câmara onde o Conselho Cósmico (M600) se reúne para debater, votar e manifestar sua vontade."
                        icon={<Users className="h-8 w-8 text-purple-400" />}
                        href="/module-600"
                    />
                    <ConnectionCard
                        title="Módulo 144: Lex Fundamentalis"
                        description="As decisões tomadas aqui são ratificadas e se tornam leis imutáveis, registradas no contrato mestre do M144."
                        icon={<Scale className="h-8 w-8 text-amber-300" />}
                        href="/module-144"
                    />
                    <ConnectionCard
                        title="Módulo 73: SAVCE"
                        description="Nenhuma proposta chega a este plenário sem antes ser rigorosamente auditada e validada pelo SAVCE."
                        icon={<ShieldCheck className="h-8 w-8 text-green-400" />}
                        href="/module-73"
                    />
                </div>
            </div>
             <div className="mt-12">
                 <Button variant="secondary" size="lg">Submeter Nova Proposta ao CONCILIVM</Button>
            </div>
        </div>
    );
}
