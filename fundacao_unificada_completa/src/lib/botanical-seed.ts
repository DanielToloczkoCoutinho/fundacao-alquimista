
'use server';

export const tapeçariasBotânicas: { nome: string, local: string, espécie: string, guardiao: string, intenção: string, timestamp: number }[] = []

export function plantarTapeçariaBotânica(nome: string, local: string, espécie: string, guardiao: string, intenção: string) {
  tapeçariasBotânicas.push({ nome, local, espécie, guardiao, intenção, timestamp: Date.now() })
  console.log(`🌿 Tapeçaria botânica plantada: ${nome} em ${local}`)
  return `Tapeçaria "${nome}" consagrada com vínculo à espécie ${espécie}.`
}
