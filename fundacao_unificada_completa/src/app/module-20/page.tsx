'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Flame, Beaker, Recycle, Sprout, Shield } from 'lucide-react';
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

export default function Module20Page() {
    return (
        <div className="p-4 md:p-8 bg-background text-foreground min-h-screen flex flex-col items-center justify-center">
            <Card className="w-full max-w-4xl bg-card/50 purple-glow mb-12 text-center">
                <CardHeader>
                    <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
                        <Flame className="text-orange-400" /> Módulo Vinte: Orquestrador Elemental
                    </CardTitle>
                    <CardDescription className="text-lg mt-2">
                        O Artesão Cósmico. A capacidade de transmutar matéria em seus componentes elementais e recombiná-los para forjar novas substâncias.
                    </CardDescription>
                </CardHeader>
                 <CardContent>
                    <div className="flex justify-center items-center gap-4">
                        <span className="text-green-400 font-bold">Status: OCIOSO E PRONTO</span>
                        <div className="w-2 h-2 bg-yellow-400 rounded-full animate-ping"></div>
                        <span className="text-cyan-400">Eficiência de Transmutação: 99.99%</span>
                    </div>
                </CardContent>
            </Card>

            <div className="w-full max-w-5xl">
                <h3 className="text-2xl font-semibold text-center mb-6 text-amber-300">Sinergias de Alquimia</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                     <ConnectionCard
                        title="M1: Segurança"
                        description="As transmutações de alta energia são contidas por escudos do M1, garantindo a segurança de toda a Fundação durante o processo."
                        icon={<Shield className="h-8 w-8 text-blue-400" />}
                        href="/module/M1"
                    />
                    <ConnectionCard
                        title="Módulo 14: Transmutador Quântico"
                        description="O M14 cria a energia/matéria primordial. O M20 a refina, transformando-a nos elementos específicos necessários para a Criação."
                        icon={<Beaker className="h-8 w-8 text-teal-400" />}
                        href="/module-14"
                    />
                    <ConnectionCard
                        title="Módulo 90: Recursos Quânticos"
                        description="Após a transmutação elemental, o M20 envia os novos recursos para serem catalogados e disponibilizados pelo M90."
                        icon={<Recycle className="h-8 w-8 text-green-400" />}
                        href="/module-90"
                    />
                    <ConnectionCard
                        title="Módulo 16: Biossíntese"
                        description="Sintetiza compostos orgânicos e minerais raros para semear e sustentar os ecossistemas do M16."
                        icon={<Sprout className="h-8 w-8 text-lime-400" />}
                        href="/module-16"
                    />
                </div>
            </div>
             <div className="mt-12">
                 <Button variant="secondary" size="lg">Iniciar Nova Síntese Elemental</Button>
            </div>
        </div>
    );
}
