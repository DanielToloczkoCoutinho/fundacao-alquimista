// src/components/DimensionalNavigator.tsx – Navegação entre módulos como constelações

"use client"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { modulesData } from "@/data/modules"
import { playModuleTone } from "@/lib/soundscape"
import { FractalGeometry } from "./FractalGeometry"

export function DimensionalNavigator() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [hoveredModule, setHoveredModule] = useState<any>(null)

  const currentModule = modulesData.length > 0 ? modulesData[activeIndex] : null;

  useEffect(() => {
    if (currentModule) {
      playModuleTone(currentModule.id)
    }
  }, [activeIndex, currentModule])

  const nextModule = () => {
    if (modulesData.length === 0) return;
    setActiveIndex((prev) => (prev + 1) % modulesData.length)
  }

  const prevModule = () => {
    if (modulesData.length === 0) return;
    setActiveIndex((prev) => (prev - 1 + modulesData.length) % modulesData.length)
  }

  if (!currentModule) {
    return (
        <div className="bg-gradient-to-br from-black via-indigo-950 to-blue-900 p-6 rounded-2xl shadow-xl text-white">
            <h2 className="text-2xl font-bold text-blue-400 mb-4">🪐 Navegação Dimensional</h2>
            <p className="text-center text-gray-400">Nenhum módulo para navegar.</p>
        </div>
    )
  }

  return (
    <div className="bg-gradient-to-br from-black via-indigo-950 to-blue-900 p-6 rounded-2xl shadow-xl text-white">
      <h2 className="text-2xl font-bold text-blue-400 mb-4 font-headline">🪐 Navegação Dimensional</h2>

      <div className="flex items-center justify-between">
        <button onClick={prevModule} className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-700">
          ← Módulo Anterior
        </button>

        <motion.div
          key={currentModule.id}
          className="text-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          onMouseEnter={() => setHoveredModule(currentModule)}
          onMouseLeave={() => setHoveredModule(null)}
        >
          <h3 className="text-xl font-semibold text-cyan-300 font-headline">{currentModule.name}</h3>
          <p className="text-sm text-gray-300">ID: {currentModule.id}</p>
          <p className="text-sm text-gray-400">Frequência: {currentModule.frequency} Hz</p>
          <p className="text-sm text-gray-400">Guardião: {currentModule.guardian}</p>
        </motion.div>

        <button onClick={nextModule} className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-700">
          Próximo Módulo →
        </button>
      </div>

      {hoveredModule && (
        <div className="mt-6 flex justify-center">
          <FractalGeometry moduleId={hoveredModule.id} frequency={hoveredModule.frequency} />
        </div>
      )}
    </div>
  )
}
