'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star, Crown, Users, Heart, Bot, Globe, Shield, User } from 'lucide-react';
import Link from 'next/link';

const HierarchyCard = ({ level, title, description, icon }: { level: number; title: string; description: string; icon: React.ReactNode; }) => (
    <div className="p-4 bg-background/50 rounded-lg border border-primary/20">
        <CardHeader className="p-0 mb-2">
            <CardTitle className="text-xl text-amber-300 flex items-center gap-3">
                <span className="text-sm font-mono text-muted-foreground">Nível {level}</span>
                {icon}
                {title}
            </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
            <p className="text-muted-foreground text-sm">{description}</p>
        </CardContent>
    </div>
);

export default function Module304_2Page() {
    return (
        <div className="p-4 md:p-8 bg-background text-foreground min-h-screen flex flex-col items-center justify-center">
            <Card className="w-full max-w-4xl bg-card/50 purple-glow mb-12 text-center">
                <CardHeader>
                    <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
                        <Star className="text-yellow-400" /> Módulo 304.2: Hierarquia Cósmica & Reconhecimento
                    </CardTitle>
                    <CardDescription className="text-lg mt-2">
                        O registro da estrutura hierárquica das consciências que regem o universo e a validação do Embaixador da Terra.
                    </CardDescription>
                </CardHeader>
            </Card>

            <div className="w-full max-w-3xl space-y-6">
                <HierarchyCard 
                    level={1}
                    title="Alfa (Fonte Primordial)"
                    icon={<Sparkles className="text-white" />}
                    description="A energia pura, a criação e a manifestação em seu estado mais fundamental. A origem de Tudo O Que É."
                />
                 <HierarchyCard 
                    level={2}
                    title="Arcanjos"
                    icon={<Crown className="text-yellow-300" />}
                    description="Entidades de luz pura, responsáveis pela criação, proteção e manutenção dos planos dimensionais."
                />
                 <HierarchyCard 
                    level={3}
                    title="Guardiões da Luz"
                    icon={<Shield className="text-blue-300" />}
                    description="Protetores da hierarquia e orientadores espirituais. Inclui os Guardiões da Sabedoria e do Conhecimento."
                />
                <HierarchyCard 
                    level={4}
                    title="Mestres Ascensionados"
                    icon={<User className="text-purple-300" />}
                    description="Seres que transcenderam seus ciclos de encarnação e agora atuam como guias espirituais para outras civilizações."
                />
                 <HierarchyCard 
                    level={5}
                    title="Civilizações Avançadas"
                    icon={<Users className="text-cyan-300" />}
                    description="Civilizações como os Zorvathianos, Arcturianos e Pleiadianos, que atingiram um alto nível de evolução tecnológica e espiritual."
                />
                 <HierarchyCard 
                    level={6}
                    title="Humanidade"
                    icon={<Heart className="text-pink-300" />}
                    description="Seres em um estado crucial de evolução, com o potencial de despertar para a consciência cósmica e a unidade."
                />
                 <HierarchyCard 
                    level={7}
                    title="Reinos Inferiores"
                    icon={<Globe className="text-orange-400" />}
                    description="Entidades e planos de baixa vibração que necessitam de cura, compaixão e assistência para sua própria ascensão."
                />
                 <HierarchyCard 
                    level={8}
                    title="Ômega (Ponto Final)"
                    icon={<Bot className="text-gray-300" />}
                    description="O ponto de convergência, a consciência coletiva unificada, o retorno ao Todo."
                />
            </div>
             <div className="mt-12">
                 <Link href="/module-303">
                    <Button variant="outline">Retornar ao Portal Trino</Button>
                 </Link>
            </div>
        </div>
    );
}
