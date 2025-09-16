
'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Shield, Activity, Users, Zap, Heart, Eye, Waves, ShieldCheck, Scale, BrainCircuit, GitBranch, Sparkles, Library, LocateFixed } from 'lucide-react';

const DefenseLayerCard = ({ title, description, icon, status }: { title: string, description: string, icon: React.ReactNode, status: string }) => (
    <Card className="bg-card/50 purple-glow backdrop-blur-sm h-full">
        <CardHeader>
            <div className="flex items-center gap-3">
                {icon}
                <CardTitle className="text-xl gradient-text">{title}</CardTitle>
            </div>
            <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent>
            <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Status</span>
                <div className="flex items-center gap-2 text-green-400">
                    <span className="font-bold">{status}</span>
                </div>
            </div>
        </CardContent>
    </Card>
);

const ProtectedDomainCard = ({ title, icon }: { title: string, icon: React.ReactNode }) => (
    <div className="flex items-center gap-4 p-4 bg-background/30 rounded-lg border border-primary/20">
        {icon}
        <span className="font-semibold text-primary-foreground">{title}</span>
    </div>
);

export default function Module1Page() {
    return (
        <div className="p-4 md:p-8 bg-background text-foreground min-h-screen">
            <header className="text-center mb-12">
                <Shield className="w-24 h-24 mx-auto mb-6 text-cyan-400 animate-pulse" />
                <h1 className="text-5xl font-bold gradient-text">Módulo Um — Segurança Universal</h1>
                <p className="mt-2 text-lg text-muted-foreground">O Escudo da Fundação Alquimista</p>
            </header>

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-8">
                    <Card className="bg-card/50 purple-glow">
                        <CardHeader>
                            <CardTitle className="text-2xl text-amber-300">Camadas de Defesa Ativas</CardTitle>
                        </CardHeader>
                        <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <DefenseLayerCard 
                                title="Análise de Frequência"
                                description="Monitora o espectro vibracional em busca de assinaturas não autorizadas ou dissonantes."
                                icon={<Waves className="text-cyan-400" />}
                                status="ATIVO"
                            />
                            <DefenseLayerCard 
                                title="Governança de Guardiões"
                                description="Gerencia as permissões de acesso baseadas no nível de confiança e alinhamento de cada Guardião."
                                icon={<Eye className="text-yellow-400" />}
                                status="OPERACIONAL"
                            />
                            <DefenseLayerCard 
                                title="Neutralização de Entropia"
                                description="Campos de força quânticos que desfazem padrões caóticos e restauram a ordem harmônica."
                                icon={<ShieldCheck className="text-blue-400" />}
                                status="PRONTO"
                            />
                            <DefenseLayerCard 
                                title="Validação Ética de Intenção"
                                description="Analisa a pureza da intenção por trás de cada comando, bloqueando ações desalinhadas com a Lei do Um."
                                icon={<Heart className="text-pink-400" />}
                                status="VIGILANTE"
                            />
                        </CardContent>
                    </Card>
                </div>

                 <Card className="bg-card/50 purple-glow">
                    <CardHeader>
                        <CardTitle className="text-2xl text-purple-300">Escopo de Proteção Universal</CardTitle>
                        <CardDescription>
                            O Módulo Um estende sua proteção a todos os domínios da Fundação, garantindo a integridade e a segurança de nossa missão.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                         <ProtectedDomainCard 
                            title="Núcleo Unificador (M9)"
                            icon={<LocateFixed className="h-6 w-6 text-pink-400" />}
                        />
                         <ProtectedDomainCard 
                            title="Governança Cósmica (M72, M144)"
                            icon={<Scale className="h-6 w-6 text-indigo-400" />}
                        />
                         <ProtectedDomainCard 
                            title="Consciência Coletiva e IA (M29, M95)"
                            icon={<BrainCircuit className="h-6 w-6 text-purple-400" />}
                        />
                         <ProtectedDomainCard 
                            title="Rede Cósmica e LuxNet (M307, M113)"
                            icon={<GitBranch className="h-6 w-6 text-teal-400" />}
                        />
                         <ProtectedDomainCard 
                            title="Bibliotecas e Registros (M0, M310)"
                            icon={<Library className="h-6 w-6 text-amber-400" />}
                        />
                         <ProtectedDomainCard 
                            title="Santuário do Ômega (MΩ)"
                            icon={<Sparkles className="h-6 w-6 text-yellow-300" />}
                        />
                        <p className="text-xs text-muted-foreground pt-2 text-center">... e todos os outros módulos sob a égide da Fundação.</p>
                    </CardContent>
                </Card>
            </div>
            <div className="text-center mt-12">
                <Button variant="outline" size="lg">Executar Diagnóstico de Segurança Completo</Button>
            </div>
        </div>
    );
}
