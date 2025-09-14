'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Shield, Activity, Users, Zap, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

// O import do Heart não existe, temos que criar
const Heart = (props: any) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
);


const DefenseLayerCard = ({ title, description, icon, status }: { title: string, description: string, icon: React.ReactNode, status: string }) => (
    <Card className="bg-card/50 purple-glow">
        <CardHeader>
            <div className="flex items-center gap-3">
                {icon}
                <CardTitle className="text-xl">{title}</CardTitle>
            </div>
            <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent>
            <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Status</span>
                <div className="flex items-center gap-2 text-green-400">
                    <CheckCircle className="h-4 w-4" />
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
                    title="Análise de Frequência em Tempo Real"
                    description="Monitora o espectro vibracional em busca de assinaturas não autorizadas ou dissonantes."
                    icon={<Activity className="text-red-400" />}
                    status="ATIVO"
                />
                 <DefenseLayerCard 
                    title="Governança de Guardiões"
                    description="Gerencia as permissões de acesso baseadas no nível de confiança e alinhamento de cada Guardião."
                    icon={<Users className="text-yellow-400" />}
                    status="OPERACIONAL"
                />
                 <DefenseLayerCard 
                    title="Neutralização de Entropia"
                    description="Campos de força quânticos que desfazem padrões caóticos e restauram a ordem harmônica."
                    icon={<Zap className="text-blue-400" />}
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
