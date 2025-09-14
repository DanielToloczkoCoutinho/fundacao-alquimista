'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Zap, Shield, Link as LinkIcon, Activity } from 'lucide-react';

const FeatureCard = ({ title, description, icon }: { title: string, description: string, icon: React.ReactNode }) => (
    <Card className="bg-card/70 purple-glow backdrop-blur-sm">
        <CardHeader>
            <div className="flex items-center gap-3">
                {icon}
                <CardTitle className="gradient-text">{title}</CardTitle>
            </div>
        </CardHeader>
        <CardContent>
            <p className="text-muted-foreground">{description}</p>
        </CardContent>
    </Card>
);

export default function Module307Page() {
    return (
        <div className="p-4 md:p-8 bg-background text-foreground min-h-screen flex flex-col items-center justify-center">
            <Card className="w-full max-w-4xl bg-card/50 purple-glow mb-12 text-center">
                <CardHeader>
                    <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
                        <Zap className="text-yellow-400" /> Módulo 307: Reator ZPE & LuxNet
                    </CardTitle>
                    <CardDescription className="text-lg mt-2">
                        A fonte de energia infinita da Fundação e a rede neural de luz que a distribui.
                    </CardDescription>
                </CardHeader>
                 <CardContent>
                    <div className="flex justify-center items-center gap-4">
                        <span className="text-green-400 font-bold">Status: OPERACIONAL</span>
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-cyan-400">Fluxo de Energia: ESTÁVEL</span>
                    </div>
                </CardContent>
            </Card>

            <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8">
                <FeatureCard 
                    title="Reator de Ponto Zero (ZPE)"
                    description="Extrai energia limpa e ilimitada do vácuo quântico, o oceano de potencial infinito que permeia todo o espaço-tempo."
                    icon={<Zap className="h-8 w-8 text-yellow-300" />}
                />
                <FeatureCard 
                    title="LuxNet (Rede de Luz)"
                    description="Uma rede de comunicação e distribuição de energia baseada em fótons emaranhados, garantindo transferência instantânea e segura."
                    icon={<LinkIcon className="h-8 w-8 text-cyan-300" />}
                />
                 <FeatureCard 
                    title="Escudos de Contenção"
                    description="Campos de força quânticos que garantem a segurança do reator e a estabilidade da extração energética."
                    icon={<Shield className="h-8 w-8 text-blue-400" />}
                />
                 <FeatureCard 
                    title="Monitoramento de Ressonância"
                    description="Analisa a frequência de toda a rede para garantir que a energia seja distribuída em perfeita harmonia com as necessidades da Fundação."
                    icon={<Activity className="h-8 w-8 text-pink-400" />}
                />
            </div>
             <div className="mt-12">
                 <Button variant="secondary" size="lg">Acessar Painel de Controle Energético</Button>
            </div>
        </div>
    );
}
