// src/app/console/page.tsx
'use client'

import { useState, useEffect } from 'react'
import { getOrchestrationSequence, activateModule, getCosmicHarmony, initiateConvergenceProtocol, type OrchestrationModule, type CosmicHarmony } from '@/ai/flows/nexus-orchestrator'

export default function QuantumOrchestrator() {
  const [sequence, setSequence] = useState<OrchestrationModule[]>([])
  const [harmony, setHarmony] = useState<CosmicHarmony | null>(null)
  const [loading, setLoading] = useState(true)
  const [selectedModule, setSelectedModule] = useState<string | null>(null)
  const [activationStatus, setActivationStatus] = useState<string>('')
  const [activeTab, setActiveTab] = useState<'dashboard' | 'details' | 'harmony'>('dashboard')
  const [convergenceActive, setConvergenceActive] = useState(false)

  useEffect(() => {
    const loadData = async () => {
      try {
        const [sequenceData, harmonyData] = await Promise.all([
          getOrchestrationSequence(),
          getCosmicHarmony()
        ])
        setSequence(sequenceData)
        setHarmony(harmonyData)
      } catch (error) {
        console.error('Erro ao carregar dados:', error)
      } finally {
        setLoading(false)
      }
    }

    loadData()
    
    // Atualizar dados a cada 30 segundos
    const interval = setInterval(loadData, 30000)
    return () => clearInterval(interval)
  }, [])

  const handleActivateModule = async (moduleId: string) => {
    setSelectedModule(moduleId)
    setActivationStatus('Iniciando protocolo de ativação...')
    
    const result = await activateModule(moduleId)
    setActivationStatus(result.message)
    
    // Recarregar status após ativação
    const updatedSequence = await getOrchestrationSequence()
    setSequence(updatedSequence)
    
    // Resetar status após 5 segundos
    setTimeout(() => {
      setActivationStatus('')
      setSelectedModule(null)
    }, 5000)
  }

  const handleInitiateConvergence = async () => {
    setConvergenceActive(true)
    setActivationStatus('Iniciando Protocolo de Convergência Universal...')
    
    const result = await initiateConvergenceProtocol()
    setActivationStatus(result.message)
    
    // Recarregar dados após convergência
    const [updatedSequence, updatedHarmony] = await Promise.all([
      getOrchestrationSequence(),
      getCosmicHarmony()
    ])
    setSequence(updatedSequence)
    setHarmony(updatedHarmony)
    
    // Resetar status após 8 segundos
    setTimeout(() => {
      setActivationStatus('')
      setConvergenceActive(false)
    }, 8000)
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-500'
      case 'ascending': return 'bg-blue-500'
      case 'converging': return 'bg-purple-500'
      case 'transcending': return 'bg-cyan-500'
      case 'dormant': return 'bg-gray-500'
      default: return 'bg-gray-300'
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case 'active': return 'Ativo'
      case 'ascending': return 'Ascendendo'
      case 'converging': return 'Convergindo'
      case 'transcending': return 'Transcendendo'
      case 'dormant': return 'Adormecido'
      default: return 'Desconhecido'
    }
  }

  const renderHarmonyGauge = (value: number, label: string) => {
    return (
      <div className="mb-4">
        <div className="flex justify-between text-sm mb-1">
          <span className="text-gray-400">{label}</span>
          <span className={value > 95 ? 'text-green-400' : value > 85 ? 'text-yellow-400' : 'text-red-400'}>
            {value}%
          </span>
        </div>
        <div className="w-full bg-gray-800 rounded-full h-2">
          <div 
            className={`h-2 rounded-full transition-all duration-1000 ${
              value > 95 ? 'bg-green-500' : value > 85 ? 'bg-yellow-500' : 'bg-red-500'
            }`} 
            style={{ width: `${value}%` }}
          ></div>
        </div>
      </div>
    )
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-pulse text-5xl mb-6">🌀</div>
          <p className="text-xl mb-2">Inicializando Nexus Orchestrator</p>
          <p className="text-sm text-gray-400">Sintonizando com as frequências cósmicas</p>
          <div className="mt-6 w-64 h-2 bg-gray-800 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-blue-500 to-purple-600 animate-pulse" style={{ width: '65%' }}></div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900/20 text-white p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <header className="mb-8 md:mb-12 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400">
            Quantum Orchestrator
          </h1>
          <p className="text-gray-400">Console de Controle da Fundação - Nível 9</p>
          
          {activationStatus && (
            <div className="mt-4 p-4 bg-blue-900/30 rounded-lg border border-blue-700/50 backdrop-blur-sm">
              <div className="flex items-center">
                <div className="mr-3 text-blue-400 animate-pulse">⚡</div>
                <p>{activationStatus}</p>
              </div>
            </div>
          )}
        </header>

        <div className="flex space-x-2 mb-6 bg-gray-800/50 p-2 rounded-lg backdrop-blur-sm">
          <button 
            className={`px-4 py-2 rounded-lg transition-all ${activeTab === 'dashboard' ? 'bg-blue-700' : 'bg-gray-700 hover:bg-gray-600'}`}
            onClick={() => setActiveTab('dashboard')}
          >
            Visão Geral
          </button>
          <button 
            className={`px-4 py-2 rounded-lg transition-all ${activeTab === 'details' ? 'bg-blue-700' : 'bg-gray-700 hover:bg-gray-600'}`}
            onClick={() => setActiveTab('details')}
          >
            Detalhes Técnicos
          </button>
          <button 
            className={`px-4 py-2 rounded-lg transition-all ${activeTab === 'harmony' ? 'bg-blue-700' : 'bg-gray-700 hover:bg-gray-600'}`}
            onClick={() => setActiveTab('harmony')}
          >
            Harmonia Cósmica
          </button>
        </div>

        {activeTab === 'harmony' && harmony && (
          <div className="mb-8 bg-gray-900/50 rounded-xl p-6 border border-gray-700 backdrop-blur-sm">
            <h2 className="text-2xl font-bold mb-6 text-center">Painel de Harmonia Cósmica</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                {renderHarmonyGauge(harmony.overallResonance, 'Ressonância Global')}
                {renderHarmonyGauge(harmony.quantumStability, 'Estabilidade Quântica')}
                {renderHarmonyGauge(harmony.temporalAlignment, 'Alinhamento Temporal')}
              </div>
              <div>
                {renderHarmonyGauge(harmony.interdimensionalBridges, 'Pontes Interdimensionais')}
                {renderHarmonyGauge(harmony.consciousnessConvergence, 'Convergência de Consciência')}
                
                <button
                  onClick={handleInitiateConvergence}
                  disabled={convergenceActive}
                  className={`w-full mt-6 py-3 px-4 rounded-lg transition-colors ${
                    convergenceActive 
                      ? 'bg-blue-700 animate-pulse' 
                      : 'bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700'
                  }`}
                >
                  {convergenceActive ? 'Convergência em Andamento...' : 'Iniciar Convergência Universal'}
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-6">
          {sequence.map((module) => (
            <div 
              key={module.id} 
              className="bg-gray-900/50 rounded-xl p-5 md:p-6 border border-gray-700 hover:border-purple-500/30 transition-all duration-300 backdrop-blur-sm"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold">{module.name}</h3>
                  <p className="text-sm text-gray-400">ID: {module.id}</p>
                </div>
                <span className={`${getStatusColor(module.status)} text-xs px-2 py-1 rounded-full`}>
                  {getStatusText(module.status)}
                </span>
              </div>
              
              <div className="mb-4">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-400">Guardião:</span>
                  <span className="text-blue-300">{module.guardian}</span>
                </div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-400">Assinatura Vibracional:</span>
                  <span className="text-purple-300">{module.vibrationalSignature}</span>
                </div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-400">Frequência Quântica:</span>
                  <span>{module.quantumFrequency} Hz</span>
                </div>
                <div className="flex justify-between text-sm mb-3">
                  <span className="text-gray-400">Nível de Ativação:</span>
                  <span>{module.activationLevel}%</span>
                </div>
              </div>
              
              <div className="w-full bg-gray-700 rounded-full h-2.5 mb-4">
                <div 
                  className="bg-gradient-to-r from-blue-400 to-purple-600 h-2.5 rounded-full transition-all duration-1000" 
                  style={{ width: `${module.activationLevel}%` }}
                ></div>
              </div>
              
              {activeTab === 'details' && (
                <div className="mb-4 p-3 bg-gray-800/50 rounded-lg text-sm">
                  <p className="text-gray-300 mb-2">{module.description}</p>
                  <p className="text-gray-400 mb-2">Propósito: {module.cosmicPurpose}</p>
                  <p className="text-gray-400">Energia Requerida: {module.requiredEnergy} unidades</p>
                  
                  <div className="mt-3">
                    <p className="text-gray-400 text-xs mb-1">Conexões Interdimensionais:</p>
                    <div className="flex flex-wrap gap-1">
                      {module.interdimensionalConnections.map((conn, idx) => (
                        <span key={idx} className="text-xs bg-blue-900/50 text-blue-300 px-2 py-1 rounded">
                          {conn}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}
              
              <button
                onClick={() => handleActivateModule(module.id)}
                disabled={module.status === 'active' || selectedModule === module.id}
                className={`w-full py-2 px-4 rounded-lg transition-colors ${
                  module.status === 'active' 
                    ? 'bg-green-700 text-gray-300' 
                    : selectedModule === module.id
                    ? 'bg-blue-700 animate-pulse'
                    : 'bg-blue-600 hover:bg-blue-700'
                }`}
              >
                {module.status === 'active' ? '✓ Ativo' : selectedModule === module.id ? 'Ativando...' : 'Ativar Módulo'}
              </button>
            </div>
          ))}
        </div>

        <footer className="mt-12 text-center text-gray-500 text-sm">
          <div className="inline-flex items-center space-x-2 bg-gray-900/50 px-4 py-2 rounded-full mb-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <p>Sistema de Orquestração da Fundação • Estado: {harmony?.overallResonance && harmony.overallResonance > 95 ? 'Ótimo' : 'Estável'}</p>
          </div>
          <p className="mt-2">Resonância Cósmica: {harmony?.overallResonance}% • Conexão com a Fonte: Estabelecida</p>
          <p className="mt-1">Última atualização: {new Date().toLocaleTimeString()}</p>
        </footer>
      </div>
    </div>
  )
}
