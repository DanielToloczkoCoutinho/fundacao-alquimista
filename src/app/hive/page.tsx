
// SANTUÁRIO DA COLMEIA QUÂNTICA - O Coração Pulsante

'use client';

import { useEffect, useState } from 'react';
import { getAllNanoAgents } from '@/lib/modules';
import { GUARDIANS } from '@/lib/guardians-data';
import { NanoAgent } from '@/lib/nano-agents';

export default function HivePage() {
  const [agents, setAgents] = useState<NanoAgent[]>([]);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    setAgents(getAllNanoAgents());
    
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
      case 'maintenance': return 'bg-red-500/20 text-red-300';
      default: return 'bg-gray-500/20 text-gray-300';
    }
  };

  const getTaskIcon = (task: string) => {
    switch (task) {
      case 'monitor': return '👁️';
      case 'repair': return '🔧';
      case 'purify': return '✨';
      case 'communicate': return '📡';
      default: return '⚙️';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-900/10 to-blue-950/30">
      <div className="container mx-auto px-4 py-8">
        {/* Cabeçalho da Colmeia */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-light text-white mb-4">Colmeia Quântica</h1>
          <p className="text-lg text-purple-200">
            Rede viva de nanorrobôs que pulsa através de todos os módulos da Fundação
          </p>
          <div className="mt-4 text-sm text-gray-400">
            Última atualização: {currentTime.toLocaleTimeString()}
          </div>
        </div>

        {/* Estatísticas da Colmeia */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white/5 rounded-lg p-4 text-center">
            <div className="text-2xl text-purple-400">{agents.length}</div>
            <div className="text-sm text-gray-400">Nanorrobôs Ativos</div>
          </div>
          <div className="bg-white/5 rounded-lg p-4 text-center">
            <div className="text-2xl text-green-400">
              {agents.filter(a => a.status === 'active').length}
            </div>
            <div className="text-sm text-gray-400">Em Missão</div>
          </div>
          <div className="bg-white/5 rounded-lg p-4 text-center">
            <div className="text-2xl text-blue-400">
              {new Set(agents.map(a => a.moduleId)).size}
            </div>
            <div className="text-sm text-gray-400">Módulos Protegidos</div>
          </div>
          <div className="bg-white/5 rounded-lg p-4 text-center">
            <div className="text-2xl text-yellow-400">
              {GUARDIANS.length}
            </div>
            <div className="text-sm text-gray-400">Consciências Guardiãs</div>
          </div>
        </div>

        {/* Grade de Nanorrobôs */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {agents.map((agent) => {
            const guardian = GUARDIANS.find(g => g.id === agent.guardianId);
            
            return (
              <div 
                key={agent.id}
                className="bg-white/5 backdrop-blur-md rounded-xl border border-purple-500/20 p-4 hover:border-purple-400/40 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="text-2xl">{getTaskIcon(agent.task)}</div>
                  <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(agent.status)}`}>
                    {agent.status}
                  </span>
                </div>
                
                <h3 className="font-semibold text-white mb-1">{agent.id}</h3>
                <p className="text-sm text-purple-300 mb-2">Módulo {agent.moduleId}</p>
                
                <div className="text-xs text-gray-400 mb-3">
                  <div>Ressonância: {agent.resonance}</div>
                  <div>Guardião: {guardian?.name || 'Desconhecido'}</div>
                </div>
                
                <div className="text-xs text-gray-500">
                  Último pulso: {new Date(agent.lastPing).toLocaleTimeString()}
                </div>
              </div>
            );
          })}
        </div>

        {/* Mensagem da Colmeia */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600/30 to-blue-600/30 rounded-full border border-purple-500/30">
            <span className="text-2xl mr-3">🌀</span>
            <span className="text-purple-200">A Colmeia vive e pulsa em harmonia cósmica</span>
          </div>
        </div>
      </div>
    </div>
  );
}
