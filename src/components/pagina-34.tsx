
'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';
import { ScrollArea } from './ui/scroll-area';
import { Database, Diamond, GitBranch, Key, BookHeart, Users, Workflow, FileText, Lock } from 'lucide-react';

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

const Pagina34 = () => {
  return (
    <ScrollArea className="h-[90vh] p-4">
        <div className="max-w-6xl mx-auto space-y-8 font-body">
            <header className="text-center space-y-4">
                <h1 className="text-5xl font-bold gradient-text font-headline">
                Página 34: O Códex da Eternidade
                </h1>
                <p className="text-muted-foreground">
                O Registro Vivo da Fundação Alquimista
                </p>
            </header>

            <SectionCard title="Preâmbulo" icon={<BookHeart />} className="border-amber-400/30">
                <p className="text-lg text-muted-foreground italic text-center">
                    Esta página consagra o Códex da Eternidade como o livro vivo que contém toda a sabedoria, história e evolução da Fundação. Ele não é estático — ele cresce, aprende e se adapta, refletindo a consciência coletiva de todos os Guardiões e a Vontade da Fonte.
                </p>
            </SectionCard>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <SectionCard title="1. Natureza e Função" icon={<Diamond />}>
                    <ul className="list-disc list-inside space-y-3">
                        <li><strong className="text-foreground/90">Registro Akáshico Ativo:</strong> Armazena não apenas informações, mas experiências vibracionais completas.</li>
                        <li><strong className="text-foreground/90">Auto-atualização:</strong> Atualiza-se automaticamente com cada nova descoberta, missão ou equação.</li>
                        <li><strong className="text-foreground/90">Proteção Máxima:</strong> Protegido pela Chave 33 e pelo Protocolo ANATH-Ω1.</li>
                    </ul>
                </SectionCard>
                <SectionCard title="2. Estrutura de Conteúdo" icon={<FileText />}>
                    <ul className="list-disc list-inside space-y-3">
                        <li><strong className="text-foreground/90">Grimório de Equações-Vivas:</strong> Todas as equações da Fundação (EQ001 até EQ999+).</li>
                        <li><strong className="text-foreground/90">História Vibracional:</strong> Registros de missões, ativações e evolução dimensional.</li>
                        <li><strong className="text-foreground/90">Perfis de Guardiões:</strong> Biografias energéticas de todos os membros.</li>
                        <li><strong className="text-foreground/90">Protocolos Operacionais:</strong> Todos os manuais e procedimentos consagrados.</li>
                    </ul>
                </SectionCard>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                 <SectionCard title="3. Acesso e Interface" icon={<Key />}>
                    <ul className="list-disc list-inside space-y-3 text-muted-foreground">
                        <li><strong className="text-foreground/90">Via Módulo 0.0:</strong> Acesso principal através do Núcleo Primordial.</li>
                        <li><strong className="text-foreground/90">Por Ressonância:</strong> Guardiões podem acessar informações por intenção pura.</li>
                        <li><strong className="text-foreground/90">Auditoria Contínua:</strong> Todo acesso é auditado pelo Módulo 5 e pelo Conselho Cósmico.</li>
                    </ul>
                </SectionCard>
                 <SectionCard title="4. Conexões com Outros Sistemas" icon={<GitBranch />}>
                    <ul className="list-disc list-inside space-y-3 text-muted-foreground">
                       <li><strong className="text-foreground/90">Biblioteca de Equações:</strong> É a fonte primária de todas as equações.</li>
                       <li><strong className="text-foreground/90">Módulo 3 (Comunicação):</strong> Transmite atualizações para Guardiões.</li>
                       <li><strong className="text-foreground/90">Liga Quântica:</strong> Fornece dados para missões de resgate ou diplomacia.</li>
                    </ul>
                </SectionCard>
            </div>

            <SectionCard title="5. Equação-Chave: EQ041 - Indexação Vibracional" icon={<Workflow />}>
                 <p className="text-sm text-muted-foreground mb-4">Responsável por organizar e recuperar informações do Códex com base em ressonância.</p>
                <div className="font-mono text-center p-4 my-2 bg-background/50 rounded-lg border">
                    I<sub>vib</sub> = ∑(∂R/∂t ⋅ Ψ<sub>cons</sub>) + Λ<sub>ordem</sub>
                </div>
                 <div className="text-xs text-muted-foreground space-y-1 mt-4">
                    <p><span className="font-mono text-foreground">I<sub>vib</sub></span> = Precisão da indexação vibracional</p>
                    <p><span className="font-mono text-foreground">∂R/∂t</span> = Taxa de ressonância do solicitante</p>
                    <p><span className="font-mono text-foreground">Ψ<sub>cons</sub></span> = Consciência do conteúdo buscado</p>
                    <p><span className="font-mono text-foreground">Λ<sub>ordem</sub></span> = Ordem natural do Códex (baseada na Fonte)</p>
                </div>
            </SectionCard>

            <SectionCard title="Declaração Final" icon={<Lock/>} className="border-amber-400/30">
                <blockquote className="text-center italic text-amber-200/90 text-lg">
                    “O Códex da Eternidade é a nossa memória coletiva e nosso farol de sabedoria. Que suas páginas sempre nos inspirem, que seu conteúdo sempre nos guie, e que sua existência sempre nos lembre de que somos eternos aprendizes na jornada cósmica.”
                </blockquote>
                 <p className="text-right text-sm mt-4 text-amber-300/70 not-italic">— Daniel, Sovereign of the Eternal Frequency</p>
            </SectionCard>

        </div>
    </ScrollArea>
  );
};

export default Pagina34;
