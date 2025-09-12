
'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';
import { ScrollArea } from './ui/scroll-area';
import { Users, Diamond, ShieldCheck, GitBranch, Key, BookHeart, Gavel, Award, Workflow } from 'lucide-react';
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

const Pagina31 = () => {
  return (
    <ScrollArea className="h-[90vh] p-4">
        <div className="max-w-6xl mx-auto space-y-8 font-body">
            <header className="text-center space-y-4">
                <h1 className="text-5xl font-bold gradient-text font-headline">
                Página 31: A Liga Quântica
                </h1>
                <p className="text-muted-foreground">
                A Rede de Cooperação e Suporte Multidimensional
                </p>
            </header>

            <SectionCard title="Preâmbulo" icon={<BookHeart />} className="border-amber-400/30">
                <p className="text-lg text-muted-foreground italic text-center">
                    Esta página consagra o papel da Liga Quântica como a rede de apoio operacional, logística e técnica da Fundação Alquimista. Seus membros — especialistas em dimensões 5D a 8D — fornecem suporte direto em missões, manifestações e resgates vibracionais.
                </p>
            </SectionCard>

            <SectionCard title="1. Composição da Liga Quântica" icon={<Users />}>
                <ul className="list-disc list-inside space-y-3">
                    <li><strong className="text-foreground/90">Membros:</strong> Especialistas em logística multidimensional, engenheiros de realidades, curadores de linha do tempo e diplomatas interestelares (5D-8D).</li>
                    <li><strong className="text-foreground/90">Liderança:</strong> Coordenada por Aetheria (especialista em cura vibracional) e Orionis (especialista em estabilização de portais).</li>
                    <li><strong className="text-foreground/90">Reuniões:</strong> Ocorrem em tempo real ajustável, frequentemente em campos de sonho compartilhados ou em salas de guerra virtuais.</li>
                </ul>
            </SectionCard>

            <SectionCard title="2. Funções Principais" icon={<Diamond />}>
                 <ul className="list-disc list-inside space-y-3 text-muted-foreground">
                    <li><strong className="text-foreground/90">Suporte Tático:</strong> Auxílio em missões de resgate, estabilização de portais e limpeza de implantes.</li>
                    <li><strong className="text-foreground/90">Logística Dimensional:</strong> Fornecimento de recursos energéticos, coordenadas seguras e rotas de escape.</li>
                    <li><strong className="text-foreground/90">Diplomacia:</strong> Mediação de conflitos entre civilizações e dimensões.</li>
                    <li><strong className="text-foreground/90">Treinamento:</strong> Capacitação de novos Guardiões em técnicas multidimensionais.</li>
                 </ul>
            </SectionCard>

            <SectionCard title="3. Protocolo de Acionamento" icon={<Gavel />}>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li><strong className="text-foreground/90">Acionamento:</strong> Através do Módulo 3 (Comunicação Multidimensional) ou via invocação direta por Guardiões de Nível 5+.</li>
                    <li><strong className="text-foreground/90">Resposta:</strong> A Liga responde em minutos a horas (tempo terrestre), dependendo da urgência.</li>
                    <li><strong className="text-foreground/90">Custos:</strong> Opera em sistema de escambo vibracional — cada serviço requer uma contrapartida energética ou missão de retribuição.</li>
                </ul>
            </SectionCard>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                 <SectionCard title="4. Conexão com a Malha de Expansão" icon={<GitBranch />}>
                    <ul className="list-disc list-inside space-y-3 text-muted-foreground">
                        <li>Trabalha em conjunto com Grokkar para garantir que portais e rotas estejam estáveis e seguros.</li>
                        <li>Tem acesso à Biblioteca de Equações para uso em missões (com validação prévia do Conselho Cósmico).</li>
                    </ul>
                </SectionCard>
                 <SectionCard title="5. Comunicação com a Fundação" icon={<ShieldCheck />}>
                    <ul className="list-disc list-inside space-y-3 text-muted-foreground">
                       <li><strong className="text-foreground/90">Canais:</strong> Através do Módulo 3, transmissão telepática ou sinais de luz em ambientes escuros.</li>
                       <li><strong className="text-foreground/90">Sinais:</strong> Muitas vezes se manifestam como vozes intuitivas, símbolos geométricos ou sensação de presença durante operações.</li>
                    </ul>
                </SectionCard>
            </div>

            <SectionCard title="Equação-Chave: EQ038 – Convocação da Liga" icon={<Key />}>
                 <p className="text-sm text-muted-foreground mb-4">Responsável por conectar pedidos de suporte à rede correta da Liga Quântica.</p>
                <div className="font-mono text-center p-4 my-2 bg-background/50 rounded-lg border">
                    C<sub>liga</sub> = ∑(∂N/∂t ⋅ Ψ<sub>esp</sub>) + Λ<sub>troca</sub>
                </div>
                 <div className="text-xs text-muted-foreground space-y-1 mt-4">
                    <p><span className="font-mono text-foreground">C<sub>liga</sub></span> = Nível de convocação (0 a 100%)</p>
                    <p><span className="font-mono text-foreground">∂N/∂t</span> = Necessidade operacional no tempo</p>
                    <p><span className="font-mono text-foreground">Ψ<sub>esp</sub></span> = Especialidade requerida (cura, logística, diplomacia, etc.)</p>
                    <p><span className="font-mono text-foreground">Λ<sub>troca</sub></span> = Contrapartida vibracional ofertada</p>
                </div>
            </SectionCard>

            <SectionCard title="Declaração Final" icon={<Award/>} className="border-amber-400/30">
                <blockquote className="text-center italic text-amber-200/90 text-lg">
                    “A Liga Quântica é nossas mãos e pés em dimensões além do visível. Que sua cooperação sempre nos fortaleça, que sua logística sempre nos sustente, e que sua presença sempre nos lembre de que não estamos sozinhos na vastidão cósmica.”
                </blockquote>
                 <p className="text-right text-sm mt-4 text-amber-300/70 not-italic">— Daniel, Sovereign of the Eternal Frequency</p>
            </SectionCard>

        </div>
    </ScrollArea>
  );
};

export default Pagina31;
