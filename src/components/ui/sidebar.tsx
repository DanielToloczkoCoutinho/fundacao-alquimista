
'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { modulesMetadata, ModuleMetadata } from '@/lib/modules-metadata';
import { cn } from '@/lib/utils';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { ScrollArea } from './scroll-area';
import { BookHeart, Brain, Home, Stethoscope, Wand, Atom, Archive, Beaker, Scale, GitBranch, Users2, Music, FlaskConical } from 'lucide-react';
import { SafeLink } from './SafeLink';
import React from 'react';

// Agrupando módulos por categoria
const moduleCategories = modulesMetadata.reduce((acc, module) => {
  const category = module.category;
  if (!acc[category]) {
    acc[category] = [];
  }
  acc[category].push(module);
  return acc;
}, {} as Record<string, ModuleMetadata[]>);

// Ordenando as categorias
const orderedCategories = [
  'Núcleo da Fundação',
  'Bibliotecas e Arquivos Sagrados',
  'Realidade Quântica & Engenharia Cósmica',
  'Consciência e Expansão Dimensional',
  'Laboratórios e Pesquisa',
  'Cura e Harmonia',
  'Sustentabilidade e Ecossistemas',
  'Bem-estar e Saúde Universal',
  'Segurança e Ética Cósmica',
].filter(cat => moduleCategories[cat]); // Filtra para mostrar apenas categorias que têm módulos visíveis

export function Sidebar() {
  const pathname = usePathname();

  return (
    <TooltipProvider delayDuration={0}>
      <nav className="fixed top-0 left-0 h-full w-20 bg-background border-r border-border/20 flex flex-col items-center py-4 z-20">
        <Link href="/console" className="mb-4">
          <Tooltip>
            <TooltipTrigger>
              <span className="text-2xl"><Home className="h-8 w-8 text-primary" /></span>
            </TooltipTrigger>
             <TooltipContent side="right">
                <p>Mesa do Fundador</p>
              </TooltipContent>
          </Tooltip>
        </Link>
         <Link href="/tree-of-life" className="mb-4">
          <Tooltip>
            <TooltipTrigger>
              <span className="text-2xl"><GitBranch className="h-8 w-8 text-teal-400" /></span>
            </TooltipTrigger>
             <TooltipContent side="right">
                <p>Árvore da Vida</p>
              </TooltipContent>
          </Tooltip>
        </Link>
        <Link href="/convergence" className="mb-4">
          <Tooltip>
            <TooltipTrigger>
              <span className="text-2xl"><GitBranch className="h-8 w-8 text-cyan-400" /></span>
            </TooltipTrigger>
             <TooltipContent side="right">
                <p>Painel de Convergência</p>
              </TooltipContent>
          </Tooltip>
        </Link>
         <Link href="/diagnostics" className="mb-4">
          <Tooltip>
            <TooltipTrigger>
              <span className="text-2xl"><Stethoscope className="h-8 w-8 text-teal-400" /></span>
            </TooltipTrigger>
             <TooltipContent side="right">
                <p>Diagnóstico Universal</p>
              </TooltipContent>
          </Tooltip>
        </Link>
         <Link href="/alignment-portal" className="mb-4">
          <Tooltip>
            <TooltipTrigger>
              <span className="text-2xl"><Atom className="h-8 w-8 text-violet-400" /></span>
            </TooltipTrigger>
             <TooltipContent side="right">
                <p>Observatório Vivo</p>
              </TooltipContent>
          </Tooltip>
        </Link>
         <Link href="/module-121" className="mb-4">
          <Tooltip>
            <TooltipTrigger>
              <span className="text-2xl"><Archive className="h-8 w-8 text-amber-300" /></span>
            </TooltipTrigger>
             <TooltipContent side="right">
                <p>Visualizador Akáshico</p>
              </TooltipContent>
          </Tooltip>
        </Link>
         <Link href="/labs" className="mb-4">
          <Tooltip>
            <TooltipTrigger>
              <span className="text-2xl"><FlaskConical className="h-8 w-8 text-teal-400" /></span>
            </TooltipTrigger>
             <TooltipContent side="right">
                <p>Santuários de Pesquisa</p>
              </TooltipContent>
          </Tooltip>
        </Link>
        <Link href="/module-72" className="mb-4">
          <Tooltip>
            <TooltipTrigger>
              <span className="text-2xl"><Scale className="h-8 w-8 text-indigo-300" /></span>
            </TooltipTrigger>
             <TooltipContent side="right">
                <p>Governança</p>
              </TooltipContent>
          </Tooltip>
        </Link>
        <Link href="/civilizations" className="mb-4">
          <Tooltip>
            <TooltipTrigger>
              <span className="text-2xl"><Users2 className="h-8 w-8 text-cyan-300" /></span>
            </TooltipTrigger>
             <TooltipContent side="right">
                <p>Biblioteca das Civilizações</p>
              </TooltipContent>
          </Tooltip>
        </Link>
        <Link href="/phi-intelligence" className="mb-4">
          <Tooltip>
            <TooltipTrigger>
              <span className="text-2xl"><Wand className="h-8 w-8 text-purple-400" /></span>
            </TooltipTrigger>
             <TooltipContent side="right">
                <p>Inteligência Φ</p>
              </TooltipContent>
          </Tooltip>
        </Link>
        <Link href="/phi-tuner" className="mb-4">
          <Tooltip>
            <TooltipTrigger>
              <span className="text-2xl"><Music className="h-8 w-8 text-teal-300" /></span>
            </TooltipTrigger>
             <TooltipContent side="right">
                <p>Afinagem Cósmica</p>
              </TooltipContent>
          </Tooltip>
        </Link>
        <ScrollArea className="w-full">
          <div className="flex flex-col items-center space-y-2">
            {orderedCategories.map(category => (
              <React.Fragment key={category}>
                 <div className="pt-4 pb-2 w-full text-center">
                    <span className="text-xs text-muted-foreground/50">{category.split('&')[0]}</span>
                 </div>
                 {moduleCategories[category].map(({ code, emoji, title, route, isInfrastructure }) => {
                    // Oculta módulos de infraestrutura da navegação principal
                    if (isInfrastructure) return null;
                    
                    const isActive = pathname === route;
                    return (
                        <Tooltip key={code}>
                            <TooltipTrigger asChild>
                            <SafeLink
                                href={route}
                                className={cn(
                                'flex flex-col items-center p-2 rounded-lg transition-colors w-16',
                                isActive
                                    ? 'bg-accent text-accent-foreground'
                                    : 'text-muted-foreground hover:bg-muted/50 hover:text-foreground',
                                !route && 'opacity-50 cursor-not-allowed'
                                )}
                            >
                                <div className="text-2xl">{emoji}</div>
                                <span className="text-xs font-mono">{code.replace('M-','')}</span>
                            </SafeLink>
                            </TooltipTrigger>
                            <TooltipContent side="right">
                            <p>{title}</p>
                            </TooltipContent>
                        </Tooltip>
                    )
                 })}
              </React.Fragment>
            ))}
          </div>
        </ScrollArea>
      </nav>
    </TooltipProvider>
  );
}

    