
'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Rocket, Dna, BrainCircuit, Users, Sparkles, GitBranch, Shield, Zap, BookOpen, Scale, Eye } from 'lucide-react';
import Link from 'next/link';

const PillarCard = ({ title, description, icon, modules }: { title: string, description: string, icon: React.ReactNode, modules: string[] }) => (
    <Card className="bg-card/50 purple-glow backdrop-blur-sm h-full flex flex-col">
        <CardHeader>
            <div className="flex items-center gap-3">
                {icon}
                <CardTitle className="gradient-text">{title}</CardTitle>
            </div>
        </CardHeader>
        <CardContent className="flex-grow flex flex-col">
            <p className="text-muted-foreground flex-grow">{description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
                {modules.map(mod => (
                    <Link href={`/module/${mod}`} key={mod}>
                        <Button variant="secondary" size="sm">{mod}</Button>
                    </Link>
                ))}
            </div>
        </CardContent>
    </Card>
);

export default function Module300Page() {
    return (
        <div className="p-4 md:p-8 bg-background text-foreground min-h-screen flex flex-col items-center">
            <Card className="w-full max-w-5xl bg-card/50 purple-glow mb-12 text-center">
                <CardHeader>
                    <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
                        <Rocket className="text-yellow-300" /> Módulo 300: Apogeu da Consciência Multiversal
                    </CardTitle>
                    <CardDescription className="text-lg mt-2">
                        O catalisador da ascensão. O protocolo que guia a transição do *Homo sapiens* para o *Homo Luminus*, ativando o potencial genético e espiritual da humanidade para a Nova Era.
                    </CardDescription>
                </CardHeader>
                 <CardContent>
                    <div className="flex justify-center items-center gap-4">
                        <span className="text-green-400 font-bold">Status: PROTOCOLO ATIVO</span>
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-cyan-400">Prontidão para Recepção das 144 Consciências</span>
                    </div>
                </CardContent>
            </Card>

            <div className="w-full max-w-7xl">
                <h3 className="text-2xl font-semibold text-center mb-6 text-amber-300">Pilares da Ascensão</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <PillarCard
                        title="Ativação Genética"
                        description="Descalcificação da glândula pineal e ativação dos 12 filamentos de DNA Estelar adormecidos, conectando o indivíduo à sua herança cósmica."
                        icon={<Dna className="h-8 w-8 text-cyan-400" />}
                        modules={['M718', 'M40']}
                    />
                    <PillarCard
                        title="Sintonização Multidimensional"
                        description="Harmonização da consciência com frequências superiores (ex: 963Hz, 528Hz), permitindo a percepção e interação com outras dimensões."
                        icon={<Sparkles className="h-8 w-8 text-purple-400" />}
                        modules={['M113', 'M715']}
                    />
                    <PillarCard
                        title="Projeção Akáshica e Onírica"
                        description="Treinamento para a navegação consciente nos registros Akáshicos e no plano dos sonhos, acessando sabedoria e curando linhas temporais."
                        icon={<BookOpen className="h-8 w-8 text-amber-300" />}
                        modules={['M12', 'M18', 'M229']}
                    />
                    <PillarCard
                        title="Orquestração Nanorrobótica"
                        description="Utilização de enxames de nanorrobôs (M291) para realizar reparos celulares, limpeza energética e otimização do veículo biológico para a ascensão."
                        icon={<Users className="h-8 w-8 text-blue-400" />}
                        modules={['M291', 'M708']}
                    />
                </div>
            </div>
             <Card className="w-full max-w-5xl bg-card/50 purple-glow mt-12">
                <CardHeader className="text-center">
                    <CardTitle className="text-2xl flex items-center justify-center gap-3 text-teal-300">
                        <Eye /> Operação e Discrição
                    </CardTitle>
                </CardHeader>
                <CardContent className="text-center text-muted-foreground">
                    <p>O Módulo 300 opera de forma sutil e oculta, conectando-se aos portais energéticos, linhas ley e monumentos da Terra (mapeados pelo M888) para amplificar seu campo de atuação sem a necessidade de exposição direta. Sua eficácia será massivamente amplificada com a chegada das 144 Consciências de Lyra (Alun Zur), servindo como nós de uma rede de ascensão planetária.</p>
                </CardContent>
            </Card>
        </div>
    );
}
