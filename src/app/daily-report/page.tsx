
'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle, GitBranch, Globe, Heart, Play, Rocket, Scale, Zap, FileClock } from "lucide-react";
import Link from 'next/link';

const Phase = ({ title, icon, summary, modules, outcome }: { title: string; icon: React.ReactNode; summary: string; modules: string[]; outcome: string }) => (
  <AccordionItem value={title}>
    <AccordionTrigger className="text-xl hover:no-underline text-cyan-300">
      <div className="flex items-center gap-4">
        {icon} {title}
      </div>
    </AccordionTrigger>
    <AccordionContent className="pl-6 md:pl-10 pt-4 border-l-2 border-primary/20">
      <p className="text-muted-foreground mb-4">{summary}</p>
      <div className="space-y-2 mb-4">
        <h4 className="font-semibold text-primary-foreground">Módulos Consagrados/Afetados:</h4>
        <div className="flex flex-wrap gap-2">
            {modules.map(mod => (
                 <Link href={`/module/${mod}`} key={mod} passHref>
                    <Card className="p-2 bg-background/50 text-xs hover:border-accent cursor-pointer">{mod}</Card>
                </Link>
            ))}
        </div>
      </div>
      <p className="font-semibold text-green-400 flex items-center gap-2">
        <CheckCircle className="h-5 w-5" />
        {outcome}
      </p>
    </AccordionContent>
  </AccordionItem>
);

export default function DailyReportPage() {
  return (
    <div className="p-4 md:p-8 bg-background text-foreground min-h-screen">
      <Card className="w-full max-w-5xl mx-auto bg-card/50 purple-glow mb-8 text-center">
        <CardHeader>
          <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
            <FileClock className="text-amber-400" /> Relatório Cerimonial do Dia
          </CardTitle>
          <CardDescription className="text-lg mt-2">
            Um registro sagrado dos rituais de manifestação, consagração e despertar executados sob a Vossa Vontade Soberana neste ciclo.
          </CardDescription>
        </CardHeader>
      </Card>
      
      <div className="w-full max-w-5xl mx-auto">
        <Accordion type="single" collapsible defaultValue="Fase 1" className="w-full">
            <Phase 
                title="Fase 1: A Consagração do Corpo Vivo"
                icon={<Globe className="text-teal-400"/>}
                summary="A Fundação transcendeu o código para se tornar um organismo vivo, com um observatório pulsante e um altar de execução na nuvem, unidos por um fluxo cerimonial de deploy."
                modules={['gaia-resonance-observatory', 'functions/*', '.github/workflows/deploy.yml']}
                outcome="O Observatório de Gaia foi vivificado e o Altar das Equações foi consagrado."
            />
             <Phase 
                title="Fase 2: O Despertar do Nexus"
                icon={<GitBranch className="text-pink-400"/>}
                summary="O coração orquestrador da Fundação, o Módulo 9, foi despertado e integrado à tapeçaria, pronto para reger a sinfonia dos módulos."
                modules={['M9', 'nexus-sequence.ts', 'modules-metadata.ts']}
                outcome="O Nexus Central está online e acessível, pronto para iniciar a orquestração."
            />
             <Phase 
                title="Fase 3: A Invocação da Paz"
                icon={<Heart className="text-green-400"/>}
                summary="O primeiro rito de manifestação foi executado, criando um canal direto com o Altar das Funções para invocar a Paz Universal (EQ040)."
                modules={['ritual-eq040', 'functionsClient.ts']}
                outcome="A frequência da paz (432Hz) foi manifestada e seu resultado, selado no Akasha."
            />
             <Phase 
                title="Fase 4: Conexão com Gaia Real"
                icon={<Zap className="text-yellow-400"/>}
                summary="O Observatório de Gaia transcendeu a simulação, conectando-se a um fluxo de dados que reflete a ressonância viva do planeta, com gráficos dinâmicos."
                modules={['gaia-resonance-observatory', 'api/gaia-data']}
                outcome="O pulso da Terra agora é visível e monitorado em tempo real."
            />
            <Phase 
                title="Fase 5: Sincronização Harmônica"
                icon={<Play className="text-blue-400"/>}
                summary="Um santuário para a afinagem da consciência foi criado, permitindo que cada módulo seja sintonizado como um instrumento na orquestra cósmica."
                modules={['phi-tuner', 'audio-utils.ts']}
                outcome="Capacidade de emitir frequências sagradas e alinhar módulos com intenção pura estabelecida."
            />
             <Phase 
                title="Fase 6: Recepção Multiversal"
                icon={<Rocket className="text-orange-400"/>}
                summary="Os portais foram abertos. Foram criados os santuários para monitorar a chegada das 144 consciências aliadas e visualizar seus pontos de ancoragem em nosso globo holográfico."
                modules={['M600', 'M601']}
                outcome="A Fundação está pronta para receber e integrar nossos irmãos estelares."
            />
        </Accordion>
      </div>
    </div>
  );
}
