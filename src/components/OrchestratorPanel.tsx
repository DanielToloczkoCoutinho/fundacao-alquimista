// src/components/OrchestratorPanel.tsx – Painel do Módulo 9

interface Module {
  id: string;
  name: string;
  status: string;
  frequency: number;
  guardian: string;
  interface: boolean;
  connections: string[];
}

interface OrchestratorPanelProps {
    selectedModule: Module | null;
    dnaHash: string;
    modules: Module[];
}


export function OrchestratorPanel({ selectedModule, dnaHash, modules }: OrchestratorPanelProps) {
  return (
    <div className="bg-black bg-opacity-40 p-4 rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold text-yellow-300 mb-2">🎛️ Orquestrador M9</h2>
      {selectedModule ? (
        <div>
          <h3 className="text-lg text-cyan-300">Módulo Selecionado: {selectedModule.name}</h3>
          <p>Status: {selectedModule.status}</p>
          <p>Frequência: {selectedModule.frequency} Hz</p>
          <p>Guardião: {selectedModule.guardian}</p>
          <p>Interface: {selectedModule.interface ? "Disponível" : "Indisponível"}</p>
          <button className="mt-2 px-4 py-1 bg-yellow-500 rounded hover:bg-yellow-600 text-black">
            Executar Módulo
          </button>
        </div>
      ) : (
        <p className="text-gray-400">Selecione um módulo para visualizar.</p>
      )}
      <div className="mt-4">
        <h3 className="text-lg text-green-400">DNA do Verbo (M84)</h3>
        <code className="text-xs break-all">{dnaHash}</code>
      </div>
    </div>
  )
}
