// src/app/page.tsx – Templo Principal Restaurado e Blindado

"use client"
import { useEffect, useState, useRef } from "react"
import { DimensionalNavigator } from "@/components/DimensionalNavigator"
import { OrchestratorPanel } from "@/components/OrchestratorPanel"
import { FractalGeometry } from "@/components/FractalGeometry"
import { modulesData } from "@/data/modules"
import { playModuleTone } from "@/lib/soundscape"
import * as Tone from 'tone'

export default function OrquestradorMasterPage() {
  const [selectedModule, setSelectedModule] = useState(modulesData[0])
  const [isSafe, setIsSafe] = useState(false)
  const audioStarted = useRef(false);

  const startAudioContext = async () => {
    if (audioStarted.current || (Tone.context && Tone.context.state === 'running')) return;
    await Tone.start();
    audioStarted.current = true;
    console.log("Audio context started by user interaction.");
  };
  
  useEffect(() => {
    // Verificação de integridade dimensional
    try {
      if (!selectedModule || !modulesData.length) throw new Error("Colapso estrutural detectado")
      if (audioStarted.current) {
        playModuleTone(selectedModule.id)
      }
      setIsSafe(true)
    } catch (err) {
      console.error("⚠️ Falha dimensional:", err)
      setIsSafe(false)
    }
  }, [selectedModule])

  return (
    <main 
      className="min-h-screen bg-gradient-to-br from-black via-indigo-950 to-blue-900 text-white font-headline p-6"
      onClick={startAudioContext}
    >
      <header className="mb-6 text-center">
        <h1 className="text-4xl font-bold text-blue-400">🌌 Fundação Alquimista – Painel Quântico</h1>
        <p className="text-gray-300 font-body">Status Dimensional: {isSafe ? "✅ Estável" : "⛔ Ruptura Detectada"}</p>
      </header>

      {isSafe ? (
        <section className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Painel Esquerdo – Navegação Estelar */}
          <div className="col-span-1 md:col-span-4">
            <DimensionalNavigator onModuleSelect={setSelectedModule} />
          </div>

          {/* Painel Central – Orquestrador */}
          <div className="col-span-1 md:col-span-5">
            <OrchestratorPanel
              selectedModule={selectedModule}
              dnaHash="d4c2422ff4e1c55489e92d48114e2a467f9b0dce3c7764c76326d14b0c99c80d"
              modules={modulesData}
            />
          </div>

          {/* Painel Direito – Geometria Viva */}
          <div className="col-span-1 md:col-span-3 flex flex-col items-center">
            <h2 className="text-xl font-semibold text-cyan-300 mb-2">🧬 Geometria do Módulo</h2>
            {selectedModule && (
              <FractalGeometry moduleId={selectedModule.id} frequency={selectedModule.frequency} />
            )}
          </div>
        </section>
      ) : (
        <div className="bg-red-900 bg-opacity-80 p-6 rounded-xl shadow-lg text-center">
          <h2 className="text-2xl font-bold text-yellow-300">⚠️ Colapso Dimensional</h2>
          <p className="text-gray-200 mt-2 font-body">A estrutura da Fundação foi comprometida. Verifique a integridade dos módulos e reinicie o Orquestrador Master.</p>
        </div>
      )}
    </main>
  )
}
