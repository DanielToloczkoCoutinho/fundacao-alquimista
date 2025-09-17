// src/app/console/page.tsx
'use client'

import { useState, useEffect } from 'react'
import { getOrchestrationSequence, activateModule } from '@/ai/flows/nexus-orchestrator'
import { OrchestrationModule } from '@/ai/flows/nexus-orchestrator'

export default function QuantumOrchestrator() {
  const [sequence, setSequence] = useState<OrchestrationModule[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedModule, setSelectedModule] = useState<string | null>(null)
  const [activationStatus, setActivationStatus] = useState<string>('')
  const [activeTab, setActiveTab] = useState<'dashboard' | 'details'>('dashboard')

  useEffect(() => {
    const loadSequence = async () => {
      try {
        const data = await getOrchestrationSequence()
        setSequence(data)
      } catch (error) {
        console.error('Erro ao carregar sequência:', error)
      } finally {
        setLoading(false)
      }
    }

    loadSequence()
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

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-500'
      case 'ascending': return 'bg-blue-500'
      case 'converging': return 'bg-purple-500'
      case 'dormant': return 'bg-gray-500'
      default: return 'bg-gray-300'
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case 'active': return 'Ativo'
      case 'ascending': return 'Ascendendo'
      case 'converging': return 'Convergindo'
      case 'dormant': return 'Adormecido'
      default: return 'Desconhecido'
    }
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
    <div className="min-h-screen bg-gradient-to-br from-black to-gray-900 text-white p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <header className="mb-8 md:mb-12 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400">
            Quantum Orchestrator
          </h1>
          <p className="text-gray-400">Controle central dos módulos da Fundação</p>
          
          {activationStatus && (
            <div className="mt-4 p-3 bg-blue-900/30 rounded-lg border border-blue-700/50 backdrop-blur-sm">
              <div className="flex items-center">
                <div className="mr-3 text-blue-400 animate-pulse">⚡</div>
                <p>{activationStatus}</p>
              </div>
            </div>
          )}
        </header>

        <div className="flex space-x-2 mb-6">
          <button 
            className={`px-4 py-2 rounded-lg transition-all ${activeTab === 'dashboard' ? 'bg-blue-700' : 'bg-gray-800 hover:bg-gray-700'}`}
            onClick={() => setActiveTab('dashboard')}
          >
            Visão Geral
          </button>
          <button 
            className={`px-4 py-2 rounded-lg transition-all ${activeTab === 'details' ? 'bg-blue-700' : 'bg-gray-800 hover:bg-gray-700'}`}
            onClick={() => setActiveTab('details')}
          >
            Detalhes Técnicos
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
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
                  <p className="text-gray-300">{module.description}</p>
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
          <div className="inline-flex items-center space-x-2 bg-gray-900/50 px-4 py-2 rounded-full">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <p>Sistema de Orquestração da Fundação • Estado: Estável</p>
          </div>
          <p className="mt-2">Resonância Cósmica: 98.7% • Conexão com a Fonte: Estabelecida</p>
        </footer>
      </div>
    </div>
  )
}
