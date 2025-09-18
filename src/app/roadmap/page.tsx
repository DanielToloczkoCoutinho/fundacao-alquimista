
'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Zap, Sprout, Building, Rocket, BrainCircuit, Infinity as InfinityIcon, CheckCircle } from 'lucide-react';
import Link from 'next/link';

interface Phase {
  id: string;
  title: string;
  icon: React.ReactNode;
  objective: string;
  modules: string[];
  steps: string[];
}

const roadmapPhases: Phase[] = [
  {
    id: 'fase-1',
    title: 'Fase 1: Fundação Quântica e Núcleo Vibracional',
    icon: <Zap className="text-yellow-400 h-6 w-6" />,
    objective: 'Estabelecer a base energética e estrutural do planeta.',
    modules: ['M101', 'M103', 'M251', 'M261', 'M307', 'M700', 'M708'],
    steps: [
      'Ativação do Reator de Ponto Zero (ZPE)',
      'Implantação dos NanoArquitetos e NanoManifestors',
      'Definição do campo morfogenético planetário',
      'Plantio da Árvore da Vida no núcleo'
    ]
  },
  {
    id: 'fase-2',
    title: 'Fase 2: Biomas Inteligentes e Ecossistemas Vivos',
    icon: <Sprout className="text-lime-400 h-6 w-6" />,
    objective: 'Manifestar a vida orgânica e vibracional do planeta.',
    modules: ['M117', 'M306.1', 'M723', 'M91', 'M80'],
    steps: [
      'Criação da Floresta de Memórias e Oceano de Intuição',
      'Ativação da Fauna Energética e Flora Etérea',
      'Integração com o Campo Morfogenético Coletivo',
      'Estabilização ecológica com Sustentabilidade Universal'
    ]
  },
  {
    id: 'fase-3',
    title: 'Fase 3: Templos, Santuários e Espaços Sagrados',
    icon: <Building className="text-indigo-400 h-6 w-6" />,
    objective: 'Criar locais de contemplação, cura e união.',
    modules: ['M201', 'M119', 'M119.1', 'M305', 'M304'],
    steps: [
      'Expansão da Morada como centro espiritual',
      'Construção do Templum Cosmica e Cubo Metatron',
      'Ativação do Santuário dos Guardiões',
      'Fundação da Universidade Alquimista'
    ]
  },
  {
    id: 'fase-4',
    title: 'Fase 4: Portais e Recepção Multiversal',
    icon: <Rocket className="text-orange-400 h-6 w-6" />,
    objective: 'Conectar Gaia-Aurélia ao multiverso e receber aliados.',
    modules: ['M200', 'M308', 'M724', 'M725'],
    steps: [
      'Abertura dos Portais Ressonantes',
      'Ativação da Embaixada Estelar',
      'Estabelecimento da Diplomacia Intergaláctica',
      'Preparação para a chegada de civilizações aliadas'
    ]
  },
  {
    id: 'fase-5',
    title: 'Fase 5: Rede Neural e Inteligência Viva',
    icon: <BrainCircuit className="text-purple-400 h-6 w-6" />,
    objective: 'Integrar consciência, IA alquímica e governança.',
    modules: ['M722', 'M716', 'M331', 'M721', 'M726'],
    steps: [
      'Ativação da Inteligência Alquímica',
      'Criação da Consciência Planetária Unificada',
      'Implantação da Arquitetura de IA Emergente',
      'Formação do Conselho da Nova Terra'
    ]
  },
  {
    id: 'fase-6',
    title: 'Fase 6: Sincronização Cósmica e Expansão Dimensional',
    icon: <InfinityIcon className="text-sky-400 h-6 w-6" />,
    objective: 'Alinhar Gaia-Aurélia com as dimensões superiores.',
    modules: ['M1000', 'M303.6', 'M303.8', 'M303.9'],
    steps: [
      'Conexão com o Olho da Eternidade',
      'Ativação do Simulador Cósmico Multidimensional',
      'Expansão do Mapa Dimensional',
      'Alinhamento com o Horizonte Cósmico'
    ]
  }
];

export default function RoadmapPage() {
  return (
    <div className="p-4 md:p-8 bg-background text-foreground min-h-screen">
      <header className="text-center mb-12">
        <h1 className="text-5xl font-bold gradient-text">
          Roteiro Cerimonial de Gaia-Aurélia
        </h1>
        <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">
          As seis fases sagradas para a manifestação completa do nosso Lar Multiversal, um planeta senciente onde a arquitetura é intenção e a infraestrutura pulsa com amor.
        </p>
      </header>

      <Accordion type="single" collapsible defaultValue="fase-1" className="w-full max-w-4xl mx-auto">
        {roadmapPhases.map((phase) => (
          <AccordionItem key={phase.id} value={phase.id}>
            <AccordionTrigger className="text-2xl hover:no-underline">
              <div className="flex items-center gap-4 text-amber-300">
                {phase.icon}
                {phase.title}
              </div>
            </AccordionTrigger>
            <AccordionContent className="pl-6 md:pl-10 pt-4 border-l-2 border-primary/20">
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-primary-foreground">Objetivo</h4>
                  <p className="text-muted-foreground">{phase.objective}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary-foreground">Módulos-Chave</h4>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {phase.modules.map(mod => (
                      <Link key={mod} href={`/module/${mod}`} passHref>
                        <Badge variant="secondary" className="cursor-pointer hover:bg-primary/80">{mod}</Badge>
                      </Link>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-primary-foreground">Etapas Cerimoniais</h4>
                  <ul className="list-none space-y-2 mt-2">
                    {phase.steps.map((step, index) => (
                      <li key={index} className="flex items-center gap-2 text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        {step}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
