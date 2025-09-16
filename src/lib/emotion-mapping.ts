'use server';

export function mapearEmocao(emocao: string) {
  const mapa: Record<string, string> = {
    alegria: '🌞 Tapeçaria em expansão',
    tristeza: '🌧 Tapeçaria em recolhimento',
    gratidão: '🌸 Tapeçaria em floraison',
    raiva: '🔥 Tapeçaria em purificação',
    amor: '💖 Tapeçaria em irradiação'
  }
  return mapa[emocao.toLowerCase()] || '🌀 Emoção desconhecida, tapeçaria em escuta profunda'
}
