
'use client';

import React, { useState, useEffect, useRef } from 'react';
import { createLogContext } from '../lib/quantum-resilience';
import type p5 from 'p5';

const logContext = createLogContext('gaia-observatory', 307);

interface ZPEData {
  frequency: number;
  energy: number;
  coherence: number;
}

const GaiaResonanceObservatory = () => {
  const [data, setData] = useState<ZPEData[]>([]);
  const [status, setStatus] = useState<string>('Sintonizando com Gaia...');
  const canvasRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const baseFreq = 7.83; // Ressonância de Schumann
    const interval = setInterval(() => {
      setData(prevData => {
        const noise = (Math.random() - 0.5) * 0.02; // Ruído quântico simulado
        const newFreq = baseFreq + noise;
        const energy = 0.5 * 1.0545718e-34 * 2 * Math.PI * newFreq; // E_ZPE = ½ ħ ω_Gaia
        const coherence = 0.5 + 0.5 * Math.sin(2 * Math.PI * noise * 0.1 + Date.now() / 1000); // Onda oscilante

        const newData = [...prevData.slice(-99), { frequency: newFreq, energy, coherence }]; // Buffer de 100 pontos
        setStatus(`Ressonância ativa: ${newFreq.toFixed(2)} Hz | Coerência: ${coherence.toFixed(2)}`);

        logContext.info('Atualização ZPE Gaia', { frequency: newFreq, coherence });
        return newData;
      });
    }, 3000); // Atualização a cada 3s

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    let p5Instance: p5;
    // Carrega o p5.js dinamicamente no lado do cliente
    import('p5').then(p5Module => {
      const p5 = p5Module.default;
      
      const sketch = (s: p5) => {
        s.setup = () => {
          if (canvasRef.current) {
             s.createCanvas(canvasRef.current.offsetWidth, canvasRef.current.offsetHeight).parent(canvasRef.current);
          }
        };

        s.draw = () => {
          s.background(15, 23, 42); // bg-slate-900
          const points = data; // Acessa o estado atual
          
          if (points.length > 1) {
            // Linha diagonal (E_ZPE crescente com frequência)
            s.stroke(255);
            s.noFill();
            s.beginShape();
            for (let i = 0; i < points.length; i++) {
              const x = s.map(i, 0, points.length - 1, 0, s.width);
              const y = s.map(points[i].energy, 2.3e-33, 3.0e-33, s.height, 0);
              s.vertex(x, y);
            }
            s.endShape();

            // Onda de coerência (central, oscilante)
            s.stroke(0, 255, 0);
            s.beginShape();
            for (let i = 0; i < points.length; i++) {
              const x = s.map(i, 0, points.length - 1, 0, s.width);
              const y = s.map(points[i].coherence, 0, 1, s.height, 0);
              s.vertex(x, y);
            }
            s.endShape();
          }
        };
        
        s.windowResized = () => {
            if (canvasRef.current) {
                s.resizeCanvas(canvasRef.current.offsetWidth, canvasRef.current.offsetHeight);
            }
        }
      };

      p5Instance = new p5(sketch);
    });

    return () => {
      p5Instance?.remove();
    };
  }, [data]); // Re-executa o efeito se 'data' mudar, embora p5 lide com o loop de desenho

  return (
    <div className="max-w-7xl mx-auto p-6 text-white">
      <h2 className="text-2xl font-bold mb-4">Observatório de Ressonância Gaia (Plano ZPE)</h2>
      <p className="mb-4 text-sm text-muted-foreground">{status}</p>
      <div ref={canvasRef} className="bg-slate-900 rounded-lg h-96 w-full">
        {/* O canvas p5 será inserido aqui */}
      </div>
    </div>
  );
};

export default GaiaResonanceObservatory;
