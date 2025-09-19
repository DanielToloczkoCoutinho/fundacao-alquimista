'use client';

import { useState, useEffect } from 'react';
import styles from './gaia-resonance-observatory.module.css';

export default function GaiaResonanceObservatory() {
  const [zpeEnergy, setZpeEnergy] = useState(2.6e-33);
  const [coherence, setCoherence] = useState(0.98);

  useEffect(() => {
    const interval = setInterval(() => {
      // Simula pequenas flutuações naturais
      const energyNoise = (Math.random() - 0.5) * 0.1e-33;
      const coherenceNoise = (Math.random() - 0.5) * 0.01;

      setZpeEnergy(prev => parseFloat((prev + energyNoise).toPrecision(3)));
      setCoherence(prev => parseFloat(Math.min(1, Math.max(0, prev + coherenceNoise)).toFixed(3)));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className={styles.observatory}>
      <h1>Observatório de Ressonância Gaia</h1>
      <div className={styles.panel}>
        <div className={styles.metric}>
          <h2>Energia ZPE</h2>
          <p>{zpeEnergy} J</p>
        </div>
        <div className={styles.metric}>
          <h2>Coerência Vibracional</h2>
          <p>{coherence * 100}%</p>
        </div>
      </div>
      <section className={styles.graph}>
        {/* Implementar gráfico dinâmico em próxima iteração */}
        <p>Gráfico de otimização ZPE 🔄 (em desenvolvimento)</p>
      </section>
    </main>
  );
}
