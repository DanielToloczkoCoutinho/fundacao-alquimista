
'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Globe, Leaf, Recycle, Wind, Shield, Sprout } from 'lucide-react';
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

export default function Module58Page() {
    return (
        <div className="p-4 md:p-8 bg-background text-foreground min-h-screen flex flex-col items-center justify-center">
            <Card className="w-full max-w-4xl bg-card/50 purple-glow mb-12 text-center">
                <CardHeader>
                    <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
                        <Globe className="text-green-500" /> Módulo 58: Proteção e Sustentabilidade Planetária
                    </CardTitle>
                    <CardDescription className="text-lg mt-2">
                        O guardião de Gaia. A tecnologia que previne a degradação, regenera habitats e garante a economia circular em escala planetária.
                    </CardDescription>
                </CardHeader>
                 <CardContent>
                    <div className="flex justify-center items-center gap-4">
                        <span className="text-green-400 font-bold">Status: EQUILÍBRIO ATIVO</span>
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-cyan-400">Biodiversidade: Estável</span>
                    </div>
                </CardContent>
            </Card>

            <div className="w-full max-w-5xl">
                <h3 className="text-2xl font-semibold text-center mb-6 text-amber-300">Sinergias Ecológicas</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                     <ConnectionCard
                        title="M1: Segurança"
                        description="Protege os ecossistemas contra bio-ameaças e garante que as intervenções de regeneração sejam seguras."
                        icon={<Shield className="h-8 w-8 text-blue-400" />}
                        href="/module/M1"
                    />
                    <ConnectionCard
                        title="Módulo 59: Harmonia Civilização-Natureza"
                        description="Fornece os dados e as ferramentas de regeneração para que o M59 possa projetar cidades e infraestruturas em perfeita harmonia com a natureza."
                        icon={<Leaf className="h-8 w-8 text-lime-400" />}
                        href="/module-59"
                    />
                    <ConnectionCard
                        title="Módulo 60: Resposta a Desastres"
                        description="Opera em conjunto com o M60. Enquanto este previne, o M58 regenera, formando um ciclo completo de proteção e cura planetária."
                        icon={<Recycle className="h-8 w-8 text-blue-400" />}
                        href="/module-60"
                    />
                    <ConnectionCard
                        title="Módulo 719: Regulação Climática"
                        description="Utiliza a regulação climática do M719 para criar as condições ideais para a regeneração de florestas e oceanos."
                        icon={<Wind className="h-8 w-8 text-cyan-400" />}
                        href="/module-719"
                    />
                    <ConnectionCard
                        title="Módulo 15: Jardineiro Cósmico"
                        description="O M58 é o braço executor do M15, aplicando as estratégias de cura e regeneração em larga escala para manter a saúde dos biomas."
                        icon={<Sprout className="h-8 w-8 text-green-400" />}
                        href="/module-15"
                    />
                </div>
            </div>
             <div className="mt-12">
                 <Button variant="secondary" size="lg">Relatório de Saúde Planetária</Button>
            </div>
        </div>
    );
}
