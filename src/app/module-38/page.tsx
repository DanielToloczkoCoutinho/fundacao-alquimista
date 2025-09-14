'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Sun, Shield, Zap, SlidersHorizontal } from 'lucide-react';
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

export default function Module38Page() {
    return (
        <div className="p-4 md:p-8 bg-background text-foreground min-h-screen flex flex-col items-center justify-center">
            <Card className="w-full max-w-4xl bg-card/50 purple-glow mb-12 text-center">
                <CardHeader>
                    <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
                        <Sun className="text-yellow-300" /> Módulo Trinta e Oito: Previsão Harmônica de Ciclos Solares
                    </CardTitle>
                    <CardDescription className="text-lg mt-2">
                        O Observatório Cósmico. Antecipa e influencia harmonicamente eventos em escala estelar para alinhar o cosmos com a Vontade Divina.
                    </CardDescription>
                </CardHeader>
                 <CardContent>
                    <div className="flex justify-center items-center gap-4">
                        <span className="text-green-400 font-bold">Status: MONITORAMENTO ATIVO</span>
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-cyan-400">Próximo Pico Solar Previsto: 2025-Q4</span>
                    </div>
                </CardContent>
            </Card>

            <div className="w-full max-w-5xl">
                <h3 className="text-2xl font-semibold text-center mb-6 text-amber-300">Sinergias de Previsão</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <ConnectionCard
                        title="Módulo 15: Jardineiro Cósmico"
                        description="Alerta o M15 sobre tempestades solares, permitindo o reforço dos escudos atmosféricos para proteger os biomas."
                        icon={<Shield className="h-8 w-8 text-blue-400" />}
                        href="/module-15"
                    />
                    <ConnectionCard
                        title="Módulo 307: Reator ZPE"
                        description="Informa o M307 sobre picos de energia cósmica, permitindo a colheita energética ou a proteção da LuxNet."
                        icon={<Zap className="h-8 w-8 text-yellow-400" />}
                        href="/module-307"
                    />
                    <ConnectionCard
                        title="Módulo 96: Regulação de Eventos"
                        description="Serve como o sistema de alerta antecipado para que o M96 possa preparar medidas de estabilização da realidade."
                        icon={<SlidersHorizontal className="h-8 w-8 text-orange-400" />}
                        href="/module-96"
                    />
                </div>
            </div>
             <div className="mt-12">
                 <Button variant="secondary" size="lg">Acessar Telescópio Harmônico</Button>
            </div>
        </div>
    );
}
