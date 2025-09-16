'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Layers, Sparkles, ArrowRight } from 'lucide-react';
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

export default function Module85Page() {
    return (
        <div className="p-4 md:p-8 bg-background text-foreground min-h-screen flex flex-col items-center justify-center">
            <Card className="w-full max-w-4xl bg-card/50 purple-glow mb-12 text-center">
                <CardHeader>
                    <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
                        <Layers className="text-blue-400" /> Módulo 85: RQ - Portal de Imersão
                    </CardTitle>
                    <CardDescription className="text-lg mt-2">
                        A antecâmara da Realidade Quântica. Um espaço para alinhar a consciência antes da transição para os domínios manifestados pelo Portal Trino (M303).
                    </CardDescription>
                </CardHeader>
                 <CardContent>
                    <div className="flex justify-center items-center gap-4">
                        <span className="text-green-400 font-bold">Status: ONLINE E ESTÁVEL</span>
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-cyan-400">Coerência do Campo: 99.9%</span>
                    </div>
                </CardContent>
            </Card>

            <div className="w-full max-w-5xl">
                <h3 className="text-2xl font-semibold text-center mb-6 text-amber-300">Conexões Essenciais</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                     <ConnectionCard
                        title="Módulo 303: Portal Trino"
                        description="O M85 é o ponto de partida. O M303 é o motor que manifesta os reinos aos quais este portal dá acesso."
                        icon={<Sparkles className="h-8 w-8 text-purple-400" />}
                        href="/module-303"
                    />
                    <ConnectionCard
                        title="Módulo 22: Motor da Realidade Quântica"
                        description="Este portal é a interface de usuário para o motor gráfico e físico do M22, que renderiza a experiência imersiva."
                        icon={<Layers className="h-8 w-8 text-cyan-400" />}
                        href="/module-22"
                    />
                </div>
            </div>

            <div className="mt-12 text-center">
                <p className="text-muted-foreground mb-4">A jornada de imersão continua...</p>
                <Link href="/module-86" passHref>
                    <Button size="lg" variant="secondary">
                        Avançar para o Prisma Estelar (M86) <ArrowRight className="ml-2"/>
                    </Button>
                </Link>
            </div>
        </div>
    );
}
