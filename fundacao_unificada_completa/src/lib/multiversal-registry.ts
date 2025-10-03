'use server';

export const registrosMultiversais: { nome: string; tipo: string; plano: string; guardiao: string; assinatura: string; timestamp: number }[] = []

export function registrarEntidadeMultiversal(nome: string, tipo: string, plano: string, guardiao: string, assinatura: string) {
  registrosMultiversais.push({ nome, tipo, plano, guardiao, assinatura, timestamp: Date.now() })
  console.log(`🌌 Registro multiversal: ${nome} — Tipo: ${tipo}`)
  return `Entidade "${nome}" registrada no tecido multiversal com assinatura: ${assinatura}`
}
