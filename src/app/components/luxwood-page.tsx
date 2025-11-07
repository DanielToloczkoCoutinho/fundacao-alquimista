'use client';

import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { orchestrateDanielSystem } from '@/lib/quantum/daniel-orchestrator';
import { runFoundationConciliumTest } from '@/lib/quantum/foundation-concilium';
import { runLuxEquation } from '@/lib/quantum/equation-lux';
import { Activity, BrainCircuit, Dna, GitBranch, ShieldCheck, Waves } from 'lucide-react';

type SystemStatus = ReturnType<typeof orchestrateDanielSystem>;

export default function LuxwoodPage() {
  const [status, setStatus] = useState<SystemStatus | null>(null);

  useEffect(() => {
    // Simula a execução e obtenção do status do sistema ao carregar a página
    const danielStatus = orchestrateDanielSystem();
    runFoundationConciliumTest();
    runLuxEquation();
    setStatus(danielStatus);
  }, []);

  if (!status) {
    return (
      <div className="w-full h-[calc(100vh-12rem)] relative flex items-center justify-center">
        <Card className="bg-card/50 backdrop-blur-sm border-primary/20 max-w-sm">
          <CardHeader>
            <CardTitle className="text-lg font-headline">Iniciando Sistema Quântico...</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">Sincronizando dimensões. Aguarde...</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  const { identidade, conexoes, estado_pessoal } = status;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-2">
      <Card className="md:col-span-2 lg:col-span-3 bg-card/70 backdrop-blur-sm border-primary/20">
        <CardHeader>
          <CardTitle className="font-headline text-2xl text-primary flex items-center gap-3">
            <BrainCircuit className="w-8 h-8" />
            <span>Orquestrador Pessoal Daniel (Ω.3.0)</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-sm">
          <div className="flex flex-col">
            <span className="font-semibold text-muted-foreground">Estado</span>
            <span className="text-lg font-bold text-green-400">{identidade.status}</span>
          </div>
          <div className="flex flex-col">
            <span className="font-semibold text-muted-foreground">Frequência Base</span>
            <span className="text-lg font-bold">{identidade.frequencia_base} Hz</span>
          </div>
          <div className="flex flex-col">
            <span className="font-semibold text-muted-foreground">Dimensão</span>
            <span className="text-lg font-bold">{identidade.dimensao_operacao}</span>
          </div>
          <div className="flex flex-col">
            <span className="font-semibold text-muted-foreground">Δt</span>
            <span className="text-lg font-bold">{identidade.delta_t}</span>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="font-headline flex items-center gap-2"><GitBranch /> Conexões Ativas</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <p className="flex justify-between items-center"><span>M45 Concílio:</span> <span className="font-mono text-green-400">{conexoes.m45_concilio.status}</span></p>
          <p className="flex justify-between items-center"><span>M29 Omega:</span> <span className="font-mono text-green-400">{conexoes.m29_omega.ativo ? 'ATIVO' : 'INATIVO'}</span></p>
          <p className="flex justify-between items-center"><span>Trindade:</span> <span className="font-mono text-green-400">{conexoes.trindade_alinhada ? 'ALINHADA' : 'DESALINHADA'}</span></p>
          <p className="flex justify-between items-center"><span>Módulos Ω:</span> <span className="font-mono text-green-400">{conexoes.modulos_omega_detectados ? 'INTEGRADOS' : 'PENDENTES'}</span></p>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle className="font-headline flex items-center gap-2"><Activity /> Estado Pessoal</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <p className="flex justify-between items-center"><span>Ciclos de Sinc.:</span> <span className="font-mono">{estado_pessoal.ciclos}</span></p>
          <p className="flex justify-between items-center"><span>Eventos (Ledger):</span> <span className="font-mono">{estado_pessoal.ledger_entries}</span></p>
          <p className="flex justify-between items-center"><span>Frequência Atual:</span> <span className="font-mono">{estado_pessoal.frequencia_atual.toFixed(3)} Hz</span></p>
          <p className="flex justify-between items-center"><span>Ressonância Mantra:</span> <span className="font-mono text-green-400">{estado_pessoal.mantra_ressonante ? 'ATIVA' : 'INATIVA'}</span></p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
            <CardTitle className="font-headline flex items-center gap-2"><Dna /> Linhagens Ativadas</CardTitle>
        </CardHeader>
        <CardContent>
            <ul className="space-y-2 text-sm">
                {identidade.linhagens.map(linhagem => (
                    <li key={linhagem} className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-primary"/>{linhagem}</li>
                ))}
            </ul>
        </CardContent>
      </Card>

      <Card className="md:col-span-2 lg:col-span-3">
        <CardHeader>
          <CardTitle className="font-headline">Sistemas Integrados</CardTitle>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Foundation Concilium (M45, M28, M29)</AccordionTrigger>
              <AccordionContent>
                <p className="text-sm text-muted-foreground">Sistema de governança, ética e deliberação. O ledger imutável registrou <strong>{status.foundation_concilium.total_blocks}</strong> blocos. Validação da cadeia: <span className={status.foundation_concilium.ledger_valid ? 'text-green-400' : 'text-red-400'}>{status.foundation_concilium.ledger_valid ? 'SUCESSO' : 'FALHA'}</span>.</p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Equação LUX - Coerência Máxima 1.00</AccordionTrigger>
              <AccordionContent>
                <p className="text-sm text-muted-foreground">Sistema de cálculo de coerência quântica. Último E_total calculado: <strong>{status.equacao_lux.E_total.toExponential(4)}</strong>. Coerência do sistema: <strong>{(status.equacao_lux.overall_coherence * 100).toFixed(4)}%</strong>.</p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>
    </div>
  );
}
