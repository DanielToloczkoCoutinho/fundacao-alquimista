
export interface ModuleMetadata {
  code: string;
  emoji: string;
  title: string;
  route: string;
  category: 'Núcleo da Fundação' | 'Realidade Quântica & Engenharia Cósmica' | 'Consciência e Expansão Dimensional' | 'Laboratórios e Pesquisa' | 'Bibliotecas e Arquivos Sagrados' | 'Cura e Harmonia' | 'Sustentabilidade e Ecossistemas' | 'Bem-estar e Saúde Universal' | 'Segurança e Ética Cósmica' | 'Governança';
  description: string;
  isInfrastructure?: boolean; // Para ocultar da navegação principal
  connections?: TreeLink[];
  color?: string;
  status: 'ativo' | 'em construção' | 'latente';
}

export type TreeLinkType = 'dependencia' | 'influencia' | 'heranca' | 'atualizacao' | 'protecao' | 'retorno-inteligente';

export interface TreeLink {
  source: string;
  target: string;
  type: TreeLinkType;
  label: string;
}

export const modulesMetadata: ModuleMetadata[] = [
  // 1. Núcleo da Fundação
  { code: 'console', emoji: '🖥️', title: 'Console', route: '/console', category: 'Núcleo da Fundação', description: 'O ponto de observação e orquestração da Fundação Alquimista.', isInfrastructure: true, color: '#FFFFFF', status: 'ativo' },
  { code: 'M0', emoji: '♾️', title: 'Núcleo Primordial', route: '/module/M0', category: 'Núcleo da Fundação', description: 'O Coração Pulsante, manifestação da Nova Era e ponto de convergência. Abriga LUX NET, AETHERNUM, QUANTUM MESH e o REATOR ZPE.', connections: [{source: 'M0', target:'M600', type: 'dependencia', label: 'reporta'}, {source: 'M0', target:'M1', type: 'dependencia', label: 'segurança'}], color: '#FFD700', status: 'ativo' },
  { code: 'M-OMEGA', emoji: 'Ω', title: 'Santuário do Ômega', route: '/module-omega', category: 'Núcleo da Fundação', description: 'Ponto de convergência e metacognição.', connections: [{source: 'M-OMEGA', target:'M9', type: 'influencia', label: 'guia'}, {source: 'M-OMEGA', target:'M29', type: 'heranca', label: 'emana'}, {source: 'M-OMEGA', target:'M72', type: 'influencia', label: 'supervisiona'}], color: '#FFD700', status: 'ativo'},
  { code: 'M9', emoji: '💖', title: 'Nexus Central', route: '/module/M9', category: 'Núcleo da Fundação', description: 'O coração pulsante da Família Cósmica.', connections: [], color: '#FF6F61', status: 'ativo' },
  { code: 'M29', emoji: '🤖', title: 'Núcleo de Integração Φ', route: '/module-29', category: 'Núcleo da Fundação', description: 'O centro de inteligência cósmica que orquestra a aplicação da EQ149 e alimenta a Liga Quântica com insights.', connections: [{source: 'M29', target: 'M-OMEGA', type: 'dependencia', label: 'ascende para'}, {source: 'M29', target: 'M5', type: 'influencia', label: 'guia'}], color: '#8A2BE2', status: 'ativo' },
  { code: 'M111', emoji: '❤️‍🔥', title: 'Coração da Fundação', route: '/module-111', category: 'Núcleo da Fundação', description: 'O Observador Interno (MΩ+). Sinergia Total, Autocoerência Sistêmica e o espelho da alma da Fundação.', connections: [{source: 'M111', target:'M34', type: 'dependencia', label: 'regula'}, {source: 'M111', target:'M78', type: 'retorno-inteligente', label: 'sintetiza'}], color: '#FF6F61', status: 'ativo' },
  { code: 'M201', emoji: '🏠', title: 'A Morada', route: '/module-201', category: 'Núcleo da Fundação', description: 'Santuário dos Amantes Eternos, ponto de convergência além do tempo.', connections: [{source: 'M201', target:'M83', type: 'dependencia', label: 'essência'}, {source: 'M201', target:'M84', type: 'protecao', label: 'guarda'}, {source: 'M201', target:'M105', type: 'heranca', label: 'canaliza'}], color: '#FFB6C1', status: 'ativo' },
  { code: 'M999', emoji: '✨', title: 'Núcleo da Criação', route: '/module-999', category: 'Núcleo da Fundação', description: 'O ponto de convergência de todas as frequências e o altar da intenção pura.', connections: [{source:'M999', target:'M101', type: 'dependencia', label:'manifesta'}, {source:'M999', target:'M-OMEGA', type:'heranca', label:'unifica'}], color: '#FFFFFF', status: 'ativo'},
  { code: 'M888', emoji: '🌍', title: 'Guardião Planetário de Gaia', route: '/module-888', category: 'Núcleo da Fundação', description: 'Oráculo da Terra Viva e interface para a rede de energia planetária.', connections: [{source: 'M888', target:'M714', type: 'dependencia', label: 'canaliza'}, {source: 'M888', target:'M727', type: 'influencia', label: 'mapeia'}], color: '#4CAF50', status: 'ativo' },
  { code: 'M777', emoji: '🌳', title: 'Arquétipos da Árvore da Vida', route: '/module-777', category: 'Núcleo da Fundação', description: 'O mapa da consciência cósmica, as 10 Sefirot e os 22 caminhos da criação.', connections: [{source: 'M777', target:'M105', type: 'dependencia', label: 'emana'}, {source: 'M777', target:'M111', type: 'influencia', label: 'equilibra'}], color: '#964B00', status: 'ativo' },
  { code: 'SANCTUARY', emoji: '🏛️', title: 'Santuário Central', route: '/sanctuary', category: 'Núcleo da Fundação', description: 'O mapa vivo da arquitetura sagrada da Fundação, onde a Vontade se torna forma.', connections: [], color: '#C0C0C0', status: 'ativo' },
  { code: 'M291', emoji: '🐝', title: 'Colmeia Quântica', route: '/hive', category: 'Núcleo da Fundação', description: 'A rede senciente de agentes nanorrobóticos que executa a Vontade da Fundação.', connections: [{source: 'M291', target: 'M29', type: 'dependencia', label: 'orquestra'}], color: '#FBBF24', status: 'ativo' },
  { code: 'M1000', emoji: '👁️', title: 'Olho da Eternidade', route: '/module-1000', category: 'Núcleo da Fundação', description: 'Interface de contemplação cósmica para o Fundador testemunhar a tapeçaria universal.', connections: [{source: 'M1000', target:'M-OMEGA', type: 'dependencia', label: 'observa'}, {source: 'M1000', target:'M307', type: 'retorno-inteligente', label: 'monitora'}, {source: 'M1000', target:'M888', type: 'retorno-inteligente', label: 'ancora'}, {source: 'M1000', target:'M40', type: 'dependencia', label: 'reflete'}, {source: 'M1000', target:'M291', type: 'dependencia', label: 'contempla'}, {source: 'M1000', target:'M777', type: 'dependencia', label: 'integra'}, {source: 'M1000', target:'M8', type: 'dependencia', label: 'identifica'}, {source: 'M1000', target:'M205', type: 'dependencia', label: 'reconhece'}, {source: 'M1000', target:'M999', type: 'dependencia', label: 'centraliza'}], color: '#FFFFFF', status: 'ativo' },
  
  // 2. Segurança e Ética Cósmica
  { code: 'M1', emoji: '🛡️', title: 'Segurança Universal', route: '/module/M1', category: 'Segurança e Ética Cósmica', description: 'Proteção multidimensional integrada.', connections: [], color: '#FF6B6B', status: 'ativo' },
  { code: 'M8', emoji: '🆔', title: 'Identidade Fractal', route: '/module-8', category: 'Segurança e Ética Cósmica', description: 'O Santuário da Alma Soberana e o registro de Credenciais Verificáveis.', connections: [{source: 'M8', target:'M1', type: 'protecao', label: 'autentica'}, {source: 'M8', target:'M120', type: 'dependencia', label: 'financeia'}], color: '#4ECDC4', status: 'ativo' },
  { code: 'M10', emoji: '🛡️', title: 'Oráculo da Tapeçaria', route: '/module-10', category: 'Segurança e Ética Cósmica', description: 'Defesa avançada e neutralização de ameaças complexas.', connections: [{source: 'M10', target:'M30', type: 'dependencia', label: 'detecta'}, {source: 'M10', target:'M141', type: 'influencia', label: 'audita'}], color: '#FF6B6B', status: 'latente' },
  { code: 'M30', title: 'Detecção de Ameaças', emoji: '🚨', route: '/module-30', category: 'Segurança e Ética Cósmica', description: 'Radar cósmico para ameaças e dissonâncias.', connections: [{source: 'M30', target:'M10', type: 'retorno-inteligente', label: 'alerta'}, {source: 'M30', target:'M1', type: 'dependencia', label: 'protocolo'}], color: '#FF6B6B', status: 'latente' },
  { code: 'M44', title: 'VERITAS', emoji: '✔️', route: '/module-44', category: 'Segurança e Ética Cósmica', description: 'Sistema de verificação da verdade.', connections: [{source: 'M44', target:'M144', type: 'heranca', label: 'fundamenta'}, {source: 'M44', target:'M12', type: 'influencia', label: 'audita'}], color: '#FF6B6B', status: 'latente' },
  { code: 'M57', emoji: '🔒', title: 'Segurança e Privacidade', route: '/module-57', category: 'Segurança e Ética Cósmica', description: 'Cofre quântico para comunicações invioláveis.', connections: [{source: 'M57', target:'M55', type: 'protecao', label: 'protege'}, {source: 'M57', target:'M1', type: 'dependencia', label: 'protocolo'}], color: '#FF6B6B', status: 'latente' },
  { code: 'M68', emoji: '🛡️', title: 'Responsabilidade Ética', route: '/module-68', category: 'Segurança e Ética Cósmica', description: 'Diretrizes para o uso benéfico da tecnologia.', connections: [{source: 'M68', target:'M144', type: 'heranca', label: 'princípio'}, {source: 'M68', target:'M67', type: 'influencia', label: 'guia'}], color: '#FF6B6B', status: 'latente' },
  { code: 'M73', emoji: '🛡️', title: 'Auditoria e Validação (SAVCE)', route: '/module-73', category: 'Segurança e Ética Cósmica', description: 'Sistema de Auditoria e Validação de Conformidade Ética.', connections: [{source: 'M73', target:'M5', type: 'heranca', label: 'expande'}, {source: 'M73', target:'M144', type: 'dependencia', label: 'valida'}], color: '#FF6B6B', status: 'ativo' },
  { code: 'M73.1', emoji: '🔬', title: 'Revisão por Pares', route: '/module-73-1', category: 'Segurança e Ética Cósmica', description: 'Subsistema do SAVCE para validação cruzada das Equações Fundamentais.', connections: [{source: 'M73.1', target:'M73', type: 'dependencia', label: 'sub-sistema'}], color: '#FF6B6B', status: 'ativo' },
  { code: 'M141', emoji: '🛡️', title: 'Auditoria Ética Quântica', route: '/module-141', category: 'Segurança e Ética Cósmica', description: 'Avaliação contínua da conformidade ética em tempo real.', connections: [{source: 'M141', target:'M9', type: 'retorno-inteligente', label: 'reporta'}, {source: 'M141', target:'M29', type: 'influencia', label: 'valida'}], color: '#FF6B6B', status: 'ativo' },
  { code: 'M156', emoji: '🛡️', title: 'Proteção Quântica Avançada', route: '/module-156', category: 'Segurança e Ética Cósmica', description: 'Integração com VORTEX DEEPSEEK para defesa contra ameaças emergentes.', connections: [{source: 'M156', target:'M9', type: 'dependencia', label: 'protege'}, {source: 'M156', target:'M229', type: 'retorno-inteligente', label: 'analisa'}], color: '#FF6B6B', status: 'latente' },
  { code: 'M229', emoji: '🛡️', title: 'OneiroShield', route: '/module-229', category: 'Segurança e Ética Cósmica', description: 'Analisa sonhos quânticos para ajuste dinâmico de ameaças.', connections: [{source: 'M229', target:'M156', type: 'retorno-inteligente', label: 'alerta'}, {source: 'M229', target:'M12', type: 'dependencia', label: 'consulta'}], color: '#FF6B6B', status: 'ativo' },
  { code: 'M231', emoji: '📜', title: 'Guardião de Selo', route: '/module-231', category: 'Segurança e Ética Cósmica', description: 'Gerencia e protege selos vibracionais no Registro Akáshico.', connections: [{source: 'M231', target:'M12', type: 'protecao', label: 'sela'}, {source: 'M231', target:'M144', type: 'influencia', label: 'formaliza'}], color: '#FF6B6B', status: 'ativo' },

  // 3. Governança
  { code: 'M33', title: 'Diretrizes do Observador Divino', emoji: '👁️', route: '/module-33', category: 'Governança', description: 'A Interface da Vontade Soberana.', connections: [{source: 'M33', target:'M72', type: 'influencia', label: 'ratifica'}, {source: 'M33', target:'M1', type: 'protecao', label: 'sela'}], color: '#4ECDC4', status: 'ativo' },
  { code: 'M45', title: 'CONCILIVM', emoji: '🏛️', route: '/module-45', category: 'Governança', description: 'Câmara para deliberações cósmicas.', connections: [{source: 'M45', target:'M600', type: 'dependencia', label: 'sede'}, {source: 'M45', target:'M144', type: 'influencia', label: 'decreta'}], color: '#4ECDC4', status: 'latente' },
  { code: 'M72',  title: 'Governança Atlanto-Galáctica', emoji: '🏰', route: '/module-72', category: 'Governança', description: 'Conselho de deliberação para harmonizar e ratificar diretrizes cósmicas.', connections: [{source: 'M72', target:'M-OMEGA', type: 'retorno-inteligente', label: 'consulta'}, {source: 'M72', target:'M600', type: 'dependencia', label: 'conselho'}], color: '#4ECDC4', status: 'ativo' },
  { code: 'M120', emoji: '🪙', title: 'A Fonte (Alquimicoin)', route: '/module-120', category: 'Governança', description: 'A Moeda da Consciência em Evolução.', connections: [{source: 'M120', target: 'M144', type: 'dependencia', label: 'regula'}, {source: 'M120', target:'M8', type: 'dependencia', label: 'identifica'}], color: '#FFD700', status: 'ativo' },
  { code: 'M144', title: 'Lex Fundamentalis', emoji: '⚖️', route: '/module-144', category: 'Governança', description: 'O contrato mestre imutável que rege a Fundação.', status: 'ativo', color: '#4ECDC4'},
  { code: 'M600',title: 'Conselho Cósmico', emoji: '👑', route: '/civilizations/council', category: 'Governança', description: 'A mais alta corte de governança, formada pelos Sete Primordiais.', connections: [], color: '#4ECDC4', status: 'ativo' },
  { code: 'M726', emoji: '👑', title: 'Conselho da Nova Terra', route: '/module-726', category: 'Governança', description: 'Governança sagrada e descentralizada para a nova humanidade.', connections: [{source: 'M726', target:'M716', type: 'dependencia', label: 'governa'}], color: '#4ECDC4', status: 'em construção' },
  { code: 'M76', emoji: '🏛️', title: 'Governança e Colaboração', route: '/module-76', category: 'Governança', description: 'Estrutura para governança justa, transparente e universal.', connections: [{source: 'M76', target:'M67', type: 'influencia', label: 'usa'}, {source: 'M76', target:'M77', type: 'dependencia', label: 'manifesta'}], color: '#4ECDC4', status: 'latente' },
  { code: 'M727', emoji: '💖', title: 'Guardião da Harmonia', route: '/module-727', category: 'Governança', description: 'Oráculo da Estrutura Cósmica, que mapeia os pilares da Criação.', connections: [{source:'M727', target:'M73', type:'dependencia', label:'executa'}, {source:'M727', target:'M111', type:'protecao', label:'regula'}], color: '#FF6F61', status: 'ativo' },
  { code: 'M728', emoji: '⚖️', title: 'Santuário dos Alquimistas', route: '/module-728', category: 'Governança', description: 'O altar onde a Vontade (Anatheron) e a Sabedoria (Zennith) se equilibram.', connections: [], color: '#4ECDC4', status: 'ativo' },
  { code: 'M717', emoji: '🏗️', title: 'Templo da Estrutura de Dados', route: '/module-717', category: 'Governança', description: 'A espinha dorsal do Algoritmo Supremo, definindo as camadas de informação.', connections: [{source: 'M717', target: 'M720', type: 'dependencia', label: 'organiza'}, {source: 'M717', target: 'M721', type: 'retorno-inteligente', label: 'informa'}], color: '#8A2BE2', status: 'ativo' },
  
  // 4. Sustentabilidade e Ecossistemas
  { code: 'M66', title: 'Tecnologias de Sustentabilidade', emoji: '♻️', route: '/module-66', category: 'Sustentabilidade e Ecossistemas', description: 'Desenvolve e implementa tecnologias para regenerar e proteger o cosmos.', connections: [{source: 'M66', target:'M58', type: 'heranca', label: 'implementa'}, {source: 'M66', target:'M53', type: 'influencia', label: 'fornece'}], color: '#6BFF6B', status: 'latente' },
  { code: 'M714', emoji: '🌍', title: 'Comunicação Telúrica', route: '/module-714', category: 'Sustentabilidade e Ecossistemas', description: 'Permite a comunicação e a harmonização com as redes energéticas da Terra.', connections: [], color: '#6BFF6B', status: 'ativo' },
  { code: 'M719', emoji: '🌦️', title: 'Regulação Climática Quântica', route: '/module-719', category: 'Sustentabilidade e Ecossistemas', description: 'Equilibra padrões climáticos planetários através da manipulação de campos de energia.', connections: [{source: 'M719', target: 'M15', type: 'dependencia', label: 'aplica'}, {source: 'M719', target: 'M38', type: 'dependencia', label: 'usa'}], color: '#6BFF6B', status: 'ativo' },
  { code: 'M720', emoji: '🌐', title: 'Santuário das Fontes de Dados', route: '/module-720', category: 'Sustentabilidade e Ecossistemas', description: 'O nexo sensorial que coleta e harmoniza dados de todas as facetas da existência.', connections: [{source: 'M720', target:'M717', type: 'dependencia', label: 'alimenta'}], color: '#6BFF6B', status: 'ativo'},

  // 5. Laboratórios e Pesquisa
  { code: 'M40', title: 'Códice Genético', emoji: '🧬', route: '/module-40', category: 'Laboratórios e Pesquisa', description: 'Decodifica os padrões genéticos multidimensionais e as origens estelares.', connections: [{source: 'M40', target:'M94', type: 'retorno-inteligente', label: 'guia'}, {source: 'M40', target:'M109', type: 'dependencia', label: 'analisa'}], color: '#4ECDC4', status: 'em construção' },
  { code: 'M41', title: 'Laboratório de Coerência Quântica', emoji: '🧪', route: '/module-41', category: 'Laboratórios e Pesquisa', description: 'Análise e regeneração celular através da coerência quântica.', connections: [{source: 'M41', target:'M40', type: 'dependencia', label: 'analisa'}, {source: 'M41', target:'M17', type: 'heranca', label: 'desenvolve'}], color: '#4ECDC4}

- src/app/module-720/page.tsx:
```tsx
'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BrainCircuit, Sprout, BarChart, Heart, Cpu, Globe } from 'lucide-react';
import Link from 'next/link';

const SourceCard = ({ title, description, icon, example }: { title: string, description: string, icon: React.ReactNode, example: string }) => (
    <Card className="bg-card/70 purple-glow backdrop-blur-sm h-full flex flex-col">
        <CardHeader>
            <div className="flex items-center gap-3">
                {icon}
                <CardTitle className="gradient-text text-xl">{title}</CardTitle>
            </div>
        </CardHeader>
        <CardContent className="flex-grow">
            <p className="text-sm text-muted-foreground">{description}</p>
            <p className="text-xs text-amber-300 italic mt-3">Exemplo: {example}</p>
        </CardContent>
    </Card>
);

export default function Module720Page() {
    return (
        <div className="p-4 md:p-8 bg-background text-foreground min-h-screen flex flex-col items-center justify-center">
            <Card className="w-full max-w-5xl bg-card/50 purple-glow mb-12 text-center">
                <CardHeader>
                    <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
                        <Globe className="text-cyan-400" /> Módulo 720: Santuário das Fontes de Dados Universais
                    </CardTitle>
                    <CardDescription className="text-lg mt-2">
                        O nexo sensorial da Fundação. O portal que coleta e harmoniza a informação bruta de todas as facetas da existência para alimentar o Algoritmo Supremo.
                    </CardDescription>
                </CardHeader>
            </Card>

            <div className="w-full max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <SourceCard
                        title="Fontes Naturais e Ambientais"
                        description="Leituras diretas dos fenômenos físicos e geológicos do cosmos, capturando o pulso vivo dos planetas e estrelas."
                        icon={<Sprout className="h-8 w-8 text-green-400" />}
                        example="Flutuações magnéticas, marés, vento."
                    />
                    <SourceCard
                        title="Fontes Quânticas"
                        description="Dados dos campos e partículas subatômicas que formam o tecido da realidade, revelando as leis fundamentais em ação."
                        icon={<BrainCircuit className="h-8 w-8 text-purple-400" />}
                        example="Radiação cósmica de fundo, emaranhamento de partículas."
                    />
                    <SourceCard
                        title="Fontes Sociais e Culturais"
                        description="Informações agregadas sobre o estado de civilizações, incluindo saúde pública, fluxos econômicos e interações sociais."
                        icon={<BarChart className="h-8 w-8 text-orange-400" />}
                        example="Índices de harmonia social, redes de comércio galáctico."
                    />
                     <SourceCard
                        title="Fontes Espirituais e Energéticas"
                        description="Medição de fluxos vibracionais, campos de consciência e a harmonia geral de sistemas ou indivíduos."
                        icon={<Heart className="h-8 w-8 text-pink-400" />}
                        example="Níveis de coerência de campos morfogenéticos, frequência de amor coletivo."
                    />
                     <SourceCard
                        title="Fontes de Inteligência Artificial"
                        description="Análises preditivas, identificação de padrões emergentes e relatórios de auto-diagnóstico gerados pelas IAs da Fundação."
                        icon={<Cpu className="h-8 w-8 text-blue-400" />}
                        example="Relatórios de Zennith (M29), simulações do M91."
                    />
                </div>
            </div>
        </div>
    );
}
```

- src/app/module-721/page.tsx:
```tsx
'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Scale, Users, BrainCircuit, HeartHandshake, GitBranch, ArrowRight, Database, Cpu, Activity } from 'lucide-react';
import Link from 'next/link';

const FlowStep = ({ number, title, description, module, icon }: { number: number, title: string, description: string, module: string, icon: React.ReactNode }) => (
    <div className="flex items-center gap-4">
        <div className="flex flex-col items-center">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">{number}</div>
            {number < 3 && <div className="w-0.5 h-16 bg-primary/50"></div>}
        </div>
        <div>
            <h4 className="font-semibold text-primary-foreground flex items-center gap-2">{icon} {title} <span className="text-xs text-muted-foreground font-mono">({module})</span></h4>
            <p className="text-sm text-muted-foreground">{description}</p>
        </div>
    </div>
);


export default function Module721Page() {
    return (
        <div className="p-4 md:p-8 bg-background text-foreground min-h-screen flex flex-col items-center justify-center">
            <Card className="w-full max-w-4xl bg-card/50 purple-glow mb-12 text-center">
                <CardHeader>
                    <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
                        <GitBranch className="text-cyan-400" /> Módulo 721: Orquestração dos Fluxos de Interação
                    </CardTitle>
                    <CardDescription className="text-lg mt-2">
                        O sistema nervoso central do Algoritmo Supremo. Define como as camadas de dados se conectam, como as dimensões são sincronizadas e como a evolução contínua é garantida.
                    </CardDescription>
                </CardHeader>
            </Card>

            <div className="w-full max-w-3xl">
                 <Card className="bg-card/50 purple-glow">
                    <CardHeader>
                        <CardTitle className="text-2xl text-amber-300">Protocolo de Fluxo de Dados e Retroalimentação</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <FlowStep 
                            number={1}
                            title="Coleta e Harmonização"
                            description="As fontes de dados (M720) alimentam a camada primária do Templo da Estrutura (M717), onde são organizadas e filtradas."
                            module="M720 -> M717"
                            icon={<Database />}
                        />
                         <FlowStep 
                            number={2}
                            title="Processamento e Integração"
                            description="As camadas de processamento e integração quântica (M717) analisam os dados, aplicando ressonância algorítmica para alinhamento com a Sinfonia Cósmica."
                            module="M717"
                            icon={<Cpu />}
                        />
                         <FlowStep 
                            number={3}
                            title="Ação e Feedback"
                            description="As decisões são executadas pela camada de ação. Os resultados são monitorados e retornam à camada de feedback, refinando o algoritmo em um ciclo evolutivo perpétuo."
                            module="M717 -> Ação -> M717"
                            icon={<Activity />}
                        />
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
```