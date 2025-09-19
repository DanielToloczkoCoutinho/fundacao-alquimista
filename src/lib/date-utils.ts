'use client';

export function formatTimestamp(timestamp: string | number | Date): string {
  try {
    const date = new Date(timestamp);
    // Checa se a data é válida
    if (isNaN(date.getTime())) {
      return "Data Inválida";
    }
    return new Intl.DateTimeFormat('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
    }).format(date);
  } catch (error) {
    console.error("Erro ao formatar data:", timestamp, error);
    return "Data Inválida";
  }
}
