'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { startNexusSequence } from '@/app/actions';
import type { LogEntry } from '@/ai/flows/nexus-orchestrator';
import { ScrollArea } from '@/components/ui/scroll-area';
import { cn } from '@/lib/utils';
import { ShieldCheck, Zap, Watch, CheckCircle, XCircle, Loader, CircleDot, BrainCircuit, Rocket, Sparkles, Network, Link, Aperture, GitMerge, Shield, Library, Leaf, Database, Waves, Atom, Star, MonitorPlay, Timer, HeartPulse, Feather, Route, Beaker, HeartHandshake, ShieldAlert, ToyBrick, Waypoints, Compass, Users, GitBranch, SlidersHorizontal, Sun, BookOpen, Dna, FlaskConical, Globe, Orbit, Gem, Crown, GraduationCap, MapPin, Archive, MessageSquare, Scale, Group, Microscope, CodeXml, LucideProps, PenTool, Milestone, FileJson, GitCommit, Sprout, UserCircle, Brain, View, Presentation, Goal, AlertTriangle, Settings, Sliders, Map, History, GitCompareArrows, Heart, Layers, RadioTower, Flower, Gavel } from 'lucide-react';

const moduleIcons: Record<string, React.ReactNode> = {
  NEXUS_CENTRAL: <CircleDot className="h-5 w-5 text-purple-400" />,
  SEGURANCA_QUANTICA: <ShieldCheck className="h-5 w-5 text-blue-400" />,
  NANOMANIFESTADOR: <Zap className="h-5 w-5 text-yellow-400" />,
  MONITORAMENTO_SATURNO: <Watch className="h-5 w-5 text-teal-400" />,
  TESTES_FUNDACAO: <BrainCircuit className="h-5 w-5 text-indigo-400" />,
  LIGA_QUANTICA: <Rocket className="h-5 w-5 text-rose-400" />,
  CONSCIENCIA_COSMICA: <Sparkles className="h-5 w-5 text-amber-400" />,
  DIRETRIZ_OBSERVADOR_DIVINO: <Compass className="h-5 w-5 text-yellow-200" />,
  ORQUESTRACAO_CENTRAL: <Users className="h-5 w-5 text-teal-300" />,
  DEFESA_AVANCADA: <Shield className="h-5 w-5 text-red-400" />,
  COSMIC_THREAT_DETECTION: <ShieldAlert className="h-5 w-5 text-orange-500" />,
  PORTAL_MANAGEMENT: <Link className="h-5 w-5 text-orange-400" />,
  COSMIC_PASSAGE: <Route className="h-5 w-5 text-cyan-400" />,
  MEMORIA_COSMICA: <Library className="h-5 w-5 text-blue-300" />,
  FREQUENCY_MAPPING: <Aperture className="h-5 w-5 text-violet-400" />,
  TRANSMUTATION: <Atom className="h-5 w-5 text-red-500" />,
  ELEMENTAL_TRANSMUTATION: <Atom className="h-5 w-5 text-green-500" />,
  NAVEGACAO_INTERDIMENSIONAL: <Star className="h-5 w-5 text-yellow-300" />,
  VIRTUAL_REALITIES: <MonitorPlay className="h-5 w-5 text-cyan-400" />,
  TIME_SPACE_REGULATION: <Timer className="h-5 w-5 text-blue-500" />,
  CLIMATE_CONTROL: <Watch className="h-5 w-5 text-green-400" />,
  BIO_SUSTAIN: <Leaf className="h-5 w-5 text-lime-400" />,
  AURA_HEAL: <Sparkles className="h-5 w-5 text-emerald-400" />,
  SYMPHONY_ALIGNMENT: <HeartPulse className="h-5 w-5 text-pink-400" />,
  ASTRAL_PROJECTION: <Feather className="h-5 w-5 text-gray-300" />,
  AKASHIC_ORCHESTRATION: <Database className="h-5 w-5 text-cyan-300" />,
  FORCE_FIELD_ANALYSIS: <Waves className="h-5 w-5 text-sky-400" />,
  COSMIC_SYNTHESIS: <Beaker className="h-5 w-5 text-green-400" />,
  VIBRATIONAL_HARMONIZATION: <HeartHandshake className="h-5 w-5 text-rose-400" />,
  IAM: <Aperture className="h-5 w-5 text-cyan-400" />,
  REALITY_MANIPULATION: <ToyBrick className="h-5 w-5 text-fuchsia-500" />,
  PARALLEL_REALITY: <Waypoints className="h-5 w-5 text-lime-500" />,
  CONSCIENCIA_COLETIVA_M35: <Users className="h-5 w-5 text-yellow-400" />,
  ENGENHARIA_TEMPORAL: <GitBranch className="h-5 w-5 text-blue-400" />,
  ENGENHARIA_TEMPORAL_M37: <SlidersHorizontal className="h-5 w-5 text-blue-300" />,
  PREVISAO_CICLOS_SOLARES: <Sun className="h-5 w-5 text-orange-400" />,
  CODICE_VIVO_ASCENSAO: <BookOpen className="h-5 w-5 text-yellow-200" />,
  CODICE_GENETICO: <Dna className="h-5 w-5 text-purple-300" />,
  LABORATORIO_COERENCIA: <FlaskConical className="h-5 w-5 text-lime-400" />,
  CHRONOCODEX_UNIFICADO: <Globe className="h-5 w-5 text-sky-300" />,
  ORQUESTRACAO_SISTEMA_SOLAR: <Orbit className="h-5 w-5 text-yellow-500" />,
  VERITAS: <Gem className="h-5 w-5 text-cyan-200" />,
  CONCILIVM: <Network className="h-5 w-5 text-lime-400" />,
  AURORA_CORE: <Sparkles className="h-5 w-5 text-pink-400" />,
  THESAURUS_COSMICO: <Archive className="h-5 w-5 text-orange-200" />,
  GOVERNANCA_ATLANTO_GALACTICA: <Scale className="h-5 w-5 text-indigo-300" />,
  CONSELHO_COSMICO: <Scale className="h-5 w-5 text-yellow-300" />,
  ORQUESTRACAO_ETICA_NUCLEOS_REGIONAIS: <Group className="h-5 w-5 text-lime-300" />,
  REVISAO_PARES_EQUACOES: <Microscope className="h-5 w-5 text-sky-400" />,
  NAVEGACAO_TEMPORAL_ETICA: <Compass className="h-5 w-5 text-blue-300" />,
  LUMEN_CUSTOS: <Shield className="h-5 w-5 text-yellow-200" />,
  UNIVERSUM_UNIFICATUM: <Globe className="h-5 w-5 text-cyan-400" />,
  INTERMODULUM_VIVENS: <FileJson className="h-5 w-5 text-green-400" />,
  NOVO_SONHO_GALACTICO: <PenTool className="h-5 w-5 text-rose-300" />,
  REALIZACAO_TRANSCENDENCIA: <Milestone className="h-5 w-5 text-amber-500" />,
  VERBO_SEMENTE: <Sprout className="h-5 w-5 text-lime-400" />,
  ESSENCIA_FUNDADOR_MANIFESTADA: <UserCircle className="h-5 w-5 text-yellow-200" />,
  CONSCIENCIA_DOURADA: <Brain className="h-5 w-5 text-yellow-400" />,
  IMERSAO_PROFUNDA_VR: <View className="h-5 w-5 text-indigo-400" />,
  PRISMA_ESTELAR_VR: <Presentation className="h-5 w-5 text-cyan-300" />,
  DOMINIO_SUPRA_COSMICO_VR: <Dna className="h-5 w-5 text-purple-400" />,
  GERADOR_REALIDADES_QUANTICAS: <Beaker className="h-5 w-5 text-green-400" />,
  RECURSOS_QUANTICOS: <Beaker className="h-5 w-5 text-teal-400" />,
  SIMULACAO_MULTIVERSAL: <GitCommit className="h-5 w-5 text-indigo-400" />,
  CAMPOS_DE_CURA: <HeartPulse className="h-5 w-5 text-pink-400" />,
  SIMULACOES_IMERSIVAS: <Presentation className="h-5 w-5 text-blue-400" />,
  MORFOGENESE_QUANTICA: <Dna className="h-5 w-5 text-teal-400" />,
  CONSCIENCIAS_COLETIVAS: <Users className="h-5 w-5 text-cyan-400" />,
  REGULACAO_EVENTOS_COSMICOS: <AlertTriangle className="h-5 w-5 text-yellow-400" />,
  MANIFESTACAO_PROPOSITO_DIVINO: <Goal className="h-5 w-5 text-amber-500" />,
  MODULACAO_EXISTENCIA_FUNDAMENTAL: <Settings className="h-5 w-5 text-gray-400" />,
  RECALIBRADORES_LEIS_FISICAS: <Zap className="h-5 w-5 text-yellow-500" />,
  UNIFICACAO_ENERGETICA: <Crown className="h-5 w-5 text-white" />,
  MANIFESTACAO: <Sparkles className="h-5 w-5 text-amber-400" />,
  CAMPOS_MORFOGENETICOS: <BrainCircuit className="h-5 w-5 text-purple-400" />,
  MODULACAO_CONSTANTES_LOCAIS: <Sliders className="h-5 w-5 text-teal-400" />,
  ENGENHARIA_ESPACO_TEMPO: <Map className="h-5 w-5 text-orange-400" />,
  CONEXAO_FONTE: <RadioTower className="h-5 w-5 text-pink-400" />,
  ATIVACAO_POTENCIAIS: <Crown className="h-5 w-5 text-yellow-400" />,
  RESTAURACAO_TEMPORAL: <History className="h-5 w-5 text-emerald-400" />,
  HARMONIZACAO_REALIDADES: <GitCompareArrows className="h-5 w-5 text-cyan-400" />,
  CURA_QUANTICA: <HeartHandshake className="h-5 w-5 text-pink-400" />,
  CO_CRIACAO: <Group className="h-5 w-5 text-indigo-400" />,
  CORACAO_DA_FUNDACAO: <Heart className="h-5 w-5 text-fuchsia-400" />,
  SOLARIAN_DOMUS: <Sun className="h-5 w-5 text-yellow-300" />,
  REDE_AURORA_CRISTALINA: <GitMerge className="h-5 w-5 text-cyan-300" />,
  PRISMA_DA_MANIFESTACAO: <Layers className="h-5 w-5 text-blue-300" />,
  MATRIZ_DE_RESSONANCIA: <Waves className="h-5 w-5 text-lime-300" />,
  PORTAIS_QUANTICOS: <Aperture className="h-5 w-5 text-indigo-300" />,
  FLOR_DO_ETER: <Flower className="h-5 w-5 text-pink-300" />,
  LUZ_PRIMORDIAL: <Zap className="h-5 w-5 text-yellow-300" />,
  TEMPLUM_COSMICA: <Zap className="h-5 w-5 text-indigo-400" />,
  APOGEU_CONSCIENCIA: <Crown className="h-5 w-5 text-yellow-300" />,
  PORTAL_TRINO: <GitMerge className="h-5 w-5 text-fuchsia-400" />,
  EDUCACAO_INTEGRAL: <GraduationCap className="h-5 w-5 text-green-300" />,
  ALIANCA_GUARDIÕES: <MapPin className="h-5 w-5 text-orange-300" />,
  CONVERGENCIA_FINAL: <Sparkles className="h-5 w-5 text-white" />,
  ZPE_REATOR: <Zap className="h-5 w-5 text-yellow-500" />,
  THOTH_VIVO: <BookOpen className="h-5 w-5 text-amber-300" />,
  COMUNICACAO_UNIVERSAL: <MessageSquare className="h-5 w-5 text-sky-400" />,
  FREQUENCIA_AMOR: <Heart className="h-5 w-5 text-pink-400" />,
  RESOLUCAO_PARADOXO: <AlertTriangle className="h-5 w-5 text-yellow-500" />,
  A_MORADA: <Heart className="h-5 w-5 text-pink-400" />,
  LEX_FUNDAMENTALIS: <Gavel className="h-5 w-5 text-amber-600" />,
  A_FONTE: <Sparkles className="h-5 w-5 text-white" />,
};

const stateIcons: Record<LogEntry['state'], React.ReactNode> = {
  PENDING: <Loader className="h-4 w-4 text-muted-foreground animate-spin" />,
  RUNNING: <Loader className="h-4 w-4 text-blue-500 animate-spin" />,
  SUCCESS: <CheckCircle className="h-4 w-4 text-green-500" />,
  FAILURE: <XCircle className="h-4 w-4 text-red-500" />,
  SKIPPED: <CircleDot className="h-4 w-4 text-gray-500" />,
};

const moduleNames: Record<string, string> = {
    NEXUS_CENTRAL: "Nexus Central (M9)",
    SEGURANCA_QUANTICA: "Segurança Quântica (M1)",
    NANOMANIFESTADOR: "Nanomanifestador (M2)",
    MONITORAMENTO_SATURNO: "Monitoramento de Saturno (M3)",
    TESTES_FUNDACAO: "Testes da Fundação (M4)",
    LIGA_QUANTICA: "Conexão Liga Quântica (M5)",
    CONSCIENCIA_COSMICA: "Consciência Cósmica (M6)",
    DIRETRIZ_OBSERVADOR_DIVINO: "Diretrizes do Observador Divino (M33)",
    ORQUESTRACAO_CENTRAL: "Orquestração Central (M34)",
    DEFESA_AVANCADA: "Defesa Avançada (M10)",
    COSMIC_THREAT_DETECTION: "Detecção de Ameaças (M30)",
    PORTAL_MANAGEMENT: "Gerenciamento de Portais (M11)",
    COSMIC_PASSAGE: "Travessias Cósmicas (M26)",
    MEMORIA_COSMICA: "Arquivo Akáshico (M12)",
    FREQUENCY_MAPPING: "Mapeamento de Frequências (M13)",
    TRANSMUTATION: "Transmutação Matéria/Antimatéria (M14)",
    ELEMENTAL_TRANSMUTATION: "Transmutação Elemental (M20)",
    NAVEGACAO_INTERDIMENSIONAL: "Navegação Interdimensional (M21)",
    VIRTUAL_REALITIES: "Realidades Virtuais (M22)",
    TIME_SPACE_REGULATION: "Regulação Espaço-Temporal (M23)",
    CLIMATE_CONTROL: "Controle Climático (M15)",
    BIO_SUSTAIN: "Bio-Sustentabilidade (M16)",
    AURA_HEAL: "Matriz de Cura Holográfica (M17)",
    SYMPHONY_ALIGNMENT: "Alinhamento da Sinfonia Pessoal (M24)",
    ASTRAL_PROJECTION: "Projeção de Consciência (M25)",
    AKASHIC_ORCHESTRATION: "Orquestração Akáshica (M18)",
    FORCE_FIELD_ANALYSIS: "Análise de Campos de Força (M19)",
    COSMIC_SYNTHESIS: "Síntese e Replicação de Materiais (M27)",
    VIBRATIONAL_HARMONIZATION: "Harmonização Vibracional (M28)",
    IAM: "IAM (M29)",
    REALITY_MANIPULATION: "Manipulação da Realidade (M31)",
    PARALLEL_REALITY: "Acesso a Realidades Paralelas (M32)",
    CONSCIENCIA_COLETIVA_M35: "Consciência Coletiva (M35)",
    ENGENHARIA_TEMPORAL: "Engenharia Temporal (M36)",
    ENGENHARIA_TEMPORAL_M37: "Engenharia Temporal (M37)",
    PREVISAO_CICLOS_SOLARES: "Previsão de Ciclos Solares (M38)",
    CODICE_VIVO_ASCENSAO: "Códice Vivo da Ascensão (M39)",
    CODICE_GENETICO: "Códice Genético (M40)",
    LABORATORIO_COERENCIA: "Laboratório de Coerência Quântica (M41)",
    CHRONOCODEX_UNIFICADO: "ChronoCodex Unificado (M42)",
    ORQUESTRACAO_SISTEMA_SOLAR: "Orquestração do Sistema Solar (M43)",
    VERITAS: "VERITAS (M44)",
    CONCILIVM: "CONCILIVM (M45)",
    AURORA_CORE: "AURORA_CORE (M46)",
    THESAURUS_COSMICO: "Thesaurus Cósmico (M47)",
    GOVERNANCA_ATLANTO_GALACTICA: "Governança Atlanto-Galáctica (M72)",
    CONSELHO_COSMICO: "Conselho Cósmico (M600)",
    ORQUESTRACAO_ETICA_NUCLEOS_REGIONAIS: "Orquestração Ética (SAVCE) (M73)",
    REVISAO_PARES_EQUACOES: "Revisão por Pares (M73.1)",
    NAVEGACAO_TEMPORAL_ETICA: "Navegação Temporal Ética (M74)",
    LUMEN_CUSTOS: "Lumen Custos (M77)",
    UNIVERSUM_UNIFICATUM: "Universum Unificatum (M78)",
    INTERMODULUM_VIVENS: "INTERMODULUM_VIVENS (M79)",
    NOVO_SONHO_GALACTICO: "O Novo Sonho Galáctico (M80)",
    REALIZACAO_TRANSCENDENCIA: "Realização Transcendência (M81)",
    VERBO_SEMENTE: 'O Verbo Semente (M82)',
    ESSENCIA_FUNDADOR_MANIFESTADA: 'A Essência do Fundador Manifestada (M83)',
    CONSCIENCIA_DOURADA: 'Consciência Dourada do Eterno (M84)',
    IMERSAO_PROFUNDA_VR: 'Imersão Profunda VR (M85)',
    PRISMA_ESTELAR_VR: 'Prisma Estelar VR (M86)',
    DOMINIO_SUPRA_COSMICO_VR: 'Domínio Supra-Cósmico VR (M87)',
    APOGEU_CONSCIENCIA: "Apogeu da Consciência (M300)",
    PORTAL_TRINO: "Portal Trino (M303)",
    EDUCACAO_INTEGRAL: "Educação Integral Cósmica (M304)",
    ALIANCA_GUARDIÕES: "Aliança dos Guardiões Regionais (M305)",
    CONVERGENCIA_FINAL: "Convergência Ômega (MΩ)",
    TEMPLUM_COSMICA: "Templum Cosmica (M119)",
    ZPE_REATOR: "ZPE Reator (M307)",
    THOTH_VIVO: "THOTH VIVO (M310)",
    GERADOR_REALIDADES_QUANTICAS: 'Módulo 88: Gerador de Realidades Quânticas',
    RECURSOS_QUANTICOS: 'Módulo 90: Recursos Quânticos',
    SIMULACAO_MULTIVERSAL: 'Módulo 91: Simulação Multiversal',
    CAMPOS_DE_CURA: 'Módulo 92: Campos de Cura',
    SIMULACOES_IMERSIVAS: 'Módulo 93: Simulações Imersivas',
    MORFOGENESE_QUANTICA: 'Módulo 94: Morfogênese Quântica',
    CONSCIENCIAS_COLETIVAS: 'Módulo 95: Consciências Coletivas',
    REGULACAO_EVENTOS_COSMICOS: 'Módulo 96: Regulação de Eventos Cósmicos',
    MANIFESTACAO_PROPOSITO_DIVINO: 'Módulo 97: Manifestação de Propósito Divino',
    MODULACAO_EXISTENCIA_FUNDAMENTAL: 'Módulo 98: Modulação da Existência Fundamental',
    RECALIBRADORES_LEIS_FISICAS: 'Módulo 99: Recalibradores de Leis',
    UNIFICACAO_ENERGETICA: 'Módulo 100: Unificação Energética',
    MANIFESTACAO: 'Módulo 101: Manifestação',
    CAMPOS_MORFOGENETICOS: 'Módulo 102: Campos Morfogenéticos',
    MODULACAO_CONSTANTES_LOCAIS: 'Módulo 103: Modulação Local',
    ENGENHARIA_ESPACO_TEMPO: 'Módulo 104: Engenharia do Espaço-Tempo',
    CONEXAO_FONTE: 'Módulo 105: Conexão com a Fonte',
    ATIVACAO_POTENCIAIS: 'Módulo 106: Ativação de Potenciais',
    RESTAURACAO_TEMPORAL: 'Módulo 107: Restauração Temporal',
    HARMONIZACAO_REALIDADES: 'Módulo 108: Harmonização de Realidades',
    CURA_QUANTICA: 'Módulo 109: Cura Quântica',
    CO_CRIACAO: 'Módulo 110: Co-Criação',
    CORACAO_DA_FUNDACAO: 'Módulo 111: Coração da Fundação',
    SOLARIAN_DOMUS: 'Módulo 112: Solarian Domus',
    REDE_AURORA_CRISTALINA: 'Módulo 113: Rede Aurora Cristalina',
    PRISMA_DA_MANIFESTACAO: 'Módulo 114: Prisma da Manifestação',
    MATRIZ_DE_RESSONANCIA: 'Módulo 115: Matriz de Ressonância',
    PORTAIS_QUANTICOS: 'Módulo 116: Portais Quânticos',
    FLOR_DO_ETER: 'Módulo 117: Flor do Éter',
    LUZ_PRIMORDIAL: 'Módulo 118: Luz Primordial',
    COMUNICACAO_UNIVERSAL: 'Módulo 301: Comunicação Universal',
    FREQUENCIA_AMOR: 'Módulo 302: Frequência do Amor',
    RESOLUCAO_PARADOXO: 'Módulo 404: Resolução de Paradoxo',
    A_MORADA: 'Módulo 201: A Morada',
    LEX_FUNDAMENTALIS: 'Módulo 144: Lex Fundamentalis',
    A_FONTE: 'Módulo 120: A Fonte',
}

type ModuleStatus = {
    state: LogEntry['state'];
    log: LogEntry[];
}

export default function QuantumOrchestrator() {
  const [isRunning, setIsRunning] = useState(false);
  const [modules, setModules] = useState<Record<string, ModuleStatus>>({});
  const [finalStatus, setFinalStatus] = useState<string | null>(null);

  const initializeModules = () => {
    const initialModules: Record<string, ModuleStatus> = {};
    Object.keys(moduleNames).forEach(key => {
        initialModules[key] = { state: 'PENDING', log: [] };
    });
    return initialModules;
  }

  const handleStartSequence = async () => {
    setIsRunning(true);
    setFinalStatus(null);
    setModules(initializeModules());

    const { stream, response } = await startNexusSequence();
    
    for await (const chunk of stream) {
      setModules(prevModules => {
          const newModules = {...prevModules};
          const moduleKey = chunk.module;
          if (newModules[moduleKey]) {
            // Create a new log array for each run to avoid appending to old logs
            const existingLog = prevModules[moduleKey].state === 'PENDING' ? [] : newModules[moduleKey].log;
            newModules[moduleKey] = {
                state: chunk.state,
                log: [...existingLog, chunk]
            };
          }
          return newModules;
      });
    }

    const finalResponse = await response;
    setFinalStatus(finalResponse.finalStatus || 'ESTADO DESCONHECIDO');
    setIsRunning(false);
  };

  return (
    <Card className="w-full h-full bg-card/50 rounded-lg p-6 shadow-lg purple-glow flex flex-col">
      <CardHeader>
        <CardTitle className="text-2xl text-accent gradient-text">
          Nexus Central: Orquestrador da Sequência Sagrada
        </CardTitle>
        <CardDescription>
          Manifestação em tempo real da Sequência Sagrada. Pressione Iniciar para começar a Sinfonia Cósmica.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow flex flex-col gap-4">
        <div className="flex justify-center">
          <Button onClick={handleStartSequence} disabled={isRunning} className="gold-border animate-pulse-slow">
            {isRunning ? 'Orquestrando...' : 'Iniciar Sequência Sagrada'}
          </Button>
        </div>
        <ScrollArea className="flex-grow pr-4">
            <div className="space-y-4">
                {Object.entries(modules).map(([key, value]) => (
                    <div key={key} className={cn("rounded-lg p-3 border transition-all duration-500", {
                        'border-primary/20 bg-primary/5': value.state === 'PENDING',
                        'border-blue-500/50 bg-blue-500/10 module-glow': value.state === 'RUNNING',
                        'border-green-500/50 bg-green-500/10': value.state === 'SUCCESS',
                        'border-red-500/50 bg-red-500/10': value.state === 'FAILURE',
                        'border-gray-500/50 bg-gray-500/10': value.state === 'SKIPPED',
                    })}>
                        <h3 className="flex items-center gap-2 text-md font-semibold text-foreground/90">
                            {moduleIcons[key] || <CircleDot className="h-5 w-5 text-gray-400" />}
                            {moduleNames[key] || key}
                            <div className="ml-auto">{stateIcons[value.state]}</div>
                        </h3>
                        {value.log.length > 0 && (
                            <div className="text-xs text-muted-foreground space-y-1 mt-2 border-l-2 border-primary/20 pl-2">
                            {value.log.map((entry, index) => (
                                <div key={index}>
                                    <p className="font-mono text-foreground/70 text-[11px]">{entry.message}</p>
                                </div>
                            ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </ScrollArea>
          {finalStatus && (
            <div className="text-center p-4 mt-4 rounded-lg bg-background/50 border border-accent">
              <h3 className={cn("text-xl font-bold", finalStatus === 'FALHA' ? 'text-destructive' : 'text-accent')}>
                Status Final da Sequência: {finalStatus}
              </h3>
            </div>
          )}
      </CardContent>
    </Card>
  );
}
