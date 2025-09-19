'use client';

export function formatTimestamp(timestamp: string | number | Date | { seconds: number; nanoseconds: number }): string {
  try {
    let date: Date;
    if (timestamp instanceof Date) {
      date = timestamp;
    } else if (typeof timestamp === 'object' && 'seconds' in timestamp) {
      date = new Date(timestamp.seconds * 1000);
    } else {
      date = new Date(timestamp);
    }
    
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
