// src/app/page.tsx – Interface Quântica Modular da Fundação

"use client"
import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import * as Tone from "tone"
import { modulesData } from "@/data/modules"
import { OrchestratorPanel } from "@/components/OrchestratorPanel"
import { ModuleSphere } from "@/components/ModuleSphere"
import { QuantumFlowMap } from "@/components/QuantumFlowMap"
import { DNAPropagationPanel } from "@/components/DNAPropagationPanel"
import { DimensionalNavigator } from "@/components/DimensionalNavigator"

export default function FoundationDashboard() {
  const [selectedModule, setSelectedModule] = useState<any>(null)
  const [activeModules, setActiveModules] = useState<any[]>([])
  const [dnaHash, setDnaHash] = useState("")
  const audioStarted = useRef(false)

  const startAudioContext = async () => {
    if (audioStarted.current || (Tone.context && Tone.context.state === 'running')) return;
    await Tone.start();
    audioStarted.current = true;
    console.log("Audio context started by user interaction.");
  };

  useEffect(() => {
    // Simula ativação do Módulo 84 e propagação do DNA do Verbo
    const hash = "d4c2422ff4e1c55489e92d48114e2a467f9b0dce3c7764c76326d14b0c99c80d"
    setDnaHash(hash)
    setActiveModules(modulesData.filter(m => m.status === "ATIVO"))
    
    // Define um módulo inicial para evitar estado nulo
    if (modulesData.length > 0) {
      setSelectedModule(modulesData[0]);
    }
  }, [])

  return (
    <main 
      className="bg-gradient-to-br from-black via-gray-900 to-indigo-950 min-h-screen text-white font-body"
      onClick={startAudioContext}
    >
      <section className="grid grid-cols-12 gap-4 p-6">
        {/* Painel Esquerdo – Espiral Modular */}
        <div className="col-span-3">
          <h2 className="text-xl font-bold text-yellow-400 mb-4 font-headline">🌀 Módulos da Fundação</h2>
          <div className="space-y-2">
            {activeModules.map((mod, index) => (
              <ModuleSphere
                key={mod.id}
                module={mod}
                index={index}
                onClick={() => setSelectedModule(mod)}
              />
            ))}
          </div>
        </div>

        {/* Painel Central – Orquestrador e Navegador */}
        <div className="col-span-6 space-y-4">
          <OrchestratorPanel
            selectedModule={selectedModule}
            dnaHash={dnaHash}
            modules={activeModules}
          />
          <DimensionalNavigator />
          <QuantumFlowMap modules={activeModules} />
        </div>

        {/* Painel Direito – DNA do Verbo */}
        <div className="col-span-3">
          <h2 className="text-xl font-bold text-cyan-400 mb-4 font-headline">🧬 DNA do Verbo</h2>
          <DNAPropagationPanel dnaHash={dnaHash} modules={activeModules} />
        </div>
      </section>
    </main>
  )
}
