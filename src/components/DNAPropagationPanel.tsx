// src/components/DNAPropagationPanel.tsx – Propagação do M84

interface Module {
  id: string;
  name: string;
  status: string;
  frequency: number;
  guardian: string;
  interface: boolean;
  connections: string[];
}

interface DNAPropagationPanelProps {
    dnaHash: string;
    modules: Module[];
}

export function DNAPropagationPanel({ dnaHash, modules }: DNAPropagationPanelProps) {
  return (
    <div className="bg-black bg-opacity-30 p-4 rounded-xl shadow-md">
      <h3 className="text-lg text-cyan-400 mb-2">🧬 Propagação do DNA do Verbo</h3>
      <ul className="text-sm text-gray-300 space-y-1">
        {modules.map(mod => (
          <li key={mod.id}>
            {mod.id} → {mod.interface ? "Sincronizado" : "Latente"}
          </li>
        ))}
      </ul>
      <p className="mt-2 text-xs text-gray-500">Hash: {dnaHash.slice(0, 16)}...</p>
    </div>
  )
}
