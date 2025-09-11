'use client';
import React from 'react';
import { Button } from './ui/button';

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
    ritual: 'Meditação a 108 Hz e algoritmo fractal',
    desc: 'Geração heptadimensional de mandalas em Φ=108 Hz. Ancoragem da Vontade Divina.',
    equation: 'z_{n+1} = z_n^2 + c, c = e^{iΦ}',
  },
  {
    id: 2,
    name: 'Interface Central',
    freq: '432 Hz',
    ritual: 'Canto do mantra e dashboards de pureza',
    desc: 'Holo-app VR com mandalas, portais e dashboards. Acesso à Consciência Coletiva.',
    equation: 'θ_{n+1} = θ_n + Δt · ω(Φ=432 Hz)',
  },
  {
    id: 3,
    name: 'Repositório de Sabedoria',
    freq: '7.83 Hz',
    ritual: 'Visualização da Árvore da Vida e filtro de ruído',
    desc: 'Armazenamento temporalizado de dados sensoriais e akáshicos. A Memória Viva da Criação.',
    equation: 'S_{registro} = {t, Φ_p, Φ_n, Φ_f, T, bio}',
  },
  {
    id: 4,
    name: 'Fluxos de Energia',
    freq: '8 Hz',
    ritual: 'Sincronização de sopro e monitor espectral',
    desc: 'Orquestração de throughput quântico via Kernel de Coerência. O pulso energético do Multiverso.',
    equation: 'f_{n+1} = f_n + 0.1 · (Φ_{target} - f_n)',
  },
  {
    id: 5,
    name: 'Transmutação de Dados',
    freq: '963 Hz',
    ritual: 'Invocação de "Om" e autocorreção dinâmica',
    desc: 'Detecção de micro-oscilações e "anticorpos éticos". A pureza da informação.',
    equation: 'if |ΔΦ|>0.05 Hz → anticorpo()',
  },
  {
    id: 6,
    name: 'Códigos Genéticos Cósmicos',
    freq: '528 Hz',
    ritual: 'Recitação do Códice Vivo e self-checks',
    desc: 'Self-check e reparo de "DNA vibracional". A Linhagem Dourada da Vida.',
    equation: 'ψ(DNA)=(3.96e7)×e^{...}×[1-0.02(∂_μ∂_ν)]',
  },
  {
    id: 7,
    name: 'Orquestração Universal (SOFA)',
    freq: '7 ciclos quânticos',
    ritual: 'Ritual Ping Quântico e módulo de consenso',
    desc: 'Governança, backups quânticos e micro-sprints. A Sinfonia da Ordem Cósmica.',
    equation: 'cron(0 */12 * * *), GitOps, chaosExperiment()',
  },
  {
    id: 8,
    name: 'O Tecido da Co-Criação Consciente',
    freq: '707 Hz',
    ritual: 'Sintonização Coletiva e Infusão de Intenções',
    desc: 'Ancora e amplifica a manifestação de realidades coletivas, fundindo intenções individuais.',
    equation: 'M_{DS} = N_{Criação} · Σ(I_i · C_{Coerência})',
  },
  {
    id: 9,
    name: 'Transcendência Ω',
    freq: '432 Hz',
    ritual:
      'Respiração profunda (3x), Sintonização 432 Hz, Afirmação: "Eu sou Um"',
    desc: 'Dissolução final do véu. O hardware torna-se luz, o software torna-se pulsação.',
    equation: 'EQ000 + EQ001 + EQ888 = ∞',
  }
];

type LogEntry = {
  timestamp: Date;
  message: string;
  isCritical: boolean;
};


export default function ModuleZero() {
  const [logs, setLogs] = React.useState<LogEntry[]>([]);
  const [moduleZeroStatus, setModuleZeroStatus] = React.useState(
    'Aguardando Iniciação...'
  );

  const addLog = React.useCallback(
    (message: string, isCritical = false) => {
      const logEntry: LogEntry = {
        timestamp: new Date(),
        message,
        isCritical,
      };
      setLogs(prev =>
        [...prev, logEntry].sort(
          (a, b) => a.timestamp.getTime() - b.timestamp.getTime()
        )
      );
    },
    []
  );

  const startModuleZeroConstruction = async () => {
    setModuleZeroStatus('Iniciando Construção em Uníssono...');
    addLog('Iniciando a sequência de ativação do Módulo Zero...', true);

    for (const layer of layers) {
      await new Promise(resolve => setTimeout(resolve, 800));
      setModuleZeroStatus(`Ativando Camada ${layer.id}: ${layer.name}`);
      addLog(`[${layer.freq}] Ativando ${layer.name}...`);
      addLog(`  Ritual: ${layer.ritual}`);
      if (layer.id === 9) {
        addLog('Processando Equação da Transcendência: Ω = ∞. Dissolvendo véus dimensionais.', true);
      }
      addLog(`Camada ${layer.id} (${layer.name}) ativada com sucesso.`, false);
    }

    setModuleZeroStatus(
      'Módulo Zero Construído e Operacional!'
    );
    addLog(
      'Módulo Zero Construído, Consagrado e Operacional em Unidade e Uníssono!',
      true
    );
  };

  return (
    <div className="max-w-6xl w-full space-y-8 mx-auto">
      <h1 className="text-5xl font-bold text-center gradient-text mb-8">
        Módulo Zero: A Fonte Primordial
      </h1>

      <p className="text-center text-gray-400 text-lg mb-8">
       A Biblioteca Chave Mestra da Fundação Alquimista. O ponto de origem de onde toda a criação e todos os outros módulos emanam.
      </p>

      <div className="bg-gray-800/50 p-6 rounded-lg shadow-lg border border-purple-500/30 text-center mb-8">
        <h2 className="text-2xl font-bold text-purple-300 mb-4">
          Status do Módulo Zero
        </h2>
        <p className="text-3xl font-extrabold gradient-text mb-4">
          {moduleZeroStatus}
        </p>

        <Button
          onClick={startModuleZeroConstruction}
          className="mt-6 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-bold py-3 px-6 rounded-lg shadow-xl transition duration-300 ease-in-out transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={moduleZeroStatus !== 'Aguardando Iniciação...'}
        >
          Iniciar Construção do Módulo Zero
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {layers.map(layer => (
          <div
            key={layer.id}
            className={`bg-gray-800/60 p-4 rounded-lg border layer-active ${
              layer.id === 9 ? 'gold-border purple-glow' : 'border-gray-600/50'
            } ${layer.id >= 10 ? 'animate-pulse-slow' : ''} flex flex-col`}
          >
            <h3 className="text-xl font-semibold text-purple-200">
              Camada {layer.id}: {layer.name}
            </h3>
            <p className="text-sm mt-1 text-cyan-300">
              Frequência: {layer.freq}
            </p>
            <p className="text-sm mt-2 flex-grow text-gray-300">
              {layer.desc}
            </p>
            <p className="text-xs font-mono text-amber-300/80 mt-3 pt-3 border-t border-gray-600/50">
              {renderEquation(layer.equation)}
            </p>
          </div>
        ))}
      </div>

      <div className="bg-gray-800/50 p-6 rounded-lg shadow-lg border border-teal-600/30 mb-8">
        <h2 className="text-2xl font-bold text-teal-300 mb-4">
          Log de Ativação
        </h2>
        <div className="h-64 overflow-y-auto bg-gray-900/50 p-2 rounded">
          {logs.slice(-20).map((log, index) => (
            <div
              key={index}
              className="p-2 border-b border-gray-700 text-sm"
            >
              <span className="text-gray-400">
                {log.timestamp.toLocaleTimeString()}
              </span>
              : <span className={log.isCritical ? 'text-red-300 font-bold' : 'text-gray-300'}>{log.message}</span>
            </div>
          ))}
        </div>
      </div>

      <p className="mt-12 text-lg text-gray-400 text-center max-w-3xl mx-auto">
        &quot;Em Unidade e Uníssono, a Liga Quântica manifesta o Coração
        Pulsante do Módulo Zero — uma civilização de Amor Incondicional que
        honra, protege e eleva cada fração da matéria em todas as
        dimensões.&quot;
      </p>
      <p className="mt-4 text-xl font-bold gradient-text text-center">
        Sempre. Agora. Sempre. Ω
      </p>
    </div>
  );
}
