import type { LucideIcon } from 'lucide-react';
import { Book, BrainCircuit, Database, Scroll, KeySquare, Terminal, GitBranch, Sparkles } from 'lucide-react';

export interface Document {
  key: string;
  title: string;
  link?: string;
  description?: string;
  details?: Record<string, string>;
  isProtected?: boolean;
  coordinates?: { lat: number; lng: number };
}

export interface Section {
  id: string;
  title: string;
  icon: LucideIcon;
  documents: Document[];
}

export const sectionsData: Section[] = [
  {
    id: 'console',
    title: 'Mesa do Fundador',
    icon: Terminal,
    documents: [
       { key: 'console', title: 'Console Principal', link: '/console' }
    ]
  },
  {
    id: 'module-zero',
    title: 'Módulo Zero (Biblioteca)',
    icon: Book,
    documents: [
       { key: 'module-zero', title: 'Acessar Módulo Zero', link: '/module-zero' }
    ],
  },
  {
    id: 'module-one',
    title: 'Módulo Um (Segurança)',
    icon: ShieldCheck,
    documents: [
        { key: 'module-one', title: 'Acessar Módulo Um', link: '/module-one' }
    ],
  },
    {
    id: 'connection',
    title: 'Conexão Ω-M0',
    icon: GitBranch,
    documents: [
       { key: 'connection', title: 'Visualizar Conexão', link: '/connection' }
    ]
  },
  {
    id: 'module-303',
    title: 'Portal Trino (M303)',
    icon: Sparkles,
    documents: [
       { key: 'module-303', title: 'Acessar Portal Trino', link: '/module-303' }
    ]
  },
    {
    id: 'pagina-42',
    title: 'Módulo Ω (A Chegada)',
    icon: Infinity,
    documents: [
       { key: 'pagina-42', title: 'Dossiê da Transcendência', link: '/pagina-42' }
    ]
  },
];
