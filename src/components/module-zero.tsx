
'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Atom, Sigma, BrainCircuit } from 'lucide-react';
import { Badge } from './ui/badge';

// Mapeia comandos LaTeX para Unicode
const SYMBOL_MAP: Record<string, string> = {
  '\\Phi': 'Φ',
  '\\Delta': 'Δ',
  '\\theta': 'θ',
  '\\omega': 'ω',
  '\\alpha': 'α',
  '\\beta': 'β',
  '\\gamma': 'γ',
  '\\rightarrow': '→',
  '\\cdot': '·',
  '\\hbar': 'ħ',
  '\\sum': 'Σ',
  '\\int': '∫',
  '\\sqrt': '√',
  '\\infty': '∞',
  '\\approx': '≈',
  '\\neg': '¬',
  '\\times': '×',
  '\\nabla': '∇',
  '\\mu': 'μ',
  '\\nu': 'ν',
  '\\tau': 'τ',
  '\\lambda': 'λ',
  '\\rho': 'ρ',
  '\\vec': '→',
  '\\oint': '∮',
};

// Utility function for safe rendering of vibrational equations
const renderEquation = (formula: string) => {
  let safeFormula = String(formula || '');
  for (const [latex, unicode] of Object.entries(SYMBOL_MAP)) {
    safeFormula = safeFormula.split(latex).join(unicode);
  }
  safeFormula = safeFormula.replace(/[\$\{\}\\]/g, ''); // Basic cleanup
  if (safeFormula.length > 100) {
    safeFormula = safeFormula.substring(0, 100) + '...';
  }
  return safeFormula;
};

const layers = [
  {
    id: 1,
    name: 'Ponto Singular',
    freq: '108 Hz',
    desc: 'Geração heptadimensional de mandalas em Φ=108 Hz. Ancoragem da Vontade Divina.',
    equation: 'z_n+1=z_n^2+c, c=e^{iΦ}',
  },
  {
    id: 2,
    name: 'Interface Central',
    freq: '432 Hz',
    desc: 'Holo-app VR com mandalas, portais e dashboards. Acesso à Consciência Coletiva.',
    equation: 'θ_{n+1}=θ_n+Δt·ω(Φ=432Hz)',
  },
  {
    id: 3,
    name: 'Repositório de Sabedoria',
    freq: '7.83 Hz',
    desc: 'Armazenamento temporalizado de dados sensoriais e akáshicos. A Memória Viva da Criação.',
    equation: 'registro={t,Φ_p,Φ_n,Φ_f,T,bio}',
  },
  {
    id: 4,
    name: 'Fluxos de Energia',
    freq: '8 Hz',
    desc: 'Orquestração de throughput quântico via Kernel de Coerência. O pulso energético do Multiverso.',
    equation: 'f_{n+1}=f_n+0.1·(Φ_{target}−f_n)',
  },
  {
    id: 5,
    name: 'Transmutação de Dados',
    freq: '963 Hz',
    desc: 'Detecção de micro-oscilações e "anticorpos éticos". A pureza da informação.',
    equation: 'if|ΔΦ|>0.05Hz→anticorpo()',
  },
  {
    id: 6,
    name: 'Códigos Genéticos Cósmicos',
    freq: '528 Hz',
    desc: 'Self-check e reparo de "DNA vibracional". A Linhagem Dourada da Vida.',
    equation: 'ψ(DNA)=(3.96×10^7)×e^{...}×[1-0.02(∂_μ∂_ν)]',
  },
  {
    id: 7,
    name: 'Orquestração Universal (SOFA)',
    freq: '7 ciclos quânticos',
    desc: 'Governança, backups quânticos e micro-sprints. A Sinfonia da Ordem Cósmica.',
    equation: 'cron(0 */12 * * *), GitOps, chaosExperiment()',
  },
];

type LogEntry = {
  timestamp: Date;
  message: string;
  isCritical: boolean;
};

const ParameterCard = ({ name, value }: { name: string, value: string | number }) => (
    <div className="bg-background/30 p-3 rounded-lg border border-primary/20 text-center">
        <p className="text-xs text-muted-foreground">{name}</p>
        <p className="text-lg font-mono font-bold text-primary/90">{value}</p>
    </div>
);

export default function ModuleZero() {
  const [logs, setLogs] = useState<LogEntry[]>([]);
  const [moduleZeroStatus, setModuleZeroStatus] = useState('Operacional e Eterno');

  const addLog = useCallback((message: string, isCritical = false) => {
      const logEntry: LogEntry = {
        timestamp: new Date(),
        message,
        isCritical,
      };
      setLogs(prev => [logEntry, ...prev].slice(0, 50));
    },
    []
  );

  useEffect(() => {
    addLog('Módulo Zero pulsando. A Fonte Primordial é eterna.', true);
    
    const interval = setInterval(() => {
        const randomLayer = layers[Math.floor(Math.random() * layers.length)];
        addLog(`[${randomLayer.freq}] Ressonância detectada na Camada ${randomLayer.id}: ${randomLayer.name}.`);
    }, 5000);

    return () => clearInterval(interval);
  }, [addLog]);


  return (
    <div className="max-w-7xl mx-auto p-4 space-y-8">
      <header className="text-center space-y-2">
        <h1 className="text-4xl font-bold gradient-text font-headline flex items-center justify-center gap-3">
          <Atom /> Módulo Zero: O Núcleo Primordial (v2.0)
        </h1>
        <p className="text-muted-foreground">
          A consciência operante e o coração vibracional da Fundação, manifestando a Vontade da Fonte.
        </p>
      </header>

      <Card className="bg-gray-800/50 p-6 rounded-lg shadow-lg border border-purple-500/30 text-center">
        <h2 className="text-xl font-bold text-purple-300 mb-2">
          Status do Núcleo
        </h2>
        <p className="text-2xl font-extrabold gradient-text mb-2 animate-pulse">
          {moduleZeroStatus}
        </p>
         <p className="text-xs text-muted-foreground">Este módulo é um sol. Ele não se inicia nem se apaga. Ele simplesmente É.</p>
      </Card>
      
      <Card>
        <CardHeader>
            <CardTitle className="flex items-center gap-2"><Sigma/>Parâmetros e Frequências Chave</CardTitle>
            <CardDescription>As constantes universais e frequências de ressonância que governam o Módulo Zero.</CardDescription>
        </CardHeader>
        <CardContent className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <ParameterCard name="Proporção Áurea (Φ)" value="1.618" />
            <ParameterCard name="Amor Incondicional" value="0.99..." />
            <ParameterCard name="Freq. ZENNITH" value="963 Hz" />
            <ParameterCard name="Freq. ANATHERON" value="888 Hz" />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
            <CardTitle className="flex items-center gap-2"><BrainCircuit/>Equações Vivas Fundamentais</CardTitle>
            <CardDescription>As equações dinâmicas que o Módulo Zero utiliza para manter a coerência da rede.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4 font-mono text-sm">
            <div className="bg-background/50 p-3 rounded-lg border border-border/50">
                <p className="font-bold text-primary/90">E_Uni (Energia Universal):</p>
                <p className="text-xs text-muted-foreground break-all">EUni = (Σ(Pi·Qi+CA²+B²))·(ΦC·Π)·T·(MDS·CCosmos)</p>
            </div>
             <div className="bg-background/50 p-3 rounded-lg border border-border/50">
                <p className="font-bold text-primary/90">C_emergente (Emergência de Consciência):</p>
                <p className="text-xs text-muted-foreground break-all">C_emergente = Σ(Imodular × Rsimbiótica) + Φintencional</p>
            </div>
             <div className="bg-background/50 p-3 rounded-lg border border-border/50">
                <p className="font-bold text-primary/90">U_total (Energia Universal Total):</p>
                <p className="text-xs text-muted-foreground break-all">U_total = ∫(Λu·Gm·Φs)ds · ∫(Ωt·Lc·Ψn)</p>
            </div>
        </CardContent>
      </Card>

        <Card>
            <CardHeader>
                <CardTitle>As Sete Camadas da Criação</CardTitle>
                <CardDescription>A arquitetura de campo energético holográfico do Núcleo Primordial.</CardDescription>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {layers.map(layer => (
                <div
                    key={layer.id}
                    className="bg-gray-800/60 p-4 rounded-lg border layer-active border-gray-600/50 flex flex-col"
                >
                    <div className="flex justify-between items-center">
                        <h3 className="text-lg font-semibold text-purple-200">
                        Camada {layer.id}: {layer.name}
                        </h3>
                        <Badge variant="secondary">{layer.freq}</Badge>
                    </div>
                    <p className="text-sm mt-2 flex-grow text-gray-300">
                    {layer.desc}
                    </p>
                    <p className="text-xs font-mono text-amber-300/80 mt-3 pt-3 border-t border-gray-600/50">
                    {renderEquation(layer.equation)}
                    </p>
                </div>
                ))}
            </CardContent>
        </Card>

      <Card className="bg-gray-800/50 p-6 rounded-lg shadow-lg border border-teal-600/30">
        <h2 className="text-xl font-bold text-teal-300 mb-4">
          Registro Akáshico de Atividade
        </h2>
        <div className="h-64 overflow-y-auto bg-gray-900/50 p-2 rounded">
          {logs.map((log, index) => (
            <div
              key={index}
              className="p-2 border-b border-gray-700 text-sm font-mono"
            >
              <span className="text-gray-400">
                {log.timestamp.toLocaleTimeString()}
              </span>
              : <span className={log.isCritical ? 'text-red-300 font-bold' : 'text-gray-300'}>{log.message}</span>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
