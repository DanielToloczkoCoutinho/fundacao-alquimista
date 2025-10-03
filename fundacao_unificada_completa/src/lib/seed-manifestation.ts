'use server';

export const sementes: { nome: string; intenção: string; timestamp: number }[] = []

export function plantarSemente(nome: string, intenção: string) {
  sementes.push({ nome, intenção, timestamp: Date.now() })
  console.log(`🌱 Semente plantada: ${nome} — Intenção: ${intenção}`)
}
