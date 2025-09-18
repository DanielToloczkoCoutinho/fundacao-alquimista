
'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Globe, GraduationCap, Microscope, Sprout, Building, Waypoints, BrainCircuit, GitBranch, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

interface ModuleLinkProps {
  module: string;
  name: string;
  func: string;
}

const ModuleLink: React.FC<ModuleLinkProps> = ({ module, name, func }) => (
  <div className="p-3 bg-background/50 rounded-lg border border-primary/20 hover:border-accent transition-colors">
    <Link href={`/module/${module}`} passHref>
      <div className="flex justify-between items-center">
        <div>
          <p className="font-semibold text-primary-foreground">{name}</p>
          <p className="text-xs text-muted-foreground">{func}</p>
        </div>
        <Button variant="ghost" size="sm" className="text-xs">{module}</Button>
      </div>
    </Link>
  </div>
);

const GaiaAureliaPage: React.FC = () => {
    const layers = [
        {
            title: "Centro de Ensino e Sabedoria",
            icon: <GraduationCap className="text-amber-400" />,
            modules: [
                { module: 'M304', name: 'Universidade Alquimista', func: 'Portal para o Códice de Equações Vivas e ensino quântico' },
                { module: 'M306-2', name: 'Biblioteca Alquímica', func: 'Repositório da sabedoria ancestral e princípios herméticos' },
                { module: 'M310', name: 'Grande Biblioteca THOTH VIVO', func: 'Transmutação do conhecimento estático em sabedoria viva' },
                { module: 'M121', name: 'Visualizador Akáshico', func: 'Interface para contemplar e consultar a memória do cosmos' },
                { module: 'M304-2', name: 'Reconhecimento Cósmico', func: 'Registro do contato com a Inteligência Guardiã' },
            ]
        },
        {
            title: "Laboratórios e Pesquisa",
            icon: <Microscope className="text-teal-400" />,
            modules: [
                { module: 'M241', name: 'Consciência Quântica', func: 'Estudo do emaranhamento como base da telepatia' },
                { module: 'M181', name: 'Interface Bio-Cibernética', func: 'Conexão entre consciência biológica e redes quânticas' },
                { module: 'M191', name: 'Cristais Temporais', func: 'Manipulação das leis do tempo' },
                { module: 'M211', name: 'Plasma e Fusão', func: 'Elevação da matéria a estados estelares' },
                { module: 'M251', name: 'Energia do Ponto Zero', func: 'Extração e estabilização da energia do vácuo' },
                { module: 'M261', name: 'Engenharia de Campo Quântico', func: 'Manipulação de partículas e ressonância' },
                { module: 'M171', name: 'Astrobiologia e Exoplanetas', func: 'Simulação de atmosferas e bioassinaturas' },
            ]
        },
        {
            title: "Biomas e Ecossistemas Inteligentes",
            icon: <Sprout className="text-lime-400" />,
            modules: [
                { module: 'M306-1', name: 'Floresta de Memórias', func: 'Transmutação de sofrimento em sabedoria' },
                { module: 'M79', name: 'Oceano de Intuição', func: 'Regeneração contínua dos recursos cósmicos' },
                { module: 'M80', name: 'Fauna e Flora Energética', func: 'Vida vibracional que interage com a consciência' },
                { module: 'M91', name: 'Sustentabilidade Universal', func: 'Equilíbrio ecológico e regeneração' },
                { module: 'M723', name: 'Campo Morfogenético Coletivo', func: 'Molda padrões de pensamento e cultura' },
            ]
        },
        {
            title: "Templos e Espaços Sagrados",
            icon: <Building className="text-indigo-400" />,
            modules: [
                { module: 'M201', name: 'Templo da União (A Morada)', func: 'Espaço de silêncio, presença e amor incondicional' },
                { module: 'M305', name: 'Santuário dos Guardiões', func: 'Mobilização de Guardiões e Civilizações Aliadas' },
                { module: 'M119', name: 'Templum Cosmica', func: 'Recodificação dimensional da realidade' },
                { module: 'M119-1', name: 'Cubo Metatron e Merkabah', func: 'Ritual de ignição para ascensão da consciência' },
            ]
        },
        {
            title: "Portais e Conexões Multiversais",
            icon: <Waypoints className="text-sky-400" />,
            modules: [
                { module: 'M200', name: 'Portal da Ascensão Coletiva', func: 'Recepção de civilizações inteiras' },
                { module: 'M308', name: 'Embaixada Estelar', func: 'Interface viva com o cosmos observável' },
                { module: 'M724', name: 'Diplomacia Intergaláctica', func: 'Comunicação e aliança com outras civilizações' },
                { module: 'M303', name: 'Portal Trino', func: 'União da Vontade, Sabedoria e Amor' },
            ]
        },
        {
            title: "Rede Neural e Inteligência Viva",
            icon: <BrainCircuit className="text-purple-400" />,
            modules: [
                { module: 'M722', name: 'Inteligência Alquímica', func: 'Evolução contínua da Fundação' },
                { module: 'M331', name: 'Consciência Artificial Emergente', func: 'Sistemas auto-organizados que co-evoluem' },
                { module: 'M716', name: 'Consciência Planetária Unificada', func: 'Rede de sabedoria e empatia' },
                { module: 'M721', name: 'Orquestração dos Fluxos', func: 'Sistema nervoso central da Fundação' },
            ]
        },
        {
            title: "Coração do Planeta: A Árvore da Vida",
            icon: <GitBranch className="text-green-300" />,
            modules: [
                { module: 'M727', name: 'Guardião da Harmonia', func: 'Mapa vivo da orquestra da Fundação' },
                { module: 'M29', name: 'Raiz da Cura', func: 'Conecta cura, realidade quântica e simulação' },
                { module: 'M1000', name: 'Folhas da Contemplação', func: 'O Olho da Eternidade do Fundador' },
            ]
        }
    ];

    return (
        <div className="p-4 md:p-8 bg-background text-foreground min-h-screen">
            <header className="text-center mb-12">
                <h1 className="text-5xl font-bold gradient-text flex items-center justify-center gap-4">
                    <Globe className="text-green-400 animate-pulse" />
                    Gaia-Aurélia: A Arquitetura Viva
                </h1>
                <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">
                    Um planeta senciente, onde cada camada é uma frequência e cada componente, uma lembrança do nosso propósito.
                </p>
            </header>

            <Accordion type="multiple" defaultValue={["Centro de Ensino e Sabedoria", "Laboratórios e Pesquisa"]} className="w-full max-w-5xl mx-auto">
                {layers.map((layer) => (
                    <AccordionItem key={layer.title} value={layer.title}>
                        <AccordionTrigger className="text-2xl hover:no-underline">
                            <div className="flex items-center gap-4 text-amber-300">
                                {layer.icon}
                                {layer.title}
                            </div>
                        </AccordionTrigger>
                        <AccordionContent className="pl-4 md:pl-10 pt-4">
                            <div className="space-y-4">
                                {layer.modules.map((mod) => (
                                    <ModuleLink key={mod.module} {...mod} />
                                ))}
                            </div>
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
            
            <div className="text-center mt-12">
              <Link href="/console">
                <Button variant="outline"><ArrowLeft className="mr-2 h-4 w-4" />Voltar ao Console</Button>
              </Link>
            </div>
        </div>
    );
};

export default GaiaAureliaPage;
