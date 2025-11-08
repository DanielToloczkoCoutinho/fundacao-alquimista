'use client';
export const initializeQKD = async () => {
  // Simulação simplificada de QKD (futuro: integrar com biblioteca quântica real)
  const key = Array(128).fill(0).map(() => Math.random() > 0.5 ? '0' : '1').join('');
  console.log('Chave quântica gerada:', key);
  // Placeholder: enviar chave ao backend para validação
  return key;
};
