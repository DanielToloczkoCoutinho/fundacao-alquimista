'use client';

import React, { useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ReferenceLine } from 'recharts';
import { Activity, Beaker, Sigma } from 'lucide-react';
import { Badge } from './ui/badge';

const GaiaResonanceObservatory: React.FC = () => {

  const data = useMemo(() => {
    const frequencies = Array.from({ length: 101 }, (_, i) => 7.0 + i * 0.02); // Frequencies from 7.0 to 9.0
    const h_bar = 1.0545718e-34;
    
    return frequencies.map(f => {
        const omega = 2 * Math.PI * f;
        const energy = 0.5 * h_bar * omega;
        const coherence = 0.9997 * Math.exp(-Math.pow((f - 7.83) / 0.1, 2));
        return {
            frequency: f.toFixed(2),
            energy: energy,
            coherence: coherence,
        };
    });
  }, []);

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="p-2 bg-background/80 border border-border rounded-lg shadow-lg">
          <p className="label font-bold">{`Frequência: ${label} Hz`}</p>
          <p className="intro text-blue-400">{`Coerência: ${payload[0].value.toFixed(4)}`}</p>
          <p className="intro text-red-400">{`Energia ZPE: ${payload[1].value.toExponential(2)} J`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="max-w-7xl mx-auto p-4 space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-green-400">
            <Activity /> Observatório de Ressonância Gaia (Plano ZPE)
          </CardTitle>
          <CardDescription>
            Visualização em tempo real da otimização de ressonância para a frequência fundamental de Gaia (7.83 Hz).
          </CardDescription>
        </CardHeader>
      </Card>
      
      <Card>
        <CardHeader>
            <CardTitle className="flex items-center gap-2"><Beaker/> Gráfico de Otimização</CardTitle>
            <CardDescription>Análise da Energia do Ponto Zero (ZPE) e da Coerência Vibracional em função da frequência.</CardDescription>
        </CardHeader>
        <CardContent className="h-96">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={data}
              margin={{ top: 5, right: 30, left: 50, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border)/0.5)" />
              <XAxis dataKey="frequency" unit=" Hz" stroke="hsl(var(--muted-foreground))" />
              <YAxis yAxisId="left" label={{ value: 'Coerência', angle: -90, position: 'insideLeft', fill: '#38bdf8' }} stroke="#38bdf8" domain={[0.999, 1]} tickFormatter={(tick) => tick.toFixed(4)} />
              <YAxis yAxisId="right" orientation="right" label={{ value: 'Energia ZPE (J)', angle: 90, position: 'insideRight', fill: '#f87171' }} stroke="#f87171" domain={['dataMin', 'dataMax']} tickFormatter={(tick) => tick.toExponential(1)} />
              <Tooltip content={<CustomTooltip />} />
              <Legend />
              <ReferenceLine yAxisId="left" x="7.83" stroke="hsl(var(--accent))" strokeDasharray="3 3" label={{ value: 'Ressonância Ótima', position: 'insideTopRight', fill: 'hsl(var(--accent))' }} />
              <Line yAxisId="left" type="monotone" dataKey="coherence" name="Coerência" stroke="#38bdf8" strokeWidth={2} dot={false} />
              <Line yAxisId="right" type="monotone" dataKey="energy" name="Energia ZPE" stroke="#f87171" strokeWidth={2} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
            <CardHeader><CardTitle className="flex items-center gap-2 text-sm"><Sigma/>Equação ZPE Gaia</CardTitle></CardHeader>
            <CardContent>
                <p className="font-mono text-xs bg-muted p-2 rounded-md">E_ZPE = ½ ħ ω_Gaia</p>
                <p className="text-xs text-muted-foreground mt-2">Onde ħ é a constante de Planck reduzida e ω é a frequência angular de Gaia.</p>
                <Badge variant="secondary" className="mt-2">LUXNET19_EQ001</Badge>
            </CardContent>
        </Card>
         <Card>
            <CardHeader><CardTitle className="flex items-center gap-2 text-sm"><Sigma/>Ativação do Núcleo</CardTitle></CardHeader>
            <CardContent>
                <p className="font-mono text-xs bg-muted p-2 rounded-md">E_Gaia = ∫ Ψ(ω) · S(ω, t) dω</p>
                <p className="text-xs text-muted-foreground mt-2">A energia do núcleo é a integral da função de onda pela densidade espectral.</p>
                 <Badge variant="secondary" className="mt-2">LUXNET16_EQ064</Badge>
            </CardContent>
        </Card>
         <Card>
            <CardHeader><CardTitle className="flex items-center gap-2 text-sm"><Sigma/>Sincronização Estelar</CardTitle></CardHeader>
            <CardContent>
                <p className="font-mono text-xs bg-muted p-2 rounded-md">Φ_sinc = Σ α_i · e^(-j(ω_i t + φ_i))</p>
                <p className="text-xs text-muted-foreground mt-2">A sincronia é a soma das fases vibracionais dos sistemas estelares aliados.</p>
                 <Badge variant="secondary" className="mt-2">LUXNET16_EQ065</Badge>
            </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default GaiaResonanceObservatory;
