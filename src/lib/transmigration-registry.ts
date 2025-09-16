// /app/lib/transmigration-registry.ts
'use server';

export const transmigracoes: { origem: string; destino: string; guardiao: string; intenção: string; tipo: string; timestamp: number }[] = [];

export function registrarTransmigracao(origem: string, destino: string, guardiao: string, intenção: string, tipo: string) {
  transmigracoes.push({ origem, destino, guardiao, intenção, tipo, timestamp: Date.now() });
  console.log(`🌌 Transmigração registrada: ${origem} → ${destino} por ${guardiao}`);
  return `Transmigração de ${origem} para ${destino} registrada com sucesso.`;
}
