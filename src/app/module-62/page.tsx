'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, Hospital, BrainCircuit, Music } from 'lucide-react';
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

export default function Module62Page() {
    return (
        <div className="p-4 md:p-8 bg-background text-foreground min-h-screen flex flex-col items-center justify-center">
            <Card className="w-full max-w-4xl bg-card/50 purple-glow mb-12 text-center">
                <CardHeader>
                    <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
                        <Heart className="text-pink-500" /> Módulo 62: Bem-Estar Integral e Energético
                    </CardTitle>
                    <CardDescription className="text-lg mt-2">
                        O santuário da alma. O módulo que promove o equilíbrio mental, emocional e espiritual para uma vida plena e harmoniosa.
                    </CardDescription>
                </CardHeader>
                 <CardContent>
                    <div className="flex justify-center items-center gap-4">
                        <span className="text-green-400 font-bold">Status: VIBRANDO EM HARMONIA</span>
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-cyan-400">Nível de Paz Interior: 99.7%</span>
                    </div>
                </CardContent>
            </Card>

            <div className="w-full max-w-5xl">
                <h3 className="text-2xl font-semibold text-center mb-6 text-amber-300">Sinergias do Equilíbrio</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <ConnectionCard
                        title="Módulo 61: Saúde Universal"
                        description="Trabalha em conjunto com o M61 para uma abordagem de saúde verdadeiramente holística, tratando corpo, mente e espírito como um só."
                        icon={<Hospital className="h-8 w-8 text-red-400" />}
                        href="/module-61"
                    />
                    <ConnectionCard
                        title="Módulo 302: Frequência do Amor"
                        description="Utiliza a frequência de 528Hz como a principal ferramenta terapêutica para curar traumas emocionais e restaurar a paz interior."
                        icon={<Music className="h-8 w-8 text-purple-400" />}
                        href="/module-302"
                    />
                    <ConnectionCard
                        title="Módulo 102: Campos Morfogenéticos"
                        description="Cria campos morfogenéticos de serenidade e clareza mental, ambientes onde a cura emocional é acelerada."
                        icon={<BrainCircuit className="h-8 w-8 text-cyan-400" />}
                        href="/module-102"
                    />
                </div>
            </div>
             <div className="mt-12">
                 <Button variant="secondary" size="lg">Iniciar Sessão de Alinhamento Energético</Button>
            </div>
        </div>
    );
}
