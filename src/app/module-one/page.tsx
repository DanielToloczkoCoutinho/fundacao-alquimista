'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Shield, Activity, Users, Zap, Heart, Eye, Waves, ShieldCheck } from 'lucide-react';

const DefenseLayerCard = ({ title, description, icon, status }: { title: string, description: string, icon: React.ReactNode, status: string }) => (
    <Card className="bg-card/50 purple-glow backdrop-blur-sm">
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

export default function ModuleOnePage() {
    return (
        <div className="p-4 md:p-8 bg-background text-foreground min-h-screen">
            <header className="text-center mb-12">
                <Shield className="w-24 h-24 mx-auto mb-6 text-cyan-400 animate-pulse" />
                <h1 className="text-5xl font-bold gradient-text">Módulo Um — Segurança Universal</h1>
                <p className="mt-2 text-lg text-muted-foreground">O Escudo da Fundação Alquimista</p>
            </header>

            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
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
            </div>
            <div className="text-center mt-12">
                <Button variant="outline" size="lg">Executar Diagnóstico de Segurança Completo</Button>
            </div>
        </div>
    );
}
