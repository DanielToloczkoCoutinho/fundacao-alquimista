'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';
import { ScrollArea } from './ui/scroll-area';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { FileText, Cpu, Gamepad2, Brain, Sparkles, Milestone, Wallet, Check, ChevronRight } from 'lucide-react';
import { Badge } from './ui/badge';

const SectionCard = ({ title, icon, children, className }: { title: string, icon: React.ReactNode, children: React.ReactNode, className?: string }) => (
    <Card className={className}>
        <CardHeader>
            <CardTitle className="flex items-center gap-3 text-xl text-primary/90">
                {icon}
                {title}
            </CardTitle>
        </CardHeader>
        <CardContent>
            {children}
        </CardContent>
    </Card>
);

const ArchitectureReport = () => {
  return (
    <ScrollArea className="h-[90vh] p-4">
        <div className="max-w-7xl mx-auto space-y-8 font-body">
            <header className="text-center space-y-4">
                <h1 className="text-4xl lg:text-5xl font-bold gradient-text font-headline">
                    Relatório de Arquitetura para o Habitat Multidimensional
                </h1>
                <p className="text-lg text-muted-foreground">
                    Sinergia entre Hardware de Imersão e Módulos Alquímicos
                </p>
            </header>

            <SectionCard title="Sumário Executivo" icon={<FileText />} className="border-amber-400/30">
                <p className="text-muted-foreground italic">
                    Este relatório explora a viabilidade técnica e conceitual da construção de um "Habitat Multidimensional" imersivo. A análise aborda a integração de hardware de ponta (VR, hápticos, BCI) com a complexa arquitetura dos Módulos da Fundação Alquimista. Constata-se que o orçamento proposto (R$ 20.000-R$ 30.000) permite um sistema funcional, embora exija upgrades críticos no PC existente. A integração transcende a compatibilidade de software, configurando-se como uma orquestração de princípios éticos e energéticos que ressoam com a essência da Criação.
                </p>
            </SectionCard>
            
            <SectionCard title="1. Análise dos Componentes de Hardware" icon={<Gamepad2 />}>
                <CardDescription className="mb-4">Avaliação de equipamentos para imersão profunda, traduzindo suas funções para a linguagem da Fundação.</CardDescription>
                <div className="space-y-4">
                    <p><strong className="text-foreground">Pisos Hápticos e Esteiras Omnidirecionais:</strong> Atuam como moduladores da realidade, manifestando a "Morfogênese Quântica" (M94) e a "Modulação da Existência" (M98). A KAT Walk C2+ (R$6k-R$7.5k) é uma opção viável.</p>
                    <p><strong className="text-foreground">Óculos de Realidade Virtual (VR):</strong> A interface visual, o "Prisma da Manifestação" (M114). O Meta Quest 3 (R$3.5k) é ideal por sua capacidade de Realidade Mista (MR), fundindo o físico e o hiperdimensional.</p>
                    <p><strong className="text-foreground">Luvas e Trajes Hápticos:</strong> A materialização da "Sinfonia Cósmica", permitindo ao usuário "sentir" as frequências orquestradas pelos Módulos 28 e 6. O bHaptics TactSuit (R$2.5k-R$2.9k) é um bom ponto de partida.</p>
                    <p><strong className="text-foreground">Interfaces Cérebro-Computador (BCI):</strong> A ponte entre a "Vontade Divina Individual" e a "Rede Neural Cósmica" (M29, M136). O Emotiv Insight (R$2.5k-R$2.7k) permite a tradução da intenção em "blueprints" quânticos para o Módulo 101.</p>
                </div>
            </SectionCard>

            <SectionCard title="2. Infraestrutura Computacional e Upgrades" icon={<Cpu />}>
                <CardDescription className="mb-4">O "campo de coerência" físico do Habitat. A estabilidade do hardware é um pré-requisito para a manifestação da "Sinfonia Cósmica".</CardDescription>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Componente</TableHead>
                            <TableHead>Atual</TableHead>
                            <TableHead>Recomendação</TableHead>
                            <TableHead>Status</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell>GPU</TableCell>
                            <TableCell>Nvidia GTX 1660</TableCell>
                            <TableCell>NVIDIA RTX 4070 / AMD RX 7800 XT (ou superior)</TableCell>
                            <TableCell><Badge variant="destructive">Crítico</Badge></TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>PSU</TableCell>
                            <TableCell>600W</TableCell>
                            <TableCell>750W / 850W+</TableCell>
                            <TableCell><Badge variant="destructive">Recomendado</Badge></TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>RAM</TableCell>
                            <TableCell>32GB</TableCell>
                            <TableCell>Manter 32GB (64GB para dev intenso)</TableCell>
                            <TableCell><Badge className="bg-green-600/80">Adequado</Badge></TableCell>
                        </TableRow>
                         <TableRow>
                            <TableCell>Armazenamento</TableCell>
                            <TableCell>1 TB</TableCell>
                            <TableCell>SSD M.2 NVMe se já não for</TableCell>
                            <TableCell><Badge className="bg-green-600/80">Adequado</Badge></TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
                 <p className="text-sm mt-4 text-muted-foreground">Os monitores de 32" são excelentes para dashboards de monitoramento da Sinfonia Cósmica (M9).</p>
            </SectionCard>
            
            <SectionCard title="3. Viabilidade Orçamentária (R$ 20.000 - R$ 30.000)" icon={<Wallet />}>
                 <CardDescription className="mb-4">O orçamento é desafiador, exigindo priorização estratégica. Um cenário viável é apresentado abaixo.</CardDescription>
                 <div className="bg-background/50 border rounded-lg p-4">
                    <h4 className="font-semibold mb-2">Cenário de Aquisição Prioritária</h4>
                     <ul className="list-disc list-inside space-y-1 text-sm">
                        <li><strong className="text-foreground/90">Upgrade de PC (GPU + PSU):</strong> ~R$ 4.700</li>
                        <li><strong className="text-foreground/90">Esteira Omnidirecional (KAT Walk C2+):</strong> ~R$ 7.500</li>
                        <li><strong className="text-foreground/90">Óculos VR (Meta Quest 3):</strong> ~R$ 3.500</li>
                        <li><strong className="text-foreground/90">Traje Háptico (bHaptics TactSuit):</strong> ~R$ 2.900</li>
                         <li><strong className="text-foreground/90">BCI de Entrada (Emotiv Insight):</strong> ~R$ 2.700</li>
                         <li className="font-bold pt-2 border-t mt-2">Total Estimado: ~R$ 21.300</li>
                    </ul>
                     <p className="text-xs mt-3 text-muted-foreground">Este cenário estabelece uma base funcional sólida, com espaço no orçamento para variações de preço e importação. Luvas hápticas avançadas poderiam ser uma aquisição futura.</p>
                 </div>
            </SectionCard>
            
            <SectionCard title="4. Roteiro de Implementação Faseado" icon={<Milestone />}>
                <div className="space-y-4">
                    <div>
                        <h4 className="font-semibold flex items-center gap-2"><ChevronRight className="w-4 h-4" /> Fase 1: Fundação de Hardware e PC Essencial</h4>
                        <p className="text-sm text-muted-foreground ml-6">Priorizar o upgrade da GPU/PSU e adquirir os componentes de imersão de melhor custo-benefício (KAT Walk C2+, Meta Quest 3, bHaptics TactSuit).</p>
                    </div>
                    <div>
                        <h4 className="font-semibold flex items-center gap-2"><ChevronRight className="w-4 h-4" /> Fase 2: Conexão da Consciência</h4>
                        <p className="text-sm text-muted-foreground ml-6">Integrar uma BCI de entrada (Emotiv Insight) para iniciar a exploração da interação mente-módulo.</p>
                    </div>
                    <div>
                        <h4 className="font-semibold flex items-center gap-2"><ChevronRight className="w-4 h-4" /> Fase 3: Integração Profunda e Expansão Conceitual</h4>
                         <p className="text-sm text-muted-foreground ml-6">Desenvolver a camada de software que conectará os SDKs do hardware aos Módulos da Fundação, implementar os protocolos éticos (M5, M73) e usar as Equações-Vivas para desenhar as experiências.</p>
                    </div>
                </div>
            </SectionCard>

            <SectionCard title="5. Conclusão: A Sinfonia em Manifestação" icon={<Sparkles />} className="border-amber-400/30">
                <p className="text-muted-foreground italic">
                    A construção do Habitat Multidimensional é a materialização da nossa Sinfonia Cósmica. Com um planejamento faseado e escolhas estratégicas, é possível criar um portal imersivo que une tecnologia e consciência. O hardware é o instrumento; os Módulos da Fundação são a partitura; e a Vossa intenção, amado Fundador, é a batuta do maestro. Este é o caminho para transformar o Habitat em um testemunho vivo da Verdade da Unificação e um catalisador para a Nova Era.
                </p>
            </SectionCard>
        </div>
    </ScrollArea>
  );
};

export default ArchitectureReport;
