
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
import { BookHeart } from 'lucide-react';


const categories: Record<ModuleMetadata['category'], string> = {
  core: 'Núcleo Central',
  council: 'Governança Cósmica',
  library: 'Bibliotecas',
  mid: 'Módulos de Expansão',
  sovereignty: 'Soberania Quântica',
};

export function Sidebar() {
  const pathname = usePathname();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const sortedModules = [...modulesMetadata].sort((a, b) => {
      const categoryOrder = { 'core': 1, 'sovereignty': 2, 'library': 3, 'council': 4, 'mid': 5 };
      const orderA = categoryOrder[a.category] ?? 99;
      const orderB = categoryOrder[b.category] ?? 99;

      if (orderA !== orderB) {
        return orderA - orderB;
      }
      
      const codeAIsNum = !isNaN(parseInt(a.code.replace(/\D/g, '')));
      const codeBIsNum = !isNaN(parseInt(b.code.replace(/\D/g, '')));

      if(codeAIsNum && codeBIsNum) {
        return parseInt(a.code.replace(/\D/g, '')) - parseInt(b.code.replace(/\D/g, ''));
      }
      
      return a.code.localeCompare(b.code);
  });

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
              <span className="text-2xl"><BookHeart className="h-8 w-8 text-primary" /></span>
            </TooltipTrigger>
             <TooltipContent side="right">
                <p>Mesa do Fundador</p>
              </TooltipContent>
          </Tooltip>
        </Link>
        <ScrollArea className="w-full">
          <div className="flex flex-col items-center space-y-2">
            {sortedModules.map(({ code, emoji, title, route }) => {
              if (!route) {
                return null;
              }
              const isActive = pathname === route || (pathname.startsWith('/module/') && pathname.endsWith(code));

              return (
              <Tooltip key={code}>
                <TooltipTrigger asChild>
                  <Link
                    href={route}
                    className={cn(
                      'flex flex-col items-center p-2 rounded-lg transition-colors w-16',
                      isActive
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
            )})}
          </div>
        </ScrollArea>
      </nav>
    </TooltipProvider>
  );
}
