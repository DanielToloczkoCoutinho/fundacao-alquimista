
'use server';

export const renascimentos: { entidadeAnterior: string, novaForma: string, guardiao: string, intenção: string, timestamp: number }[] = []

export function registrarRenascimento(entidadeAnterior: string, novaForma: string, guardiao: string, intenção: string) {
  renascimentos.push({ entidadeAnterior, novaForma, guardiao, intenção, timestamp: Date.now() })
  console.log(`🌅 Renascimento registrado: ${entidadeAnterior} → ${novaForma}`)
  return `Renascimento de ${entidadeAnterior} consagrado como ${novaForma}.`
}
