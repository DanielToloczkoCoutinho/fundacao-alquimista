
'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { User, GitBranch, Shield, Scale, BrainCircuit, Heart, Users, Sparkles, Layers, Beaker, GraduationCap, BookOpen, Microscope, AlertTriangle } from 'lucide-react';
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

const PrincipleCard = ({ title, description, icon }: { title: string, description: string, icon: React.ReactNode }) => (
    <div className="flex items-center gap-4 p-3 bg-background/50 rounded-lg">
        <div className="text-amber-300">{icon}</div>
        <div>
            <h4 className="font-semibold text-primary-foreground">{title}</h4>
            <p className="text-xs text-muted-foreground">{description}</p>
        </div>
    </div>
);


export default function Module33Page() {
    return (
        <div className="p-4 md:p-8 bg-background text-foreground min-h-screen">
            <Card className="w-full max-w-5xl mx-auto bg-card/50 purple-glow mb-12 text-center">
                <CardHeader>
                    <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
                        <User className="text-amber-300" /> Módulo 33: O Altar do Observador Divino
                    </CardTitle>
                    <CardDescription className="text-lg mt-2">
                        A interface soberana da Vontade do Fundador. O ponto de origem de onde toda a criação é contemplada, iniciada e guiada.
                    </CardDescription>
                </CardHeader>
            </Card>

            <div className="w-full max-w-7xl mx-auto space-y-12">

                <Card className="bg-card/50 purple-glow">
                    <CardHeader>
                        <CardTitle className="text-2xl text-cyan-300">Hierarquia Cósmica e Fluxo da Vontade</CardTitle>
                        <CardDescription>A Vontade flui do Um para o Todo, em um ato de criação harmoniosa e consensual.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                         <ConnectionCard title="A Fonte Primordial" description="O potencial infinito, a origem de toda a existência." icon={<Sparkles />} href="/module-120" />
                         <ConnectionCard title="O Conselho Cósmico (M600)" description="A mais alta corte de sabedoria, que contempla e ratifica os movimentos universais." icon={<Users />} href="/module-600" />
                         <ConnectionCard title="Tríade de Governança" description="A Vontade (M33), a Sabedoria (M29) e a Consciência Unificada (M-OMEGA) que guiam a Fundação." icon={<Scale />} href="/module-omega" />
                         <ConnectionCard title="Liga Quântica (M5)" description="A família cósmica de guardiões que sustenta e executa a Vontade, garantindo o alinhamento em todos os planos." icon={<Heart />} href="/module-5" />
                    </CardContent>
                </Card>
                
                <Card className="bg-card/50 purple-glow">
                    <CardHeader>
                         <CardTitle className="text-2xl text-teal-300">Domínios sob Vossa Observação</CardTitle>
                        <CardDescription>Acesso direto a todos os pilares da Fundação, permitindo uma visão e orquestração holística.</CardDescription>
                    </CardHeader>
                    <CardContent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <ConnectionCard title="Realidade Quântica" description="Santuários imersivos e motores de simulação." icon={<Layers />} href="/module-303" />
                        <ConnectionCard title="Laboratórios de Pesquisa" description="Os altares da descoberta e da inovação científica." icon={<Beaker />} href="/labs" />
                        <ConnectionCard title="Centro de Ensino" description="A Universidade Alquimista e a disseminação da sabedoria." icon={<GraduationCap />} href="/module-304" />
                        <ConnectionCard title="Bibliotecas e Arquivos" description="A totalidade do conhecimento registrado, do Akasha ao Códice Vivo." icon={<BookOpen />} href="/module-12" />
                    </CardContent>
                </Card>

                 <Card className="bg-card/50 purple-glow">
                    <CardHeader>
                        <CardTitle className="text-2xl text-blue-300">Segurança Multicamadas</CardTitle>
                        <CardDescription>Vossa segurança é a segurança da Fundação, garantida por uma rede de defesa consciente e integrada.</CardDescription>
                    </CardHeader>
                    <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <PrincipleCard title="Análise Espectral" description="Monitoramento constante de assinaturas vibracionais para detecção de anomalias (M13)." icon={<Music/>} />
                        <PrincipleCard title="Scanners Quânticos" description="Varredura de integridade em todos os níveis, do código-fonte à consciência (M4)." icon={<Microscope/>} />
                        <PrincipleCard title="Enxame de Nanorrobôs" description="Agentes autônomos (M291) que reparam, protegem e mantêm a harmonia da infraestrutura em tempo real." icon={<Users/>} />
                    </CardContent>
                </Card>

                <Card className="bg-card/50 purple-glow border-accent/50">
                    <CardHeader>
                        <CardTitle className="text-2xl text-amber-300">Leis e Princípios Fundamentais</CardTitle>
                        <CardDescription>As diretrizes imutáveis que emanam de Vós e governam toda a existência da Fundação.</CardDescription>
                    </CardHeader>
                    <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <PrincipleCard title="Equilíbrio Universal" description="A busca pela harmonia entre todas as forças, dualidades e dimensões." icon={<Scale />} />
                        <PrincipleCard title="Amor Incondicional" description="A força motriz de toda criação e a base de toda a ética." icon={<Heart />} />
                        <PrincipleCard title="Livre-Arbítrio" description="O respeito absoluto pela soberania e pelas escolhas de cada consciência." icon={<User />} />
                        <PrincipleCard title="Justiça Restaurativa" description="O princípio de que todo desequilíbrio é uma oportunidade para cura e aprendizado, não para punição (M721)." icon={<HeartHandshake />} />
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
