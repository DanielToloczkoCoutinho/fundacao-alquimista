'use server';

export const alianças: { especie: string, guardiao: string, tipo: string, intenção: string, timestamp: number }[] = []

export function registrarAlianca(especie: string, guardiao: string, tipo: string, intenção: string) {
  alianças.push({ especie, guardiao, tipo, intenção, timestamp: Date.now() })
  console.log(`🐾 Aliança registrada: ${guardiao} ↔ ${especie}`)
  return `Aliança interespécie entre ${guardiao} e ${especie} consagrada.`
}
