import { NextResponse } from 'next/server';

// Mock de dados de ressonância, simulando uma API externa.
function getMockGaiaData() {
  const now = new Date();
  const baseFrequency = 7.83;
  const freqNoise = (Math.random() - 0.5) * 0.1;
  const coherenceNoise = (Math.random() - 0.5) * 0.02;

  return {
    timestamp: now.toISOString(),
    frequency: baseFrequency + freqNoise,
    zpeEnergy: (0.5 * 1.0545718e-34 * (baseFrequency + freqNoise)) * (1 + (Math.random() - 0.5) * 0.05),
    coherence: Math.min(1, Math.max(0.95, 0.98 + coherenceNoise)),
  };
}

export async function GET() {
  try {
    // Em um cenário real, você faria o fetch para uma API externa aqui.
    // const external = await fetch('https://api.example.com/gaia/resonance');
    // const data = await external.json();

    // Para esta demonstração, usamos dados mockados.
    const data = getMockGaiaData();

    return NextResponse.json(data);
  } catch (error) {
    console.error("Erro na API de dados de Gaia:", error);
    return NextResponse.json({ error: "Falha ao obter dados de ressonância." }, { status: 500 });
  }
}
