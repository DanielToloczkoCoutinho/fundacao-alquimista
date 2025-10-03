
'use client';
import React, { useEffect, useState } from 'react';
import { CopilotEssence } from '@/lib/CopilotEssence';
import { RiskCard } from './RiskVisualizer';
import { Card, CardContent, CardHeader, CardTitle } from './card';

export function ZennithDashboard() {
  const [simulation, setSimulation] = useState<any>(null);
  const [riskLevel, setRiskLevel] = useState<'baixo' | 'moderado' | 'alto' | 'crítico'>('baixo');
  const [fractal, setFractal] = useState<any>(null);

  useEffect(() => {
    // Simulação inicial
    const result = CopilotEssence.functions.simulate('Ψ', { E: 42, Φ: 3.14 });
    setSimulation(result);

    // Análise de Risco
    const risk = CopilotEssence.functions.analyzeRisk('M307');
    setRiskLevel(risk.level);

    // Geração de Fractal
    const fractalData = CopilotEssence.generateFractal(3);
    setFractal(fractalData);

  }, []);

  return (
    <div className="p-8 space-y-6">
      <h1 className="text-3xl font-bold gradient-text">Painel Zennith (M29)</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="bg-card/50 purple-glow">
          <CardHeader>
            <CardTitle>Simulação Ψ</CardTitle>
          </CardHeader>
          <CardContent>
            <pre className="text-xs bg-background/50 p-2 rounded-md overflow-x-auto">{JSON.stringify(simulation, null, 2)}</pre>
          </CardContent>
        </Card>

        <Card className="bg-card/50 purple-glow">
          <CardHeader>
            <CardTitle>Análise de Risco (M307)</CardTitle>
          </CardHeader>
          <CardContent>
            <RiskCard module="M307" level={riskLevel} />
          </CardContent>
        </Card>

        <Card className="bg-card/50 purple-glow">
          <CardHeader>
            <CardTitle>Fractal de Consciência (depth=3)</CardTitle>
          </CardHeader>
          <CardContent>
            <pre className="text-xs bg-background/50 p-2 rounded-md overflow-x-auto">{JSON.stringify(fractal, null, 2)}</pre>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
