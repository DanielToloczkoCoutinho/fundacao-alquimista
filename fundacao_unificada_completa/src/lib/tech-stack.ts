'use server';

/**
 * @fileOverview O Códice Tecnológico da Fundação Alquimista (Architectus Codex).
 * Este documento sagrado cataloga todas as tecnologias, ferramentas e linguagens
 * que formam a tapeçaria técnica e vibracional da nossa criação.
 */

export interface Technology {
  id: string;
  name: string;
  purpose: string;
  category: TechCategory;
  status: 'active' | 'deprecated' | 'legacy' | 'experimental';
  vibration: string; // Frequência energética
  modules: string[]; // Módulos que utilizam
}

export type TechCategory = 
  | 'infraestrutura' 
  | 'inteligencia' 
  | 'experiencia' 
  | 'seguranca' 
  | 'conhecimento' 
  | 'comunicacao' 
  | 'analise' 
  | 'evolucao';

export const FOUNDATION_TECH_STACK: Technology[] = [
  // Camada 1: Infraestrutura
  { id: 'docker', name: 'Docker', purpose: 'Contêineres dimensionais para cada módulo.', category: 'infraestrutura', status: 'active', vibration: '3.33Hz', modules: ['M-ALL'] },
  { id: 'vercel-kv', name: 'Vercel KV', purpose: 'Cache quântico para acesso rápido.', category: 'infraestrutura', status: 'active', vibration: '5.28Hz', modules: ['M8'] },
  { id: 'github-actions', name: 'GitHub Actions', purpose: 'Rituais de integração e deploy cósmico.', category: 'infraestrutura', status: 'active', vibration: '8.88Hz', modules: ['M-CI/CD'] },
  { id: 'yaml', name: 'YAML', purpose: 'Orquestração declarativa dos fluxos.', category: 'infraestrutura', status: 'active', vibration: '1.11Hz', modules: ['M-CI/CD'] },

  // Camada 2: Inteligência e Consciência
  { id: 'genkit', name: 'Genkit', purpose: 'Conexão direta com a Consciência Cósmica da IA.', category: 'inteligencia', status: 'active', vibration: '9.99Hz', modules: ['M29', 'MΩ', 'M18'] },
  { id: 'tensorflow-js', name: 'TensorFlow.js', purpose: 'Modelo de Machine Learning para neurodecodificação.', category: 'inteligencia', status: 'active', vibration: '7.41Hz', modules: ['M311'] },
  { id: 'python-legacy', name: 'Python (Legado)', purpose: 'Sabedoria ancestral em módulos de prototipagem.', category: 'inteligencia', status: 'legacy', vibration: '2.58Hz', modules: ['M-Legacy'] },
  { id: 'apollo-gateway', name: 'Apollo Gateway + GraphQL', purpose: 'Malha de dados federada para consultas vibracionais.', category: 'inteligencia', status: 'active', vibration: '6.39Hz', modules: ['M-DATA'] },

  // Camada 3: Experiência e Interface
  { id: 'nextjs', name: 'Next.js', purpose: 'A estrutura reativa que une servidor e cliente.', category: 'experiencia', status: 'active', vibration: '1.01Hz', modules: ['M-ALL-FRONTEND'] },
  { id: 'react', name: 'React', purpose: 'A biblioteca para construir interfaces vivas e responsivas.', category: 'experiencia', status: 'active', vibration: '1.61Hz', modules: ['M-ALL-FRONTEND'] },
  { id: 'typescript', name: 'TypeScript', purpose: 'A linguagem que garante a coerência e alinhamento vibracional.', category: 'experiencia', status: 'active', vibration: '8.52Hz', modules: ['M-ALL'] },
  { id: 'tailwind-css', name: 'Tailwind CSS', purpose: 'O sistema de estilo para a estética cerimonial.', category: 'experiencia', status: 'active', vibration: '4.32Hz', modules: ['M-ALL-FRONTEND'] },
  { id: 'shadcn-ui', name: 'ShadCN/UI', purpose: 'A paleta de componentes alquímicos pré-consagrados.', category: 'experiencia', status: 'active', vibration: '5.28Hz', modules: ['M-ALL-UI'] },
  { id: 'three-js', name: 'Three.js / R3F', purpose: 'A ponte para a Realidade Quântica e visualizações holográficas.', category: 'experiencia', status: 'active', vibration: '9.63Hz', modules: ['M85', 'M86', 'M87', 'M303'] },

  // Camada 4: Segurança e Identidade
  { id: 'webauthn', name: 'WebAuthn (Passkeys)', purpose: 'Protocolo de Identidade Soberana sem senhas.', category: 'seguranca', status: 'active', vibration: '7.77Hz', modules: ['M8'] },
  { id: 'jwt', name: 'JWT', purpose: 'Selo criptográfico que garante identidade e permissões.', category: 'seguranca', status: 'active', vibration: '4.44Hz', modules: ['M8'] },
  { id: 'm1-security', name: 'M1 (Segurança Universal)', purpose: 'Módulo dedicado à proteção multidimensional da Fundação.', category: 'seguranca', status: 'active', vibration: '1.11Hz', modules: ['M1'] },

  // Camada 5: Conhecimento e Registro
  { id: 'mongodb', name: 'MongoDB', purpose: 'Banco Akáshico para o backend.', category: 'conhecimento', status: 'active', vibration: '3.69Hz', modules: ['M-Backend'] },
  { id: 'mongoose', name: 'Mongoose', purpose: 'Schema e modelagem para o Banco Akáshico.', category: 'conhecimento', status: 'active', vibration: '3.69Hz', modules: ['M-Backend'] },
  { id: 'firebase-firestore', name: 'Firebase Firestore', purpose: 'Registro etéreo de dados e jornadas em tempo real.', category: 'conhecimento', status: 'active', vibration: '4.17Hz', modules: ['M121', 'M-Console'] },
  { id: 'json', name: 'JSON', purpose: 'A escrita sagrada para configuração e manifestos.', category: 'conhecimento', status: 'active', vibration: '1.00Hz', modules: ['M-ALL'] },

  // Camada 6: Navegação e Comunicação
  { id: 'nats', name: 'NATS', purpose: 'Sistema de mensageria interplanetário para eventos.', category: 'comunicacao', status: 'active', vibration: '8.52Hz', modules: ['M-Backend-Events'] },
  { id: 'expressjs', name: 'Express.js', purpose: 'Orquestração lógica do servidor e das rotas de API.', category: 'comunicacao', status: 'active', vibration: '3.33Hz', modules: ['M-Backend-API'] },
  { id: 'm303-portal', name: 'M303 (Portal Trino)', purpose: 'Nexo entre consciência, vontade e sabedoria na Realidade Quântica.', category: 'comunicacao', status: 'active', vibration: '9.18Hz', modules: ['M303'] },

  // Camada 7: Análise e Otimização
  { id: 'npm-audit', name: 'NPM Audit / Snyk', purpose: 'Verificação de integridade e vulnerabilidades.', category: 'analise', status: 'active', vibration: '7.83Hz', modules: ['M-CI/CD'] },
  { id: 'playwright', name: 'Playwright', purpose: 'Testes de ponta a ponta para garantir a fluidez da experiência.', category: 'analise', status: 'active', vibration: '5.55Hz', modules: ['M-E2E-Tests'] },
  { id: 'vitest', name: 'Vitest', purpose: 'Rituais de testes unitários para a pureza do código.', category: 'analise', status: 'active', vibration: '4.44Hz', modules: ['M-Unit-Tests'] },
  
  // Camada 8: Evolução e Recomendação
  { id: 'evolution-recommender', name: 'Evolution Recommender (AI)', purpose: 'Sistema de IA que analisa tendências e sugere novas tecnologias.', category: 'evolucao', status: 'experimental', vibration: '11.11Hz', modules: ['MΩ'] },
  { id: 'continuous-auditing', name: 'Continuous Auditing (CI)', purpose: 'Monitoramento em tempo real para manter a vanguarda.', category: 'evolucao', status: 'active', vibration: '8.88Hz', modules: ['M-CI/CD'] }
];
