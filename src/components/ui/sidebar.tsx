
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
import { mainRoutes } from '@/app/sidebar-routes';
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
  'Governança',
  'Inteligência',
  'Comunicação e Expansão',
  'Rituais',
].filter(cat => moduleCategories[cat]); // Filtra para mostrar apenas categorias que têm módulos visíveis

export function Sidebar() {
  const pathname = usePathname();

  return (
    <TooltipProvider delayDuration={0}>
      <nav className="fixed top-0 left-0 h-full w-20 bg-background border-r border-border/20 flex flex-col items-center py-4 z-20">
        <ScrollArea className="w-full">
          <div className="flex flex-col items-center space-y-2">
            {mainRoutes.map(route => (
              <Tooltip key={route.path}>
                <TooltipTrigger asChild>
                  <Link
                    href={route.path}
                    className={cn(
                      'flex flex-col items-center p-2 rounded-lg transition-colors w-16 h-16 justify-center',
                      pathname === route.path
                        ? 'bg-accent text-accent-foreground'
                        : 'text-muted-foreground hover:bg-muted/50 hover:text-foreground'
                    )}
                  >
                    <div className="text-2xl h-8 w-8 flex items-center justify-center">{route.icon}</div>
                  </Link>
                </TooltipTrigger>
                <TooltipContent side="right">
                  <p>{route.label}</p>
                </TooltipContent>
              </Tooltip>
            ))}
          </div>
        </ScrollArea>
      </nav>
    </TooltipProvider>
  );
}
