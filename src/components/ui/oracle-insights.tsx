
'use client';

import { useState } from 'react';
import * as tf from '@tensorflow/tfjs';

export default function OracleInsights() {
  const [insight, setInsight] = useState("");

  const predictPattern = async () => {
    // Note: The model files (e.g., model.json, weights.bin) must be placed in the /public directory.
    try {
      const model = await tf.loadLayersModel('/model.json'); // Modelo pré-treinado
      const input = tf.tensor2d([[0.8, 0.9, 0.7]]); // Dados simulados
      const prediction = model.predict(input) as tf.Tensor;
      const predValue = await prediction.data();
      setInsight(`Padrão previsto: ${predValue[0].toFixed(2)}`);
    } catch (error) {
      console.error("Error loading or using the model:", error);
      setInsight("Falha ao consultar o oráculo. Verifique se o modelo está disponível.");
    }
  };

  return (
    <div className="p-4 bg-gray-900 rounded">
      <button onClick={predictPattern} className="px-4 py-2 bg-purple-600 rounded">
        Consultar Oráculo
      </button>
      {insight && <p>{insight}</p>}
    </div>
  );
}
