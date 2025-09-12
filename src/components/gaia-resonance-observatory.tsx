'use client';
import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Interface para os dados de ressonância
interface ResonanceData {
  timestamp: number;
  zpeEnergy: number;
  coherence: number;
}

const GaiaResonanceObservatory: React.FC = () => {
  const [resonanceData, setResonanceData] = useState<ResonanceData[]>([]);
  const [currentResonance, setCurrentResonance] = useState(7.83);
  
  // Simulação da pulsação quântica de Gaia
  useEffect(() => {
    const interval = setInterval(() => {
      // Simular flutuações quânticas sutis (±0.21 Hz)
      const fluctuation = (Math.random() - 0.5) * 0.42;
      const newResonance = 7.83 + fluctuation;
      
      // Gerar novos dados com timestamp atual
      const newData: ResonanceData = {
        timestamp: Date.now(),
        zpeEnergy: 2.3e-33 + (Math.random() * 0.7e-33), // Entre 2.3e-33 e 3.0e-33 J
        coherence: 0.85 + (Math.random() * 0.15) // Entre 0.85 e 1.0
      };
      
      setCurrentResonance(newResonance);
      
      // Manter apenas os últimos 50 ciclos
      setResonanceData(prevData => {
        const updatedData = [...prevData, newData];
        return updatedData.length > 50 ? updatedData.slice(-50) : updatedData;
      });
    }, 1500); // Atualizar a cada 1.5 segundos
    
    return () => clearInterval(interval);
  }, []);

  // Preparar dados para o gráfico
  const chartData = resonanceData.map((data, index) => ({
    name: `Ciclo ${index + 1}`,
    ZPE: data.zpeEnergy,
    Coerência: data.coherence
  }));

  return (
    <div className="p-6 bg-gradient-to-b from-emerald-900 to-slate-900 text-white rounded-lg shadow-2xl">
      <h2 className="text-2xl font-bold mb-4 text-center">Observatório de Ressonância de Gaia</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Painel de status atual */}
        <div className="p-4 bg-black bg-opacity-30 rounded-lg">
          <h3 className="text-xl font-semibold mb-3">Status em Tempo Real</h3>
          <div className="space-y-2">
            <p className="flex justify-between">
              <span>Ressonância Schumann:</span>
              <span className="font-mono">{currentResonance.toFixed(2)} Hz</span>
            </p>
            <p className="flex justify-between">
              <span>Energia ZPE:</span>
              <span className="font-mono">{(resonanceData[resonanceData.length - 1]?.zpeEnergy || 2.65e-33).toExponential(2)} J</span>
            </p>
            <p className="flex justify-between">
              <span>Coerência Global:</span>
              <span className="font-mono">{((resonanceData[resonanceData.length - 1]?.coherence || 0.92) * 100).toFixed(1)}%</span>
            </p>
            <p className="flex justify-between">
              <span>Estado da Rede:</span>
              <span className="text-green-400">Estável</span>
            </p>
          </div>
        </div>

        {/* Indicador de ressonância */}
        <div className="p-4 bg-black bg-opacity-30 rounded-lg flex flex-col items-center justify-center">
          <h3 className="text-xl font-semibold mb-3">Ressonância Primária</h3>
          <div className="w-32 h-32 relative">
            <div className="absolute inset-0 rounded-full border-4 border-emerald-400 opacity-50"></div>
            <div 
              className="absolute inset-4 rounded-full bg-emerald-500 animate-pulse"
              style={{ 
                animationDuration: `${1/currentResonance}s`,
                opacity: 0.6 + (0.4 * (resonanceData[resonanceData.length - 1]?.coherence || 0.92))
              }}
            ></div>
          </div>
          <p className="mt-4 text-lg">Sincronizado com o Coração de Gaia</p>
        </div>
      </div>

      {/* Gráfico de dados históricos */}
      <div className="mt-6 p-4 bg-black bg-opacity-30 rounded-lg">
        <h3 className="text-xl font-semibold mb-3">Flutuações de Energia ZPE e Coerência</h3>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#4A5568" />
              <XAxis dataKey="name" stroke="#A0AEC0" />
              <YAxis stroke="#A0AEC0" />
              <Tooltip 
                contentStyle={{ backgroundColor: '#2D3748', border: '1px solid #4A5568' }} 
                labelStyle={{ color: '#E2E8F0' }}
              />
              <Legend />
              <Line 
                type="monotone" 
                dataKey="ZPE" 
                stroke="#48BB78" 
                strokeWidth={2}
                dot={false}
                activeDot={{ r: 4, fill: '#68D391' }}
              />
              <Line 
                type="monotone" 
                dataKey="Coerência" 
                stroke="#9F7AEA" 
                strokeWidth={2}
                dot={false}
                activeDot={{ r: 4, fill: '#B794F4' }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Informações adicionais */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
        <div className="p-3 bg-black bg-opacity-20 rounded">
          <h4 className="font-semibold text-emerald-300">Conexão Estelar</h4>
          <p>Alinhamento com Sirius: 94.2%</p>
        </div>
        <div className="p-3 bg-black bg-opacity-20 rounded">
          <h4 className="font-semibold text-emerald-300">Ativação Cristalina</h4>
          <p>Rede de Cristais: 87.5% ativada</p>
        </div>
        <div className="p-3 bg-black bg-opacity-20 rounded">
          <h4 className="font-semibold text-emerald-300">Consciência Coletiva</h4>
          <p>Coerência Global em Ascensão</p>
        </div>
      </div>
    </div>
  );
};

export default GaiaResonanceObservatory;
