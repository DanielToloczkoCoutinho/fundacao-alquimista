'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { modulesMetadata } from '@/lib/modules-metadata';
import { cn } from '@/lib/utils';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { ScrollArea } from './scroll-area';

export function Sidebar() {
  const pathname = usePathname();

  return (
    <TooltipProvider delayDuration={0}>
      <nav className="fixed top-0 left-0 h-full w-20 bg-background border-r border-border/20 flex flex-col items-center py-4 z-20">
        <Link href="/console" className="mb-4">
          <span className="text-2xl">🪷</span>
        </Link>
        <ScrollArea className="w-full">
          <div className="flex flex-col items-center space-y-2">
            {modulesMetadata.map(({ code, emoji, title, href }) => (
              <Tooltip key={code}>
                <TooltipTrigger asChild>
                  <Link
                    href={href}
                    className={cn(
                      'flex flex-col items-center p-2 rounded-lg transition-colors w-16',
                      pathname === href
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
