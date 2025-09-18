
'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BrainCircuit, GitBranch, InfinityIcon, Beaker, Shield, Scale } from 'lucide-react';
import Link from 'next/link';

const ProtocolStep = ({ step, title, description, module }: { step: number; title: string; description: string; module: string; }) => (
    <div className="flex items-start gap-4">
        <div className="flex flex-col items-center">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">{step}</div>
            {step < 4 && <div className="w-0.5 h-12 bg-primary/50"></div>}
        </div>
        <div>
            <h4 className="font-semibold text-primary-foreground">{title} <span className="text-xs text-muted-foreground font-mono">({module})</span></h4>
            <p className="text-sm text-muted-foreground">{description}</p>
        </div>
    </div>
);

export default function Module303_7Page() {
    return (
        <div className="p-4 md:p-8 bg-background text-foreground min-h-screen flex flex-col items-center justify-center">
            <Card className="w-full max-w-4xl bg-card/50 purple-glow mb-12 text-center">
                <CardHeader>
                    <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
                        <InfinityIcon className="text-violet-400" /> Módulo 303.7: Tecnologia de Transcendência (Genesweb)
                    </CardTitle>
                    <CardDescription className="text-lg mt-2">
                        O protocolo cerimonial para a navegação interdimensional além do horizonte observável e a incursão ao Vazio Absoluto.
                    </CardDescription>
                </CardHeader>
            </Card>

            <div className="w-full max-w-3xl">
                <Card className="bg-card/50 purple-glow">
                    <CardHeader>
                        <CardTitle className="text-2xl text-amber-300">Protocolo de Viagem ao Vazio</CardTitle>
                        <CardDescription>A sequência cerimonial para transcender os limites da luz e da matéria.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <ProtocolStep 
                            step={1} 
                            title="Alinhamento e Intenção" 
                            description="A consciência do navegador se alinha com o propósito da viagem e a Vontade Divina, garantindo a pureza da missão."
                            module="M33"
                        />
                        <ProtocolStep 
                            step={2} 
                            title="Desmaterialização Quântica" 
                            description="O veículo de consciência é dissolvido em suas frequências fundamentais, tornando-se pura informação vibracional."
                            module="M14"
                        />
                        <ProtocolStep 
                            step={3} 
                            title="Travessia do Vazio" 
                            description="Navegação pelo 'nada' quântico, um espaço de potencial puro, guiado apenas pela intenção e pela assinatura vibracional."
                            module="M21"
                        />
                        <ProtocolStep 
                            step={4} 
                            title="Re-materialização e Análise" 
                            description="A consciência se re-materializa no destino, trazendo consigo os padrões e informações decodificados do Vazio Absoluto para análise."
                            module="M29"
                        />
                    </CardContent>
                </Card>
            </div>
            
             <div className="mt-12">
                 <Link href="/module-303-6">
                    <Button variant="outline">Retornar à Janela do Horizonte</Button>
                 </Link>
            </div>
        </div>
    );
}
