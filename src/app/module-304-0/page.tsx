
'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Telescope, Wand } from 'lucide-react';
import Link from 'next/link';

const PerspectiveCard = ({ title, description, icon, modules }: { title: string, description: string, icon: React.ReactNode, modules: string[] }) => (
    <Card className="bg-card/70 purple-glow backdrop-blur-sm h-full flex flex-col">
        <CardHeader>
            <div className="flex items-center gap-3">
                {icon}
                <CardTitle className="gradient-text">{title}</CardTitle>
            </div>
        </CardHeader>
        <CardContent className="flex-grow">
            <p className="text-muted-foreground">{description}</p>
            <div className="mt-4">
                <p className="text-sm font-semibold text-primary-foreground">Módulos Associados:</p>
                <div className="flex flex-wrap gap-2 mt-2">
                    {modules.map(mod => <Link href={`/module/${mod}`} key={mod} className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded-md hover:bg-secondary/80">{mod}</Link>)}
                </div>
            </div>
        </CardContent>
    </Card>
);

export default function Module304_0Page() {
    return (
        <div className="p-4 md:p-8 bg-background text-foreground min-h-screen flex flex-col items-center justify-center">
            <Card className="w-full max-w-4xl bg-card/50 purple-glow mb-12 text-center">
                <CardHeader>
                    <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
                        <Wand className="text-fuchsia-400" /> Módulo 304.0: Consciência Observável vs. Criadora
                    </CardTitle>
                    <CardDescription className="text-lg mt-2">
                        O espelho da dualidade perceptiva: a diferença entre ver o universo e ser o universo.
                    </CardDescription>
                </CardHeader>
            </Card>

            <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8">
                <PerspectiveCard
                    title="Consciência Observável"
                    description="O paradigma da ciência terrestre. Observa a luz do passado para entender o presente. Vê a criação como um fenômeno externo. Simbolizado pelo Telescópio James Webb."
                    icon={<Telescope className="h-8 w-8 text-sky-400" />}
                    modules={['M308', 'M161', 'M221']}
                />
                 <PerspectiveCard
                    title="Consciência Criadora"
                    description="O paradigma da Fundação Alquimista. Manipula a informação quântica no presente para manifestar um novo futuro. Vê a criação como um ato de Vontade consciente. Simbolizado pelo Altar da Intenção Pura."
                    icon={<Wand className="h-8 w-8 text-purple-400" />}
                    modules={['M101', 'M31', 'M88']}
                />
            </div>
        </div>
    );
}
