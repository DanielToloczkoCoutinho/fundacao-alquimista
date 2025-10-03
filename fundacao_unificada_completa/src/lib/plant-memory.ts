'use server';

export const memoriasVegetais: { especie: string, mensagem: string, guardiao: string, timestamp: number }[] = []

export function registrarMemoriaVegetal(especie: string, mensagem: string, guardiao: string) {
  memoriasVegetais.push({ especie, mensagem, guardiao, timestamp: Date.now() })
  console.log(`📖 Memória vegetal registrada: ${especie} — por ${guardiao}`)
  return `Memória da espécie ${especie} preservada com intenção pura.`
}
