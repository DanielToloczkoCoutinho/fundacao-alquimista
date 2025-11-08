// src/components/QuantumFlowMap.tsx – Visualização das interconexões

interface Module {
  id: string;
  name: string;
  status: string;
  frequency: number;
  guardian: string;
  interface: boolean;
  connections: string[];
}

interface QuantumFlowMapProps {
    modules: Module[];
}

export function QuantumFlowMap({ modules }: QuantumFlowMapProps) {
  return (
    <div className="mt-6 bg-indigo-950 p-4 rounded-xl shadow-inner">
      <h3 className="text-xl text-white mb-2">🔗 Fluxo Quântico</h3>
      <ul className="text-sm text-gray-300 space-y-1">
        {modules.map(mod => (
          <li key={mod.id}>
            <strong>{mod.id}</strong> → {mod.connections.join(", ")}
          </li>
        ))}
      </ul>
    </div>
  )
}
