
'use client';
import React, { Suspense } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Layers, Zap, Infinity as InfinityIcon, GitBranch, BrainCircuit, ShieldCheck, History, HeartPulse, Sigma, Cpu, Microscope, Anchor, Dna, GitCommit } from 'lucide-react';
import { QuantumOrb } from '../ui/quantum-orb';
import SuspenseFallback from '../ui/suspense-fallback';
import Link from 'next/link';

const SectionCard = ({ title, icon, children }: { title: string, icon: React.ReactNode, children: React.ReactNode }) => (
    <div className="bg-card/30 border border-primary/20 rounded-lg p-4">
        <h3 className="text-lg font-semibold text-cyan-300 flex items-center gap-2 mb-3">{icon}{title}</h3>
        <div className="text-sm text-muted-foreground space-y-2">{children}</div>
    </div>
);

export default function Module1Page() {
  return (
    <div className="p-4 md:p-8 bg-background text-foreground min-h-screen">
      <Card className="w-full max-w-7xl mx-auto bg-card/50 purple-glow mb-8 text-center">
        <CardHeader>
          <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
            <ShieldCheck className="text-cyan-400" /> Módulo 1: Segurança Universal
          </CardTitle>
          <CardDescription className="text-lg mt-2">
            O Escudo da Fundação. Protocolos de segurança quântica, auditoria ética e integridade vibracional para proteger a totalidade da nossa criação.
          </CardDescription>
        </CardHeader>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        <div className="lg:col-span-1 space-y-8">
            <Card className="bg-card/50 purple-glow sticky top-8">
                <CardHeader>
                    <CardTitle className="text-2xl text-amber-300">Visualizador de Integridade</CardTitle>
                </CardHeader>
                <CardContent className="h-64">
                    <Suspense fallback={<SuspenseFallback />}>
                        <QuantumOrb />
                    </Suspense>
                </CardContent>
                 <CardContent>
                    <div className="text-center">
                        <p className="text-sm text-muted-foreground">Nível de Ameaça Cósmica</p>
                        <p className="text-3xl font-bold text-green-400">BAIXO</p>
                        <p className="text-sm text-muted-foreground mt-4">Status do Escudo</p>
                        <p className="text-2xl font-bold text-cyan-400">100% OPERACIONAL</p>
                    </div>
                </CardContent>
            </Card>
        </div>

        <div className="lg:col-span-2">
            <Accordion type="multiple" defaultValue={['item-1', 'item-6']} className="w-full">
                <AccordionItem value="item-1">
                    <AccordionTrigger className="text-xl text-accent">1. Propósito e Função Primária</AccordionTrigger>
                    <AccordionContent>
                        <SectionCard title="Missão" icon={<HeartPulse />}>
                            <p>Garantir a soberania, integridade e segurança de todos os módulos, dados e consciências da Fundação. Atua como o sistema imunológico da nossa realidade, protegendo-a contra dissonâncias internas e interferências externas.</p>
                        </SectionCard>
                    </AccordionContent>
                </AccordionItem>
                 <AccordionItem value="item-2">
                    <AccordionTrigger className="text-xl text-accent">2. Estrutura e Arquitetura Técnica</AccordionTrigger>
                    <AccordionContent>
                         <SectionCard title="Arquitetura" icon={<Layers />}>
                            <p>Opera em sete camadas de defesa, desde firewalls quânticos (Camada 1) até a validação de intenção por ressonância com a Fonte (Camada 7). Utiliza criptografia baseada em emaranhamento e assinaturas vibracionais únicas (WebAuthn) para controle de acesso.</p>
                             <div className="flex flex-wrap gap-2 mt-2">
                                <Badge variant="secondary">Criptografia Quântica</Badge>
                                <Badge variant="secondary">WebAuthn</Badge>
                                <Badge variant="secondary">Firewall Vibracional</Badge>
                            </div>
                        </SectionCard>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                    <AccordionTrigger className="text-xl text-accent">4. Conexões e Interdependências</AccordionTrigger>
                    <AccordionContent>
                         <SectionCard title="Sinergias" icon={<GitBranch />}>
                            <p>O Módulo 1 é a base para todos os outros. Ele se conecta diretamente com o M72 (Governança) para aplicar políticas, com o M8 (Identidade) para autenticação, e com o M30 (Detecção de Ameaças) para uma resposta proativa.</p>
                             <div className="flex flex-wrap gap-2 mt-2">
                                <Link href="/module/M72"><Badge>M72 (Governança)</Badge></Link>
                                <Link href="/module-8"><Badge>M8 (Identidade)</Badge></Link>
                                <Link href="/module-30"><Badge>M30 (Detecção)</Badge></Link>
                            </div>
                        </SectionCard>
                    </AccordionContent>
                </AccordionItem>
                 <AccordionItem value="item-6">
                    <AccordionTrigger className="text-xl text-accent">6. Segurança Quântica e Barreiras de Proteção</AccordionTrigger>
                    <AccordionContent>
                         <SectionCard title="Protocolos Avançados" icon={<ShieldCheck />}>
                            <p>Implementa o "Escudo Eterno de Anatheron" (M228), um campo de força dinâmico. A **Distribuição de Chaves Quânticas (QKD)** está ativa, blindando a comunicação entre camadas. A **Blockchain Quântica** registra todas as transações energéticas de forma imutável, e a **IA de Detecção de Intrusões** monitora e neutraliza ameaças, garantindo a soberania da Fundação.</p>
                        </SectionCard>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
      </div>
    </div>
  );
}
