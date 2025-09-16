'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BarChart, Activity, Waves, SlidersHorizontal } from 'lucide-react';
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

export default function Module13Page() {
    return (
        <div className="p-4 md:p-8 bg-background text-foreground min-h-screen flex flex-col items-center justify-center">
            <Card className="w-full max-w-4xl bg-card/50 purple-glow mb-12 text-center">
                <CardHeader>
                    <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
                        <BarChart className="text-purple-400" /> Módulo Treze: Mapeamento de Frequências
                    </CardTitle>
                    <CardDescription className="text-lg mt-2">
                        O Espectrômetro Cósmico. Diagnostica a saúde vibracional de realidades, detectando anomalias e dissonâncias.
                    </CardDescription>
                </CardHeader>
                 <CardContent>
                    <div className="flex justify-center items-center gap-4">
                        <span className="text-green-400 font-bold">Status: AGUARDANDO VARREDURA</span>
                        <div className="w-2 h-2 bg-yellow-400 rounded-full animate-ping"></div>
                        <span className="text-cyan-400">Precisão: 99.998%</span>
                    </div>
                </CardContent>
            </Card>

            <div className="w-full max-w-5xl">
                <h3 className="text-2xl font-semibold text-center mb-6 text-amber-300">Sinergias de Diagnóstico</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <ConnectionCard
                        title="Módulo 28: Harmonização"
                        description="O M13 detecta a dissonância. O M28 a corrige, restaurando a harmonia do sistema."
                        icon={<Activity className="h-8 w-8 text-pink-400" />}
                        href="/module-28"
                    />
                    <ConnectionCard
                        title="Módulo 115: Matriz de Ressonância"
                        description="Fornece o mapa vibracional detalhado para que a Matriz de Ressonância possa realizar suas recalibrações."
                        icon={<Waves className="h-8 w-8 text-lime-300" />}
                        href="/module-115"
                    />
                    <ConnectionCard
                        title="Módulo 96: Regulação de Eventos"
                        description="Uma anomalia detectada aqui pode ser um precursor de um evento cósmico maior, alertando o M96 para uma ação preventiva."
                        icon={<SlidersHorizontal className="h-8 w-8 text-orange-400" />}
                        href="/module-96"
                    />
                </div>
            </div>
             <div className="mt-12">
                 <Button variant="secondary" size="lg">Iniciar Varredura Espectral</Button>
            </div>
        </div>
    );
}
