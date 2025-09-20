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
import { mainRoutes, SidebarRoute } from '@/app/sidebar-routes';
import React from 'react';
import { Home } from 'lucide-react';

const SidebarLink = ({ route, pathname }: { route: SidebarRoute, pathname: string | null }) => (
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
);

export function Sidebar() {
  const pathname = usePathname();

  const groupedRoutes = mainRoutes.reduce((acc, route) => {
    const category = route.category;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(route);
    return acc;
  }, {} as Record<string, SidebarRoute[]>);
  
  const orderedCategories = ['main', 'governance', 'security', 'education', 'engineering', 'expansion', 'rituals', 'harmony', 'sustainability', 'labs', 'health'];

  return (
    <TooltipProvider delayDuration={0}>
      <nav className="fixed top-0 left-0 h-full w-20 bg-background border-r border-border/20 flex flex-col items-center py-4 z-20">
        <Link href="/console" className="mb-4">
          <Home className="h-8 w-8 text-primary"/>
        </Link>
        <ScrollArea className="w-full">
          <div className="flex flex-col items-center space-y-2">
            {orderedCategories.map(category => (
              groupedRoutes[category] && (
                <React.Fragment key={category}>
                   <div className="h-px w-8 bg-border/50 my-2" />
                  {groupedRoutes[category].map(route => (
                    <SidebarLink key={route.path} route={route} pathname={pathname} />
                  ))}
                </React.Fragment>
              )
            ))}
          </div>
        </ScrollArea>
      </nav>
    </TooltipProvider>
  );
}
