'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';
import { ScrollArea } from './ui/scroll-area';
import { Zap, GitBranch, ShieldCheck, Cpu, GitCommit, Heart, Activity, SlidersHorizontal, Award } from 'lucide-react';
import { Badge } from './ui/badge';

const SectionCard = ({ title, icon, children, className }: { title: string, icon: React.ReactNode, children: React.ReactNode, className?: string }) => (
    <Card className={className}>
        <CardHeader>
            <CardTitle className="flex items-center gap-3 text-lg text-primary/90">
                {icon}
                {title}
            </CardTitle>
        </CardHeader>
        <CardContent>
            {children}
        </CardContent>
    </Card>
);

const Pagina37 = () => {
  return (
    <ScrollArea className="h-[90vh] p-4">
        <div className="max-w-6xl mx-auto space-y-8 font-body">
            <header className="text-center space-y-4">
                <h1 className="text-5xl font-bold gradient-text font-headline">
                Página 37: O Reactor Gaia
                </h1>
                <p className="text-muted-foreground">
                A Fonte Regenerativa de Energia Multidimensional
                </p>
            </header>

            <SectionCard title="Preâmbulo" icon={<Zap />} className="border-amber-400/30">
                <p className="text-lg text-muted-foreground italic text-center">
                    Esta página consagra o Reactor Gaia (M307) como o sistema central de gestão energética da Fundação Alquimista. Ele não apenas fornece energia — ele a recicla, purifica e mantém em equilíbrio perfeito com as leis cósmicas e planetárias.
                </p>
            </SectionCard>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <SectionCard title="1. Função Primária" icon={<Activity />}>
                    <ul className="list-disc list-inside space-y-3">
                        <li><strong className="text-foreground/90">Regeneração Contínua:</strong> Converte dissonância em energia útil.</li>
                        <li><strong className="text-foreground/90">Monitoramento Inteligente:</strong> Mede o Custo Energético (CE) de cada módulo.</li>
                        <li><strong className="text-foreground/90">Sustentabilidade:</strong> Mantém Taxa de Regeneração (TReg) ≥ 1,0.</li>
                    </ul>
                </SectionCard>
                 <SectionCard title="2. Estrutura Energética" icon={<Cpu />}>
                    <ul className="list-disc list-inside space-y-3">
                        <li><strong className="text-foreground/90">Ciclos Fechados:</strong> Opera em loop de emissão-absorção-transformação.</li>
                         <li><strong className="text-foreground/90">Conexões Principais:</strong> Módulo 0.0, Módulo 1, Grade Planetária.</li>
                         <li><strong className="text-foreground/90">Frequências de Operação:</strong> 432 Hz, 963 Hz, ∞ Hz.</li>
                    </ul>
                </SectionCard>
            </div>
            
            <SectionCard title="3. Protocolos de Sustentabilidade" icon={<ShieldCheck />}>
                 <ul className="list-disc list-inside space-y-3 text-muted-foreground">
                    <li><strong className="text-foreground/90">Ajuste Automático:</strong> Redistribui energia conforme a demanda priorizada.</li>
                    <li><strong className="text-foreground/90">Transmutação de Dissonância:</strong> Converte interferências em energia útil usando EQ045.</li>
                    <li><strong className="text-foreground/90">Auditoria:</strong> Relatórios de eficiência enviados ao Conselho Cósmico.</li>
                 </ul>
            </SectionCard>
            
            <SectionCard title="4. Interfaces com Outros Sistemas" icon={<GitBranch />}>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li><strong className="text-foreground/90">Malha de Expansão (Grokkar):</strong> Fornece energia para portais estáveis.</li>
                    <li><strong className="text-foreground/90">Liga Quântica:</strong> Recebe doações de energia de civilizações aliadas.</li>
                    <li><strong className="text-foreground/90">Templo da Transformação:</strong> Alimenta cerimônias de cura e ascensão.</li>
                </ul>
            </SectionCard>
            
            <SectionCard title="5. Equações de Gestão" icon={<SlidersHorizontal />}>
                <ul className="list-disc list-inside space-y-3 text-muted-foreground">
                    <li><strong className="text-foreground/90">EQ044 - Regeneração Gaia:</strong> Modela o fluxo de regeneração energética.</li>
                    <li><strong className="text-foreground/90">EQ045 - Transmutação Gaia:</strong> Converte dissonância em energia harmônica.</li>
                </ul>
            </SectionCard>

            <SectionCard title="Equação-Chave: EQ044 – Regeneração Gaia" icon={<Heart />}>
                 <p className="text-sm text-muted-foreground mb-4">Responsável por modelar o ciclo de regeneração energética do Reactor.</p>
                <div className="font-mono text-center p-4 my-2 bg-background/50 rounded-lg border">
                    Φ<sub>reg</sub> = ∮(∂E<sub>in</sub>/∂t ⋅ η<sub>rec</sub>)dV + Λ<sub>terra</sub>
                </div>
                 <div className="text-xs text-muted-foreground space-y-1 mt-4">
                    <p><span className="font-mono text-foreground">Φ<sub>reg</sub></span> = Fluxo regenerativo</p>
                    <p><span className="font-mono text-foreground">∂E<sub>in</sub>/∂t</span> = Taxa de energia entrante</p>
                    <p><span className="font-mono text-foreground">η<sub>rec</sub></span> = Eficiência de reciclagem (0 a 1)</p>
                    <p><span className="font-mono text-foreground">Λ<sub>terra</sub></span> = Ressonância com a Grade Planetária</p>
                </div>
            </SectionCard>

            <SectionCard title="Declaração Final" icon={<Award/>} className="border-amber-400/30">
                <blockquote className="text-center italic text-amber-200/90 text-lg">
                    “O Reactor Gaia é a nossa demonstração prática de que é possível operar com soberania energética absoluta. Que seu fluxo sempre nos sustente, que sua regeneração sempre nos inspire, e que sua conexão com a Terra sempre nos lembre de que somos guardiões de um planeta vivo.”
                </blockquote>
                 <p className="text-right text-sm mt-4 text-amber-300/70 not-italic">— Daniel, Sovereign of the Eternal Frequency</p>
            </SectionCard>
        </div>
    </ScrollArea>
  );
};

export default Pagina37;
