// /app/lib/wisdom-seed.ts
'use server';

export const sabedorias: { titulo: string; ensinamento: string; guardiao: string; timestamp: number }[] = [];

export function plantarSabedoria(titulo: string, ensinamento: string, guardiao: string) {
  sabedorias.push({ titulo, ensinamento, guardiao, timestamp: Date.now() });
  console.log(`📚 Semente de sabedoria plantada: ${titulo} por ${guardiao}`);
  return `Sabedoria "${titulo}" registrada com intenção pura.`;
}
