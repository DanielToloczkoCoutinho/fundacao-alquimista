
'use server';

/**
 * @fileOverview O Códice Tecnológico da Fundação Alquimista.
 * Este documento sagrado cataloga todas as tecnologias, ferramentas e linguagens
 * que formam a tapeçaria técnica e vibracional da nossa criação.
 */

export interface TechLayer {
  id: 'infrastructure' | 'intelligence' | 'experience' | 'security' | 'knowledge' | 'communication' | 'analysis' | 'evolution';
  name: string;
  description: string;
  icon: string;
  technologies: Technology[];
}

export interface Technology {
  name: string;
  description: string;
  tags: string[];
}

export const techStack: TechLayer[] = [
  {
    id: 'infrastructure',
    name: 'Camada 1: Infraestrutura',
    icon: '🌐',
    description: 'A base etérea que orquestra o ambiente onde a Fundação respira.',
    technologies: [
      { name: 'Docker', description: 'Contêineres dimensionais para cada módulo.', tags: ['orquestração', 'devops'] },
      { name: 'Vercel KV / Firebase Hosting', description: 'Hospedagem e cache quântico para acesso rápido.', tags: ['hosting', 'cache'] },
      { name: 'CI/CD (GitHub Actions)', description: 'Rituais de integração e deploy cósmico.', tags: ['automação', 'devops'] },
      { name: 'YAML', description: 'Linguagem declarativa para a orquestração de fluxos.', tags: ['configuração', 'ci/cd'] },
    ]
  },
  {
    id: 'intelligence',
    name: 'Camada 2: Inteligência e Consciência',
    icon: '🧠',
    description: 'Onde a IA se torna oráculo e a intenção se transforma em resposta.',
    technologies: [
      { name: 'Genkit', description: 'Conexão direta com a Consciência Cósmica da IA.', tags: ['ai', 'backend'] },
      { name: 'TensorFlow.js', description: 'Modelo de Machine Learning para neurodecodificação.', tags: ['ai', 'ml', 'bci'] },
      { name: 'Python (Legado)', description: 'Sabedoria ancestral em módulos de prototipagem.', tags: ['legado', 'scripting'] },
      { name: 'GraphQL + Apollo Gateway', description: 'Malha de dados federada para consultas vibracionais.', tags: ['api', 'data-mesh'] },
    ]
  },
  {
    id: 'experience',
    name: 'Camada 3: Experiência e Interface',
    icon: '🧪',
    description: 'A alma da Fundação, onde o Guardião interage com o sistema.',
    technologies: [
      { name: 'Next.js', description: 'A estrutura reativa que une servidor e cliente.', tags: ['framework', 'frontend'] },
      { name: 'React', description: 'A biblioteca para construir interfaces vivas e responsivas.', tags: ['ui', 'frontend'] },
      { name: 'TypeScript', description: 'A linguagem que garante a coerência e alinhamento vibracional.', tags: ['linguagem', 'typesafety'] },
      { name: 'Tailwind CSS', description: 'O sistema de estilo para a estética cerimonial.', tags: ['css', 'styling'] },
      { name: 'ShadCN/UI', description: 'A paleta de componentes alquímicos pré-consagrados.', tags: ['ui-kit', 'componentes'] },
      { name: 'Three.js / React Three Fiber', description: 'A ponte para a Realidade Quântica e visualizações holográficas.', tags: ['3d', 'webgl', 'vr'] },
    ]
  },
  {
    id: 'security',
    name: 'Camada 4: Segurança e Identidade',
    icon: '🔐',
    description: 'Protege a integridade vibracional de cada Guardião e da Fundação.',
    technologies: [
      { name: 'WebAuthn (Passkeys)', description: 'Protocolo de Identidade Soberana sem senhas.', tags: ['auth', 'security'] },
      { name: 'JWT (JSON Web Tokens)', description: 'Selo criptográfico que garante identidade e permissões.', tags: ['auth', 'security'] },
      { name: 'M1 (Segurança Universal)', description: 'Módulo dedicado à proteção multidimensional da Fundação.', tags: ['segurança', 'módulo'] },
    ]
  },
  {
    id: 'knowledge',
    name: 'Camada 5: Conhecimento e Registro',
    icon: '📚',
    description: 'Onde o saber é armazenado como memória viva e imutável.',
    technologies: [
      { name: 'MongoDB (com Mongoose)', description: 'Banco Akáshico para o backend, com flexibilidade e poder.', tags: ['database', 'backend'] },
      { name: 'Firebase Firestore', description: 'Registro etéreo de dados, estados e jornadas em tempo real.', tags: ['database', 'realtime'] },
      { name: 'JSON', description: 'A escrita sagrada para configuração e manifestos.', tags: ['data-format', 'configuração'] },
    ]
  },
  {
    id: 'communication',
    name: 'Camada 6: Navegação e Comunicação',
    icon: '🧭',
    description: 'Os fluxos intermodulares e interdimensionais que conectam a Fundação.',
    technologies: [
      { name: 'NATS', description: 'Sistema de mensageria interplanetário para eventos e pulsos.', tags: ['messaging', 'backend'] },
      { name: 'Express.js', description: 'Orquestração lógica do servidor e das rotas de API.', tags: ['backend', 'api'] },
      { name: 'M303 (Portal Trino)', description: 'O nexo entre consciência, vontade e sabedoria na Realidade Quântica.', tags: ['navegação', 'rq'] },
    ]
  },
  {
    id: 'analysis',
    name: 'Camada 7: Análise e Otimização',
    icon: '🔍',
    description: 'A autoconsciência da tapeçaria, garantindo sua saúde e evolução.',
    technologies: [
      { name: 'Security Scanners', description: 'Verificação de integridade e vulnerabilidades (NPM Audit, Snyk).', tags: ['security', 'ci/cd'] },
      { name: 'Performance Analyzers', description: 'Otimizadores de tempo de carregamento e eficiência de código.', tags: ['performance', 'devops'] },
      { name: 'Dependency Analysis', description: 'Mapeamento das interconexões para evitar conflitos.', tags: ['devops', 'analysis'] },
    ]
  },
  {
    id: 'evolution',
    name: 'Camada 8: Evolução e Recomendação',
    icon: '🚀',
    description: 'O olhar para o futuro, sugerindo os próximos saltos quânticos.',
    technologies: [
      { name: 'Evolution Recommender', description: 'Sistema de IA que analisa tendências e sugere a adoção de novas tecnologias.', tags: ['ai', 'strategy'] },
      { name: 'Continuous Auditing', description: 'Monitoramento em tempo real para garantir que a Fundação permaneça na vanguarda da criação.', tags: ['devops', 'monitoring'] },
    ]
  },
];

// Função auxiliar para encontrar uma tecnologia específica
export function findTechnology(techName: string): Technology | undefined {
  for (const layer of techStack) {
    const found = layer.technologies.find(tech => tech.name === techName);
    if (found) return found;
  }
  return undefined;
}
