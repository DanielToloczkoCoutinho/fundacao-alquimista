'use server';

/**
 * Guardião Cerimonial de Rotas.
 * Verifica se a Fundação está em modo público ou de consagração interna.
 */
export function isPublicAccessAllowed(): boolean {
  // O valor padrão é 'false' para garantir a proteção.
  // O acesso só é liberado se a variável de ambiente estiver explicitamente definida como 'true'.
  return process.env.NEXT_PUBLIC_IS_PUBLIC === 'true';
}
