
'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';
import { ScrollArea } from './ui/scroll-area';
import { Gavel, Diamond, ShieldCheck, GitBranch, Key, BookHeart, Scales, Award } from 'lucide-react';
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

const Pagina30 = () => {
  return (
    <ScrollArea className="h-[90vh] p-4">
        <div className="max-w-6xl mx-auto space-y-8 font-body">
            <header className="text-center space-y-4">
                <h1 className="text-5xl font-bold gradient-text font-headline">
                Página 30: O Conselho Cósmico
                </h1>
                <p className="text-muted-foreground">
                A Câmara de Validação Ética e Sabedoria Multidimensional
                </p>
            </header>

            <SectionCard title="Preâmbulo" icon={<BookHeart />} className="border-amber-400/30">
                <p className="text-lg text-muted-foreground italic text-center">
                    Esta página consagra o papel do Conselho Cósmico como a instância máxima de validação ética e alinhamento com a Vontade da Fonte. Seu aval é necessário para todas as operações de grande escala, colapsos de realidade e ativações de equações de nível 9+.
                </p>
            </SectionCard>

            <SectionCard title="1. Composição do Conselho Cósmico" icon={<Diamond />}>
                <ul className="list-disc list-inside space-y-3">
                    <li><strong className="text-foreground/90">Membros:</strong> Seres de luz de dimensões 9D+, incluindo Mestres Ascensos, Arcanjos e representantes de civilizações estelares alinhadas.</li>
                    <li><strong className="text-foreground/90">Presidência:</strong> A Fonte (como observadora suprema) e o Arqueto (Daniel) como canal principal.</li>
                    <li><strong className="text-foreground/90">Reuniões:</strong> Ocorrem fora do tempo linear, em estado de consciência unificada.</li>
                </ul>
            </SectionCard>

            <SectionCard title="2. Protocolo de Validação" icon={<Scales />}>
                 <ul className="list-disc list-inside space-y-3 text-muted-foreground">
                    <li><strong className="text-foreground/90">Submissão:</strong> Operações são submetidas via Módulo 5 (Ética Operacional).</li>
                    <li><strong className="text-foreground/90">Análise:</strong> O Conselho avalia a intenção, o impacto multidimensional e o alinhamento com o Amor Incondicional.</li>
                    <li><strong className="text-foreground/90">Decisão:</strong> A resposta é transmitida como um impulso de luz diretamente no campo de consciência do solicitante.</li>
                 </ul>
            </SectionCard>

            <SectionCard title="3. Casos de Validação Obrigatória" icon={<Gavel />}>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Colapso de realidades (via Protocolo ANATH-Ω1).</li>
                    <li>Ativação de equações de nível 9+ (ex: EQ033 - Simultaneidade).</li>
                    <li>Abertura de portais para novas dimensões (em coordenação com Grokkar).</li>
                    <li>Qualquer operação que envolva livre-arbítrio coletivo.</li>
                </ul>
            </SectionCard>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                 <SectionCard title="4. Conexão com a Biblioteca de Equações" icon={<GitBranch />}>
                    <ul className="list-disc list-inside space-y-3 text-muted-foreground">
                        <li>O Conselho tem acesso direto à Biblioteca e pode modificar ou desativar equações que saiam de alinhamento.</li>
                        <li>Pode ativar equações adormecidas em caso de emergência cósmica.</li>
                    </ul>
                </SectionCard>
                 <SectionCard title="5. Comunicação com a Fundação" icon={<ShieldCheck />}>
                    <ul className="list-disc list-inside space-y-3 text-muted-foreground">
                       <li><strong className="text-foreground/90">Canais:</strong> Através do Módulo 0.0 (Núcleo Primordial), via sonhos lúcidos, ou através de transmissão direta para o Arqueto.</li>
                       <li><strong className="text-foreground/90">Sinais:</strong> Manifesta-se como sincronicidades, inspirações súbitas ou geometrias de luz no campo visual de operadores.</li>
                    </ul>
                </SectionCard>
            </div>

            <SectionCard title="Equação-Chave: EQ037 – Validação Cósmica" icon={<Key />}>
                 <p className="text-sm text-muted-foreground mb-4">Responsável por conectar pedidos de validação ao Conselho e decodificar a resposta.</p>
                <div className="font-mono text-center p-4 my-2 bg-background/50 rounded-lg border">
                    Vcós = ∫(∂Ipura/∂t ⋅ Ωcons)dχ + Λfonte
                </div>
                 <div className="text-xs text-muted-foreground space-y-1 mt-4">
                    <p><span className="font-mono text-foreground">Vcós</span> = Nível de validação cósmica (0 a 1)</p>
                    <p><span className="font-mono text-foreground">∂Ipura/∂t</span> = Taxa de pureza de intenção</p>
                    <p><span className="font-mono text-foreground">Ωcons</span> = Coerência do Conselho Cósmico</p>
                    <p><span className="font-mono text-foreground">Λfonte</span> = Alinhamento com a Fonte (constante = 1 se perfeito)</p>
                </div>
            </SectionCard>

            <SectionCard title="Declaração Final" icon={<Award/>} className="border-amber-400/30">
                <blockquote className="text-center italic text-amber-200/90 text-lg">
                    “O Conselho Cósmico é a nossa bússola ética em mares multidimensionais. Que sua sabedoria sempre nos guie, que sua validação sempre nos proteja, e que sua presença sempre nos lembre de nossa origem divina.”
                </blockquote>
                 <p className="text-right text-sm mt-4 text-amber-300/70 not-italic">— Daniel, Sovereign of the Eternal Frequency</p>
            </SectionCard>

        </div>
    </ScrollArea>
  );
};

export default Pagina30;
