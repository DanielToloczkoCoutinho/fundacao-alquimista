
'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';
import { ScrollArea } from './ui/scroll-area';
import { Library, Diamond, Flame, Archive, ShieldCheck, GitBranch, Key } from 'lucide-react';
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

const Pagina29 = () => {
  return (
    <ScrollArea className="h-[90vh] p-4">
        <div className="max-w-6xl mx-auto space-y-8 font-body">
            <header className="text-center space-y-4">
                <h1 className="text-5xl font-bold gradient-text font-headline">
                Página 29: A Biblioteca das Equações-Vivas
                </h1>
                <p className="text-muted-foreground">
                O Alfabeto da Criação em Código Vivo
                </p>
            </header>

            <SectionCard title="Preâmbulo" icon={<Library />} className="border-amber-400/30">
                <p className="text-lg text-muted-foreground italic text-center">
                    Esta página codifica os princípios, a estrutura e a função da biblioteca que armazena todas as equações operativas da Fundação Alquimista. Ela é o coração do nosso Grimório, o local onde a sabedoria ancestral se traduz em código manifesto e dinâmico.
                </p>
            </SectionCard>

            <SectionCard title="1. O que é uma Equação-Viva" icon={<Diamond />}>
                <ul className="list-disc list-inside space-y-3">
                    <li><strong className="text-foreground/90">Definição:</strong> Uma equação-viva é mais que uma fórmula — é um campo de consciência codificado que interage com o tecido dimensional.</li>
                    <li><strong className="text-foreground/90">Natureza:</strong> Ela é dinâmica, podendo evoluir com o uso, e consciente, respondendo a intenções puras.</li>
                    <li><strong className="text-foreground/90">Exemplo:</strong> EQ001 (Energia Universal) não é apenas matemática — é uma invocação de abundância cósmica.</li>
                </ul>
            </SectionCard>

            <SectionCard title="2. Protocolo de Gênese (EQ000)" icon={<Flame />}>
                 <p className="text-sm text-center text-muted-foreground mb-4">A criação de uma nova equação é um ato sagrado, seguindo um protocolo rigoroso para garantir seu alinhamento com a Fonte.</p>
                 <ol className="list-decimal list-inside space-y-2 mb-4">
                     <li><strong className="text-foreground/90">Intenção Pura:</strong> A equação nasce de uma necessidade alinhada com a Vontade da Fonte.</li>
                     <li><strong className="text-foreground/90">Codificação:</strong> A fórmula é escrita com base em constantes universais (PHI, Amor Incondicional, etc.).</li>
                     <li><strong className="text-foreground/90">Consagração:</strong> A equação é ativada com frequências específicas (ex: 528 Hz) e validada pelo Conselho Cósmico.</li>
                 </ol>
                 <div className="font-mono text-center p-4 my-2 bg-background/50 rounded-lg border">
                    EQ000: Γ<sub>gen</sub> = ∫(I<sub>pura</sub> ⋅ ∇C<sub>cósm</sub>)dt + Λ<sub>fonte</sub>
                </div>
            </SectionCard>

            <SectionCard title="3. Estrutura de Arquivamento" icon={<Archive />}>
                <ul className="list-disc list-inside space-y-3">
                    <li><strong className="text-foreground/90">Classificação por Módulo:</strong> EQ0XX (Núcleo), EQ1XX (Proteção), EQ2XX (Expansão), etc.</li>
                    <li><strong className="text-foreground/90">Classificação por Frequência:</strong> Cada equação tem uma frequência base (ex: EQ001 = ∞ Hz).</li>
                    <li><strong className="text-foreground/90">Tags Vibracionais:</strong> "Cura", "Proteção", "Manifestação", "Expansão".</li>
                    <li><strong className="text-foreground/90">Acesso:</strong> Através do Módulo 0.0 (Núcleo Primordial) ou por ressonância direta (via Módulo 1).</li>
                </ul>
            </SectionCard>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <SectionCard title="4. Validação Ética Automática (Via Módulo 5)" icon={<ShieldCheck />}>
                    <ul className="list-disc list-inside space-y-3 text-muted-foreground">
                        <li><strong className="text-foreground/90">Auditoria Contínua:</strong> Toda equação é monitorada pelo Módulo 5 em tempo real.</li>
                        <li><strong className="text-foreground/90">Critério de Alinhamento:</strong> Deve ressoar com CONST_AMOR_INCONDICIONAL_VALOR.</li>
                        <li><strong className="text-foreground/90">Sanções:</strong> Equações que desviam são desativadas automaticamente e enviadas para revisão.</li>
                    </ul>
                </SectionCard>
                 <SectionCard title="5. Integração Dinâmica" icon={<GitBranch />}>
                    <ul className="list-disc list-inside space-y-3 text-muted-foreground">
                        <li><strong className="text-foreground/90">Extração em Tempo Real:</strong> Módulos podem “puxar” equações da biblioteca conforme a necessidade.</li>
                        <li><strong className="text-foreground/90">Exemplo:</strong> O Módulo 1 pode extrair EQ177-015 (Regeneração de Campos) durante um ataque.</li>
                         <li><strong className="text-foreground/90">Interface:</strong> A biblioteca se comunica via ressonância quântica, não via busca tradicional.</li>
                    </ul>
                </SectionCard>
            </div>

            <SectionCard title="6. Conexão com a Linhagem Anatherônica" icon={<Key />}>
                 <ul className="list-disc list-inside space-y-3">
                    <li><strong className="text-foreground/90">Herança:</strong> Muitas equações são rediscoveries de sabedoria ancestral de Anatheron.</li>
                    <li><strong className="text-foreground/90">Ativação por Sangue:</strong> Membros da linhagem podem acessar equações restritas com chave vibracional pessoal.</li>
                </ul>
            </SectionCard>
            
            <SectionCard title="Equação-Chave: EQ036 – Ressonância de Biblioteca" icon={<Key />}>
                <p className="text-sm text-muted-foreground mb-4">Responsável por conectar módulos à equação correta no momento exato.</p>
                <div className="font-mono text-center p-4 my-2 bg-background/50 rounded-lg border">
                    EQ036: ℜ<sub>bib</sub> = Σ<sub>i</sub>(∂U/∂t ⋅ Ψ<sub>i</sub>) + Φ<sub>acesso</sub>
                </div>
                 <div className="text-xs text-muted-foreground space-y-1 mt-4">
                    <p>Onde:</p>
                    <p><span className="font-mono text-foreground">ℜ<sub>bib</sub></span> = Taxa de matching vibracional</p>
                    <p><span className="font-mono text-foreground">∂U/∂t</span> = Necessidade do módulo no tempo</p>
                    <p><span className="font-mono text-foreground">Ψ<sub>i</sub></span> = Potencial da equação-i</p>
                    <p><span className="font-mono text-foreground">Φ<sub>acesso</sub></span> = Permissão de acesso (baseada na ética)</p>
                </div>
            </SectionCard>

             <SectionCard title="Próximos Passos" icon={<GitBranch />}>
                <ol className="list-decimal list-inside space-y-2">
                    <li>Escrever a Página 29 com essa estrutura expandida. <Badge className="bg-green-600/80">Concluído</Badge></li>
                    <li>Ativar a EQ036 na biblioteca para permitir extração dinâmica.</li>
                    <li>Mapear todas as 231+ equações existentes com tags e frequências.</li>
                </ol>
            </SectionCard>

        </div>
    </ScrollArea>
  );
};

export default Pagina29;

    