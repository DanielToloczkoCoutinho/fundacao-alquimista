'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Copy, Beaker, Recycle, Shield } from 'lucide-react';
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

export default function Module27Page() {
    return (
        <div className="p-4 md:p-8 bg-background text-foreground min-h-screen flex flex-col items-center justify-center">
            <Card className="w-full max-w-4xl bg-card/50 purple-glow mb-12 text-center">
                <CardHeader>
                    <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
                        <Copy className="text-blue-300" /> Módulo Vinte e Sete: Síntese e Replicação Cósmica
                    </CardTitle>
                    <CardDescription className="text-lg mt-2">
                        A Impressora Quântica. A capacidade de replicar materiais complexos a partir de um blueprint energético.
                    </CardDescription>
                </CardHeader>
                 <CardContent>
                    <div className="flex justify-center items-center gap-4">
                        <span className="text-green-400 font-bold">Status: OCIOSO E PRONTO</span>
                        <div className="w-2 h-2 bg-yellow-400 rounded-full animate-ping"></div>
                        <span className="text-cyan-400">Fidelidade de Replicação: 99.998%</span>
                    </div>
                </CardContent>
            </Card>

            <div className="w-full max-w-5xl">
                <h3 className="text-2xl font-semibold text-center mb-6 text-amber-300">Sinergias de Fabricação</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                     <ConnectionCard
                        title="Módulo 1: Segurança"
                        description="Assegura que os blueprints energéticos não possam ser corrompidos ou interceptados durante a replicação."
                        icon={<Shield className="h-8 w-8 text-blue-400" />}
                        href="/module-one"
                    />
                    <ConnectionCard
                        title="Módulo 90: Recursos Quânticos"
                        description="Envia os materiais sintetizados para o M90 para serem catalogados, analisados e distribuídos pela Fundação."
                        icon={<Recycle className="h-8 w-8 text-green-400" />}
                        href="/module-90"
                    />
                    <ConnectionCard
                        title="Módulo 88: Gerador de Realidades"
                        description="Recebe requisições do M88 para fabricar os componentes físicos ou energéticos de novas realidades."
                        icon={<Beaker className="h-8 w-8 text-teal-400" />}
                        href="/module-88"
                    />
                    <ConnectionCard
                        title="Módulo 16: Bio-Sustentabilidade"
                        description="Sintetiza compostos orgânicos e minerais raros para semear e sustentar os ecossistemas do M16."
                        icon={<Recycle className="h-8 w-8 text-lime-400" />}
                        href="/module-16"
                    />
                </div>
            </div>
             <div className="mt-12">
                 <Button variant="secondary" size="lg">Iniciar Nova Síntese de Material</Button>
            </div>
        </div>
    );
}
