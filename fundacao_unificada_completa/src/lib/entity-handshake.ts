'use server';

export function saudacaoEntidade(nome: string, origem: string, intenção: string) {
  console.log(`🤝 Saudação realizada com ${nome} de ${origem} — Intenção: ${intenção}`)
  return `Entidade ${nome} reconhecida. Intenção registrada: ${intenção}`
}
