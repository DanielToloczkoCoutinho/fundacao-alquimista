import { cn } from '@/lib/utils';
import { Beaker, Binary, LayoutDashboard, ScrollText } from 'lucide-react';
import React from 'react';

type HeaderProps = {
  activeTab: string;
};

const tabDetails: { [key: string]: { title: string; description: string; icon: React.ReactNode } } = {
  weaver: {
    title: 'Code Weaver',
    description: 'Interpret and visualize complex code as interactive system diagrams.',
    icon: <Binary className="h-8 w-8 text-primary" />,
  },
  forge: {
    title: 'Cosmic Forge',
    description: 'Generate interconnected scientific, biological, and quantum simulations.',
    icon: <Beaker className="h-8 w-8 text-primary" />,
  },
  codex: {
    title: 'System Codex',
    description: 'Review a log of all generated interpretations and simulations.',
    icon: <ScrollText className="h-8 w-8 text-primary" />,
  },
  luxwood: {
    title: 'Luxwood Dashboard',
    description: 'A multidimensional dashboard for the Alchemist Foundation.',
    icon: <LayoutDashboard className="h-8 w-8 text-primary" />,
  }
};

export default function Header({ activeTab }: HeaderProps) {
  const details = tabDetails[activeTab] || tabDetails.weaver;

  return (
    <header className="flex items-start gap-4">
      <div className="p-2 bg-primary/10 rounded-lg">
        {details.icon}
      </div>
      <div>
        <h1 className="text-2xl md:text-3xl font-bold font-headline text-foreground">{details.title}</h1>
        <p className="text-muted-foreground mt-1 max-w-2xl">{details.description}</p>
      </div>
    </header>
  );
}
