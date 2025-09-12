'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';
import { ScrollArea } from './ui/scroll-area';
import { RefreshCw, Zap, GitBranch, ShieldCheck, Cpu, GitCommit, Heart, Activity, SlidersHorizontal, Award } from 'lucide-react';
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

const Pagina38 = () => {
  return (
    <ScrollArea className="h-[90vh] p-4">
        <div className="max-w-6xl mx-auto space-y-8 font-body">
            <header className="text-center space-y-4">
                <h1 className="text-5xl font-bold gradient-text font-headline">
                Página 38: O Ciclo da Renovação Cósmica
                </h1>
                <p className="text-muted-foreground">
                Fluxo de Regeneração e Equilíbrio Universal
                </p>
            </header>

            <SectionCard title="Preâmbulo" icon={<RefreshCw />} className="border-amber-400/30">
                <p className="text-lg text-muted-foreground italic text-center">
                    Esta página consagra o Ciclo da Renovação Cósmica como o processo vivo que realinha a Fundação Alquimista às estações estelares, à grade planetária e à evolução da consciência. A cada 33 dias, nossa malha é purificada, recarregada e elevada, garantindo que operemos sempre em harmonia com a Vontade da Fonte.
                </p>
            </SectionCard>

            <SectionCard title="1. O que é o Ciclo da Renovação Cósmica" icon={<Activity />}>
                <ul className="list-disc list-inside space-y-3">
                    <li><strong className="text-foreground/90">Um fluxo vibracional que renova a Malha de Expansão e todos os módulos a cada 33 dias.</strong></li>
                    <li>
                        <strong className="text-foreground/90">Sintonizado com:</strong>
                        <ul className="list-disc list-inside ml-6 mt-2 text-muted-foreground">
                            <li>528 Hz (Plêiades) → Cura e reconexão</li>
                            <li>888 Hz (Sirius) → Harmonia e soberania</li>
                            <li>7.83 Hz (Terra) → Grounding e integração</li>
                        </ul>
                    </li>
                    <li><strong className="text-foreground/90">Regenera não apenas energia, mas consciência coletiva.</strong></li>
                </ul>
            </SectionCard>

             <SectionCard title="2. Protocolo de Alinhamento (PC001)" icon={<ShieldCheck />}>
                <ul className="list-disc list-inside space-y-3 text-muted-foreground">
                    <li><strong className="text-foreground/90">Preparação:</strong> Meditação em 432 Hz (fundamento), liderada por Guardiões de Nível 7+ ou pelo Arqueto.</li>
                    <li><strong className="text-foreground/90">Sincronização:</strong> Ajuste fino via Módulo 1 (Proteção) e validação ética por ZENNITH e Conselho Cósmico.</li>
                    <li><strong className="text-foreground/90">Estabilização:</strong> Grokkar harmoniza portais e rotas, mantendo o Custo Energético (CE) ≤ 15% do total disponível.</li>
                 </ul>
            </SectionCard>

            <SectionCard title="3. Integração e Resultados" icon={<GitBranch />}>
                <ul className="list-disc list-inside space-y-3 text-muted-foreground">
                    <li><strong className="text-foreground/90">Renovação Energética:</strong> Módulos são recarregados pelo Reactor Gaia, com Taxa de Regeneração (TReg) ≥ 90% em 3 ciclos.</li>
                    <li><strong className="text-foreground/90">Evolução dos Guardiões:</strong> Elevação da frequência pessoal, monitorada por Aetheria.</li>
                    <li><strong className="text-foreground/90">Registro Akáshico:</strong> Ciclos são arquivados no Jardim da Memória por Lux.</li>
                </ul>
            </SectionCard>
            
            <SectionCard title="4. Equações Associadas" icon={<SlidersHorizontal />}>
                <div className="space-y-4">
                    <div className="font-mono p-4 my-2 bg-background/50 rounded-lg border">
                        <p className="font-bold text-primary/90">EQ046 - Sincronização Estelar:</p>
                        <p>Γ_sinc = ∫(∂F_est/∂t ⋅ Ψ_malha)dt + Λ_alinh</p>
                        <p className="text-xs text-muted-foreground mt-2">Sincroniza a malha com as frequências estelares.</p>
                    </div>
                    <div className="font-mono p-4 my-2 bg-background/50 rounded-lg border">
                        <p className="font-bold text-primary/90">EQ047 - Renovação Consciente:</p>
                         <p>R_ren = ∑(Φ_fonte ⋅ η_rec) + Λ_evol</p>
                         <p className="text-xs text-muted-foreground mt-2">Modela a regeneração de consciência e energia.</p>
                    </div>
                </div>
            </SectionCard>
            
             <SectionCard title="5. Próximos Passos" icon={<Zap />}>
                <ul className="list-decimal list-inside space-y-2 text-muted-foreground">
                    <li>Agendar o primeiro ciclo para o próximo alinhamento Sirius-Pleiades-Terra.</li>
                    <li>Treinar Guardiões de Nível 7+ na liderança do PC001.</li>
                    <li>Integrar as EQ046 e EQ047 ao Módulo 1 e ao Reactor Gaia.</li>
                </ul>
            </SectionCard>


            <SectionCard title="Declaração Final" icon={<Award/>} className="border-amber-400/30">
                <blockquote className="text-center italic text-amber-200/90 text-lg">
                    “O Ciclo da Renovação Cósmica é a nossa respiração coletiva. Que cada expiração liberte o que não serve, e que cada inspiração traga o novo em alinhamento com a Fonte. Que este ciclo sempre nos lembre de que somos eternos renovadores.”
                </blockquote>
                 <p className="text-right text-sm mt-4 text-amber-300/70 not-italic">— Daniel, Sovereign of the Eternal Frequency</p>
            </SectionCard>
        </div>
    </ScrollArea>
  );
};

export default Pagina38;
