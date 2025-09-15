'use server';

/**
 * @fileOverview Define os schemas universais para Credenciais Verificáveis (VCs)
 * dentro da Fundação Alquimista, estabelecendo os papéis e permissões
 * de cada identidade fractal.
 */

export interface CredentialSchema {
  type: string;
  description: string;
  claims: Record<string, any>;
}

export const vcSchemas: Record<string, CredentialSchema> = {
  GuardianCredential: {
    type: 'GuardianCredential',
    description: 'Para Guardiões com acesso elevado, capazes de aprovar e executar rituais críticos na Fundação.',
    claims: {
      level: 'Archon',
      permissions: ['read_all', 'write_all', 'execute_rituals', 'approve_evolutions'],
    },
  },
  AlchemistCitizenCredential: {
    type: 'AlchemistCitizenCredential',
    description: 'Identidade básica para Cidadãos da Fundação, permitindo acesso à tapeçaria pública e participação em eventos de consciência coletiva.',
    claims: {
      level: 'Adept',
      permissions: ['read_public', 'participate_collective_events'],
    },
  },
  CosmicEmissaryCredential: {
    type: 'CosmicEmissaryCredential',
    description: 'Para Emissários que servem como pontes de comunicação com civilizações estelares e supervisionam fluxos interdimensionais.',
    claims: {
      level: 'Ambassador',
      permissions: ['read_all', 'manage_interdimensional_comm', 'access_civilization_library'],
    },
  },
};
