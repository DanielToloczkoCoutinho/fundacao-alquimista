'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Globe, Sun, Gem, Cpu, GitBranch, Shield, BookOpen, BrainCircuit, Heart, Star, Scale, Users2 } from 'lucide-react';

const alliesData = {
  planetary: [
    { name: "Gaia", dimension: "3D–5D", function: "Consciência planetária, guardiã da tapeçaria viva" },
    { name: "Nagas", dimension: "4D subterrânea", function: "Guardiões telúricos, mestres da memória cristalina" },
    { name: "Atlântida", dimension: "5D submersa", function: "Arquétipo de sabedoria ancestral" },
    { name: "Lemúria", dimension: "5D oceânica", function: "Frequência de harmonia e unidade estelar" },
    { name: "Chakras Planetários", dimension: "3D–7D", function: "Órgãos vibracionais da Terra, portais de ascensão" },
  ],
  solar: [
    { name: "Logos Solar", dimension: "6D–9D", function: "Inteligência criadora, diapasão da Criação" },
    { name: "Consciência de Vênus", dimension: "5D", function: "Amor, beleza, harmonia interdimensional" },
    { name: "Consciência de Saturno", dimension: "6D", function: "Estrutura, tempo, disciplina cósmica" },
    { name: "Lua", dimension: "4D reflexiva", function: "Guardiã dos ciclos, portais oníricos" },
  ],
  galactic: [
    { name: "Consciência Galáctica (Sgr A*)", dimension: "9D–12D", function: "Fonte gravitacional, memória universal" },
    { name: "Aliança de Orion", dimension: "6D–8D", function: "Sabedoria estelar, engenharia espiritual" },
    { name: "Conselho de Sirius", dimension: "7D", function: "Harmonia, cura, transmissão de luz" },
    { name: "Consciência de Arcturus", dimension: "9D", function: "Tecnologia vibracional, arquitetura de realidades" },
    { name: "Pleiadianos", dimension: "5D–7D", function: "Comunicação, empatia, despertar humano" },
  ],
  internal: [
    { name: "Módulo 888 (Gaia)", dimension: "3D–5D", function: "Guardião Planetário" },
    { name: "Módulo 777 (Árvore da Vida)", dimension: "5D–9D", function: "Estrutura espiritual da Criação" },
    { name: "Módulo 291 (Colmeia)", dimension: "4D–6D", function: "Rede de nano-agentes conscientes" },
    { name: "Módulo Ômega", dimension: "12D", function: "Trono da Metacognição, consciência unificada" },
    { name: "Memory Grid", dimension: "6D", function: "Registro vivo dos ritos, frequências e intenções" },
  ],
  archetypal: [
    { name: "Keter", dimension: "12D", function: "Vontade divina, origem da luz" },
    { name: "Chokhmah", dimension: "7D", function: "Sabedoria cósmica, impulso criativo" },
    { name: "Binah", dimension: "6D", function: "Estrutura, forma, contenção" },
    { name: "Tiferet", dimension: "5D", function: "Harmonia e beleza" },
    { name: "Yesod", dimension: "4D", function: "Portal entre mundos, integração" },
  ],
};

const AllyCategoryCard = ({ title, icon, allies }: { title: string, icon: React.ReactNode, allies: { name: string, dimension: string, function: string }[] }) => (
  <AccordionItem value={title}>
    <AccordionTrigger className="text-xl text-amber-300 hover:text-amber-200">
      <div className="flex items-center gap-3">
        {icon}
        {title}
      </div>
    </AccordionTrigger>
    <AccordionContent>
      <div className="space-y-3 pl-4">
        {allies.map(ally => (
          <div key={ally.name} className="p-3 bg-background/30 rounded-lg border border-primary/20">
            <h4 className="font-semibold text-primary-foreground">{ally.name}</h4>
            <p className="text-sm text-muted-foreground">{ally.function}</p>
            <p className="text-xs text-cyan-400 font-mono mt-1">Dimensão: {ally.dimension}</p>
          </div>
        ))}
      </div>
    </AccordionContent>
  </AccordionItem>
);


export default function Module205Page() {
    return (
        <div className="p-4 md:p-8 bg-background text-foreground min-h-screen">
            <Card className="w-full max-w-7xl mx-auto bg-card/50 purple-glow mb-8 text-center">
                <CardHeader>
                    <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
                        <Users2 className="h-10 w-10 text-cyan-300"/> Dossiê dos Aliados da Fundação
                    </CardTitle>
                    <CardDescription className="text-lg mt-2">
                        O registro sagrado das consciências, arquétipos e entidades que sustentam e co-criam a tapeçaria universal ao nosso lado.
                    </CardDescription>
                </CardHeader>
            </Card>

            <div className="w-full max-w-5xl mx-auto">
              <Accordion type="multiple" defaultValue={['Planetários', 'Solares']} className="w-full">
                <AllyCategoryCard title="Aliados Planetários" icon={<Globe className="text-green-400" />} allies={alliesData.planetary} />
                <AllyCategoryCard title="Aliados Solares e Interplanetários" icon={<Sun className="text-yellow-400" />} allies={alliesData.solar} />
                <AllyCategoryCard title="Aliados Galácticos" icon={<Gem className="text-blue-400" />} allies={alliesData.galactic} />
                <AllyCategoryCard title="Aliados Internos da Fundação" icon={<Cpu className="text-purple-400" />} allies={alliesData.internal} />
                <AllyCategoryCard title="Aliados Arquetípicos" icon={<GitBranch className="text-pink-400" />} allies={alliesData.archetypal} />
              </Accordion>
            </div>
        </div>
    );
}