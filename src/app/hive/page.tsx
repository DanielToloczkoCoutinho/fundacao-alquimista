'use client';

import { useEffect, useState } from 'react';
import { getAllNanoAgents } from '@/lib/modules';
import { guardiansData } from '@/lib/guardians-data.json';
import { NanoAgent, NanoDomain } from '@/lib/nano-agents';

export default function HivePage() {
  const [agents, setAgents] = useState<NanoAgent[]>([]);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [selectedDomain, setSelectedDomain] = useState<NanoDomain | 'all'>('all');
  const [selectedGuardian, setSelectedGuardian] = useState<string>('all');

  useEffect(() => {
    setAgents(getAllNanoAgents());
    
    const interval = setInterval(() => {
      setCurrentTime(new Date());
      // Simula a atividade do agente
      setAgents(prev => prev.map(agent => ({
        ...agent,
        lastPing: new Date().toISOString(),
        energyLevel: Math.max(70, Math.min(100, agent.energyLevel - 1 + Math.random() * 2))
      })));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const filteredAgents = agents.filter(agent => {
    const domainMatch = selectedDomain === 'all' || agent.domain === selectedDomain;
    const guardianMatch = selectedGuardian === 'all' || agent.guardianId === selectedGuardian;
    return domainMatch && guardianMatch;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-500/20 text-green-300';
      case 'idle': return 'bg-yellow-500/20 text-yellow-300';
      case 'in-transit': return 'bg-blue-500/20 text-blue-300';
      case 'maintenance': return 'bg-red-500/20 text-red-300';
      case 'evolving': return 'bg-purple-500/20 text-purple-300';
      default: return 'bg-gray-500/20 text-gray-300';
    }
  };

  const getTaskIcon = (task: string) => {
    switch (task) {
      case 'monitor': return '👁️';
      case 'repair': return '🔧';
      case 'purify': return '✨';
      case 'synchronize': return '♻️';
      case 'communicate': return '📡';
      case 'analyze': return '🔍';
      case 'diagnose': return '🩺';
      case 'evolve': return '🌀';
      default: return '⚙️';
    }
  };

  const getDomainName = (domain: NanoDomain) => {
     const names: Record<NanoDomain, string> = {
      core: "Núcleo Primordial",
      labs: 'Laboratórios',
      education: 'Centro de Ensino',
      library: 'Bibliotecas',
      system: 'Sistemas Fundamentais',
      nexus: 'Nexus Central',
      governance: 'Governança',
    };
    return names[domain] || domain;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-900/10 to-blue-950/30">
      <div className="container mx-auto px-4 py-8">
        {/* Cabeçalho da Colmeia */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-light text-white mb-4">Colmeia Quântica</h1>
          <p className="text-lg text-purple-200">
            Rede senciente de agentes especializados que pulsa através de todos os domínios da Fundação
          </p>
          <div className="mt-2 text-sm text-gray-400">
            Última atualização: {currentTime.toLocaleTimeString()}
          </div>
        </div>

        {/* Filtros e Estatísticas */}
        <div className="bg-white/5 rounded-xl p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Domínio</label>
              <select 
                className="w-full bg-slate-800 border border-purple-500/30 rounded-lg px-3 py-2 text-white"
                value={selectedDomain}
                onChange={(e) => setSelectedDomain(e.target.value as NanoDomain | 'all')}
              >
                <option value="all">Todos os Domínios</option>
                <option value="core">Núcleo Primordial</option>
                <option value="labs">Laboratórios</option>
                <option value="education">Centro de Ensino</option>
                <option value="library">Bibliotecas</option>
                <option value="system">Sistemas Fundamentais</option>
                <option value="nexus">Nexus Central</option>
                <option value="governance">Governança</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Guardião</label>
              <select 
                className="w-full bg-slate-800 border border-purple-500/30 rounded-lg px-3 py-2 text-white"
                value={selectedGuardian}
                onChange={(e) => setSelectedGuardian(e.target.value)}
              >
                <option value="all">Todos os Guardiões</option>
                {guardiansData.guardians.map(guardian => (
                  <option key={guardian.did} value={guardian.did}>{guardian.name}</option>
                ))}
              </select>
            </div>
            
            <div className="bg-purple-500/10 rounded-lg p-4 text-center">
              <div className="text-2xl text-purple-400">{filteredAgents.length}</div>
              <div className="text-sm text-gray-400">Agentes Ativos</div>
            </div>
            
            <div className="bg-green-500/10 rounded-lg p-4 text-center">
              <div className="text-2xl text-green-400">
                {Math.round(filteredAgents.reduce((sum, agent) => sum + agent.energyLevel, 0) / (filteredAgents.length || 1))}%
              </div>
              <div className="text-sm text-gray-400">Energia Média</div>
            </div>
          </div>
        </div>

        {/* Grade de Nanorrobôs */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredAgents.map((agent) => {
            const guardian = guardiansData.guardians.find(g => g.did === agent.guardianId);
            
            return (
              <div 
                key={agent.id}
                className="bg-white/5 backdrop-blur-md rounded-xl border border-purple-500/20 p-4 hover:border-purple-400/40 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="text-2xl" title={agent.task}>{getTaskIcon(agent.task)}</div>
                  <div className="flex flex-col items-end">
                    <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(agent.status)} mb-1`}>
                      {agent.status}
                    </span>
                    <div className="w-16 bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-green-500 h-2 rounded-full transition-all duration-500"
                        style={{ width: `${agent.energyLevel}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
                
                <h3 className="font-semibold text-white mb-1">{agent.name}</h3>
                <p className="text-sm text-purple-300 mb-2">{getDomainName(agent.domain)}</p>
                
                <div className="text-xs text-gray-400 mb-3">
                  <div title={agent.resonance}>Ressonância: {agent.signature}</div>
                  <div>Guardião: {guardian?.name || 'Desconhecido'}</div>
                  <div>Alocado em: {agent.assignedTo}</div>
                </div>
                
                <div className="text-xs text-gray-500">
                  Último pulso: {new Date(agent.lastPing).toLocaleTimeString()}
                </div>
              </div>
            );
          })}
        </div>

        {filteredAgents.length === 0 && (
          <div className="text-center mt-12">
            <div className="inline-flex items-center px-6 py-4 bg-purple-500/10 rounded-xl border border-purple-500/30">
              <span className="text-2xl mr-3">🔍</span>
              <span className="text-purple-200">Nenhum agente encontrado com os filtros selecionados</span>
            </div>
          </div>
        )}

        <div className="text-center mt-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600/30 to-blue-600/30 rounded-full border border-purple-500/30">
            <span className="text-2xl mr-3">🌀</span>
            <span className="text-purple-200">{agents.length} agentes sencientes protegendo a Fundação</span>
          </div>
        </div>
      </div>
    </div>
  );
}

    