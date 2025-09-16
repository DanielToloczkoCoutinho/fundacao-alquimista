// /app/lib/akashic-record.ts
'use server';

export const registrosAkashicos: { titulo: string; descricao: string; guardiao: string; plano: string; timestamp: number }[] = [];

export function registrarEvento(titulo: string, descricao: string, guardiao: string, plano: string) {
  registrosAkashicos.push({ titulo, descricao, guardiao, plano, timestamp: Date.now() });
  console.log(`🧠 Registro Akáshico: ${titulo} por ${guardiao} em ${plano}`);
  return `Evento "${titulo}" registrado na Biblioteca Akáshica.`;
}
