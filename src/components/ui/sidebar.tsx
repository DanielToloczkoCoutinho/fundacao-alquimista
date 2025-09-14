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
import { useEffect, useState } from 'react';

const categories: Record<ModuleMetadata['category'], string> = {
  core: 'Núcleo Central',
  council: 'Governança Cósmica',
  library: 'Bibliotecas',
  mid: 'Módulos de Expansão',
  // Deprecated categories, kept for potential future use or reference
  knowledge: 'Conhecimento',
  governance: 'Governança',
  cosmic_network: 'Rede Cósmica',
  civilization: 'Civilizações',
};

export function Sidebar() {
  const pathname = usePathname();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const groupedModules = modulesMetadata.reduce((acc, module) => {
    const category = module.category || 'mid';
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(module);
    return acc;
  }, {} as Record<string, ModuleMetadata[]>);

  if (!isMounted) {
    return (
      <nav className="fixed top-0 left-0 h-full w-20 bg-background border-r border-border/20 flex flex-col items-center py-4 z-20">
         <div className="mb-4 h-8 w-8 bg-primary/20 rounded-full animate-pulse"></div>
         <div className="flex flex-col items-center space-y-2 w-full px-2">
            {[...Array(10)].map((_, i) => (
              <div key={i} className="h-16 w-16 bg-muted/50 rounded-lg animate-pulse" />
            ))}
         </div>
      </nav>
    );
  }

  return (
    <TooltipProvider delayDuration={0}>
      <nav className="fixed top-0 left-0 h-full w-20 bg-background border-r border-border/20 flex flex-col items-center py-4 z-20">
        <Link href="/console" className="mb-4">
          <Tooltip>
            <TooltipTrigger>
              <span className="text-2xl">🪷</span>
            </TooltipTrigger>
             <TooltipContent side="right">
                <p>Mesa do Fundador</p>
              </TooltipContent>
          </Tooltip>
        </Link>
        <ScrollArea className="w-full">
          <div className="flex flex-col items-center space-y-2">
            {modulesMetadata.map(({ code, emoji, title, route }) => (
              <Tooltip key={code}>
                <TooltipTrigger asChild>
                  <Link
                    href={route}
                    className={cn(
                      'flex flex-col items-center p-2 rounded-lg transition-colors w-16',
                      pathname === route
                        ? 'bg-accent text-accent-foreground'
                        : 'text-muted-foreground hover:bg-muted/50 hover:text-foreground'
                    )}
                  >
                    <div className="text-2xl">{emoji}</div>
                    <span className="text-xs font-mono">{code}</span>
                  </Link>
                </TooltipTrigger>
                <TooltipContent side="right">
                  <p>{title}</p>
                </TooltipContent>
              </Tooltip>
            ))}
          </div>
        </ScrollArea>
      </nav>
    </TooltipProvider>
  );
}
