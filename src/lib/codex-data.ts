import type { LucideIcon } from 'lucide-react';
import { Book, BrainCircuit, Database, Scroll } from 'lucide-react';

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
    id: 'pensamento',
    title: 'Pensamento & Equações Vivas',
    icon: Book,
    documents: [],
  },
  {
    id: 'modulos',
    title: 'Módulos & Ação',
    icon: BrainCircuit,
    documents: [],
  },
  {
    id: 'infraestrutura',
    title: 'Infraestrutura Quântica',
    icon: Database,
    documents: [],
  },
  {
    id: 'historia',
    title: 'História Viva',
    icon: Scroll,
    documents: [],
  },
];
