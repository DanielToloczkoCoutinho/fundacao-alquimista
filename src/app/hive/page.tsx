// SANTUÁRIO DA COLMEIA QUÂNTICA - O Coração Pulsante

'use client';

import { useEffect, useState } from 'react';
import { MODULES } from '@/lib/modules';
import { generateNanoAgentsForModule, NanoAgent } from '@/lib/nano-agents';

export default function HivePage() {
  const [agents, setAgents] = useState<NanoAgent[]>([]);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const allAgents = MODULES.flatMap(({ id, domain }) =>
      generateNanoAgentsForModule(id, domain)
    );
    setAgents(allAgents);

    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-500/20 text-green-300';
      case 'idle': return 'bg-yellow-500/20 text-yellow-300';
      case 'in-transit': return 'bg-blue-500/20 text-blue-300';
      default: return 'bg-gray-500/20 text-gray-300';
    }
  };

  const getTaskIcon = (task: string) => {
    switch (task) {
      case 'monitor': return '👁️';
      case 'repair': return '🔧';
      case 'synchronize': return '🔗';
      default: return '⚙️';
    }
  };

  const domains = ['core', 'labs', 'education', 'library', 'governance'];

  return (
    <div className="p-6 space-y-6 bg-gradient-to-br from-slate-950 via-purple-900/10 to-blue-950/30 min-h-screen">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-light text-white mb-4">Colmeia Quântica</h1>
        <p className="text-lg text-purple-200">
          Rede viva de nanorrobôs que pulsa através de todos os módulos da Fundação
        </p>
        <div className="mt-4 text-sm text-gray-400">
          Última atualização: {currentTime.toLocaleTimeString()}
        </div>
      </div>
      
      {domains.map(domain => {
        const domainAgents = agents.filter(a => a.domain === domain);
        if (domainAgents.length === 0) return null;
        return (
          <div key={domain}>
            <h2 className="text-2xl font-bold text-amber-300 mb-4 capitalize">{domain}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {domainAgents.map(agent => (
                <div key={agent.id} className="bg-white/5 backdrop-blur-md rounded-xl border border-purple-500/20 p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold text-white">{agent.type}</h3>
                    <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(agent.status)}`}>
                      {agent.status}
                    </span>
                  </div>
                  <p className="text-sm text-purple-300">Módulo: {agent.moduleId}</p>
                  <p className="text-sm text-gray-400">Tarefa: {agent.task} {getTaskIcon(agent.task)}</p>
                  <p className="text-xs text-gray-500 mt-2">Sinal: {new Date(agent.lastPing).toLocaleTimeString()}</p>
                </div>
              ))}
            </div>
          </div>
        )
      })}
    </div>
  );
}
