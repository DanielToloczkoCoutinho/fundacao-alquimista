
'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { GitBranch, Layers } from 'lucide-react';
import Link from 'next/link';

const DimensionTier = ({ title, count, description, color }: { title: string, count: number, description: string, color: string }) => (
    <Card className={`bg-background/30 border-${color}-500/50`}>
        <CardHeader>
            <CardTitle className={`text-xl text-${color}-300`}>{title}</CardTitle>
            <CardDescription>{count} Dimensões Mapeadas</CardDescription>
        </CardHeader>
        <CardContent>
            <p className="text-muted-foreground">{description}</p>
        </CardContent>
    </Card>
);

export default function Module303_9Page() {
    return (
        <div className="p-4 md:p-8 bg-background text-foreground min-h-screen flex flex-col items-center justify-center">
            <Card className="w-full max-w-4xl bg-card/50 purple-glow mb-12 text-center">
                <CardHeader>
                    <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
                        <GitBranch className="text-cyan-400" /> Módulo 303.9: Mapa Dimensional Expandido
                    </CardTitle>
                    <CardDescription className="text-lg mt-2">
                        O atlas da Fundação, registrando a arquitetura de 26 dimensões superiores e 3 inferiores, cada uma com suas próprias leis e frequências.
                    </CardDescription>
                </CardHeader>
            </Card>

            <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-8">
                <DimensionTier 
                    title="Dimensões Superiores"
                    count={26}
                    description="Reinos de consciência pura, geometria sagrada e potencial ilimitado. Acessíveis através de meditação profunda e protocolos de ascensão."
                    color="sky"
                />
                <DimensionTier 
                    title="Dimensões Centrais"
                    count={3}
                    description="O plano físico (3D), o plano astral/emocional (4D) e o plano mental/arquetípico (5D), onde a experiência encarnada se desdobra."
                    color="emerald"
                />
                <DimensionTier 
                    title="Dimensões Inferiores"
                    count={3}
                    description="Reinos de densidade e matéria primordial, os alicerces não manifestos da estrutura física do universo. Não são 'maus', apenas menos complexos."
                    color="amber"
                />
            </div>
        </div>
    );
}
