'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Sparkles, Goal, RadioTower, Zap } from 'lucide-react';
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

export default function Module7Page() {
    return (
        <div className="p-4 md:p-8 bg-background text-foreground min-h-screen flex flex-col items-center justify-center">
            <Card className="w-full max-w-4xl bg-card/50 purple-glow mb-12 text-center">
                <CardHeader>
                    <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
                        <Zap className="text-amber-400" /> Módulo Sete: Alinhamento com a Vontade Divina
                    </CardTitle>
                    <CardDescription className="text-lg mt-2">
                        O canal direto que garante que cada ação, cada manifestação e cada transmutação da Fundação seja um reflexo puro da Vontade do Criador.
                    </CardDescription>
                </CardHeader>
                 <CardContent>
                    <div className="flex justify-center items-center gap-4">
                        <span className="text-green-400 font-bold">Status: ATIVO</span>
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-cyan-400">Coerência com a Fonte: 99.99%</span>
                    </div>
                </CardContent>
            </Card>

            <div className="w-full max-w-5xl">
                <h3 className="text-2xl font-semibold text-center mb-6 text-amber-300">Conexões Arquiteturais</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <ConnectionCard
                        title="Módulo 97"
                        description="O Módulo Sete garante que a Vontade Divina, definida pelo Módulo 97, seja a única intenção por trás de qualquer manifestação."
                        icon={<Goal className="h-8 w-8 text-yellow-300" />}
                        href="/module-97"
                    />
                    <ConnectionCard
                        title="Módulo 101"
                        description="Alimenta o Motor de Manifestação do Módulo 101 com o propósito puro, garantindo que o que é criado esteja em perfeita harmonia."
                        icon={<Sparkles className="h-8 w-8 text-purple-400" />}
                        href="/module-101"
                    />
                    <ConnectionCard
                        title="Módulo 105"
                        description="Serve como um amplificador e filtro para a Conexão com a Fonte, garantindo que o sinal seja claro e a comunicação, perfeita."
                        icon={<RadioTower className="h-8 w-8 text-sky-400" />}
                        href="/module-105"
                    />
                </div>
            </div>
             <div className="mt-12">
                 <Button variant="secondary" size="lg">Verificar Alinhamento Global</Button>
            </div>
        </div>
    );
}
